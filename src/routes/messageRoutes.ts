import { Router, Request, Response } from "express";
import { Message } from "../models/Message";

const router = Router();

const messages: Message[] = [];
let currentId = 1;

/**
 * POST /messages
 * Adds a new message to the message board.
 */
router.post("/messages", (req: Request, res: Response): void => {
  const { content } = req.body;

  if (!content || typeof content !== "string" || content.trim() === "") {
    res
      .status(400)
      .json({
        error: "Message content is required and must be a non-empty string.",
      });
    return;
  }

  const newMessage: Message = {
    id: currentId++,
    content: content.trim(),
  };

  messages.push(newMessage);

  res
    .status(201)
    .json({ message: "Message added successfully.", data: newMessage });
});

/**
 * GET /messages
 * Retrieves all messages.
 */
router.get("/messages", (req: Request, res: Response): void => {
  res.json({ messages });
});

export default router;
