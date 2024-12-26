import Banner from "@/components/Home/Banner/Banner";
import Card from "@/components/Home/Card/Card";
import FreeDelivery from "@/components/Home/FreeDelivery/FreeDelivery";
import { FaArrowLeft } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export default function Home() {

  const ans: string = '/'

  return (
    <div className="flex gap-8 max-w-7xl mx-auto">

      {/* left side bar */}
      <aside className="w-64 h-[calc(100vh-80px)] sticky top-20 p-5 pt-8 space-y-12">
        <button className="btn flex justify-start gap-2 bg-white w-full text-[16px] font-semibold rounded-2xl"><FaArrowLeft />All restaurants</button>
        <ul className="space-y-5">
          <h3 className="text-xl font-semibold pl-3">Menu</h3>
          <li>
            <button className={ans === '/'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-semibold"}>What's new
            </button>
          </li>
          <li>
            <button className={ans === '/1'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Solo buckets
            </button>
          </li>
          <li>
            <button className={ans === '2'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Combos
            </button>
          </li>
          <li>
            <button className={ans === '/3'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Boxes
            </button>
          </li>
          <li>
            <button className={ans === '4'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Burgers and sandwiches
            </button>
          </li>
          <li>
            <button className={ans === '5'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Combo buckets
            </button>
          </li>
          <li>
            <button className={ans === '6'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Juicy chicken
            </button>
          </li>
          <li>
            <button className={ans === '/7'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Snacks
            </button>
          </li>
          <li>
            <button className={ans === '/8'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Drinks
            </button>
          </li>
          <li>
            <button className={ans === '/9'
              ? "bg-white text-start p-3 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 font-medium"}>Extras
            </button>
          </li>
        </ul>
      </aside>
      {/* main content */}
      <main className="grow overflow-y-auto py-8 w-[calc(100%-562px)]">
        <div className="space-y-8">
          <Banner />
          <FreeDelivery />
          <div className="grid grid-cols-3 gap-x-2 gap-y-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      {/* right side bar */}
      <aside className="w-[19rem] h-[calc(100vh-80px)] sticky top-20 pt-8">
        <div className="bg-white w-full h-full p-5 rounded-t-3xl">
          {/* title */}
          <h3 className="text-2xl font-semibold">Cart</h3>
          {/* empty card */}
          <div className="flex flex-col items-center justify-center h-[84%]">
            <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1735190604/empty-folder_1_zsbsjt.png" className="size-32" alt="" />
            <p className="text-[21px] font-bold text-center">Your cart is currently <br />empty</p>
          </div>
          {/* out of delivery zone */}
          <div className="flex items-center gap-3 border-t border-[#B7B7B6] pt-3">
            <div className="bg-[#D2D2D299] size-12 flex items-center justify-center rounded-2xl">
              <TbTruckDelivery className="text-3xl" />
            </div>
            <p className="text-sm text-red-500">Out of delivery zone</p>
          </div>
        </div>
      </aside>

    </div>
  );
}
