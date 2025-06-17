# ===== Resource Group =====
resource "azurerm_resource_group" "rg" {
  name     = "ai-chat-rg"
  location = "central us"
}

# ===== Backend Service Plan =====
resource "azurerm_service_plan" "plan" {
  name                = "ai-chat-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# ===== Backend Web App =====
resource "azurerm_linux_web_app" "app" {
  name                = "ai-chat-backend-app"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
    application_stack {
      docker_image_name   = "chinedudazi/ai-chat-backend:latest"  # ✅ Tag added
      docker_registry_url = "https://index.docker.io"
    }

    always_on = false  # Must be false on Free plan
  }

  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
    OPENAI_API_KEY                      = var.openai_api_key
  }
}

# ===== Frontend Service Plan =====
resource "azurerm_service_plan" "frontend_plan" {
  name                = "ai-chat-frontend-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# ===== Frontend Web App =====
resource "azurerm_linux_web_app" "frontend_app" {
  name                = "ai-chat-frontend-app"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.frontend_plan.id

  site_config {
    application_stack {
      docker_image_name   = "chinedudazi/ai-chat-frontend:latest"  # ✅ Tag added
      docker_registry_url = "https://index.docker.io"
    }

    always_on = false  # Must be false on Free plan
  }

  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
  }
}
