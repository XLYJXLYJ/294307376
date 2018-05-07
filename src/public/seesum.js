export function looksum(n) {
    if (n>1000) {
        n = Math.round((n /1000) * 10) / 10;
        n = n + "万";
    }
    return n;
};

