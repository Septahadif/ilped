export default {
  async fetch(request, env, ctx) {
    const upgrade = request.headers.get("Upgrade");
    if (upgrade !== "websocket") {
      return new Response("Expected WebSocket", { status: 400 });
    }

    const url = new URL(request.url);
    url.hostname = "id.masjawa.my.id"; // ganti dengan domain VPS-mu
    url.protocol = "https:";

    return fetch(new Request(url, request));
  }
}
