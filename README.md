# Devablos-Project
The Chabot Project associated to AIN-B-2-Internet-Technologies-SS-24

## The Plan for Devablos Chatbot MVP 

The development of the Devablos Chatbot MVP will be structured around a monolithic architecture initially, excluding the use of technologies like `socket.io` and websockets. Our main focus at this stage will be the creation of a GUI that interfaces with OpenAI's API, serving as both a proof of concept and the Minimum Viable Product (MVP).

### Project Structure

```
branch: main
├── src/
│   ├── frontend/
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── ...
│   ├── backend/
│   │   ├── app.js
│   │   ├── lib/
│   │   ├── utils/
│   │   └── package.json
├── package.json
├── .gitignore
├── LICENSE
├── SECURITY.md
└── README.md
```

### Development Plan

1. **Initial Setup:**
   - Begin with setting up the client server to make it functional and connect it to the OpenAI API. This will act as both the proof of concept and the MVP.
   
2. **Task Distribution:**
   - Lex and Basant will begin by focusing on the chat interface.
   - The rest of the team will work tasks like: Implementing fallback strategies, setting up chat history for conversation longer than 20 messages, Microsoft Azure deployment and OpenAI's API implementation.

3. **Expansion Phase:**
   - Once the MVP is established and functioning, we will provide it to the professor and ask where to stear from there. Then we expand the architecture to include a backend server. This server will handle more complex operations and can incorporate sockets, encryption. Other advanced features, like adding additional pages like the home, about, and support pages. Or implementing features for managing conversation tasks.

4. **Collaboration and Timelines:**
   - We aim to complete the MVP by the end of next week, assuming prompt contributions from all team members.
   - The project will be hosted in a public GitHub repository and will remain free and open-source, aligning with our commitment to simplicity and accessibility. If needed, the later backend server will be in a seperate PRIVATE repository having it's own deployment, to keep the core logic and features confidential under a CSCL license.

This straightforward approach ensures that we quickly deliver a functional product while laying the groundwork for future enhancements. As noted by Marlis, the professor is flexible with our approach, allowing us to adjust our plans as needed based on our progress and findings.
