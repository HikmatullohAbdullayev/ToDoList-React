import { useState } from "react";
import AddIcon from "../assets/icon/AddIcon";

function FormToDo({ addTask }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };
  const change = (e) => {
    setInput(e.currentTarget.value);

  };

  return (
    <div>
      <form className="flex  justify-between items-center max-w-[500px] gap-3" onSubmit={submit}>
        <div className=" w-full  bg-slate-200 rounded-lg ">
          <input className="w-full mx-auto bg-slate-200  px-[10px] py-[8px] rounded-lg active:border-blue-300 focus:outline-blue-300"
            type="text"
            value={input}
            onChange={change}
            placeholder="Ma'lumot kiriting"
            aria-label="add todo"
          />
          
        </div>

        <button className="py-[8px] px-[12px] bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">
          <span className="fill-white">
            <AddIcon />
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormToDo;
