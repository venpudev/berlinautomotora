export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, request }) => {
  console.log("=== OG Image API Called ===");
  console.log("Full params object:", params);
  console.log("Request URL:", request.url);
  const { filename } = params;
  console.log(`Requested filename: ${filename}`);
  console.log(`Filename type: ${typeof filename}`);
  if (!filename) {
    console.log("ERROR: Filename is missing");
    return new Response("Filename missing", { status: 400 });
  }
  const safeFilename = filename.replace(/[^a-zA-Z0-9.\-_]/g, "");
  console.log(`Original filename: ${filename}`);
  console.log(`Safe filename: ${safeFilename}`);
  let imageUrl;
  if (safeFilename === "frontis-autoloa.webp" || safeFilename.includes("frontis-autoloa")) {
    const protocol = request.url.startsWith("https:") ? "https:" : "http:";
    const host = new URL(request.url).host;
    imageUrl = `${protocol}//${host}/${safeFilename}`;
    console.log("Local file detected, using local URL:", imageUrl);
  } else {
    imageUrl = `https://venpu-files.nyc3.cdn.digitaloceanspaces.com/283/${safeFilename}`;
    console.log("DigitalOcean file detected, using DO URL:", imageUrl);
  }
  console.log(`Constructed image URL: ${imageUrl}`);
  try {
    console.log("Attempting to fetch image...");
    const response = await fetch(imageUrl);
    console.log(`Fetch response status: ${response.status}`);
    console.log(`Fetch response ok: ${response.ok}`);
    if (!response.ok) {
      console.log("ERROR: Image not found or fetch failed");
      return new Response("Image not found", { status: 404 });
    }
    const buffer = await response.arrayBuffer();
    console.log(`Buffer size: ${buffer.byteLength} bytes`);
    let contentType = "image/jpeg";
    if (safeFilename.toLowerCase().endsWith(".webp")) {
      contentType = "image/webp";
    } else if (safeFilename.toLowerCase().endsWith(".png")) {
      contentType = "image/png";
    } else if (safeFilename.toLowerCase().endsWith(".gif")) {
      contentType = "image/gif";
    }
    console.log("Successfully returning image with headers:", {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000"
    });
    return new Response(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000"
      }
    });
  } catch (err) {
    console.log("CATCH ERROR:", err);
    return new Response("Error fetching image", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
