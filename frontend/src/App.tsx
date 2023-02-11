import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const {state} = useContext(AuthContext);

  return (
    <div className="bg-primary min-h-full">
      <Routes>
        <Route path="/">
          <Route index element={state.user ? <Home /> : <Navigate to="/login" /> }/>
          <Route path="login" element={!state.user ? <Login /> : <Navigate to="/" />} />
          <Route path="register" element={!state.user ? <Register /> : <Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
