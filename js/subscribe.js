
        document.addEventListener('DOMContentLoaded', function() {
            var subscribeButton = document.getElementById('subscribeButton');
            
            subscribeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action of the link
                alert("You have successfully subscribed");
            });
        });
