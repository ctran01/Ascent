# Ascent

**Table of Contents**

- [Introduction](#Introduction)
- [Live Link](#Live-Link)
- [Technologies](#Technologies)
- [Features](#Features)
- [Frontend](#Frontend)
- [Backend](#Backend)
- [Future Features](#Future-Features)

## Introduction

Ascent is a mobile application that allows users to find information about climbing areas and routes near them as well as create new areas/routes that they might find on their climbing adventure.

## Live Link

<a href="https://appetize.io/app/yjmh15xyn699qbtz6k3d4yg61m?device=iphone11promax&scale=75&orientation=portrait&osVersion=13.3">Here</a>

## Technologies

Project is created wtih

- Javascript ES6
- React-Native
- Expo
- ReactJS
- Postgres
- Node.js
- Express
- Sequelize
- BcryptJS
- Heroku

## Features

A few of the main features of Ascent are:

- User Auth via JSON web tokens
- Bcrypt hashing for password security
- CRUD for routes, areas, and users
- Be able to follow routes and areas through polymorphic association
- Search functionality for areas/routes
- Maps integration that shows nearby areas/routes
- Upload user profile image from camera roll

## Frontend

The frontend styling and functionality was created using React Native and Expo. It consists of several screen components that allow continuous navigation between each screen.

![Ascent Landing](documentation/images/AscentLanding.png)
![Ascent Signin](documentation/images/AscentSignIn.png)
![Ascent Home](documentation/images/AscentHome.png)  
![Ascent Maps](documentation/images/AscentMaps.png)

## Backend

The backend consists of several RESTful routes that feed data from a Postgres Database using Express and Sequelize.

![Database Schema](documentation/images/AscentERD.png)

## Future Features

- Follow other users
- Upload images when creating areas/routes
- Add photos to existing routes
- Comment sections
- Directions to the areas
