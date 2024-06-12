
# DataHub

Welcome to the Book Store project! This project is a web application designed to manage books, authors, and their information. Users can add, edit, delete, and view books and authors. .

## Table of Contents

- [Demo](#demo)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)

## Features

- A user have can register with his mail,password.
- Dont worry to feeel of passwords ,there is tool used ur passwords decoded after saving in database.
- SEcurely uses this website to store their data with authentication.
- A User can save his thoughts,Questions,And Answers 
- He can see his past saving ideas,or others.
- Add also a feature to edit his past saving ideas
- If he want to Delete his Data ,there is a feature to delete data
- faster locate his latest saving ideas in home section


## Project Link

Check out the live  of the project: [Book Store](https://userdatahub.vercel.app/)


## Usage

1. **Home Page:**
   - Displays a input fields to store their data
   - Displays a latest adding o fhis own

2. **NavBar:**
   - where user to navigate their entire data 
   - where user to see his profile and if he want to logout

3. **Delete::**
   - if he want to delete his data to delete data
   - Options to delete the data.
   - 
3. **Update::**
   - if he want to delete his data to Update data feature is available
   - Options to  delete the data.


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
  - router for APIs

## API Endpoints

Here are some key API endpoints used in the project:

- **Book Management:**
  - `POST /books/get/data` - To register
  - `Post /books/get/singlebook/:id` -To LOgin
  - `POST /books/post/book` - TO upload
  - `GET /books/update/book/:id` - TO get data
  - `GET /books/update/book/:id` - TO single data
  - `PUT /books/update/book/:id` - TO update data
 
  - `POST /books/delete/book/:id` -To delete Data

