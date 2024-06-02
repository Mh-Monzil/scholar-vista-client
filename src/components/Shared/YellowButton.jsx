import React from 'react';

const YellowButton = ({label}) => {
    return (
        <div>
            <button className="w-full px-6 py-3 text-base font-semibold tracking-wide  capitalize transition-colors duration-300 transform bg-yellow rounded-sm hover:bg-navy hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            {label}
            </button>
        </div>
    );
};

export default YellowButton;