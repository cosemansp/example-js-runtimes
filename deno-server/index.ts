import { serve } from 'https://deno.land/std@0.147.0/http/server.ts';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Jane' },
  { id: 4, name: 'Bob' },
];

function handler(req: Request): Response {
  const body = JSON.stringify(users);
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}

serve(handler);
