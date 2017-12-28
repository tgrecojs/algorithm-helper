export const trace = label => val => {
    console.log(`${label}:${val}`);
    return val;
};

export const timeIt = (fn) => {
    console.time();
    fn();
    console.timeEnd()
};

