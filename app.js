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

// 13 Template Generator Functions (No raw code blocks, 100% verified working images)
const templateGenerators = {
  minimalist: (s) => `<div align="center">

# 💫 Halo, Saya ${s.fullName || 'Developer'}
### ${s.role || 'Software Engineer'}

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${s.username}&label=Profile%20Views&color=0e75b6&style=flat" alt="Views" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/github/followers/${s.username}?style=flat&color=333333&logo=github" alt="Followers" /></a>
</p>

---

### 👨‍💻 Tentang Saya

> *"Simplicity is the soul of efficiency." — Austin Freeman*

- 🔭 Fokus saat ini: **${s.bio}**
- 🌱 Mendalami: **Arsitektur Cloud, Clean Architecture, dan Sistem Terdistribusi**
- 💬 Terbuka untuk diskusi seputar: **TypeScript, React, Node.js, PHP/Laravel, dan Desain API**
- ⚡ Moto: **Mengubah ide kompleks menjadi kode yang rapi, modular, dan teruji.**

---

### 🛠️ Keahlian & Teknologi

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📊 Statistik Aktivitas GitHub

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=${s.theme}" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=${s.theme}" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=${s.theme}&hide_border=true" alt="Streak" width="96%" />
</p>

---

<p align="center">
  ⭐ <b>Terima kasih telah berkunjung! Berikan bintang (Star) jika bermanfaat.</b> ⭐
</p>

</div>`,

  cyberpunk: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=180&section=header&text=⚡%20CYBERNETIC%20OPERATOR%20⚡&fontSize=38&fontAlignY=38&animation=twinkling&fontColor=ffffff" width="100%" />

<h2 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00FF9D&center=true&vCenter=true&random=false&width=650&lines=HELLO+WORLD%2C+I'M+${encodeURIComponent((s.fullName || 'CYBER_OPERATOR').toUpperCase())};${encodeURIComponent((s.role || 'FULL-STACK ENGINEER').toUpperCase())};BUILDING+THE+FUTURE+OF+THE+WEB;SYSTEM.STATUS+%3D+ONLINE" alt="Typing SVG" />
</h2>

<p align="center">
  <a href="https://github.com/${s.username}">
    <img src="https://komarev.com/ghpvc/?username=${s.username}&label=CYBER_VISITORS&color=00FF9D&style=for-the-badge" alt="Visitors" />
  </a>
  <a href="https://github.com/${s.username}">
    <img src="https://img.shields.io/github/followers/${s.username}?style=for-the-badge&logo=github&color=00e5ff&labelColor=000000" alt="Followers" />
  </a>
  <a href="https://linkedin.com">
    <img src="https://img.shields.io/badge/NEURAL_LINK-000000?style=for-the-badge&logo=linkedin&logoColor=00e5ff" alt="LinkedIn" />
  </a>
</p>

---

### 🛡️ System Specifications

| Matrix Attribute | Telemetry Value |
| :--- | :--- |
| 🧑‍🚀 **Operator Tag** | **${s.fullName || 'Limzen'}** (${s.role || 'Cyber Specialist'}) |
| 🌐 **Protocol Focus** | ${s.bio || 'High-Velocity Web Applications'} |
| 🔋 **Status** | Online • Ready for Collaboration |
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

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=radical" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=radical" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=radical&hide_border=true" alt="Streak" width="96%" />
</p>

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,24,30&height=100&section=footer" width="100%" />

</div>`,

  fullstack: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,14,24,30&height=180&section=header&text=Full-Stack%20Software%20Engineer&fontSize=38&animation=fadeIn" width="100%" />

# 👋 Halo, Dunia! Saya ${s.fullName || 'Developer'}
### ${s.role || 'Full-Stack Developer'}

<p align="center">
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

</div>

---

### 🌟 Ringkasan Profil
- 💻 ${s.bio}
- 🚀 Spesialisasi utama pada ekosistem **TypeScript, React/Next.js, Vue.js, PHP/Laravel, dan Node.js**.
- 🛠️ Senang mendesain arsitektur API terstruktur, optimasi query database, dan otomatisasi CI/CD.
- 🎯 Misi utama: Menghadirkan solusi digital yang menyelesaikan masalah nyata dengan performa optimal.

---

### 🧰 Ekosistem Teknologi & Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📈 Statistik & Aktivitas GitHub

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=merko" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=merko" alt="Languages" width="48%" />
</div>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=merko&hide_border=true" alt="Streak" width="96%" />
</p>

---

<p align="center">
  ⭐ <b>Jangan ragu untuk saling bertukar bintang (Star) dan berkolaborasi!</b> ⭐
</p>`,

  terminal: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=cylinder&color=050505&height=140&section=header&text=CONSOLE%20STATUS:%20AUTHENTICATED&fontSize=30&fontColor=00ff9d" width="100%" />

# ⚡ ${s.fullName || 'Operator'} // Systems Developer
### ${s.role || 'High-Performance Web Architect'}

<p align="center">
  <img src="https://img.shields.io/badge/TERMINAL-ONLINE-00ff9d?style=for-the-badge&logo=gnubash&logoColor=black" alt="Status" />
  <img src="https://img.shields.io/badge/SECURITY-CLEARED-00e5ff?style=for-the-badge&logo=shield" alt="Security" />
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/GITHUB-PROFILE-ffffff?style=for-the-badge&logo=github&logoColor=black" alt="GitHub" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/NETWORK-CONNECT-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>

</div>

---

### 🖥️ Command Center Profile

| Parameter | System Telemetry |
| :--- | :--- |
| **System Identity** | **${s.fullName || 'Limzen'}** (Core Engineer) |
| **Primary Environment** | Linux / Ubuntu / Docker Containers |
| **Operational Focus** | ${s.bio} |
| **Memory Allocation** | 100% Focused on Efficient & Modular Problem Solving |
| **Collaboration Status** | Open for Inquiries & Open-Source Projects |

---

### 🛠️ Weapon of Choice (Toolkit)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📊 Telemetry Diagnostics & Logs

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=github4" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=github4" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=dark&hide_border=true" alt="Streak" width="96%" />
</p>`,

  datascience: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=5,15,25&height=180&section=header&text=AI%20&%20Data%20Science%20Practitioner&fontSize=38&animation=fadeIn" width="100%" />

# 🧠 ${s.fullName || 'Limzen'} | AI & Data Science Practitioner
### ${s.role || 'Machine Learning Engineer'}

<p align="center">
  <a href="https://kaggle.com"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" alt="Kaggle" /></a>
  <a href="https://huggingface.co"><img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="HuggingFace" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🔬 Bidang Riset & Spesialisasi

> *"${s.bio}"*

| Domain Fokus | Teknologi & Metodologi |
| :--- | :--- |
| 🤖 **Generative AI & LLMs** | Fine-tuning, RAG (Retrieval-Augmented Generation), Agentic Workflows |
| 👁️ **Computer Vision** | Object Detection, Semantic Segmentation, Multimodal Embeddings |
| 📊 **Big Data & Analytics** | Pipeline ETL, Feature Store Engineering, Real-Time Model Inference |
| ⚡ **MLOps & Deployment** | Docker, FastAPI Model Serving, Triton, Model Monitoring |

---

### 🧪 Data Science & ML Toolkit

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="ML Toolkit" />
  </a>
</p>

---

### 📊 Statistik & Analisis Repositori

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=solarized" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=solarized" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=solarized&hide_border=true" alt="Streak" width="96%" />
</p>`,

  designer: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=12,24,30&height=180&section=header&text=✨%20${encodeURIComponent(s.fullName || 'Limzen')}%20✨&fontSize=38&animation=fadeIn" width="100%" />

# 🎨 ${s.fullName || 'Limzen'} | UI/UX Designer & Frontend Craftsman
<p><i>${s.bio}</i></p>

<p align="center">
  <a href="https://dribbble.com"><img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" alt="Dribbble" /></a>
  <a href="https://behance.net"><img src="https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white" alt="Behance" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 💡 Filosofi Desain & Fokus Kreatif

| Pilar Desain | Pendekatan & Eksekusi |
| :--- | :--- |
| 📱 **Antarmuka Berpusat pada Pengguna** | Tipografi bersih, hierarki visual yang jelas, tata letak grid responsif |
| 🔮 **Design Systems** | Komponen UI modular, token desain terstandarisasi, konsistensi multi-platform |
| ⚡ **Interaksi & Mikro-Animasi** | Transisi halus, respons haptic, dan pengalaman pengguna yang hidup |

---

### 🎨 Palet Desain & Stack Teknologi

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Creative Stack" />
  </a>
</p>

---

### 🌟 Statistik Repositori & Aktivitas

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=rose" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=rose" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=rose_pine&hide_border=true" alt="Streak" width="96%" />
</p>`,

  gamer: (s) => `<div align="center">

# 🎮 LEVEL UP: ${s.fullName || 'Player One'}
### ⚔️ ${s.role || 'Adventurer & Code Slayer'} • Rank: S-Tier

<img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="300px" alt="Gaming Anime Gif" />

<p align="center">
  <img src="https://img.shields.io/badge/HP-100%25-brightgreen?style=for-the-badge&logo=heart" alt="HP" />
  <img src="https://img.shields.io/badge/MANA-Infinity-blue?style=for-the-badge&logo=fire" alt="Mana" />
  <img src="https://img.shields.io/badge/EXP-99999%2F100000-orange?style=for-the-badge&logo=star" alt="EXP" />
  <img src="https://img.shields.io/badge/CLASS-FULLSTACK_MAGE-purple?style=for-the-badge" alt="Class" />
</p>

</div>

---

### 🎒 Inventory & Keahlian Khusus (Skills)

| Kategori Perlengkapan | Senjata & Mantra Utama |
| :--- | :--- |
| 🗡️ **Senjata Utama (Bahasa)** | \`TypeScript\`, \`JavaScript\`, \`PHP\`, \`Python\` |
| 🛡️ **Perisai & Armor (Framework)** | \`Next.js\`, \`React\`, \`Vue.js\`, \`Laravel\`, \`Tailwind CSS\` |
| 🧪 **Ramuan & Tools (Backend & DB)** | \`PostgreSQL\`, \`MySQL\`, \`Docker\`, \`Git\`, \`Redis\` |

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Inventory" />
  </a>
</p>

---

### 📊 Statistik Petualang (Guild Diagnostics)

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=onedark" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=onedark" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=onedark&hide_border=true" alt="Streak" width="96%" />
</p>`,

  indonesia: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,18,30&height=180&section=header&text=Halo%20Semua%20👋%20Saya%20${encodeURIComponent(s.fullName || 'Limzen')}&fontSize=36&animation=fadeIn" width="100%" />

### ${s.role || 'Full-Stack Developer'} • Berbasis di Indonesia 🇮🇩

<p align="center">
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/github/followers/${s.username}?style=for-the-badge&logo=github&color=333333" alt="Followers" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🇮🇩 Tentang Saya & Fokus Pengembangan
- 🔭 ${s.bio}
- 💡 Tertarik mendalam pada ekosistem **JavaScript/TypeScript, Vue/React, PHP/Laravel, dan Docker**.
- ☕ Selalu terbuka untuk diskusi teknis, kolaborasi proyek opensource, atau sekadar bertukar pengalaman santai!
- 📍 Berdomisili dan berkarya dari Indonesia 🇮🇩.

---

### 💻 Bahasa & Teknologi yang Sering Digunakan

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skill Icons" />
  </a>
</p>

---

### 📈 Statistik Aktivitas GitHub

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=${s.theme}" alt="GitHub Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=${s.theme}" alt="Top Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=${s.theme}&hide_border=true" alt="GitHub Streak" width="96%" />
</p>`,

  devops: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,6,15&height=180&section=header&text=DevOps%20&%20Cloud%20Architect&fontSize=38&animation=fadeIn" width="100%" />

# ☁️ ${s.fullName || 'Limzen'} | Cloud & DevOps Specialist
### Automating Infrastructure • Orchestrating Containers • Ensuring 99.99% Uptime

<p align="center">
  <img src="https://img.shields.io/badge/INFRASTRUCTURE-HEALTHY-brightgreen?style=for-the-badge&logo=prometheus" alt="Infra Health" />
  <img src="https://img.shields.io/badge/PIPELINE-PASSING-blue?style=for-the-badge&logo=githubactions" alt="Pipeline" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🚀 Spesialisasi Infrastruktur & Cloud

| Pilar DevOps | Teknologi & Implementasi |
| :--- | :--- |
| 🐳 **Kontainerisasi & Orkestrasi** | Docker, Kubernetes, Helm, Docker Compose |
| 🔄 **CI/CD & Otomasi Pipeline** | GitHub Actions, GitLab CI, ArgoCD (GitOps) |
| 🏗️ **Infrastructure as Code (IaC)** | Terraform, Ansible, CloudFormation |
| 📊 **Observabilitas & Logging** | Prometheus, Grafana, ELK Stack, OpenTelemetry |

---

### 🛠️ DevOps Toolkit

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="DevOps Toolkit" />
  </a>
</p>

---

### 📈 Metrik Aktivitas & Kontribusi

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=solarized_dark" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=solarized_dark" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=solarized_dark&hide_border=true" alt="Streak" width="96%" />
</p>`,

  mobile: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=3,14,24&height=180&section=header&text=Mobile%20App%20Craftsman&fontSize=38&animation=fadeIn" width="100%" />

# 📱 ${s.fullName || 'Limzen'} | Mobile Application Developer
### Crafting Fluid, Native & Cross-Platform Experiences for iOS & Android

<p align="center">
  <img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" alt="Play Store" />
  <img src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white" alt="App Store" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 📲 Kemampuan & Arsitektur Mobile

| Pilar Mobile | Keahlian Teknis |
| :--- | :--- |
| 🚀 **Cross-Platform** | Flutter (Dart), React Native (TypeScript) |
| 🍏 **Native Development** | Swift / SwiftUI (iOS), Kotlin / Jetpack Compose (Android) |
| 🔄 **State Management** | BLoC, Riverpod, Redux Toolkit, Zustand |
| 🗄️ **Local Storage & Offline** | SQLite, Hive, Room Database, Realm |

---

### 🧰 Mobile Stack & Tooling

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Mobile Stack" />
  </a>
</p>

---

### 📊 Statistik Aktivitas Repositori

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=vue-dark" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=vue-dark" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=vue-dark&hide_border=true" alt="Streak" width="96%" />
</p>`,

  synthwave: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,28,32&height=180&section=header&text=🌴%20SYNTHWAVE%20DEVELOPER%20🌴&fontSize=38&animation=fadeIn" width="100%" />

<h2 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&weight=400&size=16&pause=1000&color=FF007F&center=true&vCenter=true&random=false&width=650&lines=WELCOME+TO+THE+80S+GRID;OPERATOR%3A+${encodeURIComponent((s.fullName || 'LIMZEN').toUpperCase())};RETRO+CODE+SPECIALIST;READY+PLAYER+ONE" alt="Typing SVG" />
</h2>

<p align="center">
  <img src="https://img.shields.io/badge/RETRO-OUTRUN-ff007f?style=for-the-badge&logo=retroarch&logoColor=white" alt="Retro" />
  <img src="https://img.shields.io/badge/SYNTH-CYAN-00ffff?style=for-the-badge&logoColor=black" alt="Cyan" />
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/badge/STATION-${s.username.toUpperCase()}-9900ff?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/NEURAL_LINK-CONNECT-00e5ff?style=for-the-badge&logo=linkedin&logoColor=black" alt="LinkedIn" /></a>
</p>

</div>

---

### 🕹️ Arcade Status & Spesifikasi

| Channel | Data Status |
| :--- | :--- |
| 📼 **Operator Tag** | **${s.fullName || 'Limzen'}** (${s.role || 'Full-Stack Engineer'}) |
| 🎛️ **Frequency** | ${s.bio} |
| 🕹️ **Arcade High Score** | 999,999 Pts (Zero Server Downtime) |
| 🌆 **Aesthetic Mode** | Neon Magenta / Cyan Grid • Always Vibing |

---

### 🎛️ Synthesizer Skill Rack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skill Rack" />
  </a>
</p>

---

### 📈 Neon Grid Diagnostics

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=synthwave" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=synthwave" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=synthwave&hide_border=true" alt="Streak" width="96%" />
</p>`,

  bento: (s) => `<div align="center">

# 🍱 Bento Grid Portfolio — ${s.fullName || 'Limzen'}
### ${s.role || 'Full-Stack Developer'}

<p align="center">
  <a href="https://github.com/${s.username}"><img src="https://img.shields.io/github/followers/${s.username}?style=flat-square&logo=github&label=Followers&color=24292f" alt="Followers" /></a>
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 🍱 The Bento Matrix

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h3>🚀 Tentang Saya</h3>
      <p>${s.bio}</p>
      <br/>
      <b>📍 Lokasi:</b> Indonesia 🇮🇩<br/>
      <b>💼 Status:</b> Terbuka untuk Kolaborasi & Proyek<br/>
      <b>☕ Energi:</b> Kopi & Problem Solving
    </td>
    <td width="50%" valign="top">
      <h3>🎯 Fokus Saat Ini</h3>
      <ul>
        <li>Membangun platform SaaS dengan Next.js & Node.js.</li>
        <li>Optimasi arsitektur database PostgreSQL & Redis caching.</li>
        <li>Otomasi deployment dengan Docker & GitHub Actions.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <h3>🛠️ Ekosistem Teknologi & Bahasa</h3>
      <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
      </a>
    </td>
  </tr>
</table>

---

### 📊 Metrik & Aktivitas GitHub

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=tokyonight" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=tokyonight" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=tokyonight&hide_border=true" alt="Streak" width="96%" />
</p>`,

  student: (s) => `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=180&section=header&text=Junior%20Software%20Engineer&fontSize=38&animation=fadeIn" width="100%" />

# 🎓 Halo! Saya ${s.fullName || 'Limzen'}
### Aspiring Software Engineer • Informatics Student / Fresh Graduate

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-OPEN_TO_WORK-brightgreen?style=for-the-badge&logo=briefcase" alt="Open to Work" />
  <a href="https://linkedin.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:${s.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

### 📖 Tentang Saya & Perjalanan Belajar
- 🎓 ${s.bio}
- 💡 Tertarik mendalam pada **Web Development, Rekayasa Perangkat Lunak, dan Basis Data**.
- 🚀 Telah menyelesaikan berbagai proyek studi kasus (Frontend, RESTful API, & Database).
- 💼 **Mencari Peluang**: Magang (Internship) atau Posisi Junior Developer.

---

### 🛠️ Bahasa & Teknologi yang Dikuasai

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${s.techs.join(',')}&theme=dark" alt="Skills" />
  </a>
</p>

---

### 📈 Riwayat Kontribusi & Aktivitas Belajar

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${s.username}&theme=dracula" alt="Stats" width="48%" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${s.username}&theme=dracula" alt="Languages" width="48%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=${s.username}&theme=dracula&hide_border=true" alt="Streak" width="96%" />
</p>`
};

// Generate Markdown
function generateCurrentMarkdown() {
  const generator = templateGenerators[state.currentPreset] || templateGenerators.minimalist;
  return generator(state);
}

// Convert Markdown to basic HTML for visual preview
function renderMarkdownPreview(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Unordered list items
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Line breaks in paragraphs
  html = html.replace(/\n\n/g, '<br>');

  return html;
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
