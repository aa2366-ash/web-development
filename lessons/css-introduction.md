---
path: "/css-introduction"
title: "Introduction to CSS"
section: "CSS"
order: 1
description: Welcome to Foundations of Design Systems!
---

# Welcome to CSS!

Web development is made up of **3 elemental files**. The **HTML, Javascript** and the **CSS** file. Html and javascript files are responsible for templating and dynamic elements respectively whereas css is responsible for one thing and that is **style.** How css play on that style part of the webpage ? it makes sure how a element looks on the webpage in terms of **color, font size,** it helps in the **positioning** of the elements in the webpage and does little bit of **animation**.

To know the power of css try this in your browser:

- Developers most favorite website is stack overflow. This how it looks with css

* Now try deleting the head section from the html elements by clicking the inspect element in developer tools.

# why CSS?

CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. HTML was NEVER intended to contain tags for formatting a web page!
HTML was created to **describe the content** of a web page
When tags like font, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.
To solve this problem, the World Wide Web Consortium (W3C) created CSS. CSS removed the style formatting from the HTML page! The style definitions are normally saved in external .css files. With an external stylesheet file, you can change the look of an entire website by changing just one file!

## CSS Syntax

![](https://www.w3schools.com/css/selector.gif)

- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by  
  semicolons.
- Each declaration includes a CSS property name and a  
  value, separated by a colon.
- Multiple CSS declarations are separated
  with semicolons, and declaration blocks are surrounded by curly  
  braces.

## Three Ways to Insert CSS

There are three ways of inserting a style sheet:

- External CSS
- Internal CSS
- Inline CSS

## External CSS

With external CSS, you’ll link your web pages to an external **.css** file, which can be created by any text editor in your device. This CSS type is a more efficient method, especially for styling a large website. By editing one **.css** file, you can change your entire site at once.

Follow these steps to use external CSS:

1.  Create a new **.css** file with the text editor, and add the style rules. For example:

.xleftcol {
float: left;
width: 33%;
background:#809900;
}
.xmiddlecol {
float: left;
width: 34%;
background:#eff2df;
}

2.  In the `<head>` section of your HTML sheet, add a reference to your external **.css** file right after `<title>` tag:

`<link rel="stylesheet" type="text/css" href="style.css" />`

Don’t forget to change **style.css** with the name of your **.css** file.

#### Advantages of External CSS:

- Since the CSS code is in a separate document, your HTML files will have a cleaner structure and are smaller in size.
- You can use the same **.css** file for multiple pages.

#### Disadvantages of External CSS:

- Your pages may not be rendered correctly until the external CSS is loaded.
- Uploading or linking to multiple CSS files can increase your site’s download time.

## Internal CSS

Internal or embedded CSS requires you to add style tag in the head section of your HTML document.

This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.

Here’s how you can use internal CSS:

1.  Open your HTML page and locate head opening tag.
2.  Put the following code right after the head tag

`<style type="text/css">`

3.  Add CSS rules on a new line. Here’s an example:

body {
background-color: blue;
}
h1 {
color: red;
padding: 60px;
}

4.  Type the closing tag:

`</style>`

5. Your HTML file will look like this:

   `<!DOCTYPE html>`

   `<html>`

   `<head>`

   `<style>`

   body {

   background-color: blue;

   }

   h1 {

   color: red;

   padding: 60px;

   }
   `</style>`

   `</head>`

   `<body>`

   `<h1>This is sample</h1>`

   `<p>This is our paragraph.</p>`

   `</body>`

   `</html>`

#### Advantages of Internal CSS:

- You can use class and ID selectors in this style sheet. Here’s an example:

.class {
property1 : value1;
property2 : value2;
property3 : value3;
}

#id {
property1 : value1;
property2 : value2;
property3 : value3;
}

- Since you’ll only add the code within the same HTML file, you don’t need to upload multiple files.

#### Disadvantages of Internal CSS:

- Adding the code to the HTML document can increase the page’s size and loading time.

## Inline CSS

Inline CSS is used to style a specific HTML element. For this CSS style, you’ll only need to add the **style** attribute to each HTML tag, without using selectors.

This CSS type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline CSS.

However, inline CSS in HTML can be useful in some situations. For example, in cases where you don’t have access to CSS files or need to apply styles for a single element only.

Let’s take a look at an example. Here, we add an inline CSS to the `<p>` and `<h1>` tag:

`<!DOCTYPE html>`

`<html>`

`<body style="background-color:black;">`

`<h1 style="color:white; padding:30px;">sample</h1>`

`<p style="color:white;">Something usefull here.</p>`

`</body>`

`</html>`

#### Advantages of Inline CSS:

- You can easily and quickly insert CSS rules to an HTML page. That’s why this method is useful for testing or previewing the changes, and performing quick-fixes to your website.
- You don’t need to create and upload a separate document as in the external style.

#### Disadvantages of Inline CSS:

- Adding CSS rules to every HTML element is time-consuming and makes your HTML structure messy.
- Styling multiple elements can affect your page’s size and download time.
