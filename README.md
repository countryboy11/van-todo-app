*React Todo List App
-A simple and intuitive Todo List application built with React, allowing users to add, manage, and track their daily tasks. This project demonstrates fundamental React concepts including state management with useState, component-based architecture, and handling user interactions.

*Features
-Add New Todos: Quickly add new tasks to your list.
-Display Todos: View all your pending and completed tasks.
-Mark as Completed: Toggle the completion status of a todo item using a checkbox.
-Delete Todos: Remove tasks you no longer need.
-Responsive Design: Basic styling ensures a decent look on various screen sizes.

*Live Demo
-You can see the live application hosted on GitHub Pages here:
https://countryboy11.github.io/van-todo-app

*Technologies Used
-React: A JavaScript library for building user interfaces.
-HTML5: Structure of the application.
-CSS3: Styling of the application.
-gh-pages: For deploying the React app to GitHub Pages.

*Getting Started
-Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

*Prerequisites
-You need to have Node.js and npm (Node Package Manager) installed on your system.
Node.js: Download and Install Node.js (which includes npm).

*Installation
-Clone the repository:
(git clone https://github.com/countryboy11/van-todo-app.git)

*Navigate into the project directory:
(cd van-todo-app)

*Install dependencies:
(npm install)

*Running the Application Locally
-After installation, you can run the app in development mode:

(npm start)
-This will open your application in your default browser at http://localhost:3000. The page will reload if you make edits. You will also see any lint errors in the console.

*Project Structure
van-todo-app/
├── public/                # Public assets (e.g., index.html)
├── src/
│   ├── App.css            # Main application styles
│   ├── App.js             # Main application component
│   ├── TodoList.jsx       # The core Todo List component
│   └── index.js           # React entry point
├── .gitignore             # Specifies intentionally untracked files
├── package.json           # Project metadata and dependencies
├── README.md              # This file
└── ...
*Deployment
-This application is set up for easy deployment to GitHub Pages.

*Ensure homepage is set in package.json:
-Verify that your package.json contains the correct homepage URL, pointing to your GitHub Pages site:

package.json
"homepage": "https://countryboy11.github.io/van-todo-app",

*Deploy command:
-Run the following command to build the app and deploy it to the gh-pages branch:
(npm run deploy)
-This command will first build the production-ready version of your app into the build folder and then push it to a gh-pages branch on your GitHub repository.

*Configure GitHub Pages:
-After deployment, go to your GitHub repository settings, navigate to "Pages", and ensure the source branch is set to gh-pages and the folder to / (root).

*Contributing
-Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

*License
-This project is open source and available under the MIT License.
