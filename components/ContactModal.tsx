import React from 'react';
import Link from "next/link";


interface ContactModalProps {
    modalActive: boolean;
    setModalActive: any;
}

const ContactModal = ({modalActive, setModalActive}: ContactModalProps) => {

    return (
        <>
            {modalActive &&
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
                 aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-grey bg-opacity-75 transition-opacity" aria-hidden="true"/>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>
                    <div
                        className="relative inline-block align-bottom bg-contact-modal rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-contact-modal px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div
                                    className="mx-auto flex-shrink-0 flex items-start justify-center h-10 w-10 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                    <img src='assets/contact/success.svg' alt='success' width={30}/>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-sb-m_black leading-6 mb-6">Message Sent</h3>
                                    <div className="mt-2">
                                        <p className="text-n-m">Thank you for your message!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <Link href='/'>
                                <button type="button"
                                        className="mt-3 w-full inline-flex justify-center py-2 bg-contact-modal text-b-m_green hover:text-b-m sm:mt-0 sm:ml-3 sm:w-auto"
                                onClick={() => setModalActive(false)}>Dismiss
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default ContactModal;