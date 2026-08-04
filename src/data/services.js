// Central solutions catalog, grouped into categories for the mega-menu.
// Core content sourced from the existing ramigani.com site.

export const services = [
  {
    id: 'app-development',
    name: 'Mobile App Development',
    category: 'Engineering & Design',
    short: 'Native & cross-platform iOS & Android apps built for performance and scale.',
    tagline: 'We craft innovative mobile apps that engage, inspire, and drive business results.',
    description:
      'From concept to launch, we design and build high-performance mobile applications for iOS and Android. Our team focuses on native functionality, smooth user experiences, and reliable long-term support so your app keeps delivering value.',
    features: [
      { title: 'iOS & Android App Development', desc: 'Custom-built apps for both platforms, ensuring native functionality.' },
      { title: 'UI/UX Design for Apps', desc: 'Creating user-friendly designs with attention to detail.' },
      { title: 'App Maintenance & Updates', desc: 'Regular updates and support for app functionality.' },
      { title: 'API Integration', desc: 'Seamless integration of third-party services and APIs.' },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'Engineering & Design',
    short: 'Custom websites, e-commerce, and full-stack web applications.',
    tagline: 'Robust, scalable web platforms tailored to your brand and goals.',
    description:
      'We build tailored web experiences — from marketing sites to complex web applications and online stores. Every build is optimized for performance, search engines, and growth.',
    features: [
      { title: 'Custom Web Design', desc: 'Tailored web designs reflecting the client’s brand.' },
      { title: 'E-Commerce Website Development', desc: 'Building robust, scalable online stores.' },
      { title: 'SEO-Friendly Web Development', desc: 'Websites optimized for search engines.' },
      { title: 'Web Application Development', desc: 'Custom web apps with complex functionalities.' },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Engineering & Design',
    short: 'User research, wireframing, prototypes, and modern design systems.',
    tagline: 'Interfaces that are intuitive, accessible, and a pleasure to use.',
    description:
      'Great products start with great design. We research your users, map their journeys, and craft interactive prototypes and design systems that make your product easy — and enjoyable — to use.',
    features: [
      { title: 'User Research & Journey Mapping', desc: 'Understanding your users to design for real needs.' },
      { title: 'Wireframing & Prototyping', desc: 'Interactive prototypes to validate ideas early.' },
      { title: 'Design Systems', desc: 'Consistent, reusable component libraries.' },
      { title: 'Usability Testing', desc: 'Refining designs with real user feedback.' },
    ],
  },
  {
    id: 'qa-testing',
    name: 'Software Testing & QA',
    category: 'Quality & Intelligence',
    short: 'Automated testing, security audits, and load profiling.',
    tagline: 'Ship with confidence — quality assured at every release.',
    description:
      'We build quality into your product with automated testing pipelines, security vulnerability audits, and performance profiling — catching issues before your users do.',
    features: [
      { title: 'Automated Testing Pipelines', desc: 'CI-integrated test suites for fast, reliable releases.' },
      { title: 'Manual & Exploratory QA', desc: 'Human-driven testing for edge cases and UX.' },
      { title: 'Security & Vulnerability Audits', desc: 'Identifying and closing security gaps.' },
      { title: 'Performance & Load Testing', desc: 'Ensuring your app scales under real-world load.' },
    ],
  },
  {
    id: 'ai-ml-solutions',
    name: 'AI/ML Solutions',
    category: 'Quality & Intelligence',
    short: 'Custom machine learning models and workflow automation.',
    tagline: 'Put your data to work with practical, production-ready AI.',
    description:
      'We build custom machine learning models and intelligent automations that solve real business problems — from predictive analytics to document processing and workflow automation.',
    features: [
      { title: 'Custom ML Models', desc: 'Models tailored to your data and use case.' },
      { title: 'Predictive Analytics', desc: 'Forecasting and insight from your data.' },
      { title: 'Workflow Automation', desc: 'Automating repetitive, rules-based tasks.' },
      { title: 'AI Integration', desc: 'Embedding intelligence into your existing apps.' },
    ],
  },
];

// Ordered category list for the mega-menu columns
export const categories = ['Engineering & Design', 'Quality & Intelligence'];

export const getService = (id) => services.find((s) => s.id === id);
