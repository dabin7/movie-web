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
          <div>Memo</div>
          <div>
            <input />
          </div>
        </div>
        <div className='list-bar'>
          <div>Keywords</div>
          <div>love</div>
          <div>casino</div>
          <div>soccer</div>
          <div>book</div>
        </div>
      </div>
    </>
  );
};

export default Aside;
