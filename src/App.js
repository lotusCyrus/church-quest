import './App.css';
import './components/assets/css/component.css'
import { Route, Routes } from 'react-router-dom';
import Practise from './components/pages/practise/practise';
import Home from './components/pages/home/home';
import Portal from './components/pages/portal/portal';
export default function App() {

  return (

    <Routes>
            <Route path="/" element={<Home />}/>
      <Route path="practise" element={<Practise />}/>
      <Route path="portal" element={<Portal />} />
    </Routes>
  )
}
  