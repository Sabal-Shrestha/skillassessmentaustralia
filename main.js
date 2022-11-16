(function (d, w, c) {
  w.ChatraID = "zECfQ5CCWmujfp2rE";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");

// whatsapp chatra
const myTimeout = setTimeout(show, 20000000);
function show() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:visible;
  opacity: 1;
  transition:opacity 600ms, visibility 600ms;
`;
}
function closeWhatsapp() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:hidden;
  opacity: 0;
  transition:opacity 600ms, visibility 600ms;
`;
}
