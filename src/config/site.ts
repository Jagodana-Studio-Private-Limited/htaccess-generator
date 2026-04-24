export const siteConfig = {
  name: ".htaccess Generator",
  title: ".htaccess Generator — Free Apache Config Builder Online",
  description:
    "Build a valid Apache .htaccess file instantly. Add HTTPS redirects, custom error pages, browser caching, gzip compression, and security rules — no Apache expertise needed.",
  url: "https://htaccess-generator.tools.jagodana.com",
  ogImage: "/opengraph-image",

  headerIcon: "Server",
  brandAccentColor: "#f59e0b",

  keywords: [
    ".htaccess generator",
    "apache htaccess",
    "htaccess file builder",
    "htaccess redirect generator",
    "apache config generator",
    "htaccess rules online",
    "htaccess gzip",
    "htaccess https redirect",
    "free htaccess tool",
  ],
  applicationCategory: "DeveloperApplication",

  themeColor: "#f97316",

  creator: "Jagodana",
  creatorUrl: "https://jagodana.com",
  twitterHandle: "@jagodana",

  socialProfiles: [
    "https://twitter.com/jagodana",
  ],

  links: {
    github: "https://github.com/Jagodana-Studio-Private-Limited/htaccess-generator",
    website: "https://jagodana.com",
  },

  footer: {
    about:
      "Free Apache .htaccess generator. Build redirect rules, set caching headers, enable gzip, and add security hardening — all in your browser.",
    featuresTitle: "Features",
    features: [
      "Force HTTPS redirect",
      "Browser caching rules",
      "Gzip compression",
      "Security headers",
      "Custom error pages",
      "Hotlink protection",
    ],
  },

  hero: {
    badge: "Free Apache Config Builder",
    titleLine1: "Generate Your",
    titleGradient: ".htaccess File",
    subtitle:
      "Build a production-ready Apache .htaccess configuration in seconds. Toggle rules on or off, add custom redirects, and copy the result — no Apache expertise needed.",
  },

  featureCards: [
    {
      icon: "🔒",
      title: "HTTPS & Redirects",
      description:
        "Force HTTPS, add or remove www, and create 301/302 redirect rules for any path.",
    },
    {
      icon: "⚡",
      title: "Performance Rules",
      description:
        "Enable gzip compression and set browser caching expiry for images, CSS, and JS.",
    },
    {
      icon: "🛡️",
      title: "Security Hardening",
      description:
        "Add X-Frame-Options, block bad bots, enable hotlink protection, and disable directory listing.",
    },
  ],

  relatedTools: [
    {
      name: "Security Headers Generator",
      url: "https://security-headers-generator.tools.jagodana.com",
      icon: "🛡️",
      description: "Generate HTTP security headers for any web server.",
    },
    {
      name: "CORS Headers Generator",
      url: "https://cors-headers-generator.tools.jagodana.com",
      icon: "🌐",
      description: "Build correct CORS headers for your API endpoints.",
    },
    {
      name: "Robots.txt Generator",
      url: "https://robots-txt-generator.tools.jagodana.com",
      icon: "🤖",
      description: "Create a robots.txt file with correct crawl rules.",
    },
    {
      name: "Meta Tag Generator",
      url: "https://meta-tag-generator.tools.jagodana.com",
      icon: "🏷️",
      description: "Generate SEO meta tags and Open Graph markup.",
    },
    {
      name: "Sitemap Checker",
      url: "https://sitemap-checker.tools.jagodana.com",
      icon: "🔍",
      description: "Discover and validate sitemaps on any website.",
    },
    {
      name: "HTTP Status Debugger",
      url: "https://http-status-debugger.tools.jagodana.com",
      icon: "🔧",
      description: "Decode HTTP status codes and debug API errors.",
    },
  ],

  howToSteps: [
    {
      name: "Choose your rules",
      text: "Toggle the options you need — force HTTPS, add caching, enable gzip, block bad bots — in the configuration panel.",
      url: "",
    },
    {
      name: "Add custom redirects",
      text: "Switch to the Redirects tab and add 301 or 302 redirect rules for specific paths.",
      url: "",
    },
    {
      name: "Copy and deploy",
      text: "Click Copy to copy the generated .htaccess file, then paste it into your server's root directory or document root.",
      url: "",
    },
  ],
  howToTotalTime: "PT1M",

  faq: [
    {
      question: "What is an .htaccess file?",
      answer:
        "An .htaccess file is a configuration file used by Apache web servers. It lets you control server behaviour for a specific directory — including URL redirects, HTTPS enforcement, access control, custom error pages, and performance rules. It applies to the directory it lives in and all subdirectories.",
    },
    {
      question: "Where do I put the .htaccess file?",
      answer:
        "Place the .htaccess file in your website's document root — usually the public_html or www folder on shared hosting. For WordPress sites, it belongs in the same directory as wp-config.php. The rules apply to that directory and everything inside it.",
    },
    {
      question: "How do I force HTTPS with .htaccess?",
      answer:
        "Enable the \"Force HTTPS\" toggle in this tool. The generated rule uses mod_rewrite to check if the connection is not already HTTPS and redirects to the same URL with https://. This results in a 301 permanent redirect that search engines follow and cache.",
    },
    {
      question: "Will the generated file break my WordPress site?",
      answer:
        "The generated rules are standard Apache directives. If your WordPress site already has an .htaccess file, add the generated rules above the WordPress block (above the # BEGIN WordPress comment). Do not replace the entire file — WordPress needs its own rewrite rules to function.",
    },
    {
      question: "What is hotlink protection in .htaccess?",
      answer:
        "Hotlink protection blocks other websites from directly linking to your images, which would use your server bandwidth without permission. The rule checks the HTTP Referer header and returns a 403 Forbidden response to requests from domains other than your own.",
    },
    {
      question: "Does this tool send my configuration to a server?",
      answer:
        "No. All .htaccess generation happens entirely in your browser using JavaScript. Nothing is sent to any server. Your configuration never leaves your device.",
    },
  ],

  pages: {
    "/": {
      title: ".htaccess Generator — Free Apache Config Builder Online",
      description:
        "Build a valid Apache .htaccess file instantly. Add HTTPS redirects, custom error pages, browser caching, gzip, and security rules — no Apache expertise needed.",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
