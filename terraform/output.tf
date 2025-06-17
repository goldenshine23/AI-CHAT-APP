# === Resource Group ===
output "resource_group_name" {
  value       = azurerm_resource_group.rg.name
  description = "The name of the resource group"
}

# === Backend Web App ===
output "backend_app_name" {
  value       = azurerm_linux_web_app.app.name
  description = "The name of the backend web app"
}

output "backend_app_url" {
  value       = azurerm_linux_web_app.app.default_hostname
  description = "The URL of the backend web app"
}

output "backend_docker_image" {
  value       = azurerm_linux_web_app.app.site_config[0].application_stack[0].docker_image_name
  description = "The Docker image used for the backend app"
}

output "backend_service_plan" {
  value       = azurerm_service_plan.plan.name
  description = "The name of the backend App Service Plan"
}

# === Frontend Web App ===
output "frontend_app_name" {
  value       = azurerm_linux_web_app.frontend_app.name
  description = "The name of the frontend web app"
}

output "frontend_app_url" {
  value       = azurerm_linux_web_app.frontend_app.default_hostname
  description = "The URL of the frontend web app"
}

output "frontend_docker_image" {
  value       = azurerm_linux_web_app.frontend_app.site_config[0].application_stack[0].docker_image_name
  description = "The Docker image used for the frontend app"
}

output "frontend_service_plan" {
  value       = azurerm_service_plan.frontend_plan.name
  description = "The name of the frontend App Service Plan"
}
output "acr_login_server" {
  value       = azurerm_container_registry.acr.login_server
  description = "The login server of the Azure Container Registry"
}

output "acr_admin_username" {
  value       = azurerm_container_registry.acr.admin_username
  description = "The admin username for ACR"
  sensitive   = true
}

output "acr_admin_password" {
  value       = azurerm_container_registry.acr.admin_password
  description = "The admin password for ACR"
  sensitive   = true
}
output "aks_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "aks_kube_config" {
  value     = azurerm_kubernetes_cluster.aks.kube_config_raw
  sensitive = true
}

output "aks_node_rg" {
  value = azurerm_kubernetes_cluster.aks.node_resource_group
}
    