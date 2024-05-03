import DeleteIcon from "../assets/icon/DeleteIcon"
import DoneIcon from "../assets/icon/DoneIcon"

function ListItem({item, delTask, doneTask }) {
    console.log(item);
    return (

        <ul key={item.id} className="flex gap-2 justify-between items-center ">
            <button onClick={() =>  doneTask(item.id)} ><DoneIcon/></button>
            <li   className={` ${item.status ? "text-red-600" : "text-blue-400"}`}>{item.title}</li>
            <button onClick={ () =>  delTask(item.id)}><DeleteIcon/></button>
            
        </ul>
    );
}

export default ListItem;

