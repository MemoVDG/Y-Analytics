import React, { useState, useRef, useEffect } from 'react';


function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

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
        <img alt={product.description} src={'https://static.makeuseof.com/wp-content/uploads/2011/12/facebook-icon.jpg'} />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h1>
        {product.description} for ${product.price}
      </h1>
      <img alt={product.description} src={product.image} width="200" />
      <div ref={paypalRef} />
    </div>
  );
}

function PayPal() {
  const product = {
    price: 1,
    name: 'comfy chair',
    description: 'fancy chair, like new',
    image: 'https://svn.alfresco.com/repos/alfresco-open-mirror/alfresco/HEAD/root/projects/repository/config/alfresco/thumbnail/thumbnail_placeholder_256_ai.png',
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default PayPal;