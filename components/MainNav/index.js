import React from 'react';
import Link from 'next/link';

const MainNav = () => {
  return (
    <>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link href='/movie'>Movie</Link>
          </li>
          <li>
            <Link href='/'>Drama</Link>
          </li>
          <li>
            <Link href='/'>Anime</Link>
          </li>
          <li>
            <Link href='/'>Music</Link>
          </li>
          <li>
            <Link href='/'>Book</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
