// Function to convert Base64 string to Blob

// Function to convert Base64 string to File object
export default function base64ToFile(base64String, fileName) {
  function base64ToBlob(base64StringBlob) {
    var byteCharacters = atob(base64StringBlob);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: "image/jpeg" });
    return blob;
  }
  var blob = base64ToBlob(base64String);
  var file = new File([blob], fileName, { type: "image/jpeg" });
  return file;
}

// Example usage
var base64String = "your_base64_string_here";
var fileName = "example.jpg"; // Provide the desired file name
var contentType = "image/jpeg"; // Specify the content type of the image

var file = base64ToFile(base64String, fileName);

console.log(file); // This will log the File object
