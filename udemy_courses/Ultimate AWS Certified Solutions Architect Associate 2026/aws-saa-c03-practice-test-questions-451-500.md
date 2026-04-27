# AWS SAA-C03 Practice Test: Questions 451-500

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 451

A company is migrating its applications and databases to the AWS Cloud. The company will use Amazon Elastic
Container Service (Amazon ECS), AWS Direct Connect, and Amazon RDS.
Which activities will be managed by the company's operational team? (Choose three.)

**A.** Management of the Amazon RDS infrastructure layer, operating system, and platforms

**B.** Creation of an Amazon RDS DB instance and configuring the scheduled maintenance window

**C.** Configuration of additional software components on Amazon ECS for monitoring, patch management, log
management, and host intrusion detection

**D.** Installation of patches for all minor and major database versions for Amazon RDS

**E.** Ensure the physical security of the Amazon RDS infrastructure in the data center

**F.** Encryption of the data that moves in transit through Direct Connect

---

## Question 452

A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour and takes 10 seconds to run.
The job runs on a scheduled interval and consumes 1 GB of memory. The CPU utilization of the instance is low
except for short surges during which the job uses the maximum CPU available. The company wants to optimize the
costs to run the job.
Which solution will meet these requirements?

**A.** Use AWS App2Container (A2C) to containerize the job. Run the job as an Amazon Elastic Container Service
(Amazon ECS) task on AWS Fargate with 0.5 virtual CPU (vCPU) and 1 GB of memory.

**B.** Copy the code into an AWS Lambda function that has 1 GB of memory. Create an Amazon EventBridge

scheduled rule to run the code each hour.

**C.** Use AWS App2Container (A2C) to containerize the job. Install the container in the existing Amazon Machine
Image (AMI). Ensure that the schedule stops the container when the task finishes.

**D.** Configure the existing schedule to stop the EC2 instance at the completion of the job and restart the EC2
instance when the next job starts.

---

## Question 453

A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets.
Because of regulatory requirements, the company must retain backup files for a specific time period. The company
must not alter the files for the duration of the retention period.
Which solution will meet these requirements?

**A.** Use AWS Backup to create a backup vault that has a vault lock in governance mode. Create the required

backup plan.

**B.** Use Amazon Data Lifecycle Manager to create the required automated snapshot policy.

**C.** Use Amazon S3 File Gateway to create the backup. Configure the appropriate S3 Lifecycle management.

**D.** Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required
backup plan.

---

## Question 454

A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers
a previous employee did not provide details about the resources inventory. The solutions architect needs to build
and map the relationship details of the various workloads across all accounts.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Use AWS Systems Manager Inventory to generate a map view from the detailed view report.

**B.** Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually.

**C.** Use Workload Discovery on AWS to generate architecture diagrams of the workloads.

**D.** Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships.

---

## Question 455

A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different
budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on
AWS accounts when the allocated budget threshold is met during a specific period.
Which combination of solutions will meet these requirements? (Choose three.)

**A.** Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of
the required AWS accounts.

**B.** Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required
AWS accounts.

**C.** Create an IAM user for AWS Budgets to run budget actions with the required permissions.

**D.** Create an IAM role for AWS Budgets to run budget actions with the required permissions.

**E.** Add an alert to notify the company when each account meets its budget threshold. Add a budget action that
selects the IAM identity created with the appropriate config rule to prevent provisioning of additional
resources.

**F.** Add an alert to notify the company when each account meets its budget threshold. Add a budget action that
selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of
additional resources.

---

## Question 456

A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the
EC2 instances to a second Region. The company also wants to provision EC2 resources in the second Region and
manage the EC2 instances centrally from one AWS account.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region.
Configure data replication.

**B.** Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy the
snapshots to the second Region periodically.

**C.** Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the
EC2 instances.

**D.** Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data from
the source Region to the second Region.

---

## Question 457

A company that uses AWS is building an application to transfer data to a product manufacturer. The company has
its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the
application to transfer data. The company must use Applicability Statement 2 (AS2) protocol.
Which solution will meet these requirements?

**A.** Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication.

**B.** Use Amazon AppFlow flows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS)
task for IdP authentication.

**C.** Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication.

**D.** Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP
authentication.

---

## Question 458

A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application
requires 1 GB of memory and 2 GB of storage for its computation resources. The application will require that the
data is in a relational format.
Which additional combination ofAWS services will meet these requirements with the LEAST administrative effort?
(Choose two.)

**A.** Amazon EC2

**B.** AWS Lambda

**C.** Amazon RDS

**D.** Amazon DynamoDB

**E.** Amazon Elastic Kubernetes Services (Amazon EKS)

---

## Question 459

A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds
department tags to AWS resources when the company creates tags.
An accounting team needs to determine spending on Amazon EC2 consumption. The accounting team must
determine which departments are responsible for the costs regardless ofAWS account. The accounting team has
access to AWS Cost Explorer for all AWS accounts within the organization and needs to access all reports from
Cost Explorer.
Which solution meets these requirements in the MOST operationally efficient way?

**A.** From the Organizations management account billing console, activate a user-defined cost allocation tag
named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

**B.** From the Organizations management account billing console, activate an AWS-defined cost allocation tag
named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

**C.** From the Organizations member account billing console, activate a user-defined cost allocation tag named
department. Create one cost report in Cost Explorer grouping by the tag name, and filter by EC2.

**D.** From the Organizations member account billing console, activate an AWS-defined cost allocation tag named
department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

---

## Question 460

A company wants to securely exchange data between its software as a service (SaaS) application Salesforce
account and Amazon S3. The company must encrypt the data at rest by using AWS Key Management Service
(AWS KMS) customer managed keys (CMKs). The company must also encrypt the data in transit. The company has
enabled API access for the Salesforce account.

**A.** Create AWS Lambda functions to transfer the data securely from Salesforce to Amazon S3.

**B.** Create an AWS Step Functions workflow. Define the task to transfer the data securely from Salesforce to
Amazon S3.

**C.** Create Amazon AppFlow flows to transfer the data securely from Salesforce to Amazon S3.

**D.** Create a custom connector for Salesforce to transfer the data securely from Salesforce to Amazon S3.

---

## Question 461

A company is developing a mobile gaming app in a single AWS Region. The app runs on multiple Amazon EC2
instances in an Auto Scaling group. The company stores the app data in Amazon DynamoDB. The app
communicates by using TCP traffic and UDP traffic between the users and the servers. The application will be used
globally. The company wants to ensure the lowest possible latency for all users.
Which solution will meet these requirements?

**A.** Use AWS Global Accelerator to create an accelerator. Create an Application Load Balancer (ALB) behind an
accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update
the Auto Scaling group to register instances on the ALB.

**B.** Use AWS Global Accelerator to create an accelerator. Create a Network Load Balancer (NLB) behind an
accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update
the Auto Scaling group to register instances on the NLB.

