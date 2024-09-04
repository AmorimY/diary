import { cookies } from "next/headers"
import createSession from "../lib/session"

export default function Home() {
    
    let cookieStore = cookies()
    console.log(createSession("teste"))
    return (
        <>
        { cookieStore.getAll().map((cookie : any) => { 
            <div key={cookie}>
                <p>{cookie.name}</p>
            </div>
        }) }
        </>
    )
}