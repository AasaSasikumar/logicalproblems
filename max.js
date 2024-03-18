var Numbers = [1, 2, 101, 45, 55, 1443];
var l = Numbers.length;
 var max = -Infinity;
var i;
for (i = 0; l > i; i++) {

    if (Numbers[i] > max) {

        max = Numbers[i];

    }

}

console.info(max);
