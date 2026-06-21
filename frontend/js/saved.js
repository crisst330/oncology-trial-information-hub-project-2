console.log("Hello from the frontend JS file!");
function SavedTrials() {
    const me = {};
    me.showError = ({msg, res, type = "danger"} = {}) => {
        const main = document.querySelector("main");
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.role = type;
        alert.innerText = `${msg} ${res.status} ${res.statusText}`;
        main.prepend(alert);
    };

    const renderNotes = (notes) => {
        const notesDiv = document.getElementById("notesList");
        for (const {title, notes: noteText, interestLevel} of notes) {
            const card = document.createElement("div");
            card.className = "card trial-card mb-3";
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${noteText}</p>
                    <p class="card-text">Interest Level: ${interestLevel}</p>
                </div>
            `;
            notesDiv.appendChild(card);
        }
    };

    me.refreshNotes = async () => {
        const res = await fetch("/api/notes");
        if (!res.ok) {
            console.error( "Failed to fetch research notes.", res.status, res.statusText);
            me.showError({msg: "Failed to fetch research notes.", res});
            return;
        }
        const data = await res.json();
        console.log("Received research notes:", data);
        const notesDiv = document.getElementById("notesList");
        notesDiv.innerHTML = "";
        renderNotes(data);
    };

    //https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
    //Source used
    const form = document.getElementById("noteForm");
    async function sendNote(event) {
        const note = {
            title: document.getElementById("noteTitle").value,
            notes: document.getElementById("noteText").value,
            interestLevel: document.getElementById("interestLevel").value
        };
        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(note)
            });
            if (!response.ok) {
                console.error("Failed to save note.", response.status, response.statusText);
                me.showError({msg: "Failed to save note.", res: response});
                return;
            }
            console.log("Note saved successfully.");
            form.reset();
            me.refreshNotes();
        } catch (e) {
            console.error(e);
        }
    }
    form.addEventListener("submit", event => {
        event.preventDefault();
        sendNote(event);
    });

    return me;
}
const mySavedTrials = SavedTrials();
mySavedTrials.refreshNotes();