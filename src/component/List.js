import './List.css';
import bin from'./bin.png';
import edit from'./edit.png';
function List() {
    return(
        <div>
            <header>
                <div className='fit'></div>
                <h1>Todo App</h1>
            </header>

            <p className='para1'>All Todo List.</p>
            <hr/>

            <div>
                <input type='text' id ='editcontent'/>
                <button type='button' className="editbtn">Edit</button>
            </div><br/><br/>

            <table>
                <tr>
                    <td><h3 className="Listname">Apple</h3></td>
                    <td>
                            <button className="btn"> <img src={bin} className="btnsize"/> </button>
                            < button className="btn1"> <img src={edit} className="btnsize"/> </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default List;