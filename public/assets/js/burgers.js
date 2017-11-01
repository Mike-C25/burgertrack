$(function() {


    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim()
        };

        if(!newBurger.burger_name){
        	alert("Please input a burger name in the field on the bottom");
        	return;
        }
        // console.log($("#bur").val());
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
                console.log("Created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".change-devoured").on("click", function(event){
    	event.preventDefault();
    	var id = $(this).data("id");
    	var newDevoured = $(this).data("devoured");

    	var newDevouredState = {
    		devoured: newDevoured
    	};

    	$.ajax("/api/burgers/" + id, {
    		type: "PUT",
    		data: newDevouredState
    	}).then(function(){
    		console.log("changed devour to ", newDevoured);
    		location.reload();
    	})


    })
})