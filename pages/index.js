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
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes spin {
        0% {
          transform: rotate(30deg); /* Starting at 22.5 degrees */
        }
        50% {
          transform: rotate(0deg); /* Ending at 67.5 degrees */
        }
        100% {
          transform: rotate(330deg); /* Back to starting point */
        }
      }
      
    `;
    document.head.appendChild(style);

    // Create a container div for the image
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';

    // Create the image element
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