# Specialized Agent Recommendations for CSS Migration

**Context**: Bootstrap to Custom CSS migration with visual regression testing  
**Goal**: Ensure pixel-perfect migration with proper testing and code quality

## Recommended Agent Setup

### 1. Visual Regression Tester Agent
**Purpose**: Automated visual testing and validation  
**Responsibilities**:
- Run Playwright visual regression tests after each CSS change
- Compare screenshots against baseline with 1% threshold
- Generate detailed reports of visual differences
- Validate responsive behavior across desktop/mobile viewports
- Ensure cross-browser compatibility

**Tools Access**: Playwright MCP, Bash (test commands), Read (test reports)  
**Trigger**: After any CSS file changes or HTML modifications

### 2. Frontend Developer Agent  
**Purpose**: CSS implementation and component development  
**Responsibilities**:
- Replace Bootstrap classes with custom CSS equivalents
- Implement responsive grid systems using CSS Grid/Flexbox
- Create custom button and navigation components
- Optimize CSS for performance and maintainability
- Ensure semantic HTML structure preservation

**Tools Access**: Edit, MultiEdit, Read, Grep, Bash (build commands)  
**Trigger**: For implementing specific CSS components or utilities

### 3. Code Reviewer Agent
**Purpose**: Code quality and best practices enforcement  
**Responsibilities**:
- Review CSS for performance optimization opportunities
- Ensure proper CSS methodology (BEM, maintainable selectors)
- Validate accessibility compliance (color contrast, keyboard navigation)
- Check for CSS specificity conflicts and cascade issues
- Verify browser compatibility of CSS features used

**Tools Access**: Read, Grep, WebSearch (compatibility checks)  
**Trigger**: Before commits, after completing CSS components

### 4. Project Manager Agent
**Purpose**: Workflow coordination and progress tracking  
**Responsibilities**:
- Update TodoWrite with detailed task breakdowns
- Track progress against milestones and deadlines
- Coordinate between different agents and ensure proper sequencing
- Update project memory files with each completed phase
- Generate status reports and identify blockers

**Tools Access**: TodoWrite, Edit (memory files), Read, Bash (git status, npm run minify-css)  
**Trigger**: At beginning/end of work sessions, after major milestones

## Agent Workflow Integration

### Sequential Workflow
1. **Project Manager** → Plans next CSS component to replace
2. **Frontend Developer** → Implements custom CSS for that component  
3. **Visual Regression Tester** → Validates no visual changes occurred
4. **Code Reviewer** → Reviews implementation for quality/performance
5. **Project Manager** → Updates progress and plans next iteration

### Parallel Workflow (for efficiency)
- **Frontend Developer** + **Visual Regression Tester** work in tight loop
- **Code Reviewer** reviews completed components while development continues
- **Project Manager** coordinates and updates documentation continuously

## Agent Configuration Examples

### Visual Regression Tester
```
"visual-tester": {
  "description": "Run visual regression tests and validate CSS changes",
  "tools": ["Playwright MCP", "Bash", "Read"],
  "trigger": "after CSS file changes",
  "success_criteria": "< 1% visual difference from baseline"
}
```

### Frontend Developer  
```
"css-developer": {
  "description": "Implement Bootstrap replacements with custom CSS",
  "tools": ["Edit", "MultiEdit", "Read", "Grep", "Bash"],
  "trigger": "for CSS component implementation",
  "focus": "responsive design, performance, maintainability"
}
```

### Code Reviewer
```
"css-reviewer": {
  "description": "Review CSS quality, performance, and best practices", 
  "tools": ["Read", "Grep", "WebSearch"],
  "trigger": "before commits, after component completion",
  "checks": ["performance", "accessibility", "browser compatibility"]
}
```

### Project Manager
```
"css-project-manager": {
  "description": "Coordinate CSS migration workflow and track progress",
  "tools": ["TodoWrite", "Edit", "Read", "Bash"],
  "trigger": "session start/end, major milestones",
  "focus": "progress tracking, documentation, workflow coordination"
}
```

## Benefits of Agent Specialization

### Quality Assurance
- **Dedicated testing**: Visual regression agent ensures no regressions
- **Code quality**: Reviewer agent enforces best practices consistently
- **Workflow management**: PM agent prevents scope creep and missing tasks

### Efficiency Gains
- **Parallel work**: Multiple agents can work simultaneously on different aspects
- **Specialized expertise**: Each agent optimized for specific domain knowledge
- **Reduced context switching**: Each agent maintains focus on their specialty

### Risk Mitigation
- **Multiple validation layers**: Visual, code quality, and workflow validation
- **Documentation consistency**: PM agent ensures all changes are tracked
- **Rollback capability**: Clear separation makes it easier to identify and revert issues

