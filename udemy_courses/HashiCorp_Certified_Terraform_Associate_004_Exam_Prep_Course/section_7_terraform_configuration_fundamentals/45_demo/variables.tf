variable "buckets_east" {
  type = map(string)
  default = {
    "backup-bucket"    = "foxcodenine-data-backup-bucket-east"
    "terraform-bucket" = "foxcodenine-terraform-bucket-east"
  }
}

variable "buckets_west" {
  type = map(string)
  default = {
    "backup-bucket"    = "foxcodenine-data-backup-bucket-west"
    "terraform-bucket" = "foxcodenine-terraform-bucket-west"
  }
}