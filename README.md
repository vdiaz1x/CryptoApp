# CryptoApp

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Mon| Finalize Idea/Protype| Yes
|Day 2: Tue| API/Database/React | Yes
|Day 3: Wed|  | Yes
|Day 4: Thu|  | Yes
|Day 5: Fri|  | Yes
|Day 6: Sat| Finish all logic around rendering/ Slides | Yes
|Day 7: Sun| Finalize Cryptocurrency Tracker| Yes
|Day 8: Mon| Debugging | Yes
|Day 9: Tue| Debugging | Yes
|Day 10: Wed| Presentations | Yes

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.


Our project is a cryptocurrency portfolio tracker. The user would input their name and password to create a profile along with whether they are a trader or miner. Once the user has signed-up they would login and see their portfolio. We are using an external API in order to display information around the cryptocurrency. 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.

## MVP

Include the full list of features that will be part of your MVP 



## POST MVP

Include the full list of features that you are considering for POST MVP

POST MVP features are laid out to essentially make the game as realistic as possible:


## Wireframes

Include images of your wireframes. 

https://drive.google.com/open?id=1OJoEcKOwwf-bsRc3-vlUKAGkyzHWGbx6

## CryptoApp Components

### Landing Page

### Sign-up/Register

### Sign-In 

### Portfolio



## Functional Components


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Win Logic | H | 2hrs| 1hrs | 1hrs |
| FlexBox Display | H | 2hrs| 3hrs | 3hrs |
| Animations | M | 3hrs| 4hrs | 4hrs |
| CSS page layout | H | 3hrs| 3hrs | 3hrs |
| creating classes | H | 3hrs| 2hrs | 2hrs |
| forms | M | 1hrs| 1hrs | 1hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 
I did not use any generic helper functions. 
|throwBall.click(function() | Most methods/functions I used were click events|

## Router Chart Table

| Routes |  Method | Controller/Action |  Model |  SQL | Results | |
|---|---|---|---|---|---|
| /user |  1 |  GET | getOneUser(:id) | modelGetOneUser(:id) |   SELECT userID  | |
| /user |  2 |  POST |   updateUser(data) |   modelUpdateUser(data) |  UPDATE SET.. | |
| /user |  3 |  GET  |   addUser()  | modelAddUser() | INSERT INTO...  | |
| /user/coin | 4 |  GET |getOneCoin(:id)| modelGetOneCoin(:id) |   SELECT coinID | |
| /user/coin | 5 |  PUT |updateCoin(:id, data) |  modelUpdateCoin(:id, data)|  UPDATE SET.. | |
| /user/coin | 6 |  POST |   addOne(data)  |  modelAddOne(data) |  INSER INTO...  | |
| /user/coin | 7 |  DELETE | delete(:id)| modelDelete(:id)|    DELETE FROM ... | |
| /user/coin/comment | 8 |  GET |getAll(:user, :coin) |   modelGetAll(:user, :coin) |  SELECT * | |   
| /user/coin/comment | 9 |  PUT | updateComment(:id, data) |   modelUpdateComment(:id, data) |  UPDATE SET... |  |
| /user/coin/comment | 10 | POST  |  addComment(data) |  modelAddComment(data) |  UPDATE SET...  |  |
| /user/coin/comment | 11 | DELETE | deleteComment(:id) |  modelDeleteComment(:id) | DELETE FROM... |  |
| /user/coin/comment | 12 | GET |  makeComment() |  modelMakeComment() |    | 
| /user/coin/comment | 13 | GET | getOneComment(:id) | modelgetOneComment(:id) |   |  

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 
 I had a lot of help from stack overflow.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  
"headOne.html(`${this.$value} selected <span id='selected'>${this.val}</span>`)''
I liked this code because both utilized 'this' but under different scopes. The Id needed to be put in a span to be used in a separate method to compare for win logic.

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.
 I discovered that you can use jQuery to call upon an animation created in CSS
 I also discovered that you can create an animation in jQuery, but its not easy.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
 I changed everything from my first script file that was essentially all free floating to code a second script file that utilzed classes because it is better practice.

 I changed my reset button to refresh the page which I know was frowned upon but made the game functional to repeat since I could not get the animations to reset.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 **ERROR**: Animation created to rotate the ball on the wheel would not run more than once.<br/>
 **RESOLUTION**: No resolution. Used code to refresh the page instead of staying on the same page.

**ERROR**: The value of the input form submission was not useable to push into a heading in a separate method.<br/>           
**RESOLUTION**: I needed to bind the method to adjust the scope within the class.

**ERROR**: I was unable to track the position of the ball along its rotation around the spinning wheel to use in my win logic to compare it to the degree of the number the user selects.<br/>
**RESOLUTION**: I had to manually assign each number around the roulette wheel with its own degree.

**ERROR**: My images were not moving positions when I tried to add a media query to the file.<br/>
**RESOLUTION**: I had to add "div." to the beginning of the image in css.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
