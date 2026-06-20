// Confirming that this JavaScript file successfully loaded in the browser within the console.
console.log("Hello from search.js");

// Creates a Search module that groups frontend search functionality together
function Search() {
    const me = {};

    // Responsible for displaying trial results to the webpage
    const renderTrials = (trials) => {
        
        // Retrieves the HTML containers where the results will be displayed
        const resultsDiv = document.getElementById("results-container");
        const resultsCount = document.getElementById("result");
        

    }
    return me;
}

// Initializes the 'Search' module
const mySearch = Search();

// Function to be implemented that will serve to handle search form submission and fetches data from the Express backend
mySearch.searchTrials();