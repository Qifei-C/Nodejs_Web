import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web from './pages/main/Web.jsx';
import HectorC from './pages/Recommenders/HectorC.jsx';
import LauraB from './pages/Recommenders/LauraB.jsx';
import HalP from './pages/Recommenders/HalP.jsx';
import RayaF from './pages/Recommenders/RayaF.jsx';
import NoPage from './pages/404/Nopage.jsx';
import { Thanks } from './pages/Thanks/Thanks.jsx';
import Test from './pages/Recommenders/HectorC_test.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Web />}/>
          <Route path='/web' element={<Web />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/8cd15711d825067f' element={<HectorC />}/>
          <Route path='/19d20a315604cd05' element={<LauraB />}/>
          <Route path='/5161c1f5fd74c6a8' element={<HalP />}/>
          <Route path='/222f70ee73562785' element={<RayaF />}/>
          <Route path='thanks' element={<Thanks />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
