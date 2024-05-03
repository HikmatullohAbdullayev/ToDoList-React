import DeleteIcon from "../assets/icon/DeleteIcon"
import DoneIcon from "../assets/icon/DoneIcon"

function ListItem({item, delTask, doneTask }) {
    console.log(item);
    return (

        <ul key={item.id} className="flex gap-2 justify-between items-center  py-[10px]  ">
            <li  className={` flex justify-between items-center w-full bg-blue-200 py-[5px] px-[8px]  rounded-lg ${item.status ? "text-red-600 line-through" : ""}`}>
            <button onClick={() =>  doneTask(item.id)} >
                <span className="fill-green-700">
                <DoneIcon/>
                </span>
            </button>
            <p className="">{item.title}</p>

            <button className="p-[5px] " onClick={ () =>  delTask(item.id)}>
                <span className="fill-red-700">
                <DeleteIcon/>
                </span>
            </button>
            </li>
            
            
        </ul>
    );
}

export default ListItem;

