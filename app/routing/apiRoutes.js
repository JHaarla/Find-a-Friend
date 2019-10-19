const friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
       return res.json(friendsData);
    
    });

    app.post("/api/friends", function (req, res) {
        // data collection, comparing and display of match logic goes in here
        // obviously, this is as far as I have made it. Will continue to work on this ASAP

        //is this even the right place for the app logic???



        // capture survey results in variables. push question answers to an array. basically, create an object with the user input.
        // loop over the question results (with parseInt) and store the array in a var
        // loop over the friends array to look at each user one at a time
        //   loop over each friend array user results (parseInt) and store in a temp var (probably save that user's name & photo link as well since there are no index values to refer to...)
        // have an if statement check to see if the difference is less than the previous one, if so store it in the temp var
        // once these loops finish, we should have the best match saved in the temp variable
        // post temp var info to modal

        //how do you trigger the modal???


    })

};