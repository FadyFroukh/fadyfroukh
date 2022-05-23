import Box from "./Box";
import BoxesContainer from "./BoxesContainer";
import BoxesRow from "./BoxesRow";
import Button from "./Button";
import Container from "./Container";
import Emoji from "./Emoji";
import H3 from "./H3";
function Services(){
    return(
        <div id="services">
            <Container>
                <H3>What Services Do I Offer Tho?</H3>
                <p className="grey-color text-center">Services Described As</p>
                <BoxesContainer>
                    <BoxesRow>
                        <Box>
                            <Emoji label="frontend" symbol="👨‍💻" fontSize="30px"/>
                            <H3>Front End</H3>
                            <p className="grey-color text-center">If you wish to have an awesome static website!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want an Awesome Front-End Website&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                        </Box>
                        <Box>
                            <Emoji label="backend" symbol="⌨" fontSize="30px"/>
                            <H3>Back End</H3>
                            <p className="grey-color text-center">If you wish to have an awesome website with logic!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want an Awesome Back-End Website&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                        </Box>
                        <Box>
                            <Emoji label="database" symbol="🏪" fontSize="30px"/>
                            <H3>Databases</H3>
                            <p className="grey-color text-center">If you wish to have an awesome website with backend and a database!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want an Awesome Databases Website&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                        </Box>
                    </BoxesRow>
                    <BoxesRow>
                        <Box>
                            <Emoji label="java" symbol="☕" fontSize="30px"/>
                            <H3>Java</H3>
                            <p className="grey-color text-center">If you wish to have an awesome Java GUI Project!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want an Awesome Java Project&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                        </Box>
                        <Box>
                            <Emoji label="microsoft" symbol="📑" fontSize="30px"/>
                            <H3>Microsoft Office</H3>
                            <p className="grey-color text-center">If you wish to have your microsoft office projects done!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want Micrsoft Office Work&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                        </Box>
                        <Box>
                            <Emoji label="reports" symbol="📝" fontSize="30px"/>
                            <H3>Software Reports</H3>
                            <p className="grey-color text-center">If you wish to have an awesome Report for Your Software Project!</p>
                            <Button>
                                <a href = "mailto:fadyfroukh@gmail.com?subject=I Want an Awesome Report&body=Can you tell me more?">
                                    Get it
                                </a>
                            </Button>
                            </Box>
                    </BoxesRow>
                </BoxesContainer>
            </Container>
        </div>
    );
}

export default Services;