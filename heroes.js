const heroes = [
  {
    name: "Георгий Победоносец",
    bio: "Христианский мученик и символ веры."
  },
  {
    name: "Александр Невский",
    bio: "Князь, защитник земли и веры."
  }
];

const list = document.getElementById("heroes-list");

heroes.forEach(hero => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>${hero.name}</h2>`;
  card.onclick = () => {
    window.location.href =
      `hero.html?name=${encodeURIComponent(hero.name)}&bio=${encodeURIComponent(hero.bio)}`;
  };
  list.appendChild(card);
});
