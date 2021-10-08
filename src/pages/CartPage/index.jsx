import React, {useState , useEffect} from 'react'

import { Products } from '../../components';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Cart from '../../components/Cart/Cart'
import { ThemeProvider} from '@material-ui/core/styles';
import { commerce } from '../../lib/commerce';
// import {globalTheme} from '../../ulti/theme';



const categoryQ = ['Laptop'];


export default function Cartpage ({cart , onSetCart}) {
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    //onEmptyCart, onRemoveFromCart , onUpdateCartQty , onRefreshCart
    const classes = useStyles();
    
    const handleRefreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        onSetCart(newCart)
    };
    
    const handleUpdateCart = async (id, quantity) => {
        commerce.cart.update(id, { quantity: quantity })
        .then(response => 
            onSetCart(response.cart)
        );
    }

    const handleRemoveFromCart = async (itemId) => {
        const response = await commerce.cart.remove(itemId);
        onSetCart(response.cart)
    }

    const handleEmptyCart = async () => {
        const item = await commerce.cart.empty();
        onSetCart(item.cart);
    }

 
    useEffect(() => {
        
    }, [])

    return (
        <Container maxWidth={false} disableGutters className={classes.container}>
            <Container maxWidth={false} className={classes.container2} >
                <div className={classes.cartSection}>
                    <Cart cart={cart} onUpdateCartQty={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart}  onEmptyCart={handleEmptyCart} onRefreshCart={handleRefreshCart}></Cart>
                </div>
            </Container>
        </Container>
    )
}