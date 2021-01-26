function isBesok(){
    let days,besok
    days = document.getElementById('hari').value;
    var day = hari.value;

    switch(day){
        case 'senin':
            besok = "selasa"
            break;
        case 'selasa':
            besok = "rabu"
            break; 
        case 'rabu':
            besok = "kamis"
            break; 
        case 'kamis':
            besok = "jumat"
            break; 
        case 'jumat':
            besok = "sabtu"
            break; 
        case 'sabtu':
            besok = "minggu"
            break; 
        case 'minggu':
            besok = "senin"
            break; 
    }

    document.getElementById('hasilhari').innerHTML = "besok hari " + besok;
}

function isCheck(){
    let num,genap,ganjil,prima,cekprima
    num = document.getElementById('genapganjil').value;

    genap= "";
    ganjil = "";
    prima = "";

    // menunjukan ganjil genap
   for (i=1; i<=num; i++){

        if((i % 2) === 0){
            genap += i + " ";
        }
        else if ((i%2) !== 0){
            ganjil += i + " ";
        }
    }

    // menunjukkan prima
    for (i=2; i<=num; i++){

        cekprima = true;

        for (j=2; j<i; j++){
            if (i%j === 0 && i!==j)
            {
                cekprima =  false;
            }
        }

        if (cekprima === true) {
        prima += i + " ";
        }
    }

    document.getElementById('hasil').innerHTML = "deret genap = " + genap;
    document.getElementById('hasil2').innerHTML = "deret ganjil = " + ganjil;
    document.getElementById('hasil3').innerHTML = "deret prima = " + prima;
}