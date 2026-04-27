# AWS SAA-C03 Practice Test: Questions 901-950

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 901

A company is migrating its workloads to AWS. The company has sensitive and critical data in on-premises
relational databases that run on SQL Server instances.
The company wants to use the AWS Cloud to increase security and reduce operational overhead for the databases.
Which solution will meet these requirements?

**A.** Migrate the databases to Amazon EC2 instances. Use an AWS Key Management Service (AWS KMS) AWS
managed key for encryption.

**B.** Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management
Service (AWS KMS) AWS managed key for encryption.

**C.** Migrate the data to an Amazon S3 bucket. Use Amazon Macie to ensure data security.

**D.** Migrate the databases to an Amazon DynamoDB table. Use Amazon CloudWatch Logs to ensure data
security.

---

## Question 902

A company wants to migrate an application to AWS. The company wants to increase the application's current
availability. The company wants to use AWS WAF in the application's architecture.
Which solution will meet these requirements?

**A.** Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across
two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the
target. Connect a WAF to the ALB.

**B.** Create a cluster placement group that contains multiple Amazon EC2 instances that hosts the application.
Configure an Application Load Balancer and set the EC2 instances as the targets. Connect a WAF to the
placement group.

**C.** Create two Amazon EC2 instances that host the application across two Availability Zones. Configure the EC2
instances as the targets of an Application Load Balancer (ALB). Connect a WAF to the ALB.

**D.** Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across
two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the
target. Connect a WAF to the Auto Scaling group.

---

## Question 903

A company manages a data lake in an Amazon S3 bucket that numerous applications access. The S3 bucket
contains a unique prefix for each application. The company wants to restrict each application to its specific prefix
and to have granular control of the objects under each prefix.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create dedicated S3 access points and access point policies for each application.

**B.** Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket.

**C.** Replicate the objects in the S3 bucket to new S3 buckets for each application. Create replication rules by
prefix.

**D.** Replicate the objects in the S3 bucket to new S3 buckets for each application. Create dedicated S3 access
points for each application.

---

## Question 904

A company has an application that customers use to upload images to an Amazon S3 bucket. Each night, the
company launches an Amazon EC2 Spot Fleet that processes all the images that the company received that day.
The processing for each image takes 2 minutes and requires 512 MB of memory.
A solutions architect needs to change the application to process the images when the images are uploaded.
Which change will meet these requirements MOST cost-effectively?

