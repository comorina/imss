import { Link } from 'react-router-dom';

function Home() {
    const Welcome=()=>{
        alert("Welcome in Todo")
    };
    return (
        <div>
            <h3 className='usr'>Username</h3>
            <div>
            <input type='text' id='name' placeholder='John Doe' autoFocus required className='inpt' /><br />
            </div>
            <div>
                <Link to={'/about'}>
                    <button type='button' className="startbtn" onClick={Welcome}>START</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;