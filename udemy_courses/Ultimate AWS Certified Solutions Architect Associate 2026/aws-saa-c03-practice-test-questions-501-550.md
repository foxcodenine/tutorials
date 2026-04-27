# AWS SAA-C03 Practice Test: Questions 501-550

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 501

A company wants to ingest customer payment data into the company's data lake in Amazon S3. The company
receives payment data every minute on average. The company wants to analyze the payment data in real time.
Then the company wants to ingest the data into the data lake.

Which solution will meet these requirements with the MOST operational efficiency?

**A.** Use Amazon Kinesis Data Streams to ingest data. Use AWS Lambda to analyze the data in real time.

**B.** Use AWS Glue to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.

**C.** Use Amazon Kinesis Data Firehose to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in
real time.

**D.** Use Amazon API Gateway to ingest data. Use AWS Lambda to analyze the data in real time.

---

## Question 502

A company runs a website that uses a content management system (CMS) on Amazon EC2. The CMS runs on a
single EC2 instance and uses an Amazon Aurora MySQL Multi-AZ DB instance for the data tier. Website images are
stored on an Amazon Elastic Block Store (Amazon EBS) volume that is mounted inside the EC2 instance.
Which combination of actions should a solutions architect take to improve the performance and resilience of the
website? (Choose two.)

**A.** Move the website images into an Amazon S3 bucket that is mounted on every EC2 instance

**B.** Share the website images by using an NFS share from the primary EC2 instance. Mount this share on the
other EC2 instances.

**C.** Move the website images onto an Amazon Elastic File System (Amazon EFS) file system that is mounted on
every EC2 instance.

**D.** Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new
instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling
group to maintain a minimum of two instances. Configure an accelerator in AWS Global Accelerator for the
website

**E.** Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new
instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling
group to maintain a minimum of two instances. Configure an Amazon CloudFront distribution for the website.

---

## Question 503

A company runs an infrastructure monitoring service. The company is building a new feature that will enable the
service to monitor data in customer AWS accounts. The new feature will call AWS APIs in customer accounts to
describe Amazon EC2 instances and read Amazon CloudWatch metrics.
What should the company do to obtain access to customer accounts in the MOST secure way?

**A.** Ensure that the customers create an IAM role in their account with read-only EC2 and CloudWatch
permissions and a trust policy to the company’s account.

**B.** Create a serverless API that implements a token vending machine to provide temporary AWS credentials for a
role with read-only EC2 and CloudWatch permissions.

**C.** Ensure that the customers create an IAM user in their account with read-only EC2 and CloudWatch
permissions. Encrypt and store customer access and secret keys in a secrets management system.

**D.** Ensure that the customers create an Amazon Cognito user in their account to use an IAM role with read-only
EC2 and CloudWatch permissions. Encrypt and store the Amazon Cognito user and password in a secrets
management system.

---

## Question 504

A company needs to connect several VPCs in the us-east-1 Region that span hundreds of AWS accounts. The
company's networking team has its own AWS account to manage the cloud network.
What is the MOST operationally efficient solution to connect the VPCs?

**A.** Set up VPC peering connections between each VPC. Update each associated subnet’s route table

**B.** Configure a NAT gateway and an internet gateway in each VPC to connect each VPC through the internet

**C.** Create an AWS Transit Gateway in the networking team’s AWS account. Configure static routes from each
VPC.

**D.** Deploy VPN gateways in each VPC. Create a transit VPC in the networking team’s AWS account to connect to
each VPC.

---

## Question 505

A company has Amazon EC2 instances that run nightly batch jobs to process data. The EC2 instances run in an
Auto Scaling group that uses On-Demand billing. If a job fails on one instance, another instance will reprocess the
job. The batch jobs run between 12:00 AM and 06:00 AM local time every day.
Which solution will provide EC2 instances to meet these requirements MOST cost-effectively?

**A.** Purchase a 1-year Savings Plan for Amazon EC2 that covers the instance family of the Auto Scaling group
that the batch job uses.

**B.** Purchase a 1-year Reserved Instance for the specific instance type and operating system of the instances in
the Auto Scaling group that the batch job uses.

**C.** Create a new launch template for the Auto Scaling group. Set the instances to Spot Instances. Set a policy to
scale out based on CPU usage.

**D.** Create a new launch template for the Auto Scaling group. Increase the instance size. Set a policy to scale out
based on CPU usage.

---

## Question 506

A social media company is building a feature for its website. The feature will give users the ability to upload
photos. The company expects significant increases in demand during large events and must ensure that the
website can handle the upload traffic from users.
Which solution meets these requirements with the MOST scalability?

**A.** Upload files from the user's browser to the application servers. Transfer the files to an Amazon S3 bucket.

**B.** Provision an AWS Storage Gateway file gateway. Upload files directly from the user's browser to the file
gateway.

**C.** Generate Amazon S3 presigned URLs in the application. Upload files directly from the user's browser into an
S3 bucket.

**D.** Provision an Amazon Elastic File System (Amazon EFS) file system. Upload files directly from the user's
browser to the file system.

---

## Question 507

A company has a web application for travel ticketing. The application is based on a database that runs in a single
data center in North America. The company wants to expand the application to serve a global user base. The
company needs to deploy the application to multiple AWS Regions. Average latency must be less than 1 second on
updates to the reservation database.
The company wants to have separate deployments of its web platform across multiple Regions. However, the
company must maintain a single primary reservation database that is globally consistent.
Which solution should a solutions architect recommend to meet these requirements?

**A.** Convert the application to use Amazon DynamoDB. Use a global table for the center reservation table. Use
the correct Regional endpoint in each Regional deployment.

**B.** Migrate the database to an Amazon Aurora MySQL database. Deploy Aurora Read Replicas in each Region.
Use the correct Regional endpoint in each Regional deployment for access to the database.

**C.** Migrate the database to an Amazon RDS for MySQL database. Deploy MySQL read replicas in each Region.
Use the correct Regional endpoint in each Regional deployment for access to the database.

**D.** Migrate the application to an Amazon Aurora Serverless database. Deploy instances of the database to each
Region. Use the correct Regional endpoint in each Regional deployment to access the database. Use AWS
Lambda functions to process event streams in each Region to synchronize the databases.

---

## Question 508

A company has migrated multiple Microsoft Windows Server workloads to Amazon EC2 instances that run in the
us-west-1 Region. The company manually backs up the workloads to create an image as needed.
In the event of a natural disaster in the us-west-1 Region, the company wants to recover workloads quickly in the
us-west-2 Region. The company wants no more than 24 hours of data loss on the EC2 instances. The company also
wants to automate any backups of the EC2 instances.
Which solutions will meet these requirements with the LEAST administrative effort? (Choose two.)

**A.** Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on
tags. Schedule the backup to run twice daily. Copy the image on demand.

**B.** Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on
tags. Schedule the backup to run twice daily. Configure the copy to the us-west-2 Region.

**C.** Create backup vaults in us-west-1 and in us-west-2 by using AWS Backup. Create a backup plan for the EC2
instances based on tag values. Create an AWS Lambda function to run as a scheduled job to copy the backup
data to us-west-2.

**D.** Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances
based on tag values. Define the destination for the copy as us-west-2. Specify the backup schedule to run twice
daily.

**E.** Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances
based on tag values. Specify the backup schedule to run twice daily. Copy on demand to us-west-2.

---

## Question 509

A company operates a two-tier application for image processing. The application uses two Availability Zones, each
with one public subnet and one private subnet. An Application Load Balancer (ALB) for the web tier uses the public
subnets. Amazon EC2 instances for the application tier use the private subnets.

Users report that the application is running more slowly than expected. A security audit of the web server log files
shows that the application is receiving millions of illegitimate requests from a small number of IP addresses. A
solutions architect needs to resolve the immediate performance problem while the company investigates a more
permanent solution.
What should the solutions architect recommend to meet this requirement?

**A.** Modify the inbound security group for the web tier. Add a deny rule for the IP addresses that are consuming
resources.

**B.** Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP addresses that are
consuming resources.

**C.** Modify the inbound security group for the application tier. Add a deny rule for the IP addresses that are
consuming resources.

**D.** Modify the network ACL for the application tier subnets. Add an inbound deny rule for the IP addresses that
are consuming resources.

---

## Question 510

A global marketing company has applications that run in the ap-southeast-2 Region and the eu-west-1 Region.
Applications that run in a VPC in eu-west-1 need to communicate securely with databases that run in a VPC in apsoutheast-2.
Which network design will meet these requirements?

**A.** Create a VPC peering connection between the eu-west-1 VPC and the ap-southeast-2 VPC. Create an inbound
rule in the eu-west-1 application security group that allows traffic from the database server IP addresses in the
ap-southeast-2 security group.

**B.** Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. Update the
subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that references the
security group ID of the application servers in eu-west-1.

**C.** Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPUpdate the
subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that allows traffic
from the eu-west-1 application server IP addresses.

**D.** Create a transit gateway with a peering attachment between the eu-west-1 VPC and the ap-southeast-2 VPC.
After the transit gateways are properly peered and routing is configured, create an inbound rule in the
database security group that references the security group ID of the application servers in eu-west-1.

---

## Question 511

A company is developing software that uses a PostgreSQL database schema. The company needs to configure
multiple development environments and databases for the company's developers. On average, each development
environment is used for half of the 8-hour workday.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure each development environment with its own Amazon Aurora PostgreSQL database

**B.** Configure each development environment with its own Amazon RDS for PostgreSQL Single-AZ DB instances

**C.** Configure each development environment with its own Amazon Aurora On-Demand PostgreSQL-Compatible
database

**D.** Configure each development environment with its own Amazon S3 bucket by using Amazon S3 Object Select

---

## Question 512

A company uses AWS Organizations with resources tagged by account. The company also uses AWS Backup to
back up its AWS infrastructure resources. The company needs to back up all AWS resources.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Config to identify all untagged resources. Tag the identified resources programmatically. Use tags
in the backup plan.

**B.** Use AWS Config to identify all resources that are not running. Add those resources to the backup vault.

**C.** Require all AWS account owners to review their resources to identify the resources that need to be backed
up.

**D.** Use Amazon Inspector to identify all noncompliant resources.

---

## Question 513

A social media company wants to allow its users to upload images in an application that is hosted in the AWS
Cloud. The company needs a solution that automatically resizes the images so that the images can be displayed on
multiple device types. The application experiences unpredictable traffic patterns throughout the day. The
company is seeking a highly available solution that maximizes scalability.
What should a solutions architect do to meet these requirements?

**A.** Create a static website hosted in Amazon S3 that invokes AWS Lambda functions to resize the images and
store the images in an Amazon S3 bucket.

**B.** Create a static website hosted in Amazon CloudFront that invokes AWS Step Functions to resize the images
and store the images in an Amazon RDS database.

**C.** Create a dynamic website hosted on a web server that runs on an Amazon EC2 instance. Configure a process
that runs on the EC2 instance to resize the images and store the images in an Amazon S3 bucket.

**D.** Create a dynamic website hosted on an automatically scaling Amazon Elastic Container Service (Amazon
ECS) cluster that creates a resize job in Amazon Simple Queue Service (Amazon SQS). Set up an image-resizing
program that runs on an Amazon EC2 instance to process the resize jobs.

---

## Question 514

A company is running a microservices application on Amazon EC2 instances. The company wants to migrate the
application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for scalability. The company must
configure the Amazon EKS control plane with endpoint private access set to true and endpoint public access set to
false to maintain security compliance. The company must also put the data plane in private subnets. However, the
company has received error notifications because the node cannot join the cluster.
Which solution will allow the node to join the cluster?

**A.** Grant the required permission in AWS Identity and Access Management (IAM) to the AmazonEKSNodeRole
IAM role.

**B.** Create interface VPC endpoints to allow nodes to access the control plane.

**C.** Recreate nodes in the public subnet. Restrict security groups for EC2 nodes.

**D.** Allow outbound traffic in the security group of the nodes.

---

## Question 515

A company is migrating an on-premises application to AWS. The company wants to use Amazon Redshift as a

solution.
Which use cases are suitable for Amazon Redshift in this scenario? (Choose three.)

**A.** Supporting data APIs to access data with traditional, containerized, and event-driven applications

**B.** Supporting client-side and server-side encryption

**C.** Building analytics workloads during specified hours and when the application is not active

**D.** Caching data to reduce the pressure on the backend database

**E.** Scaling globally to support petabytes of data and tens of millions of requests per minute

**F.** Creating a secondary replica of the cluster by using the AWS Management Console

---

## Question 516

A company provides an API interface to customers so the customers can retrieve their financial information. Еhe

company expects a larger number of requests during peak usage times of the year.
The company requires the API to respond consistently with low latency to ensure customer satisfaction. The
company needs to provide a compute host for the API.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use an Application Load Balancer and Amazon Elastic Container Service (Amazon ECS).

**B.** Use Amazon API Gateway and AWS Lambda functions with provisioned concurrency.

**C.** Use an Application Load Balancer and an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.

**D.** Use Amazon API Gateway and AWS Lambda functions with reserved concurrency.

---

## Question 517

A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for archival
purposes.
Which solution will meet this requirement with the MOST operational efficiency?

**A.** Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session data to.

**B.** Install the Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Export the logs to an S3
bucket from the group for archival purposes.

**C.** Create a Systems Manager document to upload all server logs to a central S3 bucket. Use Amazon
EventBridge to run the Systems Manager document against all servers that are in the account daily.

**D.** Install an Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Create a CloudWatch logs
subscription that pushes any incoming log events to an Amazon Kinesis Data Firehose delivery stream. Set
Amazon S3 as the destination.

---

## Question 518

An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low on disk space. A
solutions architect wants to increase the disk space without downtime.
Which solution meets these requirements with the LEAST amount of effort?

**A.** Enable storage autoscaling in RDS

**B.** Increase the RDS database instance size

**C.** Change the RDS database instance storage type to Provisioned IOPS

**D.** Back up the RDS database, increase the storage capacity, restore the database, and stop the previous
instance

---

## Question 519

A consulting company provides professional services to customers worldwide. The company provides solutions
and tools for customers to expedite gathering and analyzing data on AWS. The company needs to centrally
manage and deploy a common set of solutions and tools for customers to use for self-service purposes.
Which solution will meet these requirements?

**A.** Create AWS CloudFormation templates for the customers.

**B.** Create AWS Service Catalog products for the customers.

**C.** Create AWS Systems Manager templates for the customers.

**D.** Create AWS Config items for the customers.

---

## Question 520

A company is designing a new web application that will run on Amazon EC2 Instances. The application will use
Amazon DynamoDB for backend data storage. The application traffic will be unpredictable. The company expects
that the application read and write throughput to the database will be moderate to high. The company needs to
scale in response to application traffic.
Which DynamoDB table configuration will meet these requirements MOST cost-effectively?

**A.** Configure DynamoDB with provisioned read and write by using the DynamoDB Standard table class. Set
DynamoDB auto scaling to a maximum defined capacity.

**B.** Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class.

**C.** Configure DynamoDB with provisioned read and write by using the DynamoDB Standard Infrequent Access
(DynamoDB Standard-IA) table class. Set DynamoDB auto scaling to a maximum defined capacity.

**D.** Configure DynamoDB in on-demand mode by using the DynamoDB Standard Infrequent Access (DynamoDB
Standard-IA) table class.

---

## Question 521

A retail company has several businesses. The IT team for each business manages its own AWS account. Each team
account is part of an organization in AWS Organizations. Each team monitors its product inventory levels in an
Amazon DynamoDB table in the team's own AWS account.
The company is deploying a central inventory reporting application into a shared AWS account. The application
must be able to read items from all the teams' DynamoDB tables.
Which authentication option will meet these requirements MOST securely?

**A.** Integrate DynamoDB with AWS Secrets Manager in the inventory application account. Configure the
application to use the correct secret from Secrets Manager to authenticate and read the DynamoDB table.
Schedule secret rotation for every 30 days.

**B.** In every business account, create an IAM user that has programmatic access. Configure the application to use
the correct IAM user access key ID and secret access key to authenticate and read the DynamoDB table.
Manually rotate IAM access keys every 30 days.