**A.** Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service
(Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to process
the images.

**B.** Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service
(Amazon SQS) queue. Configure an EC2 Reserved Instance to read the messages from the queue and to
process the images.

**C.** Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service
(Amazon SNS) topic. Configure a container instance in Amazon Elastic Container Service (Amazon ECS) to
subscribe to the topic and to process the images.

**D.** Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service
(Amazon SNS) topic. Configure an AWS Elastic Beanstalk application to subscribe to the topic and to process
the images.

---

## Question 905

A company wants to improve the availability and performance of its hybrid application. The application consists of
a stateful TCP-based workload hosted on Amazon EC2 instances in different AWS Regions and a stateless UDPbased workload hosted on premises.
Which combination of actions should a solutions architect take to improve availability and performance? (Choose
two.)

**A.** Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints.

**B.** Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to
route requests to the load balancers.

**C.** Configure two Application Load Balancers in each Region. The first will route to the EC2 endpoints, and the
second will route to the on-premises endpoints.

**D.** Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network Load
Balancer in each Region that routes to the on-premises endpoints.

**E.** Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure an Application
Load Balancer in each Region that routes to the on-premises endpoints.

---

## Question 906

A company runs a self-managed Microsoft SQL Server on Amazon EC2 instances and Amazon Elastic Block Store
(Amazon EBS). Daily snapshots are taken of the EBS volumes.
Recently, all the company’s EBS snapshots were accidentally deleted while running a snapshot cleaning script
that deletes all expired EBS snapshots. A solutions architect needs to update the architecture to prevent data loss
without retaining EBS snapshots indefinitely.

Which solution will meet these requirements with the LEAST development effort?

**A.** Change the IAM policy of the user to deny EBS snapshot deletion.

**B.** Copy the EBS snapshots to another AWS Region after completing the snapshots daily.

**C.** Create a 7-day EBS snapshot retention rule in Recycle Bin and apply the rule for all snapshots.

**D.** Copy EBS snapshots to Amazon S3 Standard-Infrequent Access (S3 Standard-IA).

---

## Question 907

A company wants to use an AWS CloudFormation stack for its application in a test environment. The company
stores the CloudFormation template in an Amazon S3 bucket that blocks public access. The company wants to
grant CloudFormation access to the template in the S3 bucket based on specific user requests to create the test

environment. The solution must follow security best practices.
Which solution will meet these requirements?

**A.** Create a gateway VPC endpoint for Amazon S3. Configure the CloudFormation stack to use the S3 object
URL.

**B.** Create an Amazon API Gateway REST API that has the S3 bucket as the target. Configure the
CloudFormation stack to use the API Gateway URL.

**C.** Create a presigned URL for the template object. Configure the CloudFormation stack to use the presigned
URL.

**D.** Allow public access to the template object in the S3 bucket. Block the public access after the test
environment is created.

---

## Question 908

A company has applications that run in an organization in AWS Organizations. The company outsources operational
support of the applications. The company needs to provide access for the external support engineers without
compromising security.
The external support engineers need access to the AWS Management Console. The external support engineers
also need operating system access to the company’s fleet ofAmazon EC2 instances that run Amazon Linux in
private subnets.
Which solution will meet these requirements MOST securely?

**A.** Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance
profile with the necessary policy to connect to Systems Manager. Use AWS IAM Identity Center to provide the
external support engineers console access. Use Systems Manager Session Manager to assign the required
permissions.

**B.** Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance
profile with the necessary policy to connect to Systems Manager. Use Systems Manager Session Manager to
provide local IAM user credentials in each AWS account to the external support engineers for console access.

**C.** Confirm that all instances have a security group that allows SSH access only from the external support
engineers’ source IP address ranges. Provide local IAM user credentials in each AWS account to the external
support engineers for console access. Provide each external support engineer an SSH key pair to log in to the
application instances.

**D.** Create a bastion host in a public subnet. Set up the bastion host security group to allow access from only the
external engineers’ IP address ranges. Ensure that all instances have a security group that allows SSH access
from the bastion host. Provide each external support engineer an SSH key pair to log in to the application
instances. Provide local account IAM user credentials to the engineers for console access.

---

## Question 909

A company uses Amazon RDS for PostgreSQL to run its applications in the us-east-1 Region. The company also
uses machine learning (ML) models to forecast annual revenue based on near real-time reports. The reports are
generated by using the same RDS for PostgreSQL database. The database performance slows during business
hours. The company needs to improve database performance.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a cross-Region read replica. Configure the reports to be generated from the read replica.

**B.** Activate Multi-AZ DB instance deployment for RDS for PostgreSQL. Configure the reports to be generated
from the standby database.

**C.** Use AWS Data Migration Service (AWS DMS) to logically replicate data to a new database. Configure the
reports to be generated from the new database.

**D.** Create a read replica in us-east-1. Configure the reports to be generated from the read replica.

---

## Question 910

A company hosts its multi-tier, public web application in the AWS Cloud. The web application runs on Amazon EC2
instances, and its database runs on Amazon RDS. The company is anticipating a large increase in sales during an
upcoming holiday weekend. A solutions architect needs to build a solution to analyze the performance of the web
application with a granularity of no more than 2 minutes.
What should the solutions architect do to meet this requirement?

**A.** Send Amazon CloudWatch logs to Amazon Redshift. Use Amazon QuickS ght to perform further analysis.

**B.** Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform further
analysis.

**C.** Create an AWS Lambda function to fetch EC2 logs from Amazon CloudWatch Logs. Use Amazon CloudWatch
metrics to perform further analysis.

**D.** Send EC2 logs to Amazon S3. Use Amazon Redshift to fetch logs from the S3 bucket to process raw data for
further analysis with Amazon QuickSight.

---

## Question 911

A company runs an application that stores and shares photos. Users upload the photos to an Amazon S3 bucket.
Every day, users upload approximately 150 photos. The company wants to design a solution that creates a
thumbnail of each new photo and stores the thumbnail in a second S3 bucket.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a long-running Amazon
EMR cluster. Configure the script to generate thumbnails for the photos that do not have thumbnails. Configure
the script to upload the thumbnails to the second S3 bucket.

**B.** Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a memory-optimized
Amazon EC2 instance that is always on. Configure the script to generate thumbnails for the photos that do not
have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.

**C.** Configure an S3 event notification to invoke an AWS Lambda function each time a user uploads a new photo
to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to the
second S3 bucket.

**D.** Configure S3 Storage Lens to invoke an AWS Lambda function each time a user uploads a new photo to the
application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to a second
S3 bucket.

---

## Question 912

A company has stored millions of objects across multiple prefixes in an Amazon S3 bucket by using the Amazon
S3 Glacier Deep Archive storage class. The company needs to delete all data older than 3 years except for a
subset of data that must be retained. The company has identified the data that must be retained and wants to
implement a serverless solution.
Which solution will meet these requirements?

**A.** Use S3 Inventory to list all objects. Use the AWS CLI to create a script that runs on an Amazon EC2 instance
that deletes objects from the inventory list.

**B.** Use AWS Batch to delete objects older than 3 years except for the data that must be retained.

**C.** Provision an AWS Glue crawler to query objects older than 3 years. Save the manifest file of old objects.
Create a script to delete objects in the manifest.

**D.** Enable S3 Inventory. Create an AWS Lambda function to filter and delete objects. Invoke the Lambda
function with S3 Batch Operations to delete objects by using the inventory reports.

---

## Question 913

A company is building an application on AWS. The application uses multiple AWS Lambda functions to retrieve
sensitive data from a single Amazon S3 bucket for processing. The company must ensure that only authorized
Lambda functions can access the data. The solution must comply with the principle of least privilege.
Which solution will meet these requirements?

**A.** Grant full S3 bucket access to all Lambda functions through a shared IAM role.

**B.** Configure the Lambda functions to run within a VPC. Configure a bucket policy to grant access based on the
Lambda functions' VPC endpoint IP addresses.

**C.** Create individual IAM roles for each Lambda function. Grant the IAM roles access to the S3 bucket. Assign
each IAM role as the Lambda execution role for its corresponding Lambda function.

**D.** Configure a bucket policy granting access to the Lambda functions based on their function ARNs.

---

## Question 914

A company has developed a non-production application that is composed of multiple microservices for each of the
company's business units. A single development team maintains all the microservices.
The current architecture uses a static web frontend and a Java-based backend that contains the application logic.
The architecture also uses a MySQL database that the company hosts on an Amazon EC2 instance.
The company needs to ensure that the application is secure and available globally.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon CloudFront and AWS Amplify to host the static web frontend. Refactor the microservices to use
AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL
database to an Amazon EC2 Reserved Instance.

**B.** Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use
AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL
database to Amazon RDS for MySQL.

**C.** Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use
AWS Lambda functions that are in a target group behind a Network Load Balancer. Migrate the MySQL
database to Amazon RDS for MySQL.

**D.** Use Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions
that are in a target group behind an Application Load Balancer. Migrate the MySQL database to an Amazon EC2
Reserved Instance.

---

## Question 915

A video game company is deploying a new gaming application to its global users. The company requires a solution
that will provide near real-time reviews and rankings of the players.
A solutions architect must design a solution to provide fast access to the data. The solution must also ensure the
data persists on disks in the event that the company restarts the application.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Store the player data
in the S3 bucket.

**B.** Create Amazon EC2 instances in multiple AWS Regions. Store the player data on the EC2 instances.
Configure Amazon Route 53 with geolocation records to direct users to the closest EC2 instance.

**C.** Deploy an Amazon ElastiCache for Redis duster. Store the player data in the ElastiCache cluster.

**D.** Deploy an Amazon ElastiCache for Memcached duster. Store the player data in the ElastiCache cluster.

---

## Question 916

A company is designing an application on AWS that processes sensitive data. The application stores and processes
financial data for multiple customers.
To meet compliance requirements, the data for each customer must be encrypted separately at rest by using a
secure, centralized key management solution. The company wants to use AWS Key Management Service (AWS
KMS) to implement encryption.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Generate a unique encryption key for each customer. Store the keys in an Amazon S3 bucket. Enable serverside encryption.

**B.** Deploy a hardware security appliance in the AWS environment that securely stores customer-provided
encryption keys. Integrate the security appliance with AWS KMS to encrypt the sensitive data in the
application.

**C.** Create a single AWS KMS key to encrypt all sensitive data across the application.

**D.** Create separate AWS KMS keys for each customer's data that have granular access control and logging
enabled.

---

## Question 917

A company needs to design a resilient web application to process customer orders. The web application must
automatically handle increases in web traffic and application usage without affecting the customer experience or
losing customer orders.
Which solution will meet these requirements?

**A.** Use a NAT gateway to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive, process, and
store processed customer orders. Use an AWS Lambda function to capture and store unprocessed orders.

**B.** Use a Network Load Balancer (NLB) to manage web traffic. Use an Application Load Balancer to receive
customer orders from the NLUse Amazon Redshift with a Multi-AZ deployment to store unprocessed and
processed customer orders.

**C.** Use a Gateway Load Balancer (GWLB) to manage web traffic. Use Amazon Elastic Container Service (Amazon
ECS) to receive and process customer orders. Use the GWLB to capture and store unprocessed orders. Use
Amazon DynamoDB to store processed customer orders.

**D.** Use an Application Load Balancer to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive
and process customer orders. Use Amazon Simple Queue Service (Amazon SQS) to store unprocessed orders.
Use Amazon RDS with a Multi-AZ deployment to store processed customer orders.

---

## Question 918

A company is using AWS DataSync to migrate millions of files from an on-premises system to AWS. The files are 10
KB in size on average.
The company wants to use Amazon S3 for file storage. For the first year after the migration, the files will be
accessed once or twice and must be immediately available. After 1 year, the files must be archived for at least 7
years.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use an archive tool to group the files into large objects. Use DataSync to migrate the objects. Store the
objects in S3 Glacier Instant Retrieval for the first year. Use a lifecycle configuration to transition the files to S3
Glacier Deep Archive after 1 year with a retention period of 7 years.

**B.** Use an archive tool to group the files into large objects. Use DataSync to copy the objects to S3 StandardInfrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Glacier Instant
Retrieval after 1 year with a retention period of 7 years.

**C.** Configure the destination storage class for the files as S3 Glacier Instant Retrieval. Use a lifecycle policy to
transition the files to S3 Glacier Flexible Retrieval after 1 year with a retention period of 7 years.

**D.** Configure a DataSync task to transfer the files to S3 Standard-Infrequent Access (S3 Standard-IA). Use a
lifecycle configuration to transition the files to S3 Deep Archive after 1 year with a retention period of 7 years.

---

## Question 919

A company recently performed a lift and shift migration of its on-premises Oracle database workload to run on an
Amazon EC2 memory optimized Linux instance. The EC2 Linux instance uses a 1 TB Provisioned IOPS SSD (io1) EBS
volume with 64,000 IOPS.
The database storage performance after the migration is slower than the performance of the on-premises
database.
Which solution will improve storage performance?

**A.** Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical Volume
Management (LVM) stripe.

**B.** Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.

**C.** Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.

**D.** Change the EC2 Linux instance to a storage optimized instance type. Do not change the Provisioned IOPS
SSD (io1) EBS volume.

---

## Question 920

A company is migrating from a monolithic architecture for a web application that is hosted on Amazon EC2 to a
serverless microservices architecture. The company wants to use AWS services that support an event-driven,
loosely coupled architecture. The company wants to use the publish/subscribe (pub/sub) pattern.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an
Amazon Simple Queue Service (Amazon SQS) queue. Configure one or more subscribers to read events from
the SQS queue.

**B.** Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an
Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events
from the SNS topic.

**C.** Configure an Amazon API Gateway WebSocket API to write to a data stream in Amazon Kinesis Data Streams

with enhanced fan-out. Configure one or more subscribers to receive events from the data stream.

**D.** Configure an Amazon API Gateway HTTP API to invoke an AWS Lambda function that publishes events to an
Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events
from the topic.

---

## Question 921

A company recently migrated a monolithic application to an Amazon EC2 instance and Amazon RDS. The
application has tightly coupled modules. The existing design of the application gives the application the ability to
run on only a single EC2 instance.
The company has noticed high CPU utilization on the EC2 instance during peak usage times. The high CPU
utilization corresponds to degraded performance on Amazon RDS for read requests. The company wants to reduce
the high CPU utilization and improve read request performance.
Which solution will meet these requirements?

**A.** Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling
group with a minimum and maximum size of 1. Configure an RDS read replica for read requests.

**B.** Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling
group with a minimum and maximum size of 1. Add an RDS read replica and redirect all read/write traffic to the
replica.

**C.** Configure an Auto Scaling group with a minimum size of 1 and maximum size of 2. Resize the RDS DB instance
to an instance type that has more CPU capacity.

**D.** Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling
group with a minimum and maximum size of 1. Resize the RDS DB instance to an instance type that has more
CPU capacity.

---

## Question 922

A company needs to grant a team of developers access to the company's AWS resources. The company must
maintain a high level of security for the resources.
The company requires an access control solution that will prevent unauthorized access to the sensitive data.
Which solution will meet these requirements?

**A.** Share the IAM user credentials for each development team member with the rest of the team to simplify
access management and to streamline development workflows.

**B.** Define IAM roles that have fine-grained permissions based on the principle of least privilege. Assign an IAM
role to each developer.

**C.** Create IAM access keys to grant programmatic access to AWS resources. Allow only developers to interact
with AWS resources through API calls by using the access keys.

**D.** Create an AWS Cognito user pool. Grant developers access to AWS resources by using the user pool.

---

## Question 923

A company hosts a monolithic web application on an Amazon EC2 instance. Application users have recently
reported poor performance at specific times. Analysis of Amazon CloudWatch metrics shows that CPU utilization is

100% during the periods of poor performance.
The company wants to resolve this performance issue and improve application availability.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale vertically.

**B.** Create an Amazon Machine Image (AMI) from the web server. Reference the AMI in a new launch template.

**C.** Create an Auto Scaling group and an Application Load Balancer to scale vertically.

**D.** Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale horizontally.

**E.** Create an Auto Scaling group and an Application Load Balancer to scale horizontally.

---

## Question 924

A company runs all its business applications in the AWS Cloud. The company uses AWS Organizations to manage
multiple AWS accounts.
A solutions architect needs to review all permissions that are granted to IAM users to determine which IAM users

have more permissions than required.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Use Network Access Analyzer to review all access permissions in the company's AWS accounts.

**B.** Create an AWS CloudWatch alarm that activates when an IAM user creates or modifies resources in an AWS
account.

**C.** Use AWS Identity and Access Management (IAM) Access Analyzer to review all the company’s resources and
accounts.

**D.** Use Amazon Inspector to find vulnerabilities in existing IAM policies.

---

## Question 925

A company needs to implement a new data retention policy for regulatory compliance. As part of this policy,
sensitive documents that are stored in an Amazon S3 bucket must be protected from deletion or modification for a

fixed period of time.
Which solution will meet these requirements?

**A.** Activate S3 Object Lock on the required objects and enable governance mode.

**B.** Activate S3 Object Lock on the required objects and enable compliance mode.

**C.** Enable versioning on the S3 bucket. Set a lifecycle policy to delete the objects after a specified period.

**D.** Configure an S3 Lifecycle policy to transition objects to S3 Glacier Flexible Retrieval for the retention
duration.

---

## Question 926

A company runs its customer-facing web application on containers. The workload uses Amazon Elastic Container
Service (Amazon ECS) on AWS Fargate. The web application is resource intensive.
The web application needs to be available 24 hours a day, 7 days a week for customers. The company expects the
application to experience short bursts of high traffic. The workload must be highly available.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an ECS capacity provider with Fargate. Conduct load testing by using a third-party tool. Rightsize
the Fargate tasks in Amazon CloudWatch.

**B.** Configure an ECS capacity provider with Fargate for steady state and Fargate Spot for burst traffic.

**C.** Configure an ECS capacity provider with Fargate Spot for steady state and Fargate for burst traffic.

**D.** Configure an ECS capacity provider with Fargate. Use AWS Compute Optimizer to rightsize the Fargate task.

---

## Question 927

A company is building an application in the AWS Cloud. The application is hosted on Amazon EC2 instances behind
an Application Load Balancer (ALB). The company uses Amazon Route 53 for the DNS.
The company needs a managed solution with proactive engagement to detect against DDoS attacks.
Which solution will meet these requirements?

**A.** Enable AWS Config. Configure an AWS Config managed rule that detects DDoS attacks.

**B.** Enable AWS WAF on the ALCreate an AWS WAF web ACL with rules to detect and prevent DDoS attacks.
Associate the web ACL with the ALB.

**C.** Store the ALB access logs in an Amazon S3 bucket. Configure Amazon GuardDuty to detect and take
automated preventative actions for DDoS attacks.

**D.** Subscribe to AWS Shield Advanced. Configure hosted zones in Route 53. Add ALB resources as protected
resources.

---

## Question 928

A company hosts a video streaming web application in a VPC. The company uses a Network Load Balancer (NLB) to
handle TCP traffic for real-time data processing. There have been unauthorized attempts to access the application.
The company wants to improve application security with minimal architectural change to prevent unauthorized
attempts to access the application.
Which solution will meet these requirements?

**A.** Implement a series of AWS WAF rules directly on the NLB to filter out unauthorized traffic.

**B.** Recreate the NLB with a security group to allow only trusted IP addresses.

**C.** Deploy a second NLB in parallel with the existing NLB configured with a strict IP address allow list.

**D.** Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized access attempts.

---

## Question 929

A healthcare company is developing an AWS Lambda function that publishes notifications to an encrypted Amazon
Simple Notification Service (Amazon SNS) topic. The notifications contain protected health information (PHI).
The SNS topic uses AWS Key Management Service (AWS KMS) customer managed keys for encryption. The
company must ensure that the application has the necessary permissions to publish messages securely to the SNS
topic.
Which combination of steps will meet these requirements? (Choose three.)

**A.** Create a resource policy for the SNS topic that allows the Lambda function to publish messages to the topic.

**B.** Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of customer managed
keys.

**C.** Create a resource policy for the encryption key that the SNS topic uses that has the necessary AWS KMS
permissions.

**D.** Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource policy.

**E.** Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic by using API
Gateway resource policies.

**F.** Configure a Lambda execution role that has the necessary IAM permissions to use a customer managed key
in AWS KMS.

---

## Question 930

A company has an employee web portal. Employees log in to the portal to view payroll details. The company is
developing a new system to give employees the ability to upload scanned documents for reimbursement. The
company runs a program to extract text-based data from the documents and attach the extracted information to
each employee’s reimbursement IDs for processing.
The employee web portal requires 100% uptime. The document extract program runs infrequently throughout the
day on an on-demand basis. The company wants to build a scalable and cost-effective new system that will require
minimal changes to the existing web portal. The company does not want to make any code changes.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Run Amazon EC2 On-Demand Instances in an Auto Scaling group for the web portal. Use an AWS Lambda
function to run the document extract program. Invoke the Lambda function when an employee uploads a new
reimbursement document.

**B.** Run Amazon EC2 Spot Instances in an Auto Scaling group for the web portal. Run the document extract
program on EC2 Spot Instances. Start document extract program instances when an employee uploads a new
reimbursement document.

**C.** Purchase a Savings Plan to run the web portal and the document extract program. Run the web portal and the
document extract program in an Auto Scaling group.

**D.** Create an Amazon S3 bucket to host the web portal. Use Amazon API Gateway and an AWS Lambda function
for the existing functionalities. Use the Lambda function to run the document extract program. Invoke the
Lambda function when the API that is associated with a new document upload is called.

---

## Question 931

A media company has a multi-account AWS environment in the us-east-1 Region. The company has an Amazon
Simple Notification Service (Amazon SNS) topic in a production account that publishes performance metrics. The
company has an AWS Lambda function in an administrator account to process and analyze log data.
The Lambda function that is in the administrator account must be invoked by messages from the SNS topic that is
in the production account when significant metrics are reported.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function.

**B.** Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator account to buffer
messages from the SNS topic that is in the production account. Configure the SQS queue to invoke the Lambda
function.

**C.** Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the topic.

**D.** Use an Amazon EventBridge rule in the production account to capture the SNS topic notifications. Configure
the EventBridge rule to forward notifications to the Lambda function that is in the administrator account.

**E.** Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon Athena to analyze
the metrics from the administrator account.

---

## Question 932

A company is migrating an application from an on-premises location to Amazon Elastic Kubernetes Service
(Amazon EKS). The company must use a custom subnet for pods that are in the company's VPC to comply with
requirements. The company also needs to ensure that the pods can communicate securely within the pods' VPC.
Which solution will meet these requirements?

**A.** Configure AWS Transit Gateway to directly manage custom subnet configurations for the pods in Amazon
EKS.

**B.** Create an AWS Direct Connect connection from the company's on-premises IP address ranges to the EKS
pods.

**C.** Use the Amazon VPC CNI plugin for Kubernetes. Define custom subnets in the VPC cluster for the pods to
use.

**D.** Implement a Kubernetes network policy that has pod anti-affinity rules to restrict pod placement to specific
nodes that are within custom subnets.

---

## Question 933

A company hosts an ecommerce application that stores all data in a single Amazon RDS for MySQL DB instance
that is fully managed by AWS. The company needs to mitigate the risk of a single point of failure.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during the next maintenance
window.

**B.** Migrate the current database to a new Amazon DynamoDB Multi-AZ deployment. Use AWS Database
Migration Service (AWS DMS) with a heterogeneous migration strategy to migrate the current RDS DB instance
to DynamoDB tables.

**C.** Create a new RDS DB instance in a Multi-AZ deployment. Manually restore the data from the existing RDS DB
instance from the most recent snapshot.

**D.** Configure the DB instance in an Amazon EC2 Auto Scaling group with a minimum group size of three. Use
Amazon Route 53 simple routing to distribute requests to all DB instances.

---

## Question 934

A company has multiple Microsoft Windows SMB file servers and Linux NFS file servers for file sharing in an onpremises environment. As part of the company's AWS migration plan, the company wants to consolidate the file
servers in the AWS Cloud.
The company needs a managed AWS storage service that supports both NFS and SMB access. The solution must
be able to share between protocols. The solution must have redundancy at the Availability Zone level.
Which solution will meet these requirements?

**A.** Use Amazon FSx for NetApp ONTAP for storage. Configure multi-protocol access.

**B.** Create two Amazon EC2 instances. Use one EC2 instance for Windows SMB file server access and one EC2
instance for Linux NFS file server access.

**C.** Use Amazon FSx for NetApp ONTAP for SMB access. Use Amazon FSx for Lustre for NFS access.

**D.** Use Amazon S3 storage. Access Amazon S3 through an Amazon S3 File Gateway.

---

## Question 935

A software company needs to upgrade a critical web application. The application currently runs on a single
Amazon EC2 instance that the company hosts in a public subnet. The EC2 instance runs a MySQL database. The
application's DNS records are published in an Amazon Route 53 zone.
A solutions architect must reconfigure the application to be scalable and highly available. The solutions architect
must also reduce MySQL read latency.
Which combination of solutions will meet these requirements? (Choose two.)

**A.** Launch a second EC2 instance in a second AWS Region. Use a Route 53 failover routing policy to redirect the
traffic to the second EC2 instance.

**B.** Create and configure an Auto Scaling group to launch private EC2 instances in multiple Availability Zones.
Add the instances to a target group behind a new Application Load Balancer.

**C.** Migrate the database to an Amazon Aurora MySQL cluster. Create the primary DB instance and reader DB
instance in separate Availability Zones.

**D.** Create and configure an Auto Scaling group to launch private EC2 instances in multiple AWS Regions. Add
the instances to a target group behind a new Application Load Balancer.

**E.** Migrate the database to an Amazon Aurora MySQL cluster with cross-Region read replicas.

---

## Question 936

A company runs thousands of AWS Lambda functions. The company needs a solution to securely store sensitive
information that all the Lambda functions use. The solution must also manage the automatic rotation of the
sensitive information.
Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

**A.** Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive information

**B.** Create a Lambda layer that retrieves sensitive information

**C.** Store sensitive information in AWS Secrets Manager

**D.** Store sensitive information in AWS Systems Manager Parameter Store

**E.** Create a Lambda consumer with dedicated throughput to retrieve sensitive information and create
environmental variables

---

## Question 937

A company has an internal application that runs on Amazon EC2 instances in an Auto Scaling group. The EC2
instances are compute optimized and use Amazon Elastic Block Store (Amazon EBS) volumes.
The company wants to identify cost optimizations across the EC2 instances, the Auto Scaling group, and the EBS
volumes.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create a new AWS Cost and Usage Report. Search the report for cost recommendations for the EC2
instances the Auto Scaling group, and the EBS volumes.

**B.** Create new Amazon CloudWatch billing alerts. Check the alert statuses for cost recommendations for the
EC2 instances, the Auto Scaling group, and the EBS volumes.

**C.** Configure AWS Compute Optimizer for cost recommendations for the EC2 instances, the Auto Scaling group
and the EBS volumes.

**D.** Configure AWS Compute Optimizer for cost recommendations for the EC2 instances. Create a new AWS Cost
and Usage Report. Search the report for cost recommendations for the Auto Scaling group and the EBS
volumes.

---

## Question 938

A company is running a media store across multiple Amazon EC2 instances distributed across multiple Availability

Zones in a single VPC. The company wants a high-performing solution to share data between all the EC2 instances,
and prefers to keep the data within the VPC only.
What should a solutions architect recommend?

**A.** Create an Amazon S3 bucket and call the service APIs from each instance's application

**B.** Create an Amazon S3 bucket and configure all instances to access it as a mounted volume

**C.** Configure an Amazon Elastic Block Store (Amazon EBS) volume and mount it across all instances

**D.** Configure an Amazon Elastic File System (Amazon EFS) file system and mount it across all instances

---

## Question 939

A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing, the company added a
read replica to accommodate extra read-only queries from the company's reporting tool. The read replica CPU
usage was 60% and the primary instance CPU usage was 60%.

After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The primary instance
still has a constant 60% CPU usage. The company wants to rightsize the database and still provide enough
performance for future growth.
Which solution will meet these requirements?

**A.** Delete the read replica Do not make changes to the primary instance

**B.** Resize the read replica to a smaller instance size Do not make changes to the primary instance

**C.** Resize the read replica to a larger instance size Resize the primary instance to a smaller instance size

**D.** Delete the read replica Resize the primary instance to a larger instance

---

## Question 940

A company is migrating its databases to Amazon RDS for PostgreSQL. The company is migrating its applications to
Amazon EC2 instances. The company wants to optimize costs for long-running workloads.
Which solution will meet this requirement MOST cost-effectively?

**A.** Use On-Demand Instances for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year Compute
Savings Plan with the No Upfront option for the EC2 instances.

**B.** Purchase Reserved Instances for a 1 year term with the No Upfront option for the Amazon RDS for
PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the No Upfront option for the EC2
instances.

**C.** Purchase Reserved Instances for a 1 year term with the Partial Upfront option for the Amazon RDS for
PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the Partial Upfront option for the EC2
instances.

**D.** Purchase Reserved Instances for a 3 year term with the All Upfront option for the Amazon RDS for
PostgreSQL workloads. Purchase a 3 year EC2 Instance Savings Plan with the All Upfront option for the EC2
instances.

---

## Question 941

A company is using an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company must ensure that
Kubernetes service accounts in the EKS cluster have secure and granular access to specific AWS resources by
using IAM roles for service accounts (IRSA).
Which combination of solutions will meet these requirements? (Choose two.)

**A.** Create an IAM policy that defines the required permissions Attach the policy directly to the IAM role of the
EKS nodes.

**B.** Implement network policies within the EKS cluster to prevent Kubernetes service accounts from accessing
specific AWS services.

**C.** Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account. Ensure a oneto-one mapping between IAM roles and Kubernetes roles.

**D.** Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts with
the Amazon ResourceName (ARN) of the IAM role.

**E.** Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC)
identity provider.

---

## Question 942

A company regularly uploads confidential data to Amazon S3 buckets for analysis.
The company's security policies mandate that the objects must be encrypted at rest. The company must
automatically rotate the encryption key every year. The company must be able to track key rotation by using AWS
CloudTrail. The company also must minimize costs for the encryption key.
Which solution will meet these requirements?

**A.** Use server-side encryption with customer-provided keys (SSE-C)

**B.** Use server-side encryption with Amazon S3 managed keys (SSE-S3)

**C.** Use server-side encryption with AWS KMS keys (SSE-KMS)

**D.** Use server-side encryption with customer managed AWS KMS keys

---

## Question 943

A company has migrated several applications to AWS in the past 3 months. The company wants to know the
breakdown of costs for each of these applications. The company wants to receive a regular report that includes
this information.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use AWS Budgets to download data for the past 3 months into a .csv file. Look up the desired information.

**B.** Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired
information.

**C.** Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation
tags. Use Cost Explorerto get the desired information.

**D.** Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and
Cost Management console todownload bills for the past 3 months. Look up the desired information.

---

## Question 944

