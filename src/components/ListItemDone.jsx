

function ListItemDone({item, delTask, doneTask }) {
    return (
        <ul key={item.id}>
            <li onClick={() =>  doneTask(item.id)}  className={` ${item.status ? "text-red-600" : "text-blue-400"}`}>{item.title}</li>
            <button onClick={ () =>  delTask(item.id)}>del</button>
            
        </ul>
    );
}

export default ListItemDone;

