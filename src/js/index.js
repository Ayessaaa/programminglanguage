window.onload = function () {
  const option1 = [
    {
      name: "Erlang",
      description:
        "A functional language designed for building highly concurrent, distributed systems, commonly used in telecoms.",
      link: "",
      correct: true,
    },
    {
      name: "Piro",
      description:
        "A language for creating lightweight shaders in small-scale game engines or VR projects.",
      link: "",
      correct: false,
    },
    {
      name: "Zeph",
      description:
        "A reactive programming language for creating highly responsive web interfaces and IoT applications.",
      link: "",
      correct: false,
    },
    {
      name: "R",
      description:
        "A programming language focused on statistical computing and data visualization, widely used in academia and research.",
      link: "",
      correct: true,
    },
    {
      name: "Ada",
      description:
        "A statically typed language designed for mission-critical systems like aerospace and defense.",
      link: "",
      correct: true,
    },
  ];
  const option2 = [
    {
      name: "LatticeQL",
      description:
        "A quantum-inspired query language for manipulating data in non-traditional database structures.",
      link: "",
      correct: false,
    },
    {
      name: "Pony",
      description:
        "A language for building concurrent applications with type-safe and memory-efficient features.",
      link: "",
      correct: true,
    },
    {
      name: "Nim",
      description:
        "A statically typed language with Python-like syntax, optimized for performance and compiled to C.",
      link: "",
      correct: true,
    },
    {
      name: "HexaCode",
      description:
        "A futuristic cryptography-focused language for building secure communication protocols and blockchain applications.",
      link: "",
      correct: false,
    },
    {
      name: "Verox",
      description:
        "A performance-oriented language for building ultra-fast server-side applications with built-in parallelism.",
      link: "",
      correct: false,
    },
  ];

  optionName1 = document.getElementById("option-name1");
  optionName1.innerText = option1[0].name;
  optionDescription1 = document.getElementById("option-description1");
  optionDescription1.innerText = option1[0].description;

  optionName2 = document.getElementById("option-name2");
  optionName2.innerText = option2[0].name;
  optionDescription2 = document.getElementById("option-description2");
  optionDescription2.innerText = option2[0].description;
};
