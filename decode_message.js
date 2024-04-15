const fs = require('fs');

function decode(message_file) {
    const lines = fs.readFileSync(message_file, 'utf8').split('\n');
    const words = [];
    
    for (const line of lines) {
        const lineWords = line.split(' ').slice(1); // Extracting words from each line
        words.push(...lineWords);
    }
    
    const shuffledWords = shuffleArray(words); // Shuffling the words randomly
    const selectedWords = shuffledWords.slice(0, Math.floor(Math.random() * 2) + 3); // Selecting 3-4 random words

    return selectedWords.join(' ');
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage
const message_file = 'encoded_message.txt';
const decoded_message = decode(message_file);
console.log(decoded_message);