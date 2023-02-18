import Cart_Item from "./Cart_Item"
import Main_Layout from "../layouts/main_layout"

const products = [
    {
        "name": "Iphone 14 Pro",
        "price": "49000",
        "qty": "25",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=364&hei=333&fmt=png-alpha&.v=1663346233360"
    },
    {
        "name": "Iphone 13",
        "price": "29000",
        "qty": "50",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone13-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644988765122"
    },
    {
        "name": "Iphone SE",
        "price": "17900",
        "qty": "45",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphonese-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579761"
    },
    {
        "name": "Iphone 12",
        "price": "24900",
        "qty": "12",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000"
    },
    {
        "name": "Iphone 14",
        "price": "32900",
        "qty": "10",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813794"
    },
]

const Cart_Page = () => {
    return (
        <div>
            <Main_Layout />
            <h1 className="font-bold text-blue-700 mx-36 mt-2 text-3xl">Props</h1>
            <div className="p-4 max-w-7xl mx-auto">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {
                    products.map((product, index) => {
                        return ( 
                            <Cart_Item  key={index} product={product} />
                        )
                    })
                }
            </div>

        </div>
        </div>
    )
}

export default Cart_Page