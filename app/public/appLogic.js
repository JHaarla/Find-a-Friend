// import Axios from "axios";

$("#submit").on("click", function(event) {
    event.preventDefault();
    // alert("hello");

    function formValidation () {
        let isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
                // alert("You must enter a name and email!");
            }
        });

        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    if (formValidation()) {

        const userName = document.getElementById("name").value;
        const userPhoto = document.getElementById("photo").value;
        let userScore = [ 
        document.getElementById("q1").value,
        document.getElementById("q2").value,
        document.getElementById("q3").value,
        document.getElementById("q4").value,
        document.getElementById("q5").value,
        document.getElementById("q6").value,
        document.getElementById("q7").value,
        document.getElementById("q8").value,
        document.getElementById("q9").value,
        document.getElementById("q10").value
    ];

    // let userScore = [];
    //     userScore.push(document.getElementById("q1").value);
    //     userScore.push(document.getElementById("q2").value);
    //     userScore.push(document.getElementById("q3").value);
    //     userScore.push(document.getElementById("q4").value);
    //     userScore.push(document.getElementById("q5").value);
    //     userScore.push(document.getElementById("q6").value);
    //     userScore.push(document.getElementById("q7").value);
    //     userScore.push(document.getElementById("q8").value);
    //     userScore.push(document.getElementById("q9").value);
    //     userScore.push(document.getElementById("q10").value);

    let userInput = {
        'name': userName,
        'photo': userPhoto,
        'scores': userScore
    };
    

        
        console.log("user score: " + userScore);
        console.log("user name: " + userName);
        console.log("user photo: " + userPhoto);



        //let's build an object from the user input
        // let userInput = {
        //     name: document.getElementById("name").value,
        //     photo: document.getElementById("photo").value,
        //     scores: [
                // document.getElementById("q1").value,
                // document.getElementById("q2").value,
                // document.getElementById("q3").value,
                // document.getElementById("q4").value,
                // document.getElementById("q5").value,
                // document.getElementById("q6").value,
                // document.getElementById("q7").value,
                // document.getElementById("q8").value,
                // document.getElementById("q9").value,
                // document.getElementById("q10").value
        //     ]
        // };


        // JSON.stringify(userInput);
        // userInput = JSON.stringify(userInput);
        // console.log("user input: " + JSON.stringify(userInput));
        // console.log(`user input: ${userInput}`);
        console.log(userInput);


        //this POSTs the collected data to /api/friends

        
        axios.post('/api/friends', userInput).then(response => {
            console.log('this fired')
            console.log(response)
        }).catch(err => {
            console.log(err)
        });
        // $.post("/api/friends", userInput, function(match) { //this waits until it "hears" back from /api/friends


        // console.log(match)
        //     //grab result from POST and pull out the best match's name & photo
        //     $("#match-name").text(match.name);
        //     $("#match-img").attr("src", match.photo);

        //     // fire the modal with the best match info
        //     $("#results-modal").modal("toggle");

        // });

    } else {
        alert("Please make sure to fill out all fields before submitting!");
    }


});