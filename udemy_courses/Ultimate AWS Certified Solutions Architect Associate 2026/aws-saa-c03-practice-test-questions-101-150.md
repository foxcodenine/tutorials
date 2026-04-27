# AWS SAA-C03 Practice Test: Questions 101-150

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 101

A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR
blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high
availability. An internet gateway is used to provide internet access for the public subnets. The private subnets
require access to the internet to allow Amazon EC2 instances to download software updates.
What should the solutions architect do to enable Internet access for the private subnets?

**A.** Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ
that forwards non-VPC traffic to the NAT gateway in its AZ.

**B.** Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ
that forwards non-VPC traffic to the NAT instance in its AZ.

**C.** Create a second internet gateway on one of the private subnets. Update the route table for the private

subnets that forward non-VPC traffic to the private internet gateway.

**D.** Create an egress-only internet gateway on one of the public subnets. Update the route table for the private
subnets that forward non-VPC traffic to the egress-only Internet gateway.

---

## Question 102

A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores
its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server
must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.
Which combination of steps should a solutions architect take to automate this task? (Choose two.)

**A.** Launch the EC2 instance into the same Availability Zone as the EFS file system.

**B.** Install an AWS DataSync agent in the on-premises data center.

**C.** Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.

**D.** Manually use an operating system copy command to push the data to the EC2 instance.

**E.** Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.

---

## Question 103

A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job
processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions
architect notices that AWS Glue is processing all the data during each run.
What should the solutions architect do to prevent AWS Glue from reprocessing old data?

**A.** Edit the job to use job bookmarks.

**B.** Edit the job to delete data after the data is processed.

**C.** Edit the job by setting the NumberOfWorkers field to 1.

**D.** Use a FindMatches machine learning (ML) transform.

---

## Question 104

A solutions architect must design a highly available infrastructure for a website. The website is powered by
Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that
can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not
acceptable for the website.
Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)

**A.** Use AWS Shield Advanced to stop the DDoS attack.

**B.** Configure Amazon GuardDuty to automatically block the attackers.

**C.** Configure the website to use Amazon CloudFront for both static and dynamic content.

**D.** Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.

**E.** Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU
utilization.

---

## Question 105

A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least
privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge
(Amazon CloudWatch Events) rule will invoke the function.
Which solution meets these requirements?

**A.** Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.

**B.** Add an execution role to the function with lambda:InvokeFunction as the action and Service:
lambda.amazonaws.com as the principal.

**C.** Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com
as the principal.

**D.** Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service:
events.amazonaws.com as the principal.

---

## Question 106

A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be
encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.
Which solution meets these requirements and is the MOST operationally efficient?

**A.** Server-side encryption with customer-provided keys (SSE-C)

**B.** Server-side encryption with Amazon S3 managed keys (SSE-S3)

**C.** Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation

**D.** Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation

---

## Question 107

A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak
operating hours. The company wants to use these data points in its existing analytics platform. A solutions
architect must determine the most viable multi-tier option to support this architecture. The data points must be
accessible from the REST API.
Which action meets these requirements for storing and retrieving location data?

**A.** Use Amazon Athena with Amazon S3.

**B.** Use Amazon API Gateway with AWS Lambda.

**C.** Use Amazon QuickSight with Amazon Redshift.

**D.** Use Amazon API Gateway with Amazon Kinesis Data Analytics.

---

## Question 108

A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an
automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target
systems.
Which design should a solutions architect recommend?

**A.** Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the
information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.

**B.** Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the
information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.

**C.** Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue
fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions
to update the targets.

**D.** Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic
fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to
update the targets.

---

## Question 109

A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants
new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the
company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10
delete the objects.
What should a solutions architect do to meet these requirements?

**A.** Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.

**B.** Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use
governance mode as the S3 bucket’s default retention mode for new objects.

**C.** Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon
notification, restore the modified objects from any backup versions that the company has.

**D.** Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the
s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.

---

## Question 110

A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances.
During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon
S3. Users are experiencing slow upload requests to the website.
The company needs to reduce coupling within the application and improve website performance. A solutions
architect must design the most operationally efficient process for image uploads.
Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)

**A.** Configure the application to upload images to S3 Glacier.

**B.** Configure the web server to upload the original images to Amazon S3.

**C.** Configure the application to upload images directly from each user's browser to Amazon S3 through the use
of a presigned URL

**D.** Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the
function to resize the image.

**E.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a
schedule to resize uploaded images.

---

## Question 111

A company recently migrated a message processing system to AWS. The system receives messages into an
ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running
on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database
running on Amazon EC2. The company wants this application to be highly available with low operational
complexity.
Which architecture offers the HIGHEST availability?

**A.** Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in
another Availability Zone. Replicate the MySQL database to another Availability Zone.

**B.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional
consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability
Zone.

**C.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional
consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.

**D.** Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling
group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with MultiAZ enabled.

---

## Question 112

A company hosts a containerized web application on a fleet of on-premises servers that process incoming
requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased
number of requests. The company wants to move the application to AWS with minimum code changes and
minimum development effort.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web
application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.

**B.** Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer
to distribute the incoming requests.

**C.** Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda
functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.

**D.** Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster
that can process the incoming requests at the appropriate scale.

---

## Question 113

A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A
custom application in the company’s data center runs a weekly data transformation job. The company plans to
pause the application until the data transfer is complete and needs to begin the transfer process as soon as
possible.
The data center does not have any available network bandwidth for additional workloads. A solutions architect
must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.

**B.** Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.

**C.** Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom
transformation job by using AWS Glue.

**D.** Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data
to the device. Create a new EC2 instance on AWS to run the transformation application.

---

## Question 114

A company has created an image analysis application in which users can upload photos and add photo frames to
their images. The users upload images and metadata to indicate which photo frames they want to add to their
images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata.
The application is becoming more popular, and the number of users is increasing. The company expects the
number of concurrent users to vary significantly depending on the time of day and day of week. The company must
ensure that the application can scale to meet the needs of the growing user base.

Which solution meats these requirements?

**A.** Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.

**B.** Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.

**C.** Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the
metadata.

**D.** Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store
(Amazon EBS) volumes to store the photos and metadata.

---

## Question 115

A medical records company is hosting an application on Amazon EC2 instances. The application processes
customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2
instances access Amazon S3 over the internet, but they do not require any other network access.
A new requirement mandates that the network traffic for file transfers take a private route and not be sent over
the internet.
Which change to the network architecture should a solutions architect recommend to meet this requirement?

**A.** Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through
the NAT gateway.

**B.** Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3
prefix list is permitted.

**C.** Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to
the route table for the private subnets.

**D.** Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to
Amazon S3 over the Direct Connect connection.

---

## Question 116

A company uses a popular content management system (CMS) for its corporate website. However, the required
patching and maintenance are burdensome. The company is redesigning its website and wants anew solution. The
website will be updated four times a year and does not need to have any dynamic content available. The solution
must provide high scalability and enhanced security.
Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)

**A.** Configure Amazon CloudFront in front of the website to use HTTPS functionality.

**B.** Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.

**C.** Create and deploy an AWS Lambda function to manage and serve the website content.

**D.** Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website
hosting enabled.

**E.** Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind
an Application Load Balancer.

---

## Question 117

A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the
company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real
time.
Which solution will meet this requirement with the LEAST operational overhead?

**A.** Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon
Elasticsearch Service).

**B.** Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon
OpenSearch Service (Amazon Elasticsearch Service).

**C.** Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams
sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's
destination.

**D.** Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis
Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon
Elasticsearch Service).

---

## Question 118

A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones.
The web application will provide access to a repository of text documents totaling about 900 TB in size. The

company anticipates that the web application will experience periods of high demand. A solutions architect must
ensure that the storage component for the text documents can scale to meet the demand of the application at all
times. The company is concerned about the overall cost of the solution.
Which storage solution meets these requirements MOST cost-effectively?

**A.** Amazon Elastic Block Store (Amazon EBS)

**B.** Amazon Elastic File System (Amazon EFS)

**C.** Amazon OpenSearch Service (Amazon Elasticsearch Service)

**D.** Amazon S3

---

## Question 119

A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1
Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway
managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.
Which solution will meet these requirements with the LEAST amount of administrative effort?

**A.** Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.

**B.** Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.

**C.** Set up AWS Shield in bath Regions. Associate Regional web ACLs with an API stage.

**D.** Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.

---

## Question 120

A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load
Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe.
The company wants to improve the performance and availability of the solution. The company launches and

configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.
Which solution can the company use to route traffic to all the EC2 instances?

**A.** Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an
Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.

**B.** Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west1. Add the two NLBs as endpoints for the endpoint groups.

**C.** Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy
to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53
record as the distribution's origin.

**D.** Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency
routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the
Route 53 record as the distribution’s origin.

---

## Question 121

A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an
unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this
instance.
What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?

**A.** Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.

**B.** Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it.
Enable encryption on the DB instance.

**C.** Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore
encrypted snapshot to an existing DB instance.

**D.** Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key
Management Service (AWS KMS) managed keys (SSE-KMS).

---

## Question 122

A company wants to build a scalable key management infrastructure to support developers who need to encrypt
data in their applications.
What should a solutions architect do to reduce the operational burden?

**A.** Use multi-factor authentication (MFA) to protect the encryption keys.

**B.** Use AWS Key Management Service (AWS KMS) to protect the encryption keys.

**C.** Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.

**D.** Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.

---

## Question 123

A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL
certificate, which is on each instance to perform SSL termination.
There has been an increase in traffic recently, and the operations team determined that SSL encryption and
decryption is causing the compute capacity of the web servers to reach their maximum limit.
What should a solutions architect do to increase the application's performance?

**A.** Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each
instance.

**B.** Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to
reference the bucket for SSL termination.

**C.** Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure
it to direct connections to the existing EC2 instances.

**D.** Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an
HTTPS listener that uses the SSL certificate from ACM.

---

## Question 124

A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The
job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes
upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and
cost-effective solution that meets the requirements of the job.
What should the solutions architect recommend?

**A.** Implement EC2 Spot Instances.

**B.** Purchase EC2 Reserved Instances.

**C.** Implement EC2 On-Demand Instances.

**D.** Implement the processing on AWS Lambda.

---

## Question 125

A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends
traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the
RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to

complete payment processing of orders through a third-party web service. The application must be highly
available.
Which combination of configuration options will meet these requirements? (Choose two.)

**A.** Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB
instance in private subnets.

**B.** Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an
Application Load Balancer in the private subnets.

**C.** Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones.
Deploy an RDS Multi-AZ DB instance in private subnets.

**D.** Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability
Zones. Deploy an Application Load Balancer in the public subnet.

**D.** Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability
Zones. Deploy an Application Load Balancer in the public subnets.

---

## Question 126

A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is
in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the
most recent 2 years must be highly available and immediately retrievable.
Which solution will meet these requirements?

**A.** Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.

**B.** Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.

**C.** Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep
Archive.

**D.** Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA)
immediately and to S3 Glacier Deep Archive after 2 years.

---

## Question 127

A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at
least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable
storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use
anymore.
Which set of services should a solutions architect recommend to meet these requirements?

**A.** Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for
archival storage

**B.** Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for
archival storage

**C.** Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon
S3 for archival storage

**D.** Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3
Glacier for archival storage

---

## Question 128

A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can
tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and
operational overhead.
What should a solutions architect do to meet these requirements?

**A.** Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.

**B.** Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.

**C.** Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.

**D.** Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.

---

## Question 129

A company is running a multi-tier web application on premises. The web application is containerized and runs on a
number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead
of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect
must improve the application's infrastructure.
Which combination of actions should the solutions architect take to accomplish this? (Choose two.)

**A.** Migrate the PostgreSQL database to Amazon Aurora.

**B.** Migrate the web application to be hosted on Amazon EC2 instances.

**C.** Set up an Amazon CloudFront distribution for the web application content.

**D.** Set up Amazon ElastiCache between the web application and the PostgreSQL database.

**E.** Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon
ECS).

---

## Question 130

An application runs on Amazon EC2 instances across multiple Availability Zonas. The instances run in an Amazon
EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU
utilization of the EC2 instances is at or near 40%.
What should a solutions architect do to maintain the desired performance across all instances in the group?

**A.** Use a simple scaling policy to dynamically scale the Auto Scaling group.

**B.** Use a target tracking policy to dynamically scale the Auto Scaling group.

**C.** Use an AWS Lambda function ta update the desired Auto Scaling group capacity.

**D.** Use scheduled scaling actions to scale up and scale down the Auto Scaling group.

---

## Question 131

A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company
wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be
accessible through direct navigation to the S3 URL.
What should a solutions architect do to meet these requirements?

**A.** Write individual policies for each S3 bucket to grant read permission for only CloudFront access.

**B.** Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to
CloudFront.

**C.** Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target
S3 bucket as the Amazon Resource Name (ARN).

**D.** Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket
permissions so that only the OAI has read permission.

---

## Question 132

A company’s website provides users with downloadable historical performance reports. The website needs a
solution that will scale to meet the company’s website demands globally. The solution should be cost-effective,
limit the provisioning of infrastructure resources, and provide the fastest possible response time.
Which combination should a solutions architect recommend to meet these requirements?

**A.** Amazon CloudFront and Amazon S3

**B.** AWS Lambda and Amazon DynamoDB

**C.** Application Load Balancer with Amazon EC2 Auto Scaling

**D.** Amazon Route 53 with internal Application Load Balancers

---

## Question 133

A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants
to upgrade the database to the most recent available version. The company also wants to set up disaster recovery
(DR) for the database. The company needs to minimize the operational overhead for normal operations and DR
setup. The company also needs to maintain access to the database's underlying operating system.
Which solution will meet these requirements?

**A.** Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS
Region.

**B.** Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to
replicate the snapshots to another AWS Region.

**C.** Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in
another AWS Region.

**D.** Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability
Zone.

---

## Question 134

A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing
and new data by using SL. The company stores the data in an Amazon S3 bucket. The data requires encryption and
must be replicated to a different AWS Region.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to
replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS
multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.

**B.** Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to
replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS
multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.

**C.** Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted
objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption
keys (SSE-S3). Use Amazon Athena to query the data.

**D.** Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted
objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption
keys (SSE-S3). Use Amazon RDS to query the data.

---

## Question 135

A company runs workloads on AWS. The company needs to connect to a service from an external provider. The
service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private
and must be restricted to the target service. The connection must be initiated only from the company’s VPC.
Which solution will mast these requirements?

**A.** Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route
table to connect to the target service.

**B.** Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target
service.

**C.** Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target
service.

**D.** Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the
target service.

---

## Question 136

A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises
database must remain online and accessible during the migration. The Aurora database must remain synchronized
with the on-premises database.
Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)

**A.** Create an ongoing replication task.

