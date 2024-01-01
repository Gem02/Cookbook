import './sidebar.css';
import { GoFilter } from 'react-icons/go';
import { MdClose, MdOutlineKeyboardArrowDown, MdBookmark } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { GiSpoon } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import {BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({menu, setMenu}) =>{
    
    const [toggleCookTime, setToggleCookTime] = useState(false);
    const [toggleIngr, setToggleIngr] = useState(false);
    const [toggleCalories, setToggleCalories] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSearch = () =>{
        if (searchTerm !== '') {
            setMenu(false)
            navigate(`/recipes/${searchTerm}`);
        }
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
                            <label for='search' name='search' className='label'>Search</label>
                            <input type='search' name='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id='search' placeholder='Search a recipe' className='filter-search' />
                            <BsSearch size={'20px'} color='gray' onClick={handleSearch}/>
                        </div>
                    </div>

                    <div className='accordion-container' data-accordion>

                        <button  className='accordion-btn' onClick={() => setToggleCookTime((current) => !current)}>
                            <MdBookmark size={'20px'}/>
                            <p className='labelhead'>Saved Recipes</p>
                            <span className='icon'></span>
                        </button>
                    </div>

                    <div className='accordion-container' data-accordion>

                        <button aria-expanded={toggleCookTime ? 'true' : 'false'} className='accordion-btn' onClick={() => setToggleCookTime((current) => !current)}>
                            <FaRegClock size={'20px'}/>
                            <p className='labelhead'>Cooking Time</p>
                            <span className='icon'><MdOutlineKeyboardArrowDown size={'20px'}/></span>
                        </button>

                        <div className='accordion-content' id='cooking-time'>
                            <div data-filter='time'>

                                <label className='filter-chip'>&lt; 5 minutes
                                    <input type='radio' name='cook-time' value='5' aria-label='5 or less minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>5 - 10 minutes
                                    <input type='radio' name='cook-time' value='5-10' aria-label='5 to 10 minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>10 - 20 minutes
                                    <input type='radio' name='cook-time' value='10-20' aria-label='10 to 20 minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>20 - 30 minutes
                                    <input type='radio' name='cook-time' value='20-30' aria-label='20 to 30 minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>30 - 40 minutes
                                    <input type='radio' name='cook-time' value='30-40' aria-label='30 to 40 minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>40 - 50 minutes
                                    <input type='radio' name='cook-time' value='40-50' aria-label='40 to 50 minutes' className='checkbox' />
                                </label>

                                <label className='filter-chip'>&gt; 1 hour
                                    <input type='radio' name='cook-time' value='60+' aria-label='1 or more hours' className='checkbox' />
                                </label>

                            </div>
                        </div>
                    </div>

                    <div className='accordion-container' data-accordion>

                        <button aria-expanded={toggleIngr ? 'true' : 'false'} className='accordion-btn' onClick={() => setToggleIngr((current) => !current)}>
                            <GiSpoon size={'20px'}/>
                            <p className='labelhead'>Ingredients Qty</p>
                            <span className='icon'><MdOutlineKeyboardArrowDown size={'20px'}/></span>
                        </button>
                        
                        <div className='accordion-content' id='ingr'>
                            <div data-filter='ingr'>

                                <label className='filter-chip'>&lt; 5 Ingredients
                                    <input type='radio' name='ingr' value='5' aria-label='5 or less Ingredients' className='checkbox' />
                                </label>

                                <label className='filter-chip'>5 - 10 Ingredients
                                    <input type='radio' name='ingr' value='5-10' aria-label='5 to 10 Ingredients' className='checkbox' />
                                </label>

                                <label className='filter-chip'>10 - 20 Ingredients
                                    <input type='radio' name='ingr' value='10-20' aria-label='10 to 20 Ingredients' className='checkbox' />
                                </label>

                                <label className='filter-chip'>20 - 30 Ingredients
                                    <input type='radio' name='ingr' value='20-30' aria-label='20 to 30 Ingredients' className='checkbox' />
                                </label>

                                <label className='filter-chip'>&gt;30 Ingredients
                                    <input type='radio' name='ingr' value='30+' aria-label='30 or more Ingredients' className='checkbox' />
                                </label>

                            </div>
                        </div>
                    </div>

                    <div className='accordion-container' data-accordion>

                        <button aria-expanded={toggleCalories ? 'true' : 'false'} className='accordion-btn' onClick={() => setToggleCalories((current) => !current)}>
                            <BiFoodMenu size={'20px'}/>
                            <p className='labelhead'>Calories</p>
                            <span className='icon'><MdOutlineKeyboardArrowDown size={'20px'}/></span>
                        </button>
                        
                        <div className='accordion-content' id='calories'>
                            <div data-filter='calories'>

                                <label className='filter-chip'>&lt; 50 Calories
                                    <input type='radio' name='calories' value='50' aria-label='5 or less Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>50 - 100 Calories
                                    <input type='radio' name='calories' value='50-100' aria-label='50 to 100 Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>100 - 200 Calories
                                    <input type='radio' name='calories' value='100-200' aria-label='100 to 200 Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>200 - 300 Calories
                                    <input type='radio' name='calories' value='200-300' aria-label='200 to 300 Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>300 - 400 Calories
                                    <input type='radio' name='calories' value='300-400' aria-label='300 to 400 Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>400 - 500 Calories
                                    <input type='radio' name='calories' value='400-400' aria-label='400 to 500 Calories' className='checkbox' />
                                </label>

                                <label className='filter-chip'>&gt;500 Calories
                                    <input type='radio' name='calories' value='500+' aria-label='500 or more Calories' className='checkbox' />
                                </label>

                            </div>
                        </div>
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