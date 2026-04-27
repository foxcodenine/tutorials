# AWS SAA-C03 Practice Test: Questions 951-1000

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 951

A company has a custom application with embedded credentials that retrieves information from a database in an
Amazon RDS for MySQL DB cluster. The company needs to make the application more secure with minimal
programming effort. The company has created credentials on the RDS for MySQL database for the application
user.
Which solution will meet these requirements?

**A.** Store the credentials in AWS Key Management Service (AWS KMS). Create keys in AWS KMS. Configure the
application to load the database credentials from AWS KMS. Enable automatic key rotation

**B.** Store the credentials in encrypted local storage. Configure the application to load the database credentials
from the local storage. Set up a credentials rotation schedule by creating a cron job.

**C.** Store the credentials in AWS Secrets Manager. Configure the application to load the database credentials
from Secrets Manager. Set up a credentials rotation schedule by creating an AWS Lambda function for Secrets
Manager.

**D.** Store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the
database credentials from Parameter Store. Set up a credentials rotation schedule in the RDS for MySQL
database by using Parameter Store.

---

## Question 952

A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing
data and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data must be
encrypted at rest and replicated to a different AWS Region.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a new S3 bucket that uses server-side encryption with AWS KMS multi-Region keys (SSE-KMS).
Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon Athena to query
the data.

**B.** Create a new S3 bucket that uses server-side encryption with Amazon S3 managed keys (SSE-S3). Configure
Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon RDS to query the data.

**C.** Configure Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with Amazon
S3 managed keys (SSE-S3). Use Amazon Athena to query the data.

**D.** Configure S3 Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with
AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.

---

## Question 953

A company has a web application that has thousands of users. The application uses 8-10 user-uploaded images to
generate AI images. Users can download the generated AI images once every 6 hours. The company also has a
premium user option that gives users the ability to download the generated AI images anytime.

The company uses the user-uploaded images to run AI model training twice a year. The company needs a storage
solution to store the images.
Which storage solution meets these requirements MOST cost-effectively?

**A.** Move uploaded images to Amazon S3 Glacier Deep Archive. Move premium user-generated AI images to S3
Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent Access (S3 Standard-IA).

**B.** Move uploaded images to Amazon S3 Glacier Deep Archive Move all generated AI images to S3 Glacier
Flexible Retrieval.

**C.** Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move premium usergenerated AI images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent
Access (S3 Standard-IA).

**D.** Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move all generated AI
images to S3 Glacier Flexible Retrieval.

---

## Question 954

A company is developing machine learning (ML) models on AWS. The company is developing the ML models as
independent microservices. The microservices fetch approximately 1 GB of model data from Amazon S3 at startup
and load the data into memory. Users access the ML models through an asynchronous API. Users can send a
request or a batch of requests.
The company provides the ML models to hundreds of users. The usage patterns for the models are irregular. Some
models are not used for days or weeks. Other models receive batches of thousands of requests at a time.
Which solution will meet these requirements?

**A.** Direct the requests from the API to a Network Load Balancer (NLB). Deploy the ML models as AWS Lambda
functions that the NLB will invoke. Use auto scaling to scale the Lambda functions based on the traffic that the
NLB receives.

**B.** Direct the requests from the API to an Application Load Balancer (ALB). Deploy the ML models as Amazon
Elastic Container Service (Amazon ECS) services that the ALB will invoke. Use auto scaling to scale the ECS
cluster instances based on the traffic that the ALB receives.

**C.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the ML
models as AWS Lambda functions that SQS events will invoke. Use auto scaling to increase the number of
vCPUs for the Lambda functions based on the size of the SQS queue.

**D.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the ML
models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Use auto scaling
for Amazon ECS to scale both the cluster capacity and number of the services based on the size of the SQS
queue.

---

## Question 955

A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load
Balancer (ALB). The application stores data in an Amazon Aurora MySQL DB cluster.
The company needs to create a disaster recovery (DR) solution. The acceptable recovery time for the DR solution is
up to 30 minutes. The DR solution does not need to support customer usage when the primary infrastructure is
healthy.
Which solution will meet these requirements?

**A.** Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group. Set the desired
capacity and maximum capacity of the Auto Scaling group to a minimum value. Convert the Aurora MySQL DB
cluster to an Aurora global database. Configure Amazon Route 53 for an active-passive failover with ALB
endpoints.

**B.** Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling group to include
EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Convert the
Aurora MySQL DB cluster to an Aurora global database.

**C.** Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR infrastructure in a second
AWS Region with an ALB. Update the Auto Scaling group to include EC2 instances from the second Region. Use
Amazon Route 53 to configure active-active failover. Create an Aurora MySQL DB cluster in the second Region
Restore the data from the backup.

**D.** Back up the infrastructure configuration by using AWS Backup. Use the backup to create the required
infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to zero. Use Amazon Route
53 to configure active-passive failover. Convert the Aurora MySQL DB cluster to an Aurora global database.

---

## Question 956

A company is migrating its data processing application to the AWS Cloud. The application processes several shortlived batch jobs that cannot be disrupted. Data is generated after each batch job is completed. The data is
accessed for 30 days and retained for 2 years.
The company wants to keep the cost of running the application in the AWS Cloud as low as possible.
Which solution will meet these requirements?

**A.** Migrate the data processing application to Amazon EC2 Spot Instances. Store the data in Amazon S3
Standard. Move the data to Amazon S3 Glacier Instant. Retrieval after 30 days. Set an expiration to delete the
data after 2 years.

**B.** Migrate the data processing application to Amazon EC2 On-Demand Instances. Store the data in Amazon S3
Glacier Instant Retrieval. Move the data to S3 Glacier Deep Archive after 30 days. Set an expiration to delete
the data after 2 years.

**C.** Deploy Amazon EC2 Spot Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the
data to Amazon S3 Glacier Flexible Retrieval after 30 days. Set an expiration to delete the data after 2 years.

**D.** Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3 Standard.
Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2
years.

---

## Question 957

A company needs to design a hybrid network architecture. The company's workloads are currently stored in the
AWS Cloud and in on-premises data centers. The workloads require single-digit latencies to communicate. The
company uses an AWS Transit Gateway transit gateway to connect multiple VPCs.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Establish an AWS Site-to-Site VPN connection to each VPC.

**B.** Associate an AWS Direct Connect gateway with the transit gateway that is attached to the VPCs.

**C.** Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway.

**D.** Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct Connect
gateway.

**E.** Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the VPCs.

---

## Question 958

A global ecommerce company runs its critical workloads on AWS. The workloads use an Amazon RDS for
PostgreSQL DB instance that is configured for a Multi-AZ deployment.
Customers have reported application timeouts when the company undergoes database failovers. The company
needs a resilient solution to reduce failover time.
Which solution will meet these requirements?

**A.** Create an Amazon RDS Proxy. Assign the proxy to the DB instance.

**B.** Create a read replica for the DB instance. Move the read traffic to the read replica.

**C.** Enable Performance Insights. Monitor the CPU load to identify the timeouts.

**D.** Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions.

---

## Question 959

A company has multiple Amazon RDS DB instances that run in a development AWS account. All the instances have
tags to identify them as development resources. The company needs the development DB instances to run on a
schedule only during business hours.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Amazon CloudWatch alarm to identify RDS instances that need to be stopped. Create an AWS
Lambda function to start and stop the RDS instances.

**B.** Create an AWS Trusted Advisor report to identify RDS instances to be started and stopped. Create an AWS
Lambda function to start and stop the RDS instances.

**C.** Create AWS Systems Manager State Manager associations to start and stop the RDS instances.

**D.** Create an Amazon EventBridge rule that invokes AWS Lambda functions to start and stop the RDS instances.

---

## Question 960

A consumer survey company has gathered data for several years from a specific geographic region. The company
stores this data in an Amazon S3 bucket in an AWS Region.
The company has started to share this data with a marketing firm in a new geographic region. The company has
granted the firm's AWS account access to the S3 bucket. The company wants to minimize the data transfer costs
when the marketing firm requests data from the S3 bucket.
Which solution will meet these requirements?

**A.** Configure the Requester Pays feature on the company’s S3 bucket.

**B.** Configure S3 Cross-Region Replication (CRR) from the company’s S3 bucket to one of the marketing firm’s
S3 buckets.

**C.** Configure AWS Resource Access Manager to share the S3 bucket with the marketing firm AWS account.

**D.** Configure the company’s S3 bucket to use S3 Intelligent-Tiering Sync the S3 bucket to one of the marketing
firm’s S3 buckets.

---

## Question 961

A company uses AWS to host its public ecommerce website. The website uses an AWS Global Accelerator
accelerator for traffic from the internet. The Global Accelerator accelerator forwards the traffic to an Application
Load Balancer (ALB) that is the entry point for an Auto Scaling group.
The company recently identified a DDoS attack on the website. The company needs a solution to mitigate future
attacks.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by using rate-based
rules

**B.** Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a VPC network ACL

**C.** Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules

**D.** Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator

---

## Question 962

A company uses an Amazon DynamoDB table to store data that the company receives from devices. The
DynamoDB table supports a customer-facing website to display recent activity on customer devices. The company
configured the table with provisioned throughput for writes and reads.
The company wants to calculate performance metrics for customer device data on a daily basis. The solution must
have minimal effect on the table's provisioned read and write capacity.
Which solution will meet these requirements?

**A.** Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance
metrics on a recurring schedule.

**B.** Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a
recurring schedule.

**C.** Use an Amazon Redshift COPY command to calculate performance metrics on a recurring schedule.

**D.** Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics on a recurring
schedule.

---

## Question 963

A solutions architect is designing the cloud architecture for a new stateless application that will be deployed on
AWS. The solutions architect created an Amazon Machine Image (AMI) and launch template for the application.
Based on the number of jobs that need to be processed, the processing must run in parallel while adding and
removing application Amazon EC2 instances as needed. The application must be loosely coupled. The job items
must be durably stored.
Which solution will meet these requirements?

**A.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be
processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and
remove EC2 instances based on CPU usage.

**B.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed.
Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2
instances based on network usage.

**C.** Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed.
Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2

instances based on the number of items in the SQS queue.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be
processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and
remove EC2 instances based on the number of messages published to the SNS topic.

---

## Question 964

A global ecommerce company uses a monolithic architecture. The company needs a solution to manage the
increasing volume of product data. The solution must be scalable and have a modular service architecture. The
company needs to maintain its structured database schemas. The company also needs a storage solution to store
product data and product images.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use an Amazon EC2 instance in an Auto Scaling group to deploy a containerized application. Use an
Application Load Balancer to distribute web traffic. Use an Amazon RDS DB instance to store product data and
product images.

**B.** Use AWS Lambda functions to manage the existing monolithic application. Use Amazon DynamoDB to store
product data and product images. Use Amazon Simple Notification Service (Amazon SNS) for event-driven
communication between the Lambda functions.

**C.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with an Amazon EC2 deployment to deploy a
containerized application. Use an Amazon Aurora cluster to store the product data. Use AWS Step Functions to
manage workflows. Store the product images in Amazon S3 Glacier Deep Archive.

**D.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate to deploy a containerized application.
Use Amazon RDS with a Multi-AZ deployment to store the product data. Store the product images in an Amazon
S3 bucket.

---

## Question 965

A company is migrating an application from an on-premises environment to AWS. The application will store
sensitive data in Amazon S3. The company must encrypt the data before storing the data in Amazon S3.
Which solution will meet these requirements?

**A.** Encrypt the data by using client-side encryption with customer managed keys.

**B.** Encrypt the data by using server-side encryption with AWS KMS keys (SSE-KMS).

**C.** Encrypt the data by using server-side encryption with customer-provided keys (SSE-C).

**D.** Encrypt the data by using client-side encryption with Amazon S3 managed keys.

---

## Question 966

A company wants to create an Amazon EMR cluster that multiple teams will use. The company wants to ensure
that each team’s big data workloads can access only the AWS services that each team needs to interact with. The
company does not want the workloads to have access to Instance Metadata Service Version 2 (IMDSv2) on the
cluster’s underlying EC2 instances.
Which solution will meet these requirements?

**A.** Configure interface VPC endpoints for each AWS service that the teams need. Use the required interface VPC
endpoints to submit the big data workloads.

**B.** Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the runtime roles to submit the
big data workloads.

**C.** Create an EC2 IAM instance profile that has the required permissions for each team. Use the instance profile
to submit the big data workloads.

**D.** Create an EMR security configuration that has the EnableApplicationScopedIAMRole option set to false. Use
the security configuration to submit the big data workloads.

---

## Question 967

A solutions architect is designing an application that helps users fill out and submit registration forms. The
solutions architect plans to use a two-tier architecture that includes a web application server tier and a worker tier.
The application needs to process submitted forms quickly. The application needs to process each form exactly
once. The solution must ensure that no data is lost.
Which solution will meet these requirements?

**A.** Use an Amazon Simple Queue Service (Amazon SQS) FIFO queue between the web application server tier and
the worker tier to store and forward form data.

**B.** Use an Amazon API Gateway HTTP API between the web application server tier and the worker tier to store

and forward form data.

**C.** Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web application server tier
and the worker tier to store and forward form data.

**D.** Use an AWS Step Functions workflow. Create a synchronous workflow between the web application server
tier and the worker tier that stores and forwards form data.

---

## Question 968

A finance company uses an on-premises search application to collect streaming data from various producers. The
application provides real-time updates to search and visualization features.

The company is planning to migrate to AWS and wants to use an AWS native solution.
Which solution will meet these requirements?

**A.** Use Amazon EC2 instances to ingest and process the data streams to Amazon S3 buckets tor storage. Use
Amazon Athena to search the data. Use Amazon Managed Grafana to create visualizations.

**B.** Use Amazon EMR to ingest and process the data streams to Amazon Redshift for storage. Use Amazon
Redshift Spectrum to search the data. Use Amazon QuickSight to create visualizations.

**C.** Use Amazon Elastic Kubernetes Service (Amazon EKS) to ingest and process the data streams to Amazon
DynamoDB for storage. Use Amazon CloudWatch to create graphical dashboards to search and visualize the
data.

**D.** Use Amazon Kinesis Data Streams to ingest and process the data streams to Amazon OpenSearch Service.
Use OpenSearch Service to search the data. Use Amazon QuickSight to create visualizations.

---

## Question 969

A company currently runs an on-premises application that usesASP.NET on Linux machines. The application is
resource-intensive and serves customers directly.
The company wants to modernize the application to .NET. The company wants to run the application on containers
and to scale based on Amazon CloudWatch metrics. The company also wants to reduce the time spent on
operational maintenance activities.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the
application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.

**B.** Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the
application to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.

**C.** Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon
Elastic Container Service (Amazon ECS) on AWS Fargate.

**D.** Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon
Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances.

---

## Question 970

A company is designing a new internal web application in the AWS Cloud. The new application must securely
retrieve and store multiple employee usernames and passwords from an AWS managed service.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and
the BatchGetSecretValue API to retrieve usernames and passwords from Parameter Store.

**B.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS Batch with the
BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

**C.** Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and
AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Parameter Store.

**D.** Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the
BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

---

## Question 971

A company that is in the ap-northeast-1 Region has a fleet of thousands of AWS Outposts servers. The company
has deployed the servers at remote locations around the world. All the servers regularly download new software
versions that consist of 100 files. There is significant latency before all servers run the new software versions.
The company must reduce the deployment latency for new software versions.
Which solution will meet this requirement with the LEAST operational overhead?

**A.** Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution in ap-northeast-1
that includes a CachingDisabled cache policy. Configure the S3 bucket as the origin. Download the software by
using signed URLs.

**B.** Create an Amazon S3 bucket in ap-northeast-1. Create a second S3 bucket in the us-east-1 Region. Configure
replication between the buckets. Set up an Amazon CloudFront distribution that uses ap-northeast-1 as the
primary origin and us-east-1 as the secondary origin. Download the software by using signed URLs.

**C.** Create an Amazon S3 bucket in ap-northeast-1. Configure Amazon S3 Transfer Acceleration. Download the
software by using the S3 Transfer Acceleration endpoint.

**D.** Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution. Configure the S3
bucket as the origin. Download the software by using signed URLs.

---

## Question 972

