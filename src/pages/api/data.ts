import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { rows } = await pool.query('SELECT * FROM temp_jobs');
    res.status(200).json(rows);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

export default handler;
