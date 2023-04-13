window.onload = () => {
    let content = document.querySelector('.content');
    // Створення масиву та заповнення його випадковими числами
    let arr = [];
    let n = parseInt(prompt("Введіть кількість елементів масиву:"));

    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }

    content.innerHTML += 'Вхідний масив: [' + arr + ']';
    content.innerHTML += "<br>"

    // Знаходження суми елементів з парними індексами
    let sum = evenSum(arr);

    content.innerText += "Сума елементів з парними індексами: " + sum;
    content.innerHTML += "<br>"

    // Знаходження максимального та мінімального елементів та їх індексів серед елементів з непарними індексами
    let {max, maxIndex} = findMaxOdd(arr);
    let {min, minIndex} = findMinOdd(arr);

    content.innerText += "Максимальний елемент з непарним індексом: " + max + ", його індекс: " + maxIndex;
    content.innerHTML += "<br>"
    content.innerText += "Мінімальний елемент з непарним індексом: " + min + ", його індекс: " + minIndex;
    content.innerHTML += "<br>"

    bubbleSort(arr);
    content.innerText += "Відсортований масив: [" + arr + "]";
}

function evenSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }

    return sum;
}

function findMaxOdd(arr) {
    let max = arr[1];
    let maxIndex = 1;

    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    return {max: max, maxIndex: maxIndex};
}

function findMinOdd(arr) {
    let min = arr[1];
    let minIndex = 1;

    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return {min: min, minIndex: minIndex};
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}