A company currently runs an on-premises stock trading application by using Microsoft Windows Server. The
company wants to migrate the application to the AWS Cloud.
The company needs to design a highly available solution that provides low-latency access to block storage across
multiple Availability Zones.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the
application on both cluster nodes. Use Amazon FSx for Windows File Server as shared storage between the two
cluster nodes.

**B.** Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the
application on both cluster nodes. Use Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3)
volumes as storage attached to the EC2 instances. Set up application-level replication to sync data from one
EBS volume in one Availability Zone to another EBS volume in the second Availability Zone.

**C.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as
active and the second EC2 instance in standby mode. Use an Amazon FSx for NetApp ONTAP Multi-AZ file
system to access the data by using Internet Small Computer Systems Interface (iSCSI) protocol.

**D.** Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as
active and the second EC2 instance in standby mode. Use Amazon Elastic Block Store (Amazon EBS)
Provisioned IOPS SSD (io2) volumes as storage attached to the EC2 instances. Set up Amazon EBS level
replication to sync data from one io2 volume in one Availability Zone to another io2 volume in the second
Availability Zone.

---

## Question 973

A company is designing a web application with an internet-facing Application Load Balancer (ALB).
The company needs the ALB to receive HTTPS web traffic from the public internet. The ALB must send only
HTTPS traffic to the web application servers hosted on the Amazon EC2 instances on port 443. The ALB must
perform a health check of the web application servers over HTTPS on port 8443.
Which combination of configurations of the security group that is associated with the ALB will meet these
requirements? (Choose three.)

**A.** Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443.

**B.** Allow all outbound traffic to 0.0.0.0/0 for port 443.

**C.** Allow HTTPS outbound traffic to the web application instances for port 443.

**D.** Allow HTTPS inbound traffic from the web application instances for port 443.

**E.** Allow HTTPS outbound traffic to the web application instances for the health check on port 8443.

**F.** Allow HTTPS inbound traffic from the web application instances for the health check on port 8443.

---

## Question 974

A company hosts an application on AWS. The application gives users the ability to upload photos and store the
photos in an Amazon S3 bucket. The company wants to use Amazon CloudFront and a custom domain name to
upload the photo files to the S3 bucket in the eu-west-1 Region.
Which solution will meet these requirements? (Choose two.)

**A.** Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the certificate
in CloudFront.

**B.** Use AWS Certificate Manager (ACM) to create a public certificate in eu-west-1. Use the certificate in
CloudFront.

**C.** Configure Amazon S3 to allow uploads from CloudFront. Configure S3 Transfer Acceleration.

**D.** Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC).

**E.** Configure Amazon S3 to allow uploads from CloudFront. Configure an Amazon S3 website endpoint.

---

## Question 975

A weather forecasting company collects temperature readings from various sensors on a continuous basis. An
existing data ingestion process collects the readings and aggregates the readings into larger Apache Parquet
files. Then the process encrypts the files by using client-side encryption with KMS managed keys (CSE-KMS).
Finally, the process writes the files to an Amazon S3 bucket with separate prefixes for each calendar day.
The company wants to run occasional SQL queries on the data to take sample moving averages for a specific
calendar day.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure Amazon Athena to read the encrypted files. Run SQL queries on the data directly in Amazon S3.

**B.** Use Amazon S3 Select to run SQL queries on the data directly in Amazon S3.

**C.** Configure Amazon Redshift to read the encrypted files. Use Redshift Spectrum and Redshift query editor v2
to run SQL queries on the data directly in Amazon S3.

**D.** Configure Amazon EMR Serverless to read the encrypted files. Use Apache SparkSQL to run SQL queries on
the data directly in Amazon S3.

---

## Question 976

A company is implementing a new application on AWS. The company will run the application on multiple Amazon
EC2 instances across multiple Availability Zones within multiple AWS Regions. The application will be available
through the internet. Users will access the application from around the world.
The company wants to ensure that each user who accesses the application is sent to the EC2 instances that are
closest to the user’s location.
Which solution will meet these requirements?

**A.** Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application Load Balancer
to distribute the traffic across all Availability Zones within the same Region.

**B.** Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network Load Balancer
to distribute the traffic across all Availability Zones within the same Region.

**C.** Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing Application Load
Balancer to distribute the traffic across all Availability Zones within the same Region.

**D.** Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load Balancer to
distribute the traffic across all Availability Zones within the same Region.

---

## Question 977

A financial services company plans to launch a new application on AWS to handle sensitive financial transactions.
The company will deploy the application on Amazon EC2 instances. The company will use Amazon RDS for MySQL
as the database. The company’s security policies mandate that data must be encrypted at rest and in transit.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure AWS
Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.

**B.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure IPsec
tunnels for encryption in transit.

**C.** Implement third-party application-level data encryption before storing data in Amazon RDS for MySQL.
Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.

**D.** Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure a VPN
connection to enable private connectivity to encrypt data in transit.

---

## Question 978

A company is migrating its on-premises Oracle database to an Amazon RDS for Oracle database. The company
needs to retain data for 90 days to meet regulatory requirements. The company must also be able to restore the
database to a specific point in time for up to 14 days.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create Amazon RDS automated backups. Set the retention period to 90 days.

**B.** Create an Amazon RDS manual snapshot every day. Delete manual snapshots that are older than 90 days.

**C.** Use the Amazon Aurora Clone feature for Oracle to create a point-in-time restore. Delete clones that are
older than 90 days.

**D.** Create a backup plan that has a retention period of 90 days by using AWS Backup for Amazon RDS.

---

## Question 979

A company is developing a new application that uses a relational database to store user data and application
configurations. The company expects the application to have steady user growth. The company expects the
database usage to be variable and read-heavy, with occasional writes.
The company wants to cost-optimize the database solution. The company wants to use an AWS managed database
solution that will provide the necessary performance.
Which solution will meet these requirements MOST cost-effectively?

**A.** Deploy the database on Amazon RDS. Use Provisioned IOPS SSD storage to ensure consistent performance
for read and write operations.

**B.** Deploy the database on Amazon Aurora Serverless to automatically scale the database capacity based on
actual usage to accommodate the workload.

**C.** Deploy the database on Amazon DynamoDB. Use on-demand capacity mode to automatically scale
throughput to accommodate the workload.

**D.** Deploy the database on Amazon RDS. Use magnetic storage and use read replicas to accommodate the
workload.

---

## Question 980

A company hosts its application on several Amazon EC2 instances inside a VPC. The company creates a dedicated
Amazon S3 bucket for each customer to store their relevant information in Amazon S3.
The company wants to ensure that the application running on EC2 instances can securely access only the S3
buckets that belong to the company’s AWS account.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a gateway endpoint for Amazon S3 that is attached to the VPC. Update the IAM instance profile policy
to provide access to only the specific buckets that the application needs.

**B.** Create a NAT gateway in a public subnet with a security group that allows access to only Amazon S3. Update
the route tables to use the NAT Gateway.

**C.** Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance profile policy
with a Deny action and the following condition key:

**D.** Create a NAT Gateway in a public subnet. Update route tables to use the NAT Gateway. Assign bucket
policies for all buckets with a Deny action and the following condition key:

---

## Question 981

A company is building a cloud-based application on AWS that will handle sensitive customer data. The application
uses Amazon RDS for the database, Amazon S3 for object storage, and S3 Event Notifications that invoke AWS
Lambda for serverless processing.
The company uses AWS IAM Identity Center to manage user credentials. The development, testing, and operations
teams need secure access to Amazon RDS and Amazon S3 while ensuring the confidentiality of sensitive customer
data. The solution must comply with the principle of least privilege.
Which solution meets these requirements with the LEAST operational overhead?

**A.** Use IAM roles with least privilege to grant all the teams access. Assign IAM roles to each team with
customized IAM policies defining specific permission for Amazon RDS and S3 object access based on team

responsibilities.

**B.** Enable IAM Identity Center with an Identity Center directory. Create and configure permission sets with
granular access to Amazon RDS and Amazon S3. Assign all the teams to groups that have specific access with
the permission sets.

**C.** Create individual IAM users for each member in all the teams with role-based permissions. Assign the IAM
roles with predefined policies for RDS and S3 access to each user based on user needs. Implement IAM Access
Analyzer for periodic credential evaluation.

**D.** Use AWS Organizations to create separate accounts for each team. Implement cross-account IAM roles with
least privilege. Grant specific permission for RDS and S3 access based on team roles and responsibilities.

---

## Question 982

A company has an Amazon S3 bucket that contains sensitive data files. The company has an application that runs
on virtual machines in an on-premises data center. The company currently uses AWS IAM Identity Center.

The application requires temporary access to files in the S3 bucket. The company wants to grant the application
secure access to the files in the S3 bucket.
Which solution will meet these requirements?

**A.** Create an S3 bucket policy that permits access to the bucket from the public IP address range of the
company’s on-premises data center.

**B.** Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access to the S3
bucket. Configure the virtual machines to assume the role by using the AWS CLI.

**C.** Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an IAM user that
has access to the bucket.

**D.** Create an IAM user and policy that grants access to the bucket. Store the access key and secret key for the
IAM user in AWS Secrets Manager. Configure the application to retrieve the access key and secret key at
startup.

---

## Question 983

A company hosts its core network services, including directory services and DNS, in its on-premises data center.
The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are
planned that will require quick, cost-effective, and consistent access to these network services.
What should a solutions architect implement to meet these requirements with the LEAST amount of operational
overhead?

**A.** Create a DX connection in each new account. Route the network traffic to the on-premises servers.

**B.** Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises
servers.

**C.** Create a VPN connection between each new account and the DX VPRoute the network traffic to the onpremises servers.

**D.** Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network
traffic to the on-premises servers.

---

## Question 984

A company hosts its main public web application in one AWS Region across multiple Availability Zones. The
application uses an Amazon EC2 Auto Scaling group and an Application Load Balancer (ALB).
A web development team needs a cost-optimized compute solution to improve the company’s ability to serve
dynamic content globally to millions of customers.
Which solution will meet these requirements?

**A.** Create an Amazon CloudFront distribution. Configure the existing ALB as the origin.

**B.** Use Amazon Route 53 to serve traffic to the ALB and EC2 instances based on the geographic location of each
customer.

**C.** Create an Amazon S3 bucket with public read access enabled. Migrate the web application to the S3 bucket.
Configure the S3 bucket for website hosting.

**D.** Use AWS Direct Connect to directly serve content from the web application to the location of each customer.

---

## Question 985

A company stores user data in AWS. The data is used continuously with peak usage during business hours. Access
patterns vary, with some data not being used for months at a time. A solutions architect must choose a costeffective solution that maintains the highest level of durability while maintaining high availability.
Which storage solution meets these requirements?

**A.** Amazon S3 Standard

**B.** Amazon S3 Intelligent-Tiering

**C.** Amazon S3 Glacier Deep Archive

**D.** Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

---

## Question 986

A company is testing an application that runs on an Amazon EC2 Linux instance. A single 500 GB Amazon Elastic
Block Store (Amazon EBS) General Purpose SSO (gp2) volume is attached to the EC2 instance.
The company will deploy the application on multiple EC2 instances in an Auto Scaling group. All instances require
access to the data that is stored in the EBS volume. The company needs a highly available and resilient solution
that does not introduce significant changes to the application's code.
Which solution will meet these requirements?

**A.** Provision an EC2 instance that uses NFS server software. Attach a single 500 GB gp2 EBS volume to the
instance.

**B.** Provision an Amazon FSx for Windows File Server file system. Configure the file system as an SMB file store
within a single Availability Zone.

**C.** Provision an EC2 instance with two 250 GB Provisioned IOPS SSD EBS volumes.

**D.** Provision an Amazon Elastic File System (Amazon EFS) file system. Configure the file system to use General
Purpose performance mode.

---

## Question 987

A company recently launched a new application for its customers. The application runs on multiple Amazon EC2
instances across two Availability Zones. End users use TCP to communicate with the application.
The application must be highly available and must automatically scale as the number of users increases.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Add a Network Load Balancer in front of the EC2 instances.

**B.** Configure an Auto Scaling group for the EC2 instances.

**C.** Add an Application Load Balancer in front of the EC2 instances.

**D.** Manually add more EC2 instances for the application.

**E.** Add a Gateway Load Balancer in front of the EC2 instances.

---

## Question 988

A company is designing the architecture for a new mobile app that uses the AWS Cloud. The company uses
organizational units (OUs) in AWS Organizations to manage its accounts. The company wants to tag Amazon EC2
instances with data sensitivity by using values of sensitive and nonsensitive. IAM identities must not be able to

delete a tag or create instances without a tag.
Which combination of steps will meet these requirements? (Choose two.)

**A.** In Organizations, create a new tag policy that specifies the data sensitivity tag key and the required values.
Enforce the tag values for the EC2 instances. Attach the tag policy to the appropriate OU.

**B.** In Organizations, create a new service control policy (SCP) that specifies the data sensitivity tag key and the
required tag values. Enforce the tag values for the EC2 instances. Attach the SCP to the appropriate OU.

**C.** Create a tag policy to deny running instances when a tag key is not specified. Create another tag policy that
prevents identities from deleting tags. Attach the tag policies to the appropriate OU.

**D.** Create a service control policy (SCP) to deny creating instances when a tag key is not specified. Create
another SCP that prevents identities from deleting tags. Attach the SCPs to the appropriate OU.

**E.** Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the specified values.
Configure an AWS Lambda function to delete the resource if a noncompliant resource is found.

---

## Question 989

A company runs database workloads on AWS that are the backend for the company's customer portals. The
company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL.
The company needs to implement a 30-day backup retention policy. The company currently has both automated
RDS backups and manual RDS backups. The company wants to maintain both types of existing RDS backups that
are less than 30 days old.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure the RDS backup retention policy to 30 days for automated backups by using AWS Backup.
Manually delete manual backups that are older than 30 days.

**B.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30
days. Configure the RDS backup retention policy to 30 days for automated backups.

**C.** Configure the RDS backup retention policy to 30 days for automated backups. Manually delete manual
backups that are older than 30 days.

**D.** Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days
automatically by using AWS CloudFormation. Configure the RDS backup retention policy to 30 days for
automated backups.

---

## Question 990

A company is planning to migrate a legacy application to AWS. The application currently uses NFS to
communicate to an on-premises storage solution to store application data. The application cannot be modified to
use any other communication protocols other than NFS for this purpose.
Which storage solution should a solutions architect recommend for use after the migration?

**A.** AWS DataSync

**B.** Amazon Elastic Block Store (Amazon EBS)

**C.** Amazon Elastic File System (Amazon EFS)

**D.** Amazon EMR File System (Amazon EMRFS)

---

## Question 991

A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check
every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker
sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple
Availability Zones in one AWS Region.
Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was
lost with no way to replay the events. A solutions architect must prevent this problem from happening again and
needs a solution with the least operational overhead.
What should the solutions architect do to meet these requirements?

**A.** Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket
for processing.

**B.** Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda
function to process each item concurrently.

**C.** Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the
application to poll for new messages for processing.

**D.** Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to
query the table for new data for processing. Use TTL to remove data that has been processed.

---

## Question 992

A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS cluster will serve as a
backend for a desktop client that is deployed on premises. The desktop client requires direct connectivity to the
RDS cluster.
The company must give the development team the ability to connect to the cluster by using the client when the
team is in the office.
Which solution provides the required connectivity MOST securely?

**A.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS Site-to-Site
VPN with a customer gateway in the company's office.

**B.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use AWS Site-to-Site
VPN with a customer gateway in the company's office.

**C.** Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS security
groups to allow the company's office IP ranges to access the cluster.

**D.** Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a cluster user for
each developer. Use RDS security groups to allow the users to access the cluster.

---

## Question 993

A solutions architect is creating an application that will handle batch processing of large amounts of data. The
input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing,
the application will transfer the data over the network between multiple Amazon EC2 instances.
What should the solutions architect do to reduce the overall data transfer costs?

**A.** Place all the EC2 instances in an Auto Scaling group.

**B.** Place all the EC2 instances in the same AWS Region.

**C.** Place all the EC2 instances in the same Availability Zone.

**D.** Place all the EC2 instances in private subnets in multiple Availability Zones.

---

## Question 994

A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The
application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the
database credentials be encrypted and rotated every 14 days.
What should a solutions architect do to meet this requirement with the LEAST operational effort?

