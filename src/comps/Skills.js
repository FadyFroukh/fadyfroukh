import { useState } from "react";
import Box from "./Box";
import BoxesContainer from "./BoxesContainer";
import BoxesRow from "./BoxesRow";
import Button from "./Button";
import Container from "./Container";
import H3 from "./H3";

function Skills(){

    const [skills,setSkills] = useState(["HTML","CSS","SASS","JavaScript","jQuery","Reactjs"]);

    return(
        <div id="skills">
            <Container>
                <H3 fontSize="35px">Okey, What Skills Do I Have?</H3>
                <p className="text-center grey-color">I Got Some</p>
                <BoxesContainer>
                    <BoxesRow>
                        {
                            
                        }
                    </BoxesRow>
                    <BoxesRow>
                        <Box>
                            <Button>Load More Skills</Button>
                        </Box>
                    </BoxesRow>
                </BoxesContainer>
            </Container>
        </div>
    );
}

export default Skills;