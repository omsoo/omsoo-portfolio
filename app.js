
const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')
const slideMenu = document.querySelectorAll('.slideMenu')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.closeModal')
const openModalButton = document.querySelectorAll('.showProject')
const modalDisplay = document.querySelector('.Modal-InnerMain')
const form = document.querySelector('#contact-form')
const username = document.querySelector('#username')
const emails = document.querySelector('#email')
const textarea = document.querySelector('#tname')
const formInputs = form.querySelectorAll('input, textarea')
const small = document.getElementById('text')
const formSubmit = document.getElementById('contact-submit')
const width = window.innerWidth

const arrayData = [
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent `,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live ', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']

  },
  {
    name: 'Multi Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: './images/modal-1.png',
    desktopIMG: './images/modal-2.png',
    goLiveLinks: ['See Live', 'See Source'],

    modalButtons: ['html', 'Bootstrap', 'Ruby on rails']
  }
]

function show () {
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}

function close () {
  mainMenu.style.top = '-100%'
}

slideMenu.forEach((slideMenuCheck) => {
  slideMenuCheck.addEventListener('click', close)
})

function closeModal () {
  modal.classList.remove('showModal')
}
const openModal =
  ({ name, description, mobileImage, desktopIMG, goLiveLinks, modalButtons }) =>
    () => {
      modal.classList.add('showModal')
      let display = ''
      display += `


  <div class="modalHead">
  <h2 class="modalTitle">${name}</h2>
</div>
<div class="gridModal">
  <div class="gridOne">
    <div class="modal-Icons">
      <a class="modalTechnology" href=""> ${modalButtons[0]} </a>
      <a class="modalTechnology" href=""> ${modalButtons[1]} </a>
      <a class="modalTechnology" href=""> ${modalButtons[2]} </a>
    </div>
    <img class="modal-img" src= ${
  width > 1024 ? desktopIMG : mobileImage
} alt=${name} />
  </div>
  <div class="modalMain gridTwo">
    <p class="modalDescription">${description}</p>
    <div class="modal-btn-container">
      <a class="modal-live-link liveLink-one" href=""> ${
  goLiveLinks[0]
} <i class="modIcon fab fa-github hero-fab"></i></a>
      <a class="modal-live-link liveLink-two" href=""> ${
  goLiveLinks[1]
} <i class="modIcon fab fa-pinterest-p hero-fab"></i></a>
    </div>
  </div>

</div>`
      modalDisplay.innerHTML = display
    }

openMenu.addEventListener('click', show)

closeMenu.addEventListener('click', close)
closeModalButton.addEventListener('click', closeModal)
openModalButton.forEach((item, index) => {
  item.addEventListener('click', openModal(arrayData[index]))
})

formSubmit.addEventListener('click', function (e) {
  const email = document.getElementById('email').value
  if (email === '') {
    e.preventDefault()
    small.innerHTML = 'e-mail field cannot be empty'
  } else if (email !== email.toLowerCase()) {
    e.preventDefault()
    small.innerHTML =
      'email must be lowercase'
  } else {
    small.innerHTML = ''
  }
})

const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

const formData = getFromLocalStorage('formData')
if (formData !== null) {
  username.value = formData.name
  emails.value = formData.email
  textarea.value = formData.message
}

formInputs.forEach((fe) => {
  fe.addEventListener('input', () => {
    const objectForLocalStorage = {
      name: username.value,
      email: emails.value,
      message: textarea.value
    }
    saveToLocalStorage('formData', objectForLocalStorage)
  })
})
