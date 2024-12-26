import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
import { TiSpiral } from "react-icons/ti";
import { DropdownMenuCheckboxes } from "./DropdownMenuCheckboxes";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
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
                            <label className="input input-bordered flex items-center gap-2 w-80 rounded-xl border-2">
                                <CiSearch className="text-3xl"/>
                                <input type="text" className="grow" placeholder="Search your title" />
                            </label>
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
