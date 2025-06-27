const input = document.getElementById('user-input');
const send = document.getElementById('send');
const chat = document.getElementById('chat');

send.onclick = async () => {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  chat.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  input.value = '';

  const res = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage })
  });

  const data = await res.json();
  chat.innerHTML += `<p><strong>LUX-00:</strong> ${data.reply}</p>`;
  chat.scrollTop = chat.scrollHeight;
};
