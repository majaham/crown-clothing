import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton(props){
    const stripePrice = props.price * 100;
    const publishableKey = 'pk_test_51HKMItI0M1ANipVvUMD7NMcD0CqEbv3H0lNQvnCOiVQruIjijQKJnUh0I1BPLgFUw9CuCI0VOtSSUjetp2DC3ya200Ra8Ml3uM';
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token: token
            }
        }).then(response => {
            alert('Payment was successful');
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err));
            alert('Payment did not success, check your credit card details');
        });
    }
    return (
        <StripeCheckout
            label="Buy Now"
            name="CROWN Clothing Ltd"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${props.price}`}
            amount={stripePrice}
            panelLabel='Buy Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;