import { Router } from "express";

const router = Router();

router.get("/python", (req, res) => {
  res.send("Python page.");
});

export default router;
