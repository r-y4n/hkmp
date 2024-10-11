import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Dynamically load the CSS file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/styles.css'; // Path to your CSS file
    document.head.appendChild(link); // Add the link to the document's head

    // Create a container div for the image
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';

    // Create the image element
    const image = document.createElement('img');
    image.src = '/public/will.jpg'; // Path to your image in the /public folder

    // Append the image to the container
    container.appendChild(image);

    // Append the container to the body
    document.body.appendChild(container);

    return () => {
      // Cleanup: Remove the image and container when component unmounts
      document.body.removeChild(container);
    };
  }, []);

  return null; // This component doesn't render any JSX directly
}