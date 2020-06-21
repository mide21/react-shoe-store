import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const MainContext = React.createContext();

class MainProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        stockedItems: false,
        counter: 0,
        subTotal: 0,
        tax: 0,
        total: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    onSwitch = () => {
        this.setState({ stockedItems: !this.state.stockedItems });
    };

    setProducts = () => {
        let products = [];
        storeProducts.forEach((item) => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState({ products: products });
    };

    getProduct = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getProduct(id);
        this.setState({ detailProduct: product });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(product => (subTotal += product.total));
        const tempTax = subTotal * 0.2;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            subTotal: subTotal,
            tax: tax,
            total: total
        })

    }

    openModal = (id) => {
        const product = this.getProduct(id);
        this.setState({ modalProduct: product, modalOpen: true });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getProduct(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        const cart = [...this.state.cart];
        let counter = cart.length + 1;
        this.setState({
            products: tempProducts,
            cart: [...this.state.cart, product],
            counter: counter
        },
            () => {
                this.addTotals();
            }
        );
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(product => product.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState({
            cart: [...tempCart]
        },
            () => {
                this.addTotals();
            })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(product => product.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.deleteProduct(id)
        } else {
            product.total = product.count * product.price;
            this.setState({
                cart: [...tempCart]
            },
                () => {
                    this.addTotals();
                })
        }
    }

    deleteProduct = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        let counter = tempCart.length - 1;
        tempCart = tempCart.filter(product => product.id !== id);
        const index = tempProducts.indexOf(this.getProduct(id));
        let deletedProduct = tempProducts[index];
        deletedProduct.inCart = false;
        deletedProduct.total = 0;
        deletedProduct.count = 0;
        this.setState({
            products: [...tempProducts],
            cart: [...tempCart],
            counter: counter
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState({
            cart: [], counter: 0 
        },
            () => {
                this.setProducts();
                this.addTotals();
            })
    }



    render() {
        return (
            <MainContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    onSwitch: this.onSwitch,
                    increment: this.increment,
                    decrement: this.decrement,
                    clearCart: this.clearCart,
                    deleteProduct: this.deleteProduct
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

const MainConsumer = MainContext.Consumer;

export { MainProvider, MainConsumer };