**C.** In every business account, create an IAM role named BU_ROLE with a policy that gives the role access to the
DynamoDB table and a trust policy to trust a specific role in the inventory application account. In the inventory
account, create a role named APP_ROLE that allows access to the STS AssumeRole API operation. Configure
the application to use APP_ROLE and assume the crossaccount role BU_ROLE to read the DynamoDB table.

**D.** Integrate DynamoDB with AWS Certificate Manager (ACM). Generate identity certificates to authenticate
DynamoDB. Configure the application to use the correct certificate to authenticate and read the DynamoDB
table.

---

## Question 522

A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS). The company's
workload is not consistent throughout the day. The company wants Amazon EKS to scale in and out according to
the workload.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

**A.** Use an AWS Lambda function to resize the EKS cluster.

**B.** Use the Kubernetes Metrics Server to activate horizontal pod autoscaling.

**C.** Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.

**D.** Use Amazon API Gateway and connect it to Amazon EKS.

**E.** Use AWS App Mesh to observe network activity.

---

## Question 523

A company runs a microservice-based serverless web application. The application must be able to retrieve data
from multiple Amazon DynamoDB tables A solutions architect needs to give the application the ability to retrieve
the data with no impact on the baseline performance of the application.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** AWS AppSync pipeline resolvers

**B.** Amazon CloudFront with [email protected] functions

**C.** Edge-optimized Amazon API Gateway with AWS Lambda functions

**D.** Amazon Athena Federated Query with a DynamoDB connector

---

## Question 524

A company wants to analyze and troubleshoot Access Denied errors and Unauthorized errors that are related to
IAM permissions. The company has AWS CloudTrail turned on.
Which solution will meet these requirements with the LEAST effort?

**A.** Use AWS Glue and write custom scripts to query CloudTrail logs for the errors.

**B.** Use AWS Batch and write custom scripts to query CloudTrail logs for the errors.

**C.** Search CloudTrail logs with Amazon Athena queries to identify the errors.

**D.** Search CloudTrail logs with Amazon QuickSight. Create a dashboard to identify the errors.

---

## Question 525

A company wants to add its existing AWS usage cost to its operation cost dashboard. A solutions architect needs
to recommend a solution that will give the company access to its usage cost programmatically. The company must
be able to access cost data for the current year and forecast costs for the next 12 months.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Access usage cost-related data by using the AWS Cost Explorer API with pagination.

**B.** Access usage cost-related data by using downloadable AWS Cost Explorer report .csv files.

**C.** Configure AWS Budgets actions to send usage cost data to the company through FTP.

**D.** Create AWS Budgets reports for usage cost data. Send the data to the company through SMTP.

---

## Question 526

A solutions architect is reviewing the resilience of an application. The solutions architect notices that a database
administrator recently failed over the application's Amazon Aurora PostgreSQL database writer instance as part of
a scaling exercise. The failover resulted in 3 minutes of downtime for the application.
Which solution will reduce the downtime for scaling exercises with the LEAST operational overhead?

**A.** Create more Aurora PostgreSQL read replicas in the cluster to handle the load during failover.

**B.** Set up a secondary Aurora PostgreSQL cluster in the same AWS Region. During failover, update the
application to use the secondary cluster's writer endpoint.

**C.** Create an Amazon ElastiCache for Memcached cluster to handle the load during failover.

**D.** Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint.

---

## Question 527

A company has a regional subscription-based streaming service that runs in a single AWS Region. The architecture
consists of web servers and application servers on Amazon EC2 instances. The EC2 instances are in Auto Scaling
groups behind Elastic Load Balancers. The architecture includes an Amazon Aurora global database cluster that
extends across multiple Availability Zones.
The company wants to expand globally and to ensure that its application has minimal downtime.
Which solution will provide the MOST fault tolerance?

**A.** Extend the Auto Scaling groups for the web tier and the application tier to deploy instances in Availability
Zones in a second Region. Use an Aurora global database to deploy the database in the primary Region and the
second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.

**B.** Deploy the web tier and the application tier to a second Region. Add an Aurora PostgreSQL cross-Region
Aurora Replica in the second Region. Use Amazon Route 53 health checks with a failover routing policy to the
second Region. Promote the secondary to primary as needed.

**C.** Deploy the web tier and the application tier to a second Region. Create an Aurora PostgreSQL database in the
second Region. Use AWS Database Migration Service (AWS DMS) to replicate the primary database to the
second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.

**D.** Deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global database to
deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a
failover routing policy to the second Region. Promote the secondary to primary as needed.

---

## Question 528

A data analytics company wants to migrate its batch processing system to AWS. The company receives thousands
of small data files periodically during the day through FTP. An on-premises batch job processes the data files
overnight. However, the batch job takes hours to finish running.
The company wants the AWS solution to process incoming data files as soon as possible with minimal changes to
the FTP clients that send the files. The solution must delete the incoming data files after the files have been
processed successfully. Processing for each file needs to take 3-8 minutes.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Use an Amazon EC2 instance that runs an FTP server to store incoming files as objects in Amazon S3 Glacier
Flexible Retrieval. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the job to
process the objects nightly from S3 Glacier Flexible Retrieval. Delete the objects after the job has processed
the objects.

**B.** Use an Amazon EC2 instance that runs an FTP server to store incoming files on an Amazon Elastic Block
Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the

job to process the files nightly from the EBS volume. Delete the files after the job has processed the files.

**C.** Use AWS Transfer Family to create an FTP server to store incoming files on an Amazon Elastic Block Store
(Amazon EBS) volume. Configure a job queue in AWS Batch. Use an Amazon S3 event notification when each
file arrives to invoke the job in AWS Batch. Delete the files after the job has processed the files.

**D.** Use AWS Transfer Family to create an FTP server to store incoming files in Amazon S3 Standard. Create an
AWS Lambda function to process the files and to delete the files after they are processed. Use an S3 event
notification to invoke the Lambda function when the files arrive.

---

## Question 529

A company is migrating its workloads to AWS. The company has transactional and sensitive data in its databases.
The company wants to use AWS Cloud solutions to increase security and reduce operational overhead for the
databases.
Which solution will meet these requirements?

**A.** Migrate the databases to Amazon EC2. Use an AWS Key Management Service (AWS KMS) AWS managed key
for encryption.

**B.** Migrate the databases to Amazon RDS Configure encryption at rest.

**C.** Migrate the data to Amazon S3 Use Amazon Macie for data security and protection

**D.** Migrate the database to Amazon RDS. Use Amazon CloudWatch Logs for data security and protection.

---

## Question 530

A company has an online gaming application that has TCP and UDP multiplayer gaming capabilities. The company
uses Amazon Route 53 to point the application traffic to multiple Network Load Balancers (NLBs) in different AWS
Regions. The company needs to improve application performance and decrease latency for the online game in
preparation for user growth.
Which solution will meet these requirements?

**A.** Add an Amazon CloudFront distribution in front of the NLBs. Increase the Cache-Control max-age parameter.

**B.** Replace the NLBs with Application Load Balancers (ALBs). Configure Route 53 to use latency-based routing.

**C.** Add AWS Global Accelerator in front of the NLBs. Configure a Global Accelerator endpoint to use the correct
listener ports.

**D.** Add an Amazon API Gateway endpoint behind the NLBs. Enable API caching. Override method caching for the
different stages.

---

## Question 531

A company needs to integrate with a third-party data feed. The data feed sends a webhook to notify an external
service when new data is ready for consumption. A developer wrote an AWS Lambda function to retrieve data
when the company receives a webhook callback. The developer must make the Lambda function available for the
third party to call.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create a function URL for the Lambda function. Provide the Lambda function URL to the third party for the
webhook.

**B.** Deploy an Application Load Balancer (ALB) in front of the Lambda function. Provide the ALB URL to the third
party for the webhook.

**C.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Attach the topic to the Lambda function.
Provide the public hostname of the SNS topic to the third party for the webhook.

**D.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Attach the queue to the Lambda function.
Provide the public hostname of the SQS queue to the third party for the webhook.

---

## Question 532

A company has a workload in an AWS Region. Customers connect to and access the workload by using an Amazon
API Gateway REST API. The company uses Amazon Route 53 as its DNS provider. The company wants to provide
individual and secure URLs for all customers.
Which combination of steps will meet these requirements with the MOST operational efficiency? (Choose three.)

**A.** Register the required domain in a registrar. Create a wildcard custom domain name in a Route 53 hosted zone
and record in the zone that points to the API Gateway endpoint.

**B.** Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in a different
Region.

**C.** Create hosted zones for each customer as required in Route 53. Create zone records that point to the API
Gateway endpoint.

**D.** Request a wildcard certificate that matches the custom domain name in AWS Certificate Manager (ACM) in
the same Region.

**E.** Create multiple API endpoints for each customer in API Gateway.

**F.** Create a custom domain name in API Gateway for the REST API. Import the certificate from AWS Certificate
Manager (ACM).

---

## Question 533

A company stores data in Amazon S3. According to regulations, the data must not contain personally identifiable
information (PII). The company recently discovered that S3 buckets have some objects that contain PII. The
company needs to automatically detect PII in S3 buckets and to notify the company’s security team.
Which solution will meet these requirements?

**A.** Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData event type from Macie
findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.

**B.** Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from
GuardDuty findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the
security team.

**C.** Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData:S3Object/Personal event
type from Macie findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the
security team.

**D.** Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from
GuardDuty findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security
team.

---

## Question 534

A company wants to build a logging solution for its multiple AWS accounts. The company currently stores the logs
from all accounts in a centralized account. The company has created an Amazon S3 bucket in the centralized
account to store the VPC flow logs and AWS CloudTrail logs. All logs must be highly available for 30 days for
frequent analysis, retained for an additional 60 days for backup purposes, and deleted 90 days after creation.
Which solution will meet these requirements MOST cost-effectively?

**A.** Transition objects to the S3 Standard storage class 30 days after creation. Write an expiration action that
directs Amazon S3 to delete objects after 90 days.

**B.** Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class 30 days after
creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration
action that directs Amazon S3 to delete objects after 90 days.

**C.** Transition objects to the S3 Glacier Flexible Retrieval storage class 30 days after creation. Write an
expiration action that directs Amazon S3 to delete objects after 90 days.

**D.** Transition objects to the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class 30 days after
creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration
action that directs Amazon S3 to delete objects after 90 days.

---

## Question 535

A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its workloads. All secrets
that are stored in Amazon EKS must be encrypted in the Kubernetes etcd key-value store.
Which solution will meet these requirements?

**A.** Create a new AWS Key Management Service (AWS KMS) key. Use AWS Secrets Manager to manage, rotate,
and store all secrets in Amazon EKS.

**B.** Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS KMS secrets encryption
on the Amazon EKS cluster.

**C.** Create the Amazon EKS cluster with default options. Use the Amazon Elastic Block Store (Amazon EBS)
Container Storage Interface (CSI) driver as an add-on.

**D.** Create a new AWS Key Management Service (AWS KMS) key with the alias/aws/ebs alias. Enable default
Amazon Elastic Block Store (Amazon EBS) volume encryption for the account.

---

## Question 536

A company wants to provide data scientists with near real-time read-only access to the company's production
Amazon RDS for PostgreSQL database. The database is currently configured as a Single-AZ database. The data
scientists use complex queries that will not affect the production database. The company needs a solution that is
highly available.

Which solution will meet these requirements MOST cost-effectively?

**A.** Scale the existing production database in a maintenance window to provide enough power for the data
scientists.

**B.** Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby
instance. Provide the data scientists access to the secondary instance.

**C.** Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas
for the data scientists.

**D.** Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby instances.
Provide read endpoints to the data scientists.

---

## Question 537

A company runs a three-tier web application in the AWS Cloud that operates across three Availability Zones. The
application architecture has an Application Load Balancer, an Amazon EC2 web server that hosts user session
states, and a MySQL database that runs on an EC2 instance. The company expects sudden increases in application
traffic. The company wants to be able to scale to meet future application capacity demands and to ensure high
availability across all three Availability Zones.
Which solution will meet these requirements?

**A.** Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon
ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to
an Auto Scaling group that is in three Availability Zones.

**B.** Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon
ElastiCache for Memcached with high availability to store session data and to cache reads. Migrate the web
server to an Auto Scaling group that is in three Availability Zones.

**C.** Migrate the MySQL database to Amazon DynamoDB Use DynamoDB Accelerator (DAX) to cache reads. Store
the session data in DynamoDB. Migrate the web server to an Auto Scaling group that is in three Availability
Zones.

**D.** Migrate the MySQL database to Amazon RDS for MySQL in a single Availability Zone. Use Amazon
ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to
an Auto Scaling group that is in three Availability Zones.

---

## Question 538

A global video streaming company uses Amazon CloudFront as a content distribution network (CDN). The company
wants to roll out content in a phased manner across multiple countries. The company needs to ensure that viewers
who are outside the countries to which the company rolls out content are not able to view the content.
Which solution will meet these requirements?

**A.** Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom error
message.

**B.** Set up a new URL tor restricted content. Authorize access by using a signed URL and cookies. Set up a
custom error message.

**C.** Encrypt the data for the content that the company distributes. Set up a custom error message.

**D.** Create a new URL for restricted content. Set up a time-restricted access policy for signed URLs.

---

## Question 539

A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR) configuration. The
company's core production business application uses Microsoft SQL Server Standard, which runs on a virtual
machine (VM). The application has a recovery point objective (RPO) of 30 seconds or fewer and a recovery time
objective (RTO) of 60 minutes. The DR solution needs to minimize costs wherever possible.
Which solution will meet these requirements?

**A.** Configure a multi-site active/active setup between the on-premises server and AWS by using Microsoft SQL
Server Enterprise with Always On availability groups.

**B.** Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS Database
Migration Service (AWS DMS) to use change data capture (CDC).

**C.** Use AWS Elastic Disaster Recovery configured to replicate disk changes to AWS as a pilot light.

**D.** Use third-party backup software to capture backups every night. Store a secondary set of backups in Amazon
S3.

---

## Question 540

A company has an on-premises server that uses an Oracle database to process and store customer information.
The company wants to use an AWS database service to achieve higher availability and to improve application
performance. The company also wants to offload reporting from its primary database system.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS
Regions. Point the reporting functions toward a separate DB instance from the primary DB instance.

**B.** Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same
zone as the primary DB instance. Direct the reporting functions to the read replica.

**C.** Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the
reporting functions to use the reader instance in the cluster deployment.

**D.** Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct
the reporting functions to the reader instances.

---

## Question 541

A company wants to build a web application on AWS. Client access requests to the website are not predictable and
can be idle for a long time. Only customers who have paid a subscription fee can have the ability to sign in and use
the web application.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)

**A.** Create an AWS Lambda function to retrieve user information from Amazon DynamoDB. Create an Amazon API
Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function.

**B.** Create an Amazon Elastic Container Service (Amazon ECS) service behind an Application Load Balancer to
retrieve user information from Amazon RDS. Create an Amazon API Gateway endpoint to accept RESTful APIs.
Send the API calls to the Lambda function.

**C.** Create an Amazon Cognito user pool to authenticate users.

**D.** Create an Amazon Cognito identity pool to authenticate users.

**E.** Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an integrated Amazon
CloudFront configuration.

**F.** Use Amazon S3 static web hosting with PHP, CSS, and JS. Use Amazon CloudFront to serve the frontend web
content.

---

## Question 542

A media company uses an Amazon CloudFront distribution to deliver content over the internet. The company wants
only premium customers to have access to the media streams and file content. The company stores all content in
an Amazon S3 bucket. The company also delivers content on demand to customers for a specific purpose, such as
movie rentals or music downloads.
Which solution will meet these requirements?

**A.** Generate and provide S3 signed cookies to premium customers.

**B.** Generate and provide CloudFront signed URLs to premium customers.

**C.** Use origin access control (OAC) to limit the access of non-premium customers.

**D.** Generate and activate field-level encryption to block non-premium customers.

---

## Question 543

A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled. The company recently
purchased a Savings Pian. Because of changes in the company’s business requirements, the company has
decommissioned a large number of EC2 instances. The company wants to use its Savings Plan discounts on its
other AWS accounts.
Which combination of steps will meet these requirements? (Choose two.)

**A.** From the AWS Account Management Console of the management account, turn on discount sharing from the
billing preferences section.

