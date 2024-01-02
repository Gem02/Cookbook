import { Link } from 'react-router-dom';
import './tag.css';

const Tags = () =>{
    return(
        <section class="tag-lists">
            <div className='list'>
                <h1>Choose your health preference</h1>
                <p>Choosing your health preference is an important step towards achieving a healthier lifestyle. </p>
            </div>
            <div className='tag-list'>
                <Link to ='/recipes/wheat-free' className='tagitem' >Wheat-Free</Link>

                <Link to={'/recipes/vegetarian'} className='tagitem'>Vegetarian</Link>

                <Link to={'/recipes/vegan'} className='tagitem'>Vegan</Link>

                <Link to={'/recipes/free-nut-free'} className='tagitem'>Tree-nut-free</Link>

                <Link to={'/recipes/sulfite-free'} className='tagitem'>Sulfite-free</Link>

                <Link to={'/recipes/sugar-conscious'} className='tagitem'>Sugar-conscious</Link>

                <Link to={'/recipes/soy-free'} className='tagitem'>Soy-free</Link>

                <Link to={'/recipes/shellfish-free'} className='tagitem'>Shellfish-free</Link>

                <Link to={'/recipes/sesame-free'} className='tagitem'>Sesame-free</Link>

                <Link to={'/recipes/red-meat-free'} className='tagitem'>Red-meat-free</Link>

                <Link to={'/recipes/pork-free'} className='tagitem'>Pork-free</Link>

                <Link to={'/recipes/pecatarian'} className='tagitem'>pecatarian</Link>

                <Link to={'/recipes/peanut-free'} className='tagitem'>Peanut-free</Link>

                <Link to={'/recipes/paleo'} className='tagitem'>Paleo</Link>

                <Link to={'/recipes/no-oil-added'} className='tagitem'>No-oil-added</Link>

                <Link to={'/recipes/mustard-free'} className='tagitem'>Mustard-free</Link>
            </div>
        </section>
    )
}

export default Tags;