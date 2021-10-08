import React, { useState , useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const headerName = ['Name' , 'Price' , 'Amount' , 'Total' , 'Remove']




const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart , onRefreshCart}) => {
  const classes = useStyles();
  
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const RenerItem = ({lineItem}) => {
    const [quatity, setQuatity] = useState(lineItem.quantity ? lineItem.quantity : 1);
    const [timeId, setTimeId] = useState(null);
    const handleBlurQuatityInput = (event , id) => {
      if (event.target.value == "" || event.target.value == "0"){
        alert("Quatity has to be bigger than 0 value")
        setQuatity(lineItem.quantity);
      }else{
        onUpdateCartQty(id, event.target.value)
      }
    }
  
    const handleQuatityInput = (event) => {
      setQuatity(event.target.value)
    }

    const handleQuatityBtn = (value) => {
      setQuatity(value);
      if (timeId){
        clearTimeout(timeId);
      }
      setTimeId(
        setTimeout(function(){ onUpdateCartQty(lineItem.id, value) }, 2000)
      )
      
    }

    
  
    return (
      <TableRow key={lineItem.id}>
        <TableCell component="th" scope="row">
          <Grid className={classes.cartItem}>
            <img src={lineItem.media.source} alt="product-image"></img>
            <div>
              <Link to={'/product/' + lineItem.id}>
                <Typography variant="h5" className={classes.cartItem_name}>{lineItem.name}</Typography>
              </Link>
              <Typography gutterBottom><span className={classes.cartItem_status}>{lineItem.is_valid ? "On stock" : "Out of stock"}</span></Typography>
            </div>
          </Grid>
        </TableCell>
        <TableCell align="left">
          <Grid className={classes.cartItem_quatity}>
            <AddIcon onClick={() => {handleQuatityBtn(quatity + 1)}}/>
            <input type="number" 
              onKeyDown={(event) => {if (event.keyCode == 69) event.preventDefault()}} 
              onChange= {(event) => {handleQuatityInput(event)}}
              onBlur={(event) => {handleBlurQuatityInput(event , lineItem.id)}}
              value={quatity}></input>
            <RemoveIcon onClick={() => {handleQuatityBtn(quatity - 1)}}/>
          </Grid>
        </TableCell>
        <TableCell align="left">{lineItem.price.formatted_with_code}</TableCell>
        <TableCell align="left">{lineItem.line_total.formatted_with_code}</TableCell>
        <TableCell align="center">
          <DeleteIcon 
            onClick={() => {onRemoveFromCart(lineItem.id)}}
            style={{cursor: "pointer"}}
            >
          </DeleteIcon></TableCell>
      </TableRow>
    )
  }
  

  const renderCart = () => (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="user-cart">
          <TableHead>
            <TableRow>
              {headerName.map(header => (
                <TableCell align="left" key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.line_items.map((lineItem) => (
              <RenerItem key={lineItem.id} lineItem={lineItem}></RenerItem>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar}>
        <p style={{fontSize: "13px"}}>Do ảnh hưởng của dịch Covid-19, một số khu vực có thể nhận hàng chậm hơn dự kiến. Tiki đang nỗ lực giao các đơn hàng trong thời gian sớm nhất. Cám ơn sự thông cảm của quý khách!</p>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
      { cart.line_items.length> 0 && 
        <div className={classes.cartHandle}>
          <Button onClick ={() => {onRefreshCart()}} variant="contained" color="secondary">
            Remove
          </Button>
          <Button onClick ={() => {window.location = '/checkout'}} variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      }
    </Container>
  );
};

export default Cart;