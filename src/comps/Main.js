import {useState,useEffect} from "react";
import Emoji from "./Emoji";
import H2 from "./H2";
import Header from "./Header";
import { HiddenMenu } from "./HiddenMenu";
import LoadingMenu  from './LoadingMenu';


function Main(){

    const [count,setCount] =  useState(1);
    const [left,setLeft] = useState("-100%");

    const changePic = ()=>{
        const num = 5;
        if (count >= num)
        setCount(1);
        else
        setCount(count=>count+1);
    }

    const [percentage,setPercentage] = useState(0);

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        const interval = setInterval(()=>{
            setPercentage(percentage=>percentage+1);
        },60)
        if (percentage >= 100){
            document.body.style.overflow = '';
        }
        if (percentage >= 130){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[percentage]);
 
    return(
        <main id="main">
            <Header setLeft={setLeft}/>
           <div className="cont">
                <div className="text-div">
                    <H2>Hello <span className="text-fill">World!</span><Emoji label="heart" symbol="💖"/></H2>
                    <p>My Name is <span className="text-fill">Fady</span> And I Love to do Stuff!<Emoji label="firework" symbol="🧨"/></p>
                    <div>
                        I Design The Web , Program The Web , And I Really Love to Drink Nescafe!<Emoji label="nescafe" symbol="☕"/>
                    </div>
                </div>
                <div className="image-div">
                    <div className={`image-cont`} onClick={changePic}>
                        <img src={`pics/${count}.jpg`} alt="Me"/>
                        <div className="overlay">Press to Change</div>
                    </div>
                    <p>Pictures of Me , How Handsome!</p>
                </div>
           </div>
            <HiddenMenu left={left} setLeft={setLeft}/> 
            {
                percentage >= 120 ? null : <LoadingMenu percentage={percentage}/>
            }
        </main>
    );
}

export default Main;