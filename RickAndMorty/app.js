const URL = 'https://rickandmortyapi.com/api';
const character = document.querySelector('.characters');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

function createPagination() {
  let buttons = ``;
  for (let i = 1; i <= 42; i++) {
    buttons += `<li class="page-item">
                  <a class="page-link" href="#" data-id='${i}'>${i}</a>
                  </li>`;
  }
  document.querySelector('.pagination').innerHTML = buttons;
}

createPagination();

function fetchApi(url) {
  return fetch(url).then(response => response.json())

}

function getCharacters(page = 1) {
  fetchApi(`${URL}/character/?page=${page}`)
    .then(data => {
      const personajes = data.results;
      showCharacters(personajes);
    })
}
function getCharacter(id) {
  fetchApi(`${URL}/character/${id}`)
    .then(data => {
      const personaje = data;
      modalTitle.innerHTML = personaje.name;
      modalBody.innerHTML = '';
      const card = createCardChar(personaje);
      modalBody.appendChild(card);
    })
}
function showCharacters(personajes) {
  character.innerHTML = '';
  personajes.forEach(personaje => {
    character.appendChild(createCard(personaje));
  });
}

function createCard(personaje) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-5');
  card.style.width = '18rem';
  const cardContent = `
    <img src="${personaje.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${personaje.name}</h5>
    <p class="card-text">${personaje.status}</p>
    <p class="card-text">${personaje.grander}</p>
    <a href="#"
     class="btn btn-primary"
     data-bs-toggle="modal"
    data-bs-target="#exampleModal"
     data-id="${personaje.id}">Ver mas</a>
  </div>`;
  card.innerHTML = cardContent;
  return card;
}

function createCardChar(personaje) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '60%rem';
  card.style.margin = '0 auto';
  let badge = '';
  if (personaje.status === 'Alive') {
    badge = `<span class="badge bg-sucess">${personaje.status}</span>`;
  } else if (personaje.status === 'Dead') {
    badge = `<span class="badge bg-danger">${personaje.status}</span>`;
  } else {
    badge = `<span class="badge bg-warning">${personaje.status}</span>`;
  }
  const cardContent = `
    <img src="${personaje.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><spain>${badge}</spain></p>
    <p class="card-text">${personaje.grander}</p>
  </div>`;
  card.innerHTML = cardContent;
  return card;
}

function getButton(e) {
  e.preventDefault();
  if (e.target.classList.contains("page-link")) {
    const page = e.target.getAttribute('data-id');
    getCharacters(page);
  }
}

function getCard(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    const id = e.target.getAttribute('data-id');
    modalTitle.innerHTML = 'Cargando...';
    modalBody.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x"></i>';
    getCharacter(id);
  }
}

getCharacters();

document.querySelector('.pagination')
  .addEventListener('click', getButton);
character.addEventListener('click', getCard)
