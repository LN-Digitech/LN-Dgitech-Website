import {
  Search,
  MessageSquareText,
  Sparkles,
  Bot,
  Palette,
  MonitorSmartphone,
  Smartphone,
  Code2,
  PenLine,
  ShoppingBag,
  Megaphone,
  Briefcase,
  ImageIcon,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * All services offered by LN Digitech.
 *
 * Editing guide:
 *  - Add a new object to this array with a unique `slug`.
 *  - The slug becomes the URL: /services/<slug>
 *  - Detail pages, navigation and internal links generate automatically.
 *  - Keep `limitations` honest. Do not promise rankings or AI inclusion.
 */
export const services: Service[] = [
  {
    slug: "seo",
    name: "Search Engine Optimization",
    shortName: "SEO",
    category: "Discovery & Search",
    icon: Search,
    featured: true,
    order: 1,
    accent: "blue",
    summary:
      "Technical and content-focused SEO that makes your website understandable, indexable and useful to search engines and the people using them.",
    description:
      "SEO is the work of making a website discoverable, interpretable and worth ranking in organic search results. At LN Digitech we treat it as an engineering and editorial discipline rather than a bag of tricks. That means fixing how crawlers read your pages, restructuring content around the questions your buyers actually ask, and measuring whether the work produces qualified visits rather than vanity traffic. Engagements typically begin with a technical audit, then move into on-page improvement, content structure, internal linking and a measurement plan tied to your commercial goals.",
    problems: [
      "Pages exist but rarely appear for the searches that matter to your business.",
      "A recent platform or redesign migration caused a drop in organic visits.",
      "Content is published inconsistently and does not map to any keyword or topic strategy.",
      "Site speed, crawl waste, duplicate URLs or indexing errors are quietly limiting performance.",
      "You need an experienced partner to brief writers, developers and stakeholders on SEO requirements.",
    ],
    deliverables: [
      "Technical audit covering indexability, crawl behaviour, site architecture and Core Web Vitals",
      "Keyword and topic map matched to your actual services and buyer journey",
      "On-page recommendations for titles, headings, internal links and content structure",
      "Implementation support or tickets your developers can execute directly",
      "Content briefs aligned to target topics and search intent",
      "Monthly measurement report with organic visits, conversions and prioritised next actions",
    ],
    process: [
      { step: "Audit", detail: "Crawl the site, review analytics and search-console data, and identify the highest-impact constraints." },
      { step: "Plan", detail: "Agree a topic map, technical backlog and success metrics with your team before work begins." },
      { step: "Implement", detail: "Ship fixes in priority order: technical corrections first, then content and internal linking." },
      { step: "Measure", detail: "Track rankings, qualified organic sessions and conversions against the agreed baseline." },
      { step: "Refine", detail: "Re-prioritise each month based on what the data actually shows." },
    ],
    suitableFor: [
      "Businesses with a website that already attracts some organic impressions but few conversions",
      "Companies that publish or want to publish content at a steady cadence",
      "Teams whose developers need clear, prioritised SEO specifications rather than vague advice",
      "Brands recovering from a migration, restructure or manual-action history",
    ],
    limitations: [
      "No agency can guarantee first-page rankings or specific traffic figures. Anyone promising that is guessing.",
      "Results depend on competition, site history, content quality and your ability to implement recommendations.",
      "SEO compounds slowly. Meaningful movement typically takes several months of consistent work.",
      "We do not buy links, generate doorway pages, or use tactics that risk manual actions.",
    ],
    faqs: [
      {
        question: "How long before SEO work shows results?",
        answer:
          "Technical fixes can be reflected in crawling and indexing within days to weeks. Content-led gains usually take three to six months of consistent publishing and internal linking, depending on competition. We set expectations against your specific baseline rather than quoting industry averages.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No. Search results depend on factors no agency controls, including algorithm changes and competitor activity. We commit to a defined process, transparent reporting and work tied to your commercial goals.",
      },
      {
        question: "Can you work with our existing developers and writers?",
        answer:
          "Yes. A large part of our SEO delivery is producing prioritised, specific briefs and specifications your team can execute. We can also implement changes directly where we have access.",
      },
      {
        question: "Do you need access to our accounts?",
        answer:
          "For useful measurement we need read access to Google Search Console and your analytics platform. Access requests are made through official invite flows. We never ask for passwords.",
      },
    ],
    related: ["aeo", "geo", "content-writing", "website-development"],
  },
  {
    slug: "aeo",
    name: "Answer Engine Optimization",
    shortName: "AEO",
    category: "Discovery & Search",
    icon: MessageSquareText,
    featured: true,
    order: 2,
    accent: "cyan",
    summary:
      "Structuring your content so answer engines can extract accurate, attributable answers to the questions your customers ask.",
    description:
      "Answer Engine Optimization focuses on a specific outcome: when someone asks a question in an answer-focused interface (Google's AI features, Bing Copilot, Perplexity, voice assistants, or similar tools) the information drawn should be accurate and, where relevant, attributed to you. The practical work overlaps with good SEO and good technical writing. It means publishing clear definitions, answering real questions in full sentences near the top of relevant sections, using consistent entity information across your site and third-party profiles, and marking up content with structured data where it genuinely applies. AEO is not a replacement for SEO; it extends the same principles to interfaces that synthesise answers rather than list links.",
    problems: [
      "Your brand is cited inconsistently, or not at all, when customers ask AI tools questions in your category.",
      "Product and service information is spread across PDFs, images and inconsistent page structures that engines cannot parse.",
      "Definitions, pricing logic and process explanations are buried in prose instead of stated plainly.",
      "Structured data is missing or incorrect on key pages.",
      "Content was written to rank rather than to answer, so extracts read poorly when pulled out of context.",
    ],
    deliverables: [
      "Question inventory built from customer enquiries, sales calls and search data",
      "Content restructure plan that places clear, complete answers near the top of relevant sections",
      "Schema.org markup for organisation, service, FAQ, product and article content where applicable",
      "Entity consistency audit covering your name, description, categories and attributes across owned profiles",
      "Answer-extraction testing on a documented set of questions in supported platforms",
      "Editorial guidelines so future content is written to be quotable, not just rankable",
    ],
    process: [
      { step: "Question map", detail: "Collect the real questions buyers ask at each stage, from discovery to purchase." },
      { step: "Structure", detail: "Reorganise key pages so answers appear clearly, in complete statements, with supporting detail below." },
      { step: "Mark up", detail: "Add valid structured data where it matches visible page content." },
      { step: "Test", detail: "Run documented retrieval tests against supported platforms and record what is and is not cited." },
      { step: "Maintain", detail: "Re-test quarterly as platforms change how they retrieve and attribute information." },
    ],
    suitableFor: [
      "Businesses whose buyers research using AI assistants before contacting vendors",
      "Publishers and documentation-heavy sites with strong existing content that is poorly structured",
      "Brands with inconsistent business information across directories and profiles",
      "Companies that want measurement rather than claims about AI visibility",
    ],
    limitations: [
      "We cannot guarantee inclusion in any AI-generated answer, citation or recommendation. No one can.",
      "Platforms change retrieval and attribution behaviour frequently and without notice.",
      "AEO improves the conditions for accurate retrieval. It does not control which sources a platform chooses.",
      "Supported features differ by platform, region and language, and continue to evolve.",
    ],
    faqs: [
      {
        question: "Is AEO different from SEO?",
        answer:
          "They overlap heavily. SEO optimises for ranked lists of links; AEO optimises for interfaces that synthesise an answer. The underlying requirements (clear content, consistent entities, valid markup, technical access) are shared, so AEO work usually strengthens SEO as well.",
      },
      {
        question: "How do you measure AEO results?",
        answer:
          "We define a fixed question set with you, then test it periodically across the platforms that matter to your buyers, recording whether your brand is mentioned or cited and how accurately. We also track referral traffic from those platforms where analytics allow.",
      },
      {
        question: "Do I need schema markup for AEO?",
        answer:
          "Structured data helps engines parse your content reliably, and we recommend it where it matches visible content. It is one factor among several. Clear writing and consistent business information matter just as much.",
      },
      {
        question: "Will AEO replace my SEO budget?",
        answer:
          "No. Organic search still drives a large share of discovery for most businesses, and the two disciplines share infrastructure. Budgets usually shift in emphasis rather than being replaced.",
      },
    ],
    related: ["geo", "seo", "aao"],
  },
  {
    slug: "geo",
    name: "Generative Engine Optimization",
    shortName: "GEO",
    category: "Discovery & Search",
    icon: Sparkles,
    featured: true,
    order: 3,
    accent: "navy",
    summary:
      "Improving the quality, clarity and source-worthiness of your content so generative search experiences represent your brand accurately.",
    description:
      "Generative Engine Optimization addresses how large language models and AI-assisted search experiences select, summarise and attribute sources. Where AEO focuses on direct answers to specific questions, GEO is concerned with the broader corpus a generative system draws on: whether your content is authoritative enough to be cited, clearly attributed to your organisation, consistent across the pages it might retrieve, and written in a way that survives summarisation without distortion. The work is largely editorial and structural. It includes consolidating duplicate or near-duplicate pages, publishing original explanations and data rather than rehashed summaries, strengthening author and entity signals, and ensuring technical access is not blocking crawlers that generative systems rely on.",
    problems: [
      "Generative tools describe your category inaccurately, or describe competitors where they should describe you.",
      "Your site publishes many overlapping pages that dilute authority instead of consolidating it.",
      "Content is largely derivative of existing material, so there is no reason for a generative system to cite you as a source.",
      "Business details differ across your website, listings and profiles, creating ambiguity for retrieval systems.",
      "Crawlers used by AI systems are blocked or unable to render your key content.",
    ],
    deliverables: [
      "Content corpus audit identifying duplication, thin pages and consolidation opportunities",
      "Original-source content plan covering explanations, frameworks, data and documentation your buyers actually need",
      "Entity and attribution review across your site, knowledge profiles and third-party mentions",
      "Crawler access review covering robots directives, rendering and content parity for key pages",
      "Editorial standards for authorship, sourcing and update cadence",
      "Periodic citation tracking across the generative platforms relevant to your market",
    ],
    process: [
      { step: "Assess", detail: "Audit how your content currently appears in the generative tools your buyers use, and why." },
      { step: "Consolidate", detail: "Merge or redirect overlapping pages so authority concentrates rather than fragments." },
      { step: "Publish", detail: "Produce original, well-sourced material that is worth citing rather than paraphrasing." },
      { step: "Attribute", detail: "Make authorship, entity identity and refresh dates explicit and consistent." },
      { step: "Track", detail: "Monitor citation presence over time and report honestly, including when presence declines." },
    ],
    suitableFor: [
      "Publishers, documentation teams and brands competing to be cited as a source",
      "Companies in categories where buyers compare options using AI assistants",
      "Businesses with large, ageing content libraries that have accumulated duplication",
      "Organisations that can commit to producing genuinely original material",
    ],
    limitations: [
      "Citation in generative outputs cannot be guaranteed and can change when a platform updates its model.",
      "GEO depends on producing real original material. It is not a formatting trick applied to existing pages.",
      "Measurement is approximate: platforms rarely disclose which sources influenced a given answer.",
      "Terminology in this field is unsettled and still changing; we define our scope in writing before work starts.",
    ],
    faqs: [
      {
        question: "Is GEO just another name for SEO?",
        answer:
          "No. SEO targets ranked results. GEO targets the sources generative systems draw on when composing an answer. The disciplines share technical foundations but differ in what they optimise for: authority and citability versus position and click-through.",
      },
      {
        question: "Do you write the original content yourselves?",
        answer:
          "We can. Original-source content requires genuine expertise from your side combined with our editorial and structural work. Typical engagements combine your subject-matter input with our research, drafting and optimisation.",
      },
      {
        question: "How is GEO measured?",
        answer:
          "Primarily through periodic citation tracking across a defined question set in the platforms your buyers use, plus referral traffic where analytics expose it. We report declines as well as gains.",
      },
      {
        question: "Should I stop investing in traditional SEO?",
        answer:
          "Probably not. Organic search remains a primary discovery channel for most businesses, and the technical work behind GEO usually improves conventional rankings too.",
      },
    ],
    related: ["aeo", "seo", "content-writing"],
  },
  {
    slug: "aao",
    name: "Assistive Agent Optimization",
    shortName: "AAO",
    category: "Discovery & Search",
    icon: Bot,
    featured: true,
    order: 4,
    accent: "blue",
    summary:
      "Making your business information discoverable, accessible and unambiguous for AI assistants and agent-driven experiences.",
    description:
      "Assistive Agent Optimization (AAO) is a discipline LN Digitech defines explicitly, because the term is used loosely across the industry. In our practice it means improving how reliably AI-assisted and agent-driven experiences can discover, retrieve, interpret and act on your business information. Assistive agents (AI assistants, shopping agents, booking tools, research copilots and similar systems) need structured, machine-legible, consistently described information to be useful. If your pricing logic is only in a PDF, your booking rules only exist in prose, your product attributes are inconsistent, or your site blocks the crawlers these systems use, the agent will work around you or fail. AAO closes those gaps. It draws on structured information design, accessibility, technical SEO and careful content writing, but the goal is specific: an agent should be able to answer questions about your business accurately and, where you permit it, complete an action on your behalf.",
    problems: [
      "Assistive tools give customers wrong answers about your pricing, availability, policies or coverage.",
      "Key business rules exist only in prose, PDFs or images that agents cannot reliably interpret.",
      "Your site fails basic accessibility checks that also affect how agents parse content.",
      "Product or service attributes are described inconsistently across pages, feeds and listings.",
      "You have no documented way to test whether agents can complete a task involving your business.",
    ],
    deliverables: [
      "Machine-readable business information: organisation details, service catalogue, policies, coverage and hours",
      "Structured data and feed preparation appropriate to your industry and platforms",
      "Accessibility and crawlability audit against WCAG 2.2 AA principles and common agent retrieval paths",
      "Content clarity pass rewriting ambiguous statements into precise, unambiguous rules",
      "Entity consistency review across your website, listings and third-party profiles",
      "Documented retrieval tests: a fixed scenario list run periodically against supported platforms, with recorded outcomes",
    ],
    process: [
      { step: "Inventory", detail: "Catalogue every fact an agent might need about your business and where each one currently lives." },
      { step: "Structure", detail: "Express policies, pricing logic, availability and attributes in unambiguous, machine-legible formats." },
      { step: "Verify access", detail: "Check that crawlers and APIs used by supported agent platforms can reach and render your content." },
      { step: "Test", detail: "Run documented task scenarios (price lookups, availability checks, policy questions) and record results." },
      { step: "Report", detail: "Deliver a written record of what succeeded, what failed and what to fix next." },
    ],
    suitableFor: [
      "Service businesses with complex pricing, coverage or booking rules",
      "E-commerce brands whose products appear through aggregators and shopping agents",
      "Companies whose customers increasingly ask AI assistants before visiting a website",
      "Teams that want a documented, repeatable testing process rather than vague AI-optimisation claims",
    ],
    limitations: [
      "We do not promise inclusion in any assistant's responses, actions or recommendations. No vendor can guarantee that.",
      "Supported platforms, capabilities and retrieval methods change frequently and without notice.",
      "AAO improves the conditions for correct agent behaviour. It cannot control what a third-party system does with your information.",
      "Where an agent platform offers no public API or documentation, testing is observational and labelled as such.",
    ],
    faqs: [
      {
        question: "Is AEO the same as AAO?",
        answer:
          "No. AEO focuses on answer extraction: getting a correct answer surfaced. AAO focuses on whether an agent can discover, interpret and act on your business information at all. They share tooling but target different failure modes.",
      },
      {
        question: "Do you guarantee an assistant will recommend my business?",
        answer:
          "No. We guarantee a documented process: your information will be structured, accessible, unambiguous and tested. Whether a third-party system then chooses to surface it is outside anyone's control, and we will never claim otherwise.",
      },
      {
        question: "What platforms do you test against?",
        answer:
          "The set is agreed with you based on where your customers actually research. It commonly includes major AI assistants and shopping or booking agents relevant to your market. We document exactly which platforms are covered in each engagement.",
      },
      {
        question: "Is accessibility work part of AAO?",
        answer:
          "Yes, where it affects machine interpretation. Screen-reader structure, semantic HTML, alt text and clear language help both human users and automated agents, so accessibility improvements are frequently part of the work.",
      },
    ],
    related: ["aeo", "geo", "seo", "website-development"],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design & Brand Identity",
    shortName: "Brand Design",
    category: "Creative & Content",
    icon: Palette,
    featured: true,
    order: 5,
    accent: "cyan",
    summary:
      "Logo systems, visual identities and brand collateral designed to stay consistent across every place your business appears.",
    description:
      "Brand identity work at LN Digitech starts with decisions, not decoration. Before drawing anything we establish how your business should be positioned, who it needs to appeal to, and what it competes against visually. From there we build a practical identity system: a logo with defined variants and clear-space rules, a colour palette with specified contrast pairings, a type scale, iconography direction, and templates for the collateral you actually produce. The deliverable is not a folder of files. It is a system your team can apply without asking us for permission every time.",
    problems: [
      "The logo works in one size and breaks everywhere else: no variants, no clear-space rules, no usage guidance.",
      "Different team members use different colours, fonts and templates, so the brand reads inconsistently.",
      "Collateral is produced from scratch each time, which is slow and produces uneven quality.",
      "The visual identity no longer matches how the business positions itself.",
      "Rebrands stall because there is no defined decision-making process for visual choices.",
    ],
    deliverables: [
      "Logo suite: primary mark, secondary lockup, favicon and monochrome variants in SVG, PNG and PDF",
      "Brand guidelines covering colour with HEX/RGB/CMYK values, type scale, spacing, imagery direction and logo usage rules",
      "Colour palette tested for accessible text/background contrast pairings",
      "Typography licensing guidance and recommended pairings",
      "Collateral templates: social posts, presentations, documents, invoices, email signatures",
      "Source files (Figma or equivalent) with editable components and organised layers",
    ],
    process: [
      { step: "Discovery", detail: "Positioning workshop, competitive audit and review of where the brand currently appears." },
      { step: "Direction", detail: "Two to three distinct visual routes presented with reasoning, not just mood boards." },
      { step: "Design", detail: "The chosen route is developed into a full system with real applications, not isolated mockups." },
      { step: "Systemise", detail: "Guidelines, templates and source files are prepared so your team can apply the identity independently." },
      { step: "Handover", detail: "A walkthrough session covering usage rules, file formats and common mistakes to avoid." },
    ],
    suitableFor: [
      "New businesses that need a proper identity rather than a logo-only file",
      "Established companies whose visual identity has drifted and needs consolidating",
      "Teams producing regular collateral who need templates and rules to stay consistent",
      "Businesses preparing for a rebrand alongside a website or product launch",
    ],
    limitations: [
      "Revision rounds are defined in the proposal. Additional rounds are quoted separately.",
      "Trademark registrability is a legal question. We can advise on distinctiveness but cannot guarantee registration.",
      "Stock imagery, premium fonts and print production costs are quoted separately unless included in scope.",
      "We do not redraw or modify existing third-party trademarks without written rights confirmation.",
    ],
    faqs: [
      {
        question: "How many logo concepts do you present?",
        answer:
          "Typically two to three genuinely distinct routes, each presented with reasoning and applied to real contexts. We would rather defend a few strong directions than overwhelm you with variations of one idea.",
      },
      {
        question: "Do we own the final files?",
        answer:
          "Yes. On final payment you receive full source files and usage rights for the delivered identity, as defined in the signed proposal. Stock assets and licensed fonts remain subject to their own licences.",
      },
      {
        question: "Can you work with our existing logo?",
        answer:
          "Yes. Many engagements are consolidation rather than replacement: cleaning up an existing mark, defining variants, and building the guidelines and templates that were never created.",
      },
      {
        question: "Do you handle printing?",
        answer:
          "We prepare print-ready files and can manage production through suppliers. Print costs are quoted separately and confirmed with you before ordering.",
      },
    ],
    related: ["content-writing", "graphic-design", "ai-media"],
  },
  {
    slug: "website-development",
    name: "Website Design & Development",
    shortName: "Web Development",
    category: "Engineering",
    icon: MonitorSmartphone,
    featured: true,
    order: 6,
    accent: "blue",
    summary:
      "Fast, accessible, maintainable websites designed and built with clean architecture, real performance budgets and long-term support in mind.",
    description:
      "We design and build websites that hold up: fast on mid-range mobile connections, accessible to keyboard and screen-reader users, easy for your team to update, and structured so search engines can index them properly. Most builds use Next.js with TypeScript and a component-based architecture, though we choose the stack based on your team's ability to maintain it: a site your marketing team cannot update is a liability, not an asset. Every engagement defines scope in writing: page count, features, content migration, integrations, performance targets and what ongoing maintenance covers.",
    problems: [
      "The current website is slow, difficult to update, or fails basic accessibility checks.",
      "A redesign has been discussed repeatedly but never scoped properly, so it never starts.",
      "The site works on desktop but performs poorly on the mobile devices most of your visitors use.",
      "Content updates require a developer for simple changes, so the site has gone stale.",
      "You are launching a new business, product or campaign and need a site that is ready for real traffic.",
    ],
    deliverables: [
      "Responsive website designed for mobile, tablet and desktop with documented breakpoints",
      "Component-based codebase your team or a future agency can maintain",
      "Performance budget agreed in advance, with Core Web Vitals measured before and after launch",
      "Accessibility review against WCAG 2.2 AA principles, with a written summary of findings",
      "On-page SEO foundations: metadata, sitemap, robots directives, structured data, internal linking",
      "Content management approach chosen and documented: headless CMS, markdown, or structured data files",
      "Deployment setup, analytics configuration and a launch checklist",
    ],
    process: [
      { step: "Scope", detail: "Page inventory, feature list, content status, integrations and constraints documented before design begins." },
      { step: "Architecture", detail: "Information structure, component plan and technical approach agreed with your stakeholders." },
      { step: "Design", detail: "Key page designs in a shared design file, reviewed against real content rather than placeholder text." },
      { step: "Build", detail: "Development in staged environments with regular previews, so nothing is a surprise at the end." },
      { step: "Launch", detail: "Content migration, redirect mapping, performance verification, analytics checks and post-launch monitoring." },
    ],
    suitableFor: [
      "Businesses whose current site underperforms on speed, accessibility or mobile usability",
      "Companies planning a redesign that needs proper scoping before anyone opens a design tool",
      "Organisations that want a site their own team can maintain without ongoing developer dependence",
      "Product launches, campaigns and microsites with a defined end date and purpose",
    ],
    limitations: [
      "Content migration quality depends on the state of your existing content. Large volumes of legacy content are quoted separately.",
      "Third-party integrations depend on those vendors' APIs and can change without notice.",
      "Performance targets are measured under defined conditions. Real-world performance varies with user devices and networks.",
      "Ongoing maintenance, hosting and third-party service costs are separate unless explicitly included in the signed scope.",
    ],
    faqs: [
      {
        question: "How long does a website build take?",
        answer:
          "A focused marketing site typically takes six to ten weeks from scoped kickoff to launch. Larger sites, complex integrations or content-heavy migrations take longer. We give a timeline in the proposal, not a range on a sales call.",
      },
      {
        question: "What technology do you use?",
        answer:
          "Most builds use Next.js with TypeScript and CSS Modules, which gives strong performance and a codebase many agencies can maintain. If your team is more comfortable with a CMS-based stack such as WordPress, we will recommend that instead. Maintainability on your side matters more than our preference.",
      },
      {
        question: "Will we be able to update the site ourselves?",
        answer:
          "Yes, provided content editing is part of scope. We choose the editing approach based on who updates the site and how often (from a structured headless CMS to simple markdown files) and train your team during handover.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We set up deployment on platforms such as Vercel, Netlify or your preferred cloud provider. Hosting costs are billed directly by that provider. We can manage the account on your behalf if you prefer.",
      },
    ],
    related: ["mobile-app-development", "software-development", "ecommerce-development", "seo"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Design & Development",
    shortName: "Mobile Apps",
    category: "Engineering",
    icon: Smartphone,
    order: 7,
    accent: "navy",
    summary:
      "iOS and Android applications designed around real user tasks, built with a maintainable codebase and a clear path to release.",
    description:
      "We design and build mobile applications for iOS and Android, choosing the technical approach based on your product rather than a default preference. Most projects use React Native or Flutter for a shared codebase across platforms, which is the right call for the majority of business and consumer apps. Native development is recommended when you need deep platform integration, intensive background processing or platform-specific features that cross-platform frameworks handle poorly. Every engagement begins with a product definition: who uses the app, what they need to accomplish, what the first release must include, and what is deliberately deferred.",
    problems: [
      "A product concept exists but the path from idea to a releasable first version is unclear.",
      "The current app is difficult to maintain, slow, or full of workarounds created by earlier shortcuts.",
      "You need to validate a mobile product with real users before committing to a larger investment.",
      "An existing web product needs a mobile experience that feels native rather than a wrapped browser view.",
      "App store submissions have stalled because of technical, policy or asset requirements.",
    ],
    deliverables: [
      "Product definition document covering users, core tasks, first-release scope and deferred features",
      "Interactive prototype tested with real users before full development begins",
      "Cross-platform codebase (React Native or Flutter) or native codebases where justified",
      "Backend APIs and integrations required for the app to function, with documentation",
      "App store assets, privacy disclosures and submission handling for iOS and Android",
      "Analytics and crash reporting configured before release",
      "Maintenance plan covering OS updates, dependency updates and store policy changes",
    ],
    process: [
      { step: "Define", detail: "Product scope, user tasks, success criteria and release plan agreed in writing." },
      { step: "Prototype", detail: "Interactive prototype reviewed with real target users before development investment." },
      { step: "Build", detail: "Iterative development with TestFlight or internal-distribution builds every one to two weeks." },
      { step: "Release", detail: "Store submission, asset preparation, review handling and staged rollout." },
      { step: "Maintain", detail: "OS compatibility updates, dependency maintenance, crash triage and feature iteration." },
    ],
    suitableFor: [
      "Businesses building a first mobile product and needing help defining scope before building",
      "Companies whose web product needs a properly native-feeling mobile experience",
      "Teams that tried cross-platform development before and need the codebase rescued or rebuilt",
      "Products requiring both iOS and Android releases on a shared budget",
    ],
    limitations: [
      "App store review is controlled by Apple and Google. Approval timing cannot be guaranteed.",
      "Feature scope directly determines cost and timeline. Adding features mid-build is re-quoted, not absorbed.",
      "Third-party SDKs and OS updates can introduce issues outside our control; maintenance agreements cover response, not prevention.",
      "We do not publish apps under our own developer accounts. Releases go to your accounts, which you own.",
    ],
    faqs: [
      {
        question: "React Native, Flutter, or native?",
        answer:
          "Most business and consumer apps are well served by React Native or Flutter with one shared codebase. We recommend native development only when the product genuinely needs deep platform integration or intensive processing. The decision is made with you during scoping and documented with reasoning.",
      },
      {
        question: "How long until an app is in the stores?",
        answer:
          "A focused first release typically takes three to five months from scoped kickoff, followed by one to two weeks of store review. Larger or more complex products take longer. We provide a timeline after scoping, not before.",
      },
      {
        question: "Do we own the code?",
        answer:
          "Yes. On final payment you receive the full codebase, documentation and rights to the delivered work, as defined in the signed proposal.",
      },
      {
        question: "What about ongoing updates?",
        answer:
          "Mobile apps require maintenance: OS releases, dependency updates and store policy changes all demand attention. We offer maintenance agreements covering scheduled updates and bug triage, scoped to your needs.",
      },
    ],
    related: ["software-development", "website-development", "ecommerce-development"],
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    shortName: "Custom Software",
    category: "Engineering",
    icon: Code2,
    order: 8,
    accent: "blue",
    summary:
      "Internal tools, dashboards, integrations and product software built around how your business actually operates.",
    description:
      "Custom software is worth building when off-the-shelf tools force your team into workarounds that cost more than the software saves. We build internal tools, customer portals, dashboards, workflow automation and integrations between systems that were never designed to talk to each other. The process begins with understanding the workflow as it actually runs, including the spreadsheet everyone is afraid to open, not the workflow described in a requirements document. From there we define a scoped first release, build it, and iterate against real usage rather than speculative feature lists.",
    problems: [
      "Critical workflows live in spreadsheets, email threads and manual re-entry between systems.",
      "Off-the-shelf tools cover eighty percent of the need, and the missing twenty percent costs real hours every week.",
      "Existing software is technically functional but so difficult to change that improvements never happen.",
      "Data exists in multiple systems and nobody trusts any single report enough to act on it.",
      "A product concept needs engineering capability to reach a working first version.",
    ],
    deliverables: [
      "Workflow documentation capturing how the process actually runs, including known workarounds",
      "Scoped first-release specification with clear boundaries on what is and is not included",
      "Working software deployed to your infrastructure or ours, with source control and documentation",
      "Integrations with the systems you already use, each with documented error handling",
      "User testing with real operators before general rollout",
      "Technical documentation sufficient for another competent developer to take over",
      "Maintenance and support arrangement agreed before launch",
    ],
    process: [
      { step: "Understand", detail: "Shadow the real workflow, interview operators, and identify where time is actually lost." },
      { step: "Scope", detail: "Define a first release small enough to ship and useful enough to matter." },
      { step: "Build", detail: "Iterative development with working demos every one to two weeks." },
      { step: "Pilot", detail: "Real operators use the software on real work, with structured feedback sessions." },
      { step: "Support", detail: "Bug triage, improvement backlog and maintenance under an agreed support arrangement." },
    ],
    suitableFor: [
      "Businesses whose operations depend on manual work between disconnected systems",
      "Companies that have outgrown spreadsheets but do not need a full ERP",
      "Teams evaluating whether a custom tool would genuinely outperform buying one",
      "Founders building a product who need engineering partnership rather than just coding capacity",
    ],
    limitations: [
      "Custom software is only justified when the cost of the status quo exceeds the cost of building and maintaining a tool.",
      "Scope changes mid-build are re-quoted. We do not absorb unlimited changes within a fixed price.",
      "Third-party API changes, deprecations and outages affect integrations. Maintenance covers response and repair, not prevention.",
      "You own the delivered software. Underlying third-party services and licences remain under their own terms.",
    ],
    faqs: [
      {
        question: "Should we build custom or buy off-the-shelf?",
        answer:
          "We will tell you when buying is the better answer. Custom software is justified when workarounds cost more than the build, or when the workflow is genuinely unique to your business. If a standard product covers your needs, we say so.",
      },
      {
        question: "How do you price projects?",
        answer:
          "Fixed price for a defined first release once scope is agreed, then time-and-materials or a retained arrangement for iteration. We do not quote fixed prices against undefined scope.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes, after a paid audit. We need to understand the current architecture, technical debt and test coverage before committing to a maintenance or improvement plan.",
      },
      {
        question: "Who owns the software?",
        answer:
          "You do, for the delivered work, as defined in the signed agreement. We document third-party dependencies and their licence terms so ownership boundaries are clear.",
      },
    ],
    related: ["mobile-app-development", "website-development", "it-consulting", "ecommerce-development"],
  },
  {
    slug: "content-writing",
    name: "Content Writing & Strategy",
    shortName: "Content",
    category: "Creative & Content",
    icon: PenLine,
    featured: true,
    order: 9,
    accent: "cyan",
    summary:
      "Editorial strategy and writing that explains what you do clearly enough for buyers, search engines and AI systems to understand it.",
    description:
      "Content only works when it answers a real question a real buyer has. We build editorial strategies around the questions your customers ask during research and purchase, then write the material that answers them: service pages, guides, documentation, comparison content, case-study structures and thought-leadership pieces. Every piece is reviewed for factual accuracy against information you provide. We do not publish invented statistics, fabricated case studies or claims we cannot support. If your team has subject-matter expertise, our job is to extract it, structure it and write it in language buyers understand.",
    problems: [
      "Website copy describes what you do in general terms but never explains how, for whom, or with what result.",
      "Content is published inconsistently because there is no strategy behind what gets written.",
      "Sales conversations repeat the same explanations that should already exist on the website.",
      "Existing content is thin, duplicated, or clearly written for algorithms rather than readers.",
      "Subject-matter expertise exists in your team's heads and never reaches a page.",
    ],
    deliverables: [
      "Editorial strategy mapping topics to buyer questions and business priorities",
      "Content calendar with realistic publishing cadence your team can sustain",
      "Service pages, guides and supporting content written to a defined brief",
      "Content briefs your internal subject-matter experts can review efficiently",
      "Editorial guidelines covering tone, terminology, structure and citation requirements",
      "Update plan for existing content that is worth keeping rather than rewriting",
    ],
    process: [
      { step: "Research", detail: "Sales-call themes, customer questions, search data and competitor content reviewed together." },
      { step: "Strategy", detail: "Topic map, publishing cadence and success measures agreed before writing starts." },
      { step: "Draft", detail: "Content written against briefs, with subject-matter review built into the timeline." },
      { step: "Edit", detail: "Fact-checking against your supplied information, clarity editing and SEO structure review." },
      { step: "Publish", detail: "Scheduling, internal linking and performance review against the agreed measures." },
    ],
    suitableFor: [
      "Businesses whose expertise is real but poorly communicated on their website",
      "Companies publishing content without a strategy and seeing little return for the effort",
      "Teams that need writing capacity without hiring full-time staff",
      "Organisations preparing content for a launch, funding round or market expansion",
    ],
    limitations: [
      "We do not fabricate statistics, testimonials, case studies, credentials or client results. Ever.",
      "Factual accuracy depends on the information you supply. We flag anything we cannot verify.",
      "Content performance depends on factors beyond writing quality, including distribution, domain authority and competition.",
      "Publishing volume is capped by review capacity on your side. Content that cannot be reviewed will not be published.",
    ],
    faqs: [
      {
        question: "Do you use AI to write content?",
        answer:
          "We use AI tools for research assistance and first-pass structuring where it genuinely helps. Every published piece is researched, edited and fact-checked by a person against information you supply. We do not publish unreviewed AI drafts, and we disclose our process when asked.",
      },
      {
        question: "How much input do you need from our team?",
        answer:
          "Usually one subject-matter expert available for a short interview per major piece, plus review time. The better we can extract real expertise, the more useful the content becomes. Generic writing helps no one.",
      },
      {
        question: "Can you write in our tone of voice?",
        answer:
          "Yes. If you have existing guidelines we follow them. If not, we draft editorial guidelines early in the engagement so consistency does not depend on any single writer's instincts.",
      },
      {
        question: "Do you guarantee rankings or traffic?",
        answer:
          "No. We commit to writing content that answers real questions well and is structured correctly. Search performance also depends on competition, domain history and distribution, none of which anyone can guarantee.",
      },
    ],
    related: ["seo", "geo", "graphic-design", "social-media-marketing"],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development & Optimization",
    shortName: "E-commerce",
    category: "Commerce",
    icon: ShoppingBag,
    featured: true,
    order: 10,
    accent: "navy",
    summary:
      "Online stores built and improved for the full purchase path: catalogue, checkout, performance, analytics and ongoing optimisation.",
    description:
      "E-commerce work at LN Digitech covers both ends of the lifecycle: building stores that handle real catalogue size and real payment flow requirements, and improving existing stores where conversion is leaking. Build engagements choose the platform based on your catalogue size, team capability and operational requirements: Shopify, WooCommerce, or a custom headless build when justified. Optimisation engagements start with measurement: where visitors drop out, what breaks on mobile, which product pages fail to earn organic traffic, and where checkout friction causes abandonment. We fix the highest-impact issues first and measure the effect rather than redesigning everything at once.",
    problems: [
      "The store works but conversion is low and nobody can point to a specific cause.",
      "Mobile checkout is slow or confusing, and mobile abandonment is high.",
      "The catalogue has outgrown the platform or the way products are structured on it.",
      "Product pages earn no organic traffic because descriptions are thin or duplicated from suppliers.",
      "A new store needs building properly the first time: catalogue structure, payment, shipping, tax and analytics included.",
    ],
    deliverables: [
      "Store build or restructure with defined catalogue architecture, collections and product data model",
      "Checkout configuration including payment gateways, shipping rules, tax handling and order notifications",
      "Mobile performance optimisation targeting measurable improvements in load time and interaction latency",
      "Product page templates with structured data, useful descriptions and internal linking",
      "Analytics and conversion tracking configured to report on real revenue, not just sessions",
      "Abandoned-cart and transactional email configuration where the platform supports it",
      "Optimisation backlog prioritised by expected impact, with results measured after each change",
    ],
    process: [
      { step: "Audit", detail: "For optimisation: analytics review, funnel analysis and technical performance check. For builds: requirements and platform selection." },
      { step: "Prioritise", detail: "Issues or features ranked by expected impact against effort. Nothing is redesigned on taste alone." },
      { step: "Implement", detail: "Changes shipped in measured increments so the effect of each can be attributed." },
      { step: "Measure", detail: "Conversion rate, revenue per session and checkout completion tracked against the baseline." },
      { step: "Iterate", detail: "Next set of changes selected based on what the data shows, not what was assumed." },
    ],
    suitableFor: [
      "Stores with steady traffic but weak conversion that needs diagnosis rather than redesign",
      "Businesses launching a new online sales channel and needing correct foundations",
      "Catalogues that have outgrown their current platform's structure or performance",
      "Brands whose product pages earn little organic visibility despite real demand",
    ],
    limitations: [
      "Conversion improvements are measured against your baseline. External factors (seasonality, ad spend, pricing) affect results and are outside our control.",
      "Platform fees, payment gateway charges, app subscriptions and shipping costs are separate unless explicitly included.",
      "Payment and tax configuration depends on your business registration and jurisdiction. We implement your agreed configuration; we do not provide tax advice.",
      "Sales figures are never guaranteed. We commit to a measured process, not a revenue projection.",
    ],
    faqs: [
      {
        question: "Which e-commerce platform do you recommend?",
        answer:
          "Shopify for most small to mid-sized catalogues where operational simplicity matters. WooCommerce when you need deep WordPress integration or have specific hosting requirements. Custom headless builds when catalogue scale, performance or integration requirements genuinely justify the additional complexity. The decision is made with you and documented.",
      },
      {
        question: "Can you improve our existing store without rebuilding it?",
        answer:
          "Usually, yes. Most stores have significant headroom in template structure, page speed, product copy and checkout flow before a rebuild is justified. We diagnose first and only recommend a rebuild when the evidence supports it.",
      },
      {
        question: "Do you manage product data and uploads?",
        answer:
          "Yes. Catalogue structure, product data templates and bulk import setup are part of build engagements. Ongoing product data management can be scoped as a separate arrangement.",
      },
      {
        question: "Do you run ads for e-commerce?",
        answer:
          "We handle organic and on-site optimisation. Paid media can be scoped through our digital marketing service, with ad spend budgeted separately and billed by the advertising platform.",
      },
    ],
    related: ["website-development", "seo", "social-media-marketing", "software-development"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing & Management",
    shortName: "Social Media",
    category: "Growth Marketing",
    icon: Megaphone,
    featured: true,
    order: 11,
    accent: "blue",
    summary:
      "Social strategy, creative production and channel management tied to business outcomes rather than posting volume.",
    description:
      "Social media management at LN Digitech is scoped around what the channels are actually for. For most businesses that means a defined role for each platform (discovery, credibility, customer service, or retargeting audience building) rather than posting the same content everywhere on a fixed calendar. We produce the creative assets, write the copy, manage publishing, and report on what the channels contributed to the business, not just how many people saw a post. Paid social campaigns, where used, are scoped with media budget separate from management fees so the economics stay honest.",
    problems: [
      "Posting happens irregularly because nobody owns the calendar or the creative production.",
      "Content is published but nothing connects social activity to enquiries, sign-ups or sales.",
      "Creative assets are produced one at a time, slowly and inconsistently.",
      "Multiple team members post on behalf of the brand and nothing looks coordinated.",
      "Paid social spend is running without clear targeting, creative testing or attribution.",
    ],
    deliverables: [
      "Channel strategy defining the role, audience and content approach for each platform you actually use",
      "Content calendar agreed monthly, with room for timely posts",
      "Social creatives produced in the agreed monthly quantity across static and short-form video formats",
      "Copywriting for each post, written for the platform rather than copied across all of them",
      "Publishing, community monitoring and response handling within agreed hours",
      "Monthly reporting covering reach, engagement quality, referral traffic and assisted conversions",
      "Paid campaign setup and management where scoped, with media budget separate from management fees",
    ],
    process: [
      { step: "Audit", detail: "Current channels, audience, content performance and competitor presence reviewed together." },
      { step: "Strategy", detail: "Platform roles, content pillars and posting cadence agreed with realistic production capacity." },
      { step: "Produce", detail: "Creative and copy produced in monthly batches for review and scheduling." },
      { step: "Publish", detail: "Scheduled publishing, community monitoring and response handling." },
      { step: "Report", detail: "Monthly review of what worked, what did not, and what changes next." },
    ],
    suitableFor: [
      "Businesses posting inconsistently because production capacity is the bottleneck",
      "Brands whose social activity has never been connected to business outcomes",
      "Companies launching a new product or market and needing sustained creative output",
      "Teams running paid social without structured creative testing or clear attribution",
    ],
    limitations: [
      "Follower counts, reach and engagement are not guarantees, and we do not buy followers or engagement.",
      "Platform algorithm changes affect distribution in ways no agency controls.",
      "Paid media budget is separate from management fees and is billed directly by the advertising platform.",
      "Response handling during agreed hours only. Outside those hours, monitoring is not continuous unless separately scoped.",
    ],
    faqs: [
      {
        question: "How many posts do you produce per month?",
        answer:
          "Quantities are defined in your package and proposal. Static creatives and short-form video are scoped separately because production effort differs significantly. We would rather commit to a sustainable quantity executed well than a large volume of thin content.",
      },
      {
        question: "Which platforms do you manage?",
        answer:
          "We work with the platforms that actually matter for your audience rather than all of them. Typical combinations include Instagram, LinkedIn, Facebook, YouTube Shorts and X. Strategy defines which channels deserve investment; we do not maintain a presence everywhere by default.",
      },
      {
        question: "Do you need access to our accounts?",
        answer:
          "Yes, through official business-manager invitation flows for each platform. We never ask for passwords. Access is revoked when an engagement ends.",
      },
      {
        question: "Can you guarantee results from social media?",
        answer:
          "No. We commit to a defined process, consistent production quality and honest reporting. Outcomes depend on your offer, pricing, audience and market conditions, none of which social media management controls.",
      },
    ],
    related: ["content-writing", "graphic-design", "ecommerce-development", "ai-media"],
  },
  {
    slug: "it-consulting",
    name: "Business & Technology Consulting",
    shortName: "Consulting",
    category: "Consulting",
    icon: Briefcase,
    order: 12,
    accent: "navy",
    summary:
      "Independent advice on technology choices, digital strategy and vendor decisions: scoped, written and free of sales pressure.",
    description:
      "Consulting engagements exist for decisions that are too important to make from a vendor pitch. We advise on technology selection, platform migrations, agency-versus-in-house economics, build-versus-buy questions, and digital strategy for businesses that need a clear position before committing budget. Deliverables are written documents with reasoning, alternatives considered and a recommendation, not slideware. We have no financial interest in which platform you choose or which vendor you hire, which is the point.",
    problems: [
      "A significant technology decision is pending and several vendors are each recommending their own solution.",
      "An agency relationship is under review and you need an independent assessment of the work being delivered.",
      "The technology stack has grown organically and nobody can explain why each piece exists.",
      "A digital strategy needs defining before budget is committed to channels, platforms or hires.",
      "A migration or replatform is being considered and the risks have not been properly assessed.",
    ],
    deliverables: [
      "Written assessment document with findings, alternatives considered and a clear recommendation",
      "Options analysis covering cost, risk, capability and internal fit for each serious alternative",
      "Risk register identifying what could go wrong and how each risk would be mitigated",
      "Implementation roadmap with sequencing, dependencies and rough effort ranges",
      "Vendor evaluation framework you can apply to future decisions independently",
      "Follow-up session to walk stakeholders through the reasoning and answer questions",
    ],
    process: [
      { step: "Frame", detail: "Define the actual decision to be made, the constraints, and what would constitute a good outcome." },
      { step: "Gather", detail: "Interviews with your team, review of current systems, and independent research on the options." },
      { step: "Analyse", detail: "Options evaluated against agreed criteria, including the option of doing nothing." },
      { step: "Recommend", detail: "Written document with reasoning explicit enough that a board or investor could follow it." },
      { step: "Support", detail: "Follow-up session, plus optional involvement during implementation if scoped." },
    ],
    suitableFor: [
      "Businesses facing a technology decision with several credible but different options",
      "Companies reviewing an existing agency or development partner's work independently",
      "Leadership teams needing a digital strategy defined before committing budget",
      "Organisations planning a migration and needing risks assessed before commitment",
    ],
    limitations: [
      "Consulting produces a recommendation with reasoning. Implementation, if required, is scoped separately.",
      "We do not accept referral fees or commissions from vendors we evaluate. Disclose any prior relationship if relevant.",
      "Advice reflects information available at the time of the engagement. Market conditions and vendor roadmaps change.",
      "We do not provide legal, tax or regulated-industry advice. Specialist counsel should be engaged where required.",
    ],
    faqs: [
      {
        question: "How long does a consulting engagement take?",
        answer:
          "Most decision-specific engagements run two to four weeks from kickoff to written recommendation. Broader strategy work runs four to eight weeks. The timeline is defined in the proposal before work starts.",
      },
      {
        question: "Do you implement what you recommend?",
        answer:
          "We can, and many engagements continue into implementation. However the consulting deliverable stands on its own. You are free to implement with any qualified partner, and the document is written so they can.",
      },
      {
        question: "Are you biased toward any particular technology?",
        answer:
          "We build with certain stacks regularly, which means we know their trade-offs honestly. We accept no commissions from vendors, and where a different solution genuinely serves you better, we say so in writing.",
      },
      {
        question: "Can you review work another agency delivered?",
        answer:
          "Yes. Independent review of delivered work, reporting quality and technical condition is a common engagement. We document findings objectively, including where the incumbent has done good work.",
      },
    ],
    related: ["software-development", "it-consulting", "website-development"],
  },
  {
    slug: "ai-media",
    name: "AI Photo & Video Generation",
    shortName: "AI Media Studio",
    category: "AI Studio",
    icon: ImageIcon,
    featured: true,
    order: 13,
    accent: "cyan",
    summary:
      "AI-assisted image and video production for marketing, with human direction, editing and honest disclosure of what was generated.",
    description:
      "AI generation tools can produce striking visual material at a fraction of traditional production cost, with conditions. Generated output needs human direction, curation, editing and disclosure to be usable in professional marketing. At LN Digitech we use AI generation as a production technique under art direction, not as a substitute for judgement. Typical work includes concept imagery for campaigns, product visualisation where photography is impractical, motion graphics and short-form video with AI-assisted frames, and background or environment generation for photography that was actually shot. Every deliverable is disclosed as AI-assisted where relevant, and we do not generate photorealistic images of real people without documented consent.",
    problems: [
      "Campaign visuals are needed at a volume and speed that traditional photography cannot match on budget.",
      "Product photography is impractical for the catalogue size or the number of variants involved.",
      "Concept visuals are needed for pitches and internal alignment before production budget is approved.",
      "Short-form video content is required continuously and manual production cannot keep up.",
      "The team wants to use AI generation but is unsure about disclosure, rights and quality standards.",
    ],
    deliverables: [
      "Art-directed generation with defined style, palette and composition parameters before production begins",
      "Curated final selects: every delivered image is chosen and edited, not raw tool output",
      "Post-production: colour, composition, retouching and composite work on generated frames",
      "Short-form video production with AI-assisted frames, editing, captions and platform-specific formats",
      "Written disclosure of which assets are AI-assisted and which are photographically captured",
      "Usage guidance covering licensing position for the tools used and recommended disclosure language",
    ],
    process: [
      { step: "Brief", detail: "Usage context, formats, style parameters and any subject-matter restrictions agreed in writing." },
      { step: "Direct", detail: "Generation runs under a defined art direction. Random output is not presented as work." },
      { step: "Curate", detail: "Selects chosen and edited by a person. Defects corrected, compositions improved." },
      { step: "Deliver", detail: "Final assets in agreed formats with disclosure notes and usage guidance." },
      { step: "Iterate", detail: "Revision rounds as defined in the proposal, with additional rounds quoted separately." },
    ],
    suitableFor: [
      "Marketing teams needing concept visuals at speed before committing to full production",
      "E-commerce businesses with large or variable catalogues where photography is impractical",
      "Agencies producing short-form video content continuously for client channels",
      "Companies that want to use AI generation responsibly with clear disclosure practices",
    ],
    limitations: [
      "We do not generate photorealistic images or video of real people without documented consent from those individuals.",
      "AI-generated output may resemble existing works. Originality cannot be guaranteed, and trademark infringement risks should be assessed for commercial use.",
      "Tool licensing terms vary and change. We document the tools used and their position at the time of delivery; you should review terms before high-stakes commercial use.",
      "Generated content requires disclosure in many advertising contexts. We provide recommended disclosure language but you remain responsible for compliance.",
      "Some generation tools produce artefacts at fine detail that require manual correction, which affects timelines.",
    ],
    faqs: [
      {
        question: "Is AI-generated content legal to use commercially?",
        answer:
          "Most major tools permit commercial use under their current terms, but positions differ by tool and change frequently. We document which tools produced each deliverable and their commercial-use position at delivery. For high-stakes campaigns you should have legal review.",
      },
      {
        question: "Will people know the images are AI-generated?",
        answer:
          "Where disclosure is required or advisable, we provide recommended language and flag which assets need it. Being straightforward about AI assistance protects your brand more than it costs you.",
      },
      {
        question: "Can you generate images of real people?",
        answer:
          "Not without documented consent from the individuals involved. For real people we use photography or properly licensed imagery, with AI generation limited to backgrounds and environments.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Revision rounds are defined in the proposal per deliverable batch. Because generation is fast, small adjustments are usually quick; complete redirections of style or concept are treated as new direction rounds.",
      },
    ],
    related: ["graphic-design", "social-media-marketing", "content-writing"],
  },
];

/* -------------------------------------------------------------------------- */
/* Lookups                                                                     */
/* -------------------------------------------------------------------------- */

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services
    .filter((service) => service.featured)
    .sort((a, b) => a.order - b.order);
}

export function getServicesSorted(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}

export const serviceCategories = [
  "Discovery & Search",
  "Creative & Content",
  "Engineering",
  "Growth Marketing",
  "Commerce",
  "AI Studio",
  "Consulting",
] as const;
