"use client";
import React from 'react'
import { signIn } from "next-auth/react"
import { LiteralUnion, ClientSafeProvider } from "next-auth/react/types"
import type { BuiltInProviderType } from "next-auth/providers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ProvidersForms({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> } ) {
    const searchParams = useSearchParams();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        if(searchParams.get("error")){
            setError(searchParams.get("error")!);
        }
    }, [setError, searchParams])
    
    return (<>
        {error?"Usuario y/o contraseña incorrectos":""}
        {providers && Object.values(providers).map((provider) => (
            <div key={provider?.name}>
                {provider.id === "google"&&<div>
                    <button onClick={() => {signIn(provider.id, { callbackUrl: '/' })}}>
                        <FontAwesomeIcon icon={faGoogle} /> Sign in with {provider.name}
                    </button>
                </div>}

                {provider.id === "credentials"&&<div>
                    <label>
                        Username
                        <input name="username" type="text" value={username} onChange={(e)=>{setUsername(e?.target?.value); setError("")}}/>
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" value={password} onChange={(e)=>{setPassword(e?.target?.value); setError("")}}/>
                    </label>
                    <button onClick={() => {signIn(provider.id, { username: username, password: password })}} disabled={!username||!password?true:false}>
                        <FontAwesomeIcon icon={faKey} /> Sign in with {provider.name}
                    </button>
                </div>}

                {provider.id !== "google"&&provider.id !== "credentials"&&<div>
                    <button onClick={() => {signIn(provider.id, { callbackUrl: '/' })}}>
                        Sign in with {provider.name}
                    </button>
                </div>}
            </div>
        ))}
    </>)
}
