
import { useEffect, useRef } from "react";
import "../Styles/Contact.css";

const Contact = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (leftSectionRef.current) observer.observe(leftSectionRef.current);
        if (rightSectionRef.current) observer.observe(rightSectionRef.current);

        return () => {
            if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
            if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
        };
    }, []);

    return (
        <div id="Contact" className="Main1 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 p-4 min-h-screen">
            <div
                ref={leftSectionRef}
                className="text-white text-center md:text-left transition-opacity opacity-0 transform -translate-x-10"
            >
                <h1 className="font-[Ghr4] text-5xl font-bold mb-6 drop-shadow-lg">CONTACT US</h1>
                <p className="text-xl mb-6 drop-shadow-md">I AM INTERESTED IN:</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {["Participating", "Collaboration", "Sponsorship", "Helping", "Event"].map((item) => (
                        <button
                            key={item}
                            className="transform Cursor2 px-6 py-3 border border-white rounded-full  text-white shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300 ease-out"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div
                ref={rightSectionRef}
                className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transition-opacity opacity-0 transform translate-x-10"
            >
                <form className="space-y-6">
                    <div className="flex space-x-4">
                        <input
                            className="Cursor2 w-1/2 p-3 border-b border-gray-300 focus:outline-none focus:border-purple-600 text-gray-900 shadow-inner"
                            placeholder="Full Name*"
                            type="text"
                        />
                        <input
                            className="Cursor2 w-1/2 p-3 border-b border-gray-300 focus:outline-none focus:border-purple-600 text-gray-900 shadow-inner"
                            placeholder="Email*"
                            type="email"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            alt="Indian flag"
                            className="w-7 h-5"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/510px-Flag_of_India.svg.png"
                            width="25"
                            height="20"
                        />
                        <input
                            className="Cursor2 w-full p-3 border-b border-gray-300 focus:outline-none focus:border-purple-600 text-gray-900 shadow-inner"
                            placeholder="+91 Phone Number*"
                            type="text"
                        />
                    </div>
                    <textarea
                        className="Cursor2 w-full p-3 border-b border-gray-300 focus:outline-none focus:border-purple-600 text-gray-900 shadow-inner"
                        placeholder="Leave us a message"
                    ></textarea>
                    <div className="flex items-center space-x-2">
                        <input className="Cursor2 form-checkbox transform scale-110" type="checkbox" />
                        <label className="Cursor2 text-sm text-gray-900">
                            I have read &amp; I agree to the{" "}
                            <a className="text-purple-600 underline hover:text-purple-800" href="#">
                                privacy policy.
                            </a>
                        </label>
                    </div>
                    <button
                        className="w-32 text-[1rem]  bg-purple-600 text-white py-3 rounded shadow-lg transform hover:scale-110 hover:shadow-2xl transition duration-300 ease-out"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
