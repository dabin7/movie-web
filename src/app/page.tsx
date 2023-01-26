import React from 'react';

const Page = () => {
  return (
    <>
      <div className='container'>
        <div className='ranking'>
          <div className='title'>
            <h1>Ranking</h1>
          </div>
          <div className='flex-list'></div>
        </div>

        <div className='category-content'>
          <div className='category-box'>
            <div className='title'>
              <h1>Movie</h1>
            </div>
            <div className='content-list'>
              <div className='product-item'></div>
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>Movie</h1>
            </div>
            <div className='content-list'>
              <div className='product-item'></div>
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>Movie</h1>
            </div>
            <div className='content-list'>
              <div className='product-item'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
