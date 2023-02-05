'use client';

import React from 'react';
import DoNot from '@mui/icons-material/DoNotDisturb';
import MainNav from '@/components/MainNav/book';

const Preparing = () => {
  return (
    <>
      <div className='container'>
        <MainNav />
        <div className='prepare'>
          <DoNot sx={{ fontSize: 60 }} />

          <a>죄송합니다</a>
          <a>아직 준비중 입니다</a>
        </div>
      </div>
    </>
  );
};

export default Preparing;
