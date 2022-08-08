import Bar from "./Bar";
import Button from "./Button";
import Container from "./Container";
import H3 from "./H3";
import LanguageImage from "./LanguageImage";

function Skills(){


    return(
        <div id="skills">
            <Container>
                <h3 className="H3 text-center">Skills I Have Acquired</h3>
                <p className="grey-color text-center">I Have Got Some!</p>
                <div className="boxes-container">
                    <div className="box-row">
                        <div className="box">
                            <LanguageImage src='pics/html-5.png'/>
                            <H3>HTML</H3>
                            <Bar precentage="95" color="#EE5A24"/>
                        </div>
                        <div className="box">
                        <LanguageImage src='pics/css-3.png'/>
                            <H3>CSS</H3>
                            <Bar precentage="95" color="#3867d6"/>
                        </div>
                        <div className="box">
                        <LanguageImage src='pics/sass.png'/>
                            <H3>SASS</H3>
                            <Bar precentage="80" color="#B53471"/>
                        </div>
                        <div className="box">
                        <LanguageImage src='pics/js.png'/>
                            <H3>JavaScript</H3>
                            <Bar precentage="85" color="#f9ca24"/>
                        </div>
                    </div>
                    <div className="box-row">
                        <div className="box">
                            <LanguageImage src='pics/react.png'/>
                                <H3>Reactjs</H3>
                            <Bar precentage="75" color="#22a6b3"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/nodejs.png'/>
                                <H3>Nodejs</H3>
                            <Bar precentage="85" color="#20bf6b"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/php.png'/>
                                <H3>PHP</H3>
                            <Bar precentage="80" color="#40739e"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/mysql.png'/>
                                <H3>MySQL</H3>
                            <Bar precentage="70" color="#0097e6"/>
                        </div>
                    </div>
                    <div className="box-row">
                        <div className="box">
                            <LanguageImage src='pics/mongodb.png'/>
                                <H3>MongoDB</H3>
                            <Bar precentage="70" color="#20bf6b"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/java.png'/>
                                <H3>Java</H3>
                            <Bar precentage="85" color="#e67e22"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/office.png'/>
                                <H3>Microsoft Office</H3>
                            <Bar precentage="90" color="#d35400"/>
                        </div>
                        <div className="box">
                            <LanguageImage src='pics/report.png'/>
                                <H3>Software Reports</H3>
                            <Bar precentage="90" color="#000"/>
                        </div>
                    </div>
                    <div className="box-row">
                        <div className="box">
                        <LanguageImage src='pics/question.png'/>
                        <H3>Wanna a Job Done?</H3>
                        <Button>
                                <a href = "mailto:fadyfroukh@gmail.com">
                                    Request Now
                                </a>
                        </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Skills;