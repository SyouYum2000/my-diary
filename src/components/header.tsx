"use client"

import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState<boolean>(false)
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <>
            <div className="w-full h-20 px-10 bg-sky-200 flex justify-end items-center">
                <button
                    className="z-50 border-none space-y-2"
                    onClick={handleClick}
                >
                    <span className={active
                        ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                        : "block w-8 h-0.5 bg-gray-600 duration-300"} />
                    <span className={
                        active ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
                    } />
                    <span className={
                        active
                            ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-600 duration-300"
                    } />
                </button>

                <nav className={
                    active ? "z-40 bg-gray-500/50 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col" : "fixed right-[-100%] md:right-4"
                }>
                    <ul className={active
                        ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
                        : "hidden"}>
                        <li>テスト1</li>
                        <li>テスト2</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header