const fs = require("fs/promises");

(async () => {
    const watcher = fs.watch('./');

    for await (const event of watcher) {
        console.log(event);
    }
})();


// const object = { a: 1, b: 2, c: 3 };
// for (const key in object) {
//     console.log(key, object[key]);
// }
