import image from '../resume-2.pdf';

function download() {
    // Link to the resume file
    const link = document.createElement("a");
    link.href = image; // URL of the resume file
    link.download = "resume.pdf"; // Name of the file when downloaded
    link.click();
}
const Resume = () => {
    return (
        <div onClick={() => download()} className="fixed bottom-5 right-5 z-50 group">
            {/* Resume button */}
            <button className="p-2 bg-stone-500 rounded-full text-white flex">
                {/* Add SVG Icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Resume 
            </button>
            <div className="absolute left-12 top-0 bg-gray-800/80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col items-start p-6 space-y-4">
                    hello there
                </div>
            </div>
        </div>
    );
};
export default Resume;