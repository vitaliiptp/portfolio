import React, {useState} from 'react';
import emailjs from 'emailjs-com';


const SERVICE_ID = "service_mampt7w";
const TEMPLATE_ID = "template_yci0xhp";
const USER_ID = "user_Wh4MZPax4f0SduuFBmoNp";


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setStatus("Sending...");
            let email = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            setStatus("Message Sent");
            setSuccess(true);
        }
        catch (error: any) {
            setSuccess(false);
        }
        e.target.reset()
    };

    return (
        <div id="contact" className="flex, min-h-screen py-24 text-b-xl">
            <div className="text-5xl text-left">
                Contact
            </div>
            {(status === 'Submit' || status === 'Sending...') &&
            <div className="mt-20 ml-10 w-[35rem] bg-light-grey rounded-lg">
                <form className="flex flex-col w-full p-10 text-3xl text-n tracking-wide leading-loose" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name*</label>
                    <input
                        className="bg-light-grey rounded-lg p-3 text-2xl border border-yellow-green"
                        type="name"
                        name="name"
                        id="name"
                        placeholder="First Name, Last Name"
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        className="bg-light-grey rounded-lg p-3 text-2xl border border-yellow-green"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        required
                    />
                    <label htmlFor="message">Message*</label>
                    <textarea
                        className="bg-light-grey rounded-lg p-3 h-32 text-2xl border border-yellow-green"
                        placeholder="Start typing..."
                        name="message"
                        required
                    />
                    <button type="submit" className="mt-6 rounded-lg bg-dark-grey border">{status}</button>
                </form>
            </div>
            }
            {status === "Message Sent" &&
            <div className="mt-40 ml-10 text-4xl text-left">{success ? "Thank you for your message!" : "Message wasn't sent. Please try again later."}</div>
            }
        </div>
    );
};

export default Contact;