**C.** Create an Amazon CloudFront content delivery network (CDN) endpoint. Create a Network Load Balancer
(NLB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register
instances on the NLB. Update CloudFront to use the NLB as the origin.

**D.** Create an Amazon CloudFront content delivery network (CDN) endpoint. Create an Application Load Balancer
(ALB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register
instances on the ALB. Update CloudFront to use the ALB as the origin.

---

## Question 462

A company has an application that processes customer orders. The company hosts the application on an Amazon
EC2 instance that saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload
does not process orders fast enough.
What should a solutions architect do to write the orders reliably to the database as quickly as possible?

**A.** Increase the instance size of the EC2 instance when traffic is high. Write orders to Amazon Simple
Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic.

**B.** Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling
group behind an Application Load Balancer to read from the SQS queue and process orders into the database.

**C.** Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the
SNS topic. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the
SNS topic.

**D.** Write orders to an Amazon Simple Queue Service (Amazon SQS) queue when the EC2 instance reaches CPU
threshold limits. Use scheduled scaling of EC2 instances in an Auto Scaling group behind an Application Load
Balancer to read from the SQS queue and process orders into the database.

---

## Question 463

An IoT company is releasing a mattress that has sensors to collect data about a user’s sleep. The sensors will send
data to an Amazon S3 bucket. The sensors collect approximately 2 MB of data every night for each mattress. The
company must process and summarize the data for each mattress. The results need to be available as soon as
possible. Data processing will require 1 GB of memory and will finish within 30 seconds.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use AWS Glue with a Scala job

**B.** Use Amazon EMR with an Apache Spark script

**C.** Use AWS Lambda with a Python script

**D.** Use AWS Glue with a PySpark job

---

## Question 464

A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL SingleAZ DB instance. Management wants to eliminate single points of failure and has asked a solutions architect to
recommend an approach to minimize database downtime without requiring any changes to the application code.
Which solution meets these requirements?

**A.** Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and
specifying the Multi-AZ option.

**B.** Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and restore the new
Multi-AZ deployment with the snapshot.

**C.** Create a read-only replica of the PostgreSQL database in another Availability Zone. Use Amazon Route 53
weighted record sets to distribute requests across the databases.

**D.** Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a minimum group size of
two. Use Amazon Route 53 weighted record sets to distribute requests across instances.

---

## Question 465

A company is developing an application to support customer demands. The company wants to deploy the
application on multiple Amazon EC2 Nitro-based instances within the same Availability Zone. The company also
wants to give the application the ability to write to multiple block storage volumes in multiple EC2 Nitro-based
instances simultaneously to achieve higher application availability.
Which solution will meet these requirements?

**A.** Use General Purpose SSD (gp3) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

**B.** Use Throughput Optimized HDD (st1) EBS volumes with Amazon Elastic Block Store (Amazon EBS) MultiAttach

**C.** Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

**D.** Use General Purpose SSD (gp2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

---

## Question 466

A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an
Amazon RDS Multi-AZ DB instance. New company management wants to ensure the application is highly available.
What should a solutions architect do to meet this requirement?

**A.** Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer

**B.** Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region

**C.** Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application

**D.** Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load
Balancer

---

## Question 467

A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of
changes in the workloads inside the member account, the account no longer receives the full benefit of the
Compute Savings Plan commitment. The company uses less than 50% of its purchased compute power.

**A.** Turn on discount sharing from the Billing Preferences section of the account console in the member account
that purchased the Compute Savings Plan.

**B.** Turn on discount sharing from the Billing Preferences section of the account console in the company's
Organizations management account.

**C.** Migrate additional compute workloads from another AWS account to the account that has the Compute
Savings Plan.

**D.** Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.

---

## Question 468

A company is developing a microservices application that will provide a search catalog for customers. The
company must use REST APIs to present the frontend of the application to users. The REST APIs must access the
backend services that the company hosts in containers in private VPC subnets.
Which solution will meet these requirements?

**A.** Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container
Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.

**B.** Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service
(Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.

**C.** Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container
Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.

**D.** Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service
(Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.

---

## Question 469

A company stores raw collected data in an Amazon S3 bucket. The data is used for several types of analytics on
behalf of the company's customers. The type of analytics requested determines the access pattern on the S3
objects.
The company cannot predict or control the access pattern. The company wants to reduce its S3 costs.
Which solution will meet these requirements?

**A.** Use S3 replication to transition infrequently accessed objects to S3 Standard-Infrequent Access (S3
Standard-IA)

**B.** Use S3 Lifecycle rules to transition objects from S3 Standard to Standard-Infrequent Access (S3 StandardIA)

**C.** Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering

**D.** Use S3 Inventory to identify and transition objects that have not been accessed from S3 Standard to S3
Intelligent-Tiering

---

## Question 470

A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate
communications with other external applications using the internet. However the company’s security policy states
that any external service cannot initiate a connection to the EC2 instances.
What should a solutions architect recommend to resolve this issue?

**A.** Create a NAT gateway and make it the destination of the subnet's route table

**B.** Create an internet gateway and make it the destination of the subnet's route table

**C.** Create a virtual private gateway and make it the destination of the subnet's route table

**D.** Create an egress-only internet gateway and make it the destination of the subnet's route table

---

## Question 471

A company is creating an application that runs on containers in a VPC. The application stores and accesses data in
an Amazon S3 bucket. During the development phase, the application will store and access 1 TB of data in Amazon
S3 each day. The company wants to minimize costs and wants to prevent traffic from traversing the internet
whenever possible.
Which solution will meet these requirements?

**A.** Enable S3 Intelligent-Tiering for the S3 bucket

**B.** Enable S3 Transfer Acceleration for the S3 bucket

**C.** Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC

**D.** Create an interface endpoint for Amazon S3 in the VPC. Associate this endpoint with all route tables in the
VPC

---

## Question 472

A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new
messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution
that requires minimal application changes.
Which method should the solutions architect select?

**A.** Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the
DAX endpoint.

**B.** Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read
endpoint for the read replicas.

**C.** Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the
existing DynamoDB endpoint.

**D.** Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the
Redis cache endpoint instead of DynamoDB.

---

## Question 473

A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website
serves static content. Website traffic is increasing, and the company is concerned about a potential increase in
cost.

**A.** Create an Amazon CloudFront distribution to cache state files at edge locations

**B.** Create an Amazon ElastiCache cluster. Connect the ALB to the ElastiCache cluster to serve cached files

**C.** Create an AWS WAF web ACL and associate it with the ALB. Add a rule to the web ACL to cache static files

**D.** Create a second ALB in an alternative AWS Region. Route user traffic to the closest Region to minimize data
transfer costs

---

## Question 474

A company has multiple VPCs across AWS Regions to support and run workloads that are isolated from workloads
in other Regions. Because of a recent application launch requirement, the company’s VPCs must communicate with
all other VPCs across all Regions.
Which solution will meet these requirements with the LEAST amount of administrative effort?

**A.** Use VPC peering to manage VPC communication in a single Region. Use VPC peering across Regions to
manage VPC communications.

**B.** Use AWS Direct Connect gateways across all Regions to connect VPCs across regions and manage VPC
communications.

**C.** Use AWS Transit Gateway to manage VPC communication in a single Region and Transit Gateway peering
across Regions to manage VPC communications.

**D.** Use AWS PrivateLink across all Regions to connect VPCs across Regions and manage VPC communications

---

## Question 475

A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS).
The application needs to access a shared file system that is highly durable and can recover data to another AWS
Region with a recovery point objective (RPO) of 8 hours. The file system needs to provide a mount target m each
Availability Zone within a Region.
A solutions architect wants to use AWS Backup to manage the replication to another Region.
Which solution will meet these requirements?

**A.** Amazon FSx for Windows File Server with a Multi-AZ deployment

**B.** Amazon FSx for NetApp ONTAP with a Multi-AZ deployment

**C.** Amazon Elastic File System (Amazon EFS) with the Standard storage class

**D.** Amazon FSx for OpenZFS

---

## Question 476

A company is expecting rapid growth in the near future. A solutions architect needs to configure existing users
and grant permissions to new users on AWS. The solutions architect has decided to create IAM groups. The
solutions architect will add the new users to IAM groups based on department.
Which additional action is the MOST secure way to grant permissions to the new users?

**A.** Apply service control policies (SCPs) to manage access permissions

**B.** Create IAM roles that have least privilege permission. Attach the roles to the IAM groups

**C.** Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups

**D.** Create IAM roles. Associate the roles with a permissions boundary that defines the maximum permissions

---

## Question 477

A group requires permissions to list an Amazon S3 bucket and delete objects from that bucket. An administrator
has created the following IAM policy to provide access to the bucket and applied that policy to the group. The
group is not able to delete objects in the bucket. The company follows least-privilege access rules.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ],
      "Effect": "Allow"
    }
  ]
}
```

Which statement should a solutions architect add to the policy to correct bucket access?

**A.**

```json
{
  "Action": [
    "s3:*Object"
  ],
  "Resource": [
    "arn:aws:s3:::bucket-name/*"
  ],
  "Effect": "Allow"
}
```

**B.**

```json
{
  "Action": [
    "s3:*"
  ],
  "Resource": [
    "arn:aws:s3:::bucket-name/*"
  ],
  "Effect": "Allow"
}
```

**C.**

```json
{
  "Action": [
    "s3:DeleteObject"
  ],
  "Resource": [
    "arn:aws:s3:::bucket-name*"
  ],
  "Effect": "Allow"
}
```

**D.**

```json
{
  "Action": [
    "s3:DeleteObject"
  ],
  "Resource": [
    "arn:aws:s3:::bucket-name/*"
  ],
  "Effect": "Allow"
}
```

---

## Question 478

A law firm needs to share information with the public. The information includes hundreds of files that must be
publicly readable. Modifications or deletions of the files by anyone before a designated future date are prohibited.
Which solution will meet these requirements in the MOST secure way?

**A.** Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant read-only IAM
permissions to any AWS principals that access the S3 bucket until the designated date.

**B.** Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in
accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket
policy to allow read-only access to the objects.

**C.** Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run an AWS
Lambda function in case of object modification or deletion. Configure the Lambda function to replace the
objects with the original versions from a private S3 bucket.

**D.** Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the folder that
contains the files. Use S3 Object Lock with a retention period in accordance with the designated date. Grant
read-only IAM permissions to any AWS principals that access the S3 bucket.

---

## Question 479

A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary
infrastructure. This infrastructure includes an Auto Scaling group, an Application Load Balancer and an Amazon
RDS database. After the configuration has been thoroughly validated, the company wants the capability to
immediately deploy the infrastructure for development and production use in two Availability Zones in an
automated fashion.
What should a solutions architect recommend to meet these requirements?

**A.** Use AWS Systems Manager to replicate and provision the prototype infrastructure in two Availability Zones

**B.** Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the
infrastructure with AWS CloudFormation.

**C.** Use AWS Config to record the inventory of resources that are used in the prototype infrastructure. Use AWS
Config to deploy the prototype infrastructure into two Availability Zones.

**D.** Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype infrastructure to
automatically deploy new environments in two Availability Zones.

---

## Question 480

A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief
information security officer has directed that no application traffic between the two services should traverse the
public internet.
Which capability should the solutions architect use to meet the compliance requirements?

**A.** AWS Key Management Service (AWS KMS)

**B.** VPC endpoint

**C.** Private subnet

**D.** Virtual private gateway

---

## Question 481

A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for MySQL server forms
the database layer Amazon ElastiCache forms the cache layer. The company wants a caching strategy that adds or
updates data in the cache when a customer adds an item to the database. The data in the cache must always
match the data in the database.
Which solution will meet these requirements?

**A.** Implement the lazy loading caching strategy

**B.** Implement the write-through caching strategy

**C.** Implement the adding TTL caching strategy

**D.** Implement the AWS AppConfig caching strategy

---

## Question 482

A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The
company has a 100 megabits per second (Mbps) internet connection on premises. The company needs to encrypt
the data in transit to the S3 bucket. The company will store new data directly in Amazon S3.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket

**B.** Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket

**C.** Use AWS Snowball to move the data to an S3 bucket

**D.** Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the AWS CLI to move
the data directly to an S3 bucket

---

## Question 483

A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company
wants to run this job in the AWS Cloud. The job runs every 10 minutes. The job’s runtime varies between 1 minute
and 3 minutes.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an AWS Lambda function based on the container image of the job. Configure Amazon EventBridge to
invoke the function every 10 minutes.

**B.** Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling to run every
10 minutes.

**C.** Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a scheduled task
based on the container image of the job to run every 10 minutes.

**D.** Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a standalone task
based on the container image of the job. Use Windows task scheduler to run the job every
10 minutes.

---

## Question 484

A company wants to move from many standalone AWS accounts to a consolidated, multi-account architecture. The
company plans to create many new AWS accounts for different business units. The company needs to
authenticate access to these AWS accounts by using a centralized corporate directory service.
Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)

**A.** Create a new organization in AWS Organizations with all features turned on. Create the new AWS accounts in
the organization.

**B.** Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single Sign-On) to accept
Amazon Cognito authentication.

**C.** Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity Center (AWS
Single Sign-On) to AWS Directory Service.

**D.** Create a new organization in AWS Organizations. Configure the organization's authentication mechanism to
use AWS Directory Service directly.

**E.** Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity Center, and
integrate it with the company's corporate directory service.

---

## Question 485

A company is looking for a solution that can store video archives in AWS from old news footage. The company
needs to minimize costs and will rarely need to restore these files. When the files are needed, they must be
available in a maximum of five minutes.
What is the MOST cost-effective solution?

**A.** Store the video archives in Amazon S3 Glacier and use Expedited retrievals.

**B.** Store the video archives in Amazon S3 Glacier and use Standard retrievals.

**C.** Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).

**D.** Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).

---

## Question 486

A company is building a three-tier application on AWS. The presentation tier will serve a static website The logic
tier is a containerized application. This application will store data in a relational database. The company wants to
simplify deployment and to reduce operational costs.
Which solution will meet these requirements?

**A.** Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS
Fargate for compute power. Use a managed Amazon RDS cluster for the database.

**B.** Use Amazon CloudFront to host static content. Use Amazon Elastic Container Service (Amazon ECS) with
Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.

**C.** Use Amazon S3 to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS
Fargate for compute power. Use a managed Amazon RDS cluster for the database.

**D.** Use Amazon EC2 Reserved Instances to host static content. Use Amazon Elastic Kubernetes Service (Amazon
EKS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.

---

## Question 487

A company seeks a storage solution for its application. The solution must be highly available and scalable. The
solution also must function as a file system be mountable by multiple Linux instances in AWS and on premises
through native protocols, and have no minimum size requirements. The company has set up a Site-to-Site VPN for
access from its on-premises network to its VPC.
Which storage solution meets these requirements?

**A.** Amazon FSx Multi-AZ deployments

**B.** Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes

**C.** Amazon Elastic File System (Amazon EFS) with multiple mount targets

**D.** Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points

---

## Question 488

A 4-year-old media company is using the AWS Organizations all features feature set to organize its AWS accounts.
According to the company's finance team, the billing information on the member accounts must not be accessible
to anyone, including the root user of the member accounts.
Which solution will meet these requirements?

**A.** Add all finance team users to an IAM group. Attach an AWS managed policy named Billing to the group.

**B.** Attach an identity-based policy to deny access to the billing information to all users, including the root user.

**C.** Create a service control policy (SCP) to deny access to the billing information. Attach the SCP to the root
organizational unit (OU).

**D.** Convert from the Organizations all features feature set to the Organizations consolidated billing feature set.

---

## Question 489

An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse
solution. The company uses Amazon Simple Notification Service (Amazon SNS) to send order messages to an onpremises HTTPS endpoint so the warehouse application can process the orders. The local data center team has
detected that some of the order messages were not received.
A solutions architect needs to retain messages that are not delivered and analyze the messages for up to 14 days.
Which solution will meet these requirements with the LEAST development effort?

**A.** Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target with a retention
period of 14 days.

**B.** Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14 days between the
application and Amazon SNS.

**C.** Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target
with a retention period of 14 days.

**D.** Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a TTL attribute set
for a retention period of 14 days.

---

## Question 490

A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data,
and leaderboards. The company needs to configure continuous backups to an Amazon S3 bucket with a minimal
amount of coding. The backups must not affect availability of the application and must not affect the read capacity
units (RCUs) that are defined for the table.
Which solution meets these requirements?

**A.** Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.

**B.** Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time
recovery for the table.

**C.** Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the stream and export
the data to an Amazon S3 bucket.

**D.** Create an AWS Lambda function to export the data from the database tables to Amazon S3 on a regular
basis. Turn on point-in-time recovery for the table.

---

## Question 491

A solutions architect is designing an asynchronous application to process credit card data validation requests for a
bank. The application must be secure and be able to process each request at least once.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues
as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms:Decrypt
permission for the Lambda execution role.

**B.** Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as
the event source. Use SQS managed encryption keys (SSE-SQS) for encryption. Add the encryption key
invocation permission for the Lambda function.

**C.** Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) FIFO queues
as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt permission for the Lambda
execution role.

**D.** Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard
queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add the encryption key invocation
permission for the Lambda function.

---

## Question 492

A company has multiple AWS accounts for development work. Some staff consistently use oversized Amazon EC2
instances, which causes the company to exceed the yearly budget for the development accounts. The company
wants to centrally restrict the creation of AWS resources in these accounts.
Which solution will meet these requirements with the LEAST development effort?

**A.** Develop AWS Systems Manager templates that use an approved EC2 creation process. Use the approved
Systems Manager templates to provision EC2 instances.

**B.** Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service
control policy (SCP) to control the usage of EC2 instance types.

**C.** Configure an Amazon EventBridge rule that invokes an AWS Lambda function when an EC2 instance is
created. Stop disallowed EC2 instance types.

**D.** Set up AWS Service Catalog products for the staff to create the allowed EC2 instance types. Ensure that
staff can deploy EC2 instances only by using the Service Catalog products.

---

## Question 493

A company wants to use artificial intelligence (AI) to determine the quality of its customer service calls. The
company currently manages calls in four different languages, including English. The company will offer new
languages in the future. The company does not have the resources to regularly maintain machine learning (ML)
models.
The company needs to create written sentiment analysis reports from the customer service call recordings. The
customer service call recording text must be translated into English.
Which combination of steps will meet these requirements? (Choose three.)

**A.** Use Amazon Comprehend to translate the audio recordings into English.

**B.** Use Amazon Lex to create the written sentiment analysis reports.

**C.** Use Amazon Polly to convert the audio recordings into text.

**D.** Use Amazon Transcribe to convert the audio recordings in any language into text.

**E.** Use Amazon Translate to translate text in any language to English.

**F.** Use Amazon Comprehend to create the sentiment analysis reports.

---

## Question 494

A company uses Amazon EC2 instances to host its internal systems. As part of a deployment operation, an
administrator tries to use the AWS CLI to terminate an EC2 instance. However, the administrator receives a 403

(Access Denied) error message.
The administrator is using an IAM role that has the following IAM policy attached:

What is the cause of the unsuccessful request?

**A.** The EC2 instance has a resource-based policy with a Deny statement.

**B.** The principal has not been specified in the policy statement.

**C.** The "Action" field does not grant the actions that are required to terminate the EC2 instance.

**D.** The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or
203.0.113.0/24.

---

## Question 495

A company is conducting an internal audit. The company wants to ensure that the data in an Amazon S3 bucket
that is associated with the company’s AWS Lake Formation data lake does not contain sensitive customer or
employee data. The company wants to discover personally identifiable information (PII) or financial information,
including passport numbers and credit card numbers.
Which solution will meet these requirements?

**A.** Configure AWS Audit Manager on the account. Select the Payment Card Industry Data Security Standards
(PCI DSS) for auditing.

**B.** Configure Amazon S3 Inventory on the S3 bucket Configure Amazon Athena to query the inventory.

**C.** Configure Amazon Macie to run a data discovery job that uses managed identifiers for the required data
types.

**D.** Use Amazon S3 Select to run a report across the S3 bucket.

---

## Question 496

A company uses on-premises servers to host its applications. The company is running out of storage capacity. The
applications use both block storage and NFS storage. The company needs a high-performing solution that
supports local caching without re-architecting its existing applications.
Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

**A.** Mount Amazon S3 as a file system to the on-premises servers.

**B.** Deploy an AWS Storage Gateway file gateway to replace NFS storage.

**C.** Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.

**D.** Deploy an AWS Storage Gateway volume gateway to replace the block storage.

**E.** Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.

---

## Question 497

A company has a service that reads and writes large amounts of data from an Amazon S3 bucket in the same AWS
Region. The service is deployed on Amazon EC2 instances within the private subnet of a VPC. The service
communicates with Amazon S3 over a NAT gateway in the public subnet. However, the company wants a solution
that will reduce the data output costs.
Which solution will meet these requirements MOST cost-effectively?

**A.** Provision a dedicated EC2 NAT instance in the public subnet. Configure the route table for the private subnet
to use the elastic network interface of this instance as the destination for all S3 traffic.

**B.** Provision a dedicated EC2 NAT instance in the private subnet. Configure the route table for the public subnet

to use the elastic network interface of this instance as the destination for all S3 traffic.

**C.** Provision a VPC gateway endpoint. Configure the route table for the private subnet to use the gateway
endpoint as the route for all S3 traffic.

**D.** Provision a second NAT gateway. Configure the route table for the private subnet to use this NAT gateway as
the destination for all S3 traffic.

---

## Question 498

A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize application changes,
the company stores the pictures as the latest version of an S3 object. The company needs to retain only the two
most recent versions of the pictures.
The company wants to reduce costs. The company has identified the S3 bucket as a large expense.
Which solution will reduce the S3 costs with the LEAST operational overhead?

**A.** Use S3 Lifecycle to delete expired object versions and retain the two most recent versions.

**B.** Use an AWS Lambda function to check for older versions and delete all but the two most recent versions.

**C.** Use S3 Batch Operations to delete noncurrent object versions and retain only the two most recent versions.

**D.** Deactivate versioning on the S3 bucket and retain the two most recent versions.

---

## Question 499

A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average
connection utilization is less than 10%. A solutions architect must recommend a solution that will reduce the cost
without compromising security.
Which solution will meet these requirements?

**A.** Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS account.

**B.** Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.

**C.** Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection with another
AWS account.

**D.** Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing AWS account.

---

## Question 500

A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files
into an Amazon FSx for Windows File Server file system. File permissions must be preserved to ensure that access
rights do not change.
Which solutions will meet these requirements? (Choose two.)

**A.** Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the FSx for
Windows File Server file system.

**B.** Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule AWS DataSync
tasks to transfer the data to the FSx for Windows File Server file system.

**C.** Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3. Schedule AWS
DataSync tasks to transfer the data to the FSx for Windows File Server file system.

**D.** Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS DataSync
agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file
system.

**E.** Order an AWS Snowball Edge Storage Optimized device. Connect the device to the on-premises network.
Copy data to the device by using the AWS CLI. Ship the device back to AWS for import into Amazon S3.
Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 451

**Answer:** **BCF**

**Explanation:**

The correct answer is BCF. Here's why:

**B.** Creation of an Amazon RDS DB instance and configuring the scheduled maintenance window: The
company is responsible for the configuration and operation of their RDS DB instances, including tasks such as
creating the instance, setting parameters, and scheduling maintenance windows. Amazon handles the
underlying infrastructure, but the configurations are managed by the user.
https://docs.aws.amazon.com/rds/latest/userguide/USER_CreateDBInstance.html

**C.** Configuration of additional software components on Amazon ECS for monitoring, patch management,
log management, and host intrusion detection: While ECS manages container orchestration, responsibilities
like monitoring the containers and host, patching software within the containers, implementing log
management solutions, and setting up host intrusion detection systems fall under the company's operational
control. AWS provides tools and services (like CloudWatch, Systems Manager, and security agents), but the
user configures and manages them within their ECS environment.
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/monitoring-cloudwatch.html

**F.** Encryption of the data that moves in transit through Direct Connect: While Direct Connect provides a
dedicated network connection, securing data in transit is the customer's responsibility. The company must
implement encryption mechanisms (e.g., VPN over Direct Connect, or application-level encryption) to protect
sensitive data moving between their on-premises environment and AWS. AWS handles the physical
connection, but the security protocols are implemented and managed by the customer.
https://aws.amazon.com/directconnect/security/
Here's why the other options are incorrect:

**A.** Management of the Amazon RDS infrastructure layer, operating system, and platforms: AWS manages
the underlying infrastructure, operating system, and platform for RDS under the shared responsibility model.

**D.** Installation of patches for all minor and major database versions for Amazon RDS: AWS handles the
patching of the RDS database engine itself. While the customer schedules when these updates are applied
within the maintenance window they configure, the actual patching is performed by AWS.

**E.** Ensure the physical security of the Amazon RDS infrastructure in the data center: AWS is responsible for
the physical security of the data centers where the RDS infrastructure resides.

---

## Question 452

**Answer:** **B**

**Explanation:**

The best solution is B: Copy the code into an AWS Lambda function with 1 GB of memory and create an
Amazon EventBridge scheduled rule to run the code each hour. This is because Lambda is a serverless
compute service that allows you to run code without provisioning or managing servers.
Here's why the other options are not as suitable:

**A:** While containerizing the job and running it on Fargate is a viable option, it is more complex and likely more
expensive than using Lambda for such a short, infrequent task. Fargate is better suited for continuous or longrunning applications. This adds complexity and cost compared to the event-driven approach.

**C:** Containerizing the job and installing the container in the existing AMI is overly complex and does not
optimize costs. The EC2 instance still needs to be running constantly, even though the job only runs for 10
seconds each hour. It does not fully leverage serverless technologies.

**D:** Stopping and restarting the EC2 instance will add latency to the job and is not cost-effective because you
will be charged for the EC2 instance even when it is stopped. Also, stopping/starting an EC2 instance takes a
few minutes, exceeding the 10-second runtime.
Why Lambda and EventBridge are Ideal:
Cost Optimization: Lambda's pricing model is based on the actual compute time your function consumes.
Since the job only runs for 10 seconds per hour, the cost will be minimal. You are not paying for idle time.
Scalability: Lambda automatically scales to handle the workload. If the job becomes more frequent or
requires more resources in the future, Lambda can handle the increased load.
Simplicity: Lambda functions are easy to deploy and manage. You can easily copy the code into a Lambda
function and configure the required memory and timeout.
Event-Driven: Amazon EventBridge is a serverless event bus that allows you to schedule events to trigger
Lambda functions. This provides a simple and reliable way to run the job every hour. It is directly integrated
with Lambda, making configuration straightforward.
Suitable for short, intermittent workloads: Lambda is specifically designed for tasks that run for a short
duration and are triggered periodically, aligning perfectly with the question’s requirements.
Lambda's execution model and cost structure are perfect for this use case.

---

## Question 453

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS Backup with a compliance mode vault lock, fulfilling the
requirements for data immutability and retention.
AWS Backup is a centralized backup service that makes it easy to automate and manage backups across
various AWS services, including EC2 and S3. The key requirement is immutable backups with a fixed retention
period.
AWS Backup Vault Lock is a feature that helps you enforce a write-once-read-many (WORM) model on your
backups. This ensures that backups cannot be deleted or altered during a specified retention period, adhering
to compliance and regulatory needs. There are two modes for Vault Lock: Governance and Compliance.
Governance mode allows privileged users to delete the lock before the retention period expires under certain
conditions. This doesn't fully meet the 'must not alter the files' requirement.
Compliance mode, however, is more restrictive. Once locked in compliance mode, even privileged users
cannot reduce the retention period or delete the lock. This ensures immutability and adherence to retention
policies.

Therefore, using AWS Backup with a Compliance mode Vault Lock directly fulfills the company's
requirements for immutability and retention, across both EC2 and S3, making option D the most suitable
solution. A backup plan defines what resources to back up, when to back up, and how long to retain backups,
making it an integral component of the solution.

**Option A** (Governance mode) does not guarantee immutability, failing the 'must not alter the files' criterion.

**Option B** (Amazon Data Lifecycle Manager) is primarily for EBS snapshots and doesn't directly address S3
bucket backups with retention requirements. **Option C** (S3 File Gateway) is designed for on-premises
applications to store data in S3 and doesn't provide the enforced immutability provided by Vault Lock.
Here are some authoritative links:
AWS Backup: https://aws.amazon.com/backup/
AWS Backup Vault Lock: https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html
AWS Backup Plans: https://docs.aws.amazon.com/aws-backup/latest/devguide/whatis-backup-plans.html

---

## Question 454

**Answer:** **C**

**Explanation:**

The best solution is C, using Workload Discovery on AWS. Here's why:
Workload Discovery on AWS (**Option C**) is specifically designed to automatically discover and map
application components and their relationships across AWS accounts and Regions. It generates architecture
diagrams, providing a visual representation of the infrastructure. This automation directly addresses the
problem of undocumented resources and relationships, minimizing manual effort. It's the most operationally
efficient way to map existing workloads and build architecture diagrams in a multi-account, multi-region
environment.

Why other options are less suitable:
AWS Systems Manager Inventory (**Option A**): While Systems Manager Inventory collects metadata about
managed instances, it primarily focuses on software, patches, and configuration details. It does not
automatically map relationships between different AWS services or generate architecture diagrams.
Generating a "map view" from this data is possible but requires significant manual configuration and scripting,
making it less efficient.
AWS Step Functions (**Option B**): Step Functions orchestrates workflows, but it doesn't inherently discover
resources or map relationships. Building architecture diagrams manually defeats the purpose of operational
efficiency. This approach requires writing custom code to gather workload details and then manually create
diagrams, which is time-consuming and error-prone.
AWS X-Ray (**Option D**): X-Ray traces requests as they move through an application, providing insights into
performance bottlenecks and dependencies within an application. It's not designed to discover and map the
overall infrastructure landscape or generate architecture diagrams across multiple accounts and Regions. Its
focus is on application performance analysis, not infrastructure mapping.
In conclusion, Workload Discovery on AWS offers the most automated and efficient solution for discovering
resources, mapping relationships, and generating architecture diagrams, directly addressing the solutions
architect's need to understand undocumented workloads across a complex AWS environment.

---

## Question 455

**Answer:** **BDF**

**Explanation:**

The correct answer is BDF because they provide a comprehensive approach to budget control and resource
provisioning prevention using AWS Budgets, IAM roles, and budget actions.
B - Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the
required AWS accounts: AWS Budgets is a service designed for cost management and budget tracking. It
allows setting custom budgets for individual AWS accounts, providing a granular control over spending. The
Billing dashboards are the logical location to configure these budgets. https://aws.amazon.com/aws-costmanagement/aws-budgets/
D - Create an IAM role for AWS Budgets to run budget actions with the required permissions: AWS Budgets
requires specific permissions to take actions when a budget threshold is met. Using an IAM role is the
recommended security best practice because it allows granting only the necessary permissions to the AWS
Budgets service to perform actions without using long-term credentials. This ensures least privilege access.
https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-actions.html
F - Add an alert to notify the company when each account meets its budget threshold. Add a budget action
that selects the IAM identity created with the appropriate service control policy (SCP) to prevent
provisioning of additional resources: This step involves setting up notifications through AWS Budgets when
the threshold is reached. Crucially, it also creates a budget action. SCPs are a powerful feature within AWS
Organizations that enable central control over the AWS accounts in an organization. By linking a budget
action to an IAM identity, and defining an appropriate SCP, provisioning of additional resources can be
blocked once the budget threshold is reached.
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
A is incorrect because the Cost and Usage Reports section is primarily for generating detailed reports about
your AWS costs and usage, and not for directly setting budget amounts.
C is incorrect because creating an IAM user for AWS Budgets to run budget actions is not a recommended
security best practice. IAM roles are preferred over IAM users in this scenario. Using a user requires managing
long-term credentials which adds unnecessary risk.
E is incorrect because config rules are not a mechanism to prevent provisioning of additional resources, and
they do not directly integrate with budget actions to stop resource provisioning. SCP's, not config rules, are
used within Organizations to control what services and actions are allowed within member accounts.

---

## Question 456

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Create a backup plan by using AWS Backup. Configure cross-Region
backup to the second Region for the EC2 instances.

Here's why:
AWS Backup: AWS Backup is a fully managed backup service that centralizes and automates data protection
across AWS services, including EC2. This addresses the requirement of central management from one AWS
account.
Cost-Effectiveness: AWS Backup provides a cost-optimized solution for creating and managing backups. You
only pay for the backup storage and the data transferred during backup and restore operations. Compared to
running a separate replication solution or maintaining a full DR environment, this is generally more
economical.
Cross-Region Backup: AWS Backup supports cross-Region backup, allowing you to copy your EC2 instance
backups (including EBS volumes) to a second AWS Region for disaster recovery purposes. This meets the
requirement of backing up to a second Region.
Recovery Point Objective (RPO) and Recovery Time Objective (RTO): You can configure backup frequency
(RPO) and restore capabilities to meet your business requirements. The AWS Backup console simplifies the
recovery process.
Let's analyze why the other options are less suitable:

**A.** Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region.
Configure data replication. This option involves maintaining a hot or warm DR site with provisioned EC2
instances, which is the most expensive approach. While it provides a low RTO, it incurs significant costs for
idle resources.

**B.** Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy
the snapshots to the second Region periodically. While EBS snapshots can be used for backup, this approach
requires manual scripting and management of snapshot copies across Regions. It lacks the centralized
management and automation provided by AWS Backup. It's also more complex to restore and maintain
consistency.

**D.** Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data
from the source Region to the second Region. Similar to option A, this approach involves running EC2
instances continuously in the second Region, making it costly. AWS DataSync is primarily for migrating data,
not continuous backup.

---

## Question 457

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
Why AWS Transfer Family?
AWS Transfer Family is the correct choice because it is a fully managed service that directly supports the
AS2 protocol, which is a core requirement of the question. AS2 is a secure and widely adopted protocol for
EDI (Electronic Data Interchange) over the internet, frequently used for B2B data transfer. AWS Transfer
Family simplifies the setup and management of AS2 file transfers.
Why AWS Lambda for IdP Authentication?
AWS Lambda is a serverless compute service that allows you to run code without provisioning or managing
servers. In this scenario, a Lambda function can be used to integrate with the company's existing identity
provider (IdP). The Lambda function would be responsible for authenticating users based on the IdP's
authentication mechanism (e.g., SAML, OAuth) before granting them access to transfer data. Lambda
functions provide the flexibility needed to connect to any custom or third-party IdP.

Why other options are incorrect:
A (AWS DataSync): AWS DataSync is designed for moving large amounts of data between on-premises
storage and AWS storage services. It does not inherently support AS2 or integration with external IdPs for
user-level authentication within the application.
B (Amazon AppFlow): Amazon AppFlow is a fully managed integration service that enables you to securely
transfer data between SaaS applications and AWS services. While AppFlow can handle data transfer, it
doesn't natively support AS2 and the need for custom IdP integration is better served by Lambda.
D (AWS Storage Gateway, Amazon Cognito): AWS Storage Gateway connects on-premises applications to
AWS cloud storage. While useful for hybrid cloud setups, it is not directly involved in data transfer to
manufacturers or the application's user authentication flow. While Amazon Cognito is for Identity and Access
Management, using Cognito identity pools in this scenario does not fit because the company already has an
existing IdP and wants to leverage that for authentication. Cognito identity pools are typically used for
scenarios where you want to authenticate users directly against AWS or a social identity provider, rather than
integrating with an existing corporate IdP and also doesn't solve the AS2 transfer protocol requirement.

In summary, AWS Transfer Family addresses the AS2 protocol requirement directly, and AWS Lambda allows
flexible integration with the company's existing IdP for user authentication.
Supporting links:

AWS Transfer Family: https://aws.amazon.com/transfer/
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 458

**Answer:** **BC**

**Explanation:**

Here's a detailed justification for why the correct answer is B (AWS Lambda) and C (Amazon RDS), along with
explanations of why the other options are less suitable, and authoritative links for further reading.
The problem states that a REST API needs to be designed for a cash payback service requiring 1 GB of
memory, 2 GB of storage, and a relational database. The goal is to choose the combination of AWS services
that meets these requirements with the least administrative overhead.

**B.** AWS Lambda: AWS Lambda is a serverless compute service. It allows you to run code without provisioning
or managing servers. Lambda functions can be configured with up to 10 GB of memory and execution times up
to 15 minutes. The serverless nature drastically reduces administrative overhead compared to managing EC2
instances. Using Lambda for the API's compute element aligns with the principle of minimizing operational
burden. It is a suitable option for the required memory allocation.

**C.** Amazon RDS: Amazon Relational Database Service (RDS) is a managed database service that simplifies
setting up, operating, and scaling a relational database in the cloud. RDS supports various database engines
(MySQL, PostgreSQL, MariaDB, Oracle, SQL Server). Since the requirement specifically mentions a relational
database format, RDS is the most logical and efficient choice. RDS offers automatic backups, patching, and
scaling options, which significantly reduces the administrative overhead compared to self-managing a
database on EC2.

Why other options are incorrect:

**A.** Amazon EC2: While EC2 instances can certainly meet the memory and storage requirements, managing
them involves significantly more administrative overhead. You'd need to provision, configure, patch, and scale
the instances yourself. Also, you'd need to setup the relational database yourself on this EC2 instance adding
more to the administrative overhead, going against the goal of "least administrative effort".

**D.** Amazon DynamoDB: DynamoDB is a NoSQL database service. The problem states that the data needs to be
in a relational format. DynamoDB does not satisfy this fundamental requirement.

**E.** Amazon Elastic Kubernetes Service (Amazon EKS): EKS is a container orchestration service used for
managing and deploying containerized applications. While you could use EKS to run a containerized
application meeting the resource requirements, it introduces considerably more complexity and
administrative overhead compared to Lambda. EKS requires managing the Kubernetes cluster itself, including
nodes, networking, and scaling. It's overkill for this specific scenario focused on minimal administration.

In summary, Lambda handles the compute workload serverlessly, and RDS provides a managed relational
database. This combination minimizes administrative tasks and aligns with the problem's objectives.

---

## Question 459

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:
The scenario requires a centralized way to track EC2 costs across all accounts in an AWS Organization,
grouped by department tag. The solution must be operationally efficient and leverage Cost Explorer, which
the accounting team already has access to.

**Option A** is correct because it centralizes the configuration and reporting within the Organizations
management account. Activating a user-defined cost allocation tag named "department" in the management
account ensures that all accounts in the organization can utilize this tag for cost tracking. User-defined tags
are suitable since the tagging policy is already adding the 'department' tag. Creating one cost report in Cost
Explorer, grouping by the "department" tag and filtering by EC2, provides a consolidated view of EC2 costs
per department across all accounts. This approach fulfills the requirement for a single report and centralized
view.

**Option B** is incorrect because AWS-defined cost allocation tags are specific AWS-managed tags, not ones the
user defines like the 'department' tag in the company's tagging policy.**Option C** is incorrect because activating
cost allocation tags from each member account would be extremely inefficient and would require the
accounting team to create and manage multiple cost reports, one per account or a combined report requiring
more effort to set up. Centralizing the tag activation makes operations significantly easier.**Option D** suffers
from the same problem as C. Using an AWS-defined tag when a custom 'department' tag already exists is
inappropriate.
The critical element here is that the cost allocation tags must be activated from the management account to
apply to all accounts in the organization, and using the user-defined tag is appropriate since the company

already has a tagging policy for the 'department' tag. This allows for centralized reporting through Cost
Explorer as required.
Supporting Links:
AWS Cost Allocation Tags
AWS Organizations Billing and Cost Management
AWS Cost Explorer

---

## Question 460

**Answer:** **C**

**Explanation:**

The correct answer is C. Create Amazon AppFlow flows to transfer the data securely from Salesforce to
Amazon S3.

Here's a detailed justification:
Amazon AppFlow is a fully managed integration service that enables secure data transfer between SaaS
applications like Salesforce and AWS services like S3. AppFlow is designed to address exactly this type of
integration scenario. It offers built-in security features and is specifically designed for data transfer between
SaaS applications and AWS.
Why AppFlow is ideal:
Native Integration: AppFlow natively integrates with Salesforce and S3, simplifying the configuration and
data transfer process. It handles the complexities of API authentication and authorization.
Security: AppFlow supports encryption at rest using AWS KMS customer managed keys (CMKs), fulfilling the
requirement for data encryption. It also ensures data is encrypted in transit using TLS. You can configure the
flow to use a CMK for encrypting the data stored during the transfer process.
Managed Service: Being a fully managed service, AppFlow handles the underlying infrastructure, scaling, and
maintenance, reducing operational overhead. You don't need to manage servers or code.
No-Code/Low-Code: AppFlow provides a visual interface to create flows without writing custom code,
accelerating the development process.

Why other options are less suitable:

**A.** AWS Lambda functions: While Lambda functions can be used for data transfer, it would require writing
custom code to handle Salesforce API authentication, data extraction, transformation, and loading into S3.
Furthermore, you would need to manage encryption, security, and scaling on your own. This is more complex
than using AppFlow.

**B.** AWS Step Functions workflow: Step Functions can orchestrate multiple Lambda functions or other tasks.

But using it directly for data transfer between Salesforce and S3 is overly complex. The underlying data
transfer still requires Lambda function development with the same drawbacks as option A.

**D.** Create a custom connector for Salesforce: Developing a custom connector is a significant undertaking
that requires deep expertise in Salesforce API and AWS services. AppFlow essentially is the pre-built
connector that handles this complexity. It's unnecessary to create a connector from scratch.

In summary, Amazon AppFlow provides a secure, efficient, and managed solution for transferring data from
Salesforce to S3 with encryption at rest using KMS CMKs and encryption in transit, perfectly aligning with the
company's requirements.

---

## Question 461

**Answer:** **B**

**Explanation:**

The optimal solution for minimizing latency for a globally distributed mobile gaming app utilizing TCP and
UDP traffic with EC2 instances, DynamoDB, and an Auto Scaling group is to use AWS Global Accelerator with
a Network Load Balancer (NLB).

Here's why:
AWS Global Accelerator: Global Accelerator is specifically designed to direct traffic to optimal endpoints
across the AWS global network, reducing latency for users worldwide. It leverages the AWS backbone
network, known for its speed and reliability. https://aws.amazon.com/global-accelerator/
Network Load Balancer (NLB): NLBs are ideal for handling TCP and UDP traffic at extremely high throughput
and low latency. Unlike Application Load Balancers (ALBs), NLBs operate at Layer 4 (transport layer), making
them more efficient for routing non-HTTP traffic. Gaming applications frequently use UDP for real-time data
transmission, making NLB a natural fit.

ALB Incompatibility: Application Load Balancers are designed for HTTP/HTTPS traffic. While they are
excellent for web applications, they cannot handle raw TCP or UDP traffic directly without modification,
making them inappropriate for the stated needs.
CloudFront Limitations: While CloudFront excels at caching static content, it is not designed for real-time
bidirectional communication like gaming applications, and does not support UDP. CloudFront is better suited
for distributing game assets like textures and updates, not for handling the real-time game communication
traffic itself.
Direct Integration: Global Accelerator offers seamless integration with NLBs. It can automatically route
traffic to healthy instances behind an NLB in multiple Availability Zones or even Regions.
Lowest Latency: Global Accelerator ensures that users are routed to the nearest healthy endpoint based on
their geographic location and network conditions, resulting in the lowest possible latency. The NLB provides
the necessary handling for the TCP and UDP traffic from the application.

---

## Question 462

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution:
The problem describes a scenario where an EC2 instance hosting an application struggles to keep up with
processing customer orders and writing them to an Aurora database during peak traffic. The goal is to reliably
write orders to the database as quickly as possible, even under heavy load.

**Option B** proposes using Amazon SQS as a buffer for incoming orders. SQS is a fully managed message
queuing service that allows decoupling the application from the database. Instead of writing directly to the
database, the EC2 instance quickly writes orders to the SQS queue. This immediately frees up the EC2
instance to handle more incoming requests.
The solution further suggests using an Auto Scaling group of EC2 instances behind an Application Load
Balancer (ALB). These EC2 instances are responsible for reading messages from the SQS queue and
processing them into the Aurora database. The ALB distributes the workload across these instances, ensuring
high availability and scalability. The Auto Scaling group automatically adjusts the number of EC2 instances
based on the queue length or other performance metrics, dynamically scaling to meet demand.

This approach effectively decouples the order receiving and order processing components. SQS acts as a
buffer, preventing the database from being overwhelmed during peak traffic. The Auto Scaling group allows
for horizontal scaling of the processing capacity, ensuring that orders are processed and written to the
database as quickly as possible. The ALB ensures that the processing load is evenly distributed among the
available EC2 instances.

**Option A** is incorrect because SNS is a publish/subscribe service, better suited for broadcasting notifications
to multiple subscribers. It doesn't provide the buffering and guaranteed delivery that SQS offers. Directly
subscribing the database endpoint to an SNS topic is also generally not recommended due to potential issues
with high message volume and database overload.

**Option C** is also incorrect for similar reasons as option A. Using SNS doesn't offer the benefits of queueing
and guaranteed delivery that SQS provides.

**Option D** introduces unnecessary complexity and relies on reactive scaling. Waiting for the EC2 instance to
reach CPU threshold limits before queuing orders adds latency and doesn't proactively address the problem.
Scheduled scaling can be helpful in anticipating traffic patterns, but Auto Scaling based on queue length
offers a more dynamic and responsive approach. Moreover, it ties the queuing decision to the original EC2
instance, defeating the purpose of decoupling.

Therefore, option B provides the most robust and scalable solution for reliably writing orders to the database
as quickly as possible under high traffic.

---

## Question 463

**Answer:** **C**

**Explanation:**

The question requires a cost-effective solution for processing IoT sleep data from mattresses, given
constraints on memory, processing time, and data volume. AWS Lambda emerges as the most suitable option
due to its serverless nature and cost model.
Lambda functions are billed based on execution time and memory consumed. Given the data processing
requirements of 1 GB of memory and a 30-second execution time, a Lambda function can readily handle this
workload. The small data size (2MB per mattress per night) is easily accommodated by Lambda.
AWS Glue (using either Scala or PySpark) and Amazon EMR with Spark are designed for large-scale data

processing. These services involve starting and maintaining clusters, which incurs higher costs even for small
datasets. While they offer powerful data transformation capabilities, they are overkill for this scenario. The
overhead of managing a Glue or EMR cluster, even briefly, significantly increases costs compared to Lambda.
Python is a perfectly acceptable language for Lambda. The prompt stated that the results need to be
available as soon as possible. While there is "cold start" latency with Lambda, the ability to automatically
trigger processing upon data arrival into S3 and the speed of Python are sufficient in this case.

Therefore, AWS Lambda provides the most cost-effective solution because it avoids the overhead of cluster
management, scales automatically, and only charges for actual execution time and memory consumed.
Supporting Links:
AWS Lambda Pricing: https://aws.amazon.com/lambda/pricing/
AWS Glue Pricing: https://aws.amazon.com/glue/pricing/
Amazon EMR Pricing: https://aws.amazon.com/emr/pricing/

---

## Question 464

**Answer:** **A**

**Explanation:**

The correct answer is A. Converting the existing RDS for PostgreSQL Single-AZ instance to a Multi-AZ
deployment provides high availability without requiring application code changes. RDS Multi-AZ
synchronously replicates data to a standby instance in a different Availability Zone. If the primary instance
fails, RDS automatically fails over to the standby instance. The connection endpoint remains the same,
eliminating the need for application modifications.

**Option B** involves creating a new Multi-AZ deployment and restoring a snapshot. While functional, it
introduces a period of downtime during the restoration process, which isn't ideal for minimizing downtime.

**Option C**, using a read replica and Route 53, is unsuitable because read replicas are asynchronous and
primarily for read scaling, not high availability. Route 53 weighted records are inappropriate for database
failover because they don't guarantee data consistency or transactional integrity. Furthermore, the
application needs to be able to handle potential read inconsistencies and direct writes to the appropriate
database.

**Option D**, using EC2 Auto Scaling and Route 53, is not directly applicable to RDS managed databases. RDS is
a managed service that abstracts away the underlying infrastructure management. Also, directly managing
the database replication across instances in an Auto Scaling group is more complex than leveraging the built-

in Multi-AZ feature of RDS.

Therefore, Multi-AZ deployment in RDS provides the simplest and most efficient approach to achieve high
availability for the database without application code changes.
Refer to the AWS documentation for more information on RDS Multi-AZ deployments:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

---

## Question 465

**Answer:** **C**

**Explanation:**

The requirement is to provide simultaneous write access to multiple EBS volumes from multiple EC2 Nitrobased instances for high availability. Amazon EBS Multi-Attach allows attaching one EBS volume to multiple
EC2 instances within the same Availability Zone.

**Option C**, using io2 EBS volumes with EBS Multi-Attach, is the correct solution because io2 volumes are
specifically designed to support EBS Multi-Attach. Other volume types like gp2, gp3, and st1 either don't
support Multi-Attach at all or have limitations when used with it. io2 volumes also offer the highest IOPS
(Input/Output Operations Per Second) performance, which can be important when multiple instances are
writing to the same volume concurrently, as this increases the demand on I/O.
Options A, B and D are incorrect. gp2 and gp3 volumes support Multi-Attach, however, it is not advisable for
high-availability applications that require concurrent write access because io2 is optimized for this use case.
The st1 volume type does not support the EBS Multi-Attach feature. The need for concurrent writes indicates
a requirement for high-performance shared storage, and io2 volumes are designed to meet such needs by
offering high IOPS and low latency.
Refer to the AWS documentation on EBS Multi-Attach and EBS volume types for more information:
EBS Multi-Attach
EBS Volume Types

---

## Question 466

**Answer:** **A**

**Explanation:**

The best way to achieve high availability for a stateless two-tier application running on EC2 with an RDS
Multi-AZ DB instance is to distribute the EC2 instances across multiple Availability Zones (AZs) and use a load
balancer to distribute traffic.

**Option A** is the correct answer because it implements this strategy. Multi-AZ EC2 Auto Scaling ensures that
EC2 instances are launched and maintained in multiple AZs. If an AZ fails, Auto Scaling automatically
launches new instances in a healthy AZ. The Application Load Balancer (ALB) distributes traffic across the
healthy EC2 instances in all available AZs. This setup ensures that the application remains available even if
one or more AZs experience an outage.

**Option B**, while providing a backup strategy, doesn't provide immediate high availability. Snapshots can be
used for disaster recovery, but restoring from snapshots takes time, causing application downtime.

**Option C**, using Route 53 latency-based routing, improves performance by directing users to the closest
region but doesn't inherently guarantee high availability within a single region where the application is
currently deployed.

**Option D**, configuring Route 53 rules combined with a Multi-AZ ALB is incomplete. While the Multi-AZ ALB is a
good start, it needs the backing EC2 instances also deployed across multiple AZs using something like Auto
Scaling for full high availability within a region. Route 53 is best utilized for global failover between regions.

Therefore, the combination of Multi-AZ EC2 Auto Scaling and an Application Load Balancer offers the most
robust solution for high availability in a single AWS Region.
Relevant links for further reading:
AWS Auto Scaling: https://aws.amazon.com/autoscaling/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
AWS Regions and Availability Zones: https://aws.amazon.com/about-aws/global-infrastructure/

---

## Question 467

**Answer:** **B**

**Explanation:**

The correct answer is B. Turn on discount sharing from the Billing Preferences section of the account
console in the company's Organizations management account.

Here's why:
AWS Organizations Discount Sharing: AWS Organizations allows for centralized management and billing of
multiple AWS accounts. One key benefit is discount sharing, where savings plans (like Compute Savings
Plans) purchased by one account can be applied across all accounts within the organization. This maximizes
the utilization of the savings and reduces overall costs.
Centralized Management Account: Discount sharing is configured at the management account (formerly
known as the master account) level within AWS Organizations, not at the individual member account level.
The management account acts as the central point for managing the organization and its billing.
Turning on Discount Sharing: Within the management account's Billing Preferences, there's a setting to
enable savings plans and reserved instance sharing. By activating this, the unused portion of the Compute
Savings Plan's commitment from the member account can be applied to compute usage in other accounts
within the organization.

Why other options are incorrect:

**A:** Attempting to enable discount sharing within the member account that purchased the savings plan won't
work. The setting exists solely in the management account.

**C:** While migrating additional workloads could utilize more of the compute power, it might not be feasible or
strategically aligned with the company's architecture. Also, it does not address the issue of sharing the saving
if the loads are in the member account that holds the saving plan. Discount sharing is a more direct and
efficient solution.

**D:** Savings Plans cannot be sold on the Reserved Instance Marketplace. This Marketplace is for selling
Reserved Instances, not Savings Plans.

In summary, leveraging the discount sharing feature of AWS Organizations allows the company to maximize
the benefits of its Compute Savings Plan by automatically applying unused savings to other accounts within
the organization. This is configured in the Organizations management account's billing preferences.

---

## Question 468

**Answer:** **B**

**Explanation:**

The correct answer is B because it aligns perfectly with the requirements of creating a REST API frontend for
accessing backend microservices hosted in private subnets.
Here's a breakdown of the justification:
REST API Requirement: The problem explicitly states that the application must expose REST APIs. Amazon
API Gateway can be configured to create RESTful APIs.
Containerization in Private Subnets: The backend services are hosted in containers within private VPC
subnets. This means they are not directly accessible from the public internet. Amazon ECS is suitable to
manage the containers.
Private VPC Link: To securely access the services in the private subnets from API Gateway, a Private VPC Link
is the appropriate solution. It establishes a private connection between API Gateway and the ECS services,
without exposing them to the internet. This improves security and reduces attack surface.
Security Groups vs. VPC Link: While security groups are important for controlling traffic within the VPC, they
don't create a secure, direct connection between API Gateway and resources within the private subnet. VPC
links are designed specifically for this purpose.
WebSocket APIs: WebSocket APIs are used for real-time, bidirectional communication, which is not a
requirement in this scenario. REST APIs are appropriate for a simple request-response model that is suitable
for catalog search.

Therefore, designing a REST API with API Gateway, hosting the application in Amazon ECS in private subnets,
and creating a private VPC link is the solution that will meet all requirements.
Further Reading:
Amazon API Gateway: https://aws.amazon.com/api-gateway/
Amazon ECS: https://aws.amazon.com/ecs/
API Gateway Private Integration:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html

---

## Question 469

**Answer:** **C**

**Explanation:**

The correct answer is C: Use S3 Lifecycle rules to transition objects from S3 Standard to S3 IntelligentTiering. Here's why:
The problem requires optimizing S3 costs for unpredictable access patterns. S3 Intelligent-Tiering is
designed for this exact scenario. It automatically moves data between frequent, infrequent, and archive
access tiers based on usage patterns, with no operational overhead and no retrieval fees when accessing the
data.
S3 Lifecycle rules enable automated transitioning of objects between storage classes based on defined
criteria. This allows moving objects from S3 Standard (a higher-cost, frequently accessed tier) to S3
Intelligent-Tiering without manual intervention. The lifecycle rule dictates the transition, ensuring that data is
placed in the appropriate tier based on its access pattern.

**Option A**, S3 Replication, is primarily for creating copies of data in different regions or buckets for disaster
recovery or data sovereignty. It doesn't directly address cost optimization based on access patterns within a
single bucket.

**Option B**, transitioning to S3 Standard-IA, is suitable for infrequently accessed data, but if the access pattern
is unpredictable and the data sometimes needs to be accessed frequently, using Standard-IA will incur
retrieval charges every time the infrequently accessed data is accessed, making it more expensive. S3
Intelligent-Tiering is preferable because it automatically adapts to fluctuating access patterns.

**Option D**, using S3 Inventory, helps identify infrequently accessed objects, but doesn't automatically
transition them. This still requires additional steps to move the data and introduces a manual intervention
component, while S3 Lifecycle rules automatically does the transition. S3 Inventory works well with S3
Lifecycle, and allows reporting on the success or failure of applying rules.

In summary, S3 Intelligent-Tiering paired with Lifecycle rules offers the most effective and automated
solution for cost optimization when dealing with unpredictable data access patterns on S3, ensuring that
frequently accessed data is readily available while minimizing storage costs for infrequently accessed data.

---

## Question 470

**Answer:** **D**

**Explanation:**

The correct answer is D. Create an egress-only internet gateway and make it the destination of the subnet's
route table.

Here's why:
The scenario requires EC2 instances with IPv6 addresses to initiate outbound connections to the internet
while preventing inbound connections from the internet. A standard Internet Gateway (IGW) facilitates both
inbound and outbound traffic, which violates the security policy. A NAT Gateway is designed for IPv4
addresses, providing a mechanism for instances in a private subnet to connect to the internet. This is not
suitable for instances with IPv6 addresses. A Virtual Private Gateway (VGW) is used to connect a VPC to a
corporate data center using VPN or Direct Connect, which is irrelevant to this scenario.
An egress-only internet gateway (EIGW) is specifically designed for IPv6. It allows instances in a VPC to
initiate outbound connections over IPv6 to the internet but prevents the internet from initiating an IPv6
connection with the instances. By associating the EIGW with the subnet's route table as the destination for
IPv6 traffic (::/0), outbound traffic from the EC2 instances will be routed through the EIGW, while preventing
unsolicited inbound traffic. This approach aligns perfectly with the company's security policy.

Therefore, the EIGW fulfills the requirement of enabling outbound-only IPv6 internet access for the EC2
instances while adhering to the specified security constraints.
Relevant Documentation:
Egress-Only Internet Gateway: https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internetgateway.html

---

## Question 471

**Answer:** **C**

**Explanation:**

The correct answer is C. Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all
route tables in the VPC.

Here's a detailed justification:
The company needs to minimize costs and ensure that S3 traffic doesn't traverse the internet. A VPC endpoint
allows secure and private connectivity between resources within your VPC and supported AWS services,
including S3, without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect
connection. This addresses the requirement of avoiding internet traffic.

Gateway endpoints are specifically designed for S3 and DynamoDB. They are cost-effective because they
don't incur data transfer charges within the same AWS Region. The question prioritizes cost minimization,
making the gateway endpoint a strong candidate.
Creating a gateway VPC endpoint and associating it with all route tables in the VPC ensures that all
containerized applications within the VPC automatically route their S3 traffic through the endpoint. This
achieves the desired private connectivity to S3 for all workloads.

**Option A** (S3 Intelligent-Tiering) optimizes storage costs based on access patterns but doesn't address the
requirement of keeping traffic within the AWS network. It's about storage tier optimization, not network
routing.

**Option B** (S3 Transfer Acceleration) is designed to speed up data transfers to S3 using CloudFront's globally
distributed edge locations. While it can improve performance, it's not essential for keeping traffic private and
can potentially increase costs.

**Option D** (Interface endpoint for S3) also provides private connectivity to S3, however, it's based on AWS
PrivateLink, which can incur hourly and data processing charges. This is less cost-effective than a gateway
endpoint, which has no hourly or data processing fees for S3 traffic within the same Region. Since the
problem emphasizes cost minimization, the gateway endpoint is the better choice. Interface endpoints are
also more complex to manage and are not generally the preferred method for S3 access within a VPC unless
very specific security requirements necessitate them. Gateway endpoints automatically scale horizontally to
handle network throughput.

Therefore, a gateway VPC endpoint provides a cost-effective and simple solution for ensuring private S3
connectivity within the VPC, fulfilling both the cost and security requirements.
Reference Links:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
Interface VPC Endpoints (AWS PrivateLink): https://docs.aws.amazon.com/vpc/latest/userguide/vpcendpoints-interface.html

---

## Question 472

**Answer:** **A**

**Explanation:**

The correct answer is A: Configure Amazon DynamoDB Accelerator (DAX) for the new messages table and

update the code to use the DAX endpoint. Here's why:
DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB. Its
primary purpose is to reduce read latency for frequently accessed data, making it ideal for latency-sensitive
applications like chat applications. DAX sits in front of DynamoDB and caches the results of read requests.
Subsequent read requests for the same data are served directly from the cache, bypassing DynamoDB and
resulting in significantly lower latency (often measured in microseconds).

**Option A** requires minimal application changes because it involves only updating the application to use the
DAX endpoint instead of directly connecting to DynamoDB for reads. This minimizes the development effort
and disruption to existing code. DAX automatically manages cache invalidation and synchronization with
DynamoDB, ensuring data consistency.

**Option B**, adding DynamoDB read replicas, is not as suitable. While read replicas can help offload read traffic,
they introduce eventual consistency. This means that reads from the replica might not immediately reflect the
latest writes. For a chat application where users expect to see new messages instantly, eventual consistency
is unacceptable. Furthermore, managing read replicas and ensuring failover can be more complex than using
DAX.

**Option C**, doubling read capacity units, may improve read throughput but doesn't address latency as
effectively as DAX. Increasing capacity increases the resources available for read operations but still involves
network latency and the inherent overhead of querying DynamoDB. DAX, by caching frequently accessed data
in memory, provides a much lower latency. Additionally, simply doubling read capacity might lead to increased
costs without necessarily achieving the desired low latency.

**Option D**, adding Amazon ElastiCache for Redis, could provide low latency reads but would require significant
application changes. The application would need to implement caching logic, manage cache invalidation, and
handle synchronization between DynamoDB and Redis. This is a much more complex solution than using DAX.
It also introduces additional operational overhead for managing a separate caching cluster. DAX is purposebuilt for DynamoDB, so it offers better integration and requires significantly less development effort for the
application.

In summary, DAX offers the optimal balance of low latency, minimal application changes, and ease of
management for this use case.

---

## Question 473

**Answer:** **A**

**Explanation:**

The best solution to reduce costs while handling increasing website traffic for static content served from EC2
instances behind an ALB is option A: creating an Amazon CloudFront distribution.
CloudFront is a content delivery network (CDN) that caches website content at edge locations closer to users.
This significantly reduces latency and improves user experience. More importantly, it reduces the load on the
origin servers (EC2 instances), as CloudFront serves the cached static content directly to users without hitting
the EC2 instances. This reduces the compute resources needed to handle web traffic, resulting in decreased
EC2 instance utilization and thus lowers costs. CloudFront's global network and caching capabilities are
purpose-built for this scenario.

**Option B**, using ElastiCache, is not ideal for caching static content. ElastiCache is primarily used for caching
dynamic data that requires frequent updates, like database query results or session data. Connecting the ALB
to ElastiCache would require significant code changes and may not be as effective for caching static files as
CloudFront. Also, ElastiCache sits within the AWS region, so it does not have the benefit of edge locations.

**Option C**, AWS WAF, is for web application firewalls and not optimized for caching static content. While WAF
can provide some caching capabilities, its primary focus is protecting against web exploits, not content
delivery optimization. Caching within WAF would be less efficient and more costly than using CloudFront.

**Option D**, creating a second ALB in another region, primarily addresses reducing data transfer costs through
regional proximity but it increases the overall cost as there are additional instances, ALB infrastructure, and
more resources required to maintain the other region. It doesn't address the issue of caching static assets
directly.

In summary, CloudFront is the most cost-effective and efficient solution because it utilizes edge locations to
cache static content, reduces the load on the origin servers, and improves website performance.
Relevant Documentation:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Amazon ElastiCache: https://aws.amazon.com/elasticache/
AWS WAF: https://aws.amazon.com/waf/

---

## Question 474

**Answer:** **C**

**Explanation:**

The correct answer is C: Use AWS Transit Gateway to manage VPC communication in a single Region and

Transit Gateway peering across Regions to manage VPC communications.

Here's why:
AWS Transit Gateway (TGW): TGW simplifies network architecture by acting as a central hub to connect
multiple VPCs within a Region. Instead of creating numerous point-to-point VPC peering connections, you
connect each VPC to the TGW, significantly reducing administrative overhead and
complexity.https://aws.amazon.com/transit-gateway/
Transit Gateway Peering: To extend connectivity across AWS Regions, you can use Transit Gateway peering.
This allows TGWs in different Regions to establish a connection, enabling VPCs in one Region to communicate
with VPCs in another Region through the interconnected TGWs. This avoids the need for individual interregion VPC peering connections.
Least Administrative Effort: TGW and TGW peering together dramatically reduce the administrative burden
compared to managing a full mesh of VPC peering connections across multiple Regions. The number of
connections you need to manage grows linearly with the number of Regions when using TGW peering, as
opposed to exponentially when using VPC peering.

Why other options are incorrect:
A (VPC Peering): While VPC peering establishes connections between VPCs, managing a full mesh of VPC
peering connections across multiple Regions becomes extremely complex and administratively intensive as
the number of VPCs and Regions increases. It creates a complex web of connections to manage, which can be
prone to errors.
B (AWS Direct Connect Gateway): Direct Connect Gateway is used to connect on-premises networks to AWS,
not VPCs within AWS. While it can be part of a larger solution to connect on-premises and AWS, it's not
suitable for connecting VPCs in different regions directly and adds unnecessary complexity.
D (AWS PrivateLink): PrivateLink is designed to provide private connectivity to AWS services or services
hosted by other AWS customers. It's not meant for general VPC-to-VPC communication. Using it for this
purpose would be an inefficient and complex workaround. Furthermore, PrivateLink focuses on providing a
service, not interconnecting multiple VPCs for general communication.https://aws.amazon.com/privatelink/

---

## Question 475

**Answer:** **C**

**Explanation:**

The correct answer is C: Amazon Elastic File System (Amazon EFS) with the Standard storage class.

Here's why:
EFS and Mount Targets: EFS is designed to provide a shared file system that can be mounted concurrently
from multiple EC2 instances or containers across multiple Availability Zones (AZs) within a Region. This
directly addresses the requirement of providing a mount target in each AZ.
Durability and Availability: EFS stores data redundantly across multiple AZs, offering high durability and
availability.
AWS Backup Integration: AWS Backup natively supports EFS, enabling automated backups and cross-region
replication for disaster recovery. This supports the requirement of using AWS Backup to manage replication
to another region and meet the RPO.
RPO: While the exact RPO is dependent on your backup schedule configuration in AWS Backup, it can be
configured to achieve an 8-hour RPO for EFS.
FSx for Windows File Server & FSx for NetApp ONTAP Limitations: While FSx for Windows File Server and
FSx for NetApp ONTAP are suitable file systems for specific workloads, they are not the best fit for this
scenario because they may have higher costs and complexity for simple file sharing across multiple AZs with
easy AWS Backup integration. Also, FSx for Windows File Server is typically used for Windows-based
applications.
FSx for OpenZFS Limitations: Although FSx for OpenZFS offers high performance, it might be an overkill for
a general purpose containerized application needing just shared storage and durability.

Therefore, Amazon EFS offers the simplest and most cost-effective solution for providing a highly durable,
shared file system with multi-AZ access and easy integration with AWS Backup for cross-region replication
and disaster recovery.

---

## Question 476

**Answer:** **C**

**Explanation:**

The most secure way to grant permissions to new users added to IAM groups, given the scenario, is to create
an IAM policy that grants least privilege permission and attach that policy to the IAM groups (**Option C**).

Here's why:
IAM Policies: IAM policies are JSON documents that define permissions. They specify what actions a user,
group, or role can perform on AWS resources. Attaching a policy directly to an IAM group is a straightforward
and effective way to define the permissions for all users within that group.
Least Privilege: Least privilege is a security principle that dictates granting users only the permissions they
need to perform their job duties. Creating a specific IAM policy tailored to each group and granting only the
necessary permissions minimizes the potential impact of compromised credentials.
IAM Groups vs. Roles: IAM groups are collections of IAM users. They are a convenient way to manage
permissions for multiple users who require the same level of access. IAM roles, on the other hand, are
assumed by entities, not directly assigned to users. While roles are excellent for EC2 instances and other
services, they aren't the most direct way to manage access for users within groups.
Why other options are less secure:
Service Control Policies (SCPs) (**Option A**): SCPs are used at the AWS Organizations level to manage
permissions across multiple AWS accounts. While valuable for central governance, they are not the best
approach for granting specific permissions to IAM groups within a single account. SCPs define maximum
permissions; IAM policies still need to be in place to grant the actual access.
IAM Roles attached to Groups (**Option B**): You don't attach roles to groups. Roles are assumed by entities
(like EC2 instances) or assumed by users (via the console or CLI). While a user can assume a role, it adds
unnecessary complexity and is not the standard way to grant basic permissions to a group of users.
Permissions Boundaries (**Option D**): Permissions boundaries define the maximum permissions that an IAM
entity can have. While using them with Roles is a valid setup, a Role isn't the most fitting solution here.
Furthermore, attaching a permissions boundary without also defining specific permissions within IAM policies
will result in no access.

In summary, attaching IAM policies that grant least privilege directly to IAM groups is the most direct,
manageable, and secure approach in this scenario. It follows the principle of least privilege while leveraging
the convenience of IAM groups for managing user permissions.
Reference:
IAM Policies
IAM Groups
Least Privilege
IAM Roles

---

## Question 477

**Answer:** **D**

**Explanation:**

D for sure

---

## Question 478

**Answer:** **B**

**Explanation:**

The correct answer is B. Let's dissect why it's the most secure solution for the law firm's requirements.

**Option B** leverages several AWS security features optimally. First, creating a new S3 bucket ensures a

dedicated space for public-facing data, minimizing the risk of accidental exposure of other sensitive
information. Enabling S3 Versioning is crucial because it preserves every version of an object, providing a
built-in audit trail and facilitating easy recovery if unintended changes occur. The cornerstone of this solution
is S3 Object Lock. By using Object Lock with a retention period extending to the designated future date, the
law firm prevents modification or deletion of the files, adhering strictly to the requirement of immutability.
Configuring the S3 bucket for static website hosting makes the files readily accessible to the public. Finally,
setting an S3 bucket policy to allow read-only access explicitly restricts write operations, further enhancing
security by limiting potential avenues for unauthorized modifications.

**Option A** falls short in terms of true immutability. While read-only IAM permissions restrict who can directly
write to the bucket, they don't protect against accidental or malicious deletion by authorized principals.

**Option C** introduces unnecessary complexity and potential latency. Using Lambda functions triggered by
object modification/deletion adds an additional layer of processing that can increase response times and
introduces a potential point of failure. While the intention is good, the built-in capabilities of S3 Object Lock
provide a more direct and efficient solution. Also, storing original versions in a separate private bucket adds to
management overhead.

**Option D** incorrectly assumes that Object Lock can be applied to folders within S3. Object Lock is applied at
the object level. This option also requires IAM policy to set read-only permissions, but it's not the most secure
option since it doesn't prevent accidental deletion if user account compromised.

Therefore, **Option B** is the most secure and efficient solution. It leverages built-in features of S3 to enforce
immutability, provide versioning for recovery, and grant read-only access, directly addressing all
requirements without unnecessary complexity.

---

## Question 479

**Answer:** **B**

**Explanation:**

The best approach is to define the infrastructure as code using AWS CloudFormation. CloudFormation allows

you to create and manage AWS infrastructure as code, using templates written in YAML or JSON. This
approach ensures consistency, repeatability, and version control. CloudFormation templates describe the
desired state of your infrastructure, including resources like Auto Scaling groups, Application Load Balancers,
and RDS databases. The template serves as a blueprint for creating identical infrastructure in different
environments or regions.**Option B** directly addresses the requirement to deploy the infrastructure in an
automated fashion into two Availability Zones. CloudFormation handles the provisioning of resources across
multiple Availability Zones based on the template's configuration.**Option A**, AWS Systems Manager, is
primarily designed for managing existing infrastructure rather than provisioning new infrastructure from
scratch. While SSM can automate tasks, it's not the ideal choice for defining and deploying entire
infrastructure stacks.**Option C**, AWS Config, is used for assessing, auditing, and evaluating the configurations
of your AWS resources. It records the configuration history of your resources but doesn't directly provision
infrastructure like CloudFormation.**Option D**, AWS Elastic Beanstalk, is a PaaS (Platform as a Service) offering
designed for deploying and managing web applications. While it can deploy applications, it's not designed for
managing the entire infrastructure stack as comprehensively as CloudFormation, especially custom
configurations involving multiple components. CloudFormation is the most suitable solution because it enables
infrastructure as code, ensuring consistency, repeatability, and automated deployment across different
environments and Availability Zones.
Here are some links for further research:
AWS CloudFormation: https://aws.amazon.com/cloudformation/
CloudFormation Documentation: https://docs.aws.amazon.com/cloudformation/
AWS Systems Manager: https://aws.amazon.com/systems-manager/
AWS Config: https://aws.amazon.com/config/
AWS Elastic Beanstalk: https://aws.amazon.com/elasticbeanstalk/

---

## Question 480

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why VPC endpoints are the correct solution:
The requirement is to ensure that traffic between an EC2 instance and an S3 bucket does not traverse the
public internet.
VPC Endpoints: VPC endpoints enable you to privately connect your VPC to supported AWS services and VPC
endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection,
or AWS Direct Connect connection. Endpoints are horizontally scaled, redundant, and highly available VPC
components that allow communication between instances in your VPC and services without imposing
availability risks or bandwidth constraints on your network traffic. Specifically, using a Gateway Endpoint for
S3 allows traffic to remain within the AWS network, bypassing the internet.

AWS KMS (**Option A**): AWS KMS is for managing encryption keys. While it is important for securing data at
rest and in transit, it doesn't directly prevent traffic from going over the public internet. It addresses
encryption, not network routing.
Private Subnet (**Option C**): A private subnet, by definition, does not have a route to an internet gateway.
However, instances in a private subnet still require a NAT gateway or NAT instance to access S3 over the
public internet unless a VPC endpoint is configured. Simply placing the EC2 instance in a private subnet
doesn't solve the core problem.
Virtual Private Gateway (**Option D**): A Virtual Private Gateway is used to establish a VPN connection between
your VPC and your on-premises network. This is irrelevant to the requirement of keeping traffic within the
AWS network for communication between EC2 and S3.

Therefore, the correct answer is VPC endpoints because they provide a private connection to S3, ensuring the
traffic stays within the AWS network and does not traverse the public internet, fulfilling the compliance
requirement.

---

## Question 481

**Answer:** **B**

**Explanation:**

The question requires a caching strategy that ensures data consistency between the database and the cache
layer for a three-tier web application on AWS. The desired behavior is that when data is added to the database
(specifically, an item is added), the corresponding cache entry is immediately updated to reflect this change.

**Option B**, implementing a write-through caching strategy, is the correct answer. A write-through cache
updates both the cache and the database simultaneously. When a customer adds an item (data) to the
database, the write-through cache mechanism will synchronously update the cache. This ensures that the
cache always contains the most up-to-date information, matching the data in the database. This satisfies the
requirement of data consistency.

**Option A**, lazy loading, is incorrect. Lazy loading caches data only when it is first requested. While it saves
resources on initial data loading, it doesn't guarantee immediate cache updates after database modifications,
leading to potential staleness.

**Option C**, adding TTL (Time-to-Live), while a common caching optimization, is not a strategy itself but rather a
parameter. Even with TTL, there's no guarantee the cache is updated immediately upon database changes.

Stale data could exist until the TTL expires.

**Option D**, AWS AppConfig, is primarily a service for application configuration management, not a caching
strategy. While you could use it to control parameters related to caching, it doesn't inherently provide the
synchronous update mechanism required.

Therefore, only the write-through caching strategy provides the guarantee of data consistency by updating
the cache immediately when the database is updated.
For more information on caching strategies:
Amazon ElastiCache Strategies: https://aws.amazon.com/elasticache/
Caching Strategies: https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside (though
Azure-specific, the caching concepts apply generally)

---

## Question 482

**Answer:** **B**

**Explanation:**

Here's a detailed justification of why option B is the best solution for migrating 100 GB of on-premises data to
Amazon S3 with encryption in transit and minimal operational overhead, given the specified constraints:

**Option B**: Use AWS DataSync
DataSync is a fully managed data transfer service that simplifies, automates, and accelerates moving data
between on-premises storage and AWS storage services. Crucially, DataSync encrypts data in transit using
TLS, meeting the encryption requirement.
Efficiency and Speed: DataSync utilizes a purpose-built transfer protocol designed to optimize data transfer
over the internet or AWS Direct Connect. It automatically handles tasks such as data validation,
checksumming, and error recovery, reducing operational burden.
Encryption in Transit: DataSync natively encrypts data during transit, fulfilling the requirement to encrypt
data moving to the S3 bucket.
Simplicity and Automation: DataSync simplifies the migration process through its agent-based architecture.
You deploy an agent in your on-premises environment, configure it to connect to your S3 bucket, and then
define a transfer task. It automates the transfer process and provides monitoring capabilities.
No Hardware Logistics: Unlike AWS Snowball, DataSync doesn't involve shipping physical devices,
eliminating associated logistical overhead and delays.

Why other options are less suitable:

**Option A** (s3 sync with AWS CLI): While functional, s3 sync lacks the optimization features of DataSync,

leading to slower transfer speeds and increased operational overhead. It requires more manual intervention to
monitor and restart transfers.

**Option C** (AWS Snowball): Snowball is overkill for only 100 GB of data. The turnaround time for shipping a
Snowball device can be significantly longer than using DataSync over a 100 Mbps connection. It also
introduces logistical complexity.

**Option D** (IPsec VPN + s3 cp with AWS CLI): Setting up and maintaining an IPsec VPN introduces significant
operational overhead. While it secures the connection, it doesn't provide the optimized transfer capabilities of
DataSync. s3 cp shares the same drawbacks as s3 sync in terms of optimization and automation.
Calculations & Network Limitations:
Transferring 100GB (800Gb) over a 100Mbps connection would take approximately 22.2 hours at maximum
theoretical speed. DataSync's features to optimize this, it becomes the best option.
Conclusion:
AWS DataSync provides the best balance of speed, security, and simplicity for migrating 100 GB of data to S3
over a 100 Mbps connection. It eliminates the complexity of VPNs and physical devices while ensuring
encryption in transit.
Supporting Documentation:
AWS DataSync: https://aws.amazon.com/datasync/
DataSync Encryption: https://docs.aws.amazon.com/datasync/latest/userguide/security.html

---

## Question 483

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate
to run the job. Create a scheduled task based on the container image of the job to run every 10 minutes.

Here's why:
Cost-Effectiveness: Fargate allows you to pay only for the compute resources your container uses, without
managing the underlying infrastructure. For a short-running job executed every 10 minutes, this is more costeffective than provisioning and maintaining EC2 instances.
Scheduled Tasks with ECS: ECS provides built-in scheduling capabilities to run tasks on a defined schedule
using services like Amazon CloudWatch Events (now EventBridge), making option C a straightforward solution

to the problem requirements.
Containerization Compatibility: ECS Fargate readily supports running containerized applications, including
Windows containers, fulfilling the requirement that the job is already containerized.
No need for external schedulers: **Option D** requires the use of Windows task scheduler, which is not a native
cloud scheduler for AWS services and requires an external dependency.
Comparing to Lambda (**Option A**): AWS Lambda generally has a maximum execution time limit that could be
an issue if the job's runtime occasionally approaches or exceeds that limit. Furthermore, while Lambda
supports container images, it's generally optimized for event-driven, stateless functions, not periodic tasks
that require more persistent processing.
In contrast:
AWS Batch (**Option B**), while suitable for batch workloads, adds unnecessary complexity for a simple
scheduled task that requires consistent intervals.
Lambda (**Option A**) AWS Lambda's maximum execution time limit and general optimization for event-driven
stateless functions makes it less suitable for periodic tasks that require persistent processing.
Windows task scheduler (**Option D**) requires external dependencies.

Therefore, ECS on Fargate with scheduled tasks provides the most straightforward, cost-effective, and
manageable solution.
Supporting Resources:
Amazon ECS Scheduled Tasks
AWS Fargate Pricing
AWS Lambda Function Configuration

---

## Question 484

**Answer:** **AE**

**Explanation:**

The correct answer is AE. Here's why:

**A:** Create a new organization in AWS Organizations with all features turned on. Create the new AWS
accounts in the organization. AWS Organizations is designed to centrally manage and govern multiple AWS
accounts. Creating an organization provides a hierarchical structure to manage permissions and policies
across accounts, which is essential for a consolidated, multi-account architecture. With all features enabled,

you can leverage service control policies (SCPs) for centralized governance.
https://aws.amazon.com/organizations/

**E:** Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity
Center, and integrate it with the company's corporate directory service. AWS IAM Identity Center
(successor to AWS SSO) enables you to centrally manage access to multiple AWS accounts and applications.
Integrating it with your corporate directory service (like Active Directory) allows users to use their existing
credentials to access AWS resources. This centralizes authentication and simplifies user management across
the organization. https://aws.amazon.com/iam/identity-center/

Why other options are incorrect:

**B:** Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single Sign-On) to
accept Amazon Cognito authentication. Cognito Identity Pools are primarily used to grant temporary AWS
credentials to users of mobile and web applications. While Cognito can integrate with identity providers, it's
not the direct and preferred method for integrating a corporate directory service with multiple AWS accounts
in a multi-account architecture, compared to IAM Identity Center.

**C:** Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity Center
(AWS Single Sign-On) to AWS Directory Service. While SCPs are important for governance, you don't add
IAM Identity Center to AWS Directory Service. Instead, you integrate IAM Identity Center with the directory
service, configuring IAM Identity Center to use the directory as its identity source. This integration is managed
within IAM Identity Center, not the directory service itself. You cannot simply "add" IAM Identity Center in
such a manner.

**D:** Create a new organization in AWS Organizations. Configure the organization's authentication mechanism
to use AWS Directory Service directly. AWS Organizations itself doesn't have a direct authentication
mechanism to directly integrate with a directory service. The authentication is facilitated via a service like
AWS IAM Identity Center. Organizations provides the framework to manage the accounts, and IAM Identity
Center handles the authentication across them.

---

## Question 485

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the most cost-effective storage option for infrequently accessed
data that needs to be retrieved within five minutes. Amazon S3 Glacier is designed for archiving data at a very
low cost.
Here's a detailed breakdown:
Cost-Effectiveness: S3 Glacier is significantly cheaper than S3 Standard-IA and S3 One Zone-IA for storage.

The company's primary requirement is to minimize costs, making Glacier a strong contender.
Retrieval Time: The key differentiator is the retrieval time requirement of "a maximum of five minutes." While
Glacier has different retrieval options, "Expedited retrievals" allow for access to data within 1-5 minutes.
Why not B? Standard retrievals in S3 Glacier can take several hours (3-5 hours), which violates the fiveminute requirement.
Why not C? S3 Standard-IA is more expensive than S3 Glacier for storage. While retrieval times are faster by
default, the cost is not justified for archives rarely needed.
Why not D? S3 One Zone-IA is cheaper than S3 Standard-IA but still more expensive than S3 Glacier.
Additionally, S3 One Zone-IA stores data in only one Availability Zone, which makes it less durable than S3
Glacier. Durability is implicitly desired when archiving old, important footage, and using Glacier is a better
practice for data longevity.

In summary, Amazon S3 Glacier with Expedited retrievals perfectly balances the need for low-cost storage
with the specific requirement of quick access when needed.

---

## Question 486

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Static Website Hosting: Amazon S3 is a cost-effective and scalable solution for hosting static websites. It
offers high availability and durability without requiring server management. https://aws.amazon.com/s3/
Containerized Application: AWS Fargate allows you to run containers without managing the underlying EC2
instances. It simplifies deployment and reduces operational overhead, perfectly aligning with the requirement
to reduce operational costs. Amazon Elastic Container Service (ECS) is a fully managed container
orchestration service that supports Fargate. https://aws.amazon.com/fargate/

Relational Database: Amazon RDS provides managed relational database services, reducing the operational
burden of database administration. It automates tasks like patching, backups, and scaling.
https://aws.amazon.com/rds/
Let's look at why the other options are less ideal:

**Option B**: Using Amazon CloudFront solely for static content is overkill. While CloudFront is a great CDN for
caching and distributing content globally, it primarily adds value on top of a static storage solution like S3.
For a basic static website, S3 alone is usually sufficient and more cost-effective. Also, while ECS with EC2 is
valid, Fargate is preferable for reducing operational costs.

**Option C**: Amazon EKS (Kubernetes) is generally more complex than ECS, especially when deploying it with
Fargate. While EKS with Fargate is a perfectly acceptable option for microservice architectures and
applications requiring portability, it might be an unnecessary complexity layer for a simple three-tier
application. Choosing ECS simplifies setup and management.

**Option D**: Using Amazon EC2 Reserved Instances for static content is the least optimal. EC2 instances require
constant management, and they are not designed to serve static content, while S3 is. Also, EKS with EC2
increases complexity and operational overhead compared to ECS with Fargate.

---

## Question 487

**Answer:** **C**

**Explanation:**

The correct answer is C: Amazon Elastic File System (Amazon EFS) with multiple mount targets. Here's why:
Amazon EFS is designed to provide a scalable, elastic, and highly available network file system. Crucially, EFS
supports multiple Linux instances mounting the file system concurrently. This directly addresses the
requirement for a file system mountable by multiple Linux instances in AWS and on-premises. EFS seamlessly
integrates with a Site-to-Site VPN, enabling access from the on-premises network. EFS is also elastic,
meaning its storage capacity automatically grows and shrinks as you add and remove files, thus fulfilling the
"no minimum size requirements" criterion.
Multiple mount targets in different Availability Zones (AZs) within a region enhance availability. If one AZ
experiences an issue, instances in other AZs can still access the file system.

**Option A**, Amazon FSx Multi-AZ deployments, although highly available, is designed for Windows file servers
or Lustre, not general-purpose file systems mountable by Linux instances using standard file protocols across
on-premises and cloud environments.

**Option B**, Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes, allows attaching one EBS volume

to multiple instances. However, it's restricted to specific Nitro-based instances and, importantly, doesn't offer
direct support for accessing the file system from on-premises environments via Site-to-Site VPN. It's also
block storage and doesn't behave as a network file system inherently.

**Option D**, Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points,
while utilizing EFS, a single mount target would create a single point of failure and not provide the necessary
high availability across Availability Zones, which is crucial. While access points enhance security and simplify
access management, they do not replace the need for multiple mount targets for availability.

Therefore, only Amazon EFS with multiple mount targets provides the required scalability, availability, file
system functionality, and on-premises access via Site-to-Site VPN, satisfying all the conditions outlined in the
scenario.
Further reading:
Amazon EFS: https://aws.amazon.com/efs/
EFS Mount Targets: https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-targets.html
EFS Access from On-premises: https://docs.aws.amazon.com/efs/latest/ug/accessing-fs-nfs-vpc.html

---

## Question 488

**Answer:** **C**

**Explanation:**

The correct answer is C. Create a service control policy (SCP) to deny access to the billing information.
Attach the SCP to the root organizational unit (OU).

Here's why:
Service Control Policies (SCPs) are the ideal mechanism to enforce organization-wide governance in AWS
Organizations. They act as guardrails, defining the maximum permissions that member accounts within an OU
can have. Even the root user of a member account cannot bypass restrictions imposed by an SCP applied to
the OU they belong to. This makes SCPs the only option to reliably restrict access to billing information, even
for root users.

**Option A** is incorrect because assigning finance team users to an IAM group and attaching an AWS managed
policy would grant them access, not restrict it.

**Option B** is incorrect because IAM policies within a member account cannot override restrictions enforced by
SCPs at the organizational level. The root user could potentially modify or detach the policy.

**Option D**, switching to the consolidated billing feature set, does not, by itself, restrict access to billing
information within member accounts. It just consolidates billing for the organization into the management

account. The consolidated billing setup does not offer control over who views billing data within member
accounts. The all features set is required to use SCPs, so the idea of converting to the consolidated billing
feature set is antithetical to the problem at hand.
Attaching the SCP to the root OU ensures that the restriction applies to all accounts within the organization
(unless explicitly overridden in a lower-level OU, which wouldn't meet the requirements). By denying access to
billing information through an SCP, the organization ensures compliance with the finance team's requirement
that member accounts' billing data remains inaccessible. This is essential for maintaining financial control and
preventing unauthorized access within the AWS environment.
Further reading:
AWS Organizations documentation on SCPs:
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
AWS Organizations features: https://aws.amazon.com/organizations/features/

---

## Question 489

**Answer:** **C**

**Explanation:**

The best solution to retain undelivered SNS messages for up to 14 days with the least development effort is to
use a dead-letter queue (DLQ) backed by Amazon Simple Queue Service (SQS).

Here's why:
Dead-Letter Queues (DLQs): SNS dead-letter queues are specifically designed for handling undeliverable
messages. When SNS fails to deliver a message to a subscriber after retries, it can be configured to send the
message to a DLQ. This ensures that messages are not lost and can be analyzed later.
Amazon SQS: SQS is a fully managed message queuing service that allows you to decouple and scale
microservices, distributed systems, and serverless applications. SQS offers message retention periods of up
to 14 days, which directly fulfills the requirement.
Least Development Effort: SNS natively supports configuring DLQs with SQS as the target. This is a
configuration-based solution, requiring minimal code development. You simply configure the SNS
subscription with the DLQ ARN.

Let's analyze why other options are less suitable:

**Option A** (Kinesis Data Streams): While Kinesis Data Streams can store data, it is more suited for real-time
data processing and analytics. Using it solely for retaining undelivered messages adds unnecessary
complexity. The primary purpose of Kinesis is not message queuing with retention for analysis like SQS.

**Option B** (SQS queue between application and SNS): This option doesn't directly address the SNS deadletter queue concept. It introduces an intermediary queue, which could complicate the message flow and
require changes to the application that sends messages to SNS. It's not a direct solution to the problem of
messages failing delivery from SNS to the on-premises endpoint.

**Option D** (DynamoDB with TTL): DynamoDB with TTL (Time To Live) could technically store the messages, but
it involves more development effort. You would need to write code to take the messages from the SNS failure
notification, format them, and store them in DynamoDB. Additionally, configuring TTL attributes and ensuring
proper data formatting adds overhead. Storing messages intended for queuing in a database seems
unnatural.

In summary, option C leverages native AWS features (SNS DLQ and SQS) to provide a simple, configurationbased solution for message retention with minimal development effort. SQS queue retention period and SNS
DLQ configurations are straightforward within the AWS console or using Infrastructure as Code (IaC).

---

## Question 490

**Answer:** **B**

**Explanation:**

The correct answer is B because it directly leverages built-in DynamoDB features for backups with minimal
coding and no impact on application availability or RCUs. Let's break down why the other options are not as
suitable:

**Option A** (EMR/Hive): Using EMR and Hive is overkill. It requires significant setup, configuration, and coding
to create the Hive job and manage the cluster. This introduces complexity and operational overhead that can

be avoided. https://aws.amazon.com/emr/

**Option C** (DynamoDB Streams/Lambda): DynamoDB Streams captures item-level changes. While it can be
used for data replication, it's not designed for full table backups. Using Lambda to consume the stream and
export data to S3 requires custom coding to assemble the full table state and handle potential
inconsistencies. Also, data stored in S3 might not be consistent with the table state.
https://aws.amazon.com/dynamodb/streams/

**Option D** (Lambda/Periodic Export): While Lambda can be used for data export, scheduling it on a regular
basis might impact the table's performance and RCU consumption, depending on the frequency and size of
the data being exported. This method requires custom coding and careful monitoring to avoid impacting
application availability. Also, it only provides point-in-time recovery for the time when you scheduled backups
and is not truly continuous. https://aws.amazon.com/lambda/

**Option B** leverages DynamoDB's native export functionality directly to S3 with continuous backups using
Point-in-Time Recovery (PITR).
Export to S3: DynamoDB allows you to export a table's data directly to an S3 bucket. This functionality is
managed by DynamoDB and avoids impacting the table's RCU.
Point-in-Time Recovery (PITR): PITR allows you to restore your DynamoDB table to any point in time during
the preceding 35 days. This provides continuous backup capabilities because it continuously maintains
backup data. Turning on PITR provides automatic and continuous backups without affecting application
performance. It does not consume RCUs.
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html and
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3Export.html
Minimal Coding: Turning on PITR and starting an export to S3 requires minimal configuration through the
AWS Management Console, AWS CLI, or SDK. It does not require writing custom code.

In summary, option B offers the simplest, most efficient, and most reliable way to back up DynamoDB data to
S3 without impacting application availability or RCUs by utilizing the built-in DynamoDB features for export
and PITR.

---

## Question 491

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most cost-effective solution for processing credit card
data validation requests asynchronously, securely, and at least once, using Lambda and SQS:
Key Requirements and Considerations:
Asynchronous Processing: Decoupling the request origin from the processing is essential for scalability and
responsiveness. SQS enables this.
Security: Protecting sensitive credit card data requires encryption at rest.
At-Least-Once Delivery: Guarantees that each request is processed, even in failure scenarios.
Cost-Effectiveness: Minimizing operational expenses is a crucial design goal.
Why **Option A** is the Best Choice:

**Option A** leverages SQS standard queues with AWS Lambda event source mapping, offering a balance of
functionality and cost. Let's break down the components:

1. SQS Standard Queues: Standard queues provide high throughput and best-effort ordering, which is
suitable for credit card validation as the order of individual validations isn't as critical as the speed
and ability to process all requests. Standard queues are generally cheaper than FIFO queues.
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queuetypes.html

2. AWS Lambda Event Source Mapping: This feature directly connects the SQS queue to the Lambda
function. Lambda automatically polls the queue for messages and invokes the function whenever
messages are available. This eliminates the need for custom polling logic or additional services.
https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

3. SSE-KMS Encryption: Server-Side Encryption with KMS provides robust encryption at rest using
keys managed by AWS Key Management Service (KMS). This ensures that sensitive credit card data
is protected while stored in the SQS queue.
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configuresse.html

4. kms:Decrypt Permission: Granting the Lambda execution role the kms:Decrypt permission allows the
Lambda function to decrypt messages encrypted with SSE-KMS. This is essential for the Lambda
function to process the encrypted data.
https://docs.aws.amazon.com/kms/latest/developerguide/services-sqs.html
Why Other Options are Less Suitable:
Options B and C (FIFO Queues): FIFO (First-In-First-Out) queues guarantee message ordering, but come with
higher cost and lower throughput than standard queues. Ordering is not a critical requirement, using FIFO
adds unnecessary cost. The at-least-once delivery guarantee can still be maintained with standard queues
using retry mechanisms and dead-letter queues (DLQs).

**Option B** (SSE-SQS): SSE-SQS uses SQS managed encryption keys, which is simpler to set up but offers less
control and flexibility compared to SSE-KMS. SSE-KMS is preferred for sensitive data because you can
manage key rotation, access control, and auditing policies more granularly. Additionally, the permission in the
lambda execution role to allow KMS Decryption.

**Option D**: **Option D** describes using KMS but grants "encryption key invocation permission" to the Lambda
function. Instead, it must be kms:Decrypt permission for the Lambda execution role, as the Lambda role
performs decryption.
Cost Considerations:
Standard queues are generally more cost-effective than FIFO queues due to their higher throughput and less

stringent ordering requirements. While both SSE-SQS and SSE-KMS incur encryption costs, the additional
control and auditing capabilities of SSE-KMS are often justified for sensitive data. Lambda event source
mapping is a cost-effective way to integrate SQS with Lambda because it eliminates the need for constant
polling or a separate polling service.

In summary, **Option A** provides the necessary security, delivery guarantees, and asynchronous processing
capabilities in a cost-optimized manner by leveraging SQS standard queues with SSE-KMS encryption and
Lambda event source mapping with the correct KMS decryption permission.

---

## Question 492

**Answer:** **B**

**Explanation:**

The most efficient solution to centrally restrict EC2 instance creation in multiple AWS development accounts
involves using AWS Organizations and Service Control Policies (SCPs). AWS Organizations allows you to
organize multiple AWS accounts into organizational units (OUs). By applying an SCP to an OU, you can restrict
the actions that IAM users and roles in the member accounts can perform.
In this case, you can create an SCP that denies the creation of EC2 instances beyond a specific instance type
size or family. This centralized control mechanism ensures that developers within the development accounts
cannot launch oversized EC2 instances that exceed the budget. This approach minimizes development effort
since SCPs are declarative policies that are easily defined and attached to OUs without requiring custom
coding or complex infrastructure. Options A, C, and D require more development and maintenance effort
compared to leveraging the native capabilities of AWS Organizations and SCPs for centralized governance.
While Systems Manager templates (**Option A**) and Service Catalog (**Option D**) can enforce instance type
choices, they don't provide central control across multiple accounts as effectively as Organizations. **Option C**,
using EventBridge and Lambda, is reactive and requires continuous monitoring and updates, making it less
efficient than SCPs. SCPs are proactively applied, preventing non-compliant instances from being created in
the first place.

---

## Question 493

**Answer:** **DEF**

**Explanation:**

The correct answer is D, E, and F. Here's why:

**D:** Use Amazon Transcribe to convert the audio recordings in any language into text. Amazon Transcribe is a
speech-to-text service that can handle multiple languages. It's designed to transcribe audio from customer
service calls into text, a crucial first step for sentiment analysis. This aligns directly with the requirement of
converting call recordings into text, regardless of the language. https://aws.amazon.com/transcribe/

**E:** Use Amazon Translate to translate text in any language to English. Since the requirement is to translate
the call recording text into English for sentiment analysis, Amazon Translate is the appropriate service. It
offers automated translation from various source languages into the target language (English). This
addresses the company's need to handle calls in multiple languages and future expansion into new
languages. https://aws.amazon.com/translate/

**F:** Use Amazon Comprehend to create the sentiment analysis reports. Amazon Comprehend is a natural
language processing (NLP) service that can perform sentiment analysis on text. The translated text from the
call recordings can be fed into Comprehend, which will analyze the sentiment (positive, negative, neutral) and
generate the required reports. Comprehend requires no ML model maintenance, satisfying that constraint.
https://aws.amazon.com/comprehend/
Now, let's explain why the other options are incorrect:

**A:** Use Amazon Comprehend to translate the audio recordings into English. Comprehend is a text-based NLP
service, not an audio translation service. It can't directly translate audio; it requires text as input.

**B:** Use Amazon Lex to create the written sentiment analysis reports. Amazon Lex is a service for building
conversational interfaces (chatbots). While Lex can integrate with other services to perform sentiment
analysis, it's not directly designed for generating sentiment analysis reports from call recordings.

**C:** Use Amazon Polly to convert the audio recordings into text. Amazon Polly is a text-to-speech service,
which performs the opposite function of what is needed. It converts text into audio, rather than audio into text.

---

## Question 494

**Answer:** **D**

**Explanation:**

The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or
203.0.113.0/24.

---

## Question 495

**Answer:** **C**

**Explanation:**

The best solution for discovering sensitive data within an S3 bucket linked to AWS Lake Formation,
specifically PII and financial information like passport and credit card numbers, is C. Configure Amazon Macie
to run a data discovery job that uses managed identifiers for the required data types.

Here's why:
Amazon Macie is a fully managed data security and data privacy service that uses machine learning and
pattern matching to discover and protect sensitive data stored in Amazon S3. It is designed for this specific
purpose. https://aws.amazon.com/macie/
Macie provides pre-defined managed identifiers for common types of PII and financial data, including credit
card numbers, passport numbers, social security numbers, and more. This allows for out-of-the-box detection
capabilities tailored to the company's requirements.
Macie’s data discovery jobs scan the contents of S3 objects and identify instances of sensitive data based on
the configured managed identifiers. It can handle various file formats and storage classes.
Macie integrates with other AWS services, enabling automated remediation actions based on its findings.

**Option A** is incorrect because AWS Audit Manager is primarily used for compliance auditing against
predefined frameworks, not for specific data discovery within an S3 bucket. PCI DSS is relevant if the data is
related to payment card information, but Audit Manager does not directly scan the S3 bucket contents for PII
like Macie does.

**Option B** is incorrect because Amazon S3 Inventory provides a list of objects in the bucket with metadata
(size, modification date, etc.). Athena can then be used to query the inventory, but the inventory data does not
include the contents of the files. Thus, it would not be able to detect PII inside files.

**Option D** is incorrect because Amazon S3 Select allows querying the contents of S3 objects using SQL. While
technically possible, it would require a significant amount of manual SQL query crafting and maintenance to
identify all potential PII patterns, compared to Macie’s managed approach. It also requires knowledge of the
data schemas stored within the S3 bucket.
Lake Formation provides a central repository for data catalog and access controls, but it doesn't offer built-in
sensitive data discovery. Macie's discovery integrates well with S3 buckets associated with Lake Formation
data lakes. Macie directly analyzes the data at rest to identify patterns that match sensitive data, making it
the most effective and efficient choice.

---

## Question 496

**Answer:** **BD**

**Explanation:**

The company's requirements include addressing storage capacity issues for both block and NFS storage onpremises, achieving high performance with local caching, and minimizing application re-architecting.

**Option B**, deploying an AWS Storage Gateway file gateway to replace NFS storage, directly addresses the
need for NFS storage expansion. A file gateway allows on-premises applications to access data stored in
Amazon S3 as NFS file shares. Critically, it provides a local cache, which improves performance by storing
frequently accessed data locally, thereby reducing latency. This is a core function of file gateways.
[https://aws.amazon.com/storagegateway/file-gateway/]

**Option D**, deploying an AWS Storage Gateway volume gateway to replace block storage, directly addresses
the need for block storage expansion. A volume gateway enables on-premises applications to access cloudbased block storage volumes as iSCSI devices. Like the file gateway, it provides a local cache for frequently
accessed data. This ensures that applications experience low-latency access for frequently used data while
offloading infrequently used data to the cloud. The volume gateway comes in two flavors - cached volumes
which stores all data in S3 and copies a cache of frequently accessed data locally. This ensures local lowlatency and Stored Volumes - keeps the entire data copy locally, backed up asynchronously to AWS. Since
the question specifies the need for high performance that supports local caching, the Cached Volumes is
implicitly implied. [https://aws.amazon.com/storagegateway/volume-gateway/]

**Option A** is incorrect because directly mounting Amazon S3 as a file system to on-premises servers typically
doesn't offer the high-performance local caching required. Although tools exist to achieve this, they often
introduce complexity. **Option C** is inappropriate. AWS Snowball Edge is primarily for large-scale data
migrations and edge computing and not generally used for continuous NFS mounts. **Option E** is incorrect
because while Amazon EFS can be mounted on-premises via AWS Direct Connect or VPN, it does not offer the
local caching mechanism needed for high performance in this scenario. Also it doesn't address block storage
requirements.

---

## Question 497

**Answer:** **C**

**Explanation:**

The most cost-effective solution to reduce data output costs for EC2 instances accessing S3 within the same
AWS Region is to use a VPC gateway endpoint for S3. VPC gateway endpoints allow EC2 instances in private
subnets to access S3 directly, bypassing the NAT gateway and the associated data transfer charges.

**Option A** is incorrect because while using a dedicated EC2 NAT instance might offer slightly more control, it
doesn't eliminate data transfer charges and introduces management overhead.

**Option B** is incorrect because placing a NAT instance in the private subnet would not solve the problem of
data transfer costs and would violate common best practices.

**Option D** is incorrect because provisioning a second NAT gateway would double the NAT gateway costs and
wouldn't address the data transfer charges between EC2 and S3.

**Option C**, provisioning a VPC gateway endpoint, is the best solution. VPC gateway endpoints are free to use
(you only pay for the S3 storage and requests), and they provide a direct, secure connection to S3 without
traversing the public internet. This eliminates data transfer charges associated with using a NAT gateway and
reduces overall costs. The route table configuration directs S3-bound traffic through the endpoint, ensuring a
direct connection.
Here are some authoritative links for further research:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
NAT Gateways: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html

---

## Question 498

**Answer:** **A**

**Explanation:**

The correct answer is A: Use S3 Lifecycle to delete expired object versions and retain the two most recent
versions. Here's why:
S3 Lifecycle policies are designed specifically to automate the management of objects over their lifetime,

including transitioning them to different storage classes or deleting them after a specified period or based on
versioning rules. In this scenario, the requirement is to reduce S3 costs by retaining only the two most recent
versions of the pictures while minimizing operational overhead. S3 Lifecycle rules can be configured to
automatically delete noncurrent versions of objects, allowing you to specify the number of recent versions to
keep. This directly addresses the requirement.

**Option B** (Lambda function) would involve writing and maintaining custom code, which increases operational
overhead and complexity. While Lambda is powerful, it's overkill for a task that S3 Lifecycle is designed to
handle. **Option C** (S3 Batch Operations) is suitable for performing large-scale batch operations on S3 objects.
While it could technically be used to delete older versions, it involves more setup and is less efficient for
continuous version management compared to Lifecycle policies. **Option D** (deactivating versioning) would
completely remove the ability to retain multiple versions, which is contrary to the requirement of keeping the
two most recent versions. Therefore, it is not a suitable option.
S3 Lifecycle policies are built into S3 and require minimal configuration. They automatically and continuously
manage object versions, resulting in the least operational overhead. Lifecycle rules can be configured from
the S3 Management Console or using the AWS CLI/SDKs, making the process simple and straightforward. By
using S3 Lifecycle rules to delete older versions, the company can automatically reduce storage costs
without continuous manual intervention.
In conclusion, S3 Lifecycle is the most efficient and cost-effective solution for managing object versions in S3
while minimizing operational overhead.

---

## Question 499

**Answer:** **D**

**Explanation:**

The correct answer is D because it directly addresses the company's need to minimize cost while maintaining
security and connectivity.

Here's why:
Cost Reduction: The company's average utilization is only 10% of the 1 Gbps connection, indicating significant
over-provisioning. Reducing the connection speed to 200 Mbps aligns the bandwidth with actual usage,
leading to lower costs.
AWS Direct Connect Partner for Hosted Connection: Contacting an AWS Direct Connect Partner is

necessary to obtain a hosted connection. AWS directly provides dedicated connections (1 Gbps and above),
but for lower speeds, you must work through a partner.
Hosted Connection Advantage: Hosted connections are generally more cost-effective for lower bandwidth
requirements compared to dedicated connections. The partner handles the physical infrastructure and shares
the cost among multiple customers.
Security Maintenance: Switching to a 200 Mbps hosted connection doesn't inherently compromise security.
Security is managed through Virtual Private Gateways (VGWs), Direct Connect Gateways, and VPC
configurations, which remain independent of the physical connection speed.
Existing AWS Account: Using an existing AWS account simplifies the setup and integration process. No new
accounts or complex cross-account configurations are needed.

Why other options are incorrect:

**A:** Setting up another 1 Gbps connection and sharing it doesn't reduce costs; it duplicates them. Sharing also
adds complexity and potential security concerns.

**B:** Setting up a 200 Mbps connection directly in the AWS Management Console isn't possible; AWS only
provides higher speed connections directly, lower speeds are available through partners.

**C:** Similar to A, setting up another 1 Gbps connection doesn't solve the over-provisioning issue. Sharing with
another AWS account introduces complexity. While AWS Direct Connect Partners provide connections, a 1
Gbps connection isn't needed when the average utilization is 10%.
In summary: Answer D provides the optimal balance between cost reduction and security by scaling the
connection speed down to match utilization through a cost-effective hosted connection obtained via an AWS
Direct Connect Partner.
Supporting Links:
AWS Direct Connect Pricing: https://aws.amazon.com/directconnect/pricing/ (Illustrates cost differences
based on connection speed)
AWS Direct Connect Partners: https://aws.amazon.com/directconnect/partners/
AWS Direct Connect FAQs: https://aws.amazon.com/directconnect/faqs/ (Clarifies dedicated vs. hosted
connections)

---

## Question 500

**Answer:** **AD**

**Explanation:**

The question requires selecting solutions for migrating on-premises Windows file servers to Amazon FSx for
Windows File Server while preserving file permissions.

**Option A**: Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the
FSx for Windows File Server file system. This is a valid option because AWS DataSync is specifically designed
for online data transfer between on-premises storage and AWS storage services, including FSx for Windows
File Server. DataSync preserves file metadata and permissions during the transfer, fulfilling the requirement.
Deploying agents on-premises allows DataSync to access the file servers and transfer the data efficiently.

**Option D**: Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS
DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File
Server file system. This is also a valid option, especially when dealing with limited network bandwidth or a
need to minimize network impact during the migration. Snowcone is a small, ruggedized, and secure edge
computing and data transfer device. By launching DataSync agents directly on Snowcone, the data transfer
process can be accelerated by minimizing the reliance on the network connectivity. DataSync, as in **Option A**,
maintains permissions. The Snowcone would need to be connected to the network.

Why other options are incorrect:

**Option B**: Copying shares to S3 using the AWS CLI and then using DataSync is not the correct approach
because the native file share structure and NTFS permissions would be lost during the S3 transfer. S3 is an
object storage, not a file system. The conversion to an object storage format would discard the metadata
required.

**Option C**: Shipping drives to AWS for import into S3 is not the correct approach for the same reason as option

**B.** Removing the drives from the file servers and shipping them is also likely to be extremely disruptive and
impractical. It won't preserve the file permissions and requires physical handling.

**Option E**: This option is also not appropriate for the same reasons as **Option B**. The AWS CLI copy to the
Snowball and subsequent transfer to S3 results in the loss of file permissions and NTFS metadata.
Furthermore, it is an unnecessary step.
Key Concepts:
AWS DataSync: An online data transfer service that simplifies, automates, and accelerates the secure
movement of data between on-premises storage and AWS storage services.
Amazon FSx for Windows File Server: A fully managed native Microsoft Windows file system built on
Windows Server.
AWS Snowcone: A small, rugged, and secure edge computing and data transfer device.
File Permissions Preservation: Maintaining the original access control settings (NTFS permissions) of files
during migration.

---

# Quick Answer Sheet

Question 451: BCF
Question 452: B
Question 453: D
Question 454: C
Question 455: BDF
Question 456: C
Question 457: C
Question 458: BC
Question 459: A
Question 460: C
Question 461: B
Question 462: B
Question 463: C
Question 464: A
Question 465: C
Question 466: A
Question 467: B
Question 468: B
Question 469: C
Question 470: D
Question 471: C
Question 472: A
Question 473: A
Question 474: C
Question 475: C
Question 476: C
Question 477: D
Question 478: B
Question 479: B
Question 480: B
Question 481: B
Question 482: B
Question 483: C
Question 484: AE
Question 485: A
Question 486: A
Question 487: C
Question 488: C
Question 489: C
Question 490: B
Question 491: A
Question 492: B
Question 493: DEF
Question 494: D
Question 495: C
Question 496: BD
Question 497: C
Question 498: A
Question 499: D
Question 500: AD
