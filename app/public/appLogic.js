$("#submit").on("click", function(event) {
    event.preventDefault();
    alert("hello");

    function formValidation () {
        const isValid = true;
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
        //let's build an object from the user input
        const userInput = {
            name: document.getElementById("name").value,
            photo: document.getElementById("photo").value,
            scores: [
                document.getElementById("q1")
            ]
        }
    }


});