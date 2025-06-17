variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "client_id" {
  description = "Azure Client ID (App registration)"
  type        = string
}

variable "client_secret" {
  description = "Azure Client Secret"
  type        = string
  sensitive   = true
}

variable "tenant_id" {
  description = "Azure Tenant ID"
  type        = string
}

variable "docker_username" {
  description = "Docker Hub username"
  type        = string
}

variable "docker_password" {
  description = "Docker Hub password or access token"
  type        = string
  sensitive   = true
}

variable "openai_api_key" {
  description = "OpenAI API key for the chat app"
  type        = string
  sensitive   = true
}
# Location of Azure resources
variable "location" {
  description = "Azure region where resources will be deployed"
  type        = string
  default     = "West Europe"
}

# Project name
variable "project_name" {
  description = "Name of the project used for naming resources"
  type        = string
  default     = "ai-chat"
}

# Deployment environment
variable "environment" {
  description = "Deployment environment (e.g. dev, staging, prod)"
  type        = string
  default     = "dev"
}

# Node pool settings
variable "default_node_vm_size" {
  description = "The size of the virtual machines in the node pool"
  type        = string
  default     = "Standard_DS2_v2"
}

variable "default_node_count" {
  description = "Initial number of nodes in the AKS default node pool"
  type        = number
  default     = 2
}

variable "default_node_min_count" {
  description = "Minimum number of nodes for autoscaling"
  type        = number
  default     = 1
}

variable "default_node_max_count" {
  description = "Maximum number of nodes for autoscaling"
  type        = number
  default     = 3
}

variable "default_os_disk_size_gb" {
  description = "OS Disk size for each node in GB"
  type        = number
  default     = 30
}

# Tags for Azure resources
variable "tags" {
  description = "Common tags to apply to resources"
  type        = map(string)
  default = {
    managed_by  = "terraform"
    environment = "dev"
    project     = "ai-chat"
  }
}
