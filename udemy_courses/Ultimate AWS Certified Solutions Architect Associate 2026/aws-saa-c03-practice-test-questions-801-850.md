# AWS SAA-C03 Practice Test: Questions 801-850

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 801

A financial company needs to handle highly sensitive data. The company will store the data in an Amazon S3
bucket. The company needs to ensure that the data is encrypted in transit and at rest. The company must manage
the encryption keys outside the AWS Cloud.
Which solution will meet these requirements?

**A.** Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management
Service (AWS KMS) customer managed key.

**B.** Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management
Service (AWS KMS) AWS managed key.

**C.** Encrypt the data in the S3 bucket with the default server-side encryption (SSE).

**D.** Encrypt the data at the company's data center before storing the data in the S3 bucket.

---

## Question 802

A company wants to run its payment application on AWS. The application receives payment notifications from
mobile devices. Payment notifications require a basic validation before they are sent for further processing.
The backend processing application is long running and requires compute and memory to be adjusted. The
company does not want to manage the infrastructure.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon
EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment
notifications and send the notifications to the backend application. Deploy the backend application on Amazon
Elastic Kubernetes Service (Amazon EKS) Anywhere. Create a standalone cluster.

**B.** Create an Amazon API Gateway API. Integrate the API with an AWS Step Functions state machine to receive
payment notifications from mobile devices. Invoke the state machine to validate payment notifications and send
the notifications to the backend application. Deploy the backend application on Amazon Elastic Kubernetes
Service (Amazon EKS). Configure an EKS cluster with self-managed nodes.

**C.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon
EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment
notifications and send the notifications to the backend application. Deploy the backend application on Amazon
EC2 Spot Instances. Configure a Spot Fleet with a default allocation strategy.

**D.** Create an Amazon API Gateway API. Integrate the API with AWS Lambda to receive payment notifications
from mobile devices. Invoke a Lambda function to validate payment notifications and send the notifications to
the backend application. Deploy the backend application on Amazon Elastic Container Service (Amazon ECS).
Configure Amazon ECS with an AWS Fargate launch type.

---

## Question 803

A solutions architect is designing a user authentication solution for a company. The solution must invoke twofactor authentication for users that log in from inconsistent geographical locations, IP addresses, or devices. The
solution must also be able to scale up to accommodate millions of users.
Which solution will meet these requirements?

**A.** Configure Amazon Cognito user pools for user authentication. Enable the risk-based adaptive authentication
feature with multifactor authentication (MFA).

**B.** Configure Amazon Cognito identity pools for user authentication. Enable multi-factor authentication (MFA).

**C.** Configure AWS Identity and Access Management (IAM) users for user authentication. Attach an IAM policy
that allows the AllowManageOwnUserMFA action.

**D.** Configure AWS IAM Identity Center (AWS Single Sign-On) authentication for user authentication. Configure
the permission sets to require multi-factor authentication (MFA).

---

## Question 804

A company has an Amazon S3 data lake. The company needs a solution that transforms the data from the data
lake and loads the data into a data warehouse every day. The data warehouse must have massively parallel
processing (MPP) capabilities.
Data analysts then need to create and train machine learning (ML) models by using SQL commands on the data.
The solution must use serverless AWS services wherever possible.
Which solution will meet these requirements?

**A.** Run a daily Amazon EMR job to transform the data and load the data into Amazon Redshift. Use Amazon
Redshift ML to create and train the ML models.

**B.** Run a daily Amazon EMR job to transform the data and load the data into Amazon Aurora Serverless. Use
Amazon Aurora ML to create and train the ML models.

**C.** Run a daily AWS Glue job to transform the data and load the data into Amazon Redshift Serverless. Use
Amazon Redshift ML to create and train the ML models.

**D.** Run a daily AWS Glue job to transform the data and load the data into Amazon Athena tables. Use Amazon
Athena ML to create and train the ML models.

---

## Question 805

A company runs containers in a Kubernetes environment in the company's local data center. The company wants to
use Amazon Elastic Kubernetes Service (Amazon EKS) and other AWS managed services. Data must remain locally
in the company's data center and cannot be stored in any remote site or cloud to maintain compliance.
Which solution will meet these requirements?

**A.** Deploy AWS Local Zones in the company's data center.

**B.** Use an AWS Snowmobile in the company's data center.

**C.** Install an AWS Outposts rack in the company's data center.

**D.** Install an AWS Snowball Edge Storage Optimized node in the data center.

---

## Question 806

A social media company has workloads that collect and process data. The workloads store the data in on-premises
NFS storage. The data store cannot scale fast enough to meet the company’s expanding business needs. The
company wants to migrate the current data store to AWS.
Which solution will meet these requirements MOST cost-effectively?

**A.** Set up an AWS Storage Gateway Volume Gateway. Use an Amazon S3 Lifecycle policy to transition the data
to the appropriate storage class.

**B.** Set up an AWS Storage Gateway Amazon S3 File Gateway. Use an Amazon S3 Lifecycle policy to transition
the data to the appropriate storage class.

**C.** Use the Amazon Elastic File System (Amazon EFS) Standard-Infrequent Access (Standard-IA) storage class.
Activate the infrequent access lifecycle policy.

**D.** Use the Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA) storage class.
Activate the infrequent access lifecycle policy.

---

## Question 807

A company uses high concurrency AWS Lambda functions to process a constantly increasing number of messages
in a message queue during marketing events. The Lambda functions use CPU intensive code to process the
messages. The company wants to reduce the compute costs and to maintain service latency for its customers.
Which solution will meet these requirements?

**A.** Configure reserved concurrency for the Lambda functions. Decrease the memory allocated to the Lambda
functions.

**B.** Configure reserved concurrency for the Lambda functions. Increase the memory according to AWS Compute
Optimizer recommendations.

**C.** Configure provisioned concurrency for the Lambda functions. Decrease the memory allocated to the Lambda
functions.

**D.** Configure provisioned concurrency for the Lambda functions. Increase the memory according to AWS
Compute Optimizer recommendations.

---

## Question 808

A company runs its workloads on Amazon Elastic Container Service (Amazon ECS). The container images that the
ECS task definition uses need to be scanned for Common Vulnerabilities and Exposures (CVEs). New container
images that are created also need to be scanned.
Which solution will meet these requirements with the FEWEST changes to the workloads?

**A.** Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository to store the container
images. Specify scan on push filters for the ECR basic scan.

**B.** Store the container images in an Amazon S3 bucket. Use Amazon Macie to scan the images. Use an S3 Event
Notification to initiate a Macie scan for every event with an s3:ObjectCreated:Put event type.

**C.** Deploy the workloads to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Container
Registry (Amazon ECR) as a private image repository. Specify scan on push filters for the ECR enhanced scan.

**D.** Store the container images in an Amazon S3 bucket that has versioning enabled. Configure an S3 Event
Notification for s3:ObjectCreated:* events to invoke an AWS Lambda function. Configure the Lambda function
to initiate an Amazon Inspector scan.

---

## Question 809

A company uses an AWS Batch job to run its end-of-day sales process. The company needs a serverless solution
that will invoke a third-party reporting application when the AWS Batch job is successful. The reporting application
has an HTTP API interface that uses username and password authentication.
Which solution will meet these requirements?

**A.** Configure an Amazon EventBridge rule to match incoming AWS Batch job SUCCEEDED events. Configure the
third-party API as an EventBridge API destination with a username and password. Set the API destination as the
EventBridge rule target.

**B.** Configure Amazon EventBridge Scheduler to match incoming AWS Batch job SUCCEEDED events. Configure
an AWS Lambda function to invoke the third-party API by using a username and password. Set the Lambda
function as the EventBridge rule target.

**C.** Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API.
Configure an HTTP proxy integration on the API Gateway REST API to invoke the third-party API by using a
username and password.

**D.** Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API.

Configure a proxy integration on the API Gateway REST API to an AWS Lambda function. Configure the Lambda
function to invoke the third-party API by using a username and password.

---

## Question 810

A company collects and processes data from a vendor. The vendor stores its data in an Amazon RDS for MySQL
database in the vendor's own AWS account. The company’s VPC does not have an internet gateway, an AWS Direct
Connect connection, or an AWS Site-to-Site VPN connection. The company needs to access the data that is in the

vendor database.
Which solution will meet this requirement?

**A.** Instruct the vendor to sign up for the AWS Hosted Connection Direct Connect Program. Use VPC peering to
connect the company's VPC and the vendor's VPC.

**B.** Configure a client VPN connection between the company's VPC and the vendor's VPC. Use VPC peering to
connect the company's VPC and the vendor's VPC.

**C.** Instruct the vendor to create a Network Load Balancer (NLB). Place the NLB in front of the Amazon RDS for
MySQL database. Use AWS PrivateLink to integrate the company's VPC and the vendor's VPC.

**D.** Use AWS Transit Gateway to integrate the company's VPC and the vendor's VPC. Use VPC peering to connect
the company’s VPC and the vendor's VPC.

---

## Question 811

A company wants to set up Amazon Managed Grafana as its visualization tool. The company wants to visualize data
from its Amazon RDS database as one data source. The company needs a secure solution that will not expose the
data over the internet.
Which solution will meet these requirements?

**A.** Create an Amazon Managed Grafana workspace without a VPC. Create a public endpoint for the RDS
database. Configure the public endpoint as a data source in Amazon Managed Grafana.

**B.** Create an Amazon Managed Grafana workspace in a VPC. Create a private endpoint for the RDS database.
Configure the private endpoint as a data source in Amazon Managed Grafana.

**C.** Create an Amazon Managed Grafana workspace without a VPCreate an AWS PrivateLink endpoint to
establish a connection between Amazon Managed Grafana and Amazon RDS. Set up Amazon RDS as a data
source in Amazon Managed Grafana.

**D.** Create an Amazon Managed Grafana workspace in a VPC. Create a public endpoint for the RDS database.
Configure the public endpoint as a data source in Amazon Managed Grafana.

---

## Question 812

A company hosts a data lake on Amazon S3. The data lake ingests data in Apache Parquet format from various
data sources. The company uses multiple transformation steps to prepare the ingested data. The steps include
filtering of anomalies, normalizing of data to standard date and time values, and generation of aggregates for
analyses.
The company must store the transformed data in S3 buckets that data analysts access. The company needs a
prebuilt solution for data transformation that does not require code. The solution must provide data lineage and
data profiling. The company needs to share the data transformation steps with employees throughout the
company.
Which solution will meet these requirements?

**A.** Configure an AWS Glue Studio visual canvas to transform the data. Share the transformation steps with
employees by using AWS Glue jobs.

**B.** Configure Amazon EMR Serverless to transform the data. Share the transformation steps with employees by
using EMR Serverless jobs.

**C.** Configure AWS Glue DataBrew to transform the data. Share the transformation steps with employees by
using DataBrew recipes.

**D.** Create Amazon Athena tables for the data. Write Athena SQL queries to transform the data. Share the Athena
SQL queries with employees.

---

## Question 813

A solutions architect runs a web application on multiple Amazon EC2 instances that are in individual target groups
behind an Application Load Balancer (ALB). Users can reach the application through a public website.
The solutions architect wants to allow engineers to use a development version of the website to access one
specific development EC2 instance to test new features for the application. The solutions architect wants to use an
Amazon Route 53 hosted zone to give the engineers access to the development instance. The solution must
automatically route to the development instance even if the development instance is replaced.
Which solution will meet these requirements?

**A.** Create an A Record for the development website that has the value set to the ALB. Create a listener rule on
the ALB that forwards requests for the development website to the target group that contains the development
instance.

**B.** Recreate the development instance with a public IP address. Create an A Record for the development website
that has the value set to the public IP address of the development instance.

**C.** Create an A Record for the development website that has the value set to the ALB. Create a listener rule on
the ALB to redirect requests for the development website to the public IP address of the development instance.

**D.** Place all the instances in the same target group. Create an A Record for the development website. Set the
value to the ALB. Create a listener rule on the ALB that forwards requests for the development website to the
target group.

---

## Question 814

A company runs a container application on a Kubernetes cluster in the company's data center. The application
uses Advanced Message Queuing Protocol (AMQP) to communicate with a message queue. The data center cannot
scale fast enough to meet the company’s expanding business needs. The company wants to migrate the workloads
to AWS.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Migrate the container application to Amazon Elastic Container Service (Amazon ECS). Use Amazon Simple
Queue Service (Amazon SQS) to retrieve the messages.

**B.** Migrate the container application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon MQ to
retrieve the messages.

**C.** Use highly available Amazon EC2 instances to run the application. Use Amazon MQ to retrieve the messages.

**D.** Use AWS Lambda functions to run the application. Use Amazon Simple Queue Service (Amazon SQS) to
retrieve the messages.

---

## Question 815

An online gaming company hosts its platform on Amazon EC2 instances behind Network Load Balancers (NLBs)
across multiple AWS Regions. The NLBs can route requests to targets over the internet. The company wants to
improve the customer playing experience by reducing end-to-end load time for its global customer base.
Which solution will meet these requirements?

**A.** Create Application Load Balancers (ALBs) in each Region to replace the existing NLBs. Register the existing
EC2 instances as targets for the ALBs in each Region.

**B.** Configure Amazon Route 53 to route equally weighted traffic to the NLBs in each Region.

**C.** Create additional NLBs and EC2 instances in other Regions where the company has large customer bases.

**D.** Create a standard accelerator in AWS Global Accelerator. Configure the existing NLBs as target endpoints.

---

## Question 816

A company has an on-premises application that uses SFTP to collect financial data from multiple vendors. The
company is migrating to the AWS Cloud. The company has created an application that uses Amazon S3 APIs to
upload files from vendors.

Some vendors run their systems on legacy applications that do not support S3 APIs. The vendors want to continue
to use SFTP-based applications to upload data. The company wants to use managed services for the needs of the
vendors that use legacy applications.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS Database Migration Service (AWS DMS) instance to replicate data from the storage of the
vendors that use legacy applications to Amazon S3. Provide the vendors with the credentials to access the
AWS DMS instance.

**B.** Create an AWS Transfer Family endpoint for vendors that use legacy applications.

**C.** Configure an Amazon EC2 instance to run an SFTP server. Instruct the vendors that use legacy applications
to use the SFTP server to upload data.

**D.** Configure an Amazon S3 File Gateway for vendors that use legacy applications to upload files to an SMB file
share.

---

## Question 817

A marketing team wants to build a campaign for an upcoming multi-sport event. The team has news reports from
the past five years in PDF format. The team needs a solution to extract insights about the content and the

sentiment of the news reports. The solution must use Amazon Textract to process the news reports.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Provide the extracted insights to Amazon Athena for analysis. Store the extracted insights and analysis in an
Amazon S3 bucket.

**B.** Store the extracted insights in an Amazon DynamoDB table. Use Amazon SageMaker to build a sentiment
model.

**C.** Provide the extracted insights to Amazon Comprehend for analysis. Save the analysis to an Amazon S3
bucket.

**D.** Store the extracted insights in an Amazon S3 bucket. Use Amazon QuickSight to visualize and analyze the
data.

---

## Question 818

A company's application runs on Amazon EC2 instances that are in multiple Availability Zones. The application
needs to ingest real-time data from third-party applications.
The company needs a data ingestion solution that places the ingested raw data in an Amazon S3 bucket.
Which solution will meet these requirements?

**A.** Create Amazon Kinesis data streams for data ingestion. Create Amazon Kinesis Data Firehose delivery
streams to consume the Kinesis data streams. Specify the S3 bucket as the destination of the delivery streams.

**B.** Create database migration tasks in AWS Database Migration Service (AWS DMS). Specify replication
instances of the EC2 instances as the source endpoints. Specify the S3 bucket as the target endpoint. Set the
migration type to migrate existing data and replicate ongoing changes.

**C.** Create and configure AWS DataSync agents on the EC2 instances. Configure DataSync tasks to transfer data
from the EC2 instances to the S3 bucket.

**D.** Create an AWS Direct Connect connection to the application for data ingestion. Create Amazon Kinesis Data
Firehose delivery streams to consume direct PUT operations from the application. Specify the S3 bucket as the
destination of the delivery streams.

---

## Question 819

A company’s application is receiving data from multiple data sources. The size of the data varies and is expected to
increase over time. The current maximum size is 700 KB. The data volume and data size continue to grow as more
data sources are added.

The company decides to use Amazon DynamoDB as the primary database for the application. A solutions architect
needs to identify a solution that handles the large data sizes.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Create an AWS Lambda function to filter the data that exceeds DynamoDB item size limits. Store the larger
data in an Amazon DocumentDB (with MongoDB compatibility) database.

**B.** Store the large data as objects in an Amazon S3 bucket. In a DynamoDB table, create an item that has an
attribute that points to the S3 URL of the data.

