# Virtual Rock Album UI Experience using ReactJS

![Virtual Rock Album UI Experience](album_ui.png)

This project is a personal exploration of a virtual rock album user interface experience using ReactJS. The goal of this project is to create an interactive and immersive experience for users, where they can explore rock album covers, listen to tracks, and view lyrics.

## Project Overview

In this project, I experimented with players, lyrics, and album covers to create an engaging and dynamic user interface. The virtual rock album UI provides users with the ability to navigate through different tracks, view album artwork, listen to music, and read lyrics. The user can experience the feeling of opening an album cover and listening to the music, all in a virtual environment.

## Technologies Used

The project is built using the following technologies:

- ReactJS: A popular JavaScript library for building user interfaces.
- Emotion: A CSS-in-JS library for styling React components.
- Material-UI: A component library that provides pre-designed UI elements for faster development.
- React Audio Player: A React component used to handle audio playback.
- React Router Dom: A library for handling navigation in a React application.
- Sass: A CSS preprocessor that enhances the styling capabilities.

## Parts of the Code

The project includes code for handling audio playback, track navigation, and updating the user interface based on user interactions. Some key parts of the code include:

- State management using React's `useState` hook to keep track of the current track index, track progress, and whether the audio is playing or paused.
- Using React's `useRef` hook to create references to the audio element and an interval for updating the track progress.
- Implementation of functions for controlling the audio player, such as playing, pausing, skipping to the next or previous track, and scrubbing through the track progress.
- Use of `useEffect` hook for handling audio playback, updating the track progress, and managing cleanup when components unmount.

Please note that the code provided here is only a partial representation of the entire project, and additional components and logic would be implemented to create a complete and seamless user experience.

## Installation

To run the project, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow these steps to get started:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000` to see the virtual rock album UI.

## Conclusion

The Virtual Rock Album UI Experience project showcases the potential of ReactJS and related libraries in creating interactive and engaging user interfaces for music-related applications. This project is a testament to the power of web technologies in delivering immersive experiences to users. Feel free to explore, modify, and build upon this project to create your own unique virtual music experiences!
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