An ecommerce company is preparing to deploy a web application on AWS to ensure continuous service for
customers. The architecture includes a web application that the company hosts on Amazon EC2 instances, a
relational database in Amazon RDS, and static assets that the company stores in Amazon S3.
The company wants to design a robust and resilient architecture for the application.
Which solution will meet these requirements?

**A.** Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in the same
Availability Zone. Use Amazon S3 with versioning enabled to store static assets.

**B.** Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy a Multi-AZ
RDS DB instance. Use Amazon CloudFront to distribute static assets.

**C.** Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in a second
Availability Zone for cross-AZ redundancy. Serve static assets directly from the EC2 instances.

**D.** Use AWS Lambda functions to serve the web application. Use Amazon Aurora Serverless v2 for the database.
Store static assets in Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA).

---

## Question 945

An ecommerce company runs several internal applications in multiple AWS accounts. The company uses AWS
Organizations to manage its AWS accounts.
A security appliance in the company's networking account must inspect interactions between applications across
AWS accounts.
Which solution will meet these requirements?

**A.** Deploy a Network Load Balancer (NLB) in the networking account to send traffic to the security appliance.
Configure the application accounts to send traffic to the NLB by using an interface VPC endpoint in the
application accounts.

**B.** Deploy an Application Load Balancer (ALB) in the application accounts to send traffic directly to the security
appliance.

**C.** Deploy a Gateway Load Balancer (GWLB) in the networking account to send traffic to the security appliance.
Configure the application accounts to send traffic to the GWLB by using an interface GWLB endpoint in the
application accounts.

**D.** Deploy an interface VPC endpoint in the application accounts to send traffic directly to the security
appliance.

---

## Question 946

A company runs its production workload on an Amazon Aurora MySQL DB cluster that includes six Aurora
Replicas. The company wants near-real-time reporting queries from one of its departments to be automatically
distributed across three of the Aurora Replicas. Those three replicas have a different compute and memory
specification from the rest of the DB cluster.
Which solution meets these requirements?

**A.** Create and use a custom endpoint for the workload

**B.** Create a three-node cluster clone and use the reader endpoint

**C.** Use any of the instance endpoints for the selected three nodes

**D.** Use the reader endpoint to automatically distribute the read-only workload

---

## Question 947

A company runs a Node js function on a server in its on-premises data center. The data center stores data in a
PostgreSQL database. The company stores the credentials in a connection string in an environment variable on the
server. The company wants to migrate its application to AWS and to replace the Node.js application server with
AWS Lambda. The company also wants to migrate to Amazon RDS for PostgreSQL and to ensure that the database
credentials are securely managed.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Store the database credentials as a parameter in AWS Systems Manager Parameter Store Configure
Parameter Store to automatically rotate the secrets every 30 days. Update the Lambda function to retrieve the
credentials from the parameter.

**B.** Store the database credentials as a secret in AWS Secrets Manager. Configure Secrets Manager to
automatically rotate the credentials every 30 days. Update the Lambda function to retrieve the credentials
from the secret.

**C.** Store the database credentials as an encrypted Lambda environment variable. Write a custom Lambda
function to rotate the credentials. Schedule the Lambda function to run every 30 days.

**D.** Store the database credentials as a key in AWS Key Management Service (AWS KMS). Configure automatic
rotation for the key. Update the Lambda function to retneve the credentials from the KMS key.

---

## Question 948

A company wants to replicate existing and ongoing data changes from an on-premises Oracle database to Amazon
RDS for Oracle. The amount of data to replicate varies throughout each day. The company wants to use AWS
Database Migration Service (AWS DMS) for data replication. The solution must allocate only the capacity that the
replication instance requires.
Which solution will meet these requirements?

**A.** Configure the AWS DMS replication instance with a Multi-AZ deployment to provision instances across
multiple Availability Zones.

**B.** Create an AWS DMS Serverless replication task to analyze and replicate the data while provisioning the
required capacity.

**C.** Use Amazon EC2 Auto Scaling to scale the size of the AWS DMS replication instance up or down based on the
amount of data toreplicate.

**D.** Provision AWS DMS replication capacity by using Amazon Elastic Container Service (Amazon ECS) with an
AWS Fargate launch type to analyze and replicate the data while provisioning the required capacity.

---

## Question 949

A company has a multi-tier web application. The application's internal service components are deployed on
Amazon EC2 instances. The internal service components need to access third-party software as a service (SaaS)
APIs that are hosted on AWS.
The company needs to provide secure and private connectivity from the application's internal services to the thirdparty SaaS application. The company needs to ensure that there is minimal public internet exposure.
Which solution will meet these requirements?

**A.** Implement an AWS Site-to-Site VPN to establish a secure connection with the third-party SaaS provider.

**B.** Deploy AWS Transit Gateway to manage and route traffic between the application's VPC and the third-party
SaaS provider.

**C.** Configure AWS PrivateLink to allow only outbound traffic from the VPC without enabling the third-party
SaaS provider to establish.

**D.** Use AWS PrivateLink to create a private connection between the application's VPC and the third-party SaaS
provider.

---

## Question 950

A solutions architect needs to connect a company's corporate network to its VPC to allow on-premises access to
its AWS resources. The solution must provide encryption of all traffic between the corporate network and the VPC
at the network layer and the session layer. The solution also must provide security controls to prevent unrestricted
access between AWS and the on-premises systems.
Which solution meets these requirements?

**A.** Configure AWS Direct Connect to connect to the VPC. Configure the VPC route tables to allow and deny
traffic between AWS and on premises as required.

**B.** Create an IAM policy to allow access to the AWS Management Console only from a defined set of corporate
IP addresses. Restrict user access based on job responsibility by using an IAM policy and roles.

**C.** Configure AWS Site-to-Site VPN to connect to the VPConfigure route table entries to direct traffic from on
premises to the VPConfigure instance security groups and network ACLs to allow only required traffic from on
premises.

**D.** Configure AWS Transit Gateway to connect to the VPC. Configure route table entries to direct traffic from on
premises to the VPC. Configure instance security groups and network ACLs to allow only required traffic from
on premises.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 901

**Answer:** **B**

**Explanation:**

The best solution for migrating on-premises SQL Server databases to AWS with increased security and
reduced operational overhead is to use Amazon RDS for SQL Server with Multi-AZ and AWS KMS encryption.

Here's why:
Reduced Operational Overhead: Amazon RDS is a managed database service, which handles tasks like

patching, backups, and infrastructure management, significantly reducing the operational burden compared
to managing databases on EC2 instances.
Security: Using AWS KMS with RDS allows for encryption at rest, protecting sensitive data from unauthorized
access. RDS manages the encryption process, simplifying key management.
High Availability and Disaster Recovery: The Multi-AZ deployment option in RDS provides high availability by
synchronously replicating data to a standby instance in a different Availability Zone. In case of a failure, RDS
automatically fails over to the standby instance, minimizing downtime.
Suitability for Relational Databases: Amazon RDS for SQL Server is designed to support relational database
workloads, ensuring compatibility and performance.

**Option A**, migrating to EC2, increases operational overhead because the company would have to manage the
operating system, database software, backups, patching, and scaling. EC2 doesn't offer the same level of
managed services and automation as RDS. **Option C** is not suitable because S3 is an object storage service,
not a relational database, and Macie is a data discovery and classification service, not a database solution.

**Option D**, migrating to DynamoDB, would require significant application rework, as it is a NoSQL database and
not a relational database. Relational data structures don't translate to NoSQL structures automatically.
CloudWatch Logs, while useful for logging, doesn't provide data security in the context of database storage.
Supporting Links:
Amazon RDS: https://aws.amazon.com/rds/
Amazon RDS for SQL Server: https://aws.amazon.com/rds/sqlserver/
AWS KMS: https://aws.amazon.com/kms/
Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

---

## Question 902

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Availability: Auto Scaling groups across multiple Availability Zones (AZs) ensure high availability. If one AZ
fails, the application continues to run in the other AZ. This is a fundamental principle of fault tolerance in
cloud architecture.
Load Balancing: An Application Load Balancer (ALB) distributes incoming traffic across multiple EC2
instances, improving performance and availability. The ALB acts as a single point of contact for the

application, routing requests to healthy instances.
WAF Protection: AWS WAF (Web Application Firewall) protects web applications from common web exploits
and bots. It can be connected to an ALB to filter malicious traffic before it reaches the EC2 instances.
Auto Scaling Group as Target: Setting the Auto Scaling group as the target for the ALB dynamically registers
and deregisters instances as they are launched or terminated by the Auto Scaling group, automating the load
balancing configuration.
Let's analyze why the other options are not ideal:

**B:** Placement groups are primarily for low-latency network performance between instances, not specifically
for high availability or integrating with WAF. WAF cannot be directly connected to a placement group.

**C:** Using only two EC2 instances provides less resilience compared to an Auto Scaling group. If one instance
fails, the application's capacity is halved. Auto Scaling provides automatic scaling and self-healing
capabilities.

**D:** You cannot directly attach a WAF to an Auto Scaling group. The WAF must be attached to a supported
resource like an Application Load Balancer or API Gateway.

In summary, option A provides the most robust solution for achieving high availability, load balancing, and
WAF protection by utilizing Auto Scaling groups across multiple Availability Zones, an Application Load
Balancer, and attaching the WAF to the ALB.
Here are some authoritative links for further research:
AWS Auto Scaling: https://aws.amazon.com/autoscaling/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
AWS WAF: https://aws.amazon.com/waf/
High Availability Architecture: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/designfor-high-availability.html

---

## Question 903

**Answer:** **B**

**Explanation:**

The provided answer "B" (Create an S3 Batch Operations job to set the ACL permissions for each object in the
S3 bucket) is incorrect and involves significant operational overhead.
Here's why the other option (A) is the better solution, and a detailed explanation:
Correct Answer: A. Create dedicated S3 access points and access point policies for each application.
Justification:

1. S3 Access Points: S3 Access Points are named network endpoints that are attached to a bucket and
can be used to manage data access for shared datasets. They simplify the management of data
access at scale for applications using shared S3 buckets. Each access point has a unique hostname
and associated access policy. https://aws.amazon.com/s3/features/access-points/

2. Granular Control: Access Point policies are written using IAM policy language. You can use them to
grant specific permissions to applications accessing the bucket through the access point. In this
scenario, each application gets its own access point, and the access point policy restricts access to
its designated prefix.

3. Least Operational Overhead: Creating access points and configuring policies is a straightforward
process. It centralizes access management and avoids the need to modify permissions on individual
objects, which is a much more complex and time-consuming task, especially as the data lake grows.

4. Scalability: Access points scale well as the number of applications increases. Adding a new
application involves creating a new access point and defining its policy, which is a relatively simple
operation.

5. Security Best Practices: Access Points promote the principle of least privilege by granting
applications only the necessary permissions to access the specific data they need.
Why the other options are less suitable:

**B.** S3 Batch Operations and ACLs: While S3 Batch Operations can modify ACLs, it's a much more
cumbersome and less scalable solution than using Access Points. It requires creating and running a Batch
Operations job every time you need to update permissions, which introduces unnecessary operational
overhead. ACLs are also a legacy access control mechanism and are less flexible and harder to manage than
IAM policies.
C & D. Replicating to new buckets: Replicating data to multiple buckets for each application introduces
significant operational overhead and storage costs. Data replication can also lead to data consistency issues
and adds complexity to the overall architecture. Creating access points on top of replicated buckets (Option
D) doesn't reduce the replication overhead.

In summary, S3 Access Points provide the most efficient and scalable solution for restricting applications to
specific prefixes in an S3 bucket with granular access control. They minimize operational overhead by
centralizing access management and leveraging IAM policies for fine-grained permissions.

---

## Question 904

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:

