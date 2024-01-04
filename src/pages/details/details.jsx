import './details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPatchCheck } from 'react-icons/bs';
import { AiFillPushpin } from 'react-icons/ai'

const Details = () =>{

    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() =>{

        const api_id = "e3f53a21";
        const api_key = "6e3eab68a7c2c5517527aeff313a93d7";

        const fetchdetails = async () =>{
            try {

                const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?app_id=${api_id}&app_key=${api_key}&type=public`);
                
                setDetails(response.data);
                
            } catch (error) {
                console.log('Unable to fetch recipes', error);
            }
        }

        fetchdetails();
    }, [id]);


    return(
        <section>
            <div className='details'>
                <div className='imageholder'><img src={details?.recipe?.image} alt='japan tea'></img></div>
                <div className='maindetails'>
                    <h1 className='mainhead'>{details?.recipe?.label}
                    </h1>
                    <span className='category'>{details?.recipe?.mealType}</span>
                    <p className='foodinfo'>FOOD INFO</p>
                    <div className='innerdetails'>
                        <div className='innerdiv'>
                            <h2>{details?.recipe?.totalTime}</h2>
                            <span>Mins</span>
                            <p>COOK TIME</p>
                        </div>
                        <div className='innerdiv'>
                            <h2>{details?.recipe?.calories.toFixed(1)}</h2>
                            <span>CAL</span>
                            <p>CALORIES</p>
                        </div>
                        <div className='innerdiv'>
                            <h2>{details?.recipe?.ingredients?.length}</h2>
                            <span>ITEMS</span>
                            <p>INGREDIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details-secondpart'>
                <div className='detailsdec'>
                    <h2>Ingredients</h2>
                        {
                            details?.recipe?.ingredientLines.map((ingredient, index) =>{
                                return(
                                    <p className='ingrP' key={index}>
                                    <AiFillPushpin className='icon' /> {ingredient}</p>
                                )
                        })
                        }
                </div>
                <div className='detailsdec'>
                    <h2>Health labels</h2>
                    <div className='healths'>
                    {
                            details?.recipe?.healthLabels.map((text, index) =>{
                                return(
                                    <p key={index}>
                                    <BsPatchCheck className='icon' /> {text}</p>
                                )
                        })
                        }

                    </div>
                 </div>

            </div>
        </section>
    )
}

export default Details;