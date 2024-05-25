import React from 'react'

const BreadCrump = ({ page }) => {
    return (
        <div>
            <nav className="bg-white p-4 ">
                <ol className="list-reset flex text-gray-600">
                    <li>
                        <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                    </li>
                    <li>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-500">
                        {page}
                    </li>
                </ol>
            </nav>

        </div>
    )
}

export default BreadCrump
