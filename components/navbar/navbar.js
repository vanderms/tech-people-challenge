import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navlinks from './navlinks';
import IconMenu from '../icons/icon-menu';



export default function Navbar(){

  const [ topbarFixed, setTopbarFixed ] = useState(false);
  const [ sidebarOpen, setSidebarOpen ] = useState(false);

  const setTopbar = ()=> {    
    if(window.scrollY < 50) setTopbarFixed(false);
    if(window.scrollY >= 50) setTopbarFixed(true);
  }

  const openSidebar = ()=> setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(()=>{    
    setTopbar();
    window.addEventListener('scroll', setTopbar);
  }, [])

  const fixed = topbarFixed ? ' topbar-fixed' : '';
  const open = sidebarOpen ? ' sidebar-open' : ''; 

  return (
    <nav className={ 'root-navbar' + fixed + open } >
      <div className="topbar">
        <Link href='#'>
          <a aria-label='ir para a homepage'>
            <img src='/logo.svg' alt="logo" className="logo dark" />
            <img src='./logo-white-hoz.svg' alt="logo" className='logo purple' />
          </a>
        </Link>
        <Navlinks/>
        <button aria-label='abrir menu lateral' className="menu" onClick={ openSidebar }>
          <IconMenu/>
        </button>           
      </div>
      <div className="sidebar">
        <div className="btn-close-container">
          <button aria-label='fechar menu lateral' className="close" onClick={ closeSidebar }>
            <img src="/icons/close.svg" alt="icone de fechar" />
          </button>
        </div>       
        <Navlinks onClick={ closeSidebar }/>
        <div className="backdrop" onClick={ closeSidebar }></div>
      </div>
    </nav>
  )
}