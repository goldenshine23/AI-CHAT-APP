resource "azurerm_kubernetes_cluster" "aks" {
  name                = "ai-chat-aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "aichat"

  kubernetes_version = "1.32.4"  # ✅ Supported version

  default_node_pool {
    name                  = "default"
    vm_size               = "Standard_B4ms"  # ✅ Allowed in centralus
    node_count            = 2                # ✅ Fixed node count (no autoscaling)
    os_disk_size_gb       = 30
    type                  = "VirtualMachineScaleSets"

    node_labels = {
      environment = "dev"
      workload    = "chat"
    }
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin     = "azure"
    network_policy     = "azure"
    load_balancer_sku  = "standard"
    outbound_type      = "loadBalancer"
  }

  role_based_access_control_enabled = true
  oidc_issuer_enabled               = true
  workload_identity_enabled         = true

  tags = {
    environment = "dev"
    project     = "AI Chat App"
  }
}
