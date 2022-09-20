import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Catalog} from "./pages/Catalog";
import {AboutUs} from "./pages/AboutUs";
import {Delivery} from "./pages/Delivery";
import {Cart} from "./pages/Cart";

function App() {
  return (
    <div className='main'>
      <Header/>
       <Routes>
          <Route path='/' element={<Catalog />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/delivery' element={<Delivery />}/>
          <Route path='/cart' element={<Cart />}/>
       </Routes>
    </div>
  );
}

export default App;