**B.** Create a database backup of the on-premises database.

**C.** Create an AWS Database Migration Service (AWS DMS) replication server.

**D.** Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).

**E.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.

---

## Question 137

A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each
business unit's account independently upon request. The root email recipient missed a notification that was sent to
the root user email address of one account. The company wants to ensure that all future notifications are not
missed. Future notifications must be limited to account administrators.
Which solution will meet these requirements?

**A.** Configure the company’s email server to forward notification email messages that are sent to the AWS
account root user email address to all users in the organization.

**B.** Configure all AWS account root user email addresses as distribution lists that go to a few administrators who
can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or
programmatically.

**C.** Configure all AWS account root user email messages to be sent to one administrator who is responsible for
monitoring alerts and forwarding those alerts to the appropriate groups.

**D.** Configure all existing AWS accounts and all newly created accounts to use the same root user email
address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.

---

## Question 138

A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ
queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a
different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL
database on another EC2 instance. All the EC2 instances are in the same Availability Zone.
The company needs to redesign its architecture to provide the highest availability with the least operational
overhead.
What should a solutions architect do to meet these requirements?

**A.** Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a
Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling
group for EC2 instances that host the PostgreSQL database.

**B.** Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a
Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a
Multi-AZ deployment of Amazon RDS for PostgreSQL.

**C.** Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another
Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a
Multi-AZ deployment of Amazon RDS for PostgreSQL.

**D.** Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another
Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling
group for EC2 instances that host the PostgreSQL database

---

## Question 139

A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies
the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon
QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket.
The reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3
bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied
data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.
What should a solutions architect do to meet these requirements with the LEAST operational overhead?

**A.** Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the
analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification.
Configure s3:ObjectCreated:Put as the event type.

**B.** Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to
send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated
rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.

**C.** Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket.
Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure
s3:ObjectCreated:Put as the event type.

**D.** Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event
notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in
EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.

---

## Question 140

A solutions architect needs to help a company optimize the cost of running an application on AWS. The application
will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture.
The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and
unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will
run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be
predictable over the course of the next year.
Which combination of purchasing options will provide the MOST cost-effective solution for hosting this
application? (Choose two.)

**A.** Use Spot Instances for the data ingestion layer

**B.** Use On-Demand Instances for the data ingestion layer

**C.** Purchase a 1-year Compute Savings Plan for the front end and API layer.

**D.** Purchase 1-year All Upfront Reserved instances for the data ingestion layer.

**E.** Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.

---

## Question 141

A company runs a web-based portal that provides users with global breaking news, local alerts, and weather
updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content
is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load
Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as
possible.
How should a solutions architect design the application to ensure the LEAST amount of latency for all users?

**A.** Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic
content by specifying the ALB as an origin.

**B.** Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all
content from the ALB in the closest Region.

**C.** Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content.
Serve the dynamic content directly from the ALB.

**D.** Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to
serve all content from the ALB in the closest Region.

---

## Question 142

A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel
and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user
experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP
addresses for entry into the application endpoints.
What should a solutions architect do to meet these requirements?

**A.** Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the
application in AWS Application Auto Scaling.

**B.** Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the
application in an AWS Application Auto Scaling group.

**C.** Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2
instances for the application in an EC2 Auto Scaling group.

**D.** Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2
instances for the application in an EC2 Auto Scaling group.

---

## Question 143

A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep
as much of the front-end code and the backend code as possible. However, the company wants to break the
application into smaller applications. A different team will manage each application. The company needs a highly
scalable solution that minimizes operational overhead.
Which solution will meet these requirements?

**A.** Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.

**B.** Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is
integrated with AWS Lambda.

**C.** Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an
Auto Scaling group as targets.

**D.** Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load
Balancer with Amazon ECS as the target.

---

## Question 144

A company recently started using Amazon Aurora as the data store for its global ecommerce application. When
large reports are run, developers report that the ecommerce application is performing poorly. After reviewing
metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are
spiking when monthly reports run.
What is the MOST cost-effective solution?

**A.** Migrate the monthly reporting to Amazon Redshift.

**B.** Migrate the monthly reporting to an Aurora Replica.

**C.** Migrate the Aurora database to a larger instance class.

**D.** Increase the Provisioned IOPS on the Aurora instance.

---

## Question 145

A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics
software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP,
and the database server are all hosted on the EC2 instance. The application is showing signs of performance
degradation during busy times and is presenting 5xx errors. The company needs to make the application scale
seamlessly.
Which solution will meet these requirements MOST cost-effectively?

**A.** Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use
the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load
to each EC2 instance.

**B.** Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use
the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the
load across the two EC2 instances.

**C.** Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the
EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda
function when CPU utilization surpasses 75%.

**D.** Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply
the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch
template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.

---

## Question 146

A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind
an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business
day. Application usage is moderate and steady overnight. Application usage is low during weekends.
The company wants to minimize its EC2 costs without affecting the availability of the application.
Which solution will meet these requirements?

**A.** Use Spot Instances for the entire workload.

**B.** Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that
the application needs.

**C.** Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity
that the application needs.

**D.** Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional
capacity that the application needs.

---

## Question 147

A company needs to retain application log files for a critical application for 10 years. The application team
regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed.
The application generates more than 10 TB of logs per month.
Which storage option meets these requirements MOST cost-effectively?

**A.** Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep
Archive.

**B.** Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier
Deep Archive.

**C.** Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3
Glacier Deep Archive.

**D.** Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1
month old to S3 Glacier Deep Archive.

---

## Question 148

A company has a data ingestion workflow that includes the following components:
An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries
An AWS Lambda function that processes and stores the data
The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the
corresponding data is not ingested unless the company manually reruns the job.
What should a solutions architect do to ensure that all notifications are eventually processed?

**A.** Configure the Lambda function for deployment across multiple Availability Zones.

**B.** Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.

**C.** Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between
retries.

**D.** Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the
Lambda function to process messages in the queue.

---

## Question 149

A company has a service that produces event data. The company wants to use AWS to process the event data as it
is received. The data is written in a specific order that must be maintained throughout processing. The company
wants to implement a solution that minimizes operational overhead.
How should a solutions architect accomplish this?

**A.** Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS
Lambda function to process messages from the queue.

**B.** Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing
payloads to process. Configure an AWS Lambda function as a subscriber.

**C.** Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS

Lambda function to process messages from the queue independently.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing
payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.

---

## Question 150

A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the
migration design requirements, a solutions architect must implement infrastructure metric alarms. The company
does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the
CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company
needs to act as soon as possible. The solutions architect also must reduce false alarms.
What should the solutions architect do to meet these requirements?

**A.** Create Amazon CloudWatch composite alarms where possible.

**B.** Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.

**C.** Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.

**D.** Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 101

**Answer:** **A**

**Explanation:**

The correct solution is to use NAT Gateways for internet access from private subnets. Here's why:

**Option A** is correct because it leverages NAT Gateways which are the AWS recommended way to provide
outbound internet access to instances in private subnets while preventing inbound traffic from the internet.
Deploying one NAT Gateway per Availability Zone (AZ) ensures high availability and prevents a single point of
failure. Each private subnet's route table then points to the NAT Gateway within its respective AZ for all
traffic destined outside the VPC (non-VPC CIDR block traffic, commonly represented as 0.0.0.0/0). This
architecture allows instances in private subnets to initiate outbound connections (e.g., downloading software
updates) without exposing them directly to the internet.

**Option B** is incorrect because NAT Instances, while a functional alternative, require more administrative
overhead and manual scaling. They also represent a single point of failure within each AZ unless configured
for high availability (which increases complexity). AWS recommends NAT Gateways over NAT Instances.

**Option C** is incorrect. You cannot associate an Internet Gateway with a private subnet. Internet Gateways are
designed for public subnets to allow bidirectional communication with the internet. Connecting a private
subnet directly to the internet defeats the purpose of having a private subnet and introduces significant
security risks.

**Option D** is incorrect. Egress-only internet gateways are designed for IPv6 traffic only. The question
specifically states that the VPC and subnets use IPv4 CIDR blocks, rendering egress-only internet gateways
unusable in this scenario. They also only permit outbound traffic initiated from inside the VPC.

In summary, NAT Gateways provide a scalable, highly available, and managed solution for outbound internet
access from private subnets in IPv4 environments, aligning with AWS best practices. The key is to create a
NAT Gateway in each public subnet of each AZ, and then route all outbound (non-VPC) traffic from the
corresponding private subnet to that NAT Gateway.
Relevant AWS documentation:
NAT Gateways: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
NAT Instances: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-instances.html
Internet Gateways: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html
Egress-Only Internet Gateways: https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internetgateway.html

---

## Question 102

**Answer:** **BE**

**Explanation:**

The correct answer is BE because it outlines the most efficient and secure way to migrate the data from the
on-premises SFTP server to the Amazon EFS file system mounted on an EC2 instance.
Justification:

**B.** Install an AWS DataSync agent in the on-premises data center: AWS DataSync is specifically designed
for automated and accelerated data transfer between on-premises storage and AWS storage services.
Installing a DataSync agent on-premises is crucial for accessing and moving data from the SFTP server.
DataSync optimizes the transfer process with features like incremental transfers, encryption, and data
verification. The agent acts as a bridge, allowing DataSync to securely access the on-premises NFS-based file
system. More information can be found on the AWS DataSync documentation:
https://aws.amazon.com/datasync/

**E.** Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server: After
installing the agent, the next step is to configure DataSync with the correct source (the on-premises SFTP
server) and destination (the Amazon EFS file system). This involves creating a location for the SFTP server,
providing the necessary credentials for DataSync to access it. This configuration also includes specifying the
EFS file system as the destination location within AWS. DataSync can then be configured to schedule or
initiate the data transfer.

Why other options are incorrect:

**A.** Launch the EC2 instance into the same Availability Zone as the EFS file system: While launching the EC2
instance in the same Availability Zone as the EFS file system is important for performance once the migration
is complete, it doesn't directly contribute to the automation of the data migration process. It's a prerequisite
for EFS usage but not the solution for the problem.

**C.** Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data:
Creating an EBS volume is unnecessary and inefficient for the purpose outlined. The goal is to store the data
on EFS, not EBS. Using EBS as an intermediary step introduces complexity and cost without providing any
added benefit.

**D.** Manually use an operating system copy command to push the data to the EC2 instance: Manually
copying data is time-consuming, error-prone, and doesn't leverage the automation capabilities of AWS
services. It is not a suitable solution for migrating 200 GB of data and does not scale effectively. It also
doesn't provide the data verification or incremental transfer capabilities of DataSync.

---

## Question 103

**Answer:** **A**

**Explanation:**

The correct answer is A, using job bookmarks in AWS Glue. Here's why:
AWS Glue job bookmarks are specifically designed to track the state of ETL jobs, particularly for incremental
data processing. They allow Glue to remember which data has already been processed, enabling it to only
process new data during subsequent runs. Without job bookmarks, Glue will scan the entire input dataset
each time the job runs, leading to reprocessing of old data and increased costs.
Job bookmarks work by storing information about the last processed files or records, such as the last modified
timestamp or a unique identifier. When the job runs again, it uses this information to determine the starting
point for data processing. This approach significantly reduces processing time and resource consumption, as
it avoids redundant operations on data that has already been transformed and loaded.

**Option B**, deleting data after processing, is a destructive approach and can lead to data loss if there are any
issues during the ETL process. It also eliminates the possibility of reprocessing data for other purposes or
correcting errors. **Option C**, setting NumberOfWorkers to 1, simply reduces the parallelism of the job, slowing
down the overall processing time but not preventing reprocessing of old data. **Option D**, using FindMatches, is
an ML transform for deduplication and record linkage and is not relevant to preventing the reprocessing of old
data during ETL runs.
Job bookmarks are the best solution because they maintain data integrity, enable incremental processing, and
reduce costs by avoiding redundant operations, all while being specifically designed for this use case within
the AWS Glue ecosystem. They are a standard best practice for efficient ETL workflows with continuously
updated data sources.
For more information, refer to the official AWS documentation:
Using Job Bookmarks to Track Processed Data: https://docs.aws.amazon.com/glue/latest/dg/monitorcontinuations.html

---

## Question 104

**Answer:** **AC**

**Explanation:**

Here's a breakdown of why options A and C are the correct choices and why the others aren't, focusing on
DDoS mitigation and high availability in the context of Windows-based web servers on EC2:

**A.** Use AWS Shield Advanced to stop the DDoS attack: AWS Shield Advanced provides enhanced DDoS

protection beyond the standard protection included with all AWS customers. It offers 24/7 access to the AWS
DDoS Response Team (DRT) and advanced detection and mitigation techniques. This is crucial for handling
large-scale DDoS attacks originating from thousands of IP addresses. Shield Advanced is specifically
designed to protect against sophisticated attacks targeting web applications running on AWS resources.
https://aws.amazon.com/shield/

**C.** Configure the website to use Amazon CloudFront for both static and dynamic content: CloudFront, a CDN
(Content Delivery Network), distributes your website content across a globally distributed network of edge
locations. This helps to absorb a DDoS attack by serving content from multiple locations, thereby reducing the
load on the origin servers (EC2 instances). It also caches static content, further reducing the load on the
origin. Configuring it for both static and dynamic content allows CloudFront to protect the origin even if
attackers are requesting dynamic pages. CloudFront also integrates with AWS Shield for more robust
protection. https://aws.amazon.com/cloudfront/
Let's examine why the other options are not the best choices:

**B.** Configure Amazon GuardDuty to automatically block the attackers: GuardDuty is a threat detection
service that monitors your AWS environment for malicious activity. While GuardDuty can detect potential
DDoS activity, it doesn't automatically block attackers. It primarily focuses on identifying threats and
generating security findings; it isn't a primary DDoS mitigation tool. The response to GuardDuty findings
requires additional configuration (such as custom scripts/automation to block IPs).

**D.** Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs: While
technically possible, this approach is not scalable or effective against large-scale DDoS attacks. Network
ACLs have limitations on the number of rules they can hold, and managing a list of thousands of attacker IPs
would be cumbersome and potentially impact performance. Additionally, Lambda invocation per IP discovered
may add considerable cost and latency.

**E.** Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80%
CPU utilization: Spot Instances and Auto Scaling help with cost optimization and scaling based on resource
utilization. While useful for general scaling, they don't directly address DDoS mitigation. Scaling up in
response to a DDoS attack might help keep the service online for legitimate users for some time, but it won't
stop the attack itself and could be quickly overwhelmed in a large-scale attack. Moreover, Spot Instances can
be terminated, potentially exacerbating the issue during an attack.

---

## Question 105

**Answer:** **D**

**Explanation:**

