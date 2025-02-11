import Header from "./Header";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import { Pagecontext } from "./Pagecontext";
import Home from "./comp/Home";
import About from "./comp/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/login/"
          element={
            <Pagecontext>
              <Login />
            </Pagecontext>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <Pagecontext>
              <Home />
            </Pagecontext>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
