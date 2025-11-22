import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

//CORS 헤더 설정
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Preflight(OPTIONS) 요청 처리 
  // 브라우저가 요청하면 보내라고 200 OK를 전송
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // React에서 보낸 accessToken 받기
    const { accessToken } = await req.json()
    
    // 디스코드 API 호출
    const response = await fetch('https://discord.com/api/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    
    const data = await response.json()
    if (!response.ok) throw data

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || error }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})