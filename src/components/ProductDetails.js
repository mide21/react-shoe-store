import React, { Component } from 'react';
import { MainConsumer } from '../Main';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

export default class ProductDetails extends Component {
    render() {
        return (
            <MainConsumer>
                {(data) => {
                    const { id, img, info, price, title, inCart, stocked } = data.detailProduct;
                    return (
                        <Details className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Products" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <div className="product-desc">
                                        <h3 className="mb-3">{title}</h3>
                                        <p className="availability">
                                            Availability:
                                            <span className="color ml-2">
                                                {stocked ? 'In Stock' : 'Unavailable'}
                                            </span>
                                        </p>
                                        <h5 className="text-title font-italic mb-0 price">
                                            Price:
                                            <strong className="ml-2">${price}</strong>
                                        </h5>
                                        <p>{info}</p>
                                    </div>
                                    <div>
                                        <Link to='/'>
                                            <Button>
                                                back to products
                                            </Button>
                                        </Link>
                                        <Button   
                                            details
                                            disabled={inCart ? true : false || stocked ? false : true}
                                            onClick={() => {
                                                data.addToCart(id);
                                                data.openModal(id);
                                            }}
                                        >
                                        <i className="fas fa-cart-plus mr-1" />
                                            {inCart ? 'in Cart' : 'add to cart'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Details>
                    )
                }}
            </MainConsumer>
        )
    }
}

const Details = styled.div`
    h3 {
        text-transform: uppercase;
        font-size: 1.3rem;
    }
    .row {
        padding-bottom: 6rem !important;
    }
    .product-desc {
        display: block;
        p {
            font-size:1.3rem;
        }
    }
    .price {
        margin-bottom: 1.2rem !important;
        color: var(--Blue);
        font-size-1.5rem;
    }
    .availability {
        color: #999;
        font-size: 0.7rem;
    }
    .color {
        color: var(--Red);
        font-weight: 600;
        font-size: 1.2rem;
    }
    img {
        width: 70%;
    }
`


