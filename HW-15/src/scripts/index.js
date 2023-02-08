import catImg from "../assets/cat.jpg";

import {gerRangeArray, getRandomArray, getMedian, getMode} from "./helpers.js"

require('../styles/styles.scss');

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
const img = document.createElement("img");
img.setAttribute('src', catImg);

document.body.append(wrapper);
wrapper.append(img);

console.log(...gerRangeArray(24, 32));
console.log(getRandomArray(10, 5, 9));
console.log(getMedian(2,3,4,4,5));
console.log(getMode(2,3,4,4,5));
