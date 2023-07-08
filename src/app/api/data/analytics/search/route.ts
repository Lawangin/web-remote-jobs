import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../../lib/db';

async function logSearchTerm(term: string) {
  // Your actual logic to log the search term, e.g., saving it to a database
  await pool.query(`INSERT INTO search_logs (term) VALUES ($1);`, [term]);
}

// eslint-disable-next-line no-unused-vars
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { search_term } = await req.json();

    if (search_term) {
      // log the search term, replace this with your actual logic
      await logSearchTerm(search_term);

      return NextResponse.json({ message: 'Search term logged successfully' });
    }
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
