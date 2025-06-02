[![Netlify Status](https://api.netlify.com/api/v1/badges/b8b42069-6ac4-43ee-8168-6d3364d8926c/deploy-status)](https://app.netlify.com/sites/woodward/deploys)

# 🧑‍💻 Michael Woodward – Portfolio & Engineering Lab

Welcome to my personal portfolio — a professional space to showcase my work in **autonomous systems**, **AI infrastructure**, and **full-stack engineering**.

This site includes:

- A live resume and personal statement
- OSS project showcases
- Links to my blog, GitHub, and consulting services
- Contact form + calendly integration for easy scheduling

---

## 🛠️ Tech Stack

Built with:

- **React** + **TypeScript**
- **MUI (Material UI)** for component styling
- **Framer Motion** for animation and page transitions
- **Custom theme engine** with dark/light mode
- **Netlify** for static deployment
- **WordPress + REST API** for blog integration
- **Open Graph & SEO meta** optimization
- **Custom CLI & CMS config** (internal tools)

---

## 🧠 Features

- 🔁 **Dark/Light Mode**
- 🧵 **Framer Motion** page transitions
- 🧪 Live connection to blog articles from WordPress CMS
- 🌐 Fully responsive + accessible UI
- 🧩 Modular component structure
- ⚙️ Hook-based utility store for theme + preferences
- 🧠 Links to my live OSS: [Guardian OSS](https://github.com/loveliiivelaugh/guardian-oss)

---

## 📁 Structure

```

/public            → static assets & favicon
/src
├── components   → UI, layout, reusable elements
├── pages        → Home, Posts, Resume, Services
├── store        → Zustand utility store (dark mode, user prefs)
├── theme        → ThemeProvider + dynamic palette
└── assets       → Headshots, logos, thumbnails

````

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/loveliiivelaugh/portfolio-site.git
cd portfolio-site
pnpm install
````

### 2. Add your `.env.local`

You'll need:

```env
WORDPRESS_API_URL=https://your-wordpress-instance.com/wp-json/wp/v2
```

You can also optionally set up:

* `CALENDLY_LINK`
* `GITHUB_PROFILE_URL`
* `BLOG_BASE_URL`

### 3. Start local server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

---

## 📸 Screenshots

> (Add image links here for light and dark mode previews)

---

## 🔗 Links

* 🧠 Blog: [blog.woodwardwebdev.com](https://blog.woodwardwebdev.com)
* 🛠 OSS: [guardian-oss](https://github.com/loveliiivelaugh/guardian-oss)
* 💼 Resume: `/resume` route or PDF download
* 📬 Contact: `hello@woodwardwebdev.com`

---

## 🧙‍♂️ About Me

I'm Michael Woodward — a full stack engineer and systems architect focused on building **agentic automation**, **local-first AI tools**, and scalable, sovereign software.

I build in public. I ship fast. I share everything I learn.

---

## 🤝 License

This site is open-source under the MIT License.
Fork it, study it, or use it as a template for your own engineering lab.

---
