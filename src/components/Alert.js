// Alert.js
import React from 'react';

const Alert = ({ variant, message }) => {
    const baseClasses = 'p-4 mb-4 text-sm rounded-lg max-w-md mx-auto';
    let variantClasses = '';

    switch (variant) {
        case 'success':
            variantClasses = 'text-green-700 bg-green-100 border border-green-400';
            break;
        case 'error':
            variantClasses = 'text-red-700 bg-red-100 border border-red-400';
            break;
        default:
            variantClasses = 'text-gray-700 bg-gray-100 border border-gray-400';
    }
    return <div className={`${baseClasses} ${variantClasses}`}>{message}</div>;
}
export default Alert;
