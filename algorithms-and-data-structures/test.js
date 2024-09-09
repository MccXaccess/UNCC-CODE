function _(strings, ...values) {
    // Combines the strings and values into one code snippet
    let code = '';
    for (let i = 0; i < strings.length; i++) {
        code += strings[i];
        if (i < values.length) {
            code += values[i];
        }
    }
    // In a real scenario, it might wrap the code for security, optimization, etc.
    return code;
}

const data = 'data';
const op = '!==';
console.log(_`${data} % 2 ${op} 0`);
// Output: "data % 2 !== 0"