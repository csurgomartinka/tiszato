var tomb = ["Guvat","Jégmadár","Kárókatona"]
var tombkepek = ["guvat.png","jegmadar.png","karokatona.png"]
var tombleiras = [""]
function kattintas(szam){
    //alert(tomb[szam])
    document.getElementById("modalisfej").innerHTML = tomb[szam]
    document.getElementById("modalistorzs").innerHTML = `<img src="kepek/${tombkepek[szam]}" class="img-fluid">`
}