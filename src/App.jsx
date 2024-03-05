import './App.css'
import {LoginPage} from "./component/pages/LOGIN/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import {OrderPage} from "./component/pages/ORDER/OrderPage.jsx";
import {ErrorPage} from "./component/pages/ERROR/ErrorPage.jsx";

function App() {

  return <div>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="order/:username" element={<OrderPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </div>
}

export default App
