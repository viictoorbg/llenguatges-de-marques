document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textElement");
    const addButton = document.getElementById("afegirElement");
    const list = document.getElementById("llistaElements");

    // afegir un nou <li> i validar que l'input no estigui buit
    addButton.addEventListener("click", function () {
        const text = input.value.trim();
        if (text !== "") {
            afegirElement(text);
            input.value = ""; 
        } else {
            alert("El text no pot estar buit!");
        }
    });

    function afegirElement(text) {
        const li = document.createElement("li");

        // crear un <span> editable
        const span = document.createElement("span");
        span.className = "editable";
        span.textContent = text;

        // editar per activar l'edició
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        // eliminar per esborrar l'element
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        //  Canviar de color en fer clic sobre el text
        span.addEventListener("click", function () {
            span.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });

        //  editar i guardar el text
        editButton.addEventListener("click", function () {
            if (!span.isContentEditable) {
                span.contentEditable = "true";  
                span.focus();
                editButton.textContent = "Guardar";
            } else {
                span.removeAttribute("contentEditable");  
                span.blur();  
                editButton.textContent = "Editar";
            }
        });
        

        // 6️⃣: eliminar l'element
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // Afegir elements al <li>
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Afegir el <li> a la llista
        list.appendChild(li);
    }
});
