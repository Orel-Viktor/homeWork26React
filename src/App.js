// import { Card } from './Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header";
import { Main } from './pages/Main';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path ="/" element={<Main/>}></Route>
          <Route path ="/contact" element={<Contacts/>}></Route>
        </Routes>
      
        {/* <Card userName="Viktor" lastName="Orel" ></Card> */}
      </div>
    </BrowserRouter>

  );
}


export default App