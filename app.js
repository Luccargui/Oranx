let USER;
let NARANJITOS;

const printNaranjitos = (naranjitos) => {
  const naranjitosSection = document.querySelector("#naranjitosSection");

  for (const naranjito of naranjitos) {
  //crear los elementos
const imgUser = document.createElement("img");
const userName = document.createElement("h3");
const atUser = document.createElement("p");
const divUser = document.createElement("div");
const textNaranjito =document.createElement("p");
const comments = document.createElement("img");
const numberOfComments= document.createElement("p");
const divComments= document.createElement("div");
const likes = document.createElement("img");
const numberOfLikes = document.createElement("p");
const divLikes = document.createElement("div");
const renaranjear = document.createElement("img");
const numberOfRenaranjeos = document.createElement("p");
const divRenaranjeo = document.createElement("div");
const divInfo = document.createElement("div");
const divNaranjito = document.createElement("div");
//rellenar y dar clases a las creaciones
imgUser.src = naranjito.user.imagen;
userName.textContent = naranjito.user.nombre;
atUser.textContent = naranjito.user.arroba;
divUser.className = "userInfo";
textNaranjito.textContent = naranjito.texto;
textNaranjito.className = "textoPrincipal";
comments.src= "./media/comments.png";
numberOfComments.textContent = naranjito.comentarios.length;
likes.src = "./media/empty_heart.png";
numberOfLikes.textContent = naranjito.likes;
renaranjear.src = "./media/renaranjear.png";
numberOfRenaranjeos.textContent = naranjito.retweets;
divInfo.className = "info";

likes.addEventListener("click", (e) => darLike(e.target, numberOfLikes, naranjito));

//añadir los elementos al html
divUser.appendChild(imgUser);
divUser.appendChild(userName);
divUser.appendChild(atUser);
divComments.appendChild(comments);
divComments.appendChild(numberOfComments);
divLikes.appendChild(likes);
divLikes.appendChild(numberOfLikes);
divRenaranjeo.appendChild(renaranjear);
divRenaranjeo.appendChild(numberOfRenaranjeos);
divInfo.appendChild(divComments);
divInfo.appendChild(divLikes);
divInfo.appendChild(divRenaranjeo);
divNaranjito.appendChild(divUser);
divNaranjito.appendChild(textNaranjito);
divNaranjito.appendChild(divInfo);
naranjitosSection.appendChild(divNaranjito);
  }
}


const darLike = (imagen, numberOfLikes, naranjito) => {
  if (!imagen.className.includes("clickado")) {
    naranjito.likes++;
    numberOfLikes.textContent = naranjito.likes;
    imagen.src = "./media/full_heart.png";
    imagen.classList.add("clickado");
  } else {
    naranjito.likes--;
    numberOfLikes.textContent = naranjito.likes;
    imagen.src = "./media/empty_heart.png";
    imagen.classList.remove("clickado");
  }
};

const printPublicar = () => {
const publicar = document.querySelector("#publicar");
const input = document.createElement("input");
const button = document.createElement("button");
const imgButton = document.createElement("img");

imgButton.src = "./media/naranja.png";
input.placeholder = "Escribe aquí tu Naranjito...";
button.addEventListener("click", () => postNaranjito(input));
window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
  postNaranjito(input);
  }
})

publicar.appendChild(input);
publicar.appendChild(button);
button.appendChild(imgButton);

}
const postNaranjito = (input) => {
  const naranjito = {
    texto: input.value,
    user: {
      imagen: USER.imagen,
      nombre: USER.nombre,
      arroba: USER.arroba,
    },
    likes: 0,
    retweets: 0,
    comentarios: []
  };
  input.value= "";
  NARANJITOS.push(naranjito);
  const newArray = [naranjito];
  printNaranjitos(newArray);
}
//printPublicar()

