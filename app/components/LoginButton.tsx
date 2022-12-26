"use client";

import { faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>
          <FontAwesomeIcon icon={faSignOut}/> Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <p style={{textAlign: "center"}}>Not signed in</p>
      <button onClick={() => signIn()}>
        <FontAwesomeIcon icon={faSignIn}/> Sign in
      </button>
      <p>
        <small>Haven't an account? <Link href={'/auth/register'}>Sign Up</Link></small>
      </p>
    </>
  );
}