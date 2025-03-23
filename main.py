words_list = []
prompts_list = ["Enter a noun:", "Enter a verb:", "Enter an adjective:", "Enter a place:"]

for prompt in prompts_list:
    word = game.ask_for_string(prompt)
    words_list.append(word)

story = "Once upon a time, there was a " + words_list[0] + " who liked to " + words_list[1] + ". " \
 "It lived in a " + words_list[2] + " place called " + words_list[3] + "."

game.show_long_text(story, DialogLayout.CENTER)