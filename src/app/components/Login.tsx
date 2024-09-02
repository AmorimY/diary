"use client";
import { ChangeEvent, useState } from "react";
import LoginButton from "./LoginButton";

export default function Login() {

    const [sendingData, setSendingData] = useState({
        name: "",
        password: "",
    });

    const handlerChangeEmail = (e: any) => {
        const value = e.target.value;
        setSendingData({
            ...sendingData,
            name: value,
        });    
    };

    function handlerChangepassword(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        setSendingData({
            ...sendingData,
            password: value,
        });    
    }



    return (
        <div>
            <form>
                Email
                <input
                    className="text-black"
                    type="text"
                    name="email"
                    value={sendingData.name}
                    id="email"
                    onChange={handlerChangeEmail}
                />
                Password
                <input
                    className="text-black"
                    type="password"
                    name="password"
                    value={sendingData.password}
                    id="password"
                    onChange={handlerChangepassword}
                />
                <LoginButton description={"Login"} sendingData={sendingData}/>
            </form>
        </div>
    );
}
