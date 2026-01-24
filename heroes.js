const heroes = [
  {
    name: "Георгий Победоносец",
    link: "heroes/georgiy.html"
  },
  {
    name: "Александр Невский",
    link: "heroes/alexander.html"
  },
  {
    name: "Жак де Молле",
    link: "heroes/jacques-de-molay.html"
  }
];

const list = document.getElementById("heroes-list");

heroes.forEach(hero => {
  const card = document.createElement("a");
  card.className = "hero-card";
  card.href = hero.link;

  card.innerHTML = `
    <div class="card-content">
      <h2>${hero.name}</h2>
    </div>
  `;

  list.appendChild(card);
});
