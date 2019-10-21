const slideArea = document.querySelector("section.flyers")
const images = slideArea.querySelectorAll("img")

slideArea.addEventListener("mouseover", function () {
    images.forEach(image => {
      const x = 25 * (Math.floor(Math.random() * 5)) - 50
      const y = 25 * (Math.floor(Math.random() * 5)) - 50
      
      image.style.transform = `translate(${x}px, ${y}px)`
    })
  })
  

  slideArea.addEventListener("mouseout", function () {
    images.forEach(image => {
      image.style.transform = ""
    })
  })
  
  