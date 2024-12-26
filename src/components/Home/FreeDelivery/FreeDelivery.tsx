import { FaGift } from "react-icons/fa6";

export default function FreeDelivery() {
    return (
        <div className="bg-[#E4F2DC] rounded-2xl w-full p-4 flex items-center gap-3">
            <div className="bg-[#46C000] size-11 flex items-center justify-center text-white rounded-full">
                <FaGift className="text-2xl" />
            </div>
            <p className="text-[#46C000] opacity-80 text-[17px]">Free delivery – on any order</p>
        </div>
    )
}
