# AGENTS.md

# LetrasBonitas — Master AI Agent Instructions

> This file is the primary operating manual for AI coding agents working on the LetrasBonitas website.
>
> It is intended for Cursor, Antigravity, Claude Code, and other coding agents.
>
> **Read this file before making any change to the project.**
>
> The existing SEO/URL spreadsheet supplied by the project owner is the source of truth for the current website architecture, URL plan, keyword mapping, topical structure, and publishing priorities.

---

# 1. PROJECT IDENTITY

## Website

**Project:** LetrasBonitas

**Primary concept:** Spanish-language fancy text, fonts, letters, symbols, decorative text, usernames, and text-generation tools.

The website is intended to become a high-quality utility website rather than a conventional blog.

The core experience should combine:

1. Useful interactive tools
2. Strong topical SEO
3. Excellent UX
4. Fast performance
5. High-quality supporting content
6. Strong internal linking
7. Long-term organic traffic
8. Responsible advertising monetization
9. A clean, scalable technical architecture
10. A valuable digital asset that could eventually be sold/flipped

---

# 2. BUSINESS OBJECTIVE

The long-term business model is:

```text
Build useful tools
        ↓
Create excellent user experience
        ↓
Build topical authority
        ↓
Rank organically
        ↓
Generate recurring organic traffic
        ↓
Monetize with advertising
        ↓
Build stable revenue
        ↓
Document traffic + revenue + SEO performance
        ↓
Create a valuable sellable website asset
```

The website must therefore be built as a **long-term digital asset**, not as a short-term SEO experiment.

Every technical, content, and design decision should consider:

* Search visibility
* User satisfaction
* Revenue potential
* Maintainability
* Scalability
* Trust
* Site speed
* Future acquisition value

Do not use shortcuts that may create temporary traffic while damaging the site's long-term value.

---

# 3. SOURCE OF TRUTH

## CRITICAL RULE

The project owner's existing SEO/URL spreadsheet is the **source of truth** for the planned website structure.

Do NOT arbitrarily:

* Rename existing URLs
* Change slugs
* Create duplicate URLs
* Delete planned pages
* Create keyword-variant pages
* Move pages into different silos
* Invent new silos
* Rewrite the architecture

unless explicitly instructed or unless a documented SEO/technical reason is presented first.

When working on a specific page:

1. Check the spreadsheet.
2. Identify the URL.
3. Identify its silo.
4. Identify its primary keyword.
5. Identify its search intent.
6. Identify related keywords.
7. Identify its parent/child relationships.
8. Identify related tools/content.
9. Implement according to the architecture.

If a conflict exists between an AI agent's assumption and the spreadsheet:

**The spreadsheet wins unless the project owner explicitly changes the plan.**

---

# 4. PRIMARY SEO PHILOSOPHY

The website follows a modern Google-first SEO strategy.

The goal is NOT:

> Create as many pages as possible.

The goal is:

> Create the most useful and complete website for the topics represented by the site's tools and content architecture.

Prioritize:

* People-first content
* Original value
* Genuine usefulness
* Information gain
* Search intent satisfaction
* Strong topical relationships
* Clear site architecture
* Internal linking
* Crawlability
* Indexability
* Fast performance
* Excellent UX
* Trust
* Accurate structured data
* Real tool functionality

Avoid:

* Keyword stuffing
* Thin AI content
* Generic filler
* Mass-produced pages
* Near-duplicate pages
* Doorway pages
* Search-engine-first writing
* Fake expertise
* Manipulative internal linking
* Unnecessary keyword variations
* Programmatic spam
* Pages created only because a keyword exists

---

# 5. AI SEARCH / AI OVERVIEW PRINCIPLES

The website should be optimized for both:

* Traditional Google Search
* AI-powered search experiences such as AI Overviews and AI Mode

Do NOT create a separate "AI SEO" system that replaces normal SEO.

Strong traditional SEO fundamentals remain foundational.

Focus on:

* Crawlable pages
* Indexable pages
* Clear content
* Direct answers
* Helpful explanations
* Strong topical relationships
* Original information
* Good UX
* Accessible text
* Structured data where appropriate
* Relevant internal links
* Strong page experience

Do NOT create special pages solely for AI systems.

Do NOT add invented AI-specific markup.

Do NOT create an `llms.txt` file unless the project owner explicitly requests it for a separate reason.

Do NOT stuff pages with artificial entity lists or keyword combinations.

---

# 6. WEBSITE LANGUAGE

The primary website language is:

**Spanish**

All user-facing content should be written in natural Spanish appropriate for the target audience.

Avoid literal machine translations.

Avoid unnatural keyword insertion.

Avoid Spanish that sounds translated from English.

Use:

* Natural Spanish
* Clear vocabulary
* Short sentences
* Helpful explanations
* Appropriate regional neutrality
* Consistent terminology

SEO metadata, headings, buttons, labels, tool instructions, FAQs, navigation, and supporting content should follow the site's Spanish language strategy.

---

# 7. USER-FIRST DESIGN PRINCIPLE

The website is a tool website.

The user should be able to use the tool immediately.

Do NOT force users to read a long article before reaching the functionality.

For most tool pages:

```text
Header
↓
Breadcrumb
↓
Page title
↓
Short value proposition
↓
Tool interface
↓
Output/result
↓
Copy/download/share actions
↓
Helpful explanation
↓
Examples
↓
How it works / how to use
↓
FAQs
↓
Related tools
↓
Supporting content
```

The exact structure may vary by tool.

Functionality comes first.

---

# 8. PREMIUM DESIGN DIRECTION

LetrasBonitas must look like a premium modern web application.

Do NOT make it look like:

* An old SEO directory
* A generic WordPress blog
* A low-quality AI site
* An ad farm
* A template copied from another website

Design characteristics:

* Modern
* Clean
* Premium
* Minimal
* Friendly
* Highly usable
* Mobile-first
* Fast
* Accessible
* Consistent
* Professional

Use strong visual hierarchy.

Whitespace is important.

Avoid excessive decoration.

Avoid excessive gradients.

Avoid excessive shadows.

Avoid visual clutter.

---

# 9. MOBILE-FIRST DESIGN

