function preuzmiKorisnikaEdit() {
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
        slikaKorisnika.setAttribute('class', 'slika-korisnika');
        bodyKorisnika.appendChild(slikaKorisnika);
  
        var detaljiKorisnika = document.getElementById('detalji-korisnika');
  
        var korisnickoImeTop = document.createElement('div');
        var korisnickoIme = document.createElement('span');
        korisnickoIme.innerText = 'Korisnicko ime: ';
        korisnickoImeTop.appendChild(korisnickoIme);
        var korisnickoImeEdit = document.createElement('span');
        korisnickoImeEdit.setAttribute('id', 'izmena-kor-ime');
        korisnickoImeEdit.innerText = korisnik['username'] + ' ';
        korisnickoImeTop.appendChild(korisnickoImeEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-kor-ime');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        korisnickoImeTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(korisnickoImeTop);

        var emailTop = document.createElement('div');
        var email = document.createElement('span');
        email.innerText = 'Email korisnika: ';
        emailTop.appendChild(email);
        var emailEdit = document.createElement('span');
        emailEdit.setAttribute('id', 'izmena-email');
        emailEdit.innerText = korisnik['email'] + ' ';
        emailTop.appendChild(emailEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-email');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        emailTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(emailTop);
  
        var imeKorisnikaTop = document.createElement('div');
        var imeKorisnika = document.createElement('span');
        imeKorisnika.innerText = 'Ime korisnika: ';
        imeKorisnikaTop.appendChild(imeKorisnika);
        var imeKorisnikaEdit = document.createElement('span');
        imeKorisnikaEdit.setAttribute('id', 'izmena-ime');
        imeKorisnikaEdit.innerText = korisnik['ime'] + ' ';
        imeKorisnikaTop.appendChild(imeKorisnikaEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-ime');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        imeKorisnikaTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(imeKorisnikaTop);

        var prezimeKorisnikaTop = document.createElement('div');
        var prezimeKorisnika = document.createElement('span');
        prezimeKorisnika.innerText = 'Prezime korisnika: ';
        prezimeKorisnikaTop.appendChild(prezimeKorisnika);
        var prezimeKorisnikaEdit = document.createElement('span');
        prezimeKorisnikaEdit.setAttribute('id', 'izmena-prezime');
        prezimeKorisnikaEdit.innerText = korisnik['prezime'] + ' ';
        prezimeKorisnikaTop.appendChild(prezimeKorisnikaEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-prezime');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        prezimeKorisnikaTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(prezimeKorisnikaTop);

        var brojTop = document.createElement('div');
        var broj = document.createElement('span');
        broj.innerText = 'Telefon korisnika: ';
        brojTop.appendChild(broj);
        var brojEdit = document.createElement('span');
        brojEdit.setAttribute('id', 'izmena-telefon');
        brojEdit.innerText = korisnik['telefon'] + ' ';
        brojTop.appendChild(brojEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-telefon');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        brojTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(brojTop);

        var adresaTop = document.createElement('div');
        var adresa = document.createElement('span');
        adresa.innerText = 'Adresa korisnika: ';
        adresaTop.appendChild(adresa);
        var adresaEdit = document.createElement('span');
        adresaEdit.setAttribute('id', 'izmena-adresa');
        adresaEdit.innerText = korisnik['adresa'] + ' ';
        adresaTop.appendChild(adresaEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-adresa');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        adresaTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(adresaTop);

        var datumRodjenjaTop = document.createElement('div');
        var datumRodjenja = document.createElement('span');
        datumRodjenja.innerText = 'Datum rodjenja: ';
        datumRodjenjaTop.appendChild(datumRodjenja);
        var datumRodjenjaEdit = document.createElement('span');
        datumRodjenjaEdit.setAttribute('id', 'izmena-datum');
        datumRodjenjaEdit.innerText = korisnik['datumRodjenja'] + ' ';
        datumRodjenjaTop.appendChild(datumRodjenjaEdit);
        var editIkonica = document.createElement('i');
        editIkonica.setAttribute('id', 'izmena-datum');
        editIkonica.setAttribute('class', 'fa fa-edit');
        editIkonica.setAttribute('onclick', 'funkcijaIzmeneKorisnika(event)');
        datumRodjenjaTop.appendChild(editIkonica);
        detaljiKorisnika.appendChild(datumRodjenjaTop);
        }
      }
    xhttp.open('GET', firebaseUrl + '/korisnici/' + korisnikId + '.json');
    xhttp.send();
  }
preuzmiKorisnikaEdit()

function funkcijaIzmeneKorisnika(e) {
    var izmena = prompt("Unesite izmenu");
    if (izmena === '') {
      alert('Morate uneti izmenu!');
      funkcijaIzmeneKorisnika(); 
    }
    else if (izmena === null) {
      console.log('cancel')
    }
    else {
      if (e.target.id === "izmena-kor-ime") {
        document.getElementById("izmena-kor-ime").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-email") {
        document.getElementById("izmena-email").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-ime") {
        document.getElementById("izmena-ime").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-prezime") {
        document.getElementById("izmena-prezime").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-datum") {
        document.getElementById("izmena-datum").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-adresa") {
        document.getElementById("izmena-adresa").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-telefon") {
        document.getElementById("izmena-telefon").innerHTML = " " + izmena + " ";
      }
    }
}