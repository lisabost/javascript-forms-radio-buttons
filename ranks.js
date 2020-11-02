$(document).ready(
    function () {
        //event handlers
        $("form").submit(getGreeting);

        //other functions

        function getGreeting(event) {

            //prevent flashing/resetting of page
            event.preventDefault();

            //get rank from radio button, only one should be checked
            var rank = $("input[name=rank]:checked").data("rank");


            //get name
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();


            //put data on the screen
            $("#greeting").text("Hello, " + rank + " " + firstName + " " + lastName);
            if(rank=="Gladiator") {
                $("#greeting").css("color", "red");
                $("#greeting").css("font-weight", "bold");
            } else if(rank=="Patrician") {
                $("#greeting").css("color", "aqua");
            } else if(rank=="Plebeian") {
                $("#greeting").css("color", "green");
            } else {
                $("#greeting").css("color", "brown");
            }
        }




        //output "hello rank + name"
    }
);