import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		height: 100%;
	  }
	  
	  body {
		height: 100%;
	  }
	  
	  div#root {
		height: 100%; 
		padding: 0 30px;
	  }

`;

export default GlobalStyles;
