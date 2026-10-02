variable "project_name" {
  description = "Prefix for resource names and the Project tag."
  type        = string
  default     = "sanjana-portfolio"
}

variable "aws_region" {
  description = "Region for the S3 origin bucket. CloudFront itself is global."
  type        = string
  default     = "ap-south-1"
}

variable "domain_name" {
  description = "Optional custom domain (e.g. portfolio.example.com). Informational until ACM/Route 53 are wired up; see main.tf."
  type        = string
  default     = ""
}

variable "github_repo" {
  description = "GitHub repository allowed to deploy, as \"owner/repo\"."
  type        = string

  validation {
    condition     = can(regex("^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$", var.github_repo))
    error_message = "github_repo must be in the form \"owner/repo\"."
  }
}
