import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
    const description = reactDescriptions[genRandomInt(2)]
    return(
      <header>
        <img src={reactLogo}  alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
        <h1>React Essentials</h1>
        <p>
          {description} React concept you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }