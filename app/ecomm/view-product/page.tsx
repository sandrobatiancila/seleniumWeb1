'use client';
import { useSearchParams } from "next/navigation"

export default function ViewProduct() {
    const param = useSearchParams();
    console.log(`param ...`);
    console.log(param);
    
    return <div className=" p-2 font-sans">
        <section className=" flex justify-between">
            <div>
                <p>Viewing prodcut</p>
            </div>
            <div>
                <button className=" border border-amber-300 rounded p-2 bg-amber-400 cursor-pointer hover:bg-amber-500 hover:border-amber-300">Back</button>
            </div>
        </section>
        <section className=" flex">
            <div className=" container grid grid-cols-2 border p-2 border-gray-300 w-[50%] rounded-sm bg-white hover:shadow-lg hover:cursor-pointer text-black">
                <div>
                    <p>Name: <span>{param.get("name")}</span></p>
                    <p>Price: <span>{param.get("price")}</span></p>
                    <p>Quantity: <span>{param.get("quantity")}</span></p>
                </div>
                <div className=" w-full">
                    <button className=" border bg-teal-700 cursor-pointer p-1 rounded-full">Add to cart</button>
                </div>
            </div>
            <div>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
                <p>Description</p>
            </div>
        </section>
    </div>
}
