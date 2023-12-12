import { MouseEventHandler } from "react"

const Button = ( {operation, func, identifier}: {operation: string | number, func: MouseEventHandler, identifier?: string} ) => {

    return (
        <button className="border-2 border-zinc-500 rounded-xl font-bold text-4xl text-zinc-100" id={identifier} onClick={func}>
            {operation}
        </button>
    )
}

export default Button