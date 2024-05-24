import React from 'react'

const BreadCrump = () => {
    return (
        <div>
            <nav class="bg-white p-4 ">
                <ol class="list-reset flex text-gray-600">
                    <li>
                        <a href="/" class="text-blue-600 hover:text-blue-800">Home</a>
                    </li>
                    <li>
                        <span class="mx-2">/</span>
                    </li>
                    <li class="text-gray-500">
                        Dashboard
                    </li>
                </ol>
            </nav>

        </div>
    )
}

export default BreadCrump
