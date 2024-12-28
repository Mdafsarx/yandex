type CardProps = {
    img: string;
    price: number;
    title: string;
}

export default function Card({ img, price, title }: CardProps) {
    return (
        <div>
            <div className="bg-white rounded-3xl h-[22rem]">
                <figure className="px-3 pt-3">
                    <img
                        src={'https://eda.yandex/images/1472406/c3253b1d07ecdbd5ea28426e6fcd2f03-300x300.jpeg'}
                        alt={title}
                        className="rounded-2xl w-full h-40" />
                </figure>
                <div className="px-4 py-3 flex flex-col justify-between h-[11.1rem]">
                    <div>
                        <h2 className="text-2xl font-medium">{price}$</h2>
                        <p>{title}</p>
                    </div>
                    <button className="btn w-full rounded-2xl text-[17px] mt[3.2rem]">+ Add</button>
                </div>
            </div>
        </div>
    )
}
