const values = [8, 23, 55, 41];
let [val1, val2, val3, val4] = values;

const timeElements = document.querySelectorAll('.time');

let formattedNumber;

function secs() {
    if (val4 >= 0) {
        formattedNumber = val4.toString().padStart(2, '0');
        timeElements[3].textContent = formattedNumber; // Update the seconds element
        
        val4--; // Decrement seconds

        setTimeout(secs, 1000); // Call the function again after 1000ms (1 second)
        
    } else if (formattedNumber === '00') {
        mins();
    }
}

secs(); 

function mins() {
    if (val3 > 0) { // Check if minutes are greater than 0
        val3 = val3 - 1;
        timeElements[2].textContent = val3.toString().padStart(2, '0');
        val4 = 60;
        secs();
    } else {
        hours();
    }
}

function hours() {
    if (val2 > 0) { // Check if hours are greater than 0
        val2 = val2 - 1;
        timeElements[1].textContent = val2.toString().padStart(2, '0');
        val3 = 60;
        mins();
    } else {
        days();
    }
}

function days() {
    if (val1 > 0) { // Check if days are greater than 0
        val1 = val1 - 1;
        timeElements[0].textContent = val1.toString().padStart(2, '0');
        val2 = 24;
        hours();
    } else {
        // All values are 0, stop the countdown
        timeElements[0].textContent = "00";
        timeElements[1].textContent = "00";
        timeElements[2].textContent = "00";
        timeElements[3].textContent = "00";
    }
}
