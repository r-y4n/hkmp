import { useEffect } from 'react';

export default function WillTracker() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        margin: 0; /* Remove all default margins */
        padding: 0; /* Remove all default padding */
        box-sizing: border-box; /* Ensure padding doesn't affect the width of the navbar */
      }

      .navbar {
        display: flex;
        justify-content: space-around; /* Evenly space the links */
        align-items: center;
        background-color: #333;
        padding: 15px 0; /* Padding only on the top and bottom */
        position: fixed;
        top: 0;
        width: 100vw; /* Full width of the viewport */
        z-index: 1001;
      }

      .navbar a {
        color: white;
        text-decoration: none;
        font-family: "Lucida Console", "Courier New", monospace;
        font-size: 1.2rem;
      }

      .navbar a:hover {
        text-decoration: underline;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-top: 60px; /* Space for the navbar */
        font-family: "Lucida Console", "Courier New", monospace;
        color: #333;
        font-size: 2rem;
      }
    `;
    document.head.appendChild(style);

    // Create the navbar
    const navbar = document.createElement('div');
    navbar.className = 'navbar';

    const homeLink = document.createElement('a');
    homeLink.href = '/index'; // Link to the Home page
    homeLink.textContent = 'Home';

    const trackerLink = document.createElement('a');
    trackerLink.href = '/willtracker'; // Link to the Will Tracker page
    trackerLink.textContent = 'Will Tracker';

    navbar.appendChild(homeLink);
    navbar.appendChild(trackerLink);

    document.body.appendChild(navbar);

    // Create a placeholder for the Will Tracker content
    const container = document.createElement('div');
    container.className = 'container';
    container.textContent = 'null'; // Placeholder text

    document.body.appendChild(container);

    return () => {
      // Cleanup: Remove the navbar and container when component unmounts
      document.body.removeChild(navbar);
      document.body.removeChild(container);
      document.head.removeChild(style); 
    };
  }, []);

  return null; 
}