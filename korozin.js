//korozin wrote.

function Typing() {
    
    const elements = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u'];
  
    let index = 0;
  
    function setDisplay() {

      if (index < elements.length) {

        document.getElementById(elements[index]).style.display = "contents";
        
        index++;

        setTimeout(setDisplay, 100);

      } else {

        setTimeout(function() {

          elements.forEach(function(element) {

            document.getElementById(element).style.display = "none";

          });

          setTimeout(Typing, 1000);

        }, 1500);

      }

    }
  
    setDisplay();

  }
