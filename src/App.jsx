import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Category from './views/Category/Category';
import Cart from './views/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/products' element={ <Category />}/>
          <Route path='/products/:gender' element={ <Category />}/>
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