**B.** From the AWS Account Management Console of the account that purchased the existing Savings Plan, turn
on discount sharing from the billing preferences section. Include all accounts.

**C.** From the AWS Organizations management account, use AWS Resource Access Manager (AWS RAM) to share
the Savings Plan with other accounts.

**D.** Create an organization in AWS Organizations in a new payer account. Invite the other AWS accounts to join
the organization from the management account.

**E.** Create an organization in AWS Organizations in the existing AWS account with the existing EC2 instances and
Savings Plan. Invite the other AWS accounts to join the organization from the management account.

---

## Question 544

A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API Gateway endpoint is a
custom domain name that points to an Amazon Route 53 alias record. A solutions architect needs to create a
solution that has minimal effects on customers and minimal data loss to release the new version of APIs.
Which solution will meet these requirements?

**A.** Create a canary release deployment stage for API Gateway. Deploy the latest API version. Point an
appropriate percentage of traffic to the canary stage. After API verification, promote the canary stage to the
production stage.

**B.** Create a new API Gateway endpoint with a new version of the API in OpenAPI YAML file format. Use the
import-to-update operation in merge mode into the API in API Gateway. Deploy the new version of the API to
the production stage.

**C.** Create a new API Gateway endpoint with a new version of the API in OpenAPI JSON file format. Use the
import-to-update operation in overwrite mode into the API in API Gateway. Deploy the new version of the API to
the production stage.

**D.** Create a new API Gateway endpoint with new versions of the API definitions. Create a custom domain name
for the new API Gateway API. Point the Route 53 alias record to the new API Gateway API custom domain name.

---

## Question 545

A company wants to direct its users to a backup static error page if the company's primary website is unavailable.
The primary website's DNS records are hosted in Amazon Route 53. The domain is pointing to an Application Load
Balancer (ALB). The company needs a solution that minimizes changes and infrastructure overhead.
Which solution will meet these requirements?

**A.** Update the Route 53 records to use a latency routing policy. Add a static error page that is hosted in an
Amazon S3 bucket to the records so that the traffic is sent to the most responsive endpoints.

**B.** Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that is hosted in
an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is unhealthy.

**C.** Set up a Route 53 active-active configuration with the ALB and an Amazon EC2 instance that hosts a static

error page as endpoints. Configure Route 53 to send requests to the instance only if the health checks fail for
the ALB.

**D.** Update the Route 53 records to use a multivalue answer routing policy. Create a health check. Direct traffic
to the website if the health check passes. Direct traffic to a static error page that is hosted in Amazon S3 if the
health check does not pass.

---

## Question 546

A recent analysis of a company's IT expenses highlights the need to reduce backup costs. The company's chief
information officer wants to simplify the on-premises backup infrastructure and reduce costs by eliminating the
use of physical backup tapes. The company must preserve the existing investment in the on-premises backup

applications and workflows.
What should a solutions architect recommend?

**A.** Set up AWS Storage Gateway to connect with the backup applications using the NFS interface.

**B.** Set up an Amazon EFS file system that connects with the backup applications using the NFS interface.

**C.** Set up an Amazon EFS file system that connects with the backup applications using the iSCSI interface.

**D.** Set up AWS Storage Gateway to connect with the backup applications using the iSCSI-virtual tape library
(VTL) interface.

---

## Question 547

A company has data collection sensors at different locations. The data collection sensors stream a high volume of
data to the company. The company wants to design a platform on AWS to ingest and process high-volume
streaming data. The solution must be scalable and support data collection in near real time. The company must
store the data in Amazon S3 for future reporting.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3.

**B.** Use AWS Glue to deliver streaming data to Amazon S3.

**C.** Use AWS Lambda to deliver streaming data and store the data to Amazon S3.

**D.** Use AWS Database Migration Service (AWS DMS) to deliver streaming data to Amazon S3.

---

## Question 548

A company has separate AWS accounts for its finance, data analytics, and development departments. Because of
costs and security concerns, the company wants to control which services each AWS account can use.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Systems Manager templates to control which AWS services each department can use.

**B.** Create organization units (OUs) for each department in AWS Organizations. Attach service control policies
(SCPs) to the OUs.

**C.** Use AWS CloudFormation to automatically provision only the AWS services that each department can use.

**D.** Set up a list of products in AWS Service Catalog in the AWS accounts to manage and control the usage of
specific AWS services.

---

## Question 549

A company has created a multi-tier application for its ecommerce website. The website uses an Application Load
Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on
Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing
information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy
that maximizes security without increasing operational overhead.
What should the solutions architect do to meet these requirements?

**A.** Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.

**B.** Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internetbound traffic to the NAT gateway.

**C.** Configure an internet gateway and attach it to the VPModify the private subnet route table to direct internetbound traffic to the internet gateway.

**D.** Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct
internet-bound traffic to the virtual private gateway.

---

## Question 550

A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda environment
variables. A solutions architect needs to ensure that the required permissions are in place to decrypt and use the
environment variables.
Which steps must the solutions architect take to implement the correct permissions? (Choose two.)

**A.** Add AWS KMS permissions in the Lambda resource policy.

**B.** Add AWS KMS permissions in the Lambda execution role.

**C.** Add AWS KMS permissions in the Lambda function policy.

**D.** Allow the Lambda execution role in the AWS KMS key policy.

**E.** Allow the Lambda resource policy in the AWS KMS key policy.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 501

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most operationally efficient solution for ingesting and
analyzing real-time payment data into an S3 data lake:

**Option C**: Amazon Kinesis Data Firehose and Amazon Kinesis Data Analytics
Kinesis Data Firehose: Kinesis Data Firehose is designed specifically for loading streaming data into data
lakes and data stores like S3. It's fully managed, requiring minimal administration. It automatically scales to
handle the data volume and provides built-in features for data transformation, compression, and encryption. It
can deliver directly to S3 with configurable buffering, which optimizes costs and performance.
https://aws.amazon.com/kinesis/data-firehose/
Kinesis Data Analytics: Kinesis Data Analytics is a powerful service for real-time data stream processing. It
allows you to write SQL queries or use Apache Flink to analyze streaming data as it arrives. It provides lowlatency results and integrates seamlessly with other AWS services. https://aws.amazon.com/kinesis/dataanalytics/
Why other options are less optimal:

**Option A** (Kinesis Data Streams & Lambda): While Kinesis Data Streams can ingest data, using Lambda for
real-time analysis for every payment event might be expensive and less efficient than Kinesis Data Analytics.
Lambda functions have execution time limitations, and managing concurrency and scaling can be complex for
continuous, high-volume streams. Lambda doesn't inherently integrate with S3 for data lake population.
https://aws.amazon.com/lambda/ https://aws.amazon.com/kinesis/data-streams/

**Option B** (Glue & Kinesis Data Analytics): AWS Glue is primarily for ETL (Extract, Transform, Load) operations
and data cataloging, not real-time data ingestion. While Kinesis Data Analytics is suitable for analyzing data
once ingested, Glue would not satisfy the requirement to have data ingested on a minute-by-minute basis.
Glue is more suited for batch processing. https://aws.amazon.com/glue/

**Option D** (API Gateway & Lambda): API Gateway is designed to manage APIs, not stream high volumes of
data directly into a data lake. Using API Gateway to forward every payment to Lambda and then to S3 would
add unnecessary overhead and cost. API Gateway is not meant for ingestion of high velocity data.
https://aws.amazon.com/api-gateway/
In summary:

**Option C** provides the most streamlined and cost-effective approach. Kinesis Data Firehose efficiently
handles the ingestion of streaming data into S3, and Kinesis Data Analytics provides a platform for real-time
processing, meeting both real-time analysis and data lake population requirements with minimal operational
overhead. The managed nature of these services reduces the operational burden on the company.

---

## Question 502

**Answer:** **CE**

**Explanation:**

The correct answer is C and E. Here's why:

**C.** Move the website images onto an Amazon Elastic File System (Amazon EFS) file system that is mounted
on every EC2 instance.
Performance and Scalability: Storing images on a single EBS volume tied to a single EC2 instance creates a
single point of failure and performance bottleneck. EFS provides a shared file system that can be
simultaneously accessed by multiple EC2 instances. This allows the website to scale horizontally and improve
performance by distributing the image serving load across multiple servers.
Resilience: If the original EC2 instance fails, the images are still available because they are stored on EFS,
which is designed for high availability and durability. EFS replicates data across multiple Availability Zones.
Shared Storage: EFS is designed for scenarios where multiple instances need to access the same data.
https://aws.amazon.com/efs/

**E.** Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new
instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto
Scaling group to maintain a minimum of two instances. Configure an Amazon CloudFront distribution for
the website.
Resilience: An Auto Scaling group with a minimum of two instances ensures that the website remains
available even if one instance fails. The Application Load Balancer distributes traffic across healthy instances.
Performance and Scalability: The Application Load Balancer distributes incoming traffic across multiple EC2
instances, improving response times and handling increased load. Auto Scaling allows the website to
automatically scale up or down based on traffic demands.
Content Delivery: CloudFront caches website content, including images, at edge locations around the world.
This reduces latency for users and offloads traffic from the origin server (EC2 instances).
https://aws.amazon.com/cloudfront/
AMI for Consistent Deployment: Creating an AMI from the existing instance ensures that new instances are
provisioned with the same configuration and software as the original instance, reducing the risk of
inconsistencies. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html

Why other options are less suitable:

**A:** Mounting an S3 bucket directly on EC2 instances is generally not recommended for frequently accessed
files like website images due to performance limitations. S3 is object storage, not a file system.

**B:** NFS shares are complex to manage and can become single points of failure. EFS is a managed service and
much simpler.

**D:** While creating an AMI and using an ALB with an ASG is good, configuring an accelerator does not address
content delivery to end users as well as a CDN.

---

## Question 503

**Answer:** **A**

**Explanation:**

The most secure way for the monitoring service to access customer AWS accounts is through IAM roles with
trust policies. **Option A** proposes that customers create an IAM role in their account granting read-only access
to EC2 and CloudWatch, with a trust policy that allows the company's AWS account to assume the role. This
approach, known as cross-account access using IAM roles, is the best practice for granting permissions
between AWS accounts without sharing long-term credentials. The customer retains control over the
permissions granted to the monitoring service and can revoke access at any time by modifying or deleting the
IAM role. The monitoring service uses the AWS Security Token Service (STS) to assume the role, receiving
temporary credentials that are used to access resources in the customer account.

**Option B** is less suitable because it involves creating and managing a serverless API to vend temporary
credentials. While this may provide temporary credentials, it adds unnecessary complexity and introduces a
potential point of failure and security risk. **Option C** is highly insecure because it involves creating IAM users
in customer accounts and storing their long-term access keys, which presents a significant security risk if the
keys are compromised. **Option D** introduces Amazon Cognito, which is typically used for authenticating users,
not for cross-account access in this scenario. Cognito does not provide a mechanism for allowing access to
AWS resources in a different account using credentials.

Therefore, **Option A** provides the most secure and efficient method to access customer accounts because it
adheres to the principle of least privilege and utilizes IAM roles for cross-account access, eliminating the
need to share long-term credentials.

---

## Question 504

**Answer:** **C**

**Explanation:**

The most operationally efficient solution for connecting hundreds of VPCs across multiple AWS accounts in
the us-east-1 Region, with a centralized networking team managing the cloud network, is to use AWS Transit
Gateway (TGW).

**Option C** is correct because TGW acts as a hub, simplifying VPC connectivity. Instead of creating numerous
peer-to-peer connections, each VPC attaches to the TGW. This significantly reduces the management
overhead and complexity associated with VPC peering, which would quickly become unmanageable with
hundreds of VPCs, and the associated route table maintenance (as stated in option A). TGW is designed for
this type of use case. It is a central hub in the networking team's account simplifies network management and
routing across the many VPCs that can be connected via the TGW attachment. Route tables within the TGW
manage the traffic between the VPCs.

**Option A** is not operationally efficient. Managing hundreds of VPC peering connections and constantly
updating associated route tables introduces considerable overhead and a high risk of misconfiguration. The
administrative burden scales quadratically with the number of VPCs.

**Option B**, using NAT gateways and internet gateways to connect VPCs over the internet, is insecure and
inefficient. This exposes traffic to the public internet and does not leverage the private networking
capabilities within AWS. Also, egress costs would be significant.

**Option D**, utilizing VPN gateways and a transit VPC, is an older approach compared to Transit Gateway and
adds complexity. While a transit VPC can centralize VPN connections, it requires managing instances and
routing within the transit VPC, which increases operational burden, and introduces potential bottlenecks. TGW
provides a more scalable and managed solution than a transit VPC.

In summary, Transit Gateway provides the most efficient and scalable solution for connecting numerous VPCs
across many AWS accounts because it centralizes network management, simplifies routing, and reduces
operational complexity compared to VPC peering, internet-based connections, or transit VPCs.

---

## Question 505

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Create a new launch template for the Auto Scaling group. Set the
instances to Spot Instances. Set a policy to scale out based on CPU usage.

Here's why:
Spot Instances: Spot Instances offer significant cost savings (up to 90% compared to On-Demand) by utilizing
spare EC2 capacity. The nightly batch job processing, which tolerates interruptions (as evidenced by the job
reprocessing mechanism), is a perfect use case for Spot Instances. If a Spot Instance is terminated due to
price fluctuations, another instance will automatically launch to reprocess the failed job, maintaining
reliability.
Launch Template: Using a launch template simplifies instance configuration and allows easy updates to the
Auto Scaling group.
Scaling Policy based on CPU: Scaling out based on CPU usage ensures that instances are launched only
when needed to handle the batch job's workload, optimizing resource utilization and minimizing costs. Scaling
policies linked to CPU utilization offer direct and adaptive responses to workload demands.
Why other options are less ideal:

**A.** Savings Plan: While Savings Plans offer discounts, they commit you to a consistent usage level over a
longer period. Since the batch jobs only run for 6 hours each night, the commitment for the other 18 hours
could lead to wasted resources.

**B.** Reserved Instances: Similar to Savings Plans, Reserved Instances commit you to a specific instance type
and operating system for a longer period. The risk of underutilization is also present, although less than the
savings plan, given the batch job's limited duration.

**D.** Increasing Instance Size: Increasing the instance size will lead to higher costs for the entire 6 hour run
time. Scaling out based on CPU with the correct sized instances offers a more granular approach to costs.

---

## Question 506

**Answer:** **C**

**Explanation:**

The most scalable solution for handling user photo uploads in a social media application with expected surges
in traffic is option C: generating Amazon S3 presigned URLs. Here's why:
Direct Upload to S3: Presigned URLs allow users to upload files directly to Amazon S3 without passing
through the application servers. This offloads the upload traffic from the application tier, freeing up resources
and significantly improving scalability.
Scalability of S3: S3 is designed for virtually unlimited scalability and handles massive amounts of data and
requests. It automatically scales to meet demand without requiring any manual intervention.
https://aws.amazon.com/s3/
Reduced Application Server Load: By bypassing the application servers, the solution minimizes their load,
enabling them to focus on other critical tasks like processing and serving user requests. This ensures the
application remains responsive during peak upload periods.
Cost Efficiency: S3 is cost-effective for storing large amounts of data. Since users upload directly to S3, you
only pay for the storage and data transfer used, avoiding costs associated with application server resources
for handling the uploads.
Security: Presigned URLs are time-limited and provide granular control over upload permissions. The
application controls the parameters of the presigned URL, defining the allowed actions (e.g., uploading),
expiration time, and target bucket/object.
Other options are less scalable:
A (Upload through Application Servers): This bottlenecks the application servers, making it less scalable,
particularly during peak upload periods.
B (AWS Storage Gateway): While Storage Gateway can provide on-premises access to cloud storage, it is
less suitable for directly handling high-volume browser uploads. It introduces additional complexity and
potential latency.
D (Amazon EFS): EFS is designed for shared file storage access across EC2 instances and not for direct client

uploads. EFS also typically has higher costs compared to S3 for simple storage of user uploads.

Therefore, generating S3 presigned URLs offers the optimal combination of scalability, cost-effectiveness,
and security for handling large-scale user photo uploads.

---

