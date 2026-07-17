terraform {
  backend "s3" {
    bucket       = "terraform-state-s3-bucket-cf12"
    key          = "udemy/terraform/lesson_65"
    region       = "eu-west-1"
    use_lockfile = true
  }
}

# terraform init -migrate-state