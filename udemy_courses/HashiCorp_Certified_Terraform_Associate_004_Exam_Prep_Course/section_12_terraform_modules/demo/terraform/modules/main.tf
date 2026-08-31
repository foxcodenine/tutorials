module "vpc" {
  source = "./modules/vpc"

  vpc_cidr = "10.0.0.0/16"
  vpc_name = "demo-vpc"
}


module "subnet_module" {
  source = "./modules/subnet"

  vpc_id = module.vpc.vpc_id

  subnet_cidr       = "10.0.1.0/24"
  subnet_name       = "demo-subnet"
  availability_zone = "eu-west-1a"
}

module "prod-workload" {
  source = "./modules/ec2"

  vpc_id    = module.vpc.vpc_id
  subnet_id = module.subnet_module.subnet_id
  ami_id    = "ami-01a47a61359451e7d"

  instance_name = "foxcode-9-server"
  instance_type = "t2.micro"
}

module "dev-workload" {
  source = "./modules/ec2"

  vpc_id    = module.vpc.vpc_id
  subnet_id = module.subnet_module.subnet_id
  ami_id    = "ami-01a47a61359451e7d"

  instance_name = "foxcode-9-server-dev"
  instance_type = "t2.micro"
}