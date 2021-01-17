function preuzmiKnjigu() {
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

        var nazivKnjige = document.createElement('span');
        nazivKnjige.setAttribute('class', 'naziv-korpa');
        nazivKnjige.innerText = 'Naziv knjige: ' + knjiga['naziv'];
        opisKnjige.appendChild(nazivKnjige);

        var autorKnjige = document.createElement('span');
        autorKnjige.innerText = 'Autor knjige: ' + knjiga['autor'];
        opisKnjige.appendChild(autorKnjige);

        var brojStranica = document.createElement('span');
        brojStranica.innerText = 'Broj stranica: ' + knjiga['brojStranica'];
        opisKnjige.appendChild(brojStranica);

        var godinaIzdavanja = document.createElement('span');
        godinaIzdavanja.innerText = 'Godina izdavanja: ' + knjiga['godinaIzdavanja'];
        opisKnjige.appendChild(godinaIzdavanja);

        var isbn = document.createElement('span');
        isbn.innerText = 'ISBN : ' + knjiga['isbn'];
        opisKnjige.appendChild(isbn);

        var izdavackaKuca = document.createElement('span');
        izdavackaKuca.innerText = 'Izdavacka kuca: ' + knjiga['izdavackaKuca'];
        opisKnjige.appendChild(izdavackaKuca);

        var jezik = document.createElement('span');
        jezik.innerText = 'Jezik: ' + knjiga['jezik'];
        opisKnjige.appendChild(jezik);

        var pismo = document.createElement('span');
        pismo.innerText = 'Pismo: ' + knjiga['pismo'];
        opisKnjige.appendChild(pismo);

        var tipPoveza = document.createElement('span');
        tipPoveza.innerText = 'Tip poveza: ' + knjiga['tipPoveza'];
        opisKnjige.appendChild(tipPoveza);

        var ocena = document.createElement('span');
        ocena.innerText = 'Ocena: ' + knjiga['ocena'];
        opisKnjige.appendChild(ocena);

        var starsDiv = document.createElement('div');
        starsDiv.setAttribute('class', 'stars');
        var form = document.createElement('form');

        var star1Input = document.createElement('input');
        star1Input.setAttribute('class', 'star star-5');
        star1Input.setAttribute('id', 'star-5-2');
        star1Input.setAttribute('type', 'radio');
        star1Input.setAttribute('name', 'star');
        form.appendChild(star1Input);
        var star1Label = document.createElement('label');
        star1Label.setAttribute('class', 'star star-5');
        star1Label.setAttribute('for', 'star-5-2');
        star1Label.setAttribute('onclick', 'rating(event)');
        form.appendChild(star1Label);

        var star2Input = document.createElement('input');
        star2Input.setAttribute('class', 'star star-4');
        star2Input.setAttribute('id', 'star-4-2');
        star2Input.setAttribute('type', 'radio');
        star2Input.setAttribute('name', 'star');
        form.appendChild(star2Input);
        var star2Label = document.createElement('label');
        star2Label.setAttribute('class', 'star star-4');
        star2Label.setAttribute('for', 'star-4-2');
        star2Label.setAttribute('onclick', 'rating(event)');
        form.appendChild(star2Label);

        var star3Input = document.createElement('input');
        star3Input.setAttribute('class', 'star star-3');
        star3Input.setAttribute('id', 'star-3-2');
        star3Input.setAttribute('type', 'radio');
        star3Input.setAttribute('name', 'star');
        form.appendChild(star3Input);
        var star3Label = document.createElement('label');
        star3Label.setAttribute('class', 'star star-3');
        star3Label.setAttribute('for', 'star-3-2');
        star3Label.setAttribute('onclick', 'rating(event)');
        form.appendChild(star3Label);

        var star4Input = document.createElement('input');
        star4Input.setAttribute('class', 'star star-2');
        star4Input.setAttribute('id', 'star-2-2');
        star4Input.setAttribute('type', 'radio');
        star4Input.setAttribute('name', 'star');
        form.appendChild(star4Input);
        var star4Label = document.createElement('label');
        star4Label.setAttribute('class', 'star star-2');
        star4Label.setAttribute('for', 'star-2-2');
        star4Label.setAttribute('onclick', 'rating(event)');
        form.appendChild(star4Label);

        var star5Input = document.createElement('input');
        star5Input.setAttribute('class', 'star star-1');
        star5Input.setAttribute('id', 'star-1-2');
        star5Input.setAttribute('type', 'radio');
        star5Input.setAttribute('name', 'star');
        form.appendChild(star5Input);
        var star5Label = document.createElement('label');
        star5Label.setAttribute('class', 'star star-1');
        star5Label.setAttribute('for', 'star-1-2');
        star5Label.setAttribute('onclick', 'rating(event)');
        form.appendChild(star5Label);
        
        starsDiv.appendChild(form);
        opisKnjige.appendChild(starsDiv);

        var cena = document.createElement('span');
        cena.setAttribute('class', 'cena-korpa');
        cena.innerText = 'Cena: ' + knjiga['cena'] + 'din';
        cena.style.fontSize = '35px';
        cena.style.color = '#4a428d';
        opisKnjige.appendChild(cena);
        
        var linkKnjigeEdit = document.createElement('a');
        linkKnjigeEdit.setAttribute('href', 'knjigaedit.html?id=' + knjigaId);
        var izmeniButton = document.createElement('button');
        izmeniButton.innerText = 'izmeni';
        izmeniButton.style.color = 'white';
        izmeniButton.setAttribute('class', 'edit-button') 
        linkKnjigeEdit.appendChild(izmeniButton);
        opisKnjige.appendChild(linkKnjigeEdit);

        var kratakOpis = document.getElementById('p-opis');
        kratakOpis.innerText = 'Opis: ' + knjiga['opis'];
        }
      }
    xhttp.open('GET', firebaseUrl + '/knjige/' + knjigaId + '.json');
    xhttp.send();
}
preuzmiKnjigu()