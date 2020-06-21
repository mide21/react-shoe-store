import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <Container>
            <div className="empty text-center">
                <img src="img/empty-cart.png" className="img-fluid" alt="cart" />
                <p className="p-3">Your cart is currently empty</p>
                <Link to="/">
                    <Button details>
                        start shopping
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    position: relative;
    .empty {
        padding-left: 16px;
        padding-bottom: 30px;
        padding-top: 90px;
        padding-right: 16px;
        p {
            font-size:22px;
            color: #c5c5c5;
            font-weight:600;
        }
    }
    Button {
        text-transform: uppercase;
        color:#fff;
        font-weight:700;
        padding:1rem;
    }
`
