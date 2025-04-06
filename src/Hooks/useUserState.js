import { useState, useRef } from "react";

export function useUserState(){
   
    const [error, seterror] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const login = (email, password) => {
        if (email === "admin" && password === "1234") {        
            return true;
        }
            return false;
    };

    
    return {error,emailRef, passwordRef, login,  seterror}
}
