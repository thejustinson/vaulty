'use client'

import { useState } from "react"

const Form = () => {
    const [username, setUsername] = useState<String>('')
    const [password, setPassword] = useState<String>('')

    const handleSubmit = () => {
        console.log(username, password)
    }

  return (
    <div className="w-full px-10 md:w-[350px] lg:w-[400px]">
      <h1 className="text-3xl mb-5 font-semibold">
        Login
      </h1>

      <div className="w-full flex flex-col gap-y-3">
        <div className="w-full">
            <label htmlFor="username" className="text-sm">Username</label>
            <input 
                id="username" 
                className="w-full bg-neutral-900 outline-none border border-neutral-700 rounded px-3 py-2 focus:border-blue-600 duration-200"
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />
        </div>
        <div className="w-full">
            <label htmlFor="password" className="text-sm">Password</label>
            <input 
                id="password" 
                className="w-full bg-neutral-900 outline-none border border-neutral-700 rounded px-3 py-2 focus:border-blue-600 duration-200"
                type="password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
        </div>

        <button 
            className="bg-blue-700 hover:bg-blue-800 duration-200 rounded py-3 mt-2 active:scale-90"
            onClick={handleSubmit}
        >
            Login
        </button>

        <p className="text-neutral-500 text-sm">By logging in, you agree that this is a test project and it is only for test purposes.</p>
      </div>
    </div>
  )
}

export default Form
