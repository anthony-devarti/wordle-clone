state object
    wod: five letter word as string
    state of board (letters): user input start as 5 empty strings
    state of board (answers) correct/green wrongspot/yellow wrong/red
    current row/try increase by one after each attempt
    used letters: color code with state of board.  Change the keyboard color 2

const list of win words
dictionary of valid guesses (stretch)

useEffect for each keyboard input

Components list{
    title
    on win (modal, lock board)
    on loss (modal, lock board, insult)
    tile 30 of em (need to generate these)
    tile container
    keyboard?

}

wincon if index[0] of guess === index[0] of wod (then repeat through index[4]) for/of loop, probably

if (index[0] of guess is INCLUDED in wod if included === true ---> ){
    then, if index[0] of guess matches index[0] of wod, make that tile index green. if false, then yellow
} else {
    red store guess in used letters
}


if included === true ---> check for correct location

if included === false ---> red

if check for correct locatioin === true ---> green

if check for correct location === false ---> yellow
repeat this process for indexes 0-4

