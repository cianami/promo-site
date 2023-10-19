import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from "./components/ui/common/Header";
import LandingPage from "./components/pages/LandingPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                </Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