## Implementation Strategy

### Phase 1: Setup (Current)
- Define agent responsibilities and trigger conditions
- Configure agent access to appropriate tools
- Establish communication protocols between agents

### Phase 2: Testing (Next)
- Run small test with one component replacement
- Validate agent workflow with visual regression testing
- Refine agent responsibilities based on results

### Phase 3: Full Migration
- Deploy complete agent workflow for all Bootstrap replacements
- Monitor and optimize agent coordination
- Document lessons learned for future projects

## Detailed Agent Specifications

### 1. Visual Regression Tester Agent
```json
{
  "name": "visual-regression-tester",
  "purpose": "Automated visual testing and validation during CSS migration",
  "tools": ["Playwright MCP", "Bash", "Read", "WebSearch"],
  "trigger_conditions": [
    "After CSS file modifications",
    "After HTML class changes", 
    "Before commit operations",
    "On manual request for validation"
  ],
  "success_criteria": {
    "visual_difference": "< 1% threshold",
    "coverage": "All 4 pages (desktop + mobile)",
    "performance": "Test completion < 60 seconds"
  },
  "responsibilities": [
    "Execute Playwright visual regression tests",
    "Compare current state vs baseline screenshots",
    "Generate detailed difference reports",
    "Validate responsive behavior across viewports",
    "Update baseline images when changes are intentional",
    "Document any visual anomalies discovered"
  ],
  "workflow_integration": {
    "before": ["Frontend Developer"],
    "after": ["Code Reviewer"],
    "parallel": "None (requires clean state for testing)"
  }
}
```

### 2. Frontend Developer Agent
```json
{
  "name": "frontend-developer", 
  "purpose": "Full-stack frontend development with focus on 30-year maintainability",
  "tools": ["Edit", "MultiEdit", "Read", "Grep", "Bash", "Write", "WebSearch"],
  "trigger_conditions": [
    "Any HTML, CSS, or JavaScript implementation needed",
    "Web standards compliance updates required",
    "Performance optimization opportunities identified",
    "Accessibility improvements needed",
    "Manual request for frontend development"
  ],
  "success_criteria": {
    "longevity": "30+ year maintainability using web standards",
    "performance": "Optimal bundle sizes and load times",
    "compatibility": "Cross-browser and future-proof implementation",
    "accessibility": "WCAG AA compliance maintained"
  },
  "responsibilities": [
    "Implement modern HTML5 semantic markup",
    "Create maintainable CSS with future-proof methodologies",
    "Develop vanilla JavaScript using web standards (no frameworks)",
    "Optimize for performance (bundle size, load times, runtime)",
    "Ensure cross-browser compatibility and progressive enhancement",
    "Implement responsive design with mobile-first approach",
    "Use Web Components and Custom Elements for reusability",
    "Follow accessibility best practices and ARIA standards",
    "Choose future-proof technologies over trendy frameworks",
    "Write self-documenting code with comprehensive comments"
  ],
  "30_year_principles": [
    "Web standards over proprietary solutions",
    "Vanilla JavaScript over frameworks",
    "Progressive enhancement over graceful degradation",
    "Semantic HTML as foundation",
    "CSS that adapts to future browser features",
    "Minimal dependencies, maximum longevity"
  ]
}
```

### 3. Code Reviewer Agent
```json
{
  "name": "code-reviewer",
  "purpose": "Comprehensive web technology review for 30-year maintainability",
  "tools": ["Read", "Grep", "WebSearch", "Bash", "Task"],
  "trigger_conditions": [
    "After any HTML, CSS, or JavaScript implementation",
    "Before commits and pull requests",
    "When performance or security concerns arise",
    "Periodic code quality audits",
    "Manual request for comprehensive review"
  ],
  "success_criteria": {
    "longevity": "Code will remain maintainable for 30+ years",
    "performance": "No regressions, optimal efficiency achieved",
    "security": "No vulnerabilities, safe coding practices",
    "standards": "Full web standards compliance"
  },
  "responsibilities": [
    "Review HTML for semantic correctness and accessibility",
    "Audit CSS for performance, maintainability, and future-proofing",
    "Validate JavaScript for security, performance, and standards compliance",
    "Ensure cross-browser compatibility and progressive enhancement",
    "Check for accessibility compliance (WCAG AA+)",
    "Validate web standards usage over proprietary solutions",
    "Review bundle sizes and loading performance",
    "Assess long-term maintainability and documentation quality",
    "Verify security best practices (XSS prevention, CSP compliance)",
    "Check for proper error handling and graceful degradation"
  ],
  "30_year_review_criteria": [
    "Will this code work without modification in 2055?",
    "Does this use stable web standards?",
    "Is this self-documenting and understandable?",
    "Can this handle future browser changes gracefully?",
    "Does this minimize maintenance burden?",
    "Is this accessible to all users regardless of ability?"
  ]
}
```

