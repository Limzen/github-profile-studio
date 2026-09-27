// State Management
const state = {
  currentPreset: 'minimalist',
  username: 'octocat',
  fullName: 'Alex Morgan',
  role: 'Full-Stack Software Engineer',
  bio: 'Building high-performance modern web apps and distributed systems.',
  linkedin: 'alexmorgan',
  email: 'alex@example.com',
  theme: 'tokyonight',
  techs: ['ts', 'js', 'react', 'nextjs', 'vue', 'tailwind', 'nodejs', 'express', 'python', 'postgres', 'docker', 'git']
};

// DOM Elements
const presetsSelector = document.getElementById('presets-selector');
const techSelector = document.getElementById('tech-selector');
const visualPreview = document.getElementById('visual-preview');
const codePreview = document.getElementById('code-preview');
const markdownOutput = document.getElementById('markdown-output');
const btnTabPreview = document.getElementById('btn-tab-preview');
const btnTabCode = document.getElementById('btn-tab-code');
const btnCopy = document.getElementById('btn-copy');
const btnDownload = document.getElementById('btn-download');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Form Input Elements
const inputGithub = document.getElementById('input-github');
const inputName = document.getElementById('input-name');
const inputRole = document.getElementById('input-role');
const inputBio = document.getElementById('input-bio');
const inputLinkedin = document.getElementById('input-linkedin');
const inputEmail = document.getElementById('input-email');
const inputTheme = document.getElementById('input-theme');

