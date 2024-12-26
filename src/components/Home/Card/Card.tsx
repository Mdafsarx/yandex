export default function Card() {
    return (
        <div>
            <div className="bg-base-100 shadow-xl rounded-3xl">
                <figure className="px-3 pt-3">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-2xl w-full h-40" />
                </figure>
                <div className="px-4 py-3">
                    <h2 className="text-2xl font-medium">1700$</h2>
                    <p>Burger with</p>
                    <button className="btn w-full mt-12 rounded-2xl">+ Add</button>
                </div>
            </div>
        </div>
    )
}
