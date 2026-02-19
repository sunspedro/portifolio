const links = document.querySelectorAll(".header-link");
const boxes = document.querySelectorAll(".box");
const introTitle = document.getElementById("intro-title");
const introSubtitle = document.getElementById("intro-subtitle");
const body = document.body;

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    const id = this.hash; 
    if (!id) return;

    boxes.forEach(box => box.classList.remove("ativo"));

    const boxAtiva = document.querySelector(id);
    if (!boxAtiva) return;

    boxAtiva.classList.add("ativo");

    for (const box of boxes) {
      for (const cl of box.classList) {
        if (cl !== "box" && cl !== "ativo") {
          body.classList.remove(cl);
        }
      }
    }
    const nomeSecao = id.replace("#", "");
    body.classList.add(nomeSecao);

  });
});

setTimeout(() => {
  introTitle.classList.add("show");
}, 1500);

setTimeout(() => {
  if (introSubtitle) introSubtitle.classList.add("show");
}, 2000);
