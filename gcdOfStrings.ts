/** 
* For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
* Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. 
* https://leetcode.com/problems/greatest-common-divisor-of-strings/description/ 
* ABCABC and ABC => ABC 
* ABABAB and ABAB => AB
*/

/**
* My solution 
*/
function gcdOfStrings(str1: string, str2: string): string {
   if (!str1.length || !str2.length) return ''; 
   if (str1 === str2) return str1; 

   const gcd = gcdForNumbers(str1.length, str2.length); 

   const repeated1 = str1.length / gcd; 
   const repeated2 = str2.length / gcd; 

   const base = str1.slice(0, gcd); 

   if (base.repeat(repeated1) === str1 && base.repeat(repeated2) === str2) {
       return base; 
   }

   return '';
};

/** 
* More elegant solution with checking non-dividing strings at first 
*/
function gcdOfStrings(str1: string, str2: string): string {
   if (str1 + str2 !== str2 + str1) return ''; 

   const gcd = gcdForNumbers(str1.length, str2.length); 
   const res = str1.slice(0, gcd); 
   return res;
};

/* helper */ 
function gcdForNumbers(num1: number, num2: number): number {
    while (num2) {
        const temp = num2; 
        num2 = num1 % num2; 
        num1 = temp; 
    }

    return num1; 
}

