import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validation function
    const validateForm = (data) => {
        let newErrors = {};

        if (!data.from_name.trim()) {
            newErrors.from_name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.reply_to)) {
            newErrors.reply_to = "Enter a valid email address";
        }

        if (data.message.trim().length < 5) {
            newErrors.message = "Message must be at least 5 characters";
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            from_name: formRef.current.from_name.value,
            reply_to: formRef.current.reply_to.value,
            message: formRef.current.message.value,
        };

        // Run Validation
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Stop sending email
        }

        // No errors → Proceed
        setErrors({});
        setLoading(true);

        emailjs
            .sendForm(
                "service_y2t0703",
                "template_4mgbyex",
                formRef.current,
                "TTWafS3twRTjEWF9_"
            )
            .then(
                () => {
                    setStatus("success");
                    setLoading(false);
                    formRef.current.reset();
                },
                () => {
                    setStatus("error");
                    setLoading(false);
                }
            );
    };

    return (
        <div id="contact" className=" flex justify-center items-center px-4">
            <div className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Contact Me
                </h2>
                <div className="w-24 sm:w-30 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

                    {/* NAME */}
                    <div>
                        <label className="text-white text-sm">Your Name</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Eg: Shivam Bhosle"
                            className={`w-full p-3 rounded-xl bg-black/30 text-white placeholder-gray-400 outline-none border ${errors.from_name ? "border-red-500" : "border-white/10"
                                } focus:border-blue-500 transition-all`}
                        />
                        {errors.from_name && (
                            <p className="text-red-400 text-sm mt-1">{errors.from_name}</p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-white text-sm">Your Email</label>
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Eg: shivam@example.com"
                            className={`w-full p-3 rounded-xl bg-black/30 text-white placeholder-gray-400 outline-none border ${errors.reply_to ? "border-red-500" : "border-white/10"
                                } focus:border-blue-500 transition-all`}
                        />
                        {errors.reply_to && (
                            <p className="text-red-400 text-sm mt-1">{errors.reply_to}</p>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="text-white text-sm">Message</label>
                        <textarea
                            name="message"
                            placeholder="Write your message here..."
                            className={`w-full p-3 rounded-xl bg-black/30 text-white placeholder-gray-400 outline-none border ${errors.message ? "border-red-500" : "border-white/10"
                                } focus:border-blue-500 transition-all h-32`}
                        />
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed p-3 rounded-xl font-semibold text-white shadow-lg shadow-blue-600/20 transition-all"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {/* STATUS */}
                {status === "success" && (
                    <p className="mt-4 text-center text-green-400 font-medium">
                        ✔ Message sent successfully!
                    </p>
                )}
                {status === "error" && (
                    <p className="mt-4 text-center text-red-400 font-medium">
                        ✖ Failed to send message. Try again.
                    </p>
                )}
            </div>
        </div>
    );
}
