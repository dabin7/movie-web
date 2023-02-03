'use client';

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Add from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Aside = () => {
  return (
    <>
      <div className='aside'>
        <div className='menu'>
          <div>
            <HomeIcon />
            <a>홈</a>
          </div>
          <div>
            <Add />
            <a>즐겨찾기</a>
          </div>
          <div>
            <ListAltIcon />
            <a>시청 기록</a>
          </div>
        </div>
        <div className='list-bar'>
          <div>Title</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className='list-bar'>
          <div>Title</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  );
};

export default Aside;
