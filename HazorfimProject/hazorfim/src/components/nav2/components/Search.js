import React, { useState } from 'react';
import products from '../../../constants/products.json'; // עדכן את הנתיב לפי הצורך
import { links } from '../../../constants/links'; // עדכן את הנתיב לפי הצורך
import '../../../styles/Search.css'; // עדכן את הנתיב לפי הצורך
const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const getCategoryLink = (categoryName) => {
    const category = links.find(link => link.nameHebrew === categoryName);
    return category ? category.name : null;
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      const filteredProducts = products.filter(product =>
        product.name.includes(searchQuery)
      );

      const filteredCategories = links.filter(link =>
        link.nameHebrew.includes(searchQuery)
      );

      const combinedResults = [
        ...filteredProducts.map(product => ({
          type: 'product',
          name: product.name,
          link: `/categories/${getCategoryLink(product.categoryName)}/products/${product.id}`
        })),
        ...filteredCategories.map(category => ({
          type: 'category',
          name: category.nameHebrew,
          link: `/categories/${category.name}`
        }))
      ];

      setResults(combinedResults);
      setNoResults(combinedResults.length === 0);
    } else {
      setResults([]);
      setNoResults(false);
    }
  };

  const productsResults = results.filter(result => result.type === 'product');
  const categoriesResults = results.filter(result => result.type === 'category');

  return (
<div>
  <input
    type="text"
    placeholder="חיפוש (מילת מפתח וכו)"
    className="custom-search-input" // שם מחלקה ייחודי
    value={query}
    onChange={handleSearch}
  />
  {results.length > 0 ? (
    <div className="custom-popup"> 
      {categoriesResults.length > 0 && (
        <div>
          <h4>האם אתם מתכוונים ל- <a href={`/categories/${categoriesResults[0].link}`}>{categoriesResults[0].name}</a>?</h4>
        </div>
      )}
      {productsResults.length > 0 && (
        <div>
          <h4>פריטים:</h4>
          {productsResults.map((result, index) => (
            <div key={index}>
              <p><a href={result.link}>{result.name}</a></p>
            </div>
          ))}
        </div>
      )}
      {categoriesResults.length > 1 && (
        <div>
          <h4>קטגוריות נוספות:</h4>
          {categoriesResults.slice(1).map((result, index) => (
            <div key={index}>
              <p><a href={result.link}>{result.name}</a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : noResults ? (
    <p>לא נמצאו תוצאות לחיפוש שלך</p>
  ) : null}
</div>

  );
};

export default Search;
