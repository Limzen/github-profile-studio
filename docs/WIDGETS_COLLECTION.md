# 🧩 Galeri Widget & Badge Profil GitHub

Kumpulan kode Markdown siap salin untuk mempercantik profil GitHub Anda. Cukup ganti teks `<YOUR_GITHUB_USERNAME>` dengan username GitHub Anda.

---

## 1. 🪪 Shields.io Social Badges

### Tipe Flat-Square
```markdown
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_USERNAME)
[![Twitter/X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/YOUR_USERNAME)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/YOUR_USERNAME)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@gmail.com)
[![Website](https://img.shields.io/badge/Personal_Site-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourwebsite.com)
```

---

## 2. ⚡ Skill Icons (Skillicons.dev)

Tampilkan ikon bahasa dan tools pemrograman secara otomatis tanpa perlu mencari logo satu per satu.

```markdown
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,vue,tailwind,nodejs,express,php,laravel,python,postgres,mysql,docker,git,linux&theme=dark" />
  </a>
</p>
```

> **Tips:** Anda bisa mengganti parameter `theme=dark` menjadi `theme=light`, atau mengatur jumlah ikon per baris dengan `&perline=8`.

---

## 3. 📊 GitHub Readme Stats

### Kartu Statistik Profil Utama
```markdown
<img src="https://github-readme-stats.vercel.app/api?username=<YOUR_GITHUB_USERNAME>&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub Stats" />
```

### Bahasa Pemrograman Teratas (Top Languages)
```markdown
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=<YOUR_GITHUB_USERNAME>&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
```

**Pilihan Tema Populer**:
- `tokyonight`
- `radical`
- `merko`
- `gruvbox`
- `onedark`
- `cobalt`
- `synthwave`
- `dracula`

---

## 4. 🔥 GitHub Readme Streak Stats

Menampilkan rentang hari berturut-turut Anda melakukan commit di GitHub.

```markdown
<img src="https://github-readme-streak-stats.herokuapp.com/?user=<YOUR_GITHUB_USERNAME>&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
```

---

## 5. 🏆 GitHub Profile Trophy

Menampilkan piala pencapaian GitHub berdasarkan jumlah stars, commits, followers, dll.

```markdown
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=<YOUR_GITHUB_USERNAME>&theme=monokai&no-frame=true&no-bg=true&margin-w=4" alt="Trophies" />
</p>
```

---

## 6. ✍️ Readme Typing SVG (Animasi Ketik Teks)

```markdown
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=38BDF8&center=true&vCenter=true&width=500&lines=Full-Stack+Web+Developer;Open-Source+Enthusiast;Problem+Solver" alt="Typing SVG" />
</p>
```

---

## 7. 🌊 Capsule Render (Header & Footer Gelombang Estetik)

### Header Waving Gradient
```markdown
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=180&section=header&text=Halo%20Semua%20👋&fontSize=40&animation=fadeIn&fontColor=ffffff" width="100%" />
```

### Footer Waving Gradient
```markdown
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%" />
```

---

## 8. 🐍 GitHub Contribution Snake Animation

Membuat animasi ular yang memakan kontribusi commit GitHub Anda.

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/<YOUR_GITHUB_USERNAME>/<YOUR_GITHUB_USERNAME>/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/<YOUR_GITHUB_USERNAME>/<YOUR_GITHUB_USERNAME>/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/<YOUR_GITHUB_USERNAME>/<YOUR_GITHUB_USERNAME>/output/github-contribution-grid-snake.svg">
</picture>
```
*(Catatan: Memerlukan workflow GitHub Actions `snk` berjalan di repositori profil Anda).*
