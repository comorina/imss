import { Link } from 'react-router-dom';  // import link for link the pages.

function Home() {
    return (
        <div>
            <h3 className='usr'>Username</h3>
            <div>
            {/* Input Text Field Add */}
            <input type='text' id='name' placeholder='John Doe' autoFocus required className='inpt' /><br />
            </div>
            {/* Button Add */}
            <div>
                <Link to={'/about'}>
                    <button type='button' className="startbtn">START</button>
                </Link>
            </div>
        </div>
    );
};
export default Home;