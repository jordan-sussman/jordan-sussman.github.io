const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function () {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  await delay(500);
  createText("welcome");
  await delay(700);
  createText("starting server...");
  await delay(1500);
  createText("enter a command to start:");
  createCode("about", "learn about jordan");
  createCode("links", "explore and connect");
  createCode("where", "companies jordan has been a part of");
  createCode("skills", "primarily used languages and frameworks");
  createCode("help", "see all commands");
  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/jordan-sussman";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value.toLowerCase();

  const commands = {
    help: () => {
      trueValue(value);
      createCode("about", "learn about jordan");
      createCode("links", "explore and connect");
      createCode("where", "companies jordan has been a part of");
      createCode("skills", "primarily used languages and frameworks");
      createCode("image", "a photo of jordan");
      createCode("now", "whats exciting right now");
      createCode("clear", "clear out terminal");
      createCode("help", "see all commands");
    },

    about: () => {
      trueValue(value);
      createText(
        "Jordan Sussman is a full-stack software engineer based out of the Pacific Northwest. He's worked at forward-thinking companies facing challenges in health, live events, consumer technology, and marketing. His current contributions are focused on building a web-based platform where companies of all sizes orchestrate their marketing material at scale."
      );
    },

    links: () => {
      trueValue(value);
      createText(
        "<a href='https://www.github.com/jordan-sussman' target='_blank'><i class='fab fa-github white'></i> github.com/jordan-sussman</a>"
      );
      createText(
        "<a href='https://www.linkedin.com/in/jordansussman/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/jordansussman</a>"
      );
      createText(
        "<a href='https://open.spotify.com/user/uoyvf4gfcdo3bvf1tuvqgl4g7?si=8619d234a0794f02' target='_blank'><i class='fab fa-spotify white'></i> spotify.com/jordansussman</a>"
      );
      createText(
        "<a href='mailto:collabwithjordan@gmail.com' target='_blank'><i class='fa fa-envelope white'></i> collabwithjordan@gmail.com</a>"
      );
    },

    where: () => {
      trueValue(value);
      createCode(
        "Currently:",
        "<a href='https://www.workwithopal.com' target='_blank'>Opal <i class='fa fa-external-link-alt white'></i></a>"
      );
      createCode(
        "Previously:",
        "<a href='https://www.seatgeek.com' target='_blank'>SeatGeek <i class='fa fa-external-link-alt white'></i></a>  <a href='https://www.zocdoc.com' target='_blank'>Zocdoc <i class='fa fa-external-link-alt white'></i></a>  <a href='https://www.apple.com' target='_blank'>Apple <i class='fa fa-external-link-alt white'></i></a>"
      );
    },

    skills: () => {
      trueValue(value);
      createCode("Frontend:", "JavaScript  TypeScript  React  HTML  CSS");
      createCode("Backend:", "Ruby  Rails  Python  SQL");
      createCode("Other:", "Git  SSO Flask  Node  MaxMSP");
    },

    image: () => {
      trueValue(value);
      createText("<img src='./images/profile.jpg' width='200' />");
    },

    now: () => {
      trueValue(value);
      createText(
        "Currently enjoying the Radix UI library to build robust and modern frontend components. Check it out! <a href='https://www.radix-ui.com' target='_blank'>radix-ui.com <i class='fa fa-external-link-alt white'></i></a>"
      );
    },

    esc: () => {
      trueValue(value);
      createText("nice try ;)");
    },

    exit: () => {
      trueValue(value);
      createText("nice try ;)");
    },

    clear: () => {
      document
        .querySelectorAll("p")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("section")
        .forEach((e) => e.parentNode.removeChild(e));
    },

    default: () => {
      falseValue(value);
      createText(`command not found: ${value}`);
    },
  };

  (commands[value] || commands.default)();
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

// Prevent right click interaction for better immersion
document.addEventListener("contextmenu", (event) => event.preventDefault());

open_terminal();
