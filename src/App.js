import './home';
import './App.css';
import ColorSchemesExample from './home';
import { Navbar } from 'react-bootstrap';
import HeroSection from './herosection';
import ProductItem from './productitem';
import ProductList from './productlist';

function App() {
  return (

    <>


      <ColorSchemesExample />
      <Navbar/>
      <HeroSection />
      <ProductList />
      <ProductItem />
    </>
  );
}
export default App;


