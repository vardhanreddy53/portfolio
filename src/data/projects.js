const projects = [
  {
    title: "Event Website — Chakravyuh",
    description:
      "A responsive website built for the CTF event called Chakravyuh. Included event schedule, registration, team details, and sponsor information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://chakravyuh-2025.netlify.app/",
    github: "https://github.com/vardhanreddy53/chakravyuh-2025",
  },
  {
    title: "Crypto Price Prediction",
    description:
      "A machine learning web app to forecast cryptocurrency prices with 92% accuracy and real-time alerts.",
    technologies: ["Python", "Flask", "Scikit-learn", "NumPy", "HTML", "CSS"],
    link: "",
    github: "https://github.com/vardhanreddy53/cryptopricepredictor",
  },
  {
    title: "Peer-to-Peer Learning Platform",
    description:
      "A web app where students teach peers to earn passive income. Full stack with user roles and quality checks.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    link: "",
    github: "https://github.com/vardhanreddy53/learnpeer",
  },
  {
    title: "AI-Powered Resume Evaluator",
    description:
      "Evaluates resumes against job descriptions using Google's PaLM API and simulates ATS screening.",
    technologies: ["Python", "Streamlit", "Google Generative AI", "pdf2image"],
    link: "",
    github: "https://github.com/vardhanreddy53/ATS-",
  },
  {
    title: "PR Scanner — Cloud Observability & Results Pipeline",
    description:
      "Designed and deployed a full observability and results pipeline on AWS: DynamoDB for scan result persistence, S3 for artifact storage, Lambda for results processing, EventBridge for scheduled triggers, CloudWatch for dashboards + alarms, and SNS for alerting — all provisioned via Terraform. Implemented end-to-end integration tests validating the full pipeline from PR event ingestion through result storage and notification delivery.",
    technologies: [
      "AWS (DynamoDB, S3, Lambda, EventBridge, CloudWatch, SNS)",
      "Terraform",
      "Python",
      "GitHub Actions",
    ],
    link: "",
    github: "",
  },
  {
    title: "Explainable Multi-Task Learning — NYC Payroll",
    description:
      "Implemented a Temporal Multi-Task LSTM (251K params, 5-step sliding window) to jointly predict job category (10-class) and overtime risk (4-class) on 1.1M NYC payroll records in a single forward pass. Designed a 5-fold stratified CV harness benchmarking five model families — Logistic Regression, Random Forest, LightGBM, LSTM, and Wide & Deep MMoE — with leakage-safe SMOTE refit per fold. Applied SHAP across all models; tree-ensemble best: 0.924 / 0.834 Macro-F1 on 222K-row test set.",
    technologies: ["PyTorch", "LightGBM", "scikit-learn", "SHAP", "Pandas", "NumPy"],
    link: "",
    github: "",
  },
  {
    title: "InvoiceOCR — Production Hardening & MLOps Pipeline",
    description:
      "Hardened an AWS Lambda invoice-extraction service (Textract + Gemini) for image, PDF, and Excel inputs: fixed Pydantic schemas, corrected a region-passing bug in Textract client, and added structured error categorization with custom exceptions returning 207 Multi-Status for partial-failure batches. Built a human-in-the-loop MLOps loop: /submit-feedback endpoint logs user corrections to S3 with DynamoDB index, few-shot module dynamically conditions Gemini prompts with cached corrections, and the same store exports labeled datasets for periodic fine-tuning.",
    technologies: [
      "Python",
      "AWS Lambda",
      "Textract",
      "Gemini",
      "S3",
      "DynamoDB",
      "Pydantic",
    ],
    link: "",
    github: "",
  },
  {
    title: "Medical Specialty Classification — Clinical NLP",
    description:
      "Fine-tuned RoBERTa-large and BioBERT on 4,000+ clinical transcriptions for 30-class specialty prediction; soft-voting ensemble reached 73.1% Macro-F1. Deployed behind a Flask REST endpoint on AWS EC2 with Docker, serving real-time top-3 predictions with confidence scores.",
    technologies: [
      "PyTorch",
      "Hugging Face Transformers",
      "Flask",
      "Docker",
      "AWS EC2",
    ],
    link: "",
    github: "",
  },
  {
    title: "Kambaz — Full-Stack Learning Management System",
    description:
      "Built a Canvas-style LMS with a Next.js (App Router) frontend and Node.js/Express REST API on MongoDB Atlas — courses, quizzes, assignments, role-based auth. Containerized with Docker and deployed to Vercel and Render with environment-based configs and GitHub-driven CI.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Docker",
      "Vercel",
      "Render",
    ],
    link: "",
    github: "",
  },
];

export default projects;
