# JavaScript

<h2>Background Color Changer</h2>

<h3>Overview</h3>
<p>This JavaScript code creates a simple background color changer that assigns a random color to the webpage each time a button is clicked. Additionally, the generated color code is displayed and can be copied to the clipboard by clicking on it.</p>

<h3>How It Works</h3>

<h5>1. Generating a Random Color</h5>

- When the button is clicked, a random hexadecimal color is generated.
- The Math.random() function creates a random number between 0 and 16777215 (0xFFFFFF in hex).
- The number is converted to a hexadecimal string using .toString(16).
- The resulting string is prefixed with # to form a valid hex color code.

<h5>2. Copying the Color Code</h5>

- When the displayed color code (#color element) is clicked, it is copied to the clipboard using navigator.clipboard.writeText().
