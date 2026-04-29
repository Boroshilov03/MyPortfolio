import Csharp from "/src/assets/c-sharp-c.svg";
import JS from "/src/assets/javascript.png";
import REACT from "/src/assets/react.png";
import PYTHON from "/src/assets/python.png";
import MONGODB from "/src/assets/leaf.png";
import GIT from "/src/assets/Git.png";
import NODEJS from "/src/assets/NodeJS.png";
import POSTGRESQL from "/src/assets/PostgreSQL.png";

/** Initial node layout (flow coordinates). Edit labels and positions here. */
export const initialNodes = [
  {
    id: "me",
    type: "person",
    position: { x: 400, y: 300 },
    data: {
      title: "Software Engineer",
      name: "Mirlan Boroshilov",
      subtitle: "Software Engineer",
    },
  },
  {
    id: "hobbies",
    type: "category",
    position: { x: 50, y: 200 },
    data: {
      label: "Hobbies",
      tone: "violet",
      expandable: true,
      expanded: false
    },
  },
  {
    id: "tools",
    type: "category",
    position: { x: 1050, y: 200 },
    data: {
      label: "Tools",
      tone: "blue",
      expandable: true,
      expanded: false
    },
  },
  {
    id: "projects",
    type: "category",
    position: { x: 800, y: 650 },
    data: {
      label: "Projects",
      tone: "teal",
      expandable: true,
      expanded: false
    },
  },
];

