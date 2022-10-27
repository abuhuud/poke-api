function fetchPoke() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  fetch(baseUrl).then(response => response.json()).then(response => {
    const data = response.results;
    let app = document.getElementById('app');
    let ul = document.createElement('ul');
    for (poke of data) {
      const li = document.createElement('li');
      const div1 = document.createElement('div');
      const a = document.createElement('a');
      const img = document.createElement('img');
      fetch(poke.url).then(response => response.json()).then(response => {
        console.log(response.sprites.front_default);
        img.src = response.sprites.front_default;
      });
      div1.innerHTML = poke.name;
      a.innerHTML = poke.url;
      a.href = poke.url;
      // li.innerHTML = poke.name;
      li.appendChild(img);
      li.appendChild(div1);
      li.appendChild(a);
      ul.appendChild(li);
    }
    app.appendChild(ul);
  });
}

function fetchImages(url) {
  return fetch(url).json();
}

fetchPoke();
