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
        const trialsDiv = document.getElementById("notesList");
        for (const {name,title, notes: noteText} of trials) {
            const card = document.createElement("div");
            card.className = "card mb-3";
            card.innerHTML = `<div>${name} ${title} ${noteText}</div>`;
            trialsDiv.appendChild(card);  
        }
    };

    me.refreshTrials = async () => {
        const res = await fetch("/api/trials");
        if (!res.ok) {
            console.showError({msg: "Failed to fetch clinical trial data.", res.status, res.statusText});
            me.showError({msg: "Failed to fetch clinical trial data.", res});
            return;
        }
        const trials = await res.json();
        console.log("Received clinical trial data:", trials);
    };