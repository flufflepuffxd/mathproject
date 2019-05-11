var links = new Array();
links[0] = "protogame1.html";
links[1] = "protogame2.html";
links[2] = "protogame3.html";
links[3] = "protogame4.html";

function openLink() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * links.length);
  // Directs the browser to the chosen target:
  parent.location = links[i];
  return false;
}