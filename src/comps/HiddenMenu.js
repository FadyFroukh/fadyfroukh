import Emoji from "./Emoji";

export function HiddenMenu({left,setLeft}){


    const closeMenu = ()=> {
        document.body.style.overflow = '';
        setLeft("-100%");
    };

    return (
        <div className="hidden-menu" style={{left}}>
            <header className="hidden-header">
                <p>You Are Now in a Secret Menu!</p>
                <Emoji label ={"cancel"} symbol="❌" fontSize={25} cursor="pointer" onClick={closeMenu}/>
            </header>
            <div className="items" onClick={closeMenu}>
                <p><a href="#services">Services</a></p>
                <p><a href="#skills">Skills</a></p>
                <p><a href="#work">My Work</a></p>
                <p><a href="#contact">Contact Me</a></p>
            </div>
            <footer className="text-center">
                <p>
                    <b>
                        <a 
                        href="https://www.psychologytoday.com/us/blog/hide-and-seek/201803/what-is-the-meaning-life"
                        target="_blank"
                        rel="noreferrer"
                         >
                            What is the meaning of life?
                        </a>
                    </b>
                </p>
            </footer>
        </div>
    )
};