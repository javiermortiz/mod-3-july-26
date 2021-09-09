# Review of Week 7 Thursday Learning Objectives

## Flexible Box Model Lesson

1. Explain how flexible box layout lays out elements

Flexible box layout aka 'flexbox' provides a dynamic way to fill out the available space on different viewports. A flexbox container will fill the available space and distribute space among the items.

```css
div {
  display: flex;
}
```

2. Use the flex property to specify grow, shrink, and basis values.

| Property name | default value | description                                                                                                                                   |
| ------------- | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| flex-grow     |       0       | a number indicating how much an item can grow in relation to the flexbox                                                                      |
| flex-shrink   |       1       | a number indicating how much an item should shrink if needed                                                                                  |
| flex-basis    |     auto      | a unit measurment length (ie 40px) or keyword (max-content, min-content, and fit-content) indicating how much space an element should take up |

All 3 of these properties must be set on the _child_ elements of the flexbox container.

Examples (checkout source code in raw markdown):

<style>
  * {
    box-sizing: border-box;
  }
.container {
    width: 90%;
    display: flex;
    height: 100px;
    margin: 8px auto;
}
.container div {
  color: black;
  background-color: lavender;
  height: 100px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
.container .grow {
  flex-grow: 2;
  background-color: blanchedalmond;
}

.container .shrink {
  flex-shrink: 4;
  background-color: #04AA6D;
}

.flex_basis {
  background-color: rebeccapurple;
  width: 90%;
  display: flex;
  height: 100px;
  margin: 8px auto;
  border: 1px solid black;
}

.flex_basis div {
 flex-basis: fit-content;
 border: 1px solid white;
 display: flex;
 align-items: center;
 padding: 5px;
}

</style>

<div class="container">
  <div class="grow">flex-grow: 2</div>
  <div>flex-grow: 1</div>
  <div>flex-grow: 1</div>
</div>

Resize the window and watch these boxes shrink and flex:

<div class="container">
  <div class="shrink" >flex-shrink: 4</div>
  <div>flex-grow: 1</div>
  <div class="grow">flex-grow: 2</div>
  <div>flex-grow: 1</div>
</div>

In this example, every child element has `flex-basis: fit-content`

<div class="flex_basis">
  <div>flex-basis: fit-content</div>
  <div>-----> now it</div>
  <div>fits the content of my box</div>
</div>

3. Use the flex-direction property to direct the layout of the content

Flex-direction sets the main axis of the flexbox container to be horizontal or vertical. All child elements will be arranged in the direction specified by this property.

Valid properties: `row, row-reverse, column, column-reverse`

<style>
  .column {
    width: 200px;
    height: 200px;
    background-color: coral;
    color: black;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .column div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
</style>

<div class="column">
  <div>flex-direction</div>
  <div>is set to</div>
  <div>column</div>
</div>
<br />

The default `flex-direction` of flexbox is `row`.

4. Use the flex-wrap property to affect the wrap of content layout within an element using flexible box layout

Elements will be distributed based on this rule.

Valid values: `nowrap, wrap, wrap-reverse`

<style>
  .wrapping {
    display: flex;
    width: 200px;
    height: 100px;
    background-color: #9A3046;
    margin: 10px auto;
    flex-wrap: wrap;
    padding: 5px;
  }
    .wrapping div {
    margin: 5px;
    border: 1px solid white;;
    flex-basis: 14%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="wrapping">
<div>w</div>
<div>r</div>
<div>a</div>
<div>p</div>
<div>p</div>
<div>i</div>
<div>n</div>
<div>g</div>
<div>✨</div>

</div>

5. Use align-self, justify-content, and align-items to change the way that children elements are laid out in a flexible box layout

When placed on the container flexbox, `justify-content` will distribute the children across the main axis and `align-items` across the cross-axis. `align-self` is used on children of a flexbox to align the child element.

- [`justify-content` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

- [`align-items` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

- [`align-self` documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

<style>
.new_container {
  padding: 5px;
  width: 80%;
  height: 50px;
  background-color: lightgreen;
  margin: 10px auto;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.new_container2 {
  padding: 5px;
  width: 80%;
  height: 50px;
  background-color: tomato;
  margin: 10px auto;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  text-align: center;
}
.new_container3 {
  padding: 5px;
  width: 80%;
  height: 50px;
  background-color: #d10080;
  margin: 10px auto;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: center;
}
.new_container4 {
  padding: 5px;
  width: 80%;
  height: 50px;
  background-color: #006eff;
  margin: 10px auto;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: center;
}
</style>

<div class="new_container">
 <div>Div 1</div>
  <div><--- justify-content: space-between ---->
      <br />align-items: center
  </div>
  <div>Div 3</div>
</div>

<div class="new_container2">
 <div>Div 1</div>
  <div><--- justify-content: space-around ---->
      <br />align-items: flex-end
  </div>
  <div>Div 3</div>
</div>

<div class="new_container3">
 <div>Div 1</div>
  <div><--- justify-content: space-evenly ---->
      <br />align-items: flex-start
  </div>
  <div>Div 3</div>
</div>
<div class="new_container4">
 <div style="align-self: flex-end">align-self: flex-end</div>
  <div>Div 2
  </div>
  <div style="align-self: center">align-self: center</div>
</div>

## Grid Layout Lesson

1. Explain how grid layout lays out elements

Grid is a two-dimensional layout system that lets position elements using columns and rows. Grid is great for customizing an entire page layout.

```css
.grid-container {
  display: grid; /* OR inline-grid */
}
```

2. Use the grid-template-columns, grid-template-rows, and grid-template properties to specify the layout of the grid using relative and absolute measures

`grid-template-columns` and `grid-template-rows` is used to create columns and rows with a certain length separated by spaces. The child elements of the grid container will be distributed based on the layout you set up.

```css
.grid-container {
  display: grid;
  grid-template-columns: 50px 100px 60px;
  /* there are 3 columns of varying sizes */
}
```

To span across mutliple columns/rows use `grid-column`: `<start>` / `<end>` and `grid-row`: `<start>` / `<end>` on the _child_ element of the grid.

`<end>` is exclusive. To span across all 3 columns in the grid below, you can use this rule:

```css
.grid-container div:nth-child(4) {
  grid-column: 1 / 4;
}
```

<style>
  .grid-container {
  display: grid;
  grid-template-columns: 40% 50% 10%;
  grid-template-rows: 50% 50%;
  height: 150px;
  background-color: aquamarine;
  color: black;
}
  .grid-container div {
  border: 1px solid black;
  padding: 5px;
}
.grid-container div:nth-child(4) {
   grid-column: 1 / 4;
}
</style>

Explore the HTML and CSS in raw markdown:

<div class="grid-container">
  <div>grid-template-rows: 100% 100%</div>
  <div>grid-template-columns: 40% 50% 10%</div>
  <div>sidebar</div>
  <div>grid-column: 1 / 4</div>
</div>
<br />

3. Use grid-template-areas to label areas of a grid and grid-area to assign an element to the area

`grid-template-areas` allows you to attach named properties with specific positions in your grid. Any `grid-area` you want to span across multiple rows or columns can be done with a repeat name in `grid-template-areas`. Any position you want to be empty needs to have a `.` in place of a name.

Each row is a string with columns separated by spaces. No commas between rows!

```css
.my-grid-ocean {
  /* see raw markdown for all code */
  grid-template-areas:
    "fish fish ."
    ". . whale"
    "dolphin . whale";
}
.🐠 {
  grid-area: fish;
}
.🐬 {
  grid-area: dolphin;
}
.🐳 {
  grid-area: whale;
}
```

```html
<div class="my-grid-ocean">
  <div class="🐠">🐠🐠🐠🐠🐠</div>
  <div class="🐳">🐳</div>
  <div class="🐬">🐬</div>
</div>
```

<style>
  .my-grid-ocean  {
  display: grid;
  margin: 10px auto;
  width: 80%;
  border: 1px solid #007fff;
  background-color: #007fff;
  font-size: 2em;
  justify-items: stretch;
  grid-template-rows: 50px 50px 50px;
  grid-template-areas:
    "fish fish ."
    ". . whale"
    "dolphin . whale";
}
 .my-grid-ocean div {
   text-align: center;
   border: 1px solid white;
   background-color: lightblue;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
.🐠 {
  grid-area: fish;
}
.🐬 {
  grid-area: dolphin;
}
.🐳 {
  grid-area: whale;
}
</style>
<div class="my-grid-ocean">
  <div class="🐠">🐠🐠🐠🐠🐠</div>
  <div class="🐳">🐳</div>
  <div class="🐬">🐬</div>
</div>

4. Use grid-column-gap, grid-row-gap, and grid-gap to set the "gutter" areas between elements in a grid layout

These properties set the space between the rows & columns.

```css
.forest {
  /* see raw markdown for all code */
  grid-row-gap: 5px;
  grid-column-gap: 5px;
}
```

<style>
.forest {
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(4,1fr);
  background-color: #355E3B;
  margin: 10px auto;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  font-size: 1.5em;
}
.forest > div {
  background-color: lightgreen;
}

</style>
<div class="forest">
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
</div>

5. Explain and use the "fr" unit of measure

fr represents a fraction of space left. The [repeat CSS function](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>) is used to repeat a certain number of fractions.

The above example uses:

```css
.forest {
  /* see raw markdown for all code */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
```

6. Use justify-items, align-items, justify-content and align-content to layout items in each grid area

`justify-items` aligns all the items _horizontally_:

```html
<div class="forest" style="justify-items: start"></div>
```

<div class="forest" style="justify-items: start">
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
</div>

`align-items` aligns all the items _vertically_:

```html
<div class="forest" style="align-items: end"></div>
```

<div class="forest" style="align-items: end">
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
<div>🌳</div>
</div>

`justify-content` aligns the grid elements along the row axis

`align-content` aligns the grid elements along the column axis (block axis)

```css
.douglas_firs {
  /* see raw markdown for all code */
  align-content: space-evenly;
  grid-template-columns: auto auto;
}
```

<style>
.douglas_firs {
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: auto auto;
  align-content: space-evenly;
  background-color: #355E3B;
  margin: 10px auto;
  font-size: 3em;
}
.douglas_firs div {
  background-color: lightgreen;
}
</style>
<div class="douglas_firs" style="justify-content: space-evenly">
<div>🌲</div>
<div>🌲</div>
<div>🌲</div>
<div>🌲</div>
</div>

7. Compare and Contrast Flex Box and Grid layouts and their use cases

A lot of the time, choosing between Flex Box or Grid comes down to personal preference. Keep in mind Grid is designed for 2-dimensional layouts, while flexbox is designed to be 1-dimensional. [Read more on MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)

## Media Queries Lesson

1. Identify the different types of media that a media query can target
2. Explain how the media features (and prefixed subfeatures) of "aspect ratio", "height", "orientation", and "width" are applied
3. Use media queries to change the styles of content in an HTML page to achieve a desired effect
