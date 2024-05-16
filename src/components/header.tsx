"use client"

import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState<boolean>(false)
    const [detailCompany , setDetailCompany] = useState<boolean>(false)
    const handleClick = () => {
        setActive(!active)
    }
    const detailCompanyClick = () => {
        setDetailCompany(!detailCompany)
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
                    active ? "z-40 bg-gray-500/50 fixed top-0 right-0 bottom-0 left-0  flex flex-col" : "fixed right-[-100%] md:right-4"
                }>
                    <ul className={active
                        ? "flex mt-20 justify-center items-center flex-col text-xl divide-y-2"
                        : "hidden"}>
                        <li className="w-full px-20">
                            <div className="block">
                                <h2 className="">会社を知る<button onClick={detailCompanyClick}>押す</button></h2>
                                <ul className={detailCompany ? "block bg-black py-0 my-0" : "hidden"}>
                                    <li>魅力</li>
                                    <li>あああ</li>
                                </ul>
                            </div>
                        </li>
                        <li className="w-full px-20">テスト2</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header