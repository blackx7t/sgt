 // JavaScript to toggle visibility based on radio button selection
 const radioInputs = document.querySelectorAll('input[type="radio"]');
 const contentSections = document.querySelectorAll('.content-section');

 radioInputs.forEach(input => {
     input.addEventListener('change', function () {
         const selectedValue = this.value;
         contentSections.forEach(section => {
             if (section.id === `${selectedValue}-content`) {
                 section.classList.add('active');
             } else {
                 section.classList.remove('active');
             }
         });
     });
 });



 // -------------------Tree JS Start---------------------

 document.addEventListener("DOMContentLoaded", function () {
     var headTxt = document.querySelectorAll(".Head-txt");
     var tree = document.querySelectorAll(".tree");

     // Hide all trees by default
     tree.forEach(function (item) {
         item.style.display = "none";
     });

     headTxt.forEach(function (txt) {
         txt.addEventListener("click", function () {
             var siblingTree = this.nextElementSibling;
             siblingTree.style.display = siblingTree.style.display === "none" ? "block" : "none";
         });
     });

     var toggles = document.querySelectorAll(".tree .toggle");

     toggles.forEach(function (toggle) {
         var nestedList = toggle.querySelector("ul");
         if (nestedList) {
             nestedList.style.display = "none";
             toggle.classList.remove("open");
         }

         toggle.addEventListener("click", function (event) {
             event.stopPropagation();
             nestedList = this.querySelector("ul");
             if (nestedList) {
                 nestedList.style.display = nestedList.style.display === "none" ? "block" : "none";
                 this.classList.toggle("open");
             }
         });

         // Prevent blue background on click
         toggle.addEventListener("mousedown", function (event) {
             event.preventDefault();
         });
     });

     // Prevent non-toggle elements from toggling
     document.querySelectorAll('.tree li:not(.toggle)').forEach(function (item) {
         item.addEventListener('click', function (event) {
             event.stopPropagation(); // Prevent event from affecting parent toggle
         });
     });
 });

 // -------------------Tree JS End---------------------