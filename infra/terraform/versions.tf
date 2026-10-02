terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Local state is fine for a one-person bootstrap. For anything shared, use a
  # remote backend (create the bucket out-of-band first):
  #
  # backend "s3" {
  #   bucket       = "my-tfstate-bucket"
  #   key          = "sanjana-portfolio/terraform.tfstate"
  #   region       = "ap-south-1"
  #   encrypt      = true
  #   use_lockfile = true # native S3 locking (Terraform >= 1.10); no DynamoDB needed
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = var.project_name
      ManagedBy = "terraform"
    }
  }
}
