import { useEffect, useState } from "react";
import Button from "./Button";
import H3 from "./H3";

function Work(){

    const [images] = useState(["project1.png","project2.png","project3.png"]);
    const [current,setCurrent] = useState(0);
    const [projects] = useState(["CleanPalCo Website","Smart Table Menu","Organs Donation System"]);
    const [links] = useState(["https://cleanpalco.vercel.app","https://graduation-eight.vercel.app/",""]);

    const handleLeftArrow = ()=>{
        if(current <= images.length - 1){
            setCurrent(()=>current-1);
        }
        if(current === 0){
            setCurrent(images.length - 1);
        }
    }

    const handleRightArrow = ()=>{
        if(current >= 0){
            setCurrent(()=>current+1);
        }
        if(current === images.length - 1){
            setCurrent(0);
        }
    }

    useEffect(()=>{

    },[current])

    return(
        <div id="work">
            <H3>Projects I Have Worked On</H3>
            <div className="image-gallery">
                <div className="images">
                    <img src={`pics/${images[current]}`} alt="project"/>
                </div>
                <div className={`overlay wow slideInLeft`} data-wow-delay=".5s">
                <div className="left-arrow arrow" onClick={handleLeftArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </div>
                    <div className="content">
                        <p><b>{projects[current]}</b></p>
                        <Button><a href={links[current]} target="_blank">Visit Site</a></Button>
                    </div>
                    <div className="right-arrow arrow" onClick={handleRightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;