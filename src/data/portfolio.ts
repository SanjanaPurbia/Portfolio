// Single source of truth for all portfolio content.
// Update this file (not the components) when the resume changes.
// See .claude/skills/update-content/SKILL.md for the workflow.

export const profile = {
  name: 'Sanjana Purbia',
  role: 'DevOps Engineer',
  // Hero: headline ≤ 2 lines, subtext ≤ 20 words (taste-skill §4.7).
  headline: 'I make releases boring.',
  subtext:
    'DevOps engineer at Spark Eighteen. I automate AWS infrastructure and CI/CD, cutting manual deployment time by 70%.',
  email: 'sanjanapurbia3112@gmail.com',
  resumeUrl: '/SanjanaPurbia_Resume.pdf',
  // Drop a photo in public/ (e.g. portrait.jpg, 4:5) and set '/portrait.jpg'.
  photo: '',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sanjanapurbia',
    github: '', // add your GitHub profile URL to show the link
  },
}

// Simple Icons export names. AWS and Azure marks were removed from Simple Icons for
// trademark reasons, so they appear in the skills list only.
export const tools = [
  { name: 'Terraform', icon: 'siTerraform' },
  { name: 'Docker', icon: 'siDocker' },
  { name: 'Kubernetes', icon: 'siKubernetes' },
  { name: 'Jenkins', icon: 'siJenkins' },
  { name: 'GitHub Actions', icon: 'siGithubactions' },
  { name: 'Argo CD', icon: 'siArgo' },
  { name: 'Google Cloud', icon: 'siGooglecloud' },
  { name: 'Ansible', icon: 'siAnsible' },
  { name: 'Rancher', icon: 'siRancher' },
  { name: 'PagerDuty', icon: 'siPagerduty' },
  { name: 'PostgreSQL', icon: 'siPostgresql' },
  { name: 'Python', icon: 'siPython' },
  { name: 'Bash', icon: 'siGnubash' },
  { name: 'Ubuntu', icon: 'siUbuntu' },
] as const

// Exactly four impact tiles (bento cell count rule). All figures from the resume.
export const impact = [
  { value: '70%', label: 'less manual deployment time', context: 'Multi-service AWS deployments for 5+ client projects. Release cycles went from days to hours.' },
  { value: '80%', label: 'less manual release work', context: 'Jenkins Shared Libraries pipelines for the Uncompromised AgriTech platform.' },
  { value: '60%', label: 'fewer environment issues', context: 'Containerized microservices with Docker.' },
  { value: '15+', label: 'reusable Terraform modules', context: 'Cut infrastructure setup time by about 40%.' },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Cloud & IaC', items: ['AWS', 'EC2', 'S3', 'CloudFront', 'RDS', 'IAM', 'ALB', 'VPC', 'GCP', 'Azure', 'Terraform', 'Ansible'] },
  { title: 'Containers', items: ['Docker', 'Docker Swarm', 'Kubernetes', 'Rancher', 'Portainer'] },
  { title: 'CI/CD & GitOps', items: ['Jenkins', 'Shared Libraries', 'GitHub Actions', 'ArgoCD', 'Git'] },
  { title: 'Scripting', items: ['Python', 'Bash', 'PowerShell', 'YAML'] },
  { title: 'Monitoring', items: ['CloudWatch', 'Uptime Kuma', 'PagerDuty'] },
  { title: 'Databases & OS', items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Linux (Ubuntu)'] },
]

export type Role = {
  title: string
  company: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experience: Role[] = [
  {
    title: 'DevOps Engineer',
    company: 'Spark Eighteen',
    period: 'Jan 2025 - Present',
    current: true,
    highlights: [
      'Automated builds and deployments across dev, staging and production for 5+ client projects with CI/CD pipelines on Jenkins Shared Libraries.',
      'Cut manual deployment time by 70% and release cycles from days to hours by running multi-service deployments on AWS (EC2, CloudFront, S3, RDS).',
      'Cut environment-specific issues by 60% by containerizing microservices with Docker, giving consistent deployments across all stages.',
      'Managed ArgoCD for GitOps deployments, keeping delivery declarative and auditable.',
      'Lowered MTTR for production incidents with proactive CloudWatch and Uptime Kuma monitoring and PagerDuty alerts.',
    ],
  },
  {
    title: 'DevOps Intern',
    company: 'Spark Eighteen',
    period: 'Jul 2024 - Jan 2025',
    highlights: [
      'Deployed 10+ containerized applications with Docker and Docker Swarm across multi-container environments.',
      'Cut infrastructure setup time by ~40% by building 15+ reusable Terraform modules for AWS resources.',
      'Migrated YoCharge EV platform services from Azure to GCP, optimizing costs and improving availability.',
      'Implemented CI/CD best practices: automated testing, code-quality gates and security scanning.',
    ],
  },
]

export type Project = {
  id: string
  name: string
  client: string
  domain: string
  year: string
  impact: { value: string; label: string }
  summary: string
  highlights: string[]
  stack: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'yocharge',
    name: 'EV Charging Platform',
    client: 'YoCharge',
    domain: 'EV / Energy',
    year: '2024',
    impact: { value: '50%', label: 'faster deployments' },
    summary:
      'Infrastructure as code for an EV-charging platform: the full AWS footprint in Terraform, Docker-based CI/CD and multi-region alerting.',
    highlights: [
      'Made deployments 50% faster by automating the full AWS stack in Terraform: VPC, ALB, EC2, RDS, S3, CloudFront, IAM.',
      'Built CI/CD pipelines for Docker-based deployments.',
      'Migrated services from Azure to GCP for cost optimization.',
      'Set up Uptime Kuma + PagerDuty for high-availability alerting across regions.',
    ],
    stack: ['Terraform', 'AWS', 'Docker', 'Jenkins', 'GCP', 'Azure', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'uncompromised',
    name: 'AgriTech Platform',
    client: 'Uncompromised',
    domain: 'AgriTech',
    year: '2024',
    impact: { value: '80%', label: 'less manual release work' },
    summary:
      'Fully automated release pipeline on Jenkins Shared Libraries, with CloudFront + S3 frontend hosting.',
    highlights: [
      'Cut manual release intervention by 80% with fully automated Jenkins CI/CD built on Shared Libraries.',
      'Hosted the frontend on CloudFront + S3.',
      'Automated PostgreSQL dump uploads with pre-signed URL access control.',
    ],
    stack: ['Jenkins', 'S3', 'CloudFront', 'RDS', 'PostgreSQL', 'Bash'],
  },
  {
    id: 'dnatur',
    name: 'eCommerce Platform',
    client: 'Dnatur',
    domain: 'eCommerce',
    year: '2024',
    impact: { value: '100%', label: 'SSL coverage, zero-downtime deploys' },
    summary:
      'Zero-downtime delivery for an eCommerce stack: Jenkins for the backend, CloudFront for the frontend, automated TLS everywhere.',
    highlights: [
      'Eliminated deployment downtime with Jenkins CI/CD for the backend and CloudFront delivery for the frontend.',
      "Reached 100% SSL coverage across all environments, with certificates automated through Let's Encrypt.",
      'Set up secure data sharing via S3 pre-signed URLs.',
    ],
    stack: ['Jenkins', 'CloudFront', 'S3', 'PostgreSQL', "Let's Encrypt", 'Bash'],
  },
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026' },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  school: 'Techno India NJR Institute of Technology, Udaipur, Rajasthan',
  period: '2019 - 2023',
}