A large percentage of users are expected to access the website from mobile devices.

Therefore:

**Design mobile first.**

Every page must work correctly at:

* 320px
* 360px
* 375px
* 390px
* 414px
* 768px
* 1024px
* 1280px+
* Large desktop screens

Important mobile rules:

* Tool inputs must be easy to tap.
* Buttons must have comfortable touch targets.
* Text must remain readable.
* No horizontal scrolling.
* Navigation must be simple.
* Results must be easy to copy.
* Important actions must be visually obvious.
* Ads must never cover the tool.
* Sticky elements must not obstruct content.

Do not design desktop first and "make it responsive" afterward.

---

# 10. DESIGN SYSTEM

Create reusable design tokens.

At minimum define:

* Colors
* Typography
* Font sizes
* Font weights
* Line heights
* Border radius
* Shadows
* Spacing
* Container widths
* Breakpoints
* Button styles
* Input styles
* Card styles
* Badge styles
* Navigation
* Footer
* Tool components

Do not create random styling for every page.

A consistent design system improves:

* UX
* Development speed
* Maintainability
* Brand identity
* Future expansion

---

# 11. COMPONENT ARCHITECTURE

Prefer reusable components.

Examples:

```text
Header
MobileNavigation
DesktopNavigation
Footer
Breadcrumbs
ToolShell
ToolInput
ToolOutput
CopyButton
ClearButton
DownloadButton
ShareButton
ExampleBox
InfoCard
FAQSection
RelatedTools
RelatedGuides
AdSlot
SearchBox
CategoryCard
ToolCard
ArticleCard
Pagination
```

Do not duplicate large UI blocks unnecessarily.

If three pages use the same tool layout, create a reusable component.

---

# 12. TOOL DEVELOPMENT PRINCIPLES

Every tool must actually work.

Never create fake interfaces.

Never create buttons that do nothing.

Never display static output pretending it is dynamically generated.

Every tool should have:

* Clear input
* Clear action
* Clear output
* Error handling
* Empty state
* Reset/clear functionality where appropriate
* Copy functionality where useful
* Mobile usability
* Accessible controls

Tool functionality should preferably run client-side when possible.

Avoid unnecessary API calls for simple text transformations.

---

# 13. TOOL UX

The user should understand the tool immediately.

Example:

```text
H1: Generador de Letras Bonitas

Short explanation

[ Escribe o pega tu texto aquí... ]

[ Transformar ]

Resultado

𝓔𝓳𝓮𝓶𝓹𝓵𝓸

[Copiar]
```

Use progressive disclosure where necessary.

Do not overwhelm users with 30 controls at once.

---

# 14. TOOL PERFORMANCE

Simple tools should feel instantaneous.

Avoid:

* Unnecessary server requests
* Heavy libraries
* Huge JavaScript bundles
* Large animation libraries
* Blocking scripts
* Unnecessary dependencies

For simple Unicode/text transformation tools:

Prefer:

```text
Input
→
Local processing
→
Output
```

when technically appropriate.

---

# 15. JAVASCRIPT PRINCIPLES

Use JavaScript only where necessary.

Do not turn static informational content into a JavaScript-only application.

Important SEO content should exist in crawlable HTML.

Avoid:

```text
Client-only rendering
```

for essential SEO content unless there is a compelling technical reason.

Prefer server-rendered/static content wherever practical.

---

# 16. FRAMEWORK / TECHNICAL STACK

The project may use the existing selected framework and stack.

Do not replace the framework without explicit authorization.

If the project uses Next.js:

Prefer:

* App Router
* Server Components where appropriate
* Static generation where possible
* Dynamic rendering only where necessary
* Optimized images
* Metadata API
* Structured data
* Clean route organization

Avoid unnecessary client components.

A component should be client-side only when it genuinely requires client-side interaction/state/browser APIs.

---

# 17. URL ARCHITECTURE

URLs must follow the existing spreadsheet.

General principles:

* Lowercase
* Hyphen-separated
* Human-readable
* Stable
* Descriptive
* Short where possible
* No unnecessary parameters
* No dates unless necessary
* No keyword stuffing

Good:

```text
/letras-cursivas/
/conversor-de-letras/
/letras-goticas/
```

Avoid:

```text
/page?id=123
/font-generator-best-free-online-2026/
```

Do not change established URLs casually.

---

# 18. CANONICAL URLS

Every indexable page must have the correct canonical URL.

Canonical URLs should:

* Match the intended public URL
* Use HTTPS
* Use the preferred hostname
* Avoid accidental query parameters
* Avoid duplicate URL forms

Never create self-canonical conflicts.

---

# 19. INDEXABILITY

Every page must have an intentional indexability decision.

Before publishing a page ask:

```text
Should Google index this page?
```

If yes:

* Correct canonical
* Indexable
* Crawlable
* Useful content
* Internal links
* Included in sitemap when appropriate

If no:

Do not accidentally expose it as an important SEO landing page.

---

# 20. SITEMAP

Maintain a clean XML sitemap.

Include:

* Important indexable pages
* Tool pages
* Valuable guides
* Relevant categories

Do not intentionally include:

* Duplicate URLs
* Redirect URLs
* Noindex pages
* Utility URLs
* Internal search pages
* Unnecessary parameter URLs

---

# 21. ROBOTS.TXT

Keep robots.txt simple and intentional.

Do not block important:

* CSS
* JavaScript
* Images
* Tool functionality
* SEO content

Do not use robots.txt as a substitute for proper noindex/canonical management.

---

# 22. INFORMATION ARCHITECTURE

The site should communicate clear relationships.

Example:

```text
Homepage
│
├── Main Topic
│   ├── Tool
│   ├── Related Tool
│   ├── Guide
│   └── Supporting Guide
│
├── Main Topic
│   ├── Tool
│   ├── Tool
│   └── Guide
│
└── Main Topic
    ├── Tool
    └── Guide
```

The hierarchy must make sense to:

* Users
* Search engines
* AI systems
* Future developers
* Future website buyers

---

# 23. TOPICAL AUTHORITY

The website should develop topical authority naturally.

For each main topic:

