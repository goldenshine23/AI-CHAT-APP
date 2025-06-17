resource "random_integer" "suffix" {
  min = 10000
  max = 99999
}

resource "azurerm_container_registry" "acr" {
  name                = "aichatacr${random_integer.suffix.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic" # Use "Standard" for geo-replication or more features
  admin_enabled       = true   # Set to false in production for better security

  tags = {
    environment = "Dev"
    project     = "AI Chat App"
  }
}

resource "azurerm_role_assignment" "aks_acr_pull" {
  principal_id         = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
  role_definition_name = "AcrPull"
  scope                = azurerm_container_registry.acr.id

  depends_on = [
    azurerm_kubernetes_cluster.aks,
    azurerm_container_registry.acr
  ]
}