const pageLogin = ()=> {
  const modal = document.createElement("div");
  const img =document.createElement("img");
  const formLogin =document.createElement("form");
  const inputUserName = document.createElement("input");
  const inputPassword = document.createElement("input");
  const buttonLogin = document.createElement("button");

  modal.classList.add("login-page");
  img.src= "./media/naranja.png";
  img.alt= "logo-oranx";
  formLogin.classList.add("form-login");
  inputUserName.placeholder= "Tu usuario...";
  // inputUserName.autocomplete= "username";
  inputPassword.placeholder= "********";
  inputPassword.type= "password";
  // inputPassword.autocomplete= "current-password";
  buttonLogin.textContent="Login";

  formLogin.addEventListener("submit", (e) =>login(e, inputUserName.value, inputPassword.value, modal, formLogin));

  modal.appendChild(img);
  modal.appendChild(formLogin);
  formLogin.appendChild(inputUserName);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(buttonLogin);
  document.body.appendChild(modal);
}

const login =(e, userName, password, modal, formLogin)=> {
    e.preventDefault();
fetch ("https://users-api-mu.vercel.app/api/v1/users/login", {
  method:"POST",
  body: JSON.stringify({
    "nombre": userName,
    "password": password,
  }),
  headers:{
    "Content-Type": "application/json",
  }
})
.then((res) => {
  //información de la respuesta al fetch
  if (res.status === 400) {
    const error = document.createElement("p");
    error.textContent = "Usuario o contraseña incorrectos";
    formLogin.appendChild(error);
  }
  return res.json()
})
.then((res)=> {
  //la información ha sido procesada
 //el login ha sido satisfactorio
 if (res !== "Usuario no encontrado"){
 USER = { ...res};
 modal.remove();
 printPublicar();
 getUsers();
     }
  })
};

const init = () => {
  if(!USER) {
  pageLogin()
} else {
  postNaranjito();
  printNaranjitos(NARANJITOS);
}
};

const getUsers = () => {
  fetch("https://users-api-mu.vercel.app/api/v1/users")
  .then((res) => res.json())
  .then((users) => getNaranjitos(users));

}
const getNaranjitos = (users) => {
NARANJITOS = [
  {
       texto: "La inteligencia artificial cambiará la forma en que trabajamos en los próximos 5 años 🤖",
     user: users[0],
    likes: 231,
    retweets: 54,
    comentarios: []
  },
  {
    texto: "Aprender a programar debería enseñarse desde primaria. 💡",
    user:users[1],
    likes: 187,
    retweets: 40,
    comentarios: []
  },
  {
    texto: "No hay nada mejor que un café ☕ y VS Code en la madrugada.",
    user:users[2],
    likes: 92,
    retweets: 12,
    comentarios: [
      {
        texto: "Pero luego el bug te quita el sueño 😅",
        user: users[8],
        likes: 34,
        retweets: 2,
        comentarios: []
      }
    ]
  },
  {
    texto: "Estoy probando Rust y me está volando la cabeza. 🦀",
    user: users[3],
    likes: 115,
    retweets: 21,
    comentarios: []
  },
  {
    texto: "Si no entiendes algo, explícaselo a otra persona. Funciona el 90% de las veces. 🎯",
    user: users[4],
    likes: 301,
    retweets: 67,
    comentarios: []
  },
  {
    texto: "Tailwind me ahorra horas de CSS, no pienso volver atrás 💙",
    user: users[5],
    likes: 144,
    retweets: 18,
    comentarios: [
      {
        texto: "Yo aún soy team CSS puro ✌️",
        user: {
          nombre: "Andrea López",
          arroba: "@andreaCSS",
          imagen: "./media/femenino_trenza.png"
        },
        likes: 28,
        retweets: 1,
        comentarios: []
      }
    ]
  },
  {
    texto: "¿Soy el único que disfruta debuggear más que programar? 🐛",
    user: users[6],
    likes: 67,
    retweets: 5,
    comentarios: []
  },
  {
    texto: "Los side projects son la mejor manera de aprender cosas nuevas 🚀",
    user: users[7],
    likes: 210,
    retweets: 34,
    comentarios: []
  },
];
 printNaranjitos(NARANJITOS);
}


init();