import useStore from "../store/Store";

function About() {
  const { number, increase, decrease, reset } = useStore();
  return (
    <div>
      <h1>number:{number}</h1>
      <div className="flex flex-col gap-2 ">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default About;
