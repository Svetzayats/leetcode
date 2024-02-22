/**
* 605. Can Place Flowers
* You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
* Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
* Input: flowerbed = [1,0,0,0,1], n = 2
* Output: false
* https://leetcode.com/problems/can-place-flowers/
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true; 

    const minLengthForFlowerbed = 2 * n - 1; 
    if (flowerbed.length < minLengthForFlowerbed) return false; 

    let index = 0; 
    let flowersForPlanting = n; 

    while (flowersForPlanting > 0 && index < flowerbed.length) {
        const isEmptyCurrentPlot = !flowerbed[index]; 
        
        if (isEmptyCurrentPlot) {
            const isEmptyRight = !flowerbed[index+1]; 

            if (isEmptyRight) {
                const isEmptyLeft = !flowerbed[index-1]; 
                if (isEmptyLeft) {
                    flowersForPlanting--; 
                    index = index + 2; 
                } else {
                    index = index + 1; 
                }
            } else {
                index = index + 3; 
            }
        } else {
            index = index + 2; 
        }
    }

    return flowersForPlanting === 0; 
};
