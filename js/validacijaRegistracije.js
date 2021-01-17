function validacijaRegistracije() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ime = document.getElementById('fname').value;
    prezime = document.getElementById('lname').value;
    email = document.getElementById('remail').value;
    password = document.getElementById('rpassword').value;
    posalji = document.getElementById('posalji');
    if ((/\d/.test(ime)) || ((/\d/.test(prezime))) || !(re.test(String(email).toLowerCase())) || !(password.length > 6)) {
        alert('Greska');
    } else {
        console.log('Ime korisnika: ' + ime);
        console.log('Prezime korisnika: ' + prezime);
        console.log('Email korisnika: ' + email);
        console.log('Password korisnika: ' + password);
        alert('Uspesno ste se registrovali!')
        $('#myModal').hide();
        $(".modal-backdrop").remove();
    }
}
