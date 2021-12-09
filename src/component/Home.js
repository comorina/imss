import './Home.css';

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
                    <button type='button'className="startbtn">START</button>
                </div>
        </div>
    );
}
export default Home;