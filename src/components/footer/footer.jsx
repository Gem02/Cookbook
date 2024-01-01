import './footer.css';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'


const Footer = () =>{

    const currentDate = new Date().getFullYear();
    const copyrightLog = String.fromCharCode(169);

    return(
        <section className="footer">
            <footer>
                <div className="content">
                        <div className="logo">
                            <p>COOK<strong>BOOK</strong></p>
                        </div>
                        
                    <div className='flex recipes'>
                        <p>All recipes</p>
                        <p>Easy recipes</p>
                        <p>Difficult recipes</p>
                    </div>
                    <div className="buttom">
                        <a href="https://www.facebook.com/profile.php?id=100057955494388" ><FaFacebook className='iconfa'/></a>
                        <a href="https://www.google.com/mail"><FaGoogle className='iconfa'/></a>
                        <a href="#" className="fab fa-github list"><FaGithub className='iconfa'/></a>
                    </div>
                </div>
                <div className="last">
                    <p>Copyright</p>
                    <div class="flex">
                        <p >{copyrightLog}</p>
                        <p >{currentDate}</p>
                    </div>
                    <p>Designed by <strong>GEM</strong></p>

                </div>
            </footer>
        </section>

    )
}

export default Footer;