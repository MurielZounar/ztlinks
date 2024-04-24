function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const tiktok = document.querySelector("#tiktok")
  const gmail = document.querySelector("#gmail")
  const coffee = document.querySelector("footer img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    tiktok.setAttribute("src", "./assets/tik-tok-black.png")
    gmail.setAttribute("src", "./assets/gmail-logo-black.png")
    coffee.setAttribute("src", "./assets/coffee-cup-black.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    tiktok.setAttribute("src", "./assets/tik-tok.png")
    gmail.setAttribute("src", "./assets/gmail-logo.png")
    coffee.setAttribute("src", "./assets/coffee-cup.png")
  }
}
