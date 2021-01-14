[![License: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](https://opensource.org/licenses/MIT)

# iHabit

Keep track of your habits here on a daily or weekly basis. Keep up your streaks and reach your goals!

To View the Website, Click below!

# Installation

To run the project:

- Git clone project to local machine

### from /clients

- `npm install`
- `npm start` to start client server
- Runs on `localhost:8000`

### from /server

To run **dev environment**:

- `docker-compose up --detach` (the `--detach` flag is optional) which does the following:
  - sets up dev database, runs migrations and seeds
  - db mapped to `localhost:35432`
  - runs `npm install & npm start` on server container start
  - express server mapped to `localhost:3000`

# Technologies

- HTML
- CSS
- JavaScript
- TDD: Jest/Enzyme
- Nodemon
- React
- Postgres SQL
- Docker
- Netlify

## Process

Project started with some research on habit tracking apps and aligning them with the given project brief. Figma was used to generate a wireframe for the architecture of the app.
Cooding was done as a whole group, in smaller sub teams and individually.
Working code was pushed regularly to the development branch here on github.

## General Features

- Welcome page with login/register element
- Logged-in users gain access to private routes that allows them to add new habits, view/delete/interact with their habits and view statistics of their completed habits and streaks

### Detailed App Features:

> Users need to register to use the app
> Password is stored for returning users
> Users can add new habits and decide on daily or weekly completion points
> Users can complete their habits by pressing a counter button
> Users can view their streaks and other statistics, including a graphical representation of their tasks


# Future Features
- integrate social media login options

# Learning Curves

# Wins & Challenges
| **Wins**                                     | **Challenges**                  |
| -------------------------------------------- | ------------------------------- |
| Testing coverage 60%                         | Testing                         |
| All must haves completed in project          | Docker                   |
|                                              |  |
|                                              |     |
|  |   

# Contributors

@rajtandel21 @stephanie-ai @Tempestx4 @GeriNZ @FopeA6

## Licence

[MIT Licence](https://opensource.org/licenses/mit-license.php)
