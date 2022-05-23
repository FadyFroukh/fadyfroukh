import Box from "./Box";
import BoxesContainer from "./BoxesContainer";
import BoxesRow from "./BoxesRow";
import Emoji from "./Emoji";
import H2 from "./H2";
import H3 from "./H3";
import Share from "./Share";

function Footer(){
    return(
        <footer>
            <BoxesContainer>
                <BoxesRow>
                    <Box>
                        <H2 fontSize="40px">Website Sections</H2>
                        <div className="website-sections">
                            <ul className="clear-list">
                                <li>
                                    <H3><a href="#main"><b>Start</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#services"><b>Services</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#skills"><b>Skills</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#work"><b>My Work</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#contact"><b>Contact Me</b></a></H3>
                                </li>
                            </ul>
                        </div>
                    </Box>
                    <Box>
                        <div className="footer-box">
                            <p>Created With <Emoji label="heart" symbol="❤"/> By <b>Fady Froukh</b></p>
                            <div>
                                <p>This Website Was Created Using the <b><a href="#">Reactjs</a></b> Framework</p>
                                <a href="https://www.reactjs.org" target="_blank"><Share/></a>
                            </div>
                            <div>
                                <p>Website Code on <b><a href="#">Github</a></b></p>
                                <a href="https://github.com/FadyFroukh/fadyfroukh" target="_blank"><Share/></a>
                            </div>
                        </div>
                    </Box>

                </BoxesRow>
            </BoxesContainer>
        </footer>
    );
}

export default Footer;