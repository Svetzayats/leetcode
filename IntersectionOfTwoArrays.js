/**
 * Given two integer arrays nums1 and nums2,
 * return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 */

// simple solution
const intersect = function (nums1, nums2) {
    const baseArray = nums1.length <= nums2.length ? nums1 : nums2;
    const extendedArray = nums1.length > nums2.length ? nums1 : nums2;

    if (!baseArray.length) {
        return [];
    }

    const res = [];

    baseArray.forEach((elem) => {
        if (extendedArray.includes(elem)) {
            res.push(elem);
            extendedArray[extendedArray.indexOf(elem)] = null;
        }
    });

    return res;
};

// solution with sorted array
const intersectWithSort = function (nums1, nums2) {
    const sorting = (a, b) => a - b;
    const baseArray =
        nums1.length <= nums2.length
            ? nums1.sort(sorting)
            : nums2.sort(sorting);
    let extendedArray =
        nums1.length > nums2.length ? nums1.sort(sorting) : nums2.sort(sorting);

    if (!baseArray.length) {
        return [];
    }

    const res = [];

    baseArray.forEach((elem) => {
        extendedArray = extendedArray.filter((item) => item >= elem);
        const index = extendedArray.indexOf(elem);
        if (index !== -1) {
            res.push(elem);
            extendedArray.splice(0, 1);
        }
    });

    return res;
};

// fun solution with object
const intersectWithObject = function (nums1, nums2) {
    const baseArray = nums1.length <= nums2.length ? nums1 : nums2;
    const extendedArray = nums1.length > nums2.length ? nums1 : nums2;

    if (!baseArray.length) {
        return [];
    }

    const obj = {};
    const res = [];

    baseArray.forEach((elem) => {
        obj[elem] ? obj[elem]++ : (obj[elem] = 1);
    });

    Object.keys(obj).forEach((key) => {
        const keyMathes = extendedArray.filter(
            (item) => item === Number(key)
        ).length;
        if (!keyMathes) {
            delete obj[key];
        } else {
            obj[key] = Math.min(obj[key], keyMathes);
        }
    });

    Object.keys(obj).forEach((key) => {
        for (let i = 0; i < obj[key]; i++) {
            res.push(Number(key));
        }
    });

    return res;
};

// shorter decision with object
const intersectWithObject2 = function (nums1, nums2) {
    if (!nums1.length || !nums2.length) {
        return [];
    }

    const obj = {};
    const res = [];

    nums1.forEach((elem) => {
        obj[elem] ? obj[elem]++ : (obj[elem] = 1);
    });

    nums2.forEach((elem) => {
        if (obj[elem]) {
            res.push(elem);
            obj[elem]--;
        }
    });

    return res;
};
