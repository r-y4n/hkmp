// pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Create a style tag for CSS
    const style = document.createElement('style');
    style.innerHTML = `
      .imgstyle {
        width: 70vw;
        height: 70vw;
        animation-name: spin;
        animation-duration: 7000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style); // Append the style to the head

    // Create a container div for the image
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';

    // Create the image element
    const image = document.createElement('img');
    image.src = '/will.jpg'; // Path to your image in the /public folder
    image.className = 'imgstyle'; // Apply the CSS class

    // Append the image to the container
    container.appendChild(image);

    // Append the container to the body
    document.body.appendChild(container);

    return () => {
      // Cleanup: Remove the image and container when component unmounts
      document.body.removeChild(container);
      document.head.removeChild(style); // Remove the style tag
    };
  }, []);

  return null; // This component doesn't render any JSX directly
}