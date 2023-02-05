'use client';

import React, { useState } from 'react';
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
              <Link className='active' href='/drama'>
                Drama
              </Link>
            </li>
            <li>
              <Link href='/preparing'>Anime</Link>
            </li>
            <li>
              <Link href='/preparing'>Music</Link>
            </li>
            <li>
              <Link href='/preparing'>Book</Link>
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
