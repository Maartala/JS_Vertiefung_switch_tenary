function showtxt() {

    let auswahl = document.getElementById("mylist").value;
    let ergebnis = document.getElementById("masse")

    switch (auswahl){
        case value="0":
            ergebnis.innerHTML = `<b>Brief und Postkarte</b> L: 10 - 23,5cm
            B: 7-12,5cm
            H: bis 1cm`;
            break;

        case value="1":
            ergebnis.innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60x30 x15cm`;
            break;

        case value="2":
            ergebnis.innerHTML = `<b>DHL Paket 5 kg</b> <br>
            bis 120x60x60cm`;
            break;

        case value="3":
            ergebnis.innerHTML = `<b>DHL Paket 10 kg</b> <br>
            bis 120x60x60cm`;
            break;

        default:
            ergebnis.innerHTML = `<b>Extra große Größe</b>;
            break`;
    }
}