**A.** Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service
(Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to
process the images.
Event-Driven Architecture: S3 Event Notifications trigger the image processing pipeline immediately upon
upload, enabling real-time processing as required. This avoids the nightly batch processing approach.
AWS Lambda for Scalable Processing: Lambda functions offer a serverless compute environment perfectly
suited for handling individual image processing tasks. They scale automatically based on the number of
messages in the SQS queue, ensuring efficient resource utilization. You only pay for the compute time
consumed while processing the image, which is cost-effective for event-driven workloads.
Amazon SQS for Decoupling: SQS acts as a buffer between S3 and Lambda, decoupling the image upload
process from the processing logic. This prevents the application from being affected if the image processing
fails. SQS ensures that each message is delivered at least once, offering reliability.
Cost Optimization: Lambda's pay-per-use model is highly cost-effective, especially when the processing time
per image is short (2 minutes) and the memory requirement is relatively low (512 MB). You avoid the overhead
of maintaining and paying for EC2 instances that might sit idle for periods of time.
Suitability: With 2 minutes of processing time, lambda is suitable to handle the task.
Why the other options are less suitable:

**B.** EC2 Reserved Instance: While Reserved Instances can be cost-effective for steady workloads, they are
less efficient than Lambda for event-driven processing, especially with fluctuating workloads. EC2 instances
need to be running even if no images are available, costing more.
C & D. Amazon SNS, ECS, and Elastic Beanstalk: While SNS can trigger events, it is better suited for fan-out
scenarios (broadcasting messages to multiple subscribers). In this case, we require each image to be
processed exactly once, which SQS guarantees. ECS and Elastic Beanstalk are more complex to configure
and manage than Lambda for this specific use case, increasing operational overhead. ECS and Elastic
Beanstalk can be cost effective where the processing lasts more than 15 minutes, in such a case lambda won't
be the best option.
Supporting Links:
S3 Event Notifications
AWS Lambda
Amazon SQS

---

## Question 905

**Answer:** **AD**

**Explanation:**

The correct answer is AD because it addresses both the stateful TCP and stateless UDP workload
requirements while enhancing availability and performance across the hybrid environment.

**A.** Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints. AWS Global
Accelerator improves application availability and performance by directing traffic to healthy endpoints based
on endpoint health, geographic proximity, and configured weights. It leverages the AWS global network to
route traffic to the nearest healthy endpoint, reducing latency and improving user experience, especially
beneficial for a hybrid application spread across different regions. Since the EC2 instances are in different
AWS Regions, Global Accelerator is perfect for TCP traffic. https://aws.amazon.com/global-accelerator/

**D.** Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network
Load Balancer in each Region that routes to the on-premises endpoints. Network Load Balancers (NLBs) are
suitable for TCP-based workloads that require high performance and low latency. NLBs can handle millions of
requests per second while maintaining ultra-low latencies. Using NLBs in each region provides redundancy
and handles local traffic efficiently. Also, using NLBs for on-premises UDP traffic ensures high throughput
and the ability to forward traffic directly to the on-premises resources without application-layer processing,
which would be required by an ALB. This is optimal for the stateless UDP traffic. The combined regional NLBs
for on-prem are used as endpoints with the Global Accelerator, providing performance and increased
availability for both TCP and UDP workloads. https://aws.amazon.com/elasticloadbalancing/network-loadbalancer/

Why other options are incorrect:

**B:** CloudFront is primarily for caching static content and improving website performance, not for routing
traffic to dynamic application endpoints in a hybrid setup with varying latency requirements. It does not
efficiently handle stateful TCP connections or stateless UDP connections.

**C:** Configuring Application Load Balancers (ALBs) for on-premises endpoints isn't the most efficient design
for UDP traffic. ALBs work best with HTTP/HTTPS traffic and perform application-layer processing which
introduces overhead for UDP. Using two ALBs per region also adds unnecessary complexity.

**E:** ALBs aren't ideal for on-prem UDP traffic because they are designed for HTTP(S) traffic and add
unnecessary overhead with application layer processing. NLB is much more suitable for UDP traffic due to its
low latency and direct forwarding capabilities. Using two different types of load balancers is less consistent
than just using NLBs.

---

## Question 906

**Answer:** **C**

**Explanation:**

The correct answer is C. Create a 7-day EBS snapshot retention rule in Recycle Bin and apply the rule for all
snapshots.

Here's a detailed justification:
The scenario describes a company accidentally deleting all EBS snapshots due to a faulty script. The goal is
to prevent data loss without indefinitely retaining snapshots and minimizing development effort.

**Option C**, using the Recycle Bin, directly addresses the problem. The Recycle Bin for EBS Snapshots allows
you to recover accidentally deleted EBS snapshots within a retention period you configure (in this case, 7
days). This feature is designed precisely for scenarios where accidental deletion occurs. It acts as a safety
net, giving a grace period to restore accidentally deleted snapshots. It avoids the need for complex coding,
scripting, or significant architectural changes. It also avoids indefinite retention by allowing snapshots to be
permanently deleted after the retention period (7 days). This option has minimal development effort, as it
involves configuring a retention rule in the Recycle Bin and applying it to the relevant snapshots.

**Option A**, changing the IAM policy to deny EBS snapshot deletion, is too restrictive. While it would prevent
accidental deletion, it also prevents legitimate deletions when they are truly required. This approach lacks
flexibility and could hinder legitimate operations. IAM policy should be about least privileges, allowing only
what is neccessary for functionality.

**Option B**, copying EBS snapshots to another AWS Region, provides data redundancy but does not directly
address accidental deletion within the primary region. It adds unnecessary complexity and cost compared to
the Recycle Bin. Moreover, it only saves snapshots in the secondary region, which could violate regulatory
requirements.

**Option D**, copying EBS snapshots to Amazon S3 Standard-IA, is also a form of data backup but is not directly
suited for recovering from accidental deletion. It requires more development effort to implement the copy
process and manage the snapshots in S3. Furthermore, it can be costly to retrieve snapshots from S3
Standard-IA, especially when you need to quickly restore a volume from a snapshot, increasing RTO (recovery
time objective).

Therefore, the Recycle Bin provides the simplest, most cost-effective, and most direct solution for preventing
data loss due to accidental EBS snapshot deletion. The recycle bin feature in AWS is a built in, native feature
for addressing accidental deletions, minimizing the need for complex custom solutions.
Relevant AWS Documentation:
Recycle Bin: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html

---

## Question 907

**Answer:** **C**

**Explanation:**

The requirement is to securely grant CloudFormation access to an S3 template without exposing the bucket
publicly and only upon explicit user requests. **Option C**, creating a presigned URL, is the most secure and
appropriate solution.
A presigned URL grants temporary access to a specific object in S3. This URL is generated with specific
permissions and an expiration time. When a user requests to create the test environment, the presigned URL
is generated and provided to the CloudFormation stack. This allows CloudFormation to access the template
for the duration specified in the presigned URL, after which the URL becomes invalid. This adheres to the
principle of least privilege and provides a time-bound, auditable access mechanism.

**Option A**, creating a gateway VPC endpoint for S3, would only provide access to S3 from within the VPC.
While this adds a layer of network security, it doesn't address the requirement of granting access based on
specific user requests and doesn't prevent potential misuse from within the VPC if the service role isn't
correctly scoped.

**Option B**, creating an API Gateway REST API, would introduce unnecessary complexity and cost. It would add
an additional layer between CloudFormation and S3 without providing significant security benefits over a
presigned URL. The API would also need to be secured and managed.

**Option D**, allowing public access temporarily, is a significant security risk and violates the requirement to
follow security best practices. It exposes the template object to anyone on the internet during the time it's
publicly accessible, potentially leaking sensitive information and making the system vulnerable to attacks.

Therefore, **Option C** is the best solution because it directly addresses the requirements for secure, usertriggered access using a temporary and limited scope permission.
Reference:
Using Presigned URLs - Amazon Simple Storage Service

---

## Question 908

**Answer:** **A**

**Explanation:**

Here's why option A is the most secure solution:
IAM Identity Center for Console Access: IAM Identity Center (successor to AWS SSO) is the recommended
way to provide federated access to the AWS Management Console. It allows the external support engineers
to use their existing corporate credentials or a directory managed by AWS, rather than creating individual IAM
users. This centralizes access control and improves security posture. https://aws.amazon.com/iam/identitycenter/
SSM Session Manager for Instance Access: Session Manager, a feature of AWS Systems Manager, enables
secure and auditable instance access without opening inbound SSH ports or managing SSH keys. This
eliminates the attack surface associated with SSH, making it much more secure.
https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
Principle of Least Privilege: By using IAM Identity Center and Session Manager, you can grant the external
support engineers only the necessary permissions to perform their tasks. This follows the principle of least
privilege, minimizing the potential impact of a compromised account.
Auditing and Logging: Session Manager provides detailed auditing and logging of all session activity,
including commands executed. This is crucial for security monitoring and compliance.
Centralized Access Control: IAM Identity Center provides centralized access control for multiple AWS
accounts. Since the applications run across an organization using AWS Organizations, it centralizes
authentication for external support engineers.
Options B, C, and D are less secure because:

**Option B**: Sharing local IAM user credentials is a security risk. If one account is compromised, the attacker
gains access to all resources associated with that account.

**Option C**: Opening SSH ports to specific IP addresses is an improvement over opening them to the world, but
it still introduces a security risk. IP addresses can be spoofed, and SSH is a common attack vector. Also,
managing SSH keys is an overhead.

**Option D**: Bastion hosts provide a single point of entry to your infrastructure, which can be a security risk if
the bastion host is compromised. It also requires managing another EC2 instance. Sharing IAM credentials will
reduce security.

Therefore, **Option A** is the most secure solution because it uses IAM Identity Center for console access and
Session Manager for instance access, avoiding the risks associated with SSH and shared IAM credentials.

---

## Question 909

**Answer:** **D**

**Explanation:**

The correct answer is D. Create a read replica in us-east-1. Configure the reports to be generated from the
read replica.
Justification:
The primary issue is database performance degradation due to report generation competing with application
workloads on the same RDS instance. A read replica allows read-only traffic to be offloaded from the primary
database, thus freeing up resources for the primary application workload and improving performance during
business hours.

**Option D** is the most cost-effective solution because it utilizes a read replica within the same region (us-east1). Creating a read replica in the same region avoids cross-region data transfer costs, which can be significant,
especially for near real-time reporting. Also, network latency between the primary and replica is minimized
when they are located within the same region.

**Option A** is incorrect as cross-region read replicas introduce higher latency due to geographical distance,
which can impact the timeliness of the near real-time reports. Additionally, cross-region data transfer incurs
higher costs compared to intra-region replication.

**Option B**, activating Multi-AZ, primarily focuses on high availability and failover capabilities. While Multi-AZ
improves resilience, it does not offload read traffic in the same way a read replica does. The standby database
in a Multi-AZ setup is primarily for failover purposes and is not designed for consistent read operations.

Therefore, using the standby database for report generation isn't generally supported, and the secondary is
not designed for read operations.

**Option C**, using AWS DMS, is an overkill solution for this scenario. AWS DMS is typically used for migrating
databases to different platforms or for creating data warehouses. Using DMS to replicate data for reporting
adds unnecessary complexity and cost compared to the simplicity and efficiency of a read replica, where
changes are automatically replicated. Read replicas are specifically designed for this purpose and are much
easier to maintain in this case. Because the application is for near real-time reports, logical replication is not a
good approach. The read replica works at the storage layer, but DMS works at the logical layer and can
introduce latency.

---

## Question 910

**Answer:** **B**

**Explanation:**

The requirement is to analyze the web application's performance with a granularity of no more than 2 minutes.

**Option A**: Sending CloudWatch logs to Amazon Redshift and using QuickSight is more suitable for long-term
trend analysis and complex querying across large datasets of log data. It's not the most efficient approach for
real-time or near-real-time monitoring at a 2-minute granularity.

**Option B**: Enabling detailed monitoring on EC2 instances provides metrics at a 1-minute interval. These metrics
are readily available in CloudWatch. This allows for a granular view of EC2 performance, making it suitable for
identifying performance bottlenecks quickly. Using CloudWatch metrics directly fulfills the 2-minute
granularity requirement without complex data transformations.

**Option C**: Using Lambda to fetch EC2 logs from CloudWatch Logs introduces unnecessary complexity and
latency. While CloudWatch Logs contains detailed information, pulling and processing them via Lambda adds
overhead and doesn't directly leverage readily available metrics. Furthermore, CloudWatch metrics directly
provide aggregated data.

**Option D**: Sending EC2 logs to S3 and then using Redshift and QuickSight for analysis is an overly complex
solution for near real-time monitoring. Similar to option A, this is better suited for large-scale, historical log
analysis and reporting, not the immediate performance monitoring required.

Therefore, the most appropriate solution is to enable detailed monitoring on the EC2 instances and use the
available CloudWatch metrics. This approach directly satisfies the need for a 2-minute granularity and avoids
unnecessary complexity.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatchmetrics.htmlhttps://aws.amazon.com/cloudwatch/features/

---

## Question 911

**Answer:** **C**

**Explanation:**

The most cost-effective solution is to use S3 event notifications and Lambda functions. This approach utilizes
a serverless architecture, paying only for the compute time used when thumbnails are actually generated.

**Option C** is superior because S3 event notifications directly trigger a Lambda function upon each photo
upload. This event-driven approach ensures that thumbnails are generated almost immediately after an
upload. The Lambda function performs the image processing and stores the thumbnail in the destination S3
bucket. Since it's triggered by events, it scales automatically with the number of uploads, and there are no
idle costs.

**Option A**, using a long-running EMR cluster, is highly inefficient and expensive. EMR is designed for largescale data processing and analysis, not for real-time image manipulation. Keeping an EMR cluster running
continuously incurs significant costs, even when not actively processing images. The scheduled script adds
further overhead and delay.

**Option B**, using an always-on EC2 instance, is also more costly than Lambda. While potentially faster than
EMR, an always-on EC2 instance incurs costs even when idle. The scheduled script and instance management
add operational overhead.

**Option D**, using S3 Storage Lens, is incorrect because S3 Storage Lens is designed for storage analytics and
visibility, not for triggering actions upon object creation. It does not invoke Lambda functions based on
individual file uploads.

Therefore, option C is the most cost-effective and efficient solution because it leverages the serverless
capabilities of Lambda, ensuring minimal costs and immediate thumbnail generation through S3 event
triggers.

---

## Question 912

**Answer:** **D**

**Explanation:**

The correct answer is D because it offers the most efficient and serverless approach to meet the complex
requirements of filtering and deleting objects within Amazon S3 Glacier Deep Archive. Let's break down why:
Why **Option D** is Correct:
S3 Inventory: This is crucial for generating a comprehensive list of all objects in the S3 bucket, along with
their metadata, including storage class and last modified date. This inventory serves as the foundation for
filtering the data. https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html
AWS Lambda: Lambda functions allow for serverless, event-driven code execution. In this scenario, the
Lambda function can be programmed to filter the S3 Inventory report based on age (older than 3 years) and
any other criteria that identify the data to be retained. It provides the custom logic needed to decide which
objects to delete. https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
S3 Batch Operations: This service enables you to perform large-scale batch operations on S3 objects. It can
be used to invoke the Lambda function on each object identified in the S3 Inventory report. This avoids the
need to manage infrastructure or write complex parallel processing code. S3 Batch Operations seamlessly
integrates with Lambda for object manipulation.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-basics.html
Glacier Deep Archive Consideration: The Glacier Deep Archive storage class necessitates restoration of
objects before they can be deleted. S3 Batch Operations handles that by automatically initiating the
necessary restore operation.
Why Other Options Are Incorrect:

**Option A** (EC2 Script): This is not serverless, requires managing an EC2 instance, and is less scalable than S3
Batch Operations. The CLI-based approach is also slower and less efficient for such a large dataset.

**Option B** (AWS Batch): While AWS Batch can handle large-scale processing, it's generally not designed for
directly managing S3 objects and object deletion. It would require more complex setup and integration
compared to S3 Batch Operations.

**Option C** (AWS Glue Crawler): AWS Glue crawlers are primarily for discovering and cataloging data schemas
in data lakes. It's not the appropriate tool for directly managing and deleting S3 objects based on age. Using it
to generate a manifest file would also add unnecessary complexity. Glue is better suited for cataloging the
data for later analysis or querying, not for deletion purposes.

In summary, **Option D** leverages the power of S3 Inventory, Lambda, and S3 Batch Operations to provide a
fully serverless, scalable, and efficient solution for filtering and deleting objects from S3 Glacier Deep
Archive based on specific criteria. It minimizes operational overhead and maximizes performance, making it
the most suitable answer.

---

## Question 913

**Answer:** **C**

**Explanation:**

The correct answer is C: Create individual IAM roles for each Lambda function. Grant the IAM roles access
to the S3 bucket. Assign each IAM role as the Lambda execution role for its corresponding Lambda
function.

Here's why:
Principle of Least Privilege: This principle dictates granting only the minimum necessary permissions to
perform a task. **Option C** directly adheres to this by providing each Lambda function with only the permissions
it needs to access the S3 bucket through its unique IAM role.
IAM Roles for Lambda: Lambda functions require an IAM role (execution role) that defines the permissions
the function has when accessing AWS resources. This role acts as a security identity for the function.
Granular Access Control: Using individual IAM roles allows fine-grained control. If one Lambda function is
compromised, the attacker only gains access to the resources that function's role is permitted to access,
limiting the blast radius.
S3 Bucket Policies: While S3 bucket policies can grant access, directly associating roles to Lambda functions
is considered best practice because it scales well with many Lambdas.

Why other options are incorrect:

**A:** Grant full S3 bucket access to all Lambda functions through a shared IAM role. This violates the principle
of least privilege. All Lambda functions have excessive permissions, increasing the risk if one function is
compromised.

**B:** Configure the Lambda functions to run within a VPC. Configure a bucket policy to grant access based on
the Lambda functions' VPC endpoint IP addresses. Lambda functions run in an AWS managed network. VPC
Endpoints can be used, but this adds unnecessary complexity and cost for the described scenario. Moreover,
Lambda function IP addresses can change, making IP-based policies unreliable.
This approach is more complex than using individual IAM roles.
Maintaining VPC endpoint IP addresses in the bucket policy would be an ongoing operational burden.

---

## Question 914

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
Static Web Frontend: CloudFront combined with S3 offers a highly scalable, globally distributed, and costeffective solution for hosting static content. S3 provides durable object storage, and CloudFront caches the
content at edge locations for low latency access worldwide. This approach minimizes operational overhead
compared to managing servers.
Microservices Refactoring: Refactoring the Java-based backend microservices into Lambda functions offers
several benefits:
Serverless: Lambda eliminates the need to manage servers, patching, and scaling. AWS handles the
underlying infrastructure.
Scalability: Lambda automatically scales based on demand, ensuring high availability.
Cost Optimization: You only pay for the compute time consumed by the functions.
API Gateway: API Gateway acts as a front door for the Lambda functions, enabling secure and managed
access to the microservices. It handles authentication, authorization, rate limiting, and API versioning.
Database Migration: Migrating the MySQL database from an EC2 instance to Amazon RDS for MySQL
provides a managed database service. This shift offloads database administration tasks such as patching,
backups, and scaling to AWS. RDS offers high availability options (Multi-AZ) and simplifies the database
management process, significantly reducing operational overhead.
Alternatives A and D are incorrect because they suggest using EC2 Reserved Instances for the database.
While Reserved Instances can provide cost savings, managing the database on EC2 still requires significant

operational overhead. **Option C** is less ideal for routing Lambda functions using a Network Load Balancer. API
Gateway provides more fine-grained control over API access and management for Lambda functions.

---

## Question 915

**Answer:** **C**

**Explanation:**

The correct answer is C. Deploy an Amazon ElastiCache for Redis cluster. Store the player data in the
ElastiCache cluster.

Here's a detailed justification:
The core requirement is fast access to near real-time data (reviews and rankings) for a global user base, with
data persistence. ElastiCache for Redis perfectly fits this scenario because it's an in-memory data store. This
provides extremely low latency reads and writes, which is crucial for real-time applications. Redis also
supports data persistence by periodically writing data to disk (RDB snapshots) or by appending every write
operation to a log file (AOF). This ensures data survival even if the ElastiCache cluster restarts. The cluster
setup distributes the load and improves availability.

**Option A** is not suitable because S3 is object storage, not designed for near real-time data access. The latency
associated with S3 reads/writes is significantly higher than in-memory solutions. CloudFront caching
improves read performance, but the initial request still goes to S3.

**Option B** involves managing EC2 instances, which entails significant operational overhead for patching,
scaling, and ensuring high availability. Furthermore, manually setting up data replication across regions adds
complexity. While Route 53 geolocation improves latency, the underlying EC2 instance setup is complex and
more operationally intensive than a managed service.

**Option D**, ElastiCache for Memcached, is also an in-memory data store, providing low latency. However,
Memcached does not offer built-in data persistence. Since data persistence is a strict requirement,
Memcached is unsuitable. Redis provides both speed and the necessary persistence using RDB and AOF

features.

Therefore, ElastiCache for Redis offers the best combination of low latency, scalability, persistence, and
reduced operational overhead compared to the other options. It's a managed service, simplifying management
tasks.
Further Reading:
Amazon ElastiCache for Redis: https://aws.amazon.com/elasticache/redis/
Redis Persistence: https://redis.io/docs/management/persistence/

---

## Question 916

**Answer:** **D**

**Explanation:**

The correct solution is D: "Create separate AWS KMS keys for each customer's data that have granular
access control and logging enabled."

Here's a detailed justification:
AWS KMS is designed for managing encryption keys securely and centrally. The requirement is to encrypt
data for each customer separately at rest using KMS with minimal operational overhead.

**Option A** is incorrect because storing keys in S3, even with server-side encryption, introduces key
management complexity outside of KMS, increasing operational overhead and potentially compromising
security. It goes against the centralized key management requirement. S3 server-side encryption won't
provide the level of granular access control needed.

**Option B** introduces a hardware security appliance (HSM). While HSMs can be used with KMS (AWS
CloudHSM), they significantly increase operational overhead because they require managing and maintaining
physical hardware within the AWS environment. This contradicts the requirement for minimal operational
overhead.

**Option C** is inadequate for compliance. Using a single KMS key for all customer data violates the requirement
that data for each customer must be encrypted separately. If the single key were compromised, all customer
data would be at risk. It also hinders granular access control as all customers would technically be using the
same key.

**Option D** provides the best solution. Creating a separate KMS key for each customer satisfies the requirement
for individual encryption. KMS automatically handles key generation, storage, and rotation securely. Granular
access control can be implemented using IAM policies to restrict access to each key to only authorized
personnel or services for that specific customer. Enabling logging provides audit trails for key usage, which is
essential for compliance. This approach centralizes key management within AWS KMS, minimizing
operational overhead while meeting security and compliance needs. KMS is designed to scale and manage
many keys effectively. This solution fulfills all given requirements.

---

## Question 917

**Answer:** **D**

**Explanation:**

The correct solution is D, leveraging an Application Load Balancer, EC2 Auto Scaling groups, Amazon SQS,
and Amazon RDS with Multi-AZ deployment for resilience and scalability in a web application processing
customer orders.

Here's why:

1. Application Load Balancer (ALB): ALBs are designed for HTTP/HTTPS traffic and excel at routing
requests based on content, making them ideal for managing web traffic and distributing incoming
customer orders across the application instances.
https://aws.amazon.com/elasticloadbalancing/application-load-balancer/

2. EC2 Auto Scaling Groups: Auto Scaling automatically adjusts the number of EC2 instances based on
demand. By placing the application servers within Auto Scaling groups, the solution can
automatically scale up during traffic surges and scale down during periods of low activity, ensuring
consistent performance and availability. https://aws.amazon.com/autoscaling/

3. Amazon SQS (Simple Queue Service): SQS provides a reliable message queue for asynchronous
communication. Storing unprocessed orders in SQS acts as a buffer during peak loads. This

decoupling allows the web application to quickly acknowledge receipt of the order without needing
to process it immediately. If the processing servers are temporarily unavailable or overloaded, the
messages remain in the queue until they can be successfully processed, preventing data loss and
ensuring eventual consistency. https://aws.amazon.com/sqs/

4. Amazon RDS with Multi-AZ deployment: RDS with Multi-AZ ensures high availability and durability
for the processed customer order data. Multi-AZ automatically provisions and maintains a
synchronous standby database in a different Availability Zone. In the event of a primary database
failure, RDS automatically fails over to the standby, minimizing downtime and data loss. This is crucial
for maintaining the integrity of processed order information.
https://aws.amazon.com/rds/features/multi-az/

Why other options are less suitable:

**A:** NAT Gateway is for outbound internet access, not for managing incoming web traffic. Lambda is useful, but
SQS is better at queuing unprocessed orders for resilience. Storing orders in Lambda directly is not scalable
or durable.

**B:** While NLB is for TCP/UDP, ALB is more suited for web applications, providing advanced routing features.
Redshift is an analytical data warehouse, not an operational database suited for real-time order processing.

**C:** GWLB is for virtual appliances like firewalls, not general web traffic. ECS is fine, but using GWLB to capture
unprocessed orders is an atypical and inefficient usage. DynamoDB is a good choice but the overall
architecture is flawed.

Therefore, solution D offers the most appropriate and robust approach to building a resilient and scalable web
application for customer order processing.

---

## Question 918

**Answer:** **A**

**Explanation:**

The best approach for cost-effectively migrating and archiving millions of small files to S3, with the specified
access patterns and retention, is to archive them into larger objects first and leverage S3 Glacier tiers.
Here's why option A is the most cost-effective:

Grouping Files: Archiving tools (like tar or zip) bundle small files into larger objects. This drastically reduces
the overhead associated with storing millions of individual objects in S3. S3 charges are partly based on the
number of objects stored, so reducing the object count saves money.
Initial Storage Tier (S3 Glacier Instant Retrieval): For the first year, files need to be immediately accessible
(accessed once or twice). S3 Glacier Instant Retrieval is the lowest-cost archive storage class that offers the
lowest latency and millisecond retrieval, making it suitable for occasional, immediate access.
Lifecycle Transition to S3 Glacier Deep Archive: After one year, the files can be moved to S3 Glacier Deep
Archive for long-term storage. Glacier Deep Archive offers the lowest storage cost for data that is rarely
accessed.
Lifecycle Configuration: S3 Lifecycle rules automate the transition between storage classes based on time or
other criteria. This automates the move from Glacier Instant Retrieval to Glacier Deep Archive after the initial
year.
Why other options are less optimal:

**Option B** (S3 Standard-IA initially): S3 Standard-IA is designed for infrequently accessed data but is more
expensive than Glacier Instant Retrieval for archiving. Also, it does not provide cost benefits in the given
access patterns.

**Option C** (S3 Glacier Instant Retrieval to Glacier Flexible Retrieval): Glacier Flexible Retrieval is typically
used for backup and disaster recovery and has retrieval costs. Deep Archive is more cost-effective for the
archival timeframe of 7 years. Storing millions of small files directly without archiving would also be more
expensive.

**Option D** (S3 Standard-IA to Deep Archive): S3 Standard-IA is more expensive than Glacier Instant Retrieval
for archiving. Storing millions of small files directly without archiving would also be more expensive.

---

## Question 919

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the correct solution to improve the Oracle database storage
performance after the lift-and-shift migration:
The core problem is that the database's I/O requirements exceed the current EBS volume's capabilities,
resulting in performance degradation compared to the on-premises setup. While the volume has 64,000 IOPS,
this might not be sufficient for the workload, or the underlying EC2 instance is not fully utilizing it.

**Option A**, adding more io1 EBS volumes and using LVM striping, is the best approach because it provides
increased aggregate IOPS and throughput. LVM striping distributes I/O requests across multiple physical
volumes (EBS volumes in this case), effectively multiplying the available IOPS and throughput. This
parallelization can significantly reduce latency and improve overall database performance. Each io1 volume
has its own independent IOPS capability, and striping combines them.

**Option B** is incorrect because a single io1 volume is limited to a maximum of 64,000 IOPS (as of the SAA-C03
exam time). You can't exceed this limit on a single volume, regardless of the request. AWS documentation
confirms this IOPS limit per volume.

**Option C**, increasing the size of the io1 volume to 2TB, would increase throughput (MB/s). However, since the
problem is the need for more IOPS, simply increasing the volume size won't directly address the bottleneck.
While larger volumes can have higher throughput, they do not circumvent the 64,000 IOPS limit on a single io1
volume.

**Option D**, changing the EC2 instance type to a storage optimized instance, might help to some extent by
providing better networking and EBS optimization. However, it doesn't directly address the primary issue of
insufficient IOPS for the database workload. Storage optimized instances generally provide better
performance for workloads that heavily rely on EBS, but if the EBS volume itself is the bottleneck, changing
the instance type alone won't solve the problem. Moreover, a memory optimized instance is probably already
well suited for an Oracle database. The storage-optimized instance might introduce other constraints relative
to the memory needs of the database.

In summary, **Option A** effectively addresses the performance bottleneck by increasing the overall IOPS
available to the database through LVM striping across multiple io1 volumes. This allows the database to
handle its I/O requirements more efficiently, improving performance to match or exceed the on-premises
environment.

---

## Question 920

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
The problem statement emphasizes a serverless, event-driven, loosely coupled microservices architecture
using the publish/subscribe pattern and prioritizes cost-effectiveness.

**Option D** best fits these criteria:
Amazon API Gateway HTTP API: HTTP APIs are designed for low-cost, low-latency API calls, which is ideal
for a microservices architecture that requires efficient communication. Compared to REST APIs, they offer a
simpler and more cost-effective solution when the full features of REST API are not needed.
AWS Lambda: Lambda provides a serverless compute environment, which aligns with the architectural
requirements. The Lambda function serves as the intermediary between API Gateway and the SNS topic,
enabling event publication.
Amazon SNS: SNS directly implements the publish/subscribe pattern. A Lambda function can publish events
to an SNS topic. Subscribers (e.g., Lambda functions, SQS queues, HTTP endpoints) receive these events
asynchronously, fostering loose coupling.
Cost-Effectiveness: The combination of HTTP API, Lambda, and SNS provides a cost-effective solution due to
pay-per-use pricing models. You only pay for what you use.
Why other options are less ideal:

**A:** Amazon SQS is a queuing service (point-to-point), not a publish/subscribe service. While SQS supports fanout patterns, it's not its primary function and SNS is more optimized for that use case. Using SQS for pub/sub
introduces complexity, management overhead, and potential cost inefficiencies.

**B:** While using a REST API and SNS would work, REST APIs offer more features than are needed here and the
HTTP API offers a lower cost for the same functionality in this case.

**C:** Kinesis Data Streams with enhanced fan-out is designed for high-throughput, real-time data streaming, like
video or IoT data. It's overkill and significantly more expensive for this application. WebSocket APIs are also
specialized for real-time bi-directional communication which is not needed here.

In summary, **Option D** provides the most cost-effective solution using serverless services that naturally
implement the publish/subscribe pattern, promoting loose coupling and efficient communication in a
microservices environment.
Supporting Documentation:
Amazon SNS: https://aws.amazon.com/sns/
AWS Lambda: https://aws.amazon.com/lambda/
Amazon API Gateway: https://aws.amazon.com/api-gateway/
Choosing between HTTP APIs and REST APIs: https://aws.amazon.com/blogs/compute/choosing-betweenapigateway-rest-apis-and-http-apis/

---

## Question 921

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Addressing CPU Utilization on EC2: The primary issue is the high CPU utilization on the EC2 instance.
Increasing the instance size to one with more CPU capacity directly addresses this problem. This provides the
application with more processing power to handle the workload.
Auto Scaling Group Configuration: Configuring an Auto Scaling group with a minimum and maximum size of 1
ensures that exactly one EC2 instance is running at all times. This is crucial because the application is
designed to run on a single EC2 instance, so scaling beyond one instance would break it. The Auto Scaling
group provides the benefit of automatic instance replacement in case of failure, improving availability.
Improving Read Request Performance on RDS: The high CPU utilization on the EC2 instance impacts the
performance of read requests on the RDS database. Creating an RDS read replica and redirecting read
requests to it offloads the read workload from the primary RDS instance. This reduces the load on the primary
database, improving its performance and overall application performance.

Why other options are incorrect:

**B:** Redirecting all read/write traffic to the replica is not correct. RDS Read Replicas are READ ONLY. Write
traffic must go to the primary database instance.

**C:** Resizing the RDS DB instance to an instance type that has more CPU capacity is NOT the best solution. The
RDS performance problems are caused by the read load and can be fixed with an RDS Read Replica. It is not
recommended to modify the minimum and maximum size for the autoscaling group as the application is
tightly coupled and cannot be scaled to more than one instance.

**D:** Resizing the RDS DB instance to an instance type that has more CPU capacity is NOT the best solution as
read replicas are best for read-heavy applications.
Supporting Resources:
Amazon EC2 Instance Types: https://aws.amazon.com/ec2/instance-types/
Amazon EC2 Auto Scaling: https://aws.amazon.com/autoscaling/

Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html

---

## Question 922

**Answer:** **B**

**Explanation:**

The correct answer is B: Define IAM roles that have fine-grained permissions based on the principle of least
privilege. Assign an IAM role to each developer. This solution adheres to security best practices by employing
the principle of least privilege and using IAM roles, which are integral for secure access control in AWS.
Here's why other options are incorrect:

**A:** Sharing IAM user credentials is a severe security risk. It violates the principle of least privilege and makes
auditing impossible since actions cannot be attributed to a specific user.

**C:** While IAM access keys grant programmatic access, they are long-term credentials that, if compromised,
can lead to unauthorized access. It's preferable to use IAM roles which are short-term credentials assumed by
entities. Furthermore, managing access at a user-by-user access key level is less scalable and maintainable
than using IAM roles.

**D:** AWS Cognito user pools are primarily designed for managing user authentication and authorization for web
and mobile applications. While Cognito can integrate with IAM to grant access to AWS resources, it
introduces unnecessary complexity for internal team access, which is better handled directly by IAM.
IAM roles provide temporary credentials and can be assigned fine-grained permissions, ensuring that
developers only have access to the specific resources they need to perform their tasks. By following the
principle of least privilege, you minimize the potential impact of any security breaches or accidental
misconfigurations. This approach improves security posture and simplifies access management by
centralizing permissions in IAM.
For further reading, refer to the AWS IAM documentation:
IAM Roles
Security best practices in IAM

---

## Question 923

**Answer:** **BE**

**Explanation:**

The question asks for the most cost-effective solution to address performance issues (100% CPU utilization)
and improve availability for a monolithic web application on a single EC2 instance. The key is to scale
effectively and cost-efficiently.

**Option B** is crucial because creating an AMI from the current server captures the application's state and
configuration. This AMI serves as the base for launching new instances in an Auto Scaling group. Without an
AMI, recreating the application environment on each new instance would be complex and time-consuming.

**Option E** directly addresses both performance and availability. An Auto Scaling group automatically scales
the number of EC2 instances based on demand, reducing CPU utilization by distributing the workload across
multiple servers (horizontal scaling). The Application Load Balancer (ALB) distributes incoming traffic evenly
across these instances, ensuring no single instance is overwhelmed and improving fault tolerance. If one
instance fails, the ALB directs traffic to healthy instances, maintaining application availability. This is more
cost-effective than vertical scaling as it only uses resources when needed.
Options A and D are not ideal because AWS Compute Optimizer's recommendations would suggest instance
types to scale the EC2 instance vertically. While vertical scaling can address CPU utilization, it represents a
single point of failure and does not improve availability. Also, vertical scaling has limitations, reaching a point
where further upgrades become extremely expensive and may not fully resolve the problem.

**Option C** suggests creating an Auto Scaling group and an ALB to scale vertically. This is incorrect, as Auto
Scaling groups and ALBs are inherently used for horizontal scaling. Vertical scaling refers to increasing the
resources (CPU, memory) of a single instance.

Therefore, the combination of creating an AMI (B) and using an Auto Scaling group with an ALB for horizontal
scaling (E) provides the most cost-effective and reliable solution for improving application performance and
availability in this scenario.

---

## Question 924

**Answer:** **C**

**Explanation:**

The correct answer is C. Use AWS Identity and Access Management (IAM) Access Analyzer to review all the
company’s resources and accounts.

Here's a detailed justification:
IAM Access Analyzer is a feature of AWS IAM designed to identify resource access granted to principals
outside of your AWS account or organization. It helps you refine your permissions and implement the principle
of least privilege by analyzing resource-based policies and IAM policies. Access Analyzer continuously
monitors your AWS environment and generates findings when it detects resource access that you may not
have intended.
Here's why the other options are less suitable:

**A.** Use Network Access Analyzer to review all access permissions in the company's AWS accounts: Network
Access Analyzer focuses on network reachability between resources, not on IAM permissions granted to
users. It identifies unintended network access to your AWS resources.

**B.** Create an AWS CloudWatch alarm that activates when an IAM user creates or modifies resources in an
AWS account: While CloudWatch can monitor actions taken by IAM users, it wouldn't provide a
comprehensive review of granted permissions. It would only alert you to specific actions, requiring significant
manual effort to identify over-permissioned users. Moreover, setting up and maintaining such alarms for every
potential resource creation/modification across multiple accounts adds significant administrative overhead.

**D.** Use Amazon Inspector to find vulnerabilities in existing IAM policies: Amazon Inspector is primarily a
vulnerability management service that assesses EC2 instances and container images for security
vulnerabilities. While it might provide some insights related to security best practices, it's not designed to
analyze IAM permissions or identify users with excessive privileges.
IAM Access Analyzer directly addresses the requirement of reviewing permissions and identifying users with
more permissions than required with the least administrative overhead because it automates the analysis of
policies and identifies potential risks based on external access. This makes it a far more efficient and
effective solution compared to the other options.

---

## Question 925

**Answer:** **B**

**Explanation:**

The correct answer is B. Activate S3 Object Lock on the required objects and enable compliance mode.

Here's a detailed justification:
The requirement is to protect sensitive documents in an S3 bucket from deletion or modification for a fixed
period to meet regulatory compliance. S3 Object Lock directly addresses this need by making objects
immutable. This means that once an object is locked, it cannot be deleted or overwritten until the lock expires.
S3 Object Lock has two modes: governance mode and compliance mode. Governance mode allows users with
specific IAM permissions to override the retention settings, offering flexibility but potentially compromising
strict compliance. Compliance mode, on the other hand, provides the strongest level of protection. Once an
object is locked in compliance mode, its retention settings cannot be altered by any user, including the root
user. This ensures that the objects remain protected for the entire retention period, satisfying the regulatory
requirement of preventing deletion or modification.

**Option A**, using governance mode, is less secure as authorized users could potentially bypass the retention
policy. **Option C**, enabling versioning and a lifecycle policy, is not suitable because versioning doesn't prevent
deletion of all versions. A user with the necessary permissions could delete all versions, effectively removing
the object. Also, lifecycle policies automate the deletion of objects. **Option D**, transitioning objects to S3
Glacier Flexible Retrieval, focuses on cost optimization and long-term archiving rather than preventing
modification or deletion during a specific retention period. Glacier storage doesn't inherently offer the
immutability provided by Object Lock.

Therefore, activating S3 Object Lock in compliance mode is the only option that fully guarantees the
immutability of objects to meet regulatory compliance, preventing unauthorized deletion or modification for
the required duration.
Here are authoritative links for further research:
AWS S3 Object Lock: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html
AWS S3 Versioning: https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html
AWS S3 Lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
AWS S3 Glacier: https://aws.amazon.com/glacier/

---

## Question 926

**Answer:** **B**

**Explanation:**

The most cost-effective and highly available solution is B. Configure an ECS capacity provider with Fargate
for steady state and Fargate Spot for burst traffic.

Here's why:
Fargate for Steady State: Fargate provides serverless compute for containers, eliminating the need to
manage EC2 instances. Using Fargate for the consistent, base load ensures the application is always available
(24/7) without the overhead of instance management.
Fargate Spot for Burst Traffic: Fargate Spot provides significant cost savings (up to 70%) compared to
Fargate, by utilizing spare compute capacity. It's ideal for handling short bursts of high traffic, allowing you to
scale affordably during peak demand. While Fargate Spot instances can be interrupted, the short duration of
the expected traffic bursts minimizes the risk of significant disruption and the application's container
orchestration can handle interruptions by quickly rescheduling containers on available capacity.
Capacity Provider: ECS Capacity Providers allow you to define a strategy for using both Fargate and Fargate
Spot. You can configure a weighted strategy where Fargate handles the base load and Fargate Spot is used
for scaling up during traffic spikes.
Cost Optimization: This approach optimizes cost by using the cheaper Fargate Spot for the fluctuating
demand while relying on the reliability of Fargate for consistent performance. Options A and D lack cost
optimization because they rely solely on Fargate, which is more expensive than Fargate Spot. **Option C** is less
reliable, as it relies on spot instances for the steady state.
Load Testing (Included implicitly): **Option A** mentions load testing, which is a best practice for any
containerized application, and this should be done regardless of the chosen deployment strategy. But, doing
load testing, and manually right sizing the Fargate tasks isn't a complete solution for cost optimisation or
reliable burst management.
Key Concepts:
Amazon ECS: A fully managed container orchestration service.
AWS Fargate: A serverless compute engine for containers.
Fargate Spot: A pricing option for Fargate that provides significant cost savings for interruptible workloads.
ECS Capacity Providers: Allows you to define a strategy for using different compute resources (e.g., Fargate,
Fargate Spot).

---

## Question 927

**Answer:** **D**

**Explanation:**

The correct answer is D, subscribing to AWS Shield Advanced and configuring hosted zones in Route 53 and
adding ALB resources as protected resources. Here's why:
AWS Shield Advanced is a managed Distributed Denial of Service (DDoS) protection service that provides
enhanced detection and mitigation capabilities, including 24/7 access to the AWS DDoS Response Team
(DRT). The DRT offers proactive engagement, custom mitigation strategies, and expert guidance during DDoS
events, aligning perfectly with the requirement for proactive engagement.

**Option A** (AWS Config) focuses on configuration management and compliance. While AWS Config can detect
configuration changes that might increase vulnerability to DDoS, it doesn't directly detect DDoS attacks or
provide proactive engagement like AWS Shield Advanced does. AWS Config's rules are reactive, not proactive
in the sense required for active DDoS mitigation support.

**Option B** (AWS WAF) offers protection against web application attacks, including some types of DDoS attacks
targeting the application layer (Layer 7). However, it doesn't provide the comprehensive protection against all
types of DDoS attacks (including volumetric attacks that target network infrastructure) or the proactive
engagement offered by AWS Shield Advanced. Also, while WAF helps, it requires manual configuration of
rules, and the proactive element is missing.

**Option C** (Amazon GuardDuty) is a threat detection service that analyzes logs for malicious activity. While it
can potentially detect some indicators of a DDoS attack based on log analysis, it is not designed primarily for
DDoS protection and lacks the specialized mitigation and DRT support that AWS Shield Advanced provides.
GuardDuty focuses on detecting intrusions and suspicious behavior after they've occurred, not proactively
preventing and mitigating DDoS attacks.
AWS Shield Advanced is specifically designed for DDoS protection, handles a broader range of attack types,
and offers the crucial proactive engagement through the DRT. By associating the ALB (Application Load
Balancer) as a protected resource and using Route 53 hosted zones, Shield Advanced can effectively protect
the application's infrastructure and DNS from DDoS attacks, fulfilling all the requirements.
Further Resources:
AWS Shield: https://aws.amazon.com/shield/
AWS Shield Advanced Features: https://aws.amazon.com/shield/features/
AWS DDoS Response Team (DRT): https://aws.amazon.com/premiumsupport/knowledge-center/ddosresponse-team-shield/

---

## Question 928

**Answer:** **B**

**Explanation:**

The correct answer is B. Recreate the NLB with a security group to allow only trusted IP addresses.

Here's a detailed justification:
The primary goal is to improve application security against unauthorized access attempts with minimal
architectural changes. Security groups act as virtual firewalls that control inbound and outbound traffic at the
instance level and, importantly, can be associated with Network Load Balancers (NLBs). By recreating the
NLB and associating a security group with it, the company can explicitly define rules that allow only trusted IP
addresses to connect to the NLB. This effectively whitelists the allowed traffic sources, preventing
unauthorized access from any other IP addresses.

**Option A** is incorrect because AWS WAF (Web Application Firewall) is designed for HTTP/HTTPS traffic and
cannot be directly associated with an NLB, which handles TCP/UDP traffic at Layer 4. NLBs operate at a lower
layer and are not aware of the application-layer content that WAF needs to inspect.

**Option C**, deploying a second NLB in parallel, adds unnecessary complexity and cost. It also doesn't directly
address the root cause of the problem, which is unauthorized IP addresses attempting to access the
application. Managing two NLBs would also introduce operational overhead.

**Option D**, using AWS Shield Advanced, provides enhanced DDoS protection, but DDoS protection focuses on
mitigating large-scale distributed attacks that aim to overwhelm the application. While Shield Advanced can
offer some protection against malicious traffic, it's not primarily designed for restricting access based on
specific IP addresses or creating a whitelist, like a security group does. Shield Advanced also incurs a higher
cost compared to using security groups.

Therefore, using a security group on the NLB provides a simple, cost-effective, and targeted solution that
directly addresses the requirement of allowing only trusted IP addresses to access the application with
minimal architectural change. Security groups are natively integrated with AWS and are a fundamental
security component.
Supporting links:
AWS Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
Network Load Balancer: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html
AWS WAF: https://aws.amazon.com/waf/
AWS Shield: https://aws.amazon.com/shield/

---

## Question 929

**Answer:** **ACF**

**Explanation:**

The correct answer is ACF. Let's break down why each choice is either right or wrong:

**A.** Create a resource policy for the SNS topic that allows the Lambda function to publish messages to the
topic. This is essential. SNS topics require explicit permissions for entities to publish to them. The resource
policy on the SNS topic must include a statement granting the Lambda function's IAM role or account the
sns:Publish permission. This allows the Lambda function to send messages to the SNS topic.

**B.** Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of customer
managed keys. This is incorrect. While SSE-KMS provides encryption, the question specifically states
customer-managed keys are being used. Switching to default KMS keys doesn't address the core requirement
of granting permissions to access the existing customer-managed key for encryption/decryption.

**C.** Create a resource policy for the encryption key that the SNS topic uses that has the necessary AWS
KMS permissions. This is crucial because the SNS topic is encrypted with a customer-managed KMS key. The
Lambda function needs permission to use this key for encryption. The KMS key's resource policy must grant
the Lambda function's IAM role permissions to perform KMS actions like kms:GenerateDataKey, kms:Decrypt,
and kms:Encrypt (depending on how SNS uses the key). Without these permissions, the Lambda function won't
be able to publish messages to the encrypted SNS topic.

**D.** Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource policy. While
including the ARN in the SNS topic policy is good practice, it's not sufficient on its own. You need to specify
what the ARN is allowed to do by specifying the appropriate action (sns:Publish). A is the better choice for the
action as it is more descriptive.

**E.** Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic by using
API Gateway resource policies. This is incorrect. API Gateway is not required to enable a Lambda to publish
directly to an SNS topic. API Gateway is typically used to expose SNS functionality as a REST API endpoint
which is not described in this scenario. This also adds unnecessary complexity.

**F.** Configure a Lambda execution role that has the necessary IAM permissions to use a customer managed
key in AWS KMS. This is a vital part of the solution. The Lambda function's IAM role (the execution role)

defines what AWS resources the Lambda function is allowed to access. The role must have IAM policy
statements granting it permissions to perform KMS actions. This allows the Lambda to call the KMS service to
encrypt data for SNS.

In summary, the Lambda function needs permission to publish to the SNS topic (A) and permission to use the
KMS key that the SNS topic uses for encryption (C & F). Therefore, ACF is the correct answer.
Supporting Links:
SNS Encryption: https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html
KMS Permissions: https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
SNS Resource Based Policies: https://docs.aws.amazon.com/sns/latest/dg/sns-using-identity-basedpolicies.html

---

## Question 930

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, along with supporting concepts and links:

**Option D** offers the most cost-effective, scalable, and minimally invasive approach, aligning with the
company's requirements of 100% uptime for the portal, infrequent document extraction, minimal code
changes, and minimal implementation effort.
By hosting the web portal on Amazon S3, the company benefits from S3's inherent high availability and
durability. S3 is designed for 99.999999999% (11 9's) of data durability and 99.99% availability.
https://aws.amazon.com/s3/
Using API Gateway in conjunction with Lambda functions allows existing functionalities to be exposed and
scaled without directly modifying the portal's codebase. API Gateway acts as a front door, routing requests to
the appropriate Lambda function. https://aws.amazon.com/api-gateway/
Invoking a Lambda function when a new document is uploaded via the API (associated with upload) ensures

on-demand execution of the document extraction process only when needed. Lambda offers serverless
compute, meaning the company doesn't need to manage servers for this infrequent task, contributing to cost
savings. https://aws.amazon.com/lambda/
This serverless approach is significantly more cost-effective than running EC2 instances (options A, B, and C)
constantly for the document extraction program. The company only pays when the Lambda function
executes.
Options A, B, and C require managing EC2 instances, increasing operational overhead and cost, particularly
for the infrequent document extraction process.

**Option A** using on-demand EC2 for the web portal would ensure high availability but is more expensive
compared to serving static content from S3. Using Lambda for document extraction is good but the web
portal component is not optimal.

**Option B** relies on EC2 Spot Instances, which can be interrupted, potentially disrupting the document
extraction process. Spot Instances are also unsuitable for the web portal which requires 100% uptime.

**Option C** suggests using a Savings Plan for both the web portal and the document extraction program running
in an Auto Scaling group. This means keeping instances running even when the document extraction program
isn't actively processing documents, resulting in wasted resources.

Therefore, the serverless architecture using S3, API Gateway, and Lambda is the most efficient solution in
terms of cost, scalability, and minimal operational overhead, fulfilling all the given requirements.

---

## Question 931

**Answer:** **AB**

**Explanation:**

The correct answer is AB. Here's a detailed justification:

**A.** Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function.
This step is crucial for enabling cross-account invocation. By default, a Lambda function can only be invoked
by resources within the same account. To allow the SNS topic in the production account to trigger the Lambda

function in the administrator account, we need to grant SNS permission to do so. This is achieved by adding a
resource-based IAM policy to the Lambda function. This policy explicitly states that the SNS topic (identified
by its ARN) is allowed to invoke the lambda:InvokeFunction action on the function. Without this permission,
SNS would be denied access.
Authoritative Link: https://docs.aws.amazon.com/lambda/latest/dg/services-sns.html (See section on
"Granting SNS Permissions")

**B.** Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator account to buffer
messages from the SNS topic that is in the production account. Configure the SQS queue to invoke the
Lambda function.
This step addresses a common best practice and architectural pattern in event-driven systems. Using an SQS
queue as an intermediary buffer between the SNS topic and the Lambda function provides several benefits:

1. Decoupling: It decouples the publisher (SNS topic) from the subscriber (Lambda function). This
means the SNS topic doesn't need to know about the Lambda function's availability or processing
speed.

2. Buffering/Asynchronous Processing: The SQS queue acts as a buffer, storing messages if the
Lambda function is temporarily unavailable or experiencing processing delays. This prevents
message loss and ensures eventual delivery. This is especially useful for performance metrics, as
some degree of latency is tolerable, but the data should not be lost.

3. Scalability: The SQS queue can handle spikes in traffic by accumulating messages until the Lambda
function can process them.

4. Error Handling/Retries: SQS Dead Letter Queues (DLQs) can be configured to store messages that
the Lambda function fails to process after a certain number of attempts. This provides a mechanism
for debugging and handling errors.
To implement this, the SNS topic in the production account is configured to send messages to the SQS queue
in the administrator account. Then, the SQS queue is configured as an event source for the Lambda function,
meaning the Lambda function is automatically invoked whenever a new message arrives in the queue. An SQS
queue policy will also be necessary to allow the SNS topic to send messages to the queue.
Authoritative Link: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqsconfiguring-lambda-triggers.html (See section on "Using AWS Lambda with Amazon SQS")

Why other options are incorrect:

**C.** Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the topic. This is
incorrect because the Lambda function resides in a different account and needs permission to be invoked by
SNS, not to subscribe to the topic. IAM policies attached to the SNS topic control who can publish to the topic,
not who can receive messages.

**D.** Use an Amazon EventBridge rule in the production account to capture the SNS topic notifications.
Configure the EventBridge rule to forward notifications to the Lambda function that is in the administrator
account. While EventBridge could be used to route events cross-account, it adds unnecessary complexity in
this case, as SNS to SQS to Lambda is a simpler, more common, and often more cost-effective pattern.
EventBridge is more appropriate when you need complex routing rules and transformation capabilities.

**E.** Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon Athena to
analyze the metrics from the administrator account. This option describes a completely different
architecture for analyzing data. It doesn't address the requirement of triggering a Lambda function when
significant metrics are reported via SNS. Athena is for batch processing and analysis of data at rest, not for
real-time triggering based on SNS messages.

---

## Question 932

**Answer:** **C**

**Explanation:**

The correct answer is C: Use the Amazon VPC CNI plugin for Kubernetes. Define custom subnets in the VPC
cluster for the pods to use.

Here's a detailed justification:
The primary requirement is to utilize custom subnets for EKS pods within the company's VPC. The Amazon
VPC CNI (Container Network Interface) plugin directly addresses this. It's designed to integrate Kubernetes
pods seamlessly with the AWS VPC networking environment. This integration allows pods to receive IP
addresses from the VPC's address space, enabling direct communication within the VPC and with other AWS
resources. By defining custom subnets specifically for EKS pods, the company gains precise control over the
pod network and adheres to its compliance requirements.
The VPC CNI plugin assigns IP addresses to pods from the subnet(s) you specify during cluster creation or
update. You can dedicate particular subnets specifically for pod IP address assignment, ensuring compliance
and isolation as required. This approach avoids the need for complex workarounds or external networking
solutions. It utilizes native AWS networking capabilities for a streamlined and performant solution.

**Option A** is incorrect because AWS Transit Gateway manages connectivity between VPCs and on-premises
networks, but it doesn't directly configure subnets for individual pods within an EKS cluster. Transit Gateway
is not a pod networking solution.

**Option B** is incorrect because AWS Direct Connect is used to establish a dedicated network connection from
on-premises to AWS, but it does not handle pod networking within EKS. Direct Connect manages connectivity
at a higher level. Furthermore, you wouldn't connect to individual EKS pods via Direct Connect.

**Option D** is incorrect because Kubernetes network policies control traffic between pods, but they do not
dictate which subnets pods reside in. Pod anti-affinity rules can influence pod placement but they don't force
the use of custom subnets; they only influence which nodes pods land on, and only indirectly impact subnet
usage if those nodes are configured to use specific subnets. The underlying need to configure the EKS cluster
to use the desired subnets remains.

Therefore, the Amazon VPC CNI plugin, configured with the desired custom subnets, directly and efficiently
fulfills the stated requirements.

Further Reading:
Amazon VPC CNI plugin for Kubernetes:
https://docs.aws.amazon.com/eks/latest/userguide/network_cni_plugin.html
Amazon EKS Networking: https://aws.amazon.com/eks/networking/

---

## Question 933

**Answer:** **A**

**Explanation:**

The correct answer is A: Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during
the next maintenance window.

Here's why:
The primary requirement is to mitigate the risk of a single point of failure for the RDS database with the least
implementation effort. Multi-AZ deployments in RDS are designed precisely for this purpose. Enabling MultiAZ creates a synchronous, standby replica of your database in a different Availability Zone. AWS
automatically handles failover to the standby replica in case of an infrastructure failure, minimizing downtime
and human intervention.

**Option A** is the most straightforward approach. It involves modifying the existing RDS instance settings to
enable Multi-AZ. The changes can be applied during a maintenance window to minimize disruption. RDS
handles the replication and failover automatically.

**Option B**, migrating to DynamoDB, is an entirely different database technology (NoSQL vs. relational). This
requires significant application code changes and a complex data migration strategy using AWS DMS. It's not
the least effort. A heterogeneous migration introduces considerable complexity compared to simply enabling
Multi-AZ in RDS.

**Option C**, creating a new Multi-AZ RDS instance and restoring from a snapshot, is more involved than simply
modifying the existing instance. Restoring from a snapshot means downtime while the data is being copied,
and it does not provide automatic failover.

**Option D**, using EC2 Auto Scaling groups for databases, is not a typical or recommended architecture for RDS.
RDS is a managed service that handles replication, patching, and backups. Deploying a database on EC2
within an Auto Scaling group requires manual configuration and management of these aspects, increasing
operational overhead. Using Route 53 simple routing doesn't guarantee data consistency or automatic
failover in the event of a database instance failure, which is the primary goal.

Enabling Multi-AZ directly addresses the high availability requirement with the least amount of administrative
and development overhead.

---

## Question 934

**Answer:** **A**

**Explanation:**

The best solution is Amazon FSx for NetApp ONTAP with multi-protocol access because it directly addresses
the company's need for a managed file storage service supporting both SMB and NFS protocols with interprotocol sharing. FSx for NetApp ONTAP is built on NetApp's ONTAP file system, which inherently supports
both SMB and NFS access. Configuring multi-protocol access within FSx for NetApp ONTAP allows Windows
and Linux clients to simultaneously access the same data through their respective preferred protocols. This
eliminates the need for separate file servers or data replication between different services.
The requirement for Availability Zone-level redundancy is also met by FSx for NetApp ONTAP. It can be
deployed in a Multi-AZ configuration, providing high availability and fault tolerance. In the event of an
Availability Zone failure, FSx for NetApp ONTAP automatically fails over to the other Availability Zone,
ensuring minimal downtime.

**Option B** is less desirable as it involves managing EC2 instances, handling patching, backups, and scaling,
increasing operational overhead compared to a managed service. **Option C** involves two different FSx
services, lacking a unified storage platform, hence no direct sharing is possible and management complexity
is added. **Option D** utilizes S3, an object storage service, requiring a file gateway. The File Gateway could add
complexity and potentially impact performance.

In summary, Amazon FSx for NetApp ONTAP with multi-protocol access offers a fully managed, highly
available solution that directly meets the company's requirements for consolidating file servers, supporting
both SMB and NFS protocols, and enabling inter-protocol sharing while providing the desired level of
redundancy.
Further research can be conducted at:
Amazon FSx for NetApp ONTAP

Multi-protocol Access with Amazon FSx for NetApp ONTAP

---

## Question 935

**Answer:** **BC**

**Explanation:**

The correct answer is BC. Here's why:

**B.** Create and configure an Auto Scaling group to launch private EC2 instances in multiple Availability
Zones. Add the instances to a target group behind a new Application Load Balancer: This addresses
scalability and high availability for the web application. Auto Scaling Groups (ASGs) automatically adjust the
number of EC2 instances based on demand, ensuring the application can handle traffic spikes. Spreading
these instances across multiple Availability Zones (AZs) protects against failures in a single AZ. An
Application Load Balancer (ALB) distributes incoming traffic evenly across the healthy EC2 instances,
improving performance and availability. ALBs offer advanced features like content-based routing, further
enhancing the application's capabilities. Instances within a private subnet ensures security.
Auto Scaling Groups Documentation
Application Load Balancer Documentation

**C.** Migrate the database to an Amazon Aurora MySQL cluster. Create the primary DB instance and reader
DB instance in separate Availability Zones: This addresses scalability, high availability, and read latency for
the database component. Aurora MySQL is a fully managed, MySQL-compatible relational database engine
that offers improved performance and availability compared to traditional MySQL. Creating a primary instance
and a read replica in different AZs provides automatic failover in case the primary instance fails. Read replicas
can handle read requests, offloading the primary instance and reducing read latency, significantly improving
application performance.
Amazon Aurora Documentation
Aurora Read Replicas Documentation

Why other options are incorrect:

**A.** Launch a second EC2 instance in a second AWS Region. Use a Route 53 failover routing policy to redirect
the traffic to the second EC2 instance: While this provides disaster recovery across Regions, it doesn't

address scalability within the primary Region or database read latency. Also, failover mechanisms are slower
than multi-AZ setups, leading to potential downtime during failover.

**D.** Create and configure an Auto Scaling group to launch private EC2 instances in multiple AWS Regions.
Add the instances to a target group behind a new Application Load Balancer: Deploying the web application
across multiple Regions adds significant complexity and cost. Cross-region deployments are more suitable for
disaster recovery scenarios.

**E.** Migrate the database to an Amazon Aurora MySQL cluster with cross-Region read replicas: Cross-Region
read replicas are best suited for disaster recovery or serving globally distributed users, not for addressing
read latency within a single Region. Intra-region read replicas as described in **Option C** provide the necessary
low latency read scale.

---

## Question 936

**Answer:** **CD**

**Explanation:**

The correct answer is C and D. Here's why:
AWS Secrets Manager (C): This is the ideal service for securely storing and automatically rotating secrets
(like database credentials, API keys) used by Lambda functions. It's designed specifically for this purpose.
https://aws.amazon.com/secrets-manager/
AWS Systems Manager Parameter Store (D): While Secrets Manager is preferable for actual secrets
requiring rotation, Parameter Store (especially Secure String parameters) can also store sensitive
information, albeit with a bit less automation for rotation compared to Secrets Manager. It's suitable for
configuration data and smaller secrets where automated rotation isn't as critical.
https://aws.amazon.com/systems-manager/features/parameter-store/
Let's analyze the incorrect options:

**A.** Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive information:
Lambda@Edge is intended for customizing content delivered by CloudFront, not for managing secrets used by
internal Lambda functions. It's a misapplication of the service.

**B.** Create a Lambda layer that retrieves sensitive information: A Lambda layer can help with code reuse, but
it doesn't inherently provide security or automatic rotation of secrets. The Lambda layer would still need to
fetch the secrets from a secure location.

**E.** Create a Lambda consumer with dedicated throughput to retrieve sensitive information and create
environmental variables: This is an unnecessarily complex and inefficient architecture. It introduces a
dedicated Lambda function solely for managing secrets, adding operational overhead and potential
performance bottlenecks. Environmental variables are also not the most secure way to store highly sensitive
information.

Therefore, storing sensitive information in either Secrets Manager or Parameter Store provides a more
manageable and secure solution for thousands of Lambda functions, with Secrets Manager being the more
suitable for scenarios needing automatic rotation.

---

## Question 937

**Answer:** **C**

**Explanation:**

The correct answer is C because AWS Compute Optimizer is specifically designed to analyze the utilization
metrics of AWS resources like EC2 instances and EBS volumes, and then provide recommendations for cost
optimization and performance improvement. For Auto Scaling groups, Compute Optimizer analyzes the
underlying EC2 instances to provide optimization advice. This makes it the most efficient single tool to meet
the company's requirements.

**Option A** is less efficient because parsing through the AWS Cost and Usage Report requires more manual
effort to identify cost recommendations for each resource. While the report provides detailed cost
information, it does not automatically provide optimization suggestions.**Option B** is not suitable as
CloudWatch billing alerts are used to notify about cost thresholds, not to provide specific resource
optimization recommendations.**Option D** is also less efficient because it combines Compute Optimizer for EC2
instances with manual analysis of the Cost and Usage Report for Auto Scaling groups and EBS volumes.
Compute Optimizer can cover all three resource types directly, making the combination redundant and
requiring more effort.

In summary, AWS Compute Optimizer offers a consolidated and automated approach to cost optimization
recommendations for EC2 instances, EBS volumes, and indirectly, Auto Scaling groups, ensuring the greatest
operational efficiency.
Reference:
AWS Compute Optimizer

---

## Question 938

**Answer:** **D**

**Explanation:**

The correct answer is D, configuring an Amazon Elastic File System (Amazon EFS) file system and mounting it
across all instances. Here's why:
Requirement for High-Performance Data Sharing: The company needs a high-performing solution for sharing
data.
Data Within the VPC: They want to keep the data within the VPC.
Amazon EFS for Shared Storage: Amazon EFS is designed to provide scalable, elastic, cloud-native NFS file
systems for use with AWS Cloud services and on-premises resources. It allows multiple EC2 instances to
concurrently access a shared file system.
EFS Performance: EFS offers various performance modes, including General Purpose and Max I/O, allowing
the company to optimize for their specific media store workload. It also scales automatically as data is added
or removed.
EFS Integration with VPC: EFS file systems are mounted to EC2 instances via mount targets created within
the VPC, ensuring data remains within the VPC.

Why other options are incorrect:

**A.** Amazon S3 Bucket with API Calls: While S3 is excellent for object storage, it's accessed via API calls,
which are not ideal for high-performance, file-system-like data sharing. S3 is better suited for storing and
retrieving individual files, not for continuous file system access.

**B.** Amazon S3 Bucket as a Mounted Volume: S3 is not designed to be mounted as a traditional file system
volume. While solutions like S3FS exist, they often introduce performance overhead and aren't meant for
high-performance scenarios within a VPC where a native shared file system solution is desired.

**C.** Amazon EBS Volume Mounted Across Instances: EBS volumes are block storage designed to be attached
to a single EC2 instance at a time. They are not designed for shared access by multiple instances
simultaneously. Attempting to share an EBS volume would lead to data corruption. There's a multi-attach
option for EBS but it has many restrictions and is not designed for generalized shared file storage like EFS.

In summary, EFS provides the necessary shared file system capability with high performance, VPC integration,
and scalability needed for the media store application.

---

## Question 939

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most appropriate solution, along with supporting
concepts and links:
The scenario highlights a common situation: a temporary performance need (end-of-year processing) fulfilled
by adding a read replica. Now that the temporary need has passed, the read replica is underutilized,
consuming resources without providing commensurate value. The primary instance, however, continues to
operate at a moderate 60% CPU utilization.

**Option A**, deleting the read replica entirely, would eliminate the ability to offload any read traffic from the
primary instance. While it reduces cost, it also reduces the overall read scalability and could potentially
increase the load on the primary instance if reporting queries increase in the future.

**Option B**, resizing the read replica to a smaller instance size, strikes a balance. Since the read replica's CPU
usage is consistently low (25%), reducing its instance size will lower costs without significantly impacting
performance. The primary instance remains unchanged because it's already at a manageable 60% CPU
utilization. This approach allows the company to retain a read replica for potential future read-heavy
workloads or reporting needs, providing flexibility and headroom without unnecessary resource consumption.
Resizing is a non-destructive operation and can be easily reversed if performance degrades after the change.

**Option C** is incorrect. The primary instance is already at a manageable 60% CPU utilization, so there's no need
to resize it to a smaller instance size. Resizing the read replica to a larger instance size is also unnecessary
since it's underutilized.

**Option D**, deleting the read replica and resizing the primary instance to a larger size, is also incorrect. Deleting
the read replica reduces read scalability, and increasing the primary instance size when it's at 60% utilization
is not the optimal cost-effective solution.

Therefore, the most efficient and cost-effective solution is to resize the read replica to a smaller instance size
while leaving the primary instance unchanged. This aligns with the principle of rightsizing cloud resources to
match actual workload requirements.
Key Concepts:
Read Replicas: Replicas of a database instance that serve read-only traffic, offloading the primary instance
and improving read scalability.
(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)
Rightsizing: Optimizing cloud resource allocation to match actual workload needs, minimizing costs and
maximizing efficiency.
Cost Optimization: Selecting the most cost-effective solution while meeting performance requirements.
CPU Utilization: A metric that reflects the amount of processing power being used by an instance.

---

## Question 940

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides the most cost-effective solution for long-running workloads on
both Amazon RDS for PostgreSQL and EC2 instances. Here's a detailed breakdown:
Reserved Instances (RIs) and Savings Plans are Cost Optimization Tools: Both RIs and Savings Plans offer
significant discounts compared to On-Demand pricing for consistent usage. They are designed for workloads
with predictable, long-term resource requirements.
Longer Term = Greater Savings: A longer commitment (3 years vs. 1 year) typically yields a larger discount.
AWS rewards customers who make longer-term reservations with greater cost savings.
All Upfront Option for Maximum Discount: Paying upfront (All Upfront) provides the largest discount
compared to No Upfront or Partial Upfront options. While it requires a larger initial investment, it results in the
lowest overall cost over the commitment period.
EC2 Instance Savings Plan: EC2 Instance Savings Plans provide savings on compute usage, regardless of
instance family, size, or AZ, as long as the usage matches the plan's commitment. This offers flexibility.
Reserved Instances for RDS: RDS Reserved Instances work in a similar manner, offering discounted pricing
for reserved database capacity.
Why other options are less optimal:

**Option A**: On-Demand Instances are the most expensive option for long-running workloads. Savings Plans are
better, but only cover EC2, not RDS.

**Option B**: 1-year term offers less savings compared to 3-year.

**Option C**: Partial Upfront offers less savings compared to All Upfront.

Therefore, **Option D**, which combines a 3-year term with the All Upfront payment option for both Reserved
Instances (for RDS) and Savings Plans (for EC2), maximizes cost savings for the company's long-running

database and application workloads.

---

## Question 941

**Answer:** **DE**

**Explanation:**

Here's a detailed justification for why options D and E are the correct solutions for implementing IAM roles for
service accounts (IRSA) in an Amazon EKS cluster to grant secure and granular access to AWS resources,
along with explanations of why the other options are incorrect:
Why D and E are correct:

**D.** Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts
with the Amazon Resource Name (ARN) of the IAM role. This is a core component of IRSA. You create an IAM
role that specifies precisely which AWS resources a Kubernetes service account is allowed to access. The key
here is to grant least privilege – only the necessary permissions. Annotating the service account with the IAM
role's ARN informs Kubernetes that pods using this service account should assume that role.

**E.** Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC)
identity provider. This is another crucial aspect of IRSA. EKS integrates with AWS IAM via an OIDC provider.
The IAM role created in option D needs a trust policy. This trust policy specifies that the IAM role can be
assumed by entities authenticated by the EKS cluster's OIDC provider. This trust policy verifies that only
workloads from the correct EKS cluster and, specifically, the correct Kubernetes service account, can assume
the role. This is how AWS verifies the identity of the Kubernetes service account making the AWS API calls.
In summary: Options D and E together establish the IRSA mechanism. An IAM role with specific permissions is
created and trusted by the EKS cluster's OIDC provider. By annotating the service account with the IAM role's
ARN, pods running under the service account can securely assume that IAM role and access allowed AWS
resources.