The correct answer is D. Add a resource-based policy to the function with lambda:InvokeFunction as the
action and Service: events.amazonaws.com as the principal.

Here's a detailed justification:
The question emphasizes the principle of least privilege, which dictates granting only the necessary
permissions. An EventBridge rule needs permission to invoke the Lambda function. Therefore, the policy
should only grant the lambda:InvokeFunction action. Options A and B incorrectly suggest using an execution
role. Execution roles are for the Lambda function to access other AWS services, not for services to invoke the
Lambda function.
The necessary permissions for EventBridge to trigger a Lambda function are defined in a resource-based
policy attached to the Lambda function itself. This is different from an IAM role that's assumed by the Lambda
function. Resource-based policies grant permissions to principals (in this case, EventBridge) to perform
actions on the resource (the Lambda function). **Option C** is too broad as it uses lambda:*, which grants all
Lambda permissions, violating the principle of least privilege.

**Option D** specifies lambda:InvokeFunction, which is the exact permission EventBridge needs. The Service:
events.amazonaws.com principal specifies that only the EventBridge service is authorized to invoke the
function. This adheres to the principle of least privilege. Specifying the service principal is important to limit
access to invocations and prevent unauthorized actors from triggering the Lambda function. This is the most
secure and precise approach.
Here are some authoritative links for further research:
AWS Lambda Permissions: https://docs.aws.amazon.com/lambda/latest/dg/security-iam.html
Using Resource-Based Policies for Lambda: https://docs.aws.amazon.com/lambda/latest/dg/access-controlresource-based.html
EventBridge Permissions: https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-accesscontrol-eventbridge.html

---

## Question 106

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most operationally efficient solution for storing
confidential data in Amazon S3 with encryption, key usage logging, and annual key rotation:
The requirements are data encryption at rest, logged key usage for auditing, and annual key rotation. All
options except SSE-S3 provide encryption. However, SSE-S3 (option B) doesn't offer detailed logging of key
usage for auditing. SSE-C (option A) involves managing and providing the encryption keys yourself, which
significantly increases operational overhead and responsibility for security. This option would also not offer
CloudTrail logging of the key usage.

SSE-KMS using AWS Key Management Service (KMS) (options C and D) meets the requirements by allowing
for encrypted data storage, generating logs of key usage using AWS CloudTrail, and enabling key rotation.
CloudTrail logs the API calls made to KMS, providing an auditable record of key usage.

**Option D**, SSE-KMS with automatic rotation, is the most operationally efficient. AWS KMS can automatically
rotate the encryption keys every year. This automation reduces the operational burden of manually rotating
keys (option C), minimizing the risk of human error and ensuring compliance. With automatic rotation, the key
is rotated without the application needing to be re-encrypted.

Therefore, SSE-KMS with automatic key rotation (option D) provides a balance between security, compliance,
and operational efficiency, making it the most suitable solution.
Further research:
AWS KMS: https://aws.amazon.com/kms/
S3 Encryption: https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html
AWS CloudTrail: https://aws.amazon.com/cloudtrail/

---

## Question 107

**Answer:** **B**

**Explanation:**

The correct answer is B: Use Amazon API Gateway with AWS Lambda. Here's why:
The problem requires a multi-tier architecture that provides REST API access to location data for bicycle
tracking, which will be used in an existing analytics platform. API Gateway is specifically designed for
creating, publishing, maintaining, monitoring, and securing REST APIs. It acts as a front door for applications
to access data, logic, or functionality from backend services.
Lambda provides a serverless compute environment. It can be triggered by API Gateway requests to process
incoming location data and store it in a database (not explicitly mentioned in the provided options, but implied
as necessary for persistence). Lambda can also retrieve this data and return it as a response to API Gateway
requests. This enables reading, writing, and processing the data needed for the analytical platform.

**Option A**, using Athena with S3, is suited for querying data stored in S3 using SQL. While Athena provides a
cost-effective way to analyze large datasets, it doesn't directly support a REST API endpoint. It is more
tailored to ad-hoc querying rather than a transactional system providing real-time data via APIs.

**Option C**, using QuickSight with Redshift, represents an analytics dashboarding solution. QuickSight is
primarily for visualization and analysis of data, not for serving REST API requests. Redshift is a data
warehouse that can store large volumes of data but requires an API or interface layer to expose that data.

**Option D**, API Gateway with Kinesis Data Analytics, is not suitable for the scenario described. Kinesis Data

Analytics is designed for real-time data processing and transformation, not for storing and retrieving data.
While Kinesis can process the location data stream, it doesn’t naturally serve as a data store accessible via
REST APIs. The output of Kinesis would still typically need to be persisted somewhere (like S3 or a database)
for long-term storage and retrieval. Lambda is a simpler and more flexible approach for handling the API and
potential data storage interaction.

In summary, the combination of API Gateway for REST API access and Lambda for data processing and
storage interaction provides the most viable and flexible solution for the bicycle sharing company's
requirements.

---

## Question 108

**Answer:** **D**

**Explanation:**

The correct answer is D, which suggests using RDS event notifications, an SNS topic fanned out to multiple
SQS queues, and Lambda functions. Let's break down why.
RDS event notifications provide a near real-time mechanism for reacting to database changes. When an
automobile is sold, the RDS database change will trigger this notification.
Amazon SNS (Simple Notification Service) acts as a pub/sub service. Using SNS, you can publish one
message, and it will be distributed to multiple subscribers. In this case, the SNS topic will receive the RDS
event notification.
Fan-out involves distributing a single event to multiple independent subscribers. Instead of having each target
system directly subscribe to RDS event notifications, SNS allows you to "fan out" the notification to different
SQS queues. This decoupling ensures that each target system can consume the message at its own pace and
handle failures independently. Each SQS queue can be customized to handle the specific needs of each target
system.

Amazon SQS (Simple Queue Service) provides a reliable queuing mechanism. Each target system will have its
own dedicated SQS queue. The SQS queue acts as a buffer, ensuring that the target systems don't miss any
updates even if they are temporarily unavailable.
AWS Lambda functions are used to consume messages from the SQS queues and update the target systems.
The Lambda functions provide the necessary transformation and integration logic to interact with each target
system's API or data format.

**Option A** is less desirable because it creates a direct dependency between the database update and a single
SQS queue. It doesn't efficiently scale to multiple target systems and might lead to bottlenecks if the queue
consumer is slow. **Option B**, while using a FIFO queue, doesn't address the need to distribute the information
to multiple target systems effectively. **Option C** attempts to use SNS topics after the SQS queue, which is
logically backward. SNS is more efficient when distributing messages to multiple queues, then having them
filtered. The structure in **Option C** would be highly inefficient. Using SQS to fan out to SNS would make SQS a
bottle neck and remove its purpose of buffering.

In summary, option D provides a scalable, loosely coupled, and reliable solution that leverages the strengths
of RDS event notifications, SNS for fan-out, SQS for buffering, and Lambda for data transformation and
integration. References:
AWS SNS: https://aws.amazon.com/sns/
AWS SQS: https://aws.amazon.com/sqs/
AWS Lambda: https://aws.amazon.com/lambda/
RDS Event Notifications: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html

---

## Question 109

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the correct solution and why the other options are not
suitable:
Why **Option D** is Correct:

**Option D** leverages Amazon S3 Object Lock with legal hold functionality, addressing the company's
requirements directly. S3 Object Lock prevents objects from being deleted or overwritten for a specified
period or indefinitely. By enabling versioning, previous versions of objects are preserved, providing an extra
layer of protection. A legal hold provides the indefinite immutability needed until the company explicitly
decides to modify objects. Granting the s3:PutObjectLegalHold permission to specific IAM users gives them the
necessary authorization to remove the legal hold, allowing object deletion when the company decides. This

controlled access ensures that only authorized personnel can make changes to the immutability status.
Why Other Options Are Incorrect:

**Option A**: S3 Glacier vault with WORM vault lock policy: S3 Glacier is primarily for archival storage and has
retrieval times that are unsuitable for general data storage. While it offers write-once, read-many (WORM)
capabilities, it does not offer a mechanism for specific users to remove this immutability when necessary
without destroying the vault. This is important because the company wants to delete the objects eventually,
even if that isn't for a long time.

**Option B**: S3 Object Lock with Retention Period (Governance Mode): While this option correctly uses S3
Object Lock, setting a fixed retention period (even 100 years) does not align with the requirement for an
indefinite period of immutability until the company decides to modify the objects. Governance mode can be
overridden by users with specific permissions and may not provide a strong enough guarantee of immutability
for the company's compliance needs.

**Option C**: S3 Bucket with CloudTrail and Backups: This approach is reactive rather than preventative. It relies
on detecting modifications and restoring from backups, which is inefficient, complex, and may lead to data
loss in the time between the modification and the restoration. This option does not meet the primary
requirement of preventing data from being changed in the first place and lacks immutability features.
In summary:

**Option D** is the only solution that fulfills all the requirements: preventing data from being changed indefinitely
until the company decides to modify the objects, and allowing specific users to authorize the removal of
immutability.

---

## Question 110

**Answer:** **BD**

**Explanation:**

The correct solution involves minimizing the load on the EC2 instances and decoupling the image resizing
process from the web application.

**B.** Configure the web server to upload the original images to Amazon S3. This shifts the responsibility of
storing the images from the EC2 instances to S3, freeing up the EC2 instances to handle web requests more
efficiently. Direct uploads to S3 reduce the load on the web servers, as they no longer need to manage the
storage aspect. This is a key step in reducing coupling.

**D.** Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the
function to resize the image. This triggers a serverless Lambda function whenever a new image is uploaded
to S3. The Lambda function then handles the image resizing asynchronously. This fully decouples the resizing
process from the web application. S3 Event Notifications provide a highly scalable and reliable mechanism to
trigger the Lambda function, ensuring that images are resized in a timely manner without impacting the
website's performance. Lambda's on-demand nature only consumes resources during the resizing, making it
operationally efficient.

Why other options are incorrect:

**A:** S3 Glacier is designed for long-term archival storage and retrieval, not for actively used images requiring
resizing.

**C:** While using presigned URLs can offload image uploads from the web server, it doesn't address the image
resizing requirement.

**E:** EventBridge on a schedule would not be triggered by the uploads themselves, introducing latency and
inefficiencies in image resizing. S3 event notifications provide instant triggers when images are uploaded.

---

## Question 111

**Answer:** **D**

**Explanation:**

**Option D** provides the highest availability and lowest operational complexity due to several key AWS services.

1. Amazon MQ with active/standby brokers (Multi-AZ): This eliminates the need to manage ActiveMQ

servers on EC2 instances. Amazon MQ is a managed message broker service, and the active/standby
configuration across two Availability Zones (AZs) ensures automatic failover in case of an AZ outage.
This is a significant improvement in availability compared to managing ActiveMQ on EC2, where you'd
have to manually handle failover and replication. https://aws.amazon.com/mq/

2. Auto Scaling group for consumer EC2 instances across two AZs: This provides automatic scaling
and high availability for the consumer application. Auto Scaling automatically adjusts the number of
EC2 instances based on demand, ensuring that the application can handle traffic spikes. Distributing
instances across multiple AZs ensures that the application remains available even if one AZ fails.
https://aws.amazon.com/autoscaling/

3. Amazon RDS for MySQL with Multi-AZ enabled: This provides automatic failover and replication for
the MySQL database. RDS Multi-AZ creates a standby replica of the database in another AZ,
automatically failing over to the standby instance in case of a failure in the primary AZ. This
significantly reduces downtime and simplifies database management.
https://aws.amazon.com/rds/mysql/
By using these managed services and features, option D reduces operational overhead by eliminating the
need to manage the message broker, scaling consumer instances, or handle database replication and failover
manually.

**Option A** is less desirable as maintaining ActiveMQ servers on EC2 increases operational complexity. **Option B**
lacks auto-scaling for the consumer instances, resulting in potential availability issues if traffic increases
significantly. **Option C** similarly lacks auto-scaling for the consumer instances. Consequently, option D
effectively handles message brokering, scaling, and data redundancy via RDS Multi-AZ across AZs. This is the
best solution for high availability and simplified operations.

---

## Question 112

**Answer:** **A**

**Explanation:**

The best solution is A because it directly addresses the requirements of minimal code changes, minimal
development effort, and least operational overhead for migrating a containerized application to AWS.

Here's why:
AWS Fargate and ECS: Fargate allows you to run containers without managing the underlying EC2 instances.
ECS orchestrates the containers. This significantly reduces operational overhead because you don't need to

provision, manage, and scale EC2 instances yourself.
Containerization Compatibility: The application is already containerized, making it a good fit for ECS and
Fargate. This eliminates the need for significant code changes or re-architecting the application. The existing
containers can be deployed almost as-is.
Application Load Balancer (ALB): ALB efficiently distributes incoming traffic across the container instances
managed by ECS/Fargate. It provides features like health checks, traffic routing based on content, and SSL
termination.
Service Auto Scaling: ECS Service Auto Scaling automatically adjusts the number of running container
instances based on the incoming request load. This ensures optimal performance and cost efficiency without
manual intervention.

**Option B** (EC2 instances) increases operational overhead compared to Fargate, as you must manage the EC2
instances, including patching, scaling, and capacity planning.

**Option C** (Lambda and API Gateway) requires significant code changes because you need to re-write the
application logic to fit the Lambda function model. This involves substantially more development effort. It
might also not be a direct port of the web application's existing logic.

**Option D** (AWS ParallelCluster) is designed for High-Performance Computing (HPC) workloads that typically
involve tightly coupled parallel jobs. While it can scale, it is overkill and unnecessarily complex for a web
application and introduces higher operational overhead than Fargate/ECS. It's suitable for scientific
simulations, not general web traffic.

---

## Question 113

**Answer:** **C**

**Explanation:**

Here's a breakdown of why option C is the best solution and why the others are less suitable, focusing on
minimizing operational overhead and meeting the requirements:
Justification for **Option C** (Correct):

**Option C** leverages AWS Snowball Edge Storage Optimized for data transfer and AWS Glue for
transformation, which offers the least operational overhead:

1. Snowball Edge for Data Transfer: Snowball Edge is ideal for transferring large datasets (50 TB)
when network bandwidth is limited. This aligns perfectly with the scenario's constraint of no available
network bandwidth. It avoids network congestion and faster compared to DataSync or direct network
transfer.

2. Storage Optimized Choice: The "Storage Optimized" Snowball Edge is selected specifically for its
large storage capacity, catering to the 50 TB data volume.

3. AWS Glue for Transformation: AWS Glue is a fully managed ETL (Extract, Transform, Load) service.
By creating a custom transformation job in Glue, the company can replicate its existing
transformation logic in the cloud without the overhead of managing EC2 instances. AWS Glue
handles the infrastructure, scaling, and monitoring automatically.

