import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed. Sit back, relax and you’ll be indulging in cheesy, melty goodness in no time!" 🍕
        </span>
      </div>
    </>
  );
};

export default Checkout;
