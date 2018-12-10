import nav from "./nav.js";
import { top, bottom } from "./footer.js";
import makeButton from "./button.js";
import { makeColorStyle } from "./button-styles.js";

console.log(
    nav(),
    top,
    bottom,
    makeButton('My First Button!'),
    makeColorStyle("olive")
);