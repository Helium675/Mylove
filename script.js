const showPage = (id) => {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
};

// Start button (also plays music)
document.getElementById("startBtn").onclick = () => {
  document.getElementById("bgMusic").play();
  showPage("page2");
};

// Yes button → Letter
document.getElementById("yesBtn").onclick = () => {
  showPage("page3");
};

// No button
document.getElementById("noBtn").onclick = () => {
  alert("Aww 😿 Press Yes to see the surprise!");
};
