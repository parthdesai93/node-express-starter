import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({ data: 'index' });
});

router.post('/', (req, res) => {
  let { body } = req;
  res.send({ data: body }).status(200);
});

export default router;
