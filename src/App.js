import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Register from './component/register/Register';
import Login from './component/login/Login';
import Create from './component/create_event/Create';
import Editevent from './component/edit/Edit';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
    <Route path="/" element={<Login/>} exact />
    <Route path="/register" element={<Register/>} exact />
    <Route path="/dashboard" element={<Create/>} exact />
    <Route path="/edit_event/:id" element={<Editevent/>} exact />
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
