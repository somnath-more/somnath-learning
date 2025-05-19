import React from "react";
import "./RazorpayComponent.css";
const RazorpayComponent = () => {
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      makePayment();
    };
    document.body.appendChild(script);
  };

  const makePayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
      });
      const order = await response.json();

      const options: any = {
        key: "YOUR_KEY_ID", 
        amount: order.amount,
        currency: "INR",
        name: "My Shop",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          console.log(response);
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ margin: "20px 0" }}>Razorpay Payment</h2>
      <p style={{ fontSize: "18px" }}>Click the button below to pay</p>
      <p style={{ fontSize: "18px" }}>Amount: ₹5.00</p>
      <button onClick={loadRazorpay} style={{ padding: "10px 20px", fontSize: "16px",color:'#0465ac' }}>
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayComponent;