import React from "react"
import { Link } from "react-router-dom"
import "./art/art.css"
import "tailwindcss/tailwind.css"

export default () => (
    <div className="h-full overflow-hidden ">
        <div className="max-w-full max-h-full text-4xl flex flex-col items-center no-scrollbar" >
            <h1>
                Welcome to art.
            </h1>
            <Link className="text-red-700 font-bold hover:text-red-900 hover:underline animate-pulse " to="/">Please Leave</Link>
        </div>
    </div>
)