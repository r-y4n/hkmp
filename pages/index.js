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
        animation-duration: 2000ms; /* Adjust duration as needed */
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: alternate; /* Makes the animation reverse */
        display: block; /* Makes the image behave like a block element */
        margin: auto; /* Centers the image in the container */
        transform-origin: center; /* Ensures the rotation happens around the center */
      }

      @keyframes spin {
        0% {
          transform: rotate(30deg); /* Starting at 30 degrees */
        }
        50% {
          transform: rotate(330deg); /* Go to 375 degrees, which is 15 degrees past 360 */
        }
        100% {
          transform: rotate(30deg); /* Back to starting point */
        }
      }

      /* Style the container to center the image vertically and horizontally */
      .container {
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: center; /* Centers vertically */
        height: 100vh; /* Full height of the viewport */
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