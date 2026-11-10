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

