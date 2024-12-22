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
.App {
  text-align: center;
  font-family: Arial, sans-serif;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
}

.links a {
  color: #61dafb;
  text-decoration: none;
  margin: 10px;
  font-size: 20px;
}

.links a:hover {
  text-decoration: underline;
}
`;
