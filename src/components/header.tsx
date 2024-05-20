"use client"
import clsx from 'clsx'
import { useState, useRef, type FC } from "react"

const Header = () => {
    const [contentHeight, setContentHeight] = useState(0)
    const [active, setActive] = useState<boolean>(false)
    const [detailCompany, setDetailCompany] = useState<boolean>(false)
    const childElement = useRef<HTMLDivElement>(null)

    // ハンバーガーをクリック
    const handleClick = () => {
        setActive(!active)
    }
    // アコーディオンクリック
    const onClickAccordionToggle = () => {
        if (childElement.current) {
            const firstChild = childElement.current.firstChild as HTMLElement
            const childHeight = firstChild.clientHeight
            setContentHeight(childHeight)
            setDetailCompany(!detailCompany)
        }
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
                                <h2 className="">会社を知る<button onClick={onClickAccordionToggle}>押す</button></h2>
                                <div
                                    className={clsx("block bg-gray-500/15 py-0 my-0 transition-[height] duration-1000 ease-linear")}
                                    ref={childElement}
                                    style={{
                                        height: detailCompany ? `${contentHeight}px` : '0px'
                                    }}
                                >
                                    <div className={clsx(
                                        'transition-all duration-100',
                                        {
                                            'opacity-100': detailCompany,
                                            'opacity-0': !detailCompany
                                        }
                                    )}>
                                        <p className={
                                            clsx(
                                                'transition-all duration-100',
                                                {
                                                    'opacity-100': detailCompany,
                                                    'opacity-0': !detailCompany
                                                }
                                            )
                                        }>aaaa</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header