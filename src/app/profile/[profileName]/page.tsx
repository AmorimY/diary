'use client'
import useFetchEntries from "@/app/hooks/useFetchEntries";
import axios from "axios";
import { useEffect, useState } from "react"

async function generateStaticParams() {

}
type UserResponse = {
    user: {
        _id: string;
        name: string;
        email: string;
        created: string;
    };
};
function parseJwt(token: string) {
    if (!token) {
        return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

export default function Home() {
    const [user, setUser] = useState<UserResponse | null>(null); // Estado inicial como null
    let token = localStorage.token
    let decodedToken = parseJwt(token)
    let id = decodedToken.id
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:2000/user/profile/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                setUser(res.data)

            } catch (error) {
                console.log("Erro: ", error)
            }
        }
        fetchUser()
    }, [token])
    let [entries, setEntries] = useFetchEntries(`http://localhost:2000/entries/${id}`)
    console.log(entries)
    if (!user) {
        return <p>Carregando...</p>;
    }
    return (
        <>

            Olá {user?.user.name}
            {entries.map((entry : any) => {
                return (
                    <div key={entry._id}>
                        Sabado : {entry.content}
                    </div>
                );
            })}
        </>
    )
}