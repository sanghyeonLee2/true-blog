import {Outlet} from "react-router-dom";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
