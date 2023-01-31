'use client';

import React from 'react';
import ProductItem from '../components/Product-item';
import Carousel from '../components/Carousel';

const Page: any = () => {
  const ImgSliderData = [
    {
      id: 0,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
    },
    {
      id: 1,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
    {
      id: 2,
      title: '타짜',
      src: 'http://garmuri.com/files/attach/images/169/989/064/3a390031441893a94be31154cc82c28c.jpeg',
    },
    {
      id: 3,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
    },
    {
      id: 4,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
    {
      id: 5,
      title: '타짜',
      src: 'http://garmuri.com/files/attach/images/169/989/064/3a390031441893a94be31154cc82c28c.jpeg',
    },
    {
      id: 6,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
    },
    {
      id: 7,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
    {
      id: 8,
      title: '타짜',
      src: 'http://garmuri.com/files/attach/images/169/989/064/3a390031441893a94be31154cc82c28c.jpeg',
    },
  ];
  const ImgData = [
    {
      id: 0,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
    },
    {
      id: 1,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
    {
      id: 2,
      title: '타짜',
      src: 'http://garmuri.com/files/attach/images/169/989/064/3a390031441893a94be31154cc82c28c.jpeg',
    },
    {
      id: 3,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
    },
    {
      id: 4,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
  ];
  return (
    <>
      <div className='container'>
        <div className='ranking'>
          <div className='title'>
            <h1>Ranking</h1>
          </div>
          <div className='carousel'>
            <Carousel ImgSliderData={ImgSliderData} />
          </div>
        </div>

        <div className='category-content'>
          <div className='category-box'>
            <div className='title'>
              <h1>로맨스</h1>
            </div>
            <div className='content-list'>
              {ImgData.map((item) => (
                <ProductItem image={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>액션</h1>
            </div>
            <div className='content-list'>
              {ImgData.map((item) => (
                <ProductItem image={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>코믹</h1>
            </div>
            <div className='content-list'>
              {ImgData.map((item) => (
                <ProductItem image={item.src} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
