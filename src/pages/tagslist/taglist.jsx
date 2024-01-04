import './taglist.css';
import { Card } from '../../components/foodcard/foodcard';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TagList = () =>{

    const { tag } = useParams();

    const [individualRecipe, setIndividualRecipe] = useState([]);

    useEffect(() =>{

        const api_id = "e3f53a21";
        const api_key = "6e3eab68a7c2c5517527aeff313a93d7";

        const fetchindividual = async () =>{
            try {
                const response = await axios.get(`https://api.edamam.com/search?q=&health=${tag}&app_id=${api_id}&app_key=${api_key}&from=0&to=20`);
                setIndividualRecipe(response.data.hits);
            } catch (error) {
                console.log('Error fetching recipe', error);
            }
            
        }

        fetchindividual();
    }, [tag])

/* const saveRecipe = ({image, label, time, link}) =>{
    if (individualRecipe) {

        const saveThis = {
            image: image,
            label: label,
            time: time,
            link: link
        }

        const oldRecipesList = JSON.parse(localStorage.getItem('saveThis')) || [];
        const newRecipes = [...oldRecipesList, saveThis];

        localStorage.setItem('saveThis', JSON.stringify(newRecipes))
    }
} */
    return(
        <section className='alllistSec'>
            <div className='title'>
                <h1>Home of recipes</h1>
                <div className='flex'>
                    <span>Search result for:</span>
                    <p>{ tag }</p>
                </div>
                
            </div>
            <div className='alllist'>

                    {individualRecipe?.map((info) => (
                       <Link to={`/recipe/${info.recipe.uri.split('_')[1]}`}> <Card image={info.recipe.image} heading={info.recipe.label} key={info.recipe.url} time={info.recipe.totalTime}/> </Link>
                    ))}
            </div>
        </section>
    )
}
export default TagList;