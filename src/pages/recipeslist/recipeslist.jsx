import './recipeslist.css';
import { Card } from '../../components/foodcard/foodcard';
import { pic1, pic2, pic3, pic4, pic5 } from '../../components/foodcard/exports';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipesList = () =>{

    const { text } = useParams();

    const [individualRecipe, setIndividualRecipe] = useState([])

    useEffect(() =>{

        const api_id = "e3f53a21";
        const api_key = "6e3eab68a7c2c5517527aeff313a93d7";

        const fetchindividual = async () =>{
            try {
                const response = await axios.get(`https://api.edamam.com/search?q=${text}&app_id=${api_id}&app_key=${api_key}`);
                setIndividualRecipe(response.data.hits)
            } catch (error) {
                console.error('Error fetching recipe', error);
            }
            
        }

        fetchindividual();
    })


    return(
        <section className='alllistSec'>
            <div className='title'>
                <h1>Home of recipes</h1>
                <div className='flex'>
                    <span>Search result for:</span>
                    <p>{ text }</p>
                </div>
                
            </div>
            <div className='alllist'>

                    {individualRecipe.map((info) => (
                        <Card image={info.recipe.image} heading={info.recipe.label} key={info.recipe.url} time={info.recipe.totalTime}/>
                    ))}
            </div>
        </section>
    )
}
export default RecipesList