import * as express from 'express';

import Invitation from '../models/Invitation';

const router = express.Router();

router.get('/get-user', (req, res) => {
  res.json({ user: req.user || null });
});

router.get('/user', async (req, res, next) => {
  try {
    const team = await Invitation.getTeamByToken({
      token: req.query.token,
    });

    res.json({ team });
  } catch (err) {
    next(err);
  }
});

router.post('/user/new', async (req, res, next) => {
  try {
    const team = await Invitation.removeIfMemberAdded({
      token: req.body.token,
      userId: req.user.id,
    });

    res.json({ team });
  } catch (err) {
    next(err);
  }
});

export default router;
