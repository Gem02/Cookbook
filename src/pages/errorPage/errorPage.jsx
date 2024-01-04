import { Link } from 'react-router-dom';
import './error.css';

const ErrorPage = () =>{
    return(
        <div className='error'>
            <p>Page not found</p>
            <Link to={'/'}>Go to Home</Link>
        </div>
    )
}

export default ErrorPage;