4. Minimizing Operational Overhead: This solution minimizes operational overhead because Snowball
Edge simplifies the data transfer process, and AWS Glue handles the transformation job's
infrastructure management. The company doesn't need to manage EC2 instances for either the data
transfer or the transformation process.
Why other options are less optimal:

**Option A** (AWS DataSync + Glue): DataSync is a network-based data transfer service. The question states the
data center has no available network bandwidth for additional workloads, making DataSync an unsuitable
choice.

**Option B** (Snowcone + Application on Device): AWS Snowcone is designed for edge computing in rugged
environments. It has a smaller storage capacity than Snowball Edge, and deploying the transformation
application directly on the device would add complexity and operational overhead because of limited
processing capability.

**Option D** (Snowball Edge with EC2 + New EC2 Instance): While this solution could technically work, running
the transformation application on a separate EC2 instance in the AWS Cloud after the data is transferred from
the Snowball Edge introduces more operational overhead. You would need to manage, patch, and scale this
EC2 instance. Using AWS Glue is a more managed and efficient transformation approach. Plus, using EC2 on
snowball for small transformation jobs add complexity for management purpose of the infrastructure.
Supporting Concepts & Links:
AWS Snowball Edge: https://aws.amazon.com/snowball/
AWS Glue: https://aws.amazon.com/glue/
Data Transfer Options: https://aws.amazon.com/products/storage/data-transfer/
In conclusion, **Option C** provides the most efficient and cost-effective approach by leveraging Snowball Edge
for data transfer and AWS Glue for the data transformation job, minimizing operational overhead and meeting
all stated requirements.

---

## Question 114

**Answer:** **C**

**Explanation:**

The correct answer is C: Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain
DynamoDB to store the metadata.

Here's a detailed justification:
The primary requirement is to scale the image analysis application to handle a growing user base with varying
concurrency. The initial architecture using a single EC2 instance and DynamoDB becomes a bottleneck as the
number of users increases.

**Option A** is suboptimal. While using Lambda for processing provides scalability, storing photos in DynamoDB
is generally not recommended. DynamoDB is optimized for storing metadata and small documents, not large
binary files like images, which can become expensive and inefficient.

**Option B** is inappropriate. Kinesis Data Firehose is designed for streaming data ingestion and loading into data
stores/analytics tools. It's not intended for general image processing tasks like adding photo frames. Storing
images in Firehose is not a viable solution.

**Option D** does not fully address the scalability issue. Simply increasing the number of EC2 instances to three
still introduces scalability limitations and requires managing the EC2 instances. It also relies on EBS for
storing photos which isn't ideal in terms of cost and scalability for image storage. Provisioned IOPS EBS
volumes also adds unnecessary complexity and cost if high IOPS are not consistently needed.

**Option C** provides the best solution because it leverages the strengths of different AWS services:
AWS Lambda: Lambda allows serverless execution of the image processing logic (adding photo frames). It
automatically scales up or down based on demand, ensuring the application can handle varying levels of
concurrency without manual intervention. This achieves the scalability requirement.
AWS Lambda Documentation: Provides overview and features about Lambda service.
Amazon S3: S3 is object storage for storing large amounts of data such as images. S3 offers durability,
scalability, and cost-effectiveness for storing the photos.
Amazon S3 Documentation: Provides overview and features about S3 service.
DynamoDB: DynamoDB is a NoSQL database is best for storing metadata, it efficiently handles the growing
amount of user metadata (photo frame preferences).
Amazon DynamoDB Documentation: Provides overview and features about DynamoDB service.
By separating the image processing task to Lambda, storing photos in S3, and retaining metadata in
DynamoDB, the application gains scalability, cost-effectiveness, and improved performance. The solution
aligns perfectly with the demands of a growing user base and fluctuating concurrency, making it the ideal
choice.

---

## Question 115

**Answer:** **C**

**Explanation:**

**Option C** is the most suitable solution because it allows for private connectivity to S3 without traversing the
internet, aligning perfectly with the requirement. Moving the EC2 instances to private subnets enhances
security by isolating them from direct internet exposure. Creating a VPC endpoint for S3 establishes a private
connection between the VPC and S3, ensuring all traffic remains within the AWS network. Associating the
VPC endpoint with the private subnet's route table directs S3-bound traffic through the endpoint. This setup
achieves the desired private route for file transfers, fulfilling the mandate of avoiding internet transmission.
VPC endpoints are cost-effective and highly scalable.

**Option A** is incorrect because a NAT gateway is primarily used for allowing instances in private subnets to
initiate outbound internet connections, not for directing traffic privately to S3.**Option B** is incorrect because
security groups control traffic based on IP addresses and ports but don't provide a private route for S3
access; the traffic would still traverse the internet.**Option D** is incorrect because AWS Direct Connect
establishes a dedicated network connection between on-premises infrastructure and AWS, which is
unnecessary and overly complex for the described requirement of internal S3 access. It also involves
significant costs and setup overhead compared to a VPC endpoint.

Therefore, option C provides the most secure, efficient, and cost-effective solution for establishing a private
connection to S3 for EC2 instances.
https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpointss3.htmlhttps://aws.amazon.com/vpc/pricing/

---

## Question 116

**Answer:** **AD**

**Explanation:**

The best solution, with the least operational overhead, is a combination of using Amazon S3 for static website
hosting and Amazon CloudFront for content delivery with HTTPS.

**D.** Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static
website hosting enabled.
Static Website Hosting: S3 provides static website hosting. This eliminates the need for servers (EC2
instances) and operating system maintenance. S3 handles the underlying infrastructure management,
ensuring high availability and scalability automatically.
Low Operational Overhead: S3 requires minimal operational effort. Uploading static files to an S3 bucket is
straightforward, and S3 handles scaling and availability.
Cost-Effective: S3 storage is relatively inexpensive, and you only pay for the storage you use and the data
you transfer.

**A.** Configure Amazon CloudFront in front of the website to use HTTPS functionality.
Content Delivery Network (CDN): CloudFront is a CDN that caches website content at edge locations
globally. This provides faster content delivery to users, regardless of their location.
HTTPS Functionality: CloudFront allows you to use HTTPS for secure communication with users, improving
website security. You can use AWS Certificate Manager (ACM) to easily provision and manage SSL/TLS
certificates for CloudFront.
Enhanced Security: CloudFront protects against DDoS attacks and other threats at the edge.
Integration with S3: CloudFront integrates seamlessly with S3, making it easy to distribute content stored in
S3.
Why other options are not ideal:

**B.** Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality: AWS WAF is a web
application firewall that helps protect your web applications from common web exploits. While WAF is
beneficial for security, it doesn't directly provide HTTPS functionality. HTTPS is usually configured at the CDN
level, so A is the more applicable choice.

**C.** Create and deploy an AWS Lambda function to manage and serve the website content: Lambda is ideal
for dynamic content and event-driven computing. This is a more complex solution and would have higher
operational overhead than using S3 for static website hosting, which aligns better with the prompt
requirement to keep it simple.

**E.** Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances
behind an Application Load Balancer: EC2 instances require operating system maintenance, patching, and
scaling considerations, making them a higher-overhead solution than S3 for a static website.

---

## Question 117

**Answer:** **A**

**Explanation:**

The most efficient way to stream CloudWatch Logs to Amazon OpenSearch Service (Amazon Elasticsearch
Service) with the least operational overhead is to use a CloudWatch Logs subscription.

**Option A** is correct because CloudWatch Logs subscriptions offer a direct and managed integration with
Amazon OpenSearch Service. A subscription allows you to define a filter pattern to select specific log events
and automatically stream them to your OpenSearch domain. This eliminates the need for custom coding or
infrastructure management. The CloudWatch Logs service handles the streaming and scaling, which
minimizes operational overhead.

**Option B** requires creating and managing a Lambda function, which adds complexity and operational overhead
for maintenance, monitoring, and potential scaling issues.

**Option C**, using Kinesis Data Firehose, is also a viable option, but CloudWatch Logs subscriptions provide a
more direct path for sending logs to Amazon OpenSearch Service. Kinesis Data Firehose is generally better
suited for broader data ingestion needs, but introduces an extra layer of configuration and management
compared to direct subscriptions.

**Option D** involves installing and configuring Kinesis Agent on each application server and managing Kinesis
Data Streams, leading to the highest operational overhead. This method introduces complexity with agent
management, stream configuration, and potential data loss if agents are not properly configured. This option
is unnecessary when the other options provide simpler, more managed solutions.

Therefore, **Option A** provides the simplest and most efficient solution due to the direct integration between
CloudWatch Logs and Amazon OpenSearch Service using subscriptions. It avoids the operational overhead of
managing custom functions, agents, or additional streaming services.
Reference links:
CloudWatch Logs Subscriptions
Sending CloudWatch Logs to Amazon OpenSearch Service

---

## Question 118

**Answer:** **D**

**Explanation:**

The correct answer is D. Amazon S3. Here's why:
Scalability and Durability: Amazon S3 (Simple Storage Service) is designed for virtually unlimited scalability
and high durability. It can easily handle petabytes of data and is built to withstand the loss of data through
redundant storage across multiple devices and facilities. This aligns directly with the requirement for scaling
to accommodate 900 TB and meeting potentially high demand. https://aws.amazon.com/s3/
Cost-Effectiveness: S3 offers various storage classes (Standard, Intelligent-Tiering, Standard-IA, One ZoneIA, Glacier, Glacier Deep Archive) that allow optimization for different access patterns and cost
considerations. For data accessed frequently, S3 Standard might be appropriate, whereas infrequently
accessed data can be stored in cheaper tiers like S3 Standard-IA or Glacier, reducing overall storage costs.
https://aws.amazon.com/s3/storage-classes/
Web Application Integration: S3 integrates seamlessly with web applications. EC2 instances can easily
retrieve and serve text documents directly from S3 via HTTP/HTTPS. The S3 API simplifies the process of
accessing and managing objects.
Other options and why they are less ideal:

**A.** Amazon Elastic Block Store (Amazon EBS): EBS volumes are block storage and are attached to individual
EC2 instances. Storing 900 TB on EBS would be prohibitively expensive and complex to manage, requiring a
large number of attached volumes across instances, and scaling would be less efficient. EBS is better suited
for operating systems, application software, and frequently accessed data closely tied to a specific instance.

**B.** Amazon Elastic File System (Amazon EFS): EFS provides shared file storage for EC2 instances. While EFS
can scale, storing 900 TB would still be relatively more expensive than S3, and the performance
characteristics, while suitable for some shared file workloads, are typically not optimized for serving static
web content like text documents as effectively as S3. EFS's cost structure makes it less favorable for large
datasets than S3, especially when considering infrequent access scenarios.
https://aws.amazon.com/efs/pricing/

**C.** Amazon OpenSearch Service (Amazon Elasticsearch Service): OpenSearch is a search and analytics
engine. While it could store and index the text documents, it's not optimized for simply storing and serving
large files. Moreover, indexing 900 TB of data in OpenSearch would be much more costly and complex than
storing the files in S3. OpenSearch is for full-text search and analysis, not general-purpose large-scale
storage.

In summary, S3 provides the best combination of scalability, cost-effectiveness, and integration capabilities
for storing and serving a large repository of text documents for a web application experiencing varying
demand.

---

## Question 119

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The problem requires a solution to protect API Gateway REST APIs across multiple AWS accounts and regions
(us-east-1 and ap-southeast-2) from common web exploits like SQL injection and cross-site scripting (XSS)
with minimal administrative overhead.

**Option B**, setting up AWS Firewall Manager and centrally configuring AWS WAF rules, is the most efficient
approach. AWS Firewall Manager is designed to centrally manage and deploy AWS WAF rules across multiple
accounts and regions. This provides a single pane of glass for managing security policies. With Firewall
Manager, you can define a WAF policy once and apply it consistently across all your APIs, significantly
reducing administrative effort. You create an AWS WAF rule group within Firewall Manager and then deploy
that rule group across the accounts and regions in question. The WAF rules can be tailored to specifically
block SQL injection and XSS attacks using managed rule groups or custom rules based on regular
expressions or other criteria.

**Option A**, setting up AWS WAF in both regions and associating Regional web ACLs with an API stage, while
functionally correct, requires more manual configuration. You would need to create and maintain the same
WAF rules in each region separately. This increases administrative overhead and the potential for
inconsistencies. It doesn't offer the central management that Firewall Manager does.
Options C and D involve AWS Shield. AWS Shield provides protection against Distributed Denial of Service
(DDoS) attacks, which is not the primary concern in this scenario. While Shield Advanced offers some WAF
integration, it's not the core focus for SQL injection and XSS protection. Furthermore, AWS Shield's pricing
model is different and potentially more expensive than Firewall Manager for this use case. Shield also does
not provide the centralized management across multiple accounts that Firewall Manager provides.

Therefore, AWS Firewall Manager with centrally managed AWS WAF rules offers the best balance of security
effectiveness and administrative efficiency for protecting API Gateway REST APIs across multiple accounts
and regions from SQL injection and XSS attacks.

---

## Question 120

**Answer:** **B**

**Explanation:**

The best solution is B. Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in
us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.

Here's why:
Global Performance & Availability: The primary requirement is to improve performance and availability for
users in the US and Europe. AWS Global Accelerator is specifically designed for this. It leverages the AWS
global network to direct user traffic to the closest healthy endpoint, improving latency and reliability.
NLB Compatibility: Global Accelerator is directly compatible with Network Load Balancers (NLBs). It can
treat the NLBs in us-west-2 and eu-west-1 as endpoints.
Simple Configuration: The proposed solution involves creating a Global Accelerator, defining endpoint
groups for each region, and associating the respective NLBs with those groups. This is a relatively
straightforward configuration.
Fault Tolerance: Global Accelerator continually monitors the health of endpoints. If an NLB or the EC2
instances behind it become unhealthy, Global Accelerator will automatically redirect traffic to the healthy
endpoint in the other region, ensuring high availability.
Why other options are not optimal:

**A.** Route 53 Geolocation with CloudFront: While Route 53 Geolocation routing directs traffic based on the
user's location, it doesn't inherently provide the performance benefits of Global Accelerator's anycast
addressing and AWS global network optimization. CloudFront caches static content but won't significantly
improve the performance of dynamic DNS queries served by EC2 instances. The user will still reach the
regional NLBs that they have in place, which is only a regional solution.

