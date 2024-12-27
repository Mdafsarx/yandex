"use client"
import Banner from "@/components/Home/Banner/Banner";
import Card from "@/components/Home/Card/Card";
import FreeDelivery from "@/components/Home/FreeDelivery/FreeDelivery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

interface FoodType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  title: string;
}

interface CardProps {
  key: number,
  items: FoodType
}


export default function Home() {

  const ans: string = '/'

  const { data } = useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/foods`)
      const data = await res.data;
      return data;
    }
  })



  return (
    <div className="flex gap-8 max-w-7xl mx-auto">

      {/* left side bar */}
      <aside className="w-64 h-[calc(100vh-80px)] sticky top-20 p-5 pt-8 space-y-12">
        <button className="btn flex justify-start gap-2 bg-white w-full text-[16px] font-semibold rounded-2xl"><FaArrowLeft />All restaurants</button>
        <ul className="space-y-5">
          <h3 className="text-xl font-semibold pl-3">Menu {data?.length}</h3>
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
          {/* food items card */}
          {/* Solo buckets */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Solo buckets</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Solo buckets').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Combos */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Combos</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Combos').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Boxes */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Boxes</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Boxes').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Burgers and sandwiches */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Burgers and sandwiches</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Burgers and sandwiches').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Combo buckets */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Combo buckets</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Combo buckets').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Juicy chicken */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Juicy chicken</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Juicy chicken').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Snacks */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Snacks</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Snacks').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Drinks */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Drinks</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Drinks').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
          </div>

          {/* Extras */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Extras</h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-8">
              {
                data?.filter((item: FoodType) => item.category === 'Extras').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                 title={item?.title?.split(' ').slice(0,3).join(' ')} price={item?.price} />)
              }
            </div>
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
