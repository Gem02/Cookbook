import './home.css';
import { Hero, Foodcard, Tags } from '../../components/components';
const Home = () =>{
    return(
        <div className='home'>
            <Hero />
            <Foodcard />
            <Tags />
        </div>
    )
}

export default Home;