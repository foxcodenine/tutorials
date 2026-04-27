# AWS SAA-C03 Practice Test: Questions 51-100

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 51

A company is developing an application that provides order shipping statistics for retrieval by a REST API. The
company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send
the report to several email addresses at the same time every morning.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Configure the application to send the data to Amazon Kinesis Data Firehose.

**B.** Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.

**C.** Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job
to query the application's API for the data.

**D.** Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda
function to query the application's API for the data.

**E.** Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic
as an S3 event destination to send the report by email.

---

## Question 52

A company wants to migrate its on-premises application to AWS. The application produces output files that vary in
size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system
structure. The company wants a solution that scales automatically. is highly available, and requires minimum
operational overhead.
Which solution will meet these requirements?

**A.** Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon
S3 for storage.

**B.** Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use
Amazon Elastic Block Store (Amazon EBS) for storage.

**C.** Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File
System (Amazon EFS) for storage.

**D.** Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic
Block Store (Amazon EBS) for storage.

---

## Question 53

A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1
year and then must be archived for an additional 9 years. No one at the company, including administrative users
and root users, can be able to delete the records during the entire 10-year period. The records must be stored with
maximum resiliency.

Which solution will meet these requirements?

**A.** Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of
the records for a period of 10 years.

**B.** Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10
years, change the IAM policy to allow deletion.

**C.** Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year.
Use S3 Object Lock in compliance mode for a period of 10 years.

**D.** Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3
One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.

---

## Question 54

A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are
hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain
duplicate copies. The company wants a highly available and durable storage solution that preserves how users
currently access the files.
What should a solutions architect do to meet these requirements?

**A.** Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.

**B.** Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.

**C.** Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration.
Migrate all the data to FSx for Windows File Server.

**D.** Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ
configuration. Migrate all the data to Amazon EFS.

---

## Question 55

A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host
applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six
subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a
dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS
databases.
Which solution will meet these requirements?

**A.** Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route
table with the database subnets.

**B.** Create a security group that denies inbound traffic from the security group that is assigned to instances in
the public subnets. Attach the security group to the DB instances.

**C.** Create a security group that allows inbound traffic from the security group that is assigned to instances in
the private subnets. Attach the security group to the DB instances.

**D.** Create a new peering connection between the public subnets and the private subnets. Create a different
peering connection between the private subnets and the database subnets.

---

## Question 56

A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the
ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs
securely. The company wants to design its API Gateway URL with the company's domain name and corresponding
certificate so that the third-party services can use HTTPS.
Which solution will meet these requirements?

**A.** Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to
overwrite the default URL. Import the public certificate associated with the company's domain name into AWS
Certificate Manager (ACM).

**B.** Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API
Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS
Certificate Manager (ACM) in the us-east-1 Region.

**C.** Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain
name. Import the public certificate associated with the company's domain name into AWS Certificate Manager
(ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route
traffic to the API Gateway endpoint.

**D.** Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain
name. Import the public certificate associated with the company's domain name into AWS Certificate Manager
(ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records
with the company's domain name. Point an A record to the company's domain name.

---

## Question 57

A company is running a popular social media website. The website gives users the ability to upload images to share
with other users. The company wants to make sure that the images do not contain inappropriate content. The
company needs a solution that minimizes development effort.
What should a solutions architect do to meet these requirements?

**A.** Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.

**B.** Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.

**C.** Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence
predictions.

**D.** Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground
truth to label low-confidence predictions.

---

## Question 58

A company wants to run its critical applications in containers to meet requirements for scalability and availability.
The company prefers to focus on maintenance of the critical applications. The company does not want to be

responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.
What should a solutions architect do to meet these requirements?

**A.** Use Amazon EC2 instances, and install Docker on the instances.

**B.** Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.

**C.** Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.

**D.** Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon
Machine Image (AMI).

---

## Question 59

A company hosts more than 300 global websites and applications. The company requires a platform to analyze
more than 30 TB of clickstream data each day.
What should a solutions architect do to transmit and process the clickstream data?

**A.** Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster
with the data to generate analytics.

**B.** Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3
data lake for Amazon Redshift to use for analysis.

**C.** Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to
the S3 bucket. run an AWS Lambda function to process the data for analysis.

**D.** Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data
to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.

---

## Question 60

A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is
configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so
that the requests will use HTTPS.
What should a solutions architect do to meet this requirement?

**A.** Update the ALB's network ACL to accept only HTTPS traffic.

**B.** Create a rule that replaces the HTTP in the URL with HTTPS.

**C.** Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.

**D.** Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).

---

## Question 61

A company is developing a two-tier web application on AWS. The company's developers have deployed the
application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company
must not hardcode database credentials in the application. The company must also implement a solution to
automatically rotate the database credentials on a regular basis.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch
Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance
metadata at the same time.

**B.** Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon
EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the
RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the
ability to fall back to previous values.

**C.** Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the
secret. Attach the required permission to the EC2 role to grant access to the secret.

**D.** Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on
automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant
access to the encrypted parameters.

---

## Question 62

A company is deploying a new public web application to AWS. The application will run behind an Application Load
Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an
external certificate authority (CA). The certificate must be rotated each year before the certificate expires.
What should a solutions architect do to meet these requirements?

**A.** Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use
the managed renewal feature to automatically rotate the certificate.

**B.** Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the
certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the
certificate.

**C.** Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the
root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the
certificate.

**D.** Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use
Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing
expiration. Rotate the certificate manually.

---

## Question 63

A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document
management application. The company intends to create a product that converts large .pdf files to .jpg image files.
The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A
solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.
Which solution meets these requirements MOST cost-effectively?

**A.** Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert
the files to .jpg format and store them back in Amazon S3.

**B.** Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda
function to convert the files to .jpg format and store them back in DynamoDB.

**C.** Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon
Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to
convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.

**D.** Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon
Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to

convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.

---

## Question 64

A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications
interact with the data each day.
The company is moving its Windows workloads to AWS. As the company continues this process, the company
requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that
minimizes operational overhead and requires no significant changes to the existing file access patterns. The
company uses an AWS Site-to-Site VPN connection for connectivity to AWS.
What should a solutions architect do to meet these requirements?

**A.** Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx
for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.

**B.** Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File
Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.

**C.** Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon
S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each
workload's location.

**D.** Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx
File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud
workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx
File Gateway.

---

## Question 65

A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API
Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the
Lambda code to identify protected health information (PHI) in the reports.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted
text.

**B.** Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from
the extracted text.

**C.** Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the
PHI from the extracted text.

**D.** Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify
the PHI from the extracted text.

---

## Question 66

A company has an application that generates a large number of files, each approximately 5 MB in size. The files
are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted.
Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce.
The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first
30 days.
Which storage solution is MOST cost-effective?

**A.** Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object
creation. Delete the files 4 years after object creation.

**B.** Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3

One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.

**C.** Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3
Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.

**D.** Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3
Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.

---

## Question 67

A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an
Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional
duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.
What should a solutions architect do to ensure messages are being processed once only?

**A.** Use the CreateQueue API call to create a new queue.

**B.** Use the AddPermission API call to add appropriate permissions.

**C.** Use the ReceiveMessage API call to set an appropriate wait time.

**D.** Use the ChangeMessageVisibility API call to increase the visibility timeout.

---

## Question 68

A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to
AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The
company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.
What should the solutions architect do to meet these requirements?

**A.** Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the
primary Direct Connect connection fails.

**B.** Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for
private connectivity and as a backup if the primary VPN connection fails.

**C.** Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to
the same Region as a backup if the primary Direct Connect connection fails.

**D.** Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the
AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.

---

## Question 69

A company is running a business-critical web application on Amazon EC2 instances behind an Application Load
Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL
database that is deployed in a single Availability Zone. The company wants the application to be highly available
with minimum downtime and minimum loss of data.
Which solution will meet these requirements with the LEAST operational effort?

**A.** Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic.
Use Aurora PostgreSQL Cross-Region Replication.

**B.** Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ.
Configure an Amazon RDS Proxy instance for the database.

**C.** Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database.
Recover the database from the snapshots in the event of a failure.

**D.** Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to
Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.

---

## Question 70

A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to
use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.
The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual
restart of the EC2 instances that run the web service. The company needs to improve the application's availability
without writing custom scripts or code.
What should a solutions architect do to meet these requirements?

**A.** Enable HTTP health checks on the NLB, supplying the URL of the company's application.

**B.** Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are
detected. the application will restart.

**C.** Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the
company's application. Configure an Auto Scaling action to replace unhealthy instances.

**D.** Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure
an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.

---

## Question 71

A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of
data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15
minutes and a recovery time objective (RTO) of 1 hour.
What should the solutions architect recommend to meet these requirements?

**A.** Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.

**B.** Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.

**C.** Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3
Glacier to DynamoDB.

**D.** Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes.
For RPO recovery, restore the DynamoDB table by using the EBS snapshot.

---

## Question 72

A company runs a photo processing application that needs to frequently upload and download pictures from
Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost
in data transfer fees and needs to implement a solution to reduce these costs.
How can the solutions architect meet this requirement?

**A.** Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.

**B.** Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3
buckets.

**C.** Deploy the application into a public subnet and allow it to route through an internet gateway to access the
S3 buckets.

**D.** Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3
buckets.

---

## Question 73

A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched
a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to
connect from the on-premises network, through the company's internet connection, to the bastion host, and to the
application servers. The solutions architect must make sure that the security groups of all the EC2 instances will
allow that access.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

**A.** Replace the current security group of the bastion host with one that only allows inbound access from the
application instances.

**B.** Replace the current security group of the bastion host with one that only allows inbound access from the
internal IP range for the company.

**C.** Replace the current security group of the bastion host with one that only allows inbound access from the
external IP range for the company.

**D.** Replace the current security group of the application instances with one that allows inbound SSH access
from only the private IP address of the bastion host.

**E.** Replace the current security group of the application instances with one that allows inbound SSH access
from only the public IP address of the bastion host.

---

## Question 74

A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier
hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon
EC2 in a private subnet. Security is a high priority for the company.
How should security groups be configured in this situation? (Choose two.)

**A.** Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.

**B.** Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.

**C.** Configure the security group for the database tier to allow inbound traffic on port 1433 from the security
group for the web tier.

**D.** Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the
security group for the web tier.

**E.** Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the
security group for the web tier.

---

## Question 75

A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the
application's performance. The application consists of application tiers that communicate with each other by way
of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must
design a solution that resolves these issues and modernizes the application.
Which solution meets these requirements and is the MOST operationally efficient?

**A.** Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use
Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.

**B.** Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers'
peak utilization during the performance failures. Increase the size of the application server's Amazon EC2
instances to meet the peak requirements.

**C.** Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers
running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length
and scale up and down as required.

**D.** Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers
running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length
and scale up when communication failures are detected.

---

## Question 76

A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The
data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within
the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional
systems that provide critical near-real-time analytics. A secure transfer is important because the data is
considered sensitive.
Which solution offers the MOST reliable data transfer?

**A.** AWS DataSync over public internet

**B.** AWS DataSync over AWS Direct Connect

**C.** AWS Database Migration Service (AWS DMS) over public internet

**D.** AWS Database Migration Service (AWS DMS) over AWS Direct Connect

---

## Question 77

A company needs to configure a real-time data ingestion architecture for its application. The company needs an
API, a process that transforms data as the data is streamed, and a storage solution for the data.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an
Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS
Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to
Amazon S3.

**B.** Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination
checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.

**C.** Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon
Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda
functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.

**D.** Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform
the data. Use AWS Glue to send the data to Amazon S3.

---

## Question 78

A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data
for 7 years.
What is the MOST operationally efficient solution that meets these requirements?

**A.** Use DynamoDB point-in-time recovery to back up the table continuously.

**B.** Use AWS Backup to create backup schedules and retention policies for the table.

**C.** Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon
S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.

**D.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function.
Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3
Lifecycle configuration for the S3 bucket.

---

## Question 79

A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost
optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be
unpredictable. When traffic spikes occur, they will happen very quickly.
What should a solutions architect recommend?

**A.** Create a DynamoDB table in on-demand capacity mode.

**B.** Create a DynamoDB table with a global secondary index.

**C.** Create a DynamoDB table with provisioned capacity and auto scaling.

**D.** Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.

---

## Question 80

A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an
application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an
existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store
(Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS
volume snapshots.
What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?

**A.** Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's
AWS account to use the key.

**B.** Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only.
Modify the key policy to allow the MSP Partner's AWS account to use the key.

**C.** Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only.
Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.

**D.** Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt
the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP
Partner's AWS account.

---

## Question 81

A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The
process should run in parallel while adding and removing application nodes as needed based on the number of jobs
to be processed. The processor application is stateless. The solutions architect must ensure that the application is
loosely coupled and the job items are durably stored.
Which design should the solutions architect use?

**A.** Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image
(AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an
Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and
remove nodes based on CPU usage.

**B.** Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image
(AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an
Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and
remove nodes based on network usage.

**C.** Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image
(AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto
Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove
nodes based on the number of items in the SQS queue.

**D.** Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image
(AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto
Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove
nodes based on the number of messages published to the SNS topic.

---

## Question 82

A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use
certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified
30 days before the expiration of each certificate.
What should a solutions architect recommend to meet this requirement?

**A.** Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS)
topic every day, beginning 30 days before any certificate will expire.

**B.** Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon
EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification
Service (Amazon SNS) when AWS Config reports a noncompliant resource.

**C.** Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon
CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to
send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).

**D.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire
within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a
custom alert by way of Amazon Simple Notification Service (Amazon SNS).

---

## Question 83

A company's dynamic website is hosted using on-premises servers in the United States. The company is launching
its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must
remain in the United States. The product is being launched in a few days, and an immediate solution is needed.
What should the solutions architect recommend?

**A.** Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.

**B.** Move the website to Amazon S3. Use Cross-Region Replication between Regions.

**C.** Use Amazon CloudFront with a custom origin pointing to the on-premises servers.

**D.** Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.

---

## Question 84

A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database
servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2
instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.
The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours
each day. The company plans to implement automation to stop the development and test EC2 instances when they
are not in use.
Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?

**A.** Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test
EC2 instances.

**B.** Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development
and test EC2 instances.

**C.** Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2
instances.

**D.** Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test
EC2 instances.

---

## Question 85

A company has a production web application in which users upload documents through a web interface or a mobile
app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are
stored.
What should a solutions architect do to meet this requirement?

**A.** Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.

**B.** Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the
documents periodically.

**C.** Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to
restrict all access to read-only.

**D.** Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by
mounting the volume in read-only mode.

---

## Question 86

A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB
instance. The company wants a secure method for the web servers to connect to the database while meeting a
security requirement to rotate user credentials frequently.
Which solution meets these requirements?

**A.** Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow
the web servers to access AWS Secrets Manager.

**B.** Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM
permissions to allow the web servers to access OpsCenter.

**C.** Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to
allow the web servers to retrieve credentials and access the database.

**D.** Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on
the web server file system. The web server should be able to decrypt the files and access the database.

---

## Question 87

A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The
Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades
the database, the Lambda functions fail to establish database connections until the upgrade is complete. The
result is that customer data is not recorded for some of the event.
A solutions architect needs to design a solution that stores customer data that is created during database
upgrades.
Which solution will meet these requirements?

**A.** Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the
Lambda functions to connect to the RDS proxy.

**B.** Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that
stores the customer data in the database.

**C.** Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local
storage to save the customer data to the database.

**D.** Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new
Lambda function that polls the queue and stores the customer data in the database.

---

## Question 88

A survey company has gathered data for several years from areas in the United States. The company hosts the
data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a

European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as
low as possible.
Which solution will meet these requirements?

**A.** Configure the Requester Pays feature on the company's S3 bucket.

**B.** Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3
buckets.

**C.** Configure cross-account access for the marketing firm so that the marketing firm has access to the
company's S3 bucket.

**D.** Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing
firm's S3 buckets.

---

## Question 89

A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to
restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers
are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.
What should a solutions architect do to secure the audit documents?

**A.** Enable the versioning and MFA Delete features on the S3 bucket.

**B.** Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.

**C.** Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during
audit dates.

**D.** Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user
accounts from accessing the KMS key.

---

## Question 90

A company is using a SQL database to store movie data that is publicly accessible. The database runs on an
Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of
new movies that have been added to the database. The script must report a final total during business hours.
The company's development team notices that the database performance is inadequate for development tasks
when the script is running. A solutions architect must recommend a solution to resolve this issue.
Which solution will meet this requirement with the LEAST operational overhead?

**A.** Modify the DB instance to be a Multi-AZ deployment.

**B.** Create a read replica of the database. Configure the script to query only the read replica.

**C.** Instruct the development team to manually export the entries in the database at the end of each day.

**D.** Use Amazon ElastiCache to cache the common queries that the script runs against the database.

---

## Question 91

A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the
Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the
applications is allowed to travel across the internet.
Which solution will meet these requirements?

**A.** Configure an S3 gateway endpoint.

**B.** Create an S3 bucket in a private subnet.

**C.** Create an S3 bucket in the same AWS Region as the EC2 instances.

**D.** Configure a NAT gateway in the same subnet as the EC2 instances.

---

## Question 92

A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure
access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.
Which combination of steps should a solutions architect take to accomplish this? (Choose two.)

**A.** Configure a VPC gateway endpoint for Amazon S3 within the VPC.

**B.** Create a bucket policy to make the objects in the S3 bucket public.

**C.** Create a bucket policy that limits access to only the application tier running in the VPC.

**D.** Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.

**E.** Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.

---

## Question 93

A company runs an on-premises application that is powered by a MySQL database. The company is migrating the
application to AWS to increase the application's elasticity and availability.
The current architecture shows heavy read activity on the database during times of normal operation. Every 4
hours, the company's development team pulls a full export of the production database to populate a database in
the staging environment. During this period, users experience unacceptable application latency. The development
team is unable to use the staging environment until the procedure completes.
A solutions architect must recommend replacement architecture that alleviates the application latency issue. The
replacement architecture also must give the development team the ability to continue using the staging
environment without delay.
Which solution meets these requirements?

**A.** Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by
implementing a backup and restore process that uses the mysqldump utility.

**B.** Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the
staging database on-demand.

**C.** Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby
instance for the staging database.

**D.** Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the
staging database by implementing a backup and restore process that uses the mysqldump utility.

---

## Question 94

A company is designing an application where users upload small files into Amazon S3. After a user uploads a file,
the file requires one-time simple processing to transform the data and save the data in JSON format for later
analysis.
Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will
upload a high number of files. On other days, users will upload a few files or no files.
Which solution meets these requirements with the LEAST operational overhead?

**A.** Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data.
Store the resulting JSON file in an Amazon Aurora DB cluster.

**B.** Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS)
queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in
Amazon DynamoDB.

**C.** Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS)
queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file
in Amazon DynamoDB.

**D.** Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data
Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and
process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.

---

## Question 95

An application allows users at a company's headquarters to access product data. The product data is stored in an
Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and
wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's
performance quickly.
What should the solutions architect recommend?

**A.** Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary
Availability Zone.

**B.** Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary
Availability Zone.

**C.** Create read replicas for the database. Configure the read replicas with half of the compute and storage
resources as the source database.

**D.** Create read replicas for the database. Configure the read replicas with the same compute and storage
resources as the source database.

---

## Question 96

An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:

What is the effect of this policy?
A.Users can terminate an EC2 instance in any AWS Region except us-east-1.
B.Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.
C.Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.
D.Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.

---

## Question 97

A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows
shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various
storage options. The storage solution must be highly available and integrated with Active Directory for access
control.
Which solution will satisfy these requirements?

**A.** Configure Amazon EFS storage and set the Active Directory domain for authentication.

**B.** Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.

**C.** Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.

**D.** Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for
authentication.

---

## Question 98

An image-processing company has a web application that users use to upload images. The application uploads the
images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation
events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event
source for an AWS Lambda function that processes the images and sends the results to users through email.
Users report that they are receiving multiple email messages for every uploaded image. A solutions architect
determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email
messages.
What should the solutions architect do to resolve this issue with the LEAST operational overhead?

**A.** Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.

**B.** Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard
duplicate messages.

**C.** Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function
timeout and the batch window timeout.

**D.** Modify the Lambda function to delete each message from the SQS queue immediately after the message is
read before processing.

---

## Question 99

A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises
data center. The company needs the ability to use Lustre clients to access data. The solution must be fully
managed.
Which solution meets these requirements?

**A.** Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol.
Connect the application server to the file share.

**B.** Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance.
Connect the application server to the file share.

**C.** Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach
the file system to the origin server. Connect the application server to the file system.

**D.** Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the
application server to the file system.

---

## Question 100

A company's containerized application runs on an Amazon EC2 instance. The application needs to download
security certificates before it can communicate with other business applications. The company wants a highly
secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in
highly available storage after the data is encrypted.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as

needed. Control access to the data by using fine-grained IAM access.

**B.** Create an AWS Lambda function that uses the Python cryptography library to receive and perform
encryption operations. Store the function in an Amazon S3 bucket.

**C.** Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the
KMS key for encryption operations. Store the encrypted data on Amazon S3.

**D.** Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the
KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS)
volumes.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 51

**Answer:** **BD**

**Explanation:**

The correct answer is BD. Here's why:

**D:** Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS
Lambda function to query the application's API for the data. Amazon EventBridge allows for scheduled,
event-driven automation. In this scenario, it's ideal for triggering the data extraction and report generation
process every morning. Lambda offers a serverless compute environment where code can be executed
without managing underlying infrastructure. A Lambda function can be coded to query the REST API, retrieve
the shipping statistics, and format the data into HTML. This addresses the requirement of extracting data and
organizing it. https://aws.amazon.com/eventbridge/, https://aws.amazon.com/lambda/

**B:** Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.
Amazon SES is a cost-effective, scalable email service that provides a reliable way to send emails. The
Lambda function, after formatting the data into HTML, can leverage SES to send the report to the specified
email addresses. SES handles email delivery and can be configured to handle bounces and complaints. This
satisfies the requirement of sending the report to multiple email addresses in an easy-to-read HTML format.
The Lambda function would take on the additional task of the HTML formatting. https://aws.amazon.com/ses/

Why other options are incorrect:

**A:** Configure the application to send the data to Amazon Kinesis Data Firehose. Kinesis Data Firehose is used
for streaming data to destinations like S3, Redshift, and Elasticsearch. It's not suitable for querying data from
an API and generating reports.

**C:** Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue
job to query the application's API for the data. AWS Glue is an ETL (Extract, Transform, Load) service
primarily designed for processing large datasets. Using Glue to directly query an API and generate a single
HTML report is overkill and less efficient than using Lambda. Glue is usually used against a data lake, not an
operational API.

**E:** Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS)
topic as an S3 event destination to send the report by email. S3 is for object storage and would only make
sense if the source data (the shipping statistics) were already available within S3, which isn't indicated in the

