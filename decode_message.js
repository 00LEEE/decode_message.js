const fs = require('fs');

function decode(message_file) {
    const lines = fs.readFileSync(message_file, 'utf8').split('\n');
    let decoded_message = [];
    let last_number = 0;

    for (const line of lines) {
        const [number, word] = line.split(' ');
        if (parseInt(number) === last_number + 1) {
            decoded_message.push(word);
            last_number = parseInt(number);
        }
    }

    return decoded_message.join(' ');
}

// Example usage
const message_file = 'encoded_message.txt';
const decoded_message = decode(message_file);
console.log(decoded_message);
