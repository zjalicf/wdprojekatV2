function preuzmiKorisnike() {
    var firebaseUrl = 'https://knjizara-5b8f6-default-rtdb.firebaseio.com';
    var xhttp = new XMLHttpRequest();
    let params = (new URL(document.location)).searchParams;
    let korisnikId = params.get('id');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var korisnici = JSON.parse(xhttp.responseText);
            var listaKorisnikaDiv = document.getElementById('lista-korisnika');
            for (id in korisnici) {
                var korisnikDiv = document.createElement('div');
                korisnikDiv.setAttribute('class', 'user');
                listaKorisnikaDiv.appendChild(korisnikDiv);

                var slikaKorisnika = document.createElement('img');
                slikaKorisnika.setAttribute('src', 'img/user.png');
                korisnikDiv.appendChild(slikaKorisnika);

                var ime = document.createElement('span')
                ime.innerText = korisnici[id]['ime']
                korisnikDiv.appendChild(ime)

                var prezime = document.createElement('span')
                prezime.innerText = korisnici[id]['prezime']
                korisnikDiv.appendChild(prezime)

                var datumRodjenja = document.createElement('span');
                datumRodjenja.innerText = korisnici[id]['datumRodjenja'];
                korisnikDiv.appendChild(datumRodjenja)

                var pogledajButton = document.createElement('button');
                pogledajButton.innerText = 'pogledaj';
                pogledajButton.setAttribute('class', 'admin-view-button');
                var linkKorisnika = document.createElement('a');
                linkKorisnika.setAttribute('href', 'korisnik.html?id=' + id);
                linkKorisnika.appendChild(pogledajButton);
                korisnikDiv.appendChild(linkKorisnika);

                var obrisiButton = document.createElement('button');
                obrisiButton.innerText = 'obrisi';
                obrisiButton.setAttribute('class', 'admin-delete-button');
                obrisiButton.setAttribute('onclick', 'obrisi(event)')
                korisnikDiv.appendChild(obrisiButton);
            }
        }
    }
    xhttp.open('GET', firebaseUrl + '/korisnici.json');
    xhttp.send();
}
preuzmiKorisnike()

function obrisi() {
    confirm('Da li ste sigurni?');
    var removeButton = document.getElementsByClassName('admin-delete-button');
    removeButton[0].parentElement.remove();
    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        button.addEventListener('click', remove)
    }

    function remove(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    }
}