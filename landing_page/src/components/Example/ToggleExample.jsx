import React, { useState } from 'react';

const ToggleExample = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <button onClick={handleToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {isToggled ? 'Hide' : 'Show'}
            </button>

            {isToggled && <div className="bg-gray-200 p-4 mt-4">Toggle Content</div>}
        </div>
    );
};

export default ToggleExample;
