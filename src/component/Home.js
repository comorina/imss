import './Home.css';
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <header>
            <div className='fit'></div>
                <h1 className='t'>Todo App</h1>
            </header>

            <p className='usr'>Username</p>

                <input type='text' id= 'name'placeholder='John Doe' autoFocus required/><br/>
                <div>
                    <Link to="/Add">
                        <button type='button'className="startbtn">START</button>
                    </Link>
                </div>
        </div>
    );
}
export default Home;