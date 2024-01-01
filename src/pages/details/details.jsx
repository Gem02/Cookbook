import './details.css';
import Photo from '../../assets/images/coffee-3120750_1280.jpg';

const Details = () =>{
    return(
        <section>
            <div className='details'>
                <div className='imageholder'><img src={Photo} alt='japan tea'></img></div>
                <div className='maindetails'>
                    <h1 className='mainhead'>japan special and shifu rich coffe for special occations and other bla bla bla rubish
                    </h1>
                    <span className='category'>Breakfast</span>
                    <p className='foodinfo'>FOOD INFO</p>
                    <div className='innerdetails'>
                        <div className='innerdiv'>
                            <h2>16</h2>
                            <span>Mins</span>
                            <p>COOK TIME</p>
                        </div>
                        <div className='innerdiv'>
                            <h2>231</h2>
                            <span>KCAL</span>
                            <p>CALORIES</p>
                        </div>
                        <div className='innerdiv'>
                            <h2>6</h2>
                            <span>ITEMS</span>
                            <p>INGREDIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details-secondpart'>
                <div className='detailsdec'>
                    <h2>Ingredients</h2>
                    <ol>
                        <li>Water yes water</li>
                        <li>Sugar</li>
                        <li>Milo please use the one from japan</li>
                        <li>Milk even peak milk can do</li>
                        <li>Cloves. Some people no knw am shaa </li>
                        <li>others...</li>
                    </ol>
                </div>
                <div className='detailsdec'>
                    <h2>Procedures</h2>
                        <p>Water with the chemical formula (H2O) is a universal solvent due to the presence of
                        Hydrogen bonding and its polarity. This is as a result of high electro negativity of the Oxygen
                        atom which pulls the shared electron pair to it, thereby making the Hydrogen atom partially
                        positive and the Oxygen partially negative.
                        Water with the chemical formula (H2O) is a universal solvent due to the presence of
                        Hydrogen bonding and its polarity. This is as a result of high electro negativity of the Oxygen
                        atom which pulls the shared electron pair to it, thereby making the Hydrogen atom partially
                        positive and the Oxygen partially negative.
                        Water with the chemical formula (H2O) is a universal solvent due to the presence of
                        Hydrogen bonding and its polarity. This is as a result of high electro negativity of the Oxygen
                        atom which pulls the shared electron pair to it, thereby making the Hydrogen atom partially
                        positive and the Oxygen partially negative.
                        Water with the chemical formula (H2O) is a universal solvent due to the presence of
                        Hydrogen bonding and its polarity. This is as a result of high electro negativity of the Oxygen
                        atom which pulls the shared electron pair to it, thereby making the Hydrogen atom partially
                        positive and the Oxygen partially negative.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Details;