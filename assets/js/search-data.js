// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Experience at OpenAI, Stanford AI Lab, MultiOn, Stanford Carta, and Jane Street.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "AI and ML research publications — web agent benchmarking (NeurIPS 2025) and multi-agent reinforcement learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected projects — market-making bots, multi-agent RAG pipelines, and low-latency trading algorithms.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-coursework",
          title: "coursework",
          description: "Favorite classes at Stanford and notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/coursework/";
          },
        },{id: "dropdown-awards",
              title: "awards",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/awards/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-favorite-films",
              title: "favorite films",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/films/";
              },
            },{id: "dropdown-essays-i-enjoy",
              title: "essays i enjoy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/essays/";
              },
            },{id: "books-a-little-life",
          title: 'A Little Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_little_life/";
            },},{id: "books-david-and-goliath",
          title: 'David and Goliath',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/david_and_goliath/";
            },},{id: "books-死神永生-death-39-s-end",
          title: '死神永生 — Death&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deaths_end/";
            },},{id: "books-how-will-you-measure-your-life",
          title: 'How Will You Measure Your Life?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_will_you_measure_your_life/";
            },},{id: "books-skin-in-the-game",
          title: 'Skin in the Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/skin_in_the_game/";
            },},{id: "books-黑暗森林-the-dark-forest",
          title: '黑暗森林 — The Dark Forest',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_dark_forest/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thinking_fast_and_slow/";
            },},{id: "books-三十六计-thirty-six-stratagems",
          title: '三十六计 — Thirty-Six Stratagems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thirty_six_stratagems/";
            },},{id: "books-三体-the-three-body-problem",
          title: '三体 — The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/three_body_problem/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-sv-hub-hackathon-winner",
          title: 'SV Hub Hackathon Winner',
          description: "Multi-agent RAG pipeline for automated O-1 visa validation — $50k top prize. Pitched to Eric Schmidt, Sebastian Thrun, and others.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-jane-street-etc-algorithm",
          title: 'Jane Street ETC Algorithm',
          description: "Low-latency trading strategies for Jane Street&#39;s Electronic Trading Challenge — 2nd place out of 80+ teams with $10M+ simulated PnL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/denfujita", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jamesjihaoliu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=t3MV-GsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
