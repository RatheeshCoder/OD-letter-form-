 // Function to get the current date
 function getCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();

    // Get the individual components of the date
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    var day = currentDate.getDate();

    // Create a string representation of the date
    var dateString = day + '/' + month + '/' + year;

    // Return the current date
    return dateString;
}

// Function to update the date on the webpage
function updateDate() {
    // Get the current date
    var currentDate = getCurrentDate();

    // Find the date element in the HTML
    var dateElement = document.getElementById('currentDate');

    // Set the inner HTML of the date element to the current date
    dateElement.innerHTML = currentDate;
}

// Update the date initially
updateDate();

// Function to download the confirmation letter as a PDF
function downloadConfirmationLetter() {
    const element = document.documentElement;
    const downloadButton = document.querySelector('button');
    downloadButton.style.display = 'none'; // Hide the download button
    
    html2pdf()
        .set({
            margin: 10,
            filename: 'OD Letter.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save()
        .then(function() {
            downloadButton.style.display = 'block'; // Show the download button after the PDF is downloaded
        })
        .catch(function(error) {
            console.error('Error generating PDF:', error);
            downloadButton.style.display = 'block'; // Show the download button in case of an error
        });
}



const printButton = document.getElementById('downloadButton');
printButton.addEventListener('click', () => {
  const printContent = document.getElementsByClassName('print-content')[0];
  printContent.style.fontSize = '10px';
  printContent.style.padding = '0px';
  printContent.style.margin = '0px';
  window.print();
});