// Preset Templates Generator Functions
const templateGenerators = {
  minimalist: (s) => `# 💫 Hi, I'm ${s.fullName || 'Developer'}
### ${s.role || 'Software Engineer'}

<p align="left">
  <img src="https://komarev.com/ghpvc/?username=${s.username}&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile Views" />
  <a href="https://linkedin.com/in/${s.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

### 👨‍💻 About Me
- 🔭 I’m currently working on **${s.bio}**
- 🌱 I’m constantly learning **Scalable Cloud Systems & Clean Architecture**
- 💬 Ask me about **${s.techs.slice(0, 4).join(', ').toUpperCase()} and System Design**
- ⚡ Fun fact: **I turn coffee into clean, resilient code ☕**

---

### 🛠️ Tech Stack & Tools

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Tech Stack" />
  </a>
</p>

---

### 📊 GitHub Statistics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&theme=${s.theme}&hide_border=true&count_private=true" alt="GitHub Stats" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=${s.theme}&hide_border=true" alt="Top Languages" width="48%" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${s.username}&theme=${s.theme}&hide_border=true" alt="GitHub Streak" width="96%" />
</p>

---

<p align="center">
  <i>"Simplicity is the soul of efficiency." — Austin Freeman</i>
</p>`,

  cyberpunk: (s) => `<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=26&pause=1000&color=00FF9D&center=true&vCenter=true&random=false&width=650&lines=HELLO+WORLD%2C+I'M+${encodeURIComponent((s.fullName || 'CYBER_OPERATOR').toUpperCase())};${encodeURIComponent((s.role || 'FULL-STACK ENGINEER').toUpperCase())};BUILDING+THE+FUTURE+OF+THE+WEB;SYSTEM.STATUS+%3D+ONLINE" alt="Typing SVG" />
</h1>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=180&section=header&text=NEO%20NEXUS%20DEVELOPER&fontSize=42&fontAlignY=38&animation=twinkling&fontColor=ffffff" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/${s.username}">
    <img src="https://komarev.com/ghpvc/?username=${s.username}&label=CYBER_VISITORS&color=00FF9D&style=for-the-badge" />
  </a>
  <a href="https://linkedin.com/in/${s.linkedin}">
    <img src="https://img.shields.io/badge/NEURAL_LINK-000000?style=for-the-badge&logo=linkedin&logoColor=00e5ff" />
  </a>
</p>

\`\`\`yaml
identity:
  operator: ${s.fullName || 'Anonymous'}
  class: ${s.role || 'Cyber Operator'}
  mission: ${s.bio || 'Exploring new realms of web engineering'}
  status: Ready for Deployment ⚡
\`\`\`

### 🔮 Neural Skill Matrix

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" />
  </a>
</p>

---

### 📡 System Diagnostics & Metrics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&theme=radical&hide_border=true&bg_color=050505&title_color=00ff9d&icon_color=00e5ff&text_color=e0e0e0" width="49%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=radical&hide_border=true&bg_color=050505&title_color=00ff9d&text_color=e0e0e0" width="49%" />
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=100&section=footer" width="100%" />
</p>`,

  fullstack: (s) => `<div align="center">

# 👋 Hello, World! I'm ${s.fullName || 'Developer'}
### ${s.role || 'Full-Stack Developer'}

<p align="center">
  <a href="https://linkedin.com/in/${s.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

</div>

---

### 🌟 About Me
- 💻 ${s.bio}
- 🚀 Specialized in building robust, performant web applications.
- 🛠️ Currently focusing on cloud native microservices & modern UX.
- 🎯 Passionate about open source collaboration and clean code architecture.

---

### 🧰 Technologies & Ecosystem

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&perline=7" />
  </a>
</p>

---

### 📈 Activity & Insights

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&locale=en&theme=${s.theme}&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=${s.theme}&hide_border=true" width="48%" />
</div>

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${s.username}&theme=monokai&no-frame=true&no-bg=true&margin-w=4" />
</p>`,

  terminal: (s) => `\`\`\`bash
root@portfolio:~# whoami
${s.fullName || 'Operator'} - ${s.role || 'Software Architect'}

root@portfolio:~# cat /proc/user/status
Mission: ${s.bio}
Memory: 100% allocated to Problem Solving
Status: Online & Ready to Collaborate

root@portfolio:~# ls -la /skills/
drwxr-xr-x (${s.techs.join(', ')})

root@portfolio:~# curl -s https://api.github.com/users/${s.username} | jq '{repos: .public_repos, followers: .followers}'
\`\`\`

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&theme=terminal&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=terminal&hide_border=true" width="48%" />
</p>

\`\`\`bash
root@portfolio:~# ./contact.sh
[+] LinkedIn : https://linkedin.com/in/${s.linkedin}
[+] Email    : ${s.email}
[+] Status   : Connection closed.
\`\`\``,

  datascience: (s) => `# 🧠 ${s.fullName || 'AI Researcher'} | ${s.role || 'Data Scientist'}
> ${s.bio}

<p align="left">
  <a href="https://linkedin.com/in/${s.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" /></a>
</p>

---

### 🔬 Core Focus Areas
- 🤖 Generative AI, RAG Systems, & Agentic Architectures
- 📊 Big Data Analytics & Distributed ML Pipelines
- ⚡ Real-Time Model Inference & Production Deployment

---

### 🧪 Data & ML Toolkit

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" />
  </a>
</p>

---

### 📊 Repository Insights

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&theme=cobalt&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=cobalt&hide_border=true" width="48%" />
</p>`,

  designer: (s) => `<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=12,24,30&height=160&section=header&text=✨%20${encodeURIComponent(s.fullName || 'Designer')}%20✨&fontSize=38&animation=fadeIn" width="100%" />

  <p>🎨 ${s.role || 'UI/UX Designer & Frontend Engineer'} 💻</p>
  <p><i>${s.bio}</i></p>

  <p>
    <a href="https://linkedin.com/in/${s.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
    <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  </p>
</div>

---

### 🎨 Design & Code Palette

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" />
  </a>
</p>

---

### 🌟 Statistics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&theme=catppuccin_latte&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=catppuccin_latte&hide_border=true" width="48%" />
</p>`,

  gamer: (s) => `<div align="center">

# 🎮 LEVEL UP: ${s.fullName || 'Player One'}
### ⚔️ ${s.role || 'Adventurer & Code Slayer'} • Rank: S-Tier

<img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="280px" alt="Gaming Anime Gif" />

<p>
  <img src="https://img.shields.io/badge/HP-100%25-brightgreen?style=for-the-badge&logo=heart" />
  <img src="https://img.shields.io/badge/MANA-Infinity-blue?style=for-the-badge&logo=fire" />
  <img src="https://img.shields.io/badge/EXP-MAX-orange?style=for-the-badge&logo=star" />
</p>

</div>

---

### 🎒 Inventory & Spells (Skills)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" />
  </a>
</p>

---

### 🏆 Guild Diagnostics

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${s.username}&theme=onedark&no-frame=true&margin-w=4" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&theme=onedark&hide_border=true" width="48%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${s.username}&theme=onedark&hide_border=true" width="48%" />
</p>`,

  indonesia: (s) => `<div align="center">

# Halo Semua! 👋 Saya ${s.fullName || 'Developer Indonesia'}
### ${s.role || 'Full-Stack Web Developer'} • Berbasis di Indonesia 🇮🇩

<p align="center">
  <a href="https://linkedin.com/in/${s.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

</div>

---

### 🇮🇩 Tentang Saya
- 🔭 ${s.bio}
- 💡 Tertarik pada pengembangan web modern, arsitektur software, dan performa tinggi.
- ☕ Selalu terbuka untuk diskusi teknis, kolaborasi open source, atau sekadar bertukar pengalaman!
- 📍 Berdomisili di Indonesia 🇮🇩.

---

### 💻 Teknologi & Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" />
  </a>
</p>

---

### 📈 Statistik Aktivitas GitHub

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${s.username}&show_icons=true&locale=id&theme=${s.theme}&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${s.username}&layout=compact&theme=${s.theme}&hide_border=true" width="48%" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${s.username}&theme=${s.theme}&hide_border=true" width="96%" />
</p>

---

<p align="center">
  ⭐ <i>Jangan lupa beri bintang (Star) dan mari terhubung di GitHub!</i> ⭐
</p>`
};

