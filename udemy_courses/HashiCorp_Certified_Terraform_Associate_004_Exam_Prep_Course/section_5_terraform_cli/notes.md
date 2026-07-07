
|Command|What it does|
|---|---|
|`terraform init`|Initializes the working directory and downloads providers/modules.|
|`terraform fmt`|Formats `.tf` files to Terraform style.|
|`terraform validate`|Checks that your Terraform configuration is syntactically valid.|
|`terraform plan`|Shows what Terraform will create, change, or destroy.|
|`terraform apply`|Applies the planned changes to real infrastructure.|
|`terraform destroy`|Destroys all resources managed by the current Terraform state.|
|`terraform output`|Shows output values defined in your Terraform configuration.|
|`terraform show`|Displays the current state or a saved plan file in readable form.|
|`terraform state`|Lets you inspect or modify Terraform state manually.|
|`terraform import`|Brings an existing real-world resource under Terraform management.|
|`terraform console`|Opens an interactive console to test Terraform expressions.|
|`terraform graph`|Generates a dependency graph of Terraform resources.|
|`terraform providers`|Shows the providers required by the configuration/state.|
|`terraform version`|Shows the installed Terraform version.|
|`terraform workspace`|Manages multiple workspaces/states for the same configuration.|
|`terraform login`|Logs in to Terraform Cloud/Enterprise.|
|`terraform logout`|Logs out from Terraform Cloud/Enterprise.|
|`terraform test`|Runs Terraform tests written for your modules/configuration.|
|`terraform force-unlock`|Manually removes a stuck state lock.|
|`terraform get`|Downloads/updates modules, mostly older usage; `init` usually handles this now.|