**C.** Elastic IPs and Route 53 Geolocation: Attaching Elastic IPs to individual EC2 instances and using Route 53
geolocation would work but presents several challenges. It involves managing individual instances directly,
increasing operational complexity. It would be difficult to implement health checks and ensure automated
failover. It also won't benefit from the anycast network that Global Accelerator provides.

**D.** Application Load Balancers (ALBs) with Route 53 Latency Routing and CloudFront: While ALBs offer
more features than NLBs, the core problem remains the lack of global traffic management and network
optimization. Route 53 Latency-based routing is useful, but it isn't as performant as Global Accelerator as it
still has to traverse over the public internet to the designated region. CloudFront will only help for cached
content. In addition, the company is already using NLBs, switching to ALBs would require more significant
architecture changes.
In summary: Global Accelerator with NLBs in different regions provides the best balance of performance,

availability, and ease of implementation for routing traffic to DNS servers for users in the US and Europe.

---

## Question 121

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Encryption at Rest for RDS: Amazon RDS supports encryption at rest, but it must be enabled during instance
creation or by restoring from an encrypted snapshot. You cannot directly encrypt an existing unencrypted
RDS instance in place.
Snapshot Encryption: The process involves creating an encrypted copy of the most recent DB snapshot. This
encrypted snapshot serves as the source for creating a new, encrypted RDS instance.
Restoring from Encrypted Snapshot: By restoring the encrypted snapshot, a new RDS instance is launched
with encryption enabled.
Replacing the Existing Instance: To fully transition to an encrypted setup, you need to replace the original,
unencrypted instance with the newly created encrypted one. This might involve updating application
connection strings to point to the new instance and decommissioning the old one.

Why other options are incorrect:

**B:** Encrypting an EBS volume and copying snapshots there doesn't encrypt the RDS instance itself. RDS
snapshots are stored separately and managed by AWS. It doesn't mention how you will create a new
encrypted RDS instance.

**C:** While you can copy snapshots and encrypt them, restoring an encrypted snapshot to an existing
unencrypted DB instance isn't possible. RDS requires you to create a new encrypted instance from an
encrypted snapshot.

**D:** Copying snapshots to an encrypted S3 bucket doesn't encrypt the RDS instance or the snapshots in a way
that RDS can use directly for creating an encrypted instance. S3 encryption is separate from RDS encryption
at rest.

In summary, **Option A** provides the correct and complete process to move an unencrypted RDS instance to an
encrypted setup: encrypt a copy of the snapshot, restore from the encrypted snapshot to create a new
encrypted instance, and replace the existing instance with the new one.

Supporting Documentation:
Amazon RDS Encryption
Encrypting Amazon RDS Resources

---

## Question 122

**Answer:** **B**

**Explanation:**

The correct answer is B: Use AWS Key Management Service (AWS KMS) to protect the encryption keys.

Here's a detailed justification:
AWS KMS is a managed service specifically designed to simplify the creation, storage, and control of
encryption keys used to encrypt data. Using KMS reduces the operational burden by offloading key
management responsibilities from the company to AWS. KMS handles tasks like key generation, rotation,
storage, and deletion in a secure and compliant manner. This frees developers from having to build and
maintain their own key management infrastructure, which can be complex and time-consuming.

**Option A**, using MFA, enhances security by requiring multiple authentication factors, but it doesn't address
the core operational burden of managing keys. MFA protects against unauthorized access, but it doesn't
simplify key generation, storage, or rotation.

**Option C**, using AWS Certificate Manager (ACM), is primarily for managing SSL/TLS certificates used for
securing network traffic. ACM is not designed for general-purpose key management for application data
encryption. While ACM can create and store private keys for certificates, it's not the appropriate tool for
managing keys used within application code to encrypt arbitrary data.

**Option D**, using an IAM policy to limit access, is a crucial security practice. However, similar to MFA, it doesn't
alleviate the burden of creating, storing, rotating, and managing the encryption keys themselves. IAM helps
control who can use the keys, but it doesn't manage the lifecycle of the keys.

Therefore, KMS offers the most direct solution to reducing the operational burden associated with key
management. It provides a centralized, managed service for handling encryption keys, allowing developers to
focus on their application code rather than the complexities of key management. KMS integrates well with
other AWS services and supports various encryption algorithms.
For further research, you can refer to the following AWS documentation:
AWS Key Management Service (KMS): https://aws.amazon.com/kms/
AWS Certificate Manager (ACM): https://aws.amazon.com/certificate-manager/
IAM Policies: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html

---

## Question 123

**Answer:** **D**

**Explanation:**

The correct answer is D because it addresses the performance bottleneck caused by SSL
encryption/decryption on the EC2 instances by offloading this task to a dedicated service: the Application
Load Balancer (ALB).

Here's a detailed justification:
SSL Offloading: SSL encryption and decryption are CPU-intensive tasks. By moving this responsibility to the
ALB, the EC2 instances are freed from this burden, allowing them to focus on serving application logic. This
significantly improves their performance and reduces CPU utilization.
Application Load Balancer (ALB): An ALB is designed for layer 7 (application layer) load balancing. It can
handle HTTPS traffic, performing SSL termination and then forwarding the decrypted traffic to the EC2
instances. This ensures secure communication while optimizing resource utilization.
AWS Certificate Manager (ACM): ACM simplifies the process of obtaining, managing, and deploying SSL/TLS
certificates for use with AWS services. Importing the existing SSL certificate into ACM allows the ALB to
easily access and use it for SSL termination.
Scalability and High Availability: ALBs are highly scalable and provide built-in high availability. They can
automatically distribute traffic across multiple EC2 instances, ensuring that the application remains available
even if one instance fails.
Cost-Effectiveness: While there is a cost associated with using an ALB, the performance gains and reduced
resource consumption on the EC2 instances can lead to overall cost savings.

Why other options are incorrect:

**A:** Creating a new SSL certificate using ACM and installing it on each instance does not solve the underlying
problem of SSL processing burdening the EC2 instances. It merely replaces the existing certificate.

**B:** Storing the SSL certificate in S3 and referencing it from the EC2 instances would not offload the SSL
decryption processing. The EC2 instances would still need to perform the decryption themselves. This adds
complexity without solving the core issue.

**C:** Creating a proxy server (another EC2 instance) shifts the SSL decryption burden to the proxy. While it
might alleviate some load on the original web servers, it's not as scalable or efficient as using a managed
service like ALB. It also adds complexity to the architecture.

---

## Question 124

**Answer:** **A**

**Explanation:**

The correct answer is A, Implement EC2 Spot Instances. Here's why:
Spot Instances are unused EC2 capacity available in the AWS cloud at steep discounts compared to OnDemand prices. They are ideal for fault-tolerant, stateless, and flexible workloads, perfectly fitting the
company's batch processing job requirements. Because the job is stateless and can be interrupted without
negative impact, the possibility of Spot Instance interruptions is mitigated. This allows the company to
leverage significant cost savings, often up to 90%, compared to On-Demand Instances.
Reserved Instances, while providing cost savings, require a commitment to instance usage for a specific
period (1 or 3 years). Given the dynamic nature of the batch processing job, purchasing Reserved Instances
may result in wasted capacity and reduced cost-effectiveness if the job doesn't consistently require that
capacity.
On-Demand Instances offer flexibility but are the most expensive option. For a job that can tolerate
interruptions and aims for cost optimization, On-Demand Instances are not the best choice.
AWS Lambda is not suitable because it has execution time limits. Typical Lambda execution is capped at 15
minutes. The batch processing job takes upwards of 60 minutes to complete.

Therefore, Spot Instances provide the most cost-effective and scalable solution for this specific scenario.
They allow the company to leverage the flexibility of EC2 while minimizing costs, given the job's fault
tolerance and flexibility.
Further Research:
AWS EC2 Spot Instances: https://aws.amazon.com/ec2/spot/
AWS EC2 Pricing: https://aws.amazon.com/ec2/pricing/

---

## Question 125

**Answer:** **AE**

**Explanation:**

Let's break down why options A and E are the correct choices for achieving high availability, secure
communication with a third-party service, and keeping the EC2 instances and RDS DB instance private.

**Option A**: Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS MultiAZ DB instance in private subnets.
This addresses a core requirement: keeping both the EC2 instances and the RDS database out of the public
internet. Private subnets do not have direct internet access. Using an Auto Scaling group across multiple
Availability Zones ensures high availability of the web tier, which is essential for the ecommerce website. A
Multi-AZ RDS DB instance does the same for the database tier, providing failover in case of an outage.

**Option E**: Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two
Availability Zones. Deploy an Application Load Balancer in the public subnets.
This configuration provides the necessary network infrastructure for the application. The Application Load
Balancer (ALB) sits in public subnets, allowing it to receive traffic from the internet and distribute it to the EC2
instances in the private subnets. The two private subnets, each in a different Availability Zone, provide a
highly available environment. NAT Gateways, each in a different Availability Zone, allow the EC2 instances in
the private subnets to initiate outbound traffic to the third-party payment processor while remaining
inaccessible from the internet. The redundancy of two NAT Gateways enhances availability.

Why other options are incorrect:

**Option B**: Placing the ALB in private subnets prevents it from receiving traffic from the public internet,
defeating its purpose.

**Option C**: Launching EC2 instances in public subnets exposes them to the internet directly, which violates the
security requirements.

**Option D**: Having only one public and one private subnet doesn't inherently guarantee availability across
Availability Zones. It also lacks redundancy in NAT Gateway.
In essence, Options A and E establish a secure and highly available architecture:
Security: Private subnets for EC2 instances and RDS, and NAT gateways control outbound traffic.
Availability: Multi-AZ RDS and Auto Scaling group across AZs ensures high availability.
Functionality: ALB in public subnets handles inbound traffic and distributes it to web tier. NAT gateways
allow private EC2s to connect to payment processing on the internet.
Supporting Documentation:

Amazon VPC: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Introduction.html
Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html
Auto Scaling: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-autoscaling.html
NAT Gateway: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
Application Load Balancer:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

---

## Question 126

**Answer:** **B**

**Explanation:**

The correct solution is to transition objects to S3 Glacier Deep Archive after 2 years using an S3 Lifecycle
policy. Here's why:
Requirement 1: Cost Reduction: S3 Glacier Deep Archive offers the lowest storage cost among all S3 storage
classes, making it ideal for long-term archival data. https://aws.amazon.com/s3/storage-classes/glacier/
Requirement 2: Data Retention: The company needs to retain data for 25 years, which S3 Glacier Deep
Archive fully supports.
Requirement 3: Highly Available & Immediately Retrievable for 2 Years: The most recent 2 years of data
need to be highly available and immediately retrievable. Keeping the data in S3 Standard for the first 2 years
satisfies this requirement.
S3 Lifecycle Policies: These policies automate the transition of objects between different S3 storage classes
based on defined rules. This is crucial for managing data retention and storage costs efficiently.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-concept.html

**Option A** is incorrect because it immediately transitions all data to S3 Glacier Deep Archive, violating the
requirement for the most recent 2 years of data to be highly available and immediately retrievable.

**Option C**, using S3 Intelligent-Tiering with the archiving option, would likely be more expensive than directly
transitioning to S3 Glacier Deep Archive after 2 years, since Intelligent-Tiering monitors access patterns.
While it archives infrequently accessed data, it's designed for data with varying access patterns, not purely
archival needs with a defined accessibility window.

**Option D** is incorrect because S3 One Zone-IA is not designed for long-term archival storage with minimal
access. It also trades off availability by storing data in a single Availability Zone. It's cheaper than S3
Standard, but not as cost-effective as S3 Glacier Deep Archive for long-term retention. The transition to S3
Glacier Deep Archive after 2 years is correct, but the initial transition to S3 One Zone-IA is unnecessary and
introduces availability risks.

Therefore, transitioning to S3 Glacier Deep Archive only after the data has been stored in S3 Standard for the

first 2 years balances cost optimization with the accessibility requirements. This approach ensures that the
most recent data is readily available while older data is stored in the most cost-effective manner for longterm archival.

---

## Question 127

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the correct answer and why the other options are less
suitable for the media company's storage requirements:

**Option D**: Amazon EC2 instance store, Amazon S3, and Amazon S3 Glacier
Amazon EC2 Instance Store (for Maximum Performance): Instance stores provide the highest I/O
performance directly attached to the EC2 instance. This makes them ideal for video processing, which
requires fast read/write speeds for manipulating large video files. The ephemeral nature of instance store is
acceptable as data can be readily retrieved from durable storage.
Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html
Amazon S3 (for Durable Data Storage): S3 is designed for 99.999999999% durability, making it suitable for
storing critical media content long-term. S3 offers a balance of cost-effectiveness and accessibility for
frequently accessed media. With 300TB of storage, it is appropriate since the media content is often used.
Reference: https://aws.amazon.com/s3/storage-classes/
Amazon S3 Glacier (for Archival Storage): Glacier is a low-cost storage option specifically designed for
infrequently accessed data. It is perfect for archival media that is no longer in active use. With 900TB of
storage, it is appropriate since the data is rarely used.
Reference: https://aws.amazon.com/glacier/

Why other options are incorrect:

**Option A** (Amazon EBS, Amazon S3, and Amazon S3 Glacier): While EBS provides persistent block storage
for EC2, it doesn't offer the same level of I/O performance as instance store for intensive workloads like video
processing. EBS is also more expensive per GB than instance store. It is also inappropriate to use Amazon EBS
as an external storage location, since the EBS volume is attached to an EC2 instance.

**Option B** (Amazon EBS, Amazon EFS, and Amazon S3 Glacier): EFS is a scalable file storage service for use

with EC2, but it is not optimized for maximum I/O performance. Video processing would benefit more from the
high throughput of instance store. EFS is also more expensive than S3 for durable storage. It is also
inappropriate to use Amazon EBS as an external storage location, since the EBS volume is attached to an EC2
instance.

**Option C** (Amazon EC2 Instance Store, Amazon EFS, and Amazon S3): While instance store is correct for
video processing, EFS is less durable and more expensive than S3 for general durable media storage. S3
Glacier is a better fit for the archival storage requirements rather than using S3 for both durable and archival,
since Glacier is designed and priced for archival storage.
In summary: **Option D** provides the most cost-effective and performance-optimized solution by leveraging
instance store for performance, S3 for durability, and Glacier for archival, fully meeting all storage needs
outlined in the problem.

---

## Question 128

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS)
managed node group.

