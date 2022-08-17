import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Login} from "./login/login.component";
import { Welcome } from "./welcome/welcome.component";
// import your route components too


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route  path="/welcome" element={<Welcome />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
