import React from 'react';
import PayWithGoogle from "./PayWithGoogle"; // Import the GooglePay component
import "../../styles/PaymentPopup.css";

const PaymentPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>פרטי תשלום</h2>
                <div className="scrollable-content">
                    <form>
                        <label>
                            מספר כרטיס אשראי:
                            <input type="text" required />
                        </label>
                        <label>
                            תאריך תפוגה:
                            <input type="text" required />
                        </label>
                        <label>
                            קוד אבטחה:
                            <input type="text" required />
                        </label>
                        <button type="submit">שלח</button>
                    </form>
                    <h3>תשלום עם גוגל</h3>
                    <PayWithGoogle />
                </div>
                <button onClick={onClose}>סגור</button>
            </div>
        </div>
    );
};

export default PaymentPopup;
