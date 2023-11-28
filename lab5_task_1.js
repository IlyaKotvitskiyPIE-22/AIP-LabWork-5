let numberM = Number(prompt("Введите число M (Количество строк)"));
let numberN = Number(prompt("Введите число N (Количество столбцов)"));
let numberK = Number(prompt("Введите число K (K>0)"));
let summa = 0;

let arrA = new Array(numberM);
for (let i = 0; i < numberM; i++){
    arrA[i] = new Array(numberN);
}

for (i = 0; i < arrA.length; i++){
    for (j = 0; j < arrA[i].length; j++){
        arrA[i][j] = Math.round(Math.random() * 10);
    }
}

if (1 <= numberK && numberK <= arrA.length) {
    for (let j = 0; j < arrA[numberK-1].length; j++) {
        summa += arrA[numberK-1][j];
    }
} 
else {
    alert("Индекс K введен не верно или не соответствует размер массива!");
}

alert(arrA.join('\n') + '\n' + "Сумма строки " + numberK + " ровна: " + summa);

