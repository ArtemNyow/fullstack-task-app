import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const service = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await service.register(email, password);

      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
    return res.status(400).json({
      message: "Unknown error",
    });
  }
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await service.login(email, password);

      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
    return res.status(400).json({
      message: "Unknown error",
    });
  }
}