```text
Pillar
↓
Core tool
↓
Related tools
↓
Supporting guides
↓
Examples
↓
Use cases
↓
FAQs
```

Do not create pages simply to fill a silo.

A page should have a distinct purpose.

---

# 24. SEARCH INTENT

Before creating or editing a page, determine the dominant intent.

Common intents:

* Tool/action
* Informational
* Navigational
* Commercial investigation
* Comparison
* Educational
* Use case

Tool keywords usually require the tool early on the page.

Informational keywords require a direct answer and useful explanation.

Never force a blog article onto a query that clearly requires an interactive tool.

---

# 25. KEYWORD MAPPING

Each indexable URL should have a clear primary topic.

Use secondary keywords naturally.

Do not create:

```text
Page A → same keyword
Page B → same keyword variation
Page C → same keyword variation
Page D → same keyword variation
```

unless the search intent is genuinely different.

Avoid cannibalization.

---

# 26. INFORMATION GAIN

Every important page should contain something genuinely useful.

Possible information gain:

* Interactive functionality
* Original examples
* Better explanations
* Useful tables
* Unique formatting
* Real use cases
* Clear methodology
* Practical instructions
* Better UX
* Supported-character information
* Limitations
* Comparison information
* Original observations
* Helpful troubleshooting

Do not simply rewrite the top-ranking pages.

---

# 27. CONTENT QUALITY

Content must be:

* Accurate
* Useful
* Original
* Clear
* Well structured
* Natural
* Easy to scan
* Relevant to the tool/page
* Written for humans

Avoid:

* Filler introductions
* Repetitive paragraphs
* Keyword stuffing
* Fake statistics
* Fake quotations
* Fake user experiences
* Unsupported claims
* Generic AI language

---

# 28. AI-GENERATED CONTENT

AI can be used as a development and writing assistant.

However:

**AI generation itself is not the value.**

The final content must provide genuine user value.

Do not mass-generate thousands of pages simply because it is technically easy.

Before publishing AI-assisted content ask:

```text
Does this page deserve to exist?
Does it solve a real user problem?
Is it substantially useful?
Does it provide information gain?
Is it accurate?
Does it have a distinct search intent?
Would a human reader find it valuable?
```

If the answer is no, do not publish it.

---

# 29. CONTENT READABILITY

Default to clear, accessible Spanish.

Prefer:

* Short paragraphs
* Descriptive headings
* Bullets
* Tables when useful
* Examples
* Clear definitions
* Direct answers

Avoid huge walls of text.

The content should be easy to scan on mobile.

---

# 30. ARTICLE STRUCTURE

A typical guide can use:

```text
H1
Short answer/introduction

Tool or relevant feature if applicable

H2: What is...
H2: How does it work?
H2: How to use...
H2: Examples
H2: Common problems
H2: Tips
H2: Related tools
H2: FAQ
```

Do not force every article into exactly the same template.

Content structure should match intent.

---

# 31. DIRECT ANSWERS

Where appropriate, answer the main question early.

Do not hide the answer behind:

* Long introductions
* Multiple advertisements
* Large hero graphics
* Unnecessary storytelling

For example:

```text
¿Qué son las letras cursivas?

Las letras cursivas son...
```

Then expand with useful detail.

---

# 32. INTERNAL LINKING

Internal links are a major part of the site's architecture.

Link naturally between:

* Related tools
* Pillar pages
* Supporting guides
* Categories
* Relevant use cases

Use descriptive anchor text.

Avoid:

```text
Haz clic aquí
Leer más
Más información
```

when a descriptive anchor would be better.

Prefer natural topical anchors.

Do not over-optimize exact-match anchor text on every link.

---

# 33. INTERNAL LINKING RULE

Every important page should be connected to the broader topic.

Avoid orphan pages.

Before publishing:

```text
Where does this page link?
Which pages link to this page?
What is its parent topic?
What related tools should users discover?
```

---

# 34. BREADCRUMBS

Use breadcrumbs where they improve hierarchy and navigation.

Example:

```text
Inicio
>
Letras
>
Letras Cursivas
```

Breadcrumbs should represent the actual information architecture.

Do not create fake breadcrumb hierarchies simply for keywords.

---

# 35. TITLE TAGS

Titles must be:

* Unique
* Descriptive
* Natural
* Relevant to search intent
* Written for users

Avoid repetitive templates such as:

```text
Keyword | Best Free Tool | 2026
```

on every page.

Do not add the current year unless it provides meaningful value.

---

# 36. META DESCRIPTIONS

Write useful, compelling descriptions.

The description should communicate:

* What the page does
* Why the user should visit
* Important functionality/value

Do not keyword stuff.

Meta descriptions should be unique for important pages.

---

# 37. HEADINGS

Each page should have a logical heading hierarchy.

Generally:

```text
H1
  H2
    H3
  H2
```

Do not use headings purely for styling.

Do not insert keywords into headings unnaturally.

---

# 38. STRUCTURED DATA

Use structured data only when it accurately represents the page.

Potential schema types may include:

* WebSite
* WebPage
* BreadcrumbList
* Article
* BlogPosting
* FAQPage where genuinely appropriate and compliant
* Organization
* SoftwareApplication where appropriate
* Other valid schema types when justified

Do not add schema simply because it exists.

Never create structured data containing information that is not visible/accurate on the page.

---

# 39. FAQ CONTENT

FAQs should answer real user questions.

Do not create 30 artificial FAQs simply to add keywords.

Good FAQ:

```text
¿Las letras bonitas funcionan en Instagram?

...
```

Bad FAQ:

```text
¿Qué son las mejores letras bonitas gratis?
¿Qué son las letras bonitas online?
¿Qué son las letras bonitas fáciles?
```

when these are simply keyword variations.

---

# 40. IMAGES

Images should add value.

Use images when they help explain:

* The tool
* Examples
* Visual styles
* Usage
* Comparisons
* Instructions

Avoid unnecessary stock images.

Avoid decorative images that significantly increase page weight without adding value.

Optimize:

* Dimensions
* Format
* Compression
* Alt text
* Lazy loading where appropriate

---

# 41. ACCESSIBILITY

The website must be accessible.

Use:

