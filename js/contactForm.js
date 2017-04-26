$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
	var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
				$('#contactForm')[0].reset();
			}
        }
    });
}

function formSuccess(){
    $('#contactForm')[0].reset();
}
