const path = require("path");
const friendsData = require(path.join(__dirname, "../data/friends.js"));

module.exports = function (app) {

    // get and display all members 
    app.get("/api/friends", (req, res) => res.json(friendsData));

    app.post("/api/friends", (req, res) => {

        console.log(req.body);
        //set newFriend equal to req.body so we can work with it
        var newFriend = req.body;

        console.log(newFriend);

        // pull out the scores so we can work with them
        var userScores = newFriend.scores;
        // console.log(userScores);

        // this was a test by Keith - it worked - no need to uncomment, just res.send the match object info later down in the code
        // res.send(newFriend) 

        let closestMatch = { // best match will be pushed in here once we figure out who it is
            name: "",
            photo: "",
            scores: 100 //setting this high so the first comparison gets pushed in here and then any subsequent lower scores
        };

        let scoreDif; //we'll store the lowest friend score difference in here and keep updating if a lower one is found

        for (var i = 0; i < friendsData.length; i++) {
            let friendToCompare = friendsData[i];
            scoreDif = 0; // reset to 0 for each iteration

            for (var j = 0; j < friendToCompare.scores.length; j++) {
                let friendToCompareScore = friendToCompare.scores[j];
                let userScoresCompare = userScores[j];
                scoreDif += Math.abs(parseInt(friendToCompareScore) - parseInt(userScoresCompare));
            }

            if (scoreDif <= closestMatch.scores) {
                closestMatch.name = friendToCompare.name;
                closestMatch.photo = friendToCompare.photo;
                closestMatch.scores = scoreDif;
            };
        }

        console.log(closestMatch);
        res.json(closestMatch); // return the closest match back to the POST waiting for a response in appLogic.js
        friendsData.push(newFriend); // push user input to the friends array so they can be matched with another user.

        // console.log(friendsData);

    })

};