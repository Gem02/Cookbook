import './tag.css';

const Tags = () =>{
    return(
        <section class="tag-lists">
            <div className='list'>
                <h1>Choose your health preference</h1>
                <p>Choosing your health preference is an important step towards achieving a healthier lifestyle. </p>
            </div>
            <div className='tag-list'>
                <a className='tagitem' >Wheat-Free</a>

                <a className='tagitem'>Vegetarian</a>

                <a className='tagitem'>Vegan</a>

                <a className='tagitem'>Tree-nut-free</a>

                <a className='tagitem'>Sulfite-free</a>

                <a className='tagitem'>Sugar-conscious</a>

                <a className='tagitem'>Soy-free</a>

                <a className='tagitem'>Shellfish-free</a>

                <a className='tagitem'>Sesame-free</a>

                <a className='tagitem'>Red-meat-free</a>

                <a className='tagitem'>Pork-free</a>

                <a className='tagitem'>pecatarian</a>

                <a className='tagitem'>Peanut-free</a>

                <a className='tagitem'>Paleo</a>

                <a className='tagitem'>No-oil-added</a>

                <a className='tagitem'>Mustard-free</a>
            </div>
        </section>
    )
}

export default Tags;