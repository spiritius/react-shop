import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Shop } from './Components/Shop';
import { ShopContext } from "./hooks/ShopContext";

function App() {

  return (
    <ShopContext>
      <Header />
      <Shop />
      <Footer />
    </ShopContext>
  );
}

export default App;