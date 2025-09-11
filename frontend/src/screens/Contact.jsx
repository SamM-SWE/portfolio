
export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <span className="contact-title">Contact</span>

            <div className="bg-div">
                <div className="left-section-contact">
                    <input type="email" className="contact-input" placeholder="Email"/>
                    <input type="text" className="contact-input" placeholder="Name"/>
                    <input type="text" className="contact-input" placeholder="Subject"/>
                    <input type="text" className="contact-input" id="message" placeholder="Message"/>
                    <button className="send-btn">Send</button>
                </div>

                <div className="right-section-contact">
                    Connect with me!
                </div>
            </div>


            <div className="black-bar2"/>
        </section>
    )
}