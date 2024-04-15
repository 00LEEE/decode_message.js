const fs = require('fs');

function decode(message_file) {
    const lines = fs.readFileSync(message_file, 'utf8').split('\n');
    const words = lines.map(line => {
        const [number, word] = line.split(' ');
        return word.trim(); // Remove any leading or trailing whitespace
    });

    const selectedWords = [];
    for (let i = 0; i < 3; i++) { // Select 3 words
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedWords.push(words[randomIndex]);
    }

    return selectedWords.join(' ');
}

// Example usage
const message_file = 'encoded_message.txt';
const decoded_message = decode(message_file);
console.log(decoded_message);