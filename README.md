# JavaScript

<p>This JavaScript repository conataines my JS projects</p>

<a href="https://travel-in-nature.netlify.app/"><img src="https://github.com/BRajendra10/JavaScript/blob/12a289b2afb7e14f9566c6b98b5e315a9edd7270/Travel%20in%20nature/assets/Travel%20in%20nature.png"></a>

Background Color Changer - JavaScript

Overview
This JavaScript code creates a simple background color changer that assigns a random color to the webpage each time a button is clicked. Additionally, the generated color code is displayed and can be copied to the clipboard by clicking on it.

How It Works

Generating a Random Color

- When the button is clicked, a random hexadecimal color is generated.
- The Math.random() function creates a random number between 0 and 16777215 (0xFFFFFF in hex).
- The number is converted to a hexadecimal string using .toString(16).
- The resulting string is prefixed with # to form a valid hex color code.

Copying the Color Code

When the displayed color code (#color element) is clicked, it is copied to the clipboard using navigator.clipboard.writeText().
