// console.log(deger = 34) 
function sayiUret(ustLimit = 49) {
    // console.log(deger = 3)
    return (Math.ceil(Math.random() * ustLimit))
}
//keyword return bir functionda YALNIZCA 1 RETURN ÇALIŞIR
//function bir tanımdır çağırman gerek
sayiUret()
// console.log(deger2 = 64)
var sayi1 = sayiUret(555)
var sayi2 = sayiUret(555)
var sayi3 = sayiUret(555)
var sayi4 = sayiUret(44)
var sayi5 = sayiUret(16)
var sayi6 = sayiUret(555)

console.log('Kolon : ' + sayi1 + ' ' +
    sayi2 + ' ' + sayi3 + ' ' + sayi4 + ' ' + ' ' + sayi5 + ' ' + sayi6);

// console.log(deger - deger2)