**C.** Split all incoming large data into a collection of items that have the same partition key. Write the data to a
DynamoDB table in a single operation by using the BatchWriteItem API operation.

**D.** Create an AWS Lambda function that uses gzip compression to compress the large objects as they are
written to a DynamoDB table.

---

## Question 820

A company is migrating a legacy application from an on-premises data center to AWS. The application relies on
hundreds of cron jobs that run between 1 and 20 minutes on different recurring schedules throughout the day.
The company wants a solution to schedule and run the cron jobs on AWS with minimal refactoring. The solution
must support running the cron jobs in response to an event in the future.
Which solution will meet these requirements?

**A.** Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring
schedule. Run the cron job tasks as AWS Lambda functions.

**B.** Create a container image for the cron jobs. Use AWS Batch on Amazon Elastic Container Service (Amazon
ECS) with a scheduling policy to run the cron jobs.

**C.** Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring
schedule. Run the cron job tasks on AWS Fargate.

**D.** Create a container image for the cron jobs. Create a workflow in AWS Step Functions that uses a Wait state
to run the cron jobs at a specified time. Use the RunTask action to run the cron job tasks on AWS Fargate.

---

## Question 821

A company uses Salesforce. The company needs to load existing data and ongoing data changes from Salesforce
to Amazon Redshift for analysis. The company does not want the data to travel over the public internet.
Which solution will meet these requirements with the LEAST development effort?

**A.** Establish a VPN connection from the VPC to Salesforce. Use AWS Glue DataBrew to transfer data.

**B.** Establish an AWS Direct Connect connection from the VPC to Salesforce. Use AWS Glue DataBrew to
transfer data.

**C.** Create an AWS PrivateLink connection in the VPC to Salesforce. Use Amazon AppFlow to transfer data.

**D.** Create a VPC peering connection to Salesforce. Use Amazon AppFlow to transfer data.

---

## Question 822

A company recently migrated its application to AWS. The application runs on Amazon EC2 Linux instances in an
Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon Elastic File
System (Amazon EFS) file system that uses EFS Standard-Infrequent Access storage. The application indexes the
company's files. The index is stored in an Amazon RDS database.
The company needs to optimize storage costs with some application and services changes.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an Amazon S3 bucket that uses an Intelligent-Tiering lifecycle policy. Copy all files to the S3 bucket.
Update the application to use Amazon S3 API to store and retrieve files.

**B.** Deploy Amazon FSx for Windows File Server file shares. Update the application to use CIFS protocol to store
and retrieve files.

**C.** Deploy Amazon FSx for OpenZFS file system shares. Update the application to use the new mount point to
store and retrieve files.

**D.** Create an Amazon S3 bucket that uses S3 Glacier Flexible Retrieval. Copy all files to the S3 bucket. Update
the application to use Amazon S3 API to store and retrieve files as standard retrievals.

---

## Question 823

A robotics company is designing a solution for medical surgery. The robots will use advanced sensors, cameras,
and AI algorithms to perceive their environment and to complete surgeries.
The company needs a public load balancer in the AWS Cloud that will ensure seamless communication with
backend services. The load balancer must be capable of routing traffic based on the query strings to different
target groups. The traffic must also be encrypted.
Which solution will meet these requirements?

**A.** Use a Network Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use query
parameter-based routing.

**B.** Use a Gateway Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM).
Attach the certificate to the load balancer. Use HTTP path-based routing.

**C.** Use an Application Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use
query parameter-based routing.

**D.** Use a Network Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM).
Attach the certificate to the load balancer. Use query parameter-based routing.

---

## Question 824

A company has an application that runs on a single Amazon EC2 instance. The application uses a MySQL database
that runs on the same EC2 instance. The company needs a highly available and automatically scalable solution to
handle increased traffic.
Which solution will meet these requirements?

**A.** Deploy the application to EC2 instances that run in an Auto Scaling group behind an Application Load
Balancer. Create an Amazon Redshift cluster that has multiple MySQL-compatible nodes.

**B.** Deploy the application to EC2 instances that are configured as a target group behind an Application Load
Balancer. Create an Amazon RDS for MySQL cluster that has multiple instances.

**C.** Deploy the application to EC2 instances that run in an Auto Scaling group behind an Application Load
Balancer. Create an Amazon Aurora Serverless MySQL cluster for the database layer.

**D.** Deploy the application to EC2 instances that are configured as a target group behind an Application Load
Balancer. Create an Amazon ElastiCache for Redis cluster that uses the MySQL connector.

---

## Question 825

A company is planning to migrate data to an Amazon S3 bucket. The data must be encrypted at rest within the S3
bucket. The encryption key must be rotated automatically every year.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Migrate the data to the S3 bucket. Use server-side encryption with Amazon S3 managed keys (SSE-S3). Use
the built-in key rotation behavior of SSE-S3 encryption keys.

**B.** Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation.
Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Migrate the data to
the S3 bucket.

**C.** Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket's default
encryption behavior to use the customer managed KMS key. Migrate the data to the S3 bucket. Manually rotate
the KMS key every year.

**D.** Use customer key material to encrypt the data. Migrate the data to the S3 bucket. Create an AWS Key
Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key.
Enable automatic key rotation.

---

## Question 826

A company is migrating applications from an on-premises Microsoft Active Directory that the company manages to

AWS. The company deploys the applications in multiple AWS accounts. The company uses AWS Organizations to
manage the accounts centrally.
The company's security team needs a single sign-on solution across all the company's AWS accounts. The
company must continue to manage users and groups that are in the on-premises Active Directory.
Which solution will meet these requirements?

**A.** Create an Enterprise Edition Active Directory in AWS Directory Service for Microsoft Active Directory.
Configure the Active Directory to be the identity source for AWS IAM Identity Center.

**B.** Enable AWS IAM Identity Center. Configure a two-way forest trust relationship to connect the company's
self-managed Active Directory with IAM Identity Center by using AWS Directory Service for Microsoft Active
Directory.

**C.** Use AWS Directory Service and create a two-way trust relationship with the company's self-managed Active
Directory.

**D.** Deploy an identity provider (IdP) on Amazon EC2. Link the IdP as an identity source within AWS IAM Identity
Center.

---

## Question 827

A company is planning to deploy its application on an Amazon Aurora PostgreSQL Serverless v2 cluster. The
application will receive large amounts of traffic. The company wants to optimize the storage performance of the
cluster as the load on the application increases.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure the cluster to use the Aurora Standard storage configuration.

**B.** Configure the cluster storage type as Provisioned IOPS.

**C.** Configure the cluster storage type as General Purpose.

**D.** Configure the cluster to use the Aurora I/O-Optimized storage configuration.

---

## Question 828

A financial services company that runs on AWS has designed its security controls to meet industry standards. The
industry standards include the National Institute of Standards and Technology (NIST) and the Payment Card
Industry Data Security Standard (PCI DSS).
The company's third-party auditors need proof that the designed controls have been implemented and are
functioning correctly. The company has hundreds of AWS accounts in a single organization in AWS Organizations.

The company needs to monitor the current state of the controls across accounts.
Which solution will meet these requirements?

**A.** Designate one account as the Amazon Inspector delegated administrator account from the Organizations
management account. Integrate Inspector with Organizations to discover and scan resources across all AWS
accounts. Enable Inspector industry standards for NIST and PCI DSS.

**B.** Designate one account as the Amazon GuardDuty delegated administrator account from the Organizations
management account. In the designated GuardDuty administrator account, enable GuardDuty to protect all
member accounts. Enable GuardDuty industry standards for NIST and PCI DSS.

**C.** Configure an AWS CloudTrail organization trail in the Organizations management account. Designate one
account as the compliance account. Enable CloudTrail security standards for NIST and PCI DSS in the
compliance account.

**D.** Designate one account as the AWS Security Hub delegated administrator account from the Organizations
management account. In the designated Security Hub administrator account, enable Security Hub for all
member accounts. Enable Security Hub standards for NIST and PCI DSS.

---

## Question 829

A company uses an Amazon S3 bucket as its data lake storage platform. The S3 bucket contains a massive amount
of data that is accessed randomly by multiple teams and hundreds of applications. The company wants to reduce
the S3 storage costs and provide immediate availability for frequently accessed objects.
What is the MOST operationally efficient solution that meets these requirements?

**A.** Create an S3 Lifecycle rule to transition objects to the S3 Intelligent-Tiering storage class.

**B.** Store objects in Amazon S3 Glacier. Use S3 Select to provide applications with access to the data.

**C.** Use data from S3 storage class analysis to create S3 Lifecycle rules to automatically transition objects to the
S3 Standard-Infrequent Access (S3 Standard-IA) storage class.

**D.** Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an AWS
Lambda function to transition objects to the S3 Standard storage class when they are accessed by an
application.

---

## Question 830

A company has 5 TB of datasets. The datasets consist of 1 million user profiles and 10 million connections. The user
profiles have connections as many-to-many relationships. The company needs a performance efficient way to find
mutual connections up to five levels.
Which solution will meet these requirements?

**A.** Use an Amazon S3 bucket to store the datasets. Use Amazon Athena to perform SQL JOIN queries to find
connections.

**B.** Use Amazon Neptune to store the datasets with edges and vertices. Query the data to find connections.

**C.** Use an Amazon S3 bucket to store the datasets. Use Amazon QuickSight to visualize connections.

**D.** Use Amazon RDS to store the datasets with multiple tables. Perform SQL JOIN queries to find connections.

---

## Question 831

A company needs a secure connection between its on-premises environment and AWS. This connection does not
need high bandwidth and will handle a small amount of traffic. The connection should be set up quickly.
What is the MOST cost-effective method to establish this type of connection?

**A.** Implement a client VPN.

**B.** Implement AWS Direct Connect.

**C.** Implement a bastion host on Amazon EC2.

**D.** Implement an AWS Site-to-Site VPN connection.

---

## Question 832

A company has an on-premises SFTP file transfer solution. The company is migrating to the AWS Cloud to scale
the file transfer solution and to optimize costs by using Amazon S3. The company's employees will use their
credentials for the on-premises Microsoft Active Directory (AD) to access the new solution. The company wants to
keep the current authentication and file access mechanisms.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure an S3 File Gateway. Create SMB file shares on the file gateway that use the existing Active

Directory to authenticate.

**B.** Configure an Auto Scaling group with Amazon EC2 instances to run an SFTP solution. Configure the group to
scale up at 60% CPU utilization.

**C.** Create an AWS Transfer Family server with SFTP endpoints. Choose the AWS Directory Service option as the
identity provider. Use AD Connector to connect the on-premises Active Directory.

**D.** Create an AWS Transfer Family SFTP endpoint. Configure the endpoint to use the AWS Directory Service
option as the identity provider to connect to the existing Active Directory.

---

## Question 833

A company is designing an event-driven order processing system. Each order requires multiple validation steps
after the order is created. An idempotent AWS Lambda function performs each validation step. Each validation
step is independent from the other validation steps. Individual validation steps need only a subset of the order
event information.
The company wants to ensure that each validation step Lambda function has access to only the information from
the order event that the function requires. The components of the order processing system should be loosely
coupled to accommodate future business changes.
Which solution will meet these requirements?

**A.** Create an Amazon Simple Queue Service (Amazon SQS) queue for each validation step. Create a new Lambda

function to transform the order data to the format that each validation step requires and to publish the
messages to the appropriate SQS queues. Subscribe each validation step Lambda function to its corresponding
SQS queue.

**B.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the validation step Lambda
functions to the SNS topic. Use message body filtering to send only the required data to each subscribed
Lambda function.

**C.** Create an Amazon EventBridge event bus. Create an event rule for each validation step. Configure the input
transformer to send only the required data to each target validation step Lambda function.

**D.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a new Lambda function to subscribe to
the SQS queue and to transform the order data to the format that each validation step requires. Use the new
Lambda function to perform synchronous invocations of the validation step Lambda functions in parallel on
separate threads.

---

## Question 834

A company is migrating a three-tier application to AWS. The application requires a MySQL database. In the past,
the application users reported poor application performance when creating new entries. These performance issues
were caused by users generating different real-time reports from the application during working hours.
Which solution will improve the performance of the application when it is moved to AWS?

**A.** Import the data into an Amazon DynamoDB table with provisioned capacity. Refactor the application to use
DynamoDB for reports.

**B.** Create the database on a compute optimized Amazon EC2 instance. Ensure compute resources exceed the
on-premises database.

**C.** Create an Amazon Aurora MySQL Multi-AZ DB cluster with multiple read replicas. Configure the application
to use the reader endpoint for reports.

**D.** Create an Amazon Aurora MySQL Multi-AZ DB cluster. Configure the application to use the backup instance
of the cluster as an endpoint for the reports.

---

## Question 835

A company is expanding a secure on-premises network to the AWS Cloud by using an AWS Direct Connect
connection. The on-premises network has no direct internet access. An application that runs on the on-premises
network needs to use an Amazon S3 bucket.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a public virtual interface (VIF). Route the AWS traffic over the public VIF.

**B.** Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.

**C.** Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to
the S3 interface endpoint.

**D.** Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS
traffic over the peering connection.

---

## Question 836

A company serves its website by using an Auto Scaling group of Amazon EC2 instances in a single AWS Region.
The website does not require a database.
The company is expanding, and the company's engineering team deploys the website to a second Region. The
company wants to distribute traffic across both Regions to accommodate growth and for disaster recovery
purposes. The solution should not serve traffic from a Region in which the website is unhealthy.
Which policy or resource should the company use to meet these requirements?

**A.** An Amazon Route 53 simple routing policy

**B.** An Amazon Route 53 multivalue answer routing policy

**C.** An Application Load Balancer in one Region with a target group that specifies the EC2 instance IDs from both
Regions

**D.** An Application Load Balancer in one Region with a target group that specifies the IP addresses of the EC2
instances from both Regions

---

## Question 837

A company runs its applications on Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon
EBS). The EC2 instances run the most recent Amazon Linux release. The applications are experiencing availability
issues when the company's employees store and retrieve files that are 25 GB or larger. The company needs a
solution that does not require the company to transfer files between EC2 instances. The files must be available
across many EC2 instances and across multiple Availability Zones.
Which solution will meet these requirements?

**A.** Migrate all the files to an Amazon S3 bucket. Instruct the employees to access the files from the S3 bucket.

**B.** Take a snapshot of the existing EBS volume. Mount the snapshot as an EBS volume across the EC2 instances.
Instruct the employees to access the files from the EC2 instances.

**C.** Mount an Amazon Elastic File System (Amazon EFS) file system across all the EC2 instances. Instruct the
employees to access the files from the EC2 instances.

**D.** Create an Amazon Machine Image (AMI) from the EC2 instances. Configure new EC2 instances from the AMI
that use an instance store volume. Instruct the employees to access the files from the EC2 instances.

---

## Question 838

A company is running a highly sensitive application on Amazon EC2 backed by an Amazon RDS database.
Compliance regulations mandate that all personally identifiable information (PII) be encrypted at rest.
Which solution should a solutions architect recommend to meet this requirement with the LEAST amount of
changes to the infrastructure?

**A.** Deploy AWS Certificate Manager to generate certificates. Use the certificates to encrypt the database
volume.

**B.** Deploy AWS CloudHSM, generate encryption keys, and use the keys to encrypt database volumes.

**C.** Configure SSL encryption using AWS Key Management Service (AWS KMS) keys to encrypt database
volumes.

**D.** Configure Amazon Elastic Block Store (Amazon EBS) encryption and Amazon RDS encryption with AWS Key
Management Service (AWS KMS) keys to encrypt instance and database volumes.

---

## Question 839

A company runs an AWS Lambda function in private subnets in a VPC. The subnets have a default route to the
internet through an Amazon EC2 NAT instance. The Lambda function processes input data and saves its output as
an object to Amazon S3.
Intermittently, the Lambda function times out while trying to upload the object because of saturated traffic on the
NAT instance's network. The company wants to access Amazon S3 without traversing the internet.
Which solution will meet these requirements?

**A.** Replace the EC2 NAT instance with an AWS managed NAT gateway.

**B.** Increase the size of the EC2 NAT instance in the VPC to a network optimized instance type.

**C.** Provision a gateway endpoint for Amazon S3 in the VPUpdate the route tables of the subnets accordingly.

**D.** Provision a transit gateway. Place transit gateway attachments in the private subnets where the Lambda
function is running.

---

## Question 840

A news company that has reporters all over the world is hosting its broadcast system on AWS. The reporters send
live broadcasts to the broadcast system. The reporters use software on their phones to send live streams through
the Real Time Messaging Protocol (RTMP).
A solutions architect must design a solution that gives the reporters the ability to send the highest quality streams.
The solution must provide accelerated TCP connections back to the broadcast system.
What should the solutions architect use to meet these requirements?

**A.** Amazon CloudFront

**B.** AWS Global Accelerator

**C.** AWS Client VPN

