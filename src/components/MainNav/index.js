import React from 'react';
import Link from 'next/link';

const MainNav = () => {
  return (
    <>
      <div className='main-nav'>
        <nav>
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
        <div className='search'>
          <form>
            <input></input>
            <button>검색</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainNav;
