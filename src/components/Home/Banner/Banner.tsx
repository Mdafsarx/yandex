import { IoStar } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";

export default function Banner() {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dz1fy2tof/image/upload/v1735203578/amin-ramezani-j1S4cckG-9s-unsplash_dpsahp.jpg')] bg-no-repeat bg-cover bg-center object-fill rounded-3xl min-h-[47vh] w-full">
            <div className="p-12 space-y-3.5 bg-gradient-to-r from-[#00000066] via-[#0000004D] to-[#00000000] rounded-3xl min-h-[47vh] w-full flex flex-col justify-end">
                <h3 className="text-[42px] font-semibold text-white">KFC Dostyk Plaza</h3>
                <div className="flex items-center gap-3">
                    <button className="btn h-14 gap-3 rounded-2xl bg-[#EFEEEEE6] border-0">
                        <IoStar className="text-2xl"/>
                        <div>
                            <h4 className="text-xl font-semibold text-start">4</h4>
                            <p className="opacity-50">200+</p>
                        </div>
                    </button>
                    <section id="what-new">
                        <button className="btn h-14 rounded-2xl bg-[#EFEEEEE6] border-0">
                            <PiWarningCircleBold className="text-3xl"/>
                        </button>
                    </section >
                </div>
            </div>
        </div>
    )
}
