const path = require("path");
const friendsData = require(path.join(__dirname, "../data/friends.js"));

module.exports = function (app) {

    // get and display all members 
    app.get("/api/friends", (req, res) => res.json(friendsData));
    

    app.post("/api/friends", (req, res) => {

        //set newFriend equal to req.body so we can work with it
        var newFriend = req.body;
        console.log(newFriend);

        // pull out the scores so we can work with them
        var userScores = newFriend.scores;
        console.log(userScores);

        let closestMatch = { // best match will be pushed in here once we figure out who it is
            name: "",
            photo: "",
            scores: 100
        };

        let scoreDif = 0; //we'll store the lowest friend score difference in here and keep updating if a lower one is found
        
        for (var i = 0; i < friendsData.length; i++) {
            let friendToCompare = friendsData[i];

            for (var j = 0; j < friendToCompare.scores.length; j++) {
                let friendToCompareScore = friendToCompare.scores[j];
                let userScoresCompare = userScores[j];
                scoreDif
            }
            
        }












        // console.log(friendsData);



        // loop over the question results (with parseInt) and store the array in a var
        // loop over the friends array to look at each user one at a time
        //   loop over each friend array user results (parseInt) and store in a temp var (probably save that user's name & photo link as well since there are no index values to refer to...)
        // have an if statement check to see if the difference is less than the previous one, if so store it in the temp var
        // once these loops finish, we should have the best match saved in the temp variable
        // post temp var info to modal

        //how do you trigger the modal???

    })

};