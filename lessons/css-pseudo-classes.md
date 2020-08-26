---
path: "/pseudo-classes"
title: "Pseudo Classes"
section: "CSS"
order: 5
description: Welcome to Foundations of Design Systems!
---

## Pseudo class selectors

### Link-related pseudo class selectors

`:link` – Perhaps the most confusion-causing link-related pseudo selector. Aren’t all `<a>` links? Well not if they don’t have an href attribute. This selects only those that do, thus is essentially the same as a[href].

`:visited`– Selects links that have already been visited by the current browser.

`:hover`– When the mouse cursor rolls over a link, that link is in it’s hover state and this will select it.

`:active` – Selects the link while it is being activated (being clicked on or otherwise activated). For example, for the “pressed” state of a button-style link or to make all links feel more button-like.

### Input & link related pseudo class selectors

`:focus` – Defining hover styles for links is great, but it doesn’t help out those who used keyboard navigation to get to the link. :focus will select links that are the current focus of the keyboard. This is not limited to links, but can be used (and really should be used) on inputs and textareas as well.

`:target` – The target pseudo class is used in conjunction with IDs, and match when the hash tag in the current URL matches that ID. So if you are at URL www.yoursite.com/#home then the selector `#home:target` will match. That can be extremely powerful. For example, you can create a tabbed area here the tabs link to hash tags and then the panels “activate” by matching :target selectors and (for example) using z-index to move to the top.

`:enabled` – Selects inputs that are in the default state of enabled and ready to be used.

`:disabled` – Selects inputs that have the disabled attribute. A lot of browsers will make the input a faded out gray, you can control that with this selector.

`:checked`– Selects checkboxes that are checked.

`:indeterminate` – Selects radio buttons that are in the purgatory state of neither chosen or unchosen (like when a page loads with radio button choices but no default is set).

`:required` – Selects inputs with the `required` attribute.  
`:optional`– Selects inputs that do not have the `required` attribute.

`:read-only` / `:read-write` – Selects elements based on a combination of `readonly` and `disabled` attributes.

### Position/Number-based pseudo class selectors

`:root` – Selects the element that is at the root of the document. Almost certainly will select the `<html>` element.

`:first-child`– Selects the first element within a parent.

`:last-child` – Selects the last element within a parent.

`:nth-child()` – Selects elements based on a simple provided algebraic expression (e.g. “2n” or “4n-1”). Has the ability to do things like select even/odd elements, “every third”, “the first five”, and things like that.

`:nth-of-type()` – Works like :nth-child, but used in places where the elements at the same level are of different types. Like if inside a div you had a number of paragraphs and a number of images. You wanted to select all the odd images. :nth-child won’t work there, you’d use `div img:nth-of-type(odd)`. Particularly useful when working with definition lists and their alternating `<dt>` and `<dd>` elements.

`:first-of-type`– Selects the first element of this type within any parent. So if you have two divs, each had within it a paragraph, image, paragraph, image. Then div img:first-of-type would select the first image inside the first div and the first image inside the second div.

`:last-of-type` – Same as above, only would select the last image inside the first div and the last image inside the second div.

`:nth-last-of-type()`– Works like :nth-of-type, but it counts up from the bottom instead of the top.

`:nth-last-child()` – Works like :nth-child, but it counts up from the bottom instead of the top.

`:only-of-type` – Selects only if the element is the only one of its kind within the current parent.

![enter image description here](https://i0.wp.com/css-tricks.com/wp-content/csstricks-uploads/relationalpseudos2.png?resize=570,541)