**A.** Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to
create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the
Aurora DB cluster. Configure a custom rotation period of 14 days.

**B.** Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string
parameter and one that uses the SecureString type for the password. Select AWS Key Management Service
(AWS KMS) encryption for the password parameter, and load these parameters in the application tier.
Implement an AWS Lambda function that rotates the password every 14 days.

**C.** Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon
Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application
tier. Restrict the access to the file on the file system so that the application can read the file and that only
super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14
days and writes new credentials into the file.

**D.** Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon
S3 bucket that the application uses to load the credentials. Download the file to the application regularly to
ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora
credentials every 14 days and uploads these credentials to the file in the S3 bucket.

---

## Question 995

A streaming media company is rebuilding its infrastructure to accommodate increasing demand for video content
that users consume daily.
The company needs to process terabyte-sized videos to block some content in the videos. Video processing can
take up to 20 minutes.
The company needs a solution that will scale with demand and remain cost-effective.
Which solution will meet these requirements?

**A.** Use AWS Lambda functions to process videos. Store video metadata in Amazon DynamoDB. Store video
content in Amazon S3 Intelligent-Tiering.

**B.** Use Amazon Elastic Container Service (Amazon ECS) and AWS Fargate to implement microservices to
process videos. Store video metadata in Amazon Aurora. Store video content in Amazon S3 Intelligent-Tiering.

**C.** Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) to process
videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue Service (Amazon SQS) for
queuing and to decouple processing tasks.

**D.** Deploy a containerized video processing application on Amazon Elastic Kubernetes Service (Amazon EKS) on
Amazon EC2. Store video metadata in Amazon RDS in a single Availability Zone. Store video content in Amazon
S3 Glacier Deep Archive.

---

## Question 996

A company runs an on-premises application on a Kubernetes cluster. The company recently added millions of new
customers. The company's existing on-premises infrastructure is unable to handle the large number of new

customers. The company needs to migrate the on-premises application to the AWS Cloud.
The company will migrate to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company does not
want to manage the underlying compute infrastructure for the new architecture on AWS.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use a self-managed node to supply compute capacity. Deploy the application to the new EKS cluster.

**B.** Use managed node groups to supply compute capacity. Deploy the application to the new EKS cluster.

**C.** Use AWS Fargate to supply compute capacity. Create a Fargate profile. Use the Fargate profile to deploy the
application.

**D.** Use managed node groups with Karpenter to supply compute capacity. Deploy the application to the new EKS
cluster.

---

## Question 997

A company is launching a new application that requires a structured database to store user profiles, application
settings, and transactional data. The database must be scalable with application traffic and must offer backups.
Which solution will meet these requirements MOST cost-effectively?

**A.** Deploy a self-managed database on Amazon EC2 instances by using open source software. Use Spot
Instances for cost optimization. Configure automated backups to Amazon S3.

**B.** Use Amazon RDS. Use on-demand capacity mode for the database with General Purpose SSD storage.
Configure automatic backups with a retention period of 7 days.

**C.** Use Amazon Aurora Serverless for the database. Use serverless capacity scaling. Configure automated
backups to Amazon S3.

**D.** Deploy a self-managed NoSQL database on Amazon EC2 instances. Use Reserved Instances for cost
optimization. Configure automated backups directly to Amazon S3 Glacier Flexible Retrieval.

---

## Question 998

A company runs its legacy web application on AWS. The web application server runs on an Amazon EC2 instance in
the public subnet of a VPC. The web application server collects images from customers and stores the image files
in a locally attached Amazon Elastic Block Store (Amazon EBS) volume. The image files are uploaded every night
to an Amazon S3 bucket for backup.
A solutions architect discovers that the image files are being uploaded to Amazon S3 through the public endpoint.
The solutions architect needs to ensure that traffic to Amazon S3 does not use the public endpoint.
Which solution will meet these requirements?

**A.** Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the VPC. Configure
the subnet route table to use the gateway VPC endpoint.

**B.** Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket through private
IP addresses.

**C.** Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the web application
to upload by using the Amazon S3 access point.

**D.** Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2 instance and
Amazon S3 to provide a dedicated network path.

---

## Question 999

A company is creating a prototype of an ecommerce website on AWS. The website consists of an Application Load
Balancer, an Auto Scaling group of Amazon EC2 instances for web servers, and an Amazon RDS for MySQL DB
instance that runs with the Single-AZ configuration.
The website is slow to respond during searches of the product catalog. The product catalog is a group of tables in
the MySQL database that the company does not update frequently. A solutions architect has determined that the
CPU utilization on the DB instance is high when product catalog searches occur.
What should the solutions architect recommend to improve the performance of the website during searches of the
product catalog?

**A.** Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load the product
catalog tables.

**B.** Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy loading to
populate the cache.

**C.** Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances when database
response is slow.

**D.** Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle the product
catalog queries that are sent to the database.

---

## Question 1000

A company currently stores 5 TB of data in on-premises block storage systems. The company's current storage
solution provides limited space for additional data. The company runs applications on premises that must be able
to retrieve frequently accessed data with low latency. The company requires a cloud-based storage solution.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Use Amazon S3 File Gateway. Integrate S3 File Gateway with the on-premises applications to store and
directly retrieve files by using the SMB file system.

**B.** Use an AWS Storage Gateway Volume Gateway with cached volumes as iSCSI targets.

**C.** Use an AWS Storage Gateway Volume Gateway with stored volumes as iSCSI targets.

**D.** Use an AWS Storage Gateway Tape Gateway. Integrate Tape Gateway with the on-premises applications to
store virtual tapes in Amazon S3.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 951

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages AWS Secrets Manager, which is specifically designed for
managing database credentials and other secrets securely. Secrets Manager provides automatic rotation
capabilities, reducing the operational overhead and minimizing the risk of using stale or compromised
credentials.

Here's a detailed justification:

AWS Secrets Manager is purpose-built for secrets management: It centralizes the storage and management
of secrets like database credentials, API keys, and OAuth tokens. This provides a secure and auditable
solution compared to storing secrets in code or local storage.
Automatic Rotation: Secrets Manager enables automatic rotation of database credentials. This is a crucial
security best practice because it significantly reduces the window of opportunity for attackers to exploit
compromised credentials. With automatic rotation, new credentials are automatically generated and updated
in both the application and the database.
Lambda Integration: Secrets Manager seamlessly integrates with AWS Lambda to handle the actual
credential rotation process. Lambda functions can connect to the database, create new credentials, and
update the secret in Secrets Manager.
Minimal Programming Effort: Using Secrets Manager reduces the programming effort required. The
application only needs to retrieve the credentials from Secrets Manager. The complexities of key
management and rotation are handled by the service and the Lambda function.
Security Best Practices: By storing credentials in a dedicated secrets management service, you adhere to
security best practices by ensuring the application does not store them in plain text in config files or code.
Secrets are encrypted in transit and at rest.

Why other options are incorrect:

**A.** AWS KMS: AWS KMS is primarily for encryption key management, not secrets management. While you
could encrypt the credentials, KMS doesn't offer built-in rotation capabilities for database credentials,
requiring significant custom development.

**B.** Encrypted local storage: Storing credentials in encrypted local storage is better than plain text, but it is
not a secure solution for enterprise applications. It is not centralized, difficult to manage, and lacks built-in
rotation capabilities. Cron job based rotation is also prone to errors and difficult to manage at scale.

**D.** Systems Manager Parameter Store: While Parameter Store can store secrets, it lacks the purpose-built
features of Secrets Manager, particularly automatic rotation, and database integration making it a more
complex solution.
In conclusion, AWS Secrets Manager offers the best solution for secure, automated, and easily managed
database credentials, aligning perfectly with the requirements of minimal programming effort and improved
security.
Supporting links:
AWS Secrets Manager
Rotating AWS Secrets Manager secrets

---

## Question 952

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution, focusing on meeting requirements with the
least operational overhead:
The problem requires a serverless solution for analyzing data stored in S3 using SQL, with encryption at rest
and cross-region replication. Let's analyze each aspect:
Serverless SQL Querying: Amazon Athena is a serverless query service that allows you to analyze data in S3
using standard SQL. This perfectly aligns with the serverless requirement and the need for SQL querying.
Amazon RDS, while supporting SQL, necessitates managing database instances, contradicting the serverless
principle and adding operational overhead.
Encryption at Rest: SSE-KMS (Server-Side Encryption with KMS managed keys) and SSE-S3 (Server-Side
Encryption with S3 managed keys) both provide encryption at rest. However, SSE-KMS with multi-Region
keys provides added flexibility in key management, enabling simpler key rotation across regions and stronger
compliance posture.
Cross-Region Replication (CRR): CRR automatically replicates objects from one S3 bucket to another in a
different AWS Region. This fulfills the cross-region replication requirement for data durability and disaster
recovery.
Least Operational Overhead: **Option A** offers the least operational overhead because it leverages Athena's
serverless nature, eliminating the need to manage a database server like RDS. Utilizing SSE-KMS with multiregion keys provides robust encryption with potentially simpler key management compared to custom
solutions. **Option B**, while providing replication and encryption with SSE-S3, opts for RDS instead of Athena.

**Option C**, while attempting to use Athena, uses SSE-S3, which may be less flexible in key management
compared to KMS and might require more overhead if keys need to be centrally managed across multiple
regions. Finally, **Option D** combines RDS's overhead with the potential complexity of SSE-KMS multi-region
keys, making it least efficient among the choices.

Therefore, creating a new S3 bucket with SSE-KMS multi-Region keys, configuring CRR, loading the data, and
querying with Athena provides the most serverless, secure, and manageable solution.

---

## Question 953

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most cost-effective solution for storing images,
considering the usage patterns described, and why other options are less suitable:
Uploaded User Images (Long-Term Archive): The user-uploaded images are only used twice a year for AI
model training. This indicates extremely infrequent access. Amazon S3 Glacier Deep Archive is designed for
long-term data archiving with the lowest storage cost. While retrieval is slower (hours), this aligns perfectly
with the twice-a-year access requirement, making it highly cost-effective for this data.
https://aws.amazon.com/s3/storage-classes/glacier/
Generated AI Images (Premium Users): Premium users require immediate and frequent access to their
generated AI images. S3 Standard provides high availability and performance, ideal for frequently accessed
data.
https://aws.amazon.com/s3/storage-classes/
Generated AI Images (Non-Premium Users): Non-premium users can only download their images once every
6 hours. S3 Standard-Infrequent Access (S3 Standard-IA) is suitable for data accessed less frequently but
requires rapid access when needed. It offers lower storage costs than S3 Standard, making it more costeffective for this usage pattern.
https://aws.amazon.com/s3/storage-classes/ia/
Why other options are less ideal:

**Option B**: Moving all generated AI images (including premium) to Glacier Flexible Retrieval is not optimal.
Premium users need immediate access, and Glacier Flexible Retrieval has retrieval times from minutes to
hours, degrading their experience. Glacier Flexible Retrieval is a good alternative, but not if immediate access
is needed.

**Option C** & D: Storing uploaded images in S3 One Zone-IA introduces risk. It stores data in a single Availability
Zone. If that AZ becomes unavailable, the data is lost. While cheaper than Standard, it is not suitable for data
that needs to be archived as training data since it is an infrequent process. S3 Glacier Deep Archive is cheaper
and suitable for such infrequent use cases.
https://aws.amazon.com/s3/storage-classes/onezone-ia/

In summary, option A aligns storage class with access frequency, providing the best cost optimization without
sacrificing the required performance for each category of images.

---

## Question 954

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages asynchronous processing with SQS and containerization with
ECS to handle irregular traffic patterns and large model sizes efficiently. Here's a detailed breakdown:
Asynchronous API and SQS: Using SQS decouples the API from the ML model processing. The API pushes
requests into the SQS queue, providing immediate acknowledgment to the user. This is crucial for handling
batches of requests and irregular usage patterns without overwhelming the ML model services. SQS acts as a
buffer, smoothing out traffic spikes. https://aws.amazon.com/sqs/
ECS and Containerization: Deploying the ML models as ECS services allows for containerization, which
ensures consistent environments and facilitates easy scaling. Each ECS service instance can load the 1 GB
model data into memory upon startup, as required. https://aws.amazon.com/ecs/
Auto Scaling based on Queue Size: Auto scaling the ECS cluster and the number of ECS services based on
the size of the SQS queue is key to cost optimization. As the queue grows, ECS automatically provisions more
resources to process the messages, and as the queue shrinks, it scales down to reduce costs when models are
idle. This addresses the irregular usage patterns effectively. ECS supports scaling based on custom metrics,
including SQS queue length.
Why other options are not ideal:
A (Lambda with NLB): Lambda functions have execution time limits and cold start issues which is not ideal for
ML models which load 1 GB of model data at startup. Also, NLB is designed for TCP traffic not HTTP which is a
limitation.
B (ECS with ALB): While ECS is a viable option, using an ALB directly would not be ideal because the API
would need to wait for the ML processing to complete before responding, causing potential timeouts. ECS can
handle the model sizes.
C (Lambda with SQS): Similar to option A, Lambda functions have execution time limits and cold start issues

which is not ideal for ML models which load 1 GB of model data at startup. Lambda is better suited for smaller
stateless tasks. Auto-scaling on vCPUs is not how Lambda functions are scaled; instead, they scale by the
number of concurrent executions.
In conclusion, the combination of SQS for asynchronous message queuing and ECS for containerized ML
model deployment with auto-scaling based on queue size provides the most scalable, cost-effective, and
reliable solution for handling irregular usage patterns and large model data in this scenario.

---

