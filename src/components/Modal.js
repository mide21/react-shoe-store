import React, { Component } from 'react'
import { MainConsumer } from '../Main'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default class Modal extends Component {
    render() {
        return (
            <MainConsumer>
                {(data) => {
                    const { modalOpen, closeModal } = data;
                    const { title } = data.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto text-left text-capitalize p-4">
                                            <h4 className="pb-2">added to cart</h4>
                                            <p>
                                                {title} added to cart
                                            </p>
                                            <div className="text-center">
                                                <Link to='./'>
                                                    <Button onClick={() => closeModal()}>
                                                        continue shopping
                                                    </Button>
                                                </Link>
                                                <Link to='./cart'>
                                                    <Button details onClick={() => closeModal()}>
                                                        view cart and checkout
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </MainConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display:flex;
    align-items:center;
    justify-content: center;
    background: rgba(0,0,0,0.3);
    #modal {
        background: var(--White);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        border-radius: 5px;
    } h4 {
        font-weight:600;
    }
    Button {
        text-transform:uppercase;
        color: var(--White);
        font-weight:600;
        margin:.5rem auto .3rem auto;
    }
`
