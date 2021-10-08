import React , {useState} from 'react';
import { Typography, Button, Divider, Checkbox } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import Review from './Review';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const data = [
  {
    icon: <MoneyIcon />,
    text: "Cash payment on delivery",
    label: 'PaymentCheck',
  },
  {
    icon: <PaymentIcon />,
    text: "Payment on MoMo",
    label: 'PaymentCheck',
  },
  {
    icon: <AccountBalanceIcon />,
    text: "Payment on Bank Account",
    label: 'PaymentCheck',
  },

]

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  console.log(shippingData)
  const [paymentIndex , setPaymentIndex] = useState(0);
  const handleSubmit = async () => {
    let payment = {};
    if (data[paymentIndex].text == "Cash payment on delivery"){
      payment.gateway = 'cash';
    }
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email , phone: shippingData.phone},
      shipping: { name: 'International', street: shippingData.address, 
        town_city: shippingData.city, county_state: shippingData.shippingSubdivision, 
        postal_zip_code: shippingData.zip, country: shippingData.shippingCountry 
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: payment,
    }
    onCaptureCheckout(orderData);
       
  }

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" style={{ margin: '20px 0' }}>Payment method</Typography>
      <List component="nav" aria-label="main mailbox folders">
        {data.map((item,idx) => {
          return (
            <ListItem key={idx} onClick={() => {setPaymentIndex(idx)}} button>
              <Checkbox
                edge="start"
                checked={idx == paymentIndex}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': item.label }}
              />
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      
      <div style={{ display: 'flex', justifyContent: 'space-between' , margin: "1rem 0"}}>
        <Button color="secondary" variant="contained" onClick={() => {backStep()}}>Previous Step</Button>
        <Button color="primary" variant="contained" onClick={() => {handleSubmit()}}>Checkout</Button>
      </div>
    </>
  );
};

export default PaymentForm;