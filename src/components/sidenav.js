import React from 'react'
import '../App.css';

const Sidenav = () => {
  return (
    <div className='nav'>
<div className='nav-item'>
<img src="https://img.icons8.com/ios-glyphs/60/000000/home.png" alt='home'/>
<h1 className='title'>Home</h1>
</div>

<div className='nav-item'>
<img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/64/000000/external-trending-social-media-interface-anggara-glyph-anggara-putra.png" alt='trending'/>
 <h1 className='title'>Trending</h1>
</div>
   </div>
  )
}

export default Sidenav