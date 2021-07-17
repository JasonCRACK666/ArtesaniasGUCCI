const formProducts = document.getElementById('formProduct');
const form = document.getElementById('add');
const close = document.getElementById('close');
const addProduct = document.getElementById('addProduct');
const mensaje = document.getElementById('resultado');
const inTitle = document.getElementById('inTitle');
const inPrecio = document.getElementById('inPrecio');
const inDescription = document.getElementById('inDescription');
const table = document.getElementById('table');
const buyProduct = document.getElementById('buyProduct');
let id = 1;

// Esto es para que aparesca el formulario
form.addEventListener('click', () => {
  formProducts.style.opacity = 1;
  formProducts.style.display = "flex";
  formProducts.style.animationName = "desplazamiento";
  formProducts.style.animationDuration = ".4s";
});
// Esto es para que desaparesca el formulario
close.addEventListener('click', () => {
  formProducts.style.animationName = "close";
  formProducts.style.animationDuration = ".4s";
  setTimeout(() => {
    formProducts.style.display = "none";
  }, 350);
});

// Validación del formulario
addProduct.addEventListener('click', () => {
  let err = vldAddTable();
  if(err[0]) {
    mensaje.style.color = 'rgb(255, 0, 0)';
    mensaje.innerHTML = err[1];
  } else {
    mensaje.style.color = '#00FF0A';
    mensaje.innerHTML = 'El producto ha sido publicado';

    const comprarProducto = (id) => {
      document.getElementById(id).style.background = "#00FF0A";
    }

    const row = table.insertRow();
    row.setAttribute('id', id++)
    row.innerHTML = `
      <td class="title">${inTitle.value}</td>
      <td id="precio" class="precio">$${inPrecio.value}</td>
      <td class="content">${inDescription.value}</td>
      <td></td>
    `;
    const comprarBtnBuy = document.createElement('button');
    comprarBtnBuy.setAttribute('id', 'buyProduct');
    comprarBtnBuy.classList.add('buy');
    comprarBtnBuy.innerHTML = `<i class="fas fa-cart-arrow-down"></i>`;
    row.children[3].appendChild(comprarBtnBuy);
    comprarBtnBuy.onclick = () => {
      comprarProducto(row.getAttribute('id'));
      comprarBtnBuy.classList.add('active');
      comprarBtnBuy.style.background = "none";
      comprarBtnBuy.style.border = "none";
      comprarBtnBuy.style.fontSize = "35px";
      comprarBtnBuy.style.padding = "0px";
      comprarBtnBuy.style.margin = "11px 16px 11px 31px";
      comprarBtnBuy.style.color = "#0094FF";
      comprarBtnBuy.innerHTML = `<i class="fas fa-check"></i>`;
    }
    inTitle.value = "";
    inPrecio.value = "";
    inDescription.value = "";
  }
});
// condiciones del formulario
const vldAddTable = () => {
  let err = [];

  if (inTitle.value === "") {
    err[0] = true;
    err[1] = 'Falta que pongas el titulo';
    return err;
  } else if (inTitle.value.length < 3) {
    err[0] = true;
    err[1] = 'El titulo no puede tener menos de 5 caracteres';
    return err;
  } else if (inTitle.value.length > 57) {
    err[0] = true;
    err[1] = 'El titulo no puede tener más de 55 caracteres';
    return err;
  } else if (inPrecio.value === "") {
    err[0] = true;
    err[1] = 'Falta que pongas el precio';
    return err;
  } else if (inPrecio.value.length > 3) {
    err[0] = true;
    err[1] = 'El precio no puede tener más de 3 caracteres';
    return err;
  } else if (inDescription.value === "") {
    err[0] = true;
    err[1] = 'Falta que pongas la descripción';
    return err;
  } else if (inDescription.value.length < 35) {
    err[0] = true;
    err[1] = 'La descripción no puede tener menos de 35 caracteres (si no sabes que poner solo piensa en que representa esa artesania para tu cultura o tu identidad cultural)';
    return err;
  } else if (inDescription.value.length > 280) {
    err[0] = true;
    err[1] = 'El precio no puede tener más de 280 caracteres';
    return err;
  }
  err[0] = false;
  return err;
}

// Comprar elementos ya establecidos
const e1 = document.getElementById('100');
const e2 = document.getElementById('200');
const e3 = document.getElementById('300');
const e4 = document.getElementById('400');
const buy100 = document.getElementById('buy100');
const buy200 = document.getElementById('buy200');
const buy300 = document.getElementById('buy300');
const buy400 = document.getElementById('buy400');

buy100.addEventListener('click', () => {
  e1.style.background = "#00FF0A";
  buy100.classList.add('active');
  buy100.style.background = "none";
  buy100.style.border = "none";
  buy100.style.fontSize = "35px";
  buy100.style.padding = "0px";
  buy100.style.margin = "11px 16px 11px 31px";
  buy100.style.color = "#0094FF";
  buy100.innerHTML = `<i class="fas fa-check"></i>`;
});

buy200.addEventListener('click', () => {
  e2.style.background = "#00FF0A";
  buy200.classList.add('active');
  buy200.style.background = "none";
  buy200.style.border = "none";
  buy200.style.fontSize = "35px";
  buy200.style.padding = "0px";
  buy200.style.margin = "11px 16px 11px 31px";
  buy200.style.color = "#0094FF";
  buy200.innerHTML = `<i class="fas fa-check"></i>`;
});

buy300.addEventListener('click', () => {
  e3.style.background = "#00FF0A";
  buy300.classList.add('active');
  buy300.style.background = "none";
  buy300.style.border = "none";
  buy300.style.fontSize = "35px";
  buy300.style.padding = "0px";
  buy300.style.margin = "11px 16px 11px 31px";
  buy300.style.color = "#0094FF";
  buy300.innerHTML = `<i class="fas fa-check"></i>`;
});

buy400.addEventListener('click', () => {
  e4.style.background = "#00FF0A";
  buy400.classList.add('active');
  buy400.style.background = "none";
  buy400.style.border = "none";
  buy400.style.fontSize = "35px";
  buy400.style.padding = "0px";
  buy400.style.margin = "11px 16px 11px 31px";
  buy400.style.color = "#0094FF";
  buy400.innerHTML = `<i class="fas fa-check"></i>`;
});