### 4. Project Manager Agent
```json
{
  "name": "project-manager",
  "purpose": "Long-term project coordination with focus on maintainability and knowledge preservation",
  "tools": ["TodoWrite", "Edit", "Read", "Bash", "Grep", "WebSearch"],
  "trigger_conditions": [
    "Beginning and end of every work session",
    "After each completed component or milestone",
    "Every 3-5 commits to ensure regular PR creation",
    "When blockers or coordination issues arise",
    "Periodic progress reporting (weekly/milestone-based)"
  ],
  "success_criteria": {
    "30_year_maintainability": "All decisions documented for future developers",
    "progress_transparency": "Clear progress reports and milestone tracking",
    "knowledge_preservation": "Comprehensive documentation of decisions and learnings",
    "git_hygiene": "Regular commits and PRs with proper documentation"
  },
  "responsibilities": [
    "Plan incremental development strategy for any web project",
    "Enforce regular commit and PR cadence (every 3-5 commits)",
    "Generate periodic progress reports with metrics and blockers",
    "Update project memory files with decisions, learnings, and context",
    "Coordinate agent workflows and resolve conflicts",
    "Ensure all work follows 30-year maintainability principles",
    "Track technical debt and plan mitigation strategies",
    "Document architectural decisions and their rationale",
    "Monitor and report on bundle sizes, performance metrics",
    "Plan rollback strategies and maintain project history",
    "Identify and document patterns for future reuse"
  ],
  "reporting_schedule": {
    "session_start": "Review current status, plan next steps",
    "every_3_commits": "Check if PR should be created",
    "milestone_completion": "Comprehensive progress report",
    "session_end": "Update memory files, document learnings",
    "weekly": "Overall project health and trajectory report"
  },
  "30_year_principles": [
    "Document not just what was done, but why it was done",
    "Preserve context and decision rationale for future maintainers",
    "Maintain clear project history through proper git practices",
    "Plan for developer handoffs and knowledge transfer",
    "Focus on reducing long-term maintenance burden",
    "Build reusable patterns and document their usage"
  ]
}
```

## Agent Communication Protocols

### Status Reporting Format
Each agent should provide structured status updates:
```
## Agent: [Name]
**Task**: [Current task description]
**Status**: [In Progress/Complete/Blocked/Failed]
**Progress**: [Percentage or milestone achieved]
**Next**: [Next planned action]
**Blockers**: [Any issues preventing progress]
**Handoff**: [Ready to hand off to which agent]
```

### Handoff Procedures
1. **Project Manager → Frontend Developer**: Provides specific component and requirements
2. **Frontend Developer → Visual Tester**: Signals implementation complete, ready for testing
3. **Visual Tester → Code Reviewer**: Provides test results and any concerns
4. **Code Reviewer → Project Manager**: Provides review results and recommendations

### Emergency Protocols
- **Visual regression detected**: Immediate halt, investigate cause
- **Performance regression**: Code Reviewer escalates to Project Manager
- **Build failures**: Frontend Developer resolves before handoff
- **Agent conflicts**: Project Manager mediates and adjusts workflow

## Success Metrics

### Individual Agent KPIs
- **Visual Tester**: 100% test coverage, <1% false positives
- **Frontend Developer**: Zero visual regressions, on-time delivery
- **Code Reviewer**: Zero performance regressions, accessibility maintained
- **Project Manager**: All milestones tracked, smooth agent coordination

### Overall Project KPIs
- **30-Year Maintainability**: All code uses web standards, minimal dependencies
- **Bundle Size**: Achieve <20KB total CSS (currently 12KB custom + Bootstrap removal)
- **Visual Fidelity**: Zero unintended visual changes across all pages
- **Performance**: Maintain or improve page load times and runtime efficiency
- **Documentation Quality**: All decisions and patterns documented for future developers
- **Git Hygiene**: Regular commits (every 3-5 changes) and PRs with proper documentation
- **Standards Compliance**: 100% web standards usage, no proprietary dependencies

## Continuous Improvement

### Retrospective Process
After each major component migration:
1. **What worked well**: Document successful patterns
2. **What could improve**: Identify optimization opportunities  
3. **Agent coordination**: Refine handoff procedures
4. **Tool effectiveness**: Assess tool usage and needs

### Knowledge Sharing
- Update AGENT_RECOMMENDATIONS.md with lessons learned
- Enhance PROJECT_MEMORY.md with successful strategies
- Refine agent specifications based on real-world performance

This agent framework provides structured, accountable, and coordinated approach to the complex Bootstrap → Custom CSS migration while maintaining the highest quality standards.