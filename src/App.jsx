import { useState } from "react";

function App() {
  const [color, setColor] = useState('gray');
  return (
      <div className="flex h-screen">
        <div className="w-1/5 bg-gray-300">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <button 
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('red')}
            >
              Red
            </button>
            <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('blue')}
            >
              Blue
            </button>
            <button 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('green')}
            >
              Green
            </button>
            <button 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('yellow')}
            >
              Yellow
            </button>
            <button 
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('purple')}
            >
              Purple
            </button>
            <button 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setColor('pink')}
            >
              Pink
            </button>
          </div>
        </div>
        <div className="w-4/5" style={{backgroundColor: color}}></div>
      </div>
  );
}

export default App;