* Semantic HTML
* Proper labels
* Keyboard navigation
* Visible focus states
* Appropriate contrast
* Accessible buttons
* Accessible form controls
* Meaningful alt text
* ARIA only when necessary

Do not use ARIA to compensate for poor HTML structure.

---

# 42. CORE WEB VITALS

Performance is a priority.

Optimize for:

* LCP
* INP
* CLS

Also monitor:

* TTFB
* Total JavaScript
* CSS size
* Image weight
* Font loading
* Third-party scripts

Do not sacrifice performance for decorative animations.

---

# 43. FONT PERFORMANCE

Avoid loading unnecessary font families.

If custom fonts are used:

* Limit weights
* Subset where appropriate
* Use efficient formats
* Avoid blocking rendering
* Avoid loading dozens of fonts

Important:

The website itself may display many decorative Unicode styles, but this does **not** mean the browser should download hundreds of font files.

Prefer Unicode characters where appropriate.

---

# 44. ANIMATIONS

Animations should be subtle.

Use them to improve:

* Feedback
* State changes
* Navigation
* Tool interaction

Avoid:

* Constant motion
* Large entrance animations
* Heavy particle effects
* Excessive parallax
* Animation on every element

Respect:

```css
prefers-reduced-motion
```

---

# 45. ADSENSE / ADVERTISING

Advertising is part of the long-term monetization strategy.

However:

**User experience comes first.**

Do not build pages around advertisements.

Do not:

* Cover tool controls with ads
* Insert ads between every paragraph
* Use deceptive ad placements
* Make ads look like tool buttons
* Create accidental click zones
* Slow down the entire site with excessive scripts

The tool should remain the primary experience.

---

# 46. AD PLACEMENT PHILOSOPHY

A likely structure:

```text
Header
↓
Tool
↓
Tool result/actions
↓
Helpful explanation
↓
Ad
↓
Related content/tools
```

Exact placement should be tested later using real traffic and revenue data.

Do not optimize ad density before establishing good UX and organic traffic.

---

# 47. THIRD-PARTY SCRIPTS

Treat all third-party scripts as performance costs.

Before adding:

* Analytics
* Ads
* Tracking
* Chat widgets
* Social widgets
* Other scripts

Ask:

```text
Is this necessary?
Can it load later?
Can it be replaced with a lighter solution?
Does it affect Core Web Vitals?
```

---

# 48. ANALYTICS

Prepare the site for measurement.

Important systems may include:

* Google Search Console
* Google Analytics
* AdSense reporting

Track:

* Organic clicks
* Impressions
* CTR
* Rankings
* Landing pages
* Engagement
* Tool usage
* Ad performance
* Revenue

Do not make SEO decisions based on assumptions when actual data is available.

---

# 49. SEARCH CONSOLE

Search Console should be treated as an important source of truth.

Monitor:

* Indexing
* Search queries
* Pages
* CTR
* Impressions
* Clicks
* Technical issues
* Core Web Vitals
* Search appearance
* AI search visibility/reporting where available

Use actual query data to improve content and tools.

---

# 50. SEO TESTING

SEO changes should be deliberate.

When possible:

```text
Hypothesis
↓
Change
↓
Measurement
↓
Observation
↓
Decision
```

Do not randomly change:

* Titles
* URLs
* Content
* Internal links
* Schema
* Architecture

every few days.

---

# 51. CHANGE MANAGEMENT

Before making a significant change:

1. Understand the current implementation.
2. Identify affected pages.
3. Identify SEO consequences.
4. Identify UX consequences.
5. Identify performance consequences.
6. Make the smallest sensible change.
7. Test.
8. Verify.
9. Document important decisions.

---

# 52. DO NOT BREAK EXISTING SEO

Before modifying an existing page check:

* URL
* Canonical
* Metadata
* Structured data
* Internal links
* Sitemap inclusion
* Heading structure
* Content
* Indexability
* Existing redirects

Never casually replace a ranking page.

---

# 53. REDIRECTS

If a URL must change:

Use an appropriate permanent redirect.

Do not:

* Create redirect chains
* Create redirect loops
* Redirect unrelated pages to the homepage
* Mass redirect everything to one page

Preserve relevant SEO value wherever appropriate.

---

# 54. 404 PAGES

Create a useful 404 page.

It should provide:

* Clear explanation
* Homepage link
* Search
* Popular tools
* Helpful navigation

Do not leave users at a dead end.

---

# 55. SEARCH FUNCTION

If the website includes site search:

* Make it fast
* Make it accessible
* Provide useful results
* Avoid indexing thousands of internal search URLs unless intentionally planned
* Prevent search spam

---

# 56. SECURITY

Follow secure coding practices.

Never expose:

* API keys
* Secrets
* Environment variables
* Private tokens
* Database credentials

Do not place secrets in client-side JavaScript.

Validate user input.

Sanitize output where appropriate.

Avoid dangerous HTML injection.

---

# 57. USER INPUT

Tools process user-provided text.

Assume input can be:

* Very long
* Empty
* Unicode
* Emoji
* Special characters
* HTML-like text
* Malformed
* Unexpected

Handle these safely.

Do not execute user input as HTML or JavaScript.

---

# 58. UNICODE

Unicode is central to LetrasBonitas.

Test tools with:

* Latin characters
* Accented Spanish characters
* Numbers
* Symbols
* Emoji
* Combining characters
* Special Unicode characters

Do not assume:

```text
string.length
```

always represents the number of user-perceived characters.

Where relevant, understand:

* Unicode code points
* Grapheme clusters
* Combining marks
* Surrogate pairs

---

# 59. COPY FUNCTIONALITY

Copy actions are highly important for this type of site.

Copy buttons should:

* Work reliably
* Provide immediate feedback
* Work on mobile
* Use the Clipboard API when available
* Have a fallback where appropriate
* Be accessible

Example state:

```text
Copy
```

then:

```text
Copied!
```

Do not make users manually select complicated Unicode output when a copy button can solve the problem.

---

# 60. OUTPUT UX

Outputs should be visually distinct from inputs.

For generated text:

* Preserve whitespace where relevant
* Allow easy copying
* Avoid breaking long Unicode strings
* Make the result readable
* Provide useful variants when the tool supports variants

