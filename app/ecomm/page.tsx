import { ProductDTO } from "../dto/product.dot"

export default function EcommPage() {
    const prodcuts: ProductDTO[] = [
        {
            name: "Hansel",
            price: 5,
            quantity: 5
        },
        {
            name: "Fita",
            price: 5,
            quantity: 5
        },
        {
            name: "Cracklings",
            price: 5,
            quantity: 5
        },
        {
            name: "Oishi",
            price: 5,
            quantity: 5
        },
    ];
    const onView = () => {

    }
    const onPurchase = () => {

    }

    return <div>
        <div className=" flex justify-end">
            <p className=" border rounded-full w-xs bg-amber-300 text-center">Cart (0)</p>
        </div>
        <div className=" border-2 rounded-full w-xs bg-amber-300 text-center">
            <span className=" text-black">Product Listing</span>
        </div>
        <div className=" grid grid-cols-3 gap-2 p-2">
            {
                prodcuts?.map((product, i) => (
                    <div key={i} className=" container bg-gray-50 w-md rounded-md p-2">
                        <p className=" text-gray-500">Name: {product.name}</p>
                        <p className=" text-gray-500">Price: {product.price}</p>
                        <p className=" text-gray-500">Quantity: {product.quantity}</p>
                        <div className=" mt-2" />
                        <div className=" grid grid-cols-2 gap-2">
                            <button className=" rounded-full bg-cyan-700 cursor-pointer p-1"
                            onClick={onView}>View</button>
                            <button className=" rounded-full bg-teal-700 cursor-pointer p-1"
                            onClick={onPurchase}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}