**D.** Amazon EC2 instances and AWS Elastic IP addresses

---

## Question 841

A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) to run its self-managed
database. The company has 350 TB of data spread across all EBS volumes. The company takes daily EBS
snapshots and keeps the snapshots for 1 month. The daily change rate is 5% of the EBS volumes.
Because of new regulations, the company needs to keep the monthly snapshots for 7 years. The company needs to
change its backup strategy to comply with the new regulations and to ensure that data is available with minimal
administrative effort.
Which solution will meet these requirements MOST cost-effectively?

**A.** Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Copy the monthly snapshot to Amazon
S3 Glacier Deep Archive with a 7-year retention period.

**B.** Continue with the current EBS snapshot policy. Add a new policy to move the monthly snapshot to Amazon
EBS Snapshots Archive with a 7-year retention period.

**C.** Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Keep the monthly snapshot in the
standard tier for 7 years. Use incremental snapshots.

**D.** Keep the daily snapshot in the EBS snapshot standard tier. Use EBS direct APIs to take snapshots of all the
EBS volumes every month. Store the snapshots in an Amazon S3 bucket in the Infrequent Access tier for 7
years.

---

## Question 842

A company runs an application on several Amazon EC2 instances that store persistent data on an Amazon Elastic
File System (Amazon EFS) file system. The company needs to replicate the data to another AWS Region by using
an AWS managed service solution.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use the EFS-to-EFS backup solution to replicate the data to an EFS file system in another Region.

**B.** Run a nightly script to copy data from the EFS file system to an Amazon S3 bucket. Enable S3 Cross-Region
Replication on the S3 bucket.

**C.** Create a VPC in another Region. Establish a cross-Region VPC peer. Run a nightly rsync to copy data from the
original Region to the new Region.

**D.** Use AWS Backup to create a backup plan with a rule that takes a daily backup and replicates it to another
Region. Assign the EFS file system resource to the backup plan.

---

## Question 843

An ecommerce company is migrating its on-premises workload to the AWS Cloud. The workload currently consists
of a web application and a backend Microsoft SQL database for storage.
The company expects a high volume of customers during a promotional event. The new infrastructure in the AWS
Cloud must be highly available and scalable.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Migrate the web application to two Amazon EC2 instances across two Availability Zones behind an
Application Load Balancer. Migrate the database to Amazon RDS for Microsoft SQL Server with read replicas in
both Availability Zones.

**B.** Migrate the web application to an Amazon EC2 instance that runs in an Auto Scaling group across two
Availability Zones behind an Application Load Balancer. Migrate the database to two EC2 instances across
separate AWS Regions with database replication.

**C.** Migrate the web application to Amazon EC2 instances that run in an Auto Scaling group across two
Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS with Multi-AZ
deployment.

**D.** Migrate the web application to three Amazon EC2 instances across three Availability Zones behind an
Application Load Balancer. Migrate the database to three EC2 instances across three Availability Zones.

---

## Question 844

A company has an on-premises business application that generates hundreds of files each day. These files are
stored on an SMB file share and require a low-latency connection to the application servers. A new company policy
states all application-generated files must be copied to AWS. There is already a VPN connection to AWS.
The application development team does not have time to make the necessary code modifications to move the
application to AWS.
Which service should a solutions architect recommend to allow the application to copy files to AWS?

**A.** Amazon Elastic File System (Amazon EFS)

**B.** Amazon FSx for Windows File Server

**C.** AWS Snowball

**D.** AWS Storage Gateway

---

## Question 845

A company has 15 employees. The company stores employee start dates in an Amazon DynamoDB table. The
company wants to send an email message to each employee on the day of the employee's work anniversary.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create a script that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS)
to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon
EC2 instance.

**B.** Create a script that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to
send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon
EC2 instance.

**C.** Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Notification
Service (Amazon SNS) to send email messages to employees when necessary. Schedule this Lambda function
to run every day.

**D.** Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Queue Service
(Amazon SQS) to send email messages to employees when necessary. Schedule this Lambda function to run
every day.

---

## Question 846

A company’s application is running on Amazon EC2 instances within an Auto Scaling group behind an Elastic Load
Balancing (ELB) load balancer. Based on the application's history, the company anticipates a spike in traffic during
a holiday each year. A solutions architect must design a strategy to ensure that the Auto Scaling group proactively
increases capacity to minimize any performance impact on application users.
Which solution will meet these requirements?

**A.** Create an Amazon CloudWatch alarm to scale up the EC2 instances when CPU utilization exceeds 90%.

**B.** Create a recurring scheduled action to scale up the Auto Scaling group before the expected period of peak
demand.

**C.** Increase the minimum and maximum number of EC2 instances in the Auto Scaling group during the peak
demand period.

**D.** Configure an Amazon Simple Notification Service (Amazon SNS) notification to send alerts when there are
autoscaling:EC2_INSTANCE_LAUNCH events.

---

## Question 847

A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password
rotation for the databases.
Which solution meets this requirement with the LEAST operational overhead?

**A.** Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.

**B.** Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.

**C.** Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates
the password.

**D.** Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS
KMS key.

---

## Question 848

A company runs its application on Oracle Database Enterprise Edition. The company needs to migrate the
application and the database to AWS. The company can use the Bring Your Own License (BYOL) model while
migrating to AWS. The application uses third-party database features that require privileged access.
A solutions architect must design a solution for the database migration.
Which solution will meet these requirements MOST cost-effectively?

**A.** Migrate the database to Amazon RDS for Oracle by using native tools. Replace the third-party features with
AWS Lambda.

**B.** Migrate the database to Amazon RDS Custom for Oracle by using native tools. Customize the new database
settings to support the third-party features.

**C.** Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).
Customize the new database settings to support the third-party features.

**D.** Migrate the database to Amazon RDS for PostgreSQL by using AWS Database Migration Service (AWS DMS).
Rewrite the application code to remove the dependency on third-party features.

---

## Question 849

A large international university has deployed all of its compute services in the AWS Cloud. These services include
Amazon EC2, Amazon RDS, and Amazon DynamoDB. The university currently relies on many custom scripts to back
up its infrastructure. However, the university wants to centralize management and automate data backups as
much as possible by using AWS native options.
Which solution will meet these requirements?

**A.** Use third-party backup software with an AWS Storage Gateway tape gateway virtual tape library.

**B.** Use AWS Backup to configure and monitor all backups for the services in use.

**C.** Use AWS Config to set lifecycle management to take snapshots of all data sources on a schedule.

**D.** Use AWS Systems Manager State Manager to manage the configuration and monitoring of backup tasks.

---

## Question 850

A company wants to build a map of its IT infrastructure to identify and enforce policies on resources that pose
security risks. The company's security team must be able to query data in the IT infrastructure map and quickly
identify security risks.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon RDS to store the data. Use SQL to query the data to identify security risks.

**B.** Use Amazon Neptune to store the data. Use SPARQL to query the data to identify security risks.

**C.** Use Amazon Redshift to store the data. Use SQL to query the data to identify security risks.

**D.** Use Amazon DynamoDB to store the data. Use PartiQL to query the data to identify security risks.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 801

**Answer:** **D**

**Explanation:**

The correct solution is to encrypt the data at the company's data center before uploading it to the S3 bucket.
This approach meets the requirement of managing encryption keys outside the AWS Cloud.
Options A, B, and C all involve using AWS KMS for key management. While using KMS for encryption provides
robust security, it contradicts the explicit requirement of managing the encryption keys outside of AWS.
These options place the key management responsibility within the AWS ecosystem, violating the stated
constraint.

**Option D**, encrypting the data at the company's data center before storing it in S3, aligns perfectly with the
requirement. By performing encryption on-premises, the company retains full control and management of the
encryption keys. This is known as client-side encryption. The data is encrypted before it is transmitted to S3,
satisfying the encryption in transit requirement. Additionally, the data remains encrypted at rest in the S3
bucket, fulfilling the at-rest encryption requirement. While S3 offers its own server-side encryption options,
client-side encryption provides the desired key management control. The encrypted data is stored in S3,
offering durability and availability without AWS ever accessing the unencrypted data or the encryption keys.
This addresses the high sensitivity of the data.

Therefore, the company can ensure data encryption both in transit and at rest while maintaining complete
control over the encryption keys outside the AWS environment using option D.
Further reading on client-side encryption with S3:
AWS Documentation - Protecting Data Using Client-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html

---

## Question 802

**Answer:** **D**

**Explanation:**

The optimal solution leverages serverless components to minimize operational overhead. API Gateway
provides a managed API endpoint for receiving payment notifications. Integrating API Gateway with Lambda
allows for serverless validation of these notifications, offloading infrastructure management. Lambda
functions are ideal for short-lived tasks like validation. The validated notifications can then be sent to the
backend processing application.
For the backend, ECS with Fargate provides a fully managed container orchestration service. Fargate
abstracts away the underlying infrastructure, eliminating the need to manage EC2 instances or Kubernetes
nodes. ECS allows you to easily deploy, manage, and scale your containerized backend application without

operational burdens. It's particularly suitable for long-running applications that require compute and memory
adjustments, as ECS can handle scaling based on resource utilization.

**Option A** introduces unnecessary complexity with EKS Anywhere and a standalone cluster, requiring
significant infrastructure management. **Option B**, while using EKS, uses self-managed nodes, increasing
operational overhead. Step Functions are better suited for orchestrating complex workflows, and are overkill
for basic validation. **Option C** utilizes EC2 Spot Instances, which can be interrupted and require handling
instance terminations, leading to increased operational overhead. Further, SQS and EventBridge are primarily
for asynchronous communication, while API Gateway enables synchronous request/response interaction,
which fits the requirement of validating requests before proceeding.

In summary, API Gateway, Lambda, ECS with Fargate offer the most serverless and managed approach,
minimizing operational overhead while meeting the requirements of validating notifications and running a
scalable backend application.

---

## Question 803

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure Amazon Cognito user pools for user authentication. Enable the riskbased adaptive authentication feature with multifactor authentication (MFA).

Here's a detailed justification:
Amazon Cognito User Pools are a fully managed service specifically designed for user authentication. They
can easily scale to accommodate millions of users, fulfilling one of the core requirements. Cognito offers
features like self-service registration, sign-in, password recovery, and user profile management, reducing the
operational overhead.
Critically, Cognito user pools support risk-based adaptive authentication, a key component of the question's
requirements. This feature leverages machine learning to detect unusual sign-in activity based on factors like
location, IP address, and device. When suspicious activity is detected, the system can automatically trigger
multi-factor authentication (MFA) to verify the user's identity. This ensures that MFA is only invoked when

needed, improving user experience while enhancing security.

**Option B** is incorrect because Cognito Identity Pools (Federated Identities) provide temporary AWS
credentials to users who are already authenticated via an external identity provider (like Facebook, Google, or
an existing corporate directory). They don't handle user authentication directly. While they support MFA, they
don't offer the risk-based adaptive authentication required.

**Option C** is incorrect because IAM users are designed for AWS service management, not end-user
authentication for applications. Managing millions of IAM users for this purpose is impractical and doesn't
provide the necessary features for a scalable user authentication solution. While IAM supports MFA, it doesn't
provide adaptive authentication.

**Option D** is incorrect because AWS IAM Identity Center (successor to AWS Single Sign-On) is designed for
providing single sign-on access to multiple AWS accounts and applications for users managed within IAM
Identity Center or through connected identity providers. While it supports MFA, it's not primarily designed for
the direct user authentication of millions of end-users like Cognito is, and doesn't offer risk-based adaptive
authentication natively. It is better suited for authenticating organization employees and granting them AWS
access.

In summary, only Amazon Cognito user pools with risk-based adaptive authentication provide the necessary
scalability, user management features, and the ability to selectively invoke MFA based on user risk factors,
making it the best solution for the stated requirements.
Reference links:
Amazon Cognito: https://aws.amazon.com/cognito/
Amazon Cognito User Pools: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-useridentity-pools.html
Risk-based adaptive authentication in Cognito:
https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-advanced-security.html

---

## Question 804

**Answer:** **C**

**Explanation:**

The correct solution is C because it optimally leverages serverless AWS services to meet the requirements.

AWS Glue is a fully managed, serverless ETL (extract, transform, load) service, perfectly suited for
transforming data from the S3 data lake. It can handle various data formats and complexities, scaling
automatically as needed. Amazon Redshift Serverless provides a data warehouse with MPP capabilities
without the need to provision and manage infrastructure. This aligns with the serverless requirement and
enables efficient querying and analysis of large datasets. Amazon Redshift ML allows data analysts to create,
train, and deploy machine learning models directly from the data warehouse using SQL, simplifying the ML
workflow and removing the need to move data to separate ML platforms.

**Option A** is less suitable because while Amazon EMR can transform data, it's not inherently serverless.
Managing an EMR cluster involves more operational overhead than AWS Glue. **Option B** uses Amazon Aurora
Serverless, which is a relational database, not a data warehouse. Aurora doesn't inherently have MPP
capabilities needed for large-scale data analysis. **Option D** uses Amazon Athena, which is a serverless query
service for S3. While serverless, Athena's ML capabilities aren't as integrated and performant as Redshift ML
for data warehouse-based ML model training. Also, Athena doesn't serve as a data warehouse in this scenario.

Therefore, only option C fulfills all the requirements of a serverless architecture, data transformation, MPP
data warehouse, and SQL-based ML model creation.
Supporting links:
AWS Glue: https://aws.amazon.com/glue/
Amazon Redshift Serverless: https://aws.amazon.com/redshift/serverless/
Amazon Redshift ML: https://aws.amazon.com/redshift/features/ml/

---

## Question 805

**Answer:** **C**

**Explanation:**

The correct answer is C. Install an AWS Outposts rack in the company's data center.
Justification:
The company's primary requirement is to run containerized applications using Amazon EKS while keeping all
data within their on-premises data center due to compliance restrictions. AWS Outposts directly addresses
this need by extending AWS infrastructure and services to the company's physical location.
AWS Outposts: Outposts provides a fully managed and configurable compute and storage racks built with
AWS-designed hardware. They are specifically designed to run AWS services locally while connecting to AWS
cloud for management and control plane operations. With Outposts, the company can run Amazon EKS
clusters within their data center, ensuring that Kubernetes workloads and their associated data remain onpremises.
Let's analyze why the other options are not the best fit:

**A.** Deploy AWS Local Zones in the company's data center: Local Zones are extensions of AWS Regions but
are geographically closer to users. However, Local Zones are AWS-owned and operated. You cannot deploy
them within a company's private data center. Local Zones do not allow customer-controlled data residency
within the company's own infrastructure.

**B.** Use an AWS Snowmobile in the company's data center: AWS Snowmobile is a petabyte-scale data
transfer service. It is used for migrating large datasets into or out of AWS, which doesn't fulfill the
requirement of running Kubernetes workloads permanently on-premises and does not help in using EKS
locally.

**D.** Install an AWS Snowball Edge Storage Optimized node in the data center: Snowball Edge is an edge
computing, data migration, and data transport device. While Snowball Edge offers compute capabilities, it is
primarily intended for temporary or intermittent workloads and data transfer. It's not a permanent solution for
running EKS clusters with strict data residency requirements. Also, while it offers edge compute, it doesn't
run a fully fledged EKS service.

In summary, AWS Outposts is the only solution that allows the company to use Amazon EKS locally within
their data center, keeping data on-premises and adhering to their compliance requirements, by essentially
extending the AWS cloud to their physical infrastructure.
Supporting Links:
AWS Outposts: https://aws.amazon.com/outposts/
Amazon EKS: https://aws.amazon.com/eks/

---

## Question 806

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most cost-effective solution, along with supporting
concepts and links:
The core requirement is to migrate on-premises NFS data to AWS cost-effectively while addressing
scalability issues. Amazon S3 is significantly more scalable and generally cheaper for large data storage than
Amazon EFS. AWS Storage Gateway facilitates the transition from on-premises storage to AWS storage
services. There are different types of Storage Gateway that each serve different purposes.

**Option A** (Volume Gateway): Volume Gateway provides block-based storage, mimicking a SAN in AWS. It isn't
optimized for file-based data like the NFS system the company currently uses, making it unsuitable.

**Option B** (S3 File Gateway): S3 File Gateway presents a file system interface that connects to S3. It is a good
fit for migrating the data to S3 which is cost-effective, scalable object storage. The NFS data on-premises can
be easily copied to the file gateway and then to S3. S3 Lifecycle policies can then transition the data to even
cheaper storage tiers such as S3 Glacier or S3 Intelligent-Tiering based on access patterns.

**Option C** (EFS Standard-IA): While EFS is a fully managed NFS file system in the cloud, using EFS StandardIA is generally more expensive than S3, especially for large amounts of data where infrequent access is
expected. EFS is also not ideal for large scale data storage and analysis workloads.

