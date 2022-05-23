import Container from "./Container";
import H3 from "./H3";

function Contact(){
    return(
        <div id="contact">
            <Container>
                <H3>Contact Me</H3>.
                <div className="form">
                    <form className="contact-form">
                        <div className="form-part">
                        <section>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                />
                        </section>
                        <section>
                                <label for="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                />
                        </section>
                        </div>
                        <div className="form-part">
                        <section>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                />
                        </section>
                        <section>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                />
                        </section>
                        </div>
                        <div className="form-part">
                            <section>
                                    <label htmlFor="topic">Message Topic</label>
                                    <input
                                        type="text"
                                        name="topic"
                                        className="msg-input"
                                    />
                            </section>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Contact;