Why the other options are incorrect:

**A.** Create an IAM policy that defines the required permissions. Attach the policy directly to the IAM role of
the EKS nodes. Attaching permissions directly to the EKS node's IAM role is overly permissive and does not
provide granular access control. It means any pod running on the node (even those not requiring access to
those AWS resources) would inherit those permissions, violating the principle of least privilege. Node roles
are intended for EKS internal operations, not for general application access to AWS services.

**B.** Implement network policies within the EKS cluster to prevent Kubernetes service accounts from
accessing specific AWS services. Network policies control network traffic within the Kubernetes cluster.
They do not directly control access to AWS services. While you can restrict egress traffic from pods, this is
not the primary mechanism for controlling AWS API access via IAM roles.

**C.** Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account. Ensure a
one-to-one mapping between IAM roles and Kubernetes roles. Directly modifying the EKS cluster's IAM role
for individual service accounts is not the correct approach. The cluster role is for EKS management plane
operations, not for workloads running within the cluster. Moreover, attempting a one-to-one mapping between
Kubernetes roles (RBAC) and AWS IAM roles isn't how IRSA works. IRSA maps Kubernetes service accounts
to IAM roles, not RBAC roles.

---

## Question 942

**Answer:** **D**

**Explanation:**

The correct answer is D. Use server-side encryption with customer managed AWS KMS keys (SSE-KMS).

