const Form = () => {
    return (
        <div className="bg-white p-6 rounded-lg max-w-md mx-auto form-shadow">
            <h2 className="text-2xl bg-transparent font-bold mb-4 text-[#118AB2]">Let&apos;s Talk</h2>
            <form className="bg-transparent">
                <div className="mb-4 bg-transparent">
                    <label className="block text-gray-700 text-sm font-bold mb-2 bg-transparent" htmlFor="name">
                        Your name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="bg-transparent shadow appearance-none form-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4 bg-transparent">
                    <label className="bg-transparent block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="bg-transparent shadow appearance-none form-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-6 bg-transparent">
                    <label className="bg-transparent block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="3"
                        className="bg-transparent shadow appearance-none form-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className= "bg-transparent flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form