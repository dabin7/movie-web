import React from 'react';
import Link from 'next/link';

const ProductItem = ({ image, title }) => {
  return (
    <>
      <div className='product-item'>
        <div className='product-image'>
          <Link href='/'>
            <img src={image} alt='product' />
          </Link>
        </div>

        <div className='product-description'>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
