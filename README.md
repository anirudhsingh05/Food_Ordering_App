# Food odering app

### Enbale CORS extension in browser, Otherwise Restaurant list won't be rendered Because we are using Swiggy Live API

## Clone this Repository

You need to write the following commands on the terminal screen so that you can run this project locally.

```bash
  git clone "https://github.com/anirudhsingh05/Food_Ordering_App.git"
```

Go to the project directory

```bash
  cd Food_Ordering_App
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Run Some Test Cases

```bash
  npm run test
```

## Parcel

       Dev Build
       Local Server
       HMR = Hot Module Replacement
       File Watching Algorithm - written in C++
       Caching - Faster Builds
       Image Optimization
       Minification
       Bundling
       Compress
       Consistent Hashing
       Code Splitting
       Differential Bundling - support older browsers
       Diagnostic
       Error Handling
       HTTPs
       Tree Shaking - remove unused code
       Different dev and prod bundles

## Structure of app

### Components :

#### Headers :

       logo
       Nav-items
         - Online status
         - Home
         - About us
         - Contact us
         - Grocery(lazy)
         - login button
         - UserName

#### Body:

       search bar
       Top Rated Restaurant filter
       Custom UserName
       Restaurant-container
         -img
         -Name of restuarant
         -starrating
         -Time of delivery
         -cusine

#### Footer :

       Copyright
       links
       address
       contact

## React Hooks

       (Normal javascript utility function)
       -useState() : Superpowerful state variable in react
       -useEffect() : loads at the end and used for making external call from react

#### tailwind css

## 2 Types of routing

    - Client-side-routing
    - server-side-routing

## Redux Toolkit

    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - slice (Cart Slice)
    - Dispatch (Action)
    - Selector

## Types of Testing

       - Unit Testing
       - Integration Testing
       - End to End Testing (e2e testing)

## Setting up testing in our app

       - Installed React Testing Library
       - Installed jest
       - Installed Babel Dependencies
       - Configure Babel
       - Configure Parcel Config file to disable default babel transpilation
       - Jest: npx jest --init
       - Install jsdom Library
       - Install @babel/preset-react library to make jsx work in test cases
       - Include @babel/preset-react inside my babel config
       - Install @testing-library/jest-dom and Import it in the component
