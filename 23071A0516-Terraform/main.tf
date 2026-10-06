terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
    }
  }
}

resource "local_file" "lab_file" {
  filename = "${path.module}/23071A0516.txt"
  content  = "Terraform Lab Activity\nRoll Number: 23071A0516"
}