 // PART 1: Seleccionar i Modificar Elements

const titol = document.querySelector("titol")
const paragraf = document.querySelector ("paragraf")

document.querySelector('h1').textContent = 'Hector el patrón'
document.querySelector('p').textContent = "Julian vs Hector, duelo de titanes"

document.querySelector('h1').style.color = '#ff0000';
document.querySelector('h1').style.fontSize = '100px';

 // PART 2: Afegir Esdeveniments d’Usuari

 document.getElementById("canviarText").addEventListener("click", function() {
    let titol = document.getElementById("titol"); 
    titol.textContent = "Quien ganará?";
    titol.style.color = "green"; 
});
 // PART 3:  Afegir i Eliminar Elements

const addButton = document.getElementById('afegirElement');
const removeButton = document.getElementById('eliminarElement');
const elementsContainer = document.getElementById('llista');

  addButton.addEventListener('click', function() {
    const newElement = document.createElement('li');
      newElement.textContent = 'Nou element agregat!';
      
      elementsContainer.appendChild(newElement);
  });

  removeButton.addEventListener('click', function() {
    const lastElement = elementsContainer.lastElementChild;
    
    if (lastElement) {
        elementsContainer.removeChild(lastElement);
    }
});

