import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
    const { subTotal, tax, total, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                        <Link to="/">
                            <Button details type="button" className="text-capitalize mb-3 px-5" onClick={() => clearCart()}>
                                clear cart
                            </Button>
                        </Link>
                        <div className="mt-3">
                            <h3>
                                <span> subtotal : </span>
                                <strong>$ {subTotal}</strong>
                            </h3>
                            <h3>
                                <span> tax : </span>
                                <strong>$ {tax}</strong>
                            </h3>
                            <h3>
                                <span> total : </span>
                                <strong>$ {total}</strong>
                            </h3>
                            <PayPalButton total={total} clearCart={clearCart} history={history} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
