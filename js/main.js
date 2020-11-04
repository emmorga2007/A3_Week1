(() => {
    // start with a fetch call
    fetch('./DataSet.json')
        .then(res => res.json())
        .then(data => {
            //this is our data (DataSet.json)
            // coverted to a plain Javascript object
            handleDataSet(data);
        })
    .catch((error) => console.log(error));

    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {


        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
            
            currentUserText[1].src = `images/${data[user].avater}.jpg`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        console.log(data);
    }
})();