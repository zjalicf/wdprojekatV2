function validacijaLogin() {
    email = document.getElementById('lemail').value;
    password = document.getElementById('lpassword').value;
    ulaz = document.getElementById('ulaz');
    var firebaseUrl = 'https://knjizara-5b8f6-default-rtdb.firebaseio.com';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var detalji = JSON.parse(xhttp.responseText);
            for (id in detalji) { 
               if (email == detalji[id]['email'] && password == detalji[id]['password']) {
                   var rezultat = true;
                   break;
               } else {
                   var rezultat = false;
               }
            }
            if (rezultat) {
                ulaz.setAttribute('data-dismiss', 'modal');
                alert('Uspesno ste se ulogovali!');
            } else {
                alert('Pogresan email ili sifra, pokusajte ponovo!');
            }
        }
    }
    xhttp.open('GET', firebaseUrl + '/korisnici.json');
    xhttp.send();
}