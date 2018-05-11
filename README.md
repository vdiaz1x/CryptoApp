# CryptoApp

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Mon| Finalize Idea/Prototype/Webpack/Skeleton| Yes
|Day 2: Tue| API Research/Database Schema & Build/React Static | Yes
|Day 3: Wed| React Static(cont)/ExpressRouter| Yes
|Day 4: Thu| Auth Research/External API Front-End Render | Yes
|Day 5: Fri| Auth Implementation/React Dynamic| Yes
|Day 6: Sat| React Dynamic/News API Integration/AuthCompletions | Yes
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

-Data Visualization of the users cryptocurrency portfolio

-Using an external API (CoinMarketCap and CryptoCurrency NewsAPI) to render information 
around the user's portfolio 

-Having User Authentication (User-Only no strangers allowed because of sensitive data)

-CRUD around people commenting about their investments on their portfolio (Creating comments around their coin, 

editing/updating those comments, deleting the comments they disregard around their coin, and reading their comments)


## USER STORIES 

-As a user I should be able to login and register that way I know my data 
is secure and my personal information is only shown to me. 

-As a user, I have invested in cryptocurrency and I need to be able to 
keep track of my investments across exchange platforms.

-As a user, I also want to have a visualization of all of my coins in 
one graphical representation so I can easily compare my coin investments. 

-Users should also be able to comment on their crypto investments to keep 
track of changes that they have made. 
- This comment data across users could eventually create a forum
or community around cryptocurrency investments. 

-Viewing coin metrics across coins will allow people to see in real-time how their coins are measuring up against each other. 

- Also, aggregating a news feed based on the users 
coin list will allow users to see why their investments are changing. 

- Users eventually would also want to be able to view historical data on coins
to measure their investments over time, but we will either require another
API or data source to make this happen. 

-Also, we want to provide a space 
where users are able to learn about businesses where cryptocurrency is being
accepted.  


## POST MVP


POST MVP features would be to build out the second part of the app which would be image hosting forum for Cryptocurrency Miners. Search functionality for other users to look at other people's comments. 


## Wireframes

Include images of your wireframes. 

https://drive.google.com/open?id=1OJoEcKOwwf-bsRc3-vlUKAGkyzHWGbx6

## CryptoApp Components

### Landing Page

### Sign-up/Register

### Sign-In 

### Portfolio



## Functional Components


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Data Visualization | H | 5hrs| hrs | hrs |
| MV(React instead of Views)C | H | 10hrs| 3hrs | 3hrs |
| External API Fetch/Ajax Calls| M | 7hrs| 4hrs | 4hrs |
| CSS page layout | H | 8 hrs| 3hrs | 3hrs |
| Rendering Data/Passing State/Props | H | 4 hrs| 2hrs | 2hrs |
| Configuring React/Express | H | 3hrs| 1hrs | 1hrs |


## Router Chart Table

| Routes |  Method | Controller/Action |  Model |  SQL | Results | 
|---| :---: | :---: | :---: | :---: | :---: |
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

## React/Express/Node Discoveries


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
 I changed everything from my first script file that was essentially all free floating to code a second script file that utilzed classes because it is better practice.

 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 **ERROR**: 
 **RESOLUTION**: 

**ERROR**:           
**RESOLUTION**: 

**ERROR**: 
**RESOLUTION**: 

**ERROR**: 
**RESOLUTION**:

#### SAMPLE.....
**ERROR**:          
**RESOLUTION**: 
