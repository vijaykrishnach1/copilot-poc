import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Login} from "./login/login.component";
import { Welcome } from "./welcome/welcome.component";
import { CustomerCredentials } from "./encrypt/customer-credential";
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
      <Route  path="/customerCredentials" element={<CustomerCredentials />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
