import { supabase } from '../../../../lib/supabase';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

type LocationData = {
  city?: string;
  country_name?: string;
  region?: string;
  org?: string;
};

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';

  let location: LocationData = {};
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    location = await res.json();
  } catch (e) {
    console.error('Lokasi error:', e);
  }

  // Ambil session_id dari cookies
  const cookies = req.cookies;
  let sessionId = cookies.get('session_id')?.value;

  if (!sessionId) {
    sessionId = uuidv4();
  }

  // Simpan data ke Supabase
  await supabase.from('Detect').insert({
    session_id: sessionId,
    ip,
    city: location.city,
    country: location.country_name,
    region: location.region,
    org: location.org,
  });

  // Buat response JSON
  const response = NextResponse.json({
    sessionId,
    location: {
      city: location.city,
      country: location.country_name,
      region: location.region,
      org: location.org,
    },
  });

  // Set cookie jika belum ada
  if (!cookies.get('session_id')) {
    response.cookies.set('session_id', sessionId, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });
  }

  return response;
}
