// pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .imgstyle {
        width: 60vw;
        height: 60vw;
        animation-name: spin;
        animation-duration: 2000ms; 
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        display: block; 
        margin: auto; 
        transform-origin: center; 
        z-index: 1000;
        border-radius: 25%;
      }

      @keyframes spin {
        0% {
          transform: rotate(-22.5deg); 
        }
        50% {
          transform: rotate(22.5deg); 
        }
        100% {
          transform: rotate(-22.5deg);
        }
      }

      
      .container {
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
      }
    `;
    document.head.appendChild(style);

   
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';

    const image = document.createElement('img');
    image.src = '/will.jpg'; 
    image.className = 'imgstyle'; 

    container.appendChild(image);

    document.body.appendChild(container);

    return () => {
      
      document.body.removeChild(container);
      document.head.removeChild(style); 
    };
  }, []);

  return null; 
}