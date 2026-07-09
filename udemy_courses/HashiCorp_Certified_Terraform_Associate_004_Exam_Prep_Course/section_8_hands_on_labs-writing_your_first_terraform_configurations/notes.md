# View all available Terraform commands
terraform --help

# Get specific help about state commands
terraform state help

# Show current state resources
terraform state list

# Show details about a specific resource
terraform state show aws_vpc.main

<!-- --------------------------------------------------------------- -->

# List all resources in state
terraform state list

# Show details of the VPC
terraform state show aws_vpc.development

# Show all outputs
terraform output

# Notice that sensitive outputs show as (sensitive)
# To view sensitive outputs, use the output command:
terraform output account_id
terraform output combined_info

# Or use the -json flag with terraform output:
terraform output -json account_id

# Understanding Terraform State
terraform state list
terraform state show github_repository.example


# List all resources in the state
terraform state list

# Show details of a specific resource
terraform state show github_repository.production

# Create a state backup
terraform state pull > terraform.tfstate.backup

# Perform a targeted apply
terraform apply -target=github_repository_file.production_readme