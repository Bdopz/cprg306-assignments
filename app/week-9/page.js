"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Layout() {
  
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
    return (
        <main>
            {user === null ?
                <div className="w-fit mx-auto">
                    <button className="bg-blue-500 py-2 px-5 mt-20 rounded-sm hover:cursor-pointer hover:bg-blue-400" onClick={() => gitHubSignIn()}>Login</button>
                </div>
            :
                <div className="w-fit mx-auto flex flex-col mt-10">
                    <h1 className="font-bold text-2xl">Welcome, {user.displayName} ({user.email})</h1>
                    <Link href="week-9/shopping-list" className="w-fit mx-auto bg-blue-500 py-2 px-5 mt-20 rounded-sm hover:cursor-pointer hover:bg-blue-400">Shopping List</Link>
                    <button className="w-fit mx-auto bg-blue-500 py-2 px-5 mt-2 rounded-sm hover:cursor-pointer hover:bg-blue-400" onClick={() => firebaseSignOut()}>Sign out</button>
                </div>
            }
        </main>
    )
}