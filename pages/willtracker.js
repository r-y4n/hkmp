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
    container.innerHTML = `
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/will.haskamp/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
    `;
    document.body.appendChild(container);

    // Programmatically add the Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(navbar);
      document.body.removeChild(container);
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}