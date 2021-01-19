import { createGlobalStyle } from 'styled-components'

const Master = createGlobalStyle`
/*! normalize.css v2.1.3 | MIT License | git.io/normalize */

.red {
	border: 1px solid red !important
}

.float {
	position: relative;
	bottom: 35px;
	left: 10px;
	z-index: 100;
}

.pos-middle {
	left: 50%;
}

.pos-middle-2 {
	margin: 0 auto;
}

.pagination {
	font-size: 18px;
}

.p0-important{
	padding: 0 !important;
}

.gray {
	color: #555;
}

.gray-2 {
	color: #ccc;
}

.redc {
	color: #d0021b;
}


@font-face {
  font-family: "National2Reg";
  src: url("/fonts/national-2-test-regular.woff") format("woff");
}
@font-face {
  font-family: "GTPressuraReg";
  src: url("/fonts/GT-Pressura-Regular-Trial.woff2") format("woff");
}
@font-face {
  font-family: "GTPressuraLig";
  src: url("/fonts/GT-Pressura-Light-Trial.woff2") format("woff");
}





article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
	display: block
}

audio,
canvas,
video {
	display: inline-block
}

audio:not([controls]) {
	display: none;
	height: 0
}

[hidden],
template {
	display: none
}

html {
	font-family: "lores-12-narrow", sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%
}

body {
	margin: 0
}

a {
	background: transparent
}

a:focus {
	outline: thin dotted
}

a:active,
a:hover {
	outline: 0
}

h1 {
	font-size: 2em;
	margin: 0.67em 0
}

abbr[title] {
	border-bottom: 1px dotted
}

b,
strong {
	font-weight: bold
}

dfn {
	font-style: italic
}

hr {
	-moz-box-sizing: content-box;
	box-sizing: content-box;
	height: 0
}

mark {
	background: #ff0;
	color: #000
}

code,
kbd,
pre,
samp {
	font-family: monospace, serif;
	font-size: 1em
}

pre {
	white-space: pre-wrap
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sup {
	top: -0.5em
}

sub {
	bottom: -0.25em
}

img {
	border: 0
}

svg:not(:root) {
	overflow: hidden
}

figure {
	margin: 0
}

fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em
}

legend {
	border: 0;
	padding: 0
}

button,
input,
select,
textarea {
	font-family: inherit;
	font-size: 100%;
	margin: 0
}

button,
input {
	line-height: normal
}

button,
select {
	text-transform: none
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
	-webkit-appearance: button;
	cursor: pointer
}

button[disabled],
html input[disabled] {
	cursor: default
}

input[type="checkbox"],
input[type="radio"] {
	box-sizing: border-box;
	padding: 0
}

input[type="search"] {
	-webkit-appearance: textfield;
	-moz-box-sizing: content-box;
	-webkit-box-sizing: content-box;
	box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none
}

button::-moz-focus-inner,
input::-moz-focus-inner {
	border: 0;
	padding: 0
}

textarea {
	overflow: auto;
	vertical-align: top
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

.grid {
	padding-right: 2rem;
	padding-left: 2rem
}

.row {
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -0.5rem;
	margin-left: -0.5rem
}

.row.reverse {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: reverse;
	-webkit-flex-direction: row-reverse;
	-ms-flex-direction: row-reverse;
	flex-direction: row-reverse;
	-webkit-flex-wrap: row-reverse;
	-ms-flex-wrap: row-reverse;
	flex-wrap: row-reverse
}

.col.reverse {
	-webkit-box-orient: vertical;
	-webkit-box-direction: reverse;
	-webkit-flex-direction: column-reverse;
	-ms-flex-direction: column-reverse;
	flex-direction: column-reverse;
	-webkit-flex-wrap: column-reverse;
	-ms-flex-wrap: column-reverse;
	flex-wrap: column-reverse
}

.col-xs,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-offset-1,
.col-xs-offset-2,
.col-xs-offset-3,
.col-xs-offset-4,
.col-xs-offset-5,
.col-xs-offset-6,
.col-xs-offset-7,
.col-xs-offset-8,
.col-xs-offset-9,
.col-xs-offset-10,
.col-xs-offset-11,
.col-xs-offset-12 {
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	-ms-flex-positive: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	padding-right: 0.5rem;
	padding-left: 0.5rem
}

.col-xs {
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	-webkit-flex-basis: 0;
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	max-width: 100%
}

.col-xs-1 {
	-webkit-flex-basis: 8.333333333%;
	-ms-flex-preferred-size: 8.333333333%;
	flex-basis: 8.333333333%;
	max-width: 8.333333333%
}

.col-xs-2 {
	-webkit-flex-basis: 16.666666667%;
	-ms-flex-preferred-size: 16.666666667%;
	flex-basis: 16.666666667%;
	max-width: 16.666666667%
}

.col-xs-3 {
	-webkit-flex-basis: 25%;
	-ms-flex-preferred-size: 25%;
	flex-basis: 25%;
	max-width: 25%
}

.col-xs-4 {
	-webkit-flex-basis: 33.333333333%;
	-ms-flex-preferred-size: 33.333333333%;
	flex-basis: 33.333333333%;
	max-width: 33.333333333%
}

.col-xs-5 {
	-webkit-flex-basis: 41.666666667%;
	-ms-flex-preferred-size: 41.666666667%;
	flex-basis: 41.666666667%;
	max-width: 41.666666667%
}

.col-xs-6 {
	-webkit-flex-basis: 50%;
	-ms-flex-preferred-size: 50%;
	flex-basis: 50%;
	max-width: 50%
}

.col-xs-7 {
	-webkit-flex-basis: 58.333333333%;
	-ms-flex-preferred-size: 58.333333333%;
	flex-basis: 58.333333333%;
	max-width: 58.333333333%
}

.col-xs-8 {
	-webkit-flex-basis: 66.666666667%;
	-ms-flex-preferred-size: 66.666666667%;
	flex-basis: 66.666666667%;
	max-width: 66.666666667%
}

.col-xs-9 {
	-webkit-flex-basis: 75%;
	-ms-flex-preferred-size: 75%;
	flex-basis: 75%;
	max-width: 75%
}

.col-xs-10 {
	-webkit-flex-basis: 83.333333333%;
	-ms-flex-preferred-size: 83.333333333%;
	flex-basis: 83.333333333%;
	max-width: 83.333333333%
}

.col-xs-11 {
	-webkit-flex-basis: 91.666666667%;
	-ms-flex-preferred-size: 91.666666667%;
	flex-basis: 91.666666667%;
	max-width: 91.666666667%
}

.col-xs-12 {
	-webkit-flex-basis: 100%;
	-ms-flex-preferred-size: 100%;
	flex-basis: 100%;
	max-width: 100%
}

.col-xs-offset-1 {
	margin-left: 8.333333333%
}

.col-xs-offset-2 {
	margin-left: 16.666666667%
}

.col-xs-offset-3 {
	margin-left: 25%
}

.col-xs-offset-4 {
	margin-left: 33.333333333%
}

.col-xs-offset-5 {
	margin-left: 41.666666667%
}

.col-xs-offset-6 {
	margin-left: 50%
}

.col-xs-offset-7 {
	margin-left: 58.333333333%
}

.col-xs-offset-8 {
	margin-left: 66.666666667%
}

.col-xs-offset-9 {
	margin-left: 75%
}

.col-xs-offset-10 {
	margin-left: 83.333333333%
}

.col-xs-offset-11 {
	margin-left: 91.666666667%
}

.start-xs {
	-webkit-box-pack: start;
	-webkit-justify-content: flex-start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	text-align: start
}

.center-xs {
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	text-align: center
}

.end-xs {
	-webkit-box-pack: end;
	-webkit-justify-content: flex-end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	text-align: end
}

.top-xs {
	-webkit-box-align: start;
	-webkit-align-items: flex-start;
	-ms-flex-align: start;
	align-items: flex-start
}

.middle-xs {
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center
}

.bottom-xs {
	-webkit-box-align: end;
	-webkit-align-items: flex-end;
	-ms-flex-align: end;
	align-items: flex-end
}

.around-xs {
	-webkit-justify-content: space-around;
	-ms-flex-pack: distribute;
	justify-content: space-around
}

.between-xs {
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-ms-flex-pack: justify;
	justify-content: space-between
}

.first-xs {
	-webkit-box-ordinal-group: 0;
	-webkit-order: -1;
	-ms-flex-order: -1;
	order: -1
}

.last-xs {
	-webkit-box-ordinal-group: 2;
	-webkit-order: 1;
	-ms-flex-order: 1;
	order: 1
}

@media only screen and (min-width: 48em) {
	.col-sm,
	.col-sm-1,
	.col-sm-2,
	.col-sm-3,
	.col-sm-4,
	.col-sm-5,
	.col-sm-6,
	.col-sm-7,
	.col-sm-8,
	.col-sm-9,
	.col-sm-10,
	.col-sm-11,
	.col-sm-12,
	.col-sm-offset-1,
	.col-sm-offset-2,
	.col-sm-offset-3,
	.col-sm-offset-4,
	.col-sm-offset-5,
	.col-sm-offset-6,
	.col-sm-offset-7,
	.col-sm-offset-8,
	.col-sm-offset-9,
	.col-sm-offset-10,
	.col-sm-offset-11,
	.col-sm-offset-12 {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex: 0;
		-webkit-flex-grow: 0;
		-ms-flex-positive: 0;
		flex-grow: 0;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		padding-right: 0.5rem;
		padding-left: 0.5rem
	}
	.col-sm {
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-webkit-flex-basis: 0;
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		max-width: 100%
	}
	.col-sm-1 {
		-webkit-flex-basis: 8.333333333%;
		-ms-flex-preferred-size: 8.333333333%;
		flex-basis: 8.333333333%;
		max-width: 8.333333333%
	}
	.col-sm-2 {
		-webkit-flex-basis: 16.666666667%;
		-ms-flex-preferred-size: 16.666666667%;
		flex-basis: 16.666666667%;
		max-width: 16.666666667%
	}
	.col-sm-3 {
		-webkit-flex-basis: 25%;
		-ms-flex-preferred-size: 25%;
		flex-basis: 25%;
		max-width: 25%
	}
	.col-sm-4 {
		-webkit-flex-basis: 33.333333333%;
		-ms-flex-preferred-size: 33.333333333%;
		flex-basis: 33.333333333%;
		max-width: 33.333333333%
	}
	.col-sm-5 {
		-webkit-flex-basis: 41.666666667%;
		-ms-flex-preferred-size: 41.666666667%;
		flex-basis: 41.666666667%;
		max-width: 41.666666667%
	}
	.col-sm-6 {
		-webkit-flex-basis: 50%;
		-ms-flex-preferred-size: 50%;
		flex-basis: 50%;
		max-width: 50%
	}
	.col-sm-7 {
		-webkit-flex-basis: 58.333333333%;
		-ms-flex-preferred-size: 58.333333333%;
		flex-basis: 58.333333333%;
		max-width: 58.333333333%
	}
	.col-sm-8 {
		-webkit-flex-basis: 66.666666667%;
		-ms-flex-preferred-size: 66.666666667%;
		flex-basis: 66.666666667%;
		max-width: 66.666666667%
	}
	.col-sm-9 {
		-webkit-flex-basis: 75%;
		-ms-flex-preferred-size: 75%;
		flex-basis: 75%;
		max-width: 75%
	}
	.col-sm-10 {
		-webkit-flex-basis: 83.333333333%;
		-ms-flex-preferred-size: 83.333333333%;
		flex-basis: 83.333333333%;
		max-width: 83.333333333%
	}
	.col-sm-11 {
		-webkit-flex-basis: 91.666666667%;
		-ms-flex-preferred-size: 91.666666667%;
		flex-basis: 91.666666667%;
		max-width: 91.666666667%
	}
	.col-sm-12 {
		-webkit-flex-basis: 100%;
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
		max-width: 100%
	}
	.col-sm-offset-1 {
		margin-left: 8.333333333%;
	}
	.col-sm-offset-2 {
		margin-left: 16.666666667%;
	}
	.col-sm-offset-3 {
		margin-left: 25%
	}
	.col-sm-offset-4 {
		margin-left: 33.333333333%
	}
	.col-sm-offset-5 {
		margin-left: 41.666666667%
	}
	.col-sm-offset-6 {
		margin-left: 50%
	}
	.col-sm-offset-7 {
		margin-left: 58.333333333%
	}
	.col-sm-offset-8 {
		margin-left: 66.666666667%
	}
	.col-sm-offset-9 {
		margin-left: 75%
	}
	.col-sm-offset-10 {
		margin-left: 83.333333333%
	}
	.col-sm-offset-11 {
		margin-left: 91.666666667%
	}
	.start-sm {
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		text-align: start
	}
	.center-sm {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		text-align: center
	}
	.end-sm {
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		text-align: end
	}
	.top-sm {
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start
	}
	.middle-sm {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}
	.bottom-sm {
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end
	}
	.around-sm {
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around
	}
	.between-sm {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between
	}
	.first-sm {
		-webkit-box-ordinal-group: 0;
		-webkit-order: -1;
		-ms-flex-order: -1;
		order: -1
	}
	.last-sm {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1
	}
}

@media only screen and (min-width: 62em) {
	.col-md,
	.col-md-1,
	.col-md-2,
	.col-md-3,
	.col-md-4,
	.col-md-5,
	.col-md-6,
	.col-md-7,
	.col-md-8,
	.col-md-9,
	.col-md-10,
	.col-md-11,
	.col-md-12,
	.col-md-offset-1,
	.col-md-offset-2,
	.col-md-offset-3,
	.col-md-offset-4,
	.col-md-offset-5,
	.col-md-offset-6,
	.col-md-offset-7,
	.col-md-offset-8,
	.col-md-offset-9,
	.col-md-offset-10,
	.col-md-offset-11,
	.col-md-offset-12 {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex: 0;
		-webkit-flex-grow: 0;
		-ms-flex-positive: 0;
		flex-grow: 0;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		padding-right: 0.5rem;
		padding-left: 0.5rem
	}
	.col-md {
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-webkit-flex-basis: 0;
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		max-width: 100%
	}
	.col-md-1 {
		-webkit-flex-basis: 8.333333333%;
		-ms-flex-preferred-size: 8.333333333%;
		flex-basis: 8.333333333%;
		max-width: 8.333333333%
	}
	.col-md-2 {
		-webkit-flex-basis: 16.666666667%;
		-ms-flex-preferred-size: 16.666666667%;
		flex-basis: 16.666666667%;
		max-width: 16.666666667%
	}
	.col-md-3 {
		-webkit-flex-basis: 25%;
		-ms-flex-preferred-size: 25%;
		flex-basis: 25%;
		max-width: 25%
	}
	.col-md-4 {
		-webkit-flex-basis: 33.333333333%;
		-ms-flex-preferred-size: 33.333333333%;
		flex-basis: 33.333333333%;
		max-width: 33.333333333%
	}
	.col-md-5 {
		-webkit-flex-basis: 41.666666667%;
		-ms-flex-preferred-size: 41.666666667%;
		flex-basis: 41.666666667%;
		max-width: 41.666666667%
	}
	.col-md-6 {
		-webkit-flex-basis: 50%;
		-ms-flex-preferred-size: 50%;
		flex-basis: 50%;
		max-width: 50%
	}
	.col-md-7 {
		-webkit-flex-basis: 58.333333333%;
		-ms-flex-preferred-size: 58.333333333%;
		flex-basis: 58.333333333%;
		max-width: 58.333333333%
	}
	.col-md-8 {
		-webkit-flex-basis: 66.666666667%;
		-ms-flex-preferred-size: 66.666666667%;
		flex-basis: 66.666666667%;
		max-width: 66.666666667%
	}
	.col-md-9 {
		-webkit-flex-basis: 75%;
		-ms-flex-preferred-size: 75%;
		flex-basis: 75%;
		max-width: 75%
	}
	.col-md-10 {
		-webkit-flex-basis: 83.333333333%;
		-ms-flex-preferred-size: 83.333333333%;
		flex-basis: 83.333333333%;
		max-width: 83.333333333%
	}
	.col-md-11 {
		-webkit-flex-basis: 91.666666667%;
		-ms-flex-preferred-size: 91.666666667%;
		flex-basis: 91.666666667%;
		max-width: 91.666666667%
	}
	.col-md-12 {
		-webkit-flex-basis: 100%;
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
		max-width: 100%
	}
	.col-md-offset-1 {
		margin-left: 8.333333333%
	}
	.col-md-offset-2 {
		margin-left: 16.666666667%
	}
	.col-md-offset-3 {
		margin-left: 25%
	}
	.col-md-offset-4 {
		margin-left: 33.333333333%
	}
	.col-md-offset-5 {
		margin-left: 41.666666667%
	}
	.col-md-offset-6 {
		margin-left: 50%
	}
	.col-md-offset-7 {
		margin-left: 58.333333333%
	}
	.col-md-offset-8 {
		margin-left: 66.666666667%
	}
	.col-md-offset-9 {
		margin-left: 75%
	}
	.col-md-offset-10 {
		margin-left: 83.333333333%
	}
	.col-md-offset-11 {
		margin-left: 91.666666667%
	}
	.start-md {
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		text-align: start
	}
	.center-md {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		text-align: center
	}
	.end-md {
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		text-align: end
	}
	.top-md {
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start
	}
	.middle-md {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}
	.bottom-md {
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end
	}
	.around-md {
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around
	}
	.between-md {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between
	}
	.first-md {
		-webkit-box-ordinal-group: 0;
		-webkit-order: -1;
		-ms-flex-order: -1;
		order: -1
	}
	.last-md {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1
	}
}

@media only screen and (min-width: 75em) {
	.col-lg,
	.col-lg-1,
	.col-lg-2,
	.col-lg-3,
	.col-lg-4,
	.col-lg-5,
	.col-lg-6,
	.col-lg-7,
	.col-lg-8,
	.col-lg-9,
	.col-lg-10,
	.col-lg-11,
	.col-lg-12,
	.col-lg-offset-1,
	.col-lg-offset-2,
	.col-lg-offset-3,
	.col-lg-offset-4,
	.col-lg-offset-5,
	.col-lg-offset-6,
	.col-lg-offset-7,
	.col-lg-offset-8,
	.col-lg-offset-9,
	.col-lg-offset-10,
	.col-lg-offset-11,
	.col-lg-offset-12 {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex: 0;
		-webkit-flex-grow: 0;
		-ms-flex-positive: 0;
		flex-grow: 0;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		padding-right: 0.5rem;
		padding-left: 0.5rem
	}
	.col-lg {
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-webkit-flex-basis: 0;
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		max-width: 100%
	}
	.col-lg-1 {
		-webkit-flex-basis: 8.333333333%;
		-ms-flex-preferred-size: 8.333333333%;
		flex-basis: 8.333333333%;
		max-width: 8.333333333%
	}
	.col-lg-2 {
		-webkit-flex-basis: 16.666666667%;
		-ms-flex-preferred-size: 16.666666667%;
		flex-basis: 16.666666667%;
		max-width: 16.666666667%
	}
	.col-lg-3 {
		-webkit-flex-basis: 25%;
		-ms-flex-preferred-size: 25%;
		flex-basis: 25%;
		max-width: 25%
	}
	.col-lg-4 {
		-webkit-flex-basis: 33.333333333%;
		-ms-flex-preferred-size: 33.333333333%;
		flex-basis: 33.333333333%;
		max-width: 33.333333333%
	}
	.col-lg-5 {
		-webkit-flex-basis: 41.666666667%;
		-ms-flex-preferred-size: 41.666666667%;
		flex-basis: 41.666666667%;
		max-width: 41.666666667%
	}
	.col-lg-6 {
		-webkit-flex-basis: 50%;
		-ms-flex-preferred-size: 50%;
		flex-basis: 50%;
		max-width: 50%
	}
	.col-lg-7 {
		-webkit-flex-basis: 58.333333333%;
		-ms-flex-preferred-size: 58.333333333%;
		flex-basis: 58.333333333%;
		max-width: 58.333333333%
	}
	.col-lg-8 {
		-webkit-flex-basis: 66.666666667%;
		-ms-flex-preferred-size: 66.666666667%;
		flex-basis: 66.666666667%;
		max-width: 66.666666667%
	}
	.col-lg-9 {
		-webkit-flex-basis: 75%;
		-ms-flex-preferred-size: 75%;
		flex-basis: 75%;
		max-width: 75%
	}
	.col-lg-10 {
		-webkit-flex-basis: 83.333333333%;
		-ms-flex-preferred-size: 83.333333333%;
		flex-basis: 83.333333333%;
		max-width: 83.333333333%
	}
	.col-lg-11 {
		-webkit-flex-basis: 91.666666667%;
		-ms-flex-preferred-size: 91.666666667%;
		flex-basis: 91.666666667%;
		max-width: 91.666666667%
	}
	.col-lg-12 {
		-webkit-flex-basis: 100%;
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
		max-width: 100%
	}
	.col-lg-offset-1 {
		margin-left: 8.333333333%
	}
	.col-lg-offset-2 {
		margin-left: 16.666666667%
	}
	.col-lg-offset-3 {
		margin-left: 25%
	}
	.col-lg-offset-4 {
		margin-left: 33.333333333%
	}
	.col-lg-offset-5 {
		margin-left: 41.666666667%
	}
	.col-lg-offset-6 {
		margin-left: 50%
	}
	.col-lg-offset-7 {
		margin-left: 58.333333333%
	}
	.col-lg-offset-8 {
		margin-left: 66.666666667%
	}
	.col-lg-offset-9 {
		margin-left: 75%
	}
	.col-lg-offset-10 {
		margin-left: 83.333333333%
	}
	.col-lg-offset-11 {
		margin-left: 91.666666667%
	}
	.start-lg {
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		text-align: start
	}
	.center-lg {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		text-align: center
	}
	.end-lg {
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		text-align: end
	}
	.top-lg {
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start
	}
	.middle-lg {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}
	.bottom-lg {
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end
	}
	.around-lg {
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around
	}
	.between-lg {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between
	}
	.first-lg {
		-webkit-box-ordinal-group: 0;
		-webkit-order: -1;
		-ms-flex-order: -1;
		order: -1
	}
	.last-lg {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1
	}
}

html {
	font-size: 13px;
	/* font-family: typeface-body, serif */
}

@media (min-width: 62em) {
	html {
		font-size: 15px
	}
}

body,
p {
	font-size: 1rem
}

@media (min-width: 62em) {
	body,
	p {
		font-size: 1rem
	}
}

.Unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none
}

p {
	line-height: 150%;
	text-align: left;
	cursor: default;
	padding-bottom: 1rem;
	margin: -0.5em 0 0em 0
}

@media (min-width: 62em) {
	p {
		padding-bottom: 1.2rem;
		margin: -0.5em 0 1em 0
	}
}

i,
.italic {
	/* font-family: "GTSectraBookItalic", Arial, sans-serif; */
	font-style: normal
}

a {
	text-decoration: none;
	color: #272320;
	position: relative;
	cursor: pointer
}



strong {
	font-weight: normal
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
	font-weight: normal;
	/* font-family: "GTSectraDisplayLight", Times, Georgia, serif; */
	line-height: 130%;
	position: relative;
	z-index: 80;
	cursor: default
}

h1 {
	font-size: 2rem
}

ul{
	padding: 0;
	margin: 0

}

ul,li {
	display: list-item;
	padding: 0;
	margin: 0
}

ul {
	list-style: none;
}

li {
	margin-bottom: 0.8rem
}

.listed li::before {
	width: 4px;
    height: 4px;
    border-radius: 50%;
    left: -8px;
    top: 14px;
    content: '';
    display: block;
    background: #666;
    position: relative;
}

@media (min-width: 48em) {
	.listed li::before {
		top: 14px;
	}
}

@media (min-width: 62em) {
	.listed li::before {
		top: 15px;
	}
}



@media (min-width: 89em) {
	.listed li::before {
		top: 16px;
	}
}

@media (min-width: 89em) {
	.listed li::before {
		top: 16px;
	}
}

@media (min-width: 100em) {
	.listed li::before {
		top: 19.5px;
	}
}

.PrimaryCTA {
	font-size: 0.8rem;
	color: #272320;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	font-weight: bold;
	text-align: center;
	border: 1px solid #272320;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	background: none
}

.Display1 {
	font-size: 10.375vw;
	letter-spacing: 28%;
	line-height: 120%;
	font-family: "GTPressuraReg", Times, Georgia, serif
}

@media (min-width: 48em) {
	.Display1 {
		font-size: 5.1875vw
	}
}

@media (min-width: 62em) {
	.Display1 {
		font-size: 3.32vw
	}
}

.Display1 a,
.Display1 i {
	/* font-family: "GTSectraDisplayLightItalic", Times, Georgia, serif; */
	font-style: normal
}

.Display1 a {
	border-bottom: 1px solid #4b5320
}

.Display2 {
	font-size: 17.6px;
	line-height: 137.5%;
	line-height: 140%;
	font-family: "National2Reg", Arial, sans-serif
}

@media (min-width: 62em) {
	.Display2 {
		font-size: 18px
	}
}

@media (min-width: 75em) {
	.Display2 {
		font-size: 1.4vw
	}
}

@media (min-width: 100em) {
	.Display2 {
		font-size: 25px
	}
}

.LabelText {
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	font-weight: bold
}

.Caption {
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	/* font-family: HelveticaNeue-Medium, "ApercuMono", Andale Mono, monospaced */
}

@media (min-width: 62em) {
	.Caption {
		font-size: 1rem
	}
}

.typeface-tertiary {
	/* font-family: HelveticaNeue-Medium, "ApercuMono", Andale Mono, monospaced */
}

html {
	min-height: 100%
}

* {
	-webkit-tap-highlight-color: transparent;
	-webkit-font-smoothing: antialiased;
	/* font-smoothing: antialiased; */
	box-sizing: border-box
}

body {
	height: 100%;
	width: 100vw;
	overflow-y: auto;
	overflow-x: hidden;
	margin: 0;
	font-family: "National2Reg", Arial, sans-serif;
	background: #fcfbfa;
	color: #272320
}

#main {
	overflow-x: hidden
}

img {
	max-width: 100%
}


.PageContent {
	transition: all 300ms ease-out;
	opacity: 1
}

.PageContent.is-exiting {
	opacity: 0
}

.Divider {
	width: 100%;
	height: 1px;
	background: #000
}

.AlignCenter {
	align-items: center;
	display: flex
}

.AlignTop {
	align-items: flex-start;
	display: flex
}

.ShowDesktop {
	visibility: hidden
}

@media (min-width: 62em) {
	.ShowDesktop {
		visibility: visible
	}
}

.ShowMobile {
	visibility: visible
}

@media (min-width: 62em) {
	.ShowMobile {
		visibility: hidden
	}
}

.CenterText {
	text-align: center
}

.lineHeight150 {
	line-height: 150%
}

.op20 {
	opacity: 0.2
}

.op30 {
	opacity: 0.3
}

.op50 {
	opacity: 0.5
}

.op60 {
	opacity: 0.6
}

.rounded10 {
	border-radius: 10px
}

.fullWidth {
	width: 100%
}

.color-negative {
	color: #f79494
}

.color-accent-primary {
	color: #ffa500
}

.color-tock-blue {
	color: #1b1ba3
}

.m0 {
	margin: 0
}

.m1 {
	margin: 8px
}

.m2 {
	margin: 16px
}

.m3 {
	margin: 24px
}

.m4 {
	margin: 32px
}

.m5 {
	margin: 40px
}

.m6 {
	margin: 48px
}

.m7 {
	margin: 56px
}

.m8 {
	margin: 64px
}

.m9 {
	margin: 72px
}

.m10 {
	margin: 80px
}

.m11 {
	margin: 88px
}

.m12 {
	margin: 96px
}

.m13 {
	margin: 104px
}

.m14 {
	margin: 112px
}

.m15 {
	margin: 120px
}

@media (min-width: 62em) {
	.d-m0 {
		margin: 0
	}
	.d-m1 {
		margin: 8px
	}
	.d-m2 {
		margin: 16px
	}
	.d-m3 {
		margin: 24px
	}
	.d-m4 {
		margin: 32px
	}
	.d-m5 {
		margin: 40px
	}
	.d-m6 {
		margin: 48px
	}
	.d-m7 {
		margin: 56px
	}
	.d-m8 {
		margin: 64px
	}
	.d-m9 {
		margin: 72px
	}
	.d-m10 {
		margin: 80px
	}
	.d-m11 {
		margin: 88px
	}
	.d-m12 {
		margin: 96px
	}
	.d-m13 {
		margin: 104px
	}
	.d-m14 {
		margin: 112px
	}
	.d-m15 {
		margin: 120px
	}
}

.mt0 {
	margin-top: 0
}

.mt1 {
	margin-top: 8px
}

.mt2 {
	margin-top: 16px
}

.mt3 {
	margin-top: 24px
}

.mt4 {
	margin-top: 32px
}

.mt5 {
	margin-top: 40px
}

.mt6 {
	margin-top: 48px
}

.mt7 {
	margin-top: 56px
}

.mt8 {
	margin-top: 64px
}

.mt9 {
	margin-top: 72px
}

.mt10 {
	margin-top: 80px
}

@media (min-width: 62em) {
	.d-mt0 {
		margin-top: 0
	}
	.d-mt1 {
		margin-top: 8px
	}
	.d-mt2 {
		margin-top: 16px
	}
	.d-mt3 {
		margin-top: 24px
	}
	.d-mt4 {
		margin-top: 32px
	}
	.d-mt5 {
		margin-top: 40px
	}
	.d-mt6 {
		margin-top: 48px
	}
	.d-mt7 {
		margin-top: 56px
	}
	.d-mt8 {
		margin-top: 64px
	}
	.d-mt9 {
		margin-top: 72px
	}
	.d-mt10 {
		margin-top: 80px
	}
}

.mr0 {
	margin-right: 0
}

.mr1 {
	margin-right: 8px
}

.mr2 {
	margin-right: 16px
}

.mr3 {
	margin-right: 24px
}

.mr4 {
	margin-right: 32px
}

.mr5 {
	margin-right: 40px
}

.mr6 {
	margin-right: 48px
}

.mr7 {
	margin-right: 56px
}

.mr8 {
	margin-right: 64px
}

.mr9 {
	margin-right: 72px
}

.mr10 {
	margin-right: 80px
}

.mr11 {
	margin-right: 88px
}

.mr12 {
	margin-right: 96px
}

.mr13 {
	margin-right: 104px
}

.mr14 {
	margin-right: 112px
}

.mr15 {
	margin-right: 120px
}

@media (min-width: 62em) {
	.d-mr0 {
		margin-right: 0
	}
	.d-mr1 {
		margin-right: 8px
	}
	.d-mr2 {
		margin-right: 16px
	}
	.d-mr3 {
		margin-right: 24px
	}
	.d-mr4 {
		margin-right: 32px
	}
	.d-mr5 {
		margin-right: 40px
	}
	.d-mr6 {
		margin-right: 48px
	}
	.d-mr7 {
		margin-right: 56px
	}
	.d-mr8 {
		margin-right: 64px
	}
	.d-mr9 {
		margin-right: 72px
	}
	.d-mr10 {
		margin-right: 80px
	}
	.d-mr11 {
		margin-right: 88px
	}
	.d-mr12 {
		margin-right: 96px
	}
	.d-mr13 {
		margin-right: 104px
	}
	.d-mr14 {
		margin-right: 112px
	}
	.d-mr15 {
		margin-right: 120px
	}
}

.mb0 {
	margin-bottom: 0
}

.mb1 {
	margin-bottom: 8px
}

.mb2 {
	margin-bottom: 16px
}

.mb3 {
	margin-bottom: 24px
}

.mb4 {
	margin-bottom: 32px
}

.mb5 {
	margin-bottom: 40px
}

.mb6 {
	margin-bottom: 48px
}

.mb7 {
	margin-bottom: 56px
}

.mb8 {
	margin-bottom: 64px
}

.mb9 {
	margin-bottom: 72px
}

.mb10 {
	margin-bottom: 80px
}

.mb11 {
	margin-bottom: 88px
}

.mb12 {
	margin-bottom: 96px
}

.mb13 {
	margin-bottom: 104px
}

.mb14 {
	margin-bottom: 112px
}

.mb15 {
	margin-bottom: 120px
}

@media (min-width: 62em) {
	.d-mb0 {
		margin-bottom: 0
	}
	.d-mb1 {
		margin-bottom: 8px
	}
	.d-mb2 {
		margin-bottom: 16px
	}
	.d-mb3 {
		margin-bottom: 24px
	}
	.d-mb4 {
		margin-bottom: 32px
	}
	.d-mb5 {
		margin-bottom: 40px
	}
	.d-mb6 {
		margin-bottom: 48px
	}
	.d-mb7 {
		margin-bottom: 56px
	}
	.d-mb8 {
		margin-bottom: 64px
	}
	.d-mb9 {
		margin-bottom: 72px
	}
	.d-mb10 {
		margin-bottom: 80px
	}
	.d-mb11 {
		margin-bottom: 88px
	}
	.d-mb12 {
		margin-bottom: 96px
	}
	.d-mb13 {
		margin-bottom: 104px
	}
	.d-mb14 {
		margin-bottom: 112px
	}
	.d-mb15 {
		margin-bottom: 120px
	}
}

.ml0 {
	margin-left: 0
}

.ml1 {
	margin-left: 8px
}

.ml2 {
	margin-left: 16px
}

.ml3 {
	margin-left: 24px
}

.ml4 {
	margin-left: 32px
}

.ml5 {
	margin-left: 40px
}

.ml6 {
	margin-left: 48px
}

.ml7 {
	margin-left: 56px
}

.ml8 {
	margin-left: 64px
}

.ml9 {
	margin-left: 72px
}

.ml10 {
	margin-left: 80px
}

.ml11 {
	margin-left: 88px
}

.ml12 {
	margin-left: 96px
}

.ml13 {
	margin-left: 104px
}

.ml14 {
	margin-left: 112px
}

.ml15 {
	margin-left: 120px
}

@media (min-width: 62em) {
	.d-ml0 {
		margin-left: 0
	}
	.d-ml1 {
		margin-left: 8px
	}
	.d-ml2 {
		margin-left: 16px
	}
	.d-ml3 {
		margin-left: 24px
	}
	.d-ml4 {
		margin-left: 32px
	}
	.d-ml5 {
		margin-left: 40px
	}
	.d-ml6 {
		margin-left: 48px
	}
	.d-ml7 {
		margin-left: 56px
	}
	.d-ml8 {
		margin-left: 64px
	}
	.d-ml9 {
		margin-left: 72px
	}
	.d-ml10 {
		margin-left: 80px
	}
	.d-ml11 {
		margin-left: 88px
	}
	.d-ml12 {
		margin-left: 96px
	}
	.d-ml13 {
		margin-left: 104px
	}
	.d-ml14 {
		margin-left: 112px
	}
	.d-ml15 {
		margin-left: 120px
	}
}

.p0 {
	padding: 0
}

.p1 {
	padding: 8px
}

.p2 {
	padding: 16px
}

.p3 {
	padding: 24px
}

.p4 {
	padding: 32px
}

.p5 {
	padding: 40px
}

.p6 {
	padding: 48px
}

.p7 {
	padding: 56px
}

.p8 {
	padding: 64px
}

.p9 {
	padding: 72px
}

.p10 {
	padding: 80px
}

@media (min-width: 62em) {
	.d-p0 {
		padding: 4px
	}
	.d-p1 {
		padding: 8px
	}
	.d-p2 {
		padding: 16px
	}
	.d-p3 {
		padding: 24px
	}
	.d-p4 {
		padding: 32px
	}
	.d-p5 {
		padding: 40px
	}
	.d-p6 {
		padding: 48px
	}
	.d-p7 {
		padding: 56px
	}
	.d-p8 {
		padding: 64px
	}
	.d-p9 {
		padding: 72px
	}
	.d-p10 {
		padding: 80px
	}
}

.pb0 {
	padding-bottom: 4px
}

.pb1 {
	padding-bottom: 8px
}

.pb2 {
	padding-bottom: 16px
}

.pb3 {
	padding-bottom: 24px
}

.pb4 {
	padding-bottom: 32px
}

.pb5 {
	padding-bottom: 40px
}

.pb6 {
	padding-bottom: 48px
}

.pb7 {
	padding-bottom: 56px
}

.pb8 {
	padding-bottom: 64px
}

.pb9 {
	padding-bottom: 72px
}

.pb10 {
	padding-bottom: 80px
}

.pt0 {
	padding-top: 4px
}

.pt1 {
	padding-top: 8px
}

.pt2 {
	padding-top: 16px
}

.pt3 {
	padding-top: 24px
}

.pt4 {
	padding-top: 32px
}

.pt5 {
	padding-top: 40px
}

.pt6 {
	padding-top: 48px
}

.pt7 {
	padding-top: 56px
}

.pt8 {
	padding-top: 64px
}

.pt9 {
	padding-top: 72px
}

.pt10 {
	padding-top: 80px
}

.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12 {
	margin-bottom: 9vw
}

@media (min-width: 62em) {
	.col-md-1,
	.col-md-2,
	.col-md-3,
	.col-md-4,
	.col-md-5,
	.col-md-6,
	.col-md-7,
	.col-md-8,
	.col-md-9,
	.col-md-10,
	.col-md-11,
	.col-md-12 {
		margin-bottom: 0px
	}
}

.nested.col-md-1,
.nested.col-md-2,
.nested.col-md-3,
.nested.col-md-4,
.nested.col-md-5,
.nested.col-md-6,
.nested.col-md-7,
.nested.col-md-8,
.nested.col-md-9,
.nested.col-md-10,
.nested.col-md-11,
.nested.mb5 {
	margin-bottom: 4vw
}

@media (min-width: 62em) {
	.nested.col-md-1,
	.nested.col-md-2,
	.nested.col-md-3,
	.nested.col-md-4,
	.nested.col-md-5,
	.nested.col-md-6,
	.nested.col-md-7,
	.nested.col-md-8,
	.nested.col-md-9,
	.nested.col-md-10,
	.nested.col-md-11,
	.nested.mb5 {
		margin-bottom: 16px
	}
}

.column,
.col-xs-12,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-offset-1,
.col-md-offset-2,
.col-md-offset-3,
.col-md-offset-4,
.col-md-offset-5,
.col-md-offset-6,
.col-md-offset-7,
.col-md-offset-8,
.col-md-offset-9,
.col-md-offset-10,
.col-md-offset-11,
.col-md-offset-12 {
	padding-right: 2.5vw;
	padding-left: 2.5vw
}

.row {
	padding: 2vw 2vw;
	overflow: visible;
	margin-left: 0px;
	margin-right: 0px;
	position: relative
}

.row.short {
	padding: 0 2vw;
}

.row.tall {
	padding: 6vw 2vw
}

.row.taller {
	padding: 10vw 2vw
}

.row.skinny {
	padding: 2vw 12.5vw
}

.row .row.nested {
	padding: 0 !important
}

.row .row.nested .column {
	padding: 0;
	padding-right: 4vw
}

.column .row {
	padding: 0 !important
}

.Intro {
	min-height: 90vh;
	padding-left: 7vw;
	padding-right: 7vw;
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: -12vw
}

.Intro h1 {
	align-self: center
}

@media (min-width: 62em) {
	.Intro {
		min-height: 90vh;
		margin: 0;
		padding: 0
	}
	.Intro.Tall {
		margin-bottom: 6vw
	}
	.Intro h1 {
		margin-left: 2vw
	}
}

.IntroShort {
	margin-bottom: -20vw
}


`

export default Master