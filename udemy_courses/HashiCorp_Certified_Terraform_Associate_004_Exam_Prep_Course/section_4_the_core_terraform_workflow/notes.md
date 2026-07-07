## commands

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
terraform destroy

terraform plan -out=myplan.tfplan
terraform apply myplan.tfplan
```


## terraform init

    $ terraform init

It prepares the environment to run other Terraform commands. Downloads the required providers (e.g., AWS, Azure, GCP) and modules used in the Terraform configuration.

---

## .terraform.lock.hcl

Purpose
Locks dependency versions for consistency across your environments

File Name and Location
The name is .terraform.lock.hcl and it’s stored in your working directory (same as .tf files)

Best Practices
Commit to Version Control and Managed Automatically by Terraform

---

## .terraform

Terraform uses the .terraform directory to store the project's providers and modules

The .terraform/providers directory stores cached versions of the configuration's providers.

The .terraform/modules directory contains downloaded versions of any referenced modules.

---

### terraform plan

`terraform plan` generates an execution plan showing the changes that Terraform will make to the “real-world” resources in order to match the desired state configuration.

### What Does It Do?

Provides you with an output of the changes that will happen if you apply the changes. It shows you the resources to be created (`+`), updated (`~`), or destroyed (`-`).

### Perform a Dry-Run of Your Changes

`terraform plan` gives you the ability to perform a “dry-run” without impacting “real-world” resources. It helps avoid unintended changes by showing exactly what Terraform will do.

### Why a Plan is Important

It is crucial for reviewing changes in production environments to prevent downtime or errors. It should be run before applying any changes but it is **NOT** required for a `terraform apply`.

**Benefits of Saving Plans**  
The exact actions in the saved plan will be executed, no surprises

**Review & Approval Workflows**  
Save plan, have it reviewed, then apply later with confidence

**How to Save a Plan**

```
terraform plan -out=myplan.tfplan
```

(file name can be anything you choose)

**How to Apply a Saved Plan**

```
terraform apply myplan.tfplan
```


## Dependencies

Two types of dependencies:

**Implicit Dependencies (automatic)** – a reference to another resource that Terraform already knows about

**Explicit Dependencies (Manual)** – Used when there's a dependency that Terraform can't automatically detect from resource references alone. Use `depends_on` to create an explicit dependency.

## Parallel Resource Operations

### How Terraform Walks the Graph

**Terraform Processes the Graph with Parallel Execution**  
Processes nodes as soon as their dependencies are satisfied. Non-dependent resources are created/modified simultaneously.

**Default Configuration**  
By default, Terraform manages 10 operations in parallel but can be modified using the `-parallelism` flag:

```bash
terraform apply -parallelism=5
```

**When to Change Parallelism**  
If you're running into API rate limiting issues, or for debugging/troubleshooting purposes. Most users never need to change this setting.

## Parallel Resource Operations

### How Terraform Walks the Graph

**Terraform Processes the Graph with Parallel Execution**  
Processes nodes as soon as their dependencies are satisfied. Non-dependent resources are created/modified simultaneously.

**Default Configuration**  
By default, Terraform manages 10 operations in parallel but can be modified using the `-parallelism` flag:

```bash
terraform apply -parallelism=5
```

**When to Change Parallelism**  
If you're running into API rate limiting issues, or for debugging/troubleshooting purposes. Most users never need to change this setting.


## terraform apply

`terraform apply` tells Terraform to provision real infrastructure.

### What Does It Do?

It takes your configuration and creates the resources as defined in your configuration. This is where Terraform makes changes to your infrastructure.

### Refreshes State

`terraform apply` runs a plan first to compare your existing infrastructure to your desired state. By default, Terraform will prompt you to proceed with the proposed changes.

### When Do You Use It?

Anytime you want to make changes to your infrastructure. This includes adding, modifying, or destroying real-world resources.

---

## Understanding Apply Operations

Understanding what happens behind the scenes when Terraform modifies your infrastructure.

### State Locking

Terraform locks the state file during apply to prevent concurrent modifications.

### State Updates

State file is updated after each resource is successfully created/modified/destroyed.

### No Automatic Rollback

If a resource fails during apply, Terraform does not rollback previous successful changes. They remain in place.

### Respects Dependencies

Terraform applies resources based on their dependencies.

---

## terraform apply commands

### Standard Apply

```
terraform apply
```

Then Terraform asks for confirmation:

```
Confirm (Y/N):
```

### Apply a Saved Plan

```
terraform apply myplan.tfplan
```

### Apply with Auto Approve

```
terraform apply -auto-approve
```

Skips the confirmation prompt — use carefully.

For automation / CI/CD pipelines:

```
terraform apply -input=false
```

---

## Best Practices for terraform apply

### Before You Apply

- Always review the plan
- Ensure you're in the right directory
- Test in non-production

### During Apply

- Read the plan carefully
- Watch for unexpected changes
- Be patient with large applies

### After You Apply

- Verify the changes
- Commit your configuration
- Document significant changes

---

## terraform destroy

`terraform destroy` terminates resources managed by Terraform in the current workspace or working directory.

### Using the Destroy Command

Explicitly destroys all infrastructure being managed by Terraform. This operation does prompt for confirmation before proceeding. Shows destruction plan first.

### Removing Individual Resources from your Configuration

Delete resource blocks from your `.tf` files and then run:

```
terraform apply
```

Terraform detects removed resources and destroys the real-world resource.

## State File Updates

Once a resource is destroyed, Terraform removes it from the state file as well since it is no longer being managed.

---

### Destroying Resources

The default `terraform destroy` command will destroy all resources being managed by Terraform.

---

### Destroying a Single Resource

You can target specific resources, if needed, using the destroy command.

```bash
terraform destroy -target=<resource_name>
```

---

## Terraform Validate

### Validate Your Configurations

The `terraform validate` command checks your Terraform configuration files for syntax errors and ensures they are structurally valid. It does not check whether the configuration will successfully deploy but ensures your code is properly written and references resources and variables correctly.

This is an essential step to catch errors early before running commands like `plan` or `apply`.

---

## Requirements

### Initialize

```
terraform init
```

### Validate

```
terraform validate
```

### Plan

```
terraform plan
```

### Apply

```
terraform apply
```

### Destroy

```
terraform destroy
```

You **MUST** initialize your working directory first before running `terraform validate`.