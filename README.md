Continuous Integration Activity

Roll Number: 23071A0516
GitHub Actions workflow configured for automatic CI.
Yes, understood. You want a **simple command reference README**, not the full lab record.

Just **Exercise number + exercise name + commands in the order you run them**.

Use this:

```markdown
# DevOps Lab - Command Reference

Roll Number: 23071A0516

---

## Exercise 1: CRUD Backend using Node.js and Express.js

### Create Project

```bash
mkdir student-crud-api
cd student-crud-api
npm init -y
npm install express
```

### Run Application

```bash
node server.js
```

### Test APIs

```text
GET    http://localhost:3000/students
GET    http://localhost:3000/students/1
POST   http://localhost:3000/students
PATCH  http://localhost:3000/students/1
DELETE http://localhost:3000/students/1
```

---

## Exercise 2: Dockerizing CRUD Backend

### Go to Docker Project

```bash
cd 23071A0516-Docker-App
```

### Build Docker Image

```bash
docker build -t 23071a0516-crud-app .
```

### Check Image

```bash
docker images
```

### Run Container

```bash
docker run -d -p 3000:3000 --name 23071A0516-container 23071a0516-crud-app
```

### Check Container

```bash
docker ps
```

### Access Application

```text
http://localhost:3000/students
```

### If Container Name Already Exists

```bash
docker rm 23071A0516-container
```

Then:

```bash
docker run -d -p 3000:3000 --name 23071A0516-container 23071a0516-crud-app
```

---

## Exercise 3: Continuous Integration using GitHub Actions

### Check Git Status

```bash
git status
```

### Check Branch

```bash
git branch
```

### Add GitHub Actions Workflow

```bash
git add .github/workflows/ci.yml
```

### Commit Workflow

```bash
git commit -m "Add GitHub Actions workflow - 23071A0516"
```

### Push

```bash
git push
```

### Create / Modify README

```bash
git status
```

### Stage README

```bash
git add README.md
```

### Commit README

```bash
git commit -m "Demonstrate continuous integration - 23071A0516"
```

### Push README

```bash
git push
```

### GitHub Actions

After `git push`:

```text
GitHub → Actions → Node.js CI - 23071A0516
```

Workflow steps:

```text
Checkout code
Set up Node.js
Install dependencies
Check project
```

---

## Exercise 4: Kubernetes Deployment of Dockerized CRUD Backend

### Go to Docker Project

```bash
cd 23071A0516-Docker-App
```

### Check Docker Image

```bash
docker images
```

### Check Kubernetes

```bash
kubectl version --client
```

```bash
kubectl get nodes
```

### Create Deployment

File:

```text
deployment.yaml
```

### Apply Deployment

```bash
kubectl apply -f deployment.yaml
```

### Check Deployment

```bash
kubectl get deployments
```

### Check Pod

```bash
kubectl get pods
```

Expected:

```text
READY     1/1
STATUS    Running
```

### Create Service

File:

```text
service.yaml
```

### Apply Service

```bash
kubectl apply -f service.yaml
```

### Check Service

```bash
kubectl get services
```

Expected:

```text
23071a0516-crud-service
NodePort
3000:30080/TCP
```

### Port Forward

```bash
kubectl port-forward service/23071a0516-crud-service 3000:3000
```

### Access Application

```text
http://localhost:3000/students
```

---

## Useful Git Commands

### Check Status

```bash
git status
```

### Add File

```bash
git add filename
```

### Add All Files

```bash
git add .
```

### Commit

```bash
git commit -m "commit message"
```

### Push

```bash
git push
```

### Check Branch

```bash
git branch
```

### Check Remote

```bash
git remote -v
```

### Push Main Branch

```bash
git push -u origin main
```

---

## Useful Docker Commands

```bash
docker info
docker images
docker ps
docker build -t 23071a0516-crud-app .
docker run -d -p 3000:3000 --name 23071A0516-container 23071a0516-crud-app
docker rm 23071A0516-container
```

---

## Useful Kubernetes Commands

```bash
kubectl version --client
kubectl get nodes
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
kubectl apply -f service.yaml
kubectl get services
kubectl port-forward service/23071a0516-crud-service 3000:3000
```
```
Terraform Lab - 23071A0516
Project
Terraform configuration workflow using a local file resource.
Requirements
- Terraform CLI
- VS Code
- PowerShell
- HashiCorp Terraform VS Code Extension
Project Folder
23071A0516-Terraform

Terraform Configuration
File: main.tf
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

Commands
1. Check Terraform Version
terraform --version

2. Create Project Folder
mkdir 23071A0516-Terraform
cd 23071A0516-Terraform

3. Open Project in VS Code
code .

Create and save main.tf.
4. Initialize Terraform
terraform init

5. Validate Configuration
terraform validate

6. Create Execution Plan
terraform plan

Expected result:
Plan: 1 to add, 0 to change, 0 to destroy.

7. Apply Configuration
terraform apply

When prompted, enter:
yes

Expected result:
Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

This creates:
23071A0516.txt

8. Show Terraform State
terraform show

9. List Terraform Resources
terraform state list

Expected output:
local_file.lab_file

10. Destroy Terraform Resource
terraform destroy

When prompted, enter:
yes

Expected result:
Destroy complete! Resources: 1 destroyed.

Complete Command Sequence
terraform --version

mkdir 23071A0516-Terraform
cd 23071A0516-Terraform

code .

terraform init

terraform validate

terraform plan

terraform apply

terraform show

terraform state list

terraform destroy

For terraform apply and terraform destroy, type yes when Terraform asks for confirmation.
Expected Resource
Resource Type: local_file
Resource Name: lab_file
File Created: 23071A0516.txt
Roll Number: 23071A0516
