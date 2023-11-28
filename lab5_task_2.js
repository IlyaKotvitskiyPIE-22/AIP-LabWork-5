let numberM = Number(prompt("Введите число M (Количество строк)"));
let numberN = Number(prompt("Введите число N (Количество столбцов)"));
let minimumNumber = 1000;
let initialArrA;

let arrA = new Array(numberM);
for(let i = 0; i < numberM; i++){
    arrA[i] = new Array(numberN);
}

for(i = 0; i < arrA.length; i++){
    for(j = 0; j < arrA[i].length; j++){
        arrA[i][j] = Math.round(Math.random() * 10);
    }
}

for(i = 0; i < arrA.length; i++){
    for(j = 0; j < arrA[i].length; j++){
        if(arrA[i][j] < minimumNumber){
            minimumNumber = arrA[i][j];
        }
    }
}

initialArrA = arrA.slice();

for(i = 0; i < arrA.length; i++){
    for(j = 0; j < arrA[i].length; j++){
        if(arrA[i][j] == minimumNumber){
            arrA.splice(i, 1);
        }
    }
}
alert("Изначальный массив:" + "\n" + initialArrA.join("\n") + "\n" + "Конечный массив:" + "\n" + arrA.join("\n"));




