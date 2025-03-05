import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import About from "./comp/About";
import { PageProvider } from "./Pagecontext";
import Register from "./protected/Register";
import Login_pro from "./protected/Login_pro";
import Mainlayout from "./comp/Mainlayout";
import Protectedroute from "./protected/Protectedroute";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route element={<Protectedroute />}>
            <Route
              path="/"
              element={
                <PageProvider>
                  <Home />
                </PageProvider>
              }
            />
            <Route path="/login/" element={<Login />} />
            <Route
              path="/"
              element={
                <PageProvider>
                  <Home />
                </PageProvider>
              }
            />
            <Route
              path="/home"
              element={
                <PageProvider>
                  <Home />
                </PageProvider>
              }
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login_pro" element={<Login_pro />} />
      </Routes>
    </div>
  );
}

export default App;
