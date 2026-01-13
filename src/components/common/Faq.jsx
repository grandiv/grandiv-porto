import React, { useState } from "react";
import { faqs } from "../../data/faqData";
import { categoryIcons } from "../../data/iconsData";

export default function Faq({
  title = "About me and my work",
  variant = "default", // "default" | "withLine"
}) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const titleClasses =
    variant === "withLine"
      ? "text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-end"
      : "text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]";

  const containerClasses =
    variant === "withLine"
      ? "flex flex-col items-center text-left mx-auto max-w-6xl px-4"
      : "flex flex-col items-center px-4 text-left";

  const wrapperClasses =
    variant === "withLine" ? "site-container mt-10" : "mx-auto w-full max-w-4xl";

  const listClasses =
    variant === "withLine"
      ? "mt-4 space-y-4 text-lg"
      : "mt-8 space-y-4 text-lg drop-shadow-[2px_2px_0_#7836cf]";

  const itemClasses =
    variant === "withLine"
      ? "bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all drop-shadow-[2px_2px_0_#7836cf]"
      : "bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all";

  const answerTextClasses =
    variant === "default" ? "text-[0.8em] text-white text-semibold" : "text-[0.8em] text-white";

  return (
    <div className={containerClasses}>
      <div className={wrapperClasses}>
        <h2 className={titleClasses}>
          {variant === "withLine" && (
            <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
          )}
          <span className="drop-shadow-[2px_2px_0_#7836cf]">{title}</span>
        </h2>

        <ul className={listClasses}>
          {faqs.map(({ question, answer, category }) => (
            <li key={question} className="w-full">
              <div onClick={() => toggleItem(question)} className={itemClasses}>
                <div className="flex items-center gap-3 p-4">
                  <div dangerouslySetInnerHTML={{ __html: categoryIcons[category] }} />
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {question}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === question ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === question
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className={answerTextClasses}>{answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
