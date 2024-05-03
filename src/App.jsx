
import { useState, useEffect } from "react";
import FormToDo from "./components/FormToDo";
import ListItem from "./components/ListItem";
import ListItemDone from "./components/ListItemDone";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("userData")) || [];
    setTodos(storedTodos);
  }, []);

  const addTask = (input) => {
    if (input) {
      const newData = {
        id: Date.now(),
        title: input,
        status: false,
      };
      const addTodo = [...todos, newData];
      setTodos(addTodo);
      localStorage.setItem("userData", JSON.stringify(addTodo));
      toast.success("Muvaffaqiyatli qo'shildi!");
    } else {
      toast.error("Ma'lumot kiritilmagan!");
    }
  };

  const delTask = (id) => {
    const delTodo = todos.filter((item) => item.id !== id);
    setTodos(delTodo);
    localStorage.setItem("userData", JSON.stringify(delTodo));
  };

  const doneTask = (id) => {
    const doneTodo = todos.map((item) =>
    item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(doneTodo);
    localStorage.setItem("userData", JSON.stringify(doneTodo));
  };

  const toggleAll = () => {
    setDone("all");
  };

  const toggleDone = () => {
    setDone("done");
  };

  const toggleTask = () => {
    setDone("task");
  };

  return (
    <section className="flex flex-col justify-center items-center px-[20px]   py-[16px] bg-blue-300 h-screen">
      <Toaster />
      <div className="container  max-w-[500px] w-full max-h-[500px]  h-full flex flex-col justify-start items-center bg-slate-100 rounded-lg  ">
        <h1 className="text-[24px] text-center py-[20px] text-blue-800">Vazifalar ro`yhati {todos.length} ta</h1>
        <div className="w-full px-[10px]">
          <FormToDo addTask={addTask} />
          <div className="flex justify-between items-center py-[20px] gap-[5px]">
            <button className="bg-blue-400 rounded-md px-[3px] py-[1px]" onClick={toggleAll}>Barchasi </button>
            <button className="bg-yellow-400 rounded-md px-[3px] py-[1px]" onClick={toggleDone}>Bajarilgan</button>
            <button className="bg-green-400 rounded-md px-[3px] py-[1px]" onClick={toggleTask}>Bajarilmagan</button>
          </div>
          <div className="flex gap-3 bg-slate-100  rounded-lg  ">
            {done === "all" && (
              <div className="w-full h-[310px]  overflow-y-scroll  py-[8px] px-[10px]   rounded-lg">
                {todos.map((task) => (
                  <ListItem
                    key={task.id}
                    item={task}
                    delTask={delTask}
                    doneTask={doneTask}
                  />
                ))}
              </div>
            )}
            {done === "done" && (
              <div className="w-full max-h-[350px]  overflow-y-scroll  py-[8px] px-[10px]">
                {todos
                  .filter((task) => task.status)
                  .map((task) => (
                    <ListItemDone
                      key={task.id}
                      item={task}
                      delTask={delTask}
                      doneTask={doneTask}
                    />
                  ))}
              </div>
            )}
            {done === "task" && (
              <div className="w-full max-h-[350px]  overflow-y-scroll py-[8px] px-[10px]">
                {todos
                  .filter((task) => !task.status)
                  .map((task) => (
                    <ListItemDone
                      key={task.id}
                      item={task}
                      delTask={delTask}
                      doneTask={doneTask}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
