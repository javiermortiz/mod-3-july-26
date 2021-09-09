# Review of Week 7 Wednesday Learning Objectives

## Importing CSS stylesheets

1. Import a CSS stylesheet into an HTML page

Best practice is to put the `<link>` tags inside of the `<head>` tag before the `<body>`. This way, when the page is first loaded, HTML and CSS are parsed at the same time. If the `<link>` was after the `<body>`, the user might see unstyled elements before the CSS is read and applied.

<!-- prettier-ignore -->
```html
<head>
  <link rel="stylesheet" href="/styles/site.css">
</head>
```

2. Import CSS from one file into another

```css
/* A local import */
@import url("./style.css");
```

## CSS Specificity lesson

1. Explain how CSS rules are applied based on their order and specificity

| **Position:** | **A**  | **B** |                **C**                |          **D**           |
| :-----------: | :----: | :---: | :---------------------------------: | :----------------------: |
| _Selectors:_  | inline |  IDs  | classes, attributes, pseudo-classes | tags and pseudo-elements |

- _A_ is the number of inline styles used (ie "the most specific", set to 0 or 1)

- _B_ is the number of IDs being selected

- _C_ is the number of classes, attributes, and pseudo-classes being selected

- _D_ is the number of tags and pseudo-elements

In this matrix of values, the number of selectors on the left will override any higher number of selectors that come after.

2. Calculate the specificity of CSS rules and determine which rule override the properties of another

```css
#blue_link:hover {
  color: blue;
}

a.red_link:hover {
  color: red;
}
```

```html
<a href="/" id="blue_link" class="red_link"> Which color am I on hover? </a>
```

`#blue_link:hover` has a score of 0-1-1-0 and `a.red_link:hover` has a score of 0-0-2-1. When you hover, the link is blue because the ID is in a higher position, even though there are more class, pseudo-class, and tag selectors on `a.red_link:hover`

## CSS Selection lesson

1. Select elements by tag, id, and/or class

|               | _example_ |                _explanation_                 |
| ------------- | :-------: | :------------------------------------------: |
| **tag**       |    div    |         selects all `<div>`elements          |
| **id (#)**    | #content  |   selects the element with ID of "content"   |
| **class (.)** |  .active  | selects all elements with the class "active" |

2. Write "combinators" to create compound selector statements to target specific elements

```css
div.yellow.active {
  color: yellow;
}
```

This compound selector selects all div elements with the classes of `yellow` and `active`

```html
<div class="yellow active">I am yellow</div>
```

```css
/* any children <p> tags */
div p {
  color: green;
}

/* only direct children */
div > p {
  color: green;
}

/* adjacent sibling selector */
img + p {
  color: green;
}
/* will select <p> tags which are siblings of <img> tags */
```

`space` after a selector indicates you are selecting any descendants of that tag, regardless if they are direct children or not.

`>` after a selector indicates that you only want to select DIRECT children.

`+` after a selector means you're selecting any adjacent sibling

3. Apply pseudo classes (active, hover, visited) for specific elements in specific states

```css
a:hover,
a:active {
  text-decoration: purple wavy underline;
}
```

This puts a wavy purple underline on `<a>` tags when the user hovers and clicks on the link.

## Overflow lesson

1. Use the overflow, overflow-x, and overflow-y properties to effect clipping and scrolling on elements

|            |               description               |
| ---------- | :-------------------------------------: |
| overflow   | shorthand for overflow-x and overflow-y |
| overflow-x |     content overflow on the x-axis      |
| overflow-y |     content overflow on the y-axis      |

Values: `visible, hidden, clip, scroll, auto`

## Text lesson

1. Research and apply CSS to modify the text style on an element:

   - Type faces, sizes, styles, and weights
     - https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
   - Text transformation and alignment
     - https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     - https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
   - Colors expressed as names, hexadecimal RGB values, and decimal RGB values
     - https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color
   - Everything about borders
     - https://developer.mozilla.org/en-US/docs/Web/CSS/border
   - Shadows
     - https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     - https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow()
   - Opacity (transparency)
     - https://developer.mozilla.org/en-US/docs/Web/CSS/opacity

2. Explain the generic font names "serif", "sans-serif", and "monospace" and correctly identify examples of each

A serif is a decorative hook on letters. Sans serif means without any of these 'hooks'. Monospace means each character takes up the same amount of space.

![font names](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/properties-generic-font-names.png)

3. Explain why using Web fonts helps with consistent experience across viewing devices

Using Web fonts (such as Google Fonts) provides broader access to different fonts, as well as the reassurance that text will appear the same across different browsers and devices.

If for some reason the user cannot download the font "Ubuntu", then it will fall back on a generic `sans-serif` font.

```css
/* Importing "Ubuntu" from the Google Fonts library */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");

p {
  font-family: "Ubuntu", sans-serif;
}
```

## Style Background

1. Add and style an image to the background of an element

Use the [background-image property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) to select your image.

Use the [background-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) to appropriately scale your image.

```css
.my_div {
  background-image: url("../media/rosie.png");
  background-size: cover;
}
```

## Absolute and Relative Unit Lesson

1. Recall and explain the different absolute and relative length units in CSS

| unit | relative | absolute | description                                          |
| ---- | :------: | :------: | ---------------------------------------------------- |
| px   |          |    ✅    | 1px = 1/96th of an inch                              |
| pt   |          |    ✅    | 1pt = 1/72nd of an inch                              |
| cm   |          |    ✅    | centimeters                                          |
| mm   |          |    ✅    | millimeters                                          |
| in   |          |    ✅    | inches                                               |
| em   |    ✅    |          | The font size of the containing element              |
| rem  |    ✅    |          | The font size of the root element                    |
| %    |    ✅    |          | Percentage of the parent element                     |
| vw   |    ✅    |          | a number 1-100 representing % of the viewport width  |
| vh   |    ✅    |          | a number 1-100 representing % of the viewport height |