## Question 507

**Answer:** **A**

**Explanation:**

The best solution is A. Convert the application to use Amazon DynamoDB. Use a global table for the center
reservation table. Use the correct Regional endpoint in each Regional deployment.

Here's why:
Global Consistency: The key requirement is maintaining a single, globally consistent reservation database.
Amazon DynamoDB Global Tables are specifically designed for this purpose. They provide multi-Region,
multi-active database replication, ensuring data consistency across multiple Regions with low latency.
https://aws.amazon.com/dynamodb/global-tables/
Low Latency Updates: DynamoDB Global Tables are designed for low-latency global writes. Writes to any
Region are replicated to other Regions, typically within milliseconds.
Regional Deployments: Using Regional endpoints in each deployment allows the application to access the
DynamoDB Global Table from the nearest Region, minimizing latency for both reads and writes.
Alternatives are unsuitable: Options B, C and D use a relational database. While Aurora and RDS offer read
replicas for improved read performance in different Regions, they struggle to meet the requirement for a
single, globally consistent, writable database with low-latency updates. Aurora Serverless in option D
introduces complexity by using Lambda functions for data synchronization. This does not align well with the
consistency and latency requirement of this application.

In summary, DynamoDB Global Tables are perfectly suited for applications requiring a single, globally
consistent database with low-latency writes across multiple Regions, making option A the correct choice.

---

## Question 508

**Answer:** **BD**

**Explanation:**

The correct answer is BD. Here's a detailed justification:

**Option B**: Creating an AMI lifecycle policy with twice-daily backups and automated copying to us-west-2
directly addresses the requirements. AMI lifecycle policies provide a managed way to automate AMI creation
and deletion based on tags, minimizing administrative effort. Configuring the copy to us-west-2 ensures a
replicated image for disaster recovery. The twice-daily schedule ensures that the Recovery Point Objective
(RPO) of 24 hours is met (or exceeded). This option leverages native AWS features for backups and
replication, leading to a simple and efficient
setup.https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/image-lifecycle.html

**Option D**: AWS Backup is a centralized backup service that offers automated and managed backups across
various AWS services, including EC2. By creating a backup plan based on tags and specifying us-west-2 as
the destination for the copy, the company automates the backup and replication process in a single solution.
Configuring twice-daily backups directly fulfills the RPO requirement. This provides ease of management and
consistent backup policies across AWS resources.https://aws.amazon.com/backup/

Why other options are incorrect:

**A:** This is not the most efficient. Copying on demand is an administrative overhead.

**C:** Using a Lambda function to copy data to us-west-2 adds complexity and overhead compared to using AWS
Backup's built-in cross-region copy feature. It's extra administrative burden.

**E:** Copying on demand is an administrative overhead. AWS Backup offers a simpler automated approach for
cross-region replication.

---

## Question 509

**Answer:** **B**

**Explanation:**

The correct answer is B. Modify the network ACL for the web tier subnets. Add an inbound deny rule for the
IP addresses that are consuming resources.

Here's why:
Network ACLs (NACLs) vs. Security Groups: Both control network traffic, but they operate at different layers
and have different characteristics. Security Groups are stateful and operate at the instance level, allowing
you to control traffic to and from individual instances. NACLs, on the other hand, are stateless and operate at
the subnet level, allowing you to control traffic entering and exiting subnets. Because NACLs work at the
subnet level and are stateless, they are a more efficient and immediate way to block traffic from specific IP
addresses affecting the entire web tier.
Immediate Performance Problem: The question emphasizes resolving the immediate performance problem.
NACLs are processed before Security Groups, so changes to NACLs take effect immediately. Security Group
changes might take longer to propagate and have less immediate impact across all instances.
Web Tier Focus: The illegitimate requests are hitting the web tier (ALB in public subnets). The fastest way to
mitigate this is to block the traffic at the point of entry to the web tier subnets.
Deny Rule for Problematic IPs: Adding an inbound deny rule to the NACL for the web tier subnets will
immediately block the malicious traffic from reaching the ALB and the EC2 instances behind it, freeing up
resources and improving application performance.

Why other options are less suitable:

**A.** Modify the inbound security group for the web tier: Security groups are stateful and operate at the
instance level. While this would block traffic, it's less efficient and potentially less immediate than a NACL
change, especially if the number of instances is large.

**C.** Modify the inbound security group for the application tier: The illegitimate requests are targeting the web
tier, not the application tier directly. Blocking traffic at the application tier would not prevent the web tier
from being overloaded.

**D.** Modify the network ACL for the application tier subnets: Similar to option C, the application tier is not the
primary target. Blocking traffic at the application tier would not resolve the immediate performance problem
at the web tier.
Supporting Concepts:

Defense in Depth: This scenario illustrates the concept of defense in depth, where multiple layers of security
are implemented to protect resources. NACLs and Security Groups provide complementary security controls.
Network Segmentation: Subnets provide a way to segment your network and control traffic flow.

---

## Question 510

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:
VPC Peering creates a direct networking connection between two VPCs, enabling them to route traffic
between each other privately. This is a suitable option when you need to connect two VPCs in different
regions. For VPC Peering to work, route tables in each VPC must be updated to point to the peer VPC's CIDR
block. This allows traffic to be routed correctly. Security groups control inbound and outbound traffic at the
instance level. To allow traffic from the eu-west-1 application servers to the ap-southeast-2 database servers,
the database security group in ap-southeast-2 needs an inbound rule. This rule should specifically allow
traffic from the CIDR block or the specific IP addresses of the application servers in eu-west-1. Using security
group IDs in the other region is not supported and won't work due to the regional boundary.

**Option A** is incorrect because while VPC peering is valid, referencing a security group from another region's
security group is invalid. Security Groups can only reference other Security Groups within the same AWS
region and VPC.

**Option B** is incorrect for the same reason as option A; Security Groups can only reference other Security
Groups within the same AWS region and VPC.

**Option D** is incorrect because while Transit Gateway can connect VPCs, it's generally more complex and
costly than VPC peering for a simple two-VPC connection. A Transit Gateway introduces unnecessary
complexity and costs when a simple peering connection will suffice. Also, just like option A and B, referencing
security group IDs in another region does not work.

Here are some helpful links for further research:
VPC Peering: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
Transit Gateway: https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html

---

## Question 511

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Configure each development environment with its own Amazon Aurora
On-Demand PostgreSQL-Compatible database.

Here's why:
Cost Optimization: Aurora On-Demand allows you to pay only for the compute resources your database
consumes, per second, with no minimum charges. This aligns perfectly with the requirement that each
development environment is used for only half of the workday. During the idle periods, the database cost will
be significantly reduced, leading to substantial savings compared to always-on RDS or Aurora instances.
Aurora PostgreSQL Compatibility: Aurora PostgreSQL is wire-compatible with standard PostgreSQL,
ensuring the company's software works seamlessly without code modifications.
Development Environment Isolation: Each developer gets their isolated database environment, preventing
conflicts and ensuring independent development.
Scalability and Performance: Even in on-demand mode, Aurora PostgreSQL offers excellent performance
and scalability compared to Single-AZ RDS instances.
Single-AZ RDS Inefficiency: RDS Single-AZ instances (option B) are always running, regardless of usage,
making them less cost-effective when instances are idle for significant portions of the day.
Aurora vs RDS: Aurora is designed for high availability and performance than RDS.
S3 Object Select Inapplicability: Amazon S3 Object Select (option D) is used for querying data within S3
objects and is completely irrelevant for setting up a PostgreSQL database for development environments.
Aurora Provisioned Instances Inefficiency: **Option A**, using standard Aurora, would be expensive since the
instances would be charged regardless of whether they are being used or not.
In Summary: On-demand Aurora PostgreSQL clusters enable users to launch a fully compliant and completely
isolated version of Aurora PostgreSQL in minutes. You can immediately reduce the cost of running nonproduction databases by only paying for the capacity you consume.

Further reading on Aurora On-Demand can be found here:
AWS Aurora On-Demand Pricing

---

## Question 512

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
AWS Organizations and Tagging: The company already leverages AWS Organizations and tags resources by
account. This establishes a foundation for organized resource management.
AWS Backup and Tag-Based Backups: AWS Backup natively supports tag-based backups. This allows you to
dynamically include resources in backup plans based on their tags, minimizing manual configuration.
Identifying Untagged Resources with AWS Config: The problem states that the company needs to back up
all resources. Therefore, any resources not currently tagged will not be backed up using their existing
method. AWS Config can continuously assess your AWS resources, making it ideal for finding resources
without specific tags.
Programmatic Tagging: Once AWS Config identifies untagged resources, you can use scripts (e.g., AWS CLI,
SDKs) to apply the necessary tags programmatically. This ensures consistent tagging and avoids manual
errors.
Least Operational Overhead: This approach minimizes manual effort and ongoing maintenance. By
automating the tagging process, you avoid the need for constant manual checks and updates to backup plans.
Options C and D would add complexity in the form of manual review or focus on security rather than backup
coverage.
Incorrect Options:

**B:** AWS Config can identify many different aspects of the AWS environment, however, this is an overengineered solution that does not directly address the tagging requirement.

**C:** This places a burden on individual account owners to remember to identify and tag their respective
resources. This is also error prone, time consuming, and adds a large amount of operational overhead.

**D:** Amazon Inspector is designed for security vulnerability management, not resource inventory or tagging.
Supporting Documentation:
AWS Backup Tag-Based Backups: https://docs.aws.amazon.com/aws-backup/latest/devguide/tags.html
AWS Config: https://aws.amazon.com/config/

---

## Question 513

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Scalability and High Availability: AWS Lambda is a serverless compute service, meaning it automatically
scales to handle fluctuating workloads without requiring management of underlying infrastructure. Amazon
S3 provides highly durable and scalable object storage, ideal for storing images.
Cost-Effectiveness: Lambda functions are billed based on execution time, making it a cost-effective solution
for unpredictable traffic patterns. S3 offers various storage classes that can be used to optimize costs based
on access frequency.
Suitability for Image Processing: Lambda functions can be easily triggered by S3 events (e.g., object
creation), allowing for automated image resizing upon upload.
Static Website Hosting: S3 can host static websites directly, serving the front-end of the application.

**Option B** is incorrect: AWS Step Functions are for orchestrating complex workflows, which is overkill for
simple image resizing. Amazon RDS is a relational database service and not suitable for storing images
directly.

**Option C** is incorrect: Running a process on an EC2 instance requires managing the instance and its scaling,
which adds complexity and is less cost-effective compared to Lambda. EC2 might not scale quickly enough
for unpredictable traffic.

**Option D** is incorrect: While ECS can scale, it involves managing container clusters. SQS adds complexity that
is unnecessary for a straightforward image resizing task. It's more complex and costly than using Lambda
directly.

---

## Question 514

**Answer:** **B**

**Explanation:**

The correct answer is B. Create interface VPC endpoints to allow nodes to access the control plane.

