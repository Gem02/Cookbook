import { useState } from 'react';
import './foodcard.css';
import {pic1, pic2, pic3, pic4, pic5} from './exports';
import { Link } from 'react-router-dom';
import { FaRegClock, FaRegHeart } from 'react-icons/fa';

export const Card = ({image, heading, time, icon}) =>{
    return(
        <div className='foodcard'>
            <div className='imageHolder'>
                <img src={image}/>
            </div>
            <div className='cardContent'>
            <Link to={'/recipe/3'}> <p className='cardHead'>Sweet yummy, deletious roasted cow meat for your enjoyment and everthing</p> </Link>
                <div className='cardbuttom'>
                    <div className='flex'>
                        <FaRegClock />
                        <p>2 mins</p>
                    </div>
                    
                    <FaRegHeart color='gray'/>
                </div>
            </div>
        </div>
    )
}
 const Foodcard = () =>{
    const [activeTab, setActiveTab] = useState('all')
    return(
        <section className='mainfood'>
            <ul className='categorylist'>
                <li className= {activeTab === "all" ? 'active' : ''} onClick={() => setActiveTab('all')}>All</li>
                <li className={activeTab === "breakfast" ? 'active' : ''} onClick={() => setActiveTab('breakfast')}>Breakfast</li>
                <li className={activeTab === "launch" ? 'active' : ''} onClick={() => setActiveTab('launch')}>Launch</li>
                <li className={activeTab === "dinner" ? 'active' : ''} onClick={() => setActiveTab('dinner')}>Dinner</li>
                <li className={activeTab === "tea" ? 'active' : ''} onClick={() => setActiveTab('tea')}>Tea</li>
            </ul>
            <div className='tabcontent'>
                <div className= {activeTab === "all" ? 'flexfoodlist active' : 'flexfoodlist hide'} >
                   <Card image={pic2}/>
                   <Card image={pic3}/>
                   <Card image={pic4}/>
                   <Card image={pic1}/>
                   <Card image={pic5}/>
                   <Card image={pic2}/>
                   <Card image={pic3}/>
                   <Card image={pic4}/>
                   <Card image={pic1}/>
                   <Card image={pic5}/>
                </div>
                <div className={activeTab === "breakfast" ? 'flexfoodlist active' : 'flexfoodlist hide'}>
                    <Card image={pic5}/>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic4}/>
                    <Card image={pic3}/>
                    <Card image={pic1}/>
                    <Card image={pic3}/>
                    <Card image={pic2}/>
                    <Card image={pic4}/>
                    <Card image={pic5}/>
                </div>
                <div className={activeTab === "launch" ? 'flexfoodlist active' : 'flexfoodlist hide'}>
                    <Card image={pic1}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic5}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    
                    <Card image={pic5}/>
                </div>
                <div className={activeTab === "dinner" ? 'flexfoodlist active' : 'flexfoodlist hide'}>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic2}/>
                    <Card image={pic5}/>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic1}/>
                    <Card image={pic5}/>
                </div>
                <div className={activeTab === "tea" ? 'flexfoodlist active' : 'flexfoodlist hide'}>
                    <Card image={pic5}/>
                    <Card image={pic1}/>
                    <Card image={pic5}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic1}/>
                    
                </div>
            </div>

            <div className='nextsection'>
                <h1>Niegeria Dishes</h1>
                <div className='flexfoodlist'>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic5}/>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic5}/>
            </div>
            </div>

            <div className='nextsection'>
                <h1>African Dishes</h1>
                <div className='flexfoodlist'>
                    <Card image={pic5}/>
                    <Card image={pic4}/>
                    <Card image={pic3}/>
                    <Card image={pic2}/>
                    <Card image={pic1}/>
                    <Card image={pic5}/>
                    <Card image={pic4}/>
                    <Card image={pic3}/>
                    <Card image={pic2}/>
                    <Card image={pic5}/>
                </div>
            </div>

            <div className='nextsection'>
                <h1>Intercontinental Dishes</h1>
                <div className='flexfoodlist'>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic5}/>
                    <Card image={pic1}/>
                    <Card image={pic2}/>
                    <Card image={pic3}/>
                    <Card image={pic4}/>
                    <Card image={pic5}/>
                </div>
            </div>
        </section>
        
    )
}

export default Foodcard;