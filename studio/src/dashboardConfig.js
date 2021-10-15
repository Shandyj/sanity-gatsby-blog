export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61693dcb48fee4a7453a2a92",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xp3ufw2s",
                  apiId: "be519b2f-7571-4766-8720-b00eafbb4ed0",
                },
                {
                  buildHookId: "61693dcb92dafb915065f568",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-udwzxtnq",
                  apiId: "0ac83b09-7637-44f0-8685-a083880b255c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Shandyj/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-udwzxtnq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
