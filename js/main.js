//import the modules here
import Team from "./modules/DataModule.js";

(() => {
    //stub * just a place for non-component specific stuff
    //this file will be where we import our other js modules
    console.log('loaded');

    console.log(Team);

    debugger;

    // select our user elements and load the content 
    let userSection = document.querySelector(".user-section").children;

    userSection[1].textContent = Team["Justin"].name;
    userSection[2].textContent = Team["Justin"].role;
    userSection[3].textContent = Team["Justin"].nickname;
})();