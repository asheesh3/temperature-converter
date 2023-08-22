let cel = document.getElementById('deg-cel')
let far = document.getElementById('deg-far')
let kel = document.getElementById('deg-kel')


cel.addEventListener("input", function () {

    far.value = (parseInt(cel.value) * 9 / 5) + 32

    kel.value = parseInt(cel.value) + 273.15;

});
far.addEventListener("input", function () {

    cel.value = (parseInt(far.value) - 32) * 5 / 9;
    kel.value = (parseInt(far.value) - 32) * 5 / 9 + 273.15;

});
kel.addEventListener("input", function () {

    cel.value = (parseInt(kel.value)) - 273.15;
    far.value = (parseInt(kel.value) - 273.15) * 9 / 5 + 32;

});

 function clean (){
  
    cel.value= " "
    kel.value= " "
    far.value= " "
 }