document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const button = document.createElement("button");
  const h4 = document.createElement("h4");

  button.textContent = "Click me";
  h4.textContent = "Color code";

  root.appendChild(h4);
  root.appendChild(button);

  button.addEventListener("click", updateColor);

  function updateColor() {
    const colorCode = generateColor();
    document.body.style.backgroundColor = colorCode;
    h4.textContent = `Color code is: ${colorCode}`;
  }

  function generateColor() {
    const colorString = "1234567890abcdef";
    return (
      "#" +
      Array.from(
        { length: 6 },
        () => colorString[Math.floor(Math.random() * colorString.length)]
      ).join("")
    );
  }
});
