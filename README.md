# 🎓 Student e-Service Portal

<div align="center">
  <h3>Complete Web Application for MM(DU) Students with PHP Backend</h3>
  
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
  ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-blue.svg)](https://php.net)
  [![MySQL](https://img.shields.io/badge/MySQL-5.7%2B-orange.svg)](https://mysql.com)
</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🏗️ System Architecture](#️-system-architecture)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🚀 Getting Started](#-getting-started)
- [👥 User Roles](#-user-roles)
- [📸 Screenshots](#-screenshots)
- [🛠️ Technologies Used](#️-technologies-used)
- [🔧 Configuration](#-configuration)
- [📊 Database Schema](#-database-schema)
- [🔐 Security Features](#-security-features)
- [📱 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [🐛 Known Issues](#-known-issues)
- [📚 Documentation](#-documentation)
- [📄 License](#-license)
- [👤 Authors](#-authors)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 About

The **Student e-Service Portal** is a comprehensive full-stack web application designed specifically for MM(DU) students, faculty, and administrative staff. This portal provides a centralized platform for managing various campus services, from hostel accommodations to complaint management and leave applications.

### 🌟 Key Highlights

- **Full-Stack Solution**: Complete frontend and backend implementation
- **Role-Based Access**: Different interfaces for Students, Employees, Admins, and Wardens
- **Responsive Design**: Works seamlessly across all devices
- **Secure Authentication**: PHP-based login system with session management
- **Database Integration**: MySQL database for persistent data storage
- **Real-Time Updates**: Dynamic content loading and updates

### 🎯 Target Users
- **Students**: Access hostel services, submit complaints, apply for leave
- **Employees**: Manage daily operations and student requests
- **Admins**: Oversee system operations and user management
- **Wardens**: Handle hostel-specific administration

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure login/logout system
- Role-based access control
- Session management
- Password encryption
- User profile management

### 🏠 Hostel Management
- Room allocation and management
- Hostel maintenance requests
- Warden dashboard for oversight
- Real-time availability updates

### 📝 Service Management
- Complaint registration and tracking
- Leave application system
- Service request processing
- Status updates and notifications

### 👥 User Management
- Multi-role user system
- Profile management
- Administrative controls
- User activity tracking

### 📊 Dashboard Features
- **Student Dashboard**: Personal services and requests
- **Employee Dashboard**: Task management and processing
- **Admin Dashboard**: System overview and management
- **Warden Dashboard**: Hostel-specific controls

### 🔧 Technical Features
- Responsive web design
- AJAX-powered dynamic updates
- Form validation (client and server-side)
- Database transaction handling
- Error logging and handling

---

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│                 │    │                 │    │                 │
│ • HTML5         │◄──►│ • PHP 7.4+      │◄──►│ • MySQL 5.7+    │
│ • CSS3          │    │ • Session Mgmt  │    │ • Relational DB │
│ • JavaScript    │    │ • Authentication│    │ • ACID Support  │
│ • Responsive UI │    │ • Business Logic│    │ • Indexing      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📁 Project Structure

```
Student-e-Service-Portal/
├── 📁 Backend/                    # PHP Backend Files
│   ├── 📄 complaint.php          # Complaint management
│   ├── 📄 db_connect.php         # Database connection
│   ├── 📄 hostelMaintenance.php  # Hostel maintenance
│   ├── 📄 leaveApplication.php   # Leave applications
│   └── 📄 login.php              # Authentication logic
├── 📁 code/                      # Additional code modules
├── 📁 Dynamic Login/             # Login system components
│   └── 📄 index.html             # Login interface
├── 📁 images/                    # UI assets and screenshots
│   ├── 🖼️ LandingPage_ss.png     # Landing page screenshot
│   └── 🖼️ Rooms_SS.png           # Rooms page screenshot
├── 📁 RoleLogin/                 # Role-based login modules
│   ├── 📄 admin_dashboard.php    # Admin control panel
│   ├── 📄 employee_dashboard.php # Employee interface
│   ├── 📄 student_dashboard.php  # Student interface
│   ├── 📄 warden_dashboard.php   # Warden interface
│   ├── 📄 index.html             # Role selection page
│   ├── 📄 indexupdate.html       # Updated interface
│   ├── 📄 login.php              # Role-specific login
│   ├── 📄 logout.php             # Logout functionality
│   ├── 📄 UpdateLogin.php        # Login updates
│   ├── 🎨 styles.css             # Dashboard styling
│   └── 🎨 stylesUpdate.css       # Updated styles
├── 📄 index.html                 # Main landing page
├── 📄 footercopymmdu.html        # Footer component
├── 📄 README.md                  # Project documentation
├── ⚡ scripts.js                 # Frontend JavaScript
├── 🎨 styles.css                 # Main stylesheet
└── 🎨 style_indexpage.css        # Landing page styles
```

---

## ⚙️ Installation & Setup

### Prerequisites

- **PHP**: Version 7.4 or higher
- **Database**: MySQL 5.7+ or MariaDB 10.3+
- **Web Browser**: Modern browser with JavaScript enabled

### System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| PHP | 7.4 | 8.0+ |
| MySQL | 5.7 | 8.0+ |
| RAM | 1GB | 2GB+ |
| Storage | 500MB | 1GB+ |

### Environment Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/YasH-Bodhe/Student-e-Service-Portal.git
   cd Student-e-Service-Portal
   ```

## 🚀 Getting Started

### Quick Start Guide

1. **Access the Application**
   ```
   http://localhost/student-portal/
   ```

2. **Default Admin Credentials**
   ```
   Username: admin
   Password: admin123
   ```

3. **First Time Setup**
   - Login as admin
   - Configure system settings
   - Create user accounts
   - Set up hostel information

### User Registration Process

1. **For Students**:
   - Visit registration page
   - Fill required details
   - Upload necessary documents
   - Wait for admin approval

2. **For Staff**:
   - Admin creates staff accounts
   - Initial password sent via email
   - Must change password on first login

---

## 👥 User Roles

### 🎓 Student Role
- **Access**: Personal dashboard, room booking, complaints
- **Features**:
  - View available rooms
  - Submit maintenance requests
  - Track complaint status
  - Apply for leave
  - Update personal information

### 👨‍💼 Employee Role
- **Access**: Employee dashboard, request processing
- **Features**:
  - Process student requests
  - Update request status
  - Generate reports
  - Manage assigned tasks

### 👨‍💻 Admin Role
- **Access**: Full system administration
- **Features**:
  - User management
  - System configuration
  - Generate comprehensive reports
  - Monitor system activity
  - Database management

### 🏠 Warden Role
- **Access**: Hostel management dashboard
- **Features**:
  - Room allocation
  - Hostel maintenance oversight
  - Student discipline management
  - Generate hostel reports

---

## 📸 Screenshots

<div align="center">

### 🏠 Landing Page
<img width="1920" height="1020" alt="Screenshot 2025-07-28 190749" src="https://github.com/user-attachments/assets/ed6617e2-9767-4596-97bc-6edeeff460b3" />

*Modern and intuitive homepage with clear navigation*

### 🛏️ Rooms Management
<img width="1920" height="1020" alt="Screenshot 2025-07-28 200221" src="https://github.com/user-attachments/assets/72e3042b-5bd8-4a1d-b2f0-089777f65f55" />

*Comprehensive room listing with availability status*

</div>

---

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Version | Purpose |
|------------|---------|----------|
| HTML5 | Latest | Structure and semantics |
| CSS3 | Latest | Styling and responsive design |
| JavaScript | ES6+ | Client-side interactivity |

### Backend Stack
| Technology | Version | Purpose |
|------------|---------|----------|
| PHP | 7.4+ | Server-side logic |
| MySQL | 5.7+ | Database management ||

### Development Tools
- **IDE**: VS Code, PHPStorm
- **Version Control**: Git
- **Database Tool**: phpMyAdmin, MySQL Workbench
- **Testing**: PHPUnit (for backend testing)

---

## 🔧 Configuration

### Database Configuration
```php
// Backend/db_connect.php
<?php
$config = [
    'host' => 'localhost',
    'dbname' => 'student_portal',
    'username' => 'your_username',
    'password' => 'your_password',
    'charset' => 'utf8mb4'
];

try {
    $pdo = new PDO(
        "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}",
        $config['username'],
        $config['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
```

### Session Configuration
```php
// Configure in each PHP file
session_start();
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1);
```

---

## 📊 Database Schema

### Core Tables

```sql
-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('student', 'employee', 'admin', 'warden') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Students table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    room_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Rooms table
CREATE TABLE rooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_number VARCHAR(10) UNIQUE NOT NULL,
    hostel_name VARCHAR(50) NOT NULL,
    capacity INT DEFAULT 1,
    occupied INT DEFAULT 0,
    status ENUM('available', 'occupied', 'maintenance') DEFAULT 'available'
);

-- Complaints table
CREATE TABLE complaints (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('pending', 'in_progress', 'resolved') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- Leave Applications table
CREATE TABLE leave_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason TEXT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- Hostel Maintenance table
CREATE TABLE hostel_maintenance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_id INT,
    reported_by INT,
    issue_description TEXT NOT NULL,
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    status ENUM('reported', 'assigned', 'in_progress', 'completed') DEFAULT 'reported',
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (reported_by) REFERENCES students(id)
);
```

---

## 🔐 Security Features

### Authentication & Authorization
- **Password Hashing**: PHP `password_hash()` function
- **Session Management**: Secure session handling
- **CSRF Protection**: Token-based protection
- **SQL Injection Prevention**: Prepared statements
- **XSS Protection**: Input sanitization

### Security Best Practices Implemented
```php
// Password hashing
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);

// Input sanitization
$clean_input = htmlspecialchars(trim($_POST['input']), ENT_QUOTES, 'UTF-8');
```

---

## 📱 API Endpoints

### Authentication Endpoints
```
POST /Backend/login.php
    - Login user
    - Body: {username, password}
    - Response: {success, message, redirect}

POST /RoleLogin/logout.php
    - Logout user
    - Response: {success, message}
```

### Student Endpoints
```
GET /RoleLogin/student_dashboard.php
    - Get student dashboard data
    - Headers: Cookie with session

POST /Backend/complaint.php
    - Submit new complaint
    - Body: {title, description}

POST /Backend/leaveApplication.php
    - Submit leave application
    - Body: {start_date, end_date, reason}
```

### Admin Endpoints
```
GET /RoleLogin/admin_dashboard.php
    - Get admin dashboard
    - Headers: Admin session required

POST /Backend/hostelMaintenance.php
    - Manage maintenance requests
    - Body: {action, request_id, status}
```

---

## 🧪 Testing

### Manual Testing Checklist

#### Authentication Testing
- [ ] Valid login credentials
- [ ] Invalid login attempts
- [ ] Session timeout handling
- [ ] Password change functionality
- [ ] Logout functionality

#### Role-Based Access Testing
- [ ] Student access restrictions
- [ ] Employee access permissions
- [ ] Admin full access
- [ ] Warden hostel access

#### Feature Testing
- [ ] Complaint submission and tracking
- [ ] Leave application process
- [ ] Room booking functionality
- [ ] Maintenance request handling

### Automated Testing Setup
```bash
# Install PHPUnit (for backend testing)
composer require --dev phpunit/phpunit

# Run tests
./vendor/bin/phpunit tests/
```

### Environment Variables
```bash
# .env file (create for production)
DB_HOST=localhost
DB_NAME=student_portal_prod
DB_USER=prod_user
DB_PASS=secure_password
APP_ENV=production
```

---

## 🤝 Contributing

We welcome contributions from developers, students, and educational institutions!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow coding standards
   - Add appropriate comments
   - Test your changes
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Create a Pull Request**

### Contribution Guidelines

#### Code Style
- **PHP**: Follow PSR-12 standards
- **JavaScript**: Use ES6+ features
- **CSS**: Use consistent naming conventions
- **HTML**: Use semantic markup

#### Commit Messages
```
type(scope): description

Examples:
feat(auth): add two-factor authentication
fix(dashboard): resolve dashboard loading issue
docs(readme): update installation instructions
```

### Areas for Contribution
- 🐛 **Bug Fixes**: Fix existing issues
- ✨ **New Features**: Add new functionality
- 📚 **Documentation**: Improve documentation
- 🎨 **UI/UX**: Enhance user interface
- 🔒 **Security**: Improve security measures
- ⚡ **Performance**: Optimize performance
- 🧪 **Testing**: Add test coverage

---

## 🐛 Known Issues

### Current Issues
1. **Session Timeout**: Sessions may timeout unexpectedly on shared hosting
2. **File Upload**: Large file uploads may fail without proper configuration
3. **Mobile Responsive**: Some dashboard elements need mobile optimization
4. **Email Notifications**: Email system not yet implemented

### Planned Fixes
- [ ] Implement proper session management
- [ ] Add file upload progress indicators
- [ ] Improve mobile responsiveness
- [ ] Integrate email notification system

### Reporting Issues
Please report issues using the GitHub issue tracker with:
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

---

## 📚 Documentation

### Additional Resources
- [Installation Guide](docs/installation.md)
- [User Manual](docs/user-manual.md)
- [Developer Guide](docs/developer-guide.md)
- [API Documentation](docs/api.md)
- [Security Guidelines](docs/security.md)

### Code Documentation
- Inline comments in all PHP files
- JSDoc comments for JavaScript functions
- CSS comments for complex selectors

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 YasH Bodhe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Authors

<div align="center">

### **Lead Developer & UI Enhancement**
**[YasH Bodhe](https://github.com/YasH-Bodhe)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YasH-Bodhe)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yash-bodhe)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yash@example.com)

*Full-Stack Development • UI/UX Design • PHP Backend*

### **Original Concept Creator**
**[DearPratipal](https://github.com/DearPratipal)**

*Original concept and initial development*

</div>

---

## 🙏 Acknowledgments

### Special Thanks
- **[DearPratipal](https://github.com/DearPratipal)** - Original creator and inspiration
- **MM(DU)** - Educational context and requirements
- **Open Source Community** - Tools, libraries, and resources
- **Beta Testers** - Students and faculty who tested the system
- **Contributors** - Everyone who helped improve the project

### Technologies & Resources
- **PHP Community** - For excellent documentation and support
- **MySQL** - Reliable database management system
- **Bootstrap** - Responsive UI framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography resources

### Educational Support
- **Maharshi Markandeshwar (DU)** - For the educational context
- **Computer Science Department** - Technical guidance
- **Student Body** - Feedback and testing

---

<div align="center">

### 🌟 Show Your Support

If this project helped you, please consider:

⭐ **Star this repository**  
🐛 **Report issues**  
💡 **Suggest improvements**  
🤝 **Contribute code**  
📢 **Share with others**

---

### 📈 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/YasH-Bodhe/Student-e-Service-Portal?style=social)
![GitHub Forks](https://img.shields.io/github/forks/YasH-Bodhe/Student-e-Service-Portal?style=social)
![GitHub Issues](https://img.shields.io/github/issues/YasH-Bodhe/Student-e-Service-Portal)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YasH-Bodhe/Student-e-Service-Portal)

---

**[⬆ Back to Top](#-student-e-service-portal)**

Made with ❤️ for students, by students

</div>

---

<div align="center">
  <sub>Built with modern web technologies • Designed for educational excellence • Open source forever</sub>
</div>