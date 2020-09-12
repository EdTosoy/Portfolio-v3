import "./blizlyslider";
import "./furtechslider";
import "./telmaSlider";
import "./JinadaSlider";
import "./domicileSlider";
import "./fiitSlider";
import "./matchSlider";
import "./firebaseConfig";
import "./getData";
import "./menu";

import "../sass/main.scss";

function reloadIt() {
  if (window.location.href.substr(-2) !== "?r") {
    window.location = window.location.href + "?r";
  }
}

setTimeout(() => {
  reloadIt();
}, 100);
