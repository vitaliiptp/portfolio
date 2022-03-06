import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import ContactModal from "../components/ContactModal";


const SERVICE_ID = "service_mampt7w";
const TEMPLATE_ID = "template_yci0xhp";
const USER_ID = "user_Wh4MZPax4f0SduuFBmoNp";


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const [success, setSuccess] = useState(false);
    const [modalActive, setModalActive] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setStatus("Sending...");
            let email = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            setStatus("Message Sent");
            setSuccess(true);
            setModalActive(true)
        }
        catch (error: any) {
            setSuccess(false);
            setModalActive(false)
        }
        e.target.reset()
    };

    return (
            <div className="lg:min-h-screen w-[20rem] mx-5 mt-4 md:mt-24 md:w-[30rem]">
            {(status === 'Submit' || status === 'Sending...') &&
                <form className="flex flex-col bg-white shadow-md border border-light-grey rounded-lg px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                        <label className="text-sb-m_black mb-2" htmlFor="name">Name*</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-n-s_grey leading-tight focus:outline-none focus:shadow-outline"
                            type="name"
                            name="name"
                            id="name"
                            placeholder="First Name, Last Name"
                            required
                        />
                    <label className="text-sb-m_black mb-2" htmlFor="email">Email*</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-n-s_grey leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        required
                    />
                    <label className="text-sb-m_black mb-2" htmlFor="message">Message*</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-12 text-n-s_grey leading-tight focus:outline-none focus:shadow-outline h-32"
                        placeholder="Start typing..."
                        name="message"
                        required
                    />
                    <button
                        className="w-full py-2 px-4 text-b-m_grey text-center uppercase border-2 px-8 py-4 hover:bg-black hover:text-b-m_white hover:border-black rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        {status}
                    </button>
                </form>
            }
            {status === "Message Sent" &&
            <div className="mt-40 ml-10 text-4xl text-left">{success ? <ContactModal modalActive={modalActive} setModalActive={setModalActive}/> : "Message wasn't sent. Please try again later."}</div>
            }
        </div>
    );
};

export default Contact;