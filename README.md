# Lord of the Rings Quote Quiz

Try to guess which character said the quote. Using this api: https://the-one-api.dev/

## React Component Tree

-   App
    -   Score
    -   Quiz
        -   Quote
        -   MultipleChoice
            -   Choice

## Components

---

### App

_state_

-   movie data
-   character data
-   quote data

_behavior_

-   fetch movie, character, and quote data from the api

---

### Score

_state_

_props_

_behavior_

---

### Quiz

_state_

-   current quote
-   boolean value for if the quiz is in progress

_props_

-   quote data
-   movie data
-   character data

_behavior_

-   function that selects a random quote from the quote data
-   function that selects 3 random characters, that are distinct from the character that said the current quote
-   if the quiz is in progress, display a Quote and MultipleChoice
-   if the quiz is not in progress, display a Quote and the correct choice, and a button to get a new quote

---

### Quote

_props_

-   the current quote to display

_behavior_

-   display the quote (p)

---

### MultipleChoice

_state_

_props_

-   array of 4 character objects (which have the properties name, and whether they are the right answer)

_behavior_

-   display 4 Choice components in a random order

---

### Choice

_state_

_props_

-   the character's name
-   whether it is right answer, as a boolean value

_behavior_

-   render a choice for the character (button)
-   on click, set the Quiz's in progress state to false

---
