import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";
import { TiSpiral } from "react-icons/ti";

export default function Navbar() {
    return (
        <div>
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
                        <label className="input input-bordered flex items-center gap-2 w-80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        {/* button */}
                        <button className="btn gap-1 bg-[#FBD800] rounded-2xl px-4 text-[16px]">
                            <FaLocationArrow className="text-lg" />
                            Enter delivery address
                        </button>
                    </div>

                </div>


                <div className="flex items-center gap-3">
                    <div className="dropdown dropdown-left">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <button className="btn bg-[#E5E4E2] border-0">Login</button>
                </div>

            </div>
        </div>
    )
}
