# 📚 Node.js Admin Book

**Node.js Admin Book** is a web-based admin dashboard for managing a collection of books. Built with **Node.js**, **Express**, and **EJS**, it enables administrators to easily perform full **CRUD operations**—create, read, update, and delete books. The app features image upload support, a responsive UI, and a modular MVC architecture for clean code organization.

---

## 🚀 Features

- 📖 Add, edit, view, and delete books
- 📊 Responsive admin dashboard UI with Bootstrap
- 🔍 DataTables integration (search, sort, pagination)
- 🖼️ Image upload and management
- 📁 MVC architecture for clean separation of concerns
- ⚙️ Configurable database connection

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS (Embedded JavaScript Templates)](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)
- [DataTables](https://datatables.net/)
- [MySQL](https://www.mysql.com/) *(or compatible DB)*

---

## 📂 Folder Structure

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

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v14+ recommended)
- npm
- MySQL (or any compatible database)

### 📦 Installation

1. Install dependencies:

    ```bash
    npm install
    ```

2. Configure the database:

    - Edit `config/db.js` with your database credentials.
    - Create the required table:

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

---

### ▶️ Running the Application

Start the development server:

```bash
npm start
```

The app will be available at: [http://localhost:8081](http://localhost:8081)

---

## 💡 Usage

- Access the admin dashboard in your browser.
- Use the navigation to **add**, **edit**, **view**, or **delete** books.
- Upload cover images when adding or editing books.
- Tables support search, pagination, and sorting via DataTables.

---

## 📸 Screenshots

> _Add screenshots of your dashboard and UI here for better visual documentation._

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss your ideas.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Neel Bhavsar

---