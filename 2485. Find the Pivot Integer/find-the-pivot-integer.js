var pivotInteger = function (n) {


    for (let i = 1; i <= n; i++) {
        let leftsum = (i * (i + 1)) / 2;
        let rightsum = (n * (n + 1)) / 2 - (i * (i - 1)) / 2;

        if (leftsum === rightsum){
            return i;
        }
    }
    return -1
};

console.log(pivotInteger(1))