Here's a detailed justification:
The problem statement emphasizes minimizing cost and operational overhead while running stateless
containerized applications that can tolerate disruptions. Spot Instances offer significant cost savings
compared to On-Demand Instances because they utilize spare EC2 capacity. However, Spot Instances can be
terminated with short notice (2-minute warning), making them unsuitable for stateful or disruption-sensitive
workloads. Because the application is stateless and tolerant to disruptions, using Spot Instances aligns with
the cost optimization requirement.
Using Amazon EKS managed node groups simplifies the management of the underlying EC2 instances that
run the containers. EKS handles patching, updating, and scaling the nodes within the group. By using
managed node groups, the company reduces operational overhead associated with managing EC2 instances
directly. Further, EKS offers inherent benefits for managing container deployments, scaling, and
orchestration, all which contribute to reduced operational overhead.
Combining Spot Instances with EKS managed node groups creates a cost-effective and operationally efficient
solution. EKS orchestrates the containers, handling the redeployment of containers if a Spot Instance is
terminated, because of the application’s stateless nature. Options C and D use On-Demand Instances, which
are more expensive than Spot Instances, and would violate the cost minimization requirement. **Option A**, while
using Spot Instances, lacks the orchestration and management features of EKS, leading to higher operational
overhead. Running containers directly on EC2 instances without an orchestrator like Kubernetes introduces

complexity in deployment, scaling, and management.

Therefore, using Spot Instances in an Amazon EKS managed node group is the best approach to meet the
requirements of minimizing cost and operational overhead while running disruption-tolerant, stateless
containerized applications.
Supporting Documentation:
Amazon EKS Managed Node Groups: https://docs.aws.amazon.com/eks/latest/userguide/managed-nodegroups.html
Amazon EC2 Spot Instances: https://aws.amazon.com/ec2/spot/
Kubernetes Concepts: https://kubernetes.io/docs/concepts/

---

## Question 129

**Answer:** **AE**

**Explanation:**

The correct answer is AE. Here's why:

**A.** Migrate the PostgreSQL database to Amazon Aurora:
Managed Database Service: Migrating the on-premises PostgreSQL database to Amazon Aurora PostgreSQL
offers a fully managed database service. This significantly reduces the operational overhead associated with
tasks such as patching, backups, and database scaling. Aurora also offers superior performance compared to
standard PostgreSQL deployments.
Scalability and Availability: Aurora provides automatic scaling capabilities, allowing the database to handle
fluctuating workloads without manual intervention. It also offers high availability features, ensuring minimal
downtime.
Reduced Operational Burden: The company is currently burdened by the operational overhead of maintaining
the database infrastructure. Aurora removes this burden, freeing up resources for other tasks.

**E.** Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service
(Amazon ECS):
Serverless Containerization: Fargate is a serverless compute engine for ECS that allows you to run
containers without managing underlying EC2 instances. This eliminates the operational overhead of
provisioning, patching, and scaling EC2 instances.
Simplified Deployment and Management: ECS simplifies the deployment, management, and scaling of
containerized applications. Fargate integration further simplifies the process by removing the need to manage
the underlying infrastructure.

Improved Scalability and Availability: ECS with Fargate offers improved scalability and availability for the
web application. ECS can automatically scale the number of containers based on demand, while Fargate
ensures that the containers are always running on healthy infrastructure.
Why the other options are less suitable:

**B.** Migrate the web application to be hosted on Amazon EC2 instances: While moving to EC2 is a step
towards the cloud, it still requires managing the underlying operating systems, patching, and scaling, which
doesn't significantly alleviate the operational overhead.

**C.** Set up an Amazon CloudFront distribution for the web application content: CloudFront primarily focuses
on content delivery and caching, improving application performance for geographically distributed users.
While beneficial, it doesn't address the core problem of reducing operational overhead related to the web
application and database infrastructure.

**D.** Set up Amazon ElastiCache between the web application and the PostgreSQL database: ElastiCache is a
caching service that can improve application performance by caching frequently accessed data. However, it
doesn't directly address the operational overhead of managing the underlying infrastructure and database.

---

## Question 130

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution and why the other options are less suitable
for maintaining desired performance based on CPU utilization in an Auto Scaling group:
The core requirement is to keep the EC2 instance CPU utilization around 40%. To achieve this, the Auto
Scaling group must dynamically adjust the number of instances based on the actual CPU load. A target
tracking scaling policy is specifically designed for this scenario. It allows you to set a target value for a
metric (in this case, CPU utilization) and the Auto Scaling group automatically adjusts the number of instances
to maintain that target. It continuously monitors the CloudWatch metric (CPUUtilization) and adds or removes
instances as needed to stay close to the 40% target.

**Option A**, simple scaling policy, is less ideal. While it allows scaling based on metrics, it operates with fixed
adjustments. You would need to define how many instances to add or remove based on breaches of upper and
lower thresholds. It doesn't continuously strive to maintain a specific target like 40%. Configuring the exact
adjustments required for a complex workload would be more cumbersome than using target tracking.

**Option C**, using an AWS Lambda function, introduces unnecessary complexity. While Lambda can update the

desired capacity, you would need to write custom code to monitor CloudWatch metrics, calculate the required
capacity adjustments, and then update the Auto Scaling group. Target tracking provides a managed solution
that handles all of this automatically, reducing operational overhead. Relying on Lambda would also mean
managing code, potential errors in your logic, and the IAM permissions required for the Lambda function.

**Option D**, scheduled scaling actions, is not suitable for dynamic CPU-based performance maintenance.
Scheduled scaling only adjusts the capacity based on a pre-defined schedule. It doesn't react to real-time
changes in CPU utilization. If the workload fluctuates unpredictably, scheduled scaling would be ineffective
and could lead to either over-provisioning (wasting resources) or under-provisioning (impacting performance).

In summary, target tracking scaling is the most efficient and appropriate solution because it directly
addresses the requirement of maintaining a specific CPU utilization target for optimal application
performance. It is a managed service solution, so is preferred over building a solution using Lambda.
Supporting Documentation:
AWS Auto Scaling Target Tracking Scaling Policies:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html
AWS Auto Scaling Simple Scaling Policies: https://docs.aws.amazon.com/autoscaling/ec2/userguide/asscaling-simple.html
AWS Auto Scaling Scheduled Scaling:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html

---

## Question 131

**Answer:** **D**

**Explanation:**

The correct answer is D: Create an origin access identity (OAI). Assign the OAI to the CloudFront
distribution. Configure the S3 bucket permissions so that only the OAI has read permission.

Here's a detailed justification:
The primary goal is to restrict direct access to the S3 bucket while allowing CloudFront to serve the files.
Origin Access Identity (OAI) is specifically designed for this purpose. An OAI is a virtual user identity that
CloudFront uses to fetch private content from your S3 bucket.
Why OAI is the right approach: OAI provides a secure way to allow CloudFront to access the S3 bucket
without making the content publicly accessible via the S3 URL. It enforces access control at the bucket level.
Steps involved:

1. Create an OAI: This creates a unique CloudFront user that identifies your distribution.

2. Assign the OAI to CloudFront: When configuring the CloudFront distribution, you specify the OAI.
This tells CloudFront to use this identity when requesting content from the S3 origin.

3. Configure S3 Bucket Permissions: Modify the S3 bucket policy to grant the OAI read access to the
objects. Importantly, remove any public read access. This ensures that only the CloudFront
distribution (acting through the OAI) can retrieve objects from the bucket.

Why other options are incorrect:

**A:** Writing individual policies for each S3 bucket (if there were many) is not scalable. It is also not necessary
because OAI already achieves the desired outcome by controlling access at the bucket level.

**B:** Using an IAM user is generally discouraged for service-to-service authentication in this scenario. OAI is
specifically designed for CloudFront-S3 access control and provides a more streamlined and secure solution.
Also, it's not clear how you would "assign" the IAM user to CloudFront, making the process conceptually
flawed.

**C:** While you do use an S3 bucket policy, only assigning the CloudFront distribution ID as the Principal without
the context of OAI doesn't prevent direct S3 access. The S3 bucket policy needs to grant the OAI permission,
not just the CloudFront distribution ID. Also, the Distribution ID changes, thus the OAI is the stable element to
use.
In essence, OAI enables a secure, dedicated channel for CloudFront to fetch content from S3 without
exposing the bucket's contents to the public internet via direct S3 URL access.

---

## Question 132

**Answer:** **A**

**Explanation:**

The correct answer is A: Amazon CloudFront and Amazon S3. Here's why:
Scalability and Global Reach: Amazon CloudFront is a content delivery network (CDN) that replicates your
content across edge locations globally. This ensures low latency and fast download speeds for users
regardless of their geographical location. https://aws.amazon.com/cloudfront/
Cost-Effectiveness and Limited Provisioning: S3 offers a highly scalable and cost-effective storage solution
for the historical performance reports. You only pay for the storage you use. CloudFront further optimizes cost
by caching content at edge locations, reducing the load on your origin (S3). Using S3 & CloudFront eliminates
the need to manage servers or other compute infrastructure, reducing operational overhead.

Fastest Response Time: CloudFront caches the reports close to the users, minimizing the distance the data
needs to travel. This directly translates to lower latency and faster download speeds compared to serving
content directly from an origin server.
Now, let's examine why the other options are less suitable:

**B.** AWS Lambda and Amazon DynamoDB: While Lambda and DynamoDB are scalable services, they're better
suited for dynamic data and application logic. Serving static files (historical reports) using Lambda would be
less cost-effective and more complex than using S3 and CloudFront. DynamoDB is not optimized for storing
and serving static files.

**C.** Application Load Balancer with Amazon EC2 Auto Scaling: This setup involves provisioning and managing
EC2 instances, which is less cost-effective and requires more operational overhead than S3 and CloudFront. It
doesn't inherently provide global distribution like CloudFront. While Auto Scaling provides scalability, it
doesn't match the built-in global distribution and caching capabilities of CloudFront.

**D.** Amazon Route 53 with internal Application Load Balancers: This is a possible configuration for load
balancing. However, this would distribute traffic between regional load balancers. It doesn't take into account
that the files are static and suitable for caching closer to the users as CloudFront does. Furthermore, it
requires provisioning infrastructure, failing to limit provisioning of infrastructure resources.

In summary, the combination of Amazon CloudFront and Amazon S3 is the most efficient and cost-effective
solution for delivering downloadable historical performance reports globally with minimal infrastructure
provisioning and optimal response times.

---

## Question 133

**Answer:** **C**

**Explanation:**

The best solution is C, migrating the Oracle database to Amazon RDS Custom for Oracle and creating a read
replica in another AWS Region. Here's why:
RDS Custom for Oracle: This service provides managed database capabilities while allowing access to the
underlying operating system. This meets the requirement of needing OS access, which standard RDS does not
provide.
Database Upgrade: RDS Custom allows for database upgrades while maintaining control over the process.
Disaster Recovery: Creating a read replica in another AWS Region directly addresses the disaster recovery
requirement. The read replica can be promoted to a standalone, writeable instance in the event of a primary

region failure, minimizing downtime.
Operational Overhead: RDS Custom automates many operational tasks, reducing the operational overhead
compared to managing Oracle on EC2. Read replicas further contribute to reduced overhead by allowing for
DR testing without impacting the primary instance.
Cost-Effectiveness: While not explicitly mentioned in the requirements, RDS Custom generally provides a
good balance between control and cost-effectiveness compared to fully self-managed EC2 instances.

**Option A** (EC2) requires significant operational overhead, defeating the purpose of minimizing it. **Option B**
(RDS for Oracle with Cross-Region Automated Backups) doesn't provide access to the underlying OS. Option
D (RDS for Oracle with Standby Database in another AZ) addresses high availability, not disaster recovery
across regions.
References:
Amazon RDS Custom for Oracle
Amazon RDS Read Replicas

---

## Question 134

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Requirements Alignment: The question mandates a serverless solution for data analysis using SQL, data
encryption at rest, and cross-region replication for disaster recovery/availability.
S3 Cross-Region Replication (CRR): CRR directly addresses the requirement to replicate data to another
AWS Region. This feature provides automatic, asynchronous copying of objects across S3 buckets in different
AWS Regions.
Server-Side Encryption with AWS KMS Multi-Region Keys (SSE-KMS): SSE-KMS satisfies the encryption at
rest requirement. Using KMS Multi-Region keys is crucial because if your primary region KMS becomes
unavailable, your replicated bucket still has access to decrypt the data. With SSE-S3, you can't use MultiRegion keys.
Amazon Athena: Athena is a serverless query service that allows you to analyze data stored in S3 using
standard SQL. This fulfills the SQL-based analysis requirement without the need to manage any

infrastructure.
Why A is better than C: SSE-KMS Multi-Region keys provide more control and flexibility for encryption key
management than SSE-S3 (Amazon S3 managed keys). If you have an issue in your primary region, it would
take longer to re-encrypt the objects in your secondary region if you were using SSE-S3.
Why A is better than B and D: Amazon RDS is a database service requiring instance management, making the
solution not serverless. Athena is the right tool for SQL queries on data in S3 in a serverless way.
In summary: **Option A** gives the required level of encryption in a serverless, secure, and easy-to-manage way.

---

## Question 135

**Answer:** **D**

**Explanation:**

The correct answer is D, asking the provider to create a VPC endpoint for the target service and using AWS
PrivateLink to connect. Here's why:
Private Connectivity: PrivateLink ensures traffic doesn't traverse the public internet, fulfilling the
requirement for private connectivity. It establishes a direct connection between the VPCs without exposing
the traffic to the public internet.
Restricted Access: A VPC endpoint for the target service limits access to only that specific service, adhering
to the restriction requirement. This reduces the attack surface and improves security.
Company-Initiated Connection: PrivateLink allows the company to initiate the connection from its VPC to the
provider's service through the endpoint.
VPC Peering (**Option A** - Incorrect): VPC peering establishes a connection between two entire VPCs. It doesn't
restrict access to a single service within the provider's VPC, violating the "restricted to the target service"
requirement. Also, VPC peering requires overlapping CIDR block consideration.
Virtual Private Gateway (**Option B** - Incorrect): A Virtual Private Gateway (VGW) is primarily used for VPN
connections or Direct Connect. It is less suitable for a private, service-specific connection like the one

described. While AWS PrivateLink could theoretically leverage Direct Connect, it's overkill for the scenario.
NAT Gateway (**Option C** - Incorrect): A NAT gateway enables instances in a private subnet to connect to the
internet or other AWS services, but it doesn't provide private connectivity to a specific service in another VPC.
NAT Gateway uses public IP addresses and is not a secure, private option.
AWS PrivateLink Benefits: PrivateLink enhances security by eliminating the need for public IPs or internet
gateways, simplifying network management and reducing the risk of data exposure.

In summary, option D provides the most secure and compliant solution by establishing a private, servicespecific connection initiated from the company's VPC using PrivateLink and a VPC endpoint.
Further Research:
AWS PrivateLink: https://aws.amazon.com/privatelink/
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html

