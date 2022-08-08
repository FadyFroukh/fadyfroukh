import Container from "./Container";
import H3 from "./H3"
import LanguageImage from "./LanguageImage";
function Contact(){
    return(
        <div id="contact">
            <Container>
               <H3>Lets Have a Chat</H3>
               <p className="text-center grey-color">Contact Me to Get the Ball Rolling!</p>
               <div className="boxes-container">
                    <div className="box-row">
                        <div className="box">
                            <LanguageImage src="pics/email.png"/>
                            <p>E-Mail</p>
                            <p>
                                <a className="grey-color" href="mailto:fadyfroukh@gmail.com">
                                    fadyfroukh@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="box">
                            <LanguageImage src="pics/facebook.png"/>
                            <p>Facebook</p>
                            <p>
                                <a href="https://www.facebook.com/fadyfroukh" target="_blank" className="grey-color">
                                    Fady Froukh
                                </a>
                            </p>
                        </div>
                        <div className="box">
                        <LanguageImage src="pics/linkedin.png"/>
                            <p>LinkedIn</p>
                            <p>
                                <a href="https://www.linkedin.com/in/fadi-froukh-987b8921a/" target="_blank" className="grey-color">
                                    Fadi Froukh
                                </a>
                            </p>
                        </div>
                    </div>
               </div>
            </Container>
        </div>
    );
}

export default Contact;