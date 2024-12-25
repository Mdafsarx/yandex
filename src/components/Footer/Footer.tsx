import { FaApple, FaVk } from "react-icons/fa6";
import { Button } from "../ui/button";
import { FaGooglePlay } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    return (
        <div className="bg-[#f9f9f9]">
            
            <footer className="footer py-20">
                <div className="space-y-3.5 max-w-7xl w-full mx-auto">
                    <h1 className="text-xl font-semibold text-black">Even easier in the app</h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center rounded-[10px] gap-2 w-32 h-[2.3rem] border border-gray-400 pr-2">
                            <FaApple className="text-2xl text-[#6e6e6e]" />
                            <span className="text-sm text-gray-600 font-medium -mb-0.5">App store</span>
                        </button>
                        <button className="flex items-center justify-center rounded-[10px] gap-2 w-32 h-[2.3rem] border border-gray-400 pr-2">
                            <FaGooglePlay className="text-xl text-[#6e6e6e]" />
                            <span className="text-xs text-gray-700 font-medium -mb-0.5 uppercase">Play store</span>
                        </button>
                    </div>
                </div>
            </footer>

            <footer className="footer pt-10 pb-14 border-base-300 border-t">
                <div className="flex justify-end max-w-7xl w-full mx-auto">
                    <div className="space-y-8">
                        <h6 className="text-black opacity-70 text-lg font-semibold">Company information</h6>
                        <nav className="flex items-center gap-4 text-sm opacity-50 font-medium">
                            <a href="">User agreement</a>
                            <a href="">Contacts</a>
                            <a href="">Delivery</a>
                            <a href="">FAQ</a>
                            <a href="">Become a partner</a>
                            <a href="">Become a courier</a>
                            <a href="">Eats for Business</a>
                        </nav>
                        <nav className="flex items-center gap-4 text-sm opacity-50 font-medium">
                            <a href="">Plastic recycling</a>
                            <a href="">Order food in the Yandex Go app</a>
                            <a className="flex items-center gap-1"><TfiEmail className="text-lg" />Feedback</a>
                        </nav>
                    </div>
                </div>
            </footer>

            <footer className="footer text-base-content border-base-300 border-t py-10">
                <div className="flex items-center justify-between max-w-7xl w-full mx-auto font-medium">
                    <p className="opacity-50">© 2018–2024 Yandex Eats LLC</p>
                    <p className="flex items-center gap-2"><span className="opacity-50">Project for Yandex </span><FaVk className="text-3xl text-[#5276a4]" /></p>
                </div>
            </footer>

        </div>
    )
}
