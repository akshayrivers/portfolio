const Contact = () => {
  function show(): void {
    throw new Error("Function not implemented.");
  }

    return (
        <div onClick={() => show()} className="fixed bottom-5 left-5 z-50 group flex">
            {/* Resume button */}
            <button className="p-2 bg-stone-500 rounded-full text-white flex">
                {/* Add SVG Icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            Conatct me 
            </button>
            <div className="absolute left-12 top-0 bg-gray-800/80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col items-start p-6 space-y-4">
                    hello there
                </div>
            </div>
        </div>
    );
};
export default Contact;