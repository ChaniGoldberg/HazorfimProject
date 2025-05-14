import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { getAllBasketProducts, updateCountProduct, deleteProduct, addProduct } from '../../redux/Actions'
import { addProductAndUpdateStock, deleteProduct, updateCountProduct } from '../../redux/slices/basketSlice'; 
import ChoosesProduct from './ChoosesProduct'
import OrderSummary from './OrderSummary' 
const Basket = () => {
  const dispatch = useDispatch();
  //const products1 = useSelector((state) => state.basket.products);

  useEffect(() => {
    // Condition to check if products array is empty
    dispatch(addProductAndUpdateStock({product: { name: "kufsa",price: 597 }, price: 6}));
    dispatch(addProductAndUpdateStock({product:{ name: "gavia",price: 999 },price: 3}));
    dispatch(addProductAndUpdateStock({ product:{name: "pamot",price: 1022 }, price: 8}));
    console.log('Products added on first load');

  }, []);

  // const totalPrice = useSelector((state) => state.basket.totalPrice);
  // const price = useSelector((state) => state.basket.price);
  // const count1 = useSelector((state) => state.basket.count);


  return (
    //dispatch(addProduct({name:"gavia",price:999},count=3)),
    <>
    <div className="myBasket">
      <h1>סל קניות</h1>
      <ChoosesProduct ></ChoosesProduct>
      <OrderSummary></OrderSummary>
      </div>
    </>
  )
}
export default Basket;