"use client";
import React from 'react'
import { signIn } from "next-auth/react"
import { LiteralUnion, ClientSafeProvider } from "next-auth/react/types"
import type { BuiltInProviderType } from "next-auth/providers";
import CredentialsForm from './CredentialsForm';
import GoogleForm from './GoogleForm';
import Link from 'next/link';

export default function ProvidersForms({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> } ) {
    return (<>
        <div>
            <h1>Sign in</h1>
        </div>
        <hr/>
        {providers && Object.values(providers).map((provider) => (
            <div key={provider?.name}>
                <p><small>Provider: <b>{provider?.name}</b></small></p>
                <div>
                    {(() => {
                        switch (provider?.id) {
                        case 'google':
                            return <GoogleForm provider={provider} />;
                        case 'credentials':
                            return <CredentialsForm provider={provider} />
                        default:
                            return <button onClick={() => {signIn(provider.id, {callbackUrl: '/'})}}>Sign in with {provider.name}</button>
                        }
                    })()}
                </div>
                <hr/>
            </div>
        ))}
        <small><Link href={'/'}>Back to HOME</Link></small>
    </>)
}
