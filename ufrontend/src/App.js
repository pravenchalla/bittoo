import './App.css';
import SignUp from './pages/signup'
import LogIn from './pages/login'
import ViewAllUsers from './pages/viewAllUsers.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar.js'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/View' element={<ViewAllUsers/>}/>

     </Routes>
    </div>
    </Router>
  );
}

export default App;