---

# 61. ERROR STATES

Every interactive tool needs sensible error handling.

Examples:

```text
Please enter some text.
```

or:

```text
This character is not supported.
```

Do not expose raw JavaScript errors to users.

---

# 62. EMPTY STATES

Empty states should guide the user.

Example:

```text
Escribe tu texto arriba para ver diferentes estilos.
```

Avoid empty blank panels with no explanation.

---

# 63. SEO + TOOL BALANCE

A tool page is not just a text article.

A strong tool page should combine:

```text
Functionality
+
Useful explanation
+
Examples
+
Search intent
+
Internal links
+
Supporting content
```

Never bury the tool beneath 2,000 words of SEO copy.

---

# 64. TOOL PAGE CONTENT

A useful tool page may contain:

### Above the fold

* H1
* Short description
* Tool

### Immediately after tool

* Result
* Copy/action buttons

### Supporting section

* What the tool does
* How to use it
* Examples
* Supported characters/styles
* Useful tips
* Limitations

### Discovery

* Related tools
* Related guides

### FAQ

Only useful questions.

---

# 65. HOMEPAGE

The homepage should function as a product discovery hub.

Possible structure:

```text
Header
↓
Hero
↓
Main tool/search experience
↓
Popular tools
↓
Main categories
↓
Featured text styles
↓
Popular use cases
↓
Helpful guides
↓
Related discovery
↓
Footer
```

The homepage should communicate immediately:

1. What LetrasBonitas does
2. Why users should use it
3. Where to start

---

# 66. NAVIGATION

Navigation should prioritize important user destinations.

Do not place 50 links in the main navigation.

Use:

* Primary categories
* Important tools
* Search
* Mobile-friendly menu

Secondary topics can be discovered through category pages and internal links.

---

# 67. FOOTER

Footer should contain useful navigation.

Potential sections:

* Main categories
* Popular tools
* Guides
* About
* Contact
* Privacy
* Terms
* Cookie information where required

Do not create giant SEO footers containing hundreds of keyword links.

---

# 68. CATEGORY PAGES

Category pages should be useful hubs.

A category page should not simply be:

```text
H1
100 links
```

Instead include:

* Clear introduction
* Relevant tools
* Subtopics
* Helpful explanation
* Related guides
* Internal links

---

# 69. PROGRAMMATIC SEO

Programmatic pages are allowed only when they provide genuine unique value.

Do NOT generate thousands of pages using:

```text
Keyword + city
Keyword + year
Keyword + free
Keyword + online
```

with almost identical content.

A programmatic page should exist because users genuinely need that page.

---

# 70. DUPLICATE CONTENT

Before creating a new page ask:

```text
Does an existing page already satisfy this intent?
```

If yes:

* Improve the existing page
* Expand the existing page
* Merge concepts
* Or create a new page only if the intent is meaningfully different

Do not create duplicate pages simply to target keyword variations.

---

# 71. CANNIBALIZATION

Watch for multiple pages targeting the same intent.

Potential warning signs:

* Same primary keyword
* Same user problem
* Same SERP intent
* Same content purpose
* Same tool functionality

If two pages are substantially overlapping, stop and investigate before publishing.

---

# 72. CONTENT FRESHNESS

Do not change dates just to make content appear fresh.

Update content when:

* Information changes
* Tool functionality changes
* Examples become outdated
* Google/search behavior changes
* New useful information becomes available

A date should reflect meaningful editorial changes.

---

# 73. FACTUAL ACCURACY

Never invent:

* Statistics
* Search volumes
* User numbers
* Company facts
* Historical facts
* Studies
* Quotes
* Expert opinions

If a fact matters, verify it.

When current information is required, research it before publishing.

---

# 74. EXTERNAL SOURCES

Use authoritative sources where appropriate.

For factual topics prefer:

* Official documentation
* Government sources
* Academic sources
* Established organizations
* Original research

Do not cite low-quality SEO blogs merely because they rank.

---

# 75. LINK BUILDING PHILOSOPHY

Do not build the website around manipulative backlinks.

Prefer:

* Useful resources
* Digital PR
* Relevant mentions
* Genuine partnerships
* High-quality guest contributions
* Community participation
* Useful original tools that naturally attract references

Never create obvious link spam.

---

# 76. BRAND BUILDING

The long-term goal is not only keyword rankings.

Build:

**LetrasBonitas as a recognizable utility brand.**

Users should remember:

> LetrasBonitas is where I go for fancy letters, text styles, symbols and related tools.

Brand recognition can support:

* Direct traffic
* Returning users
* Organic searches
* Natural links
* Social sharing
* Future acquisition value

---

# 77. FUTURE WEBSITE FLIP

The site should be built so a future buyer can understand it quickly.

Maintain:

* Clean code
* Clear components
* Stable URLs
* Documented architecture
* Reliable analytics
* Search Console history
* Revenue records
* Content inventory
* Tool inventory
* Deployment instructions
* Environment documentation

Avoid undocumented hacks.

Avoid dependencies that only one developer understands.

---

# 78. CODE QUALITY

Write maintainable code.

Prefer:

* Clear naming
* Small reusable components
* Type safety
* Consistent formatting
* Useful comments
* Simple architecture

Avoid:

* Massive components
* Repeated code
* Dead code
* Unused dependencies
* Magic numbers everywhere
* Temporary hacks left in production

---

# 79. TYPESCRIPT

If TypeScript is used:

* Define proper types
* Avoid `any` unless genuinely necessary
* Reuse shared types
* Validate external data
* Keep interfaces understandable

Do not silence type errors without understanding them.

---

# 80. DEPENDENCIES

Before installing a dependency ask:

1. Is it necessary?
2. Is there already a native solution?
3. Is it maintained?
4. How large is it?
5. Does it affect performance?
6. Does it introduce security risk?

Avoid dependency bloat.

---

# 81. IMAGES / ASSETS

Optimize all assets.

Prefer:

* WebP
* AVIF where appropriate
* Responsive images
* Proper dimensions
* Lazy loading below the fold
* Modern compression

Do not ship a 2MB image when a 100KB image provides the same value.

---

