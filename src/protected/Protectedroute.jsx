import { Navigate, Outlet } from "react-router-dom";

function Protectedroute() {
  const token = localStorage.getItem("token");

  return <div>{token ? <Outlet /> : <Navigate to={"/login_pro"} />}</div>;
}

export default Protectedroute;