/** Expandable nodes that appear when categories are clicked */
export const expandableNodes = {
  hobbies: [
    {
      id: "soccer",
      type: "item",
      position: { x: -260, y: -30 },
      data: {
        label: "Soccer",
        subtitle: "Weekend warrior",
        compact: true,
        emphasis: true
      },
    },
    {
      id: "photography",
      type: "item",
      position: { x: 260, y: -30 },
      data: {
        label: "Photography",
        subtitle: "Capturing moments",
        compact: true,
        emphasis: false
      },
    },
    {
      id: "cycling",
      type: "item",
      position: { x: -250, y: 470 },
      data: {
        label: "Cycling",
        subtitle: "Urban explorer",
        compact: true,
        emphasis: false
      },
    },
  ],
  projects: [
    {
      id: "project-standin",
      type: "item",
      position: { x: 900, y: 420 },
      data: {
        label: "StandIn",
        subtitle: "Multi-agent coordination system",
        description: "A project focused on coordinating multiple agents through a clean full-stack interface.",
        stack: ["React", "Node.js", "JavaScript"],
        compact: true,
        emphasis: true,
        isNew: true,
        githubUrl: "https://github.com/Boroshilov03/StandIn"
      },
    },
    {
      id: "project-portfolio",
      type: "item",
      position: { x: 1120, y: 420 },
      data: {
        label: "Portfolio",
        subtitle: "React + Vite + Tailwind",
        description: "A soft, interactive portfolio experience built around projects, tools, and personal context.",
        stack: ["React", "Vite", "Tailwind"],
        compact: true,
        emphasis: true,
        navigateTo: "/projects"
      },
    },
    {
      id: "project-ecommerce",
      type: "item",
      position: { x: 1340, y: 420 },
      data: {
        label: "E-commerce",
        subtitle: "React + Stripe",
        description: "A storefront concept with product browsing, checkout flow, and payment integration.",
        stack: ["React", "Stripe"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-api",
      type: "item",
      position: { x: 900, y: 900 },
      data: {
        label: "REST API",
        subtitle: "Node.js + Express",
        description: "A service-oriented API project with structured routes and server-side data handling.",
        stack: ["Node.js", "Express"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-chat",
      type: "item",
      position: { x: 1120, y: 900 },
      data: {
        label: "Chat App",
        subtitle: "Node.js + Socket.io",
        description: "A real-time messaging project built around persistent socket connections.",
        stack: ["Node.js", "Socket.io"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-ml",
      type: "item",
      position: { x: 1340, y: 900 },
      data: {
        label: "ML Classifier",
        subtitle: "Python + Scikit-learn",
        description: "A machine learning classification experiment using Python data tooling.",
        stack: ["Python", "Scikit-learn"],
        compact: true,
        emphasis: false
      },
    },
  ],
  tools: [
    {
      id: "skill-react",
      type: "item",
      position: { x: 1050, y: -130 },
      data: { label: "React", icon: REACT, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-js",
      type: "item",
      position: { x: 1335, y: 20 },
      data: { label: "JavaScript", icon: JS, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-node",
      type: "item",
      position: { x: 1440, y: 200 },
      data: { label: "Node.js", icon: NODEJS, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-python",
      type: "item",
      position: { x: 1335, y: 380 },
      data: { label: "Python", icon: PYTHON, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-csharp",
      type: "item",
      position: { x: 1050, y: 545 },
      data: { label: "C#", icon: Csharp, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-postgres",
      type: "item",
      position: { x: 760, y: 380 },
      data: { label: "PostgreSQL", icon: POSTGRESQL, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-mongo",
      type: "item",
      position: { x: 660, y: 200 },
      data: { label: "MongoDB", icon: MONGODB, compact: true, expandable: true, expanded: false },
    },
    {
      id: "skill-git",
      type: "item",
      position: { x: 760, y: 20 },
      data: { label: "Git", icon: GIT, compact: true, expandable: true, expanded: false },
    },
  ],
};

/** Projects built with each tool */
export const toolProjects = {
  "skill-react": [
    {
      id: "project-standin",
      type: "item",
      position: { x: 880, y: -390 },
      data: {
        label: "StandIn",
        subtitle: "Multi-agent coordination system",
        description: "A project focused on coordinating multiple agents through a clean full-stack interface.",
        stack: ["React", "Node.js", "JavaScript"],
        compact: true,
        navigateTo: "/projects",
        emphasis: true,
        isNew: true,
        githubUrl: "https://github.com/Boroshilov03/StandIn"
      },
    },
    {
      id: "project-portfolio",
      type: "item",
      position: { x: 1080, y: -410 },
      data: {
        label: "Portfolio Website",
        subtitle: "React + Vite",
        description: "A soft, interactive portfolio experience built around projects, tools, and personal context.",
        stack: ["React", "Vite", "Tailwind"],
        compact: true,
        navigateTo: "/projects",
        emphasis: true
      },
    },
    {
      id: "project-ecommerce",
      type: "item",
      position: { x: 1280, y: -340 },
      data: {
        label: "E-commerce App",
        subtitle: "React + Stripe",
        description: "A storefront concept with product browsing, checkout flow, and payment integration.",
        stack: ["React", "Stripe"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-js": [
    {
      id: "project-weather",
      type: "item",
      position: { x: 1620, y: -120 },
      data: {
        label: "Weather Dashboard",
        subtitle: "Vanilla JS + API",
        description: "A compact dashboard for fetching and presenting API-driven weather data.",
        stack: ["JavaScript", "API"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-todo",
      type: "item",
      position: { x: 1620, y: 80 },
      data: {
        label: "Task Manager",
        subtitle: "JS + Local Storage",
        description: "A browser-based task manager with local persistence.",
        stack: ["JavaScript", "Local Storage"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-node": [
    {
      id: "project-api",
      type: "item",
      position: { x: 1690, y: 150 },
      data: {
        label: "REST API",
        subtitle: "Node.js + Express",
        description: "A service-oriented API project with structured routes and server-side data handling.",
        stack: ["Node.js", "Express"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-chat",
      type: "item",
      position: { x: 1690, y: 290 },
      data: {
        label: "Chat Application",
        subtitle: "Node.js + Socket.io",
        description: "A real-time messaging project built around persistent socket connections.",
        stack: ["Node.js", "Socket.io"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-python": [
    {
      id: "project-ml",
      type: "item",
      position: { x: 1620, y: 390 },
      data: {
        label: "ML Classifier",
        subtitle: "Python + Scikit-learn",
        description: "A machine learning classification experiment using Python data tooling.",
        stack: ["Python", "Scikit-learn"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-automation",
      type: "item",
      position: { x: 1620, y: 540 },
      data: {
        label: "Web Scraper",
        subtitle: "Python + BeautifulSoup",
        description: "A Python automation project for extracting and shaping web data.",
        stack: ["Python", "BeautifulSoup"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-csharp": [
    {
      id: "project-desktop",
      type: "item",
      position: { x: 1150, y: 760 },
      data: {
        label: "Desktop App",
        subtitle: "C# + WPF",
        description: "A desktop application concept using the Windows presentation stack.",
        stack: ["C#", "WPF"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-game",
      type: "item",
      position: { x: 920, y: 760 },
      data: {
        label: "Unity Game",
        subtitle: "C# + Unity",
        description: "A gameplay prototype built with Unity and C# scripting.",
        stack: ["C#", "Unity"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-postgres": [
    {
      id: "project-cms",
      type: "item",
      position: { x: 500, y: 390 },
      data: {
        label: "CMS System",
        subtitle: "PostgreSQL + Node.js",
        description: "A content management concept with relational data modeling.",
        stack: ["PostgreSQL", "Node.js"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-analytics",
      type: "item",
      position: { x: 500, y: 540 },
      data: {
        label: "Analytics Dashboard",
        subtitle: "PostgreSQL + Charts",
        description: "A reporting dashboard concept backed by relational analytics data.",
        stack: ["PostgreSQL", "Charts"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-mongo": [
    {
      id: "project-social",
      type: "item",
      position: { x: 400, y: 120 },
      data: {
        label: "Social Platform",
        subtitle: "MongoDB + React",
        description: "A social product concept using document data and a React interface.",
        stack: ["MongoDB", "React"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-blog",
      type: "item",
      position: { x: 400, y: 280 },
      data: {
        label: "Blog Engine",
        subtitle: "MongoDB + Express",
        description: "A publishing backend concept using document storage and Express routes.",
        stack: ["MongoDB", "Express"],
        compact: true,
        emphasis: false
      },
    },
  ],
  "skill-git": [
    {
      id: "project-open-source",
      type: "item",
      position: { x: 500, y: -120 },
      data: {
        label: "Open Source Lib",
        subtitle: "Git + GitHub",
        description: "A library workflow concept centered on version control and collaboration.",
        stack: ["Git", "GitHub"],
        compact: true,
        emphasis: false
      },
    },
    {
      id: "project-ci-cd",
      type: "item",
      position: { x: 500, y: 70 },
      data: {
        label: "CI/CD Pipeline",
        subtitle: "Git + Actions",
        description: "An automated delivery workflow using GitHub Actions.",
        stack: ["Git", "GitHub Actions"],
        compact: true,
        emphasis: false
      },
    },
  ],
};

export const initialEdges = [
{
 id:"edge-me-hobbies",
 source:"me",
 target:"hobbies",
 sourceHandle:"out-left",
 targetHandle:"in-right",
 type:"smoothstep"
},
{
 id:"edge-me-tools",
 source:"me",
 target:"tools",
 sourceHandle:"out-right",
 targetHandle:"in-left",
 type:"smoothstep"
},
{
 id:"edge-me-projects",
 source:"me",
 target:"projects",
 sourceHandle:"out-bottom",
 targetHandle:"in-top",
 type:"smoothstep"
}
];

/** Edges that appear when categories are expanded */
export const expandableEdges = {
  hobbies: [
    {
      id: "e-hobbies-soccer",
      source: "hobbies",
      target: "soccer",
      sourceHandle: "out-top",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e-hobbies-photography",
      source: "hobbies",
      target: "photography",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-hobbies-cycling",
      source: "hobbies",
      target: "cycling",
      sourceHandle: "out-bottom",
      targetHandle: "t",
      type: "smoothstep",
    },
  ],
  projects: [
    {
      id: "e-projects-standin",
      source: "projects",
      target: "project-standin",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-projects-portfolio",
      source: "projects",
      target: "project-portfolio",
      sourceHandle: "out-top",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e-projects-ecommerce",
      source: "projects",
      target: "project-ecommerce",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-projects-api",
      source: "projects",
      target: "project-api",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-projects-chat",
      source: "projects",
      target: "project-chat",
      sourceHandle: "out-bottom",
      targetHandle: "t",
      type: "smoothstep",
    },
    {
      id: "e-projects-ml",
      source: "projects",
      target: "project-ml",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
  ],
  tools: [
    {
      id: "e-tools-react",
      source: "tools",
      target: "skill-react",
      sourceHandle: "out-top",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e-tools-js",
      source: "tools",
      target: "skill-js",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-tools-node",
      source: "tools",
      target: "skill-node",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-tools-python",
      source: "tools",
      target: "skill-python",
      sourceHandle: "out-right",
      targetHandle: "l",
      type: "smoothstep",
    },
    {
      id: "e-tools-csharp",
      source: "tools",
      target: "skill-csharp",
      sourceHandle: "out-bottom",
      targetHandle: "t",
      type: "smoothstep",
    },
    {
      id: "e-tools-postgres",
      source: "tools",
      target: "skill-postgres",
      sourceHandle: "out-bottom",
      targetHandle: "t",
      type: "smoothstep",
    },
    {
      id: "e-tools-mongo",
      source: "tools",
      target: "skill-mongo",
      sourceHandle: "out-left",
      targetHandle: "r",
      type: "smoothstep",
    },
    {
      id: "e-tools-git",
      source: "tools",
      target: "skill-git",
      sourceHandle: "out-top",
      targetHandle: "b",
      type: "smoothstep",
    },
  ],
};

const CATEGORY_IDS = new Set(["hobbies", "tools", "projects"]);

const uniqueById = (items) => {
  const seen = new Set();

  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

const withExpandedState = (node, expandedCategories, expandedTools) => ({
  ...node,
  data: {
    ...node.data,
    expanded: CATEGORY_IDS.has(node.id)
      ? Boolean(expandedCategories[node.id])
      : Boolean(expandedTools[node.id]),
  },
});

const getToolProjectEdges = (expandedTools) =>
  Object.keys(expandedTools).flatMap((toolId) => {
    if (!expandedTools[toolId] || !toolProjects[toolId]) return [];

    return toolProjects[toolId].map((project) => ({
      id: `edge-${toolId}-${project.id}`,
      source: toolId,
      target: project.id,
      sourceHandle: "r",
      targetHandle: "l",
      type: "smoothstep",
      label: "built with",
      data: { relationship: "built with" },
    }));
  });

const getRelationship = (edge) => {
  if (edge.source === "me") return "category";
  if (edge.source === "tools") return "uses";
  return "includes";
};

const withRelationshipLabel = (edge) => {
  const relationship = edge.data?.relationship || getRelationship(edge);

  return {
    ...edge,
    label: edge.label || relationship,
    data: {
      ...edge.data,
      relationship,
    },
  };
};

export const getVisibleNodes = (expandedCategories, expandedTools) => {
  const categoryChildren = Object.keys(expandedCategories).flatMap((categoryId) =>
    expandedCategories[categoryId] && expandableNodes[categoryId]
      ? expandableNodes[categoryId]
      : []
  );

  const toolChildren = Object.keys(expandedTools).flatMap((toolId) =>
    expandedTools[toolId] && toolProjects[toolId] ? toolProjects[toolId] : []
  );

  return uniqueById([...initialNodes, ...categoryChildren, ...toolChildren]).map((node) =>
    withExpandedState(node, expandedCategories, expandedTools)
  );
};

export const getVisibleEdges = (expandedCategories, expandedTools, visibleNodes) => {
  const visibleNodeIds = new Set(visibleNodes.map((node) => node.id));

  const categoryEdges = Object.keys(expandedCategories).flatMap((categoryId) =>
    expandedCategories[categoryId] && expandableEdges[categoryId]
      ? expandableEdges[categoryId]
      : []
  );

  return uniqueById([...initialEdges, ...categoryEdges, ...getToolProjectEdges(expandedTools)])
    .filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target))
    .map(withRelationshipLabel);
};
