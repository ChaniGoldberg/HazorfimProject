import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { getAllBasketProducts, updateCountProduct, deleteProduct } from '../../redux/Actions';
//import FavoriteProduct from './FavoriteProduct';
const Favorites = () => {
    // Get the favorite products array from the store
    const dispatch = useDispatch();
    const favoriteProducts = useSelector((state) => state.favorites.favoriteProducts);

    return (
        <div>
            <h2>My Favorite Products</h2>
            <div>
                {favoriteProducts && favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <p></p>
                        //<FavoriteProduct key={product.id} product={product} />
                    ))
                ) : (
                    <p>No favorite products found.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;