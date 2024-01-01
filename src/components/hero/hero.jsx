import React from 'react';
import './hero.css';
import {BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () =>{
    
    const [itemtosearch, setItemToSearch] = useState('');
    const navigate = useNavigate();

    const searchNow = () =>{
        if (itemtosearch !== '') {
            
            navigate(`/recipes/${itemtosearch}`);
        }
    }

    return (
        <div className='hero'>
            <div className='background'>
                <div className='middle'>
                    <h1>LEARN TO COOK BY YOURSELF</h1>
                    <div className='herosearch'>
                        <input placeholder='Search any recipe or keyword...' value={itemtosearch} type='search' onChange={(e) => setItemToSearch(e.target.value)} />
                        <button className='clickicon' onClick={searchNow} ><BsSearch color='white'/></button>
                    </div>
                    <p className='text'>You can search: Rice, breakfast, tea, e.t.c</p>
                </div>
            </div>

        </div>
    )
}

export default Hero;