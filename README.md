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
2. Navigate to the project directory: cd CAPSTONE
3. Install dependencies:
  npm install
  @testing-library/jest-dom: ^5.17.0
  @testing-library/react: ^13.4.0
  @testing-library/user-event: ^13.5.0
  axios: ^1.7.2
  bootstrap: ^5.3.3
  icons: ^1.0.0
  jquery: ^3.7.1
  react: ^18.3.1
  react-bootstrap: ^2.10.2
  react-dom: ^18.3.1
  react-icons: ^5.2.1
  react-router-dom: ^6.23.1
  react-scripts: ^3.0.1
  router: ^1.3.8
  web-vitals: ^2.1.4
5. Start development sever: npm start

The website should now be running on `http://localhost:3000`.

## Front-end File Structure

- `src/components`: Contains reusable components used throughout the application.
- `src/pages`: Contains the main page components for the website (Homepage, Menu, Gallery, Blog, Random Car Pictures).
- `src`: Contains CSS files for styling the components and pages.

## Back-end File Structure



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
