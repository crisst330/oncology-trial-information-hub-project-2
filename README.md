# oncology-trial-information-hub-project-2

### CS 5610 Web Development | Project 2

## Project Objective

The Oncology Trial Information Hub is a full-stack web application designed to help users explore oncology clinical trial information and maintain personalized research notes. The project demonstrates a three-tier client/server architecture using JavaScript, Express.js, MongoDB, and Bootstrap while following MVC design principles.

The application consists of two primary features:

- Search Trials – browse and search oncology clinical trial records stored in MongoDB.
- Saved Trials – create, update, and delete personal research notes related to clinical trials.

This project was developed as part of CS 5610 Web Development at Northeastern University.

---

## Screenshot / Thumbnail

https://raw.githubusercontent.com/crisst330/oncology-trial-information-hub-project-2/main/frontend/images/thumbnail-project2-cs5610.png

---

## Google Slides

Add presentation link here.

---

## Live Video Demo

Add live demonstration link here.

---

## Features

### Search Trials (Student 1 — Timothy Criss Jr.)

- Search oncology clinical trial records
- Filter trial information using search criteria
- Display results using responsive Bootstrap cards
- Retrieve trial data through Express routes and MongoDB queries

### Saved Trials (Student 2 — Priamos Koumas)

- Create research notes for clinical trials
- Assign interest levels (High, Medium, Low)
- Update existing notes
- Delete saved notes
- Store notes permanently in MongoDB

---

## Pages

### Home Page

Serves as the application's landing page and provides users with a welcome message, an overview of the Oncology Trial Information Hub, and instructions on how to navigate and use the application's features.

### Search Trials

Allows users to browse and search oncology clinical trial records stored in MongoDB.

### Saved Trials

Allows users to create, update, and delete personal research notes associated with oncology clinical trials.

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- MongoDB Compass

### Development Tools

- Git
- GitHub
- Visual Studio Code
- ESLint

---

## Architecture

The application follows a three-tier architecture:

### Presentation Layer

Handles user interaction using HTML, CSS, Bootstrap, and client-side JavaScript.

### Application Layer

Express routes process requests and communicate between the frontend and database layers.

### Data Layer

MongoDB stores clinical trial information and user-created research notes.

### Application Flow

Frontend → Express Routes → Database Layer → MongoDB

---

## Project Structure

oncology-trial-information-hub-project-2/
├── db/
│   ├── myMongoDB.js
│   └── myNotesDB.js
├── frontend/
│   ├── data/
│   │   └── trials.json
│   ├── images/
│   │   ├── cancercommunity.jpg
│   │   └── icon.png
│   ├── js/
│   │   ├── homepage.js
│   │   ├── saved.js
│   │   └── search.js
│   ├── style/
│   │   └── styles.css
│   ├── index.html
│   ├── saved.html
│   └── search.html
├── node_modules/
├── routes/
│   ├── notes.js
│   └── trials.js
├── .gitignore
├── CS 5610 Project 2 Design Document.pdf
├── LICENSE
├── README.md
├── backend.js
├── eslint.config.js
├── package-lock.json
└── package.json

---

## Important Files

(file descriptions here)

---

## How to Use the Web Application

### How to Use "Search Trials"

1. Navigate to the Search Trials page.
2. Select search criteria using the available search filters.
3. Submit the search form.
4. Matching oncology clinical trials will be displayed.
5. Browse the returned trial information.

### How to Use "Saved Trials"

1. Navigate to the Saved Trials page from the navigation bar.
2. Fill out the form with a trial title, your notes, and your level of interest (High, Medium, or Low).
3. Click Save Note.
4. Your note will appear in the list below.
5. To edit a note, click Update and enter your revised text.
6. To remove a note, click Delete and confirm.

All notes are stored in the researchNotes MongoDB collection and persist across sessions.

---

## How to Run MongoDB Collection (Local Setup)

1. Start MongoDB locally.
2. Open MongoDB Compass.
3. Create database: clinicalTrials
4. Create collection: trials
5. Import: frontend/data/trials.json
6. Install dependencies:

npm install

7. Run application:

npm start

The Saved Trials feature uses a second collection called researchNotes in the same MongoDB database. This collection is automatically populated through the application and does not require importing any data.

---

## Contributors

### Student 1 — Timothy Criss Jr.

Implemented:

- Search Trials functionality
- Search page user interface
- Trial filtering logic
- Search result rendering
- Clinical trial dataset integration

### Student 2 — Priamos Koumas

Implemented:

- Saved Trials functionality
- Research note CRUD operations
- Notes user interface
- MongoDB integration for research notes
- Update and Delete functionality

---

## Authors

### Student 1 — Timothy Criss Jr.

Student Developer

### Student 2 — Priamos Koumas

Student Developer

---

## Class Reference

CS 5610 Web Development — Northeastern University

Instructor: John Alexis Guerra Gomez

Class Website:
https://johnguerra.co/lectures/webDevelopment_fall2025/04_Bootstrap/#/4/6/8

---

## Use of Generative AI

### Student 1 — Timothy Criss Jr. (Search Trials)

#### GenAI Usage

AI assistance was used primarily for:

- brainstorming and refining the search page layout and user experience for the Trial Catalog feature
- discussing frontend design choices using Bootstrap components and responsive layout concepts
- explaining three-tier client/server architecture concepts
- clarifying MVC responsibilities between routes, repository logic, and client-side rendering
- reviewing JavaScript event handling and DOM manipulation concepts
- discussing search form implementation approaches using dropdown filtering and HTTP GET requests
- helping explain MongoDB query flow and mock dataset organization
- assisting with debugging frontend/backend integration issues
- refining documentation wording and project descriptions
- providing conceptual guidance on repository structure

