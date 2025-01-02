# Message Board API
A simple RESTful API built with Node.js and TypeScript for posting and retrieving messages.

Features 
- POST /messages: Add a new message.
- GET /messages: Retrieve all messages.

Setup

1. Clone the repository:

   - git clone https://github.com/your-username/message-board.git
   - cd message-board

2. Install dependencies:

   - npm install

3. Start the server:

   - npm run dev

4. Access at http://localhost:3000.

Endpoints:

- POST /messages
  - Request Body: { "content": "Your message here" }
  - Response: { "id": 1, "content": "Your message here" }

- GET /messages 
  - Response: { "messages": [ { "id": 1, "content": "Your message here" } ] }

TEST:

- POST /messages:
```
curl -X POST http://localhost:3000/messages \
-H "Content-Type: application/json" \
-d '{"content": "This is a test message!"}'
```

- GET /messages:
```
curl -X GET http://localhost:3000/messages
```

Trade-Offs 
1. In-Memory Storage: Messages do not persist after server restarts.
2. No Authentication: Open access for simplicity.
3. Minimal Validation: Focus on basic functionality.

Future Improvements 
1. Add persistent storage (e.g., AWS DynamoDB).
2. Implement user authentication like AWS cognito.
3. Add testing and error logging.
