# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "rtb-03c1681ac6fdfa8b5"
resource "aws_route_table" "main" {
  propagating_vgws = []
  region           = "eu-west-1"
  route            = []
  tags = {
    Environment = "dev"
    Name        = "lab-rt"
  }
  tags_all = {
    Environment = "dev"
    Name        = "lab-rt"
  }
  vpc_id = "vpc-053f61371dc0f5334"
}
