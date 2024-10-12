import { useEffect } from 'react';

export default function WillTracker() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .navbar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #333;
        padding: 15px 0;
        position: fixed;
        top: 0;
        width: 100vw;
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
        margin-top: 60px;
        font-family: "Lucida Console", "Courier New", monospace;
        color: #333;
        font-size: 2rem;
      }
    `;
    document.head.appendChild(style);

    const navbar = document.createElement('div');
    navbar.className = 'navbar';

    const homeLink = document.createElement('a');
    homeLink.href = '/index';
    homeLink.textContent = 'Home';

    const trackerLink = document.createElement('a');
    trackerLink.href = '/willtracker';
    trackerLink.textContent = 'Will Tracker';

    navbar.appendChild(homeLink);
    navbar.appendChild(trackerLink);
    document.body.appendChild(navbar);

    const container = document.createElement('div');
    container.className = 'container';
    
    document.body.appendChild(container); // Append the container to the body

    // Load the script dynamically
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script); // Append the script to the body

  }, []); // Ensure the useEffect runs only once on component mount

  return (
    <div className="container">
      <div className="elfsight-app-6ce22393-5461-4785-8ba6-b95a76c56a1b" data-elfsight-app-lazy></div>
    </div>
  ); // Return the JSX for the container
}