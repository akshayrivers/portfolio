import React from 'react';

interface BDashboardProps {
    Title: string;
    Description: string;
    Link: string;
    imageSrc: string;
}

const BDashboard: React.FC<BDashboardProps> = ({ Title, Description, Link, imageSrc }) => {
    return (
        <div className="w-800px flex flex-col sm:w-80 md:w-96 first-letter:flex-col bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:bg-opacity-70 dark:border-gray-700 p-4">
            <div className="flex justify-center">
                <img 
                    src={imageSrc} 
                    className="w-full h-56 rounded-md object-cover" 
                    alt="Project Thumbnail" 
                    style={{ maxWidth: '400px' }} // Adjust max width for smaller screens
                />
            </div>
            <div className="flex flex-col justify-between p-4">
                <h5 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                    {Title}
                </h5>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                    {Description}
                </p>
                <div className="mt-3">
                    <a 
                        href={Link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BDashboard;