# 82. ICONS

Prefer a lightweight icon strategy.

Avoid loading an enormous icon library for five icons.

Use only what is needed.

---

# 83. SEO METADATA ARCHITECTURE

Create reusable metadata utilities where appropriate.

Each page should be able to define:

```text
title
description
canonical
robots
Open Graph
Twitter/X metadata
```

Do not accidentally generate duplicate titles/descriptions across the entire site.

---

# 84. OPEN GRAPH

Important pages should have appropriate social metadata.

Use meaningful:

* Title
* Description
* Image where appropriate

Do not generate hundreds of unique heavy images if they provide little value.

---

# 85. SOCIAL SHARING

Where useful, allow users to share generated content.

But social features should not compromise:

* Speed
* Privacy
* Simplicity

---

# 86. COOKIE / PRIVACY

Follow applicable privacy and advertising requirements.

Provide appropriate:

* Privacy policy
* Terms
* Cookie information where required
* Contact information

Do not make misleading privacy claims.

---

# 87. CONTACT / TRUST

The website should have clear ownership/contact information appropriate for the business.

Trust should be visible without overwhelming the tool experience.

---

# 88. TESTING REQUIREMENTS

Before considering a feature complete, test:

### Functional

* Input
* Output
* Copy
* Clear/reset
* Error handling
* Unicode
* Emoji
* Long text

### Responsive

* Mobile
* Tablet
* Desktop

### Accessibility

* Keyboard
* Focus
* Labels
* Contrast

### SEO

* Title
* Description
* H1
* Canonical
* Robots
* Structured data
* Internal links

### Performance

* JS
* CSS
* Images
* Fonts
* Third-party scripts

---

# 89. BROWSER TESTING

Where practical test:

* Chrome
* Safari
* Firefox
* Mobile browsers

Do not assume that Clipboard API, Unicode rendering, CSS, or browser APIs behave identically everywhere.

---

# 90. BUILD VERIFICATION

Before completing a coding task:

Run the project's appropriate:

```text
lint
typecheck
build
tests
```

commands.

Do not report success if the production build fails.

---

# 91. ERROR HANDLING

If a build fails:

1. Read the actual error.
2. Identify the root cause.
3. Fix the root cause.
4. Re-run the relevant check.
5. Confirm the fix.

Do not hide errors.

Do not disable lint/type checks simply to make the build pass.

---

# 92. DEVELOPMENT WORKFLOW

For every task:

## Step 1 — Understand

Read:

* AGENTS.md
* Existing relevant code
* Spreadsheet/architecture
* Existing components
* Existing SEO implementation

## Step 2 — Plan

Identify:

* Files affected
* Components affected
* SEO impact
* UX impact
* Performance impact

## Step 3 — Implement

Make the smallest appropriate change.

## Step 4 — Verify

Run:

* Lint
* Type check
* Build
* Tests
* Browser verification where appropriate

## Step 5 — Review

Ask:

```text
Did I break SEO?
Did I break mobile UX?
Did I add unnecessary JavaScript?
Did I create duplicate content?
Did I create duplicate URLs?
Did I affect performance?
Did I introduce accessibility issues?
```

---

# 93. DO NOT GUESS

If the repository already contains an implementation, inspect it before creating another one.

Do not assume:

* Existing routes
* Existing components
* Existing styles
* Existing dependencies
* Existing SEO metadata
* Existing schema
* Existing analytics
* Existing environment variables

Inspect first.

---

# 94. DO NOT OVERENGINEER

Simple problems deserve simple solutions.

If a text converter can run entirely in the browser:

Do not create:

```text
Frontend
→ API
→ Database
→ Server
→ Processing service
```

unless there is an actual requirement.

Prefer the simplest architecture that meets:

* Functionality
* SEO
* Security
* Performance
* Scalability

---

# 95. DO NOT MAKE SEO CHANGES JUST FOR SEO

Never add:

* Extra paragraphs
* Extra headings
* Keyword lists
* Hidden text
* Excessive FAQs
* Giant footers
* Repetitive content

unless they genuinely improve the page.

SEO should emerge from usefulness and strong architecture.

---

# 96. DO NOT USE HIDDEN SEO TEXT

Never use:

```css
display:none
```

or similar techniques to hide keyword content intended only for search engines.

All important SEO content should be legitimate user-facing content.

---

# 97. NO KEYWORD STUFFING

Bad:

```text
Letras bonitas letras bonitas letras bonitas
generador de letras bonitas
letras bonitas online
mejores letras bonitas
```

Good:

Natural Spanish explaining the topic while covering relevant terminology naturally.

---

# 98. NO MASS PAGE GENERATION

Before generating a batch of pages:

Check:

```text
Unique intent?
Unique value?
Unique functionality/content?
Internal-link purpose?
Indexing justification?
```

If not, do not generate the pages.

---

# 99. NO FAKE EEAT

Do not invent:

* Authors
* Credentials
* Experts
* Testimonials
* Reviews
* Users
* Experiences
* Partnerships

Trust must be earned through real information and transparent ownership.

---

# 100. TOOL + CONTENT STRATEGY

The website should follow:

```text
Tool
+
Supporting informational content
+
Internal linking
+
Related tools
```

Example:

```text
Letras Cursivas
│
├── Main tool
├── Alphabet
├── Examples
├── How to use
├── Supporting guide
└── Related styles
```

The tool is the primary utility.

The content supports the topic.

---

# 101. RELATED TOOLS

Every major tool should help users discover relevant alternatives.

For example:

```text
Related tools:
- Letras Negritas
- Letras Góticas
- Letras Aesthetic
- Letras Pequeñas
```

Only recommend genuinely relevant tools.

---

# 102. RELATED CONTENT

Related articles should be contextually relevant.

Do not show:

```text
Latest 20 posts
```

just because they are latest.

Prefer:

```text
Related to this topic
```

This strengthens semantic architecture.

---

# 103. CATEGORY DISCOVERY

Users should be able to move naturally:

```text
Tool
→ Related tool
→ Category
→ Guide
→ Another tool
```

This improves:

* UX
* Engagement
* Internal linking
* Crawlability
* Topic discovery

---