---

## Question 136

**Answer:** **AC**

**Explanation:**

The correct answer is AC. Here's why:

**A.** Create an ongoing replication task: To keep the Aurora PostgreSQL database synchronized with the onpremises PostgreSQL database while the on-premises database remains online, you need a continuous
replication solution. AWS Database Migration Service (DMS) achieves this through replication tasks. These
tasks capture changes from the source database and apply them to the target database in near real-time,
ensuring data consistency. This ongoing replication is crucial for a zero-downtime migration.

**C.** Create an AWS Database Migration Service (AWS DMS) replication server: DMS is the AWS service
specifically designed for database migrations. A replication server is the core component of DMS, responsible
for reading data from the source database (on-premises PostgreSQL), transforming the data if needed, and
loading the data into the target database (Aurora PostgreSQL). Without a DMS replication server, you cannot
perform the ongoing replication task needed for synchronization.
AWS Database Migration Service Documentation
AWS DMS Replication Task
Here's why the other options are not suitable:

**B.** Create a database backup of the on-premises database: A database backup is useful for the initial data
load into Aurora PostgreSQL, but it doesn't address the ongoing synchronization requirement. A backup
represents a point-in-time snapshot, and any changes after the backup would not be reflected in the Aurora
database.

**D.** Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT): While AWS SCT is
often used in database migrations to convert the database schema from one engine to another (e.g., Oracle to
PostgreSQL), it is not always necessary for PostgreSQL-to-PostgreSQL migrations unless there are
compatibility issues or optimizations needed. Importantly, schema conversion doesn't handle ongoing data
synchronization.

**E.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database
synchronization: EventBridge rules can monitor events and trigger actions. While you could potentially use
EventBridge to monitor DMS metrics related to replication status, it doesn't actually perform the replication.
Furthermore, CloudWatch metrics can be used more directly to monitor DMS tasks rather than involving
EventBridge. Therefore, EventBridge isn't a primary requirement for the initial synchronization process itself.

---

## Question 137

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:

**Option B** addresses the core requirement of ensuring that notifications sent to the root user email address are
not missed and are limited to account administrators. Configuring the root user email address as a distribution
list ensures that multiple administrators receive the notifications, reducing the risk of a single point of failure
(like one administrator missing the email).
Using distribution lists linked to the root user email address is a manageable approach that aligns with AWS
best practices. Importantly, it prevents reliance on a single individual. AWS suggests using distribution lists,
and not individual email addresses, for critical administrative roles, like the root user.
The utilization of AWS account alternate contacts in the AWS Organizations console provides an additional
layer of notification delivery. Alternate contacts can be set for billing, technical, and security purposes,
allowing for different administrators to receive different types of notifications relevant to their roles. By
configuring alternate contacts, notifications intended for these specific areas are less likely to be overlooked
and are routed to the appropriate personnel.
Here's why the other options are less suitable:

**A:** Forwarding all emails from all root users to all users in the organization is overly broad and creates
unnecessary noise, violating the requirement to limit notifications to administrators.

**C:** Relying on a single administrator to forward alerts introduces a single point of failure and increases the
likelihood of delays or missed notifications.

**D:** Using the same root user email address for all accounts creates a security risk and management
complexity, as a compromise of that email address would affect all accounts.
Supporting Documentation:
AWS Organizations Best Practices
AWS Account Management

---

## Question 138

**Answer:** **B**

**Explanation:**

The goal is to achieve high availability with minimal operational overhead for an e-commerce application
currently running on EC2 instances within a single Availability Zone. **Option B** provides the best approach.
Migrating the RabbitMQ queue to a redundant pair on Amazon MQ (active/standby) eliminates the single point
of failure associated with running RabbitMQ on a single EC2 instance. Amazon MQ manages the underlying
infrastructure, reducing operational overhead.
Creating a Multi-AZ Auto Scaling group for the application EC2 instances ensures that the application
remains available even if one Availability Zone fails. The Auto Scaling group will automatically launch new
instances in a healthy Availability Zone.
Migrating the PostgreSQL database to a Multi-AZ deployment of Amazon RDS for PostgreSQL is crucial for
database availability. RDS manages the replication and failover process, significantly reducing operational
overhead compared to managing PostgreSQL on EC2. Multi-AZ RDS provides synchronous replication to a
standby instance in a different AZ, ensuring data durability and rapid failover.
Options A, C, and D have drawbacks. Running the database or RabbitMQ on EC2 instances within Auto Scaling
groups, even across multiple AZs, requires managing replication, failover, and patching, increasing
operational overhead. Amazon MQ and RDS offer managed services with built-in high availability, simplifying
management.

Therefore, **Option B** provides the optimal solution by leveraging managed services (Amazon MQ and RDS) to
achieve high availability with the least operational burden.
References:
Amazon MQ: https://aws.amazon.com/mq/
Amazon RDS Multi-AZ: https://aws.amazon.com/rds/features/multi-az/
Auto Scaling: https://aws.amazon.com/autoscaling/

---

## Question 139

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's a detailed justification:
S3 Replication: S3 Replication is the most efficient way to automatically copy objects between S3 buckets.
It's a managed service, reducing operational overhead compared to writing and managing a Lambda function
for copying. It replicates data as soon as it's written to the source bucket.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html
EventBridge for Fan-Out: Amazon EventBridge (formerly CloudWatch Events) provides a scalable and
decoupled way to route events to multiple targets. This addresses the requirement to trigger both a Lambda
function for pattern matching and the SageMaker pipeline. S3 can send event notifications to EventBridge
upon object creation. https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
ObjectCreated Event: Configuring an ObjectCreated rule in EventBridge triggers the rule when a new object is
created in the analysis S3 bucket.
Targets: By configuring the Lambda function and SageMaker Pipelines as targets for the EventBridge rule,
both are automatically invoked when a new object arrives in the analysis bucket.
Why other options are not optimal:
A & B: While a Lambda function could copy files, it adds operational overhead. S3 Replication handles the

copying automatically. Additionally, option B is incorrect because the question asks to run Lambda functions
and SageMaker pipelines after the files are copied to the analysis bucket.

**C:** S3 event notifications sent directly to multiple destinations can be less scalable and harder to manage than
using EventBridge. EventBridge provides more robust event routing and filtering capabilities.

In summary, option D combines the efficiency of S3 Replication with the event-driven architecture of
EventBridge for a scalable, low-overhead solution to meet all the requirements.

---

## Question 140

**Answer:** **AC**

**Explanation:**

The correct answer is A and C.

Here's why:

**A.** Use Spot Instances for the data ingestion layer: The data ingestion layer's EC2 usage is sporadic and
unpredictable, and workloads can be interrupted. Spot Instances are ideal for these scenarios. Spot Instances
leverage spare EC2 capacity and are offered at significantly reduced prices compared to On-Demand
Instances. The application's tolerance for interruption aligns perfectly with the characteristics of Spot
Instances, making them a cost-effective choice for this layer.https://aws.amazon.com/ec2/spot/

**C.** Purchase a 1-year Compute Savings Plan for the front end and API layer: The application front end runs on
Fargate, and the API layer runs on Lambda. Both have predictable utilization over the next year. Savings Plans
offer significant discounts in exchange for a commitment to a consistent amount of compute usage
(measured in dollars per hour). A Compute Savings Plan provides the most flexibility, since it applies to EC2,
Fargate, and Lambda, whereas the EC2 Instance Savings Plan applies only to
EC2.https://aws.amazon.com/savingsplans/compute-savings-plans/
Here's why the other options are not as suitable:

**B.** Use On-Demand Instances for the data ingestion layer: On-Demand Instances are the most expensive
option and should be avoided when workloads can tolerate interruptions, as in the data ingestion layer.

**D.** Purchase 1-year All Upfront Reserved instances for the data ingestion layer: Given the unpredictable
nature of EC2 usage in the data ingestion layer, committing to Reserved Instances is risky and may lead to
paying for unused capacity. Also Reserved Instances offer the least amount of flexibility

**E.** Purchase a 1-year EC2 instance Savings Plan for the front end and API layer: The API layer is on Lambda,
so EC2 Instance Savings Plan can't be used. It is a better option to choose compute savings plan as it can
apply to all different kinds of compute services and provides more flexibility.

---

## Question 141

**Answer:** **A**

**Explanation:**

The optimal solution for minimizing latency for global users accessing a personalized news portal involves
leveraging Amazon CloudFront to cache and deliver both static and dynamic content.

**Option A**, deploying the application stack in a single AWS Region and using CloudFront with the ALB as an
origin, is the most effective approach. CloudFront is a content delivery network (CDN) that caches content at
edge locations globally. When a user requests content, CloudFront serves it from the nearest edge location,
significantly reducing latency. Specifying the ALB as the origin allows CloudFront to retrieve content that
isn't already cached, including dynamically generated personalized content.

**Option B**, deploying in multiple regions and using Route 53 latency routing, is less efficient. While Route 53
latency routing directs users to the closest region, it doesn't cache content at edge locations. This means
users still experience latency when accessing dynamic content, as requests must travel to the regional ALB.
This approach also adds operational complexity and cost for maintaining duplicate infrastructure across
multiple regions.

**Option C**, using CloudFront only for static content, doesn't address the latency issue for dynamic content.
Since the portal provides personalized views, the dynamic content plays a crucial role in user experience, and
serving it directly from the ALB negates the benefits of CloudFront for a significant portion of the content.

**Option D**, using Route 53 geolocation routing, while beneficial, doesn't directly address latency as effectively
as CloudFront. Geolocation routing directs users based on their geographic location, but it doesn't cache
content closer to users like CloudFront does. It's also less flexible than latency routing in some scenarios
where network conditions vary.
CloudFront's ability to cache dynamic content, coupled with its global network of edge locations, makes it the
most effective solution for minimizing latency and delivering a fast, responsive user experience for a web
portal with personalized content. The single region approach combined with CloudFront simplifies the
architecture and reduces operational overhead.

---

## Question 142

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
AWS Global Accelerator is designed to route traffic to the optimal AWS endpoint based on user location,
providing low latency and improved user experience, which directly addresses the requirement for routing
traffic to the nearest edge location. Crucially, it also provides static IP addresses for applications.
https://aws.amazon.com/global-accelerator/
Network Load Balancer (NLB) is required because the application supports only UDP-based traffic.
Application Load Balancers (ALB) only support HTTP/HTTPS traffic and are therefore not a viable option. NLB
is designed for high throughput and low latency, ideal for UDP applications.
https://aws.amazon.com/elasticloadbalancing/network-load-balancer/
Amazon EC2 instances with EC2 Auto Scaling group is the best compute option. AWS Lambda does not offer
full control over the underlying Linux kernel as required by the scenario. EC2 instances allows full control
over OS, is necessary because the application runs on a modified Linux kernel. The Auto Scaling group
ensures high availability by automatically adjusting the number of EC2 instances based on demand.
https://aws.amazon.com/ec2/autoscaling/

**Option A** is incorrect because Application Load Balancer does not support UDP traffic. **Option B** is wrong
because CloudFront is primarily designed for caching static content. While it can accelerate dynamic content
delivery, it is not optimized for UDP-based traffic and requires a distribution for forwarding traffic. **Option D** is
incorrect because API Gateway is designed for API management and request routing, not high-throughput,
low-latency UDP traffic and ALB does not support UDP traffic.

---

## Question 143

**Answer:** **D**

**Explanation:**

The correct answer is D. Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an
Application Load Balancer with Amazon ECS as the target.

Here's a detailed justification:
The problem statement emphasizes breaking down a monolithic application into smaller, independently
manageable applications while minimizing operational overhead and ensuring high scalability.
Amazon ECS is a fully managed container orchestration service. Containerization allows you to package each
smaller application (resulting from breaking down the monolith) into a separate container. These containers
can then be deployed and managed independently by different teams, fulfilling the requirement of
decentralized management. https://aws.amazon.com/ecs/
Application Load Balancer (ALB) provides intelligent routing of traffic to different containerized applications
running on ECS. This aligns with the requirement of exposing the split-up applications via a load-balanced
endpoint. ALB offers advanced features like content-based routing, enabling fine-grained control over how
traffic is distributed. https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
ECS, being a managed service, significantly reduces the operational overhead compared to managing EC2
instances directly (as in option C). You don't have to worry about patching, scaling, or maintaining the
underlying infrastructure. ECS also handles the complexities of container orchestration, enabling you to focus
on application development and deployment.
ECS integrates well with other AWS services, such as CloudWatch for monitoring and AWS Auto Scaling for
automatically adjusting the number of containers based on traffic. This ensures high availability and
scalability.

Why other options are less suitable:

**A.** AWS Lambda: Lambda is suitable for event-driven, stateless functions, but not ideal for hosting entire
applications (even smaller, broken-down ones) that require more persistent resources or have more complex
architectures. It might be part of a larger solution, but not the core hosting platform as described in this
option.

**B.** AWS Amplify: Amplify is more focused on front-end development and mobile app backends. While it can
connect to back-end services, it's not the primary service to host the backend application components derived
from the monolithic breakdown. It doesn't directly address the requirement of breaking down and managing
the backend.

**C.** Amazon EC2 instances with Auto Scaling Group: While this option provides scalability, it involves
significantly more operational overhead compared to ECS. You would need to manage the EC2 instances,
including patching, security updates, and scaling the infrastructure. ECS abstracts away much of this
complexity.
In conclusion, ECS with ALB is the most suitable solution because it allows for the decomposition of the

monolithic application into independently deployable and manageable containerized applications, while also
minimizing operational overhead through a managed service and providing scalability through ALB and ECS
features.

---

## Question 144

**Answer:** **B**

**Explanation:**

The correct answer is B: Migrate the monthly reporting to an Aurora Replica. Here's why:
The problem is that running large monthly reports on the primary Aurora instance causes performance
degradation for the ecommerce application due to increased ReadIOPS and CPU utilization. This means the
reporting queries are impacting the operational workload.

**Option A**, migrating the monthly reporting to Amazon Redshift, would certainly solve the performance issue
by isolating the reporting workload. However, it is not the most cost-effective solution. Redshift requires data
warehousing infrastructure and ETL (Extract, Transform, Load) processes to move data from Aurora to
Redshift. This incurs extra cost in terms of infrastructure, software, and development effort.

**Option B**, migrating the monthly reporting to an Aurora Replica, provides a read-only copy of the data that can
be used for reporting without impacting the primary database. Aurora Replicas are designed for read scaling
and offloading read workloads from the primary instance. This minimizes the impact on the ecommerce
application's performance. The cost of an Aurora Replica is generally lower than migrating to a separate data
warehouse like Redshift.

