import React from 'react';
import Link from 'next/link';
import Login from '../Login';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='recom'>
          <Link href='/'>Recom</Link>
        </div>
        <div className='login'>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Header;