Here's a detailed justification:
The problem states that the EKS control plane has private access enabled and public access disabled. This
means that the control plane's API server is only accessible from within the VPC where the EKS cluster
resides. The worker nodes, which form the data plane, are in private subnets. Therefore, they don't have direct
internet access (unless a NAT gateway is configured, which isn't mentioned).
Since the nodes cannot reach the control plane directly via public internet, and public access is disabled on
the control plane, they need a private network path. This is achieved using VPC endpoints. Specifically,
interface VPC endpoints provide private connectivity to AWS services within your VPC, without requiring
internet access or a NAT gateway. By creating an interface VPC endpoint for EKS, the worker nodes in the
private subnets can communicate with the EKS control plane over the AWS private network, enabling them to
join the cluster.
Let's examine why the other options are less suitable:

**A.** Grant the required permission in AWS Identity and Access Management (IAM) to the
AmazonEKSNodeRole IAM role: IAM permissions control authorization, not network connectivity. While the
nodes need the correct IAM permissions to interact with the cluster, this won't solve the underlying problem
of the nodes being unable to reach the control plane due to network isolation.

**C.** Recreate nodes in the public subnet. Restrict security groups for EC2 nodes: Moving the nodes to public
subnets and then attempting to lock them down with security groups goes against the initial requirement of
maintaining security compliance. Moreover, it creates an unnecessary public exposure surface, increasing the
security risk. The initial setup was attempting to avoid public exposure, and this option reverts that.

**D.** Allow outbound traffic in the security group of the nodes: Allowing outbound traffic (even if restricted) is
not enough. With the control plane set to private access only, outbound traffic from the nodes needs to reach
the control plane privately. Simply allowing general outbound traffic doesn't establish the necessary private
connection. Outbound traffic alone will likely still try to reach the public endpoint, which is disabled. You need
a dedicated path.

In summary, VPC endpoints provide a secure and compliant way for nodes in private subnets to communicate
with the EKS control plane when public access is disabled.
Supporting Links:
Amazon EKS Cluster Endpoint Access Control
VPC Endpoints

---

## Question 515

**Answer:** **BCE**

**Explanation:**

The correct answer is BCE. Here's why:

**B.** Supporting client-side and server-side encryption: Amazon Redshift supports both client-side and serverside encryption to protect data at rest and in transit. This is a crucial security feature for sensitive data being
migrated to the cloud. https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-encryption.html

**C.** Building analytics workloads during specified hours and when the application is not active: Redshift is
designed for analytical workloads, such as running complex queries on large datasets. It is suited to batch
processing and scheduled analysis, making it ideal for workloads executed during off-peak hours to avoid
impacting application performance. Amazon Redshift's concurrency scaling features can automatically add
query processing power during periods of high analytical demand, and then scale back down when the
workload diminishes.

**E.** Scaling globally to support petabytes of data and tens of millions of requests per minute: Redshift is a
massively parallel processing (MPP) data warehouse that can scale to petabytes of data. Redshift also can
handle high query concurrency, making it suitable for handling tens of millions of requests, though the exact
performance is dependent on various factors like query complexity and cluster configuration.
https://aws.amazon.com/redshift/features/
Here's why the other options are incorrect:

**A.** Supporting data APIs to access data with traditional, containerized, and event-driven applications: While
you can access Redshift via APIs, it's not primarily designed to be a general-purpose data API provider for all
types of applications. Redshift focuses on analytical querying. Options like Amazon RDS with the Data API, or
DynamoDB are better suited for general data API access.

**D.** Caching data to reduce the pressure on the backend database: Redshift is a data warehouse, not a
caching layer. Caching is typically handled by services like Amazon ElastiCache or Amazon CloudFront.

**F.** Creating a secondary replica of the cluster by using the AWS Management Console: While you can take
snapshots of Redshift clusters for backups and use them to restore to a new cluster, creating a secondary
replica in the sense of a real-time failover replica via the console is not the typical way Redshift high
availability is managed. Redshift leverages features like automatic snapshots and cross-region restores for
disaster recovery, rather than continuously replicating to a hot standby. Redshift also allows for automated
backups.

---

## Question 516

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Amazon API Gateway and AWS Lambda functions with provisioned
concurrency.

Here's why:
Low Latency & Consistent Performance: Lambda functions with provisioned concurrency ensure that a
specified number of Lambda function instances are initialized and ready to respond instantly to requests. This
eliminates cold starts, providing consistent low latency, which is crucial during peak usage periods. API
Gateway acts as a front door, managing requests and routing them efficiently to Lambda.
Least Operational Overhead: Lambda is a serverless compute service. AWS manages the underlying
infrastructure, operating system patching, and scaling, significantly reducing operational overhead compared
to container-based solutions like ECS or EKS. API Gateway also simplifies API management, authorization,
and monitoring.

Why other options are less suitable:
A & C (ECS/EKS): Managing container orchestration platforms like ECS or EKS requires significant
operational overhead. You need to manage the cluster, scaling, and container deployments.
D (Reserved Concurrency): While similar to provisioned concurrency, the option given of reserved
concurrency is not the same feature provided by Lambda. Provisioned concurrency actively pre-warms
instances, and using the "reserved" setting only prevents other functions from using allocated resources.
Benefits of API Gateway and Lambda:
Scalability: Both services automatically scale to handle increased traffic during peak periods.
Cost-Effectiveness: You only pay for the compute time consumed by Lambda functions.
Security: API Gateway provides features like authentication, authorization, and request validation.

In summary, leveraging Amazon API Gateway and AWS Lambda functions with provisioned concurrency offers
the optimal balance of low latency, consistent performance, scalability, and minimal operational overhead for
a high-traffic API service.

---

## Question 517

**Answer:** **A**

**Explanation:**

The most operationally efficient solution for archiving Systems Manager Session Manager logs to an S3
bucket is A. Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session
data to.

Here's why:
Direct Integration: Systems Manager Session Manager has native integration with S3 for logging. This means
you can configure logging directly within the Systems Manager console, avoiding the need for additional
services or complex configurations.
Simplified Configuration: Enabling S3 logging in the Systems Manager console is a straightforward process
involving selecting an S3 bucket as the destination. This requires minimal setup and maintenance.
Operational Overhead: Solution A has the least operational overhead. It leverages the built-in functionality of
Systems Manager Session Manager, which is designed to directly stream logs to S3. This eliminates the need
for deploying, configuring, and managing additional components, making it operationally efficient.
Cost-Effectiveness: By minimizing the number of services and configurations, Solution A reduces the
potential for errors and the need for monitoring and troubleshooting, thereby lowering operational costs.
Alternatives: Solution B (CloudWatch Agent and exporting logs to S3) introduces extra layers of complexity.
Installing and configuring agents on instances and managing CloudWatch log groups adds overhead.
Furthermore, exporting logs from CloudWatch requires additional configuration and potentially incurs
additional costs. Solutions C introduces complexities of SSM documents and eventbridge schedules.

In summary, leveraging the native S3 logging feature of Systems Manager Session Manager provides the
simplest, most direct, and operationally efficient way to archive session logs to an S3 bucket. It avoids
unnecessary complexity and minimizes the management burden.
Reference:
AWS Documentation on Systems Manager Session Manager Logging

---

## Question 518

**Answer:** **A**

**Explanation:**

The correct answer is A: Enable storage autoscaling in RDS. This is the simplest and most efficient way to
address the low disk space issue without downtime. Storage autoscaling automatically increases storage
capacity when needed, up to a user-defined maximum, preventing applications from running out of space. This
eliminates the need for manual intervention and potential downtime associated with manual scaling
operations.

**Option B**, increasing the RDS database instance size, affects the compute resources (CPU, memory) but
doesn't directly address storage capacity. It's an unnecessary change for resolving a storage problem. Option
C, changing the storage type to Provisioned IOPS, primarily focuses on improving I/O performance rather than
increasing capacity. While it might offer some incidental capacity increase, it's not the primary solution.

**Option D**, backing up, increasing storage, and restoring, involves significant downtime, which is contrary to the
question's requirements.
Storage autoscaling is specifically designed for this scenario and is the least intrusive. It seamlessly extends
the storage without interrupting the application. Amazon RDS monitors the free storage space and
automatically scales the storage when it detects that the database is approaching its capacity limit. This
feature is enabled with a few clicks in the AWS Management Console or using the AWS CLI. It offers a costeffective and hands-off approach to managing storage requirements.
For further research, refer to the official AWS documentation on RDS Storage Autoscaling:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html and Managing
Storage Capacity:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConfigureStorage.html. These resources
will provide comprehensive information on enabling and managing storage autoscaling, along with best
practices.

---

## Question 519

**Answer:** **B**

**Explanation:**

The correct answer is B. Create AWS Service Catalog products for the customers.

Here's why:
AWS Service Catalog enables organizations to create and manage catalogs of IT services that are approved
for use on AWS. These services can include everything from virtual machines and databases to complete
multi-tier application architectures. The key benefit here is centralized management and deployment. The
consulting company can define a standardized set of solutions and tools as Service Catalog products.
By creating these products, the company provides a self-service portal for customers to deploy these preapproved, configured solutions. This ensures consistency, reduces errors, and simplifies the process for the
customers. Service Catalog products are versioned, allowing for controlled updates and rollbacks. Customers
can self-provision these solutions without needing extensive AWS expertise or direct interaction with the
consulting company. This aligns with the requirement for self-service and standardized tools.
Options A, C, and D are not as suitable:

**A.** Create AWS CloudFormation templates for the customers: While CloudFormation is a valid infrastructureas-code tool, it doesn't provide the same level of abstraction and governance as Service Catalog.
CloudFormation templates require customers to have a certain level of AWS understanding, which defeats
the purpose of self-service. There's no central management and versioning like Service Catalog.

**C.** Create AWS Systems Manager templates for the customers: AWS Systems Manager is primarily for
operational management and automation tasks on existing AWS resources. Although it includes automation
capabilities, it's not designed for creating and managing self-service catalogs of IT services. It's more suitable
for operational tasks after the infrastructure is deployed.

**D.** Create AWS Config items for the customers: AWS Config is for auditing and compliance; it does not
provide provisioning capabilities. It's used to assess, audit, and evaluate the configurations of AWS resources.
It can't deploy solutions.

In summary, AWS Service Catalog is the most appropriate solution for providing a centrally managed, selfservice portal for customers to deploy pre-defined solutions and tools.

---

## Question 520

**Answer:** **B**

**Explanation:**

The most cost-effective DynamoDB configuration for an application with unpredictable traffic and moderate
to high throughput requirements is using on-demand mode with the DynamoDB Standard table class (Option
B).

Here's why:
Unpredictable Traffic: On-demand mode eliminates the need to provision read and write capacity units
(RCUs/WCUs). DynamoDB automatically scales capacity in response to application traffic. This is ideal for
unpredictable workloads because you only pay for the reads and writes your application actually performs.
Cost-Effectiveness: While provisioned mode with auto-scaling can handle traffic fluctuations, it requires you
to estimate peak capacity and set scaling parameters. On-demand mode avoids over-provisioning, which is a
common issue with auto-scaling when workloads are highly variable, leading to cost savings.
DynamoDB Standard: DynamoDB Standard is the general-purpose table class designed for frequently
accessed data. Since the application expects moderate to high throughput, it's assumed the data will be
accessed regularly, making Standard the appropriate choice.
DynamoDB Standard-IA is less suitable since it is optimized for infrequently accessed data and has higher
read and write costs. It's not the optimal option for the expected workload.

In summary, on-demand mode's pay-per-request pricing model aligns perfectly with unpredictable traffic,
ensuring that costs are minimized while dynamically scaling to meet the application's throughput demands.
Refer to the following AWS documentation for more information:
DynamoDB Pricing: https://aws.amazon.com/dynamodb/pricing/
Choosing Between On-Demand and Provisioned Capacity:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks. ReadWriteCapacityMode.html
DynamoDB Table Classes: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/tableclasses.html

---

## Question 521

**Answer:** **C**

**Explanation:**

**Option C** is the most secure solution because it leverages AWS's recommended practice of cross-account IAM
roles for accessing resources across different AWS accounts. This approach provides temporary credentials
with least privilege, enhancing security posture.
Here's a detailed breakdown:
IAM Roles over IAM Users: IAM roles are preferred over IAM users for cross-account access because roles
provide temporary credentials through the AssumeRole API, eliminating the need to manage long-term access
keys which are vulnerable to leakage.
Cross-Account Access with AssumeRole: The described setup uses AssumeRole in a secure manner. The
application in the central inventory account (APP_ROLE) assumes the role in each business account
(BU_ROLE).
Least Privilege: Each BU_ROLE is granted specific permissions to access only the DynamoDB table in that
business account. The trust policy of BU_ROLE ensures that only the designated APP_ROLE can assume it,
preventing unauthorized access.
Centralized Control: The APP_ROLE in the inventory application account handles the assumption of roles
across all business accounts, enabling centralized control and auditing of access.
No Hardcoded Credentials: No long-term credentials (like access keys) need to be stored or managed within
the application, reducing the risk of exposure.

**Option A** is less secure because Secrets Manager would require storing database credentials, which is a valid
approach, but not the best in a multi-account scenario. It does not intrinsically facilitate cross-account access
as effectively or securely as cross-account IAM roles.

**Option B** is highly insecure because it involves managing and rotating long-term IAM user access keys, which
is a significant security risk. Manual rotation is prone to errors and delays. Exposing access keys opens up a
large attack surface if compromised.

**Option D** is incorrect. DynamoDB does not directly integrate with ACM for authentication in this manner. ACM
is primarily for managing SSL/TLS certificates for secure communication. Identity certificates are not the
standard way to authenticate DynamoDB access.

In summary, leveraging cross-account IAM roles with AssumeRole ensures secure, auditable, and easily
manageable access to DynamoDB tables across multiple AWS accounts, adhering to the principle of least
privilege and utilizing temporary credentials.
References:
IAM roles:
Granting access to multiple AWS accounts:
AssumeRole API:

---

## Question 522

**Answer:** **BC**

**Explanation:**

The optimal solution for dynamically scaling an Amazon EKS cluster based on workload with minimal
operational overhead involves two key components: the Kubernetes Metrics Server and the Kubernetes
Cluster Autoscaler.

**B.** Use the Kubernetes Metrics Server to activate horizontal pod autoscaling.
The Kubernetes Metrics Server collects resource usage data (CPU, memory) from pods and nodes. This data is
crucial for Horizontal Pod Autoscaler (HPA). HPA automatically scales the number of pods in a deployment or
replication controller based on observed CPU utilization or other select metrics. By using the Metrics Server,
the HPA can dynamically increase or decrease the number of pods running to meet demand, thereby
efficiently utilizing resources and improving application responsiveness. The Metrics Server is a lightweight,
readily available tool for this purpose and is simple to deploy and manage.
Kubernetes Metrics Server
Horizontal Pod Autoscaling

**C.** Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.
The Kubernetes Cluster Autoscaler automatically adjusts the size of the EKS cluster (i.e., the number of
worker nodes) based on the resource requirements of the pods that are scheduled or unscheduled. If the HPA
scales out and new pods cannot be scheduled due to insufficient node resources, the Cluster Autoscaler will
automatically provision new nodes to accommodate them. Conversely, if pods are scaled down by the HPA
and nodes become underutilized, the Cluster Autoscaler will terminate unnecessary nodes. This dynamic
scaling of the worker nodes ensures that the cluster has the right amount of resources to meet the
application's needs.
Kubernetes Cluster Autoscaler
Scaling worker nodes

Why other options are incorrect:

**A.** Use an AWS Lambda function to resize the EKS cluster: While possible, using Lambda for this purpose is
significantly more complex and requires custom coding to monitor metrics, determine scaling needs, and
interact with the EKS API. This approach introduces substantial operational overhead.

**D.** Use Amazon API Gateway and connect it to Amazon EKS: API Gateway is used for managing and exposing
APIs, not for cluster scaling. It's irrelevant to the workload-based scaling requirement.

**E.** Use AWS App Mesh to observe network activity: App Mesh is a service mesh that provides visibility and
control over microservices communication. While helpful for observability and traffic management, it doesn't
directly address cluster scaling based on workload. App Mesh focuses on the application layer, not on the
infrastructure capacity needed to support the application.

---

## Question 523

**Answer:** **B**

**Explanation:**

The correct answer is B. Amazon CloudFront with [email protected] functions.

Here's why:
Operational Efficiency: Lambda@Edge functions are deployed globally within CloudFront's infrastructure.
This close proximity to users reduces latency as requests don't need to travel back to the origin server (in this
case, the serverless application) for simple data retrieval logic. This minimizes the performance impact on the
baseline application.
Data Aggregation and Transformation: Lambda@Edge allows you to intercept requests before they reach the
origin and responses before they reach the user. In this scenario, Lambda@Edge can be configured to fetch
data from the multiple DynamoDB tables, aggregate the results, and transform them into the required format
before sending the consolidated response to the user. This offloads the data aggregation from the origin
server, contributing to better performance.
Caching Benefits: CloudFront's caching capabilities can further reduce the load on the DynamoDB tables and
the serverless application. By caching frequently accessed data close to the users, CloudFront eliminates the
need to repeatedly fetch the same data from the DynamoDB tables, enhancing performance and reducing
operational costs.
Why the other options are less optimal:

**A.** AWS AppSync pipeline resolvers: While AppSync is suitable for data aggregation from multiple sources, it
introduces a separate managed service and requires restructuring the existing microservice-based
architecture. The additional hop to AppSync increases latency and complexity compared to Lambda@Edge.
The question asks for a solution with no impact on the baseline performance.

**C.** Edge-optimized Amazon API Gateway with AWS Lambda functions: This option is similar to
Lambda@Edge, but API Gateway is optimized for API management and security. It adds extra complexity
without solving the performance issue since the Lambda would still need to query the DynamoDB tables.

**D.** Amazon Athena Federated Query with a DynamoDB connector: Athena is designed for analyzing data
stored in DynamoDB using SQL. While it can retrieve data from multiple DynamoDB tables, it's primarily used
for batch processing and querying large datasets, not for real-time data retrieval in a web application. It will
impact the latency of the responses, failing the no performance impact requirement.

Therefore, Lambda@Edge with CloudFront is the most operationally efficient and performant solution for
retrieving data from multiple DynamoDB tables in a serverless web application with minimal impact on the
baseline performance.

---

## Question 524

**Answer:** **C**

**Explanation:**

The optimal solution for analyzing IAM-related Access Denied and Unauthorized errors from CloudTrail logs
with minimal effort is option C: using Amazon Athena.
Athena directly queries data stored in Amazon S3, where CloudTrail typically delivers its logs. It leverages
standard SQL, making analysis relatively straightforward for individuals familiar with SQL. The key advantage
is that Athena eliminates the need for complex ETL (Extract, Transform, Load) processes, unlike AWS Glue
(option A), which necessitates creating and managing ETL jobs to prepare the data for querying. While AWS
Batch (option B) could be used to run custom scripts against CloudTrail logs, this approach involves more
operational overhead and script development, which negates the 'least effort' requirement.
Amazon QuickSight (option D) is primarily a business intelligence tool for visualization and creating
dashboards. While QuickSight can connect to Athena, it's an additional layer of complexity for the initial
troubleshooting stage. Constructing a complete dashboard before identifying error patterns introduces
unnecessary work. Athena provides the capability to query and filter CloudTrail logs directly to identify these
errors, after which, insights can be visualized for deeper analysis. This makes Athena a more targeted and
efficient first step. It also supports federated queries so you can access multiple data stores, which is
irrelevant to the question.

Therefore, Athena's ability to directly query CloudTrail logs using SQL, without requiring ETL or dashboard
creation upfront, makes it the most efficient solution to identify the specified IAM errors.
Supporting Links:
AWS CloudTrail Logging IAM API Calls
Analyzing CloudTrail Logs with Amazon Athena

---

## Question 525

**Answer:** **A**

**Explanation:**

The correct answer is A: Access usage cost-related data by using the AWS Cost Explorer API with pagination.

Here's why:
Programmatic Access: The requirement specifies programmatic access to cost data. The Cost Explorer API
directly addresses this, allowing the company to retrieve data through code. Options B, C, and D require
manual intervention or rely on delivery mechanisms less suitable for automated integration with a dashboard.
Current Year and Forecast Data: The AWS Cost Explorer API provides access to historical cost data for the
current year and forecasting capabilities for the next 12 months, meeting the data requirements.
Least Operational Overhead: The Cost Explorer API, when used with pagination, minimizes the overhead.
Pagination allows the retrieval of data in manageable chunks, preventing large data transfers that could
strain resources. Options C and D require configuring and managing budgets and delivery mechanisms like
FTP or SMTP, increasing operational complexity. **Option B** would require manual downloading and processing
of CSV files.
Automation and Integration: The API facilitates direct integration with the company's operation cost
dashboard, enabling automated data updates and analysis. This aligns with best practices for cloud cost
management and operational efficiency.
Scalability: The API-based approach can easily scale to accommodate increasing data volumes and
complexity as the company's AWS usage grows. The pagination feature helps maintain performance during
scaling.
Cost Optimization: By providing granular cost data, the Cost Explorer API can help the company identify cost
optimization opportunities and improve its overall cloud cost efficiency.

---

## Question 526

**Answer:** **D**

**Explanation:**

The best solution to minimize downtime during Aurora PostgreSQL writer instance failovers, with the least
operational overhead, is D. Set up an Amazon RDS proxy for the database. Update the application to use the
proxy endpoint.

