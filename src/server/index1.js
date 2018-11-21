import express from 'express';

function handleError(err, _, res, __) {
  logger.error(err.stack);

  res.json({ error: err.message || err.toString() });
}

export default function api(server: express.Express) {
  server.use('/api/v1/public', publicApi, handleError);
  server.use('/api/v1/team-leader', teamLeaderApi, handleError);
  server.use('/api/v1/team-member', teamMemberApi, handleError);
}