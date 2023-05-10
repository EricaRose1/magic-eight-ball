// Return random item from a list

function choice(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

export { choice };