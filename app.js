let attempt = 3;

const msgPara = document.getElementById("msg");
const cnfrmEmail = document.getElementById("cnfrmEmail");
const cnfrmPassword = document.getElementById("cnfrmPassword");
const loginBtn = document.getElementById("loginBtn");

function msgNotice() {
  msgPara.innerHTML = "Note : Plz use default Email & Password";
  cnfrmEmail.innerHTML = "Email : abidyousuf@gmail.com ";
  cnfrmPassword.innerHTML = "Password : 123456";
}
msgNotice();

loginBtn.addEventListener("click", () => {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  if (userName === "abidyousuf@gmail.com" && password === "123456") {
    alert("Login Successfully");
    window.location = "./quiz.html";
    return false;
  } else {
    attempt--;

    msgPara.innerHTML = `Incorrect credentials. You have ${attempt} attempt(s) left.`;

    if (attempt === 0) {
      document.getElementById("userName").disabled = true;
      document.getElementById("password").disabled = true;
      loginBtn.disabled = true;
      msgPara.innerHTML = "No attempts left. Please try again later.";
    }
  }
});
