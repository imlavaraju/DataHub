# DATAHUB

Welcome to the DATAHUB project! This project is a web application designed to manage user data and information. Users can add, edit, and delete their data with secure authentication.

## Table of Contents

- [Demo](#demo)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)
- [Project Link](#project-link)

## Features

- Users can register with their email and password.
- Passwords are securely hashed before being saved in the database.
- Secure authentication to protect user data.
- Users can save their thoughts, questions, and answers.
- Users can view their past entries and those of others.
- Features to edit and delete past entries.
- Quick access to the latest entries on the home page.

## Usage

1. **Home Page:**
   - Displays input fields to store new data.
   - Shows the latest entries by the user.

2. **NavBar:**
   - Allows users to navigate through their data.
   - Provides access to user profile and logout options.

3. **Delete:**
   - Users can delete their data.

4. **Update:**
   - Users can update their data.

## Technologies

- **Frontend:**
  - React
  - React Router
  - Axios
  - Tailwind CSS
  - react-icons

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Router for APIs

## API Endpoints

Here are some key API endpoints used in the project:

- **User Management:**
  - `POST /users/register` - To register a new user.
  - `POST /users/login` - To log in a user.

- **Data Management:**
  - `POST /data/add` - To upload new data.
  - `GET /data/:id` - To get a single data entry.
  - `GET /data` - To get all data entries.
  - `PUT /data/:id` - To update data.
  - `DELETE /data/:id` - To delete data.

## Project Link

Check out the live version of the project: [DATAHUB](https://userdatahub.vercel.app/)
