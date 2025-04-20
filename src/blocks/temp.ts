import APIService from "../service";

document.addEventListener("DOMContentLoaded", async () => {
  const tempNode = document.getElementById("current-temp");

  if (tempNode) {
    const temp = await APIService.getTemp();

    if (temp) tempNode.innerText = temp?.toString() + " °C";
  }
});
