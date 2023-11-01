import React, { useState } from 'react';

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Implement payment processing logic here.
    alert('Payment successful!');
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
