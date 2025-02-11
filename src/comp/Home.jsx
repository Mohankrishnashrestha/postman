import { useContext, useEffect } from "react";
import { newcontex } from "../Pagecontext";
import axios from "axios";

function Home() {
  const { data, setData } = useContext(newcontex);

  const handle = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handle();
  }, []);

  console.log(data);

  return <div>Home</div>;
}

export default Home;
