---
path: "/css-box-model"
title: "CSS Box Model"
section: "CSS"
order: 3
description: Welcome to Foundations of Design Systems!
---

The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g., text, an image, etc.) and optional surrounding padding, border, and margin areas; the size of each area is specified by properties defined below. The following diagram shows how these areas relate and the terminology used to refer to pieces of margin, border, and padding

![box model image](https://www.csssolid.com/images/box-model/css-box-model.png)

The margin, border, and padding can be broken down into top, right, bottom, and left segments
The perimeter of each of the four areas (content, padding, border, and margin) is called an "edge", so each box has four edges:

**content edge** or **inner edge**

The content edge surrounds the rectangle given by the width and height of the box, which often depend on the element's rendered content. The four content edges define the box's content box.

**padding edge**

The padding edge surrounds the box padding. If the padding has 0 width, the padding edge is the same as the content edge. The four padding edges define the box's padding box.

**border edge**

The border edge surrounds the box's border. If the border has 0 width, the border edge is the same as the padding edge. The four border edges define the box's border box.

**margin edge** or **outer edge**

The margin edge surrounds the box margin. If the margin has 0 width, the margin edge is the same as the border edge. The four margin edges define the box's margin box.

Each edge may be broken down into a top, right, bottom, and left edge.

The dimensions of the content area of a box — the content width and content height — depend on several factors: whether the element generating the box has the width or height property set, whether the box contains text or other boxes, whether the box is a table, etc. Box widths and heights are discussed in the chapter on visual formatting model details.

The background style of the content, padding, and border areas of a box is specified by the background property of the generating element. Margin backgrounds are always transparent.

## CSS Margins

The CSS `margin` properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

## Margin - Individual Sides

CSS has properties for specifying the margin for each side of an element:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

All the margin properties can have the following values:

- auto - the browser calculates the margin
- _length_ - specifies a margin in px, pt, cm, etc.
- _%_ - specifies a margin in % of the width of the containing element
- inherit - specifies that the margin should be inherited from the parent element

**Tip:** Negative values are allowed.

### Example

Set different margins for all four sides of a <p> element:

p {  
margin-top: 100px;  
margin-bottom: 100px;  
margin-right: 150px;  
margin-left: 80px;  
}

## Margin - Shorthand Property

To shorten the code, it is possible to specify all the margin properties in one property.

The `margin` property is a shorthand property for the following individual margin properties:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

So, here is how it works:

If the `margin` property has four values:

- **margin: 25px 50px 75px 100px;**
  - top margin is 25px
  - right margin is 50px
  - bottom margin is 75px
  - left margin is 100px

### Example

Use the margin shorthand property with four values:

p {  
margin: 25px 50px 75px 100px;  
}

If the `margin` property has three values:

- **margin: 25px 50px 75px;**
  - top margin is 25px
  - right and left margins are 50px
  - bottom margin is 75px

### Example

Use the margin shorthand property with three values:

p {  
margin: 25px 50px 75px;  
}

If the `margin` property has two values:

- **margin: 25px 50px;** - top and bottom margins are 25px - right and left margins are 50px -
  Use the margin shorthand property with two values:

p {  
margin: 25px 50px;  
}

If the `margin` property has one value:

- **margin: 25px;**
  - all four margins are 25px

### Example

Use the margin shorthand property with one value:

p {  
margin: 25px;  
}

[Try it Yourself »](https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_shorthand_1val)

---

## The auto Value

You can set the margin property to `auto` to horizontally center the element within its container.

The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.

### Example

Use margin: auto:

div {  
width: 300px;  
margin: auto;  
border: 1px solid red;  
}

[Try it Yourself »](https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_auto)

---

## The inherit Value

This example lets the left margin of the <p class="ex1"> element be inherited from the parent element (<div>):

### Example

Use of the inherit value:

div {  
border: 1px solid red;  
margin-left: 100px;  
}

p.ex1 {  
margin-left: inherit;  
}

[Try it Yourself »](https://www.w3schools.com/css/tryit.asp?filename=trycss_margin-left_inherit)
