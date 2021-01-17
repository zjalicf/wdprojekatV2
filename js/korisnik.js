function preuzmiKorisnika() {
    var firebaseUrl = 'https://knjizara-5b8f6-default-rtdb.firebaseio.com';
    var xhttp = new XMLHttpRequest();
    let params = (new URL(document.location)).searchParams;
    let korisnikId = params.get('id');
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var korisnik = JSON.parse(xhttp.responseText);
        var bodyKorisnika = document.getElementById('slika-korisnika');
        var slikaKorisnika = document.createElement('img');
        slikaKorisnika.setAttribute('src', 'img/user.png');
        bodyKorisnika.appendChild(slikaKorisnika);

        var detaljiKorisnika = document.getElementById('detalji-korisnika');

        var username = document.createElement('span');
        username.innerText = 'Username: ' + korisnik['username'];
        detaljiKorisnika.appendChild(username);

        var email = document.createElement('span');
        email.innerText = 'Email: ' + korisnik['email'];
        detaljiKorisnika.appendChild(email);

        var imeKorisnika = document.createElement('span');
        imeKorisnika.innerText = 'Ime: ' + korisnik['ime'];
        detaljiKorisnika.appendChild(imeKorisnika);

        var prezimeKorisnika = document.createElement('span');
        prezimeKorisnika.innerText = 'Prezime: ' + korisnik['prezime'];
        detaljiKorisnika.appendChild(prezimeKorisnika);

        var adresa = document.createElement('span');
        adresa.innerText = 'Adresa: ' + korisnik['adresa'];
        detaljiKorisnika.appendChild(adresa);

        var datumRodjenja = document.createElement('span');
        datumRodjenja.innerText = 'Datum rodjenja: ' + korisnik['datumRodjenja'];
        detaljiKorisnika.appendChild(datumRodjenja);

        var telefon = document.createElement('span');
        telefon.innerText = 'Telefon: ' + korisnik['telefon'];
        detaljiKorisnika.appendChild(telefon);

        var linkKorisnikaEdit = document.createElement('a');
        linkKorisnikaEdit.setAttribute('href', 'korisnikedit.html?id=' + korisnikId);
        var izmeniButton = document.createElement('button');
        izmeniButton.innerText = 'izmeni';
        izmeniButton.style.color = 'white';
        izmeniButton.setAttribute('class', 'admin-edit-button') 
        linkKorisnikaEdit.appendChild(izmeniButton);
        detaljiKorisnika.appendChild(linkKorisnikaEdit);
        }
      }
    xhttp.open('GET', firebaseUrl + '/korisnici/' + korisnikId + '.json');
    xhttp.send();
}
preuzmiKorisnika()