problem description. SNS is for simple notifications and not suited for complex HTML formatting or extracting
data from APIs. S3 event notifications are also triggered by data changes, not scheduled events.

---

## Question 52

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses all the requirements: scalability, high availability, standard file
system structure, and minimal operational overhead.
Scalability: Amazon EFS scales automatically to petabytes without disrupting applications, handling the
varied file sizes (tens of gigabytes to hundreds of terabytes). EC2 Auto Scaling ensures the application
instances scale based on demand.
High Availability: Using a Multi-AZ Auto Scaling group ensures that the application is highly available
because EC2 instances are spread across multiple Availability Zones. EFS is also designed for high availability
and durability, replicating data across multiple AZs.
Standard File System Structure: EFS provides a standard file system interface (NFSv4.1) that allows
applications to interact with storage in a familiar way.
Minimum Operational Overhead: EFS is a fully managed service, which eliminates the need for manual
provisioning, patching, or backups. EC2 Auto Scaling automates the scaling of instances.

**Option A** is incorrect because S3 is an object storage service and does not provide a standard file system
interface. **Option B** is incorrect because EBS is block storage and would not scale elastically for the varying
size files, and it has more operational overhead compared to EFS. **Option D** is incorrect because EBS is block
storage and not a shared file system. Mounting and sharing EBS volumes between multiple instances
introduces complexities. Here are some authoritative links for further research:
Amazon EFS: https://aws.amazon.com/efs/
Amazon EC2 Auto Scaling: https://aws.amazon.com/autoscaling/
Amazon EC2: https://aws.amazon.com/ec2/

---

## Question 53

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the correct answer:

**Option C** effectively addresses all requirements: immediate accessibility for 1 year, archival for 9 years,
immutability (preventing deletion), and maximum resiliency.

1. Initial Accessibility: S3 Standard offers immediate access to the records for the first year.

2. Archival Storage: Transitioning the data to S3 Glacier Deep Archive after one year via an S3
Lifecycle policy fulfills the archival requirement and is the most cost-effective storage option for
long-term retention with infrequent access. S3 Glacier Deep Archive is designed for data that is
rarely accessed.

3. Immutability: S3 Object Lock in compliance mode is crucial. Compliance mode ensures that no one,
including administrative users or the root user, can delete the objects during the specified retention
period (10 years in this case). This definitively meets the immutability requirement.

4. Resiliency: S3 Standard and S3 Glacier Deep Archive provide the highest levels of data durability
and availability by storing data across multiple devices and facilities.

Why other options are incorrect:

**A:** S3 Glacier is not designed for immediate accessibility. It's for infrequent access with retrieval times
ranging from minutes to hours, not the "immediately accessible" requirement of the first year. Access control
policies and IAM Policies can be bypassed or modified, which means they cannot guarantee immutability.

**B:** S3 Intelligent-Tiering automatically moves data between frequent, infrequent, and archive access tiers
based on access patterns. While useful for cost optimization, it doesn't guarantee immutability. IAM policies
can be bypassed or modified.

**D:** S3 One Zone-IA offers lower availability (data is stored in a single Availability Zone), which does not meet
the "maximum resiliency" requirement. Also, S3 Object Lock in governance mode can be overridden by users
with specific IAM permissions, failing to guarantee immutability against administrative users or root.

---

## Question 54

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
The requirement is to provide a highly available and durable file share solution for Windows workloads while
preserving the existing user access patterns.

**Option A** (Amazon S3 with IAM): While S3 is highly available and durable, it doesn't directly support Windows
file shares. Users would need to adapt to a completely different access method, breaking the "preserve how
users currently access the files" requirement. IAM authentication, although secure, doesn't replicate the file
share experience.

**Option B** (Amazon S3 File Gateway): S3 File Gateway provides a way to access S3 objects as files, but it
doesn't replicate a traditional Windows file share. It adds complexity to the existing EC2 setup and doesn't
inherently provide high availability for the gateway itself. Users would still potentially experience access
disruptions if the gateway instance fails.

**Option C** (Amazon FSx for Windows File Server with Multi-AZ): Amazon FSx for Windows File Server is a
fully managed service specifically designed for providing native Windows file server capabilities in the cloud.
It's built on Windows Server, so it directly supports SMB file shares and integrates seamlessly with existing
Active Directory environments for authentication. A Multi-AZ configuration provides high availability by
automatically replicating data across multiple Availability Zones. This ensures that if one AZ fails, the file
share remains accessible to users. Migrating the data to FSx for Windows File Server preserves the existing
user access patterns as they continue to use familiar Windows file share protocols.

**Option D** (Amazon EFS with Multi-AZ): Amazon EFS is a network file system designed for Linux-based
workloads. While it offers high availability and durability, it's not a native Windows file server solution and
doesn't directly support SMB file shares. Integrating EFS with Windows workloads would require additional
configuration and wouldn't provide the same seamless experience as FSx for Windows File Server.
In conclusion, **Option C** provides the best solution as it directly addresses all the requirements: high
availability, durability, preservation of existing user access methods, and native support for Windows file
shares through Amazon FSx for Windows File Server with a Multi-AZ configuration.

---

## Question 55

**Answer:** **C**

**Explanation:**

The correct solution (C) leverages security groups to control network access to the RDS instances. Security
groups act as virtual firewalls at the instance level, controlling both inbound and outbound traffic. To meet
the requirement that only EC2 instances in the private subnets can access the RDS databases, we create a
security group that specifically allows inbound traffic only from the security group assigned to those EC2
instances in the private subnets.
Here's why the other options are not ideal:

