const jose = require('jose');

export async function onRequest(context) {
    const e = jose.base64url.encode('abc123');
    const d = jose.base64url.decode(e);
    return new Response(e + ' >>> ' + d)
}