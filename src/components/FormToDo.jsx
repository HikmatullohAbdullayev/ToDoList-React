import { useState } from "react";
import AddIcon from "../assets/icon/AddIcon";

function FormToDo({ addTask }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTask(input);
    console.log(input);
    setInput("");
  };
  const change = (e) => {
    setInput(e.currentTarget.value);

    // console.log(input);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="max-w-[500px]  bg-slate-200">
          <input className="w-full mx-auto bg-slate-200  px-[10px] py-[8px] rounded-lg"
            type="text"
            value={input}
            onChange={change}
            placeholder="Ma'lumot kiriting"
          />
        </div>

        <button>
          <span>
            <AddIcon />
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormToDo;