Here's why:

RDS Proxy's Primary Benefit: RDS Proxy sits between your application and your database. Its core
functionality is to manage database connections efficiently, maintain connection pools, and most importantly,
automatically reconnect to the new writer instance during a failover event.
https://aws.amazon.com/rds/proxy/
Reduced Downtime: By automatically handling reconnection, RDS Proxy significantly reduces application
downtime during failovers. The application doesn't need to implement complex retry logic or be aware of the
database's internal failover process. This typically reduces downtime from minutes to seconds.
Connection Management: RDS Proxy handles connection management, preventing connection storms that
can overload the database during failover. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rdsproxy.html
Minimal Operational Overhead: Setting up RDS Proxy is relatively straightforward and requires minimal
changes to the application code. The application only needs to be configured to connect to the RDS Proxy
endpoint instead of the database endpoint.

Why other options are less suitable:

**A.** Create more Aurora PostgreSQL read replicas: Read replicas are for read scaling and don't help with write
operations during a writer failover. The problem is the unavailability of the writer instance.

**B.** Secondary Aurora PostgreSQL cluster: This involves a much more complex setup, including data
replication and application failover logic. It has a significantly higher operational overhead. Maintaining a
secondary cluster requires continuous synchronization and testing of failover procedures.

**C.** Amazon ElastiCache for Memcached: ElastiCache is a caching service. While caching can reduce database
load, it doesn't address the problem of the application being unable to write to the database during a writer
failover. Data loss or inconsistency can also be major concerns.
RDS Proxy is specifically designed for this use case: It provides a managed service for connection pooling
and automatic failover, simplifying database management and increasing application availability. Therefore,
option D is the most effective and efficient solution.

---

## Question 527

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution for maximizing fault tolerance while

expanding a regional streaming service globally:
The primary goal is to minimize downtime during a regional failure. **Option D** achieves this most effectively by
replicating the application and database tiers to a second region and using Route 53 for failover.
Application Tier Replication: Deploying the web and application tiers to a second region provides redundancy.
If the primary region experiences issues, Route 53 can direct traffic to the healthy second region. This
ensures application availability.
Aurora Global Database for Database Replication: Aurora Global Database is crucial. It replicates data
across AWS Regions with low latency, typically under a second. This ensures that the second region's
database is nearly up-to-date, minimizing data loss during failover.
Route 53 Failover: Amazon Route 53 health checks monitor the health of the application in both regions. A
failover routing policy automatically redirects traffic to the second region if the primary region becomes
unavailable.
Controlled Failover (Promotion): Promoting the secondary Aurora instance to primary is essential for write
operations. The controlled failover approach minimizes downtime and ensures data consistency.

**Option A** is less desirable because it suggests extending Auto Scaling groups across regions. While
technically possible with some configurations, it introduces unnecessary complexity and potential latency
issues related to cross-region networking for application components.

**Option B** uses Aurora PostgreSQL cross-Region Aurora Replica. While an Aurora replica does replicate data,
promotion can be more complex and slower than using the built-in global database capabilities. Moreover, it
doesn't utilize the automatic failover benefits of Aurora Global Database.

**Option C** uses AWS DMS for database replication. DMS is suitable for migrations or scenarios requiring data
transformation, but it's not the best choice for a constantly replicating, highly available database setup.
DMS's replication latency is higher than Aurora Global Database, leading to a greater potential for data loss
during failover.

Therefore, option D balances redundancy, performance, and ease of failover, making it the most fault-tolerant
solution.

---

## Question 528

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most operationally efficient solution:

**Option D** leverages several AWS services optimally for the given scenario. First, AWS Transfer Family is a
managed service specifically designed for secure file transfers to and from AWS storage services, minimizing
the operational overhead of managing an EC2-based FTP server. It directly integrates with S3, simplifying the
file storage aspect.https://aws.amazon.com/transfer/
Storing the files in Amazon S3 Standard provides immediate availability and scalability. The use of S3 event
notifications triggers an AWS Lambda function immediately when a file arrives. AWS Lambda is ideal for
processing individual files that take only a few minutes to process, fitting the 3-8 minute requirement.
Lambda functions are serverless, automatically scaling based on the number of invocations, thus reducing
operational burden.https://aws.amazon.com/lambda/
The Lambda function can process the file and then delete it from S3, automating the cleanup process. This
entire solution requires minimal manual intervention and scales automatically based on the workload.
Options A, B, and C are less optimal for several reasons. Options A and B use Amazon EC2 to manage the FTP
server. This increases operational complexity because you need to patch, scale, and manage the EC2
instance. They also use AWS Batch nightly, which is not what the customer asked for. **Option A** moves the
data to Glacier Flexible Retrieval, which is not a use-case for immediate processing. The process of moving
objects to Glacier is not immediate. **Option C** unnecessarily uses EBS, which adds persistent storage costs and
does not readily integrate with event-driven processing. **Option C** uses AWS Batch, which may introduce more
complexity to the design since Lambda can more easily process incoming files and delete them.

---

## Question 529

**Answer:** **B**

**Explanation:**

The correct answer is B: Migrate the databases to Amazon RDS and configure encryption at rest.

Here's why:
Amazon RDS (Relational Database Service) is a managed database service. It significantly reduces
operational overhead by automating tasks like patching, backups, and recovery, which the company desires.
This removes the need for the company to manage the underlying infrastructure, improving efficiency.
Encryption at rest in Amazon RDS directly addresses the security requirement for transactional and sensitive
data. RDS provides encryption options using AWS Key Management Service (KMS) for managing encryption
keys. Data is encrypted while stored on disk (at rest), enhancing data protection.

**Option A** (Amazon EC2): While EC2 allows you to host databases, it increases operational overhead because
you are responsible for managing the entire infrastructure, including backups, patching, and security. This
contradicts the requirement to reduce operational overhead.

**Option C** (Amazon S3 and Macie): Amazon S3 is primarily object storage, not designed for transactional
databases. Amazon Macie is a data security and data privacy service that uses machine learning and pattern
matching to discover and protect sensitive data in AWS. It is not suitable for hosting a transactional database.

**Option D** (Amazon RDS and CloudWatch Logs): While RDS provides a managed database solution, CloudWatch
Logs is primarily for monitoring and logging. While logs can be used for security analysis, CloudWatch Logs
does not encrypt data at rest, therefore not directly addressing data protection for transactional databases.

Therefore, it doesn't satisfy the security requirement.

Therefore, migrating to Amazon RDS and enabling encryption at rest provides both reduced operational
overhead and increased security for sensitive data.
Here are some authoritative links for further research:
Amazon RDS: https://aws.amazon.com/rds/
Amazon RDS Encryption:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview. Encryption.html
AWS Key Management Service (KMS): https://aws.amazon.com/kms/

---

## Question 530

**Answer:** **C**

**Explanation:**

The best solution for improving application performance and decreasing latency for a global online game with
TCP and UDP traffic, while using Route 53 and NLBs, is to use AWS Global Accelerator.
Detailed Justification:

AWS Global Accelerator (C): Global Accelerator uses the AWS global network to direct user traffic to the
optimal endpoint based on proximity, health, and configuration. It supports both TCP and UDP protocols,
which are essential for the game's multiplayer capabilities. It provides static anycast IP addresses that serve
as a fixed entry point to the application, improving resilience. Global Accelerator's endpoint groups can be
configured to use different ports for the TCP and UDP listeners on the NLBs. By directing traffic based on
network proximity, latency is minimized.
CloudFront (A): CloudFront excels at caching static content, which is less relevant for real-time gaming
traffic that requires low latency and constant updates. Additionally, CloudFront primarily works with HTTP
and HTTPS traffic and isn't designed for general TCP/UDP acceleration. While caching can help, the dynamic
nature of game data makes CloudFront less effective than Global Accelerator.
Application Load Balancers (ALBs) with Latency-Based Routing (B): Replacing NLBs with ALBs doesn't
directly address the global latency issue as efficiently as Global Accelerator. While latency-based routing in
Route 53 helps direct users to the closest region, it does not leverage the optimized AWS global network for
low-latency routing between the user and the region, which Global Accelerator provides. ALBs also do not
handle UDP traffic natively.
API Gateway (D): API Gateway is designed for managing APIs and doesn't directly improve latency for realtime TCP/UDP gaming traffic. It introduces an additional layer of complexity and isn't suitable for the gaming
use case described.
Why Global Accelerator is optimal:
Global Accelerator is specifically designed to optimize performance for applications with a global user base,
particularly for use cases requiring consistent, low-latency connectivity over TCP and UDP. It reduces latency
by leveraging the highly available and congestion-free AWS global network. The anycast static IPs provide a
stable entry point to the application, masking regional failures and changes.

---

## Question 531

**Answer:** **A**

**Explanation:**

The correct answer is A: Create a function URL for the Lambda function. Provide the Lambda function URL to
the third party for the webhook.

Here's a detailed justification:
Lambda function URLs are a dedicated, built-in feature that allows you to directly invoke your Lambda
functions over HTTPS without needing to configure and manage separate API Gateways. This represents the
most operationally efficient solution for exposing a Lambda function as a webhook endpoint to a third party.

**Option B**, deploying an ALB in front of Lambda, adds significant complexity and operational overhead. ALB
introduces the need to manage load balancing, listener rules, and target groups, which are unnecessary for a
simple webhook integration.

**Option C**, using SNS, introduces an unnecessary level of indirection. SNS is a pub/sub messaging service,
which is suitable for decoupling applications but adds unnecessary complexity for a direct webhook
integration. The third party would need to publish to the SNS topic, and the Lambda function would then be
triggered by SNS, adding latency and more points of failure.

**Option D**, using SQS, is also an unnecessarily complex approach. SQS is a queuing service designed for
asynchronous message processing. For a simple webhook integration where you expect an immediate action
from the Lambda function, SQS introduces unnecessary queuing and latency.
Lambda function URLs offer a direct, simplified way to expose a Lambda function as a publicly accessible
HTTPS endpoint. They are cost-effective, require minimal configuration, and are designed for scenarios like
webhook integrations.

In summary, Lambda Function URLs provide the simplest, most direct, and most operationally efficient
method to expose a Lambda function to a third-party service as a webhook endpoint.
Here are some authoritative links for further research:
AWS Lambda Function URLs: https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 532

**Answer:** **ADF**

**Explanation:**

The correct answer is ADF. Here's why:

**A.** Register the required domain in a registrar. Create a wildcard custom domain name in a Route 53 hosted
zone and record in the zone that points to the API Gateway endpoint. This establishes the foundation for
using custom domains and Route 53 for managing DNS records. A wildcard domain (e.g., *.example.com)
allows you to handle multiple subdomains without creating individual records for each. This dramatically
simplifies DNS management. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-namebasics.html

**D.** Request a wildcard certificate that matches the custom domain name in AWS Certificate Manager (ACM)
in the same Region. To secure the custom domain with HTTPS, you need a certificate. Using a wildcard
certificate (e.g., *.example.com) covers all subdomains under your main domain, streamlining certificate
management. The certificate must be in the same region as your API Gateway instance.
https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html

**F.** Create a custom domain name in API Gateway for the REST API. Import the certificate from AWS
Certificate Manager (ACM). This step links the secured custom domain to your API Gateway. You configure
API Gateway to use the wildcard certificate from ACM, enabling secure access through the custom domain.
This is a critical part of providing personalized URLs.
https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html

Why other options are incorrect:

**B.** Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in a
different Region. ACM certificates used with API Gateway must be in the same region.

**C.** Create hosted zones for each customer as required in Route 53. Create zone records that point to the API
Gateway endpoint. Creating individual hosted zones for each customer adds unnecessary complexity and
management overhead. A wildcard record in a single hosted zone is much more efficient.

**E.** Create multiple API endpoints for each customer in API Gateway. Creating multiple API endpoints
significantly increases management overhead. Using custom domains allows for a single API endpoint to be
accessed through different URLs.

---

## Question 533

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Amazon Macie is a fully managed data security and data privacy service that uses machine learning and
pattern matching to discover and protect sensitive data in AWS. It's designed specifically for identifying PII
and other sensitive information within S3 buckets.
Macie for PII Detection: Macie is built to automatically discover PII in S3, which directly addresses the
company's requirement.
EventBridge for Event-Driven Architecture: Amazon EventBridge allows you to build event-driven
applications by routing events between AWS services. In this case, Macie findings are events.
Filtering Sensitive Data Events: An EventBridge rule can be configured to specifically listen for the
SensitiveData event type from Macie findings. This ensures that the security team is only notified when PII is
detected, avoiding unnecessary alerts for other types of findings.
SNS for Notification: Amazon Simple Notification Service (SNS) is a fully managed messaging service that
can be used to send notifications to various endpoints, including email, SMS, and HTTP endpoints, which is
suitable for notifying the security team.

Why other options are incorrect:
GuardDuty: GuardDuty focuses on threat detection and monitoring malicious activity, not specifically
identifying PII in S3. It's not designed for data privacy in the same way Macie is.
SQS: While SQS is a useful queuing service, sending notifications directly to SQS wouldn't notify the security
team. SNS is a better choice for direct notifications.
CRITICAL event type: GuardDuty's CRITICAL event type is related to security threats and is not designed to
find PII.Using Macie, EventBridge, and SNS creates an automated pipeline: Macie scans S3, detects PII,
EventBridge filters the alerts for sensitive data, and SNS sends a notification to the security team for review
and action.

---

## Question 534

**Answer:** **C**

**Explanation:**

Here's a breakdown of why option C is the most cost-effective solution for the logging requirements:
The core requirement is to store logs for 90 days with frequent analysis for the first 30 and backup retention
for the next 60. Then, delete the logs. The most important factor is cost-effectiveness.
Why S3 Glacier Flexible Retrieval (formerly S3 Glacier) after 30 days? S3 Glacier Flexible Retrieval offers
the lowest storage cost of the S3 storage classes designed for data archiving and backup. Since the logs are
for backup after 30 days, they will rarely be accessed. S3 Glacier Flexible Retrieval fits well.
Why not S3 Standard-IA or S3 One Zone-IA? While these are cheaper than S3 Standard, they are still more
expensive than S3 Glacier Flexible Retrieval, and are designed for more frequent access than required after
the initial 30 days. Also, S3 One Zone-IA data is lost if the AZ fails, not suitable for backup retention.
Why use an expiration action? Expiration actions are the built-in, automated way within S3 to delete objects
after a specified time. This ensures compliance with the 90-day deletion requirement.
Let's analyze why the other options are not the most cost-effective:

**Option A** (S3 Standard): S3 Standard is the most expensive S3 storage class, making it unsuitable for longterm storage of logs intended for infrequent access after the initial 30 days. This drastically increases the
storage cost without adding any value for logs mainly used for backup.

**Option B** (S3 Standard-IA then Glacier Flexible Retrieval): While it uses Glacier Flexible Retrieval eventually,
the initial 30 days in S3 Standard-IA add unnecessary cost. The logs can be moved to Glacier Flexible
Retrieval after 30 days to reduce storage costs. Moving to Glacier after 90 days would defeat the purpose of
the backup retention requirements, since the intention is deletion at 90.

**Option D** (S3 One Zone-IA then Glacier Flexible Retrieval): S3 One Zone-IA's cost is lower than S3 StandardIA, however data is lost if the single availability zone is compromised, which does not align with data retention
for audit purposes. There's also the unnecessary transition to S3 One Zone-IA before moving it to Glacier.

Therefore, **Option C** provides the most cost-effective solution by using the S3 Glacier Flexible Retrieval
storage class for the 60-day backup phase and automating deletion with an S3 lifecycle policy.
Supporting Documentation:
S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
S3 Lifecycle Management: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecyclemanagement.html

---

## Question 535

**Answer:** **B**

**Explanation:**

The correct answer is B: Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS
KMS secrets encryption on the Amazon EKS cluster.

Here's a detailed justification:
The requirement is to encrypt Kubernetes secrets stored in the etcd key-value store of an Amazon EKS
cluster. Kubernetes stores secrets in etcd, and by default, these secrets are only base64 encoded, not
encrypted. Therefore, an encryption mechanism is needed.

