import {useState } from "react";
import Emoji from "./Emoji";
import H2 from "./H2";
import Header from "./Header";

function Main(){

    const [count,setCount] =  useState(1);

    const changePic = ()=>{
        const num = 3;
        if (count >= num)
        setCount(1);
        else
        setCount(count=>count+1);
    }
 
    return(
        <main>
            <Header/>
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
        </main>
    );
}

export default Main;