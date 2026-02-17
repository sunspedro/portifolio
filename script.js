const links = document.querySelectorAll(".header-link");
const boxes = document.querySelectorAll(".box");

links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    const id = this.hash;

    boxes.forEach(box => box.classList.remove("ativo"));

    const boxAtiva = document.querySelector(id);
    if (boxAtiva) {
      boxAtiva.classList.add("ativo");
    }
  });
});
