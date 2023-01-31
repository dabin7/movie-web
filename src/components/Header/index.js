import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='recom'>
          <Link href='/'>Recom</Link>
        </div>
        <div className='login'>
          <form>
            <button>로그인</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
