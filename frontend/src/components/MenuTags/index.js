import React from 'react';
import './index.css'; // Import the CSS file for styling

export function MenuTags() {
  const menuData = ["Apple", "Creamy Chicken & Pepper Pasta", "Broccoli", "Chia Pudding with Strawberries", "Carrots"]

  return (
    <div className='menuTagClass'>
      {menuData.map((menu) => (
        <div className="menuTags">
          <p>{menu}</p>
        </div>
      ))}
    </div>
  );
}
