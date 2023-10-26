
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import SaveData from './Pages/SaveData'
function App() {
 
  return (
   <>
   <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path="/SaveData" element={<SaveData />} />
       

      
</Routes>
   </>
  );
}

export default App;
