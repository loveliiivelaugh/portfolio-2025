import guardianOssThumb from "../assets/guardian-oss-thumb-2.png";
import blogThumb from "../assets/blog-thumb2.png";
import bloggeraiThumb from "../assets/bloggerai-thumb.png";
import bookmeThumb from "../assets/bookme-thumb2.png";
import openfitnessThumb from "../assets/openfitness-thumb.png";
import stonetowerPizzaThumb from "../assets/stonetower-pizza-thumb.png";

export const cms = {
    workExperience: [
        {
            company: "Discover Financial Services, Chicago, Illinois",
            position: "Application Engineer",
            period: "September 2024 - Current",
            details: [
                "Develop features using TypeScript, React, Redux, and GraphQL",
                "Implement microfrontend and microservices architecture.",
                "Write testable, high-quality code with 90%+ coverage w/React-Testing-Library, Jest, and Vitest.",
                "Participate in agile development, daily standups, and code reviews.",
                "Provide mentorship to junior engineers.",
                "Adhere to CI/CD Code Quality checks.",
            ],
            links: {
                companySite: "",
                linkedin: ""
            }
        },
        {
            company: "Spectrum, Austin, Texas",
            position: "JavaScript Developer",
            period: "June 2022 - September 2024",
            details: [
                "Develop enterprise applications automating field technician processes.",
                "Build seamless UI/UX using React.",
                "Convert Python to JavaScript and develop backend services with Node.js.",
                "Implement user validation rules to ensure data integrity.",
            ],
            links: {
                companySite: "",
                linkedin: ""
            }
        },
        {
            company: "3vue, Woodridge, Illinois",
            position: "Front End React Web Developer",
            period: "July 2021 - April 2022",
            details: [
                "Develop business intelligence applications for health and life sciences.",
                "Integrate data visualizations using the QlikSense API.",
                "Create a reusable design system improving development speed and consistency.",
            ],
            links: {
                companySite: "",
                linkedin: ""
            }
        }
    ],
    showcase: [
        {
            name: "Guardian OSS",
            slug: "guardian-oss",
            description: "An open-source, modular AI automation backend built with Bun, Hono, Supabase, and Qdrant. Designed for memory, inference routing, and task orchestration.",
            tech: ["Bun", "Hono", "Supabase", "Qdrant", "Ollama", "Zod", "TypeScript"],
            thumb: guardianOssThumb,
            // live: "https://github.com/loveliiivelaugh/guardian-oss",
            github: "https://github.com/loveliiivelaugh/guardian-oss"
        },
        {
            name: "Engineering Blog",
            slug: "michael-woodward-blog",
            description: "My blog for sharing engineering knowledge and experiences.",
            tech: ["React", "TypeScript", "MUI", "Netlify", "Wordpress"],
            thumb: blogThumb,
            live: "https://woodwardstudio.dev",
            github: "https://github.com/loveliiivelaugh/blog"
        },
        // Starting to submit proposals on just these 2 apps for now
        // These have the highest business value and the most potential for growth
        // These will save businesses money and/or make them more money
        {
            "name": "BloggerAI",
            "description": "AI and personal context driven automated blog content for WordPress.",
            "github": "",
            "live": "https://bloggerai.woodwardstudio.dev",
            "thumb": bloggeraiThumb,
            "tech": ["React", "Supabase", "Stripe", "Framer-Motion"],
            "slug": "bloggerai"
        },
        {
            "name": "BookMe",
            "description": `
                A full-featured booking/appointment scheduling SaaS platform 
                designed for small businesses, instructors, dentists, and service providers. 
                It includes dynamic availability management, automated reminders, 
                recurring billing with Stripe integration, and a polished user onboarding 
                flow — all built with a scalable, component-driven frontend architecture.
                Competitor to Calendly, but with a focus on small businesses and service providers.`,
            "github": "",
            "live": "https://booking.woodwardstudio.dev",
            // "thumb": "https://picsum.photos/400",
            "thumb": bookmeThumb,
            "tech": ["React", "Supabase", "Stripe", "Framer-Motion"],
            "slug": "bookme"
        },
        {
            "name": "Openfitness",
            "description": "A nutrition and fitness tracking application. Competition to MyFitnessPal.",
            "github": "",
            // "live": "https://openfitness.woodwardwebdev.com",
            "live": "",
            "thumb": openfitnessThumb,
            "tech": ["React", "Supabase", "Stripe", "Framer-Motion"],
            "slug": "openfitness"
        },
        {
            "name": "Stonetower Pizza",
            "description": "A single web app to manage inventory, orders, and payments for a small restaurant. Competitor to Toast POS.",
            "description2": "A pizza shop ecommerce prototype built on the Stripe platform. Includes built-in PWA POS.",
            // "live": "https://stonetowerpizza.netlify.app",
            "live": "",
            // "thumb": "https://picsum.photos/400",
            "thumb": stonetowerPizzaThumb,
            "tech": ["React", "Supabase", "Stripe", "Framer-Motion"],
            "slug": "stonetower-pizza"
        },
    ],
    docs: [
        {
            name: "Storybook",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
            description: [
                "Component library with live documentation",
                "UI contracts + behavior validation",
                "Integrated with tests and design systems",
            ],
            color: "#ff4785",
            href: "https://storybook.js.org/",
            "link": "https://storybook.woodwardwebdev.com"
        },
        {
            name: "Docusaurus",
            logo: "https://docusaurus.io/img/docusaurus_keytar.svg",
            description: [
                "Framework docs & architecture specs",
                "Perfect for onboarding engineers",
                "Versioned content with custom theming",
            ],
            color: "#2648FF",
            href: "https://docusaurus.io/",
            "link": "https://docs.woodwardwebdev.com"
        },
        {
            name: "Swagger",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
            description: [
                "Auto-generated API documentation",
                "Live endpoints and request builders",
                "Based on OpenAPI + Supabase contracts",
            ],
            color: "#85EA2D",
            href: "https://swagger.io/",
            "link": "https://swagger.io/"
        }
    ],
    posts: [
        {
            title: "👋 Hi, I'm Michael Woodward — Welcome to My Engineering Lab",
            date: "5/31/2025",
            readTime: 1,
            link: "https://woodwardstudio.dev/post/hi-im-michael-woodward-welcome-to-my-engineering-lab"
        },
        {
            title: "🛣️ My Learning Journey into Software Engineering (and How You Can Follow It Too)",
            date: "6/4/2025",
            readTime: 5,
            link: "https://woodwardstudio.dev/post/my-learning-journey-into-software-engineering-and-how-you-can-follow-it-too"
        },
        {
            title: "📊 Why I Built My Own Analytics + Observability Stack (for $10/month)",
            date: "6/4/2025",
            readTime: 4,
            link: "https://woodwardstudio.dev/post/why-i-built-my-own-analytics-observability-stack-for-10-month"
        },
        {
            title: "⚡️Migrating Away From Zapier: Why Self-Hosted Automation",
            date: "6/23/2025",
            readTime: 3,
            link: "https://woodwardstudio.dev/post/away-from-zapier-why-self-hosted-automation-with-n8n-is-the-smarter-long-term-move"
        },
        {
            title: "🧠 Beyond Automation: Unveiling the Strategic Value of Intelligent Systems",
            date: "9/15/2025",
            readTime: 2,
            link: "https://woodwardstudio.dev/post/beyond-automation-unveiling-the-strategic-value-of-intelligent-systems"
        },
    ]
};