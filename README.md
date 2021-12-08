# tip-calculator-app-react

## Table of Content
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot
<img width="606" alt="Screenshot 2021-12-08 at 00 11 53" src="https://user-images.githubusercontent.com/63824455/145283575-66f08393-5293-44bb-8935-8722a5257055.png">
<img width="1440" alt="Screenshot 2021-12-08 at 00 12 30" src="https://user-images.githubusercontent.com/63824455/145283648-304452cd-103e-4f4f-956b-1ea72a57b404.png">


### Links
- Live Site URL: https://olabayoji.github.io/tip-calculator-app-react-
- Solution URL: https://github.com/Olabayoji/tip-calculator-app-react-


## My Process
### Built with
- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I Learnt
- How to add google fonts to a react app. 
- How to build reusable components. 
- How to deploy React app on GitHub pages
- Lifting state up -  this is to ensure there is a  single “source of truth” for any data that changes in a React application.
- Learnt that setState() does not immediately mutate this.state but creates a pending state transition. Therefore, if you want a function to be executed after state change occur and ensure that this.state returns the new value in setState, you should pass a callback function into the setState method. This can also be done using Async/Await but I do not have a solid grasp of Async/Await so I just passed regular callback functions. 

### Continued Development 
- App optimisation by using useEffect to prevent re-rendering child components in which state/props  changed in the parent component and the change in state/props of the parent component has no effect on the child component (This makes sense in my head but I’m not sure I’m passing my thoughts clearly). 


## Author
- Olabayoji Oladepo
  - [LinkedIn](https://www.linkedin.com/in/olabayojioladepo/)   

## Acknowledgments
I would like to thank Mr. Segun Mustafa for creating a platform that has motivated me to create my first non-tutorial React app. I also appreciate Andrew Chidi for such a great Read Me template in which I followed to create mine. 
