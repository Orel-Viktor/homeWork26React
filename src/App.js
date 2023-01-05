import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header";
import { Main } from './pages/Main';
import { Contacts } from './pages/Contacts';
import {Error} from "./components/Error"



function App() {
  return (
    <Error>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Error>

  );
}


export default App