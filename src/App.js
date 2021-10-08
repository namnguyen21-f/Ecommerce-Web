import './App.css';

import {Navbar , Products} from './components'
import React, {useState , useEffect, Fragment} from 'react'
import {commerce} from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { globalTheme } from './ulti/theme';
import Homepage from './pages/HomePage/index';
import Cartpage from './pages/CartPage/index';
import CheckoutPage from './pages/CheckoutPage/index';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import LoginPage from '../src/pages/LoginPage/index';
import SignupPage from '../src/pages/SignupPage/index';
import SpecificProductPage from './pages/SpecificProductPage';



const RenderWithNavbar = (props) => {
  const [userCart, setUsercart] = useState({});
  const [errorMessage , setErrorMessage] = useState([]);
  const setUserNewCart = (cart) => {
    setUsercart(cart)
  }

  const retrieveCart = (isChangeCart , headers) => {
    commerce.cart.retrieve().then((cart) => {
      if (isChangeCart){
        axios.post('http://localhost:3000/api/user/changeCartId' , {cartId : cart.id} , {
        headers: headers
        }).then((res) => {
          setUsercart(cart)
        })
      }else{
        setUsercart(cart);
      }
    }).catch((error) => {
      setErrorMessage(errorMessage.push(error))
    })
  }

  const refreshCart = (cartId ,headers) => {
    commerce.cart.refresh().then((cart) => {
      axios.post('http://localhost:3000/api/user/changeCartId' , {cartId : cart.id} , {
        headers: headers
      }).then((res) => {
        setUsercart(cart)
      })
    }).catch((error) => {
      setErrorMessage(errorMessage.push(error))
    })
  }

  const fetchCart = async () =>{
    var cartId = "";
    const headers = {
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    if (localStorage.getItem('token')){
      await axios.get('http://localhost:3000/api/getUserInfo' , {
          headers: headers
      }).then(res =>{
        cartId = res.data.data.cartId;
        if (!cartId || cartId == ""){
          retrieveCart(true, headers);
        }else{
          commerce.cart.retrieve(cartId).then((cart) => {
            setUsercart(cart)
          }).catch((error) => {
            refreshCart(cartId ,headers);
            setErrorMessage(errorMessage.push(error))
          })
        }
      }).catch(err => {
        retrieveCart();
      })
    }else{
      retrieveCart();
    }
  }

  useEffect(() => {
    fetchCart();
  }, [])

  return (
      <Fragment>
        <Navbar totalItems={userCart && userCart.total_items ? userCart.total_items : 0}></Navbar>
        {React.cloneElement(props.children, 
          { cart: userCart, 
            onSetCart: setUserNewCart,
          })}
      </Fragment>
  )
}


function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Router>
      <ThemeProvider theme={globalTheme}>
        <Switch>
          <Route exact path="/" >
            <RenderWithNavbar>
              <Homepage></Homepage>
            </RenderWithNavbar>
            <Footer></Footer>
          </Route>
          <Route exact path="/cart">
            <RenderWithNavbar>
              <Cartpage></Cartpage>
            </RenderWithNavbar>
            <Footer></Footer>
          </Route>
          <Route path="/checkout" exact>
            <RenderWithNavbar>
              <CheckoutPage/>
            </RenderWithNavbar>
          </Route>
          <Route path="/login" exact>
            <LoginPage></LoginPage>
          </Route>
          <Route path="/signup" exact>
            <SignupPage></SignupPage>
          </Route>
          <Route path="/product/:id" exact render={({match}) => (
            <Fragment>
              <RenderWithNavbar>
                <SpecificProductPage id={match.params.id}></SpecificProductPage>
              </RenderWithNavbar>
              <Footer></Footer>
            </Fragment>
          )}>
           
          </Route>
          

        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
