import { useEffect, useState } from 'react';
import './foodcard.css';
import {pic1, pic2, pic3, pic4, pic5} from './exports';
import { Link } from 'react-router-dom';
import { FaRegClock, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

export const Card = ({image, heading, time, icon}) =>{
    return(
        <div className='foodcard'>
            <div className='imageHolder'>
                <img src={image}/>
            </div>
            <div className='cardContent'>
            <Link to={'/recipe/3'}> <p className='cardHead'>{heading}</p> </Link>
                <div className='cardbuttom'>
                    <div className='flex'>
                        <FaRegClock />
                        <p>{time} mins</p>
                    </div>
                    
                    <FaRegHeart color='gray'/>
                </div>
            </div>
        </div>
    )
}
 const Foodcard = () =>{

    const [activeTab, setActiveTab] = useState('random');
    const [recipes, setRecipes] = useState([]);
    const [nigerianrecipe, setNigerianRecipe] = useState([]);
    const [africanrecipes, setAfricanRecipe] = useState([]);
    const [worldrecipes, setWorldRecipe] = useState([]);

    useEffect(() =>{
            
                const api_id = "e3f53a21";
                const api_key = "6e3eab68a7c2c5517527aeff313a93d7";

                    const fetchRecipesTabs = async (recipe, setit) =>{
                        try {

                            const response = await axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=${api_id}&app_key=${api_key}`);
                           setit(response.data.hits);
                             
                        } catch (error) {
                            console.error('Error fetching recipes', error);
                        }
                    }

                    fetchRecipesTabs(activeTab, setRecipes);
                    fetchRecipesTabs('nigeria', setNigerianRecipe);
                    fetchRecipesTabs('africa', setAfricanRecipe);
                    fetchRecipesTabs('recipes', setWorldRecipe);


    }, [activeTab]);

    return(
        <section className='mainfood'>
            <ul className='categorylist'>
                <li className= {activeTab === "random" ? 'active' : ''} onClick={() => setActiveTab('random')}>All</li>
                <li className={activeTab === "breakfast" ? 'active' : ''} onClick={() => setActiveTab('breakfast')}>Breakfast</li>
                <li className={activeTab === "launch" ? 'active' : ''} onClick={() => setActiveTab('launch')}>Launch</li>
                <li className={activeTab === "dinner" ? 'active' : ''} onClick={() => setActiveTab('dinner')}>Dinner</li>
                <li className={activeTab === "tea" ? 'active' : ''} onClick={() => setActiveTab('tea')}>Tea</li>
            </ul>
            <div className='tabcontent'>
                <div className= {activeTab === "random" ? 'flexfoodlist active' : 'flexfoodlist hide'} >

                    {recipes.map((info) => (
                        <Card image={info.recipe.image} heading={info.recipe.label} key={info.recipe.url} time={info.recipe.totalTime}/>
                    ))}
                   
                </div>
                <div className={activeTab === "breakfast" ? 'flexfoodlist active' : 'flexfoodlist hide'}>

                    {recipes.map((info) => (
                        <Card image={info.recipe.image} heading={info.recipe.label} time={info.recipe.totalTime} key={info.recipe.url}/>
                    ))}

                </div>
                <div className={activeTab === "launch" ? 'flexfoodlist active' : 'flexfoodlist hide'}>

                    {recipes.map((info) => (
                        <Card image={info.recipe.image} time={info.recipe.totalTime} heading={info.recipe.label} key={info.recipe.url}/>
                    ))}

                </div>
                <div className={activeTab === "dinner" ? 'flexfoodlist active' : 'flexfoodlist hide'}>

                    {recipes.map((info) => (
                        <Card image={info.recipe.image} time={info.recipe.totalTime} heading={info.recipe.label} key={info.recipe.url}/>
                    ))}

                </div>
                <div className={activeTab === "tea" ? 'flexfoodlist active' : 'flexfoodlist hide'}>

                    {recipes.map((info) => (
                        <Card image={info.recipe.image} time={info.recipe.totalTime} heading={info.recipe.label} key={info.recipe.url}/>
                    ))}
                    
                </div>
            </div>

            <div className='nextsection'>
                <h1>Nigeria Dishes</h1>
                <div className='flexfoodlist'>

                    {nigerianrecipe.map((info) => (
                        <Card image={info.recipe.image} heading={info.recipe.label} key={info.recipe.url} time={info.recipe.totalTime}/>
                    ))} 

                </div>
            </div>

            <div className='nextsection'>
                <h1>African Dishes</h1>
                <div className='flexfoodlist'>

                        {africanrecipes.map((recipesinfo) => (
                            <Card time={recipesinfo.recipe.totalTime} image={recipesinfo.recipe.image} heading={recipesinfo.recipe.label} key={recipesinfo.recipe.url}/>
                        ))}

                </div>
            </div>

            <div className='nextsection'>
                <h1>Intercontinental Dishes</h1>
                <div className='flexfoodlist'>
                    {worldrecipes.map((info) => (
                        <Card image={info.recipe.image} heading={info.recipe.label} key={info.recipe.url} time={info.recipe.totalTime}/>
                    ))} 
                </div>
            </div>
        </section>
        
    )
}

export default Foodcard;