"use client"
import Banner from "@/components/Home/Banner/Banner";
import Card from "@/components/Home/Card/Card";
import FreeDelivery from "@/components/Home/FreeDelivery/FreeDelivery";
import { setSection } from "@/store/sectionSlice";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Chat from "@/components/Chat/Chat";
import { setSearch } from "@/store/searchSlice";

interface FoodType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  title: string;
}

interface reduxSection {
  section: { section: string };
}
interface reduxSearch {
  search: { search: string };
}


export default function Home() {

  const [activeSection, setActiveSection] = useState("");
  const section = useSelector((state: reduxSection) => state.section.section)
  const search = useSelector((state: reduxSearch) => state.search.search)
  const dispatch = useDispatch();

  const { data, refetch } = useQuery({
    queryKey: ['foods', search],
    queryFn: async () => {
      const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/foods?search=${search}`)
      const data = await res.data;
      return data;
    }
  })

  const scrollToSection = (id: string) => {
    dispatch(setSearch(''))
    dispatch(setSection(id))
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (id && top >= offset && top < offset + height) {
          dispatch(setSection(''))
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);


  return (
    <div className="flex gap-8 max-w-7xl mx-auto">
      <Chat />

      {/* left side bar */}
      <aside className="w-64 h-[calc(100vh-80px)] sticky top-20 p-5 pt-8 space-y-9">
        <button className="btn flex justify-start gap-2 bg-white w-full text-[16px] font-semibold rounded-2xl"><FaArrowLeft />All restaurants</button>
        <ul className="space-y-1.5">
          <h3 className="text-xl font-semibold pl-3 pb-1">Menu{search}</h3>
          <li>
            <button onClick={() => scrollToSection('what-new')} className={section === 'what-new' || activeSection === 'what-new'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>What's new
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Solo-buckets')} className={section === 'Solo-buckets' || activeSection === 'Solo-buckets'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Solo buckets
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Combos')} className={section === 'Combos' || activeSection === 'Combos'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Combos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Boxes')} className={section === 'Boxes' || activeSection === 'Boxes'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Boxes
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Burgers-and-sandwiches')} className={section === 'Burgers-and-sandwiches' || activeSection === 'Burgers-and-sandwiches'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Burger & sandwich
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Combo-buckets')} className={section === 'Combo-buckets' || activeSection === 'Combo-buckets'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Combo buckets
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Juicy-chicken')} className={section === 'Juicy-chicken' || activeSection === 'Juicy-chicken'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Juicy chicken
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Snacks')} className={section === 'Snacks' || activeSection === 'Snacks'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Snacks
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Drinks')} className={section === 'Drinks' || activeSection === 'Drinks'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Drinks
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('Extras')} className={section === 'Extras' || activeSection === 'Extras'
              ? "bg-white text-start p-2.5 pl-3.5 w-full font-semibold rounded-2xl shadow-sm"
              : "pl-3.5 p-2.5 font-medium hover:bg-white hover:text-start hover:w-full hover:font-semibold hover:rounded-2xl hover:shadow-sm"}>Extras
            </button>
          </li>
        </ul>
      </aside>

      {/* main content */}
      <main className="grow overflow-y-auto py-8 w-[calc(100%-565px)]">
        {
          search
            ? <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Result of "{search}"</h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                {
                  data?.map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                    title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                }
              </div>
            </div>
            : <div className="space-y-8">
              <Banner />
              <FreeDelivery />
              {/* food items card */}
              {/* Solo buckets */}
              <section id="Solo-buckets" className="space-y-6">
                <h3 className="text-3xl font-semibold">Solo buckets</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Solo buckets').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Combos */}
              <section id="Combos" className="space-y-6">
                <h3 className="text-3xl font-semibold">Combos</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Combos').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Boxes */}
              <section id="Boxes" className="space-y-6">
                <h3 className="text-3xl font-semibold">Boxes</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Boxes').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Burgers and sandwiches */}
              <section id="Burgers-and-sandwiches" className="space-y-6">
                <h3 className="text-3xl font-semibold">Burgers and sandwiches</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Burgers and sandwiches').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Combo buckets */}
              <section id="Combo-buckets" className="space-y-6">
                <h3 className="text-3xl font-semibold">Combo buckets</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Combo buckets').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Juicy chicken */}
              <section id="Juicy-chicken" className="space-y-6">
                <h3 className="text-3xl font-semibold">Juicy chicken</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Juicy chicken').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Snacks */}
              <section id="Snacks" className="space-y-6">
                <h3 className="text-3xl font-semibold">Snacks</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Snacks').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Drinks */}
              <section id="Drinks" className="space-y-6">
                <h3 className="text-3xl font-semibold">Drinks</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Drinks').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

              {/* Extras */}
              <section id="Extras" className="space-y-6">
                <h3 className="text-3xl font-semibold">Extras</h3>
                <div className="grid grid-cols-3 gap-x-2 gap-y-8">
                  {
                    data?.filter((item: FoodType) => item.category === 'Extras').map((item: FoodType, i: number) => <Card key={i} img={item?.image}
                      title={item?.title?.split(' ').slice(0, 3).join(' ')} price={item?.price} />)
                  }
                </div>
              </section>

            </div>
        }
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
          <div className="flex items-center gap-2.5 border-t border-[#B7B7B6] pt-3">
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
