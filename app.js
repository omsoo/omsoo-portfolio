const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const slideMenu = document.querySelectorAll(".slideMenu");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".closeModal");
const openModalButton = document.querySelectorAll(".showProject");
let modalDisplay = document.querySelector(".Modal-InnerMain");
const width = window.innerWidth;

const arrayData = [
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent `,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live ", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
  {
    name: "Multi Post Stories",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    mobileImage: "./images/modal-1.png",
    desktopIMG: "./images/modal-2.png",
    goLiveLinks: ["See Live", "See Source"],
    modalButtons: ["html", "Bootstrap", "Ruby on rails"],
  },
];
