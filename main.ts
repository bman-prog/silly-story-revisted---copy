let word: string;
let words_list = []
let prompts_list = ["Enter a noun:", "Enter a verb:", "Enter an adjective:", "Enter a place:"]
for (let prompt of prompts_list) {
    word = game.askForString(prompt)
    words_list.push(word)
}
let story = "Once upon a time, there was a " + words_list[0] + " who liked to " + words_list[1] + ". It lived in a " + words_list[2] + " place called " + words_list[3] + "."
game.showLongText(story, DialogLayout.Center)
