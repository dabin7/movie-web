'use client';

import React from 'react';
import ProductItem from '../../components/Product-item';
import Carousel from '../../components/Carousel';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import StarsIcon from '@mui/icons-material/Stars';
import MainNav from '../../components/MainNav/drama';

const Drama: any = () => {
  const ImgSliderData = [
    {
      id: 0,
      title: '이번생은 처음이라',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxODA5MjFfNDIg/MDAxNTM3NDgzNDY1Njkx.vVD-8m_oLulcpMNzLYgnoNMPOjmIwqD0wOuG0ljJ1gEg.yxpPWWwcWrJ1UcOZvEYANffzzq5eAVx6Qyns5MzBeBgg.JPEG.pnp524/IMG_6036.jpg?type=w800',
    },
    {
      id: 1,
      title: '미생',
      src: 'https://upload.wikimedia.org/wikipedia/ko/e/ef/%EB%AF%B8%EC%83%9D_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    },
    {
      id: 2,
      title: '나의 아저씨',
      src: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fZ2AzLy81wsAdG1E2QoL2P3caV7.jpg',
    },
    {
      id: 3,
      title: '오징어게임',
      src: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/09/PS21090200069.jpg',
    },
    {
      id: 4,
      title: '슬기로운 감빵생활',
      src: 'https://www.themoviedb.org/t/p/original/4LiNzTqjQVM9PqB8h4Fadws5vAJ.jpg',
    },
    {
      id: 5,
      title: '미생',
      src: 'https://upload.wikimedia.org/wikipedia/ko/e/ef/%EB%AF%B8%EC%83%9D_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    },
    {
      id: 6,
      title: '나의 아저씨',
      src: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fZ2AzLy81wsAdG1E2QoL2P3caV7.jpg',
    },
    {
      id: 7,
      title: '슬기로운 감빵생활',
      src: 'https://www.themoviedb.org/t/p/original/4LiNzTqjQVM9PqB8h4Fadws5vAJ.jpg',
    },
    {
      id: 8,
      title: '오징어게임',
      src: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/09/PS21090200069.jpg',
    },
  ];
  const ImgData = [
    {
      id: 0,
      title: '슬기로운 감빵생활',
      src: 'https://www.themoviedb.org/t/p/original/4LiNzTqjQVM9PqB8h4Fadws5vAJ.jpg',
    },
    {
      id: 1,
      title: '미생',
      src: 'https://upload.wikimedia.org/wikipedia/ko/e/ef/%EB%AF%B8%EC%83%9D_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    },
    {
      id: 2,
      title: '오징어게임',
      src: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/09/PS21090200069.jpg',
    },
    {
      id: 3,
      title: '이번생은 처음이라',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxODA5MjFfNDIg/MDAxNTM3NDgzNDY1Njkx.vVD-8m_oLulcpMNzLYgnoNMPOjmIwqD0wOuG0ljJ1gEg.yxpPWWwcWrJ1UcOZvEYANffzzq5eAVx6Qyns5MzBeBgg.JPEG.pnp524/IMG_6036.jpg?type=w800',
    },
    {
      id: 4,
      title: '나의 아저씨',
      src: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fZ2AzLy81wsAdG1E2QoL2P3caV7.jpg',
    },
  ];
  return (
    <>
      <div className='container'>
        <MainNav />
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
              <h1>넷플릭스</h1>
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

export default Drama;
