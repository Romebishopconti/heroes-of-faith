const heroes = [
  {
    name: "Георгий Победоносец",
    link: "heroes/georgiy.html"
  },
  {
    name: "Александр Невский",
    link: "heroes/alexander.html"
  }
];

const list = document.getElementById("heroes-list");

heroes.forEach(hero => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = hero.link;
  card.innerHTML = `<h2>${hero.name}</h2>`;
  list.appendChild(card);
});
