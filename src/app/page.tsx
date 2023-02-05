'use client';

import React from 'react';
import ProductItem from '../components/Product-item';
import Carousel from '../components/Carousel';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import StarsIcon from '@mui/icons-material/Stars';

const Page: any = () => {
  const ImgSliderData = [
    {
      id: 0,
      title: '레옹',
      src: 'https://upload.wikimedia.org/wikipedia/ko/7/77/%EB%A0%88%EC%98%B9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    },
    {
      id: 1,
      title: '조커',
      src: 'http://t1.daumcdn.net/movie/0357a82b7226464b87072c0b8d2246b71567986846719',
    },
    {
      id: 2,
      title: '어바웃타임',
      src: 'https://w.namu.la/s/45540343663db139cc66f875ddf9a2b68c15b17cd5957e2cc6f436d37c3918d1902911c08209621b835480c23ae8bedee3e2a3681d397c1c7a4d8b3cf6acd80308f855f90ee7887ded74c9b915d144833a5fd3a241f82fae2b7db5f677a6036ae65361a6f9d22851aa2c5d31fa057ee3',
    },
    {
      id: 3,
      title: '타짜',
      src: 'http://garmuri.com/files/attach/images/169/989/064/3a390031441893a94be31154cc82c28c.jpeg',
    },
    {
      id: 4,
      title: '라라랜드',
      src: 'https://cdn-magazine.notefolio.net/files/03/17703-6044-23_cont',
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
            <h1>
              <StarsIcon />
              TOP 10
            </h1>
          </div>
          <div className='carousel'>
            <Carousel ImgSliderData={ImgSliderData} />
          </div>
        </div>

        <div className='category-content'>
          <div className='category-box'>
            <div className='title'>
              <h1>멜로 & 로맨스</h1>
              <a href='/'>
                전체보기 <Arrow sx={{ fontSize: 14 }} />
              </a>
            </div>
            <div className='content-list'>
              {ImgData.map((item, index) => (
                <ProductItem key={index} image={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>액션 & 스릴러</h1>
              <a href='/'>
                전체보기 <Arrow sx={{ fontSize: 14 }} />
              </a>
            </div>
            <div className='content-list'>
              {ImgData.map((item, index) => (
                <ProductItem key={index} image={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className='category-box'>
            <div className='title'>
              <h1>애니메이션 극장판</h1>
              <a href='/'>
                전체보기 <Arrow sx={{ fontSize: 14 }} />
              </a>
            </div>
            <div className='content-list'>
              {ImgData.map((item, index) => (
                <ProductItem key={index} image={item.src} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
