locals {
  # General
  project_name   = "ai-chat"
  environment    = "dev"
  location       = "West Europe"

  # Naming conventions
  resource_group_name    = "${local.project_name}-rg"
  aks_cluster_name       = "${local.project_name}-aks"
  acr_name               = "${replace(local.project_name, "-", "")}acr" # ACR name must be globally unique
  dns_prefix             = "${local.project_name}-${local.environment}"

  # Node pool settings
  default_node_pool_name   = "default"
  default_node_vm_size     = "Standard_DS2_v2"
  default_node_count       = 2
  default_node_min_count   = 1
  default_node_max_count   = 3
  default_os_disk_size_gb  = 30

  # Tags
common_tags = {
  environment = local.environment
  project     = local.project_name
  managed_by  = "terraform"
}
}
