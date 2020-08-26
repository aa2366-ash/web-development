---
path: "/css-selectors"
title: "CSS Selectors"
section: "CSS"
order: 2
description: Welcome to Foundations of Design Systems!
---

## Basic selectors

[Universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.  
**Syntax:** `*` `ns|*` `*|*`  
**Example:** `*` will match all the elements of the document.

[Type selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

Selects all elements that have the given node name.  
**Syntax:** `elementname`  
**Example:** `input` will match any [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. ") element.

[Class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

Selects all elements that have the given `class` attribute.  
**Syntax:** `.classname`  
**Example:** `.index` will match any element that has a class of "index".

[ID selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)

Selects an element based on the value of its `id` attribute. There should be only one element with a given ID in a document.  
**Syntax:** `#idname`  
**Example:** `#toc` will match the element that has the ID "toc".

[Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

Selects all elements that have the given attribute.  
**Syntax:** `[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`  
**Example:** `[autoplay]` will match all elements that have the `autoplay` attribute set (to any value).
