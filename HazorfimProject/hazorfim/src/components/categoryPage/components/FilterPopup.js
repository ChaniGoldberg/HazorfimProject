import React, { useState } from 'react';
// import style from'../../../styles/FilterPopup.css'
const FilterPopup = ({ onFilterChange }) => {
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [material, setMaterial] = useState(null);

  const handleSubmit = () => {
    onFilterChange({ price, size, material });
  };

  return (
    <div className="popup">
      <h2>סנן מוצרים</h2>
      <div>
        <label>
          טווח מחיר:
          <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="הכנס מחיר מקסימלי" />
        </label>
      </div>
      <div>
        <label>
          גודל:
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="">בחר גודל</option>
            <option value="small">קטן</option>
            <option value="medium">בינוני</option>
            <option value="large">גדול</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          חומר:
          <select onChange={(e) => setMaterial(e.target.value)}>
            <option value="">בחר חומר</option>
            <option value="wood">עץ</option>
            <option value="metal">מתכת</option>
            <option value="plastic">פלסטיק</option>
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>אשר סינון</button>
    </div>
  );
};

export default FilterPopup;
