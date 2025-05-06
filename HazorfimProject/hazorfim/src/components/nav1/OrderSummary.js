import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllBasketProducts, updateCountProduct, deleteProduct } from '../../redux/Actions';
import PaymentPopup from './PaymentPopup'; // Import the PaymentPopup component
import "../../styles/OrderSummary.css";

const OrderSummary = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const totalAmount = () => {
        let sum = 0;
        for (let i = 0; i < totalPrice.length; i++) {
            sum += totalPrice[i];
        }
        return sum;
    };

    const sendingOrderSale = () => {
        if (totalAmount() > 399) {
            return <p>הנחת משלוח {-39}</p>;
        }
    };

    const sendingOrderMany = () => {
        if (totalAmount() > 399) {
            return <p>הנחת משלוח {-39}</p>;
        }
    };

    const handlePaymentClick = () => {
        setIsPopupOpen(true);
    };
    const checkPasswordClub=()=>{
        return;
    }

    return (
        <>
            <div id="OrderSummaryCard">
                <div className='UserClub'>
                    <button onClick={checkPasswordClub()} className='clubButton'>קוד קופון</button>
                    <input type='text' className='clubText' placeholder='הכנס קוד קופון' />
                </div>
                <div className='OrderSummery'>
                    <h1>סיכום הזמנה</h1>
                    <p>סה"כ: {totalAmount()}</p>
                    <p>עלות משלוח: {39}</p>
                    {sendingOrderSale()}
                    <p>סה"כ לתשלום: {totalAmount() + sendingOrderMany()}</p>
                </div>
                <button className='forPaying' onClick={handlePaymentClick}>למעבר לתשלום</button>
            </div>
            {isPopupOpen && <PaymentPopup onClose={() => setIsPopupOpen(false)} />}
        </>
    );
};

export default OrderSummary;
