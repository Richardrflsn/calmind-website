import { useState } from "react";

const quotes = [
    "Keep trying, and you will be there.",
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "You are stronger than you think.",
    "Your limitation—it's only your imagination."
];

    const MotivationQuoteGenerator = () => {
        const [quote, setQuote] = useState("")
        const [inputText, setInputText] = useState("")

        const generateQuote = () => {
            if (inputText.trim() !== "") {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                setQuote(quotes[randomIndex]);
            }
        }

        const handleInputChange = (e) => {
            setInputText(e.target.value);
        }

    return (
        <div className='text-white flex flex-col items-center my-5'>
            <div className="relative">
                <textarea 
                className="motivation-textarea w-[855px] h-[415px] mt-2 text-[25px] text-white" 
                placeholder="Write your feelings here..."
                value={inputText}
                onChange={handleInputChange}></textarea>
                <img src="src\assets\emojis2.png" alt="emojis" className="absolute right-[-125px] top-4 w-[177px] h-auto bg-transparent"/>
            </div>
            <button 
                onClick={generateQuote} 
                className={`motivation-btn w-28 h-14 rounded-3xl text-2xl bg-black`} 
                disabled={inputText.trim() === ""}>
                Send
            </button>
            {quote && (
                <>
                    <h2 className='text-3xl mt-8 mb-5'>Motivation For You</h2>
                    <p className='motivation-box rounded-xl text-2xl flex justify-center items-center font-bold text-center w-[500px] h-[100px]'>&quot;{quote}&quot;</p>
                </>
            )}
        </div>
    )
}


export default MotivationQuoteGenerator