import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiC,
  SiGo,
  SiRedis,
  SiPostgresql,
  SiStreamlit,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
  tags: string[];
};

export const projects = [
  {
    id: 0,
    name: "Adaptive",
    description:
      "Intelligent model routing system that cuts AI inference costs by 70-80% by analyzing prompt complexity. Supports multi-provider routing across OpenAI, Anthropic, Gemini, Groq, and others. Secured 320+ signups and selection by Antler accelerator as a validated startup.",
    technologies: [SiGo, SiPython, SiNextdotjs, SiTypescript, SiRedis, SiPostgresql],
    techNames: ["Go", "Python", "Next.js", "TypeScript", "Redis", "PostgreSQL"],
    techLinks: [
      "https://go.dev/",
      "https://www.python.org/",
      "https://nextjs.org/",
      "https://www.typescriptlang.org/",
      "https://redis.io/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/Egham-7/adaptive",
    demo: "https://llmadaptive.uk/",
    image: "/projects/Adaptive.png",
    available: true,
    tags: ["AI/Machine Learning", "Web Development", "Product Development"],
  },
  {
    id: 1,
    name: "Student Copilot",
    description:
      "Student Copilot is an AI tool that helps students stay organized and boost productivity. It generates lecture notes, quizzes, and manages course schedules. The integrated chatbot provides real-time Q&A for better engagement and understanding of course material.",
    technologies: [SiTypescript, SiTailwindcss],
    techNames: ["TypeScript", "Tailwind CSS", "Langchain"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://tailwindcss.c",
      "https://www.langchain.com/",
    ],
    github: "https://github.com/Egham-7/StudentCopilot",
    demo: "https://www.studentcopilot.app/",
    image: "/projects/studentcopilot.png",
    available: true,
    tags: ["AI/Machine Learning", "Web Development", "Product Development"],
  },
  {
    id:2,
    name: "Readyou",
    description:
      "The Dynamic README Generator automatically creates clear, structured README.md files by pulling key repository details. It streamlines documentation, saving developers time with easy-to-understand, informative files.",
    technologies: [SiNextdotjs, SiPython],
    techNames: ["NextJS", "Python"],
    techLinks: ["https://nextjs.org/telemetry", "https://www.python.org/"],
    github: "https://github.com/Egham-7/readme-ai",
    demo: "https://readyou.uk/",
    image: "/projects/readyou.png",
    available: true,
    tags: ["Web Development", "Product Development"],
  },

  {
    id: 3,
    name: "LLM Journey",
    description:
      "PyTorch implementation of the Transformer architecture following Harvard NLP's Annotated Transformer approach. Comprehensive training infrastructure with multiple generation strategies including greedy, beam search, and top-k sampling.",
    technologies: [SiPytorch, SiPython],
    techNames: ["PyTorch", "Python", "Transformers"],
    techLinks: [
      "https://pytorch.org/",
      "https://www.python.org/",
      "https://huggingface.co/docs/transformers/",
    ],
    github: "https://github.com/mohamedAtoui/LLM-Journey",
    demo: "",
    image: "/projects/LLMJourney.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 4,
    name: "Mini Compiler",
    description:
      "A compiler implementation built with Lex and C for educational purposes. Demonstrates lexical analysis, parsing, and code generation phases of compilation. Created as part of CS3470 coursework.",
    technologies: [SiC],
    techNames: ["C", "Lex"],
    techLinks: ["https://en.wikipedia.org/wiki/C_(programming_language)", "https://en.wikipedia.org/wiki/Lex_(software)"],
    github: "https://github.com/mohamedAtoui/Mini-Compiler",
    demo: "",
    image: "/projects/MiniCompiler.png",
    available: true,
    tags: ["Systems/Compilers"],
  },
  {
    id: 5,
    name: "FIDO Authentication",
    description:
      "Educational demonstration of FIDO2 passwordless authentication using Streamlit. Implements public/private key pair challenge-response flow for secure, phishing-resistant authentication without passwords.",
    technologies: [SiPython, SiStreamlit],
    techNames: ["Python", "Streamlit", "Cryptography"],
    techLinks: [
      "https://www.python.org/",
      "https://streamlit.io/",
      "https://cryptography.io/",
    ],
    github: "https://github.com/mohamedAtoui/mock-FIDO-auth",
    demo: "",
    image: "/projects/FIDO.png",
    available: true,
    tags: ["Security/Authentication", "Web Development"],
  },
  {
    id: 6,
    name: "MyKafka",
    description:
      "Lightweight educational Python implementation of Apache Kafka demonstrating distributed messaging principles. Features topic creation, message production/consumption, and disk-based persistence using TCP sockets.",
    technologies: [SiPython],
    techNames: ["Python", "TCP Sockets"],
    techLinks: ["https://www.python.org/", "https://docs.python.org/3/library/socket.html"],
    github: "https://github.com/mohamedAtoui/MyKafka",
    demo: "",
    image: "/projects/MyKafka.png",
    available: true,
    tags: ["Systems/Compilers", "Product Development"],
  },
  {
    id: 7,
    name: "Hand Sign Recognition",
    description:
      "Real-time machine learning system for hand gesture classification and recognition from camera feeds. Uses computer vision and deep learning to detect and interpret hand signs with high accuracy.",
    technologies: [SiPython, SiTensorflow, SiPytorch],
    techNames: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
    techLinks: [
      "https://www.python.org/",
      "https://www.tensorflow.org/",
      "https://pytorch.org/",
      "https://opencv.org/",
    ],
    github: "https://github.com/mohamedAtoui/Hand-sign-recognition",
    demo: "",
    image: "/projects/HandSign.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 8,
    name: "LSTM from Scratch",
    description:
      "Minimal Python implementation of LSTM (Long Short-Term Memory) neural networks built from the ground up. Educational project demonstrating the inner workings of recurrent neural networks without relying on high-level frameworks.",
    technologies: [SiPython],
    techNames: ["Python", "NumPy"],
    techLinks: ["https://www.python.org/", "https://numpy.org/"],
    github: "https://github.com/mohamedAtoui/LSTM-from-SCRATCH",
    demo: "",
    image: "/projects/LSTM.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 9,
    name: "Transformer From Stones",
    description:
      "Educational implementation of the Transformer architecture built from first principles. Focuses on understanding core components like self-attention, positional encoding, and multi-head attention for AI applications.",
    technologies: [SiPython, SiPytorch],
    techNames: ["Python", "PyTorch"],
    techLinks: ["https://www.python.org/", "https://pytorch.org/"],
    github: "https://github.com/mohamedAtoui/Transformer-From-Stones",
    demo: "",
    image: "/projects/Transformer.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 10,
    name: "Business Email Generator",
    description:
      "AI-powered web application that automatically generates personalized cold emails based on job postings scraped from websites. Integrates portfolio information using Groq LLM API for context-aware email creation.",
    technologies: [SiPython, SiStreamlit],
    techNames: ["Python", "Streamlit", "Groq API"],
    techLinks: [
      "https://www.python.org/",
      "https://streamlit.io/",
      "https://groq.com/",
    ],
    github: "https://github.com/mohamedAtoui/Business-Email-Generator",
    demo: "",
    image: "/projects/ColdEmail.png",
    available: true,
    tags: ["AI/Machine Learning", "Web Development"],
  },
  {
    id: 11,
    name: "Harry Potter Text Generator",
    description:
      "RNN-based text generation system trained on Harry Potter novels to learn and mimic J.K. Rowling's writing style. Uses character-level prediction with LSTM/GRU networks to generate creative, contextually relevant text.",
    technologies: [SiPython, SiJupyter],
    techNames: ["Python", "RNN/LSTM", "Jupyter"],
    techLinks: [
      "https://www.python.org/",
      "https://pytorch.org/",
      "https://jupyter.org/",
    ],
    github: "https://github.com/mohamedAtoui/GenerateHarryPotter",
    demo: "",
    image: "/projects/HarryPotter.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 12,
    name: "Cyber Attack Detection",
    description:
      "Machine learning threat detection system that analyzes network traffic to distinguish between benign and malicious activity. Achieves 93% accuracy using ensemble methods and feature engineering on network flow data.",
    technologies: [SiPython, SiScikitlearn, SiJupyter],
    techNames: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    techLinks: [
      "https://www.python.org/",
      "https://scikit-learn.org/",
      "https://pandas.pydata.org/",
      "https://jupyter.org/",
    ],
    github: "https://github.com/mohamedAtoui/Cyber-Attack-Detection",
    demo: "",
    image: "",
    available: true,
    tags: ["AI/Machine Learning", "Security/Authentication"],
  },
  {
    id: 13,
    name: "Stocks & Forex Prediction",
    description:
      "RNN-based forecasting system for predicting next-day forex closing prices using 60-day historical price windows. Achieves RMSE of ±0.007£ using LSTM networks trained on time series data from Yahoo Finance.",
    technologies: [SiPython, SiTensorflow, SiJupyter],
    techNames: ["Python", "TensorFlow", "Pandas", "Jupyter"],
    techLinks: [
      "https://www.python.org/",
      "https://www.tensorflow.org/",
      "https://pandas.pydata.org/",
      "https://jupyter.org/",
    ],
    github: "https://github.com/mohamedAtoui/Stocks_Forex_Prediction_using_RNN",
    demo: "",
    image: "/projects/ForexPrediction.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
  {
    id: 14,
    name: "SLM Router",
    description:
      "Experimental system demonstrating intelligent task classification and routing to specialized Small Language Models. Achieves 68% cost reduction and 3-10x faster response times compared to using a single large model.",
    technologies: [SiPython, SiStreamlit, SiJupyter],
    techNames: ["Python", "Streamlit", "DeBERTa", "Jupyter"],
    techLinks: [
      "https://www.python.org/",
      "https://streamlit.io/",
      "https://huggingface.co/",
      "https://jupyter.org/",
    ],
    github: "https://github.com/Egham-7/SLM-Router",
    demo: "",
    image: "/projects/SLM.png",
    available: true,
    tags: ["AI/Machine Learning", "Product Development"],
  },
  {
    id: 15,
    name: "Unirouter",
    description:
      "Universal model routing system for efficient LLM inference based on cost-quality tradeoffs. Uses cluster-based error profiles that work with new unseen models without retraining, backed by academic research.",
    technologies: [SiPython, SiJupyter],
    techNames: ["Python", "OpenAI API", "scikit-learn", "Jupyter"],
    techLinks: [
      "https://www.python.org/",
      "https://openai.com/",
      "https://scikit-learn.org/",
      "https://jupyter.org/",
    ],
    github: "https://github.com/Egham-7/Unirouter",
    demo: "",
    image: "/projects/Unirouter.png",
    available: true,
    tags: ["AI/Machine Learning"],
  },
];
