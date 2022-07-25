import { useState } from "react";

export default function App() {
  const [name, setname] = useState("");
  const [size, setsize] = useState("");
  const [pep, setpep] = useState("");
  const [glut, setglut] = useState("");
  const [quan, setquan] = useState("");
  const [inst, setinst] = useState("");

  function order() {
    const htmlpage = `<h2> order your ${quan} ${size} pizza's are ${
      pep ? `have pep` : `have not pep`
    } ${glut ? `have glut` : `have not glut`} for ${name}</h2>
                      <h1>Instruction : ${inst}</h1>`;

    document.getElementById("root").innerHTML = htmlpage;
  }

  return (
    <form>
      <img
        width="350px"
        src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/q/x/p49-1493902576590b24f0cacb9.jpg?tr=tr:n-xlarge"
      />
      <h1>ENJOY YOUR PIZZA</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            id="name"
            onChange={(e) => setname(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Size:
          <select id="size" onChange={(e) => setsize(e.target.value)}>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </label>
      </div>
      <br />
      <div>
        <label>
          Pepproni:
          <input
            type="checkbox"
            id="pep"
            onChange={(e) => setpep(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Gluteenfree:
          <input
            type="checkbox"
            id="glut"
            onChange={(e) => setglut(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Quantity:
          <input
            type="text"
            id="quan"
            onChange={(e) => setquan(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Instruction:
          <textarea
            type="text"
            id="inst"
            onChange={(e) => setinst(e.target.value)}
          ></textarea>
        </label>
      </div>
      <br />
      <button onClick={order} disabled={(!name, !quan, !inst)}>
        Submit
      </button>
    </form>
  );
}
