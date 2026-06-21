# oncology-trial-information-hub-project-2


## How to use the web application

## How to use "Saved Trials"

## How to use "Search Trials"

## How to run mongodb collection (local setup)

1. Start MongoDB locally.

2. Open MongoDB Compass.

3. Create database: clinicalTrials

4. Create collection: trials

5. Import: data/trials.json

6. Install dependencies: npm install

7. Run application: npm start

## Use of Generative AI

AI assistance was used primarily for:

* brainstorming and refining the search page layout and user experience for the Trial Catalog feature
* discussing frontend design choices using Bootstrap components and responsive layout concepts
* explaining three-tier client/server architecture concepts (frontend → Express routes → MongoDB workflow)
* clarifying MVC responsibilities between routes, repository logic, and client-side rendering
* reviewing and simplifying JavaScript event handling and DOM manipulation concepts for learning purposes
* discussing search form implementation approaches using dropdown-based filtering and HTTP GET requests
* helping explain MongoDB query flow and mock dataset organization using simulated clinical trial records
* assisting with debugging and explaining frontend/backend integration issues during development
* refining comments, documentation wording, and project descriptions for clarity and maintainability
* providing conceptual guidance on repository structure and aligning implementation decisions with the course rubric and proposal requirements

### GenAI Tool Information

* Tool Used: ChatGPT
* Model Used: GPT-5.5
* Provider: OpenAI

## Example Prompts Used

### Search Feature Planning Prompt

Help me design a simple search interface for simulated oncology trial records that follows a three-tier client/server architecture and stays within course scope.

### Frontend Rendering Prompt

Explain how to implement client-side rendering using JavaScript and Bootstrap cards without server-side rendering.

### Architecture Prompt

Explain how routes, repository files, and MongoDB connect together using the MVC pattern.

### Debugging Prompt

Review my search implementation and explain integration issues between frontend, Express routes, and MongoDB.

### Documentation Prompt

Help summarize and document the purpose of each file and architectural decision for this project.