/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 *
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 */

// first solution
function fizzBuzz(n) {
    const arr = Array.from({ length: 15 }, (value, index) => index + 1);
    return arr.map((element) => {
        if (element % 15 === 0) {
            return 'FizzBuzz';
        }
        if (element % 5 === 0) {
            return 'Buzz';
        }

        if (element % 3 === 0) {
            return 'Fizz';
        }

        return String(element);
    });
}

// solution with one cycle
function fizzBuzz2(n) {
    const res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz');
        } else if (i % 3 === 0) {
            res.push('Fizz');
        } else if (i % 5 === 0) {
            res.push('Buzz');
        } else {
            res.push(i + '');
        }
    }
    return res;
}
