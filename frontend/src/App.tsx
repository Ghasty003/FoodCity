import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
