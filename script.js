const preview = document.getElementById("preview");
const items = document.querySelectorAll(".project-list li");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const img = document.createElement("img");
    img.src = item.dataset.img;
    preview.innerHTML = "";
    preview.appendChild(img);
    preview.style.opacity = 1;
  });

  item.addEventListener("mousemove", e => {
    preview.style.left = e.pageX + 20 + "px";
    preview.style.top = e.pageY + 20 + "px";
  });

  item.addEventListener("mouseleave", () => {
    preview.style.opacity = 0;
  });
});
