
        document.addEventListener('DOMContentLoaded', function() {
            var subscribeButton = document.getElementById('subscribeButton');
            var confirmationMessage = document.getElementById('confirmationMessage');
            
            subscribeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action of the link
                confirmationMessage.style.display = 'block'; // Show the confirmation message
            });
        });