**Option A**, using AWS Secrets Manager, is incorrect because while Secrets Manager can store secrets
securely, it doesn't directly encrypt the secrets within the Kubernetes etcd datastore. Secrets Manager would
require the application code to retrieve secrets from Secrets Manager, which is a different operational model
than directly encrypting secrets managed within Kubernetes. This does not address the direct encryption of
secrets stored in etcd.

**Option B** directly addresses the requirement. Amazon EKS offers the capability to encrypt secrets at rest in
etcd using a KMS key. When this feature is enabled, all secrets stored in the etcd database are encrypted
using envelope encryption. The data encryption key (DEK) used to encrypt the secrets is itself encrypted by
the KMS key (KEK) you provide. This ensures that even if someone gains unauthorized access to the etcd
store, the secrets remain encrypted and unreadable without the correct KMS key. Creating a new KMS key
provides you with control over the encryption key, aligning with security best practices.

**Option C** is incorrect because using the EBS CSI driver is for managing persistent volumes attached to the
EKS cluster nodes, it doesn't encrypt the secrets stored in etcd. It only deals with the storage and encryption
of data on EBS volumes.

**Option D** is partially correct as EBS encryption encrypts the data at rest on EBS volumes, but it is irrelevant
for encrypting secrets within the etcd database. The alias/aws/ebs KMS key is used for EBS volume encryption
and is separate from the encryption of secrets within EKS.

Therefore, option B provides the solution that directly fulfills the stated requirement of encrypting
Kubernetes secrets in etcd within the EKS cluster using a dedicated KMS key.
Supporting documentation:
Amazon EKS Secrets Encryption: https://docs.aws.amazon.com/eks/latest/userguide/managing-secrets.html
Encrypting Secrets at Rest: https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/

---

## Question 536

**Answer:** **C**

**Explanation:**

The requirement is to provide near real-time read-only access to an RDS PostgreSQL database for data
scientists without impacting the production database, while maintaining high availability and costeffectiveness.

**Option A** is incorrect because scaling the production database does not address the need for read-only access
and could still impact production performance, especially with complex queries. It also doesn't inherently
improve high availability.

**Option B** is partially correct in enabling high availability by switching to Multi-AZ. However, providing data
scientists direct access to the secondary standby instance is not the intended use case and may interfere with
failover operations. The secondary is primarily for failover and not optimized for heavy read workloads.

**Option C** offers the best balance of requirements. Converting to a Multi-AZ deployment provides high
availability. Then creating read replicas off the primary instance allows data scientists to run their complex
queries without impacting the production workload. Multiple read replicas further improve read scalability
and availability.

**Option D** is similar to option C but utilizes a Multi-AZ cluster deployment with readable standby instances.
This is typically associated with Aurora PostgreSQL, not standard RDS PostgreSQL. Furthermore, while
readable standby instances are a good solution, providing two additional read replicas as in option C offers
more flexibility in distributing the read load and ensuring resilience for the data scientist workload within the
context of standard RDS PostgreSQL, potentially at a lower cost compared to migrating to Aurora.

Therefore, option C is the most cost-effective solution that meets all the requirements: near real-time readonly access, minimal impact on the production database, and high availability for the data scientists'
workload.

---

## Question 537

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution:
The primary goal is to achieve high availability and scalability for a three-tier web application in AWS across
three Availability Zones while handling sudden traffic increases.
Database: Migrating the on-premises MySQL database to Amazon RDS for MySQL with a Multi-AZ
deployment provides high availability. In case of a failure in the primary AZ, RDS automatically fails over to a
standby replica in another AZ. This eliminates single points of failure for the database layer.
https://aws.amazon.com/rds/mysql/
Session Management: Using Amazon ElastiCache for Redis with high availability is ideal for storing session
data. Redis is an in-memory data store that provides fast read and write operations, crucial for handling user
sessions efficiently. The high availability feature of ElastiCache ensures that session data remains accessible
even if a node fails. Redis also supports more advanced data structures beneficial for session management.
https://aws.amazon.com/elasticache/redis/
Web Tier Scalability: Migrating the EC2 web server to an Auto Scaling group across three Availability Zones
enables the application to scale horizontally based on demand. Auto Scaling automatically launches and
terminates EC2 instances based on predefined metrics, ensuring the application can handle sudden traffic
spikes. Spreading instances across multiple AZs provides fault tolerance.
https://aws.amazon.com/autoscaling/

Why other options are less suitable:

**Option B**: While Memcached is a viable caching solution, Redis offers more advanced features for session
management, such as persistence and more complex data structures. For session storage, Redis generally
provides better functionality and capabilities.

**Option C**: Migrating the MySQL database to Amazon DynamoDB could be a valid solution if the application’s
data model and access patterns are suitable for a NoSQL database. However, DynamoDB is a major
architectural shift and requires significant application changes. Also, storing session data in DynamoDB may
not be as efficient as using a dedicated in-memory cache like Redis. While DynamoDB Accelerator (DAX)
improves performance, it's primarily designed for hot data in DynamoDB, and Redis provides a more targeted
solution for session data.

**Option D**: Deploying the MySQL database in a single Availability Zone introduces a single point of failure. If
that Availability Zone experiences an outage, the entire application could become unavailable. This violates
the requirement for high availability.

Therefore, option A provides the best solution by addressing scalability and high availability requirements
across all three tiers of the application using appropriate AWS services.

---

## Question 538

**Answer:** **A**

**Explanation:**

The correct answer is A: "Add geographic restrictions to the content in CloudFront by using an allow list. Set
up a custom error message."

Here's a detailed justification:
The scenario requires a phased rollout of video content based on geographic location. Users outside the
target countries should not be able to access the content. CloudFront offers built-in geographic restrictions
(Geo Restriction) that are ideal for this requirement. An allow list (or a whitelist) approach specifies the
countries where the content is allowed. This aligns directly with the need to allow content only in rolled-out
countries.
Using geographic restrictions, CloudFront automatically inspects the viewer's IP address and compares it
against the configured allow list. If the viewer's location is not in the allowed countries, CloudFront blocks the
request and can display a custom error message. This is the functionality exactly asked for in the prompt.

**Option B** is incorrect because Signed URLs and Cookies primarily control access based on authentication and
authorization rather than geographic location. While they can be combined with other methods to achieve
geographic restriction, it's a more complex and less efficient solution than using CloudFront's built-in Geo
Restriction. Signed URLs are more appropriate for restricting access based on user credentials or time-based
access, not location.

**Option C** is incorrect because encrypting the data doesn't prevent access based on geographic location.
Encryption protects the confidentiality of the data but doesn't control who can access it. Encryption
addresses data security, not geographic access control. A user outside of the allowed region could
theoretically still download the encrypted data even if they cannot decrypt and view it.

**Option D** is incorrect. Time-restricted access policies are not a solution to the problem.

Therefore, CloudFront's Geo Restriction configured with an allow list offers the simplest, most efficient, and
most direct solution for the stated requirement.
Refer to the official AWS documentation on CloudFront Geo Restriction for more information:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html

---

## Question 539

**Answer:** **B**

**Explanation:**

The correct answer is B. Configure a warm standby Amazon RDS for SQL Server database on AWS.
Configure AWS Database Migration Service (AWS DMS) to use change data capture (CDC).

Here's why:
This solution strikes a balance between meeting the RPO and RTO requirements while minimizing costs, which
is a primary concern. Using Amazon RDS for SQL Server in a warm standby configuration keeps a SQL Server
instance running on AWS but not actively serving production traffic. AWS DMS with change data capture
(CDC) continuously replicates changes from the on-premises SQL Server to the RDS instance. This ensures
that the standby database is kept relatively up-to-date, meeting the 30-second RPO.
In the event of a disaster, the RDS instance can be promoted to become the primary database. While a warm
standby takes longer than an active/active setup, the cost savings are significant. The RDS instance is preconfigured and ready, reducing the time needed for recovery and aiming to meet the 60-minute RTO.

**Option A** (Always On availability groups with SQL Server Enterprise) is very expensive due to the licensing
costs associated with SQL Server Enterprise. This option is also more complex to manage.

**Option C** (AWS Elastic Disaster Recovery as pilot light) might not consistently meet the 30-second RPO, as it
involves spinning up instances after a disaster. While Elastic Disaster Recovery can reduce costs through
minimal infrastructure during normal operation, the restore process itself can impact the RTO if the database
requires significant recovery time.

**Option D** (Backup software to S3) will not meet the RTO. Restoring from backups stored in S3 will take
significantly longer than 60 minutes, especially for a substantial database.
Here's a breakdown of why each solution is or isn't the best fit for RPO, RTO, and cost:
RPO (Recovery Point Objective): The objective is 30 seconds. AWS DMS CDC keeps the warm standby
database reasonably close to real-time changes from the on-premises database. Options C and D fail here.
RTO (Recovery Time Objective): The objective is 60 minutes. An already provisioned RDS instance can be
failed over relatively quickly. Options C and D require more setup time, exceeding the RTO. **Option A** will meet
the RTO but it is too expensive.
Cost: RDS warm standby with DMS is significantly cheaper than running SQL Server Enterprise with Always
On Availability Groups (**Option A**). Options C and D may be cheaper in terms of upfront costs, but they fail to

meet the recovery objectives.

Therefore, option B is the most balanced solution considering all constraints.

---

## Question 540

**Answer:** **C**

**Explanation:**

The most operationally efficient solution is C, utilizing Amazon RDS in a Multi-AZ cluster deployment for
Oracle. This addresses the requirements of high availability, improved application performance, and
offloading reporting.
Multi-AZ deployments inherently provide high availability by replicating data across multiple availability
zones. If the primary instance fails, automatic failover to a standby instance ensures minimal downtime. This
meets the "higher availability" requirement efficiently, without needing to manage cross-region replication
(option A).
An RDS Multi-AZ cluster provides a reader endpoint, also known as a reader instance, specifically designed
for read-heavy workloads such as reporting. By directing reporting functions to this reader instance, the load
on the primary database is significantly reduced, improving the performance of the primary database for
transaction processing. This fulfills the need to "offload reporting from its primary database system" and
"improve application performance."

**Option A**, using AWS DMS for cross-region replication, adds operational complexity. DMS requires continuous
replication, which consumes resources and introduces potential latency. Furthermore, managing databases
across multiple regions increases operational overhead.

**Option B**, using RDS in a Single-AZ deployment, contradicts the high availability requirement. A read replica in
the same AZ offers no resilience against AZ failures.

**Option D** suggests using Amazon Aurora, which is a different database engine, which might require
application changes and a more complex migration. The question implied that the existing Oracle database
should be maintained as a critical requirement by mentioning "Oracle database to process and store customer
information". Thus making it the most disruptive solution.

Therefore, **Option C** strikes the best balance between meeting the requirements and minimizing operational
overhead, as it provides high availability and read replica capabilities within a single, managed RDS cluster
using the same Oracle database engine.

---

## Question 541

**Answer:** **ACE**

**Explanation:**

The correct answer is ACE. Here's why:

**A.** Create an AWS Lambda function to retrieve user information from Amazon DynamoDB. Create an
Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function. This is a
suitable backend architecture. API Gateway provides a managed, scalable entry point for the web application,
handling incoming requests and routing them to the Lambda function. Lambda offers a serverless, costeffective way to process these requests and interact with DynamoDB. DynamoDB's NoSQL nature is excellent
for storing and retrieving user information with low latency. Since client access requests are unpredictable
and can be idle, the serverless nature of Lambda ensures that you only pay for actual usage, making it costeffective.

**C.** Create an Amazon Cognito user pool to authenticate users. Cognito user pools are designed to handle
user registration, authentication, and password recovery. This addresses the requirement that only paying
subscribers can access the web application by controlling access to the application based on successful
authentication against the user pool. Cognito simplifies the authentication process and integrates seamlessly
with other AWS services.

**E.** Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an integrated Amazon
CloudFront configuration. AWS Amplify is an ideal solution for hosting static frontend content. Amplify
offers built-in capabilities for hosting, continuous deployment, and integration with other AWS services.
Integrating it with Amazon CloudFront provides a content delivery network (CDN) for faster content delivery
and improved user experience globally. This is also cost-effective due to pay-as-you-go pricing and CDN

caching minimizing origin requests.

Why other options are less suitable:

**B.** ECS with an ALB and RDS, while viable, is a less cost-effective option for unpredictable workloads. ECS
requires maintaining servers or containers even when idle, and RDS incurs database costs regardless of
usage. Lambda scales down to zero when not in use, making it more efficient in terms of cost.

**D.** Cognito identity pools are used for providing temporary AWS credentials to users who are already
authenticated, whether through a user pool or another identity provider. It doesn't directly handle user
authentication itself but rather grants access to AWS resources.

**F.** S3 static web hosting, without Amplify, would necessitate managing complex configurations, and using
PHP for static web hosting is generally incorrect. Also, Amplify provides additional features such as CI/CD
pipeline to make the whole process easier.
Supporting Links:
AWS Lambda: https://aws.amazon.com/lambda/
Amazon API Gateway: https://aws.amazon.com/api-gateway/
Amazon DynamoDB: https://aws.amazon.com/dynamodb/
Amazon Cognito: https://aws.amazon.com/cognito/
AWS Amplify: https://aws.amazon.com/amplify/
Amazon CloudFront: https://aws.amazon.com/cloudfront/

---

## Question 542

**Answer:** **B**

**Explanation:**

The correct answer is B: Generate and provide CloudFront signed URLs to premium customers.

Here's a detailed justification:
The media company needs a way to restrict access to its content stored in S3, delivered via CloudFront, so
that only premium customers can access it. Several options are available, but CloudFront signed URLs are the
most appropriate for on-demand content delivery, like movie rentals and music downloads.
Signed URLs are dynamically generated, time-limited URLs that grant access to specific resources on S3
through the CloudFront distribution. The company can generate these URLs when a premium customer
requests content (e.g., rents a movie). The URL contains a cryptographic signature which verifies the
authenticity and validity of the request. By implementing this approach, the company retains precise control
over who can access the content and for how long, facilitating its on-demand content business model.

**Option A**, using S3 signed cookies, is more suited for controlling access to multiple restricted files, for
instance, an entire "premium content" section of a website. While it provides access control, it's less granular
for on-demand scenarios.

**Option C**, using Origin Access Control (OAC), primarily secures the S3 bucket by allowing only CloudFront to
access it. While necessary for overall security, OAC doesn't differentiate between premium and non-premium
customers. It only controls access to the origin (S3), not who is requesting content from CloudFront. Premium
customer differentiation still needs to be handled within CloudFront.

**Option D**, field-level encryption, focuses on encrypting specific data fields for security purposes during transit
and at rest. It is not directly related to access control and wouldn't prevent non-premium users from
attempting to access the media files.

Therefore, generating and providing CloudFront signed URLs provides the most fine-grained and suitable
access control mechanism for the media company's requirements, specifically tailored to its on-demand
content model.
Reference:
Using Signed URLs - Amazon CloudFront

---

## Question 543

**Answer:** **AE**

**Explanation:**

The correct answer is AE because it leverages AWS Organizations to enable Savings Plan discount sharing
across accounts. Here's a detailed justification:

**A.** From the AWS Account Management Console of the management account, turn on discount sharing
from the billing preferences section.
This step is correct because it's the mechanism AWS Organizations provides for distributing the benefits of
Savings Plans to other accounts within the organization. Without enabling discount sharing, Savings Plan
benefits are confined to the account that purchased it. The management account (payer account in AWS
Organizations) is the central point for controlling billing and cost management. This is done in the Billing
console, specifically under Billing preferences where you configure Savings Plans sharing. This ensures the

discounts aren't wasted and are efficiently applied.

**E.** Create an organization in AWS Organizations in the existing AWS account with the existing EC2
instances and Savings Plan. Invite the other AWS accounts to join the organization from the management
account.
This step is necessary to group the AWS accounts together under a single management account. AWS
Organizations provides centralized governance and management across multiple AWS accounts. By creating
an organization and inviting other accounts to join, you can leverage features like consolidated billing and,
most importantly in this case, Savings Plan sharing. Placing the Savings Plan-owning account as the
management account ensures the Savings Plan is readily available to be shared across the newly formed
organization. Moving all accounts into an Organization allows centralized visibility and control.

