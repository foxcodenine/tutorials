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