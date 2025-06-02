import guardianOssThumb from "../assets/guardian-oss-thumb-2.png";
import blogThumb from "../assets/blog-thumb.png";

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
            description: "A blog for sharing engineering knowledge and experiences.",
            tech: ["React", "TypeScript", "MUI", "Netlify", "Wordpress"],
            thumb: blogThumb,
            live: "https://blog.woodwardwebdev.com",
            github: "https://github.com/loveliiivelaugh/blog"
        },
        // Starting to submit proposals on just these 2 apps for now
        // These have the highest business value and the most potential for growth
        // These will save businesses money and/or make them more money
        // {
        //     "name": "BookMe",
        //     "description": "A full-featured booking/appointment scheduling SaaS platform designed for small businesses, instructors, dentists, and service providers. It includes dynamic availability management, automated reminders, recurring billing with Stripe integration, and a polished user onboarding flow — all built with a scalable, component-driven frontend architecture.",
        //     "github": "",
        //     "live": "https://scheduletime.woodwardwebdev.com",
        //     "thumb": "https://picsum.photos/400",
        //     "tech": ["React", "Supabase", "Stripe", "Framer-Motion"]
        // },
        // todo: Complete these projects 
        // {
        //     "name": "Coffee Shop",
        //     "description": "A coffee shop ecommerce prototype built using the Shopify platform.",
        //     "github": "",
        //     "live": "https://coffeeshop.woodwardwebdev.com",
        //     "thumb": "https://picsum.photos/400"
        // },
        // {
        //     "name": "Openfitness",
        //     "description": "A nutrition and fitness tracking application.",
        //     "github": "",
        //     "live": "https://openfitness.woodwardwebdev.com",
        //     "thumb": "https://picsum.photos/400"
        // },
        // {
        //     "name": "Ai Chat",
        //     "description": "An embeddable AI-powered chat assistant SaaS designed to integrate seamlessly into any business website or platform. It connects to a custom knowledge base to provide accurate, context-aware responses, streamlining customer support and automating FAQ handling using natural language understanding.",
        //     "github": "",
        //     "live": "https://aichat.woodwardwebdev.com",
        //     "thumb": "https://picsum.photos/400",
        //     "tech": ["React", "Supabase", "Stripe", "OpenAI", "Google Gemini2.5", "Framer-Motion"]
        // },
        // {
        //     "name": "Stonetower Pizza",
        //     "github": "A pizza shop ecommerce prototype built on the Stripe platform. Includes built-in PWA POS.",
        //     "live": "https://stonetowerpizza.netlify.app",
        //     "thumb": "https://picsum.photos/400"
        // },
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
    ]
};