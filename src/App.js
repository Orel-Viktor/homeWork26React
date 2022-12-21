import {Card} from './Card'

function App() {
  return (
    <div className="App">
      <Card userName="Viktor" lastname="Orel" technologies={['React','Babel','WebPack']}></Card>
    </div>
  );
}

export default App;
