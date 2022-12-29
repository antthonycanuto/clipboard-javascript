const btn = document.querySelector('.btn');
const text = document.querySelector('.text')

btn.addEventListener('click', copyText);

function copyText(){
  navigator.clipboard.writeText(text.innerHTML);
  btn.classList.add('active');
  btn.innerText = "Texto copiado!";
  }

  setTimeout(() =>{
    btn.classList.remove('active');
    btn.innerText = "Copiar texto";
  }, 4000);

