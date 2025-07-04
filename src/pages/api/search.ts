import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase.js';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q');
  
  if (!query || query.length < 2) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const { data, error } = await supabase
      .from('articulo')
      .select('id, titulo, categoria')
      .or(`titulo.ilike.%${query}%, contenido.ilike.%${query}%`)
      .limit(20);

    if (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: 'Error en la búsqueda' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(data || []), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error de conexión:', err);
    return new Response(JSON.stringify({ error: 'Error de conexión' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};