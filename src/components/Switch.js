import React from "react";
import styled from "styled-components";
import { MainConsumer } from "../Main";

export default function Switch() {
    return (
        <MainConsumer>
            {(value) => {
                const { stockedItems }  = value;
                return (
                    <Toogle>
                        <strong>Show only products in stock</strong>
                        <label className='switch'>
                            <input type='checkbox' defaultChecked={stockedItems} onChange={() => value.onSwitch()} />
                            <span className='slider round'></span>
                        </label>
                    </Toogle>
                );
            }}
        </MainConsumer>
    );
};


const Toogle = styled.p`
    margin: 4rem 2rem 0 1.5rem;
    strong {
        font-size:1.2rem;
    }
`
