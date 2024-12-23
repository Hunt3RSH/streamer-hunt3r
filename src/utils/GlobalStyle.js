import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
    list-style: none;
    padding-left: 0
}
:root {
    --bg-color: #1b2838;
    --header-color: #171a21;
    --text-color: #c7d5e0;
    --link-color: #66c0f4;
    --link-hover-color: #ffffff;
    --accent-color: #5c7e10;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .InProgress {
    color: gray;
    animation: pulse 1s infinite;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--link-hover-color);
    }
  }

  h1, p {
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  .App {
    text-align: center;
  }

  .App-header {
    background-color: var(--header-color);
    padding: 2rem;
    border-bottom: 1px solid var(--accent-color);
  }

  .links {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    gap: 15px;

    a {
    display: inline-flex;
    position: relative;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: calc(1rem - 0.2rem);
    padding-right: 1rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    white-space: nowrap;
    user-select: none;
    font-weight: 600;
    font-size: 1rem;
    height: 3rem;
    border-radius: 0.4rem;
    background-color: #9147ff;
    color: #ffffff;

      &:hover {
        background: #772ce8;
      }
    }
  }
`;
