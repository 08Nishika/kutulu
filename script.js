var interva = ""; // for storing the current setinterval 

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});



// script.js

document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copy-button");
    const copyText = document.querySelector(".copy-text");

    copyButton.addEventListener("click", function () {
        // Create a range to select the text
        const range = document.createRange();
        range.selectNode(copyText);

        // Select the text
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Copy the selected text
        try {
            document.execCommand("copy");
            copyButton.innerText = "Copied!";
            copyButton.style.backgroundColor = "gray";
            setTimeout(function () {
                copyButton.innerText = "Copy";
                copyButton.style.backgroundColor = "gray";
            }, 1500); // Reset button text and color after 1.5 seconds
        } catch (error) {
            console.error("Copy failed: ", error);
            copyButton.innerText = "Copy Failed";
            copyButton.style.backgroundColor = "red";
            setTimeout(function () {
                copyButton.innerText = "Copy";
                copyButton.style.backgroundColor = "#007bff";
            }, 1500); // Reset button text and color after 1.5 seconds
        }

        // Clear the selection
        window.getSelection().removeAllRanges();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const centeredH1s = document.querySelectorAll(".centered-h1");
    
    centeredH1s.forEach((h1, index) => {
        h1.style.opacity = 0;
        h1.style.transition = `opacity 0.5s ${index * 0.2}s`; // Adjust delay as needed
        h1.style.opacity = 1;
    });
});
// Get all the headings with the class "centered-h1"
const headings = document.querySelectorAll('.centered-h1');

// Function to animate text display

function animateText(element) {

    const text = element.querySelector('span').textContent;
  
    let h1 = element.querySelector('h1');
    h1.textContent = "";
    let currentIndex = 0;

    interva = setInterval(() => {
        if (currentIndex < text.length) {
            h1.textContent += text[currentIndex];
            currentIndex++;
         
        }


        else{
            clearInterval (interva);
        }
      
    }, 70);
        
    

   
}


// Loop through each heading and apply the animation
// headings.forEach(heading => {
//     animateText(heading);
// });
// Smooth scroll function
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Refresh the page after scrolling
        setTimeout(() => {
            location.reload();
        }, 1000); // Adjust the delay time as needed
    }
}

// Attach click event listeners to navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});
const heading = document.querySelector('.centered-h1');

function addAnimationAgain() {
    heading.classList.remove('animate__animated', 'animate__fadeIn');
    void heading.offsetWidth; // This line triggers a reflow, making sure the class removal takes effect
    heading.classList.add('animate__animated', 'animate__fadeIn');
}

// Call the function initially and set it on an interval
addAnimationAgain();
setInterval(addAnimationAgain, 5000); // Adjust the interval time as needed




/* Function for running the animation again after scrolling on the headings */

const headingElements = document.querySelectorAll('.roadmap');


// checking if the element is coming in the view 
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function animateOnScroll() {
    headingElements.forEach((element) => {
    if (isElementInViewport(element)) {

        if (interva != ""){
            clearInterval(interva);
        }
    

      animateText (element);
    }
  });
}


// checking the scroll 
window.addEventListener('scroll', animateOnScroll);
