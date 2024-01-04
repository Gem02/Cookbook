import './sidebar.css';
import { GoFilter } from 'react-icons/go';
import { MdClose} from 'react-icons/md';
import { TbAntennaBars2, TbAntennaBars3, TbAntennaBars5 } from 'react-icons/tb';
import { BiHome } from 'react-icons/bi';
import {BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({menu, setMenu}) =>{
    
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSearch = () =>{
        if (searchTerm !== '') {
            setMenu(false);
            navigate(`/recipes/${searchTerm}`);
        }
    }
    
    const redirect = () =>{
        setMenu(false);
        navigate(`/saved`);
    }

    const gohome = () =>{
        setMenu(false);
        navigate(`/`);
    }

    const fetchmore = (direction) =>{
        setMenu(false);
        navigate(`/recipes/${direction}`);
    }

    
    return (
        <div>
            <div className={menu ? 'sidebar active' : 'sidebar null'}>
                <div className='title-wrapper'>
                    <span ><GoFilter size={'20px'} /></span>
                    <p className='text-filter'>Filter</p>
                    <button className='close-btn'>
                       <MdClose size={'20px'} onClick={() => setMenu(false)}/>
                    </button>
                </div>

                <div className='filter-content'>

                    <div className='search-wrapper'>
                        <div className='input-outline'>
                            <input type='search' name='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id='search' placeholder='Search a recipe' className='filter-search' />
                            <BsSearch size={'20px'} color='gray' onClick={handleSearch}/>
                        </div>
                    </div>

                    <div className='accordion-container' onClick={gohome} data-accordion>

                        <button  className='accordion-btn' >
                                <BiHome size={'20px'}/>
                                <p className='labelhead' >Home</p>
                                <span className='icon'></span>
                        </button>
                    </div>

                    <div className='accordion-container' onClick={() => fetchmore('easy')} data-accordion>

                        <button  className='accordion-btn' >
                                <TbAntennaBars2 size={20}/>
                                <p className='labelhead' >Easy Recipes</p>
                                <span className='icon'></span>
                        </button>
                    </div>

                    <div className='accordion-container' onClick={() => fetchmore('moderate')} data-accordion>

                        <button  className='accordion-btn' >
                                <TbAntennaBars3 size={20} />
                                <p className='labelhead' >Moderate Recipes</p>
                                <span className='icon'></span>
                        </button>
                    </div>

                    <div className='accordion-container' onClick={() => fetchmore('difficult')} data-accordion>

                        <button  className='accordion-btn' >
                                <TbAntennaBars5 size={20} />
                                <p className='labelhead' >Difficult Recipes</p>
                                <span className='icon'></span>
                        </button>
                    </div>

                </div>

                <div className='filter-actions'>
                    <button>Clear</button>
                    <button className='apply'>Apply</button>
                </div>
            </div>
        </div>
    )
}