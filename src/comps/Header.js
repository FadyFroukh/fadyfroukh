import Emoji from "./Emoji";

function Header({setLeft}){

    const openMenu = ()=> {
        document.body.style.overflow = 'hidden';
        setLeft(0);
    }

    return(
        <header>
            {
                window.innerWidth <= 720 ? 
                <div className="gear">
                    <Emoji label ={"gear"} symbol="⚙️" fontSize={30} cursor="pointer" onClick={openMenu}/>
                </div> : 
                    <nav>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#skills">Skills</a></p>
                        <p><a href="#work">My Work</a></p>
                        <p><a href="#contact">Contact Me</a></p>
                    </nav>
            }
        </header>
    );
}

export default Header;