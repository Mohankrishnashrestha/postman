import { Outlet } from "react-router-dom";
import Header from "../Header";

function Mainlayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Mainlayout;
