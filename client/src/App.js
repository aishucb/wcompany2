import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  CustomCard from './components/CustomCard';
function App() {
  return (
    <div className="App">
    <Router>
   <div>
     <Routes>
     <Route path="/"  />
     <Route path="/result" element={<CustomCard />} />

     </Routes>
   </div>
 </Router>
 </div>
  );
}

export default App;
