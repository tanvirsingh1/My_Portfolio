import React from "react";
import {
    FaAws,
    FaCar,
    FaChartLine,
    FaChessBoard,
    FaCodeBranch,
    FaComments,
    FaDatabase,
    FaRobot,
    FaUserMd,
} from "react-icons/fa";
import "./Project.css";

const projects = [
    {
        title: "Real-Time Fraud & Transaction Analytics",
        category: "Capstone · Analytics",
        icon: FaChartLine,
        description: "ML models that flag anomalous transactions at 90% accuracy, with Tableau dashboards for fraud alerts and KPIs. Python reporting scripts cut data processing time by 50%.",
        tags: ["Python", "SQL", "Spark", "AWS Lambda", "Next.js", "Docker", "Tableau", "Power BI"],
        link: "https://capstone-ui-navy.vercel.app/login",
    },
    {
        title: "Agentic AI Support Ticket Workflow",
        category: "Agentic AI",
        icon: FaRobot,
        description: "Full-stack support ticket system where AI agents handle each stage, with Gemini assigning tickets and drafting responses, orchestrated by Inngest and LangGraph.",
        tags: ["React", "Node.js", "Gemini API", "Inngest", "LangGraph", "Prompt Engineering"],
        link: "https://github.com/tanvirsingh1/Agentic_AI_Ticket_Manager",
    },
    {
        title: "Medical Assistant Chatbot (RAG)",
        category: "Generative AI",
        icon: FaUserMd,
        description: "Self-serve RAG chatbot that answers questions from uploaded PDFs, using a chunking and embedding pipeline with Pinecone. Deployed on Render.",
        tags: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq LLaMA3-70B", "Streamlit"],
        link: "https://github.com/tanvirsingh1/Personal-Medical-Assistant",
    },
    {
        title: "Sentiment Analysis Bot",
        category: "Machine Learning",
        icon: FaComments,
        description: "Pulls live Reddit posts through PRAW, classifies sentiment with logistic regression and GPT models via LangChain, and tracks trends in a Streamlit dashboard.",
        tags: ["Python", "OpenAI API", "LangChain", "Logistic Regression", "PRAW", "Streamlit"],
        link: "https://github.com/tanvirsingh1/Sentiment_bot",
    },
    {
        title: "Sales ELT Pipeline",
        category: "Data Engineering",
        icon: FaDatabase,
        description: "ELT pipeline that loads and transforms sales data with Azure Data Factory and Databricks for downstream reporting.",
        tags: ["SQL", "Azure ADF", "Databricks", "PySpark"],
    },
    {
        title: "AWS DevOps Microservice",
        category: "Cloud DevOps",
        icon: FaAws,
        description: "Containerized fragment-storage microservice on AWS ECS, with DynamoDB for data, S3 for files and CloudWatch for monitoring.",
        tags: ["Node.js", "Docker", "AWS ECS", "EC2", "ECR", "S3", "DynamoDB", "CloudWatch", "Cognito"],
        link: "https://github.com/tanvirsingh1/Microservice",
    },
    {
        title: "Flask CI/CD on Kubernetes",
        category: "DevOps",
        icon: FaCodeBranch,
        description: "End-to-end CI/CD project that deploys a Python Flask app to a Kubernetes cluster with GitHub Actions and ArgoCD.",
        tags: ["Python", "Flask", "Docker", "Kubernetes", "GitHub Actions", "ArgoCD"],
        link: "https://github.com/tanvirsingh1/Flask-App-GitHub-Actions-ArgoCD",
    },
    {
        title: "Self Driving Car Simulation",
        category: "Artificial Intelligence",
        icon: FaCar,
        description: "Autonomous driving simulation using computer vision and deep learning for object detection.",
        tags: ["Computer Vision", "Object Detection", "Deep Learning"],
        link: "https://github.com/tanvirsingh1/self-driving-car-simulation",
    },
    {
        title: "Connect State Game",
        category: "Game Theory",
        icon: FaChessBoard,
        description: "Game-playing AI that uses tree traversal, Monte Carlo search and heuristic analysis to pick moves.",
        tags: ["Python", "Tree Traversal", "Monte Carlo Search", "Heuristics"],
        link: "https://github.com/tanvirsingh1/ConnectState",
    },
];

const Project = () => {
    return (
        <>
            <div className="container project" id="projects">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    TOP RECENT PROJECTS
                </h2>
                <hr />
                <p className="pb-3 text-center">
                    Check out my <a href="https://github.com/tanvirsingh1" target="_blank" rel="noopener noreferrer">GitHub</a> for more projects.
                </p>
                <div className="row" id="ads">
                    {projects.map((project) => (
                        <div className="col-md-4 project-col" key={project.title}>
                            <div className="card rounded h-100">
                                <div className="card-image">
                                    <span className="card-notify-badge">{project.category}</span>
                                    <div className="project-banner">
                                        <project.icon />
                                    </div>
                                </div>
                                <div className="card-image-overly m-auto mt-3 px-2 text-center">
                                    {project.tags.map((tag) => (
                                        <span className="card-detail-badge" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="card-body text-center d-flex flex-column">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">{project.title}</h5>
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    {project.link && (
                                        <a
                                            className="ad-btn mt-auto"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
