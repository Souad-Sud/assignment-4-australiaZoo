import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AnimalPage from './Pages/AnimalPage';
import About from './Pages/About';
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path="/birds" element={<AnimalPage title="birds" />} />
        <Route path="/reptiles" element={<AnimalPage title="reptiles" />} />
        <Route path="/mammals" element={<AnimalPage title="mammals" />} />
        <Route path="/about" element={<About title="About page" />} />
      </Route>
    </Routes>
  );
}

export default App;