import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { getAllFavoritesProducts,addFavoriteProduct, deleteFavoriteProduct } from '../../redux/slices/favoritesSlice';
const Favorites = () => {
    // Get the favorite products array from the store
    const dispatch = useDispatch();
    const favoriteProducts = dispatch(getAllFavoritesProducts());
console.log(favoriteProducts);
    return (
        <div>
            <h2>My Favorite Products</h2>
            <div>
                {favoriteProducts && favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <p>{product.name}</p>
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