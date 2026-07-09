# Create the primary VPC for workloads
resource "aws_vpc" "main" {

  # Main IP range for the VPC.
  # This gives the VPC private IPs from 10.0.0.0 to 10.0.255.255.
  cidr_block = var.vpc_cidr

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
    Environment = var.environment
  }
}

# ----------------------------------------------------------------------

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_subnet_cidr
  availability_zone = var.availability_zone

  # Automatically assigns a public IPv4 address to new EC2 instances launched in this subnet.
  # This is commonly enabled for public subnets so instances can be reached from the internet.
  map_public_ip_on_launch = true

  tags = {
    Name        = "public-subnet"
    Environment = var.environment
  }
}

# ----------------------------------------------------------------------
# Create Subnets

resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidr
  availability_zone = var.availability_zone

  tags = {
    Name        = "private-subnet"
    Environment = var.environment
  }
}

# ----------------------------------------------------------------------
# Create Route Table

# Main Route Table
resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "main-route-table"
    Environment = var.environment
  }
}

# Create Route Table Associations
resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.main.id
}

resource "aws_route_table_association" "private" {
  subnet_id      = aws_subnet.private.id
  route_table_id = aws_route_table.main.id
}

# ----------------------------------------------------------------------
# Create Security Group

resource "aws_security_group" "example" {
  name        = "exaple-security-group"
  description = "Example security group for our VPC"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound traffic rule.
  # This allows resources using this security group to connect out to anywhere.
  egress {
    # With protocol "-1", the port values are ignored and all ports are allowed.
    from_port = 0
    to_port   = 0

    # "-1" means all protocols, such as TCP, UDP, and ICMP.
    protocol = "-1"

    # "0.0.0.0/0" means any IPv4 address.
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "example-security-group"
    Environment = var.environment
  }
}

# ----------------------------------------------------------------------
# Add New Outputs

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = aws_subnet.public.id
}

output "private_subnet_id" {
  description = "ID of the private subnet"
  value       = aws_subnet.private.id
}

output "route_table_id" {
  description = "ID of the main route table"
  value       = aws_route_table.main.id
}

output "security_group_id" {
  description = "Id of the security group"
  value       = aws_security_group.example.id
}







