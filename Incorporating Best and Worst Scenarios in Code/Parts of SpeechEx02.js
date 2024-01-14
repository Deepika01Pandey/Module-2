function frameStory(template, words) {
    // Split the template into its constituent parts
    const parts = template.split(' ');

    // Split the words into individual words
    const wordList = words.split(' ');

    // Create an array to hold the parts of speech and words
    const storyParts = [];

    // Map each part in the template to its corresponding word
    for (let part of parts) {
        if (part === "an" || part === "adjective" || part === "noun" || part === "verb") {
            // Use the next word from the list of words
            storyParts.push(wordList.shift());
        } else if (part === "noun") {
            // Skip adding "the" and proceed to the next part
            continue;
        } else {
            // If it's not a placeholder, keep it as it is
            storyParts.push(part);
        }
    }

    // Construct and return the story by joining the parts
    return storyParts.join(' ');
}

// Test the function with the given input
const template = "An adjective noun verb over the adjective hill.";
const words = "elegant horse trotted green";

console.log(frameStory(template, words)); 
// Expected Output: "An elegant horse trotted over the green hill."
