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
                <Link to ='/tags/wheat-free' className='tagitem' >Wheat-Free</Link>

                <Link to={'/tags/vegetarian'} className='tagitem'>Vegetarian</Link>

                <Link to={'/tags/vegan'} className='tagitem'>Vegan</Link>

                <Link to={'/tags/free-nut-free'} className='tagitem'>Tree-nut-free</Link>

                <Link to={'/tags/sulfite-free'} className='tagitem'>Sulfite-free</Link>

                <Link to={'/tags/sugar-conscious'} className='tagitem'>Sugar-conscious</Link>

                <Link to={'/tags/soy-free'} className='tagitem'>Soy-free</Link>

                <Link to={'/tags/shellfish-free'} className='tagitem'>Shellfish-free</Link>

                <Link to={'/tags/sesame-free'} className='tagitem'>Sesame-free</Link>

                <Link to={'/tags/red-meat-free'} className='tagitem'>Red-meat-free</Link>

                <Link to={'/tags/pork-free'} className='tagitem'>Pork-free</Link>

                <Link to={'/tags/pecatarian'} className='tagitem'>pecatarian</Link>

                <Link to={'/tags/peanut-free'} className='tagitem'>Peanut-free</Link>

                <Link to={'/tags/paleo'} className='tagitem'>Paleo</Link>

                <Link to={'/tags/no-oil-added'} className='tagitem'>No-oil-added</Link>

                <Link to={'/tags/mustard-free'} className='tagitem'>Mustard-free</Link>
            </div>
        </section>
    )
}

export default Tags;