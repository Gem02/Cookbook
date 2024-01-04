import React, { useEffect, useState } from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import { TbMenu } from 'react-icons/tb';
import { PiMoon, PiSun } from 'react-icons/pi';
import { Sidebar } from '../sidebar/sidebar';

 export const Header = () =>{

    const [menu, setMenu] = useState(false);
    const [dark, setDark] =useState();

  
        const setDarkMode = () =>{
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDark(true)
        }

      const setLiightMode = () =>{
        document.querySelector('body').classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setDark(false)
      }

        
      const checkTheme = () =>{
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            setDarkMode();
        }else{
            setLiightMode();
        }
      }
      useEffect(() =>{
        checkTheme();
      }, [])
      const changeTheme = () =>{
        dark ?
            setLiightMode()
        :
            setDarkMode();
      }
      
    return (
        <header>
            <div className='header'>
            <Link to={"/"} ><div className='logo'><p>COOK<strong>BOOK</strong></p></div></Link>
                <div className='headerflex'>
                   <button className='clickicon' onClick={changeTheme} >{dark ? <PiSun /> : <PiMoon /> }</button>
                    <button className='clickicon' onClick={() => setMenu((current) => !current)}><TbMenu /></button>
                </div>
            </div>
            <Sidebar menu={menu} setMenu={setMenu}/>
        </header>
    )
}
