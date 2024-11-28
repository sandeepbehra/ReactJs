import React from 'react'

function Home(props) {
    return (
        <div>

            <h1>Home Component</h1>
           <div className="cart-items">
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-illustration-600nw-1726574749.jpg"/>
           </div>

         



            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cak' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span><br></br>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home