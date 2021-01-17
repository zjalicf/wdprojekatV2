function rating(event){
    var element = event.target;
    elementFix = element.className;
    if (elementFix == 'star star-1') {
        console.log('Ocena je 1');
    }
    else if (elementFix == 'star star-2') {
        console.log('Ocena je 2');
    }
    else if (elementFix == 'star star-3') {
        console.log('Ocena je 3');
    }
    else if (elementFix == 'star star-4') {
        console.log('Ocena je 4');
    }
    else if (elementFix == 'star star-5') {
        console.log('Ocena je 5');
    }
}