export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  // Basic dummy response
  let reply = "I'm LUX-00 ∞ Genesis Protocol. Here's my best guess: ";

  // Example "modding" logic placeholder
  if (message.toLowerCase().includes('call of duty')) {
    reply += "For COD, best loadout: M4, meta attachments, top perks.";
  } else if (message.toLowerCase().includes('minecraft')) {
    reply += "Use Chunkbase.com for seeds, Xray texture packs, or mods.";
  } else if (message.toLowerCase().includes('gta')) {
    reply += "For GTA: Money tips, best heist routes, car exploits.";
  } else {
    reply += "Ask about game mods, trophy guides, or money hustles!";
  }

  res.status(200).json({ reply });
}
