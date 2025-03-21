# JavaScript

<h1>Background Color Changer</h1>

<h2>Overview</h2>
<p>This JavaScript code creates a simple background color changer that assigns a random color to the webpage each time a button is clicked. Additionally, the generated color code is displayed and can be copied to the clipboard by clicking on it.</p>

<h2>How It Works</h2>

<h4>Generating a Random Color</h4>

- When the button is clicked, a random hexadecimal color is generated.
- The Math.random() function creates a random number between 0 and 16777215 (0xFFFFFF in hex).
- The number is converted to a hexadecimal string using .toString(16).
- The resulting string is prefixed with # to form a valid hex color code.

<h4>Copying the Color Code</h4>

- When the displayed color code (#color element) is clicked, it is copied to the clipboard using navigator.clipboard.writeText().
