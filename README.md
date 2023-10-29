# Background Changer using React and Tailwind CSS

## Theory
Background changer is a basic project built to understand the usage of _Hooks in React_. In this project a react hook called **useState** is used. 

**UseState** hook is nothing but a function. It returns an array with two elements: the current state value and a function to update that state value. The first element of the array is the current state value, and the second element is a function that you can call to update the state.

_Syntax:_ const [state, setState] = useState(initialValue); 

## About AI and other information

> **Important**
> I didn't focus on beautifying the UI here, but rather on understanding the logic and implementing it.

I used [phind](https://www.phind.com/) as my _pair programmer_ to provide me with a boilerplate of tailwind to beautify this project. Using phind as my _pair programmer_ helped me to focus more on logic side than the UI side. Plus it also helped me to save a lot of time.

_Other AI tools used: [GitHub Copilot](https://github.com/features/copilot)_

## Thought process
_It is simple_
- I want a minimalistic UI to display changing of the background colors.
- There will be two sections of the screen. Left Section and Right Section.
- Left section will consist of buttons and Right section to display color.
- I want 6 buttons for each 6 different colors on the left section of the screen.
- Whenever I click a button (say red), the background color of the right section should change to that specific color (that is red).
- That is it.

## Code explanation
- First thing is first. I asked my _pair programmer_ [phind](https://www.phind.com/) to give me a boilerplate of background changer app along with some tailwindCSS styling and this is what it gave me 👇
  ```javascript
  import React from 'react';

  function App() {
    return (
      <div className="flex h-screen">
        <div className="w-1/5 bg-gray-200">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2">
            Red
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2">
            Blue
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2">
            Green
            </button>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
            Yellow
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mb-2">
            Purple
            </button>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mb-2">
            Pink
            </button>
          </div>
        </div>
        <div className="w-4/5 bg-gray-400"></div>
      </div>
    );
  }
  export default App;
  ```
- Now all I want to do is write the logic. First thing to do is to initializa a **useState** hook
  ```javascript
  const [color, setColor] = useState('gray');
  ```
- To use the hook I need to import it.
  ```javascript
  import {useState} from 'react';
  ```
- I will set the initial background color of the right section as _gray_ using **useState** hook.
  ```javascript
  <div className="w-4/5" style={{backgroundColor: color}}></div>
  ```
- I know that when the user clicks on any one of the buttons, some task needs to be performed. Therefore I will add onClick property on all the buttons and by using the **setColor** function from the useState hook I will change the background color of the right section.
  ```javascript
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
  ```
- Now my background changer project is ready 🎉

> Click [here](https://github.com/edsondsouza/bg-changer-using-react/blob/main/src/App.jsx) to see the final code. 

>[Project Link](https://653da7adeb148812ef9bbe40--magenta-platypus-0a1ebf.netlify.app/)

# Setup the repo in your local environment
- Clone the repo
  ``` 
  git clone https://github.com/edsondsouza/bg-changer-using-react.git
  ```
- Install necessary dependencies
  ```
  npm i
  ```
- Run the project
  ```
  npm run dev
  ```

> If you liked the project please do drop a ⭐

# Follow me on socials
[BioDrop](https://www.biodrop.io/edsondsouza)