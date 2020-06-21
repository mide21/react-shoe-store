import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainConsumer } from '../Main';

export default class Header extends Component {
    render() {
        return (
            <MainConsumer>
                {(data) => {
                    const { counter } = data;
                    return (
                        <Head>
                            <div className="container">
                                <div className="col-md-4 col-lg-12 text-center header">
                                    <Link to="/">
                                        <img src='img/logo-4.png' alt="logo" />
                                    </Link>
                                </div>
                                <div className="col-md-12">
                                    <Link to="/cart" className="ml-auto">
                                        <span className="cart float-right">
                                            <i className="fas fa-cart-plus" />
                                            <span>
                                                {counter}
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Head>
                    )
                }}
            </MainConsumer >
        )
    }
}

const Head = styled.div`
    background: var(--lightBlue);
    padding: 2em 0px 1.5em 0px;
    .cart {
        font-size: 1.8rem;
        cursor: pointer;
        margin: -2.7rem 0.5rem 0.2rem 2rem;
        color: #000;
        position:relative;
        span {
            top: -8px;
            color: var(--White);
            font-size: 17px;
            position: absolute;
            right: -5px;
            background: var(--Red);
            border-radius:50%;
            padding:0 4px;
            width: 24px;
            height: 25px;
            text-align: center;
        }
        &:hover {
            color:#00003b;
        }
    }
`

