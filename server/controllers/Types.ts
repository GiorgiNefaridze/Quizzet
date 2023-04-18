import { Request, Response } from "express";

export interface IControllerProps {
  (req: Request, res: Response): void;
}
