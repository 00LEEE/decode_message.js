const fs = require('fs');

function decode(message_file) {
    const lines = fs.readFileSync(message_file, 'utf8').split('\n');
    let decoded_message = [];
    let last_number = null; // Initialize last_number as null

    for (const line of lines) {
        const [number, word] = line.split(' ');
        const parsed_number = parseInt(number);

        // Check if last_number is null or if parsed_number is one more than last_number
        if (last_number === null || parsed_number === last_number + 1) {
            decoded_message.push(word);
            last_number = parsed_number; // Update last_number
        } else {
            console.log(`Unexpected number: ${parsed_number}. Expected: ${last_number + 1}`);
            // Handle unexpected numbers here (optional)
        }
    }

    return decoded_message.join(' ');
}

// Example usage
const message_file = 'encoded_message.txt';
const decoded_message = decode(message_file);
console.log(decoded_message);