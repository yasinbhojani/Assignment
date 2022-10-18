const form = document.querySelector("#form");
const username = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const uname = username.value.toString();
  const pwd = password.value.toString();


  if (uname.trim() === "" || pwd.trim() === "") {
    if (uname.trim() === "") {
      username.classList.add("invalid");
      username.parentElement.children[0].classList.add("invalid-label");
    }

    if (pwd.trim() === "") {
      password.classList.add("invalid");
      password.parentElement.children[0].classList.add("invalid-label");
    }
    alert("username and password must not be empty")

  } else if (pwd.trim().length < 8) {
    alert("Password must be longer than 8 characters")
  } else {
    alert("Login Successful")
    username.value = ""
    password.value = ""
  }
});

username.addEventListener("input", (e) => {
  const val = e.target.value.trim();
  if (val !== "") {
    username.classList.remove("invalid");
    username.parentElement.children[0].classList.remove("invalid-label");
  } else {
    username.classList.add("invalid");
    username.parentElement.children[0].classList.add("invalid-label");
  }
});

password.addEventListener("input", (e) => {
  const val = e.target.value.trim();
  if (val !== "" && val.length >= 8) {
    password.classList.remove("invalid");
    password.parentElement.children[0].classList.remove("invalid-label");
  } else {
    password.classList.add("invalid");
    password.parentElement.children[0].classList.add("invalid-label");
  }
});
