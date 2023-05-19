import React from 'react'

const Transform = () => {
    return (
        <div>
            <nav class="bg-gray-700 text-white py-4 px-6">
                <ul class="flex space-x-4">
                    <li class="transition duration-300 ease-in-out transform hover:scale-110">
                        <a href="#" class="text-white">Menu 1</a>
                    </li>
                    <li class="transition duration-300 ease-in-out transform hover:scale-110">
                        <a href="#" class="text-white">Menu 2</a>
                    </li>
                    <li class="transition duration-300 ease-in-out transform hover:scale-110">
                        <a href="#" class="text-white">Menu 3</a>
                    </li>
                </ul>
            </nav>
            <div id="content" class="p-6">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corrupti?</p>
            </div>
        </div>

    )
}

export default Transform