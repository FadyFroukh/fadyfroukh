import './App.css';
import Contact from './comps/Contact';
import EmojiCut from './comps/EmojiCut';
import Footer from './comps/Footer';
import Main from './comps/Main';
import Services from './comps/Services';
import Skills from './comps/Skills';
import Work from "./comps/Work";
function App() {
  return (
    <div className="App">
        <Main/>
        <EmojiCut label="happy" symbol="😃"/>
        <Services/>
        <EmojiCut label="idk" symbol="💁‍♂️"/>
        <Skills/>
        <EmojiCut label="dance" symbol="🕺"/>
        <Work/>
        <EmojiCut label="electrcity" symbol="⚡"/>
        <Contact/>
        <EmojiCut label="bycicle" symbol="🚴‍♀️"/>
        <Footer/>
    </div>
  );
}

export default App;
