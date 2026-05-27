/**
 * @fileoverview WebMCP tool provider for the portfolio site.
 *
 * Exposes a small set of read-only tools to AI agents / browser assistants
 * via the W3C WebMCP API (navigator.modelContext), shipping experimentally in
 * Chrome 146+. The whole module is a no-op where the API is absent, so it costs
 * nothing on unsupported browsers and degrades gracefully.
 *
 * Spec: https://webmachinelearning.github.io/webmcp/
 */

(function registerWebMcpTools() {
  // Feature detection — bail out silently on unsupported browsers.
  if (!('modelContext' in navigator) ||
      typeof navigator.modelContext.registerTool !== 'function') {
    return;
  }

  /** Canonical contact channels for Ján Dugovič. */
  const CONTACT = {
    name: 'Ján Dugovič',
    role: 'Product Designer · Design Systems specialist',
    email: 'dugovicjan@gmail.com',
    signal: 'https://signal.me/#eu/pxHL83IAqb4Ti4ZFfAOG8mvGjI1g-pn-bTDOHaunKNNm4DDVH2VOx7l8soUGkvHK',
    signalHandle: '@jd_ntk.42',
    linkedin: 'https://www.linkedin.com/in/dugi/',
    github: 'https://github.com/demoklion/jandu',
    website: 'https://jandu.top/'
  };

  /** Portfolio case studies. Keep in sync with the "Work" section of index.html. */
  const PROJECTS = [
    {
      title: 'Golem Design System',
      url: 'https://jandu.top/project1.html',
      summary: "Major design system to support a bank's new services offering. Covers target, role, and artifacts."
    },
    {
      title: 'Začni učit!',
      url: 'https://jandu.top/project2.html',
      summary: 'Complex web app for an education NGO. Covers target, role, and artifacts.'
    },
    {
      title: 'HeO',
      url: 'https://jandu.top/project3.html',
      summary: 'ERP software redesign. Covers problem, barriers, process, and result.'
    }
  ];

  navigator.modelContext.registerTool({
    name: 'get_contact_info',
    title: 'Contact Ján Dugovič',
    description: 'Returns the preferred ways to contact Ján Dugovič (email, Signal, LinkedIn, GitHub).',
    annotations: { readOnlyHint: true },
    inputSchema: { type: 'object', properties: {} },
    execute: async () => ({
      content: [{ type: 'text', text: JSON.stringify(CONTACT) }]
    })
  });

  navigator.modelContext.registerTool({
    name: 'list_projects',
    title: 'List portfolio projects',
    description: 'Lists the portfolio case studies with title, one-line summary, and URL.',
    annotations: { readOnlyHint: true },
    inputSchema: { type: 'object', properties: {} },
    execute: async () => ({
      content: [{ type: 'text', text: JSON.stringify(PROJECTS) }]
    })
  });
})();
