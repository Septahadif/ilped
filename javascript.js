addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const upgradeHeader = request.headers.get("Upgrade");
  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("Expected WebSocket", { status: 400 });
  }

  const webSocket = await fetch("wss://id.masjawa.my.id:443/vmess", {
    headers: request.headers,
  });

  return webSocket;
}
