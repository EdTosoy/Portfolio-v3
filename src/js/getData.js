const db = firebase.firestore();

const form = document.querySelector("#form");
const thankYou = document.querySelector(".absolute-thankyou");
const submitData = document.querySelector("#submitData");
const date = new Date();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Employers").add({
    Name: form.name.value,
    Email: form.email.value,
    ProjectInfo: form.projectInfo.value,
    Data: date,
  });
  form.name.value = "";
  form.email.value = "";
  form.projectInfo.value = "";
});

submitData.addEventListener("click", () => {
  thankYou.style.display = "block";
  setTimeout(() => {
    thankYou.style.display = "none";
  }, 1500);
});
