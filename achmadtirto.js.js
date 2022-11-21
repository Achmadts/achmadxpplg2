const untukInput = require("readline-sync");

console.log('==================================');
console.log("Mencari Nilai Rata-rata dan Range");
console.log('==================================');

// buat inputan Nilai B.indonesia
let bIndo = eval(untukInput.question('Masukan Nilai B.Indonesia : '));
// mencari range pada B.indonesia Mapel
if(bIndo < 71){
    console.log('Nilai Bahasa Indonesia kamu kurang')
}else{
    if(bIndo < 81){
        console.log('Nilai Bahasa Indonesia kamu cukup')
    }else{
        if(bIndo < 91){
            console.log('Nilai Bahasa Indonesia kamu baik')
        }else{
            if(bIndo <= 100){
                console.log('Nilai Bahasa Indonesia kamu sangat baik')
            }
        }
    }
}
console.log('==================================');

// buat inputan nilai mtk
let mtk = eval(untukInput.question('Masukan Nilai Mtk : '));
// mencari range mapel mtk
if(mtk < 71){
    console.log('Nilai Matematika kamu kurang')
}else{
    if(mtk < 81){
        console.log('Nilai Matematika kamu cukup')
    }else{
        if(mtk < 91){
            console.log('Nilai Matematika kamu baik')
        }else{
            if(mtk <= 100){
                console.log('Nilai Matematika kamu sangat baik')
            }
        }
    }
}
console.log('==================================');   

// buat inputan nilai inggris
let inggris = eval(untukInput.question('Masukan Nilai B.Inggris : '));
// mencari range pada mapel inggris
if(inggris < 71){
    console.log('Nilai Bahasa Inggris kamu kurang')
}else{
    if(inggris < 81){
        console.log('Nilai Bahasa Inggris kamu cukup')
    }else{
        if(inggris < 91){
            console.log('Nilai Bahasa Inggris kamu baik')
        }else{
            if(inggris <= 100){
                console.log('Nilai kamu Bahasa Inggris sangat baik')
            }
        }
    }
}
console.log('==================================');

// buat inputan nilai ipa
let ipa = eval(untukInput.question('Masukan Nilai Ipa : '));
// mencari range pada mapel ipa
if(ipa < 71){
    console.log('Nilai Ipa kamu kurang')
}else{
    if(ipa < 81){
        console.log('Nilai Ipa kamu cukup')
    }else{
        if(ipa < 91){
            console.log('Nilai Ipa kamu baik')
        }else{
            if(ipa <= 100){
            console.log('Nilai Ipa kamu sangat baik')
            }
        }
    }
}
console.log('==================================');


// menampilkan nilai rata-rata
let nilai1 = Number(bIndo);
let nilai2 = Number(mtk);
let nilai3 = Number(inggris);
let nilai4 = Number(ipa);

const jumlahMapel = 4;
let total = nilai1+nilai2+nilai3+nilai4;
let rataRata = total / jumlahMapel;


console.log(`Jumlah Nilai Kamu = ${total}`);

console.log('==================================');
console.log(`Nilai Rata-rata kamu = ${rataRata}`);
console.log('==================================');