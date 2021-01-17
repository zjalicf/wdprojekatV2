function preuzmiKnjiguEdit() {
  var firebaseUrl = 'https://knjizara-5b8f6-default-rtdb.firebaseio.com';
  var xhttp = new XMLHttpRequest();
  let params = (new URL(document.location)).searchParams;
  let knjigaId = params.get('id');
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var knjiga = JSON.parse(xhttp.responseText);
      var bodyKnjige = document.getElementById('slika-knjige')
      var slikaKnjige = document.createElement('img');

      slikaKnjige.setAttribute('src', knjiga['slika']);
      slikaKnjige.setAttribute('class', 'slika-korpa');
      slikaKnjige.style.width = '370px';
      slikaKnjige.style.height = '510px';
      bodyKnjige.appendChild(slikaKnjige);

      var opisKnjige = document.getElementById('opis-knjige');

      var nazivKnjigeTop = document.createElement('div');
      var nazivKnjige = document.createElement('span');
      nazivKnjige.innerText = 'Naziv knjige: ';
      nazivKnjigeTop.appendChild(nazivKnjige);
      var nazivKnjigeEdit = document.createElement('span');
      nazivKnjigeEdit.setAttribute('id', 'izmena-naziva');
      nazivKnjigeEdit.innerText = knjiga['naziv'] + ' ';
      nazivKnjigeTop.appendChild(nazivKnjigeEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-naziva');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      nazivKnjigeTop.appendChild(editIkonica);
      opisKnjige.appendChild(nazivKnjigeTop);

      var autorKnjigeTop = document.createElement('div');
      var autorKnjige = document.createElement('span');
      autorKnjige.innerText = 'Autor knjige: ';
      autorKnjigeTop.appendChild(autorKnjige);
      var autorKnjigeEdit = document.createElement('span');
      autorKnjigeEdit.setAttribute('id', 'izmena-autora');
      autorKnjigeEdit.innerText = knjiga['autor'] + ' ';
      autorKnjigeTop.appendChild(autorKnjigeEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-autora');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      autorKnjigeTop.appendChild(editIkonica);
      opisKnjige.appendChild(autorKnjigeTop);

      var brojStranicaTop = document.createElement('div');
      var brojStranica = document.createElement('span');
      brojStranica.innerText = 'Broj stranica: ';
      brojStranicaTop.appendChild(brojStranica);
      var brojStranicaEdit = document.createElement('span');
      brojStranicaEdit.setAttribute('id', 'izmena-stranica');
      brojStranicaEdit.innerText = knjiga['brojStranica'] + ' ';
      brojStranicaTop.appendChild(brojStranicaEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-stranica');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      brojStranicaTop.appendChild(editIkonica);
      opisKnjige.appendChild(brojStranicaTop);

      var godinaIzdavanjaTop = document.createElement('div');
      var godinaIzdavanja = document.createElement('span');
      godinaIzdavanja.innerText = 'Godina izdavanja: ';
      godinaIzdavanjaTop.appendChild(godinaIzdavanja);
      var godinaIzdavanjaEdit = document.createElement('span');
      godinaIzdavanjaEdit.setAttribute('id', 'izmena-godine');
      godinaIzdavanjaEdit.innerText = knjiga['godinaIzdavanja'] + ' ';
      godinaIzdavanjaTop.appendChild(godinaIzdavanjaEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-godine');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      godinaIzdavanjaTop.appendChild(editIkonica);
      opisKnjige.appendChild(godinaIzdavanjaTop);

      var isbnTop = document.createElement('span');
      var isbn = document.createElement('span');
      isbn.innerText = 'ISBN: ';
      isbnTop.appendChild(isbn);
      var isbnEdit = document.createElement('span');
      isbnEdit.setAttribute('id', 'izmena-isbn');
      isbnEdit.innerText = knjiga['isbn'] + ' ';
      isbnTop.appendChild(isbnEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-isbn');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      isbnTop.appendChild(editIkonica);
      opisKnjige.appendChild(isbnTop);

      var izdavackaKucaTop = document.createElement('span');
      var izdavackaKuca = document.createElement('span');
      izdavackaKuca.innerText = 'Izdavacka kuca: ';
      izdavackaKucaTop.appendChild(izdavackaKuca);
      var izdavackaKucaEdit = document.createElement('span');
      izdavackaKucaEdit.setAttribute('id', 'izmena-kuce');
      izdavackaKucaEdit.innerText = knjiga['izdavackaKuca'] + ' ';
      izdavackaKucaTop.appendChild(izdavackaKucaEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-kuce');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      izdavackaKucaTop.appendChild(editIkonica);
      opisKnjige.appendChild(izdavackaKucaTop);

      var jezikTop = document.createElement('span');
      var jezik = document.createElement('span');
      jezik.innerText = 'Jezik: ';
      jezikTop.appendChild(jezik);
      var jezikEdit = document.createElement('span');
      jezikEdit.setAttribute('id', 'izmena-jezika');
      jezikEdit.innerText = knjiga['jezik'] + ' ';
      jezikTop.appendChild(jezikEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-jezika');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      jezikTop.appendChild(editIkonica);
      opisKnjige.appendChild(jezikTop);

      var pismoTop = document.createElement('span');
      var pismo = document.createElement('span');
      pismo.innerText = 'Pismo: ';
      pismoTop.appendChild(pismo);
      var pismoEdit = document.createElement('span');
      pismoEdit.setAttribute('id', 'izmena-pisma');
      pismoEdit.innerText = knjiga['pismo'] + ' ';
      pismoTop.appendChild(pismoEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-pisma');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      pismoTop.appendChild(editIkonica);
      opisKnjige.appendChild(pismoTop);

      var tipPovezaTop = document.createElement('span');
      var tipPoveza = document.createElement('span');
      tipPoveza.innerText = 'Tip poveza: ';
      tipPovezaTop.appendChild(tipPoveza);
      var tipPovezaEdit = document.createElement('span');
      tipPovezaEdit.setAttribute('id', 'izmena-poveza');
      tipPovezaEdit.innerText = knjiga['tipPoveza'] + ' ';
      tipPovezaTop.appendChild(tipPovezaEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-poveza');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      tipPovezaTop.appendChild(editIkonica);
      opisKnjige.appendChild(tipPovezaTop);

      var ocenaTop = document.createElement('span');
      var ocena = document.createElement('span');
      ocena.innerText = 'Ocena: ';
      ocenaTop.appendChild(ocena);
      var ocenaEdit = document.createElement('span');
      ocenaEdit.setAttribute('id', 'izmena-ocene');
      ocenaEdit.innerText = knjiga['ocena'] + ' ';
      ocenaTop.appendChild(ocenaEdit);
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-ocene');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      ocenaTop.appendChild(editIkonica);
      opisKnjige.appendChild(ocenaTop);

      var cenaTop = document.createElement('div');
      var cena = document.createElement('span');
      cena.innerText = 'Cena: ';
      cena.style.fontSize = '35px';
      cena.style.color = '#4a428d';
      cenaTop.appendChild(cena);
      var cenaEdit = document.createElement('span');
      cenaEdit.setAttribute('id', 'izmena-cene');
      cenaEdit.innerText = knjiga['cena'] + ' ';
      cenaEdit.style.fontSize = '35px';
      cenaEdit.style.color = '#4a428d';
      cenaTop.appendChild(cenaEdit);
      
      var din = document.createElement('span');
      din.innerText = 'din ';
      din.style.fontSize = '35px';
      din.style.color = '#4a428d';
      cenaTop.appendChild(din);
      cena.innerText = 'Cena: ';
      var editIkonica = document.createElement('i');
      editIkonica.setAttribute('id', 'izmena-cene');
      editIkonica.setAttribute('class', 'fa fa-edit');
      editIkonica.setAttribute('onclick', 'funkcijaIzmeneKnjige(event)');
      cenaTop.appendChild(editIkonica);
      opisKnjige.appendChild(cenaTop);
      }
    }
  xhttp.open('GET', firebaseUrl + '/knjige/' + knjigaId + '.json');
  xhttp.send();
}
preuzmiKnjiguEdit()

function funkcijaIzmeneKnjige(e) {
    var izmena = prompt("Unesite izmenu");
    if (izmena === '') {
      alert('Morate uneti izmenu!');
      funkcijaIzmeneKnjige(); 
    }
    else if (izmena === null) {
      console.log('cancel')
    }
    else {
      if (e.target.id === "izmena-naziva" && izmena.length < 50) {
        document.getElementById("izmena-naziva").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-isbn" && isNaN(izmena) == false && izmena.length == 13) {
        document.getElementById("izmena-isbn").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-ocene" && isNaN(izmena) == false && (izmena > 0 && izmena < 6)) {
        document.getElementById("izmena-ocene").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-kuce" && izmena.length < 50) {
        document.getElementById("izmena-kuce").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-autora" && izmena.length < 50) {
        document.getElementById("izmena-autora").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-godine" && (izmena > 1500 && izmena < 2022)) {
        document.getElementById("izmena-godine").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-stranica" && isNaN(izmena) == false && (izmena > 50 && izmena < 1500)) {
        document.getElementById("izmena-stranica").innerHTML = " " + izmena + " ";
      }
      else if (e.target.id === "izmena-poveza" && (izmena.toLowerCase() == 'tvrdi' || izmena.toLowerCase() == 'meki')) {
        izmenaPovezaFix = izmena.substring(0, 1).toUpperCase() + izmena.substring(1).toLowerCase();
        document.getElementById("izmena-poveza").innerHTML = " " + izmenaPovezaFix + " ";
      }
      else if (e.target.id === "izmena-pisma" && (izmena.toLowerCase() == 'ćirilica' || izmena.toLowerCase() == 'latinica')) {
        izmenaPismaFix = izmena.substring(0, 1).toUpperCase() + izmena.substring(1).toLowerCase();
        document.getElementById("izmena-pisma").innerHTML = " " + izmenaPismaFix + " ";
      }
      else if (e.target.id === "izmena-jezika" && (izmena.toLowerCase() == 'srpski' || izmena.toLowerCase() == 'engleski' || izmena.toLowerCase() == 'italijanski') || (izmena.toLowerCase() == 'ruski')) {
        izmenaJezikaFix = izmena.substring(0, 1).toUpperCase() + izmena.substring(1).toLowerCase();
        document.getElementById("izmena-jezika").innerHTML = " " + izmenaJezikaFix + " ";
      }
      else if (e.target.id === "izmena-cene" && isNaN(izmena) == false && (izmena > 100 && izmena < 10000)) {
        document.getElementById("izmena-cene").innerHTML = " " + izmena + " ";
      }
      else {
        alert('Greska');
      }
    }
}