# Whiteboard Practice

## Pull Requests
[Pull Request #1](https://github.com/NickDorkins/whiteboard_practice/pull/1)

---


## Code
[Binary Search Tree Solution](john_cokos/index.js)

---

## Whiteboard
[Google Docs Whiteboard](https://docs.google.com/spreadsheets/d/19k3BV5tmSug2kS7tPRodiKLEqYJ0g7sxFFme3qaNzLU/edit?usp=sharing)

---

## Problem Domain

Given the number of story points return the closest estimated time to complete the given user story

---

## Input
Story Points --> int

---

## Output
Recent known time if exists or closest time of known point value (closest or higher if equal distance) --> int

---

## Visual
[See Whiteboard](https://docs.google.com/spreadsheets/d/19k3BV5tmSug2kS7tPRodiKLEqYJ0g7sxFFme3qaNzLU/edit?usp=sharing)

---

## Algorithm
> **Assumptions made - I have access to correctly written Node and BST functions, I'm just adding the search function to the stack of functional code.**

Create a function called `userStoryTimes()`

Passed the values of a `BST` and `point value`

Check to see if tree has root node, if not, return `error`;

- create a variable called `current` assigned to root node
- create a variable called `highVal` assigned to root node
- create a variable called `lowVal` assigned to root node
- create a variable called `located` assigned to false

Create a while loop to run as long as `current` holds a value and the `input value` has not been found

<u>***IF***</u> the `input` is less than the `current node's value`

if the `current's value` is not `null` ***AND*** the absolute difference of the `input` and the `current's value` is LESS THAN (`<`) the absolute difference of `input` and the value of `highVal`

reassign `highVal` to `current node`

reassign `current` to `current's` <u>***`LEFT`***</u> `node`

if the `current's value` is not `null` ***AND*** the absolute difference of the `input` and the `current's value` is LESS THAN (`<`) the absolute difference of `input` and the value of `lowVal`
    
reassign `lowVal` to `current node`

<u>***ELSE IF***</u> the input is greater than the current node's value

if the `current's value` is not `null` ***AND*** the absolute difference of the `input` and the `current's value` is LESS THAN (`<`) the absolute difference of `input` and the value of `lowVal`

reassign `lowVal` to `current node`

reassign `current` to `current's` <u>***`RIGHT`***</u> `node`

if the `current's value` is not `null` ***AND*** the absolute difference of the `input` and the `current's value` is LESS THAN (`<`) the absolute difference of `input` and the value of `highVal`

reassign `highVal` to `current node`

Anything <u>***ELSE***</u> reassigns `located` to <u>***`TRUE`***</u>


if `found` equals <u>***`FALSE`***</u>

- create a variable called `higher` assigned to the absolute value of `highVal` minus the `input`
- create a variable called `lower` assigned to the absolute value of the `input` minus `lowVal`

if `lower` is less than `higher` <u>**without being equal**</u>

reassign `current` to `lowVal`

anything else 

reassign `current` to `highVal`

`return` the `value of the current node`

---

## Pseudo Code

>Input: BST and Story Points
>
>Output: Est. time or time of known point value (closest or higher if equal distance)"

```
userStoryTimes() <-- BST & Points
    if root = null --> Error


    current <-- root node
    highVal <-- root node
    lowVal <-- root node
    located <-- FALSE

    while current and located = FALSE
        'IF' input points < current node's value

            if current's value is not "null" && input - current node's value < input - highVal
                highVal <-- current node
            current <-- current node's left value
            if current's value is not "null" && input - current node's value < input - lowVal
                lowVal <-- current node

        'ELSE IF' input points > current node's value
            if current's value is not "null" && input - current node's value < input - lowVal
                lowVal <-- current node
            current <-- current node's right value
            if current's value is not "null" && input - current node's value < input - highVal
                highVal <-- current node

        'ELSE' located <-- TRUE

    IF' located === FALSE
        higher <-- highVal - input
        lower <-- input - lowVal
        'IF' lower < higher && lower != higher
            current <-- lowVal
        'ELSE' 
            current <-- highVal

    return current's value
```

---
---