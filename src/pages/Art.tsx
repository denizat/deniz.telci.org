import React from "react"
import { Link } from "react-router-dom"
import "./art/art.css"
import "tailwindcss/tailwind.css"

export default () => (
    <div className="h-full overflow-hidden ">
        <div className="max-w-full max-h-full overflow-y-scroll text-4xl flex flex-col items-center no-scrollbar" >
            <h1>
                Welcome to art.
            </h1>
            <Link className="text-red-700 font-bold hover:text-red-900 hover:underline animate-pulse " to="/">Please Leave</Link>
            <div className='h-screen ' />
            <div>
                # Among Us is Sus<br /><br />

                There is someone sus among us.<br />
                Who will catch the imposter among us.<br />
                They are sus.<br />
                You seem kind of sus.<br />
                Are you the imposter among us?<br />

            </div>
        </div>
    </div>
)