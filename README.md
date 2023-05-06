# Google Drive Clone

This is a Google Drive clone built from scratch using React.js, React Router DOM, and styled-components for styling. It utilizes Firebase as the backend for storing and managing files. With this application, you can upload various types of files such as images, videos, PDFs, etc., delete files, and organize them into folders. The design is fully responsive, adapting to different screen sizes, and you can also create folders to organize your files effectively. The application is provides a seamless user experience.

#### Table of Contents

- **[Features](###Features)**
- **[Technologies](#Technologies)**
- **[Getting Started](#Technologies)**
- **[Folder Structure](#Technologies)**
- **[Contributing]("Technologies")**
- **[License](#Technologies)**

### Features

User authentication (sign in and sign up)
Uploading files of different types (images, videos, PDFs)
Deleting files
Displaying files
Creating folders
Responsive design

### Technologies

React.js: A JavaScript library for building user interfaces
React Router DOM: A routing library for React applications
Redux: A predictable state container for JavaScript applications
Firebase: A backend-as-a-service platform for web and mobile applications
Styled Components: A library for styling React components using CSS-in-JS

#### Getting Started

To get started with the Google Drive clone, follow these steps:

1. Clone the repository: git clone https://github.com/your-username/google-drive-clone.git

2. Navigate to the project directory: cd google-drive-clone

3. Install the dependencies: npm install

4. Set up Firebase:

- Create a Firebase project and obtain the Firebase configuration.

- Create a .env file in the root directory and add your Firebase configuration as environment variables. Example:Getting Started
  To get started with the Google Drive clone, follow these steps:

Clone the repository: **git clone https://github.com/your-username/google-drive-clone.git**

Navigate to the project directory: **`cd google-drive-clone`**

Install the dependencies: **`npm install`**

Set up Firebase:

Create a Firebase project and obtain the Firebase configuration.

Create a **`.env`** file in the root directory and add your Firebase configuration as environment variables. Example:

```javascript
REACT_APP_FIREBASE_API_KEY = your - api - key;
REACT_APP_FIREBASE_AUTH_DOMAIN = your - auth - domain;
REACT_APP_FIREBASE_PROJECT_ID = your - project - id;
REACT_APP_FIREBASE_STORAGE_BUCKET = your - storage - bucket;
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = your - messaging - sender - id;
REACT_APP_FIREBASE_APP_ID = your - app - id;
```

5. Start the development server: **`npm start`**

6. Open the application in your browser at http://localhost:3000.

### Usage

1. Sign in or sign up to access the Google Drive clone.
2. Upload files by clicking on the "Upload" button and selecting the desired files from your local system.
3. Delete files by selecting the file and clicking on the "Delete" button.
4. Create folders by clicking on the "New Folder" button and providing a name for the folder.
5. Navigate through folders by clicking on the folder names.
6. Click on the file names to open or preview the files.

### Folder Structure

The folder structure of the project is as follows:

```css
google-drive-clone/
├── public/
│ ├── index.html
│ └── images
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── AddFileButton.js
│ │ ├── AddFolderButton.js
│ │ ├── AddModel.js
│ │ ├── Breadcrumb.js
│ │ ├── Content.js
│ │ ├── File.js
│ │ ├── Folder.js
│ │ ├── Navigation.js
│ │ ├── NewFolder.js
│ │ ├── Option.js
│ │ ├── Options.js
│ │ ├── ProgressToast.js
│ │ ├── Sidebar.js
│ │ ├── SidebarOption.js
│ │ ├── UploadOption.js
│ │ ├── UserInfo.js
│ │ ├── View.js
│ ├── pages/
│ │ ├── Dashboard.js
│ │ ├── SignInPage.js
│ │ ├── SignUpPage.js
│ ├── hooks/
│ ├── helpers/
│ ├── App.js/
│ ├── index.js/
│ ├── store/

```
