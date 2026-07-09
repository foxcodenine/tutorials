variable "vpc_cidr" {
  description = "CIDER block for VPC"
  type        = string
  default     = "129.168.0.0/16"
}

variable "environment" {
  description = "Environment name for tagging"
  type        = string
  default     = "learning-terraform"
}

# ----------------------------------------------------------------------
# Subnet Variables

variable "public_subnet_cidr" {
  description = "CIDER block for public subnet"
  type        = string
  default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
  description = "CIDER block for private subnet"
  type        = string
  default     = "10.0.2.0/24"
}

variable "availability_zone" {
  description = "Availability zone for subnets"
  type        = string
  default     = "eu-west-1a"
}