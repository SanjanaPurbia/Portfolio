.DEFAULT_GOAL := help
.PHONY: help install dev build lint docker-build docker-run tf-init tf-plan tf-apply tf-fmt

IMAGE  ?= sanjana-portfolio
TAG    ?= local
TF_DIR := infra/terraform

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install npm dependencies from the lockfile
	npm ci

dev: ## Start the Vite dev server
	npm run dev

build: ## Production build into dist/
	npm run build

lint: ## Lint with oxlint
	npm run lint

docker-build: ## Build the nginx runtime image
	docker build -t $(IMAGE):$(TAG) .

docker-run: docker-build ## Run the image on http://localhost:8080
	docker run --rm -p 8080:8080 --read-only --tmpfs /tmp $(IMAGE):$(TAG)

tf-init: ## terraform init
	terraform -chdir=$(TF_DIR) init

tf-plan: ## terraform plan (writes tfplan)
	terraform -chdir=$(TF_DIR) plan -out=tfplan

tf-apply: ## Apply the saved plan from tf-plan
	terraform -chdir=$(TF_DIR) apply tfplan

tf-fmt: ## Format Terraform files
	terraform -chdir=$(TF_DIR) fmt -recursive