#### GenAI Tool Information

- Tool Used: ChatGPT
- Model Used: GPT-5.5
- Provider: OpenAI

---

### Student 2 — Priamos Koumas (Saved Trials)

#### GenAI Usage

AI assistance for the Saved Trials (researchNotes CRUD) feature was used for:

- Suggested using ObjectId for Update and Delete operations to target documents by `_id`
- Recommended document.getElementById for reading form field values
- Suggested express.json() middleware for parsing POST and PUT request bodies
- Recommended try/catch/finally patterns for MongoDB connection handling
- Recommended form submission patterns using preventDefault and fetch requests
- Assisted with debugging CRUD operations between the frontend, Express routes, and MongoDB
- Helped refine documentation and explain application architecture
- Verified and kept pages visually consistent using a shared teal/medical color theme and matching Bootstrap card components
- Suggested core MongoDB Node.js driver operations including ObjectId, updateOne with $set, and deleteOne for CRUD against the researchNotes collection
- Recommended frontend patterns covering form submission, fetch CRUD, and DOM rendering
- Recommended a CSS hover lift effect for the homepage instruction cards using transform and transition
  
#### GenAI Tool Information

##### Tool 1

- Tool Used: Claude
- Model Used: Claude Sonnet 4.6
- Provider: Anthropic

##### Tool 2

- Tool Used: GitHub Copilot
- Version: Latest VS Code Extension
- Provider: GitHub / Microsoft

#### GitHub Copilot Usage

GitHub Copilot was used to:

- Suggest JavaScript syntax and code completions
- Generate repetitive CRUD boilerplate code
- Assist with fetch request patterns
- Suggest MongoDB query syntax
- Help complete Express route handlers
- Provide inline documentation suggestions
- Assist with debugging and code refactoring

---

## Example Prompts Used

### Student 1 — Timothy Criss Jr. (Search Trials)

(Tim's prompts to be added)

### Student 2 — Priamos Koumas (Saved Trials)

- "How do I perform Update and Delete operations on MongoDB using the Node.js driver and ObjectId?"
- "How do I use updateOne with $set to update specific fields in a MongoDB document?"
- "How do I use deleteOne to remove a specific document from a MongoDB collection?"
- "How do I use document.getElementById to read form field values?"
- "How do I set up express.json() middleware for parsing POST and PUT request bodies?"
- "How do I structure a try/catch/finally pattern for MongoDB connection handling?"
- "How do I render dynamic Bootstrap cards with Edit and Delete buttons using vanilla JavaScript?"
- "How do I clear and re-render a list container with innerHTML before adding new elements?"
- "How do I handle a form submit event and send data to an Express backend via fetch?"
- "When is ObjectId required versus when can I filter by other fields in MongoDB?"
- "How do I align frontend collection and field names with a submitted team proposal?"
- "What is a unique feature to have with the Bootstrap cards on the homepage using CSS, and how should I go about implementing it?"

---

## Sources & References

- MDN — Sending Forms Through JavaScript
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
- MDN — Using the Fetch API
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN — Form submit event
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- MDN — Event.preventDefault()
  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- MongoDB Node.js Driver — CRUD Update / Modify Documents
  https://www.mongodb.com/docs/drivers/node/current/crud/update/modify/
- MongoDB Node.js Driver — CRUD Delete Documents
  https://www.mongodb.com/docs/drivers/node/current/crud/delete/
- MongoDB Manual — Remove Documents Tutorial
  https://www.mongodb.com/docs/manual/tutorial/remove-documents/?interface=driver&language=nodejs
- MongoDB Object ID Explained (Medium)
  https://medium.com/@kanishkaekanayaka/mongodb-object-id-275984d335fc
- Express.js — Routing Guide
  https://expressjs.com/en/guide/routing/
- Bootstrap 5 Documentation
  https://getbootstrap.com/docs/5.3/
- Bootstrap 5 Getting Started
  https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Bootstrap 5 Cards Component
  https://getbootstrap.com/docs/5.3/components/card/
- Bootstrap 5 Forms
  https://getbootstrap.com/docs/5.3/forms/overview/
- Bootstrap 5 Forms — Select
  https://getbootstrap.com/docs/5.3/forms/select/
- Bootstrap 5 Buttons Component
  https://getbootstrap.com/docs/5.3/components/buttons/
- Bootstrap 5 Navbar Component
  https://getbootstrap.com/docs/5.3/components/navbar/
- Bootstrap 5 Alerts Component
  https://getbootstrap.com/docs/5.3/components/alerts/
- Bootstrap 5 Tutorial — Ziad El Khoury Hanna (YouTube)
  https://www.youtube.com/watch?v=h5apE3E72wY
- YouTube Tutorial — CSS Hover Effects
  https://www.youtube.com/watch?v=GbFAsMZJLOs&t=282s
- YouTube Tutorial — Underline Hover Effect
  https://www.youtube.com/watch?v=wh1FKjZt_H8
- Stack Overflow — Underline on Hover in Navbar
  https://stackoverflow.com/questions/37195863/how-do-i-create-an-underline-when-i-hover-over-links-in-nav-bar
- Professor John Guerra — Node/Express/MongoDB Reference Repository
  https://github.com/john-guerra/nodeExpressMongoES6_apartmentListingsOrganizer
- CS 5610 Course Lectures
- CS 5610 Project Requirements
- CS 5610 Project 2 Design Document

---

## Dependencies

- Express.js
- MongoDB Node.js Driver
- Bootstrap 5
- Node.js
- ESLint

---

## License

MIT License — see LICENSE file for details.
