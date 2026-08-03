// Central services catalog. Core content (Mobile App, Web App, Digital Marketing)
// is sourced from the existing ramigani.com site; remaining entries extend the offering.

export const services = [
  {
    id: 'app-development',
    name: 'Mobile App Development',
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
    name: 'Web App Development',
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
    id: 'digital-marketing',
    name: 'Digital Marketing Services',
    short: 'Targeted campaigns across social, content, and email channels.',
    tagline: 'Data-driven marketing that turns attention into measurable growth.',
    description:
      'We help brands reach and convert the right audience through strategic, multi-channel campaigns — combining creative content with performance data to maximize return on every rupee spent.',
    features: [
      { title: 'Social Media Marketing', desc: 'Running targeted campaigns across platforms.' },
      { title: 'Content Marketing', desc: 'Engaging content for various channels.' },
      { title: 'Email Marketing', desc: 'Strategically crafted campaigns for conversions.' },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
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
    id: 'seo-optimization',
    name: 'SEO Optimization',
    short: 'Technical audits, keyword strategy, and rank tracking.',
    tagline: 'Get found by the customers who are already searching for you.',
    description:
      'We improve your organic visibility with technical SEO audits, high-intent keyword strategies, and continuous rank tracking — driving sustainable, high-quality traffic to your site.',
    features: [
      { title: 'Technical SEO Audits', desc: 'Fixing crawl, speed, and structure issues.' },
      { title: 'Keyword Strategy', desc: 'Targeting high-intent, high-value search terms.' },
      { title: 'On-Page Optimization', desc: 'Content and metadata tuned to rank.' },
      { title: 'Rank Tracking & Reporting', desc: 'Transparent reporting on progress and ROI.' },
    ],
  },
  {
    id: 'ai-ml-solutions',
    name: 'AI/ML Solutions',
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

export const getService = (id) => services.find((s) => s.id === id);
