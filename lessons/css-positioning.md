---
path: "/css-positioning"
title: "CSS Positioning & Overflow"
section: "CSS"
order: 4
description: Welcome to Foundations of Design Systems!
---

# CSS POSITIONING

CSS helps you to position your HTML element. You can put any HTML element at whatever location you like. You can specify whether you want the element positioned relative to its natural position in the page or absolute based on its parent element.

Now, we will see all the CSS positioning related properties with examples

## Relative Positioning

Relative positioning changes the position of the HTML element relative to where it normally appears. So "left:20" adds 20 pixels to the element's LEFT position.

You can use two values _top_ and _left_ along with the _position_ property to move an HTML element anywhere in the HTML document.

- Move Left - Use a negative value for _left_.
- Move Right - Use a positive value for _left_.
- Move Up - Use a negative value for _top_.
- Move Down - Use a positive value for _top_.

**NOTE** − You can use _bottom_ or _right_ values as well in the same way as _top_ and _left_.

Here is the example

`<html>`
`<head>`
`</head>`
`<body>`
`<div style = "**position:relative; left:80px; top:2px;** background-color:yellow;"> This div has relative positioning. </div>`
`</body>`
`</html>`

## Absolute Positioning

An element with **position: absolute** is positioned at the specified coordinates relative to your screen top-left corner.

You can use two values _top_ and _left_ along with the _position_ property to move an HTML element anywhere in the HTML document.

- Move Left - Use a negative value for _left_.
- Move Right - Use a positive value for _left_.
- Move Up - Use a negative value for _top_.
- Move Down - Use a positive value for _top_.

**NOTE** − You can use _bottom_ or _right_ values as well in the same way as top and left.

Here is an example

`<html>`
`<head>`
`</head>`  
 `<body>`
`<div style = "**position:absolute; left:80px; top:20px;** background-color:yellow;"> This div has absolute positioning. </div>`  
 `</body>`  
 `</html>`

## Fixed Positioning

Fixed positioning allows you to fix the position of an element to a particular spot on the page, regardless of scrolling. Specified coordinates will be relative to the browser window.

You can use two values _top_ and _left_ along with the _position_ property to move an HTML element anywhere in the HTML document.

- Move Left - Use a negative value for _left_.
- Move Right - Use a positive value for _left_.
- Move Up - Use a negative value for _top_.
- Move Down - Use a positive value for _top_.

**NOTE** − You can use _bottom_ or _right_ values as well in the same way as _top_ and _left_.

Here is an example
`<html>`  
`<head>`  
`</head>`  
`<body>`
`<div style = "**position:fixed; left:80px; top:20px;** background-color:yellow;"> This div has fixed positioning. </div>`  
`</body>`  
`</html>`

# CSS OVERFLOW

The `overflow` property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The `overflow` property has the following values:

- `visible` - Default. The overflow is not clipped. The content renders outside the element's box

If you don’t set the overflow property at all, the default is visible. So in general, there is no reason to explicitly set this property to visible unless you are overriding it from being set elsewhere.

The important thing to remember here is that even though the content is visible outside of the box, that content does not affect the flow of the page. For example:

Generally, you shouldn’t be setting static heights on boxes with web text in them anyway, so it shouldn’t come up.

- `hidden` - The overflow is clipped, and the rest of the content will be invisible

The opposite of the default visible is **hidden**. This literally hides any content that extends beyond the box.
This is particularly useful in use with dynamic content and the possibility of an overflow causing serious layout problems. However, bear in mind that content that is hidden in this way is utterly inaccessible (short of viewing the source). So for example a user has their default font size set larger than you would expect, you may be pushing text outside of a box and hiding it completely from their view.

- `scroll` - The overflow is clipped, and a scrollbar is added to see the rest of the content
  Setting the overflow value of a box to scroll will hide the content from rendering outside the box, but will offer scrollbars to scroll the interior of the box to view the content.

Of note with this value is that you get BOTH horizontal and vertical scrollbars no matter what, even if the content requires only one or the other.
iOS’ momentum scrolling can be enabled for this value with `-webkit-overflow-scrolling`

- `auto` - Similar to `scroll`, but it adds scrollbars only when necessary

Auto overflow is very similar to the scroll value, only it solves the problem of getting scrollbars when you don’t need them. The scrollbars will only show up if there is content that actually breaks out of the element.

### overflow-x and overflow-y

It’s also possible to manipulate the overflow of content horizontally or vertically with the `overflow-x` and `overflow-y` properties.
