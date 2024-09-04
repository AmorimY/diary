import 'server-only'
import { cookies } from "next/headers";
export default async function createSession(userId : string){

    cookies().set({
        name: 'name',
        value: "teste",
        httpOnly: true,
        path: '/',
      })
}