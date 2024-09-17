
        // document.addEventListener('DOMContentLoaded', function() {
        //     var subscribeButton = document.getElementById('subscribeButton');
            
        //     subscribeButton.addEventListener('click', function(event) {
        //         event.preventDefault(); // Prevent the default action of the link
        //         alert("You have successfully subscribed");
        //     });
        // });

document.addEventListener('DOMContentLoaded', function() {
            var subscribeButton = document.getElementById('subscribeButton');
            var emailInput = document.getElementById('emailInput');

            subscribeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action of the link
                
                var email = emailInput.value; // Get the value from the input
                var atIndex = email.indexOf("@");
                var com = email.indexOf(".com")
                
                if (atIndex == -1 || com == -1 || email.length <= 8) { // Check if the email input is not empty
                    alert('Thank you for subscribing with femmeVoice);
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        });