**Option C**, migrating the Aurora database to a larger instance class, would increase the capacity of the primary
database. While this might improve performance for both the application and the reporting queries, it
addresses the symptom rather than the root cause. This is a more expensive solution than using an Aurora
Replica because it involves upgrading the primary database instance, which is used for all operations, not just
reports.

**Option D**, increasing the Provisioned IOPS on the Aurora instance, might help with the ReadIOPS spikes, but it
won't alleviate the CPU utilization. Also, Provisioned IOPS incurs additional costs. This also tackles the
symptom rather than isolating the problem, making it less effective and potentially more expensive than using
an Aurora Replica.

Therefore, using an Aurora Replica is the most cost-effective solution as it leverages Aurora's built-in read
scaling capabilities to isolate the reporting workload from the primary database, addressing the performance
issue directly without requiring expensive infrastructure changes or complex ETL processes.
For further research, consult the AWS documentation on Amazon Aurora Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora. Managing. ReadReplicas.html and

Aurora features: https://aws.amazon.com/rds/aurora/features/

---

## Question 145

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a scalable and cost-effective solution to address the application's
performance issues. Let's break down why:
Database Migration to Aurora MySQL: Migrating the MySQL database to Amazon Aurora MySQL (a managed,
MySQL-compatible relational database engine) addresses a major performance bottleneck. Aurora offers
improved performance and scalability compared to running MySQL on a single EC2 instance. This offloads
database operations from the EC2 instance, freeing up resources for the web application.
AMI and Launch Template: Creating an Amazon Machine Image (AMI) of the web application ensures a
consistent and repeatable deployment. A launch template is then created based on the AMI, defining the
configuration for new EC2 instances. This makes sure that the application deployment is consistent across all
instances.
Auto Scaling Group (ASG): An Auto Scaling group automatically adjusts the number of EC2 instances based
on demand. It ensures the application scales seamlessly during peak loads and reduces costs during off-peak
hours by terminating unnecessary instances.
Spot Fleet Integration: Using Spot Instances in the ASG provides significant cost savings. Spot Instances are
unused EC2 capacity offered at discounted prices. While Spot Instances can be interrupted, the ASG
automatically replaces terminated Spot Instances with new ones, maintaining the desired capacity.
Application Load Balancer (ALB): The Application Load Balancer distributes incoming traffic across the EC2
instances in the ASG. This ensures high availability and even load distribution, preventing any single instance
from becoming overwhelmed.

**Option A** is partially correct but doesn't offer cost optimization through spot instances or auto-scaling
capabilities. **Option B** has similar limitations with added complexity and cost by using weighted routing in
Route53, which isn't as dynamically responsive as ALB and ASG. **Option C** focuses on scaling up (vertical

scaling) a single EC2 instance, instead of providing a scalable architecture based on multiple instances
(horizontal scaling). **Option C**, while invoking a lambda function based on CPU utilization, lacks the ability to
respond to traffic automatically and cost-effectively like the Auto Scaling Group within option D.

---

## Question 146

**Answer:** **B**

**Explanation:**

The optimal solution leverages the predictable usage patterns to minimize costs while maintaining availability.

**Option B** (Reserved Instances for baseline and Spot Instances for peak) is the most cost-effective and robust
approach.

Here's why:
Reserved Instances (RIs): RIs offer significant discounts (up to 75%) compared to On-Demand Instances in
exchange for a commitment to a specific instance type and region for a period (usually 1 or 3 years). The
moderate and steady overnight usage, as well as low weekend usage, defines a "baseline" capacity that is
predictably required. RIs are ideally suited for this predictable baseline, providing guaranteed capacity at a
reduced cost.
Spot Instances: Spot Instances offer unused EC2 capacity at steep discounts (up to 90% off On-Demand
prices). However, Spot Instances can be terminated with a two-minute warning if the Spot price exceeds the
bid price. The heavy usage during the 8-hour period represents a peak demand above the baseline. Spot
Instances are perfect for this additional, non-critical capacity. The stateless nature of the web application
makes it resilient to Spot Instance interruptions. The Application Load Balancer can simply redirect traffic to
the remaining instances (Reserved or Spot) if a Spot Instance is terminated.

Why other options are less suitable:

**Option A** (Spot Instances only): Relying solely on Spot Instances is risky for production workloads requiring
high availability. During periods of high demand, Spot prices can spike or capacity can become limited, leading
to terminations and potential service disruptions.

**Option C** (On-Demand + Spot): Using On-Demand Instances for the baseline is more expensive than using

Reserved Instances for a predictable usage pattern.

**Option D** (Dedicated + On-Demand): Dedicated Instances are expensive and primarily used for compliance or
licensing reasons. They are not cost-effective for general web application hosting and are not necessary for
this scenario. The same cost consideration exists for On-Demand in the "spike" described in option C.

In summary, Reserved Instances secure a cost-effective baseline capacity, while Spot Instances provide an
affordable means to handle peak demand, all while maintaining high availability thanks to the Application
Load Balancer and stateless architecture.

---

## Question 147

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The requirement is to store application logs for 10 years cost-effectively, with frequent access to the past
month's logs and infrequent access to older logs. This scenario is a perfect fit for tiered storage using Amazon
S3 and S3 Glacier Deep Archive.

**Option B** is most cost-effective for the following reasons:

1. Amazon S3 for Recent Logs: Storing logs in Amazon S3 initially allows for quick and easy access to
the most recent (1-month old) logs, which are frequently needed for troubleshooting. S3 offers high
availability and durability, making it suitable for critical application logs.

2. S3 Lifecycle Policies for Archiving: S3 Lifecycle policies automate the transition of older logs to S3
Glacier Deep Archive. This is crucial for cost optimization because Glacier Deep Archive is the
cheapest storage class, designed for long-term data archiving where retrieval times of several hours
are acceptable.

3. Cost Efficiency: By moving older, infrequently accessed logs to Glacier Deep Archive, the overall
storage cost is significantly reduced compared to keeping all logs in standard S3 storage.

4. Automation: S3 Lifecycle policies automatically manage the data transition based on defined rules
(age of the logs), eliminating manual intervention and potential errors.

Options A, C, and D are less optimal:

**Option A** (AWS Backup with S3): AWS Backup is designed for data protection and disaster recovery, not for
cost-effective long-term archival of log data. Using AWS Backup to move logs would be significantly more
expensive than S3 Lifecycle policies because Backup is charged based on protected storage and data
transfer, as well as requiring restore operation costs when needed.

**Option C** (CloudWatch Logs with AWS Backup): CloudWatch Logs is suitable for real-time monitoring and
analysis of log data. While CloudWatch Logs can archive data to S3, it's generally more expensive for longterm storage than directly storing and managing logs in S3. Additionally, using AWS Backup from
CloudWatch Logs to Glacier Deep Archive incurs unnecessary costs associated with using Backup services
where an S3 Lifecycle policy is sufficient.

**Option D** (CloudWatch Logs with S3 Lifecycle): Similar to option C, storing logs directly in CloudWatch Logs
before moving them to S3 introduces an unnecessary cost layer. It's more efficient and cheaper to store the
logs directly into S3 to begin with.

In summary, **Option B** leverages the cost-effective tiered storage approach provided by Amazon S3 and S3
Glacier Deep Archive, utilizing S3 Lifecycle policies for automated data management and archiving.
Supporting Documentation:
Amazon S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
S3 Lifecycle Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configurationexamples.html
S3 Glacier Deep Archive: https://aws.amazon.com/glacier/deep-archive/

---

## Question 148

**Answer:** **D**

**Explanation:**

The correct answer is D because it implements a robust solution for handling intermittent failures in the data
ingestion workflow using a dead-letter queue (DLQ) mechanism.
Here's a breakdown of why:
Problem: The current architecture relies on direct invocation of the Lambda function by SNS. Network issues
cause invocations to fail, leading to data loss unless manually retried. SNS doesn't natively retry failed
deliveries to Lambda indefinitely, leading to message loss.
Solution with SQS DLQ: Configuring an SQS queue as a DLQ for failed SNS notifications ensures that
messages that cannot be delivered to the Lambda function due to temporary network issues are preserved.

This provides a reliable mechanism for capturing those failed notifications. The Lambda function can then be
modified to consume messages from this SQS queue. This separates the initial ingestion from the processing
of failed messages, providing a safety net.

Why other options are incorrect:

**A:** Configuring the Lambda function for deployment across multiple Availability Zones: Lambda is already
designed to run across multiple AZs for high availability. While helpful for general resilience, this doesn't
address the specific issue of failed SNS deliveries due to transient network problems. The underlying issue is
that SNS gives up on delivery when it cannot successfully reach the function, regardless of the AZ.

**B:** Modify the Lambda function's configuration to increase the CPU and memory allocations for the
function: Increasing resources might help with function performance if it was timing out, but it doesn't
address the core problem of failed SNS deliveries due to network connectivity issues.

**C:** Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time
between retries: While this sounds plausible, SNS retry policies have limitations. SNS does have retry policies
(delivery policies), however SNS only retries for a specific number of attempts before discarding the message.
This still leads to message loss if the network issue persists beyond those retries. SQS as a DLQ is a better
approach.
Benefits of SQS DLQ:
Durability: SQS provides durable message storage.
Reliability: Messages are guaranteed to be delivered at least once (and possibly more than once).
Decoupling: Decouples the initial data ingestion from the processing of failed messages, allowing for
independent scaling and management.
Observability: Provides visibility into failed messages, allowing for root cause analysis and debugging.
SQS as a DLQ: Amazon SQS dead-letter queues are queues that source queues (or subscriptions) can target
for messages that cannot be processed successfully. A common use is for failure cases in message
consumption using services such as SNS.
Relevant Documentation:
Using AWS Lambda with Amazon SQS
Amazon SQS Dead-Letter Queues
SNS Message Delivery Retries

Therefore, configuring an SQS queue as the on-failure destination provides the most robust and reliable
solution for ensuring that all notifications are eventually processed, even in the presence of intermittent
network issues.

---

## Question 149

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
FIFO (First-In, First-Out) Queues: The core requirement is maintaining the order of events. Amazon SQS FIFO
queues guarantee that messages are processed in the exact order they were sent. This aligns directly with
the "specific order that must be maintained" requirement.
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html
AWS Lambda for Processing: AWS Lambda provides a serverless compute environment, which means the
company doesn't have to manage servers. This fulfills the requirement of minimizing operational overhead.
Lambda can be easily triggered by SQS messages. https://aws.amazon.com/lambda/
SQS and Lambda Integration: The tight integration between SQS and Lambda allows for automatic scaling
and processing of messages as they arrive in the queue. Lambda functions can be configured to poll the SQS
queue and process messages concurrently, while maintaining the FIFO order within each message group if
configured appropriately. This ensures that all messages are eventually processed.
https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

Why other options are incorrect:

**B:** SNS and Lambda: SNS is a pub/sub messaging service, which doesn't inherently guarantee message
ordering. It's designed for distributing messages to multiple subscribers concurrently, which contradicts the
ordering requirement.

**C:** SQS Standard Queue and Lambda: Standard SQS queues offer best-effort ordering, but do not guarantee
that messages will be delivered in the exact order they were sent. This does not satisfy the ordering
requirement.

**D:** SNS and SQS: While SNS can fan out messages to multiple SQS queues, SNS itself does not guarantee
ordering. Even if each SQS queue subscriber processed in order, the SNS delivery to different queues would
still break the global order. Furthermore, it requires more configuration than the simpler SQS FIFO and
Lambda option.

Therefore, using SQS FIFO queues to hold the messages and using Lambda to process them is the most
appropriate solution for processing event data while maintaining order and minimizing operational overhead.

---

## Question 150

**Answer:** **A**

**Explanation:**

The correct answer is A: Create Amazon CloudWatch composite alarms where possible.

Here's a detailed justification:
The scenario requires triggering an alarm only when both CPU utilization is high and read IOPS are high, and
to avoid false alarms triggered by short bursts of CPU utilization.
Composite alarms in CloudWatch are designed to solve this exact problem. They allow you to combine
multiple existing metric alarms (e.g., one for CPU utilization exceeding 50%, another for high read IOPS) into a
single alarm. The composite alarm's state changes to ALARM only when all specified member alarms are in
the ALARM state. This directly addresses the requirement that the company needs to act only when both
conditions (high CPU and high read IOPS) are true.

**Option A** is correct because the composite alarm reduces false alarms. The company does not want to take
action if CPU utilization increases to more than 50% for a short burst of time. This could be true, when using
one alarm metric only (CPU). Using a composite alarm that triggers only when CPU utilization is more than
50% AND the read IOPS is high can reduce false positives.
Options B, C, and D are incorrect for the following reasons:

**B.** Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly: While
dashboards are valuable for visualization and monitoring, they don't automate the alarming process or reduce
false positives based on combined metric conditions. A human would have to constantly monitor the
dashboard and manually react, which isn't scalable or reliable for timely responses.

**C.** Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm:
Synthetics canaries are used to monitor the availability and performance of web applications and APIs by
simulating user traffic. This doesn't directly address the need to monitor server-level metrics like CPU
utilization and read IOPS and combine their conditions for alarming. This can lead to many false positives.

**D.** Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible: Single
metric alarms can only have thresholds for one metric. While you can set a threshold for CPU utilization, you
cannot incorporate read IOPS into the same single alarm's threshold. This is because a single alarm is
designed to monitor one specific metric and trigger based on its behavior relative to pre-defined limits.

In summary, composite alarms provide the ability to define complex alarm conditions based on the states of
multiple metric alarms, making them ideal for scenarios requiring correlation of different metrics for effective
alarming and reduced false positives.
Supporting documentation:
Using composite alarms - Amazon CloudWatch:
CloudWatch Alarms:

---

# Quick Answer Sheet

Question 101: A
Question 102: BE
Question 103: A
Question 104: AC
Question 105: D
Question 106: D
Question 107: B
Question 108: D
Question 109: D
Question 110: BD
Question 111: D
Question 112: A
Question 113: C
Question 114: C
Question 115: C
Question 116: AD
Question 117: A
Question 118: D
Question 119: B
Question 120: B
Question 121: A
Question 122: B
Question 123: D
Question 124: A
Question 125: AE
Question 126: B
Question 127: D
Question 128: B
Question 129: AE
Question 130: B
Question 131: D
Question 132: A
Question 133: C
Question 134: A
Question 135: D
Question 136: AC
Question 137: B
Question 138: B
Question 139: D
Question 140: AC
Question 141: A
Question 142: C
Question 143: D
Question 144: B
Question 145: D
Question 146: B
Question 147: B
Question 148: D
Question 149: A
Question 150: A