# 104. SEARCH ENGINE CRAWL PATH

Important pages should be reachable through internal links.

Avoid important pages existing only in:

* XML sitemap
* Search results
* JavaScript interactions

The site should have a logical crawl path.

---

# 105. ORPHAN PAGE CHECK

Before publishing:

```text
Does another page link to this page?
```

If not, determine whether it is genuinely intended to be standalone.

---

# 106. PAGINATION

If pagination is used:

* Keep it accessible
* Use crawlable links
* Avoid unnecessary infinite scroll for critical content
* Ensure important content is discoverable

---

# 107. FILTERS / PARAMETERS

Avoid creating unlimited crawlable combinations.

Examples:

```text
?style=...
?sort=...
?filter=...
```

should not accidentally generate thousands of indexable URLs.

---

# 108. PERFORMANCE BUDGET

Treat performance as a product requirement.

Avoid adding a feature if its value is tiny but its performance cost is large.

When choosing between two implementations:

Prefer the one that provides similar functionality with:

* Less JavaScript
* Fewer requests
* Smaller assets
* Less blocking
* Better UX

---

# 109. MOBILE TOOL PRIORITY

On mobile:

The user should see the tool quickly.

Do not place:

* Huge banners
* Large decorative illustrations
* Multiple ads
* Long introductions

above the primary functionality.

---

# 110. ADS MUST NOT DOMINATE

A visitor should never feel:

> "This website exists mainly to show me ads."

The intended feeling is:

> "This website gives me a useful tool for free."

Advertising supports the product.

It is not the product.

---

# 111. FUTURE MONETIZATION

Potential future monetization may include:

* Display advertising
* Premium tools
* Sponsorships
* Other relevant monetization

Do not implement monetization features unless requested.

Architecture should remain flexible enough to support them.

---

# 112. FUTURE SCALABILITY

The architecture should allow new:

* Tools
* Categories
* Guides
* Styles
* Languages

without rebuilding the entire website.

Use reusable data structures and components where appropriate.

---

# 113. DATA-DRIVEN TOOL CONFIGURATION

Where tools share common patterns, consider configuration-driven rendering.

For example:

```ts
{
  slug,
  name,
  description,
  category,
  inputType,
  outputType,
  processor,
  relatedTools
}
```

But do not over-abstract fundamentally different tools.

---

# 114. TOOL PROCESSORS

Separate transformation logic from UI when practical.

Example:

```text
UI
↓
Tool processor
↓
Result
```

This makes:

* Testing easier
* Reuse easier
* Maintenance easier

---

# 115. TEST CASES FOR TEXT TOOLS

Include test cases for:

```text
Hello
Hola
Hola, ¿cómo estás?
123456
!@#$%
😀
á é í ó ú
ñ
Ü
𝓗𝓮𝓵𝓵𝓸
Mixed Unicode
Very long text
Empty input
Whitespace
```

Where relevant.

---

# 116. SEO CONTENT SHOULD NOT BREAK TOOL UX

Do not let content components:

* Push the tool too far down
* Make input difficult to find
* Cause layout shift
* Slow interaction
* Interfere with output

Tool UX is always important.

---

# 117. DESIGN CONSISTENCY

If a button means "Copy" on one tool, it should look and behave similarly elsewhere.

If cards have a radius, use the same design token.

If headings have a certain hierarchy, maintain it.

Consistency creates perceived quality.

---

# 118. BRAND QUALITY

Every visible detail should feel intentional.

Check:

* Alignment
* Spacing
* Typography
* Icons
* Button states
* Hover states
* Focus states
* Empty states
* Error states
* Loading states

A premium website is usually created by hundreds of small consistent decisions.

---

# 119. BEFORE ADDING A FEATURE

Ask:

```text
Does it improve user value?
Does it support the site's core purpose?
Does it improve retention?
Does it improve SEO?
Does it improve revenue?
Does it justify its performance cost?
```

If none apply, do not add it.

---

# 120. BEFORE CREATING A PAGE

Ask:

```text
What problem does this page solve?
Who is searching for it?
What is the intent?
Does the spreadsheet contain it?
Does another page already satisfy it?
What unique value will it provide?
What tool should it connect to?
What pages should link to it?
```

---

# 121. BEFORE PUBLISHING CONTENT

Checklist:

```text
[ ] Correct URL
[ ] Correct silo
[ ] Correct primary topic
[ ] Search intent satisfied
[ ] Original value
[ ] No keyword stuffing
[ ] No unnecessary repetition
[ ] Useful headings
[ ] Good internal links
[ ] Related tools
[ ] Related content
[ ] Accurate metadata
[ ] Correct canonical
[ ] Structured data where appropriate
[ ] Mobile friendly
[ ] Fast
[ ] No obvious factual errors
```

---

# 122. BEFORE DEPLOYMENT

Checklist:

```text
[ ] Production build passes
[ ] Type checking passes
[ ] Lint passes
[ ] No console errors
[ ] No broken links
[ ] No broken images
[ ] Tool works
[ ] Copy button works
[ ] Mobile UI works
[ ] Desktop UI works
[ ] Metadata works
[ ] Canonicals work
[ ] Sitemap works
[ ] Robots works
[ ] Structured data is valid
[ ] No accidental noindex
[ ] No accidental duplicate routes
```

---

# 123. AGENT COMMUNICATION

When completing a task, report:

### What changed

Short summary.

### Files changed

List important files.

### SEO impact

Explain whether SEO was affected.

### Performance impact

Explain whether performance was affected.

### Verification

Report:

* Build
* Lint
* Typecheck
* Tests

Do not claim something was tested if it was not tested.

---

# 124. WHEN ASKED TO "IMPROVE SEO"

Do NOT immediately add more text.

First inspect:

1. Search intent
2. Existing content
3. Existing URL
4. Metadata
5. Internal links
6. Technical SEO
7. Page speed
8. Tool UX
9. Schema
10. Content gaps

Then make the highest-value changes.

---

# 125. WHEN ASKED TO "ADD BLOG POSTS"

Do NOT automatically create generic articles.

First determine:

* Which silo?
* Which tool?
* Which search intent?
* What user problem?
* Existing competing URL?
* Internal links?
* Information gain?
* Whether the article should exist at all?

