import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

// eslint-disable-next-line no-unused-vars
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url as string, `http://${req.headers.host}`);
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = Number(url.searchParams.get('pageSize')) || 10;

    const offset = (page - 1) * pageSize;

    const { rows } = await pool.query(
      `SELECT * FROM temp_jobs LIMIT ${pageSize} OFFSET ${offset}`
    );

    const totalRowsResult = await pool.query('SELECT COUNT(*) FROM temp_jobs');
    const totalRows = parseInt(totalRowsResult.rows[0].count, 10);
    const totalPages = Math.ceil(totalRows / pageSize);

    return new Response(
      JSON.stringify({
        data: rows,
        pagination: {
          page: page,
          pageSize: pageSize,
          totalPages: totalPages,
          totalItems: totalRows,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(
        JSON.stringify({ error: 'An unexpected error occured.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  }
}
