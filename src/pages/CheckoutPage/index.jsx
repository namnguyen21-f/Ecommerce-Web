import React, {useState , useEffect} from 'react'

import { Checkout, Products } from '../../components';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Cart from '../../components/Cart/Cart'
import { ThemeProvider} from '@material-ui/core/styles';
import { commerce } from '../../lib/commerce';
import axios from 'axios';

// import {globalTheme} from '../../ulti/theme';

export default function Cartpage ({cart , onSetCart}) {
    const [order, setOrder] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const classes = useStyles();

    const handleCaptureCheckout = async (newOrder) => {
        try {
            const params = newOrder;
            axios
            .post("http://localhost:3000/api/checkout", params)
            .then(res => {
                setOrder(newOrder);
                commerce.cart.refresh().then((cart) => {
                    axios.post('http://localhost:3000/api/user/changeCartId' , {cartId : cart.id} , {
                        headers: {
                            'Authorization' : 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((res) => {
                        onSetCart(cart)
                    })
                });
            })
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')){
            axios.get('http://localhost:3000/api/getUserInfo' , {
                headers: {
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res =>{
                setUserInfo(res.data.data);
            })
        }
    },[])

    return (
        <Container maxWidth={false} disableGutters className={classes.container}>
            <Container maxWidth={false} className={classes.container2} >
                <div className={classes.checkoutSection}>
                    {cart && <Checkout cart={cart} userInfo={userInfo} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}></Checkout>}
                </div>
            </Container>
        </Container>
    )
}