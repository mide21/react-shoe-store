import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainConsumer } from '../Main';

export default class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <Wrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <MainConsumer>
                    {value => (
                        <div className="card">
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/product-details">
                                    <img src={img} alt="product" className="card-img" />
                                    <div className="mask">
                                        <span>Quick View</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <p className="align-self-center mb-0">{title}</p>
                                <h5 className="font-italic mb-0">
                                    <span className="mr-1">$</span>
                                    {price}
                                </h5>
                            </div>
                        </div>
                    )}
                </MainConsumer>
            </Wrapper >
        )
    }
}

const Wrapper = styled.div`
    h5 {
        color: #999;
        font-family: 'Squada One', cursive;
    }
    .card {
        border-color: transparent;
        transition:all 1s linear;
    }
    .img-container {
        position:relative;
        overflow: hidden;
    }
    .card-img {
        transition: all 1s linear;
    }
    .img-container:hover .card-img {
        transform: scale(1.2);
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition:all 1s linear;
    }
    .mask {
        display: none;
        position: absolute;
        top: 44%;
        left: 33%;
    }
    .mask span {
        background: var(--lightBlue);
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        padding: 6px 12px;
    }
    &:hover {
        .card {
            border:  0.04rem solid var(--lightBlue);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
        .mask {
            display: block;
        }
        .mask span:hover {
            text-decoration: none;
            background: #181b2a;
            transition: 0.7s all;
            cursor:pointer;
        }
        h5 {
            color: var(--lightBlue);
        }
    }

    @media(max-width: 480px) {
        &:hover {
            .mask {
                display: none;
            }
        }
    }
`
