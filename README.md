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

![URL](https://raw.githubusercontent.com/crisst330/oncology-trial-information-hub-project-2/main/frontend/images/thumbnail-project2-cs5610.png)

---

## O.T.I.H Demo Preview

![O.T.I.H Demo](./frontend/images/project-2-oncology-trial-information-hub-ezgif.com-video-to-gif-converter.gif)

---

## Google Slides

<!-- REVIEW: there's no blank line between the URL below and the --- under it, so
     Markdown reads the URL as a heading and renders it huge instead of showing a
     divider. Adding a blank line before the --- fixes it. -->
https://docs.google.com/presentation/d/1wryO1SExtAQJVouA0PnMZT1h5cG3DrpA9B0AhTrzYsM/edit?usp=sharing
---

## Live Video Demo

https://drive.google.com/file/d/1zsn3HsoM7yttw3fduYyRzDo3rF4oO5eu/view?usp=sharing

---

## Live Application
Production Deployment (Railway): https://oncology-trial-information-hub-project-2-production.up.railway.app/index.html

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

- MongoDB Atlas
- MongoDB Node.js Driver

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

### Deployment & Cloud Hosting
## Production Deployment
- The application was deployed using Railway for hosting and MongoDB Atlas for cloud database storage.

- Deployment architecture: Frontend (static assets) → Express.js Backend → MongoDB Atlas

### Deployment Configuration
- Environment variables were used to prevent exposing sensitive credentials in source code.
- Required environment variable: MONGODB_URI=<MongoDB Atlas connection string>
- The application reads deployment configuration through environment variables rather than hardcoded credentials.

### Database Initialization
- Because MongoDB Compass experienced TLS/connection issues during development and deployment testing, a scripted database import approach was implemented.

A custom import utility (scripts/importTrials.js) was created to automate loading the oncology trial dataset into MongoDB Atlas.

### Import process:
1. Connect to MongoDB Atlas using environment variables
2. Read frontend/data/trials.json
3. Insert records into the trials collection
4. Initialize production data automatically

This approach eliminated manual Compass imports and supported reproducible deployment setup using Railway.

---

## Project Structure

```text
oncology-trial-information-hub-project-2/
├── db/
│   ├── myMongoDB.js
│   └── myNotesDB.js
├── frontend/
│   ├── data/
│   │   └── trials.json
│   ├── images/
│   │   ├── cancercommunity.jpg
│   │   ├── icon.png
│   │   └── project-2-oncology-trial-information-hub-ezgif.com-video-to-gif-converter.gif
│   ├── js/
│   │   ├── homepage.js
│   │   ├── saved.js
│   │   └── search.js
│   ├── style/
│   │   └── styles.css
│   ├── index.html
│   ├── saved.html
│   └── search.html
├── routes/
│   ├── notes.js
│   └── trials.js
├── scripts/
│   └── importTrials.js
├── .gitignore
├── CS 5610 Project 2 Design Document.pdf
├── LICENSE
├── README.md
├── backend.js
├── eslint.config.js
├── package-lock.json
└── package.json
```
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

### How to Run the Application (Local Development)

Prerequisites

* Node.js installed
* MongoDB Atlas cluster configured
* MongoDB database user created
* Environment variable configured

Local Setup

1. Clone the repository:

git clone <repository-url>
cd oncology-trial-information-hub-project-2

2. Install dependencies: npm install

3. Create a .env file in the project root.

Add: MONGODB_URI=<your MongoDB Atlas connection string>

4. Import the oncology trial dataset into MongoDB Atlas.

Run: node --env-file=.env scripts/importTrials.js

This script:

* connects to MongoDB Atlas
* creates the clinicalTrials database if needed
* populates the trials collection from frontend/data/trials.json

5. Start the application: npm start

6. Open: http://localhost:3000

## Notes:
* Trial search data is stored in the trials collection.
* User-created notes are stored in the researchNotes collection.
* The researchNotes collection is created automatically during application use and does not require manual import.

⸻

### Production Deployment (Railway)

The production deployment uses:

- Railway (application hosting)
- MongoDB Atlas (cloud database)

Required deployment variable: MONGODB_URI=<your MongoDB Atlas connection string>

After deployment, initialize the database by running: node scripts/importTrials.js

inside the deployment environment or locally before connecting production to Atlas.

---

## Contributors

### Student 1 — Timothy Criss Jr.

Implemented:

- Search Trials functionality
- Search page user interface
- Trial filtering logic
- Search result rendering
- Clinical trial dataset integration

Endpoints (express routes):
- GET /api/trials
- GET /api/trials?condition=&phase=&status=&location=

### Student 2 — Priamos Koumas

Implemented:

- Saved Trials functionality
- Research note CRUD operations
- Notes user interface
- MongoDB integration for research notes
- Update and Delete functionality

Endpoints (express routes):
- GET /api/notes
- GET /api/notes/:id
- POST /api/notes
- PUT /api/notes/:id
- DELETE /api/notes/:id
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

AI assistance for the Search Trials feature and deployment workflow was used for:

- brainstorming and refining the Search page layout and overall user experience
- discussing frontend design decisions using Bootstrap components and responsive layout concepts- explaining three-tier client/server architecture concepts and request/response flow
- clarifying MVC responsibilities across routes, repository logic, MongoDB access, and client-side rendering
- reviewing JavaScript event handling and DOM manipulation concepts for frontend interactivity
- discussing implementation approaches for search form submission using dropdown filtering and HTTP GET requests
- explaining how frontend form selections connect to Express routes and MongoDB queries
- helping organize and structure simulated oncology clinical trial datasets for proof-of-concept testing
- assisting with debugging frontend/backend integration and data rendering behavior
- refining comments, documentation wording, and project descriptions for readability and maintainability
- providing conceptual guidance on repository structure and file responsibilities within the application
- explaining Bootstrap layout patterns and reusable UI component decisions

Additional deployment and database integration assistance included:

- explaining secure credential handling using environment variables and .gitignore
- discussing approaches to prevent exposing MongoDB usernames and passwords in source control
- helping diagnose MongoDB Atlas and MongoDB Compass connection issues during development
- explaining cloud-hosted MongoDB Atlas configuration and Node.js connection patterns
- generating and explaining a scripted data import approach using importTrials.js
- discussing how deployment platforms inject environment variables at runtime
- helping configure Railway deployment settings and application startup behavior
- assisting with production deployment troubleshooting and backend hosting configuration
- reviewing updates to README documentation to reflect final architecture and deployment decisions (from Render -> Railway)

Generated suggestions were reviewed, adapted, and manually implemented into the final project.

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

- “Help me design a simple but useful search interface for simulated oncology clinical trial records that follows a three-tier client/server architecture and uses client-side rendering instead of server-side rendering.”
- “Explain how routes, frontend JavaScript, MongoDB queries, and repository files connect together in an MVC application and describe the responsibility of each layer.”
- “Help me simplify the implementation of a search feature using the proposed dropdown filters I designed and HTTP GET requests without introducing concepts that were not taught in class.”
- “Review my Search page structure and suggest Bootstrap layout improvements while keeping the implementation appropriate for an introductory full-stack web development course.”
- “Explain JavaScript event handling and DOM manipulation step by step while helping me understand how form submission and rendering work.”
- “Help me debug frontend/backend integration issues and explain how data flows from Express routes into client-side rendered Bootstrap cards.”
- “Review my repository structure and help ensure my Search feature aligns with the project proposal and rubric requirements.”
- “Help me configure MongoDB Atlas for this project while keeping database credentials out of source control.”
- “Explain how to connect a Node.js Express application to MongoDB Atlas using environment variables.”
- “Help me troubleshoot MongoDB Atlas and MongoDB Compass connection issues and propose an alternative approach if necessary.”
- “Help me create a reusable script to import local JSON clinical trial data into MongoDB Atlas using the MongoDB Node.js driver.”
- “Explain how deployment platforms inject environment variables and how to adapt my application for production.”
- “Help me deploy this full-stack Express and MongoDB application using Railway while preserving the existing project structure.”
- “Review my deployment configuration and explain how to make my application work consistently between local and hosted environments.”
- “Help me update my README documentation to accurately reflect the final architecture, deployment decisions, and database setup.”

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
