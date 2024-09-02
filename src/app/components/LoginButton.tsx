"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginButton({ sendingData, description}: any) {

    const router = useRouter();

    function handleClick(e: any) {
        e.preventDefault()
            axios
                .post("http://localhost:2000/user/login", sendingData)
                .then((response) => {
                    console.log(response.data)
                    let token = response.data.token
                    let name = 'user'
                    localStorage.token = token
                    
                    //console.log(token)
                    router.push(`/profile/${name}`);
                })
                .catch((error) => {
                    console.log(error)
                });
    }

    return <button onClick={handleClick}>{description}</button>;
}
