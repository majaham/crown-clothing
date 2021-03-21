const express = require('express');
const path = require('path');
// import stripeApp from 'stripe';

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });    
}

app.listen(PORT, function(err){
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`);
});

app.post('/payment', function(req, res){
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    stripe.charges.create(body, function(stripeErr, stripeRes){
        if(stripeErr){
            res.status(500).send({error: stripeErr});
        }else{
            res.status(200).send({success: stripeRes});
        }
    });
});
