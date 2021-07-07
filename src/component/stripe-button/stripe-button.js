import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishablekey='pk_test_51JAWoTSGVL1IKx5tkYoAAoL6YJQ0fwfeGUV42lfCPEcjJUlH4V6ygnBeS5QRTzFHrJQ8enoGbaRS6Yeh8i5zW8gV006hGSE3Sk'
    const onToken=token=>{
        console.log(token);
        alert('Payment Sucessful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton