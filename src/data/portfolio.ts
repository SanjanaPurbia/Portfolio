// Single source of truth for all portfolio content.
// Update this file (not the components) when the resume changes.
// See .claude/skills/update-content/SKILL.md for the workflow.

export const profile = {
  name: 'Sanjana Purbia',
  role: 'DevOps Engineer',
  company: 'Spark Eighteen',
  // Hero lede: ≤ 20 words (taste-skill §4.7).
  subtext: 'I automate AWS infrastructure and CI/CD pipelines, and cut manual deployment time by 70% across multi-service releases.',
  availability: 'Open to DevOps and cloud roles',
  email: 'sanjanapurbia3112@gmail.com',
  phone: { display: '+91 95216 18221', tel: '+919521618221' },
  resumeUrl: '/SanjanaPurbia_Resume.pdf',
  socials: {
    linkedin: { url: 'https://www.linkedin.com/in/sanjana-purbia/', handle: 'in/sanjana-purbia' },
    github: { url: 'https://github.com/SanjanaPurbia', handle: 'SanjanaPurbia' },
  },
}

// Hero facts beside the pipeline. Facts only, none repeated on the status board.
export const heroFacts = [
  { value: 'AWS', label: 'Certified Cloud Practitioner' },
  { value: '2 yrs', label: 'hands-on DevOps' },
  { value: '5+', label: 'client projects automated' },
  { value: '3', label: 'clouds: AWS, GCP and Azure' },
]

// "How I ship": every job is a practice named on the resume.
export const pipeline = {
  title: 'How I ship',
  subtitle: 'The delivery pipeline I run for client projects',
  stages: [
    { name: 'Build', jobs: ['Docker images', 'Terraform modules'] },
    { name: 'Test', jobs: ['Automated tests', 'Code-quality gates', 'Security scanning'] },
    { name: 'Deploy', jobs: ['Jenkins Shared Libraries', 'ArgoCD GitOps'] },
    { name: 'Monitor', jobs: ['CloudWatch', 'Uptime Kuma', 'PagerDuty alerts'] },
  ],
  environments: ['dev', 'staging', 'production'],
  description:
    'A four stage delivery pipeline: build with Docker and Terraform, test with automated tests, code-quality gates and security scanning, deploy with Jenkins Shared Libraries and ArgoCD, and monitor with CloudWatch, Uptime Kuma and PagerDuty, across dev, staging and production.',
}

// Status board. `after` is the share left once automated (100 minus the resume percentage).
export type ImpactTile = {
  key: string
  status: string
  value: string
  label: string
  context: string
  after?: number
  modules?: number
}

export const impact: ImpactTile[] = [
  { key: 'Deployments', status: 'Improved', value: '70%', label: 'less manual deployment time', after: 30, context: 'Multi-service deployments on AWS. Release cycles went from days to hours.' },
  { key: 'Releases', status: 'Improved', value: '80%', label: 'less manual release work', after: 20, context: 'Jenkins Shared Libraries pipelines for the Uncompromised AgriTech platform.' },
  { key: 'Environments', status: 'Improved', value: '60%', label: 'fewer environment issues', after: 40, context: 'Containerized microservices with Docker.' },
  { key: 'Infrastructure', status: 'Built', value: '15+', label: 'reusable Terraform modules', modules: 15, context: 'Cut infrastructure setup time by about 40%.' },
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
  // Release-log tag. A design label, not a resume claim.
  version: string
  current?: boolean
  highlights: string[]
}

// Newest first, like a release log.
export const experience: Role[] = [
  {
    title: 'DevOps Engineer',
    company: 'Spark Eighteen',
    period: 'Jan 2025 - Present',
    version: 'v2.0',
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
    version: 'v1.0',
    highlights: [
      'Deployed 10+ containerized applications with Docker and Docker Swarm across multi-container environments.',
      'Cut infrastructure setup time by about 40% by building 15+ reusable Terraform modules for AWS resources.',
      'Migrated YoCharge EV platform services from Azure to GCP, optimizing costs and improving availability.',
      'Implemented CI/CD best practices: automated testing, code-quality gates and security scanning.',
    ],
  },
]

