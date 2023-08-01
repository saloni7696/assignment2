  // Function to reset all checkboxes in the "Create Your Own With Toppings of Your Choice" section
function resetCheckboxes() {
    var checkboxes = document.getElementsByName('toppings');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  
  }

  // Function to show additional checkboxes for allergies when "Yes" is selected

  function myFunction(){
    document.getElementById('showTxt').innerHTML = "<input type='checkbox'> Mushrooms <br> <input type='checkbox'> peanuts <input type='checkbox'> eggs <input type='checkbox'>soy";}

    // Function to show a message when the "Next" button is clicked
    function myFunction5(){
      document.getElementById('ss1').innerHTML = "Pizza Added";}

// Function to show a message indicating the next step after saving a pizza
      function myFunction6(){
        document.getElementById('ss1').innerHTML = "Press <b> <i>Next</i></b> to Continue or <b> <i>Add More </i></b> to add another pizza";}

// Function to hide additional checkboxes for allergies when "No" is selected
    function myFunction2(){
      document.getElementById('showTxt').innerHTML = " ";}

      // Function to display the total price of the order
      function myFunction8(){
        document.getElementById('ss3').innerHTML = "56$ ";}

        // Function to display an alert when the order is successfully placed
    function myFunction1(){
      alert("Order Placed successfully!");}

      // Function to display an alert when the page loads
      function alertOnPageLoad() {
        alert("Order Placed");
        }

      

        

