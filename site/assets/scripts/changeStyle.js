/*!
 * Nord Bootstrap v21.520.1 (https://nord-bootstrap.ehan.dev/)
 * Copyright (c) 2022 Ehan Ahamed and contributors
 * Licensed under the MIT License (https://github.com/EhanAhamed/nord-bootstrap/blob/main/LICENSE.txt)
 */
function changeStyle(style) {
  if (style === "Regular") {
    document.documentElement.removeAttribute("dir");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute("href", "./assets/styles/nord-bootstrap.min.css");

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.css");

    document.getElementById("regular").innerHTML = "<strong>Regular<strong>";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "RegularRTL") {
    document.documentElement.setAttribute("dir", "rtl");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute("href", "./assets/styles/nord-bootstrap.rtl.min.css");

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.rtl.css");

    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML =
      "<strong>Regular (Right-to-Left)<strong>";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "Inverted") {
    document.documentElement.removeAttribute("dir");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute("href", "./assets/styles/nord-bootstrap-inverted.min.css");

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.css");

    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "<strong>Inverted<strong>";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "InvertedRTL") {
    document.documentElement.setAttribute("dir", "rtl");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute(
        "href",
        "./assets/styles/nord-bootstrap-inverted.rtl.min.css"
      );

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.rtl.css");

    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "<strong>Inverted (Right-to-Left)<strong>";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "Light") {
    document.documentElement.removeAttribute("dir");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute("href", "./assets/styles/nord-bootstrap-light.min.css");

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.css");

    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "<strong>Light<strong>";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "LightRTL") {
    document.documentElement.setAttribute("dir", "rtl");

    document
      .getElementById("./assets/styles/nord-bootstrap.min.css")
      .setAttribute("href", "./assets/styles/nord-bootstrap-light.rtl.min.css");

    document
      .getElementById("./assets/demo/demo.css")
      .setAttribute("href", "./assets/demo/demo.rtl.css");

    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML =
      "<strong>Light (Right-to-Left)<strong>";
  }
  if (style === undefined) {
    console.error(
      "Style to switch to is undefined, you must pass a string of the style to switch to as a parameter in the function call."
    );
  }
}
