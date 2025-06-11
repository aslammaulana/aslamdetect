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
       const locationRes = await fetch(`https://ipapi.co/${ip}/json/`);
       location = await locationRes.json();
     } catch (err) {
       console.error('Gagal mengambil data lokasi:', err);
     }

  // Ambil cookie session_id
  const cookies = req.cookies;
  let sessionId = cookies.get('session_id')?.value;

  const responseBody = {
    sessionId: '',
    location: {
      city: location.city,
      country: location.country_name,
      region: location.region,
      org: location.org,
    },
  };

  const response = NextResponse.json(responseBody);

  // Jika belum ada session_id, buat dan set cookie
  if (!sessionId) {
    sessionId = uuidv4();
    response.cookies.set('session_id', sessionId, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });
  }

  // Tambahkan sessionId ke response
  responseBody.sessionId = sessionId;

  // Log ke server
  console.log({
    sessionId,
    ip,
    location: responseBody.location,
  });

  return response;
}
