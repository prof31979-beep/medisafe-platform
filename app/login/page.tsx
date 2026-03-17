"use client"

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleLogin = async (e:any) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(auth,email,password)

      router.push("/dashboard")

    } catch(err:any) {

      setError(err.message)

    }

  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-black">

      <div className="bg-zinc-900 p-8 rounded-xl w-[350px]">

        <h1 className="text-white text-2xl mb-6 text-center">
          MEDISAFE Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 text-white"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded text-white"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  )

}