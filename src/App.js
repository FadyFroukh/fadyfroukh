import './App.css';
import EmojiCut from './comps/EmojiCut';
import Main from './comps/Main';
import Services from './comps/Services';

function App() {
  return (
    <div className="App">
        <Main/>
        <EmojiCut label="happy" symbol="😃"/>
        <Services/>
    </div>
  );
}

export default App;
