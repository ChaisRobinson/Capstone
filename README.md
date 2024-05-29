# Cat Cafe Website

This is a React-based website for my Future Cat Cafe. It includes various pages and components to showcase the cafe's menu, display random cat images from an API, and manage a simple blog.

## Features

- **Homepage**: Introduces the cafe and provides links to the menu and gallery pages also has a photos from our store.
- **Gallery**: A page that dispays the cats you can play with with a brief description of each of them.
- **Menu**: Displays a list of menu items with descriptions, prices, and an option to add items to the cart.
- **Blog**: Allows creating, reading, updating, and deleting blog posts (CRUD operations). The blog posts are managed through a form interface.
- **Random Cat Picture**: A page that pulls an image from the Cat API randomly with a button to refresh the image, users can also save their favourite image to a list.

## Technologies Used

- React
- React Router
- Axios (for API requests)
- TheCatAPI (for fetching random cat images)

## Installation

1. Clone the repository: https://github.com/ChaisRobinson/Capstone
2. Navigate to the project directory: `cd .../Capstone`
3. Install dependencies:
    ```bash
    npm install
    ```
4. The project uses the following dependencies:
    - `@testing-library/jest-dom`: `^5.17.0`
    - `@testing-library/react`: `^13.4.0`
    - `@testing-library/user-event`: `^13.5.0`
    - `axios`: `^1.7.2`
    - `bootstrap`: `^5.3.3`
    - `icons`: `^1.0.0`
    - `jquery`: `^3.7.1`
    - `react`: `^18.3.1`
    - `react-bootstrap`: `^2.10.2`
    - `react-dom`: `^18.3.1`
    - `react-icons`: `^5.2.1`
    - `react-router-dom`: `^6.23.1`
    - `react-scripts`: `^3.0.1`
    - `router`: `^1.3.8`
    - `web-vitals`: `^2.1.4`
5. Start the development server:
    ```bash
    npm start
    ```


The website should now be running on `http://localhost:3000`.

## Front-end File Structure

- `src/`
- `components/`: Contains reusable components used throughout the application.
    - `Button.jsx`: Contains the button component for the carousel.
    - `Card.jsx`: Contains the card component for the carousel.
    - `Carousel.jsx`: Contains the logic for the carousel component.
    - `Footer.jsx`: Contains the basic footer component.
    - `Index.jsx`: Contains the index logic for the blog page.
    - `Navbar.jsx`: Contains the router links for the website navigation.
    - `Notes.jsx`: Contains the main code for the blog component.
- `Models/`: Contains models listed below.
    - `catinfo.js`: Contains the information for the `Gallery.jsx` component.
    - `symbols.js`: Contains the symbols for the carousel buttons.
- `pages/`: Contains the main page components for the website (Homepage, Menu, Gallery, Blog, Random Car Pictures).
    - `Api.jsx`: Contains the API call for fetching data from the cat API.
    - `Blog.css`: Contains CSS styles for `Blog.jsx`.
    - `Blog.jsx`: Contains CRUD operations for blog posting.
    - `Gallery.jsx`: Contains the main code for the cats at our cafe in a carousel format.
    - `Homepage.jsx`: Introduction page for the cafe website.
    - `Menu.jsx`: Contains items to be sold at our cafe with a cart functionality.
- `App.css`: CSS file for styling the application.
- `App.js`: Main front-end file containing all pages.
- `index.css`: Contains CSS files for styling the components and pages.
- `index.js`: Contains code to run the application properly.
- `.gitignore`: Contains files hidden from GitHub.
- `package-lock.json`: File containing the dependency tree and locked versions.
- `package.json`: File containing project metadata and dependencies.
- `README.md`: Read me file for this project.

## Back-end File Structure

- `Backend/`
    - `mongo_DB_1-main/`
        - `config/`
            - `connectDB.js`: File for connecting to the MongoDB database.
        - `controllers/`: Contains the controllers listed below.
            - `blogController.js`: Controller for handling blog-related operations.
            - `dataController.js`: Controller for handling data-related operations.
            - `notesController.js`: Controller for handling notes-related operations.
            - `userController.js`: Controller for handling user-related operations.
            - `usersControllers.js`: Another controller for handling user-related operations.
        - `middleware/`: Contains the middleware listed below.
            - `auth.js`: Middleware for authentication.
        - `models/`: Contains the models listed below.
            - `blog.js`: Model for the blog data.
            - `data.js`: Model for data.
            - `note.js`: Model for notes.
            - `user.js`: Model for user data.
            - `users.js`: Another model for user data.
    - `node_modules/`: Directory containing project dependencies.
    - `.gitignore`: File specifying files/directories to be ignored by Git.
    - `index.html`: Entry point for the application.
    - `package-lock.json`: File containing the dependency tree and locked versions.
    - `package.json`: File containing project metadata and dependencies.
    - `server.js`: Main server file.
    - `style.css`: CSS file for styling.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## What I learned from the project.

1. How to create a marquee in React.
2. Strengthen knowledge of useState and useEffect methods.
3. How to identify errors in my code from the terminal and the console via browser, then fix them. Using stackoverflow and google search when needed.
4. Strengthen knowledge of React Router and how to set up links.
5. How to create a restful API in mongo database and use CRUD operations.
6. Proper naming convetion for class names.
7. How to pass state as props to proper child pages.

## Challenges faced during the project.

1. I updated Node.js to a newer version, which led to an error. I had to add "--openssl-legacy-provider start" to my start script for the project to compile correctly.
2. Tried to incorporate a dependency for logos that was depreciated which caused an error; I completely discarded this all together.
3. Encountered issues with the state management library when trying to pass data between components. This required refactoring the code and restructuring the component hierarchy.
4. Struggled with styling and layout issues, had to look up examples from w3schools or geeks4geeks.
5. Encountered challenges related to authentication and authorization when implementing user login and access control features. (still yet to solve) 
