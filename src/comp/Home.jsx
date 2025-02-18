import { useContext } from "react";
import { context } from "../Pagecontext";
import useStore from "../store/Store";

function Home() {
  const { state, setState, change, theme, toggle } = useContext(context);
  console.log("res:", change);
  return (
    <div
      style={{
        color: theme.color,
        backgroundColor: theme.background,
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <button className="border p-2" onClick={toggle}>
          click to change the theme
        </button>
      </div>
      {state}
      <button onClick={() => setState(state + 1)}>click</button>
      <ul>
        {change.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
