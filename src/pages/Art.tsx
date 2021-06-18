import React from "react"
import { Link } from "react-router-dom"
import "tailwindcss/tailwind.css"

export default () => (
    <div className="text-4xl">
        <div>
            Welcome to art.
        </div>
        <Link className="text-red-700 font-bold hover:text-red-900 hover:underline animate-pulse" to="/">Please Leave</Link>
        <div className='h-screen' />
        <div>
            # Among Us is Sus<br /><br />

            There is someone sus among us.<br />
            Who will catch the imposter among us.<br />
            They are sus.<br />
            You seem kind of sus.<br />
            Are you the imposter among us?<br />

        </div>
    </div>
)