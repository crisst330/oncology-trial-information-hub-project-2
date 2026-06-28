console.log("Hello from the frontend JS file!");
function SavedTrials() {
  const me = {};
  me.showError = ({ msg, res, type = "danger" } = {}) => {
    const main = document.querySelector("main");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    // REVIEW: this sets role="danger", which isn't a valid ARIA role, so screen
    // readers won't announce the alert. The color belongs in the class (already
    // handled above), and the role should just be "alert" -> alert.role = "alert".
    alert.role = type;
    alert.innerText = `${msg} ${res.status} ${res.statusText}`;
    main.prepend(alert);
  };

  const renderNotes = (notes) => {
    const notesDiv = document.getElementById("notesList");
    for (const { _id, title, notes: noteText, interestLevel } of notes) {
      const card = document.createElement("div");
      card.className = "card trial-card mb-3";
      card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${noteText}</p>
                    <p class="card-text">Interest Level: ${interestLevel}</p>
                    <button class="btn btn-primary edit-btn">Update</button>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </div>
            `;
      card.querySelector(".edit-btn").addEventListener("click", () => {
        const updatedNote = prompt("Edit your note:", noteText);
        if (updatedNote !== null) {
          me.updateNote(_id, { title, notes: updatedNote, interestLevel });
        }
      });
      card.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this note?")) {
          me.deleteNote(_id);
        }
      });
      notesDiv.appendChild(card);
    }
  };

  me.refreshNotes = async () => {
    const res = await fetch("/api/notes");
    if (!res.ok) {
      console.error(
        "Failed to fetch research notes.",
        res.status,
        res.statusText,
      );
      me.showError({ msg: "Failed to fetch research notes.", res });
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
  async function sendNote() {
    const note = {
      title: document.getElementById("noteTitle").value,
      notes: document.getElementById("noteText").value,
      interestLevel: document.getElementById("interestLevel").value,
    };
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        console.error(
          "Failed to save note.",
          response.status,
          response.statusText,
        );
        me.showError({ msg: "Failed to save note.", res: response });
        return;
      }
      console.log("Note saved successfully.");
      form.reset();
      me.refreshNotes();
    } catch (e) {
      console.error(e);
    }
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendNote(event);
  });

  me.deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.error(
          "Failed to delete note.",
          response.status,
          response.statusText,
        );
        me.showError({ msg: "Failed to delete note.", res: response });
        return;
      }
      console.log("Note deleted successfully.");
      me.refreshNotes();
    } catch (e) {
      console.error(e);
    }
  };

  me.updateNote = async (id, updatedNote) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
      if (!response.ok) {
        console.error(
          "Failed to update note.",
          response.status,
          response.statusText,
        );
        me.showError({ msg: "Failed to update note.", res: response });
        return;
      }
      console.log("Note updated successfully.");
      me.refreshNotes();
    } catch (e) {
      console.error(e);
    }
  };
  return me;
}
const mySavedTrials = SavedTrials();
mySavedTrials.refreshNotes();
