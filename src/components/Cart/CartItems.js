import React from 'react';

export default function CartItems({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, deleteProduct } = value;
    return (
        <div className="row my-2 text-capitalize text-center border-bottom">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{ width: '10rem', height: '10rem' }} className="img-fluid" alt="products" />
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <span className="font-weight-bold d-lg-none">product : </span>
                    {title}
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <span className="font-weight-bold d-lg-none">price : </span>
                    {price}
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 m-lg-auto">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                        -
                    </span>
                    <span className="counter mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                        +
                    </span>
                </div>
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <strong>
                    product total : ${total}
                </strong>
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <span className="cart" onClick={() => deleteProduct(id)}>
                    <i className="fas fa-trash" />
                </span>
            </div>
        </div>
    )
}
