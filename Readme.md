# Node.js Admin Book

## Overview
Node.js Admin Book is a web-based application for managing books in an admin dashboard. Built with Node.js, Express, and EJS, it provides CRUD operations for books and a user-friendly interface for administrators.

## Features
- Add, edit, view, and delete books
- Responsive admin dashboard UI
- DataTables integration for advanced table features
- Image upload and management
- Modular MVC architecture
- Configurable database connection

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap
- DataTables
- MySQL (or other supported DB)

## Folder Structure
```
├── index.js                # Main entry point
├── package.json            # Project metadata and dependencies
├── config/                 # Database configuration
├── controllers/            # Route controllers (business logic)
├── models/                 # Database models
├── public/                 # Static assets (CSS, JS, images)
├── routers/                # Express route definitions
├── views/                  # EJS templates
│   ├── index.ejs
│   ├── pages/              # Page templates (add, edit, view book)
│   └── partials/           # Reusable template parts (header, footer)
```

## Getting Started
### Prerequisites
- Node.js (v14+ recommended)
- npm
- MySQL (or compatible database)

### Installation
1. Install dependencies:
	```
	npm install
	```
2. Configure the database:
	- Edit `config/db.js` with your database credentials.
	- Create the required tables (see below).

### Database Setup
Example MySQL table:
```sql
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Running the Application
Start the server:
```
npm start
```
The app will run Link: https://node-js-book-store-details-pr.onrender.com/

## Usage
- Access the dashboard in your browser.
- Use the navigation to add, edit, or view books.
- Images can be uploaded for each book.

## Screenshots
_Add screenshots of the dashboard and features here._

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Author
Neel Bhavsar