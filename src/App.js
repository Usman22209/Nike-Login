// Import necessary components from React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sign } from './Component/Sign'; // Assuming you have a Sign component
import { Main } from './Component/Main';
import { Nav } from './Component/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className='overflow-x-hidden'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
