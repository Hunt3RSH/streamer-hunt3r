import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@media screen and (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 20px;
  }
}

@media screen and (min-width: 768px) {
  ::-webkit-scrollbar-track {
    background: #111827;
  }
}

@media screen and (min-width: 768px) {
  ::-webkit-scrollbar-thumb {
    background: #9333ea;
  }
}

body {
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
    list-style: none;
    padding-left: 0
}
a {
    transition: all 0.5s ease-out;
    :hover {
      color: #3b82f6;
    }
}
:root {
    --bg-color: white;
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
  .ButtonStyled {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    border-radius: 4px;
    border: 1px solid #111827;
    transition: all 0.5s ease-out;
    &:hover {
        /* border: 1px solid #9333ea; */
        outline: none;
        cursor: pointer;
    }
  }
.active {
  position: relative;
  color: #2196f3;
  background: rgb(51, 65, 85);
  background: linear-gradient(0deg, rgba(51, 65, 85, 1) 0%, rgba(30, 41, 59, 1) 100%);

  @media screen and (min-width: 1024px) {
    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #2196f3;
    }
  }
}

.no-pointer {
    pointer-events: none;
}
.game {

  @media screen and (min-width: 1024px) {
  transition-property: box-shadow;
  transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		cursor: pointer;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	}
	&:hover .gameInfo,
	&:focus .gameInfo {
		transform: translateY(-100%);
		opacity: 1;
	}
    
  }
}
.gameInfo {

  @media screen and (min-width: 1024px) {
  position: absolute;
	display: flex;
  flex-direction: column;
	align-items: center;
	padding: 24px;
	height: 100%;
  width: 100%;
	opacity: 0;
	transform: translateY(0);
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0.03em;
	background-color: rgba(107, 33, 168, 0.85);
	pointer-events: none;
	transition-property: opacity, transform;
  transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
`;
