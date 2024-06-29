import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web from './pages/main/Web.jsx';
import NoPage from './pages/404/Nopage.jsx';
import { Thanks } from './pages/Thanks/Thanks.jsx';
import Test from './pages/Recommenders/test.jsx';
import Mobile from './pages/Mobile/Mobile.jsx';
import RedirectToMobile from './components/RedirectToMobile';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <RedirectToMobile>
          <Routes>
            <Route index element={<Web />}/>
            <Route path='/web' element={<Web />}/>
            <Route path='/test' element={<Test />}/>
            <Route path='thanks' element={<Thanks />}/>
            <Route path='*' element={<NoPage />}/>
            <Route path='/mobile' element={<Mobile />} />
          </Routes>
        </RedirectToMobile>
      </BrowserRouter>
    </div>
  );
}
