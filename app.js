// State Management
const state = {
  currentPreset: 'minimalist',
  username: 'Limzen',
  fullName: 'Limzen',
  role: 'Full-Stack Software Engineer',
  bio: 'Building scalable modern web applications and responsive architectures.',
  linkedin: 'username',
  email: 'contact@example.com',
  theme: 'tokyonight',
  techs: ['ts', 'js', 'react', 'nextjs', 'vue', 'tailwind', 'nodejs', 'express', 'php', 'laravel', 'postgres', 'docker', 'git']
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

// // 13 Template Generator Functions (No raw code blocks, 100% verified working images)
const templateGenerators = {
  minimalist: (s) => `<div align="center">

# 💫 Hi, I'm ${s.fullName || 'Limzen'}
### ${s.role || 'Software Engineer & Full-Stack Developer'}

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${s.username}&label=Profile%20Views&color=0e75b6&style=flat-square" alt="Profile Views" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 👨‍💻 About Me

> *"Simplicity is the soul of efficiency." — Austin Freeman*

- 🔭 Currently building **${s.bio || 'high-performance web applications and resilient backend services'}**.
- 🌱 Actively studying **Distributed Systems, Cloud Native Architecture, and Clean Code**.
- 💬 Ask me about **TypeScript, React, Node.js, PHP/Laravel, and API Design**.
- ⚡ Personal philosophy: **Turn complex problem domains into modular, testable, and elegant software.**

---

### 🛠️ Core Technologies & Ecosystem

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Core Technologies" />
  </a>
</p>

---

### 📊 GitHub Activity & Telemetry

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=${s.theme}" alt="GitHub Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=${s.theme}" alt="Top Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=${s.theme}&hide_border=true" alt="GitHub Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Thanks for stopping by! Feel free to star this repository or connect on LinkedIn.</i> ⭐</p>
</div>`,

  cyberpunk: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=180&section=header&text=⚡%20CYBERNETIC%20OPERATOR%20⚡&fontSize=38&fontAlignY=38&animation=twinkling&fontColor=ffffff" width="100%" />

<h2 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00FF9D&center=true&vCenter=true&random=false&width=650&lines=HELLO+WORLD%2C+I'M+${encodeURIComponent((s.fullName || 'LIMZEN').toUpperCase())};CYBERNETIC+FULL-STACK+ENGINEER;BUILDING+THE+FUTURE+OF+THE+WEB;SYSTEM.STATUS+%3D+ONLINE" alt="Typing SVG" />
</h2>

<p align="center">
  <a href="https://github.com/${s.username}">
    <img src="https://komarev.com/ghpvc/?username=${s.username}&label=CYBER_VISITORS&color=00FF9D&style=flat-square" alt="Visitors" />
  </a>
  <a href="https://github.com/${s.username}?tab=followers">
    <img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&logo=github&color=00e5ff&labelColor=000000" alt="Followers" />
  </a>
  <a href="https://linkedin.com">
    <img src="https://img.shields.io/badge/NEURAL_LINK-000000?style=flat-square&logo=linkedin&logoColor=00e5ff" alt="LinkedIn" />
  </a>
</p>

</div>

---

### 🛡️ Operator Telemetry & Parameters

| Metric Channel | Telemetry Value |
| :--- | :--- |
| 🧑‍🚀 **Operator Identifier** | **${s.fullName || 'Limzen'}** (${s.role || 'Full-Stack Cyber Specialist'}) |
| 🌐 **Protocol Focus** | ${s.bio || 'High-Velocity Web Applications & Reactive Architectures'} |
| 🔋 **System State** | Online • Ready for Open-Source Collaboration |
| 🎯 **Mission Objective** | Architecting resilient, high-speed software solutions |

---

### 🔮 Neural Skill Matrix

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skill Matrix" />
  </a>
</p>

---

### 📡 System Diagnostics & Metrics

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=radical" alt="GitHub Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=radical" alt="Top Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=radical&hide_border=true" alt="GitHub Streak" width="100%" />
</p>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=100&section=footer" width="100%" />
</div>`,

  fullstack: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,14,24,30&height=180&section=header&text=Full-Stack%20Software%20Engineer&fontSize=38&animation=fadeIn&fontColor=ffffff" width="100%" />

# 👋 Hi, I'm ${s.fullName || 'Limzen'}
### ${s.role || 'Full-Stack Engineer · Open Source · Indonesia 🇮🇩'}

<p align="center">
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=181717&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 🌟 About Me

- 💻 ${s.bio || 'Building modern, resilient, and high-performance web applications end-to-end.'}
- 🚀 Specialized in modern ecosystems: TypeScript, React/Next.js, Vue.js, PHP/Laravel, and Node.js.
- 🛠️ Focused on scalable API design, database query optimization, and CI/CD automation.
- 🎯 Mission: Deliver digital solutions that solve real-world problems with optimal performance.

---

### 🧰 Technology Ecosystem

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📈 GitHub Activity & Performance

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=merko" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=merko" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=merko&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Found this useful? A star means a lot — thank you!</i> ⭐</p>
</div>`,

  terminal: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=cylinder&color=0d1117&height=140&section=header&text=CONSOLE%20STATUS:%20AUTHENTICATED&fontSize=28&fontColor=00ff9d" width="100%" />

# ⚡ ${s.fullName || 'Limzen'} // Systems & Backend Engineer
### ${s.role || 'High-Performance Systems · Cloud Architecture · Security'}

<p align="center">
  <img src="https://img.shields.io/badge/TERMINAL-ONLINE-00ff9d?style=flat-square&logo=gnubash&logoColor=black" alt="Status" />
  <img src="https://img.shields.io/badge/SECURITY-CLEARED-00e5ff?style=flat-square&logo=shield" alt="Security" />
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/GITHUB-PROFILE-ffffff?style=flat-square&logo=github&logoColor=black" alt="GitHub" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/NETWORK-CONNECT-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/INBOX-TRANSMIT-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🖥️ Command Center Telemetry

| Parameter | System Telemetry |
| :--- | :--- |
| **Operator Identity** | **${s.fullName || 'Limzen'}** (Core Systems Engineer) |
| **Primary Environment** | Linux / Ubuntu Server / Container Orchestration |
| **Operational Focus** | ${s.bio || 'Microservices, High-Concurrency APIs, Reactive Architectures'} |
| **Diagnostic State** | All sub-routines operational • Zero critical bugs |
| **Collaboration Status** | Open for Inquiries, Architecture Audits & Open-Source |

---

### 🛠️ Weapon of Choice (Toolkit)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📊 Telemetry Diagnostics & Logs

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=github4" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=github4" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=dark&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p><i>[SYSTEM EVENT]: Session active. Leave a Star ⭐ to bookmark this station.</i></p>
</div>`,

  datascience: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=5,15,25&height=180&section=header&text=AI%20&%20Data%20Science%20Practitioner&fontSize=38&animation=fadeIn" width="100%" />

# 🧠 ${s.fullName || 'Limzen'} | AI & Data Science Practitioner
### ${s.role || 'Machine Learning Engineer · Data Architect · Researcher'}

<p align="center">
  <a href="https://kaggle.com"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=flat-square&logo=Kaggle&logoColor=white" alt="Kaggle" /></a>
  <a href="https://huggingface.co"><img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black" alt="HuggingFace" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 🔬 Research Domains & Specializations

> *"${s.bio || 'Transforming multidimensional data into actionable intelligence and production-grade AI systems.'}"*

| Focus Domain | Core Methodologies & Technologies |
| :--- | :--- |
| 🤖 **Generative AI & LLMs** | Fine-tuning, RAG (Retrieval-Augmented Generation), Agentic Workflows, LangChain |
| 👁️ **Computer Vision** | Object Detection, Semantic Segmentation, Multimodal Embeddings (CLIP, YOLO) |
| 📊 **Big Data & Analytics** | ETL Pipelines, Feature Engineering, Distributed Compute, DuckDB, Polars |
| ⚡ **MLOps & Deployment** | Docker, FastAPI Model Serving, ONNX Runtime, Triton, CI/CD Pipeline Monitoring |

---

### 🧪 Data Science & ML Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="ML Toolkit" />
  </a>
</p>

---

### 📊 Repository Statistics & Research Activity

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=solarized" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=solarized" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=solarized&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Support my open-source AI and data science research by giving a Star!</i> ⭐</p>
</div>`,

  designer: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=12,24,30&height=180&section=header&text=✨%20${encodeURIComponent(s.fullName || 'Limzen')}%20✨&fontSize=38&animation=fadeIn" width="100%" />

# 🎨 ${s.fullName || 'Limzen'} | UI/UX Designer & Frontend Craftsman
### ${s.role || 'Crafting interfaces that balance visual elegance, accessibility, and high performance.'}

<p align="center">
  <a href="https://dribbble.com"><img src="https://img.shields.io/badge/Dribbble-EA4C89?style=flat-square&logo=dribbble&logoColor=white" alt="Dribbble" /></a>
  <a href="https://behance.net"><img src="https://img.shields.io/badge/Behance-1769FF?style=flat-square&logo=behance&logoColor=white" alt="Behance" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 💡 Design Philosophy & Creative Pillars

| Design Pillar | Approach & Architectural Standard |
| :--- | :--- |
| 📱 **User-Centric UI/UX** | Clean typography, strict visual hierarchy, dynamic responsive fluid grid systems |
| 🔮 **Scalable Design Systems** | Modular component libraries, standardized design tokens, multi-platform consistency |
| ⚡ **Micro-Interactions** | Tactile feedback, 60fps buttery animations, deliberate state transitions |
| ♿ **Accessibility First** | WCAG AAA color contrast ratios, semantic HTML landmarks, keyboard navigation |

---

### 🎨 Creative Palette & Tech Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Creative Stack" />
  </a>
</p>

---

### 🌟 Repository Metrics & Designer Activity

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=rose" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=rose" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=rose_pine&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Appreciate handcrafted design systems? Drop a star to keep the inspiration alive!</i> ⭐</p>
</div>`,

  gamer: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=22,26,30&height=180&section=header&text=⚔️%20PLAYER%20PROFILE%20⚔️&fontSize=38&animation=fadeIn" width="100%" />

# 🎮 LEVEL 99: ${s.fullName || 'Limzen'}
### ${s.role || 'S-Tier Code Adventurer · Full-Stack Mage · Open Source Raider'}

<p align="center">
  <img src="https://img.shields.io/badge/HP-100%25-10b981?style=flat-square" alt="HP" />
  <img src="https://img.shields.io/badge/MANA-MAX-3b82f6?style=flat-square" alt="Mana" />
  <img src="https://img.shields.io/badge/EXP-99999%2F100000-f59e0b?style=flat-square" alt="EXP" />
  <img src="https://img.shields.io/badge/CLASS-FULLSTACK_ARCHMAGE-8b5cf6?style=flat-square" alt="Class" />
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Party%20Members" alt="Followers" /></a>
</p>

</div>

---

### 🎒 Character Sheet & Inventory

| Equipment Slot | Relics, Armament & Enchantments |
| :--- | :--- |
| 🗡️ **Primary Weaponry (Languages)** | \`TypeScript\`, \`JavaScript\`, \`PHP\`, \`Python\`, \`SQL\` |
| 🛡️ **Armor & Wardings (Frameworks)** | \`Next.js\`, \`React\`, \`Vue.js\`, \`Laravel\`, \`Tailwind CSS\` |
| 🧪 **Potions & Alchemical Tools (Infra & DB)** | \`PostgreSQL\`, \`MySQL\`, \`Redis\`, \`Docker\`, \`Git\`, \`Linux\` |

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Inventory" />
  </a>
</p>

---

### 🏆 Guild Quests & Campaign Milestones

- 🛡️ **Completed Raid**: Architected and deployed microservices handling real-time high-throughput requests.
- 📜 **Current Questline**: Speedrunning GitHub developer badges and optimizing open-source tools.
- 🎯 **Alliance Objective**: Collaborating with developers worldwide to create modern software magic.

---

### 📊 Guild Diagnostics (Stats & Streak)

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=onedark" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=onedark" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=onedark&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <b>Drop a Star to grant +100 EXP to this character build!</b> ⭐</p>
</div>`,

  indonesia: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,18,30&height=180&section=header&text=Halo%20Semua%20👋%20Saya%20${encodeURIComponent(s.fullName || 'Limzen')}&fontSize=36&animation=fadeIn" width="100%" />

# 🇮🇩 ${s.fullName || 'Limzen'} | Full-Stack Software Developer
### ${s.role || 'Software Engineer · Penggiat Open Source · Berbasis di Indonesia'}

<p align="center">
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Pengikut" alt="Followers" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🇮🇩 Profil Singkat & Status

| Parameter | Keterangan & Detail |
| :--- | :--- |
| 📍 **Domisili** | Indonesia 🇮🇩 |
| 💼 **Status Profesional** | Terbuka untuk Pekerjaan Full-Time, Remote, & Kolaborasi Open Source |
| ⚡ **Fokus Utama** | ${s.bio || 'Web Full-Stack, Arsitektur RESTful API, Optimasi Database & Container'} |
| ☕ **Filosofi Belajar** | Terus beradaptasi, menulis kode bersih (clean code), dan berbagi manfaat |

---

### 💻 Bahasa & Teknologi yang Sering Digunakan

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skill Icons" />
  </a>
</p>

---

### 📈 Statistik Aktivitas GitHub

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=${s.theme}" alt="GitHub Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=${s.theme}" alt="Top Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=${s.theme}&hide_border=true" alt="GitHub Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <b>Terima kasih sudah mampir! Jangan ragu untuk memberikan bintang (Star) pada repositori ini.</b> ⭐</p>
</div>`,

  devops: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,6,15&height=180&section=header&text=DevOps%20&%20Cloud%20Architect&fontSize=38&animation=fadeIn" width="100%" />

# ☁️ ${s.fullName || 'Limzen'} | Cloud & DevOps Specialist
### ${s.role || 'Automating Infrastructure · Orchestrating Containers · Ensuring 99.99% Uptime'}

<p align="center">
  <img src="https://img.shields.io/badge/INFRASTRUCTURE-HEALTHY-10b981?style=flat-square&logo=prometheus&logoColor=white" alt="Infra Health" />
  <img src="https://img.shields.io/badge/PIPELINE-PASSING-3b82f6?style=flat-square&logo=githubactions&logoColor=white" alt="Pipeline" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 🚀 Cloud Infrastructure & Architecture Matrix

| DevOps Pillar | Core Technologies & Implementations |
| :--- | :--- |
| 🐳 **Containerization & Orchestration** | Docker, Kubernetes (K8s), Helm, Docker Compose, MicroK8s |
| 🔄 **CI/CD & GitOps Automation** | GitHub Actions, GitLab CI, ArgoCD, Automated Lint & Test Pipelines |
| 🏗️ **Infrastructure as Code (IaC)** | Terraform, Ansible, Pulumi, Immutable Infrastructure Patterns |
| 📊 **Observability & Reliability** | Prometheus, Grafana, OpenTelemetry, ELK Stack, Distributed Tracing |
| ☁️ **Cloud Platforms** | AWS (EC2, S3, RDS, ECS), Google Cloud Platform (GCP), DigitalOcean |

---

### 🛠️ DevOps & Systems Tooling

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="DevOps Toolkit" />
  </a>
</p>

---

### 📈 Activity Metrics & Deployment Telemetry

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=solarized_dark" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=solarized_dark" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=solarized_dark&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Find these infrastructure templates useful? Hit the Star button to support continuous deployments!</i> ⭐</p>
</div>`,

  mobile: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=3,14,24&height=180&section=header&text=Mobile%20App%20Craftsman&fontSize=38&animation=fadeIn" width="100%" />

# 📱 ${s.fullName || 'Limzen'} | Mobile Application Developer
### ${s.role || 'Engineering Fluid, Resilient Native & Cross-Platform Experiences for iOS & Android'}

<p align="center">
  <img src="https://img.shields.io/badge/Google_Play-414141?style=flat-square&logo=google-play&logoColor=white" alt="Play Store" />
  <img src="https://img.shields.io/badge/App_Store-0D96F6?style=flat-square&logo=app-store&logoColor=white" alt="App Store" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 📲 Mobile Architecture & Engineering Matrix

| Engineering Pillar | Methodologies & Technologies |
| :--- | :--- |
| 🚀 **Cross-Platform Engineering** | Flutter (Dart), React Native (TypeScript), Expo Application Services |
| 🍏 **Native Platform Integration** | Swift / SwiftUI (iOS), Kotlin / Jetpack Compose (Android), Platform Channels |
| 🔄 **State Management** | BLoC, Riverpod, Redux Toolkit, Zustand, MobX |
| 🗄️ **Local Storage & Offline First** | SQLite, Hive, Room Database, WatermelonDB, Encrypted Storage |
| ⚡ **Cloud Services & Push Ops** | Firebase Cloud Messaging (FCM), Supabase, GraphQL, RESTful APIs |

---

### 🧰 Mobile Stack & Tooling

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Mobile Stack" />
  </a>
</p>

---

### 📊 Repository Activity & Mobile Diagnostics

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=vue-dark" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=vue-dark" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=vue-dark&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Enjoying mobile experiments and UI open-source projects? Drop a Star to stay updated!</i> ⭐</p>
</div>`,

  synthwave: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,28,32&height=180&section=header&text=🌴%20SYNTHWAVE%20DEVELOPER%20🌴&fontSize=38&animation=fadeIn" width="100%" />

<h2 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&weight=400&size=16&pause=1000&color=FF007F&center=true&vCenter=true&random=false&width=650&lines=WELCOME+TO+THE+80S+GRID;OPERATOR%3A+${encodeURIComponent((s.fullName || 'LIMZEN').toUpperCase())};RETRO+CODE+SPECIALIST;READY+PLAYER+ONE" alt="Typing SVG" />
</h2>

<p align="center">
  <img src="https://img.shields.io/badge/RETRO-OUTRUN-ff007f?style=flat-square&logo=retroarch&logoColor=white" alt="Retro" />
  <img src="https://img.shields.io/badge/SYNTH-CYAN-00ffff?style=flat-square&logoColor=black" alt="Cyan" />
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/STATION-${s.username.toUpperCase()}-9900ff?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/NEURAL_LINK-CONNECT-00e5ff?style=flat-square&logo=linkedin&logoColor=black" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/GRID_SIGNAL-TRANSMIT-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🕹️ Arcade Grid Status & Specifications

| Channel Frequency | Matrix Data Value |
| :--- | :--- |
| 📼 **Operator Identifier** | **${s.fullName || 'Limzen'}** (${s.role || 'Full-Stack Engineer & Retro Futurist'}) |
| 🎛️ **Frequency Band** | ${s.bio || 'High-Velocity Modern Web Development & Creative Frontend'} |
| 🕹️ **Arcade High Score** | 999,999 Pts (Zero Server Downtime • 100% Test Coverage) |
| 🌆 **Aesthetic Mode** | Neon Magenta / Cyan Grid • Always Vibing at 120 BPM |

---

### 🎛️ Synthesizer Skill Rack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skill Rack" />
  </a>
</p>

---

### 📈 Neon Grid Diagnostics (Telemetry)

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=synthwave" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=synthwave" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=synthwave&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Cruising through the neon grid? Drop a Star to keep the synthwave vibes going!</i> ⭐</p>
  <br/>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,28,32&height=100&section=footer" width="100%" />
</div>`,

  bento: (s) => `<div align="center">

# 🍱 Bento Grid Developer Profile — ${s.fullName || 'Limzen'}
### ${s.role || 'Full-Stack Software Engineer · Interface Craftsman · Open Source Contributor'}

<p align="center">
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&logo=github&label=Followers&color=24292f" alt="Followers" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🍱 The Bento Workspace Matrix

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h3>🚀 Profile & Philosophy</h3>
      <p>${s.bio || 'Building high-velocity web products from concept to deployment. Obsessed with sub-second page loads, modular component architectures, and clean code ergonomics.'}</p>
      <br/>
      <b>📍 Location:</b> Indonesia 🇮🇩<br/>
      <b>💼 Current Status:</b> Open for Full-Stack Roles & Collaboration<br/>
      <b>☕ Core Fuel:</b> Dark Roast Coffee & Continuous Iteration
    </td>
    <td width="50%" valign="top">
      <h3>🎯 Active Focus & R&D</h3>
      <ul>
        <li>Architecting scalable Next.js and Node.js web platforms.</li>
        <li>Optimizing database indexing (PostgreSQL) and Redis caching layers.</li>
        <li>Writing automated CI/CD workflows and container orchestration.</li>
        <li>Exploring local-first software and reactive real-time sync.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <h3>🛠️ Core Technology Ecosystem</h3>
      <br/>
      <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
      </a>
      <br/><br/>
    </td>
  </tr>
</table>

---

### 📊 Activity Metrics & GitHub Telemetry

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=tokyonight" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=tokyonight" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=tokyonight&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Enjoying this Bento Grid layout? Hit the Star button to bookmark this structure!</i> ⭐</p>
</div>`,

  student: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=180&section=header&text=Junior%20Software%20Engineer&fontSize=38&animation=fadeIn" width="100%" />

# 🎓 Hi, I'm ${s.fullName || 'Limzen'}
### ${s.role || 'Aspiring Software Engineer · Computer Science Graduate / Student'}

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-OPEN_TO_WORK-10b981?style=flat-square&logo=briefcase&logoColor=white" alt="Open to Work" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}?tab=followers"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&color=24292f&logo=github&label=Followers" alt="Followers" /></a>
</p>

</div>

---

### 📖 About Me & Engineering Journey

- 🎓 Computer Science / Informatics background with strong foundation in data structures & algorithms.
- 💡 Deep interest in **${s.bio || 'Modern Web Development, Distributed Systems, and Database Engineering'}**.
- 🚀 Completed multiple full-stack case studies spanning REST APIs, responsive UIs, and relational databases.
- 💼 **Available for**: Software Engineering Internships & Entry-Level / Junior Developer Roles.

---

### 📚 Featured Projects & Case Studies

| Project | Description | Core Stack |
| :--- | :--- | :--- |
| 🌐 **E-Commerce Platform** | Full-featured storefront with product catalog, cart persistence, and stripe checkout | React, Node.js, Express, PostgreSQL |
| 📋 **Collaborative Task Hub** | Kanban task tracker featuring real-time state updates, JWT auth, and role permissions | Vue.js, Laravel, Tailwind CSS, MySQL |
| 🤖 **Automated Telemetry Bot** | Scheduled notification worker with automated report summaries | Python, Telegram Bot API, Docker |

---

### 🛠️ Technical Toolkit & Languages

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📈 Learning Trajectory & GitHub Activity

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=dracula" alt="Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=dracula" alt="Languages" width="100%" />
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=dracula&hide_border=true" alt="Streak" width="100%" />
</p>

---

<div align="center">
  <p>⭐ <i>Your Star and feedback mean a lot for my software engineering journey! Thank you!</i> ⭐</p>
</div>`
};

// Generate Markdown
function generateCurrentMarkdown() {
  const generator = templateGenerators[state.currentPreset] || templateGenerators.minimalist;
  return generator(state);
}

// Convert Markdown to HTML for visual preview using marked.js (with fallback)
function renderMarkdownPreview(markdown) {
  if (typeof marked !== 'undefined' && marked.parse) {
    return marked.parse(markdown, { gfm: true, breaks: true });
  }

  let html = markdown;
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/^---$/gim, '<hr>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  html = html.replace(/\n\n/g, '<br>');
  return html;
}

// Update UI
function updateUI() {
  const md = generateCurrentMarkdown();
  markdownOutput.value = md;
  visualPreview.innerHTML = renderMarkdownPreview(md);
}

// Event Listeners for Preset Archetype Buttons
presetsSelector.addEventListener('click', (e) => {
  const btn = e.target.closest('.archetype-item') || e.target.closest('.preset-btn');
  if (!btn) return;

  document.querySelectorAll('.archetype-item, .preset-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentPreset = btn.dataset.preset;
  updateUI();
});

// Event Listeners for Form Inputs
inputGithub.addEventListener('input', (e) => {
  state.username = e.target.value.trim() || 'Limzen';
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

// Tech selector tags
techSelector.addEventListener('click', (e) => {
  const pill = e.target.closest('.tech-tag') || e.target.closest('.tech-pill');
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

// Copy to Clipboard with Animated State
btnCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(markdownOutput.value);
    showToast('Markdown copied to clipboard');
  } catch (err) {
    markdownOutput.select();
    document.execCommand('copy');
    showToast('Markdown copied to clipboard');
  }
  
  const originalText = document.getElementById('copy-text').textContent;
  document.getElementById('copy-text').textContent = 'Copied!';
  setTimeout(() => {
    document.getElementById('copy-text').textContent = originalText;
  }, 2000);
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
  showToast('Downloaded README.md');
});

// Smooth Scroll for Nav Badges Guide
document.getElementById('nav-badge-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('badges-guide').scrollIntoView({ behavior: 'smooth' });
});

// Initial Render and Lucide Refresh
updateUI();
if (window.lucide && typeof window.lucide.createIcons === 'function') {
  window.lucide.createIcons();
}