Here's why:
Encryption at Rest: All options provide encryption at rest, but the key is how the keys are managed.
Automatic Key Rotation: Customer managed KMS keys support automatic key rotation on a schedule that
you configure, such as annually, meeting the yearly rotation requirement.
https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html
CloudTrail Tracking: AWS KMS integrates with AWS CloudTrail, allowing you to track the usage and rotation
of your keys. This satisfies the auditing requirement.
https://docs.aws.amazon.com/kms/latest/developerguide/logging-using-cloudtrail.html
Cost Optimization: While KMS keys have a cost associated with them, customer managed KMS keys offer the
flexibility to optimize costs by managing usage and access control effectively.

SSE-C Incompatibility: SSE-C requires you to manage the encryption keys, which contradicts the
requirement for automatic key rotation.
SSE-S3 Limitations: SSE-S3 uses S3-managed keys, offering simplicity but no control over key rotation or
CloudTrail logging of key usage.
SSE-KMS (AWS Managed Keys) Limitations: While SSE-KMS provides encryption and integration with
CloudTrail, AWS manages the key rotation schedule, limiting the company's control.

Therefore, customer managed KMS keys are the ideal choice because they fulfill all the requirements:
encryption at rest, automatic yearly key rotation, CloudTrail tracking, and cost optimization through usage
control. They give the company the necessary control and visibility over its encryption keys to meet its
security policies.

