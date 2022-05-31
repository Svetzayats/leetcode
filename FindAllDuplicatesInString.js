/**
 * Find all symbols repeated 2 or >
 * Return string with this symbols
 * Order is important
 */

function findDuplicatesInString(str) {
    if (!str) {
        return '';
    }

    let res = '';
    let workedStr = str;

    while (workedStr) {
        let newStr = workedStr.replaceAll(workedStr[0], '');
        if (workedStr.length - newStr.length > 1) {
            res += workedStr[0];
        }

        workedStr = newStr;
    }

    return res;
}
