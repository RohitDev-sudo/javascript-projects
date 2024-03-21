export default function sendValue(event) {
  const displayString = document.getElementById("display");
  displayString.value += event;
}
