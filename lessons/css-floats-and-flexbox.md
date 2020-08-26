---
path: "/floats-and-flexbox"
title: "Floats and Flexbox"
section: "CSS"
order: 6
description: Welcome to Foundations of Design Systems!
---

Floats and Flexbox

The Flexible Box Module, usually referred to as flex-box, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.

The main axis is defined by `flex-direction`, which has four possible values:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

## The flex container

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area's container's `display`. The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex property to `flex` or `inline-flex`. As soon as we do this the direct children of that container become **flex items**. As with all properties in CSS, some initial values are defined, so when creating a flex container all of the contained flex items will behave in the following way.

- Items display in a row (the `flex-direction` property's default is `row`).
- The items start from the start edge of the main axis.
- The items do not stretch on the main dimension, but can shrink.
- The items will stretch to fill the size of the cross axis.
- The `flex-basis`The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing property is set to `auto`.
- The `flex-wrap`The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. property is set to `nowrap`.

The result of this is that your items will all line up in a row, using the size of the content as their size in the main axis. If there are more items than can fit in the container, they will not wrap but will instead overflow. If some items are taller than others, all items will stretch along the cross axis to fill its full size.

The flex container properties are:

- `flex-direction`

The `flex-direction` property defines in which direction the container wants to stack the flex items. The _column_ value stacks the flex items vertically (from top to bottom). The _column-reverse_ value stacks the flex items vertically (but from bottom to top). The _row_ value stacks the flex items horizontally (from left to right). The _row-reverse_ value stacks the flex items horizontally (but from right to left).

- `flex-wrap`

The `flex-wrap` property specifies whether the flex items should wrap or not. The _wrap_ value specifies that the flex items will wrap if necessary. The _nowrap_ value specifies that the flex items will not wrap (this is default). The _wrap-reverse_ value specifies that the flexible items will wrap if necessary, in reverse order.

- `flex-flow`

The `flex-flow` property is a shorthand property for setting both the `flex-direction` and `flex-wrap` properties.
Example:
.flex-container {  
display: flex;  
flex-flow: row wrap;  
}

- `justify-content`

The `justify-content` property is used to align the flex items. The _center_ value aligns the flex items at the center of the container. _flex-start_ value aligns the flex items at the beginning of the container (this is default). The _flex-end_ value aligns the flex items at the end of the container. The _space-around_ value displays the flex items with space before, between, and after the lines.
The _space-between_ value displays the flex items with space between the lines.

- `align-items`

The `align-items` property is used to align the flex items. In these examples we use a 200 pixels high container, to better demonstrate the `align-items` property. _center_ value aligns the flex items in the middle of the container. The _flex-start_ value aligns the flex items at the top of the container. The _flex-end_ value aligns the flex items at the bottom of the container. The _stretch_ value stretches the flex items to fill the container (this is default). The _baseline_ value aligns the flex items such as their baselines aligns.

- `align-content`

The `align-content` property is used to align the flex lines. In these examples we use a 600 pixels high container, with the flex-wrap property set to _wrap_, to better demonstrate the `align-content` property. _space-between_ value displays the flex lines with equal space between them. The _space-around_ value displays the flex lines with space before, between, and after them. The _stretch_ value stretches the flex lines to take up the remaining space (this is default). The _flex-start_ value displays the flex lines at the start of the container. The _flex-end_ value displays the flex lines at the end of the container.