// Architecture diagrams are illustrations drawn only from each project's listed services.
// Coordinates are in the SVG viewBox; `kind` styles external (ext) and control (ctl) nodes.
export type DiagramNode = { x: number; y: number; w: number; h?: number; label: string; sub?: string; kind?: 'ext' | 'ctl' }
export type DiagramEdge = { d: string; dash?: boolean; label?: string; lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end' }
export type DiagramGroup = { x: number; y: number; w: number; h: number; label: string; lx: number; ly: number; anchor: 'start' | 'end' }
export type Diagram = { w: number; h: number; groups: DiagramGroup[]; nodes: DiagramNode[]; edges: DiagramEdge[]; caption: string }

export type Project = {
  id: string
  name: string
  client: string
  domain: string
  year: string
  impact: { value: string; label: string; icon: 'rocket' | 'shield' }
  summary: string
  highlights: string[]
  stack: string[]
  diagram: Diagram
}

export const projects: Project[] = [
  {
    id: 'yocharge',
    name: 'EV Charging Platform',
    client: 'YoCharge',
    domain: 'EV / Energy',
    year: '2024',
    impact: { value: '50%', label: 'faster deployments', icon: 'rocket' },
    summary:
      'Infrastructure as code for an EV-charging platform: the full AWS footprint in Terraform, Docker-based CI/CD and multi-region alerting.',
    highlights: [
      'Made deployments 50% faster by automating the full AWS stack in Terraform: VPC, ALB, EC2, RDS, S3, CloudFront, IAM.',
      'Built CI/CD pipelines for Docker-based deployments.',
      'Migrated services from Azure to GCP for cost optimization.',
      'Set up Uptime Kuma + PagerDuty for high-availability alerting across regions.',
    ],
    stack: ['Terraform', 'AWS', 'Docker', 'Jenkins', 'GCP', 'Azure', 'PostgreSQL'],
    diagram: {
      w: 360,
      h: 356,
      groups: [
        { x: 8, y: 60, w: 344, h: 220, label: 'AWS, provisioned with Terraform', lx: 340, ly: 78, anchor: 'end' },
        { x: 24, y: 152, w: 312, h: 108, label: 'VPC', lx: 324, ly: 170, anchor: 'end' },
      ],
      nodes: [
        { x: 24, y: 8, w: 96, label: 'Users', kind: 'ext' },
        { x: 24, y: 92, w: 96, label: 'CloudFront', sub: 'CDN' },
        { x: 136, y: 92, w: 96, label: 'S3', sub: 'storage' },
        { x: 248, y: 92, w: 96, label: 'IAM', sub: 'access', kind: 'ctl' },
        { x: 36, y: 192, w: 86, label: 'ALB', sub: 'balancer' },
        { x: 137, y: 192, w: 86, label: 'EC2', sub: 'Docker' },
        { x: 238, y: 192, w: 86, label: 'RDS', sub: 'PostgreSQL' },
        { x: 24, y: 304, w: 148, label: 'Jenkins', sub: 'Docker CI/CD', kind: 'ext' },
        { x: 188, y: 304, w: 148, label: 'Uptime Kuma', sub: 'PagerDuty alerts', kind: 'ext' },
      ],
      edges: [
        { d: 'M72 52 V92' },
        { d: 'M120 114 H136' },
        { d: 'M72 136 V192' },
        { d: 'M122 214 H137' },
        { d: 'M223 214 H238' },
        { d: 'M98 304 V292 H180 V236' },
        { d: 'M281 304 V236', dash: true, label: 'alerts', lx: 290, ly: 296, anchor: 'start' },
      ],
      caption:
        'Illustration of the AWS stack in Terraform: CloudFront and S3 at the edge, ALB, EC2 and RDS inside a VPC, and IAM for access. Jenkins ships the Docker builds, and Uptime Kuma with PagerDuty handles alerting.',
    },
  },
  {
    id: 'uncompromised',
    name: 'AgriTech Platform',
    client: 'Uncompromised',
    domain: 'AgriTech',
    year: '2024',
    impact: { value: '80%', label: 'less manual release work', icon: 'rocket' },
    summary: 'Fully automated release pipeline on Jenkins Shared Libraries, with CloudFront + S3 frontend hosting.',
    highlights: [
      'Cut manual release intervention by 80% with fully automated Jenkins CI/CD built on Shared Libraries.',
      'Hosted the frontend on CloudFront + S3.',
      'Automated PostgreSQL dump uploads with pre-signed URL access control.',
    ],
    stack: ['Jenkins', 'S3', 'CloudFront', 'RDS', 'PostgreSQL', 'Shell scripting'],
    diagram: {
      w: 360,
      h: 312,
      groups: [{ x: 8, y: 64, w: 344, h: 172, label: 'AWS', lx: 340, ly: 82, anchor: 'end' }],
      nodes: [
        { x: 24, y: 8, w: 136, label: 'Jenkins', sub: 'Shared Libraries', kind: 'ext' },
        { x: 200, y: 8, w: 136, label: 'Users', kind: 'ext' },
        { x: 24, y: 96, w: 136, label: 'S3', sub: 'frontend build' },
        { x: 200, y: 96, w: 136, label: 'CloudFront', sub: 'CDN' },
        { x: 24, y: 176, w: 136, label: 'RDS', sub: 'PostgreSQL' },
        { x: 200, y: 176, w: 136, label: 'S3', sub: 'database dumps' },
        { x: 200, y: 264, w: 136, label: 'Pre-signed URL', sub: 'access control', kind: 'ctl' },
      ],
      edges: [
        { d: 'M92 52 V96', label: 'deploy', lx: 100, ly: 78, anchor: 'start' },
        { d: 'M160 118 H200' },
        { d: 'M268 96 V52' },
        { d: 'M160 198 H200', label: 'dump', lx: 180, ly: 191, anchor: 'middle' },
        { d: 'M268 220 V264' },
      ],
      caption:
        'Illustration: Jenkins publishes the frontend build to S3, served through CloudFront. A shell script uploads PostgreSQL dumps from RDS to S3, shared only through pre-signed URLs.',
    },
  },
  {
    id: 'dnatur',
    name: 'eCommerce Platform',
    client: 'Dnatur',
    domain: 'eCommerce',
    year: '2024',
    impact: { value: '100%', label: 'SSL coverage, zero-downtime deploys', icon: 'shield' },
    summary:
      'Zero-downtime delivery for an eCommerce stack: Jenkins for the backend, CloudFront for the frontend, automated TLS everywhere.',
    highlights: [
      'Eliminated deployment downtime with Jenkins CI/CD for the backend and CloudFront delivery for the frontend.',
      "Reached 100% SSL coverage across all environments, with certificates automated through Let's Encrypt.",
      'Set up secure data sharing via S3 pre-signed URLs.',
    ],
    stack: ['Jenkins', 'CloudFront', 'S3', 'PostgreSQL', "Let's Encrypt", 'Shell scripting'],
    diagram: {
      w: 360,
      h: 260,
      groups: [{ x: 8, y: 64, w: 344, h: 188, label: "TLS everywhere, certificates by Let's Encrypt", lx: 20, ly: 240, anchor: 'start' }],
      nodes: [
        { x: 24, y: 8, w: 136, label: 'Jenkins', sub: 'backend CI/CD', kind: 'ext' },
        { x: 200, y: 8, w: 136, label: 'Users', kind: 'ext' },
        { x: 24, y: 92, w: 136, label: 'Backend', sub: 'zero downtime' },
        { x: 200, y: 92, w: 136, label: 'CloudFront', sub: 'frontend' },
        { x: 24, y: 172, w: 136, label: 'PostgreSQL', sub: 'database' },
        { x: 200, y: 172, w: 136, label: 'S3', sub: 'pre-signed URLs' },
      ],
      edges: [
        { d: 'M92 52 V92', label: 'deploy', lx: 100, ly: 76, anchor: 'start' },
        { d: 'M268 52 V92' },
        { d: 'M72 136 V172' },
        { d: 'M136 136 V154 H232 V172' },
      ],
      caption:
        "Illustration: Jenkins deploys the backend without downtime while CloudFront delivers the frontend. Let's Encrypt certificates cover every environment, and S3 pre-signed URLs handle data sharing.",
    },
  },
]

export const certifications = [{ name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026' }]

export const education = {
  degree: 'B.Tech in Computer Science',
  school: 'Techno India NJR Institute of Technology, Udaipur, Rajasthan',
  period: '2019 - 2023',
}

// Section headings, intros and the closing panel copy.
export const sections = {
  impact: { title: 'What changed once it was automated' },
  experience: {
    title: 'Experience',
    intro: 'Intern to DevOps Engineer in six months at Spark Eighteen, now running CI/CD for 5+ client projects.',
    promotion: 'Promoted after six months',
  },
  work: {
    title: 'Selected work',
    intro: 'Platforms for EV charging, AgriTech and eCommerce clients. Each diagram is an illustration drawn from the stack I worked with.',
  },
  skills: { title: 'Toolchain', intro: 'What I reach for, grouped by where it sits in the delivery path.' },
  credentials: { title: 'Certification and education' },
  contact: {
    title: 'Looking for a DevOps engineer?',
    body: "I'm open to DevOps and cloud roles with more scope. Email or call, whichever suits you.",
  },
}
