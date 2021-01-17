if (sessionStorage.getItem('knjiga')) {
    osveziKorpu();
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    var removeButton = document.getElementsByClassName('fa-times');
    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('q-korpa');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('kupi');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }
}

function osveziKorpu() {
    window.onload = function () {
        var knjiga = JSON.parse(sessionStorage.getItem('knjiga'));
        var korpa = document.getElementById('korpa');
        var korpaBody = document.createElement('div');
        korpaBody.setAttribute('class', 'korpa-body');
        var slikaKnjige = document.createElement('img');
        slikaKnjige.setAttribute('src', knjiga['img']);
        slikaKnjige.style.width ='100px';
        korpaBody.appendChild(slikaKnjige);
        korpa.appendChild(korpaBody);
        var imeKnjige = document.createElement('span');
        imeKnjige.innerText = knjiga['ime'];
        imeKnjige.setAttribute('class', 'ime-knjige-korpa');
        korpaBody.appendChild(imeKnjige);

        var kolicina = document.createElement('input');
        kolicina.setAttribute('class', 'q-korpa');
        kolicina.setAttribute('value', '1');
        kolicina.setAttribute('type', 'number');
        korpaBody.appendChild(kolicina);
        korpa.appendChild(korpaBody);

        var cena = document.createElement('span');
        cena.innerText = knjiga['price'];
        cena.setAttribute('class', 'cena-knjige-korpa');
        korpaBody.appendChild(cena);

        var remove = document.createElement('i');
        remove.setAttribute('class', 'fa fa-times');
        korpaBody.appendChild(remove);

        korpa.getElementsByClassName('fa-times')[0].addEventListener('click', removeCartItem);
        korpa.getElementsByClassName('q-korpa')[0].addEventListener('change', quantityChanged);
    };
}

function kupovina() {
    console.log('kupovina uspesna');
    var cartItems = document.getElementById('korpa');
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    if (confirm('Da li ste sigurni?')) {
        buttonClicked.parentElement.remove();
        sessionStorage.removeItem('knjiga');
        console.log('Knjiga obrisana iz korpe.');
      }
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value < 1) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var ime = shopItem.getElementsByClassName('naziv-korpa')[0].innerText.replace('Naziv knjige: ', '');
    var price = shopItem.getElementsByClassName('cena-korpa')[0].innerText.replace('Cena: ', '');
    var img = shopItem.getElementsByClassName('slika-korpa')[0].src;
    addItemToCart(ime, price, img)
    updateCartTotal()
}

function addItemToCart(ime, price, img) {
    var korpa = document.getElementById('korpa');
    var korpaBody = document.createElement('div');
    korpaBody.setAttribute('class', 'korpa-body');

    var cartItems = document.getElementById('korpa');
    var cartItemsNames = cartItems.getElementsByClassName('ime-knjige-korpa');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == ime) {
            alert('Već ste dodali ovu knjigu u korpu!');
            return;
        }
    }
    alert('Knjiga je uspesno dodata.');
    var slikaKnjige = document.createElement('img');
    slikaKnjige.setAttribute('src', img);
    slikaKnjige.style.width ='100px';
    korpaBody.appendChild(slikaKnjige);

    var imeKnjige = document.createElement('span');
    imeKnjige.innerText = ime;
    imeKnjige.setAttribute('class', 'ime-knjige-korpa');
    korpaBody.appendChild(imeKnjige);

    var kolicina = document.createElement('input');
    kolicina.setAttribute('class', 'q-korpa');
    kolicina.setAttribute('value', '1');
    kolicina.setAttribute('type', 'number');
    korpaBody.appendChild(kolicina);
    korpa.appendChild(korpaBody);

    var cena = document.createElement('span');
    cena.innerText = price;
    cena.setAttribute('class', 'cena-knjige-korpa');
    korpaBody.appendChild(cena);

    var remove = document.createElement('i');
    remove.setAttribute('class', 'fa fa-times');
    korpaBody.appendChild(remove);

    const knjiga = {
        img: img,
        ime: ime,
        price: price,
    }
    
    sessionStorage.setItem('knjiga', JSON.stringify(knjiga));
    
    korpa.getElementsByClassName('fa-times')[0].addEventListener('click', removeCartItem);
    korpa.getElementsByClassName('q-korpa')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementById('korpa');
    var cartRows = cartItemContainer.getElementsByClassName('korpa-body');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cena-knjige-korpa')[0];
        var quantityElement = cartRow.getElementsByClassName('q-korpa')[0];
        var price = parseFloat(priceElement.innerText.replace('din', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('total')[0].innerText = 'Ukupno : ' + Math.round(total * 100) / 100 + 'din';
}