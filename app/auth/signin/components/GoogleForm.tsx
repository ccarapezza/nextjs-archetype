"use client";
import React from 'react'
import { signIn } from "next-auth/react"
import { ClientSafeProvider } from "next-auth/react/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function GoogleForm({ provider }: { provider: ClientSafeProvider }) {
    return (
        <button onClick={() => {signIn(provider.id, { callbackUrl: '/' })}}>
            <FontAwesomeIcon icon={faGoogle} /> Sign in
        </button>
    )
}