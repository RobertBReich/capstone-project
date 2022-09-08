import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote::before, blockquote::after,
q::before, q::after {
	content: '';
	content: none;
}
table {
	border-spacing: 0;
	border-collapse: collapse;
}

/* additional styling that is not part of the css restet */
*,
*::before,
*::after {
		box-sizing: border-box;
}
html {
	font-size: 16px;
}

/* 	vendor reset files 	*/

/* source-sans-pro-200 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/source-sans-pro-v21-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/source-sans-pro-v21-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/source-sans-pro-v21-latin-200.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

/* source-sans-pro-200italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 200;
  src: url('../fonts/source-sans-pro-v21-latin-200italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/source-sans-pro-v21-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/source-sans-pro-v21-latin-200italic.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

/* source-sans-pro-regular - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/source-sans-pro-v21-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/source-sans-pro-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/source-sans-pro-v21-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

/* source-sans-pro-italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url('../fonts/source-sans-pro-v21-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/source-sans-pro-v21-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/source-sans-pro-v21-latin-italic.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

/* source-sans-pro-600 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/source-sans-pro-v21-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/source-sans-pro-v21-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/source-sans-pro-v21-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../fonts/source-sans-pro-v21-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/source-sans-pro-v21-latin-600.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

* body {
	background-color: rgba(64, 64, 64, 1);
	color: black;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1rem;
	-webkit-font-smoothing: antialiased;

}
.background-white {
	background-color: white;
}
.background-black {
	background-color: black;
}

.text-color-white {
	color: white;
}
.text-color-black {
	color: black;
}

`;
