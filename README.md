# User Management System
A Full Stack CRUD application built using Spring Boot, MySQL, HTML, Bootstrap, and JavaScript.

This project demonstrates how a frontend communicates with a backend REST API to perform Create, Read, Update, and Delete (CRUD) operations.
---

## 🚀 Features
- Add new users
- View all users
- Update existing users
- Delete users
- Search users
- Pagination
- Professional UI with Bootstrap
- REST API integration
---
## 🛠️ Technologies Used

Backend:
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

Frontend:
- HTML
- CSS
- Bootstrap 5
- JavaScript (Fetch API)
---

## 📂 Project Structure
SpringProject
│
├── src/main/java/com/first/SpringProject
│ ├── controller
│ ├── service
│ ├── repository
│ ├── model
│ └── SpringProjectApplication.java
│
├── src/main/resources
│ ├── static (HTML, JS, CSS)
│ └── application.properties
│
└── pom.xml
---
## ⚙️ How This Application Works

1. The frontend (HTML + JS) sends HTTP requests using Fetch API.
2. Spring Boot handles REST API requests in the Controller layer.
3. Service layer contains business logic.
4. Repository layer communicates with MySQL using JPA.
5. Database stores user data.
6. JSON response is returned to frontend.
7. UI updates dynamically.

This follows a Client-Server Architecture.
---
## 🗄️ Database Configuration

Make sure MySQL is installed and running.

Create a database:

```sql
CREATE DATABASE crud_db;

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/crud_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

▶️ How To Run The Application
Step 1: Clone the repository
git clone https://github.com/your-username/your-repo-name.git
Step 2: Navigate to project folder
cd SpringProject
Step 3: Run using Maven Wrapper (Windows)
.\mvnw spring-boot:run

For Mac/Linux:
./mvnw spring-boot:run
Step 4: Open in Browser
http://localhost:8080
📮 API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/{id}	Get user by ID
POST	/users	Create user
PUT	/users/{id}	Update user
DELETE	/users/{id}	Delete user
📸 Project Flow

User clicks Save
→ JavaScript sends POST request
→ Spring Boot processes
→ Data saved in MySQL
→ Updated list returned
→ UI refreshes dynamically