**Option D** (EFS One Zone-IA): Similar to option C, EFS is more expensive and not a perfect fit. Additionally,
EFS One Zone has less availability and redundancy than EFS Standard, which might not be ideal for the
company's data.

Therefore, option B provides the most cost-effective solution. S3 is a cheaper storage option than EFS, and
the S3 File Gateway enables seamless data migration from NFS. Lifecycle policies further optimize costs by
moving less frequently accessed data to lower-cost S3 storage tiers.

---

## Question 807

**Answer:** **D**

**Explanation:**

The correct answer is D: Configure provisioned concurrency for the Lambda functions and increase the
memory according to AWS Compute Optimizer recommendations. Here's why:
Problem Analysis: The company faces high compute costs and latency issues due to CPU-intensive Lambda
functions processing a constantly increasing message queue. Optimizing for cost and latency is the goal.
Provisioned Concurrency: Provisioned concurrency pre-initializes Lambda function instances, drastically
reducing cold starts and improving latency, which is critical for handling constantly increasing messages and
maintaining service levels during peak marketing events. Reserved concurrency, on the other hand, only limits
the number of concurrent executions, not eliminating cold starts, making it a less effective solution for

latency issues.
Memory Allocation and CPU Performance: Increasing memory allocation for Lambda functions often
translates to more CPU power. For CPU-intensive workloads, this can significantly improve performance and
reduce execution time, thus lowering overall compute costs as the functions complete faster.
AWS Compute Optimizer: This service analyzes your AWS resource utilization and provides recommendations
for optimal instance types and memory settings. Using its recommendations ensures the Lambda functions
are adequately sized for the workload, maximizing performance and cost efficiency. Without this optimization,
simply increasing or decreasing memory could lead to either under-utilization (wasted resources) or
insufficient resources, negatively impacting performance.

Why other options are incorrect:

**A:** Decreasing memory decreases CPU allocation, negatively impacting CPU-intensive tasks and potentially
increasing execution time and cost.

**B:** While increasing memory is good, reserved concurrency does not mitigate cold starts like provisioned
concurrency does.

**C:** Decreasing memory decreases CPU allocation, negatively impacting CPU-intensive tasks and potentially
increasing execution time and cost.

In summary, provisioned concurrency addresses the latency issue stemming from cold starts, while increasing
memory based on Compute Optimizer recommendations ensures adequate CPU power, improving
performance and reducing cost.

---

## Question 808

**Answer:** **A**

**Explanation:**

The most efficient solution to scan container images for CVEs in an ECS environment with minimal workload

changes is to leverage Amazon ECR's built-in scanning capabilities.

**Option A** proposes using Amazon ECR and configuring scan-on-push. ECR provides native container image
storage and integrated security scanning. Setting "scan on push" automatically triggers a scan when a new
image is pushed to the repository. The "basic scan" offers a cost-effective solution by providing vulnerability
information based on publicly available databases. This requires minimal configuration changes to the
existing ECS setup, as it primarily involves altering the image repository location to ECR and configuring scan
settings. It integrates seamlessly with the existing container deployment pipeline.

**Option B** is incorrect because Amazon Macie is primarily designed for discovering and protecting sensitive
data within S3 buckets, not for scanning container images for vulnerabilities. While technically feasible to
store images in S3 and trigger scans, it is not Macie's intended use case and would require substantial custom
scripting to interpret the image data and perform vulnerability assessments.

**Option C** is incorrect because migrating the workload to Amazon EKS introduces unnecessary complexity.
While EKS is a valid container orchestration platform, switching from ECS solely for vulnerability scanning is
an over-engineered solution. Furthermore, the "enhanced scan" of ECR requires AWS Inspector, which
introduces further complexity for configuration, compared to the basic scan that ECR natively supports. The
question requires the FEWEST changes to the workloads.

**Option D** is also incorrect because using S3, Lambda, and Amazon Inspector is significantly more complex
than using ECR's native scanning features. This approach necessitates writing and maintaining custom
Lambda code to interact with Inspector, managing S3 event triggers, and handling the scan results. This
introduces more overhead and potential points of failure compared to ECR's integrated solution.

In summary, Amazon ECR with scan on push filters offers the simplest, most integrated, and least disruptive
approach for scanning container images for CVEs within an ECS environment, fulfilling the requirements of
the prompt. The other options involve more complex configurations and integrations.

---

## Question 809

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct solution and why the other options are less
suitable for the given scenario:
Justification for **Option B**:

**Option B** is the most suitable choice because it offers a serverless, event-driven approach to invoke the thirdparty reporting application upon the successful completion of the AWS Batch job. Amazon EventBridge
Scheduler is designed to trigger actions based on schedules or events. In this case, it detects the
SUCCEEDED event from the AWS Batch job. A Lambda function serves as the intermediary, triggered by
EventBridge, handling the authentication and invocation of the third-party reporting application's HTTP API
using the provided username and password. This ensures that the credentials are secure and managed within
the Lambda function. This is a clean, decoupled architecture. AWS Lambda offers a serverless compute
environment that scales automatically and eliminates the need for managing servers. The combination of
EventBridge and Lambda allows for a flexible and cost-effective integration with the third-party application.
The Lambda function is triggered only when the AWS Batch job is successful, optimizing resource utilization
and costs.

Why other options are incorrect:

**Option A**: While EventBridge API destinations offer a way to invoke HTTP endpoints directly, using
EventBridge Scheduler in this context is not accurate. EventBridge Scheduler is used for scheduling based on
a cron expression and is not triggered by events directly like normal eventBridge rules. This would require
configuring a complex scheduled polling mechanism which is less efficient.

**Option C**: While API Gateway can be used as an intermediary, having the Batch job directly publishing to an
API Gateway is less ideal. The Batch job would need additional code to handle HTTP requests and responses,
adding complexity to the batch process. Additionally, API Gateway's HTTP proxy integration generally doesn't
handle authentication as cleanly as the Lambda approach. The credentials would either need to be embedded
in the API Gateway configuration or passed along with the Batch job. It is also not serverless in the truest
sense since API gateway require some settings configurations and you have to configure the Batch Job to
point to it

**Option D**: This option introduces unnecessary complexity. While it's functional, adding API Gateway as an
intermediary between the Batch job and the Lambda function doesn't provide a significant advantage. It adds
overhead and complexity without a clear benefit. Directly triggering the Lambda function from EventBridge is
simpler and more efficient. Similar to **Option C**, it introduces extra complexity.

---

## Question 810

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages AWS PrivateLink to securely and privately access the vendor's
RDS database without exposing it to the public internet.

