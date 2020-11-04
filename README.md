# Pig Dice

#### Description of application, date-2020

#### By Agata Kolodziej

## Description

Purpose usage, detailed explanation what is does and any other information you want users and other developers to have

## Specifications

### Describe: PigDice()

| Test                              | Expect                                      | Code                                                        |
| --------------------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| It will store players information | PigDice(players).toEqual([names], [scores]) | function PigDice() { this.players = []; this.scores = []; } |

It will display random order of numbers 1-6 on click/"roll" | PigDice(roll).toEqual()

### Describe: Player()

| Test | Expect | Code |
| ---- | ------ | ---- |


It will take in user inputted name| Player(name).toEqual("name"); | function Player(name, score) { this.name = name; this score = score} |

It will display which players turn it is to "roll" | Player(players).toEqual("It is Player One's turn"); |

It will display random order of numbers 1-6 when player clicks "roll" | Player(roll).toEqual(random 1-6) | Player.prototype.roll |

It will add 0 to player's score if number displayed is 1 | Player(roll[1]).toEqual(0) |

It will add numbers displayed to players score except if player rolls a 1 | Score(2-6).toEqual(2-6) |

### Describe: Score()

| Test | Expect | Code |
| ---- | ------ | ---- |


It will add numbers displayed to players score except if player rolls a 1 | Score(2-6).toEqual(2-6) |

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### View Online

- To view in browser click the GH-Pages link: [Name of App](URL)
- what to do when open online

##### Open Locally

- Click on the link to my repository: [My Repository](URL)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone REPO URL HERE` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

## Known Bugs

No known bugs present.

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

CHANGE IF NECESSARY

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
