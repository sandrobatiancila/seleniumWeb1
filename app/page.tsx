export default function MainPage() {
    return <div className=" w-full">
        <div className=" bg-amber-50 p-2">
            <a href="/calculator" className=" hover:bg-amber-100 text-black">
                <span>Calculator</span>
            </a>
            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <a href="/ecomm" className=" hover:bg-amber-100 text-black">
                <span>Ecomm</span>
            </a>
        </div>
        <p>Welcome</p>
    </div>
}
