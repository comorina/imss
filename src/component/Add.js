import "./Add.css";

function Add(){
    return(
        <div>
            <header>
                <div className='fit'></div>
                <h1 className='t'>Todo App</h1>
            </header>

            <p className='para'>Here you can add Todo.</p>

            <input type='text' className='inpt' placeholder='Title.. .' autoFocus required/><br/>
            
            <div>
               
                    <button type="button" className="addbtn">Add</button>
            
            </div>

        </div>
    );
}

export default Add;