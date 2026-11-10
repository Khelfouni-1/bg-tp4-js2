
let total_points = 0 ;

function doInsertRowTable(num, nom, prenom, point){
        // Recuperer le tbody du tableau
        const tbody = document.getElementById("Table");

        // cree la ligne <tr>
        const tr = document.createElement("tr");

        // Cree la cellule Num <td>
        const td_num = document.createElement("td");
        td_num.setAttribute("class", "col_number");
        td_num.innerText = num;

        // Cree la cellule Name <td>
        const td_name = document.createElement("td");
        td_name.setAttribute("class" , "col_text");
        td_name.innerText = nom;

        // Cree la cellule Prenom <td>
        const td_prenom = document.createElement("td");
        td_prenom.setAttribute("class" , "col_text");
        td_prenom.innerText = prenom;

        // Cree la cellule Point <td>
        const td_point = document.createElement("td");
        td_point.setAttribute("class" , "col_number");
        td_point.innerText = point;

        // Cree la cellule Select <td>
        const td_select = document.createElement("td");
        td_select.setAttribute("class" , "col_checkbox");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type" , "checkbox");

        td_select.appendChild(checkbox);

        tr.appendChild(td_num);
        tr.appendChild(td_name);
        tr.appendChild(td_prenom);
        tr.appendChild(td_point);
        tr.appendChild(td_select);

        tbody.appendChild(tr);
}

let persons = [
    {nom: "Ali", prenom: "Ahmed", points: 10},
    {nom: "Sara", prenom: "Amel", points: 15},
    {nom: "Karim", prenom: "Mohamed", points: 20}
];

let Num = 0;

function init(){
        for (let i = 0 ; i < persons.length ; i++ ){
            doInsert(persons[i].nom , persons[i].prenom, persons[i].points);
        }
}

function doInsert(nom, prenom, points){
        total_points += parseInt(points);
        Num++ ;
        doInsertRowTable(Num, nom, prenom, points);
        updateSummary();
}

function updateSummary(){
        document.getElementById("p1").innerText = "Lines Number = "+ Num +" linge(s)";
        document.getElementById("p3").innerText = "Total Point(s) = "+ total_points +" point(s)";
}


init();

function ConsoleTableau(){
    console.log(persons);
}

function doNewData(){
        const nom = document.getElementById("form_nom");
        const prenom = document.getElementById("form_prenom");
        const points = document.getElementById("form_points");

        let nom_value = nom.value;
        let prenom_value = prenom.value;
        let points_value = points.value;

        if ( nom_value && prenom_value && points_value ){
            persons.push({
                nom: nom,
                prenom: prenom,
                point: points
            });
            doInsert(nom_value, prenom_value, points_value);
        }else {
            alert("Formulaire Incomplet");
        }

        nom.value = "";
        prenom.value = "";
        points.value = "";
}

function deleteRow(){
        if ( Num === 0 ){
            alert("There is no rows to delete");
            return ;
        }

        const tableau = document.querySelector("#Table");

        const checked = tableau.querySelectorAll(
            ".col_checkbox input:checked"
        );

        if ( checked.length === 0 ){
            alert("No checkbox selected");
            return ;
        }

        if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
            return;
        }

        const lignes = document.querySelectorAll("tr:not(.FirstRow)");

        for ( let i = 0 ; i < lignes.length ; i++ ){
            const check = lignes[i].querySelector("input[type='checkbox']");

            if ( check.checked ){
                let point = Number(lignes[i].cells[3].innerText);

                total_points -= point ;

                Num-- ;

                lignes[i].remove() ;
            }
        }

        alert("Suppression effectuée avec succès !");
        updateSummary();
}



