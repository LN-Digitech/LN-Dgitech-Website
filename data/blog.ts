import type { BlogPost } from "@/types";

/**
 * Blog articles.
 *
 * Editorial rules:
 *  - Every article must answer a real reader problem.
 *  - `author` is `null` when no genuine author has been confirmed. Do not
 *    invent names or credentials.
 *  - Factual claims that need support should cite sources inline.
 *  - Articles here are written to be useful; they are not keyword filler.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "difference-between-seo-aeo-geo-and-aao",
    title: "SEO, AEO, GEO and AAO: what each one actually optimises for",
    excerpt:
      "Four similar-sounding acronyms describe four different optimisation goals. This piece defines each one in practical terms and explains where the work overlaps, and where it does not.",
    author: null,
    publishedAt: "2026-09-14",
    updatedAt: null,
    readingTimeMinutes: 8,
    category: "Discovery & Search",
    tags: ["SEO", "AEO", "GEO", "AAO", "AI search"],
    body: [
      { type: "p", text: "The optimisation vocabulary has expanded quickly. SEO described the practice for two decades with reasonable clarity, and then answer engines, generative search and agent-driven assistants each arrived with an acronym attached. Most published definitions blur the four together, which makes it hard to decide what to actually do. This article separates them by the outcome each discipline targets." },
      { type: "h2", text: "SEO: optimising for ranked results" },
      { type: "p", text: "Search Engine Optimization targets a specific interface: a list of ranked links. The work is making pages crawlable, interpretable and relevant enough to earn position for a given query, then earning clicks from that position. Technical health, content quality, internal linking and external signals all matter because they affect whether a page ranks and whether people choose it." },
      { type: "p", text: "SEO remains the highest-volume discovery channel for most businesses. It is also the discipline with the longest track record, which means its measurement practices are more mature than the newer fields." },
      { type: "h2", text: "AEO: optimising for extracted answers" },
      { type: "p", text: "Answer Engine Optimization targets a different interface: a synthesised answer, whether in an AI search feature, a voice response or an assistant. The optimisation goal shifts from position to extractability. Content must state answers clearly, in complete sentences, close to the question being answered, with supporting detail structured beneath." },
      { type: "p", text: "Practically, AEO means writing a definition in a way that survives being pulled out of context. It means placing the direct answer above the elaboration, not after three paragraphs of scene-setting. It also means structured data where it genuinely matches visible content, because parsing reliability matters more when a machine is composing the response rather than a person reading the page." },
      { type: "h2", text: "GEO: optimising for citation by generative systems" },
      { type: "p", text: "Generative Engine Optimization concerns the corpus a generative system draws on when composing a longer answer. The question is not whether you rank, or whether a single sentence is extractable, but whether your body of work is authoritative and well-attributed enough to be chosen as a source." },
      { type: "p", text: "This is largely an editorial discipline. Consolidating thin and duplicate pages, publishing genuinely original explanations, making authorship and entity identity consistent, and ensuring the technical access is not quietly blocking the crawlers these systems rely on. If your site publishes derivative summaries of material that already exists elsewhere, there is no reason for a generative system to cite you." },
      { type: "h2", text: "AAO: optimising so agents can act" },
      { type: "p", text: "Assistive Agent Optimization is the term least settled in usage, so it is worth stating the definition we work with explicitly. AAO targets whether an AI-assisted or agent-driven experience can discover, retrieve, interpret and act on your business information. Answer engines need to quote you. Agents need to do something (check availability, apply a policy, complete a booking) on your behalf." },
      { type: "p", text: "That requires information in forms agents can actually use: machine-legible policies, consistent attributes, unambiguous pricing rules, structured feeds where applicable. It also requires the site to be accessible in the ordinary sense, because the structural markers that help screen readers are the same ones that help automated systems parse content." },
      { type: "h2", text: "Where the work overlaps, and where it does not" },
      { type: "p", text: "All four disciplines share technical foundations: crawlable pages, valid markup, consistent entity information, fast and accessible rendering. A site that is technically healthy performs better under every framework. That overlap is real, and it is why one team can often handle all four." },
      { type: "p", text: "The differences show up in what is optimised for. SEO optimises position. AEO optimises extractability. GEO optimises authority and citability. AAO optimises actionability. A change that improves one can be neutral for another: a page restructured for AEO may not help if the underlying content is derivative and therefore invisible to GEO, and none of it helps AAO if the business rules an agent needs exist only in a PDF." },
      { type: "h2", text: "A practical starting point" },
      { type: "ol", items: [
        "Fix technical health first. It is the shared foundation and the cheapest relative gain.",
        "Audit your key pages for extractability: does each answer a real question clearly, near the top?",
        "Review your content corpus for duplication and thinness. Consolidate before producing more.",
        "Inventory every fact an agent might need about your business, and check where each one currently lives.",
        "Define a small, fixed test set of questions and run it periodically across the platforms your buyers actually use. Record what happens, including failures.",
      ] },
      { type: "note", text: "No discipline in this space can guarantee inclusion in a platform's answers, citations or recommendations. Platforms change retrieval behaviour without notice. Treat any vendor guarantee in this area as a claim you should decline." },
      { type: "h2", text: "Related reading" },
      { type: "p", text: "If you are deciding how these disciplines fit your specific situation, our pages on AEO, GEO and AAO explain the scope and limitations of each in detail, and we are happy to discuss which apply to your business." },
    ],
  },
  {
    slug: "why-your-redesign-lost-organic-traffic",
    title: "Why redesigns lose organic traffic, and the checks that prevent it",
    excerpt:
      "A redesign is one of the few changes most businesses make that can silently halve organic visits. The causes are almost always the same handful of errors, all of which are checkable before launch.",
    author: null,
    publishedAt: "2026-08-28",
    updatedAt: null,
    readingTimeMinutes: 7,
    category: "Engineering",
    tags: ["SEO", "website", "migrations", "performance"],
    body: [
      { type: "p", text: "Redesign migrations lose organic traffic often enough that the pattern is well documented, and the causes are depressingly consistent. Almost none of them are design failures. They are process failures: things nobody owned, checked or wrote down before the old site went offline." },
      { type: "h2", text: "The redirect map was never written" },
      { type: "p", text: "Every URL on the old site that earned a visit, a link or an index entry needs a destination on the new site. When redirects are missing, those URLs return 404 or, worse, soft-404, and whatever authority they had accumulated disappears. The fix is unglamorous: export every indexed and linked URL from search console and your analytics, map each one to a specific destination, and verify the mapping before launch rather than after complaints arrive." },
      { type: "p", text: "Watch for redirect chains and loops as well. A chain of three or more hops dilutes signals and slows every request that passes through it. Map old URLs directly to final destinations." },
      { type: "h2", text: "Page titles and headings changed without a content reason" },
      { type: "p", text: "New designs frequently arrive with rewritten titles and headings because the old wording felt clunky in a mockup. Sometimes the rewrite is an improvement. Often it removes the specific language a page was ranking for, in which case the page drops and nobody connects the drop to the copy change six weeks earlier." },
      { type: "p", text: "Before launch, compare titles, headings and primary content for your top organic landing pages. Where the redesign changes wording, decide deliberately whether the new version targets the same intent." },
      { type: "h2", text: "Internal links were rebuilt around the new navigation" },
      { type: "p", text: "The old site's in-content links (from blog posts to service pages, between related articles) often do not survive a redesign, because they lived in content rather than navigation. Navigation alone rarely compensates. Crawl a staged version of the new site and compare internal link counts to the old site before launch." },
      { type: "h2", text: "Template-level metadata was dropped" },
      { type: "p", text: "Title patterns, meta descriptions, canonical tags, Open Graph fields, structured data and robots directives all live at template level. A new template that omits any of them affects every page at once, which is why migration drops tend to be sudden rather than gradual. Validate the staged site against a checklist rather than spot-checking three pages." },
      { type: "h2", text: "Performance regressed" },
      { type: "p", text: "New designs often ship heavier JavaScript, larger images and more third-party scripts than whatever they replaced. If the redesign makes the site slower on mid-range mobile, engagement drops follow, and Core Web Vitals problems compound the ranking impact of the structural issues above." },
      { type: "h2", text: "A pre-launch checklist worth keeping" },
      { type: "ol", items: [
        "Complete redirect map, verified with a crawl of the staged site.",
        "Title, heading and primary-content comparison for top organic landing pages.",
        "Internal link audit comparing old and new.",
        "Template-level metadata validation: titles, descriptions, canonicals, structured data, robots directives.",
        "Core Web Vitals measured on the staged build at mobile viewport and mid-range hardware profile.",
        "Search Console and analytics access confirmed and properties verified before the old site goes offline.",
        "A monitoring plan for the first four weeks, with named owners for each check.",
      ] },
      { type: "note", text: "The single most common failure is the absence of a named owner. Every item above needs someone responsible for verifying it, not a general expectation that the team will handle it." },
    ],
  },
  {
    slug: "scoping-a-website-project-properly",
    title: "How to scope a website project so the quote means something",
    excerpt:
      "Most website project disputes trace back to a scope that was never written down. Here is what a usable scope contains, and the questions to answer before anyone quotes.",
    author: null,
    publishedAt: "2026-08-05",
    updatedAt: null,
    readingTimeMinutes: 6,
    category: "Process",
    tags: ["web development", "scoping", "procurement"],
    body: [
      { type: "p", text: "A quote against undefined scope is a guess with an invoice attached. It will be wrong: either the client feels overcharged for what was delivered, or the agency absorbs work that was never budgeted. Both outcomes were avoidable, and both trace to the same missing document." },
      { type: "h2", text: "Start with the page inventory" },
      { type: "p", text: "Not a sitemap: an inventory. Every template type, how many instances of each, and the current state of content for each. 'About, services, contact' is a sitemap. 'About (1 page, copy needs rewriting, 3 photos need replacing), Services (12 detail pages, copy exists in a PDF, no images), Contact (1 page, form needs to submit to our CRM)' is an inventory. The difference determines whether you are buying a five-page site or a thirty-page content project." },
      { type: "h2", text: "Define features as tasks, not adjectives" },
      { type: "p", text: "'A blog' is ambiguous. 'A blog with categories, tag filtering, an RSS feed and markdown-authored posts, editable by two internal authors' is a feature definition. Every ambiguous feature description is a future change request. Where a feature involves third-party services (a CRM, a payment provider, a booking system), name the specific service and confirm it has a usable API." },
      { type: "h2", text: "Decide who produces content" },
      { type: "p", text: "Content is the most common cause of delayed launches. Decide explicitly: who writes the copy, who takes or sources photography, who reviews both, and what happens if content is late. Agencies that write content should say how many revision rounds are included. Agencies that do not should say what format content must arrive in, and what happens to the timeline if it does not." },
      { type: "h2", text: "State the maintenance reality" },
      { type: "p", text: "Every website needs ongoing attention: dependency updates, security patches, platform changes, occasional content fixes. Decide whether that is handled in-house, by the agency under a maintenance agreement, or not at all. A site with no plan for maintenance will accumulate problems until someone is forced to deal with them at higher cost." },
      { type: "h2", text: "Agree on acceptance criteria" },
      { type: "p", text: "'Looks right' is not an acceptance criterion. 'Loads in under 2.5 seconds on a mid-range mobile connection', 'passes keyboard navigation testing on all primary flows', 'all forms submit and notify the configured inbox' are. Define acceptance in testable terms and both sides know when the project is finished." },
      { type: "h2", text: "What should be in the proposal" },
      { type: "ul", items: [
        "Page inventory with content status for each.",
        "Feature list written as specific, testable definitions.",
        "Third-party integrations named, with responsibility for each.",
        "Content responsibilities and revision round counts.",
        "Performance and accessibility targets, with the conditions they are measured under.",
        "Timeline with dependencies, including dependencies on the client.",
        "Payment schedule tied to defined milestones.",
        "What is explicitly out of scope.",
      ] },
      { type: "p", text: "The last item matters most. A proposal that lists what is included without listing what is excluded is describing an open-ended engagement, which is rarely what either party intends." },
    ],
  },
  {
    slug: "responsible-use-of-ai-generated-marketing-imagery",
    title: "Using AI-generated imagery in marketing without damaging your brand",
    excerpt:
      "AI generation can produce usable marketing visuals cheaply and quickly. Used carelessly it also produces rights risk, quality problems and a credibility cost. Here is how we approach it.",
    author: null,
    publishedAt: "2026-07-16",
    updatedAt: null,
    readingTimeMinutes: 6,
    category: "AI Studio",
    tags: ["AI", "design", "marketing", "disclosure"],
    body: [
      { type: "p", text: "AI image generation is now good enough that the interesting question is no longer whether the output looks real. It is what happens to your brand when you use it without a process. The failure modes are not usually aesthetic. They are rights, disclosure and consistency." },
      { type: "h2", text: "Generation is a production technique, not a creative direction" },
      { type: "p", text: "Raw tool output is not a deliverable. Without art direction (defined palette, composition rules, subject constraints, reference style) each generation is a coin flip, and a set of coin flips does not make a campaign. We establish direction before generating, then treat the tool as fast production within that direction. This also makes revision tractable: adjustments to a defined direction are quick, while complete redirections mean the direction was never set." },
      { type: "h2", text: "Curate, then post-produce" },
      { type: "p", text: "Every delivered image should be selected and edited by a person. Generated frames carry artefacts (malformed hands, impossible geometry, inconsistent text, fine-detail mush) that are obvious at campaign scale even when they pass at thumbnail size. Colour correction, compositing and retouching are still required. Skipping this step is how brands end up with AI-looking campaigns that quietly signal low production values." },
      { type: "h2", text: "Disclosure is usually the right call" },
      { type: "p", text: "Disclosure requirements vary by advertising context and jurisdiction, and the rules are still developing. Beyond compliance, there is a brand calculation. Audiences are increasingly aware of AI-generated imagery, and discovering it without disclosure costs more trust than admitting it upfront. We document which assets are AI-assisted and provide recommended disclosure language so the decision is deliberate rather than accidental." },
      { type: "h2", text: "The rights position is genuinely uncertain" },
      { type: "p", text: "Most major tools permit commercial use under current terms, but copyright protection for AI-generated output remains unsettled in many jurisdictions, and generation can produce outputs resembling existing works. For campaign-critical assets (the hero image for a product launch, key brand photography) this uncertainty is worth discussing with legal counsel rather than assuming away. For lower-stakes usage the risk is usually proportionate, but it should still be a decision rather than an oversight." },
      { type: "h2", text: "Do not generate real people without consent" },
      { type: "p", text: "We do not generate photorealistic images or video of real individuals without documented consent. This applies to customers, employees, competitors and public figures alike. For real people, use photography or properly licensed imagery; AI generation can handle backgrounds and environments around them." },
      { type: "h2", text: "Where it works well today" },
      { type: "ul", items: [
        "Concept and mood visuals for internal alignment before production budget is committed.",
        "Environment and context imagery where photography is impractical at required volume.",
        "Product visualisation for variants, configurations or seasonal colourways that cannot all be shot.",
        "Background and texture generation in service of real photography.",
        "Rapid iteration on campaign concepts before committing to a shoot.",
      ] },
      { type: "h2", text: "Where it still struggles" },
      { type: "ul", items: [
        "Fine textile and material detail at close range.",
        "Accurate text, logos and interface elements within an image.",
        "Consistent character identity across a series of frames.",
        "Anything requiring verifiable factual accuracy about a real place or product.",
      ] },
      { type: "note", text: "The honest position: AI generation is a cost and speed advantage for specific marketing tasks, not a wholesale replacement for photography, videography or design judgement. Used with direction, curation and disclosure, it is genuinely useful. Used as a shortcut, it costs more than it saves." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsSorted(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getRelatedPosts(post: BlogPost, count = 2): BlogPost[] {
  return getPostsSorted()
    .filter((candidate) => candidate.slug !== post.slug)
    .filter(
      (candidate) =>
        candidate.category === post.category ||
        candidate.tags.some((tag) => post.tags.includes(tag)),
    )
    .slice(0, count);
}
