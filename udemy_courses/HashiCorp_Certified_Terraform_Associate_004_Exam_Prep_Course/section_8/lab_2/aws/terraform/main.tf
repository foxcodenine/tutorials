# Create the primary VPC for workloads
resource "aws_vpc" "main" {

  # Main IP range for the VPC.
  # This gives the VPC private IPs from 10.0.0.0 to 10.0.255.255.
  cidr_block = "10.0.0.0/16"

  # Allows AWS to assign DNS hostnames to resources, such as EC2 instances.
  enable_dns_hostnames = true

  # Allows DNS resolution inside the VPC.
  # Keep this enabled so resources can resolve domain names.
  enable_dns_support = true

  tags = {
    Name        = "terraform-course"
    Environment = "Lab"
    Managed_By  = "Terraform"
  }
}