Why the other options are incorrect:

**B:** While discount sharing is configured from the existing account with the Savings Plan, doing it from the
"AWS Account Management Console" and not correctly setting up an AWS Organization would not be the
correct mechanism, as it has to be paired with AWS Organizations to work effectively. This option fails to
consider the underlying organizational structure required for proper sharing.

**C:** AWS RAM (Resource Access Manager) is generally used for sharing specific resources within an AWS
organization, not for broadly sharing Savings Plan benefits. While you can share specific compute resources
with RAM, savings plan discounts need to be organization-wide sharing which is handled directly by the
organization settings. The purpose of RAM is different.

**D:** Creating a new payer account adds unnecessary complexity. The savings plan and the associated EC2
instance utilization already exists in a specific account. Migrating everything to a new organization and payer
account is an overcomplicated solution. This would require migrating existing AWS infrastructure.

---

## Question 544

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a canary release deployment stage for API Gateway. Deploy the latest API
version. Point an appropriate percentage of traffic to the canary stage. After API verification, promote the
canary stage to the production stage.

Here's a detailed justification:
Canary Deployment Minimizes Risk: Canary deployment involves releasing a new version of the API to a
small subset of users (defined by percentage of traffic). This allows you to test the new version in a real-world
environment with minimal impact if issues arise.
Controlled Rollout: By directing a percentage of traffic to the canary stage, you can monitor the performance
and stability of the new API version before exposing it to the entire user base. If any issues are detected, the
traffic can be quickly reverted to the original production version.
Minimal Data Loss: A canary deployment inherently minimizes data loss as only a fraction of the requests are
routed to the new version initially. Any errors or data discrepancies will affect only a small group of users,
limiting the potential impact.
Seamless Transition: Once the canary version is validated, promoting it to the production stage effectively
replaces the old version without disrupting the entire user base at once. This provides a smoother transition.
API Gateway Support: Amazon API Gateway provides built-in support for canary deployments through its
deployment stages and traffic management features.
Alternatives and Why They Aren't Best:
B and C (Import-to-Update): While import-to-update can be used for API updates, it lacks the controlled rollout
and risk mitigation of a canary deployment. An overwrite approach (option C) is particularly risky, as it
immediately replaces the existing API and could lead to widespread issues. Merging (option B) can be
complex to manage and doesn't isolate the rollout for initial validation.
D (New API Gateway Endpoint): Creating a new API Gateway endpoint with a custom domain name and
changing the Route 53 record leads to a potentially disruptive switchover. All users would immediately be
directed to the new API. While blue/green deployments can be useful, they require more infrastructure and
aren't as gradual as canary releases. Furthermore, it needs a DNS change, creating possible propagation
issues.

In summary, a canary release in API Gateway provides a controlled, low-risk approach for deploying new API
versions, ensuring minimal impact on customers and data loss.
Reference:AWS API Gateway Canary DeploymentsAWS API Gateway Deployment Stages

---

## Question 545

**Answer:** **B**

**Explanation:**

The correct answer is B: Set up a Route 53 active-passive failover configuration. Direct traffic to a static error
page that is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is
unhealthy.
Here's why this is the best solution and why the others are not ideal:
Active-Passive Failover: Route 53's active-passive failover is designed precisely for scenarios where you have
a primary endpoint (the ALB in this case) and a backup endpoint (the static error page). Route 53 continuously
monitors the health of the primary endpoint using health checks. If the health check fails (indicating the ALB
is down), Route 53 automatically starts routing traffic to the backup endpoint. This provides a seamless
failover experience for users.
S3 Static Website Hosting: Hosting the static error page in an S3 bucket configured for static website
hosting is a cost-effective and highly available solution. S3 offers high durability and availability, making it
ideal for serving static content.
Minimizes Changes and Overhead: This solution minimizes changes because it leverages existing Route 53
functionality and S3, which are common AWS services. It avoids the need for complex configurations or
additional infrastructure like EC2 instances specifically for error pages.
Let's examine why the other options are less suitable:
A (Latency Routing Policy): Latency routing routes traffic to the endpoint with the lowest latency. It's not
designed for failover scenarios. If the ALB is unhealthy, latency routing won't necessarily direct traffic away
from it.
C (Active-Active with EC2): While active-active configurations are suitable for distributing traffic, using an
EC2 instance to host a static error page adds unnecessary overhead and management complexity compared
to S3. Furthermore, an EC2 instance requires patching, monitoring, and scaling, which are not needed for a
simple error page. Also, configuring health checks to only fail over to the EC2 instance after the ALB fails
requires custom configuration and is less efficient than Route 53's built-in failover mechanism.
D (Multivalue Answer Routing Policy): While multivalue answer routing can provide redundancy, it's not
designed for a true failover scenario. If the ALB is unhealthy, Route 53 might still return its IP address
alongside the S3 bucket endpoint, potentially leading to inconsistent behavior for users. It distributes the
traffic across multiple healthy resources, not to a single backup resource when the primary is unhealthy.

---

## Question 546

**Answer:** **D**

**Explanation:**

The best solution is D. Set up AWS Storage Gateway to connect with the backup applications using the
iSCSI-virtual tape library (VTL) interface.

Here's why:
Preserves Existing Investment: The question explicitly requires maintaining the existing on-premises backup
applications and workflows. The VTL interface of AWS Storage Gateway is designed to seamlessly integrate
with existing backup software that's traditionally used with physical tape libraries. It presents itself as a
virtual tape library to the on-premises application, requiring minimal or no changes to the backup process.
Eliminates Physical Tapes: The VTL interface allows the backup application to write data to virtual tapes
stored in AWS. These virtual tapes are then stored in Amazon S3 or Amazon S3 Glacier Deep Archive,
effectively replacing the physical tapes and eliminating the need for physical tape management.
Cost Reduction: By moving backups to AWS storage services (S3 or Glacier), the company can leverage the
cost-effective nature of cloud storage, particularly S3 Glacier Deep Archive for long-term archival, leading to
significant cost savings compared to managing physical tapes.
AWS Storage Gateway's Capabilities: AWS Storage Gateway provides a bridge between on-premises
environments and AWS. Its VTL interface is specifically designed for tape backup replacement.
Why Other Options Are Less Suitable:

**A.** NFS interface with Storage Gateway: While the NFS interface could allow backup applications to write to
AWS, it's less tailored to the existing backup workflow using tape libraries. It might require more significant
changes to the backup application configuration.

**B.** & C. Amazon EFS: Amazon EFS is a file storage service ideal for shared file systems but not typically used
as a direct replacement for tape-based backups. Integrating EFS with backup software designed for tape
drives would require more substantial application modifications and may not be the most efficient approach.
The iSCSI interface of EFS is primarily intended for database, web server and development workloads, not
large scale backup scenarios.
In conclusion, the VTL interface of AWS Storage Gateway directly addresses the core requirement of
replacing physical tapes while preserving the existing on-premises backup applications and workflows with
minimal disruption, enabling cost reduction through the use of AWS storage services.
Further Research:
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
AWS Storage Gateway VTL: https://docs.aws.amazon.com/storagegateway/latest/userguide/VTL.html

---

## Question 547

**Answer:** **A**

**Explanation:**

The correct answer is A: Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3. Here's
why:
Kinesis Data Firehose is specifically designed for near real-time ingestion, transformation, and loading of
streaming data into data lakes, data stores, and analytics services like Amazon S3. It provides a managed
service, thus minimizing operational overhead. Firehose automatically scales to handle varying data volumes,
buffers data, and can optionally transform it before delivering to S3. It also handles error management and
retries, simplifying the data ingestion pipeline.

**Option B** is incorrect because AWS Glue is primarily an ETL (Extract, Transform, Load) service focused on
preparing data for analytics, typically from databases or data warehouses. While Glue can process data, it is
not optimized for continuous, high-volume streaming data ingestion like Kinesis Data Firehose is. It involves
more setup and operational overhead for streaming data scenarios.

**Option C** is incorrect because while Lambda can process data, directly using Lambda to handle high-volume
streaming data and store it in S3 would lead to increased operational complexity. Managing scaling, error
handling, and concurrency for Lambda functions in such a scenario requires significant effort. Furthermore,
Lambda functions have execution time limits and payload size restrictions that might hinder processing highvolume streaming data reliably. Lambda is typically used for event-driven processing, often triggered by
Firehose or other streaming services.

**Option D** is incorrect because AWS DMS is designed for database migration, not for general streaming data
ingestion. It is used to migrate data between different database platforms, not to collect and deliver
streaming data to Amazon S3 for analytical purposes. Using DMS for this purpose would be an inappropriate
and highly inefficient solution.

In summary, Kinesis Data Firehose is the best choice because it is a managed service specifically built for
ingesting streaming data into S3 with minimal operational overhead, automatic scaling, and built-in buffering
and transformation capabilities.
For further reading:
Amazon Kinesis Data Firehose: https://aws.amazon.com/kinesis/data-firehose/
AWS Glue: https://aws.amazon.com/glue/
AWS Lambda: https://aws.amazon.com/lambda/
AWS Database Migration Service: https://aws.amazon.com/dms/

---

## Question 548

**Answer:** **B**

**Explanation:**

The correct answer is B: Create organization units (OUs) for each department in AWS Organizations. Attach
service control policies (SCPs) to the OUs.

Here's a detailed justification:
AWS Organizations enables centralized management and governance across multiple AWS accounts. By
creating separate OUs for each department (finance, data analytics, and development), the company can
group the accounts logically based on their functional areas. Service Control Policies (SCPs) are a powerful
feature of AWS Organizations that allows you to define policies that specify the maximum permissions
available to the accounts within an OU. These policies act as guardrails, preventing accounts from performing
actions that are not explicitly allowed, regardless of the IAM permissions granted within individual accounts.
SCPs address the company's need to control which services each AWS account can use, aligning with both
cost and security concerns. The SCPs restrict service access at the organizational level, providing centralized
control. This centralized approach minimizes operational overhead because policies are defined and managed
in one place (the AWS Organizations management account), rather than individually across multiple accounts.
SCPs inherit down the organizational hierarchy, ensuring consistent policy enforcement.

**Option A** is incorrect because AWS Systems Manager templates are primarily used for automating
infrastructure management tasks within a single account, not for controlling service access across multiple
accounts in an organization. It lacks the centralized policy enforcement capability offered by SCPs.

**Option C** is not the best solution because AWS CloudFormation is designed for infrastructure-as-code and
provisioning resources. While you can control which services are used through CloudFormation templates, it
doesn't provide a centralized, organization-wide policy enforcement mechanism like SCPs. Managing separate
CloudFormation stacks for each department to restrict service usage would increase operational complexity.

**Option D** is incorrect because AWS Service Catalog focuses on creating and managing catalogs of IT services
that users can request. It helps standardize the deployment of applications and resources but does not
prevent accounts from directly accessing or using restricted AWS services. It's more about managing product
offerings, not controlling access across accounts.

In summary, AWS Organizations with SCPs provides the most efficient and centralized way to control service
access across multiple AWS accounts, minimizing operational overhead and meeting the company's
requirements.

---

## Question 549

**Answer:** **B**

**Explanation:**

The correct answer is B. Deploy a NAT gateway in the public subnets. Modify the private subnet route table
to direct all internet-bound traffic to the NAT gateway.

Here's a detailed justification:
The requirement is to allow the MySQL database instances in the private subnets to access the internet to
retrieve product catalog information from a third-party provider while maximizing security and minimizing
operational overhead. The database instances should not be directly exposed to the internet.
NAT Gateway (**Option B**): A NAT (Network Address Translation) gateway allows instances in a private subnet
to connect to the internet or other AWS services, but prevents the internet from initiating a connection with
those instances. This is a key security feature. Deploying a NAT gateway in the public subnets and routing the
database tier's internet-bound traffic through it ensures that the database instances can reach the third-party
service without being directly exposed. NAT gateway is also managed by AWS, so the operational overhead is
minimal. It automatically scales based on demand.
NAT Instance (**Option A**): While a NAT instance can provide similar functionality to a NAT gateway, it requires
more manual configuration and management. You need to manage patching, scaling, and high availability. This
increases operational overhead, which contradicts the requirements. Further, the NAT instance can become a
bottleneck as it is a single EC2 instance.
Internet Gateway (**Option C**): An internet gateway allows direct internet access to resources within the VPC.
Directly routing the database tier's traffic to the internet gateway would expose the database instances to
the internet, which compromises security. This violates the requirement to maximize security. This would
essentially make the subnet a public subnet.
Virtual Private Gateway (**Option D**): A virtual private gateway is used to connect the VPC to an on-premises
network using VPN or Direct Connect. It is not used for general internet access from private subnets. It's
purpose is to allow access into the VPC, which is the opposite of what is needed.

Therefore, a NAT gateway is the optimal solution because it provides secure internet access from private
subnets without direct internet exposure and has minimal operational overhead due to being a managed

service.

---

## Question 550

**Answer:** **BD**

**Explanation:**

Let's break down why options B and D are the correct choices for managing KMS permissions when Lambda
uses KMS-encrypted environment variables.

**B.** Add AWS KMS permissions in the Lambda execution role: The Lambda function's execution role is the
IAM role assumed by Lambda when it executes your code. It needs permission to decrypt the environment
variables using the KMS key. Therefore, the execution role must explicitly grant the kms:Decrypt permission
(and potentially kms:GenerateDataKey if data keys are being used). This allows the Lambda function, when
running, to call the KMS API to decrypt the environment variables before the function code executes.

**D.** Allow the Lambda execution role in the AWS KMS key policy: The KMS key policy defines who can use the
key. It needs to explicitly allow the Lambda execution role to use the key for decryption. This is achieved by
adding a statement to the key policy granting the kms:Decrypt permission to the Lambda execution role's
ARN. Without this, KMS will deny the Lambda function's request to decrypt the environment variables.
Essentially, the execution role says, "I need to decrypt something," and the KMS key policy says, "Okay, I trust
this role to decrypt using this key."
Let's look at why the other options are incorrect:

**A.** Add AWS KMS permissions in the Lambda resource policy: The Lambda resource policy grants
permissions to entities outside of Lambda to invoke the function. It's primarily used to allow services like API
Gateway or S3 to trigger the Lambda function. It is not used for managing permissions related to decrypting
environment variables within the Lambda function's execution environment.

**C.** Add AWS KMS permissions in the Lambda function policy: The Lambda function policy isn't a typical term.
Lambda uses a resource-based policy (the resource policy mentioned above) to manage who can invoke it, and
uses an execution role to manage what the Lambda function can access. There isn't a separate "function
policy" that would be relevant here.

**E.** Allow the Lambda resource policy in the AWS KMS key policy: The resource policy controls who can

invoke the Lambda function. The decryption process is related to what the Lambda function does after it's
invoked. Therefore, putting the resource policy in the KMS key policy is incorrect. The key policy needs to
trust the execution role which is doing the decrypting, not whoever is invoking the Lambda function.
In short, Lambda's execution role assumes permissions to interact with AWS resources and the KMS key
policy grants those permissions to decrypt the variables.
Further research links:
AWS KMS Key Policies
Using AWS Lambda environment variables
AWS Lambda Execution Role

---

# Quick Answer Sheet

Question 501: C
Question 502: CE
Question 503: A
Question 504: C
Question 505: C
Question 506: C
Question 507: A
Question 508: BD
Question 509: B
Question 510: C
Question 511: C
Question 512: A
Question 513: A
Question 514: B
Question 515: BCE
Question 516: B
Question 517: A
Question 518: A
Question 519: B
Question 520: B
Question 521: C
Question 522: BC
Question 523: B
Question 524: C
Question 525: A
Question 526: D
Question 527: D
Question 528: D
Question 529: B
Question 530: C
Question 531: A
Question 532: ADF
Question 533: A
Question 534: C
Question 535: B
Question 536: C
Question 537: A
Question 538: A
Question 539: B
Question 540: C
Question 541: ACE
Question 542: B
Question 543: AE
Question 544: A
Question 545: B
Question 546: D
Question 547: A
Question 548: B
Question 549: B
Question 550: BD
