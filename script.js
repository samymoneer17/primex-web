const cards = [
  {
    title: "Telegram",
    desc: "@YXXVI",
    url: "https://t.me/YXXVI"
  },
  {
    title: "Instagram",
    desc: "@cpuua",
    url: "https://instagram.com/cpuua"
  },
  {
    title: "XIT HUB",
    desc: "t.me/xithub",
    url: "https://t.me/xithub"
  },
  {
    title: "PRIMEX CORE",
    desc: "@vxwwo",
    url: "https://t.me/vxwwo"
  }
];

window.onload = () => {
  const container = document.getElementById("cardsContainer");
  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      <a href="${card.url}" target="_blank">Open</a>
    `;
    container.appendChild(div);
  });
};

function searchFiles() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultBox = document.getElementById('fileResults');
  if (!query || query.length < 2) {
    resultBox.innerHTML = '';
    return;
  }
  const matched = window.files.filter(file => file.keyword.toLowerCase().includes(query));
  if (matched.length === 0) {
    resultBox.innerHTML = '<p style="color:gray;">No matching files found.</p>';
  } else {
    resultBox.innerHTML = '';
    matched.forEach(file => {
      const item = document.createElement('div');
      item.className = 'file-item';
      item.innerHTML = `
        <img src="${file.image}" alt="preview">
        <h3>${file.title}</h3>
        <a href="${file.url}" target="_blank">Download</a>
      `;
      resultBox.appendChild(item);
    });
  }
}
