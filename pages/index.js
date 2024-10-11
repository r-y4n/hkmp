// pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .imgstyle {
        width: 70vw;
        height: 70vw;
        animation-name: spin;
        animation-duration: 2000ms; 
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: alternate; 
        display: block; 
        margin: auto; 
        transform-origin: center; 
      }

      @keyframes spin {
        0% {
          transform: rotate(30deg); 
        }
        50% {
          transform: rotate(0deg); 
        }
        100% {
          transform: rotate(330deg);
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