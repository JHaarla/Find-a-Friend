
$("#submit").on("click", function(event) {
    event.preventDefault();
    // alert("hello");

    function formValidation () {
        let isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
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

    let userInput = {
        'name': userName,
        'photo': userPhoto,
        'scores': userScore
    };
        
        // console.log("user score: " + userScore);
        // console.log("user name: " + userName);
        // console.log("user photo: " + userPhoto);

        console.log(userInput);

        //this POSTs the collected data to /api/friends
        
        axios.post('/api/friends', userInput).then(response => {
            // console.log('this fired')
            console.log(response)
            $("#match-name").text(response.data.name);
            $("#match-img").attr("src", response.data.photo);

            $("#results-modal").modal("toggle");

        }).catch(err => {
            console.log(err)
        });

    } else {
        alert("Please make sure to fill out all fields before submitting!");
    }

});