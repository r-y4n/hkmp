import { useEffect } from 'react';

export default function Home() {
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
      }

      .imgstyle {
        width: 80vw;
        height: 80vw;
        animation-name: spin;
        animation-duration: 2000ms; 
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        display: block; 
        margin: auto; 
        transform-origin: center; 
        z-index: 1000;
        border-radius: 15%;
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

    const image = document.createElement('img');
    image.src = '/will.jpg'; 
    image.className = 'imgstyle'; 

    container.appendChild(image);
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(navbar);
      document.body.removeChild(container);
      document.head.removeChild(style); 
    };
  }, []);

  return null; 
}
