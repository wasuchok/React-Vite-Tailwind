

const Cart_Item = (props) => {

    console.log(props.product)
    const { name, price, qty, image } = props.product
    
    return (
        <>
        
            <div className="mt-7 mx-24">
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src={ image } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{ name }</h2>
                        <p>Price { price } Bath</p>
                        <p>คงเหลือ { qty } ชิ้น</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cart_Item