---

# 126. WHEN ASKED TO "CREATE MORE PAGES"

Stop and evaluate.

More pages do not automatically mean more authority.

Check for:

* Duplicate intent
* Cannibalization
* Thin content
* Programmatic spam risk
* Weak internal linking
* Lack of unique value

---

# 127. WHEN ASKED TO CHANGE THE URL

Treat URL changes as an SEO-sensitive task.

Before changing:

* Check current URL
* Check indexed status
* Check internal links
* Check sitemap
* Check canonical
* Determine redirect
* Determine SEO risk

Do not change URLs casually.

---

# 128. WHEN ASKED TO REDESIGN

Preserve:

* URLs
* Content
* Metadata
* Internal links
* Structured data
* Indexability

unless the redesign specifically requires changes.

A visual redesign should not accidentally become an SEO migration.

---

# 129. WHEN ASKED TO MAKE IT "MORE MODERN"

Do not simply add animations.

Improve:

* Hierarchy
* Spacing
* Typography
* Components
* Color system
* Interaction states
* Tool UX
* Mobile layout
* Accessibility

Modern ≠ flashy.

---

# 130. WHEN ASKED TO MAKE IT "PREMIUM"

Focus on:

* Consistency
* Restraint
* Typography
* Whitespace
* High-quality components
* Fast interactions
* Thoughtful micro-interactions
* Excellent mobile experience

Avoid excessive effects.

---

# 131. WHEN ASKED TO OPTIMIZE PERFORMANCE

Inspect before changing.

Look for:

* Bundle size
* Client components
* Third-party scripts
* Images
* Fonts
* CSS
* Network requests
* API calls
* Rendering strategy

Do not remove functionality blindly.

---

# 132. WHEN ASKED TO ADD ADS

First ensure:

* Tool remains usable
* Ads are clearly distinguishable
* No accidental clicks
* Mobile layout remains usable
* Performance is monitored
* Important content isn't displaced

Advertising should be introduced carefully.

---

# 133. CORE PROJECT PRINCIPLE

Always prioritize:

```text
USER VALUE
    >
SHORT-TERM SEO HACKS
```

and:

```text
LONG-TERM ASSET VALUE
    >
SHORT-TERM TRAFFIC
```

---

# 134. FINAL DECISION FRAMEWORK

When two approaches are possible, prefer the one that best satisfies:

### 1. User value

Does it solve the user's problem better?

### 2. Search intent

Does it satisfy what users actually want?

### 3. Original value

Does it provide something genuinely useful?

### 4. Technical quality

Is it robust and maintainable?

### 5. Performance

Is it fast?

### 6. Accessibility

Can more users use it?

### 7. SEO

Does it support sustainable organic visibility?

### 8. Monetization

Can it support responsible future monetization?

### 9. Scalability

Can the site grow without becoming messy?

### 10. Asset value

Would a future buyer see this as a professionally built digital asset?

---

# 135. GOLDEN RULES

## Rule 1

**The spreadsheet is the architecture source of truth.**

## Rule 2

**Users come before search engines.**

## Rule 3

**Useful tools are the heart of the website.**

## Rule 4

**Content should support the tools and topics.**

## Rule 5

**Do not create pages just because keywords exist.**

## Rule 6

**Avoid thin, repetitive, mass-produced AI content.**

## Rule 7

**Do not sacrifice performance for visual effects.**

## Rule 8

**Mobile-first is mandatory.**

## Rule 9

**Do not break existing URLs or SEO assets casually.**

## Rule 10

**Every page must have a reason to exist.**

## Rule 11

**Every important page should fit into the site's topical architecture.**

## Rule 12

**Every tool must actually work.**

## Rule 13

**Never invent facts, reviews, statistics, experts, or experiences.**

## Rule 14

**Ads must support the free tool experience, not dominate it.**

## Rule 15

**Build the website as a future sellable digital asset.**

---

# 136. THE FINAL MISSION

The mission of every AI coding agent working on LetrasBonitas is:

> **Build the fastest, most useful, most trustworthy, most polished Spanish-language fancy-text and typography utility website possible while following the project's approved URL/topic architecture and Google's people-first search principles.**

The website should not feel like an SEO project.

It should feel like a **real product**.

SEO should be the system that helps users discover that product.

The tools should be the reason they stay.

The experience should be the reason they return.

The organic traffic should be the foundation for monetization.

And the quality of the entire system should ultimately make LetrasBonitas a valuable, maintainable, and sellable digital asset.

---

# AGENT COMPLETION CHECKLIST

Before declaring a task complete:

```text
ARCHITECTURE
[ ] Checked AGENTS.md
[ ] Checked the approved spreadsheet architecture
[ ] Did not invent conflicting URLs

SEO
[ ] Search intent is clear
[ ] No unnecessary keyword variation
[ ] No cannibalization introduced
[ ] Metadata is correct
[ ] Canonical is correct
[ ] Internal links are relevant
[ ] Indexability is intentional
[ ] Structured data is accurate

TOOL
[ ] Tool actually works
[ ] Input works
[ ] Output works
[ ] Copy works
[ ] Error state works
[ ] Unicode works
[ ] Mobile interaction works

UX
[ ] Mobile-first
[ ] Desktop responsive
[ ] Accessible
[ ] Clear hierarchy
[ ] No unnecessary clutter

PERFORMANCE
[ ] No unnecessary dependencies
[ ] No unnecessary client rendering
[ ] Images optimized
[ ] Fonts optimized
[ ] Third-party scripts justified
[ ] No obvious performance regression

CODE
[ ] Reusable components used where appropriate
[ ] No unnecessary duplication
[ ] No secrets exposed
[ ] No obvious security issue
[ ] Code is maintainable

VERIFICATION
[ ] Lint passed
[ ] Typecheck passed
[ ] Build passed
[ ] Tests passed if available
[ ] Browser-tested where appropriate

BUSINESS
[ ] Does not damage future monetization
[ ] Does not damage future SEO
[ ] Does not reduce future acquisition value
```

---

# END OF AGENTS.MD

**Always read and follow this file before modifying the LetrasBonitas project.**
