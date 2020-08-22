const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

const app = () => {
    navSlide();
}
app();
var userName = "Malini";

const checkLogin = () => {
  console.log("checking login..");
  const login = false;
  const userBtn = document.querySelector('.user');
  const leftBtn = document.querySelector('.left');
  const rightBtn = document.querySelector('.right');
  if(login){
    rightBtn.classList.toggle('hide');
    userBtn.innerHTML += userName;
  }else{
      leftBtn.innerHTML = "Sign In";
      rightBtn.innerHTML = "Register"
  }
}

const signUp = ()=>{
  console.log('sign up');
  location.href = "signup.html";
}

const signIn = ()=>{
  console.log('sign in');
  location.href = "signin.html";
}

const start = () => {
  console.log('start');
}