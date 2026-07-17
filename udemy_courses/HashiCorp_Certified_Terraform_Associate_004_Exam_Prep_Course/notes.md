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

<!-- --------------------------------------------------------------- -->
terraform state list

terraform state rm github_branch.development

terraform destroy

<!-- --------------------------------------------------------------- -->


terraform init
terraform apply -auto-approve

# Migrate State to S3
terraform init -migrate-state

rm terraform.tfstate

# Pull the state directly from the backend to prove it is served from S3
terraform state pull | head -n 7

<!-- --------------------------------------------------------------- -->

# Break and Repair a State Lock

terraform plan > /dev/null 2>&1 &
sleep 2 && kill -9 $!
terraform force-unlock b7a4e6c2-7c2d-4f7a-9d31-example0001

<!-- --------------------------------------------------------------- -->

terraform state list
terraform show

<!-- --------------------------------------------------------------- -->

terraform plan -refresh-only
terraform apply -refresh-only

<!-- --------------------------------------------------------------- -->

terraform import -id -resourse
[block] import

terraform workspace 
                    list
                    new
                    select
                    show
                    delete

<!-- --------------------------------------------------------------- -->

Numeric Functions 
                    min
                    max
                    floor
                    ceil

String Functions 
                    join
                    split
                    lower
                    upper
                    replace
                    base64encode

Type Conversions
                    toset
                    tolist
                    tomap
                    tostring    

Network Function    
                    cidersubnet("10.0.0.0/16", 3, 0)