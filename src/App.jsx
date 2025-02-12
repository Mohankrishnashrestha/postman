import Header from "./Header";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import About from "./comp/About";
import { PageProvider } from "./Pagecontext";
function App() {
  return (
    <div>
      <Header />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
