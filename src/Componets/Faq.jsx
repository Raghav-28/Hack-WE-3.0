import { useState } from "react";
import "../Styles/FAQ.css"; // Optional: Add styles here or use inline styles

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How big a team can be ?", answer: "Teams can have up to 4 members, but 1 women participation is necessary." },
    { question: "Who all can participate?", answer: "Anyone with a passion for coding and innovation can participate." },
    { question: "Do I need to have any specific qualifications to be a participant for the hackathon?", answer: "No specific qualifications are required. Just enthusiasm to create something awesome!" },
    { question: "Is there any registration fees?", answer: "No,Registration is completely free" },
    { question: "Can I start working on Project before the event ?", answer: "No, all Coading should be started during the hackathon timeframe." },
    { question: "Does HACK-WE provide Internet facility during hackathon?", answer: "Yes, we provide a high-speed internet connection for all participants." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="faq  bg-[#011947]">
    <div className="faq-container bg-[#011947]">
       <h1 className="text-center font-[Ghr4] uppercase leading-[1] text-4xl text-white">FAQ</h1>
      <ul className="faq-list cursor2">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="cursor2 faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="icon">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FAQ;