**A:** Creating a route table that excludes routes to public subnets' CIDR blocks and associating it with the
database subnets would primarily affect routing and not precisely control which instances can access the
database. It might block general traffic from public subnets to database subnets, but it wouldn't isolate
access to only EC2 instances associated with a specific security group in the private subnets. It also makes
the configuration less flexible and scalable.

**B:** Denying inbound traffic from the public subnet's security group at the database instance is a step in the
right direction, but it doesn't explicitly allow traffic from the private subnets. This approach might
inadvertently block legitimate traffic originating from other sources within the private subnets that were
intended to connect to the database. The best practice is to use a principle of least privilege by allowing only
the necessary traffic.

**D:** Peering connections are for connecting VPCs, not subnets within the same VPC. The EC2 instances and
RDS instances are already within the same VPC, so subnet-level peering is unnecessary and not a feasible
solution. Peering creates network connectivity between entire VPCs, adding unnecessary complexity and cost
for this specific requirement. Subnets within a VPC inherently communicate via the VPC's internal routing.

Therefore, option C is the most precise, secure, and efficient way to ensure that only EC2 instances in the
private subnets can access the RDS instances, adhering to the principle of least privilege and utilizing the
inherent security features provided by security groups.
Supporting Links:

Amazon VPC Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
Controlling Traffic to Resources Using Security Groups:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html

---

## Question 56

**Answer:** **C**

**Explanation:**

The correct answer is C because it aligns with the best practices for using custom domain names with API
Gateway and ensuring secure HTTPS communication. Here's why:
Regional API Gateway Endpoint: Creating a Regional API Gateway endpoint is essential. It allows associating
a custom domain name and certificate within a specific AWS Region (ca-central-1 in this case), providing lower
latency and better control compared to edge-optimized endpoints in this scenario.
Custom Domain Association: Associating the API Gateway endpoint with the company's domain name is a key
step in providing a user-friendly and branded URL for the APIs. This is the fundamental step toward using the
company's domain instead of the default API Gateway URL.
ACM Certificate Import and Region Specificity: Importing the SSL/TLS certificate into AWS Certificate
Manager (ACM) in the same Region as the API Gateway (ca-central-1) is crucial. ACM certificates are regionspecific, and the API Gateway needs to be able to access the certificate to establish secure HTTPS
connections. Answer D fails on this very important concept.
Certificate Attachment: Attaching the certificate to the API Gateway endpoint ensures that the API Gateway
uses the certificate for SSL/TLS termination, enabling HTTPS for clients accessing the APIs.
Route 53 Configuration: Configuring Route 53 to route traffic to the API Gateway endpoint is the final step.
Route 53 maps the company's domain name to the API Gateway endpoint, ensuring that requests to the
custom domain name are directed to the API Gateway.**Option A** is incorrect as stage variables are generally
for API Gateway configuration values, not for custom domain mapping. **Option B** is incorrect because, while
pointing a Route 53 record to an API Gateway endpoint is correct, the ACM certificate must be in the same
Region as the API Gateway. **Option D** incorrectly states that ACM certificates need to be in us-east-1. They
need to be in the same region as the API Gateway. It also incorrectly states that the certificate needs to be

attached to the API Gateway APIs (plural). The certificate is attached to the API Gateway endpoint.
Supporting Links:
Custom Domain Names for API Gateway:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-custom-domain-name.html
AWS Certificate Manager (ACM): https://aws.amazon.com/certificate-manager/
Amazon Route 53: https://aws.amazon.com/route53/

---

## Question 57

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages Amazon Rekognition's pre-trained models specifically designed
for image analysis, including the detection of explicit or suggestive content. This significantly reduces
development effort compared to building a custom model.
Amazon Rekognition's Content Moderation feature can identify various types of inappropriate content, such
as nudity, violence, and hate symbols. The service provides a confidence score for each detection. For
detections with low confidence scores, a human review workflow can be implemented to ensure accuracy and
prevent false positives or negatives. This hybrid approach balances automation with human oversight.

**Option A** is incorrect because Amazon Comprehend is a natural language processing (NLP) service, best
suited for analyzing text, not images. **Option C** is incorrect because Amazon SageMaker is a machine learning
platform for building, training, and deploying custom models. While it's possible to build a custom image
moderation model with SageMaker, it requires significantly more development effort than using Rekognition's
pre-built capabilities. Ground Truth is used for data labeling in SageMaker and isn't the optimal choice when
pre-trained models with confidence scores and built in human review workflows are available. **Option D** is
incorrect because deploying a custom machine learning model on AWS Fargate also requires significant
development and operational overhead compared to utilizing a managed service like Rekognition. Fargate
provides serverless compute for containers, not a machine learning image analysis service. Building custom
models and infrastructure is unnecessary when a suitable managed service already exists. Rekognition
provides a more straightforward and efficient solution for the stated requirements. Authoritative links:
Amazon Rekognition Content Moderation: https://aws.amazon.com/rekognition/content-moderation/

---

## Question 58

**Answer:** **C**

**Explanation:**

The best solution is to use Amazon ECS on AWS Fargate because it abstracts away the need to manage the
underlying infrastructure. Fargate is a serverless compute engine for containers that lets you run containers
without managing servers or clusters. This aligns perfectly with the company's preference to focus on
application maintenance and avoid infrastructure management.

**Option A** requires manual installation and configuration of Docker on EC2 instances, placing the burden of
server maintenance and scaling on the company. **Option B**, while using ECS, still involves managing EC2
worker nodes. This means patching, scaling, and ensuring the availability of the underlying EC2 instances.

**Option D**, using an ECS-optimized AMI on EC2, simplifies some aspects of EC2 management, but the company
is still responsible for the EC2 instances themselves.
Fargate eliminates these responsibilities by handling the provisioning, scaling, and patching of the
infrastructure. The company simply defines the container image, CPU, and memory requirements, and Fargate
handles the rest. This reduces operational overhead and allows the company to focus solely on their critical
applications. Furthermore, Fargate integrates well with other AWS services and offers cost optimization
benefits.https://aws.amazon.com/fargate/https://aws.amazon.com/ecs/

---

## Question 59

**Answer:** **D**

**Explanation:**

The most effective solution for handling 30 TB of daily clickstream data from 300+ global websites and
applications for analysis involves a scalable and robust data ingestion and processing pipeline using AWS's
specialized services for big data. **Option D** is the best approach.
Here's a breakdown:

Data Ingestion (Amazon Kinesis Data Streams): Kinesis Data Streams is designed for real-time ingestion of
high-volume data streams. It can handle the constant flow of clickstream data from numerous sources
globally. It allows the data to be buffered and processed in manageable chunks.
Data Delivery (Amazon Kinesis Data Firehose): Kinesis Data Firehose is ideal for reliably loading data into
data lakes and data warehouses. It can automatically scale to match the incoming data volume and deliver
data to S3. It offers data transformation and batching capabilities.
Data Lake (Amazon S3): S3 provides a scalable and cost-effective storage solution for the large volume of
clickstream data. It serves as a central repository for raw and processed data, forming the foundation of the
data lake.
Data Warehousing (Amazon Redshift): Redshift is a fast, fully managed, petabyte-scale data warehouse
service in the cloud. It is optimized for analytical queries and can efficiently analyze the large dataset stored
in S3.

**Option A** is less desirable because while EMR can process large datasets, using Data Pipeline solely for
archiving and triggering EMR jobs introduces unnecessary complexity. Data Pipeline is typically used for
orchestration, and Kinesis Data Firehose is more streamlined for data delivery to S3. **Option B** involves
managing EC2 instances, which adds operational overhead compared to using managed services like Kinesis
and Redshift. While caching data with CloudFront, as suggested in **Option C**, can improve website
performance, it doesn't directly address the core problem of analyzing 30 TB of clickstream data daily. A
Lambda function triggered by S3 objects may struggle with the sheer volume of data.

In summary, using Kinesis Data Streams and Firehose ensures real-time data ingestion and delivery to a data
lake (S3), where it can be efficiently analyzed by Redshift, offering a scalable, managed, and cost-effective
solution.

---

## Question 60

**Answer:** **C**

**Explanation:**

The correct solution is to create a listener rule on the Application Load Balancer (ALB) to redirect HTTP traffic
to HTTPS (**Option C**). Here's why:
An ALB listens for incoming traffic on specified ports and protocols. To redirect HTTP traffic to HTTPS, you
configure a listener on port 80 (HTTP) and add a rule to redirect all incoming requests to port 443 (HTTPS).

This is a standard practice for ensuring secure communication.