---

## Question 943

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C, tagging resources and using Cost Explorer. Here's why:
Resource Tagging: Applying tags (key-value pairs) to AWS resources is a fundamental practice for
organization and cost management. Tags like cost: application-name allow you to categorize and track
expenses associated with each application. https://aws.amazon.com/aws-cost-management/aws-resourcetagging/
Cost Allocation Tags: Activating these tags ensures that AWS considers them when generating cost reports
and performing cost analysis. This means your tagged resources will be grouped and summarized accordingly.
https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html
AWS Cost Explorer: Cost Explorer is a free tool within the AWS Billing and Cost Management console. It
provides a user-friendly interface to visualize, understand, and manage AWS costs over time. You can filter
and group costs by the tags you've defined, making it easy to see the breakdown of costs for each application.
Cost Explorer can also generate reports and forecasts. https://aws.amazon.com/aws-cost-management/awscost-explorer/

**Option A** (AWS Budgets and CSV) is less efficient. AWS Budgets are primarily for setting spending limits and
receiving alerts, not for detailed cost breakdown analysis of past expenses. Downloading CSV data and
manually analyzing it is time-consuming and prone to errors.

**Option B** (Cost and Usage Reports to RDS) is more complex and expensive than necessary. While CUR is
powerful for detailed analysis, loading it into an RDS instance and running SQL queries is overkill for simply

