import './saved.css';
import {Card} from '../../components/foodcard/foodcard';
import {Link} from 'react-router-dom';
import { pic5, pic2, pic3 } from '../../components/foodcard/exports';

const Saved = () =>{
    return(
        <section className='likedrecipe'>
            <h1 className='likedrecipeheading'>Liked Recipes</h1>
            <p className='likerecipetext'>Here is the list of recipes that you saved. Enjoy</p>
            <div className='likedrecipelist'>
                <Link to={'/recipe/3'}><Card image={pic5}/></Link>
                <Link to={'/recipe/3'}><Card image={pic2}/></Link>
                <Link to={'/recipe/3'}><Card image={pic3}/></Link>
            </div>
        </section>
    )
}

export default Saved;