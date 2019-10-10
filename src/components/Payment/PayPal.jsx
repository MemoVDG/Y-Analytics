import React, { useState, useRef, useEffect } from 'react';
import { updateData } from '../../actions';
import { useDispatch, connect } from 'react-redux';


function Product({ product, user }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const dispatch = useDispatch()


  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          dispatch(updateData(user.uid))
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        <img alt={product.description} src={'https://i.imgur.com/s9bPVaK.gif?2'} />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <p style={{fontFamily : 'Comic Sans MS'}}>
        {product.description} for ${product.price}
      </p>
      <img alt={product.description} src={product.image} width="200" />
      <div ref={paypalRef} />
    </div>
  );
}

function PayPal(props) {
  const { user } = props;

  const product = {
    price: 1,
    name: 'Subscription to Y-Analytics',
    description: 'Subscription for one year to our premium service to analyze all your videos',
    image: 'https://res.cloudinary.com/memovdg/image/upload/v1570661489/green_logo_e2twn6.png',
  };

  return (
    <div className="App">
      <Product product={product} user={user} />
    </div>
  );
}

function mapStateToProps(state){
  return{
    user : state.auth.user,
  };
} 

export default connect(mapStateToProps)(PayPal);