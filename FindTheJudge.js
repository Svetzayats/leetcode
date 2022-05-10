/**
 * In a town there are N people labelled from 1 to N.
 * There is a rumor that one on of this people is secretly the town judge.
 * If the town judge exist, then:
 * - the town judge trusts nobody
 * - everybody (except the town judge) trust the town judge
 * - there is exactly one person that satisfies for the town judge role
 * You are given trust, an array of pairs trast[i] = [a, b],
 * representing that the person labelled a trusts the person labelled b.
 * If the town judge exists, return his label, otherwise return -1
 *
 * Input: 3 [[1, 3], [2, 3]]
 * Output: 3
 */

function findJudge(n, trust) {
    if (n < 1) return -1;

    if (n === 1 && !trust.length) {
        return 1;
    }

    const trusters = [];
    const trustDict = {};

    trust.forEach(([j, k]) => {
        trusters.push(j);
        if (trustDict[k]) {
            if (!trustDict[k].includes(j)) {
                trustDict[k].push(j);
            }
        } else {
            trustDict[k] = [j];
        }
    });

    const candidates = Object.keys(trustDict);

    for (let i = 0; i < candidates.length; i++) {
        const candidate = Number(candidates[i]);

        if (
            !trusters.includes(candidate) &&
            trustDict[candidate].length === n - 1
        ) {
            return candidate;
        }
    }

    return -1;
}

// there can be promblems with duplicates sub arrays
// [ [1, 3], [1, 3] ]
function findJudge2(n, trust) {
    const arr = new Array(n + 1).fill(0);

    trust.forEach(([j, k]) => {
        arr[j]--;
        arr[k]++;
    });

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === n - 1) {
            return i;
        }
    }

    return -1;
}
