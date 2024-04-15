function decode(message_file) {
    const lines = fs.readFileSync(message_file, 'utf8').split('\n');
    let decoded_message = [];
    let expected_number = 193;

    for (const line of lines) {
        const [number, word] = line.split(' ');
        const parsed_number = parseInt(number);
        
        // Check if the parsed number is equal to the expected number
        if (parsed_number === expected_number) {
            decoded_message.push(word);
            expected_number++; // Increment the expected number for the next iteration
        } else {
            console.log(`Unexpected number: ${parsed_number}. Expected: ${expected_number}`);
            // Handle unexpected numbers here (optional)
        }
    }

    return decoded_message.join(' ');
}