// Generate Markdown
function generateCurrentMarkdown() {
  const generator = templateGenerators[state.currentPreset] || templateGenerators.minimalist;
  return generator(state);
}

// Convert Markdown to basic HTML for preview
function renderMarkdownPreview(markdown) {
  let html = markdown;

  // Code blocks ```yaml ... ``` or ```bash ... ```
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/<i>(.*?)<\/i>/g, '<em>$1</em>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Unordered list items
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Line breaks in paragraphs (simple conversion)
  html = html.replace(/\n\n/g, '<br>');

  return html;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Update UI
function updateUI() {
  const md = generateCurrentMarkdown();
  markdownOutput.value = md;
  visualPreview.innerHTML = renderMarkdownPreview(md);
}

// Event Listeners for Preset Buttons
presetsSelector.addEventListener('click', (e) => {
  const btn = e.target.closest('.preset-btn');
  if (!btn) return;

  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentPreset = btn.dataset.preset;
  updateUI();
});

// Event Listeners for Form Inputs
inputGithub.addEventListener('input', (e) => {
  state.username = e.target.value.trim() || 'octocat';
  updateUI();
});

inputName.addEventListener('input', (e) => {
  state.fullName = e.target.value.trim();
  updateUI();
});

inputRole.addEventListener('input', (e) => {
  state.role = e.target.value.trim();
  updateUI();
});

inputBio.addEventListener('input', (e) => {
  state.bio = e.target.value.trim();
  updateUI();
});

inputLinkedin.addEventListener('input', (e) => {
  state.linkedin = e.target.value.trim();
  updateUI();
});

inputEmail.addEventListener('input', (e) => {
  state.email = e.target.value.trim();
  updateUI();
});

inputTheme.addEventListener('change', (e) => {
  state.theme = e.target.value;
  updateUI();
});

// Tech selector pills
techSelector.addEventListener('click', (e) => {
  const pill = e.target.closest('.tech-pill');
  if (!pill) return;

  const tech = pill.dataset.tech;
  if (pill.classList.contains('active')) {
    pill.classList.remove('active');
    state.techs = state.techs.filter(t => t !== tech);
  } else {
    pill.classList.add('active');
    state.techs.push(tech);
  }
  updateUI();
});

// Tabs
btnTabPreview.addEventListener('click', () => {
  btnTabPreview.classList.add('active');
  btnTabCode.classList.remove('active');
  visualPreview.style.display = 'block';
  codePreview.style.display = 'none';
});

btnTabCode.addEventListener('click', () => {
  btnTabCode.classList.add('active');
  btnTabPreview.classList.remove('active');
  visualPreview.style.display = 'none';
  codePreview.style.display = 'block';
});

// Toast notification helper
function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Copy to Clipboard
btnCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(markdownOutput.value);
    showToast('Markdown copied to clipboard! 🎉');
  } catch (err) {
    markdownOutput.select();
    document.execCommand('copy');
    showToast('Markdown copied to clipboard! 🎉');
  }
});

// Download README.md file
btnDownload.addEventListener('click', () => {
  const blob = new Blob([markdownOutput.value], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'README.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded README.md! 🚀');
});

// Smooth Scroll for Nav Badges Guide
document.getElementById('nav-badge-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('badges-guide').scrollIntoView({ behavior: 'smooth' });
});

// Initial Render
updateUI();