**Option A** (Updating the ALB's network ACL) is incorrect because network ACLs operate at the subnet level
and control inbound and outbound traffic based on IP addresses and ports. While you can restrict HTTP traffic
at the network ACL level, this would block HTTP traffic entirely rather than redirecting it to HTTPS. Network
ACLs are not designed for URL redirection.

**Option B** (Creating a rule to replace HTTP in the URL with HTTPS) is incorrect because ALBs don't directly
manipulate URLs in that way. ALBs can perform content-based routing, but not URL rewriting in the context
described. The primary function of the ALB in this scenario is to redirect traffic based on listener rules.

**Option D** (Replacing the ALB with a Network Load Balancer) is incorrect because Network Load Balancers
(NLBs) operate at Layer 4 (TCP/UDP), while ALBs operate at Layer 7 (Application Layer). NLBs do not have the
capability to inspect HTTP headers or redirect traffic based on the HTTP protocol. Server Name Indication
(SNI) on NLBs handles TLS certificates for multiple domains but does not redirect HTTP to HTTPS. NLBs are
typically used for high-performance, low-latency applications where protocol-level inspection is not required.
An ALB is better suited for HTTP/HTTPS traffic management and URL redirection.

Therefore, the most efficient and appropriate method is to use an ALB listener rule to redirect HTTP traffic to
HTTPS, ensuring all communication with the website is secure.
Further Research:
AWS Documentation on ALB Listeners:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
AWS Documentation on ALB Rules:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-rules.html
AWS Documentation on Network ACLs: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-networkacls.html
AWS Documentation on Network Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html

---

## Question 61

**Answer:** **C**

**Explanation:**

**Option C** is the most efficient and secure solution because it leverages AWS Secrets Manager for credential
management and rotation.

Here's why:

1. Secrets Manager: AWS Secrets Manager is specifically designed for securely storing and managing
sensitive information like database credentials. It eliminates the need to hardcode credentials in
applications.

2. Automatic Rotation: Secrets Manager provides automatic secret rotation, significantly reducing the
operational overhead associated with manually managing credentials. The service handles the
complexities of updating the database and the stored secret.

3. IAM Integration: IAM roles assigned to EC2 instances can be granted permissions to access specific
secrets stored in Secrets Manager. This allows the application running on the EC2 instance to
retrieve the database credentials securely.

4. Least Operational Overhead: Solutions A, B, and D require custom Lambda functions and scheduling
mechanisms to manage credential rotation. **Option C** automates this process, which results in the
lowest operational overhead because Secrets Manager handles the complexity of rotating the
credentials.

5. Security Best Practices: Using Secrets Manager aligns with security best practices by centralizing
and securing sensitive information and using encryption.
Why other options are not ideal:

**Option A**: Storing credentials in instance metadata is not recommended for sensitive information like
database credentials. Also, instance metadata is not designed for automated rotation.

**Option B**: Storing credentials in S3, even encrypted, is a less secure and operationally heavier approach than
using Secrets Manager. Implementing the rotation logic and managing S3 versions introduces unnecessary
complexity.

**Option D**: Parameter Store can store secrets, but automatic rotation of encrypted parameters requires
custom configuration and Lambda functions. Secrets Manager is a more streamlined and secure solution for
this specific use case.
Here are some authoritative links for further research:
AWS Secrets Manager Documentation
Rotating AWS Secrets Manager secrets automatically
AWS Identity and Access Management (IAM)

---

## Question 62

**Answer:** **D**

**Explanation:**

The correct answer is D because it addresses the specific requirements of using a certificate issued by an
external CA and the need to manually rotate it. Let's break down why the other options are incorrect and why
D is the best fit:
A, B, and C are incorrect: These options involve using ACM to issue a certificate. The question explicitly states
that the certificate is issued by an external CA. ACM's managed renewal feature only works for ACM-issued
certificates. Therefore, relying on ACM to issue and automatically rotate the certificate is not possible when
using an externally issued certificate. **Option B** contains the erroneous step of importing key material from a
certificate (a certificate is the key material). **Option C** involves a private certificate authority, an unnecessary
level of complexity when an existing public CA is being used.
D is correct: This option acknowledges the need to import the externally issued certificate into ACM. ACM
serves as a central repository for managing certificates, regardless of where they are issued. Once imported,
the certificate can be associated with the ALB. Because the certificate is externally issued, ACM cannot
automatically renew it. Therefore, the solution leverages Amazon EventBridge (formerly CloudWatch Events)
to monitor the certificate's expiration date. When the certificate is nearing expiry, EventBridge triggers a
notification (e.g., via SNS to an operations team), prompting a manual rotation process. This process involves
obtaining a new certificate from the external CA, importing it into ACM, and updating the ALB to use the new
certificate.

In summary, option D correctly acknowledges the externally issued certificate, utilizes ACM for management,
and implements a notification system to ensure manual rotation occurs before the certificate expires, thus
meeting all requirements.

---

## Question 63

**Answer:** **A**

**Explanation:**

Here's why option A is the most cost-effective solution for the PDF to JPG conversion problem, along with
supporting justifications and links:

**Option A** leverages the strengths of Amazon S3 and AWS Lambda for a serverless and scalable solution. S3
provides highly durable and cost-effective object storage for both the original PDFs and the converted JPGs.
Its event notification system allows triggering the Lambda function directly upon PDF upload, automating the
conversion process. Lambda offers pay-per-execution pricing, meaning you only pay for the compute time
used during the conversion, making it exceptionally cost-efficient for variable workloads. This serverless
approach eliminates the need to manage EC2 instances, reducing operational overhead and associated costs.

**Option B** is incorrect because DynamoDB is primarily designed for fast key-value or document data storage
and retrieval, not for storing large binary files like PDFs and JPGs. Storing these files in DynamoDB would be
significantly more expensive than using S3, and the read/write capacity units required would add to cost
unnecessarily. Also, using DynamoDB streams for processing is less efficient than S3 event notifications in
this scenario.
Options C and D involve using Elastic Beanstalk with EC2 instances and EBS/EFS for storage. While these
options could work, they are less cost-effective because they require maintaining EC2 instances even during
periods of low demand. EBS, being block storage, is primarily for persistent storage attached to EC2
instances, while EFS is better suited for shared file systems. Neither are as economical for storing large
numbers of files as S3. The added operational complexity of managing EC2 instances, Auto Scaling, and
storage volumes further increases the total cost.

In summary, the serverless architecture provided by S3 and Lambda offers the best combination of scalability,
automation, and cost-effectiveness for this specific PDF-to-JPG conversion task.
Supporting Links:
Amazon S3: https://aws.amazon.com/s3/
AWS Lambda: https://aws.amazon.com/lambda/
S3 Event Notifications: https://docs.aws.amazon.com/AmazonS3/latest/userguide/event-notificationsoverview.html
AWS Lambda Pricing: https://aws.amazon.com/lambda/pricing/

---

## Question 64

**Answer:** **D**

**Explanation:**

The correct answer is D because it directly addresses all requirements with a balanced approach to
performance, operational overhead, and minimal disruption. Here's a breakdown:
Minimum Latency: Deploying FSx File Gateway on-premises allows the on-premises workloads to access the
file data stored in FSx for Windows File Server in AWS with minimal latency. The FSx File Gateway acts as a
local cache for frequently accessed files, ensuring quick access for on-premises users and applications.
Access to AWS and On-Premises: FSx for Windows File Server on AWS stores the data in the cloud, providing
access to cloud workloads. The FSx File Gateway provides access to the same data for on-premises
workloads.
Minimized Operational Overhead: FSx File Gateway is a fully managed service, reducing the operational
burden of managing storage infrastructure on-premises. The management of the data is centralized on AWS.
No Significant Changes to File Access Patterns: Both FSx for Windows File Server and FSx File Gateway
support the standard SMB protocol, allowing existing Windows applications to access files without significant
code modifications.

Why other options are incorrect:
A is incorrect because moving all the data to AWS and accessing it over Site-to-Site VPN would likely
increase the latency for on-premises workloads.
B and C are incorrect because S3 File Gateway replicates data to Amazon S3, which is object storage and
doesn't natively support SMB protocol. Thus, the workloads would need to be reconfigured to use S3 APIs,
which would be a significant change to existing file access patterns, and S3 File Gateway on-premises still
might increase the latency for on-premises workloads compared to a dedicated solution like FSx File
Gateway.
Here are some authoritative links for further research:
Amazon FSx for Windows File Server: https://aws.amazon.com/fsx/windows/
Amazon FSx File Gateway: https://aws.amazon.com/fsx/file-gateway/
Amazon S3 File Gateway: https://aws.amazon.com/storagegateway/file/

---

## Question 65

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:
The core requirement is identifying PHI (Protected Health Information) within PDF and JPEG reports uploaded
via API Gateway and Lambda. The solution must minimize operational overhead.

**Option A** (Python Libraries): While feasible, this approach requires significant custom coding to handle PDF
and JPEG parsing (potentially complex) and implementing a PHI identification algorithm. This increases
development effort, testing requirements, and ongoing maintenance, leading to higher operational overhead.

**Option B** (Textract and SageMaker): Textract is excellent for text extraction. However, using SageMaker for
PHI identification introduces unnecessary complexity. SageMaker is designed for building, training, and
deploying custom machine learning models. For a specialized task like PHI detection (which is already
addressed by a dedicated service), SageMaker is overkill and introduces significant operational overhead
related to model management, infrastructure, and training data.

**Option C** (Textract and Comprehend Medical): Textract efficiently extracts text from both PDF and JPEG
formats. Comprehend Medical is a HIPAA-eligible natural language processing (NLP) service specifically
designed for analyzing medical text and identifying PHI. This combination minimizes custom code and
leverages AWS-managed services, resulting in the least operational overhead. It offers built-in PHI detection
capabilities.

**Option D** (Rekognition and Comprehend Medical): Rekognition is primarily designed for image analysis,
including object detection and facial recognition. While it can extract text through OCR (Optical Character
Recognition), Textract is optimized for document processing and will yield better results with PDF and
complex document layouts. Also, Rekognition might not be as accurate as Textract in extracting text from
these specific report formats. Comprehend Medical is suitable for the PHI extraction task, but Rekognition is
not the ideal choice for text extraction in this scenario, creating additional overhead.

Therefore, using Amazon Textract to extract text and Amazon Comprehend Medical to identify PHI offers the
best balance of functionality, accuracy, and minimal operational burden by utilizing purpose-built, managed
AWS services tailored to these specific tasks. This solution aligns with the "less code is better" principle and
simplifies the deployment and maintenance processes.

---

## Question 66

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers the most cost-effective solution while adhering to the stated
requirements of immediate accessibility and long-term retention.
Here's a detailed breakdown:
S3 Standard: Initially, files are stored in S3 Standard for the first 30 days. This ensures fast and frequent
access when the files are actively used. S3 Standard provides high availability (99.99%) and durability
(99.999999999%) for frequently accessed data.
S3 Standard-IA: After 30 days, the lifecycle policy automatically transitions the files to S3 Standard-IA. This
storage class is designed for data that is infrequently accessed but requires rapid retrieval when needed. It
offers lower storage costs compared to S3 Standard while maintaining similar performance characteristics.
Since the question specifies immediate accessibility is always required, S3 Standard-IA is a suitable choice
for infrequently accessed data.
4-Year Retention & Deletion: The lifecycle policy is configured to permanently delete the files after 4 years,
fulfilling the company's retention policy.
Now, let's examine why the other options are less optimal:

**Option A** (S3 Glacier): Moving files directly to S3 Glacier after 30 days is not ideal. S3 Glacier is designed for
archival storage and retrieval can take several hours. The requirement of "immediate accessibility" makes
Glacier an unsuitable option for data that may need to be accessed at any moment.

**Option B** (S3 One Zone-IA): While S3 One Zone-IA offers lower storage costs than S3 Standard-IA, it stores
data in a single Availability Zone. This exposes the data to a higher risk of data loss in the event of an
Availability Zone failure. S3 One Zone-IA is appropriate when data is easily reproducible. However, the
question states that data is not easy to reproduce.

**Option D** (S3 Standard-IA followed by S3 Glacier): Moving to Glacier after 4 years is unnecessary, since
deletion is required at that point. It adds complexity and cost without providing any benefit. Moreover, files
can be stored in S3 Standard-IA for 4 years and then be deleted.

In summary, option C provides the best balance between cost, accessibility, and durability, meeting all of the
company's requirements in the most cost-effective way. Using S3 Standard for immediate needs, transitioning
to S3 Standard-IA for infrequent access, and deleting after 4 years aligns with the best practices for S3
lifecycle management.

---

## Question 67

**Answer:** **D**

**Explanation:**

The most appropriate solution to address the issue of duplicate records in the RDS table, despite the absence
of duplicate messages in the SQS queue, is D. Use the ChangeMessageVisibility API call to increase the
visibility timeout.

Here's a detailed justification:
The problem indicates that the same message is being processed multiple times, leading to duplicate entries
in the RDS database. Since the queue itself isn't the source of duplicates, the issue likely lies in how the EC2
instances are handling message processing and acknowledging completion to SQS.
SQS employs a visibility timeout mechanism. When an EC2 instance retrieves a message from the queue, the
message becomes invisible to other consumers for a specified duration (the visibility timeout). This prevents
other instances from processing the same message simultaneously. The receiving instance is then expected
to delete the message from the queue upon successful processing.
If an EC2 instance fails to process a message within the visibility timeout (e.g., due to a crash, network issue,
or slow processing), the message becomes visible again in the queue. This allows another instance (or even
the original instance after recovery) to pick up the message and re-process it, hence leading to duplicates.
Increasing the visibility timeout using the ChangeMessageVisibility API call provides more time for the EC2
instance to process the message and delete it from the queue before it becomes visible again. This reduces
the likelihood of another instance grabbing the same message and creating a duplicate record in the RDS
table.
Options A, B, and C are not relevant to addressing the identified problem.
A (CreateQueue): Creating a new queue doesn't solve the underlying issue of messages being processed
multiple times.
B (AddPermission): Adding permissions is about access control, not about preventing duplicate processing.
C (ReceiveMessage Wait Time): While adjusting wait time can improve polling efficiency, it doesn't prevent
duplicate processing if an instance fails to process a message within the visibility timeout.
By increasing the visibility timeout to a value that comfortably exceeds the maximum expected processing
time for a message, the solution architect can minimize the risk of duplicate processing and ensure messages
are processed only once. In cases where processing time can vary greatly, a combination of increased visibility
timeout and implementing idempotent message processing logic in the application can provide a robust
solution against duplicates. Idempotency ensures that even if a message is processed multiple times, the
result is the same as processing it once, preventing data inconsistencies. Consider using Dead Letter Queues
to manage message that exceeds retry count.
Relevant Documentation:
Amazon SQS Visibility Timeout:

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibilitytimeout.html
Amazon SQS ChangeMessageVisibility:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html

---

## Question 68

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides a cost-effective solution for high availability and consistent low
latency. Direct Connect (DX) offers a dedicated network connection from the on-premises environment to
AWS, fulfilling the requirement for high availability and consistent low latency under normal circumstances.
This dedicated connection bypasses the public internet, resulting in more predictable and lower latency than
VPN connections.
The requirement to minimize costs while accepting slower traffic during failover is met by using a VPN
connection as a backup. VPN connections are established over the internet and are generally less expensive
than a redundant Direct Connect connection. When the primary Direct Connect link fails, traffic can be routed
through the VPN connection, ensuring business continuity, although at a reduced speed and potentially higher
latency.

**Option B** is incorrect because VPN connections, while cost-effective, do not offer the consistently low latency
required during normal operation. VPN connections are susceptible to internet traffic fluctuations.

**Option C** is incorrect as it proposes a redundant Direct Connect connection. While this would offer higher
availability, it significantly increases costs. The company has already stated a willingness to accept slower
traffic if the primary connection fails, making the cost of a second Direct Connect circuit unnecessary.

**Option D** is incorrect because the Direct Connect failover attribute within the AWS CLI doesn't automatically
create a backup connection. The Direct Connect failover attribute allows you to influence which path traffic
takes but does not instantiate backup connections. It influences the traffic routing, given the primary
connection is already established. The failover attribute helps prioritize connections and adjust routing
preferences but will not create connections from scratch.
In conclusion, a primary Direct Connect connection coupled with a VPN as a fallback mechanism delivers the
best balance between high performance and cost efficiency, aligning perfectly with the company's
requirements.
Further Research:

AWS Direct Connect: https://aws.amazon.com/directconnect/
AWS VPN: https://aws.amazon.com/vpn/

---

## Question 69

**Answer:** **B**

**Explanation:**

**Option B** is the most appropriate solution because it achieves high availability for both the application and the
database with minimal operational overhead.
Here's a detailed breakdown:
Auto Scaling Group with Multiple Availability Zones (AZs): Spreading EC2 instances across multiple AZs
ensures that if one AZ fails, the application remains available in other AZs. This provides redundancy and fault
tolerance at the application tier.
Multi-AZ Aurora PostgreSQL: Configuring the database as Multi-AZ creates a synchronous standby replica in
a different AZ. If the primary database instance fails, Aurora automatically fails over to the standby,
minimizing downtime and data loss. This addresses the high availability requirement for the database.
Amazon RDS Proxy: RDS Proxy is an optional service that further enhances availability and scalability. It
manages database connections, reducing the load on the database and protecting it from connection storms.
While not strictly required for basic Multi-AZ failover, it improves connection management, especially under
heavy load and failover situations.
Other options are less efficient or introduce unnecessary complexity:

**Option A** (Cross-Region Replication): Using cross-region replication for the database adds complexity and
potential latency. It is also overkill since the application is running in a single region. Also, failover between
regions generally introduces more downtime than a Multi-AZ failover.

**Option C** (Hourly Snapshots): Relying on snapshots for recovery introduces a significant recovery time
objective (RTO) and recovery point objective (RPO). Data loss is possible up to the last snapshot. This is not
suitable for a business-critical application requiring minimal downtime and data loss.

**Option D** (Multi-Region ASG and S3/Lambda integration): This introduces substantial architectural
complexity for data persistence compared to using Aurora Multi-AZ. The S3/Lambda pathway for database
writes introduces latency and increased operational overhead.

Therefore, configuring the ASG across multiple AZs, using Aurora Multi-AZ, and leveraging RDS Proxy

provide the best balance between high availability, minimal downtime/data loss, and operational simplicity,
making it the most suitable option.
Supporting Links:
Amazon Aurora High Availability: https://aws.amazon.com/rds/aurora/features/
Amazon RDS Proxy: https://aws.amazon.com/rds/proxy/
Auto Scaling Groups: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html

---

## Question 70

**Answer:** **C**

**Explanation:**

The correct answer is C, which involves replacing the Network Load Balancer (NLB) with an Application Load
Balancer (ALB) and configuring HTTP health checks and an Auto Scaling action. Here's why:
NLB Limitations: NLBs operate at Layer 4 (TCP/UDP), meaning they are unaware of the application-layer
protocol (HTTP) and cannot interpret HTTP status codes. They can only check if a TCP connection can be
established on the configured port, not if the application is functioning correctly.
https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html
ALB's HTTP Awareness: ALBs, on the other hand, operate at Layer 7 (HTTP/HTTPS), enabling them to
perform health checks based on HTTP status codes (e.g., 200 OK, 400 Bad Request, 500 Internal Server
Error). This allows the ALB to determine if the application is truly healthy and route traffic accordingly.
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
HTTP Health Checks: By configuring HTTP health checks on the ALB with a specific URL, the load balancer
will periodically send requests to that URL and verify the HTTP status code returned. If the status code
indicates an error, the ALB will mark the instance as unhealthy.
Auto Scaling Integration: The Auto Scaling group can be configured with lifecycle hooks or be configured
directly to respond to ALB health check failures. When the ALB marks an instance as unhealthy, Auto Scaling
can be configured to automatically replace the unhealthy instance with a new one, thus improving application
availability without manual intervention. https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scalingprocess.html
Why other options are wrong:

**A:** NLBs cannot do HTTP health checks.

**B:** Requires custom scripting, and the company wants to avoid it. Also, it is less reliable than ALB health
checks.

**D:** While CloudWatch can monitor the NLB, it cannot detect HTTP-level errors due to NLB's Layer 4 operation.
Monitoring UnhealthyHostCount may only indicate that an EC2 instance is unreachable at the TCP level, not
that the application is failing to respond to HTTP requests.

In summary, switching to an ALB enables HTTP health checks, which allows for the automated detection and
replacement of unhealthy instances, fulfilling the company's requirements for improved application
availability without custom scripting or code.

---

## Question 71

**Answer:** **B**

**Explanation:**

The correct answer is B because it aligns with the stated RPO and RTO requirements most effectively and
efficiently.

Here's why:
DynamoDB Point-in-Time Recovery (PITR): DynamoDB PITR provides automatic backups of your table data.
You can restore the table to any point in time within the past 35 days. This perfectly addresses the need for
recovering data to a specific point within the last 15 minutes (RPO). The restoration process also falls within
the 1-hour RTO.
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html

Why other options are incorrect:

**A.** DynamoDB Global Tables: While Global Tables provide replication for high availability and disaster
recovery, their primary purpose is not granular point-in-time recovery for data corruption scenarios within a
single table. Switching regions might help avoid regional failures, but if the corruption is replicated, it won't
solve the problem. They do not meet the specific RPO requirement of 15 minutes for data corruption within a
table.

**C.** Export to S3 Glacier: Exporting data to S3 Glacier is a suitable strategy for long-term archiving and
compliance, but it is too slow for a 1-hour RTO. Glacier is designed for infrequently accessed data, and
retrieving data from Glacier can take several hours. This does not satisfy the 1-hour RTO requirement.

**D.** EBS Snapshots for DynamoDB: DynamoDB does not reside on EBS volumes. It is a NoSQL database service
that internally handles storage. Taking EBS snapshots won't capture the data or the configuration of your
DynamoDB table, and it's not the correct way to back up DynamoDB data.

In summary, DynamoDB PITR is the most appropriate solution as it offers the required granularity for recovery,
meeting both the 15-minute RPO and the 1-hour RTO. Other options do not directly address the specific
requirements of recovering from data corruption with the given recovery objectives.

---

## Question 72

**Answer:** **D**

**Explanation:**

The correct solution is D. Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy
that allows access to the S3 buckets.

Here's a detailed justification:
The core problem is the data transfer cost between the application and S3 within the same AWS Region. Data
transfer to S3 is generally free. However, data transfer from S3 incurs costs, and these costs increase
significantly when the data traverses the public internet.
Options A, B, and C all involve routing traffic via the public internet, defeating the purpose of cost reduction.
Deploying API Gateway (A), NAT Gateway (B), or using an Internet Gateway directly (C) means the application
is accessing S3 over the internet, incurring outbound data transfer fees. While API Gateway offers other
benefits, in this scenario, it adds unnecessary complexity and cost. Similarly, NAT Gateways are for enabling
instances in private subnets to access the internet, not to optimize S3 access.

**Option D** leverages a VPC endpoint, which establishes a direct, private connection between your VPC and S3,
without traversing the public internet. A VPC endpoint specifically for S3 creates a gateway within your VPC
that allows your application to access S3 buckets as if they were within the same network. This eliminates
public internet data transfer costs, as traffic stays within the AWS network.
Furthermore, the endpoint policy attached to the S3 VPC gateway endpoint controls access to the S3
buckets. This policy specifies which S3 buckets and actions are allowed for resources within the VPC,
enhancing security. It restricts access based on IAM roles, users, and conditions. Without the policy, the
endpoint won't function.

Therefore, deploying an S3 VPC gateway endpoint and attaching an endpoint policy is the most efficient and
cost-effective way to enable the photo processing application to access S3 buckets without incurring public
internet data transfer costs. It keeps the data within the AWS internal network, reducing costs and improving
security.
Here are authoritative links for further research:

AWS VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway VPC Endpoints for S3: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
S3 Pricing: https://aws.amazon.com/s3/pricing/ (Focus on the "Data Transfer" section)

---

## Question 73

**Answer:** **CD**

**Explanation:**

The correct answer is CD. Here's why:

**C:** The bastion host acts as a secure gateway to the application instances. To allow access from the onpremises network, the security group associated with the bastion host must permit inbound traffic from the
company's external IP range. This restricts access to only traffic originating from the known and trusted
company network, enhancing security. This is because all traffic from on-premise will come through the
company's internet connection, which will have a specific, and usually static, external IP range.

**D:** The application instances in the private subnet should not be directly accessible from the internet. Instead,
access is granted via the bastion host. Therefore, the application instances' security group should only allow
inbound SSH traffic from the private IP address of the bastion host. This ensures that only traffic originating
from the bastion host can connect to the application instances, restricting the attack surface. This
implements a layered security approach.

Why the other options are incorrect:

**A:** Restricting inbound access to the bastion host to only application instances would prevent the on-premises
network from accessing it.

**B:** Allowing the internal IP range of the company would not work, because traffic from the company will be
routed through the internet, and therefore come from the external IP range of the company.

**E:** Using the public IP address of the bastion host in the application instance's security group is less secure
because public IP addresses can sometimes change, and more importantly, defeats the purpose of using the
bastion host as a secure intermediary, as the application servers are exposed to outside IPs.
Supporting Concepts and Links:
Bastion Host: A server whose purpose is to provide access to a private network from an external network,
such as the internet. https://aws.amazon.com/quickstart/architecture/linux-bastion/

Security Groups: Act as a virtual firewall for your EC2 instances to control inbound and outbound traffic.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html
Principle of Least Privilege: Granting only the minimum necessary permissions. In this case, restricting
access to the bastion host and application instances based on IP addresses aligns with this principle.

---

## Question 74

**Answer:** **AC**

**Explanation:**

Here's a detailed justification for why options A and C are the correct choices for configuring security groups
in the given two-tier web application scenario:

**Option A**: Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.
This configuration allows HTTPS traffic (port 443) from any source (0.0.0.0/0) to reach the web servers. Since
the web tier is public-facing, it needs to accept inbound traffic from users on the internet. HTTPS is the
standard secure protocol for web communication, encrypting data in transit. Restricting inbound access to
port 443 (and potentially port 80 for HTTP redirects to HTTPS) minimizes the attack surface. A more
restrictive approach could involve limiting access to specific IP ranges of known users or employing a Web
Application Firewall (WAF) for more granular control.

**Option C**: Configure the security group for the database tier to allow inbound traffic on port 1433 from the
security group for the web tier.
This configuration allows traffic on port 1433 (the default port for Microsoft SQL Server) from the web tier's
security group to reach the database tier. This is crucial for the web servers to connect to the database server.
Instead of specifying IP addresses, using the web tier's security group ensures that only instances within that
group can connect to the database. This dynamic association simplifies management, as new web servers
added to the web tier automatically gain database access without manually updating IP addresses in the
database security group. The database tier should only allow traffic from the web tier and no other sources.

Why other options are incorrect:

**Option B**: The web tier needs to make outbound calls, but likely not on port 443 to 0.0.0.0/0. The web tier
might need outbound access to other AWS services or external APIs, but this would be governed by different
rules and likely restricted to specific services or IP ranges rather than the entire internet on a particular port
like 443.

**Option D** and E: The database tier only needs to accept inbound connections from the web tier on port 1433. It
does not need to initiate outbound traffic to the web tier. **Option E** is also incorrect in that it allows inbound

traffic on port 443, which is unneeded and increases the attack surface.
Key Cloud Computing Concepts Reinforced:
Security Groups: Acting as virtual firewalls controlling inbound and outbound traffic at the instance level.
Least Privilege Principle: Granting only the necessary permissions to resources, minimizing potential damage
from security breaches.
Two-Tier Architecture: A common application architecture separating the presentation tier (web tier) from
the data tier (database tier).
Network Segmentation: Isolating resources (like the database tier in a private subnet) to reduce the blast
radius of security incidents.

---

## Question 75

**Answer:** **A**

**Explanation:**

Here's a breakdown of why option A is the best choice and why the others fall short, along with supporting
concepts and links.

**Option A** (API Gateway + Lambda + SQS) offers the most operationally efficient and modern solution for the
company's requirements. Let's dissect it:
Amazon API Gateway: Acts as a front door for the application. It allows the company to manage API access,
authorization, throttling, and versioning in a centralized and scalable manner. It abstracts the underlying
complexities of the backend services. https://aws.amazon.com/api-gateway/
AWS Lambda: Enables the company to modernize its application by leveraging serverless computing. Lambda
functions can handle individual requests or transactions without the need to manage servers. This
significantly reduces operational overhead and allows for automatic scaling based on demand. Lambda can
also integrate directly with API Gateway. https://aws.amazon.com/lambda/
Amazon SQS: Introduces asynchronous communication between the application tiers. When one tier is

overloaded, SQS acts as a buffer, preventing transaction drops. The application can decouple its components
so that they can fail or go down at any time. SQS provides durability and fault tolerance.
https://aws.amazon.com/sqs/

Why other options are less suitable:

**Option B**: Increasing EC2 instance sizes (vertical scaling) might alleviate the problem in the short term, but it's
not a modern or efficient solution. It does not address the root cause of the issue and does not allow you to
decouple components. It involves unnecessary resource allocation even during periods of low demand.

**Option C**: While SNS can handle messaging, it's primarily designed for push notifications and fanout
scenarios. It doesn't provide the same level of queuing and buffering capabilities as SQS, making it less
suitable for preventing transaction drops during overload. Also, running application servers on EC2 within an
Auto Scaling group is not as operationally efficient as Lambda, which eliminates server management.

**Option D**: Using SQS is beneficial, but continuing to run application servers on EC2 instances with Auto
Scaling groups isn't as operationally efficient as using Lambda. Lambda reduces management overhead by
abstracting the underlying infrastructure. EC2 instances can add management overhead in the long term.

---

## Question 76

**Answer:** **B**

**Explanation:**

The correct answer is B. AWS DataSync over AWS Direct Connect. Here's a detailed justification:
Data Volume and Real-Time Analytics: The company generates a significant 10 TB of data daily and requires
near-real-time analytics. This necessitates a robust and efficient transfer mechanism.
Reliability and Security: Secure transfer is paramount due to the sensitive nature of the data.
AWS DataSync: AWS DataSync is a purpose-built service designed for moving large amounts of data
between on-premises storage and AWS services. It handles data encryption in transit and at rest, ensuring
data security. DataSync is optimized for network utilization, maximizing transfer speeds and minimizing
transfer times. https://aws.amazon.com/datasync/
AWS Direct Connect: AWS Direct Connect establishes a dedicated network connection from the company's
on-premises data center to AWS. This connection bypasses the public internet, providing a more reliable,
secure, and consistent network experience. Direct Connect significantly reduces network latency and
increases bandwidth compared to internet-based transfers. https://aws.amazon.com/directconnect/
Why A is less ideal: While AWS DataSync is appropriate, transferring over the public internet (option A)
introduces vulnerabilities to security breaches and network congestion, making the transfer less reliable and
secure than using a dedicated connection.
Why C and D are incorrect: AWS Database Migration Service (DMS) is primarily for migrating databases.

While it could technically transfer JSON files stored as BLOBs, it's not designed or optimized for this purpose.
DataSync is much more efficient and appropriate for large file transfers. Additionally, DMS adds unnecessary
complexity and overhead for a simple file transfer scenario.
Combined benefits of DataSync and Direct Connect: By combining AWS DataSync with AWS Direct Connect,
the company gets a secure, reliable, and high-throughput data transfer pipeline. Direct Connect minimizes
latency and ensures consistent network performance, while DataSync optimizes the transfer process. The
encryption during transfer provided by DataSync in conjunction with Direct Connect reduces exposure of the
data.
Consistency: Consistent, reliable data transfer is crucial for supporting near-real-time analytics because
interruptions or delays in the data transfer can result in outdated or incomplete analyses.
Cost considerations: While Direct Connect involves additional costs, the improved reliability, security, and
throughput may justify the investment, especially considering the critical nature of the data and analytics.

Therefore, using AWS DataSync over AWS Direct Connect is the most reliable data transfer solution for
transferring the instrumentation data to Amazon S3 because it offers enhanced security, dedicated
bandwidth, and optimized transfer mechanisms.

---

## Question 77

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers a serverless, scalable, and managed solution for real-time data
ingestion with minimal operational overhead.

Here's why:
API Gateway: Amazon API Gateway allows you to create and manage APIs without managing any servers. It
handles tasks like traffic management, authorization, and monitoring, significantly reducing operational
burden compared to hosting an API on an EC2 instance. (Reference: https://aws.amazon.com/api-gateway/)
Kinesis Data Streams: Kinesis Data Streams is a fully managed, scalable, and durable real-time data
streaming service. It's designed to ingest high-velocity data streams. Using it directly as the target of the API
ensures immediate ingestion.
Kinesis Data Firehose: Kinesis Data Firehose is designed for loading data into data lakes and data
warehouses. Using it with Kinesis Data Streams as a source is a common pattern. Firehose automatically
scales, buffers, and compresses data. (Reference: https://aws.amazon.com/kinesis/data-firehose/)
Lambda Functions: Lambda allows you to execute code without provisioning or managing servers. Using

Lambda functions within the Kinesis Data Firehose delivery stream enables real-time data transformations
without the operational overhead of managing EC2 instances. This is done during data loading to S3 by
Firehose (Reference: https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html)
S3: Amazon S3 provides highly durable and scalable object storage, ideal for storing the transformed data.

Why other options are less suitable:

**Option A**: Hosting the API on an EC2 instance increases operational overhead due to server management,
patching, scaling, and monitoring.

**Option B**: AWS Glue is primarily designed for ETL (Extract, Transform, Load) jobs, which are typically batchoriented, and is not the optimal solution for real-time data ingestion. AWS Glue is also overkill for the simple
transformation needed in this case. The "stop source/destination checking" is also a security concern and not
needed with the API Gateway/Kinesis solution.

**Option D**: Similar to B, using AWS Glue for data transformation is generally better suited for batch-oriented
ETL pipelines, and API Gateway doesn't natively integrate with it for real-time streaming.

Therefore, option C is the most efficient and cost-effective choice for real-time data ingestion with the least
operational overhead by leveraging serverless services.

---

## Question 78

**Answer:** **B**

**Explanation:**

The correct answer is B: Use AWS Backup to create backup schedules and retention policies for the table.
This is the most operationally efficient solution for retaining DynamoDB data for 7 years for several reasons:

1. Centralized Backup Management: AWS Backup provides a single pane of glass to manage backups
across various AWS services, including DynamoDB. This simplifies backup management and reduces
the operational overhead associated with managing backups using separate service-specific tools.
https://aws.amazon.com/backup/

2. Automated Scheduling and Retention: AWS Backup allows defining backup schedules and retention
policies that automatically handle the creation and deletion of backups based on the defined
parameters. This eliminates the need for manual intervention and ensures compliance with the 7-year
retention requirement.

3. Compliance and Auditing: AWS Backup offers features for compliance reporting and auditing,
allowing you to demonstrate adherence to data retention policies. https://docs.aws.amazon.com/awsbackup/latest/devguide/whatis.html

4. Cost Optimization: AWS Backup optimizes backup storage by using incremental backups and data
compression, which helps reduce storage costs.
Now, let's look at why other options are less efficient:

**A.** DynamoDB Point-in-Time Recovery (PITR): While PITR allows restoring the table to any point in time within
the past 35 days, it doesn't satisfy the 7-year retention requirement.
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html

**C.** On-Demand Backups with S3 Lifecycle: Creating on-demand backups manually is not operationally
efficient because it requires manual intervention and scheduling. Also, managing backups in S3 requires
configuring S3 Lifecycle rules, adding operational complexity. The responsibility of remembering to perform
these tasks remains with the user.

**D.** EventBridge, Lambda, and S3 Lifecycle: While this approach can meet the retention requirement, it
involves more complex configurations than using AWS Backup. Building and maintaining a custom Lambda
function introduces operational overhead for development, testing, and maintenance. The management of the
S3 lifecycle, though automated, adds to the solution's complexity compared to AWS Backup.

---

## Question 79

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A (Create a DynamoDB table in on-demand capacity mode) is the
most appropriate solution for the scenario described:
The scenario highlights two key cost optimization concerns: the table is largely unused during mornings, and
traffic is unpredictable with rapid spikes during evenings. On-demand capacity mode is ideally suited for
these situations. In on-demand capacity mode, DynamoDB automatically scales capacity in response to actual
workload needs. This means you only pay for the reads and writes your application performs, without needing
to provision capacity upfront. This aligns perfectly with the morning downtime where no costs are incurred.
Because traffic spikes happen rapidly, provisioned capacity with autoscaling (option C) might not react
quickly enough. Autoscaling takes some time to adjust capacity, potentially leading to throttling during the
initial moments of a spike. On-demand mode, on the other hand, scales instantly.
A global secondary index (option B) is useful for querying data using attributes other than the primary key but
doesn't address the cost optimization and unpredictable traffic concerns. A global table (option D) is for multiregion replication for disaster recovery and low-latency access in different geographical areas, which is also
irrelevant to the given problem. It would simply increase costs without providing a benefit.

Therefore, on-demand capacity mode provides the best balance of cost efficiency during periods of low
activity and responsiveness to unpredictable, rapid traffic spikes by eliminating the need for upfront capacity

planning and enabling automatic and instant scaling.
Here are some resources for further reading:

DynamoDB On-Demand Capacity:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks. ReadWriteCapacityMode.html#Ho
DynamoDB Auto Scaling:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html

---

## Question 80

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:
A is incorrect: Making the AMI and snapshots publicly available is highly insecure. It exposes the company's
data to anyone, violating confidentiality and compliance requirements.
B is correct: Modifying the launchPermission property of the AMI allows you to selectively share the AMI with
the MSP Partner's AWS account. This approach limits access to only the intended recipient. Crucially,
because the EBS volumes are encrypted with a KMS key, the MSP Partner's account needs permission to use
that key. Modifying the key policy to grant the MSP Partner's AWS account the necessary permissions
enables them to launch instances from the AMI. This balances security with functionality, allowing the MSP
Partner to use the shared AMI while maintaining control over access to the underlying data.
C is incorrect: While sharing the AMI with the MSP's account is correct, modifying the key policy to trust a
new KMS key owned by the MSP is less straightforward and potentially less secure. This would necessitate
re-encrypting the EBS volumes using the new key, adding unnecessary complexity and potential for data loss
or corruption. Also, it requires the original account to relinquish some control over the encryption process. It is
generally best practice to maintain control of KMS keys used to encrypt your data whenever possible.
D is incorrect: Exporting the AMI and storing it in an S3 bucket, even if encrypted with the MSP's KMS key,
introduces unnecessary complexity and potential vulnerabilities. It involves creating a copy of the AMI, which
can increase storage costs and introduce inconsistencies. Furthermore, exporting and importing AMIs can be
time-consuming and may require downtime. Sharing the AMI directly via launchPermission is a more efficient
and secure approach.

In summary, option B provides the most secure and efficient way to share the encrypted AMI with the MSP
Partner by granting the MSP Partner access to the existing KMS key used to encrypt the EBS volumes,
without exposing the AMI publicly or needing to create copies.
Supporting links:
Sharing AMIs: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html
KMS Key Policies: https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
Encryption at Rest with KMS: https://docs.aws.amazon.com/kms/latest/developerguide/servicessupported.html

---

## Question 81

**Answer:** **C**

**Explanation:**

The correct answer is C because it utilizes Amazon SQS for durable and loosely coupled job storage and an
Auto Scaling group configured to scale based on the queue's depth, aligning with the requirements. Here's a
breakdown:
Amazon SQS for Durable Storage and Decoupling: SQS (Simple Queue Service) acts as a message queue,
providing durable storage for the jobs. This ensures that jobs are not lost even if application instances fail and
promotes loose coupling between the job producer and the processor. https://aws.amazon.com/sqs/
AMI and Launch Template: The Amazon Machine Image (AMI) provides a template for launching EC2
instances, and the launch template specifies the configuration for instances within the Auto Scaling group,
including the AMI, instance type, and security groups. Using Launch Templates over Launch Configurations is
generally recommended due to their added functionality.
https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates-vs-launch-configurations.html
Auto Scaling Group: The Auto Scaling group allows for the dynamic provisioning and termination of EC2
instances based on defined policies. This enables the application to scale up or down depending on the job
load. https://aws.amazon.com/autoscaling/

Scaling Policy Based on SQS Queue Depth: By setting the scaling policy to add or remove nodes based on
the number of items in the SQS queue, the Auto Scaling group automatically adjusts the number of
processing instances to match the workload. This ensures efficient resource utilization and timely processing
of jobs.
Options A and D incorrectly use Amazon SNS. SNS (Simple Notification Service) is designed for publishsubscribe messaging, suitable for broadcasting messages to multiple subscribers but not for queueing jobs
that need to be reliably processed one by one. SNS does not provide built-in durability in the same way as
SQS. https://aws.amazon.com/sns/

**Option B** uses network usage for scaling. Scaling based on network usage is not directly tied to the number of
jobs waiting to be processed, therefore not meeting the requirement efficiently.

---

## Question 82

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution:

**Option B**: Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure
Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple
Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.
This approach leverages the strengths of three AWS services for proactive certificate expiration
management:

1. AWS Config: AWS Config continuously monitors and records the configuration of your AWS
resources, including ACM certificates. You can define Config rules to evaluate whether your
resources comply with desired configurations. In this case, you'd create a Config rule that checks if
any ACM certificates are expiring within the next 30 days. If a certificate is found to be expiring soon,
the rule marks the certificate as "noncompliant."

2. Amazon EventBridge (Amazon CloudWatch Events): EventBridge enables you to react to changes in
your AWS environment. We can configure an EventBridge rule to listen for events from AWS Config
related to "noncompliant" resource changes. Specifically, we're looking for events indicating that a
certificate has been flagged as noncompliant because it's nearing expiration.

3. Amazon Simple Notification Service (Amazon SNS): SNS is a messaging service that facilitates
sending notifications. EventBridge, upon detecting a noncompliant certificate via Config, triggers the
SNS topic, which in turn sends a notification to the security team.
Why this is superior to the other options:

**Option A** (ACM Rule): ACM itself doesn't directly offer native rules to trigger notifications based on
certificate expiry dates. While ACM manages renewals, creating daily custom messages and managing logic
is inefficient and not within ACM's intended functionality.

**Option C** (Trusted Advisor): While Trusted Advisor provides best practice checks, including certificate
expiration, it's not designed for real-time, automated notifications. Relying solely on Trusted Advisor requires
manual checks or CloudWatch Alarms based on limited metrics, which is less proactive and harder to
customize compared to AWS Config. Additionally, Trusted Advisor might have limitations on the frequency of
checks.

**Option D** (EventBridge and Lambda): Although feasible, this option is more complex. EventBridge would need
a custom pattern to identify certificates expiring within 30 days. A Lambda function would then be needed to
parse the event data and send the SNS notification. This adds overhead in terms of development,
maintenance, and potential for Lambda function errors. The native Config rule simplifies the process.
Benefits of **Option B**:
Automation: Fully automated monitoring and notification process.
Proactive: Provides notification 30 days before expiration, allowing ample time for renewal or replacement.
Scalable: Easily scales to handle a large number of certificates.
Centralized Configuration Management: Leverages the strengths of AWS Config for infrastructure-as-code
and compliance tracking.
Minimal Custom Code: Relies on managed services, reducing the need for custom code and associated
maintenance.
Supporting Links:
AWS Config: https://aws.amazon.com/config/
AWS EventBridge: https://aws.amazon.com/eventbridge/
Amazon SNS: https://aws.amazon.com/sns/
AWS Certificate Manager (ACM): https://aws.amazon.com/certificate-manager/

In summary, **Option B** provides the most efficient, scalable, and manageable solution by integrating AWS
Config for compliance checks, EventBridge for event-driven automation, and SNS for reliable notifications. It
minimizes custom code while providing proactive and automated certificate expiration monitoring.

---

## Question 83

**Answer:** **C**

**Explanation:**

The correct answer is C: Use Amazon CloudFront with a custom origin pointing to the on-premises servers.

Here's why:
Explanation:
CloudFront is a Content Delivery Network (CDN) service. It caches static and dynamic content at edge
locations around the world. By using CloudFront with a custom origin (pointing to the on-premises servers in
the United States), the company can serve the website's content from locations closer to European users,
significantly reducing latency and improving loading times. This immediate solution addresses the primary
need of optimizing site loading times for European users without requiring significant infrastructure changes
or backend migration.

**Option A** is incorrect because migrating the entire site to a new EC2 instance in us-east-1 will not improve
performance for European users. It is still geographically distant from them.

**Option B** is incorrect because moving the entire website to S3 and using Cross-Region Replication does not
address the dynamic nature of the website. S3 is best suited for static content. Also, replicating the entire
website to a new region is an unnecessary and time-consuming solution if the backend must remain in the US.

**Option D** is incorrect because Route 53 geoproximity routing can route traffic based on geographical location,
it does not cache content. Therefore, while it can direct European users to the US servers, the latency issues
associated with distance remain.
Why CloudFront is the best immediate solution:
CDN Caching: CloudFront caches content at edge locations in Europe, minimizing the distance data has to
travel to reach users.
Custom Origin: The website backend remaining in the US allows the application logic to remain where it is,
enabling quick implementation without significant changes to the current architecture.
Fast Implementation: CloudFront is designed to be easy to set up and integrate with existing infrastructure,
allowing for a rapid rollout.
Cost-Effective: Compared to replicating the entire website to a new region, using CloudFront is more costeffective. It only caches necessary content.
Dynamic content acceleration: CloudFront can cache dynamic content.
Supporting Links:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Using Custom Origins with CloudFront:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-custom-origin.html

---

## Question 84

**Answer:** **B**

**Explanation:**

The optimal solution balances cost savings and operational needs. **Option B**, using Reserved Instances for
production and On-Demand instances for development/test, achieves this balance most effectively.
Production instances run 24/7. Reserved Instances provide significant cost savings (up to 75%) compared to
On-Demand pricing for long-term, consistent usage. Committing to Reserved Instances for production
ensures predictable pricing and lower overall expenses since production workload is constant.
https://aws.amazon.com/ec2/pricing/reserved-instances/
Development and test instances are only needed for at least 8 hours a day. While automation will shut them
down when not in use, Spot Instances (**Option A** & D) are unsuitable for development and test environments.
Spot Instances can be interrupted with little notice, disrupting crucial testing or development tasks. Spot
Blocks (**Option C** & D) offer more reliability but typically involve higher prices than On-Demand.
Since the instances are only run for 8 hours, On-Demand Instances offer the most cost-effective option for
Development and Test environments. They provide flexibility without any long-term commitments or risk of
interruption. The minimal usage duration does not justify the upfront investment and commitment required for
Reserved Instances. https://aws.amazon.com/ec2/pricing/on-demand/

Therefore, Reserved Instances for the stable, 24/7 production environment and On-Demand Instances for the
shorter, flexible development and test environments gives the best cost benefit.

---

## Question 85

**Answer:** **A**

**Explanation:**

The correct answer is A: Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3
Object Lock enabled. This solution directly addresses the regulatory requirement that documents cannot be
modified or deleted after storage. Let's break down why this works and why other options are less suitable.
Justification for **Option A**:

S3 Versioning: Enabling S3 Versioning ensures that every change to an object in the bucket creates a new
version. This means that if a user attempts to modify a document, the original version remains intact, fulfilling
the immutability requirement.
S3 Object Lock: S3 Object Lock prevents objects from being deleted or overwritten for a fixed amount of time
or indefinitely. There are two modes:
Governance mode: Allows certain users with specific permissions to bypass the lock.
Compliance mode: Prevents anyone, including the root user, from deleting or overwriting the locked object.
This is crucial for meeting strict regulatory requirements.
Combination is Key: Using S3 Versioning alone only ensures previous versions are kept; it doesn't prevent
deletion. S3 Object Lock, combined with versioning, provides the complete immutability guarantee.
Why Other Options Are Incorrect:

**Option B**: S3 with Lifecycle Policy: While S3 Lifecycle policies are useful for archiving data to cheaper
storage tiers, they don't prevent modification or deletion during the active period. Archiving simply moves the
data; it doesn't lock it.

**Option C**: S3 Versioning and ACL: While S3 Versioning ensures that previous versions are retained, it doesn't,
by itself, prevent deletion of objects. Additionally, ACLs can be complex to manage and can be easily
misconfigured, making them less reliable for regulatory compliance. They also don't provide deletion
prevention like Object Lock.

**Option D**: Amazon EFS in Read-Only Mode: EFS is a network file system, and while mounting it in read-only
mode would prevent modifications through the mount point, it doesn't guarantee immutability. An
administrator with access to the underlying EFS infrastructure could still modify or delete the files. EFS also
lacks built-in versioning and object locking features designed for immutability like S3.
In summary: S3 Versioning and S3 Object Lock, particularly in Compliance mode, offer a robust and easily
auditable solution to guarantee that documents cannot be modified or deleted, fulfilling the stringent
regulatory requirement. S3's features are specifically designed for object storage and data durability with
compliance in mind.

---

## Question 86

**Answer:** **A**

**Explanation:**

The best solution is A: Store the database user credentials in AWS Secrets Manager and grant web servers
IAM permissions to access it.

Here's why:
Secure Credential Storage: AWS Secrets Manager is specifically designed for managing secrets like
database credentials. It encrypts secrets at rest and in transit, providing a high level of security.
Automatic Rotation: Secrets Manager allows automatic rotation of database credentials, fulfilling the
requirement for frequent credential rotation. This significantly reduces the risk associated with long-lived
credentials.
Centralized Management: It offers a central location to manage and control access to the database
credentials. Changes can be made easily and applied across all web servers.
IAM Integration: Secrets Manager integrates seamlessly with IAM, allowing fine-grained control over which
web servers can access specific secrets. This adheres to the principle of least privilege.
Auditing: AWS CloudTrail logs all access to secrets, providing a comprehensive audit trail for compliance and
security monitoring.
Options B, C, and D are less suitable:
B (Systems Manager OpsCenter): OpsCenter is primarily designed for managing operational issues, not for
storing sensitive credentials.
C (S3 Bucket): While you can encrypt files in S3, it lacks the dedicated credential management features of
Secrets Manager, like automatic rotation and built-in IAM integration specific to secrets.
D (KMS Encrypted Files): Storing encrypted files on the web servers themselves increases the risk of
exposure if the servers are compromised. It also makes credential rotation and centralized management more
difficult.
Secrets Manager provides a robust and secure solution that addresses the specific requirements outlined in
the scenario, focusing on secure storage, automatic rotation, centralized management, and fine-grained
access control via IAM.

---

## Question 87

**Answer:** **D**

**Explanation:**

The correct answer is D: Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO
queue. Create a new Lambda function that polls the queue and stores the customer data in the database.

Here's why:
Reliability and Durability: SQS provides a highly reliable and durable queuing mechanism. When the Aurora
database is unavailable during upgrades, the Lambda functions can still successfully write the customer data
to the SQS FIFO queue without data loss.
Decoupling: SQS decouples the data ingestion (Lambda functions) from the data processing/storage (new
Lambda function). This decoupling ensures that the application continues to accept customer data even when
the database is temporarily unavailable. This adheres to the well-architected framework principle of loosely
coupling services to improve resilience.
FIFO (First-In, First-Out): The FIFO queue guarantees that the customer data is processed in the order it was
received. This is important for maintaining data integrity and ensuring that events are processed in the correct
sequence.
Asynchronous Processing: The new Lambda function polling the queue processes the data asynchronously,
minimizing the impact on the performance of the initial Lambda functions invoked by API Gateway. This
asynchronous model also provides fault tolerance. If the processing Lambda fails, the messages remain in the
queue until they are successfully processed.
Scalability: SQS is a fully managed service that automatically scales to handle varying workloads, ensuring
that the queue can accommodate the volume of customer data generated during database upgrades.
Let's examine why the other options are less suitable:

**A:** Amazon RDS Proxy: While RDS Proxy can help with connection management and reduce database load, it
doesn't inherently store data when the database is completely unavailable during upgrades. The proxy is only
as effective as the underlying database's availability.

**B:** Increased Lambda Runtime and Retry Mechanism: Increasing Lambda runtime and adding retries can help
with transient errors, but it won't solve the problem of prolonged database unavailability during upgrades.
Also, Lambda functions are designed to be short-lived; increasing the runtime significantly can lead to
performance and cost inefficiencies.

**C:** Lambda Local Storage: Lambda local storage is ephemeral and limited in size. It's not designed for durable
storage of data during prolonged outages. The data stored on the Lambda's local storage is lost when the
Lambda execution environment is terminated. This is not a reliable approach for handling database upgrades.

---

## Question 88

**Answer:** **A**

**Explanation:**

The correct answer is A: Configure the Requester Pays feature on the company's S3 bucket.

Here's why: The primary goal is to minimize the survey company's data transfer costs when sharing data with
the European marketing firm.
Requester Pays: When the company enables Requester Pays on its S3 bucket, the marketing firm (the
requester) is responsible for all data transfer and request costs associated with accessing the data in the
bucket. This directly shifts the cost burden from the survey company to the marketing firm, thus minimizing
the survey company's costs.
Why other options are less optimal:

**B.** S3 Cross-Region Replication: This replicates the entire 3 TB dataset to the marketing firm's bucket. The
survey company would incur the costs of replication (storage, data transfer out of the source region, and
requests). The replication is a continuous process, resulting in on-going costs. This does not minimize the
survey company's transfer costs.

**C.** Cross-Account Access: While this allows the marketing firm to access the data, the survey company would
still bear the data transfer costs when the marketing firm downloads or processes the data. Granting crossaccount access only provides permission; it doesn't change who pays for data transfer.

**D.** S3 Intelligent-Tiering with Sync: Intelligent-Tiering optimizes storage costs based on access patterns
within the survey company's S3 bucket. It does not affect the data transfer costs when the marketing firm
accesses the data from their location after the sync. Also, syncing the bucket would involve the survey
company paying for the initial data transfer and incurring ongoing synchronization costs.

In summary, Requester Pays is the only option that directly and completely shifts the responsibility for data
transfer costs to the marketing firm, fulfilling the requirement of minimizing the survey company's costs.
Relevant Link:
Using Requester Pays buckets - Amazon Simple Storage Service

---

## Question 89

**Answer:** **A**

**Explanation:**

The best solution to prevent accidental deletion of confidential audit documents in an S3 bucket while
maintaining the principle of least privilege and addressing management's concerns is to enable versioning
and MFA Delete on the S3 bucket.
Versioning, when enabled on an S3 bucket, preserves every version of an object. This means that if a file is
accidentally deleted or overwritten, the previous versions are still available for recovery. This mitigates data
loss from accidental deletion. [https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html]
MFA Delete adds an extra layer of security. When enabled, deleting a version of an object or permanently
deleting the entire bucket requires multi-factor authentication. This prevents unauthorized or accidental
deletion, even if an IAM user's credentials are compromised. This makes accidental deletion significantly more
difficult. [https://docs.aws.amazon.com/AmazonS3/latest/userguide/VersioningwithMFA.html]

**Option B**, enabling MFA on IAM user credentials, increases security but doesn't prevent accidental deletion
within the IAM user's granted permissions. A user with s3:DeleteObject permission could still accidentally
delete files.

**Option C**, adding an S3 Lifecycle policy to deny deletion, is overly complex and impractical. Lifecycle policies
are designed for automating transitions or deletions based on object age, not temporary restriction of deletion
actions based on audit dates. Furthermore, this adds complexity to IAM user management.

**Option D**, using KMS encryption and restricting access to the key, addresses encryption and access control
but doesn't directly prevent accidental deletion if a user with delete permissions has access to the KMS key.
While encryption is essential, it doesn't solve the specific problem of accidental deletion. Encryption secures
the data but doesn't prevent authorized users from deleting it.

Therefore, enabling both versioning and MFA Delete provides a comprehensive solution for preventing
accidental deletion while minimizing administrative overhead and adhering to security best practices.

---

## Question 90

**Answer:** **B**

**Explanation:**

The best solution is to create a read replica of the database and configure the script to query only the read
replica. This is because read replicas are designed specifically to offload read traffic from the primary
database instance. By directing the script's queries to the read replica, the load on the primary RDS instance
is significantly reduced, resolving the performance issues experienced by the development team during script
execution.

**Option A**, modifying the DB instance to be a Multi-AZ deployment, improves availability and durability but
doesn't directly address the performance issues caused by read queries. A Multi-AZ deployment is primarily
for failover purposes in case of an infrastructure failure.

**Option C**, manually exporting the entries daily, is not a scalable or automated solution. It involves significant
manual effort and introduces potential for human error. It also doesn't provide real-time or near-real-time
data for the script.

**Option D**, using Amazon ElastiCache, can improve query performance for frequently accessed data, but it
requires modifying the application to utilize the cache. Caching the common queries might alleviate some
pressure, but doesn't solve the underlying issue of the script's queries impacting the primary database's
performance for all development tasks. It also adds complexity to the architecture without fully addressing
the problem. Moreover, determining which queries are "common" and configuring the cache appropriately
introduces additional overhead. The script's queries run at random intervals and involve finding new movies,
so it's unlikely that caching will be as effective as offloading those queries entirely to a read replica.
Read replicas offer a straightforward and efficient way to isolate read traffic without requiring significant
application changes or manual intervention. This approach provides the least operational overhead while
effectively addressing the performance bottleneck. This solution specifically addresses the problem by
offloading the read queries from the primary instance, thus it directly improves the performance for other
workloads, like development.
Relevant Documentation:
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. ReadReplicas.html
Amazon RDS Multi-AZ Deployments:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

---

## Question 91

**Answer:** **A**

**Explanation:**

The correct answer is A, configuring an S3 gateway endpoint. Here's why:
The requirement is to allow EC2 instances to access S3 without traversing the internet, adhering to strict
security regulations. An S3 gateway endpoint provides private connectivity between your VPC and S3,

avoiding the public internet. It essentially creates a route within the AWS network that directly connects your
VPC to S3. No internet gateway or NAT gateway is involved.

**Option B**, creating an S3 bucket in a private subnet, is incorrect. S3 buckets exist globally within a region, not
within VPC subnets. The location of the bucket doesn't affect how EC2 instances access it. The access
method is the key.

**Option C**, creating an S3 bucket in the same region, while a best practice for performance and cost, doesn't
address the core security requirement of avoiding internet traffic. EC2 instances would still need a way to
reach S3, and without an endpoint, they would default to using public endpoints.

**Option D**, configuring a NAT gateway, is also incorrect. A NAT gateway allows instances in a private subnet to
initiate outbound internet traffic, but it doesn't provide a private connection to S3. It would enable internet
access, which is against the requirements. The traffic would still traverse the public internet.
S3 gateway endpoints are specifically designed for securely connecting to S3 from within a VPC without
using public IPs. They enhance security by preventing data from leaving the AWS network and are more costeffective than routing traffic through a NAT gateway for S3 access. Gateway endpoints support a route table
entry and allow you to specify S3 buckets to allow access to, providing granular control.
For further reading, refer to the AWS documentation on VPC endpoints for S3:
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html

---

## Question 92

**Answer:** **AC**

**Explanation:**

The correct answer is AC. Here's why:

**A.** Configure a VPC gateway endpoint for Amazon S3 within the VPC:
A VPC gateway endpoint for S3 is a crucial element for secure access. It enables EC2 instances within a VPC
to access S3 without traversing the internet. Traffic between the EC2 instances and S3 remains within the
AWS network, enhancing security and reducing latency. It also eliminates the need for internet gateways,
NAT gateways/instances, or public IPs on the EC2 instances. This aligns with best practices for securing VPC
resources. [https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html]

**C.** Create a bucket policy that limits access to only the application tier running in the VPC:
A bucket policy is essential to restrict access to the S3 bucket. By creating a policy that allows access only
from the specified VPC or a specific range of private IP addresses associated with the EC2 instances in the
application tier, you ensure that only authorized resources can access the sensitive data. This principle of
least privilege is a cornerstone of security. This prevents other unauthorized AWS resources or external

entities from accessing the S3 bucket. You can even further restrict access by referencing specific IAM roles
associated with the EC2 instances. [https://docs.aws.amazon.com/AmazonS3/latest/userguide/examplebucket-policies.html]

Why the other options are incorrect:

**B.** Create a bucket policy to make the objects in the S3 bucket public: This is a major security vulnerability
and would expose the sensitive user information to anyone on the internet. It's directly contradictory to the
requirement of secure access.

**D.** Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance: While
IAM roles are necessary for EC2 instances to assume permissions, copying IAM credentials directly onto EC2
instances is a bad practice. It presents a security risk; if the instance is compromised, the credentials are also
compromised. It is better to utilize IAM roles. Furthermore, using VPC endpoints avoids the need for this and
allows resource-based access.

**E.** Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket: Using
a NAT instance would allow access to S3 via the internet. While the NAT instance would need to have the
right S3 permissions via an attached role or a role that the NAT instance user assumed, this approach isn't the
most secure nor the most efficient. VPC endpoints provide a more secure and direct connection to S3. You
also incur charges for NAT gateway data processing, which you avoid using a gateway endpoint.

---

## Question 93

**Answer:** **B**

**Explanation:**

The correct solution is B: Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production and use
database cloning to create the staging database on-demand. Here's why:
Aurora MySQL Multi-AZ with Replicas: Aurora provides higher availability and performance compared to
standard RDS MySQL due to its architecture and storage engine. Multi-AZ ensures automatic failover in case
of primary instance failure, minimizing downtime. Aurora Replicas offload read traffic from the primary
instance, improving application performance during normal operation.

https://aws.amazon.com/rds/aurora/
Database Cloning: Aurora offers a fast and efficient cloning feature. Cloning creates a point-in-time,
writeable copy of the database volume without incurring significant downtime or impacting production
performance. This addresses the development team's need for a readily available staging environment
without the 4-hour latency issue caused by a full database export. Cloning is near-instantaneous, so staging
database creation would not delay the development team.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora. Managing. Clone.html
Let's analyze why the other options are less suitable:

**A.** Using mysqldump: While mysqldump creates backups, restoring the staging database from a mysqldump
backup still takes a significant amount of time (similar to the current 4-hour export) and causes application
latency, defeating the purpose.

**C.** RDS MySQL with Multi-AZ and Read Replicas: While RDS MySQL Multi-AZ improves availability and read
replicas offload read traffic, using the standby instance for the staging database is not recommended. The
standby instance is critical for failover and should not be directly accessed for other purposes. Furthermore,
this option doesn't address the need for a quick and efficient staging database creation method, as it implies
using the already existing standby.

**D.** RDS MySQL with Multi-AZ and Read Replicas, plus mysqldump: This option suffers from the same issue
as option A - mysqldump takes too long, causing latency issues and delaying the development team.

---

## Question 94

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, along with supporting concepts and links:

**Option C** is the most efficient and scalable solution with the least operational overhead because it leverages
serverless technologies for event-driven processing. When a file is uploaded to S3, an event notification is
triggered and placed into an SQS queue. SQS acts as a buffer, decoupling the S3 upload process from the
processing component and handling varying demand. The Lambda function is triggered by messages in the
SQS queue. Lambda's serverless nature means it automatically scales based on the number of messages in

the queue, handling both high and low traffic volumes efficiently without requiring any manual management
of servers. DynamoDB is a NoSQL database perfectly suited for storing JSON data and scaling rapidly based
on read and write activity. This solution minimizes operational overhead because there's no need to manage
EC2 instances, EMR clusters, or Kinesis streams.

**Option A** is less ideal because Amazon EMR is designed for large-scale data processing and analytics, which
is overkill for simple file transformations. Managing an EMR cluster also introduces significant operational
overhead. Storing the JSON in Aurora might be suitable, but DynamoDB is a better fit for this use case due to
its flexible schema.

**Option B** involves using EC2 instances to poll the SQS queue and process the data. While it works, it adds
operational overhead because you're responsible for managing the EC2 instances, scaling them up or down,
and ensuring high availability. This is much less efficient and cost-effective compared to Lambda.

**Option D** using EventBridge and Kinesis Data Streams adds unnecessary complexity and overhead. Kinesis
Data Streams is designed for high-throughput, real-time data streaming, which isn't needed for one-time file
processing. EventBridge is also not needed as S3 can directly publish to SQS. Using Lambda for the
processing is good, but Aurora might not be the optimal choice for JSON storage compared to DynamoDB.

In summary, **Option C**'s event-driven architecture with S3, SQS, Lambda, and DynamoDB provides the best
balance of scalability, efficiency, and minimal operational overhead for this particular use case.

---

## Question 95

**Answer:** **D**

**Explanation:**

The best solution for separating read and write traffic in this scenario is to create read replicas.

**Option D** is correct because read replicas are specifically designed to handle read-heavy workloads,
offloading the primary database instance. This helps improve the application's performance by reducing the
load on the primary RDS instance, allowing it to focus on write operations. Configuring the read replicas with

the same compute and storage resources ensures they can handle the read workload efficiently without
becoming a bottleneck. If the read replicas have insufficient resources, they may not be able to handle the
read load adequately and could become overloaded, negating the benefits of separating read and write
traffic.

**Option A** and B are incorrect because while Multi-AZ deployments provide high availability and failover
capabilities, they don't inherently separate read and write traffic. In a Multi-AZ setup, the secondary instance
is a standby and doesn't serve read requests unless a failover occurs. Multi-AZ is primarily for disaster
recovery, not performance optimization for read-heavy workloads.

**Option C** is incorrect because configuring the read replicas with half the compute and storage of the source
database may lead to performance issues, especially if the read workload is substantial. Under-provisioning
the read replicas can lead to latency and bottlenecks, defeating the purpose of separating read traffic. Read
replicas should ideally have similar resources to handle the expected read load effectively.

Therefore, creating read replicas with the same compute and storage resources as the source database is the
most effective way to optimize the application's performance by separating read and write traffic.
Further Research:
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Replication. ReadReplicas.html
Amazon RDS Multi-AZ Deployments:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

---

## Question 96

**Answer:** **C**

**Explanation:**

C is correct.0.0/24 , the following five IP addresses are reserved:0.0: Network address.0.1: Reserved by AWS
for the VPC router.0.2: Reserved by AWS. The IP address of the DNS server is the base of the VPC network
range plus two. ...0.3: Reserved by AWS for future use.0.255: Network broadcast address.

---

## Question 97

**Answer:** **D**

**Explanation:**

The best solution is to use Amazon FSx for Windows File Server, due to its features specifically designed to
address the described needs.

**Option D** is correct because Amazon FSx for Windows File Server provides fully managed native Microsoft
Windows file servers backed by SSD storage. It is designed to integrate seamlessly with Active Directory for
authentication and authorization, fulfilling the requirement for access control. Its support for the SMB
protocol allows it to be accessed as a standard Windows file share. FSx for Windows File Server can also be
deployed in a Multi-AZ configuration, offering high availability.

**Option A** is incorrect because Amazon EFS (Elastic File System) is primarily designed for Linux workloads and
while it can integrate with Active Directory via IAM and NFS, it is not a native Windows file server and lacks
direct SMB protocol support, making it a less suitable fit for a SharePoint migration requiring Windows shared
file storage.

**Option B** is incorrect because while AWS Storage Gateway's file gateway can present SMB file shares and
integrate with Active Directory, it's a hybrid solution that caches data locally. It uses S3 as the primary
storage location, which is not ideal for low-latency, high-performance SharePoint workloads. Placing a file
gateway in two Availability Zones does not natively provide high availability for the SMB share itself without
additional configuration and complexity, adding operational overhead.

**Option C** is incorrect because while Amazon S3 can store files, it is object storage and not a file system
suitable for directly mounting as a Windows volume in the way required by SharePoint. While there are tools
to achieve this, it isn't a direct solution and would be more complex and prone to performance issues than
using a native Windows file server solution. The required integration and latency requirements would not be
met easily using S3 for the application in question.

In summary, Amazon FSx for Windows File Server is the optimal choice due to its native support for the SMB
protocol, Active Directory integration, high availability through Multi-AZ deployment, and its ability to
function as a fully managed Windows file server, seamlessly integrating with SharePoint.
Supporting Links:
Amazon FSx for Windows File Server: https://aws.amazon.com/fsx/windows/
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
Amazon EFS: https://aws.amazon.com/efs/

---

## Question 98

**Answer:** **C**

**Explanation:**

The issue is duplicate processing of SQS messages by the Lambda function. This indicates the Lambda
function isn't completing and acknowledging receipt of the message within the SQS visibility timeout, leading
SQS to re-queue the message for another attempt.

**Option A**, setting up long polling, helps with efficient message retrieval but does not prevent duplicate
processing if the Lambda function fails or takes too long to process a message within the visibility timeout.
Long polling primarily reduces the cost associated with empty responses from SQS.

**Option B**, switching to an SQS FIFO queue with message deduplication, would prevent duplicates. However, it
introduces significant operational overhead. It requires code changes, potentially impacting the existing
application's architecture and message ordering assumptions. FIFO queues also have lower throughput limits
than standard queues, potentially affecting the application's performance. It's also unnecessary because the
processing order doesn't appear to be a critical requirement based on the problem description.

**Option C**, increasing the visibility timeout, directly addresses the root cause. The visibility timeout is the
duration a message remains invisible to other consumers after being retrieved from the queue. By increasing
the visibility timeout to be greater than the combined Lambda function timeout and batch window (the
maximum time Lambda waits before processing messages in a batch), it ensures that SQS doesn't re-queue
the message while the Lambda function is still processing it. This significantly reduces the chances of
duplicate processing with minimal code or infrastructure changes.

**Option D**, modifying the Lambda function to immediately delete messages, is risky. If the Lambda function
fails after deleting the message but before completing the processing, the message will be lost entirely. This
guarantees data loss, which is undesirable. It also adds complexity to the Lambda function and might not
solve the underlying timeout issue.

Therefore, **Option C** is the best solution because it addresses the root cause with the least operational
overhead, ensuring that the Lambda function has sufficient time to process the message and preventing
premature re-queuing by SQS. It minimizes the changes required to the existing system and avoids the
potential data loss associated with **Option D**.
Relevant Documentation:
SQS Visibility Timeout:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibilitytimeout.html
AWS Lambda with SQS: https://docs.aws.amazon.com/lambda/latest/dg/services-sqs.html

---

## Question 99

**Answer:** **D**

**Explanation:**

The question requires a fully managed shared storage solution accessible via Lustre clients for an onpremises application. Let's analyze why option D is the correct choice.

**Option D**, creating an Amazon FSx for Lustre file system, directly addresses the requirements. FSx for Lustre
is a fully managed, high-performance file system optimized for compute-intensive workloads, including those
needing the Lustre file system. Lustre clients can connect directly to the FSx for Lustre file system, fulfilling
the access requirement. The fully managed nature of FSx for Lustre eliminates the need for manual setup,
configuration, and maintenance, which aligns with the question's stipulation. Attaching the file system to the
origin server and connecting application servers to the file system creates the shared storage environment
the application needs.

**Option A**, using AWS Storage Gateway file gateway, is incorrect. While Storage Gateway provides file sharing
capabilities, it primarily caters to connecting on-premises environments to AWS storage services like S3. It
does not inherently support the Lustre file system protocol. It's more suited for file-based backups and
archival, not high-performance shared storage.

**Option B**, setting up an Amazon EC2 Windows instance with a Windows file share, involves significant manual
effort. It requires installing, configuring, and maintaining the Windows file share role, negating the "fully
managed" requirement. Furthermore, Windows file shares aren't designed for the high-performance compute
workloads typically associated with Lustre.

**Option C**, creating an Amazon Elastic File System (EFS) file system, and configuring it to support Lustre, is not
a supported configuration. Amazon EFS is a fully managed NFS file system. EFS does not natively support the
Lustre protocol. Trying to "configure" it to support Lustre is not a feasible solution within the AWS ecosystem.

Therefore, Amazon FSx for Lustre is the only fully managed AWS service that natively supports the Lustre file
system protocol, making it the best solution for this scenario.

---

## Question 100

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers a secure, readily available, and operationally efficient solution for
managing and encrypting certificates.

Here's why:
AWS KMS for Encryption: AWS Key Management Service (KMS) is designed for managing encryption keys
securely. Using a KMS customer-managed key allows the company to control the key lifecycle and access
permissions. This ensures that only authorized entities (the EC2 instance via its role) can use the key for
encryption and decryption operations. https://aws.amazon.com/kms/
EC2 Role for Access Control: Granting the EC2 instance access to the KMS key via an IAM role is a best
practice. It allows the EC2 instance to use the KMS key without embedding credentials within the instance
itself.
Amazon S3 for Highly Available Storage: Amazon S3 provides highly available and durable storage. Storing
the encrypted data in S3 ensures that it is protected against data loss and is accessible when needed.
https://aws.amazon.com/s3/

**Option A** is less desirable because it involves manual updates of certificates in Secrets Manager, which
introduces operational overhead and potential for human error. While Secrets Manager is good for storing
secrets, KMS is better for encryption.

**Option B** is unnecessarily complex. Using a Lambda function with the Python cryptography library introduces
additional overhead (managing the Lambda function, dependencies, execution environment) and is not the
most efficient solution for simple encryption/decryption tasks.

**Option D** is not as good as C because Amazon EBS volumes are primarily designed for block storage for EC2
instances. While EBS can be encrypted, it's not ideal for storing data independently that needs to be highly
available. S3 provides greater availability, scalability, and durability than EBS in this scenario. Furthermore,
EBS is attached to a specific availability zone, whereas S3 is region-wide.

---

# Quick Answer Sheet

Question 51: BD
Question 52: C
Question 53: C
Question 54: C
Question 55: C
Question 56: C
Question 57: B
Question 58: C
Question 59: D
Question 60: C
Question 61: C
Question 62: D
Question 63: A
Question 64: D
Question 65: C
Question 66: C
Question 67: D
Question 68: A
Question 69: B
Question 70: C
Question 71: B
Question 72: D
Question 73: CD
Question 74: AC
Question 75: A
Question 76: B
Question 77: C
Question 78: B
Question 79: A
Question 80: B
Question 81: C
Question 82: B
Question 83: C
Question 84: B
Question 85: A
Question 86: A
Question 87: D
Question 88: A
Question 89: A
Question 90: B
Question 91: A
Question 92: AC
Question 93: B
Question 94: C
Question 95: D
Question 96: C
Question 97: D
Question 98: C
Question 99: D
Question 100: C
