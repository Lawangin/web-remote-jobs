import pool from '../../../lib/db';

// eslint-disable-next-line no-unused-vars
export async function GET(req: Request) {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM temp_jobs ORDER BY "Date" DESC'
    );
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