## Question 955

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Recovery Time Objective (RTO): The requirement is an RTO of up to 30 minutes.
Aurora Global Database: Aurora Global Database is designed for disaster recovery. It replicates data with
minimal latency to a secondary region, enabling a very fast failover. This is crucial for meeting the 30-minute
RTO. (https://aws.amazon.com/rds/aurora/global-database/)
Active-Passive Failover: Configuring Route 53 for active-passive failover directs traffic to the primary
region's ALB under normal conditions. In a disaster, it automatically reroutes traffic to the DR region's ALB.
This provides a controlled failover mechanism.
(https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
DR Infrastructure on Standby: Deploying a DR infrastructure (ALB, Auto Scaling group, EC2 instances) in a
second region ensures that the application can be quickly brought online in case of a primary region failure.
Setting the desired capacity of the Auto Scaling group to a minimum value (e.g., zero or a small number of
instances) minimizes costs during normal operation while allowing for rapid scaling upon failover.
Other options analysis:

**B:** Active-active Route 53 failover is not suitable in this scenario since the DR solution is only needed in a
failover scenario, so no traffic should be sent to the DR region in normal situations.

**C:** Restoring the data from backups could violate the 30 minute recovery time objective.

**D:** Restoring the infrastructure from backups could violate the 30 minute recovery time objective.

---

## Question 956

**Answer:** **D**

**Explanation:**

The correct solution is D. Here's why:
EC2 Instance Type: The problem states that batch jobs "cannot be disrupted." Spot Instances can be
terminated with little warning, which is not suitable for jobs that must complete without interruption. OnDemand Instances are a better fit because they provide a guaranteed compute capacity.
https://aws.amazon.com/ec2/pricing/on-demand/
Initial Storage: Storing the data in Amazon S3 Standard for the first 30 days is optimal because it offers low
latency access, which is needed given that data is accessed within this period.
https://aws.amazon.com/s3/storage-classes/
Long-Term Archival: After 30 days, the data is no longer actively accessed. Amazon S3 Glacier Deep Archive
is the most cost-effective storage class for data that is infrequently accessed but must be retained for long
periods. https://aws.amazon.com/s3/storage-classes/
Data Retention: S3 Lifecycle policies, using expiration, automatically delete data after a specified period (in
this case, 2 years). This reduces storage costs and ensures compliance with retention policies.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html
Why other options are not suitable:

**Option A** and C (Spot Instances): Not suitable because the workload cannot be interrupted.

**Option A** and B (S3 Glacier Instant Retrieval): Glacier Instant Retrieval is more expensive than Glacier Deep
Archive. Given the data is accessed less frequently after 30 days, using Deep Archive will be more costeffective.

**Option C** (S3 Glacier Flexible Retrieval): Glacier Flexible Retrieval is less cost-effective than Glacier Deep

Archive when infrequent access is acceptable.

In summary, **Option D** balances cost efficiency with the application's requirements for uninterrupted batch job
processing, data accessibility, and long-term data retention.

---

## Question 957

**Answer:** **BD**

**Explanation:**

The correct answer is BD. Here's a detailed justification:

**B.** Associate an AWS Direct Connect gateway with the transit gateway that is attached to the VPCs.
Direct Connect for Low Latency: AWS Direct Connect establishes a dedicated network connection from your
on-premises environment to AWS. This bypasses the public internet, providing more consistent network
performance and lower latency, which is critical for the single-digit millisecond latency requirement.
(https://aws.amazon.com/directconnect/)
Transit Gateway Integration: A Direct Connect gateway can be associated with a Transit Gateway. Transit
Gateway acts as a central hub, enabling connectivity between multiple VPCs. By associating the Direct
Connect gateway with the Transit Gateway, on-premises workloads can communicate with all VPCs
connected to the Transit Gateway over the dedicated Direct Connect link, ensuring low-latency
communication between on-premises and cloud resources. This is more efficient than managing individual
connections to each VPC.

**D.** Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct Connect
gateway.
Transit VIF for Transit Gateway Connectivity: To connect your Direct Connect connection to the Transit
Gateway, you need to create a transit virtual interface (VIF). A transit VIF allows you to reach the Direct
Connect gateway and, through it, the associated Transit Gateway.
(https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-tgw.html)
End-to-End Dedicated Path: Establishing the Direct Connect connection and creating the transit VIF creates a
dedicated, low-latency path from your on-premises environment, through the Direct Connect connection, to
the Direct Connect gateway, then through the Transit Gateway, and finally to the VPCs.
Why other options are less suitable or incorrect:

**A.** Establish an AWS Site-to-Site VPN connection to each VPC: While Site-to-Site VPN can provide a
connection to AWS, it uses the public internet, which is not suitable for single-digit millisecond latency
requirements. The internet introduces variability and is not a dedicated connection. Furthermore, establishing

multiple VPN connections becomes cumbersome and costly to manage for multiple VPCs.

**C.** Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway: This option doesn't
make sense. Direct Connect already provides a dedicated connection. Adding a VPN on top of it is redundant
and defeats the purpose of using Direct Connect for low latency. It would also add unnecessary complexity
and cost.

**E.** Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the VPCs:
Similar to option A, using VPN connections will not achieve single-digit millisecond latency due to its reliance
on the public internet. While Transit Gateway can route VPN traffic, the inherent limitations of VPNs for
latency remain.

Therefore, establishing a Direct Connect connection with a transit VIF to a Direct Connect gateway, and
associating that gateway with the Transit Gateway provides the dedicated, low-latency connectivity required,
and the transit gateway facilitates the connectivity with multiple VPCs, which meets the requirements of the
scenario most cost-effectively.

---

## Question 958

**Answer:** **A**

**Explanation:**

The correct answer is A: Create an Amazon RDS Proxy and assign the proxy to the DB instance.
Justification:
The primary problem is application timeouts during RDS failovers. RDS Multi-AZ deployments provide high
availability by automatically failing over to a standby instance in case of an issue. However, the failover
process, even though automatic, takes time. During this failover, the application loses its database
connection, leading to timeouts.
RDS Proxy is a fully managed, highly available database proxy that sits between your application and your
RDS database. Its key feature in this scenario is connection management and failover handling. RDS Proxy
maintains a pool of database connections and automatically reconnects to the new primary instance after a
failover. It masks the failover event from the application, thus drastically reducing or eliminating application
timeouts. The application simply continues using the same connection string via the proxy, and the proxy
handles the underlying switchover.
Here's why other options are not as suitable:

**B:** Create a read replica for the DB instance. Move the read traffic to the read replica. Read replicas are
helpful for offloading read traffic from the primary instance, improving performance. However, they do not
address the connection timeout issue during the failover of the primary instance. Read replicas also need time

to be promoted to primary after the primary instance fails.

**C:** Enable Performance Insights. Monitor the CPU load to identify the timeouts. Performance Insights helps
diagnose performance bottlenecks but doesn't prevent or mitigate failover-related timeouts. It can help
understand why performance is degraded, but it doesn't solve the core availability problem.

**D:** Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions. Snapshots
are useful for disaster recovery and point-in-time recovery but do not improve failover time. Restoring from a
snapshot is a time-consuming process and unsuitable for minimizing application timeouts during failover.

---

## Question 959

**Answer:** **C**

**Explanation:**

The correct answer is C. Create AWS Systems Manager State Manager associations to start and stop the
RDS instances.

Here's why:
AWS Systems Manager (SSM) State Manager allows you to automate tasks on a schedule using SSM
documents. In this case, you can use SSM documents to start and stop RDS instances based on tags. This
provides a centralized and auditable way to manage the scheduling. State Manager operates directly within
AWS and integrates seamlessly with RDS, removing the need for custom code. SSM offers built-in scheduling
capabilities and provides visibility into the execution status of the automation. This includes monitoring of
RDS resources. State Manager is designed for infrastructure management and automation, making it a natural
fit for this type of task, and requires minimal operational overhead. Using tags for RDS will also create an easy
filter to only include resources that need to be turned off.

Why other options are less suitable:
A (CloudWatch alarm & Lambda): This is feasible, but more complex. You'd need to create alarms to identify
instances and then use Lambda to start/stop them. SSM provides a cleaner, simpler way without requiring
coding and creating alarms.
B (Trusted Advisor & Lambda): Trusted Advisor focuses on cost optimization, security, and performance best
practices, not scheduling resources. It wouldn't directly support starting and stopping RDS instances based
on a schedule.

D (EventBridge & Lambda): While EventBridge can schedule events, it's more suitable for triggering actions
based on events. Using it to start/stop RDS instances is overkill compared to SSM's built-in scheduling
capabilities.
In summary:
SSM State Manager directly addresses the requirement with a straightforward, centralized, and less
operationally intensive solution. It allows you to define schedules for starting and stopping RDS instances
based on tags, minimizing manual intervention and custom coding.

---

## Question 960

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure the Requester Pays feature on the company’s S3 bucket.

Here's a detailed justification:
The primary goal is to minimize data transfer costs when the marketing firm (the requester) accesses data
from the company's S3 bucket. The key is that the requester is incurring data transfer costs to their region.

**Option A** (Requester Pays): This configuration makes the requester responsible for the data transfer costs.
This is directly aligned with minimizing the company's costs. When the marketing firm accesses the data, they
will pay for the data egress from the company's bucket to their region. This fulfills the requirement of
minimizing the company's data transfer costs.

**Option B** (CRR): Cross-Region Replication (CRR) replicates data from one S3 bucket to another in a different
AWS Region. While it places the data closer to the marketing firm, the company initially pays for the
replication costs. Furthermore, the question prioritizes minimizing data transfer costs specifically incurred
when the marketing firm requests data. CRR would incur costs upfront regardless of actual data access.

**Option C** (AWS RAM): AWS Resource Access Manager (RAM) allows you to share AWS resources across AWS

accounts within your organization or organizational units. Sharing the bucket through RAM doesn't inherently
minimize data transfer costs. The company would still be responsible for the egress costs when the marketing
firm retrieves data.

**Option D** (S3 Intelligent-Tiering and Sync): S3 Intelligent-Tiering automatically moves data between access
tiers (frequent, infrequent, archive) based on access patterns. This doesn't address the data transfer costs
associated with the marketing firm downloading the data. Syncing the bucket to one of the marketing firm’s
buckets isn't a native S3 feature and would require a custom solution, and further, it wouldn't address the
cost issue directly compared to Requester Pays.

Therefore, configuring Requester Pays ensures the marketing firm, as the requester, bears the cost of
transferring data out of the company's S3 bucket, effectively minimizing the company's costs.

---

## Question 961

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure an AWS WAF web ACL for the Global Accelerator accelerator to block
traffic by using rate-based rules.

Here's a detailed justification:

1. DDoS Mitigation at the Edge: The goal is to mitigate DDoS attacks. AWS recommends handling
these attacks as close to the source as possible. Global Accelerator sits at the edge of the AWS
network.

2. WAF Integration with Global Accelerator: AWS WAF integrates directly with Global Accelerator.
This enables you to create rules to filter malicious traffic before it even reaches your ALB and Auto
Scaling group.

3. Rate-Based Rules: Rate-based rules within AWS WAF are specifically designed to mitigate DDoS
attacks. They monitor the rate of requests from each IP address and block those exceeding a defined
threshold. This provides protection against volumetric attacks.

4. Least Implementation Effort: Implementing WAF at the Global Accelerator level requires attaching a
WAF web ACL to the accelerator. Configuring rate-based rules within the WAF web ACL is relatively

straightforward and requires less configuration than other options.

5. ALB WAF (**Option C**): While you can use WAF with an ALB, it's less effective for DDoS mitigation. The
traffic has already traversed the internet and reached the ALB, consuming resources. Also, Global
Accelerator provides static IP addresses which makes it easier to track source IPs for rate limiting.

6. Lambda and VPC Network ACLs (**Option B**): This option involves a more complex and potentially less
responsive implementation. Using Lambda to analyze ALB metrics and update VPC network ACLs
would require custom coding, monitoring, and more operational overhead. It's also slower to react to
attacks compared to WAF rate-based rules. VPC Network ACLs operate at the subnet level and are
not as granular or flexible as WAF rules.

7. CloudFront in Front of Global Accelerator (**Option D**): This option introduces unnecessary
complexity. Global Accelerator already provides benefits similar to a CDN, such as improved
performance through static IP addresses and traffic steering. Adding CloudFront would increase
costs and management overhead without providing a significant improvement in DDoS mitigation
capabilities that WAF on Global Accelerator wouldn't offer.

In summary, configuring an AWS WAF web ACL on the Global Accelerator accelerator with rate-based rules
provides an effective and efficient solution for mitigating DDoS attacks by filtering malicious traffic at the
edge of the AWS network with the least amount of operational burden.

---

## Question 962

**Answer:** **B**

**Explanation:**

The best solution is B: Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate
performance metrics on a recurring schedule. Here's why:

Minimizing Impact on DynamoDB: The core requirement is to minimize impact on the provisioned read and
write capacity of the DynamoDB table, which serves a customer-facing website. Running queries directly
against the DynamoDB table, as Athena (A) and EMR (D) would do, could consume significant read capacity,
potentially impacting the website's performance. Similarly, Redshift (C) using the COPY command would
require reading data directly from the DynamoDB table, again consuming read capacity.
AWS Glue and DynamoDB Export Connector: The AWS Glue DynamoDB export connector is designed
specifically for efficiently extracting data from DynamoDB tables without significantly impacting their
provisioned throughput. It utilizes DynamoDB's consistent read capabilities in a throttled manner or, ideally,
leverages DynamoDB backups (snapshots) for data extraction. This ensures the production table remains
responsive for customer requests.
AWS Glue allows you to schedule recurring jobs, making it suitable for calculating daily performance metrics.
AWS Glue provides powerful data transformation capabilities using Spark or Python, enabling you to easily
calculate the required performance metrics.
Athena Limitations: While Athena can query DynamoDB, it directly consumes read capacity, making it less
desirable when minimizing impact is a priority.
Redshift Limitations: Redshift COPY command reads directly from the DynamoDB table. This directly impacts
the read capacity. Moreover, Redshift is not designed for real-time or near-real-time analytics directly on
DynamoDB data.
EMR Limitations: EMR using Apache Hive could query DynamoDB, but again, this puts a load on the
DynamoDB table. Also, setting up and managing an EMR cluster for this specific task is more complex than
using AWS Glue, especially for recurring scheduled jobs.
Cost Considerations: AWS Glue is generally more cost-effective for this purpose than Redshift or EMR
because it is a serverless, pay-as-you-go service. You only pay for the time the Glue job runs.

---

## Question 963

**Answer:** **C**

**Explanation:**

The requirement of durable storage of job items and loose coupling between application components points
towards a queuing system. Amazon SQS (Simple Queue Service) is designed for this purpose, providing
reliable message queuing. SNS (Simple Notification Service), on the other hand, is for pub/sub messaging, not
durable storage of individual job items. Therefore, options A and D, which propose using SNS, are incorrect.
Auto Scaling groups are suitable for dynamically scaling EC2 instances based on demand. Scaling based on
the number of items in the SQS queue directly reflects the job backlog and the need for processing power.
This allows the Auto Scaling group to add instances when the queue is growing and remove instances when
the queue is shrinking, ensuring efficient resource utilization and responsiveness to varying job loads. Scaling
based on CPU or network usage, as suggested in option B, may not accurately reflect the volume of jobs
needing processing, potentially leading to under- or over-provisioning of EC2 instances.

Therefore, option C, using SQS for queuing jobs and scaling the Auto Scaling group based on the number of
items in the queue, correctly addresses the requirements for durable storage, loose coupling, and dynamic
scaling based on job volume. This approach ensures that all jobs are reliably stored until processed and that
the application scales appropriately to handle the workload.
Here are some links for further research:
Amazon SQS: https://aws.amazon.com/sqs/
Amazon SNS: https://aws.amazon.com/sns/
Auto Scaling groups: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html
Launch Templates: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html

---

## Question 964

**Answer:** **D**

**Explanation:**

The correct answer is D because it offers the most scalable, modular, and operationally efficient solution for
the given requirements.
Why D is the Best Choice:
Scalable and Modular Architecture: Amazon ECS with Fargate allows the company to break down the
monolithic application into microservices using containers, achieving a modular service architecture. Fargate
eliminates the operational overhead of managing EC2 instances for the containers, as AWS handles the
underlying infrastructure. https://aws.amazon.com/ecs/fargate/
Structured Database Schemas: Amazon RDS is suitable for maintaining structured database schemas as the
company requested. Using a Multi-AZ deployment in RDS ensures high availability and disaster recovery for
the product data, increasing the system's resilience. https://aws.amazon.com/rds/features/multi-az/
Product Images Storage: Amazon S3 is the ideal choice for storing product images because it provides
scalable, durable, and cost-effective object storage. S3 allows for easy retrieval and integration with the
application. https://aws.amazon.com/s3/
Least Operational Overhead: Fargate for container management and S3 for object storage minimize
operational overhead compared to managing EC2 instances or complex orchestration tools like EKS. RDS
managed services reduce operational overhead.

Why other options are less suitable:

**A:** While EC2 with Auto Scaling and RDS are good, it requires more operational overhead in managing EC2
instances.

**B:** DynamoDB is a NoSQL database and does not align with the requirement to maintain structured database
schemas. Also, migrating an existing monolithic application to Lambda functions and event-driven
architecture might be an extensive effort.

**C:** Amazon EKS is more complex to manage than ECS with Fargate and introduces higher operational
overhead. Glacier Deep Archive is more suitable for long-term archival data and less suitable for product
images that may need frequent access. Step Functions introduces complexity that isn't necessary for this
scenario.

Therefore, option D offers the best balance of scalability, modularity, and minimal operational overhead while
fulfilling the requirements of maintaining structured schemas and storing product images.

---

## Question 965

**Answer:** **A**

**Explanation:**

The correct answer is A: Encrypt the data by using client-side encryption with customer-managed keys.

Here's a detailed justification:
The requirement is to encrypt sensitive data before it's stored in Amazon S3. This indicates the need for
client-side encryption. Client-side encryption involves encrypting the data on the client-side (i.e., before
uploading it to S3). This provides end-to-end encryption, ensuring data confidentiality even during transit and
at rest in S3.

**Option A** utilizes client-side encryption, which fulfills the core requirement of pre-storage encryption.
Importantly, it specifies using customer-managed keys. This means the customer has full control over the
encryption keys, managing their lifecycle and access policies through AWS Key Management Service (KMS).
This addresses security best practices and compliance needs often associated with sensitive data. Customermanaged keys offer greater control and auditability compared to S3-managed keys.

**Option B**, Server-Side Encryption with AWS KMS keys (SSE-KMS), encrypts the data after it's received by S3.
While secure, it doesn't meet the specific requirement of encrypting the data before storing it. S3 handles the
encryption process upon receiving the unencrypted data.

**Option C**, Server-Side Encryption with Customer-Provided Keys (SSE-C), also encrypts data on the server side
(after receipt by S3). While the customer provides the key, they are responsible for managing the key's
lifecycle and securely providing it to S3 for each request. This adds operational complexity without
necessarily enhancing security compared to KMS.

**Option D**, Client-Side Encryption with Amazon S3 Managed Keys, is incorrect because S3-managed keys
grant Amazon more control over the key lifecycle. The company needs more control given the sensitivity of
the data as stated in the problem.

Therefore, client-side encryption with customer-managed keys is the most suitable option to meet the
specific requirement of pre-storage encryption with maximum customer control over the encryption keys. This
approach aligns with security best practices, compliance requirements, and ensures end-to-end data
protection.
Supporting documentation:
AWS KMS: https://aws.amazon.com/kms/
Protecting Data Using Server-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html
Protecting Data Using Client-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html

---

## Question 966

**Answer:** **B**

**Explanation:**

The correct answer is B. Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the
runtime roles to submit the big data workloads.

Here's why:
EMR Runtime Roles: EMR runtime roles, introduced with EMR 6.1.0 and later, provide a fine-grained access
control mechanism for big data applications running on EMR clusters. They allow you to assign different IAM
roles to different applications or jobs within the same cluster. This addresses the requirement of allowing
each team's workloads to access only the AWS services they need.
Granular Permissions: Runtime roles enable granular control over permissions at the application level,
moving away from the broad permissions granted by the EC2 instance profile. This is crucial for implementing
the principle of least privilege.
IMDSv2 Control: Runtime roles inherently bypass the need to directly interact with the EC2 instance
metadata. This is because applications assume the runtime role credentials which are separate from the
instance profile, thus effectively addressing the requirement of not using IMDSv2 for workloads.
VPC Endpoints (**Option A** - Incorrect): While interface VPC endpoints enhance security by keeping traffic
within the AWS network, they don't address the requirement of assigning different permissions to different
teams' workloads. All workloads using the VPC endpoints would still operate under the permissions
associated with the instance profile or some other global mechanism.
EC2 Instance Profile (**Option C** - Incorrect): Using EC2 instance profiles would grant the same set of
permissions to all workloads running on the cluster's EC2 instances. This contradicts the requirement that
each team's workloads should access only the AWS services they need.
EMR Security Configuration (**Option D** - Incorrect): The EnableApplicationScopedIAMRole option, typically
used in older EMR versions, is not the ideal way to manage permissions. It would provide less granular control
than runtime roles. Furthermore, setting it to 'false' would revert to using the EC2 instance profile, which is
against the requirement.

In summary, EMR runtime roles offer the most suitable solution because they allow for granular, applicationlevel permission management, fulfilling the requirement of controlling AWS service access for each team's
workloads and avoiding direct use of IMDSv2.
References:
Use IAM roles for EMR steps
EMR Runtime Roles

---

## Question 967

**Answer:** **A**

**Explanation:**

The correct answer is A, using an Amazon SQS FIFO queue. Let's dissect why:
The core requirement is to process each form exactly once and ensure no data loss, guaranteeing data
integrity in the application's workflow. This necessitates a queuing system with strict ordering and delivery
guarantees.
Amazon SQS FIFO (First-In, First-Out) queues directly address these requirements. FIFO queues maintain the
order in which messages are sent and received, ensuring that forms are processed in the order they were
submitted. More importantly, they provide exactly-once processing semantics when used with message
deduplication, meaning each form will be processed only one time even in the event of failures or retries.
Standard SQS queues (option C) offer best-effort ordering, which doesn't guarantee the precise order of form
processing and allows for duplicate processing, making them unsuitable.
Amazon API Gateway (option B) is primarily designed for handling API requests and routing traffic. While it
can interact with backend services, it doesn't inherently offer the queuing, ordering, and exactly-once
processing capabilities required for this scenario. API Gateway is a request/response service, not a durable
queue.
AWS Step Functions (option D) manages workflows, but a synchronous workflow doesn't inherently provide
the queuing and exactly-once processing guarantees required. A synchronous Step Functions workflow
directly invokes the worker, and if the worker fails midway through processing, the workflow will need to be
manually retried or include complex error handling logic. While Step Functions can integrate with SQS, using
SQS FIFO directly simplifies the solution for this specific requirement of ordered and guaranteed delivery. The
problem specifically asks to process forms "quickly." Introducing Step Functions adds orchestration overhead
to the overall process.

Therefore, Amazon SQS FIFO is the most appropriate solution because it guarantees ordered delivery and
exactly-once processing of form data between the web application server tier and the worker tier, fulfilling
the application's requirements for data integrity and processing accuracy. It eliminates the possibility of
duplicate form processing and ensures no data loss.
Supporting Documentation:
Amazon SQS FIFO queues:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html
Amazon SQS Message Deduplication:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queuerecommendations.html
AWS Step Functions: https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html
Amazon API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html

---

## Question 968

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS services specifically designed for real-time streaming data
ingestion, processing, search, and visualization, aligning perfectly with the finance company's requirements.

Here's a detailed justification:
Amazon Kinesis Data Streams: This service is designed for real-time ingestion of streaming data. It provides a
scalable and durable way to collect data from multiple producers, addressing the company's need to gather
data from various sources. (https://aws.amazon.com/kinesis/data-streams/)
Amazon OpenSearch Service (successor to Elasticsearch): OpenSearch is a powerful search and analytics
engine that excels at indexing and querying large volumes of data in near real-time. It is well-suited for the
company's need for real-time search functionality. Kinesis Data Streams can directly integrate with
OpenSearch, making the pipeline seamless. (https://aws.amazon.com/opensearch-service/)
Amazon QuickSight: QuickSight is a business intelligence (BI) service that enables the creation of interactive
dashboards and visualizations. It can connect to OpenSearch Service to provide insights and real-time
updates to the company's data, fulfilling the visualization requirement. (https://aws.amazon.com/quicksight/)
Options A, B, and C are less ideal for the following reasons:

**Option A** (EC2, S3, Athena, Grafana): Using EC2 for ingestion requires custom development and
management. S3 is primarily for storage, not real-time search. Athena is suitable for querying data at rest but
isn't optimized for the real-time updates required.

**Option B** (EMR, Redshift, Redshift Spectrum, QuickSight): Amazon EMR is better suited for batch processing
and is generally not ideal for constant streaming ingestion. Amazon Redshift is a data warehouse designed for
analytical workloads, while Kinesis Data Streams with OpenSearch is better for real-time search applications.
Redshift Spectrum could query data in S3 but is not the best choice for Real-time.

**Option C** (EKS, DynamoDB, CloudWatch Dashboards): While EKS can host streaming applications, it adds
operational complexity. DynamoDB is a NoSQL database, but not primarily designed for real-time search.
CloudWatch dashboards, while useful for monitoring, are not as robust or feature-rich as QuickSight for
complex data visualization and exploration. They are not optimized for this kind of search visualization.

Therefore, Kinesis Data Streams, OpenSearch Service, and QuickSight provide a fully managed, scalable, and
AWS-native solution that best satisfies the finance company's need for real-time data ingestion, processing,
search, and visualization capabilities.

---

## Question 969

**Answer:** **A**

**Explanation:**

The correct answer is A. Use AWS App2Container to containerize the application. Use an AWS
CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on
AWS Fargate.

Here's why:
App2Container: This service simplifies the process of containerizing existing applications, especially .NET
applications running on Linux, fitting the company's modernization goal. It automates the creation of
container images, Dockerfiles, and ECS task definitions. https://aws.amazon.com/app2container/
Amazon ECS on Fargate: Fargate is a serverless compute engine for ECS. This means the company doesn't
need to manage the underlying EC2 instances, reducing operational overhead significantly. Fargate handles
patching, scaling, and availability automatically. https://aws.amazon.com/fargate/
CloudFormation: Using a CloudFormation template allows for infrastructure as code (IaC), ensuring
consistent and repeatable deployments. This is crucial for managing infrastructure at scale and reducing
manual configuration errors. It allows for scaling based on CloudWatch metrics through auto-scaling groups
configured within the template. https://aws.amazon.com/cloudformation/

Why other options are less suitable:

**B.** Amazon ECS on EC2 instances: While ECS on EC2 is a valid option, it increases operational overhead. The
company would be responsible for managing the EC2 instances, including patching, scaling, and ensuring
availability. This contradicts the requirement to reduce operational maintenance.

**C.** AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon
Elastic Container Service (Amazon ECS) on AWS Fargate: AWS App Runner is a service that directly deploys
containerized web applications and APIs from source code or a container image. While App Runner simplifies
deployment, it is less flexible than ECS and CloudFormation for scaling and infrastructure management. Also,
App Runner directly deploys the application, there isn't deployment to ECS on Fargate.

**D.** AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon
Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances: This option has both increased
operational overhead, using EC2 instances for EKS, and is also trying to use AWS App Runner to deploy to

EKS. App Runner doesn't deploy to EKS, and using EKS on EC2 increases the operational overhead. EKS
manages Kubernetes, requiring more expertise.

In summary, option A offers the best balance between modernization, scalability based on CloudWatch
metrics, and minimal operational overhead by leveraging App2Container for containerization, ECS on Fargate
for serverless compute, and CloudFormation for infrastructure as code.

---

## Question 970

**Answer:** **D**

**Explanation:**

The most suitable solution for securely storing and retrieving employee credentials with the least operational
overhead is to utilize AWS Secrets Manager in conjunction with AWS CloudFormation and the
BatchGetSecretValue API.
Secrets Manager is designed explicitly for managing secrets like passwords, API keys, and database
credentials. It offers built-in features for encryption, automatic rotation, and access control, minimizing the
operational burden associated with managing secrets manually. Storing the credentials here inherently
provides a higher level of security compared to Parameter Store (especially for sensitive data like passwords)
because Secrets Manager is built specifically for that purpose.
CloudFormation enables infrastructure-as-code, which helps you define and provision resources in a
predictable and repeatable manner. By integrating Secrets Manager with CloudFormation, you can
automatically retrieve and configure your application with the stored employee credentials during
deployment.
The BatchGetSecretValue API (or GetSecretValue if batch retrieval isn't necessary) allows CloudFormation to
retrieve the usernames and passwords from Secrets Manager directly during the infrastructure deployment
process. This streamlines the deployment and configuration, reduces manual intervention, and ensures
consistency across environments.
Options A and C use Parameter Store, which while capable of storing secrets, is primarily designed for
configuration data. Secrets Manager offers better security features specifically designed for secrets
management, making it the preferred choice for this scenario. Furthermore, incorporating AWS Batch (as
suggested in options B and C) introduces unnecessary complexity and overhead. AWS Batch is typically
utilized for running batch computing workloads and does not directly contribute to secure retrieval of secrets
during deployment. Using CloudFormation with the API call is sufficient for the needs of the application.

Therefore, storing the employee credentials in AWS Secrets Manager and retrieving them during deployment

using CloudFormation and the appropriate Secrets Manager API call provides the most secure and
operationally efficient approach.
Supporting Links:
AWS Secrets Manager: https://aws.amazon.com/secrets-manager/
AWS CloudFormation: https://aws.amazon.com/cloudformation/
Secrets Manager GetSecretValue API:
https://docs.aws.amazon.com/secretsmanager/latest/dev/reference_awscli.html#cli_reference_getsecretvalue
AWS Systems Manager Parameter Store: https://docs.aws.amazon.com/systemsmanager/latest/userguide/systems-manager-parameter-store.html

---

## Question 971

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
The primary goal is to reduce deployment latency for software updates across globally distributed AWS
Outposts servers with minimal operational overhead.

**Option C**: S3 Transfer Acceleration is the most effective and least complex solution. S3 Transfer
Acceleration utilizes globally distributed AWS edge locations to accelerate data transfer to an S3 bucket.
When an Outpost server initiates a download using the Transfer Acceleration endpoint, the data is routed
through the nearest edge location, which optimizes the network path and protocol for faster uploads to the S3
bucket in ap-northeast-1. This inherently accelerates the subsequent downloads by the Outposts. The
operational overhead is relatively low; it simply involves enabling S3 Transfer Acceleration on the bucket and
using the specific endpoint for data transfer.
Why other options are suboptimal:

**Option A**: Disabling caching in CloudFront defeats the purpose of using a CDN for distributing content closer
to the Outposts, thus negating the benefit of reduced latency for repeated downloads.

**Option B**: Adding S3 replication to a second region introduces unnecessary complexity. While it provides
redundancy, it does not inherently accelerate the initial download process for the globally distributed

Outposts, which is the key bottleneck to address. Also, failing over to us-east-1 when the primary origin is apnortheast-1 will negatively impact the performance.

**Option D**: While CloudFront can help with content distribution, it still relies on the initial upload to the origin
(S3 bucket) in ap-northeast-1. Without accelerating this initial upload, latency will remain a problem, especially
considering the geographical distribution of Outposts. S3 Transfer Acceleration directly addresses the initial
upload bottleneck. Also the CloudFront needs time to distribute the files to its edge locations globally.

In summary, S3 Transfer Acceleration optimizes the data transfer to the S3 bucket, reducing latency with
minimal setup and management. This is the most efficient approach compared to alternatives that add
complexity without directly addressing the core issue of initial data transfer speed.

---

## Question 972

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
High Availability: The requirement for high availability is best met by a Windows Server cluster spanning
multiple Availability Zones (AZs). This ensures that if one AZ fails, the application can failover to the other
node in the other AZ.
Low Latency: Amazon FSx for Windows File Server, especially when deployed in a Multi-AZ configuration,
provides low-latency, shared file storage accessible from multiple EC2 instances. This meets the low-latency
access requirement to block storage. FSx for Windows File Server also offers native SMB support, which is
compatible with Windows Server.
Least Implementation Effort: FSx for Windows File Server handles replication and failover automatically,

reducing the implementation effort compared to manual data synchronization or application-level replication.
Setting up a Windows Server cluster is a common practice, and using FSx simplifies the shared storage
aspect.
Now let's examine why the other options are less suitable:

**B:** While using EBS is an option, setting up application-level replication introduces complexity and might not
be as reliable or performant as a managed file system like FSx. EBS volumes themselves are not inherently
shared across Availability Zones without replication solutions.

**C:** Using FSx for NetApp ONTAP with iSCSI adds unnecessary complexity. The native SMB protocol of FSx for
Windows File Server is more aligned with a Windows Server environment, making it simpler to implement.
Also, the active/standby configuration is not as highly available as a true cluster.

**D:** Using EBS io2 volumes and EBS-level replication is more complex than using a shared file system like FSx
for Windows File Server. Manually managing EBS replication adds operational overhead. The active/standby
setup also limits the application's ability to automatically recover from failures.

In summary, option A provides a combination of high availability, low latency, and least implementation effort
by leveraging a Windows Server cluster with shared storage provided by Amazon FSx for Windows File
Server.
Supporting Links:
Amazon FSx for Windows File Server: https://aws.amazon.com/fsx/windows/
Windows Server Failover Clustering: https://learn.microsoft.com/en-us/windows-server/failoverclustering/failover-clustering-overview

---

## Question 973

**Answer:** **ACE**

**Explanation:**

The correct answer is ACE. Here's why:

**A.** Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443: The ALB needs to accept HTTPS traffic from the
public internet (0.0.0.0/0 represents all IP addresses). This is the entry point for users accessing the web
application. Without this, the ALB would be inaccessible from the internet.

**C.** Allow HTTPS outbound traffic to the web application instances for port 443: The ALB needs to forward
HTTPS traffic to the web application servers on port 443. This outbound rule allows the ALB to communicate
with the backend instances and pass on the decrypted traffic.

**E.** Allow HTTPS outbound traffic to the web application instances for the health check on port 8443: The
ALB performs health checks on the EC2 instances to ensure they are healthy and can receive traffic. These
health checks occur over HTTPS on port 8443, as stated in the requirement. This outbound rule is essential
for the ALB to monitor the health of the application servers.

Why other options are incorrect:

**B.** Allow all outbound traffic to 0.0.0.0/0 for port 443: This is overly permissive. The ALB only needs to
communicate with the specific web application instances. Allowing outbound traffic to the entire internet on
port 443 is a security risk.

**D.** Allow HTTPS inbound traffic from the web application instances for port 443: This is unnecessary for the
ALB. The ALB initiates communication with the web application instances, not the other way around. The web
application instances don't need to send HTTPS traffic back to the ALB on port 443.

**F.** Allow HTTPS inbound traffic from the web application instances for the health check on port 8443: As
with option D, The ALB initiates health checks, not the instances. The ALB doesn't need to receive inbound
traffic from the web application instances on port 8443.
Supporting Documentation:
Application Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
Security Groups for Your VPC: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html

---

## Question 974

**Answer:** **BD**

**Explanation:**

Here's a detailed justification for why options B and D are the correct choices and why the others are
incorrect.

**Option B**: Use AWS Certificate Manager (ACM) to create a public certificate in eu-west-1. Use the
certificate in CloudFront.
This option is correct because to use a custom domain name with CloudFront, you need an SSL/TLS

certificate. ACM certificates are used to provide this encryption for secure HTTPS connections. While ACM
certificates for CloudFront distributions can be in us-east-1, which is the global region for certain AWS
services, this is only for certificates directly attached to CloudFront for viewer connections. In this scenario,
where the application is hosted in eu-west-1 and you want to use a custom domain for accessing resources in
that region via CloudFront, the certificate associated with the origin (S3 bucket in this case) should ideally be
in the same region. The user uploads photos to the S3 bucket within the eu-west-1 region, and a certificate in
the same region is the recommended approach.

**Option D**: Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC).
This option is correct because CloudFront needs permission to upload objects to the S3 bucket. OAC is the
recommended method for controlling access to S3 buckets from CloudFront. It enhances security compared
to origin access identity (OAI). OAC allows you to restrict S3 bucket access solely to your CloudFront
distribution. This ensures that users can only upload photos to S3 via CloudFront and not directly, which
protects against bypassing security measures you may have put in place (like content moderation on the
CloudFront distribution).

Why other options are incorrect:

**A.** Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the
certificate in CloudFront. While us-east-1 is used for certificates associated with the CloudFront distribution
itself for viewer connections, the requirement here is to securely upload to S3 in eu-west-1 through
CloudFront. Having the S3 origin's certificate in the same region, eu-west-1 (as in option B), is a more standard
and arguably clearer architectural approach.

**C.** Configure Amazon S3 to allow uploads from CloudFront. Configure S3 Transfer Acceleration. S3
Transfer Acceleration speeds up data transfers between your users and your S3 bucket. While it can improve
upload speeds, it doesn't directly address the requirement of using a custom domain name with CloudFront
and doesn't secure the upload process itself. The key requirement is to allow only CloudFront to upload, and
just enabling Transfer Acceleration doesn't achieve that.

**E.** Configure Amazon S3 to allow uploads from CloudFront. Configure an Amazon S3 website endpoint.
Configuring an S3 website endpoint is usually for serving static content directly from S3. While you can
technically upload to S3 through the S3 website endpoint using specific forms and methods, this isn't the
standard recommended approach when you have CloudFront in the architecture, especially for direct user
uploads. Moreover, the default S3 website endpoint doesn't support HTTPS with a custom domain without
significant extra configuration (which the other options handle more directly).
In summary:
Options B and D together provide a solution that uses a certificate to securely upload data (HTTPS with a
custom domain via CloudFront) and uses OAC to ensure that only the CloudFront distribution can upload the
photos to the S3 bucket.

---

## Question 975

**Answer:** **A**

**Explanation:**

The most cost-effective solution for running occasional SQL queries on encrypted Parquet data in S3 is to use
Amazon Athena.

Here's why:
Athena's Cost Efficiency: Athena is a serverless query service. You only pay for the queries you run, making it
ideal for infrequent queries. Options C and D (Redshift and EMR Serverless) involve more significant overhead,
as you're paying for a cluster or compute environment to be running, even when not actively querying. S3
Select (option B) has query cost and throughput limitations.
Direct Data Access: Athena directly queries data stored in S3, eliminating the need to load data into a
database like Redshift.
Encryption Handling: Athena integrates with KMS to handle CSE-KMS encrypted data. You can configure
Athena to use the same KMS key used to encrypt the files.
SQL Compatibility: Athena uses Presto, which is a distributed SQL query engine. It has great SQL
compatibility.
Parquet Support: Athena natively supports Parquet files, allowing for efficient data processing due to
Parquet's columnar storage format.
Simplicity: Compared to EMR Serverless, setting up and managing Athena is simpler. EMR Serverless is
overkill for simple querying.

Therefore, by using Athena, the company can directly query its encrypted Parquet files in S3 for specific
calendar days, calculate moving averages, and only pay for the queries executed, ensuring costeffectiveness.

---

## Question 976

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages Route 53 geoproximity routing and a Network Load Balancer
(NLB) to achieve proximity-based routing to application instances across multiple AWS Regions.

Here's why:
Route 53 Geoproximity Routing: This policy routes traffic to your resources based on the geographic location
of your users and your resources. It considers both latitude and longitude, allowing you to direct users to the
nearest EC2 instances, thereby minimizing latency and improving user experience. This perfectly aligns with
the requirement of sending users to the closest instances.
Network Load Balancer (NLB): NLBs are designed for high performance and low latency, making them ideal
for applications where minimizing response time is crucial. NLBs operate at Layer 4 (TCP/UDP) and can handle
millions of requests per second while maintaining ultra-low latencies. Furthermore, NLBs support static IP
addresses per Availability Zone, essential for geoproximity routing where you need to advertise specific IPs
for different regions.

Why other options are incorrect:
A (Geolocation Routing): Geolocation routing directs traffic based on pre-defined geographic regions
(countries or continents). While it directs traffic based on location, it doesn't consider the precise distance like
geoproximity. In the question's context, more precise routing based on distance is needed.
C (Multivalue Answer Routing): Multivalue answer routing returns multiple IP addresses for each request,
allowing the client to choose one. While it provides high availability, it doesn't consider proximity.
D (Weighted Routing): Weighted routing distributes traffic based on weights you assign to each resource.
This is useful for A/B testing or migrating traffic but doesn't consider the user's location.
In conclusion, Route 53 geoproximity routing in conjunction with an NLB provides the most effective solution
for directing users to the nearest EC2 instances across multiple AWS Regions, ensuring low latency and
optimal performance, especially when considering worldwide users.

---

## Question 977

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution, focusing on minimizing operational
overhead:

**Option A**: Using AWS KMS managed keys for RDS encryption at rest and ACM SSL/TLS certificates for
encryption in transit is the correct answer.
Encryption at Rest: Amazon RDS natively supports encryption at rest using AWS Key Management Service
(KMS). By using KMS managed keys, the company can avoid the operational burden of managing encryption
keys themselves. AWS handles key generation, rotation, and storage, reducing administrative overhead.
Encryption in Transit: AWS Certificate Manager (ACM) simplifies the process of obtaining, managing, and
deploying SSL/TLS certificates for use with AWS services and internal connected servers. Using ACM to
generate and manage SSL/TLS certificates is the easiest way to encrypt connections to RDS, and requires no
extra configuration in your EC2 instances.
Least Operational Overhead: **Option A** requires minimal configuration and management, reducing operational
overhead. RDS encryption and ACM certificates are AWS managed services, simplifying the implementation
and maintenance.
Why other options are less optimal:

**Option B** (IPsec tunnels): IPsec tunnels are complex to set up and maintain, adding significant operational
overhead. While they provide encryption, they are typically used for site-to-site VPNs, which are not
necessary for encrypting connections between EC2 instances and RDS within the same AWS region.

**Option C** (Third-party application-level encryption): Implementing application-level encryption adds
significant development and operational overhead. The application needs to handle encryption and
decryption, key management, and potential performance impacts. RDS already provides built-in encryption
capabilities, making this approach redundant and more complex.

**Option D** (VPN Connection): VPN connection and tunnels are used to connect to on-prem or other external
network and not needed for encryption between EC2 and RDS services within the same AWS region.
In conclusion, option A balances security with simplicity and minimizes operational overhead by leveraging
AWS managed services for encryption at rest and in transit, making it the most efficient solution for the
financial services company's requirements.

---

## Question 978

**Answer:** **D**

**Explanation:**

The correct answer is D because AWS Backup provides a centralized and automated way to manage backups
and retention policies across AWS services, including RDS.
Here's a breakdown:
Requirement 1: 90-day data retention: AWS Backup allows defining a backup plan with a retention period of
90 days. This ensures that backups are stored for the required duration to meet regulatory requirements.
Requirement 2: Point-in-time restore for 14 days: RDS automated backups, when integrated with AWS
Backup, inherently provide point-in-time recovery (PITR) capabilities within the defined retention period. Even
though the total retention is 90 days, you can restore to any point within the last 14 days.
Least operational overhead: AWS Backup automates the backup process according to the defined schedule
and retention policy. This eliminates the need for manual snapshot creation and deletion, reducing operational
overhead.
Let's analyze why the other options are less suitable:

**A:** While RDS automated backups do offer PITR, extending the retention period to 90 days for automated
backups might be more expensive than using AWS Backup. AWS Backup provides more granular control over
backup schedules and storage tiers.

**B:** Creating manual snapshots every day and manually deleting them introduces significant operational
overhead. This requires scripting and monitoring to ensure snapshots are created and deleted correctly, which
is error-prone.

**C:** Amazon Aurora Clone is not applicable to RDS for Oracle, and it is for Aurora only, meaning it will not work
in this case.

In summary, AWS Backup simplifies the backup management process and ensures compliance with retention
requirements with the least operational overhead.
Relevant documentation:
AWS Backup: https://aws.amazon.com/backup/

Backing Up and Restoring Amazon RDS Databases:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html

---

## Question 979

**Answer:** **B**

**Explanation:**

The most cost-effective solution for a read-heavy, variable workload relational database, with occasional
writes, and steady user growth is B. Deploy the database on Amazon Aurora Serverless.

Here's why:
Aurora Serverless Cost Optimization: Aurora Serverless is designed to automatically scale compute
resources up or down based on application needs. You pay only for the resources consumed. For a variable
workload with occasional writes, this eliminates the cost of over-provisioning resources when the database
isn't being heavily utilized. This is critical for cost optimization. https://aws.amazon.com/rds/aurora/serverless/
Read-Heavy Workload Suitability: Aurora, in general, is optimized for read performance. Aurora Serverless
inherits these benefits.
Relational Database Requirement: The application requires a relational database. Aurora is a MySQL and
PostgreSQL-compatible relational database.
Not A: Provisioned IOPS (PIOPS) storage is expensive and best suited for consistent, high-performance
workloads, not variable ones. It wouldn't be cost-effective for a workload that often idles.
Not C: DynamoDB is a NoSQL database and therefore not suitable for an application that requires a relational
database. While DynamoDB on-demand can scale, the database type is a mismatch.
Not D: Magnetic storage is the slowest and least performant storage option on RDS. While read replicas can
help with read performance, magnetic storage would significantly bottleneck performance and is not ideal
given the need for "necessary performance". While read replicas do help with read scaling, the base instance
with Magnetic storage would not handle the workload effectively, and the magnetic storage itself is not
performance-optimized. Aurora is more efficient at scaling and cost savings for variable workloads.

In summary, Aurora Serverless provides the necessary relational database compatibility, automatically scales
to handle the variable workload, and optimizes costs by charging only for consumed resources, making it the

most cost-effective choice.

---

## Question 980

**Answer:** **C**

**Explanation:**

Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance profile policy
with a Deny action and the following condition key.

---

## Question 981

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:

**Option B** leverages AWS IAM Identity Center (successor to AWS SSO), which is the most efficient and secure
method for managing user access across multiple AWS accounts and applications, especially when combined
with a central directory. Creating permission sets allows administrators to define granular, role-based access
to AWS resources like RDS and S3, adhering to the principle of least privilege. Assigning teams to groups and
then associating those groups with specific permission sets streamlines access management and reduces
operational overhead significantly. IAM Identity Center also integrates well with existing identity providers
(like Active Directory), further simplifying user management.

**Option A**, while using IAM roles with least privilege, involves managing roles and policies directly for each
team. This approach becomes cumbersome and difficult to scale as the number of teams and their access
requirements grow. IAM Identity Center provides centralized management, simplifying policy updates and
access reviews.

**Option C**, creating individual IAM users, is against best practices. It introduces significant operational
overhead for managing individual credentials and permissions. Moreover, it's harder to track and audit access
when dealing with individual users instead of groups or roles. IAM Access Analyzer helps, but it's a reactive
measure rather than a proactive, centralized solution.

**Option D**, using AWS Organizations with separate accounts, is overkill for simply managing access within a
single account. While Organizations is useful for multi-account environments, it adds unnecessary complexity
and operational overhead when the primary goal is to control access to RDS and S3 within a single AWS
account. Cross-account IAM roles also introduce added complexity that IAM Identity Center avoids.
IAM Identity Center's centralized management capabilities, coupled with the ability to define granular
permission sets, makes it the most scalable, secure, and least operationally intensive solution for managing
team access to RDS and S3 while adhering to the principle of least privilege. It's specifically designed for
scenarios where you have multiple users and groups requiring different levels of access to AWS resources.

---

## Question 982

**Answer:** **B**

**Explanation:**

The best solution is B. Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that
grant access to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI.

Here's why:
IAM Roles Anywhere: This feature allows on-premises applications to use IAM roles for temporary
credentials. This eliminates the need to embed long-term credentials directly into the application or virtual
machines. https://docs.aws.amazon.com/rolesanywhere/latest/userguide/
Security Best Practices: Storing IAM user credentials (access keys and secret keys) directly on virtual
machines or within application code (as in options C and D) is a major security risk. If compromised, these
credentials grant potentially broad, persistent access to AWS resources. IAM Roles Anywhere mitigates this
risk by providing temporary, short-lived credentials.
IAM Identity Center Integration: The solution leverages the existing IAM Identity Center (formerly AWS SSO)
which is a centralized identity management service. This ensures consistent and manageable access control
across the AWS environment and on-premises resources.
Dynamic Access: The application uses the AWS CLI to assume the IAM role. The AWS CLI is designed to
handle temporary credentials acquired through IAM roles or other authentication mechanisms.
Least Privilege: By using IAM roles, you can grant the application only the necessary permissions to access
the specific S3 bucket and files it requires (principle of least privilege). A bucket policy can further restrict
access based on the IAM role assumed.
Why other options are not ideal:

**A:** An S3 bucket policy based on the on-premises IP address range is less secure as the IP address can be
spoofed or changed. It is not the recommended approach for secure access, especially for sensitive data.
C & D: Storing or embedding IAM user credentials on the instances directly or storing them in Secrets
Manager and providing them to the VMs is not recommended for security reasons. If the instance is
compromised, the long-term IAM user credentials are also compromised. This is not the best way to use
Secrets Manager.
In conclusion, using IAM Roles Anywhere provides the most secure, scalable, and manageable solution to
grant the on-premises application temporary access to the S3 bucket, while integrating seamlessly with the
existing IAM Identity Center setup. It avoids the risks associated with managing long-term credentials.

---

## Question 983

**Answer:** **D**

**Explanation:**

The correct answer is D. Configure AWS Transit Gateway between the accounts. Assign DX to the transit
gateway and route network traffic to the on-premises servers.

Here's a detailed justification:
AWS Transit Gateway simplifies network architecture by acting as a central hub for routing traffic between
VPCs and on-premises networks. Using Transit Gateway, you can create a single connection point to your onpremises network via Direct Connect (DX) and then share that connection with multiple AWS accounts and
VPCs. This eliminates the need for separate DX connections or VPNs for each account, significantly reducing
operational overhead and cost.

**Option A** is incorrect because creating a DX connection in each new account is expensive and complex to
manage. Each connection would require individual configuration and management, adding significant
operational overhead.

**Option B** is incorrect. VPC endpoints are used to securely access AWS services without traversing the public
internet, but they are not relevant for routing traffic to on-premises resources. They don't facilitate
communication between different AWS accounts and the on-premises data center.

**Option C** is incorrect because setting up individual VPN connections for each account is more operationally
intensive compared to using Transit Gateway. VPN connections, while functional, don't scale as efficiently or
provide the centralized management capabilities of Transit Gateway, resulting in higher overhead.
Furthermore, VPNs might introduce more latency than Transit Gateway utilizing a DX connection.
Transit Gateway provides a scalable, centralized, and cost-effective solution. It integrates seamlessly with
Direct Connect, making it easy to extend your on-premises network connectivity to multiple AWS accounts.
Routing policies can be centrally managed within the Transit Gateway, ensuring consistent network access
control across all connected VPCs. By associating the Direct Connect gateway to the Transit Gateway, all
accounts can leverage the established DX connection to access on-premises resources, satisfying the
requirements of quick, cost-effective, and consistent access with minimal operational effort.
Here are some authoritative links for further research:
AWS Transit Gateway: https://aws.amazon.com/transit-gateway/
AWS Direct Connect: https://aws.amazon.com/directconnect/
Transit Gateway Routing: https://docs.aws.amazon.com/vpc/latest/tgw/tgw-routing.html

---

## Question 984

**Answer:** **A**

**Explanation:**

The best solution is A, creating an Amazon CloudFront distribution with the existing ALB as the origin. Here's
why:
CloudFront is a Content Delivery Network (CDN) that caches content closer to users, reducing latency and
improving performance for globally distributed users. This directly addresses the requirement of serving
dynamic content to millions of customers globally. By using the existing ALB as the origin, CloudFront will pull
dynamic content from the ALB when it's not already cached in its edge locations.

**Option B** (Route 53 geolocation routing) is less effective because it only routes users to the closest region, not
the closest edge location. Route 53 doesn't cache content, so users will still experience latency related to
reaching the regional ALB.

**Option C** (S3 bucket with website hosting) is not suitable for dynamic content. S3 is primarily for serving static
content and while it can host a website, it doesn't handle the backend processing of dynamic elements.
Migrating the entire web application to S3 would require significant re-architecting and won't inherently
improve global performance for dynamic requests.

**Option D** (AWS Direct Connect) is for establishing a dedicated network connection between on-premises
infrastructure and AWS, not for content delivery to millions of customers. It's more suited for hybrid cloud
scenarios and is not relevant to serving dynamic content globally. It is also significantly more expensive than a
CDN.
CloudFront's caching capabilities are key for cost optimization. By caching content at edge locations, it
reduces the load on the origin server (ALB), potentially allowing for a smaller EC2 Auto Scaling group behind
the ALB, leading to cost savings.

In summary, CloudFront offers the best balance of improved global performance, cost optimization, and
minimal disruption to the existing application architecture by utilizing the current ALB as the origin, making it
the ideal solution.

---

## Question 985

**Answer:** **B**

**Explanation:**

The optimal storage solution is Amazon S3 Intelligent-Tiering. Here's why:
The requirement is a cost-effective solution with high durability and high availability for data with variable
access patterns, including infrequently accessed data. S3 Standard provides high durability and availability
but isn't cost-effective for data accessed infrequently.
S3 Glacier Deep Archive is the cheapest option for long-term archival, but access times are slower (measured
in hours), contradicting the requirement for continuous use and peak usage during business hours. It’s
intended for archival, not frequent retrieval.
S3 One Zone-IA is cheaper than S3 Standard-IA but stores data in a single Availability Zone, which
compromises availability, especially when the goal is to maintain high availability. Its durability is also lower
than other S3 storage classes.
S3 Intelligent-Tiering automatically moves data between frequent, infrequent, and archive access tiers based
on access patterns, optimizing costs. When data is accessed frequently, it resides in a tier comparable to S3
Standard. When not accessed for a period, it transitions to infrequent access tiers like S3 Standard-IA or S3
Glacier Instant Retrieval, and ultimately, archive tiers, reducing storage costs significantly without retrieval
fees. Because Amazon S3 automatically manages the tiers, it removes the manual effort typically involved in
data lifecycle management. This achieves both cost-effectiveness and maintains high durability and
availability due to S3's inherent design principles. It caters to the peak usage scenario without inflating costs
during periods of infrequent access.

---

## Question 986

**Answer:** **D**

**Explanation:**

The correct answer is D, provisioning an Amazon Elastic File System (EFS) file system configured for General
Purpose performance mode. Here's why:
The core requirement is to provide a highly available and resilient shared storage solution that can be
accessed by multiple EC2 instances within an Auto Scaling group without significant code changes.

**Option A** (NFS server on a single EC2 instance) presents a single point of failure. If the NFS server instance
fails, the entire application's data access is disrupted. This violates the high availability requirement. Also,
managing an NFS server adds operational overhead.

**Option B** (Amazon FSx for Windows File Server) is designed for Windows-based applications that require SMB
protocol support. The question specifies a Linux EC2 instance, making FSx for Windows inappropriate.

**Option C** (Two Provisioned IOPS EBS volumes on a single EC2 instance) doesn't address the core requirement
of shared storage accessible by multiple instances. EBS volumes are typically attached to a single instance at
a time. While you could potentially configure some software-based RAID and network sharing, it adds
complexity and negates the "no significant code changes" requirement. Moreover, managing the redundancy
and replication across these volumes increases operational overhead.

**Option D** (Amazon EFS) is the optimal solution. EFS provides a fully managed, scalable, and highly available
network file system. It can be concurrently accessed by multiple EC2 instances across multiple Availability
Zones. Since the existing EBS volume is General Purpose (gp2) based, using EFS's General Purpose
performance mode is a suitable replacement, minimizing performance disruption. EFS's distributed
architecture inherently provides resilience and avoids a single point of failure. The instances within the Auto
Scaling group can mount the EFS file system using the NFS protocol, requiring minimal configuration and no
significant application code changes. EFS automatically scales capacity as needed, simplifying storage
management.

Therefore, EFS directly addresses the shared storage, high availability, and minimal code change
requirements.

---

## Question 987

**Answer:** **AB**

**Explanation:**

The most cost-effective solution for achieving high availability and automatic scaling for the application is a
combination of a Network Load Balancer (NLB) and an Auto Scaling group.

**A.** Add a Network Load Balancer (NLB) in front of the EC2 instances:
An NLB is designed for high-performance and low-latency applications that use TCP or UDP protocols.
Because the application communicates using TCP, an NLB is a suitable choice compared to an Application
Load Balancer (ALB), which is intended for HTTP/HTTPS traffic and adds overhead. The NLB distributes traffic
across multiple EC2 instances in different Availability Zones, enhancing availability and fault tolerance. If one
instance fails, the NLB automatically redirects traffic to the remaining healthy instances. NLBs are also very
efficient at handling fluctuating traffic volumes.
https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html

**B.** Configure an Auto Scaling group for the EC2 instances:
An Auto Scaling group automatically adjusts the number of EC2 instances based on demand. This ensures
that the application can handle increased traffic without manual intervention. It scales out (adds more
instances) when the load increases and scales in (removes instances) when the load decreases. This dynamic
scaling ensures optimal resource utilization and cost efficiency. Moreover, Auto Scaling groups automatically
replace unhealthy instances, contributing to high availability. It integrates seamlessly with the NLB,
registering and deregistering instances as they are launched or terminated.
https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-group.html

Why other options are less suitable:

**C.** Add an Application Load Balancer (ALB) in front of the EC2 instances: While ALBs can also provide high
availability and scaling, they are optimized for HTTP/HTTPS traffic. Using an ALB for a TCP-based application
introduces unnecessary overhead and cost.

**D.** Manually add more EC2 instances for the application: Manual scaling is time-consuming, error-prone, and
not cost-effective. It doesn't provide automatic fault tolerance and requires constant monitoring.

**E.** Add a Gateway Load Balancer (GWLB) in front of the EC2 instances: GWLB is designed for deploying and
managing virtual appliances (like firewalls and intrusion detection systems), not for general application load
balancing. It's not relevant for the described scenario and would be more complex and expensive than
needed.

Therefore, the combination of an NLB and an Auto Scaling group is the most cost-effective approach to meet
the application's requirements for high availability and automatic scaling for TCP traffic.

---

## Question 988

**Answer:** **AD**

**Explanation:**

Here's a detailed justification for why options A and D are the correct choices, and why the others are
incorrect, including supporting information and authoritative links:
Why A is correct:
Tag policies within AWS Organizations allow you to standardize tags across all accounts within your
organization. This approach centralizes tag governance and ensures consistency. By defining a tag policy that
specifies the data sensitivity tag key and the allowed values (sensitive and nonsensitive), you enforce these
values for EC2 instances. Attaching the tag policy to the relevant OU ensures that all accounts within that OU
adhere to the tagging requirements. Tag policies can enforce required values. This addresses the requirement
of instances having the correct tag values.
Why D is correct:
Service Control Policies (SCPs) provide centralized control over the AWS accounts in your organization. They
define guardrails or boundaries for what IAM users and roles within member accounts can do. You can create
an SCP that denies the creation of EC2 instances if the data sensitivity tag key is not specified. You can create
another SCP to prevent IAM identities from deleting tags. By attaching these SCPs to the appropriate OU, you
ensure that no one within the OU can bypass the tagging requirements. SCPs are powerful tools to enforce
compliance at the organization level.
Why B is incorrect:
SCPs don't "enforce tag values" in the way tag policies do. They can prevent actions if a tag key is missing,
but they can't directly force a tag to have a specific value. Tag policies are designed for value validation.
Why C is incorrect:
While tag policies can deny resources if a tag key is missing, creating two separate tag policies isn't as
efficient as using a single tag policy to define the key and required values (option A). Also, tag policies are
less effective than SCPs for preventing identities from deleting tags. SCPs provide a stronger, organizationwide preventative control.
Why E is incorrect:
AWS Config rules and Lambda functions for remediation are reactive controls. They detect and fix noncompliant resources after they have been created. The question specifies that IAM identities "must not be
able to create instances without a tag." This requires a preventative control, which Config + Lambda does not
provide. Also, while this approach can correct the problem, it is more complex than using SCPs and tag

policies.
In summary:
The best solution involves a combination of preventative controls. Tag policies enforce the presence and valid
values of the tag (option A), while SCPs prevent the creation of resources if the required tag is missing and
prevent tag deletion (option D). This layered approach provides comprehensive tag governance and ensures
compliance across the organization.

---

## Question 989

**Answer:** **C**

**Explanation:**

The correct answer is C. Configure the RDS backup retention policy to 30 days for automated backups.
Manually delete manual backups that are older than 30 days.

Here's a detailed justification:
Automated Backups: RDS provides automated backups that create a point-in-time recovery of your DB
instance. Configuring the retention policy for automated backups directly within RDS is the most costeffective and straightforward method. Setting this to 30 days ensures that RDS automatically manages these
backups, deleting those older than 30 days.
Manual Backups: Manual backups, on the other hand, are retained indefinitely until manually deleted.

Therefore, a separate process is needed to manage their retention. Manually deleting backups older than 30
days is the simplest and most direct way to handle them, particularly if the number of manual backups is
manageable.

Cost-Effectiveness: AWS Backup is a service for centralizing and automating data protection across AWS
services. While it can manage RDS backups, it introduces additional cost and complexity compared to using
RDS's built-in retention policy for automated backups.

Why other options are incorrect:

**Option A**: It is same as option C and makes no sense.

**Option B**: Disabling RDS automated backups is not a good practice as they are essential for disaster recovery.
The customer needs to maintain automated backups as mentioned in the prompt. The use of AWS
CloudFormation for deleting backups (as in **Option D**) is overkill and adds unnecessary complexity when a
simple manual deletion process is sufficient.

In summary, leveraging RDS's native backup retention policy for automated backups and manually deleting
older manual backups provides the most cost-effective and efficient solution for maintaining a 30-day
retention policy while preserving both types of existing RDS backups.
Supporting Links:
Amazon RDS Backups
AWS Backup

---

## Question 990

**Answer:** **C**

**Explanation:**

The correct answer is C, Amazon Elastic File System (Amazon EFS). Here's a detailed justification:
The legacy application relies on NFS (Network File System) for accessing its storage. This means that it
requires a shared file system accessible over a network. Among the options, only Amazon EFS provides a fully
managed NFS file system service in AWS.
Amazon EFS is designed to provide scalable, elastic, and serverless file storage that can be mounted on
multiple EC2 instances or on-premises servers (via Direct Connect or VPN) simultaneously using the NFS
protocol. This makes it an ideal solution for applications that require a shared file system and rely on NFS,
fulfilling the application's requirement without code modification.
AWS DataSync (A) is a data transfer service used to move large amounts of data between on-premises
storage and AWS storage services. It's not a storage solution itself and doesn't provide NFS access to
applications after the migration.
Amazon Elastic Block Store (Amazon EBS) (B) provides block-level storage volumes for use with Amazon EC2
instances. While EBS volumes can be formatted with a file system, they are typically attached to a single EC2
instance at a time, making them unsuitable for applications requiring shared storage accessed through NFS.

Setting up NFS server on an EC2 instance backed by EBS is possible, but adds operational overhead and
negates the fully-managed benefits of EFS.
Amazon EMR File System (Amazon EMRFS) (D) is a file system implementation used with Amazon EMR
(Elastic MapReduce) for processing big data. It's optimized for Hadoop-based workloads and is not generally
used as a general-purpose file system for other applications. EMRFS is also often used with Amazon S3 as its
underlying storage, and not suited for direct NFS mounts.

Therefore, because the legacy application requires NFS and needs a fully-managed solution for shared
storage, Amazon EFS is the most appropriate storage service for the migration.
Further Reading:
Amazon EFS: https://aws.amazon.com/efs/
NFS Protocol: https://en.wikipedia.org/wiki/Network_File_System

---

## Question 991

**Answer:** **C**

**Explanation:**

The best solution is C. Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming
data. Configure the application to poll for new messages for processing.

Here's why:
Decoupling: SQS decouples the GPS trackers (data producers) from the EC2 instances (data consumers). This
means the trackers can send data to the queue regardless of the EC2 instance's availability or processing
capacity. This decoupling prevents the web application from being overwhelmed by surges in data volume.
Buffering: SQS acts as a buffer. When there's a sudden spike in tracker data, SQS will queue the messages,
ensuring no data loss. The EC2 instances can then process the messages at their own pace. The queue
provides a holding place when the processing system cannot keep up.
Reliability: SQS provides reliable message delivery. Messages are stored redundantly across multiple
Availability Zones, ensuring durability and availability even in the event of hardware failures. This guarantees

that data isn't lost, addressing the critical requirement of avoiding data loss.
Scalability: SQS is highly scalable and can handle a massive volume of messages, adapting to the fluctuating
needs of GPS tracker data input. It dynamically scales to accommodate the workload without requiring
manual intervention.
Least Operational Overhead: SQS is a managed service, which means AWS handles the underlying
infrastructure, patching, and scaling. This minimizes the operational overhead for the solutions architect, as
they don't need to manage the queue infrastructure themselves.

Why other options are less suitable:

**A.** Amazon S3: S3 is primarily for object storage, not message queuing. Constantly scanning S3 for new data
is inefficient and introduces unnecessary complexity. The web application would need to implement polling
logic, which isn't ideal for real-time or near-real-time data processing.

**B.** Amazon API Gateway and Lambda: While API Gateway and Lambda can handle incoming requests, Lambda
functions have execution time limits. Processing complex GPS data transformations within a single Lambda
execution might exceed those limits. Furthermore, direct Lambda invocation might still overwhelm
downstream systems if there is a spike. Lambda is also stateless, making handling complex processing
workflows harder than using a dedicated queuing mechanism.

**D.** Amazon DynamoDB: DynamoDB is a NoSQL database, which can store location data. However, using it as a
queue would be complex and inefficient. The application would need to implement its own queuing
mechanism on top of DynamoDB, managing read/write consistency, polling, and deletion. Although TTL could
be used, this is not the primary purpose of DynamoDB. This also puts a significant load on DynamoDB,
especially if the application uses it for other purposes.

---

## Question 992

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:
Security Posture: Exposing an RDS database directly to the internet, as implied by options A and D using
public subnets, is a significant security risk. Databases should reside in private subnets, isolated from direct
internet access.
Connectivity Requirement: The desktop clients require direct connectivity from the company's office to the
RDS cluster. This implies a need for a private, secure connection between the on-premises network and the
AWS VPC.
AWS Site-to-Site VPN: This service establishes an encrypted tunnel between the on-premises network
(company office) and the AWS VPC. This ensures all traffic between the desktop clients and the RDS cluster
is secure. The customer gateway is configured on the company's side of the VPN connection, providing the
necessary endpoint for the tunnel.
Private Subnets: Placing the RDS cluster within private subnets reinforces security. Resources in private
subnets have no direct route to the internet. They can only be accessed from within the VPC or through
services like NAT gateways or, as in this case, a VPN connection.

**Option C**'s Flaw: While using private subnets is good, relying solely on RDS security groups with IP ranges is
less secure than a VPN. IP ranges can be spoofed, and the traffic is not encrypted in transit without a VPN.

**Option D**'s Flaw: Creating separate database users is a good practice for access control, but it does nothing
to solve the core problem of insecure internet exposure using public subnets.

In summary, option B provides the most secure solution by isolating the RDS cluster in private subnets and
establishing a secure, encrypted connection via AWS Site-to-Site VPN between the company's office and the
VPC.
Supporting Links:
AWS Site-to-Site VPN: https://aws.amazon.com/vpn/site-to-site-vpn/
Amazon VPC: https://aws.amazon.com/vpc/
Amazon RDS Security: https://aws.amazon.com/rds/security/

---

## Question 993

**Answer:** **C**

**Explanation:**

The most cost-effective approach to minimize data transfer costs when processing data between EC2
instances for batch processing, where data resides in S3, is to place all EC2 instances within the same
Availability Zone (AZ).

Here's why:
Data Transfer Costs: AWS charges for data transferred between Availability Zones and Regions. Data
transfer within the same AZ is typically free or significantly less expensive. Since the application involves
substantial data transfer between EC2 instances during processing, minimizing cross-AZ data movement
directly reduces costs.

**Option A** (Auto Scaling Group): While Auto Scaling is useful for managing EC2 instances and ensuring
availability, it doesn't inherently reduce data transfer costs. The instances within the ASG could still be spread
across multiple AZs, negating any potential savings.

**Option B** (Same Region): Keeping EC2 instances within the same Region is good practice for performance and
reducing latency but doesn't eliminate data transfer costs. Inter-AZ data transfer charges still apply within a
Region.

**Option D** (Private Subnets in Multiple AZs): While using private subnets adds a layer of security and
deploying across multiple AZs enhances availability, it actively increases data transfer costs due to cross-AZ
data movement. This option directly contradicts the goal of reducing data transfer expenses.

Therefore, keeping all EC2 instances in the same Availability Zone ensures that data transfer occurs within
the AZ, thus avoiding costly cross-AZ charges. This is the most direct and effective method to reduce overall
data transfer expenses for the given scenario.
Relevant AWS documentation:
Amazon EC2 Pricing: https://aws.amazon.com/ec2/pricing/ (Review the "Data Transfer" section for pricing
details)
AWS Data Transfer Costs: https://aws.amazon.com/premiumsupport/knowledge-center/data-transferbetween-ec2-instances/

---

## Question 994

**Answer:** **A**

**Explanation:**

The best solution is A because it leverages AWS Secrets Manager, designed specifically for managing,
rotating, and retrieving secrets like database credentials. Secrets Manager integrates directly with Aurora
and simplifies the rotation process.

Here's a detailed justification:
AWS Secrets Manager for Secret Management: Secrets Manager centralizes secrets, reducing the risk of
hardcoding them in application code or configuration files, which is a security best practice.
https://aws.amazon.com/secrets-manager/
KMS Encryption: Using KMS to encrypt the secrets adds an extra layer of security. The secrets are encrypted
at rest and in transit when retrieved. https://aws.amazon.com/kms/
Aurora Integration: Secrets Manager integrates directly with Aurora, simplifying credential management and
rotation. You can associate the secret with the Aurora cluster, and Aurora will automatically use the
credentials from the secret. https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secretsaurora.html
Automated Rotation: Secrets Manager supports automated secret rotation. This means that you can
configure Secrets Manager to automatically rotate the database credentials according to your schedule (in
this case, every 14 days). This reduces the operational burden and ensures that the credentials are always upto-date.
Least Operational Effort: By using Secrets Manager's built-in rotation capabilities, you avoid the need to
write and maintain custom Lambda functions for secret rotation. This simplifies the solution and reduces the
risk of errors.

Why other options are less suitable:

**Option B** (SSM Parameter Store): While SSM Parameter Store can store secrets, Secrets Manager is a better
choice because it has built-in secret rotation capabilities. Implementing a Lambda function for rotation adds
complexity.

**Option C** (EFS with KMS): Storing credentials in a file on EFS and mounting it on EC2 instances is less secure
and more complex than using Secrets Manager. Managing file access and ensuring proper encryption adds
overhead.

**Option D** (S3 with KMS): Similar to **Option C**, storing credentials in an S3 bucket and regularly downloading
them to the application is less secure and more complex than using Secrets Manager. It introduces latency in
credential updates and poses a risk of stale credentials.

---

## Question 995

**Answer:** **B**

**Explanation:**

The best solution is B because it offers a scalable, cost-effective, and robust approach for processing large
video files.
Here's a breakdown:
Amazon ECS with Fargate: ECS, particularly with Fargate, provides a managed container orchestration
service. Fargate eliminates the need to manage underlying EC2 instances, simplifying operations and autoscaling the resources required for processing videos based on demand. This aligns with the requirement for
scalability.
https://aws.amazon.com/ecs/fargate/
Microservices Architecture: Breaking down the video processing workflow into microservices allows for
independent scaling of different parts of the processing pipeline. This offers better resource utilization and
fault isolation compared to a monolithic application.
Amazon Aurora: Aurora is a MySQL and PostgreSQL-compatible relational database engine that combines
the speed and availability of high-end commercial databases with the simplicity and cost-effectiveness of
open-source databases. It's well-suited for storing video metadata due to its scalability and reliability.
https://aws.amazon.com/rds/aurora/
Amazon S3 Intelligent-Tiering: S3 Intelligent-Tiering automatically moves data to the most cost-effective
access tier based on access patterns without performance impact or operational overhead. Given the large
size of the videos and the likely variability in access frequency, this is a cost-effective choice.
https://aws.amazon.com/s3/storage-classes/intelligent-tiering/

Why other options are less suitable:
A (Lambda): AWS Lambda functions have execution time limits (maximum 15 minutes). Processing videos that
can take up to 20 minutes exceeds this limit, making Lambda unsuitable.
C (EC2 Auto Scaling with SQS): While EC2 Auto Scaling provides scalability, it involves more operational
overhead compared to Fargate. Managing EC2 instances (patching, scaling policies, etc.) increases the
management burden. Also, S3 Standard might not be as cost-effective as S3 Intelligent-Tiering for
infrequently accessed video content.
D (EKS): EKS is a powerful container orchestration service, but it adds significant operational complexity, and
it is probably overkill for this situation. It is not cost effective compared to using ECS with Fargate. Storing
video metadata in Amazon RDS in a single Availability Zone provides limited availability and is not best
practice. S3 Glacier Deep Archive is designed for very long-term archival and retrieval of data, which may not
be the most efficient storage class for this use case.

In summary, the combination of ECS with Fargate, Aurora for metadata, and S3 Intelligent-Tiering creates a
scalable, cost-effective, and manageable solution that addresses all the requirements, particularly the video
processing time and increasing demand.

---

## Question 996

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers the least operational overhead while fulfilling the requirements of
migrating the Kubernetes application to AWS without managing the underlying compute infrastructure. AWS
Fargate is a serverless compute engine for containers that works with EKS. This means the company doesn't
need to provision, scale, or manage EC2 instances for the Kubernetes worker nodes.

**Option A** is incorrect as self-managed nodes require manual provisioning, scaling, patching, and management
of EC2 instances, increasing operational overhead.

**Option B**, using managed node groups, simplifies node management compared to self-managed nodes, but
still involves some degree of responsibility for the underlying EC2 instances, such as scaling and patching the
operating system.

**Option D**, combining managed node groups with Karpenter, automates node provisioning and scaling more
dynamically than managed node groups alone. However, it still relies on EC2 instances and introduces the
complexity of managing Karpenter itself, increasing operational overhead compared to Fargate.
Fargate eliminates the need to manage any EC2 instances, aligning with the requirement of minimal
operational overhead. The company creates a Fargate profile, which specifies which pods should run on
Fargate based on namespace and selectors. EKS then automatically provisions and manages the necessary
compute resources when pods matching the profile are deployed. Thus, Fargate presents the most serverless,
hands-off approach.
For further reading:
AWS Fargate: https://aws.amazon.com/fargate/
Amazon EKS: https://aws.amazon.com/eks/
EKS Fargate Profiles: https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html

---

## Question 997

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C, using Amazon Aurora Serverless. Aurora Serverless automatically
scales database capacity based on application needs, eliminating the need to provision and manage database
instances. This eliminates the cost of idle capacity during periods of low activity. The automated backup
feature of Aurora provides data protection without extra effort.

**Option A** involves managing a database on EC2, which requires manual patching, scaling, and backup
configuration, increasing operational overhead and costs. While Spot Instances can be cheaper, their
availability is unpredictable, risking application downtime.

**Option B**, Amazon RDS with on-demand capacity, although easier to manage than self-managed EC2
instances, doesn't scale to zero like Aurora Serverless. It incurs costs even during periods of inactivity.

**Option D** suggests using a NoSQL database, which doesn't fit the requirement for a structured database for
user profiles and transactional data. Using Reserved Instances provides cost savings only if database
utilization is consistently high. Backing up to S3 Glacier Flexible Retrieval would be a more expensive option
than just using Aurora Serverless for this use case.

Therefore, Aurora Serverless offers the best balance of scalability, cost optimization, automated backups, and
suitability for structured data, making it the most cost-effective solution.

---

## Question 998

**Answer:** **A**

**Explanation:**

The correct answer is A: Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions
for the VPC. Configure the subnet route table to use the gateway VPC endpoint.

Here's why:
A gateway VPC endpoint allows resources within a VPC to privately access S3 without traversing the public
internet. This aligns directly with the requirement to avoid using the public endpoint for S3 traffic. By creating
a gateway endpoint, traffic destined for S3 from the EC2 instance within the VPC will be routed through the
AWS network, remaining private and secure. The route table configuration ensures that any traffic destined
for S3 from the specified subnet utilizes this endpoint. This approach is cost-effective and straightforward for
enabling private connectivity to S3.

**Option B** is incorrect because S3 buckets are not placed "inside" VPCs. S3 is a global service. While you can
restrict access to an S3 bucket from a specific VPC, you can't physically relocate it.

**Option C** is incorrect because an S3 access point manages access to data in S3 buckets. It doesn't inherently
provide private connectivity. While useful for other access control scenarios, it doesn't address the primary
requirement of avoiding the public internet.

**Option D** is incorrect because AWS Direct Connect is for establishing a dedicated network connection
between your on-premises infrastructure and AWS. This is overkill for the requirement of simply keeping S3
traffic within the AWS network. It's far more expensive and complex than using a VPC endpoint. Additionally,
the EC2 instance is already within AWS, so Direct Connect does not apply.

Therefore, option A offers the most efficient and cost-effective solution to meet the requirements.
Refer to the AWS documentation for more information on VPC endpoints:
VPC Endpoints
Gateway VPC Endpoints

---

## Question 999

**Answer:** **B**

**Explanation:**

The correct answer is B: Implement an Amazon ElastiCache for Redis cluster to cache the product catalog.
Use lazy loading to populate the cache.

Here's why:
The problem is high CPU utilization on the RDS for MySQL DB instance during product catalog searches,
indicating the database is the bottleneck. Caching the catalog data is the most effective way to alleviate this.

**Option B** suggests using Amazon ElastiCache for Redis, which is an in-memory data store ideal for caching
frequently accessed, relatively static data like a product catalog. Redis offers extremely fast read times
compared to querying a database.
Lazy loading ensures the cache is populated only when data is requested, reducing the initial load time and
cache misses. Instead of loading everything at once, each item is loaded into the cache only when it's first
accessed. This approach optimizes resource utilization and provides an immediate improvement in
performance.

**Option A** (Migrate to Redshift) is not ideal for this use case. Amazon Redshift is designed for large-scale data
warehousing and analytics, not for serving frequent, low-latency requests like product catalog searches. The
overhead of data transfer using the COPY command is also not ideal for this scenario.

**Option C** (Adding EC2 instances) addresses the wrong bottleneck. The issue is database CPU, not web server
capacity. Adding more EC2 instances will only increase the load on the already overloaded database.

**Option D** (Multi-AZ and throttling) improves availability, not performance. Multi-AZ provides failover capability
but doesn't reduce the load on the primary database instance during normal operation. Throttling queries will
worsen the user experience by slowing down responses further.
Caching with ElastiCache and lazy loading directly addresses the database bottleneck and provides a
significant performance boost for product catalog searches.
Further Reading:
Amazon ElastiCache: https://aws.amazon.com/elasticache/
Caching Strategies: https://aws.amazon.com/caching/
Redis: https://redis.io/

---

## Question 1000

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution, along with supporting explanations and
resources:
The company needs a cloud-based storage solution for 5 TB of data, requires low latency access to frequently
accessed data, and aims for operational efficiency.

**Option B** (AWS Storage Gateway Volume Gateway with cached volumes): This option provides a local cache
of frequently accessed data on the on-premises environment while storing the entire dataset in Amazon S3.
When an application requests data, Volume Gateway first checks the local cache. If the data is present (cache
hit), it's served with low latency. If not (cache miss), it's retrieved from S3, written to the cache, and then
served to the application. This approach perfectly balances local performance with cloud storage capacity.
Cached volumes only store a subset of your data locally.

**Option A** (Amazon S3 File Gateway): File Gateway is designed for storing files as objects in S3 using
protocols like NFS and SMB. While it's suitable for file-based workloads, it might not provide the low-latency
access required for block storage applications that expect consistent sub-millisecond response times.
Although it caches recently used data locally, it's generally optimized for throughput over immediate latency
for random read/write operations, thus not optimal.

**Option C** (AWS Storage Gateway Volume Gateway with stored volumes): Stored volumes store the entire
dataset on-premises and asynchronously back it up to S3. While it offers local performance, it doesn't directly
leverage cloud storage for the majority of the data. This approach negates the need for additional space,
since the company already has a on-premise solution with limited storage space. Moreover, this solution does
not help free up on-premise storage.

**Option D** (AWS Storage Gateway Tape Gateway): Tape Gateway is designed for archival and backup
purposes, emulating a tape library. It is unsuitable for frequently accessed data that requires low latency.
Why **Option B** is the most operationally efficient:
Reduced on-premises storage footprint: Only frequently accessed data is stored locally, minimizing the need
for large on-premises storage arrays.
Automated data tiering: Volume Gateway automatically manages the cache, moving frequently accessed
data to local storage and less frequently accessed data to S3, reducing manual intervention.
Centralized management: AWS Storage Gateway is a managed service that simplifies storage management,
monitoring, and backup tasks.
Cost optimization: Cloud storage (S3) is generally more cost-effective for long-term storage compared to onpremises block storage.

In summary, AWS Storage Gateway Volume Gateway with cached volumes provides the best combination of
low-latency access, cloud-based storage capacity, and operational efficiency, addressing the company's
specific requirements.

---

# Quick Answer Sheet

Question 951: C
Question 952: A
Question 953: A
Question 954: D
Question 955: A
Question 956: D
Question 957: BD
Question 958: A
Question 959: C
Question 960: A
Question 961: A
Question 962: B
Question 963: C
Question 964: D
Question 965: A
Question 966: B
Question 967: A
Question 968: D
Question 969: A
Question 970: D
Question 971: C
Question 972: A
Question 973: ACE
Question 974: BD
Question 975: A
Question 976: B
Question 977: A
Question 978: D
Question 979: B
Question 980: C
Question 981: B
Question 982: B
Question 983: D
Question 984: A
Question 985: B
Question 986: D
Question 987: AB
Question 988: AD
Question 989: C
Question 990: C
Question 991: C
Question 992: B
Question 993: C
Question 994: A
Question 995: B
Question 996: C
Question 997: C
Question 998: A
Question 999: B
Question 1000: B
