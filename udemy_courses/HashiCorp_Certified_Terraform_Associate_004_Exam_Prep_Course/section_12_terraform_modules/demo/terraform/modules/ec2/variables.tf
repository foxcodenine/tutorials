

variable "subnet_id" {
  description = "The ID of the subnet"
  type        = string
}

variable "ami_id" {
  description = "The AMI ID to use for the instance"
  type        = string
  default     = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI in us-east-1
}

variable "instance_type" {
  description = "The type of instance to start"
  type        = string
  default     = "t2.micro"
}

variable "instance_name" {
  description = "Name of the EC2 instance"
  type        = string
  default     = "my-instance"
}

variable "security_group_id" {
  description = "The Security Group ID to use for the instance"
  type        = string

}