function preuzmiKnjige() {
    var firebaseUrl = 'https://knjizara-5b8f6-default-rtdb.firebaseio.com';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var knjige = JSON.parse(xhttp.responseText);
            var listaKnjigaDiv = document.getElementById('lista-knjiga');
            for (id in knjige) {
                var knjigaDiv = document.createElement('div');
                knjigaDiv.setAttribute('class', 'knjiga');

                listaKnjigaDiv.appendChild(knjigaDiv);
                var linkKnjige1 = document.createElement('a');
                linkKnjige1.setAttribute('href', 'knjiga.html?id=' + id);

                var slikaKnjige = document.createElement('img');
                slikaKnjige.setAttribute('src', knjige[id]['slika']);
                linkKnjige1.appendChild(slikaKnjige);
                knjigaDiv.appendChild(linkKnjige1);

                var linkKnjige = document.createElement('a');
                linkKnjige.setAttribute('href', 'knjiga.html?id=' + id);
                linkKnjige.innerText = knjige[id]['naziv'];
                knjigaDiv.appendChild(linkKnjige);
                var autorKnjige = document.createElement('span');
                autorKnjige.setAttribute('class', 'autor');
                autorKnjige.innerText = knjige[id]['autor'];
                knjigaDiv.appendChild(autorKnjige);
            }
        }
    }
    xhttp.open('GET', firebaseUrl + '/knjige.json');
    xhttp.send();
}
preuzmiKnjige()