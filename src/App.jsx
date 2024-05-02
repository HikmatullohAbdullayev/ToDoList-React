function App() {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-700 h-screen ">
      <div className="todo">
        <form className="flex">
          <div className="ino">
            <input type="text" />
          </div>
          <div className="btn">
            <button>Qo`shish</button>
          </div>
        </form>
      </div> 
      <div className="list flex">
        <input type="checkbox" name="done" id="done" />
        <label htmlFor="done">
        <p>item</p>
          </label>
        <button>O`chirish</button>
      </div>
    </section>
  );
}

export default App;