understanding the cost breakdown of different applications. This option incurs RDS costs and requires
database management expertise. Also, it is difficult to get insights into cost allocation without resource tags
in place.

**Option D** (Tagging and Downloading Bills) requires manual searching within potentially very large bill files. It
is not as easy and interactive as using Cost Explorer and reporting.

In summary, tagging resources, enabling cost allocation tags, and using Cost Explorer provides the most costeffective and user-friendly way to get a regular cost breakdown report for each application.

---

## Question 944

**Answer:** **B**

**Explanation:**

The optimal solution for a highly available and resilient e-commerce web application on AWS, as described in
the question, is option B. This solution incorporates several key AWS services to ensure continuous service.

**Option B** suggests deploying Amazon EC2 instances within an Auto Scaling group spanning multiple
Availability Zones (AZs). This is crucial for fault tolerance; if one AZ experiences an issue, the Auto Scaling
group automatically launches instances in other healthy AZs, maintaining application availability. Distributing
instances across multiple AZs eliminates a single point of failure for the web application tier.
Similarly, deploying a Multi-AZ RDS DB instance is vital for database resilience. In a Multi-AZ configuration,
AWS automatically provisions and maintains a synchronous standby replica of the database in a different AZ.
If the primary DB instance fails, RDS automatically fails over to the standby, minimizing downtime.
Finally, using Amazon CloudFront to distribute static assets enhances performance and availability.
CloudFront caches static content at edge locations worldwide, reducing latency for users and offloading
traffic from the EC2 instances. The edge locations also provide inherent redundancy for serving static
content.

**Option A** fails because it relies on a single Availability Zone for both EC2 and RDS, which introduces a single
point of failure. **Option C** has the same issue with the single AZ EC2 instance. Storing assets directly on EC2
instances also creates a scalability bottleneck and doesn't leverage content delivery networks. **Option D**,
while utilizing serverless technologies, might not be the most cost-effective or performant solution for a
general web application, and One Zone EFS offers reduced availability compared to multi-AZ options.
Furthermore, while Lambda and Aurora Serverless v2 could work, the scenario specified explicitly mentions

hosting the application on EC2 instances.

Therefore, by leveraging Auto Scaling, Multi-AZ RDS, and CloudFront, **Option B** establishes a robust and
resilient architecture that addresses the e-commerce company's requirements for continuous service and
high availability.

---

## Question 945

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages AWS Gateway Load Balancer (GWLB), specifically designed for
inspecting, filtering, and steering traffic to virtual appliances. The scenario requires inspecting interapplication traffic across multiple AWS accounts, and GWLB is the optimal solution for this purpose.
Here's a breakdown:
GWLB's Purpose: GWLB simplifies the deployment, scaling, and management of virtual appliances like
firewalls, intrusion detection systems (IDS), and deep packet inspection (DPI) tools. It integrates seamlessly
with VPCs and other AWS services.
Cross-Account Traffic Inspection: The networking account houses the security appliance and GWLB.
Application accounts send traffic to the GWLB endpoint, ensuring all inter-application communication is
routed through the security appliance for inspection.
GWLB Endpoint: The GWLB endpoint in each application account provides a private, reliable connection to the
GWLB in the networking account. Traffic destined for other applications flows through this endpoint and gets
inspected.

Why other options are incorrect:

A (NLB with interface VPC endpoint): Network Load Balancers are designed for TCP, UDP, and TLS traffic.
While NLBs can direct traffic, they are not purpose-built for appliance insertion and inspection.
B (ALB): Application Load Balancers are HTTP/HTTPS load balancers. They are not suitable for inspecting
general network traffic across multiple accounts.
D (Interface VPC endpoint directly to the appliance): This approach requires managing multiple connections
and scaling the security appliance independently in each account, making it a less centralized and scalable
solution.
GWLB provides a centralized and managed solution for inspecting network traffic, offering scalability, high
availability, and simplified management of security appliances. Its design allows for easy insertion and
inspection of traffic between VPCs and AWS accounts.
Reference Link:
AWS Gateway Load Balancer

---

## Question 946

**Answer:** **A**

**Explanation:**

The correct answer is A. Create and use a custom endpoint for the workload. Here's why:
Custom endpoints in Aurora allow you to direct specific read workloads to a defined subset of Aurora Replicas
within your DB cluster. This directly addresses the requirement to send the near-real-time reporting queries
only to the three specifically configured replicas. By creating a custom endpoint, the company can specify the
three desired Aurora Replicas as members of that endpoint. When the reporting department connects to the
custom endpoint, Aurora ensures the queries are routed to those designated replicas.

**Option B**, creating a three-node cluster clone, is overkill. Cloning the entire cluster just for reporting adds
unnecessary cost and management overhead when a custom endpoint can achieve the same result with much
less complexity. Furthermore, data replication delays between the primary cluster and the clone would also
be a concern.

**Option C**, using instance endpoints, doesn't provide automatic load balancing or distribution of the workload.
The reporting department would need to manually manage which instance endpoint to connect to, which is
not ideal for an automatically distributed workload. There's also no guarantee queries won't be directed to the
primary instance, potentially impacting production performance.

**Option D**, using the reader endpoint, distributes read traffic across all available Aurora Replicas, not just the
specific three replicas with different compute and memory specifications. This fails to meet the requirement
of targeting a particular subset of replicas.

Therefore, custom endpoints provide the most efficient and targeted way to direct the reporting workload to
the desired Aurora Replicas, enabling near-real-time reporting without impacting the primary production
workload or other replicas.
Further Research:
Aurora Custom Endpoints: - AWS Documentation on Custom Endpoints.

---

## Question 947

**Answer:** **B**

**Explanation:**

The best solution is B. Store the database credentials as a secret in AWS Secrets Manager. Configure
Secrets Manager to automatically rotate the credentials every 30 days. Update the Lambda function to
retrieve the credentials from the secret.

Here's why:
Secrets Manager is designed for secret management: AWS Secrets Manager is specifically built to store and
manage sensitive information like database credentials, API keys, and other secrets. It provides a secure and
centralized location for these secrets. https://aws.amazon.com/secrets-manager/
Automatic Rotation: Secrets Manager supports automatic rotation of credentials, which greatly reduces the
operational overhead of manually rotating them. This is crucial for security as regularly rotating credentials
limits the potential damage from compromised credentials.
Integration with Lambda: Lambda functions can easily retrieve secrets from Secrets Manager using the AWS
SDK or the Secrets Manager Lambda extension. This provides a secure and straightforward way to access
credentials within the Lambda function.
Least Operational Overhead: Using Secrets Manager requires minimal configuration and integration effort
compared to other options, reducing operational overhead. You don't have to write custom rotation logic or
manage encryption/decryption manually.
Here's why the other options are less suitable:

**A.** Systems Manager Parameter Store: While Parameter Store can store sensitive data, it is generally better
suited for configuration data rather than secrets. Secrets Manager provides more robust secret management

capabilities, including automatic rotation. Moreover, rotating secrets using Parameter Store is less
straightforward.

**C.** Lambda Environment Variables: Storing credentials in Lambda environment variables, even if encrypted, is
not a best practice. It's difficult to rotate the credentials, and the environment variables are less secure than a
dedicated secret management service. Creating and scheduling a Lambda function for rotation would require
significant overhead.

**D.** AWS KMS: AWS KMS is designed for managing encryption keys, not for storing secrets directly. While you
can encrypt secrets with KMS, managing the secret data and its rotation would require significantly more
custom code and operational effort compared to Secrets Manager. KMS would encrypt the credentials but
not handle the key rotation for the credentials themselves; it would rotate the key used to encrypt them.

In summary, Secrets Manager is the optimal solution due to its dedicated secret management capabilities,
automatic rotation feature, seamless integration with Lambda, and minimal operational overhead, aligning
perfectly with the company's requirements for secure credential management and a serverless architecture.

---

## Question 948

**Answer:** **B**

**Explanation:**

The correct answer is B. Create an AWS DMS Serverless replication task to analyze and replicate the data
while provisioning the required capacity.

Here's why:
AWS DMS Serverless: AWS DMS Serverless is designed to automatically scale the replication capacity based
on the workload. It eliminates the need to manually provision and manage the replication instance, making it
ideal for scenarios with varying data replication needs. This aligns perfectly with the company's requirement
to allocate only the capacity needed at any given time.
Capacity Provisioning: DMS Serverless automatically provisions the necessary compute and memory
resources as the data replication workload changes, ensuring efficient resource utilization and cost
optimization. It handles the underlying infrastructure, allowing the company to focus on the data migration
itself.
Alternatives Analysis:
A (Multi-AZ): Multi-AZ deployments provide high availability and fault tolerance but do not address the
dynamic capacity requirements. It simply replicates the same instance across AZs, which may be overprovisioned during periods of low data replication volume.

C (EC2 Auto Scaling): While EC2 Auto Scaling can scale EC2 instances, it requires significant configuration
and management overhead to integrate with DMS. It also involves a delay in scaling up/down, potentially
leading to performance bottlenecks or underutilization.
D (ECS with Fargate): Using ECS with Fargate for DMS replication is not a supported or recommended
approach. DMS is designed to run on its own replication instance infrastructure, and using ECS would add
unnecessary complexity and overhead.
DMS Serverless directly addresses the need for dynamic capacity allocation, simplifying the process and
optimizing resource utilization.
Supporting Documentation:
AWS Database Migration Service (DMS) Serverless: https://aws.amazon.com/dms/serverless/
AWS DMS Documentation: https://docs.aws.amazon.com/dms/index.html

---

## Question 949

**Answer:** **D**

**Explanation:**

The correct answer is D: Use AWS PrivateLink to create a private connection between the application's VPC
and the third-party SaaS provider.

Here's a detailed justification:
AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises networks,
without exposing your traffic to the public internet. This perfectly aligns with the requirement of minimal
public internet exposure for the internal service components accessing the third-party SaaS APIs. With
PrivateLink, traffic between the application's VPC and the SaaS provider remains within the AWS network.

**Option A**, AWS Site-to-Site VPN, is more suitable for connecting an on-premises network to AWS. While it
provides secure connectivity, it's not the best solution for connecting to a SaaS provider already hosted on
AWS.

**Option B**, AWS Transit Gateway, is excellent for managing connectivity between multiple VPCs and onpremises networks, but it doesn't inherently provide the private connection characteristic of PrivateLink. You
could use Transit Gateway, but it would likely be combined with other solutions like VPC peering which
introduces more complexity than PrivateLink directly. Also, it is not intended to be used as a direct
replacement of AWS PrivateLink.

**Option C** suggests configuring PrivateLink to allow only outbound traffic. AWS PrivateLink, by design,
establishes a private connection in both directions. While you control security groups to limit traffic, it
inherently provides bidirectional connectivity for requests and responses. Hence, this is not the primary use
case of PrivateLink

Therefore, using AWS PrivateLink is the most secure and efficient method, establishing a private connection
directly between the company's VPC and the third-party SaaS provider's service, keeping traffic within the
AWS network and minimizing public internet exposure.

---

## Question 950

**Answer:** **C**

**Explanation:**

Let's break down why option C is the best solution.
Requirements Breakdown:
Encryption: Network layer (IPsec) and session layer (SSL/TLS).
Connectivity: Securely connect the corporate network to the VPC.
Security Controls: Restrict traffic between on-premises and AWS.
Why **Option C** (AWS Site-to-Site VPN) is Correct:
AWS Site-to-Site VPN provides a secure, encrypted tunnel between your on-premises network and your AWS
VPC. It uses IPsec encryption at the network layer, fulfilling the first part of the encryption requirement. By
default, VPN connections ensure all data in transit is protected using encryption.
Route table entries, alongside network ACLs and Security groups, are the core of managing ingress and
egress traffic in both VPC and subnets. Route tables control traffic flow based on destination IPs while NACLs
act as a firewall for associated subnets. Security groups add another layer of defense by acting as a virtual
firewall for individual instances in a subnet.

Configuring security groups and Network ACLs allows for granular control over the traffic permitted between
the on-premises network and the VPC. This addresses the requirement for restricting unrestricted access.
They can be set to allow only specific ports and protocols necessary for communication, minimizing the attack
surface.
Why Other Options Are Less Suitable:
A (Direct Connect): Direct Connect provides a dedicated network connection, but it doesn't inherently provide
encryption. Encryption must be added via other methods. Furthermore, while route tables handle basic
routing, they don't provide the granular access control of security groups and network ACLs.
B (IAM Policies): IAM policies control access to AWS resources based on identity. This approach secures the
AWS Management Console but does not address the connectivity or traffic encryption requirements for onpremises resources communicating directly with AWS resources in the VPC.
D (Transit Gateway): AWS Transit Gateway acts as a network transit hub. It provides a central point of
connectivity for multiple VPCs and on-premises networks. While it can be used for connectivity, it does not
automatically provide network layer encryption for all communication with an on-premise network. The other
options such as route tables, NACLs and Security groups are suitable. However, the primary issue is that TGW
is more complex and usually introduced when multiple VPCs and networks need to be connected. It may be
more costly and complex than a simple site-to-site VPN for a single connection.

---

# Quick Answer Sheet

Question 901: B
Question 902: A
Question 903: B
Question 904: A
Question 905: AD
Question 906: C
Question 907: C
Question 908: A
Question 909: D
Question 910: B
Question 911: C
Question 912: D
Question 913: C
Question 914: B
Question 915: C
Question 916: D
Question 917: D
Question 918: A
Question 919: A
Question 920: D
Question 921: A
Question 922: B
Question 923: BE
Question 924: C
Question 925: B
Question 926: B
Question 927: D
Question 928: B
Question 929: ACF
Question 930: D
Question 931: AB
Question 932: C
Question 933: A
Question 934: A
Question 935: BC
Question 936: CD
Question 937: C
Question 938: D
Question 939: B
Question 940: D
Question 941: DE
Question 942: D
Question 943: C
Question 944: B
Question 945: C
Question 946: A
Question 947: B
Question 948: B
Question 949: D
Question 950: C
