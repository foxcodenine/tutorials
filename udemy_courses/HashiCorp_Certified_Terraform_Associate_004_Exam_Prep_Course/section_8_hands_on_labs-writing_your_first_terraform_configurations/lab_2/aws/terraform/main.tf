# Create the primary VPC for workloads
resource "aws_vpc" "main" {

  # Main IP range for the VPC.
  # This gives the VPC private IPs from 10.0.0.0 to 10.0.255.255.
  cidr_block = "10.0.0.0/16"

  # Allows AWS to assign DNS hostnames to resources, such as EC2 instances.
  # eg: instead of only having: 10.0.1.25
  # an EC2 instance may also have a hostname like: ip-10-0-1-25.eu-west-2.compute.internal
  enable_dns_hostnames = true

  # Allows DNS resolution inside the VPC.
  # Keep this enabled so resources can resolve domain names.
  # eg: api.aws-service.com -> 10.x.x.x or public IP
  enable_dns_support = true

  tags = {
    Name        = "terraform-course"
    Environment = "Lab"
    Managed_By  = "Terraform"
  }
}