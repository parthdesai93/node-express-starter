import { Router } from 'express';

const router = Router();

router.get('/:id', (req, res) => {
  let { id } = req.params;
  res.send({ data: 'hi from users, id is: ' + id });
});

export default router;
