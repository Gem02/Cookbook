import './recipeslist.css';
import { Card } from '../../components/foodcard/foodcard';
import { pic1, pic2, pic3, pic4, pic5 } from '../../components/foodcard/exports';
import { useParams } from 'react-router-dom';

const RecipesList = () =>{

    const { text } = useParams();

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
                <Card image={pic3} />
                <Card image={pic4} />
                <Card image={pic5} />
                <Card image={pic2} />
                <Card image={pic4} />
                <Card image={pic1} />
                <Card image={pic3} />
                <Card image={pic5} />
                <Card image={pic2} />
                <Card image={pic1} />
                <Card image={pic4} />
                <Card image={pic3} />
                <Card image={pic5} />
                <Card image={pic2} />
                <Card image={pic4} />
            </div>
        </section>
    )
}
export default RecipesList