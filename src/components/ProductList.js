import React from "react";
import Product from "./Product";
import { MainConsumer } from "../Main";
import Switch from "./Switch";
import Title from "./Title";

export default function ProductList() {
    const filteredItems = (items) => (inStock) =>
        items.filter((item) => (inStock ? item.stocked : true));

    return (
        <React.Fragment>
            <Switch />
            <div className='py-5'>
                <div className='container'>
                    <Title title="our top selling products" />
                    <div className='row'>
                        <MainConsumer>
                            {(value) => {
                                return filteredItems(value.products)(value.stockedItems).map((product) => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </MainConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
