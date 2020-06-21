import React, { Component } from 'react';
import { MainConsumer } from '../../Main';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <MainConsumer>
                {value => {
                    const { cart } = value;
                    if(cart.length > 0) {
                        return (
                        <React.Fragment>
                            <Title name="shopping cart" />
                            <CartColumns />
                            <CartList value={value} />
                            <CartTotals value={value} history={this.props.history} />
                        </React.Fragment>
                        );
                    } else {
                       return <EmptyCart />;
                    }
                }}
            </MainConsumer>
        )
    }
}
