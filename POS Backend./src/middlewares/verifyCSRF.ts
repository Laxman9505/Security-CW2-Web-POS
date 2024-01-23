/** @format */
import { NextFunction, Request, Response } from "express";

// Middleware to check CSRF token in the headers
export const checkCsrfToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const csrfToken = req.headers["csrf-token"] as string;
  if (!csrfToken || csrfToken !== req.csrfToken()) {
    return res.status(403).json({ error: "Invalid CSRF token" });
  }
  next();
};
