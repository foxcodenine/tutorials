variable "vpc_id" {
  type = string
}

variable "subnet_cidr" {
  type    = string
  default = "10.0.0.0/24"
}

variable "subnet_name" {
  type    = string
  default = "my-subnet"
}

variable "availability_zone" {
  type    = string
  default = "eu-west-1"
}