Here's a detailed justification:
Requirement: The company needs to access a vendor's RDS database, but the company's VPC lacks direct
internet access and private connectivity options like Direct Connect or Site-to-Site VPN.
AWS PrivateLink: This service provides private connectivity between VPCs, AWS services, and on-premises
networks, without exposing traffic to the public internet. It creates a private endpoint in the consumer VPC
(the company's VPC) that connects to a service provider's service (the vendor's RDS database via an NLB).
Network Load Balancer (NLB): NLBs are suitable for TCP traffic and can front databases, providing high
availability and scalability. Placing an NLB in front of the RDS database allows PrivateLink to access the
database in a controlled manner. The vendor uses NLB to expose their RDS database to the VPC endpoint
service (PrivateLink).
VPC Peering Inadequacy: VPC peering alone isn't enough because the company's VPC lacks an internet
gateway, Direct Connect, or VPN connection. Without one of these, inter-VPC routing won't work. Also, even if
VPC peering was set up with a route, it isn't the most secure way to expose an RDS database as the entire
VPC network would be connected.
Direct Connect Overhead: Suggesting the vendor sign up for AWS Direct Connect (option A) is overly
complex and expensive for a single database access requirement. Direct Connect is typically used for highbandwidth, low-latency, dedicated connections, which isn't necessary here.
Client VPN & VPC Peering: **Option B** also uses VPC Peering with the added complexity of configuring client
VPN. Setting up a client VPN is a more complex solution and does not align with the requirements of using a
private and secure connection.
Transit Gateway & VPC Peering: **Option D** is less efficient than PrivateLink for this specific use case.
Although Transit Gateway can connect VPCs, using PrivateLink offers a more direct and secure path for
database access without unnecessary routing complexity.
Security: PrivateLink provides enhanced security by limiting the attack surface and ensuring data remains
within the AWS network. The vendor controls who can access their database by accepting or rejecting
connection requests to their VPC endpoint service.

In summary, option C provides the most efficient, secure, and cost-effective solution by utilizing AWS
PrivateLink and NLB to create a private connection for accessing the vendor's RDS database without exposing
it to the public internet or requiring complex network configurations.

---

## Question 811

**Answer:** **C**

**Explanation:**

The correct solution is C: Create an Amazon Managed Grafana workspace without a VPC, create an AWS
PrivateLink endpoint to establish a connection between Amazon Managed Grafana and Amazon RDS, and set
up Amazon RDS as a data source in Amazon Managed Grafana.

Here's why:
Security and Avoiding Public Exposure: The question explicitly requires a secure solution that does not
expose data over the internet. Options A and D involve creating public endpoints for the RDS database, which
directly contradicts this requirement. Public endpoints are accessible from the internet, making the database
vulnerable to potential security threats.
AWS PrivateLink for Private Connectivity: AWS PrivateLink provides private connectivity between VPCs and
supported AWS services (including Amazon RDS) without exposing traffic to the public internet. It establishes
a secure, private connection using private IP addresses. This aligns perfectly with the requirement for secure
access and avoiding public exposure.
AWS PrivateLink Documentation
Amazon Managed Grafana and Data Sources: Amazon Managed Grafana needs a way to access the RDS
database to visualize its data. AWS PrivateLink provides this secure channel. After establishing the
PrivateLink connection, Amazon RDS can be configured as a data source within the Grafana workspace.
VPC Consideration for Grafana: While **Option B** suggests a Grafana workspace within a VPC, it creates a
private endpoint for the RDS database, which is not necessary when using AWS PrivateLink. **Option C**
leverages PrivateLink directly, which is more efficient for secure connectivity between Grafana and RDS,
irrespective of whether the Grafana workspace is within a VPC. The key is to avoid public endpoints, and
PrivateLink achieves this regardless of Grafana being inside a VPC.

In summary, **Option C** uses AWS PrivateLink to provide a secure, private connection between Amazon
Managed Grafana and Amazon RDS, avoiding the need for public endpoints and ensuring data is not exposed
over the internet. This directly addresses the security requirements of the scenario.

---

## Question 812

**Answer:** **C**

**Explanation:**

The correct answer is C: Configure AWS Glue DataBrew to transform the data. Share the transformation steps
with employees by using DataBrew recipes.

Here's a detailed justification:
AWS Glue DataBrew is a visual data preparation tool that allows users to clean and normalize data without
writing code. This directly addresses the requirement of a "prebuilt solution for data transformation that does
not require code." DataBrew provides a visual interface to perform tasks like filtering anomalies, normalizing
data, and creating aggregates.
DataBrew inherently offers data lineage and data profiling features. Data lineage is provided by tracking the
transformations applied to the data, showing how it was modified at each step. Data profiling is available
within DataBrew, allowing users to understand the data's characteristics (e.g., data types, distributions,
missing values) before and after transformations.
DataBrew uses "recipes" to encapsulate the transformation steps. These recipes can be easily shared with
other employees, fulfilling the requirement to share transformation steps throughout the company. Sharing is
facilitated by DataBrew's inherent sharing and collaboration features.

**Option A**, AWS Glue Studio, while visually oriented, primarily helps build ETL pipelines for data integration and
requires more coding knowledge than DataBrew for complex transformations. Also, it's not focused on
providing data profiling to end users.

**Option B**, Amazon EMR Serverless, is an on-demand data analytics runtime that provides a serverless
environment for running big data frameworks such as Spark and Hive. It focuses on heavy lifting analytics and
not on the no-code data profiling and transformation requested in the question. It is also not focused on
allowing end-users to develop their own data cleaning routines.

**Option D**, Amazon Athena, allows you to query data in S3 using SQL. While Athena can be used for data
transformation, it requires writing SQL queries, which violates the requirement of a code-free solution.
Sharing the queries could work for sharing transformation logic, but this is not ideal for users who lack strong
SQL skills. Athena doesn't natively provide robust data profiling in the same way that Glue DataBrew does.

Therefore, Glue DataBrew is the most appropriate solution because it provides a no-code environment for data
transformation, offers built-in data lineage and profiling, and allows easy sharing of transformation steps via
recipes.
Supporting Documentation:
AWS Glue DataBrew: https://aws.amazon.com/glue/databrew/
DataBrew Features: https://docs.aws.amazon.com/databrew/latest/dg/what-is.html

---

## Question 813

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the correct solution and why the others are not, along with
supporting concepts and links:
Justification for **Option A**:

**Option A** is the most suitable because it leverages the Application Load Balancer's (ALB) capabilities for
content-based routing and ensures automatic routing to the development instance even if it's replaced. It
maintains a consistent DNS endpoint through Route 53 while providing a flexible routing mechanism. The A
record in Route 53 pointing to the ALB ensures that all traffic destined for the development website is
directed to the ALB. The ALB listener rule examines the incoming requests and, based on the hostname or
path (defining the "development website"), forwards those specific requests only to the target group that
contains the development EC2 instance. This configuration allows engineers to access the development
instance using a dedicated subdomain or path without impacting the production application. If the
development instance is replaced, only the target group membership needs updating, without changing the
DNS records. This approach provides a robust, scalable, and easily maintainable solution. The other instances
remain untouched, and the development instance's availability doesn't directly depend on a specific IP
address.

Why other options are incorrect:

**Option B**: Relying on a public IP address for the development instance is not a best practice for several

reasons. Public IPs can change upon instance replacement. Directly exposing an instance with a public IP
increases the attack surface and violates the principle of least privilege. It bypasses the load balancer,
eliminating its benefits for health checks, scalability, and traffic distribution.

**Option C**: Redirecting requests to a public IP address after they hit the ALB is inefficient and unnecessary.
The ALB is perfectly capable of routing directly to the appropriate instance. A redirect adds latency and
complexity without providing any additional value. Like option B, using a public IP directly is less secure and
harder to manage.

**Option D**: Placing all instances in the same target group defeats the purpose of having separate development
and production environments. All instances would receive traffic indiscriminately. This removes the isolation
between environments, potentially disrupting the production application during development testing.
Supporting Concepts:
Application Load Balancer (ALB): An ALB operates at the application layer (layer 7) of the OSI model,
allowing for content-based routing, host-based routing, and path-based routing. It can inspect the contents of
the HTTP requests (headers, URLs, etc.) and route traffic accordingly.
Target Groups: A target group is a collection of targets (e.g., EC2 instances) that receive traffic from a load
balancer. You can define health checks for the targets in a target group.
Listeners and Rules: ALB listeners listen for incoming connection requests. Listener rules define how the ALB
routes requests to different target groups based on conditions such as hostname, path, or HTTP headers.
Amazon Route 53: A scalable and highly available DNS web service. It translates domain names into IP
addresses, enabling users to access applications using human-readable names.
A Record: A DNS record that maps a hostname to an IPv4 address.

---

## Question 814

**Answer:** **B**

**Explanation:**

The correct answer is B. Migrate the container application to Amazon Elastic Kubernetes Service (Amazon
EKS). Use Amazon MQ to retrieve the messages.

Here's a detailed justification:
The question emphasizes migrating a containerized application running on Kubernetes and the need to
maintain AMQP compatibility with minimal operational overhead.
Amazon EKS is a managed Kubernetes service that allows the company to migrate their existing Kubernetes
workloads to AWS without significant changes to their application architecture or operational practices. This
aligns with the requirement of minimal operational overhead because AWS manages the Kubernetes control
plane, relieving the company of this responsibility.
Amazon MQ is a managed message broker service that supports various message brokers, including
RabbitMQ, which uses the AMQP protocol. By using Amazon MQ, the company can continue to use AMQP for
message queuing without needing to manage the underlying infrastructure or make significant code changes.
This direct AMQP compatibility is a crucial factor because the application currently relies on it.
Let's analyze why the other options are less suitable:

**Option A** (Amazon ECS and Amazon SQS): ECS is a container orchestration service, but Amazon SQS does
not support the AMQP protocol. The application would require significant code changes to switch from AMQP
to SQS's message format, increasing operational overhead and complexity.

**Option C** (Amazon EC2 and Amazon MQ): While EC2 instances can run the application and Amazon MQ
provides AMQP support, managing EC2 instances for container applications is more complex and involves
more operational overhead than using a managed Kubernetes service like EKS. The company has an existing
Kubernetes setup, and replicating that manually on EC2 would be an inefficient approach.

**Option D** (AWS Lambda and Amazon SQS): Lambda functions might not be suitable for directly running a
container application. Also, as stated before, Amazon SQS doesn't natively support AMQP.

Therefore, option B offers the best solution by leveraging a managed Kubernetes service (EKS) to minimize
operational overhead while maintaining AMQP compatibility through Amazon MQ, requiring the fewest
changes to the existing application architecture.

---

## Question 815

**Answer:** **D**

**Explanation:**

The correct answer is D: Create a standard accelerator in AWS Global Accelerator. Configure the existing
NLBs as target endpoints.
Here's why this solution is optimal and why the others are not:
AWS Global Accelerator (AGA) and Performance: AGA is designed to improve the availability and
performance of applications for global users. It achieves this by utilizing the AWS global network
infrastructure and strategically located edge locations. It routes user traffic to the closest healthy endpoint
(NLB in this case) using Anycast static IP addresses. This reduces latency and improves end-to-end load time
by minimizing the distance data travels over the public internet. A standard accelerator will provide the
performance benefits needed.

Why other options are incorrect:
A (ALBs instead of NLBs): While Application Load Balancers (ALBs) offer advanced features like contentbased routing, they don't inherently reduce latency for a global user base in the same way as AGA. Replacing
NLBs with ALBs alone would not directly address the issue of minimizing distance over the public internet.
B (Route 53 weighted routing): Amazon Route 53 with weighted routing balances traffic across Regions, but
it doesn't optimize network paths to minimize latency in the same way as AGA. It simply distributes traffic, not
necessarily to the closest or best-performing endpoint for each user. Therefore, it won't significantly improve
end-to-end load time. Also, Route 53 relies on DNS resolution which adds overhead and is not as dynamic as
Global Accelerator.
C (Additional NLBs and EC2 in more Regions): This would require a significant infrastructure investment and
ongoing operational overhead. While it could potentially improve latency for some users closer to the new
Regions, it doesn't offer the same level of global network optimization as AGA. It's also not as cost-effective
as leveraging the existing NLBs with AGA.
Global Accelerator Benefits: AGA offers features like:
Static Anycast IP Addresses: Provide a fixed entry point to your application, simplifying DNS management
and improving reliability.
Traffic Dial: Allows you to control the percentage of traffic directed to each endpoint.
Failover: Automatically detects unhealthy endpoints and reroutes traffic to healthy ones.
Global network usage: Utilizes AWS global network infrastructure providing cost-effective, quick, and
performant routing.

In summary, AWS Global Accelerator provides the most efficient and scalable solution to improve the
customer playing experience by reducing end-to-end load time for a global customer base, leveraging the
existing NLB infrastructure. It provides faster performance, lower costs, easier management, and better
scalability than the other options.
Supporting Links:
AWS Global Accelerator
Network Load Balancer
Application Load Balancer
Amazon Route 53

---

## Question 816

**Answer:** **B**

**Explanation:**

The correct answer is B. Create an AWS Transfer Family endpoint for vendors that use legacy applications.

Here's why:
AWS Transfer Family is a fully managed service specifically designed to facilitate secure file transfers into
and out of Amazon S3, Amazon EFS, and Amazon FSx for Windows File Server using protocols like SFTP,
FTPS, and FTP. This aligns perfectly with the requirement of supporting legacy SFTP-based applications while
integrating with S3 for the company's cloud-native application. The key benefit is that it's a managed service,
relieving the company of the operational burden of managing servers, patching, and scaling the SFTP
infrastructure. Vendors can continue using their existing SFTP clients to transfer files directly to S3,
simplifying their workflow.

**Option A**, using AWS DMS, is incorrect because AWS DMS is primarily designed for database migrations, not
file transfers. It's not the right tool for this use case, and providing vendors access to a DMS instance would
be inappropriate and create security risks.

**Option C**, configuring an EC2 instance to run an SFTP server, introduces significant operational overhead. The
company would be responsible for managing the EC2 instance, ensuring its security, scaling it to handle
traffic, and maintaining the SFTP server software. This negates the benefit of using managed services.

**Option D**, using Amazon S3 File Gateway, involves creating an SMB file share. While File Gateway can
integrate on-premises applications with S3, it requires the vendors to adapt to a new protocol (SMB) when
they currently use SFTP. This doesn't align with the requirement of supporting their existing SFTP-based
applications. Furthermore, it's designed more for on-premises access to cloud storage, rather than directly
facilitating vendor uploads. The operational overhead is also higher than using AWS Transfer Family.

Therefore, AWS Transfer Family provides the most straightforward, secure, and managed solution to bridge
the gap between legacy SFTP systems and the cloud-native S3 environment with minimal operational effort.
Supporting Links:
AWS Transfer Family: https://aws.amazon.com/transfer/

---

## Question 817

**Answer:** **C**

**Explanation:**

The correct answer is C. Provide the extracted insights to Amazon Comprehend for analysis. Save the
analysis to an Amazon S3 bucket.

Here's why:
Amazon Comprehend for Sentiment Analysis: Amazon Comprehend is a natural language processing (NLP)
service specifically designed for tasks like sentiment analysis and key phrase extraction. It's purpose-built for
analyzing text and identifying the overall sentiment (positive, negative, or neutral) as well as extracting
relevant entities and topics. This directly fulfills the requirement to extract insights and sentiments.
Least Operational Overhead: Comprehend is a managed service, meaning AWS handles the underlying
infrastructure, scaling, and maintenance. You simply provide the text, and Comprehend returns the analysis
results. This minimizes operational overhead.
S3 for Storage: Storing the analysis results in an S3 bucket is a cost-effective and scalable way to persist the
data. It's also readily accessible for further reporting or integration with other AWS services.
Let's examine why the other options are less suitable:

**A.** Amazon Athena and S3: While Athena can query data in S3, it's primarily a query service for structured
data. The extracted insights from Textract might not be readily structured for Athena without additional
processing. It also doesn't directly address the sentiment analysis requirement.

**B.** Amazon DynamoDB and SageMaker: Storing extracted insights in DynamoDB is a viable option. However,
building a sentiment model with SageMaker is an overkill. Comprehend is already providing managed
sentiment analysis and entails more development and maintenance.

**D.** Amazon S3 and QuickSight: Storing extracted insights in S3 is reasonable. However, QuickSight is
primarily a visualization tool and doesn't provide built-in sentiment analysis capabilities. It would require
additional processing steps to perform sentiment analysis on the extracted text before visualization.

In summary, **Option C** leverages Amazon Comprehend, a managed service designed specifically for sentiment
analysis, thereby minimizing operational overhead and directly addressing the requirements of the question.
The S3 bucket serves as a simple and scalable storage solution for the analysis results.

---

## Question 818

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:

**Option A** utilizes Amazon Kinesis Data Streams for real-time data ingestion. Kinesis Data Streams are
designed for high-throughput, real-time data streaming from multiple sources. Each EC2 instance can feed its
data into the Kinesis Data Stream. Then, Amazon Kinesis Data Firehose is employed to consume the data from
the Kinesis Data Stream and reliably deliver it to an S3 bucket. Kinesis Data Firehose offers seamless
integration with S3, automatically handling data buffering, compression, and encryption. This setup efficiently
and reliably captures the real-time data and stores it in S3 for further processing or analysis.

**Option B**, AWS DMS, is generally used for migrating databases, not for ingesting real-time streams of raw
data from applications. Using replication instances as the source endpoints doesn't align with the requirement
of handling real-time data from multiple EC2 instances.https://aws.amazon.com/dms/

**Option C**, AWS DataSync, focuses on transferring large amounts of data between on-premises storage and
AWS storage services. It's not designed for real-time data ingestion. It's also not the most efficient solution
for numerous, continuous updates from multiple instances.https://aws.amazon.com/datasync/

**Option D**, AWS Direct Connect, establishes a dedicated network connection from your on-premises
environment to AWS. While it improves network performance, it is not necessary or cost-effective for
ingesting data from EC2 instances already running within AWS. Direct PUT operations might be possible but
would require significant custom implementation compared to a managed streaming service like
Kinesis.https://aws.amazon.com/directconnect/

Therefore, the Kinesis Data Streams and Kinesis Data Firehose combination provides the most efficient,
scalable, and reliable solution for real-time data ingestion from multiple sources (EC2 instances) into an S3
bucket, making **Option A** the best choice. Kinesis is built precisely for real-time data processing and seamless
integration with S3.https://aws.amazon.com/kinesis/data-streams/https://aws.amazon.com/kinesis/datafirehose/

---

## Question 819

**Answer:** **B**

**Explanation:**

The correct answer is B. Store the large data as objects in an Amazon S3 bucket. In a DynamoDB table,
create an item that has an attribute that points to the S3 URL of the data.
Here's why this solution is the most operationally efficient:
DynamoDB Item Size Limit: DynamoDB has a hard limit of 400 KB per item. Directly storing data exceeding
this limit will fail.
Offloading Large Objects to S3: Amazon S3 is designed for storing large, unstructured data. S3 offers
virtually unlimited storage capacity and excellent durability and availability. By storing the large data in S3,
we bypass DynamoDB's size limitations for individual items.
Reference in DynamoDB: Storing a pointer (S3 URL) in DynamoDB allows you to maintain metadata or
identifiers related to the large data. This keeps DynamoDB items within the size limits while providing a link to
the actual data.
Operational Efficiency: This approach minimizes the complexity of data manipulation. No complex splitting,
filtering, or compression is required. S3 handles storage and retrieval efficiently.
Cost Optimization: S3 storage is generally cheaper than DynamoDB storage, especially for large data
volumes.
Scalability and Performance: S3 is highly scalable and offers excellent performance for data retrieval.
DynamoDB provides fast access to the metadata.

Why other options are less suitable:

**A:** Using DocumentDB introduces a separate database technology, increasing operational overhead
(managing two databases). Filtering data to fit DynamoDB limits might result in data loss.

**C:** Splitting data into multiple DynamoDB items requires careful management of the split data, potentially
impacting performance. This approach is complex and adds significant overhead. BatchWriteItem also has its
limitations.

**D:** Compression can help, but it might not always reduce the data size to below the 400 KB limit. It also adds
computational overhead to both write and read operations. It is possible to use compression, but a solution to
the issue would require combining it with S3 to store the data.

---

## Question 820

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution for migrating cron jobs to AWS, along with
supporting concepts and links:
The core requirement is to migrate existing cron jobs to AWS with minimal refactoring, supporting future
event-driven triggers, and accommodating runtimes from 1 to 20 minutes. Let's analyze each option:

**Option A** (EventBridge Scheduler + Lambda): Lambda functions have execution time limits. While Lambda
functions are suitable for short tasks, they are typically limited to a maximum execution duration (currently 15
minutes). Many cron jobs exceed this limit, making Lambda
unsuitable.https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html

**Option B** (AWS Batch + ECS): AWS Batch is designed for batch processing jobs, particularly those with
dependencies or complex workflows. While it could handle cron jobs, it introduces unnecessary complexity
and overhead for simple scheduled tasks. Event-driven scheduling isn't inherent, requiring additional
configuration. The core problem is its inherent design for background jobs rather than scheduled, timesensitive tasks.https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html

**Option C** (EventBridge Scheduler + Fargate): Amazon EventBridge Scheduler allows you to create schedules
that trigger targets on a recurring basis. AWS Fargate is a serverless compute engine for containers that lets
you run containers without managing servers or clusters. It's an ideal compute platform for running
containerized cron jobs of various durations. Packaging the cron jobs into containers offers flexibility and
reduces refactoring. EventBridge Scheduler supports triggering jobs based on schedules or in response to
other events, fulfilling the "event in the future" requirement. This approach provides a simple, scalable, and
cost-effective solution for running cron jobs in the
cloud.https://aws.amazon.com/fargate/https://aws.amazon.com/eventbridge/scheduler/

**Option D** (Step Functions + Wait State + Fargate): Step Functions could be used, but introducing a Step
Function workflow with Wait states for simple scheduling adds significant complexity. It's an overkill solution
when a simpler approach like EventBridge Scheduler can directly trigger tasks. The Wait state isn't ideal for
reliable scheduling.https://aws.amazon.com/step-functions/

Therefore, option C provides the most straightforward and appropriate solution by leveraging EventBridge
Scheduler for cron job scheduling and AWS Fargate for running the containerized jobs, which accommodates
the specified runtime, minimal refactoring, and future event-driven needs, making it the best choice.

---

## Question 821

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides the most secure and efficient solution for transferring data from
Salesforce to Amazon Redshift without traversing the public internet, with minimal development effort.

Here's a detailed justification:
AWS PrivateLink: This service allows you to access services hosted on the AWS network or by other AWS
customers in a secure and private manner. It establishes a private connection between your VPC and the
service without exposing your traffic to the public internet. Salesforce supports AWS PrivateLink.
Amazon AppFlow: This is a fully managed integration service that enables you to securely transfer data
between SaaS applications (like Salesforce) and AWS services (like Amazon Redshift). It's designed for ease
of use and requires minimal coding. AppFlow integrates seamlessly with PrivateLink for secure data transfer.
https://aws.amazon.com/privatelink/
https://aws.amazon.com/appflow/
Now, let's examine why the other options are less suitable:

**A.** VPN connection: While a VPN provides a secure connection, it's more complex to set up and manage than
PrivateLink. It also involves more overhead in terms of performance and configuration. Furthermore, AWS
Glue DataBrew is primarily a data preparation tool, not the optimal choice for transferring data from
Salesforce to Redshift. DataBrew does not natively support direct connections to SaaS applications through
private connections.

**B.** AWS Direct Connect: Direct Connect provides a dedicated network connection between your on-premises
environment and AWS. While it avoids the public internet, it's more expensive and requires a physical
connection to AWS, which might be overkill for this use case involving a SaaS application like Salesforce.
Using DataBrew here still has the same limitation as in option A.

**D.** VPC peering connection: VPC peering connections are designed to connect VPCs within AWS. You cannot
establish a direct VPC peering connection with Salesforce.

Therefore, option C offers the ideal combination of security (using PrivateLink), ease of use (using AppFlow),
and cost-effectiveness for the specified requirements. It requires the least amount of development effort by
leveraging managed services specifically designed for these types of integration scenarios.

---

## Question 822

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most cost-effective solution for the given scenario:
The primary goal is to reduce storage costs while maintaining application functionality after a migration to
AWS. The current setup uses EFS Standard-Infrequent Access, which, while cheaper than EFS Standard, can
still be relatively expensive compared to Amazon S3, particularly for infrequently accessed data. The key to
cost optimization lies in identifying a storage solution that automatically tiers data based on access patterns
and integrates well with the application.

**Option A** leverages Amazon S3 with Intelligent-Tiering. Intelligent-Tiering automatically moves data between
frequent, infrequent, and archive access tiers based on usage patterns, without any operational overhead or
impact on performance. [https://aws.amazon.com/s3/storage-classes/intelligent-tiering/]. By copying the files
to S3 and updating the application to use the Amazon S3 API, the company benefits from the lower storage
costs of S3 and the automated tiering capabilities of Intelligent-Tiering. This ensures that frequently
accessed files are readily available while infrequently accessed files are stored at a lower cost.

**Option B**, deploying Amazon FSx for Windows File Server, is less cost-effective because FSx for Windows File
Server is generally more expensive than S3. It's more suited for Windows-based applications requiring native
Windows file system compatibility. The migration effort is also significant.

**Option C**, using Amazon FSx for OpenZFS, offers high performance but is also generally more expensive than
S3. The complexity of setting up and managing an FSx for OpenZFS file system adds operational overhead.

**Option D**, using S3 Glacier Flexible Retrieval, is not the most optimal solution despite its very low cost. S3
Glacier Flexible Retrieval (formerly known as S3 Glacier) is suitable for archival data with infrequent access
and retrieval times can be several hours. This is likely to impact the application's performance and may not
meet the company's requirements for readily accessible files, even if accessed infrequently. Furthermore,
"standard retrievals" from Glacier are designed for infrequent, bulk access, not the type of on-demand access
the application may still require for some files. [https://aws.amazon.com/s3/storage-classes/glacier/].

Therefore, migrating to S3 with Intelligent-Tiering is the most cost-effective solution because it provides a
balance between storage cost, performance, and ease of integration with the existing application after a
simple API update. It directly addresses the company's need to optimize storage costs without significant
application rework or performance degradation.

---

## Question 823

**Answer:** **C**

**Explanation:**

The correct answer is C: Use an Application Load Balancer (ALB) with a certificate attached from AWS
Certificate Manager (ACM). Use query parameter-based routing.

Here's why:
Application Load Balancer (ALB): ALBs operate at the application layer (Layer 7) of the OSI model. This
allows them to make routing decisions based on the content of the HTTP requests, including query strings.
Network Load Balancers (NLBs) operate at Layer 4 (transport layer) and are not capable of query string-based
routing. Gateway Load Balancers are designed for virtual appliances and are not appropriate for this scenario.
Query Parameter-Based Routing: The requirement specifies that the load balancer must route traffic based
on query strings. ALBs are explicitly designed to support this type of routing, allowing you to direct requests
to different target groups based on the values in the query parameters.
Encryption (HTTPS): The requirement states that traffic must be encrypted. ALBs support HTTPS listeners,
allowing you to encrypt traffic between clients and the load balancer. AWS Certificate Manager (ACM) is the
recommended service for provisioning, managing, and deploying SSL/TLS certificates for use with AWS
services, including ALBs. Importing certificates into IAM is less secure than ACM.
ACM Integration: ACM simplifies the process of obtaining and managing SSL/TLS certificates for use with
AWS services. The ALB can directly integrate with ACM to automatically handle certificate renewal and
deployment, reducing operational overhead.

**Option A** and D are incorrect because NLBs do not support query parameter-based routing.

**Option B** is incorrect as it is not designed to be used with Application load balancing.
Supporting Documentation:
Application Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
ALB Listener Rules: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancerlisteners.html

AWS Certificate Manager: https://aws.amazon.com/certificate-manager/

---

## Question 824

**Answer:** **C**

**Explanation:**

The optimal solution involves distributing the application and database across multiple, scalable resources for
high availability and automatic scaling. **Option C** achieves this effectively.

Here's a detailed justification:

1. Application Scalability: Deploying the application on EC2 instances within an Auto Scaling group
ensures automatic scaling. As traffic increases, the Auto Scaling group automatically launches more
EC2 instances to handle the load, and when traffic decreases, it scales down, optimizing costs. An
Application Load Balancer (ALB) distributes incoming traffic across these EC2 instances, providing a
single point of entry and improving application
availability.https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-autoscaling.htmlhttps://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

2. Database Scalability and High Availability: Moving the MySQL database to Amazon Aurora
Serverless MySQL provides automatic scaling and high availability. Aurora Serverless automatically
scales the database capacity based on application demand, so you only pay for what you use. It also
offers built-in fault tolerance and automatic recovery, ensuring high availability.
https://aws.amazon.com/rds/aurora/serverless/

3. Why other options are incorrect:

**A:** While using Auto Scaling group and ALB is correct for the application tier, Amazon Redshift is a
data warehouse service and not suitable for transactional workloads of a MySQL database.

**B:** Target groups configured behind an ALB are acceptable, but the description is less precise.
Moreover, while Amazon RDS for MySQL cluster offers HA, it may require more manual intervention
for scaling than Aurora Serverless.

**D:** ElastiCache is a caching service and not a replacement for a relational database like MySQL. It is
not designed to be used with MySQL connector for primary data storage.

Therefore, **Option C** is the most appropriate solution because it combines automatic scaling and high
availability for both the application and the database layers, meeting the company's requirements effectively.

---

## Question 825

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the least operational overhead while meeting the encryption and key
rotation requirements. Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) automatically
handles key rotation without any manual intervention. Amazon S3 rotates these keys regularly, ensuring data
is protected by new encryption keys periodically. This aligns directly with the requirement for annual key
rotation.

**Option B** involves AWS KMS customer-managed keys with automatic key rotation, which although viable,
introduces more complexity. Managing KMS keys, even with automatic rotation, requires more overhead than
simply relying on S3's built-in encryption.

**Option C** requires manual key rotation, which contradicts the requirement for minimal operational overhead.
Manual rotation is prone to human error and necessitates scheduled tasks and monitoring.

**Option D** is overly complex. Importing customer key material into KMS keys adds a significant layer of
operational overhead. While it allows for key rotation, it's much more difficult to manage than S3-managed
keys and is not necessary given the scenario's requirements.
SSE-S3 simplifies the process by abstracting the key management away from the user, adhering to security
best practices and reducing the operational burden. It ensures that data at rest in the S3 bucket is encrypted
and that key rotation occurs automatically without any administrator intervention.

Therefore, leveraging SSE-S3 is the most straightforward and efficient approach, aligning with the principle
of least privilege and minimal operational complexity in cloud solutions.
Further reading:
Protecting Data Using Server-Side Encryption
AWS Key Management Service (KMS)
SSE-S3

---

## Question 826

**Answer:** **B**

**Explanation:**

**Option B** is the correct solution because it leverages AWS IAM Identity Center (successor to AWS SSO) for
centralized single sign-on and integrates seamlessly with the existing on-premises Active Directory. IAM
Identity Center enables users to access multiple AWS accounts with a single set of credentials. Establishing a
two-way forest trust using AWS Directory Service for Microsoft Active Directory (AD Connector or a managed
AD) allows IAM Identity Center to authenticate users directly against the on-premises AD. This avoids
replicating user data to AWS and maintains the on-premises AD as the source of truth.

**Option A** is incorrect because creating an Enterprise Edition Active Directory in AWS Directory Service and
making it the identity source for IAM Identity Center would require migrating users and groups to the AWSmanaged AD, which contradicts the requirement to continue managing users and groups in the on-premises
AD.

**Option C** is insufficient. While creating a two-way trust relationship with AWS Directory Service is necessary
for integration, it doesn't provide the single sign-on functionality across multiple accounts. This option lacks
the IAM Identity Center component for centralized access management.

**Option D** is more complex and less efficient. Deploying an IdP on EC2 introduces unnecessary management
overhead and complexity. IAM Identity Center is designed for native integration with identity providers, and
using AWS Directory Service in conjunction with IAM Identity Center offers a managed and simplified solution.
Furthermore, the AWS-managed solutions can ensure higher availability and scalability compared to an EC2based IdP. IAM Identity Center directly supports AD integration through Directory Service, avoiding the need
to build a custom integration.

Therefore, enabling IAM Identity Center and configuring a two-way forest trust between the on-premises
Active Directory and IAM Identity Center using AWS Directory Service is the optimal solution to meet the
company's requirements.
Relevant Documentation:
What is AWS IAM Identity Center (successor to AWS Single Sign-On)?
AWS Directory Service
How AWS IAM Identity Center (successor to AWS Single Sign-On) works with Active Directory

---

## Question 827

**Answer:** **C**

**Explanation:**

The optimal solution for cost-effectively optimizing storage performance for an Aurora PostgreSQL
Serverless v2 cluster under increasing load is option C, configuring the cluster storage type as General
Purpose.

Here's why:
Aurora Serverless v2's Storage Scalability: Aurora Serverless v2 is designed to automatically scale both
compute and storage resources based on application needs. It automatically increases storage capacity as
data grows, negating the need for manual intervention in most cases.
General Purpose (gp2/gp3) SSDs: General Purpose SSDs are a cost-effective storage option that provides a
balance of performance and cost for a wide variety of workloads. They are well-suited for databases that
experience variable I/O patterns, which is typical during workload spikes.
Cost-Effectiveness Comparison: Provisioned IOPS (option B) is significantly more expensive. It allows you to
specify the number of IOPS you need, but this comes at a higher cost than General Purpose storage. Since the
application load will only experience periodic spikes and Aurora Serverless v2 already handles storage
scaling, the excess capacity provisioned will likely be unused, costing unnecessarily.
Aurora Standard vs. Aurora I/O-Optimized: Aurora I/O-Optimized storage configuration (option D) comes at
additional cost. While Aurora Standard storage configuration (option A) would still technically work, General
Purpose is the optimal cost-effective configuration. General Purpose storage offers the best balance of cost
and performance.
Aurora's Storage Management: Aurora manages storage internally, and General Purpose storage is
appropriate for most workloads. It abstracts away the complexities of managing storage performance,
allowing developers to focus on the application logic.

In summary, choosing General Purpose storage leverages Aurora Serverless v2's built-in scalability and
provides a good balance of performance and cost for handling large amounts of traffic and optimizing storage
performance as the load increases.

---

## Question 828

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
The company requires continuous monitoring of security control implementation and effectiveness across
hundreds of AWS accounts in an AWS Organization, with a need to demonstrate compliance with NIST and
PCI DSS standards to auditors.
AWS Security Hub is designed to provide a comprehensive view of the security state of your AWS resources.
It aggregates, organizes, and prioritizes security alerts and findings from various AWS services (like
GuardDuty, Inspector, Macie) and supported third-party solutions. It centralizes security management across
accounts. (https://aws.amazon.com/security-hub/)
By designating a Security Hub delegated administrator account from the Organizations management account,
the company can centrally manage Security Hub settings and view findings across all member accounts.
Security Hub has built-in support for security standards like NIST and PCI DSS. By enabling these standards,
Security Hub automatically checks your environment against the controls defined in those standards,
providing a compliance score and detailed findings on non-compliant resources. This is crucial for audit
purposes.
Amazon Inspector (**Option A**) focuses on automated security vulnerability assessments of EC2 instances and
container images. While valuable for finding vulnerabilities, it doesn't provide a comprehensive view of
compliance against industry standards across the entire AWS environment in the same way as Security Hub.
Amazon GuardDuty (**Option B**) is a threat detection service that monitors for malicious activity and
unauthorized behavior. It doesn't specifically address compliance monitoring against standards like NIST and
PCI DSS, though its findings can contribute to overall security posture.
AWS CloudTrail (**Option C**) records API calls made within your AWS environment. While it's essential for audit
trails and security analysis, it doesn't directly provide compliance assessments or reporting against specific
industry standards. CloudTrail provides data for compliance, not compliance itself.
Security Hub's Standards enable easy compliance tracking and reporting against desired benchmarks,
allowing the company to demonstrably prove to third-party auditors that controls are implemented and
functional.

Therefore, Security Hub is the most appropriate solution for centrally monitoring compliance with NIST and
PCI DSS across multiple AWS accounts, fulfilling the company's requirements for security monitoring and
auditability.

---

## Question 829

**Answer:** **A**

**Explanation:**

The optimal solution is A. Create an S3 Lifecycle rule to transition objects to the S3 Intelligent-Tiering
storage class.

Here's a detailed justification:
The problem requires cost reduction and immediate availability for frequently accessed S3 objects in a data
lake environment with random access patterns.
S3 Intelligent-Tiering is designed for scenarios where access patterns are unknown or change over time. It
automatically moves data between frequent, infrequent, and archive access tiers based on usage patterns,
optimizing storage costs without performance impact. This aligns perfectly with the requirement for both cost
reduction and immediate availability of frequently accessed objects.
Operationally Efficient: Implementing an S3 Lifecycle rule to transition objects to S3 Intelligent-Tiering is a
straightforward and automated process. It requires minimal operational overhead as S3 handles the tiering
automatically based on access patterns. No manual intervention or custom code is necessary.

Why other options are less suitable:

**B.** Store objects in Amazon S3 Glacier. Use S3 Select to provide applications with access to the data. S3
Glacier is designed for archival storage with infrequent access. While cost-effective, retrieving data from
Glacier can take hours, violating the requirement for immediate availability. S3 Select can query data in
Glacier without retrieving the entire object, but it still doesn't provide instant access.

**C.** Use data from S3 storage class analysis to create S3 Lifecycle rules to automatically transition objects
to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. This option requires analyzing
storage access patterns first and then creating lifecycle rules. S3 Standard-IA is suitable for infrequently
accessed data, but objects accessed frequently won't benefit and will incur retrieval charges if moved there.
Intelligent-Tiering is more efficient at doing this without requiring analysis and with multiple tiers available.

**D.** Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an AWS
Lambda function to transition objects to the S3 Standard storage class when they are accessed by an
application. This approach is complex and introduces unnecessary operational overhead. It requires writing
and maintaining a Lambda function to monitor object access and transition them back to S3 Standard. S3
Intelligent-Tiering handles this automatically and more efficiently. Introducing a Lambda function also adds
potential points of failure and increased cost for Lambda invocations.

---

## Question 830

**Answer:** **B**

**Explanation:**

The most appropriate solution is B: Use Amazon Neptune to store the datasets with edges and vertices, and
query the data to find connections. Here's why:
Amazon Neptune is a fully managed graph database service. Graph databases are specifically designed for
handling highly connected data and performing relationship-based queries, such as finding mutual
connections. The dataset described—user profiles and their connections—perfectly aligns with a graph
database model where user profiles are vertices (nodes) and connections are edges. Neptune's architecture is
optimized for traversing relationships, enabling highly efficient searches for mutual connections up to five
levels deep. This traversal is significantly faster than using relational databases or data lakes for the same
task.
Options A and D, which propose using Amazon S3 with Athena or Amazon RDS, are less suitable. While both
can store the data, they rely on SQL JOIN operations for finding connections. SQL JOINs become
computationally expensive and slow as the number of JOINs increases, especially when traversing multiple
levels of connections. Athena, while useful for querying data in S3, is not optimized for complex relationship
traversals like Neptune is. RDS, as a relational database, can also struggle with the performance demands of
multi-level relationship queries.

**Option C**, using Amazon QuickSight, is primarily a visualization tool. While QuickSight can visualize data from
various sources, it doesn't provide the underlying data storage or efficient querying capabilities needed to
find mutual connections. It would rely on a different service to perform the actual connection finding.

In summary, Neptune's graph database architecture is inherently designed for the type of relationship-based
queries needed in this scenario. The efficiency of graph traversal in Neptune makes it the optimal choice for
finding mutual connections up to five levels in a large dataset.
Further research:
Amazon Neptune: https://aws.amazon.com/neptune/
Graph Databases: https://aws.amazon.com/products/databases/graph/

---

## Question 831

**Answer:** **D**

**Explanation:**

The most cost-effective solution for a secure, low-bandwidth connection between an on-premises
environment and AWS, which needs to be set up quickly, is an AWS Site-to-Site VPN connection. Here's why:
AWS Site-to-Site VPN: Establishes an encrypted tunnel over the public internet between your on-premises
network and your Amazon VPC. It's relatively quick to configure and doesn't require dedicated hardware,
making it suitable for low-bandwidth needs. Pricing is based on VPN connection hours and data transfer out,
which aligns well with infrequent or small traffic volumes.
AWS Direct Connect: Designed for high-bandwidth, low-latency, and dedicated network connections. While
secure, it involves higher costs due to dedicated port fees, cross-connect charges, and longer setup times.
Direct Connect is overkill for the stated requirements.
Client VPN: Allows individual users to securely connect to AWS resources. It's designed for remote access
and not a persistent site-to-site connection, making it unsuitable for connecting an entire on-premises
network.
Bastion Host on Amazon EC2: Requires launching and managing an EC2 instance, incurring ongoing compute
costs. While a bastion host provides secure access, it is primarily designed for accessing resources within the
VPC and does not establish a secure, site-to-site connection between the on-premises network and AWS. It
also adds operational overhead. Site-to-Site VPN inherently establishes an encrypted tunnel without needing
manual setup of protocols.
The key factor is cost-effectiveness for low bandwidth. Site-to-Site VPN strikes a balance between security
and cost, utilizing existing internet infrastructure.

Therefore, the AWS Site-to-Site VPN offers the best combination of security, speed of deployment, and costeffectiveness for the given scenario.

---

## Question 832

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides a managed, scalable, and secure SFTP solution integrated with
the existing on-premises Active Directory (AD) using AWS Transfer Family and AD Connector, minimizing
operational overhead. AWS Transfer Family is a fully managed service that simplifies secure file transfers into
and out of Amazon S3. It directly supports SFTP, FTP, and FTPS protocols. Choosing the AWS Directory
Service option as the identity provider within Transfer Family allows for seamless integration with AD. AD
Connector establishes a secure connection between AWS and the on-premises AD, enabling users to
authenticate with their existing AD credentials. This avoids the need to create new user accounts or modify
existing ones.

**Option A**, using S3 File Gateway, introduces more operational overhead because it requires managing an S3
File Gateway appliance and configuring SMB shares. While it supports AD authentication, it's primarily
designed for hybrid cloud file sharing, not as a direct replacement for an SFTP solution.

**Option B** involves setting up and managing an Auto Scaling group with EC2 instances running an SFTP server,
which is far more complex and requires significant operational effort for patching, scaling, and security. CPU
utilization scaling is reactive and might not be the most efficient for handling file transfer workloads.

**Option D** is similar to C but lacks the crucial detail of using AD Connector. Simply choosing AWS Directory
Service might not be sufficient to connect to the existing on-premises AD without the necessary connector to
bridge the gap. AD Connector is specifically designed for this purpose.

Therefore, option C provides the most straightforward and least operationally intensive method to migrate the
on-premises SFTP solution to AWS while preserving the existing authentication mechanism via AD Connector
and utilizing the scalable and managed AWS Transfer Family.
References:
AWS Transfer Family: https://aws.amazon.com/transfer/
AD Connector: https://aws.amazon.com/directoryservice/ad-connector/
S3 File Gateway: https://aws.amazon.com/storagegateway/file/

---

## Question 833

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages Amazon EventBridge's event routing and transformation
capabilities to meet the specific requirements of the order processing system.

Here's why:
Loose Coupling: EventBridge promotes loose coupling by decoupling the order creation process from the
validation steps. The order creation system publishes events to EventBridge without needing to know about
the validation functions. Each validation function subscribes to specific events based on rules.
Targeted Data Delivery: EventBridge's input transformer is the key. It allows you to define how the original
event data is transformed before it's passed to the target Lambda function. This ensures that each validation
function receives only the required subset of order information, enhancing security and reducing processing
overhead.
Event-Driven Architecture: The solution aligns with an event-driven architecture, where validation steps are
triggered by the occurrence of an order event, making the system responsive and scalable.
Idempotency: While all options could potentially be implemented to accommodate idempotent Lambda
functions, EventBridge provides the cleanest separation of concerns and transformation capabilities that
align with the other requirements.

Why other options are less suitable:
A (SQS with transformation Lambda): This introduces an extra Lambda function to transform data, which
adds complexity and potential points of failure. While SQS provides reliable message queuing, it doesn't offer
the same level of filtering and transformation as EventBridge. The tight coupling between the transformation
Lambda and SQS queues makes it less flexible.
B (SNS with message filtering): While SNS can fan out messages to multiple subscribers, its message
filtering capabilities are more limited compared to EventBridge's input transformer. SNS filtering primarily
works on message attributes, not on the message body content, making it less suitable for extracting specific
data subsets.
D (SQS with parallel invocation Lambda): This approach creates significant complexity. Managing parallel
Lambda invocations introduces challenges around error handling, concurrency, and resource management.
The synchronous invocation also reduces the benefits of the event-driven nature of the system.

---

## Question 834

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses the root cause of the performance issue: report generation
impacting the main database's performance.

Here's a detailed justification:
Understanding the Problem: The users experienced poor application performance due to real-time report
generation during business hours, overloading the database.
Why **Option A** is Incorrect: DynamoDB, while suitable for many use cases, would require significant
application refactoring to support the existing MySQL database structure and reporting requirements. This
isn't an optimal solution for a simple migration.
Why **Option B** is Incorrect: Simply increasing the compute resources on an EC2 instance hosting the MySQL
database may alleviate the problem slightly, but it doesn't isolate report queries from affecting transactional
performance. The reports will still contend for resources with the main application workload on the same
database instance.
Why **Option C** is Correct: Amazon Aurora MySQL Multi-AZ provides high availability and performance. More
importantly, read replicas allow you to offload read-intensive workloads, such as report generation, from the
primary database instance. This isolation prevents report queries from impacting the performance of the
primary database used for transactions. Configuring the application to use the reader endpoint for report
generation ensures these queries are directed to the read replicas, not the primary instance. This is a standard
practice for optimizing read-heavy workloads in relational databases.
Multi-AZ: Ensures high availability.
Read Replicas: Offload read traffic (reports), isolating the primary database for transactional workloads.
Reader Endpoint: Provides a single point of access for all read replicas.
Why **Option D** is Incorrect: The backup instance of an Aurora cluster is not intended to be used for serving
read traffic. It's primarily for failover and point-in-time recovery. Using it for report generation could interfere
with its primary purpose and potentially impact recovery time if a failover is needed. Furthermore, backup
instances might not be consistently up-to-date and ready to serve read requests in the way a dedicated read
replica is.
In summary: **Option C** provides a cost-effective and efficient solution by using Aurora's read replicas to
offload report generation, thereby isolating the read workload from the primary database and improving
overall application performance during peak hours.

---

## Question 835

**Answer:** **C**

**Explanation:**

The most cost-effective solution for accessing an S3 bucket from an on-premises network with no direct
internet access via AWS Direct Connect is creating a VPC and an Amazon S3 interface endpoint.

Here's why:
Interface Endpoints (AWS PrivateLink): Interface endpoints, powered by AWS PrivateLink, provide private
connectivity to AWS services, including S3, without exposing traffic to the public internet. This ensures
secure communication over your Direct Connect connection.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Cost-Effectiveness: Interface endpoints are generally more cost-effective than NAT gateways for accessing
S3, especially when considering the data transfer charges.
Security: Interface endpoints keep traffic within the AWS network and the Direct Connect connection,
avoiding exposure to the public internet, which aligns with the requirement for a secure connection.
Let's analyze why the other options are less suitable:
Public VIF: Using a public VIF would route traffic over the public internet, which contradicts the requirement
to avoid direct internet access.
NAT Gateway: NAT gateways provide internet access to instances within a private subnet. While you could
route traffic through a NAT gateway in a VPC connected via Direct Connect, this is intended for instances
requiring broader internet access, not solely for accessing S3. It also incurs data processing charges for the
NAT gateway itself, adding to the cost.
VPC Peering: VPC peering allows you to connect two VPCs, but it doesn't directly solve the problem of
accessing S3 from on-premises without internet access. You would still need a way to reach the S3 service
from the peered VPC, potentially using a NAT gateway, making it less optimal than an interface endpoint.

In summary, an S3 interface endpoint provides a secure, private, and cost-effective solution by allowing direct

access to S3 from the on-premises network through the Direct Connect connection, without traversing the
public internet.

---

## Question 836

**Answer:** **B**

**Explanation:**

The correct answer is B. An Amazon Route 53 multivalue answer routing policy. Here's why:
Disaster Recovery and High Availability: The company requires a disaster recovery solution that
automatically avoids unhealthy Regions. Route 53 multivalue answer routing is designed to distribute traffic
to multiple healthy endpoints (in this case, the different Regions hosting the website).
Health Checks: Route 53 can be configured with health checks for each endpoint. If a Region's health check
fails, Route 53 will automatically stop routing traffic to that Region, ensuring users are only served by healthy
website instances.
Multi-Region Distribution: Multivalue answer routing allows Route 53 to return multiple IP addresses in
response to a DNS query. Clients will randomly choose one of these addresses to connect to, effectively
distributing traffic across the healthy Regions.
Simplicity: Compared to more complex solutions, Route 53 multivalue answer routing provides a relatively
straightforward setup for multi-Region traffic distribution and failover.
Let's examine why the other options are less suitable:

**A.** An Amazon Route 53 simple routing policy: Simple routing policy doesn't inherently support health
checks or automatic failover. It only returns a single IP address, making it unsuitable for distributing traffic
across Regions and handling failures.

**C.** An Application Load Balancer in one Region with a target group that specifies the EC2 instance IDs from
both Regions: ALBs are regional resources. While cross-zone load balancing is possible within a Region, ALBs
cannot directly manage EC2 instances in another Region using instance IDs within a single target group.
Furthermore, if the entire Region where the ALB is located fails, the entire solution becomes unavailable.

**D.** An Application Load Balancer in one Region with a target group that specifies the IP addresses of the
EC2 instances from both Regions: While technically possible to add IPs from a different Region, this is not
the intended use case for ALB target groups and introduces complexities with managing and updating the IPs,

especially with dynamic scaling. More importantly, a single ALB in one region isn't ideal for cross-region DR
and high availability as failure of that region will impact the entire solution. This also violates network
boundaries. In conclusion, Route 53 multivalue answer routing, combined with health checks, provides the
simplest and most effective way to distribute traffic across multiple Regions, ensure high availability, and
automatically fail over from unhealthy Regions, fulfilling the company's requirements.
Supporting Links:
Amazon Route 53 Routing Policies: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routingpolicy.html
Route 53 Health Checks: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checkscreating-deleting.html

---

## Question 837

**Answer:** **C**

**Explanation:**

The correct answer is C. Mount an Amazon Elastic File System (Amazon EFS) file system across all the EC2
instances. Instruct the employees to access the files from the EC2 instances.

Here's why:
Requirement for Availability Across EC2 Instances and AZs: The problem specifies that files need to be
available across many EC2 instances and multiple Availability Zones. Amazon EFS is designed specifically for
this purpose. It provides a scalable, elastic, and fully managed file system service. EFS file systems can be
mounted concurrently by multiple EC2 instances in multiple AZs within an AWS Region. This satisfies the
availability requirement effectively.
No File Transfer Between EC2 Instances: Using EFS eliminates the need to transfer files between EC2
instances. All instances access the same central file system. When an employee saves a file to the EFS mount
point on one instance, the file is immediately accessible from all other instances with the EFS file system
mounted.
Handling Large Files: EFS is designed to handle large files efficiently. It scales automatically as data is added
or removed, so it can easily accommodate 25 GB files without performance degradation.
Why Other Options Are Incorrect:

**A.** Amazon S3: While S3 is excellent for object storage, it might not be the ideal solution if the employees
require a traditional file system interface. Using S3 would require code or applications to be aware of S3 APIs

and interact with the storage through HTTP, which is not a natural file system interaction. Though compatible
with large files, it introduces more complexity than a file system.

**B.** EBS Snapshot: EBS snapshots are point-in-time copies of EBS volumes. Mounting a snapshot as a new EBS
volume would create a separate, isolated copy of the data. This does not provide a shared file system that
updates across all EC2 instances, meaning the instances aren't working with one singular filesystem.

**D.** AMI with Instance Store: Instance store volumes are ephemeral, meaning they lose their data when the
instance is stopped or terminated. This contradicts the need for persistent storage and availability.
Furthermore, the AMI does not create a system where the files are available to all running instances after the
AMI is launched.

In summary, EFS offers the best balance of features, satisfying the requirements of shared access across EC2
instances and Availability Zones, eliminating the need for file transfers, and supporting the large file sizes
mentioned in the problem.

---

## Question 838

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, adhering to the prompt's constraints:
The requirement is to encrypt PII at rest for both the EC2 instance and RDS database, minimizing
infrastructure changes. **Option C**, configuring SSL encryption using AWS Key Management Service (AWS
KMS) keys, directly addresses this. RDS already offers encryption at rest using KMS keys. Enabling this
feature is straightforward and requires minimal modification to the existing RDS instance. Furthermore, the
EC2 instance's connection to RDS can be secured using SSL/TLS encryption, protecting data in transit as well.

**Option A** is incorrect because AWS Certificate Manager (ACM) primarily manages SSL/TLS certificates for
securing network connections. While ACM certificates are crucial for encrypting data in transit, they don't
directly encrypt the underlying database or EC2 volumes at rest.

**Option B**, deploying AWS CloudHSM, is overly complex for this scenario. CloudHSM provides dedicated
hardware security modules for key management, offering higher levels of security compliance but at a
significantly increased cost and operational overhead. It's generally reserved for organizations with stringent

regulatory requirements beyond basic encryption at rest. CloudHSM introduces more infrastructure changes
and administrative burden than necessary.

**Option D** is also valid, but less ideal than C. It mentions EBS encryption and RDS encryption with KMS keys.
While EBS encryption is crucial for the EC2 instance itself, the focus of the question is encrypting the RDS
database containing the PII. **Option C** encapsulates the core requirement for RDS encryption while also
providing a mechanism (SSL/TLS) to protect the EC2 instance's data in transit to RDS. **Option D** implies
additional EBS volume management, making it more complex compared to configuring SSL and RDS
encryption at rest.

Therefore, **Option C** offers the most efficient and least disruptive path to encrypting sensitive data at rest for
the RDS database and securing the connection from the EC2 instance, all while leveraging the existing AWS
KMS service. It balances security with ease of implementation, fulfilling the core requirement with minimal
alterations to the infrastructure.
Supporting links:
RDS Encryption: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview. Encryption.html
AWS KMS: https://aws.amazon.com/kms/
SSL/TLS with RDS: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html

---

## Question 839

**Answer:** **C**

**Explanation:**

The correct answer is C. Provision a gateway endpoint for Amazon S3 in the VPC. Update the route tables of
the subnets accordingly.

Here's why:
Problem: The Lambda function in private subnets is experiencing timeouts due to network congestion on the
EC2 NAT instance when uploading data to S3. The goal is to access S3 without going over the internet,
thereby alleviating the strain on the NAT instance.
Solution C: Gateway Endpoint
Mechanism: A gateway endpoint for S3 provides a direct, private path from your VPC to S3, completely
bypassing the internet. It is highly available and scales with the traffic demand.
Implementation: Creating a gateway endpoint involves selecting the S3 service and the route tables you wish

to associate with it. Once the endpoint is created, you need to update the route tables for the subnets where
the Lambda function resides to route traffic destined for S3 through the gateway endpoint.
Benefits:
Avoids Internet: Keeps traffic within the AWS network, improving security and reducing latency.
Scalability: AWS handles the scalability and availability of the endpoint.
Cost-Effective: Gateway endpoints are free to use; you are only charged for the data stored in and
transferred out of S3.

Why other options are incorrect:

**A.** Replace the EC2 NAT instance with an AWS managed NAT gateway: While a NAT Gateway is a better
solution than a NAT Instance, because it is managed and highly available, it does not meet the requirement of
avoiding the internet. The Lambda function would still need to route all traffic through the NAT Gateway to
access S3.

**B.** Increase the size of the EC2 NAT instance in the VPC to a network optimized instance type: While
upgrading the EC2 NAT instance may reduce congestion temporarily, it doesn't eliminate the internet
dependency or the bottleneck of the NAT instance itself. This is not as effective as providing a direct
connection using a gateway endpoint.

**D.** Provision a transit gateway. Place transit gateway attachments in the private subnets where the Lambda
function is running: A transit gateway is an option for connecting multiple VPCs and on-premises networks
but is overkill and more expensive for the simple use case of providing access to S3 from private subnets. It
does not solve the primary issue of reducing internet traffic because routing traffic to S3 through a transit
gateway still involves traffic going through the transit gateway's route table to the S3 service, which isn't
necessarily a private path without additional configurations like VPC endpoints.
Relevant concepts and resources:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
NAT Gateway vs NAT Instance: https://aws.amazon.com/premiumsupport/knowledge-center/vpc-natgateway-instance/

In summary, a gateway endpoint offers the most efficient and cost-effective solution to provide private,
scalable, and reliable access to S3 for the Lambda function without traversing the internet.

---

## Question 840

**Answer:** **B**

**Explanation:**

AWS Global Accelerator is the optimal solution because it's designed to optimize TCP and UDP traffic, making
it ideal for real-time media streaming using RTMP. It uses the AWS global network to route traffic to the
nearest healthy application endpoint, reducing latency and improving connection reliability, crucial for live
broadcasts from geographically dispersed reporters. CloudFront, while a CDN, is primarily for caching static
and dynamic content, and doesn't optimize live streaming ingest in the same way. AWS Client VPN is for
secure access to AWS resources and isn't designed for real-time streaming optimization. EC2 instances with
Elastic IP addresses lack the global network optimization capabilities needed for accelerated TCP
connections. Global Accelerator's Anycast static IPs provide a single entry point for reporters, simplifying the
connection process and facilitating seamless failover. By leveraging the AWS global network backbone,
Global Accelerator minimizes jitter and packet loss, leading to higher quality streams. Therefore, option B
directly addresses the need for accelerated TCP connections and highest quality streams for live broadcasts
from a global network of reporters.
Here are authoritative links for further research:
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
AWS Global Accelerator FAQs: https://aws.amazon.com/global-accelerator/faqs/

---

## Question 841

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most cost-effective solution, along with supporting
information and links:
The core requirement is to retain monthly snapshots of EBS volumes for 7 years with minimal administrative
overhead and cost-effectiveness.

**Option B** is the most suitable because it leverages the EBS Snapshots Archive tier, which is specifically
designed for long-term storage of snapshots that are infrequently accessed. This archive tier offers
significantly lower storage costs compared to the standard EBS snapshot tier, making it the most costeffective option for the 7-year retention requirement. The solution continues the existing daily snapshot
policy for one month, ensuring fast recovery if needed, then moves the monthly snapshot to the archive tier

for long-term compliance. This provides a balance between operational restore needs and regulatory
demands.

**Option A** involves moving the monthly snapshot to Amazon S3 Glacier Deep Archive. While Glacier Deep
Archive offers very low storage costs, restoring data from Glacier is time-consuming and could impact
recovery time objectives (RTO). EBS Snapshots Archive is designed for EBS data, allowing for potentially
faster and easier restores than Glacier when necessary. Furthermore, using S3 would require additional
configuration for managing the backup process, increasing administrative overhead.

**Option C** keeps the monthly snapshots in the standard EBS snapshot tier for 7 years. This option is the most
expensive because the standard tier is designed for frequently accessed snapshots, not long-term archival.
Storing snapshots in the standard tier for 7 years would incur significantly higher storage costs compared to
using the archive tier.

**Option D** uses EBS Direct APIs and stores the snapshots in Amazon S3 Infrequent Access (IA). While S3 IA is
cheaper than standard S3, it is still more expensive than EBS Snapshots Archive. Moreover, using EBS Direct
APIs would require developing and maintaining custom code for managing snapshots, increasing
administrative overhead. EBS Direct APIs are useful in niche cases, but here, it is an unnecessary
complication.
By utilizing the EBS Snapshots Archive tier, option B achieves the required 7-year retention period at the
lowest possible cost while minimizing administrative effort. It also integrates seamlessly with the existing
EBS snapshot policy, minimizing disruption to the current backup process.
Key Concepts & Links:
EBS Snapshots Archive: A low-cost storage tier within EBS Snapshots, ideal for long-term retention and
compliance. https://aws.amazon.com/ebs/snapshots/archive/
EBS Snapshots: Point-in-time backups of EBS volumes. https://aws.amazon.com/ebs/snapshots/
Cost Optimization: Selecting the right storage tier based on access frequency to minimize costs.
Glacier Deep Archive: A low-cost storage service for archiving data that is rarely accessed.
https://aws.amazon.com/glacier/deep-archive/

---

## Question 842

**Answer:** **A**

**Explanation:**

The question asks for the most cost-effective AWS-managed solution to replicate data from an EFS file
system to another Region.

**Option A**, using the EFS-to-EFS backup solution, is the most cost-effective because it leverages a managed
service specifically designed for replicating EFS data across regions. This eliminates the need for custom
scripting or infrastructure management. EFS Replication (part of EFS Backup and Recovery) automates the
process, handling incremental updates and data consistency.

**Option B** involves copying data to S3 and then using S3 Cross-Region Replication. This requires additional S3
storage costs and the initial overhead of transferring data to S3. While S3 replication is efficient, the initial
step of copying to S3 adds unnecessary cost and complexity compared to the direct EFS-to-EFS replication.

**Option C**, creating a VPC peer and using rsync, necessitates managing the rsync process and the cross-region
VPC peering connection. It requires manual configuration, monitoring, and potential troubleshooting. This
adds operational overhead and costs associated with maintaining the infrastructure and the script. It is less
managed and more prone to failure than a dedicated EFS replication service.

**Option D**, using AWS Backup, is also a viable solution, but it primarily focuses on data backup and recovery,
not continuous replication. AWS Backup creates point-in-time snapshots, which is valuable for disaster
recovery, but may not offer the same level of continuous replication as EFS Replication. Moreover, frequent
backups can lead to increased storage costs. EFS-to-EFS replication is optimized for replicating data, making
it more cost-effective in this scenario.

Therefore, EFS-to-EFS replication is the most cost-effective and managed solution for replicating data
between EFS file systems across regions.
Refer to these links for more information:
Amazon EFS Replication: Backup and recovery

---

## Question 843

**Answer:** **C**

**Explanation:**

The best solution for a highly available and scalable e-commerce application with minimal administrative
overhead involves leveraging managed services like Amazon RDS with Multi-AZ deployment and EC2
instances behind an Auto Scaling group and Application Load Balancer.

**Option C** is correct because it suggests using EC2 instances in an Auto Scaling group across multiple
Availability Zones (AZs) behind an Application Load Balancer (ALB). The Auto Scaling group ensures the web
application can handle increased traffic by automatically scaling the number of instances based on demand.
The ALB distributes traffic across these instances, providing high availability.
For the database, it proposes migrating to Amazon RDS with Multi-AZ deployment. RDS Multi-AZ provides
high availability by synchronously replicating data to a standby instance in a different AZ. In case of a failure
in the primary AZ, RDS automatically fails over to the standby instance, minimizing downtime. RDS handles
much of the administrative overhead associated with managing a database, such as patching, backups, and
failover.

**Option A** is less ideal because using read replicas for the database is not the most straightforward way to
achieve high availability for the write operations required by the e-commerce application. Read replicas
primarily improve read performance and are not designed for automatic failover in the same way as Multi-AZ.

**Option B** is flawed because using EC2 instances across separate AWS Regions for the database adds
significant complexity to database replication and management, increasing administrative overhead. Regionbased failover is more complex than AZ-based failover.

**Option D** involves managing SQL Server on EC2 instances across multiple AZs which requires manual setup
and management of database replication, backups, patching, and failover. This introduces significant
administrative overhead, making it unsuitable for the "least administrative overhead" requirement.

In summary, option C achieves high availability and scalability with minimal administrative overhead by
utilizing managed services like Auto Scaling, ALB, and RDS Multi-AZ.

---

## Question 844

**Answer:** **D**

**Explanation:**

The correct answer is D. AWS Storage Gateway. Here's why:
AWS Storage Gateway facilitates connecting on-premises applications to AWS storage services. Specifically,
the File Gateway configuration allows you to store files as objects in Amazon S3 while maintaining SMB

access from the on-premises application. Because the question states that the application development team
has no time to make modifications to the code, a solution that requires them to implement the copy/move files
(such as EFS) isn't a suitable solution.
Storage Gateway's File Gateway addresses the key requirement of copying files to AWS without modifying
the application code. The application continues to write files to the SMB file share, and the File Gateway
seamlessly uploads them to S3 in the background.
Amazon EFS (A) is a fully managed NFS file system for use with AWS cloud services and on-premises
resources. While EFS can be mounted on-premises with Direct Connect or VPN, it would require application
code changes to write directly to the EFS mount point instead of the existing SMB share. This option is ruled
out by the question's constraints.
Amazon FSx for Windows File Server (B) provides fully managed, native Microsoft Windows file systems. It
could be used, but it necessitates a more complex migration strategy, which is not needed for simply copying
the files to AWS for archival. It's typically used for migrating entire Windows file servers to the cloud.
AWS Snowball (C) is suitable for large-scale data migration, but it's a one-time transfer solution. The question
states the application generates hundreds of files daily, indicating an ongoing need for replication, rendering
Snowball impractical for this use case.

Therefore, AWS Storage Gateway - File Gateway is the best option because it provides the needed bridge
between the on-premises SMB file share and S3, automatically copies files, and requires no application code
changes.
For further research:
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
File Gateway documentation:
https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html

---

## Question 845

**Answer:** **C**

**Explanation:**

The most operationally efficient solution is to use AWS Lambda and Amazon SNS (**Option C**). Here's why:

Serverless Architecture: Lambda offers a serverless environment, eliminating the need to manage EC2
instances (as in Options A and B). This reduces operational overhead related to patching, scaling, and
infrastructure maintenance.
Scheduled Execution: Lambda functions can be scheduled to run using Amazon CloudWatch Events (now
Amazon EventBridge), providing a built-in mechanism for daily execution without relying on cron jobs on EC2
instances.
Scalability and Cost-Effectiveness: Lambda automatically scales based on demand. For only 15 employees,
the cost of running Lambda will likely be significantly lower than maintaining a dedicated EC2 instance. You
only pay for the compute time you consume.
Direct Email Integration: SNS can directly send email messages, simplifying the workflow. SQS (Options B
and D) introduces an unnecessary queue when a direct notification mechanism (SNS) is available. SQS is
beneficial when decoupling components and managing message delivery, but that's not a clear requirement
here.
DynamoDB Scan Efficiency: Although scanning a DynamoDB table isn't ideal for larger datasets, with only 15
records, the scan operation will be relatively quick and cost-effective. Consider optimizing DynamoDB query if
the employee count significantly increases in the future.
Reduced Complexity: Combining Lambda, CloudWatch Events, and SNS results in a simpler and easier-tomanage architecture compared to solutions involving EC2 instances and cron jobs.
In Summary: **Option C** leverages serverless technologies to minimize operational overhead, automate the
anniversary notification process, and optimize costs for a small number of employees.

---

## Question 846

**Answer:** **B**

**Explanation:**

The correct answer is B. Create a recurring scheduled action to scale up the Auto Scaling group before the
expected period of peak demand.

Here's a detailed justification:
The requirement is to proactively increase capacity before the expected traffic spike to minimize performance
impact. Scheduled scaling is the ideal solution for this because the company knows when the traffic increase
will occur (during the holiday). This allows them to schedule an Auto Scaling group size increase ahead of
time.

**Option B** directly addresses proactive scaling. Scheduled actions allow you to configure the Auto Scaling
group to increase its desired capacity at a specific time and date, or on a recurring schedule. This means EC2
instances will be launched and ready to serve traffic before the actual spike begins.

**Option A** (CloudWatch alarm based on CPU utilization) is a reactive scaling method. While useful, it only scales
up after the CPU utilization reaches 90%. This means users may experience performance issues before the
scaling happens. This is not proactive, and it doesn't address the need to prepare before the traffic spike.

**Option C** (Increasing minimum and maximum instances) only sets the boundaries for scaling, it doesn't
actually trigger the scaling event. It is possible the group will not scale up to the maximum specified and stay
between the old limits. Also, changing the minimum number of instances alone does not guarantee instances
will be ready to handle peak load proactively. You would still need a mechanism (like scheduled actions or
alarms) to trigger scaling.

**Option D** (SNS notification of instance launch events) is a monitoring mechanism, not a scaling strategy. It
doesn't trigger scaling; it just provides notification about events that have already occurred. This is useful for
auditing and troubleshooting but doesn't solve the proactive scaling requirement.

Therefore, scheduled scaling (**Option B**) is the only solution that proactively increases the capacity of the Auto
Scaling group before the holiday traffic spike, ensuring minimal performance impact on users.
For further research, refer to the AWS documentation on scheduled scaling for Auto Scaling groups:
AWS Documentation - Scheduled Scaling

---

## Question 847

**Answer:** **A**

**Explanation:**

The most efficient solution for password rotation in Amazon RDS for PostgreSQL, minimizing operational
overhead, is to utilize AWS Secrets Manager with automatic rotation enabled.

Here's why:
AWS Secrets Manager is specifically designed for managing secrets like database credentials. It offers built-

in functionality for rotating these secrets automatically. This eliminates the need for custom scripting or
complex configurations.
Automatic Rotation: Secrets Manager's automatic rotation feature directly integrates with RDS for
PostgreSQL. You configure a rotation schedule, and Secrets Manager handles the process of generating a
new password, updating it in the database, and updating the stored secret, all without manual intervention.
Reduced Operational Overhead: This approach drastically reduces the operational burden. You avoid writing
and maintaining custom Lambda functions (as in option C) or manually rotating passwords.
Security Best Practices: Secrets Manager adheres to security best practices by encrypting secrets at rest
and in transit.
Parameter Store (**Option B** and C): While Systems Manager Parameter Store can store secrets, it lacks native
automatic rotation capabilities for RDS databases. **Option C** requires additional coding and maintenance of a
Lambda function.
AWS KMS (**Option D**): KMS is for encrypting data, not managing secrets and rotating them automatically. It's
not designed for password management.
Cost-Effectiveness: Secrets Manager's pricing is based on the number of secrets stored and API calls. The
minimal operational effort often translates to lower overall costs compared to building and maintaining
custom solutions.
In contrast, options B, C, and D involve manual configuration, scripting, or using services not directly intended
for secret rotation, leading to higher operational overhead and potential for errors. By leveraging the built-in
features of AWS Secrets Manager, the company can achieve secure and automated password rotation for its
RDS for PostgreSQL databases with minimal administrative effort.

---

## Question 848

**Answer:** **B**

**Explanation:**

The correct answer is B because it directly addresses all the requirements in the most cost-effective manner.
The company wants to use the BYOL model for Oracle, and both RDS for Oracle and RDS Custom for Oracle
support this. However, the key differentiator is the need for privileged access to support third-party database
features.
Amazon RDS for Oracle (option A) is a managed service, which means AWS handles the underlying
infrastructure and operating system. While convenient, this limits the level of control and access a user has.
Specifically, privileged access required for the third-party features is not available in standard RDS Oracle
instances. Replacing these features with AWS Lambda would involve significant application refactoring,
increasing cost and complexity.
Amazon DynamoDB (option C) is a NoSQL database, and migrating an Oracle database using DMS would
necessitate a complete application rewrite, making it a complex and costly solution. It doesn't support BYOL
for Oracle licenses.
Amazon RDS for PostgreSQL (option D) would also require a database migration using DMS and extensive
code refactoring to remove the Oracle-specific third-party features. This is a significant effort and cost. It
doesn't support BYOL for Oracle licenses.
Amazon RDS Custom for Oracle (option B) is designed to provide database administrators with operating
system and database access. It allows for customized settings, including the ability to install and manage
third-party features that require privileged access. Because it also supports BYOL, this option allows the
company to maintain its licensing model and meets its technical requirements without costly refactoring or a
complete migration to a different database engine. This makes it the most cost-effective solution.
Supporting documentation:
Amazon RDS Custom: https://aws.amazon.com/rds/custom/ - Explains the benefits of customization for
meeting application requirements.
AWS Database Migration Service: https://aws.amazon.com/dms/ - Discusses the service used to migrate
databases to AWS.
Amazon RDS for Oracle: https://aws.amazon.com/rds/oracle/ - Describes the managed Oracle database
service.

---

## Question 849

**Answer:** **B**

**Explanation:**

The correct answer is B. Use AWS Backup to configure and monitor all backups for the services in use.

Here's why:
AWS Backup is a fully managed backup service that centralizes and automates data protection across various
AWS services. It provides a single pane of glass for configuring, managing, and monitoring backups of EC2
instances, EBS volumes, RDS databases, DynamoDB tables, EFS file systems, and other AWS resources. This
directly addresses the university's need to centralize management and automate backups using AWS native
options. https://aws.amazon.com/backup/

**Option A** is incorrect because using third-party software and AWS Storage Gateway introduces unnecessary
complexity and goes against the requirement to use AWS native options. Also, a tape gateway is more
suitable for archiving data rather than for regular backup and restore operations.

**Option C** is incorrect because AWS Config primarily focuses on configuration management and compliance,
not backup. While it can detect configuration changes, it doesn't provide comprehensive backup and recovery
capabilities. Moreover, directly triggering snapshots with Config is not its primary purpose.

**Option D** is incorrect because AWS Systems Manager State Manager is designed for configuration
management and automation of tasks across EC2 instances, not specifically for managing backups of diverse
data sources like RDS and DynamoDB. While it can execute backup scripts, it lacks the centralized backup
management and monitoring capabilities of AWS Backup. It requires writing and maintaining custom scripts,
which the university wants to avoid. AWS Backup offers a managed and centralized solution.

---

## Question 850

**Answer:** **B**

**Explanation:**

The correct answer is B: Use Amazon Neptune to store the data. Use SPARQL to query the data to identify
security risks. Here's why:
The scenario calls for mapping IT infrastructure to identify and enforce security policies. This fundamentally
describes a graph database use case. A graph database excels at representing relationships between entities,
making it ideal for IT infrastructure mapping where resources are interconnected and dependencies are
important for identifying security risks.
Amazon Neptune is a fully managed graph database service. It's designed for storing and querying highly
connected data. SPARQL (SPARQL Protocol and RDF Query Language) is a query language specifically
designed for querying graph databases. It enables efficient traversal and analysis of relationships within the
graph. This allows the security team to quickly identify resources with vulnerabilities or policy violations
based on their relationships with other elements in the infrastructure.
Options A, C, and D are less suitable:

Amazon RDS (Relational Database Service) and Amazon Redshift (Data Warehouse): While you could model
the data in a relational database, querying relationships would involve complex and inefficient JOIN
operations, leading to performance bottlenecks and increased operational overhead. Neither service is
inherently designed for graph-like data or fast relationship traversal.
Amazon DynamoDB (NoSQL Database): DynamoDB is a key-value and document database. While it offers
flexibility, modelling and querying complex relationships is less intuitive and requires more application logic
compared to a graph database. PartiQL, DynamoDB's query language, can perform queries, but it won't be as
efficient as SPARQL for traversing relationships in a highly interconnected IT infrastructure map.
Neptune, with its graph-specific design and SPARQL query capabilities, provides the most efficient and
performant solution with the least operational overhead for mapping and querying IT infrastructure
relationships to identify security risks. The other options require more complex modelling, custom querying,
and result in poorer performance.

---

# Quick Answer Sheet

Question 801: D
Question 802: D
Question 803: A
Question 804: C
Question 805: C
Question 806: B
Question 807: D
Question 808: A
Question 809: B
Question 810: C
Question 811: C
Question 812: C
Question 813: A
Question 814: B
Question 815: D
Question 816: B
Question 817: C
Question 818: A
Question 819: B
Question 820: C
Question 821: C
Question 822: A
Question 823: C
Question 824: C
Question 825: A
Question 826: B
Question 827: C
Question 828: D
Question 829: A
Question 830: B
Question 831: D
Question 832: C
Question 833: C
Question 834: C
Question 835: C
Question 836: B
Question 837: C
Question 838: C
Question 839: C
Question 840: B
Question 841: B
Question 842: A
Question 843: C
Question 844: D
Question 845: C
Question 846: B
Question 847: A
Question 848: B
Question 849: B
Question 850: B
