'use client'
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { TiSpiral } from "react-icons/ti";
import { DropdownMenuCheckboxes } from "./DropdownMenuCheckboxes";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearch } from "@/store/searchSlice";
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

export default function Navbar() {

    const [inputValue, setInputValue] = useState('')
    const [focus, setFocus] = useState(false)
    const dispatch = useDispatch()


    return (
        <div className="bg-[#F5F4F2] fixed top-0 w-full z-50">
            <div className="border-b border-[#D6D4D1] mx-5">
                <div className="navbar flex items-center justify-between">

                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href={'/'} className="text-6xl"><TiSpiral className="rotate-45" /></Link>
                            {/* input */}
                            <div className="join">
                                <fieldset className="w-full space-y-1">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <button>
                                                <CiSearch className="text-3xl" />
                                            </button>
                                        </span>
                                        <input value={inputValue} onFocus={() => setFocus(true)} type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." className="w-80 h-[3rem] text-base py-2 pl-12  rounded-l-xl rounded-r-none border-2 border-[#FBD800] border-r-0 focus:outline-0 focus:ring-0" />
                                        {focus && inputValue && <span className="absolute inset-y-0 right-0 flex items-center ">
                                            <button onClick={()=> {
                                                setInputValue('')
                                                dispatch(setSearch(''))
                                                }}>
                                                <TbXboxXFilled className="text-2xl mr-2 text-[#00000066] hover:text-black" />
                                            </button>
                                        </span>}
                                    </div>
                                </fieldset>
                                <button onClick={() => dispatch(setSearch(inputValue))} className="btn join-item bg-[#FBD800] border-[#FBD800] rounded-r-xl text-[17px] font-semibold">Search</button>
                            </div>
                            {/* button */}
                            <button className="btn gap-1 bg-[#FBD800] rounded-2xl px-4 text-[16px]">
                                <FaLocationArrow className="text-lg" />
                                Enter delivery address
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <DropdownMenuCheckboxes />
                        <button className="btn bg-[#E5E4E2] border-0 rounded-xl">Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
