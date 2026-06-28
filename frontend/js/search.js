// Confirming that this JavaScript file successfully loaded in the browser within the console.
console.log("Hello from search.js");

// Creates a Search module that groups frontend search functionality together.
function Search() {
  const me = {};

  // Responsible for displaying trial results to the webpage.
  const renderTrials = (trials) => {
    // Retrieves the HTML containers where the results will be displayed.
    const resultsDiv = document.getElementById("results-container");
    const resultsCount = document.getElementById("results-count");

    // Clears previous search results before rendering new ones.
    resultsDiv.innerHTML = "";

    // Updates the total number of displayed records on the webpage.
    resultsCount.innerHTML = `Showing ${trials.length} result(s)`;

    // Loops through each trial object returned by the backend.
    for (const trial of trials) {
      // Creates a Bootstrap card for each trial.
      const card = document.createElement("div");
      card.className = "card trial-card mb-3";

      // Populates the card with trial data.
      card.innerHTML = `
        <div class="card-body">
          <h5>${trial.title}</h5>
          <p><strong>Condition:</strong> ${trial.condition}</p>
          <p><strong>Phase:</strong> ${trial.phase}</p>
          <p><strong>Status:</strong> ${trial.status}</p>
          <p><strong>Location:</strong> ${trial.location}</p>
          <p><strong>Sponsor:</strong> ${trial.sponsor}</p>
          <p>${trial.summary}</p>
        </div>
      `;

      // Adds the card into the results container.
      resultsDiv.appendChild(card);
    }
  };

  // Handles search form submission and fetches data from the Express backend server.
  me.searchTrials = async () => {
    // Gets the Search Form element.
    const form = document.querySelector("#search-form");

    // Creates an object from the form inputs.
    const formData = new FormData(form);

    // Extracts the selected values from the form.
    const condition = formData.get("condition");
    const phase = formData.get("phase");
    const status = formData.get("status");
    const location = formData.get("location");

    // Starts with the default route, which returns all trials.
    let url = "/api/trials";

    // Used to manually build the URL query string.
    let query = "";

    // Adds condition to the query string if selected.
    if (condition) {
      query += "condition=" + encodeURIComponent(condition);
    }

    // Adds phase to the query string if selected.
    if (phase) {
      if (query) {
        query += "&";
      }

      query += "phase=" + encodeURIComponent(phase);
    }

    // Adds status to the query string if selected.
    if (status) {
      if (query) {
        query += "&";
      }

      query += "status=" + encodeURIComponent(status);
    }

    // Adds location to the query string if selected.
    if (location) {
      if (query) {
        query += "&";
      }

      query += "location=" + encodeURIComponent(location);
    }

    // Attaches filters to the API endpoint if filters exist.
    if (query) {
      url = url + "?" + query;
    }

    // Fetches backend data from the Express route.
    const res = await fetch(url);

    // REVIEW: there's no res.ok check here, so if the server returns an error the
    // code still tries to render and the user sees nothing/an empty page. saved.js
    // handles this nicely with its res.ok + showError pattern; worth copying that.
    // Converts the JSON response into a JavaScript object.
    const data = await res.json();

    // Renders the returned trial records as cards.
    renderTrials(data.trials);
  };

  return me;
}

// Initializes the Search module.
const mySearch = Search();

// Handles the search form submission.
document.getElementById("search-form").addEventListener("submit", (event) => {
  // Prevents the page from refreshing.
  event.preventDefault();

  // Runs the trial search.
  mySearch.searchTrials();
});

// Handles the reset button click.
document.getElementById("reset-button").addEventListener("click", () => {
  // Clears the selected form values.
  document.getElementById("search-form").reset();

  // Reloads all trial records.
  mySearch.searchTrials();
});

// Loads all trials when the page first opens.
mySearch.searchTrials();
