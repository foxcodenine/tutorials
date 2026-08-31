# This file starts intentionally empty.
#
# The VPC, subnet, and security group created in Lab 18 still exist in
# AWS, but they are no longer tracked in Terraform state. During this
# lab you will add resource and import blocks here to bring each one
# back under Terraform management.

# ------------------------------------------------------------------------------

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr

  tags = {
    Name        = "${var.prefix}-vpc"
    Environment = var.environment
  }
}

# cli import
# terraform import aws_vpc.main vpc-053f61371dc0f5334

# ------------------------------------------------------------------------------

resource "aws_subnet" "app" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.subnet_cidr

  tags = {
    Name        = "${var.prefix}-subnet"
    Environment = var.environment
  }
}

import {
  to = aws_subnet.app
  id = "subnet-04c31ff7839681b25"
}

# ------------------------------------------------------------------------------

# import {
#   to = aws_security_group.main
#   id = "sg-07af136a8faabe597"
# }

# Generate configuration for any import target that has no matching resource block:
# terraform plan -generate-config-out=generated.tf


resource "aws_security_group" "main" {
  name        = "${var.prefix}-web-sg"
  description = "Lab security group"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name        = "${var.prefix}-web-sg"
    Environment = var.environment
  }
}

# ------------------------------------------------------------------------------
import {
  to = aws_route_table.main
  id = "rtb-03c1681ac6fdfa8b5"
}
# terraform plan -generate-config-out=generated-route_table.tf

# ------------------------------------------------------------------------------