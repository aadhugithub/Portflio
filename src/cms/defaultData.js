// Default CMS Seed Data for Product Designer Portfolio
// This represents the CMS layer. No personal information or case studies are hardcoded in React components.

export const defaultSiteData = {
  profile: {
    name: "Adarsh N",
    title: "Product Designer",
    logoType: "icon", // "icon" | "image" | "text"
    logoIcon: "circle-dot", // preset icon name
    logoImage: "",
    logoText: "AN",
    company: {
      enabled: true,
      prefix: "Previously at ",
      name: "Fieldiva",
      url: "https://fieldiva.example.com"
    },
    status: {
      enabled: false,
      text: "Looking for new opportunities"
    }
  },

  about: {
    title: "About",
    content: "I specialise in clear, considered interfaces for complex products.\n\nPreviously I led design at [Fieldiva](https://fieldiva.example.com) and worked on product teams designing high-leverage tools for operations, logistics, and data-dense enterprise systems."
  },

  projects: [
    {
      id: "field-ops",
      slug: "field-ops",
      title: "Field Ops",
      shortDescription: "Dispatch & field intelligence system for high-velocity logistics operations.",
      year: "2025",
      role: "Lead Product Designer",
      client: "Fieldiva",
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      heroCaption: "Field Ops mission control dispatch console and real-time fleet telemetry view.",
      blocks: [
        {
          id: "block-context-heading",
          type: "heading",
          level: 2,
          content: "Context"
        },
        {
          id: "block-context-p1",
          type: "paragraph",
          content: "Field logistics teams manage thousands of active service tickets, multi-vehicle routes, and dynamic SLA windows each day. Fieldiva's existing dispatch tool was an aggregate of disparate legacy tables, creating cognitive overload and dispatch latency during peak surge hours."
        },
        {
          id: "block-context-p2",
          type: "paragraph",
          content: "In early 2025, I joined as Lead Product Designer to rethink dispatch workflows from first principles—transforming dense tabular data into an intuitive spatial and temporal interface that dispatchers could navigate effortlessly."
        },
        {
          id: "block-hero-img",
          type: "image",
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
          caption: "Primary mission control board displaying real-time vehicle clustering and SLA health.",
          alt: "Field Ops Mission Control Interface"
        },
        {
          id: "block-problem-heading",
          type: "heading",
          level: 2,
          content: "Problem"
        },
        {
          id: "block-problem-p1",
          type: "paragraph",
          content: "Through contextual inquiries with 14 field dispatch coordinators across three continents, three core friction vectors emerged:"
        },
        {
          id: "block-problem-quote",
          type: "quote",
          content: "When 40 orders hit simultaneously in a rainstorm, our screens freeze with modal dialogs. We need to see who is nearby and assign without losing spatial context.",
          author: "Senior Dispatcher",
          role: "Metro Logistics"
        },
        {
          id: "block-problem-gallery",
          type: "gallery",
          caption: "Analysis of legacy dispatch bottlenecks (left) vs new streamlined route mapping (right).",
          columns: 2,
          items: [
            {
              url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
              caption: "Legacy fragmented triage table with 30+ columns."
            },
            {
              url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop",
              caption: "Spatial clustering and instant driver availability drawer."
            }
          ]
        },
        {
          id: "block-approach-heading",
          type: "heading",
          level: 2,
          content: "Approach"
        },
        {
          id: "block-approach-p1",
          type: "paragraph",
          content: "We established a high-density, low-friction visual grammar specifically calibrated for multi-monitor dispatcher setups. Crucial signals were color-coded with high-contrast accessibility standards, while background chrome was stripped back to zero visual distraction."
        },
        {
          id: "block-approach-img",
          type: "image",
          url: "https://images.unsplash.com/photo-1581291518655-9523c932deda?q=80&w=1400&auto=format&fit=crop",
          caption: "Design system tokens and keyboard-driven shortcut palette for rapid dispatching.",
          alt: "Design System & Shortcuts"
        },
        {
          id: "block-solution-heading",
          type: "heading",
          level: 2,
          content: "Solution"
        },
        {
          id: "block-solution-p1",
          type: "paragraph",
          content: "The reimagined Field Ops platform introduced instant batch re-routing, split-screen driver diagnostics, and proactive ETA degradation warnings that alert dispatchers before SLA penalties occur."
        },
        {
          id: "block-solution-gallery",
          type: "gallery",
          caption: "Operational drill-down modes: Fleet status telemetry and live incident resolution.",
          columns: 2,
          items: [
            {
              url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
              caption: "Individual operator telematics & historical route replays."
            },
            {
              url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=900&auto=format&fit=crop",
              caption: "Exception handling modal with automated secondary assignment."
            }
          ]
        },
        {
          id: "block-impact-heading",
          type: "heading",
          level: 2,
          content: "Impact"
        },
        {
          id: "block-impact-p1",
          type: "paragraph",
          content: "Rolled out across 22 regional fulfillment hubs handling 180,000+ dispatches monthly, the redesigned console dramatically lowered operator fatigue and accelerated ticket turnover."
        },
        {
          id: "block-impact-metrics",
          type: "metrics",
          items: [
            { value: "48%", label: "Reduction in dispatch assignment time" },
            { value: "99.4%", label: "On-time SLA compliance rate" },
            { value: "3.2x", label: "Increase in keyboard navigation adoption" }
          ]
        },
        {
          id: "block-impact-testimonial",
          type: "testimonial",
          quote: "Adarsh took the most complicated operational screen in our entire company and made it feel as responsive and lightweight as a high-end code editor. Our teams love it.",
          author: "Marcus Vance",
          role: "VP of Operations, Fieldiva",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "zuperrent",
      slug: "zuperrent",
      title: "ZuperRent",
      shortDescription: "High-velocity industrial equipment rental marketplace & fleet management.",
      year: "2024",
      role: "Senior Product Designer",
      client: "ZuperRent Technologies",
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
      heroCaption: "ZuperRent multi-depot reservation engine and automated pricing matrix.",
      blocks: [
        {
          id: "zr-context-heading",
          type: "heading",
          level: 2,
          content: "Context"
        },
        {
          id: "zr-context-p1",
          type: "paragraph",
          content: "Commercial construction companies lose millions every quarter to idle equipment rental turnaround and opaque booking terms. ZuperRent aimed to bring consumer-grade speed and transparent telemetry to heavy machinery leasing."
        },
        {
          id: "zr-hero-img",
          type: "image",
          url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
          caption: "Equipment discovery catalog with realtime regional yard availability.",
          alt: "ZuperRent catalog"
        },
        {
          id: "zr-problem-heading",
          type: "heading",
          level: 2,
          content: "Problem"
        },
        {
          id: "zr-problem-p1",
          type: "paragraph",
          content: "Machinery reservation involves complex parameters: site delivery constraints, certified operator requirements, fuel surcharges, and variable insurance tiers. Traditional checkouts suffered an 82% abandonment rate because users had to wait for manual quote calculations."
        },
        {
          id: "zr-quote",
          type: "quote",
          content: "Contractors don't want to call three sales reps and wait 4 hours for a quote when their crane breaks on a job site. They need it confirmed in 60 seconds.",
          author: "Elena Rostova",
          role: "Head of Product, ZuperRent"
        },
        {
          id: "zr-solution-heading",
          type: "heading",
          level: 2,
          content: "Solution"
        },
        {
          id: "zr-solution-p1",
          type: "paragraph",
          content: "We designed an instant dynamic quoting slider that transparently calculates insurance, delivery proximity, and operator add-ons on the fly with live depot inventory guarantees."
        },
        {
          id: "zr-gallery",
          type: "gallery",
          caption: "Mobile-first on-site inspection checklist and digital handover signature flow.",
          columns: 2,
          items: [
            {
              url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
              caption: "Mobile equipment handover and machine health verification."
            },
            {
              url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=900&auto=format&fit=crop",
              caption: "Automated billing schedule with GPS usage telematics."
            }
          ]
        },
        {
          id: "zr-impact-heading",
          type: "heading",
          level: 2,
          content: "Impact"
        },
        {
          id: "zr-metrics",
          type: "metrics",
          items: [
            { value: "$14.8M", label: "Gross rental transaction volume in Year 1" },
            { value: "62s", label: "Average time to checkout confirmation" },
            { value: "-74%", label: "Reduction in customer support dispatch calls" }
          ]
        },
        {
          id: "zr-testimonial",
          type: "testimonial",
          quote: "The interface Adarsh designed set a benchmark for industrial SaaS. Our enterprise contractors regularly praise how frictionless the rental flow is.",
          author: "Siddharth Rao",
          role: "CEO & Co-founder, ZuperRent",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "sentrah",
      slug: "sentrah",
      title: "Sentrah",
      shortDescription: "Autonomous security intelligence & threat mitigation console.",
      year: "2023",
      role: "Founding Designer",
      client: "Sentrah Labs",
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
      heroCaption: "Sentrah autonomous threat correlation engine and network topology graph.",
      blocks: [
        {
          id: "se-context-heading",
          type: "heading",
          level: 2,
          content: "Context"
        },
        {
          id: "se-context-p1",
          type: "paragraph",
          content: "Security operations teams are overwhelmed by thousands of false-positive alerts daily. Sentrah built an autonomous AI reasoning engine to ingest cloud telemetry, isolate active intrusion vectors, and execute containment policies in sub-second intervals."
        },
        {
          id: "se-hero-img",
          type: "image",
          url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
          caption: "Live threat containment radar and attack graph visualization.",
          alt: "Sentrah Threat Radar"
        },
        {
          id: "se-problem-heading",
          type: "heading",
          level: 2,
          content: "Problem"
        },
        {
          id: "se-problem-p1",
          type: "paragraph",
          content: "SecOps analysts had to cross-reference logs across 6 different tools (SIEM, EDR, CloudTrail, Kubernetes audits), taking an average of 42 minutes to confirm a breach."
        },
        {
          id: "se-solution-heading",
          type: "heading",
          level: 2,
          content: "Solution"
        },
        {
          id: "se-solution-p1",
          type: "paragraph",
          content: "We created a unified 'Attack Graph' timeline that traces attacker pivots across cloud boundaries and presents single-click mitigation actions with dry-run consequence preview."
        },
        {
          id: "se-gallery",
          type: "gallery",
          caption: "Attack graph topology inspector and policy guardrail verification.",
          columns: 2,
          items: [
            {
              url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=900&auto=format&fit=crop",
              caption: "Incident timeline showing root cause lateral movement."
            },
            {
              url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
              caption: "Automated quarantine guardrails and audit trail."
            }
          ]
        },
        {
          id: "se-impact-heading",
          type: "heading",
          level: 2,
          content: "Impact"
        },
        {
          id: "se-metrics",
          type: "metrics",
          items: [
            { value: "< 90s", label: "Mean time to isolate critical threat vectors" },
            { value: "91%", label: "Reduction in alert noise and false positives" },
            { value: "$4.5M", label: "Seed funding raised with prototype design" }
          ]
        },
        {
          id: "se-testimonial",
          type: "testimonial",
          quote: "Adarsh turned what could have been an unintelligible sea of security data into an elegant, authoritative command center that closed enterprise pilots immediately.",
          author: "Darius Chen",
          role: "Founder & CTO, Sentrah Labs",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
        }
      ]
    },

    // ─── PRODUCTS CATEGORY ────────────────────────────────────────────────
    {
      id: "design-system-b2b",
      slug: "design-system-b2b",
      category: "products",
      featured: false,
      title: "Design System for B2B SaaS",
      shortDescription: "Token-based design system unifying four products across two brands.",
      year: "2024",
      role: "Design Systems Lead",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "dsb-h1", type: "heading", level: 2, content: "Context" },
        { id: "dsb-p1", type: "paragraph", content: "Fieldiva's four products shared no visual language. Each team had independently evolved their component library, resulting in 14 distinct button variants and 9 conflicting spacing scales across the organization." },
        { id: "dsb-img1", type: "image", url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1400&auto=format&fit=crop", caption: "Audit of legacy component fragmentation across four product surfaces.", alt: "Design system audit" },
        { id: "dsb-h2", type: "heading", level: 2, content: "Problem" },
        { id: "dsb-p2", type: "paragraph", content: "Engineers were duplicating component code in every repo. New features shipped inconsistently — a date picker in App A looked nothing like the one in App B despite identical interaction models." },
        { id: "dsb-q1", type: "quote", content: "We spend 30% of every sprint re-implementing things that should already exist.", author: "Staff Engineer", role: "Fieldiva Platform" },
        { id: "dsb-h3", type: "heading", level: 2, content: "Approach" },
        { id: "dsb-p3", type: "paragraph", content: "We established a W3C Design Token Community Group-compatible token schema, built a Figma variables library synced to a published npm package, and ran bi-weekly cross-team design crits to drive adoption." },
        { id: "dsb-h4", type: "heading", level: 2, content: "Impact" },
        { id: "dsb-metrics", type: "metrics", items: [
          { value: "82%", label: "Reduction in UI-related bug reports" },
          { value: "3.1x", label: "Faster feature prototyping" },
          { value: "100%", label: "Component adoption across 4 products" }
        ]}
      ]
    },
    {
      id: "component-token-system",
      slug: "component-token-system",
      category: "products",
      featured: false,
      title: "Component Token System & Multi-Brand Theming",
      shortDescription: "Semantic token architecture enabling one codebase to power multiple brand identities.",
      year: "2024",
      role: "Product Designer",
      client: "ZuperRent Technologies",
      heroImage: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "cts-h1", type: "heading", level: 2, content: "Context" },
        { id: "cts-p1", type: "paragraph", content: "ZuperRent was white-labelling its platform to enterprise clients. Each client required distinct brand expression — colors, typography, icon styles — while the underlying component behaviour remained identical." },
        { id: "cts-img1", type: "image", url: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1400&auto=format&fit=crop", caption: "Two-tier token architecture: global primitives → semantic aliases → component tokens.", alt: "Token architecture diagram" },
        { id: "cts-h2", type: "heading", level: 2, content: "Solution" },
        { id: "cts-p2", type: "paragraph", content: "We designed a three-tier token system: Primitive tokens (raw values), Semantic tokens (intent-mapped aliases), and Component tokens (specific overrides). Switching a brand required only replacing the semantic tier." },
        { id: "cts-gallery", type: "gallery", columns: 2, caption: "Same component, two brand expressions — no code change required.", items: [
          { url: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=900&auto=format&fit=crop", caption: "Brand A: Industrial navy & high-contrast orange." },
          { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop", caption: "Brand B: Minimal slate & muted green." }
        ]},
        { id: "cts-h3", type: "heading", level: 2, content: "Impact" },
        { id: "cts-metrics", type: "metrics", items: [
          { value: "6 brands", label: "Shipped from a single component library" },
          { value: "< 2 days", label: "Time to onboard a new brand theme" },
          { value: "0 forks", label: "Zero product-specific repo branches" }
        ]}
      ]
    },
    {
      id: "ai-feature-discovery",
      slug: "ai-feature-discovery",
      category: "products",
      featured: false,
      title: "AI-Assisted Feature Discovery & Onboarding",
      shortDescription: "Contextual AI nudges that reduce time-to-value for new SaaS users by 61%.",
      year: "2025",
      role: "Product Designer",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "afd-h1", type: "heading", level: 2, content: "Context" },
        { id: "afd-p1", type: "paragraph", content: "Enterprise SaaS tools are dense. 73% of Fieldiva users never discovered three of the platform's highest-value features within their first 90 days of use." },
        { id: "afd-img1", type: "image", url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop", caption: "Contextual AI assistant surfacing relevant features based on current workflow state.", alt: "AI onboarding flow" },
        { id: "afd-h2", type: "heading", level: 2, content: "Approach" },
        { id: "afd-p2", type: "paragraph", content: "We trained a lightweight intent classifier on anonymized usage telemetry to predict when a user was likely to benefit from a specific feature — and surfaced it non-intrusively in context." },
        { id: "afd-h3", type: "heading", level: 2, content: "Impact" },
        { id: "afd-metrics", type: "metrics", items: [
          { value: "61%", label: "Faster time-to-value for new users" },
          { value: "+38%", label: "Feature adoption for previously invisible tools" },
          { value: "4.8/5", label: "Onboarding satisfaction score" }
        ]}
      ]
    },
    {
      id: "cross-platform-unification",
      slug: "cross-platform-unification",
      category: "products",
      featured: false,
      title: "Cross-Platform Product Unification Audit",
      shortDescription: "Structured audit identifying 140+ UX inconsistencies across web, iOS, and Android.",
      year: "2023",
      role: "Senior Product Designer",
      client: "Sentrah Labs",
      heroImage: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "cpu-h1", type: "heading", level: 2, content: "Context" },
        { id: "cpu-p1", type: "paragraph", content: "Three separate platform teams (web, iOS, Android) had evolved their UX independently for four years. Users moving between platforms reported feeling like they were using completely different products." },
        { id: "cpu-img1", type: "image", url: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1400&auto=format&fit=crop", caption: "Cross-platform heuristic audit matrix: 140 touchpoints across 3 platforms.", alt: "Audit matrix" },
        { id: "cpu-h2", type: "heading", level: 2, content: "Methodology" },
        { id: "cpu-p2", type: "paragraph", content: "Using a structured 10-heuristic evaluation framework, I systematically mapped every core user journey across all three platforms, catalogued divergences, and severity-ranked them using a RICE-style prioritisation framework." },
        { id: "cpu-h3", type: "heading", level: 2, content: "Impact" },
        { id: "cpu-metrics", type: "metrics", items: [
          { value: "140+", label: "UX inconsistencies identified and catalogued" },
          { value: "68%", label: "Critical issues resolved within 2 sprints" },
          { value: "+22pts", label: "Cross-platform NPS improvement" }
        ]}
      ]
    },

    // ─── PROJECTS CATEGORY ────────────────────────────────────────────────
    {
      id: "procurement-dashboard",
      slug: "procurement-dashboard",
      category: "projects",
      featured: false,
      title: "Procurement Dashboard Redesign",
      shortDescription: "Reimagined procurement portal reduced approval cycles from 4 days to 6 hours.",
      year: "2024",
      role: "Lead Product Designer",
      client: "Enterprise Client",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "pd-h1", type: "heading", level: 2, content: "Context" },
        { id: "pd-p1", type: "paragraph", content: "A 2,000-person manufacturing company was running procurement through a legacy ERP portal with 47-step approval workflows. Purchase orders required printing, wet signatures, and physical hand-offs between departments." },
        { id: "pd-img1", type: "image", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop", caption: "Unified procurement command centre with smart approval routing.", alt: "Procurement dashboard" },
        { id: "pd-h2", type: "heading", level: 2, content: "Problem" },
        { id: "pd-p2", type: "paragraph", content: "Average PO approval time was 4.2 days. Procurement managers spent 60% of their workday chasing approvers via email. Visibility into PO status was non-existent." },
        { id: "pd-h3", type: "heading", level: 2, content: "Solution" },
        { id: "pd-p3", type: "paragraph", content: "We redesigned the entire approval flow around role-based dashboards with intelligent routing that automatically escalated stalled approvals and surfaced the highest-priority items first." },
        { id: "pd-metrics", type: "metrics", items: [
          { value: "96%", label: "Reduction in approval turnaround time" },
          { value: "60→8%", label: "Time spent chasing approvals" },
          { value: "$2.1M", label: "Annual savings in processing overhead" }
        ]}
      ]
    },
    {
      id: "internal-analytics-portal",
      slug: "internal-analytics-portal",
      category: "projects",
      featured: false,
      title: "Internal Analytics Portal",
      shortDescription: "Self-serve analytics dashboard replacing 80% of ad-hoc data requests to engineering.",
      year: "2023",
      role: "Product Designer",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "iap-h1", type: "heading", level: 2, content: "Context" },
        { id: "iap-p1", type: "paragraph", content: "Engineering at Fieldiva received 30+ data requests per week from non-technical stakeholders. Each request required an engineer to write a custom SQL query, export CSV, and email results manually." },
        { id: "iap-img1", type: "image", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop", caption: "Self-serve analytics explorer with natural language query builder.", alt: "Analytics portal" },
        { id: "iap-h2", type: "heading", level: 2, content: "Solution" },
        { id: "iap-p2", type: "paragraph", content: "I designed a no-code analytics explorer with pre-built report templates covering the 20 most common request patterns, and a natural language query interface for ad-hoc exploration." },
        { id: "iap-metrics", type: "metrics", items: [
          { value: "80%", label: "Reduction in data requests to engineering" },
          { value: "Instant", label: "Data access vs. 2-day avg wait" },
          { value: "94%", label: "Stakeholder self-sufficiency rate" }
        ]}
      ]
    },
    {
      id: "logistics-eta-ui",
      slug: "logistics-eta-ui",
      category: "projects",
      featured: false,
      title: "Logistics ETA Confidence Interval UI",
      shortDescription: "Visual probability model that reduced customer escalations from late deliveries by 44%.",
      year: "2024",
      role: "Product Designer",
      client: "ZuperRent Technologies",
      heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "let-h1", type: "heading", level: 2, content: "Context" },
        { id: "let-p1", type: "paragraph", content: "Single-point ETA estimates created customer frustration when deliveries arrived outside the predicted window — even by 15 minutes. Customers felt deceived by \"wrong\" ETAs." },
        { id: "let-img1", type: "image", url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400&auto=format&fit=crop", caption: "ETA range visualiser with live confidence probability and disruption alerts.", alt: "ETA UI" },
        { id: "let-h2", type: "heading", level: 2, content: "Solution" },
        { id: "let-p2", type: "paragraph", content: "Instead of a single timestamp, we designed a probability range visual: a soft gradient band showing the 80% confidence window, with real-time updates as conditions changed." },
        { id: "let-metrics", type: "metrics", items: [
          { value: "44%", label: "Reduction in delivery escalation calls" },
          { value: "+31pts", label: "Customer satisfaction score improvement" },
          { value: "2.8x", label: "Increase in ETA trust rating" }
        ]}
      ]
    },
    {
      id: "multi-step-form-builder",
      slug: "multi-step-form-builder",
      category: "projects",
      featured: false,
      title: "Multi-Step Form Builder with Conditional Logic",
      shortDescription: "No-code form builder with branching logic, used to ship 200+ customer workflows.",
      year: "2023",
      role: "Senior Product Designer",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1581291518655-9523c932deda?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "mfb-h1", type: "heading", level: 2, content: "Context" },
        { id: "mfb-p1", type: "paragraph", content: "Customer success teams needed to build onboarding questionnaires and data collection forms without engineering involvement. Existing tools required developers to hardcode branching logic in JSON config files." },
        { id: "mfb-img1", type: "image", url: "https://images.unsplash.com/photo-1581291518655-9523c932deda?q=80&w=1400&auto=format&fit=crop", caption: "Visual flow builder for conditional logic chains with live preview panel.", alt: "Form builder UI" },
        { id: "mfb-h2", type: "heading", level: 2, content: "Solution" },
        { id: "mfb-p2", type: "paragraph", content: "A canvas-based form builder where non-technical operators could drag-and-drop fields, define conditional branches visually, and preview the complete user journey in a split-screen simulator." },
        { id: "mfb-metrics", type: "metrics", items: [
          { value: "200+", label: "Customer workflows shipped without code" },
          { value: "Zero", label: "Engineering hours per new form deployment" },
          { value: "4.9/5", label: "Internal builder satisfaction rating" }
        ]}
      ]
    },

    // ─── AGENTIC AI CATEGORY ──────────────────────────────────────────────
    {
      id: "ai-support-copilot",
      slug: "ai-support-copilot",
      category: "agentic-ai",
      featured: false,
      title: "AI Copilot for Customer Support Resolution",
      shortDescription: "Agentic support assistant that auto-resolves 58% of tier-1 tickets end-to-end.",
      year: "2025",
      role: "Lead Product Designer",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "asc-h1", type: "heading", level: 2, content: "Context" },
        { id: "asc-p1", type: "paragraph", content: "Fieldiva's customer support team was processing 4,000 tickets per month. 65% were repetitive tier-1 issues (password resets, billing queries, basic config changes) that required no specialist knowledge." },
        { id: "asc-img1", type: "image", url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop", caption: "AI copilot workspace: intent classification, autonomous resolution pipeline, and human escalation trigger.", alt: "AI copilot interface" },
        { id: "asc-h2", type: "heading", level: 2, content: "Design Challenge" },
        { id: "asc-p2", type: "paragraph", content: "The AI could act autonomously, but agents needed to maintain trust and oversight. The key design challenge was: how do you show an agent exactly what the AI did, why, and make it trivially easy to override or correct?" },
        { id: "asc-h3", type: "heading", level: 2, content: "Solution" },
        { id: "asc-p3", type: "paragraph", content: "We designed a transparent action log panel that narrated every AI decision in plain language, with one-click rollback for any step. Agents could inject themselves at any point in the resolution chain." },
        { id: "asc-metrics", type: "metrics", items: [
          { value: "58%", label: "Tier-1 tickets auto-resolved with no agent touch" },
          { value: "4.1min", label: "Average resolution time (down from 34min)" },
          { value: "99.2%", label: "Customer satisfaction maintained" }
        ]},
        { id: "asc-testimonial", type: "testimonial", quote: "The copilot design struck exactly the right balance. Agents never felt replaced — they felt supercharged.", author: "Priya Shankar", role: "Head of CX, Fieldiva", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
      ]
    },
    {
      id: "autonomous-incident-triage",
      slug: "autonomous-incident-triage",
      category: "agentic-ai",
      featured: false,
      title: "Autonomous Incident Triage & Routing",
      shortDescription: "AI agent that classifies, routes, and begins remediation of production incidents in under 30 seconds.",
      year: "2024",
      role: "Founding Designer",
      client: "Sentrah Labs",
      heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "ait-h1", type: "heading", level: 2, content: "Context" },
        { id: "ait-p1", type: "paragraph", content: "On-call engineers spent 40% of incident response time on classification and routing — determining severity, affected services, and correct team — before any actual remediation could begin." },
        { id: "ait-img1", type: "image", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop", caption: "Autonomous triage dashboard: real-time agent decisions with confidence scores and override controls.", alt: "Incident triage" },
        { id: "ait-h2", type: "heading", level: 2, content: "Solution" },
        { id: "ait-p2", type: "paragraph", content: "The triage agent ran in parallel to the alerting pipeline, correlating signals from 8 monitoring systems, drafting severity classifications, and paging the correct team — all before the on-call engineer opened their laptop." },
        { id: "ait-metrics", type: "metrics", items: [
          { value: "< 30s", label: "Triage and initial routing time" },
          { value: "40%", label: "MTTR reduction across all incident categories" },
          { value: "97%", label: "Routing accuracy on first attempt" }
        ]}
      ]
    },
    {
      id: "llm-audit-interface",
      slug: "llm-audit-interface",
      category: "agentic-ai",
      featured: false,
      title: "LLM Output Auditing & Human Review Interface",
      shortDescription: "Structured review workflow for high-stakes AI outputs requiring human oversight before deployment.",
      year: "2025",
      role: "Product Designer",
      client: "Sentrah Labs",
      heroImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "loa-h1", type: "heading", level: 2, content: "Context" },
        { id: "loa-p1", type: "paragraph", content: "AI systems generating security policies, financial recommendations, or compliance documents require mandatory human review before execution. Existing review processes were unstructured and left no audit trail." },
        { id: "loa-img1", type: "image", url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop", caption: "Structured review interface with diff-highlighting, confidence indicators, and sign-off workflow.", alt: "LLM review interface" },
        { id: "loa-h2", type: "heading", level: 2, content: "Solution" },
        { id: "loa-p2", type: "paragraph", content: "We designed a review interface that presented AI outputs alongside the source context, highlighted areas of uncertainty, required structured annotations for any modifications, and produced an immutable audit trail for compliance." },
        { id: "loa-metrics", type: "metrics", items: [
          { value: "100%", label: "Audit trail coverage for all AI-generated outputs" },
          { value: "3.2x", label: "Faster review cycles vs. unstructured process" },
          { value: "0 incidents", label: "Policy errors reaching production post-launch" }
        ]}
      ]
    },
    {
      id: "conversational-onboarding-agent",
      slug: "conversational-onboarding-agent",
      category: "agentic-ai",
      featured: false,
      title: "Conversational Onboarding Agent UX Patterns",
      shortDescription: "A pattern library for designing trustworthy, transparent conversational AI onboarding experiences.",
      year: "2024",
      role: "Design Researcher & Designer",
      client: "Open Source / Research",
      heroImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "coa-h1", type: "heading", level: 2, content: "Context" },
        { id: "coa-p1", type: "paragraph", content: "Conversational AI onboarding is increasingly replacing form-based flows, but most implementations feel uncanny — either too robotic or dishonestly human. I researched 40 deployed conversational onboarding implementations to extract effective patterns." },
        { id: "coa-img1", type: "image", url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1400&auto=format&fit=crop", caption: "Pattern library: 12 conversational design patterns for trustworthy AI onboarding.", alt: "Pattern library" },
        { id: "coa-h2", type: "heading", level: 2, content: "Patterns Defined" },
        { id: "coa-p2", type: "paragraph", content: "The research produced 12 documented patterns: Progressive Disclosure, Transparent Capability Declaration, Graceful Escalation to Human, Memory Transparency, and 8 others — each with implementation examples and anti-patterns." },
        { id: "coa-metrics", type: "metrics", items: [
          { value: "12", label: "Conversational UX patterns documented" },
          { value: "40", label: "Live implementations studied" },
          { value: "+29%", label: "Onboarding completion when patterns applied" }
        ]}
      ]
    },

    // ─── GRAPHIC CATEGORY ─────────────────────────────────────────────────
    {
      id: "fintech-brand-identity",
      slug: "fintech-brand-identity",
      category: "graphic",
      featured: false,
      title: "Brand Identity for Fintech Startup",
      shortDescription: "Complete visual identity system for a B2B payments infrastructure company.",
      year: "2022",
      role: "Brand & Visual Designer",
      client: "Confidential (Series A Fintech)",
      heroImage: "https://images.unsplash.com/photo-1634534894014-2cb91cdd62e3?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "fbi-h1", type: "heading", level: 2, content: "Context" },
        { id: "fbi-p1", type: "paragraph", content: "A Series A payments infrastructure startup needed a brand identity that could credibly compete with established players like Stripe and Adyen, while communicating the accessibility and speed they offered to smaller merchants." },
        { id: "fbi-img1", type: "image", url: "https://images.unsplash.com/photo-1634534894014-2cb91cdd62e3?q=80&w=1400&auto=format&fit=crop", caption: "Wordmark system, color palette, and motion language for the brand identity.", alt: "Brand identity" },
        { id: "fbi-h2", type: "heading", level: 2, content: "Approach" },
        { id: "fbi-p2", type: "paragraph", content: "We anchored the identity in a geometric sans wordmark with a custom ligature, a restrained tricolor palette of deep navy, warm white, and a single electric accent, and a motion system built on velocity metaphors." },
        { id: "fbi-gallery", type: "gallery", columns: 2, caption: "Identity applied across digital and print touchpoints.", items: [
          { url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop", caption: "Website header and product UI with brand tokens applied." },
          { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop", caption: "Collateral system: pitch deck, business card, and email signature." }
        ]},
        { id: "fbi-metrics", type: "metrics", items: [
          { value: "Series A", label: "Raised 6 months after rebrand launch" },
          { value: "4 awards", label: "Design recognition including Awwwards nominee" },
          { value: "32%", label: "Increase in demo request conversion" }
        ]}
      ]
    },
    {
      id: "motion-design-system",
      slug: "motion-design-system",
      category: "graphic",
      featured: false,
      title: "Motion Design System for Product Micro-Interactions",
      shortDescription: "A principled motion language codified into a developer-ready easing and timing library.",
      year: "2023",
      role: "Motion & Product Designer",
      client: "Fieldiva",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "mds-h1", type: "heading", level: 2, content: "Context" },
        { id: "mds-p1", type: "paragraph", content: "Fieldiva's product felt choppy and inconsistent in motion. Modals slid in from different directions on different screens. Buttons bounced erratically. Loading states had no visual personality. Motion was added ad-hoc by each frontend engineer." },
        { id: "mds-img1", type: "image", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop", caption: "Motion timing curve library and easing taxonomy used across all animation triggers.", alt: "Motion system" },
        { id: "mds-h2", type: "heading", level: 2, content: "Solution" },
        { id: "mds-p2", type: "paragraph", content: "I established four motion principles (Purposeful, Physical, Grounded, Efficient) and defined 6 easing curves, 4 duration tiers, and 12 canonical interaction patterns — all exported as CSS custom properties and Framer Motion presets." },
        { id: "mds-metrics", type: "metrics", items: [
          { value: "12", label: "Canonical micro-interaction patterns defined" },
          { value: "100%", label: "Frontend adoption within 1 sprint" },
          { value: "+18pts", label: "Perceived quality score improvement" }
        ]}
      ]
    },
    {
      id: "editorial-poster-series",
      slug: "editorial-poster-series",
      category: "graphic",
      featured: false,
      title: "Editorial Poster Series — Design Conference",
      shortDescription: "12-poster editorial series communicating the theme of Human–Machine collaboration.",
      year: "2022",
      role: "Visual Designer",
      client: "DesignForum India",
      heroImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "eps-h1", type: "heading", level: 2, content: "Context" },
        { id: "eps-p1", type: "paragraph", content: "DesignForum India commissioned a 12-poster series for their annual design conference exploring the theme 'Machine Empathy: Designing for Human-AI Collaboration'." },
        { id: "eps-img1", type: "image", url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1400&auto=format&fit=crop", caption: "Poster series samples: typographic exploration of the human–machine dialogue.", alt: "Poster series" },
        { id: "eps-h2", type: "heading", level: 2, content: "Approach" },
        { id: "eps-p2", type: "paragraph", content: "Each poster explored a different dimension of the theme through typography-first compositions, using variable fonts to represent the tension and harmony between human expressiveness and machine precision." },
        { id: "eps-gallery", type: "gallery", columns: 2, caption: "Selected posters from the 12-piece editorial series.", items: [
          { url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop", caption: "Poster 03: 'Delegation' — typographic tension between organic and geometric." },
          { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop", caption: "Poster 09: 'Trust' — gradation from human script to monospace lattice." }
        ]},
        { id: "eps-metrics", type: "metrics", items: [
          { value: "12 posters", label: "Across the full conference identity system" },
          { value: "Featured", label: "In Communication Arts Annual 2022" },
          { value: "3,200+", label: "Attendees at conference opening exhibition" }
        ]}
      ]
    },
    {
      id: "open-source-icon-set",
      slug: "open-source-icon-set",
      category: "graphic",
      featured: false,
      title: "Icon Set for Open-Source Developer Tools",
      shortDescription: "480 precision-crafted icons for developer-facing interfaces, MIT licensed on GitHub.",
      year: "2023",
      role: "Icon & Visual Designer",
      client: "Open Source",
      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop",
      blocks: [
        { id: "ois-h1", type: "heading", level: 2, content: "Context" },
        { id: "ois-p1", type: "paragraph", content: "Developer tool interfaces suffer from icon inconsistency — mixing Heroicons with Phosphor with Lucide with custom SVGs in the same product. I designed a unified icon set specifically calibrated for code editors, terminals, and dev dashboards." },
        { id: "ois-img1", type: "image", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop", caption: "480-icon system shown in 3 weights across 12 semantic categories.", alt: "Icon set" },
        { id: "ois-h2", type: "heading", level: 2, content: "Design Principles" },
        { id: "ois-p2", type: "paragraph", content: "Designed on a 24px grid with 1.5px stroke weight for neutral, 2px for medium, and filled variants for high-emphasis states. Every icon is pixel-snapped at 12, 16, 20, and 24px — the sizes most commonly used in developer UIs." },
        { id: "ois-metrics", type: "metrics", items: [
          { value: "480", label: "Icons across 12 semantic categories" },
          { value: "4.8k ★", label: "GitHub stars in first 6 months" },
          { value: "MIT", label: "Licensed — free for any use" }
        ]}
      ]
    }
  ],

  connect: [
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/adarsh-n", enabled: true },
    { id: "email", label: "Email", url: "mailto:adarsh@example.com", enabled: true },
    { id: "github", label: "GitHub", url: "https://github.com/adarsh-n", enabled: true },
    { id: "behance", label: "Behance", url: "https://behance.net/adarsh-n", enabled: true },
    { id: "readcv", label: "ReadCV", url: "https://read.cv/adarsh", enabled: false }
  ],

  footer: {
    copyright: "© 2026"
  }
};
