// Create a file input element
const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';

// Get the "Upload Character Image" button and attach a click event listener to it
document.getElementById('imageUpload').addEventListener('click', function() {
  // Trigger the file input dialog when the button is clicked
  input.click();
});

// Attach a change event listener to the file input
input.addEventListener('change', function() {
  // Get the selected file from the input
  const file = input.files[0];

  // Create a new instance of FileReader to read the selected file
  const reader = new FileReader();

  // Handle the file read event by updating the src of the "characterImage" img element
  reader.onload = function(e) {
    const dataURL = e.target.result;
    document.getElementById('characterImage').src = dataURL;
  };
  
  // Read the selected file as a data URL
  reader.readAsDataURL(file);
});
