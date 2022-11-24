import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <>
    <header>
      <Link to='/'> Главная</Link>
      <Link to='/news'>Новости</Link>
    </header>
    <div className='wrapper'>
    <Outlet/>
    </div>
    
    <footer>
      Все права защищены &copy;
    </footer>
    </>
  )
}

export default LayOut