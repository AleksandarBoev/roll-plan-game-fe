# roll-plan-game-fe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Table of Contents
- [Frameworks and Libraries](#frameworks-and-libraries)
- [Setup and Running the Project](#setup-and-running-the-project)
- [Functionalities](#functionalities)
- [Versions](#versions)

## Frameworks and Libraries
### Core Framework
Angular (v19.0.4)

### Additional Libraries
- RxJS - For reactive programming.
- Bootstrap - For responsive UI design.
- Angular Forms - For handling forms.
- TypeScript - Strongly typed JavaScript.
- Angular CLI - For project scaffolding and management.

## Setup and Running the Project
### Prerequisites
Install Node.js (LTS version recommended).

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

### Steps to Run
Clone the repository:

```bash
git clone https://github.com/AleksandarBoev/roll-plan-game-fe.git
cd roll-plan-game-fe
```

Install dependencies:

```bash
npm install
```
Start the development server:


```bash
ng serve
```

Open the application in your browser: http://localhost:4200/

## BackEnd
This Angular app depends on this Back-End Spring application: https://github.com/AleksandarBoev/roll-plan-game-be

Instructions on how to run it can be found in it's README.

## Functionalities
### Features
- Character Management - Create, view, edit, and delete characters.
- User Authentication - Register, login and logout functionality with JWT.
- Dynamic Routing - Routes dynamically protect pages based on logged in users and JWT tokens

## Versions

| Version | Description                                                                                        |
|---------|----------------------------------------------------------------------------------------------------|
| 0.13.0  | Add basic global exception handling                                                                |
| 0.12.1  | Change delete functionality                                                                        |
| 0.12.0  | Add character editing                                                                              |
| 0.11.0  | Add character deletion                                                                             |
| 0.10.0  | Add character creation                                                                             |
| 0.9.0   | Send jwt authorization header for each BE request, add character listing and single character view |
| 0.8.0   | Add navbar item logic for logged in users and implement auth guard                                 |
| 0.7.0   | Add logout functionality                                                                           |
| 0.6.0   | Add login functionality                                                                            |
| 0.5.0   | Add register functionality and save jwt token from BE response                                     |
| 0.4.0   | Remove translations library, introduce bootstrap 5.3.3, add some styling                           |
| 0.3.0   | Add skeletons for main features, add basic navbar, add routing                                     |
| 0.2.0   | Add simple and unfinished page                                                                     |
| 0.1.0   | Add ngx-translate library and simple usage                                                         |
| 0.0.0   | Add initial Angular Setup.                                                                         |
