# AWS SAA-C03 Practice Test: Questions 251-300

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 251

An Amazon EC2 instance is located in a private subnet in a new VPC. This subnet does not have outbound internet
access, but the EC2 instance needs the ability to download monthly security updates from an outside vendor.
What should a solutions architect do to meet these requirements?

**A.** Create an internet gateway, and attach it to the VPC. Configure the private subnet route table to use the
internet gateway as the default route.

**B.** Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the
NAT gateway as the default route.

**C.** Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the
private subnet route table to use the NAT instance as the default route.

**D.** Create an internet gateway, and attach it to the VPC. Create a NAT instance, and place it in the same subnet
where the EC2 instance is located. Configure the private subnet route table to use the internet gateway as the
default route.

---

## Question 252

A solutions architect needs to design a system to store client case files. The files are core company assets and are
important. The number of files will grow over time.
The files must be simultaneously accessible from multiple application servers that run on Amazon EC2 instances.
The solution must have built-in redundancy.
Which solution meets these requirements?

**A.** Amazon Elastic File System (Amazon EFS)

**B.** Amazon Elastic Block Store (Amazon EBS)

**C.** Amazon S3 Glacier Deep Archive

**D.** AWS Backup

---

## Question 253

A solutions architect has created two IAM policies: Policy1 and Policy2. Both policies are attached to an IAM group.

A cloud engineer is added as an IAM user to the IAM group. Which action will the cloud engineer be able to
perform?

**A.** Deleting IAM users

**B.** Deleting directories

**C.** Deleting Amazon EC2 instances

**D.** Deleting logs from Amazon CloudWatch Logs

---

## Question 254

A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that
the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules
between the application tiers.
What should a solutions architect do to correct this issue?

**A.** Create security group rules using the instance ID as the source or destination.

**B.** Create security group rules using the security group ID as the source or destination.

**C.** Create security group rules using the VPC CIDR blocks as the source or destination.

**D.** Create security group rules using the subnet CIDR blocks as the source or destination.

---

## Question 255

A company has an ecommerce checkout workflow that writes an order to a database and calls a service to process
the payment. Users are experiencing timeouts during the checkout process. When users resubmit the checkout
form, multiple unique orders are created for the same desired transaction.
How should a solutions architect refactor this workflow to prevent the creation of multiple orders?

**A.** Configure the web application to send an order message to Amazon Kinesis Data Firehose. Set the payment
service to retrieve the message from Kinesis Data Firehose and process the order.

**B.** Create a rule in AWS CloudTrail to invoke an AWS Lambda function based on the logged application path
request. Use Lambda to query the database, call the payment service, and pass in the order information.

**C.** Store the order in the database. Send a message that includes the order number to Amazon Simple
Notification Service (Amazon SNS). Set the payment service to poll Amazon SNS, retrieve the message, and
process the order.

**D.** Store the order in the database. Send a message that includes the order number to an Amazon Simple Queue
Service (Amazon SQS) FIFO queue. Set the payment service to retrieve the message and process the order.
Delete the message from the queue.

---

## Question 256

A solutions architect is implementing a document review application using an Amazon S3 bucket for storage. The
solution must prevent accidental deletion of the documents and ensure that all versions of the documents are
available. Users must be able to download, modify, and upload documents.
Which combination of actions should be taken to meet these requirements? (Choose two.)

**A.** Enable a read-only bucket ACL.

**B.** Enable versioning on the bucket.

**C.** Attach an IAM policy to the bucket.

**D.** Enable MFA Delete on the bucket.

**E.** Encrypt the bucket using AWS KMS.

---

## Question 257

A company is building a solution that will report Amazon EC2 Auto Scaling events across all the applications in an
AWS account. The company needs to use a serverless solution to store the EC2 Auto Scaling status data in
Amazon S3. The company then will use the data in Amazon S3 to provide near-real-time updates in a dashboard.
The solution must not affect the speed of EC2 instance launches.
How should the company move the data to Amazon S3 to meet these requirements?

**A.** Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon Kinesis Data
Firehose. Store the data in Amazon S3.

**B.** Launch an Amazon EMR cluster to collect the EC2 Auto Scaling status data and send the data to Amazon
Kinesis Data Firehose. Store the data in Amazon S3.

**C.** Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda
function to send the EC2 Auto Scaling status data directly to Amazon S3.

**D.** Use a bootstrap script during the launch of an EC2 instance to install Amazon Kinesis Agent. Configure
Kinesis Agent to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose.
Store the data in Amazon S3.

---

## Question 258

A company has an application that places hundreds of .csv files into an Amazon S3 bucket every hour. The files are
1 GB in size. Each time a file is uploaded, the company needs to convert the file to Apache Parquet format and
place the output file into an S3 bucket.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS Lambda function to download the .csv files, convert the files to Parquet format, and place the
output files in an S3 bucket. Invoke the Lambda function for each S3 PUT event.

**B.** Create an Apache Spark job to read the .csv files, convert the files to Parquet format, and place the output
files in an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the Spark job.

**C.** Create an AWS Glue table and an AWS Glue crawler for the S3 bucket where the application places the .csv
files. Schedule an AWS Lambda function to periodically use Amazon Athena to query the AWS Glue table,
convert the query results into Parquet format, and place the output files into an S3 bucket.

**D.** Create an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Parquet format and
place the output files into an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the
ETL job.

---

## Question 259

A company is implementing new data retention policies for all databases that run on Amazon RDS DB instances.
The company must retain daily backups for a minimum period of 2 years. The backups must be consistent and
restorable.
Which solution should a solutions architect recommend to meet these requirements?

**A.** Create a backup vault in AWS Backup to retain RDS backups. Create a new backup plan with a daily
schedule and an expiration period of 2 years after creation. Assign the RDS DB instances to the backup plan.

**B.** Configure a backup window for the RDS DB instances for daily snapshots. Assign a snapshot retention policy
of 2 years to each RDS DB instance. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule snapshot
deletions.

**C.** Configure database transaction logs to be automatically backed up to Amazon CloudWatch Logs with an
expiration period of 2 years.

**D.** Configure an AWS Database Migration Service (AWS DMS) replication task. Deploy a replication instance,
and configure a change data capture (CDC) task to stream database changes to Amazon S3 as the target.
Configure S3 Lifecycle policies to delete the snapshots after 2 years.

---

## Question 260

A company’s compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file
share. A self-managed on-premises Active Directory controls access to the files and folders.
The company wants to use Amazon FSx for Windows File Server as part of the solution. The company must ensure
that the on-premises Active Directory groups restrict access to the FSx for Windows File Server SMB compliance
shares, folders, and files after the move to AWS. The company has created an FSx for Windows File Server file
system.
Which solution will meet these requirements?

**A.** Create an Active Directory Connector to connect to the Active Directory. Map the Active Directory groups to
IAM groups to restrict access.

**B.** Assign a tag with a Restrict tag key and a Compliance tag value. Map the Active Directory groups to IAM
groups to restrict access.

**C.** Create an IAM service-linked role that is linked directly to FSx for Windows File Server to restrict access.

**D.** Join the file system to the Active Directory to restrict access.

---

## Question 261

A company recently announced the deployment of its retail website to a global audience. The website runs on
multiple Amazon EC2 instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group
across multiple Availability Zones.
The company wants to provide its customers with different versions of content based on the devices that the
customers use to access the website.
Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

**A.** Configure Amazon CloudFront to cache multiple versions of the content.

**B.** Configure a host header in a Network Load Balancer to forward traffic to different instances.

**C.** Configure a [email protected] function to send specific objects to users based on the User-Agent header.

**D.** Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB
to set up host-based routing to different EC2 instances.

**E.** Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB
to set up path-based routing to different EC2 instances.

---

## Question 262

A company plans to use Amazon ElastiCache for its multi-tier web application. A solutions architect creates a
Cache VPC for the ElastiCache cluster and an App VPC for the application’s Amazon EC2 instances. Both VPCs are
in the us-east-1 Region.
The solutions architect must implement a solution to provide the application’s EC2 instances with access to the
ElastiCache cluster.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a peering connection between the VPCs. Add a route table entry for the peering connection in both
VPCs. Configure an inbound rule for the ElastiCache cluster’s security group to allow inbound connection from
the application’s security group.

**B.** Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic
through the Transit VPC. Configure an inbound rule for the ElastiCache cluster's security group to allow
inbound connection from the application’s security group.

**C.** Create a peering connection between the VPCs. Add a route table entry for the peering connection in both
VPCs. Configure an inbound rule for the peering connection’s security group to allow inbound connection from
the application’s security group.

**D.** Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic
through the Transit VPC. Configure an inbound rule for the Transit VPC’s security group to allow inbound
connection from the application’s security group.

---

## Question 263

A company is building an application that consists of several microservices. The company has decided to use
container technologies to deploy its software on AWS. The company needs a solution that minimizes the amount of
ongoing effort for maintenance and scaling. The company cannot manage additional infrastructure.
Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

**A.** Deploy an Amazon Elastic Container Service (Amazon ECS) cluster.

**B.** Deploy the Kubernetes control plane on Amazon EC2 instances that span multiple Availability Zones.

**C.** Deploy an Amazon Elastic Container Service (Amazon ECS) service with an Amazon EC2 launch type. Specify
a desired task number level of greater than or equal to 2.

**D.** Deploy an Amazon Elastic Container Service (Amazon ECS) service with a Fargate launch type. Specify a
desired task number level of greater than or equal to 2.

**E.** Deploy Kubernetes worker nodes on Amazon EC2 instances that span multiple Availability Zones. Create a
deployment that specifies two or more replicas for each microservice.

---

## Question 264

A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53.
The company occasionally experiences a timeout error when attempting to browse the application. The networking
team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error.
What should a solutions architect implement to overcome these timeout errors?

**A.** Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each
record.

**B.** Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each
record.

**C.** Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the
EC2 instances.

**D.** Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the
ALB from Route 53.

---

## Question 265

A solutions architect needs to design a highly available application consisting of web, application, and database
tiers. HTTPS content delivery should be as close to the edge as possible, with the least delivery time.
Which solution meets these requirements and is MOST secure?

**A.** Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in public
subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.

**B.** Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in private
subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.

**C.** Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private
subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.

**D.** Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in public
subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.

---

## Question 266

A company has a popular gaming platform running on AWS. The application is sensitive to latency because latency
can impact the user experience and introduce unfair advantages to some players. The application is deployed in
every AWS Region. It runs on Amazon EC2 instances that are part of Auto Scaling groups configured behind
Application Load Balancers (ALBs). A solutions architect needs to implement a mechanism to monitor the health of
the application and redirect traffic to healthy endpoints.
Which solution meets these requirements?

**A.** Configure an accelerator in AWS Global Accelerator. Add a listener for the port that the application listens
on, and attach it to a Regional endpoint in each Region. Add the ALB as the endpoint.

**B.** Create an Amazon CloudFront distribution and specify the ALB as the origin server. Configure the cache
behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.

**C.** Create an Amazon CloudFront distribution and specify Amazon S3 as the origin server. Configure the cache
behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.

**D.** Configure an Amazon DynamoDB database to serve as the data store for the application. Create a DynamoDB
Accelerator (DAX) cluster to act as the in-memory cache for DynamoDB hosting the application data.

---

## Question 267

A company has one million users that use its mobile app. The company must analyze the data usage in near-real
time. The company also must encrypt the data in near-real time and must store the data in a centralized location in
Apache Parquet format for further processing.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon Kinesis Data
Analytics application to analyze the data. Invoke an AWS Lambda function to send the data to the Kinesis Data
Analytics application.

**B.** Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon EMR cluster to
analyze the data. Invoke an AWS Lambda function to send the data to the EMR cluster.

**C.** Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon
EMR cluster to analyze the data.

**D.** Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon
Kinesis Data Analytics application to analyze the data.

---

## Question 268

A gaming company has a web application that displays scores. The application runs on Amazon EC2 instances
behind an Application Load Balancer. The application stores data in an Amazon RDS for MySQL database. Users
are starting to experience long delays and interruptions that are caused by database read performance. The
company wants to improve the user experience while minimizing changes to the application’s architecture.
What should a solutions architect do to meet these requirements?

**A.** Use Amazon ElastiCache in front of the database.

**B.** Use RDS Proxy between the application and the database.

**C.** Migrate the application from EC2 instances to AWS Lambda.

**D.** Migrate the database from Amazon RDS for MySQL to Amazon DynamoDB.

---

## Question 269

An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The
performance degradation is attributed to an increase in the number of read-only SQL queries triggered by
business analysts. A solutions architect needs to solve the problem with minimal changes to the existing web
application.
What should the solutions architect recommend?

**A.** Export the data to Amazon DynamoDB and have the business analysts run their queries.

**B.** Load the data into Amazon ElastiCache and have the business analysts run their queries.

**C.** Create a read replica of the primary database and have the business analysts run their queries.

**D.** Copy the data into an Amazon Redshift cluster and have the business analysts run their queries.

---

## Question 270

A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions
architect needs to ensure that the data is encrypted at rest before the data is uploaded to the S3 buckets. The
data also must be encrypted in transit.
Which solution meets these requirements?

**A.** Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets.

**B.** Use server-side encryption to encrypt the data that is being uploaded to the S3 buckets.

**C.** Create bucket policies that require the use of server-side encryption with S3 managed encryption keys (SSES3) for S3 uploads.

**D.** Enable the security option to encrypt the S3 buckets through the use of a default AWS Key Management
Service (AWS KMS) key.

---

## Question 271

A solutions architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the
desired Amazon EC2 capacity is reached. The peak capacity is the ‘same every night and the batch jobs always
start at 1 AM. The solutions architect needs to find a cost-effective solution that will allow for the desired EC2
capacity to be reached quickly and allow the Auto Scaling group to scale down after the batch jobs are complete.
What should the solutions architect do to meet these requirements?

**A.** Increase the minimum capacity for the Auto Scaling group.

**B.** Increase the maximum capacity for the Auto Scaling group.

**C.** Configure scheduled scaling to scale up to the desired compute level.

**D.** Change the scaling policy to add more EC2 instances during each scaling operation.

---

## Question 272

A company serves a dynamic website from a fleet of Amazon EC2 instances behind an Application Load Balancer
(ALB). The website needs to support multiple languages to serve customers around the world. The website’s
architecture is running in the us-west-1 Region and is exhibiting high request latency for users that are located in
other parts of the world.
The website needs to serve requests quickly and efficiently regardless of a user’s location. However, the company
does not want to recreate the existing architecture across multiple Regions.
What should a solutions architect do to meet these requirements?

**A.** Replace the existing architecture with a website that is served from an Amazon S3 bucket. Configure an
Amazon CloudFront distribution with the S3 bucket as the origin. Set the cache behavior settings to cache
based on the Accept-Language request header.

**B.** Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to
cache based on the Accept-Language request header.

**C.** Create an Amazon API Gateway API that is integrated with the ALB. Configure the API to use the HTTP
integration type. Set up an API Gateway stage to enable the API cache based on the Accept-Language request
header.

**D.** Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that
Region. Put all the EC2 instances and the ALB behind an Amazon Route 53 record set with a geolocation
routing policy.

---

## Question 273

A rapidly growing ecommerce company is running its workloads in a single AWS Region. A solutions architect must
create a disaster recovery (DR) strategy that includes a different AWS Region. The company wants its database to
be up to date in the DR Region with the least possible latency. The remaining infrastructure in the DR Region needs
to run at reduced capacity and must be able to scale up if necessary.
Which solution will meet these requirements with the LOWEST recovery time objective (RTO)?

**A.** Use an Amazon Aurora global database with a pilot light deployment.

**B.** Use an Amazon Aurora global database with a warm standby deployment.

**C.** Use an Amazon RDS Multi-AZ DB instance with a pilot light deployment.

**D.** Use an Amazon RDS Multi-AZ DB instance with a warm standby deployment.

---

## Question 274

A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery
(DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4
hours. The DR solution also needs to use the fewest possible AWS resources during normal operations.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS
Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom
scripts.

**B.** Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS
Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation.

**C.** Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at
all times.

**D.** Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability
Zone active at all times.

---

## Question 275

A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an
Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability
Zones. The Auto Scaling group scales up to 20 instances during work hours, but scales down to 2 instances
overnight. Staff are complaining that the application is very slow when the day begins, although it runs well by
mid-morning.
How should the scaling be changed to address the staff complaints and keep costs to a minimum?

**A.** Implement a scheduled action that sets the desired capacity to 20 shortly before the office opens.

**B.** Implement a step scaling action triggered at a lower CPU threshold, and decrease the cooldown period.

**C.** Implement a target tracking action triggered at a lower CPU threshold, and decrease the cooldown period.

**D.** Implement a scheduled action that sets the minimum and maximum capacity to 20 shortly before the office
opens.

---

## Question 276

A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An
Amazon RDS for Oracle instance is the application’ s data layer that uses Oracle-specific PL/SQL functions. Traffic
to the application has been steadily increasing. This is causing the EC2 instances to become overloaded and the
RDS instance to run out of storage. The Auto Scaling group does not have any scaling metrics and defines the
minimum healthy instance count only. The company predicts that traffic will continue to increase at a steady but
unpredictable rate before leveling off.
What should a solutions architect do to ensure the system can automatically scale for the increased traffic?
(Choose two.)

**A.** Configure storage Auto Scaling on the RDS for Oracle instance.

**B.** Migrate the database to Amazon Aurora to use Auto Scaling storage.

**C.** Configure an alarm on the RDS for Oracle instance for low free storage space.

**D.** Configure the Auto Scaling group to use the average CPU as the scaling metric.

**E.** Configure the Auto Scaling group to use the average free memory as the scaling metric.

---

## Question 277

A company provides an online service for posting video content and transcoding it for use by any mobile platform.
The application architecture uses Amazon Elastic File System (Amazon EFS) Standard to collect and store the
videos so that multiple Amazon EC2 Linux instances can access the video content for processing. As the popularity
of the service has grown over time, the storage costs have become too expensive.
Which storage solution is MOST cost-effective?

**A.** Use AWS Storage Gateway for files to store and process the video content.

**B.** Use AWS Storage Gateway for volumes to store and process the video content.

**C.** Use Amazon EFS for storing the video content. Once processing is complete, transfer the files to Amazon

Elastic Block Store (Amazon EBS).

**D.** Use Amazon S3 for storing the video content. Move the files temporarily over to an Amazon Elastic Block
Store (Amazon EBS) volume attached to the server for processing.

---

## Question 278

A company wants to create an application to store employee data in a hierarchical structured relationship. The
company needs a minimum-latency response to high-traffic queries for the employee data and must protect any
sensitive data. The company also needs to receive monthly email messages if any financial information is present
in the employee data.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month.

**B.** Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every
month.

**C.** Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly
events to AWS Lambda.

**D.** Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight
to publish analysis dashboards and share the dashboards with users.

**E.** Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly
notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.

---

## Question 279

A company has an application that is backed by an Amazon DynamoDB table. The company’s compliance
requirements specify that database backups must be taken every month, must be available for 6 months, and must
be retained for 7 years.
Which solution will meet these requirements?

**A.** Create an AWS Backup plan to back up the DynamoDB table on the first day of each month. Specify a
lifecycle policy that transitions the backup to cold storage after 6 months. Set the retention period for each
backup to 7 years.

**B.** Create a DynamoDB on-demand backup of the DynamoDB table on the first day of each month. Transition the
backup to Amazon S3 Glacier Flexible Retrieval after 6 months. Create an S3 Lifecycle policy to delete
backups that are older than 7 years.

**C.** Use the AWS SDK to develop a script that creates an on-demand backup of the DynamoDB table. Set up an
Amazon EventBridge rule that runs the script on the first day of each month. Create a second script that will run
on the second day of each month to transition DynamoDB backups that are older than 6 months to cold storage
and to delete backups that are older than 7 years.

**D.** Use the AWS CLI to create an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge
rule that runs the command on the first day of each month with a cron expression. Specify in the command to
transition the backups to cold storage after 6 months and to delete the backups after 7 years.

---

## Question 280

A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront
distribution, and logs are saved in one of the company’s Amazon S3 buckets. The company needs to perform
advanced analyses on the logs and build visualizations.
What should a solutions architect do to meet these requirements?

**A.** Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the
results with AWS Glue.

**B.** Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the
results with Amazon QuickSight.

**C.** Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize
the results with AWS Glue.

**D.** Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize
the results with Amazon QuickSight.

---

## Question 281

A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine
compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1
second for all its production databases.
Which solution meets these requirements?

**A.** Enable a Multi-AZ deployment for the DB instance.

**B.** Enable auto scaling for the DB instance in one Availability Zone.

**C.** Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate
Availability Zone.

**D.** Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS
DMS) change data capture (CDC) tasks.

---

## Question 282

A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC. An
Application Load Balancer (ALB) that extends across the public subnets directs web traffic to the EC2 instances.
The company wants to implement new security measures to restrict inbound traffic from the ALB to the EC2
instances while preventing access from any other source inside or outside the private subnet of the EC2 instances.
Which solution will meet these requirements?

**A.** Configure a route in a route table to direct traffic from the internet to the private IP addresses of the EC2
instances.

**B.** Configure the security group for the EC2 instances to only allow traffic that comes from the security group
for the ALB.

**C.** Move the EC2 instances into the public subnet. Give the EC2 instances a set of Elastic IP addresses.

**D.** Configure the security group for the ALB to allow any TCP traffic on any port.

---

## Question 283

A research company runs experiments that are powered by a simulation application and a visualization application.
The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The
visualization application is a Windows desktop application that displays the simulation output and requires an SMB
file system.
The company maintains two synchronized file systems. This strategy is causing data duplication and inefficient
resource usage. The company needs to migrate the applications to AWS without making code changes to either
application.
Which solution will meet these requirements?

**A.** Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the
applications.

**B.** Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File
Gateway for storage.

**C.** Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to
Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between
the applications.

**D.** Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to
Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage.

---

## Question 284

As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used
to create department budgets. A solutions architect needs to determine the most efficient way to obtain this
report information.
Which solution meets these requirements?

**A.** Run a query with Amazon Athena to generate the report.

**B.** Create a report in Cost Explorer and download the report.

**C.** Access the bill details from the billing dashboard and download the bill.

**D.** Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES).

---

## Question 285

A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage.
The contact form will have dynamic server-side components for users to input their name, email address, phone
number, and user message. The company anticipates that there will be fewer than 100 site visits each month.
Which solution will meet these requirements MOST cost-effectively?

**A.** Host a dynamic contact form page in Amazon Elastic Container Service (Amazon ECS). Set up Amazon
Simple Email Service (Amazon SES) to connect to any third-party email provider.

**B.** Create an Amazon API Gateway endpoint with an AWS Lambda backend that makes a call to Amazon Simple
Email Service (Amazon SES).

**C.** Convert the static webpage to dynamic by deploying Amazon Lightsail. Use client-side scripting to build the
contact form. Integrate the form with Amazon WorkMail.

**D.** Create a t2.micro Amazon EC2 instance. Deploy a LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack to
host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon
WorkMail.

---

## Question 286

A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website
uses a database backend. The company notices that the website does not reflect updates that have been made in
the website’s Git repository. The company checks the continuous integration and continuous delivery (CI/CD)
pipeline between the Git repository and Amazon S3. The company verifies that the webhooks are configured
properly and that the CI/CD pipeline is sending messages that indicate successful deployments.
A solutions architect needs to implement a solution that displays the updates on the website.
Which solution will meet these requirements?

**A.** Add an Application Load Balancer.

**B.** Add Amazon ElastiCache for Redis or Memcached to the database layer of the web application.

**C.** Invalidate the CloudFront cache.

**D.** Use AWS Certificate Manager (ACM) to validate the website’s SSL certificate.

---

## Question 287

A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application
has three tiers: an application tier, a business tier, and a database tier with Microsoft SQL Server. The company
wants to use specific features of SQL Server such as native backups and Data Quality Services. The company also
needs to share files for processing between the tiers.
How should a solutions architect design the architecture to meet these requirements?

**A.** Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing between the
tiers.

**B.** Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File Server for file sharing
between the tiers.

**C.** Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon
RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers.

**D.** Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon
RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for file sharing
between the tiers.

---

## Question 288

A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file
store for some content. The company must not make any changes to the application.
What should a solutions architect do to meet these requirements?

**A.** Create an Amazon S3 Standard bucket with access to the web servers.

**B.** Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.

**C.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web
servers.

**D.** Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS
volume to all web servers.

---

## Question 289

A company has an AWS Lambda function that needs read access to an Amazon S3 bucket that is located in the
same AWS account.
Which solution will meet these requirements in the MOST secure manner?

**A.** Apply an S3 bucket policy that grants read access to the S3 bucket.

**B.** Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to the S3
bucket.

**C.** Embed an access key and a secret key in the Lambda function’s code to grant the required IAM permissions
for read access to the S3 bucket.

**D.** Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to all S3
buckets in the account.

---

## Question 290

A company hosts a web application on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling
group that scales in response to user demand. The company wants to optimize cost savings without making a longterm commitment.
Which EC2 instance purchasing option should a solutions architect recommend to meet these requirements?

**A.** Dedicated Instances only

**B.** On-Demand Instances only

**C.** A mix of On-Demand Instances and Spot Instances

**D.** A mix of On-Demand Instances and Reserved Instances

---

## Question 291

A media company uses Amazon CloudFront for its publicly available streaming video content. The company wants
to secure the video content that is hosted in Amazon S3 by controlling who has access. Some of the company’s
users are using a custom HTTP client that does not support cookies. Some of the company’s users are unable to
change the hardcoded URLs that they are using for access.
Which services or methods will meet these requirements with the LEAST impact to the users? (Choose two.)

**A.** Signed cookies

**B.** Signed URLs

**C.** AWS AppSync

**D.** JSON Web Token (JWT)

**E.** AWS Secrets Manager

---

## Question 292

A company is preparing a new data platform that will ingest real-time streaming data from multiple sources. The
company needs to transform the data before writing the data to Amazon S3. The company needs the ability to use
SQL to query the transformed data.
Which solutions will meet these requirements? (Choose two.)

**A.** Use Amazon Kinesis Data Streams to stream the data. Use Amazon Kinesis Data Analytics to transform the
data. Use Amazon Kinesis Data Firehose to write the data to Amazon S3. Use Amazon Athena to query the
transformed data from Amazon S3.

**B.** Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use AWS Glue to
transform the data and to write the data to Amazon S3. Use Amazon Athena to query the transformed data
from Amazon S3.

**C.** Use AWS Database Migration Service (AWS DMS) to ingest the data. Use Amazon EMR to transform the data
and to write the data to Amazon S3. Use Amazon Athena to query the transformed data from Amazon S3.

**D.** Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to stream the data. Use Amazon Kinesis
Data Analytics to transform the data and to write the data to Amazon S3. Use the Amazon RDS query editor to
query the transformed data from Amazon S3.

**E.** Use Amazon Kinesis Data Streams to stream the data. Use AWS Glue to transform the data. Use Amazon
Kinesis Data Firehose to write the data to Amazon S3. Use the Amazon RDS query editor to query the
transformed data from Amazon S3.

---

## Question 293

A company has an on-premises volume backup solution that has reached its end of life. The company wants to use
AWS as part of a new backup solution and wants to maintain local access to all the data while it is backed up on
AWS. The company wants to ensure that the data backed up on AWS is automatically and securely transferred.

Which solution meets these requirements?

**A.** Use AWS Snowball to migrate data out of the on-premises solution to Amazon S3. Configure on-premises
systems to mount the Snowball S3 endpoint to provide local access to the data.

**B.** Use AWS Snowball Edge to migrate data out of the on-premises solution to Amazon S3. Use the Snowball
Edge file interface to provide on-premises systems with local access to the data.

**C.** Use AWS Storage Gateway and configure a cached volume gateway. Run the Storage Gateway software
appliance on premises and configure a percentage of data to cache locally. Mount the gateway storage
volumes to provide local access to the data.

**D.** Use AWS Storage Gateway and configure a stored volume gateway. Run the Storage Gateway software
appliance on premises and map the gateway storage volumes to on-premises storage. Mount the gateway
storage volumes to provide local access to the data.

---

## Question 294

An application that is hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. Traffic must not
traverse the internet.
How should a solutions architect configure access to meet these requirements?

**A.** Create a private hosted zone by using Amazon Route 53.

**B.** Set up a gateway VPC endpoint for Amazon S3 in the VPC.

**C.** Configure the EC2 instances to use a NAT gateway to access the S3 bucket.

**D.** Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.

---

## Question 295

An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally
identifiable information (PII). The company wants to use the data in three applications. Only one of the applications
needs to process the PII. The PII must be removed before the other two applications process the data.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Store the data in an Amazon DynamoDB table. Create a proxy application layer to intercept and process the
data that each application requests.

**B.** Store the data in an Amazon S3 bucket. Process and transform the data by using S3 Object Lambda before
returning the data to the requesting application.

**C.** Process the data and store the transformed data in three separate Amazon S3 buckets so that each
application has its own custom dataset. Point each application to its respective S3 bucket.

**D.** Process the data and store the transformed data in three separate Amazon DynamoDB tables so that each

application has its own custom dataset. Point each application to its respective DynamoDB table.

---

## Question 296

A development team has launched a new application that is hosted on Amazon EC2 instances inside a development
VPC. A solutions architect needs to create a new VPC in the same account. The new VPC will be peered with the
development VPC. The VPC CIDR block for the development VPC is 192.168.0.0/24. The solutions architect needs
to create a CIDR block for the new VPC. The CIDR block must be valid for a VPC peering connection to the
development VPC.
What is the SMALLEST CIDR block that meets these requirements?

**A.** 10.0.1.0/32

**B.** 192.168.0.0/24

**C.** 192.168.1.0/32

**D.** 10.0.1.0/24

---

## Question 297

A company deploys an application on five Amazon EC2 instances. An Application Load Balancer (ALB) distributes
traffic to the instances by using a target group. The average CPU usage on each of the instances is below 10%
most of the time, with occasional surges to 65%.
A solutions architect needs to implement a solution to automate the scalability of the application. The solution
must optimize the cost of the architecture and must ensure that the application has enough CPU resources when
surges occur.
Which solution will meet these requirements?

**A.** Create an Amazon CloudWatch alarm that enters the ALARM state when the CPUUtilization metric is less
than 20%. Create an AWS Lambda function that the CloudWatch alarm invokes to terminate one of the EC2
instances in the ALB target group.

**B.** Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target
group as the target group. Set a target tracking scaling policy that is based on the ASGAverageCPUUtilization
metric. Set the minimum instances to 2, the desired capacity to 3, the maximum instances to 6, and the target
value to 50%. Add the EC2 instances to the Auto Scaling group.

**C.** Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target
group as the target group. Set the minimum instances to 2, the desired capacity to 3, and the maximum

instances to 6. Add the EC2 instances to the Auto Scaling group.

**D.** Create two Amazon CloudWatch alarms. Configure the first CloudWatch alarm to enter the ALARM state
when the average CPUUtilization metric is below 20%. Configure the second CloudWatch alarm to enter the
ALARM state when the average CPUUtilization matric is above 50%. Configure the alarms to publish to an
Amazon Simple Notification Service (Amazon SNS) topic to send an email message. After receiving the
message, log in to decrease or increase the number of EC2 instances that are running.

---

## Question 298

A company is running a critical business application on Amazon EC2 instances behind an Application Load
Balancer. The EC2 instances run in an Auto Scaling group and access an Amazon RDS DB instance.
The design did not pass an operational review because the EC2 instances and the DB instance are all located in a
single Availability Zone. A solutions architect must update the design to use a second Availability Zone.
Which solution will make the application highly available?

**A.** Provision a subnet in each Availability Zone. Configure the Auto Scaling group to distribute the EC2
instances across both Availability Zones. Configure the DB instance with connections to each network.

**B.** Provision two subnets that extend across both Availability Zones. Configure the Auto Scaling group to
distribute the EC2 instances across both Availability Zones. Configure the DB instance with connections to each
network.

**C.** Provision a subnet in each Availability Zone. Configure the Auto Scaling group to distribute the EC2
instances across both Availability Zones. Configure the DB instance for Multi-AZ deployment.

**D.** Provision a subnet that extends across both Availability Zones. Configure the Auto Scaling group to
distribute the EC2 instances across both Availability Zones. Configure the DB instance for Multi-AZ
deployment.

---

## Question 299

A research laboratory needs to process approximately 8 TB of data. The laboratory requires sub-millisecond
latencies and a minimum throughput of 6 GBps for the storage subsystem. Hundreds of Amazon EC2 instances
that run Amazon Linux will distribute and process the data.
Which solution will meet the performance requirements?

**A.** Create an Amazon FSx for NetApp ONTAP file system. Sat each volume’ tiering policy to ALL. Import the raw
data into the file system. Mount the fila system on the EC2 instances.

**B.** Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file system that uses
persistent SSD storage. Select the option to import data from and export data to Amazon S3. Mount the file
system on the EC2 instances.

**C.** Create an Amazon S3 bucket to store the raw data. Create an Amazon FSx for Lustre file system that uses
persistent HDD storage. Select the option to import data from and export data to Amazon S3. Mount the file
system on the EC2 instances.

**D.** Create an Amazon FSx for NetApp ONTAP file system. Set each volume’s tiering policy to NONE. Import the
raw data into the file system. Mount the file system on the EC2 instances.

---

## Question 300

A company needs to migrate a legacy application from an on-premises data center to the AWS Cloud because of
hardware capacity constraints. The application runs 24 hours a day, 7 days a week. The application’s database
storage continues to grow over time.
What should a solutions architect do to meet these requirements MOST cost-effectively?

**A.** Migrate the application layer to Amazon EC2 Spot Instances. Migrate the data storage layer to Amazon S3.

**B.** Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon
RDS On-Demand Instances.

**C.** Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon
Aurora Reserved Instances.

**D.** Migrate the application layer to Amazon EC2 On-Demand Instances. Migrate the data storage layer to
Amazon RDS Reserved Instances.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 251

**Answer:** **B**

**Explanation:**

The correct answer is B: Create a NAT gateway, and place it in a public subnet. Configure the private subnet
route table to use the NAT gateway as the default route.

Here's a detailed justification:
The scenario requires outbound internet access for an EC2 instance residing in a private subnet without direct
internet connectivity. The instance needs to download security updates. A Network Address Translation (NAT)
gateway is designed for precisely this purpose. It allows instances in private subnets to initiate outbound
connections to the internet (or other AWS services) while preventing the internet from initiating connections
with those instances.

**Option A** is incorrect because configuring the private subnet route table to use an internet gateway as the

default route effectively turns the private subnet into a public subnet, negating the desired security posture
of isolating the instance. Internet Gateways allow two-way communication with the Internet.

**Option C** is incorrect because while a NAT instance can also provide outbound internet access, it's a less
scalable and more complex solution than a NAT gateway. NAT instances require manual management,
patching, and scaling, while NAT gateways are managed by AWS and offer higher availability and
performance. Placing the NAT Instance in the same subnet as the EC2 instance would not solve the problem,
as the EC2 instance would need to route traffic to the NAT instance through an entity with internet access.

**Option D** is incorrect because it combines an internet gateway (which exposes the subnet to inbound traffic)
with a NAT instance, which is not necessary and over-complicates the solution. The route table of the private
subnet should point to the NAT gateway and not the internet gateway, which negates the point of the private
subnet.
By placing a NAT gateway in a public subnet (a subnet with a route to an internet gateway), the EC2 instance
in the private subnet can route its outbound traffic to the NAT gateway. The NAT gateway then translates the
private IP address of the EC2 instance to its own public IP address (provided by AWS) and forwards the traffic
to the internet. The response traffic is then routed back through the NAT gateway to the EC2 instance.
Critically, no inbound traffic from the internet can directly reach the EC2 instance. The route table
configuration ensures that all outbound traffic from the private subnet is directed through the NAT gateway.
The NAT gateway itself handles the connection to the Internet Gateway.
For further research, refer to the AWS documentation:
NAT Gateway
Internet Gateways
NAT Instances

---

## Question 252

**Answer:** **A**

**Explanation:**

The correct answer is A: Amazon Elastic File System (Amazon EFS). Here's why:
Amazon EFS is a fully managed, scalable, elastic, and shared file system designed for use with AWS Cloud
services and on-premises resources. Its key features directly address the requirements outlined in the
prompt. Specifically, it provides shared file storage that can be simultaneously accessed by multiple EC2
instances, fulfilling the requirement of accessibility from multiple application servers.
Crucially, EFS offers built-in redundancy by replicating data across multiple Availability Zones (AZs) within a
region. This ensures high availability and durability, addressing the need for a solution with built-in

redundancy to protect important company assets. EFS scales automatically as data is added or removed,
accommodating the anticipated growth in the number of files over time without requiring manual intervention.
In contrast, Amazon EBS (B) is a block storage volume designed for single EC2 instance attachment. While
EBS volumes can be backed up, they are not inherently designed for simultaneous access from multiple
servers. S3 Glacier Deep Archive (C) is suitable for long-term archiving and infrequently accessed data, not
for active file storage and simultaneous access. AWS Backup (D) is a data protection service providing
centralized backup management, but does not provide storage itself. It is best used to create backups of EFS.

Therefore, EFS provides the best combination of scalability, shared access, redundancy, and ease of
management for the given scenario.

---

## Question 253

**Answer:** **C**

**Explanation:**

ec2:* Allows full control of EC2 instances, so C is correct
The policy only grants get and list permission on IAM users, so not A ds:Delete deny denies delete-directory,
so not B, see https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ds/index.html
The policy only grants get and describe permission on logs, so not D

---

## Question 254

**Answer:** **B**

**Explanation:**

The principle of least privilege dictates granting only the minimum necessary permissions. In the context of
EC2 security groups, this means precisely controlling the traffic allowed between application tiers.

**Option B**, creating security group rules using security group IDs as the source or destination, is the correct
approach. This is because it allows you to specify that only members of a particular security group
(representing a specific tier) can communicate with another security group. This is a tightly controlled and
explicit permission. For example, you can allow traffic only from the web tier security group to the application
tier security group, and vice versa, applying least privilege.

**Option A**, using instance IDs, is not scalable or maintainable. Instance IDs are dynamic and change when
instances are replaced, requiring constant updates to security group rules.

**Option C**, using VPC CIDR blocks, is too broad. It opens up communication to any instance within the entire
VPC, violating the principle of least privilege.

**Option D**, using subnet CIDR blocks, is also broader than necessary. While it's more restrictive than using the
VPC CIDR, it still allows communication between any instances within the subnets, even if they don't belong to
the application tiers.

Therefore, using security group IDs directly addresses the security team's concerns by precisely defining
allowed communication between application tiers, effectively implementing the principle of least privilege.
This minimizes the attack surface and simplifies security management. For further research, consult the AWS
documentation on security groups:
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html

---

## Question 255

**Answer:** **D**

**Explanation:**

The correct solution to prevent duplicate order creation in the e-commerce checkout workflow scenario is
option D. Let's break down why:
The core problem is the timeouts and subsequent retries leading to multiple orders. This indicates a need for
an asynchronous, idempotent approach. **Option D** uses Amazon SQS FIFO (First-In, First-Out) queues, which
are designed to handle messages in the exact order they were sent and ensure that a message is processed
only once. This is crucial for preventing duplicate order processing.

Here's a step-by-step justification:

1. Database Storage: Storing the order in the database first provides persistence and allows a record to
be created regardless of payment processing success.

2. SQS FIFO Queue: Sending a message containing the order number to an SQS FIFO queue guarantees
that the payment service receives the order information in the order it was placed. The FIFO nature
ensures order is preserved.

3. Payment Service Processing: The payment service retrieves the message from the SQS FIFO queue,
processes the payment using the order number in the message.

4. Idempotency via De-duplication: The message is deleted from the queue only after successful
processing of the payment. If the payment service fails or times out before deleting the message, the
message remains in the queue and will be retried, ensuring at-least-once delivery. The payment
service should be designed to be idempotent; even if the service receives the same request multiple
times, it generates the same result, thus avoiding duplication. This can be ensured using a transaction
ID that is stored in the database and tracked.

5. Error Handling: In case of a payment processing failure even after retries, the message could be
moved to a Dead Letter Queue (DLQ) for further investigation and manual intervention.

Why other options are incorrect:
A (Kinesis Data Firehose): Kinesis Data Firehose is designed for streaming data to destinations like S3 or
Redshift for analytics. It's not meant for guaranteed, ordered message delivery in a transactional workflow.
B (CloudTrail and Lambda): CloudTrail logs events after they occur. Using it to trigger Lambda for payment
processing introduces significant delay and doesn't address the issue of preventing duplicate order creation.
Also, CloudTrail is not meant for this kind of transactional system.
C (SNS): Amazon SNS is a pub/sub messaging service suitable for broadcasting messages to multiple
subscribers. It doesn't offer the guaranteed, ordered delivery and message de-duplication needed for this
scenario. There is also the possibility of multiple subscribers being invoked, leading to multiple payments.

In summary, using SQS FIFO queues, combined with idempotent payment processing, provides the required
guarantees to handle timeouts and retries gracefully, preventing the creation of multiple orders for a single
user request.

---

## Question 256

**Answer:** **BD**

**Explanation:**

The correct answer is BD. Let's break down why each option is or isn't suitable:

**B.** Enable versioning on the bucket: Versioning is critical for ensuring that all versions of the documents are
available. When versioning is enabled, every time an object is uploaded to the bucket, S3 stores a copy of the
object and assigns it a unique version ID. This allows users to retrieve previous versions of a document if
needed after modifications or accidental deletions.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html

**D.** Enable MFA Delete on the bucket: MFA (Multi-Factor Authentication) Delete provides an extra layer of
security against accidental or malicious deletions. When enabled, deleting an object version or suspending
versioning requires an MFA token. This helps prevent unintended data loss, fulfilling the requirement to
prevent accidental deletion.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html#MultiFactorAuthenticationDelete
Now, let's look at why the other options are not suitable:

**A.** Enable a read-only bucket ACL: A read-only bucket ACL would prevent users from modifying or uploading
documents, which contradicts the requirement that users must be able to download, modify, and upload
documents.

**C.** Attach an IAM policy to the bucket: While IAM policies are essential for controlling access to S3
resources, simply attaching a policy to the bucket doesn't inherently prevent accidental deletions or ensure
version availability. An IAM policy would control who can perform actions, but versioning and MFA delete
controls how actions are handled.

**E.** Encrypt the bucket using AWS KMS: Encryption protects the confidentiality of the data at rest. While
encryption is a security best practice, it does not directly address the requirements of preventing accidental
deletion or ensuring that all versions of the documents are available. Encryption is for data protection, not
data recovery.

Therefore, versioning and MFA delete are the most effective and necessary solutions to meet the stated
requirements of preventing accidental deletion and making all document versions accessible.

---

## Question 257

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:
The requirement is to create a serverless solution to store EC2 Auto Scaling events in S3 for near-real-time
dashboard updates without affecting EC2 instance launch speed. Let's analyze why each option is suitable or
unsuitable:

**Option A**: Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon
Kinesis Data Firehose. Store the data in Amazon S3.
CloudWatch metric streams allow you to continuously stream CloudWatch metrics to destinations like Kinesis
Data Firehose. This provides a near-real-time flow of Auto Scaling status data.
Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations like
S3. It handles buffering, batching, and compression, ensuring efficient data delivery.
This solution is serverless because both CloudWatch metric streams and Kinesis Data Firehose are managed
services that require no server provisioning.
It avoids impacting EC2 instance launch speed because the data capture is asynchronous and handled by
CloudWatch.

**Option B**: Launch an Amazon EMR cluster to collect the EC2 Auto Scaling status data and send the data to
Amazon Kinesis Data Firehose. Store the data in Amazon S3.
Using EMR introduces unnecessary complexity and overhead. EMR is designed for big data processing and
analysis, which is not needed for this relatively simple data streaming task.
EMR involves managing an entire cluster, which is not serverless.

**Option C**: Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure
the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.
EventBridge on a schedule will not provide near-real-time updates. EventBridge is event driven and the
Lambda function would need to poll data, thus not serverless.
Polling the Auto Scaling API from Lambda could potentially impact the API's availability and, indirectly, the
EC2 instance launch speed.

**Option D**: Use a bootstrap script during the launch of an EC2 instance to install Amazon Kinesis Agent.
Configure Kinesis Agent to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis
Data Firehose. Store the data in Amazon S3.
Installing Kinesis Agent on each EC2 instance using a bootstrap script will increase the EC2 launch time,
contrary to the requirements.
Managing Kinesis Agent on each instance adds complexity, which undermines the desire for a simple,
serverless solution.

In summary, option A offers the best balance of real-time data streaming, serverless architecture, and
minimal impact on EC2 instance launches.
Here are some authoritative links for more research:
CloudWatch Metric Streams:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metricstreams.html
Kinesis Data Firehose: https://aws.amazon.com/kinesis/data-firehose/
Amazon EventBridge: https://aws.amazon.com/eventbridge/
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 258

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS Glue, a fully managed ETL service specifically designed for
data transformation tasks like converting CSV to Parquet. The process is triggered automatically by S3 PUT
events via a Lambda function, thus requiring minimal operational overhead.
Here's a detailed breakdown:
AWS Glue ETL Job: Glue ETL jobs are purpose-built for data transformation tasks. They are designed to
handle large-scale data processing, making them efficient for converting 1 GB CSV files to Parquet. Glue
handles the complexities of managing the compute resources required for the transformation.
Lambda Trigger: The Lambda function triggered by each S3 PUT event provides the real-time aspect,
ensuring immediate processing of each uploaded file. Lambda is a serverless compute service, meaning you
don't have to manage any servers, reducing operational overhead.
Parquet Format: Parquet is a columnar storage format optimized for analytical queries, suitable for
downstream data analysis.
Least Operational Overhead: This solution minimizes operational overhead because Glue is a fully managed
service. You don't have to manage servers, configure networking, or perform other infrastructure-related
tasks. Lambda is also serverless, further reducing management burden.
Let's analyze why the other options are less optimal:
A (Lambda only): Lambda functions have execution time and memory limits. Processing 1 GB files might
exceed these limits. Additionally, managing the transformation logic within Lambda for such large files
introduces complexity and operational overhead.
B (Spark and Lambda): Managing an Apache Spark cluster requires significant operational overhead. While
Spark is powerful, it's overkill for this relatively simple data transformation task and increases management
complexity.
C (Glue Crawler, Athena, and Lambda): This option is unnecessarily complex. Using Athena to query CSV files
directly in S3 is less efficient and requires more processing power than using a direct ETL transformation.
Relying on scheduling instead of event-driven processing increases latency.

In summary, leveraging AWS Glue ETL jobs triggered by S3 PUT events through Lambda provides an efficient,
scalable, and fully managed solution for converting CSV files to Parquet with minimal operational overhead.
Relevant AWS documentation:

AWS Glue: https://aws.amazon.com/glue/
Amazon S3 Event Notifications:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 259

**Answer:** **A**

**Explanation:**

The recommended solution is A: Create a backup vault in AWS Backup to retain RDS backups. Create a new
backup plan with a daily schedule and an expiration period of 2 years after creation. Assign the RDS DB
instances to the backup plan.

Here's why:
AWS Backup is designed for centralized backup management: It provides a unified console for configuring
and managing backups across multiple AWS services, including RDS. This simplifies compliance and
governance. https://aws.amazon.com/backup/
Backup Vaults offer enhanced security: AWS Backup vaults enable you to isolate backups, control access,
and prevent accidental or malicious deletion of backups. This is crucial for long-term retention requirements
and compliance.
Backup Plans provide scheduling and retention policies: AWS Backup allows you to define backup plans with
custom schedules (daily, weekly, etc.) and retention periods (2 years in this case). This automates the backup
process and ensures backups are retained for the required duration.
Centralized retention management: AWS Backup simplifies the management of long-term retention by
automatically handling the lifecycle of backups based on the defined policies.
RDS integration with AWS Backup: RDS is natively integrated with AWS Backup, making it easy to protect
RDS instances using backup plans.
Let's analyze why the other options are not as suitable:

**Option B** (RDS Snapshots and DLM): While RDS snapshots are a valid backup method, managing snapshot
retention manually using Amazon DLM can become complex at scale, especially for a large number of
databases. It doesn't offer the centralized management and security benefits of AWS Backup. DLM primarily
focuses on EBS volumes and, while it can be used for RDS snapshots, it's not the best practice compared to
AWS Backup for centralized RDS backup management.

https://docs.aws.amazon.com/dlm/latest/userguide/what-is-dlm.html

**Option C** (CloudWatch Logs): CloudWatch Logs are designed for storing application and system logs, not
database backups. While database transaction logs can be helpful for point-in-time recovery, they are not a
substitute for full database backups. They don't offer a consistent, restorable state like a database snapshot.

**Option D** (DMS and S3): AWS DMS is primarily used for database migration and replication, not for long-term
backup and retention. While CDC can capture changes, it's not a direct replacement for full backups.
Reconstructing a database from CDC data stored in S3 can be complex and time-consuming. It requires
manual reconstruction procedures and doesn't provide the ease of restoration offered by RDS snapshots or
AWS Backup.

Therefore, AWS Backup provides the most efficient, secure, and compliant solution for managing RDS
backups with a 2-year retention period, offering centralized management, automated scheduling, and
enhanced security features.

---

## Question 260

**Answer:** **D**

**Explanation:**

The correct answer is D, joining the FSx for Windows File Server file system to the existing on-premises
Active Directory (AD).

Here's why: The primary requirement is to maintain the existing on-premises Active Directory groups for
access control to files and folders hosted on FSx for Windows File Server. This means the file system needs to
be integrated with the on-premises AD so that existing group memberships and permissions translate to the
cloud environment.
FSx for Windows File Server provides native support for integrating with Active Directory. By joining the FSx
file system to the existing on-premises AD, the file system becomes a member of the AD domain. This enables
users and groups defined in the on-premises AD to be recognized and authorized by FSx. Users can then
access the file shares using their existing AD credentials, and permissions configured on the shares, folders,
and files using AD groups will be enforced.

**Option A** is incorrect because Active Directory Connector is typically used to connect AWS Directory Service
to on-premises Active Directory, which is not the case here; the company is already running its own onpremises Active Directory. Mapping AD groups to IAM groups won't directly translate SMB permissions on
files and folders on FSx.

**Option B** is incorrect because tags are used for metadata and resource organization, not for directly
controlling access permissions on file shares using Active Directory groups. Mapping AD groups to IAM
groups is not the solution for SMB level permissions.

**Option C** is incorrect because IAM service-linked roles grant AWS services permission to call other AWS
services on your behalf. While FSx uses service-linked roles, they are not a mechanism for controlling file
share access using on-premises Active Directory groups. Service-linked roles will not grant or restrict the
usage of on-premise AD users.

In summary, direct integration with Active Directory is essential for maintaining existing permissions and
security policies. FSx for Windows File Server's AD joining capability addresses this directly by extending the
on-premises AD environment to the cloud-based file system.
For more information, refer to the AWS documentation on:
FSx for Windows File Server - Active Directory Integration:
https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html

---

## Question 261

**Answer:** **AC**

**Explanation:**

The correct answer is AC. Here's a detailed justification:

**A.** Configure Amazon CloudFront to cache multiple versions of the content.
CloudFront's ability to cache multiple versions of content based on request headers is crucial for serving
device-specific versions of the website. This is accomplished through "Cache Key Settings" and "Origin
Request Policies" in CloudFront distributions. By including the User-Agent header in the cache key, CloudFront
can store and serve different versions of the content for different device types (e.g., desktop, mobile). This
reduces the load on the origin servers by serving pre-cached content to users. This approach is preferred over
always forwarding requests to the
origin.https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cachekey.html

**C.** Configure a [email protected] function to send specific objects to users based on the User-Agent header.
[email protected] functions allow you to customize content delivery at the edge based on request attributes,

including the User-Agent header. By inspecting the User-Agent header within the [email protected] function,
you can rewrite URLs or redirect requests to specific origin servers that serve optimized content for each
device type. This is a highly flexible approach that allows for fine-grained control over content delivery. [email
protected] intercepts requests before they hit the cache (or origin, in a cache miss), providing immediate
customization before content is
served.https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html

Why other options are incorrect:

**B.** Configure a host header in a Network Load Balancer to forward traffic to different instances. NLBs
operate at the transport layer (Layer 4) and do not inspect HTTP headers like the host header. NLBs primarily
forward traffic based on IP addresses and ports, making them unsuitable for routing based on the User-Agent
header.
D & E. Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB)...: While
Global Accelerator improves application availability and performance, it is primarily used for routing traffic to
the nearest endpoint, not for device-specific content delivery. NLBs are still not suited for routing based on
the User-Agent. Path-based routing in the NLB would also be unrelated to device type. The problem requires
inspection of the User-Agent header, which neither Global Accelerator nor NLB natively supports.

---

## Question 262

**Answer:** **A**

**Explanation:**

The most cost-effective solution for connecting EC2 instances in one VPC (App VPC) to an ElastiCache cluster
in another VPC (Cache VPC) within the same AWS Region (us-east-1) is to use VPC Peering.

**Option A** is the correct solution because it establishes a direct network connection between the two VPCs
using VPC peering. This allows network traffic to flow directly between the EC2 instances and the
ElastiCache cluster without traversing the public internet or intermediate network infrastructure. The route
table entries in each VPC are essential to direct traffic destined for the other VPC through the peering
connection. The security group rule allows the EC2 instances to initiate connections to the ElastiCache

cluster.

**Option B** and D are incorrect because a Transit VPC is typically used for connecting multiple VPCs together or
for centralizing network services. In this simple scenario involving only two VPCs within the same region, a
Transit VPC adds unnecessary complexity and cost. A Transit VPC involves additional EC2 instances running
routing software, increasing management overhead and operational costs.

**Option C** is incorrect because security groups can be directly associated with network interfaces and
resources. There is no "peering connection's security group" to configure. You want to permit traffic from the
application's security group directly.

Therefore, VPC peering (**Option A**) is the most efficient and cost-effective way to enable communication
between the EC2 instances and the ElastiCache cluster in this scenario.
Supporting links:
VPC Peering
Security Groups

---

## Question 263

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's why:

**A.** Deploy an Amazon Elastic Container Service (Amazon ECS) cluster: ECS is a fully managed container
orchestration service that allows you to run, stop, and manage containers on a cluster. By using ECS, the
company can avoid managing the underlying infrastructure. ECS handles the orchestration and scheduling of
the containers, reducing operational overhead.

**D.** Deploy an Amazon Elastic Container Service (Amazon ECS) service with a Fargate launch type. Specify a
desired task number level of greater than or equal to 2: Fargate is a serverless compute engine for
containers. By using the Fargate launch type with ECS, the company eliminates the need to manage EC2
instances for their containers, further reducing the operational burden. Specifying a desired task number of 2
or more ensures high availability and fault tolerance, as multiple instances of the service will be running. If
one container fails, another will take its place.

Why the other options are incorrect:

**B.** Deploy the Kubernetes control plane on Amazon EC2 instances that span multiple Availability Zones:
Kubernetes (K8s) is a robust container orchestration system, but deploying the control plane on EC2
instances introduces significant operational overhead. The company would be responsible for managing the
health, scaling, and patching of these EC2 instances, directly contradicting the requirement to minimize
ongoing effort and avoid managing additional infrastructure. Furthermore, Amazon EKS (Elastic Kubernetes
Service) is a managed service for Kubernetes.

**C.** Deploy an Amazon Elastic Container Service (Amazon ECS) service with an Amazon EC2 launch type.
Specify a desired task number level of greater than or equal to 2: While ECS with the EC2 launch type could
work, it would require the company to manage the underlying EC2 instances, including patching, scaling, and
maintenance. This goes against the requirement to minimize maintenance and avoid infrastructure
management.

**E.** Deploy Kubernetes worker nodes on Amazon EC2 instances that span multiple Availability Zones: Similar
to option B, deploying worker nodes on EC2 instances adds an operational burden, forcing the company to
manage and maintain the underlying infrastructure, which conflicts with the problem's requirements. Again,
utilizing EKS and Fargate reduces overhead.
Supporting Documentation:
Amazon ECS: https://aws.amazon.com/ecs/
AWS Fargate: https://aws.amazon.com/fargate/

---

## Question 264

**Answer:** **D**

**Explanation:**

The best solution to prevent timeout errors caused by unhealthy EC2 instances in a web application is to use
an Application Load Balancer (ALB) with health checks in front of the instances and then route traffic to the
ALB from Route 53.

Here's why:
ALB Health Checks: ALBs have built-in health check capabilities. They periodically send requests to the EC2
instances and determine their health based on the response. Only healthy instances receive traffic.
Dynamic Instance Management: If an instance fails the health check, the ALB automatically stops routing
traffic to it, preventing timeouts for users. When the instance recovers, the ALB resumes traffic routing.
Route 53 Integration: Route 53 can be configured to point to the ALB's DNS name. This ensures that all
traffic is directed to the ALB, which then intelligently routes traffic to healthy instances.

Scalability and Availability: ALBs offer built-in scalability and high availability. They can handle traffic spikes
and ensure that the application remains available even if some instances fail.
Simplicity: Compared to alternatives like creating individual Route 53 records with health checks for each
instance, using an ALB is a simpler and more manageable solution.
Let's analyze why the other options are less suitable:

**A:** Route 53 simple routing policy: While health checks can be associated, simple routing policy does not
inherently remove unhealthy instances from the rotation as effectively as an ALB. It relies on DNS
propagation, which might take time.

**B:** Route 53 failover routing policy: This is intended for active/passive setups. It doesn't dynamically
distribute traffic based on health within a group of active servers like the given scenario.

**C:** CloudFront distribution with EC2 instances as the origin: CloudFront primarily focuses on caching static
content and improving website performance by distributing content closer to users. While health checks can
be associated with origins, CloudFront is not the best solution for dynamic traffic routing based on instance
health, especially within a single region. Also, it doesn't manage routing traffic to a group of active instances
for high availability like an ALB.
In conclusion, the ALB provides a robust and efficient solution for managing instance health and ensuring that
users are only directed to healthy instances, preventing timeout errors.
Supporting Links:
Application Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
Route 53 Health Checks: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checkscreating-deleting.html

---

## Question 265

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
Requirements Breakdown:
Highly Available: Achieved by using multiple EC2 instances behind an Application Load Balancer (ALB). The
ALB distributes traffic across healthy instances, ensuring service availability.
HTTPS Content Delivery Close to the Edge: Amazon CloudFront is a Content Delivery Network (CDN) that
caches content in edge locations globally, reducing latency for users accessing the application. Serving

content via HTTPS ensures secure communication.
Least Delivery Time: CloudFront's edge locations minimize the distance data travels to reach users.
Most Secure: Placing EC2 instances in private subnets enhances security. Private subnets don't have direct
internet access, reducing the attack surface.
Justification:

**Option C** optimally fulfills all the requirements.

1. Public ALB: The ALB needs to be public to receive incoming HTTPS requests from users.

2. Redundant EC2 instances in private subnets: Placing EC2 instances in private subnets significantly
improves security by preventing direct access from the internet. The ALB acts as a secure
intermediary, routing traffic to the EC2 instances.

3. CloudFront with ALB as origin: CloudFront serves HTTPS content from edge locations. Configuring
the public ALB as the origin directs CloudFront to fetch content from the ALB, which then distributes
requests to the backend EC2 instances. This ensures HTTPS delivery closer to the users.

Why other options are incorrect:

**Option A** & D (EC2 instances in public subnets): Exposing EC2 instances directly to the internet in public
subnets increases the security risk. This violates the "most secure" requirement.

**Option B** (EC2 instances as origin): While EC2 instances can technically be origins, it is not as practical and
recommended as using an ALB since it is much harder to manage redundancy, scaling, and health checks.
CloudFront is designed to work well with load balancers.
Options B & D (Directly using EC2 as origin without ALB): It loses the advantage of the ALB's health checks,
traffic distribution, and improved manageability in front of the EC2 instances. The EC2 instances would then
need to be directly accessible from CloudFront, further compromising security.
Supporting Links:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Application Load Balancer (ALB): https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
Amazon VPC Subnets: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html

---

## Question 266

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure an accelerator in AWS Global Accelerator. Add a listener for the port
that the application listens on, and attach it to a Regional endpoint in each Region. Add the ALB as the
endpoint.

Here's a detailed justification:
AWS Global Accelerator is designed to improve the availability and performance of applications by directing
user traffic to the optimal endpoint based on factors such as location, health, and configured weights. It uses
the AWS global network, which is less congested and more reliable than the public internet, to route traffic.
This is vital for latency-sensitive applications like the gaming platform described.
Global Accelerator operates by advertising static IP addresses from AWS edge locations around the world.
When a user connects to the application using one of these IPs, Global Accelerator intelligently routes the
traffic to the nearest healthy endpoint. By attaching Application Load Balancers (ALBs) in each Region as
endpoints, the application benefits from regional load balancing (handled by the ALBs) and global traffic
management (handled by Global Accelerator).
Global Accelerator performs continuous health checks on the ALBs in each Region. If an ALB or the
underlying EC2 instances within a Region become unhealthy, Global Accelerator automatically redirects
traffic to healthy endpoints in other Regions. This provides high availability and resilience. The listener
configured on the Global Accelerator is associated with the port on which the game application runs and is
mapped to ALBs acting as endpoints.
Options B and C are incorrect because CloudFront is primarily designed for caching static and dynamic
content. While CloudFront can improve performance, it's not the primary solution for routing traffic based on
real-time health checks and minimizing latency across multiple regions in the way that Global Accelerator
can. The caching that CloudFront provides will not be effective if the origin (ALB) is unhealthy. Origin cache
headers are related to caching behavior and not health checks. **Option C** uses S3 as the origin, which is even
less appropriate for a dynamic, interactive gaming application.

**Option D** is incorrect because DynamoDB and DAX are database-related services and are not suitable for
routing traffic or performing health checks on application endpoints.

In summary, Global Accelerator provides the optimal solution by using the AWS global network to minimize
latency and provide continuous health checks to route traffic to healthy endpoints in different regions, which
is crucial for the gaming platform's performance and user experience.

---

## Question 267

**Answer:** **D**

**Explanation:**

The best solution to meet the company's requirements with the least operational overhead is option D.

Here's why:
Data Ingestion & Storage (Kinesis Data Firehose): Kinesis Data Firehose is designed to reliably load
streaming data into data lakes, data stores, and analytics services. It automatically scales to match the
throughput of your data and requires no ongoing administration. It can directly deliver data to S3 in Parquet
format. This addresses the requirements of storing data in S3 in Parquet format with encryption.
https://aws.amazon.com/kinesis/data-firehose/
Near-Real-Time Analysis (Kinesis Data Analytics): Kinesis Data Analytics is a serverless service that allows
you to process and analyze streaming data in real time using standard SQL or Java. It has less operational
overhead than managing an EMR cluster. It aligns perfectly with the need for near-real-time data usage
analysis.
https://aws.amazon.com/kinesis/data-analytics/
Encryption: Kinesis Data Firehose supports encryption of data at rest in S3 using AWS KMS or server-side
encryption with Amazon S3-managed keys (SSE-S3).
Operational Overhead: Compared to using an EMR cluster (options B and C), Kinesis Data Analytics is a fully
managed service, eliminating the need for cluster management, scaling, and patching. Using Lambda to send
data to either EMR or Kinesis Data Analytics (options A and B) adds unnecessary complexity. Firehose
simplifies the data loading process directly to S3.
Parquet Conversion: Kinesis Firehose can automatically convert the data into Parquet format before storing it
in S3.
In contrast:
Options A, B, and C involve more manual steps and resource management. Setting up and managing an EMR
cluster involves more operational overhead compared to Kinesis Data Analytics. Using Kinesis Data Streams
without Firehose would require additional logic for data buffering, transformation, and storage in Parquet
format. Using Lambda to ingest data adds an extra layer of complexity.

---

## Question 268

**Answer:** **B**

**Explanation:**

The correct answer is B. Use RDS Proxy between the application and the database.

Here's a detailed justification:
The problem is database read performance, leading to user delays and interruptions. The requirement is to
improve the user experience with minimal architectural changes.
Why RDS Proxy is the Best Fit:
Connection Pooling: RDS Proxy sits between the application and the RDS database and manages database
connections efficiently. Instead of each application instance establishing and maintaining its own connection,
RDS Proxy maintains a pool of connections. This reduces the overhead of creating new connections, which is a
common performance bottleneck. This directly addresses the read performance issue by optimizing how the
application interacts with the database.
Connection Multiplexing: RDS Proxy allows multiple application requests to share a single database
connection, further optimizing resource usage and reducing connection-related overhead.
Reduced Database Load: By reducing the number of connections the database has to manage, RDS Proxy
lessens the load on the RDS instance, improving its overall responsiveness and read performance.
Minimal Architectural Changes: RDS Proxy is a relatively transparent layer. The application's code doesn't
need significant modification to utilize it. The application simply needs to point to the RDS Proxy endpoint
instead of the database endpoint. This aligns with the requirement to minimize changes to the existing
architecture.
Focus on Read Performance: While RDS Proxy helps with all database operations, its connection pooling and
multiplexing particularly benefit read-heavy workloads, which is the core issue in this scenario.

Why other options are less suitable:

**A.** Use Amazon ElastiCache in front of the database: While ElastiCache (e.g., Memcached or Redis) can
improve read performance by caching frequently accessed data, it requires significant changes to the
application to implement caching logic. It is an architectural change that the question is trying to avoid.

**C.** Migrate the application from EC2 instances to AWS Lambda: Migrating the application to Lambda is a
major architectural change. It also doesn't directly address the database read performance issue. It's a much
more complex undertaking than implementing RDS Proxy.

**D.** Migrate the database from Amazon RDS for MySQL to Amazon DynamoDB: Migrating to DynamoDB is
also a significant architectural change. DynamoDB is a NoSQL database, and requires a redesign of the data
model and application code to use effectively. This is a complex solution and doesn’t meet the minimization of
changes requirement.
In conclusion, RDS Proxy provides a targeted solution that optimizes database connections, reduces load on
the database, and requires minimal changes to the application's architecture. Therefore, it is the best choice
to address the database read performance issues.

---

## Question 269

**Answer:** **C**

**Explanation:**

The recommended solution is to create a read replica of the primary RDS database and direct business
analysts' read-only queries to it. This approach addresses the performance degradation without requiring
significant changes to the existing web application architecture. Read replicas allow you to offload read
traffic from the primary database instance, reducing the load on the primary and improving its performance
for transactional operations.

**Option A**, exporting data to DynamoDB, is not suitable because DynamoDB is a NoSQL database, and
migrating SQL queries to it would require substantial code changes. **Option B**, using ElastiCache, is primarily
for caching frequently accessed data, not for running ad-hoc queries by analysts. **Option D**, copying data to
Redshift, is better suited for complex analytical workloads over large datasets, which is overkill for simple
read-only queries and introduces unnecessary complexity.
Read replicas are designed specifically for read-heavy workloads and are easy to set up and manage within
the RDS ecosystem. They maintain near real-time data synchronization with the primary database, ensuring
the business analysts have access to up-to-date information. This solution provides minimal disruption to the
existing application while improving its performance and scalability by isolating the analytical workload.
Using read replicas is a cost-effective and efficient way to address the increased read-only query load.

---

## Question 270

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most suitable answer:
The question requires encryption at rest before data is uploaded to S3 and encryption in transit. Client-side
encryption addresses both requirements directly. By encrypting the data on the client-side (i.e., before it
leaves the company's environment) before uploading it to S3, you ensure that the data is already encrypted at
rest. This addresses the requirement of encryption at rest prior to upload. Then, to meet the encryption-intransit requirement, ensure that HTTPS (TLS) is used during the upload process. This encrypts the data as it
travels across the network to S3.
Options B, C, and D involve server-side encryption. While server-side encryption (SSE) methods address
encryption at rest within S3, they don't fulfill the requirement of encrypting the data before it's uploaded. In
those scenarios, the data transits to S3 unencrypted and then gets encrypted by S3 itself. Furthermore,
simply creating bucket policies (option C) or enabling a KMS key (option D) does not guarantee data is
encrypted before it's uploaded.
Client-side encryption gives the company more control over the encryption process, particularly the
management of encryption keys. The company can manage its keys, rotate them, and maintain ownership of
the encryption process from end to end.

In summary, using client-side encryption with HTTPS meets both stated requirements: encrypting the data at
rest before upload and encrypting the data in transit. This provides a strong security posture and full control
over the encryption process.

---

## Question 271

**Answer:** **C**

**Explanation:**

The correct answer is C, configuring scheduled scaling to scale up to the desired compute level. Here's why:
The core problem is that the Auto Scaling group takes too long to reach the required capacity for the nightly

batch job, resulting in an unnecessary scaling-up period before the peak is reached. Since the peak capacity
and the start time are consistent every night, a predictable scaling pattern exists.
Scheduled scaling allows you to predefine scaling actions that occur at specific times. By configuring a
scheduled action to increase the capacity of the Auto Scaling group to the required compute level at 1 AM,
the architect can ensure that the desired capacity is available immediately when the batch jobs start. This
eliminates the gradual scaling process and the unnecessary 1-hour scale-up period. After the batch job
finishes, another scheduled action can scale the group down, optimizing cost.

**Option A** (increasing the minimum capacity) is not cost-effective. It will keep more instances running
continuously, even when they are not needed, leading to unnecessary expenses.

**Option B** (increasing the maximum capacity) only allows the Auto Scaling group to scale up higher if needed,
but it does not guarantee a faster initial scaling to the desired level. The gradual scaling issue would persist.

**Option D** (changing the scaling policy) would affect the responsiveness of scaling events based on real-time
metrics (CPU utilization, etc.), which are not directly related to the predictable nightly demand. Furthermore, it
doesn't address the specific timing requirement. It might make the scaling more aggressive but doesn't
guarantee the capacity will be available exactly at 1 AM.

Therefore, scheduled scaling provides the most cost-effective and precise solution to address the consistent
and time-bound scaling needs of the nightly batch job. It leverages the predictability of the workload to
ensure resources are available exactly when needed and are released when no longer required.
Further research:
AWS Auto Scaling Scheduled Actions:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html
AWS Auto Scaling Concepts:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html

---

## Question 272

**Answer:** **B**

**Explanation:**

The correct solution is to configure an Amazon CloudFront distribution with the Application Load Balancer
(ALB) as the origin and set the cache behavior settings to cache based on the Accept-Language request header
(**Option B**).

Here's why:
CloudFront for Global Content Delivery: CloudFront is AWS's Content Delivery Network (CDN). It caches
content at edge locations around the world, reducing latency for users regardless of their geographic
location. This directly addresses the requirement of serving requests quickly and efficiently worldwide
without recreating the architecture in multiple regions. https://aws.amazon.com/cloudfront/
ALB as Origin: The existing website architecture utilizes an ALB. Configuring CloudFront with the ALB as the
origin allows CloudFront to cache the dynamic content generated by the EC2 instances behind the ALB. This
avoids the need for significant architectural changes.
Accept-Language Header Caching: The Accept-Language header in an HTTP request specifies the user's
preferred language. By configuring CloudFront to cache based on this header, the CDN can store different
versions of the website's content for each language. When a user requests the website, CloudFront will serve
the cached version corresponding to their preferred language, ensuring a localized experience.
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/content-based-config.html
Let's analyze why the other options are less suitable:

**Option A** (S3 and CloudFront): Replacing the existing dynamic website architecture with a static website
served from S3 is not practical, as the website is defined as dynamic. S3 is ideal for static content but not for
dynamic content requiring server-side processing.

**Option C** (API Gateway and ALB): API Gateway is generally used for managing APIs, not for caching dynamic
website content. While it can be configured for caching, CloudFront is a more efficient and purpose-built
solution for content delivery and caching for web applications. Furthermore, introducing API Gateway adds
unnecessary complexity.

**Option D** (EC2 cache servers and Route 53): Launching EC2 instances in each region for caching is
effectively recreating the architecture in multiple regions, which the company wants to avoid. While Route 53
geolocation routing would direct users to the closest cache server, this approach is more complex, costly, and
difficult to manage than using a CDN like CloudFront.

In summary, **Option B** leverages CloudFront's global CDN capabilities and the Accept-Language header to
deliver localized content efficiently without requiring significant architectural changes or regional replication.

---

## Question 273

**Answer:** **B**

**Explanation:**

The question requires a DR strategy with the lowest RTO for a rapidly growing e-commerce company. The
database must be up-to-date with minimal latency in the DR region, and other infrastructure should run at
reduced capacity, scaling up as needed.

**Option B**, "Use an Amazon Aurora global database with a warm standby deployment," offers the best solution.
Aurora Global Database replicates data with low latency across AWS Regions, ensuring the DR database is
near real-time synchronized, minimizing data loss and RTO. The warm standby approach involves having the
DR infrastructure running at a reduced capacity, ready to scale up quickly.

**Option A**, using Aurora Global Database with a pilot light approach, would require more time to bring up all
resources, increasing the RTO compared to a warm standby. While Aurora Global Database ensures low
latency replication, the pilot light method necessitates provisioning and configuring resources during a
disaster, increasing downtime.
Options C and D, using Amazon RDS Multi-AZ DB instances, do not offer cross-region replication like Aurora
Global Database. RDS Multi-AZ provides high availability within a single region but does not provide a quick
DR solution to a separate region with minimal latency. Therefore, they would have significantly higher RTOs
than option B.

In summary, Aurora Global Database provides continuous replication with minimal latency across regions, and
a warm standby configuration minimizes the time required to recover in the DR region, achieving the lowest
RTO compared to other options.
Amazon Aurora Global Databases: https://aws.amazon.com/rds/aurora/global-database/AWS Disaster
Recovery Options: https://d1.awsstatic.com/whitepapers/aws-disaster-recovery.pdf

---

## Question 274

**Answer:** **B**

**Explanation:**

**Option B** is the most operationally efficient DR solution that meets the requirements. Here's why:
AMIs for Backup: Creating AMIs provides a consistent and point-in-time backup of the EC2 instances,
including the OS, applications, and data. This facilitates a quicker recovery process compared to rebuilding
servers from scratch.
Cross-Region Replication: Copying AMIs to a secondary AWS Region addresses the disaster recovery aspect

by ensuring that the necessary server images are available in a separate geographical location in case the
primary region becomes unavailable.
Infrastructure as Code (IaC) with CloudFormation: AWS CloudFormation allows defining and managing
infrastructure as code. This enables automating the deployment of EC2 instances and other necessary AWS
resources in the secondary region during a disaster recovery event. The automated nature helps achieve the
4-hour RTO target.
Cost Efficiency: This approach minimizes resource utilization during normal operations. The infrastructure in
the secondary region remains inactive until a disaster event occurs. Only storage costs for the replicated AMIs
and CloudFormation templates incur during normal operation.
Operational Efficiency: CloudFormation provides version control, rollback capabilities, and dependency
management, making it significantly more operationally efficient than using custom scripts and Lambda
functions.

**Option A** is less operationally efficient because Lambda and custom scripts require more management and
are less robust than using CloudFormation's infrastructure-as-code approach.

**Option C** involves launching and maintaining EC2 instances in the secondary region at all times, which is the
most costly and inefficient approach, especially when the disaster event is not happening. It goes against the
requirement of using the fewest possible AWS resources during normal operations.

**Option D** only uses a secondary Availability Zone within the same region. This does not fully address disaster
recovery since an entire region outage would affect both availability zones.
Supporting Links:
AWS CloudFormation: https://aws.amazon.com/cloudformation/
Amazon Machine Images (AMIs): https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
Disaster Recovery with AWS: https://aws.amazon.com/disaster-recovery/

---

## Question 275

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best answer:
The problem is application slowdown during the morning rush due to EC2 Auto Scaling needing time to spin
up instances and handle the increased load. The goal is to improve initial responsiveness while minimizing
costs.
Why C is the best approach (Target Tracking Scaling with adjusted thresholds and cooldown):

Target tracking scaling: This is ideal for maintaining consistent performance. By targeting a specific metric
like CPU utilization, it dynamically adjusts capacity to meet demand, ensuring the application remains
responsive even during peak hours.
Lower CPU threshold: Triggering scaling at a lower CPU threshold ensures that new instances are launched
before the existing instances become overloaded, thus preventing the initial slowdown. This is proactive, not
reactive.
Decreased cooldown period: The cooldown period is the amount of time after a scaling activity completes
before another scaling activity can start. Reducing it allows the Auto Scaling group to react more quickly to
fluctuating demand, enabling a faster response to the morning load spike. This ensures resources are added
promptly when needed.
Cost-effectiveness: Target tracking only adds capacity when needed, unlike scheduled actions that might
over-provision resources even if demand doesn't fully materialize.

Why other options are less suitable:
A (Scheduled action setting desired capacity to 20): This approach doesn't account for actual load. If the
load isn't high enough to require 20 instances, resources are wasted. It's inflexible to unexpected variations in
demand.
B (Step Scaling with adjusted thresholds and cooldown): Step scaling is based on pre-defined steps. This
requires more effort to configure and fine-tune than target tracking, and it's less adaptive to dynamic load
changes. Although it uses a threshold and reduced cooldown, it is not as dynamically responsive as target
tracking which continuously adjusts based on the tracked metric.
D (Scheduled action setting minimum and maximum capacity to 20): This is the most expensive option
because it maintains 20 instances regardless of actual load. This eliminates cost savings during off-peak
hours when only a few instances are needed. It's also unnecessarily restrictive, preventing the Auto Scaling
group from exceeding 20 instances if needed in unforeseen circumstances.
In summary: Target tracking with a lower CPU threshold and decreased cooldown provides a balanced
approach, proactively scaling up resources to maintain performance, reacting quickly to demand changes,
and avoiding unnecessary costs during off-peak hours.

---

## Question 276

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's why:

**A.** Configure storage Auto Scaling on the RDS for Oracle instance: RDS Storage Auto Scaling allows the
database to automatically scale its storage capacity in response to growing data needs. This directly
addresses the problem of the RDS instance running out of storage due to increasing traffic and data. Since
the company predicts traffic will increase, proactive storage scaling is essential. This is a crucial consideration
for relational databases where running out of storage can lead to application downtime and data loss.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscalin

**D.** Configure the Auto Scaling group to use the average CPU as the scaling metric: Using average CPU
utilization as a scaling metric for the Auto Scaling group allows new EC2 instances to be launched
automatically when the existing instances are under heavy load. This addresses the problem of EC2 instances
becoming overloaded due to increasing traffic. Monitoring CPU utilization provides a clear indication of
resource consumption and allows the application to scale horizontally based on demand. This ensures the
application remains responsive and available as traffic increases.
https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-capacity.html

Why other options are incorrect:

**B.** Migrate the database to Amazon Aurora to use Auto Scaling storage: While Aurora does offer autoscaling storage, migrating a database, especially one using Oracle-specific PL/SQL, is a significant
undertaking. It involves compatibility assessments, code changes, and data migration, which introduces risk
and complexity. Given the existing infrastructure's reliance on Oracle-specific functionality, migrating to
Aurora might not be the most efficient or immediate solution for the current scaling issue. It's a major
architectural change better suited for a long-term strategic decision rather than a quick fix to the overload
problem.

**C.** Configure an alarm on the RDS for Oracle instance for low free storage space: While configuring an alarm
is a good practice for monitoring, it only provides notification when the storage is running low. It doesn't
automatically scale the storage. It requires manual intervention to increase storage, which is not ideal for
automatically scaling for unpredictable traffic.

**E.** Configure the Auto Scaling group to use the average free memory as the scaling metric: While monitoring
memory usage is important, CPU utilization is generally a better metric for scaling web application tiers. Low
free memory can indicate an issue, but high CPU utilization directly reflects the workload demand on the
instances. Therefore, CPU is often the more responsive metric for scaling the application tier in this scenario.

---

## Question 277

**Answer:** **D**

**Explanation:**

The most cost-effective solution for storing and processing video content in this scenario is option D: using
Amazon S3 for storage and temporarily moving files to an EBS volume attached to the processing server.

Here's why:
Cost of EFS Standard: EFS Standard is designed for active file system workloads requiring frequent access.
As the service's popularity increases, the storage costs with EFS Standard become prohibitively expensive
because it charges based on the amount of storage used, regardless of access frequency.
S3 for Cost-Effectiveness: Amazon S3 offers various storage classes optimized for different access patterns.
In this case, the infrequent access nature of the video content once processed makes S3 a more costeffective primary storage solution. S3's storage classes like S3 Standard-IA (Infrequent Access) or S3 Glacier
(for archival) offer significantly lower storage costs than EFS Standard.
EBS for Processing: Amazon EBS volumes provide block storage optimized for EC2 instances. Temporarily
moving the video files to an EBS volume attached to the processing server allows for efficient processing due
to its low latency and high throughput. EBS volumes offer consistent performance for video transcoding
tasks.
Workflow Optimization: The workflow would involve retrieving the video file from S3 to the EBS volume,
performing the transcoding on the EC2 instance, and then potentially deleting the file from EBS (if no longer
needed) after transcoding.
AWS Storage Gateway limitations: AWS Storage Gateway is primarily used for hybrid cloud scenarios to
integrate on-premises storage with AWS. While it can connect to S3, using it as the primary storage solution
is not ideal in this completely cloud-based architecture. Both file and volume gateways have limitations that
make them less suitable than a direct S3 to EC2 to EBS workflow.

**Option C** is suboptimal: Storing everything in EFS and then moving to EBS after processing doesn't address
the core cost issue. EFS would still be the primary, expensive storage location.

Therefore, leveraging S3 for cost-effective archival storage and EBS for temporary, high-performance
processing offers the optimal balance of cost and performance.

---

## Question 278

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Let's break down why:

**B:** Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every
month. DynamoDB is a NoSQL database that can store hierarchical data using techniques like adjacency lists
or materialized paths. It provides extremely low-latency responses for high-traffic queries, meeting the
primary requirement. While DynamoDB isn't inherently hierarchical, the data can be structured hierarchically
within the NoSQL schema. Exporting the data to S3 monthly allows for the subsequent analysis and
monitoring.

**E:** Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send
monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription. Amazon
Macie is designed to discover and protect sensitive data stored in S3. By configuring it for the AWS account
and integrating it with EventBridge, you can trigger an SNS notification when Macie identifies financial
information. This meets the requirement of receiving monthly email notifications about the presence of
sensitive data. Macie scanning in S3 (where the exported DynamoDB data resides) can trigger SNS
notifications via EventBridge, aligning with the monthly requirement.

Why other options are incorrect:

**A:** Redshift is a data warehouse optimized for analytical queries, not low-latency transactional reads. Storing
hierarchical data and querying it for real-time access is not its strength.

**C:** While configuring Macie is useful, directly sending events to Lambda is not a notification mechanism for
monthly email messages to humans without additional steps, like implementing an email service within
Lambda. Lambda also has execution time limits that might cause it to fail for large datasets. Additionally,
integrating macie directly with event bridge would create notifications as soon as the data is stored in s3.

**D:** Athena is suitable for analyzing data in S3, but it's not needed for the initial storage and retrieval of
employee data. QuickSight is a visualization tool, not a direct solution for detecting financial
information. Athena + QuickSight do not provide any mechanism to alert when sensitive financial information
appears in the employee data. This requires some automated scanning and notification service like Macie and
SNS.

---

## Question 279

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
AWS Backup is the ideal service for centrally managing and automating backups across AWS services,
including DynamoDB. It allows you to define backup plans with schedules and retention policies.
A directly addresses all requirements:
Monthly Backups: An AWS Backup plan can be configured to run on the first day of each month.
Availability for 6 Months: The lifecycle policy allows for transitioning backups to cold storage after 6 months,
ensuring backups are still available for restore but at a lower storage cost.
Retention for 7 Years: The retention period can be set to 7 years, satisfying the long-term retention
requirement.
Why the other options are less suitable:

**B:** While you can create DynamoDB on-demand backups, transitioning them directly to S3 Glacier Flexible
Retrieval is not the most efficient way, and the AWS Backup service has better options. Backup should be
maintained in the AWS Backup vault for better integrity.
C and D: While automating on-demand backups via the AWS SDK or CLI and EventBridge is possible, it
requires more manual scripting and management compared to the AWS Backup service. Furthermore, the
command/scripts do not transition backups to cold storage and delete old backups, which is less ideal than
using the AWS Backup. The second scripts will also incur the cost of development, running, and maintaining.
Using AWS Backup centralizes the backup process and ensures that compliance requirements are met in an
automated and auditable manner. It simplifies lifecycle management and retention, reducing the operational
overhead.
Supporting Documentation:
AWS Backup: https://aws.amazon.com/backup/
DynamoDB Backup and Restore:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html
AWS Backup Plans: https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html

---

## Question 280

**Answer:** **B**

**Explanation:**

The correct solution is to use Amazon Athena for analyzing CloudFront logs in S3 and Amazon QuickSight for
visualization.

Here's why:
Amazon Athena: Athena is a serverless, interactive query service that makes it easy to analyze data in
Amazon S3 using standard SQL. CloudFront logs are stored as files in S3, making Athena a natural fit for
querying and analyzing them directly. You can define a schema on the log files and then use SQL to extract
insights, filter data, and perform aggregations. https://aws.amazon.com/athena/
Amazon QuickSight: QuickSight is a fast, cloud-powered business intelligence (BI) service that makes it easy
to build visualizations, perform ad-hoc analysis, and get business insights from your data. It integrates
seamlessly with Athena and can directly visualize the results of Athena queries.
https://aws.amazon.com/quicksight/

Why other options are incorrect:
DynamoDB: DynamoDB is a NoSQL database designed for high-performance key-value and document
storage. It's not well-suited for directly querying log files stored in S3. CloudFront logs are typically stored in
a flat file format. Loading log data into DynamoDB just for analysis would be an unnecessary complexity.
AWS Glue: While Glue is a useful ETL (extract, transform, load) service, it is not the ideal choice for visualizing
data. Glue excels at preparing data for analysis, but Athena and QuickSight provide a more direct path for
querying and visualizing data stored in S3. Glue's primary purpose is data cataloging, transformation, and job
orchestration, rather than data visualization.
Combining Athena and Glue vs. Athena and Quicksight: Athena handles the query execution on the log files
in S3 and QuickSight specializes in visualization. This combination offers a more seamless experience for the
stated objective. Using Glue to prepare for visualizations adds unnecessary complexity.

---

## Question 281

**Answer:** **A**

**Explanation:**

The requirement is to achieve an RPO of less than 1 second for an Amazon RDS for PostgreSQL database. This
necessitates a solution that minimizes data loss in the event of a failure.

**Option A**, enabling a Multi-AZ deployment for the RDS instance, provides synchronous replication to a
standby instance in a different Availability Zone. In case of a failure in the primary instance, RDS
automatically fails over to the standby instance. Because the replication is synchronous, the standby has near
real-time data, minimizing data loss to only what was in-flight at the time of the failure. This fulfills the <1
second RPO.

**Option B**, enabling auto-scaling, addresses performance and scalability, not data recovery and RPO.

**Option C**, using read replicas, provides asynchronous replication. While read replicas can improve read
performance, they do not guarantee minimal data loss. In the event of a primary instance failure, data may be
lost that hasn't yet been replicated to the read replicas. This violates the <1 second RPO.

**Option D**, using AWS DMS CDC, also employs asynchronous replication. While DMS can capture changes in
near real-time, it involves more overhead and complexity than Multi-AZ for simple failover scenarios.
Additionally, the lag between the primary database and the DMS target (another database) can easily exceed
1 second, failing the RPO requirement. It also introduces more points of failure.

Therefore, Multi-AZ offers the simplest and most effective way to meet the <1 second RPO requirement
through synchronous replication and automatic failover.

---

## Question 282

**Answer:** **B**

**Explanation:**

The correct answer is B. Configure the security group for the EC2 instances to only allow traffic that comes
from the security group for the ALB.

Here's a detailed justification:
The requirement is to restrict inbound traffic to the EC2 instances in the private subnet only from the ALB.
This means blocking all other sources, both internal and external. Security Groups act as virtual firewalls at
the instance level.

**Option B** directly addresses this requirement. By configuring the EC2 instances' security group to only allow
inbound traffic from the ALB's security group, you ensure that only the ALB can reach the instances. This
leverages Security Group source rules. If the ALB is compromised, or if an attacker manages to launch
resources inside the same VPC, they still won't be able to directly reach the EC2 instances unless they are
associated with the ALB's Security Group. This prevents unauthorized access from other sources within or
outside the private subnet.

**Option A** is incorrect because routing traffic from the internet to the private IP addresses of EC2 instances is
not possible without a NAT gateway or similar setup, which would defeat the requirement of blocking external
access. Directly routing internet traffic to private IPs is a security risk and not the intended function.

**Option C** contradicts the requirement. Moving EC2 instances into a public subnet and assigning Elastic IPs
would expose them directly to the internet, which violates the restriction of preventing access from any other
source outside the ALB. Elastic IPs are typically used for resources needing direct internet accessibility,
which we want to avoid here.

**Option D** is incorrect because allowing any TCP traffic on any port for the ALB's security group would not
restrict access to the EC2 instances. It will widen the attack surface on ALB, leading to security
vulnerabilities. It doesn't address the core requirement of isolating the EC2 instances to only the ALB. It also
potentially allows other sources within the VPC to communicate with the ALB unnecessarily.
In essence, Security Groups are the ideal tool for implementing fine-grained access control at the instance
level in AWS, and referencing other Security Groups in your Security Group rules is a security best practice.
Further reading:
AWS Security Groups
Controlling Traffic to Resources Using Security Groups

---

## Question 283

**Answer:** **D**

**Explanation:**

The correct solution is D because it addresses the core requirements of providing both NFS and SMB file
sharing capabilities without requiring code changes to the simulation and visualization applications.

Here's a detailed justification:
Requirement 1: Linux NFS Share: The simulation application requires an NFS share. Amazon FSx for NetApp
ONTAP supports NFS file shares, allowing the Linux EC2 instances running the simulation application to write
data to it. https://aws.amazon.com/fsx/netapp-ontap/features/
Requirement 2: Windows SMB File System: The visualization application requires an SMB file system.
Amazon FSx for NetApp ONTAP supports SMB file shares, enabling the Windows EC2 instances running the
visualization application to read data from it. https://aws.amazon.com/fsx/netapp-ontap/features/
Requirement 3: No Code Changes: By using FSx for NetApp ONTAP, the applications can continue to use
their existing file access patterns (NFS and SMB) without requiring any code modifications.
Requirement 4: Eliminate Data Duplication: Using a single FSx for NetApp ONTAP file system eliminates the
need for two synchronized file systems, thus reducing data duplication and improving resource efficiency.
Let's examine why the other options are less suitable:
A (Lambda & S3): While S3 can store data, it doesn't natively support NFS or SMB file sharing protocols. This
would require significant code changes to both applications to interact with S3's object storage API instead of
file systems.
B (ECS & FSx File Gateway): FSx File Gateway caches data locally and uploads it to S3. The visualization
application cannot access the data from the Linux NFS share directly via SMB.
C (EC2 & SQS): SQS is a message queuing service, not a file system. It cannot directly replace the NFS and
SMB file sharing requirements of the applications. It would necessitate significant code changes to transfer
simulation data as messages and reassemble them for visualization.

In summary, solution D using Amazon FSx for NetApp ONTAP provides the most seamless migration path with
minimal disruption and no code changes, while meeting all the specified requirements for NFS and SMB file
sharing.

---

## Question 284

**Answer:** **B**

**Explanation:**

The correct answer is B. Create a report in Cost Explorer and download the report. Here's why:
Cost Explorer is designed specifically for analyzing AWS costs and usage. It allows you to generate detailed
reports, filter them by various dimensions (including users through tags), and download the data. This aligns
directly with the requirement of obtaining a report of AWS billed items listed by user for budget planning.
Cost Explorer provides a user-friendly interface and built-in functionality for this purpose.

**Option A**, using Amazon Athena, would require setting up a complex data pipeline involving AWS Cost and
Usage Reports (CUR), configuring S3 buckets, and writing SQL queries. While powerful, it's an unnecessarily
complex solution for a simple reporting requirement. It would be overkill to use Athena.

**Option C**, accessing the bill details from the billing dashboard and downloading the bill, would provide a
detailed bill, but it wouldn't readily offer the granularity needed to easily generate a report organized by user.
Extracting user-specific data from the raw bill would involve significant manual processing or custom
scripting, which isn't efficient.

**Option D**, modifying a cost budget in AWS Budgets to alert with Amazon SES, focuses on setting up alerts
when costs exceed a certain threshold. It does not generate a report of billed items listed by user, which is the
core requirement. Budgets help with notifications, not reporting on past usage patterns.
Cost Explorer offers the easiest and most efficient way to generate the required report directly within the
AWS console and download the results. Using Cost Explorer is the most optimized method.
https://aws.amazon.com/aws-cost-management/aws-cost-explorer/

---

## Question 285

**Answer:** **B**

**Explanation:**

The most cost-effective solution is B. Create an Amazon API Gateway endpoint with an AWS Lambda
backend that makes a call to Amazon Simple Email Service (Amazon SES).

Here's why:
Cost Efficiency: For fewer than 100 site visits per month, the "serverless" approach of API Gateway and

Lambda offers the lowest cost. Lambda functions are billed only for the compute time they consume, and API
Gateway has a free tier for low volumes. SES is also very cost-effective for sending emails.
Scalability and Management: API Gateway and Lambda automatically scale to handle traffic fluctuations
without requiring manual configuration. This removes the operational overhead of managing servers.
Serverless Architecture: This solution aligns with serverless architecture, which minimizes infrastructure
management and allows the company to focus on the contact form's functionality.
Alternatives Analysis:
A (ECS): Hosting a dynamic page in ECS involves container orchestration and persistent compute resources,
making it overkill and more expensive for the expected low traffic.
C (Lightsail): While Lightsail is simpler than EC2, it still involves a fixed monthly cost, even when the contact
form isn't being used. Using client-side scripting for the form's logic is not ideal for security or data
processing on the server-side. WorkMail is not well-suited for this use-case.
D (EC2 with LAMP): Running a t2.micro EC2 instance incurs a constant hourly cost, even if the contact form is
rarely used. LAMP stack administration also adds complexity.
In contrast, the API Gateway/Lambda/SES approach only charges when the form is submitted, making it the
most cost-effective and operationally efficient solution for this low-traffic scenario. This approach avoids the
cost of maintaining a dedicated server or virtual machine.

---

## Question 286

**Answer:** **C**

**Explanation:**

The correct solution is to invalidate the CloudFront cache. Here's why:
The problem states that the website updates are not reflected, despite successful deployments to S3. This
strongly suggests that CloudFront is serving cached versions of the website files. CloudFront caches content
at edge locations to improve latency and performance. While it eventually checks for updates from the origin
(S3 in this case), the Time To Live (TTL) setting determines how long content is cached before being

revalidated.
Invalidating the cache forces CloudFront to retrieve the latest version of the website files from the origin (S3).
This ensures that users see the most up-to-date content after the CI/CD pipeline has successfully deployed
the updates. There are several methods to invalidate the cache, including using the AWS Management
Console, AWS CLI, or CloudFront API. This is a common practice in CI/CD pipelines for static websites hosted
on S3 and fronted by CloudFront.

**Option A** (Application Load Balancer) is incorrect because it is primarily used for distributing traffic to
application servers, which is not the core issue here. The problem involves static content caching, not
application load balancing.

**Option B** (Amazon ElastiCache) is not relevant because the problem pertains to static website content served
through CloudFront, not the database layer. ElastiCache is used for caching database query results or other
dynamic data, not static assets.

**Option D** (AWS Certificate Manager) is unrelated to the caching issue. ACM is used for managing SSL/TLS
certificates for secure communication. While having a valid certificate is crucial, it doesn't address the
problem of outdated content being served from the CloudFront cache.

Therefore, invalidating the CloudFront cache is the most direct and effective solution to ensure that website
updates are immediately reflected to users.
Relevant Documentation:
Invalidating Files: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html
How CloudFront Delivers Content:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html

---

## Question 287

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution and why the other options are less suitable:
Why **Option B** is Correct: Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File
Server for file sharing between the tiers.

Complete Control: Hosting all three tiers on EC2 instances grants the company complete control over the
environment, including the SQL Server database. This is vital for utilizing specific features of SQL Server like
native backups and Data Quality Services, which may not be fully supported or accessible with a managed
service like Amazon RDS.
SQL Server Feature Compatibility: RDS for SQL Server offers a managed SQL Server instance but can have
limitations on certain administrative features. Native backups are fully supported with EC2-hosted SQL server
instances. https://aws.amazon.com/rds/sqlserver/
Windows Environment: The application is Windows-based. FSx for Windows File Server is a fully managed,
highly reliable, and scalable file storage solution built on Windows Server. It's natively compatible, offering
features like SMB protocol support and integration with Active Directory, which are likely required for the
application. https://aws.amazon.com/fsx/windows/
File Sharing Requirements: FSx for Windows File Server allows seamless file sharing between the
application, business, and database tiers due to its Windows-native nature.
Why Other Options are Incorrect:

**Option A**: Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing
between the tiers. FSx File Gateway is for on-premises access to FSx file shares. It does not make sense for
applications fully migrated to AWS.

**Option C**: Host the application tier and the business tier on Amazon EC2 instances. Host the database tier
on Amazon RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers. EFS is a
Linux-based file system and is not well-suited for sharing files in a native Windows environment. Additionally,
hosting the database on RDS might restrict access to SQL Server's native features.

**Option D**: Host the application tier and the business tier on Amazon EC2 instances. Host the database tier
on Amazon RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for
file sharing between the tiers. EBS volumes are block storage and not designed for file sharing between
multiple instances. While EBS can be attached to an EC2 instance, creating a shared file system requires
additional configuration (e.g., setting up NFS or SMB), adding complexity. Also, as with **Option C**, using RDS
limits SQL Server feature access.

In summary, **Option B** provides the best balance of control, compatibility, and ease of use for migrating a
Windows-based application to AWS while meeting the specific requirements for SQL Server features and file
sharing.

---

## Question 288

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS
file system on all web servers.

Here's a detailed justification:
The problem states that a Linux-based web server group needs to access files in a shared file store without
requiring application changes. This immediately suggests the need for a network file system that the existing
applications can use seamlessly.
Amazon EFS (Elastic File System) is a fully managed, scalable, elastic, cloud-native NFS (Network File
System) for Linux-based workloads. It can be mounted on multiple EC2 instances simultaneously, providing a
shared file system that behaves just like a local file system from the application's perspective. This fulfills the
requirement of not needing application changes. The web servers can access and modify files in the EFS file
system as if they were locally stored. EFS offers high availability and durability, making it a suitable choice for
production workloads.
Now, let's analyze why the other options are incorrect:

**A.** Create an Amazon S3 Standard bucket with access to the web servers. While S3 is excellent for object
storage, it's not a file system. Applications would need to be rewritten to use S3's APIs to interact with the
stored objects. This violates the "no application changes" constraint. S3 is also object storage and not
designed to act as a directly mounted file system for Linux web servers.

**B.** Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. CloudFront is a
content delivery network (CDN) designed for caching and distributing static content. While it uses S3 as an
origin, it doesn't provide a shared file system for the web servers to write to or directly access in a file system
manner. It's primarily for delivering static content to end-users, not for shared storage amongst web servers.
This also requires application changes.

**D.** Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the
EBS volume to all web servers. EBS volumes can only be attached to a single EC2 instance at a time, unless
using EBS Multi-Attach, which is only supported for specific instances and use cases (and typically requires
clustering knowledge). Mounting a single EBS volume to multiple web servers would be impossible without
complex configuration and potentially data corruption, defeating the purpose of a shared file system. It would
also introduce a single point of failure.

In summary, EFS directly addresses the problem of providing a shared file system accessible by multiple
Linux web servers without requiring any changes to the application code. EBS is single-instance attached
(without more specialized configurations), and S3/CloudFront involve object storage, requiring applicationlevel changes.

---

## Question 289

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most secure solution for granting an AWS Lambda
function read access to an Amazon S3 bucket in the same account:

**Option B** leverages IAM roles, which are the recommended way to grant permissions to AWS services like
Lambda. An IAM role is an identity that can be assumed by an AWS service, allowing it to make API requests
to other AWS services. By assigning an IAM role to the Lambda function, you provide it with temporary
security credentials without embedding long-term secrets (like access keys) within the code.
The IAM policy attached to the role specifically grants s3:GetObject (or s3:ListBucket if needed for listing
objects) permissions to the particular S3 bucket. This adheres to the principle of least privilege, granting only
the necessary access to the function. This means that the Lambda function can only perform read operations
on that specific bucket and nothing else.

**Option A**, using an S3 bucket policy, could technically grant access, but it's less flexible and harder to
manage, especially if you need to grant access to multiple Lambda functions or other services. Also, it makes
the bucket dependent on the function's needs, which violates separation of concerns.

**Option C**, embedding access keys in the code, is a major security risk. If the code is compromised (e.g.,
through a vulnerability or accidental exposure), the access keys could be used to compromise the entire AWS
account. Hardcoding credentials is a well-documented anti-pattern.

**Option D** is less secure than option B because it grants read access to all S3 buckets in the account. This
violates the principle of least privilege. The Lambda function only needs access to a specific S3 bucket. Giving
it broader access increases the potential blast radius if the function is compromised.

In summary, using an IAM role with a narrowly scoped IAM policy is the most secure and recommended
approach for granting permissions to AWS Lambda functions. It avoids hardcoding credentials, adheres to the
principle of least privilege, and simplifies permission management.

---

## Question 290

**Answer:** **C**

**Explanation:**

The correct answer is C. A mix of On-Demand Instances and Spot Instances.

Here's a detailed justification:
The company needs a cost-optimized solution for EC2 instances that scale with user demand without a longterm commitment. Let's analyze why each option is or isn't suitable:

**A.** Dedicated Instances only: Dedicated Instances are isolated at the hardware level, which incurs a higher
cost and doesn't directly contribute to cost optimization for fluctuating workloads. They're more suitable for
compliance or security requirements.

**B.** On-Demand Instances only: On-Demand Instances provide the flexibility to pay only for what you use and
are suitable for short-term, spiky, or unpredictable workloads where interruptions are not acceptable. While
flexible, they are more expensive than other options like Spot Instances.

**C.** A mix of On-Demand Instances and Spot Instances: This option offers the best balance between cost
savings and availability. On-Demand Instances can handle the baseline capacity and critical workload
components that cannot be interrupted. Spot Instances allow the company to bid on spare EC2 capacity,
offering significant cost savings (up to 90% compared to On-Demand). The Auto Scaling group can be
configured to launch Spot Instances when available and fall back to On-Demand Instances if Spot Instances
are terminated due to price fluctuations. This dynamic approach maximizes cost savings while maintaining
availability and scalability.

**D.** A mix of On-Demand Instances and Reserved Instances: Reserved Instances offer significant cost savings
compared to On-Demand, but they require a commitment of 1 or 3 years. Since the company wants to avoid
long-term commitments, Reserved Instances are not the ideal choice for the entire scaling infrastructure.
While some core baseline resources could be reserved, the auto-scaling portion is better served with spot and
on-demand.

Therefore, the combination of On-Demand Instances (for guaranteed capacity) and Spot Instances (for
opportunistic cost savings) allows the company to optimize costs without a long-term commitment, while
leveraging the Auto Scaling group's ability to dynamically adapt to user demand.

---

## Question 291

**Answer:** **AB**

**Explanation:**

The requirement is to secure streaming video content in S3 delivered via CloudFront, controlling access
without relying on cookies (due to limitations of some HTTP clients) and while accommodating users with
hardcoded URLs.

**A.** Signed Cookies: Incorrect. Signed cookies are used to control access to multiple restricted files. In this
case, a user is using a custom HTTP client that does not support cookies. Therefore, signed cookies can't meet
the requirement.

**B.** Signed URLs: Correct. Signed URLs allow time-limited access to individual S3 objects (through
CloudFront). Since some users have hardcoded URLs, creating signed URLs and distributing them to
authorized users before embedding them in applications allows access to restricted content. Each URL
contains an expiration timestamp. Therefore, signed URLs allow users access without the use of cookies.

**C.** AWS AppSync: Incorrect. AWS AppSync is a managed GraphQL service that can be used to build APIs. It's
not directly related to securing streaming video content in S3 through CloudFront using signed URLs and
does not help with users with existing hardcoded URLs.

**D.** JSON Web Token (JWT): Incorrect. JWTs are for authentication and authorization, but they require clientside handling to send the token in headers. Clients with hardcoded URLs and no cookie support can't easily
incorporate JWTs, as they likely cannot modify request headers.

**E.** AWS Secrets Manager: Incorrect. AWS Secrets Manager is used to store, retrieve, and manage secrets.
This is irrelevant to controlling access to content via CloudFront.

Therefore, the best combination of services and methods is using signed URLs. Signed URLs are the perfect
solution, as they are compatible with clients that do not support cookies and provide a secure way to access
the videos. Signed URLs can be used together with hardcoded URLs.

---

## Question 292

**Answer:** **AB**

**Explanation:**

Let's analyze each option to determine why A and B are the correct solutions.

**Option A**: This solution correctly leverages the Kinesis family of services for real-time data ingestion and
transformation. Kinesis Data Streams effectively handles the streaming data. Kinesis Data Analytics allows
for real-time data transformation using SQL. Kinesis Data Firehose delivers the transformed data to S3.
Athena then enables SQL queries directly on the data residing in S3. This approach aligns perfectly with the
requirements of real-time processing, transformation, and SQL querying.
https://aws.amazon.com/kinesis/data-analytics/ , https://aws.amazon.com/athena/

**Option B**: This option also fulfills the stated needs. Amazon MSK, a managed Kafka service, can ingest highvolume streaming data. AWS Glue provides a serverless ETL (Extract, Transform, Load) service that can
transform the data and write it to S3. Glue's ability to connect to various data stores makes it suitable for this
task. Athena can then be utilized to query the data within the S3 data lake. The combination of MSK, Glue, and
Athena is a common pattern for building data lakes and performing analytics. https://aws.amazon.com/msk/,
https://aws.amazon.com/glue/

Why other options are incorrect:

**Option C**: AWS DMS is primarily designed for database migrations, not real-time streaming data ingestion.
While EMR can transform data, it's generally an overkill for simple transformations that Kinesis Data Analytics
or Glue can handle more efficiently.

**Option D**: While MSK and Kinesis Data Analytics are valid components, the Amazon RDS query editor is
designed for querying relational databases (RDS), not data in S3. Athena is the appropriate tool for querying
data in S3 using SQL.

**Option E**: Similar to **Option D**, while Kinesis Data Streams, Glue, and Kinesis Data Firehose are suitable
components, the Amazon RDS query editor is not the right tool to query data in S3. Athena should be used
instead.

In summary, options A and B utilize appropriate AWS services to ingest real-time streaming data, transform it
efficiently, store it in S3, and then allow for SQL queries on the transformed data through Athena. Options C,
D, and E include inappropriate services, such as DMS or the RDS query editor, for the specific requirements of
the data platform.

---

## Question 293

**Answer:** **D**

**Explanation:**

The correct solution is D. Use AWS Storage Gateway and configure a stored volume gateway. Run the
Storage Gateway software appliance on premises and map the gateway storage volumes to on-premises
storage. Mount the gateway storage volumes to provide local access to the data.

Here's a detailed justification:
The scenario requires maintaining local access to data while also backing it up to AWS automatically and
securely. AWS Storage Gateway is designed precisely for this hybrid cloud use case, bridging the gap
between on-premises environments and AWS storage services.
A stored volume gateway is the most suitable configuration because it stores the entire dataset locally on
premises and asynchronously backs it up to AWS. This directly satisfies the requirement of maintaining local
access to all the data. Changes made locally are continuously and asynchronously replicated to AWS for
backup and disaster recovery purposes, ensuring data durability and security.
The Storage Gateway software appliance is deployed on-premises, connecting to your existing storage
infrastructure. You then create gateway storage volumes that map to your on-premises storage. These
volumes can be mounted to your applications, providing seamless access to the data. The gateway handles
the secure transfer of data to AWS.

**Option A** is incorrect because AWS Snowball is primarily a data migration tool, not a continuous backup
solution with local access after migration. Mounting the Snowball S3 endpoint directly is not a supported or
practical configuration for local access.

**Option B** is also incorrect because Snowball Edge, while having some compute capabilities, is still primarily a
data migration and edge computing device. Its file interface is designed for specific edge workloads, not for
serving as a primary local storage solution backed up to AWS.

**Option C**, using a cached volume gateway, is not ideal because it only caches a percentage of the data locally.
This means not all data is readily available on-premises, violating the requirement for local access to all data.
It prioritizes frequently accessed data for local caching, but the less frequently accessed data resides
primarily in AWS.

In summary, the stored volume gateway configuration of AWS Storage Gateway provides a robust and secure
hybrid cloud solution that maintains local data access while seamlessly backing up data to AWS.
Here are some authoritative links for further research:
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
Stored Volumes: https://docs.aws.amazon.com/storagegateway/latest/userguide/stored-volumes.html

---

## Question 294

**Answer:** **B**

**Explanation:**

The correct answer is B, setting up a gateway VPC endpoint for Amazon S3 in the VPC. Here's why:
A gateway VPC endpoint allows resources within your VPC, such as EC2 instances, to privately access
Amazon S3 without requiring internet access or using public IPs. This ensures that all traffic remains within
the AWS network. A gateway endpoint is a virtual device that is horizontally scaled, redundant, and highly
available. It allows communication between your VPC and S3 using AWS's internal network.

**Option A**, creating a private hosted zone in Route 53, is used for internal DNS resolution within your VPC.
While important for naming and discovery, it doesn't establish a private connection to S3; EC2 instances
would still need a way to reach S3's public endpoints, potentially via the internet.

**Option C**, using a NAT gateway, allows EC2 instances without public IPs to initiate outbound internet traffic.
This is the opposite of the requirement, as it forces traffic to traverse the internet.

**Option D**, establishing an AWS Site-to-Site VPN connection to the S3 bucket is not applicable. S3 is a service
and doesn't reside in a VPC to connect to via VPN. A Site-to-Site VPN is used to connect your on-premises
network to a VPC. Connecting to S3 via VPN is neither possible nor the correct approach.
VPC endpoints are the recommended and most efficient way to provide private connectivity to AWS services
like S3. They offer improved security, reduced latency, and lower costs by eliminating internet traffic.
Further research:
AWS VPC Endpoints Documentation: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
AWS Gateway Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html

---

## Question 295

**Answer:** **B**

**Explanation:**

The most operationally efficient solution is B. Store the data in an Amazon S3 bucket. Process and transform
the data by using S3 Object Lambda before returning the data to the requesting application.

Here's why:
S3 Object Lambda: S3 Object Lambda allows you to add your own code to Amazon S3 GET requests to
modify and process data as it is being retrieved from S3. This means data transformation happens on-the-fly,
without the need to store multiple transformed copies of the data. https://aws.amazon.com/s3/object-lambda/
Centralized Data Storage: This solution centralizes the customer data in a single S3 bucket, simplifying data
governance and management.
Reduced Storage Costs: Avoiding the creation of multiple datasets minimizes storage costs compared to
options C and D.
Least Operational Overhead: S3 Object Lambda simplifies data transformation compared to managing
separate data transformation pipelines and storage for each application. The code within the S3 Object
Lambda can identify the requesting application and apply the appropriate transformation.
Data Security: By removing PII using S3 Object Lambda before it reaches the two applications that do not
need it, the overall security posture is improved.
Let's analyze why the other options are less optimal:

**A.** DynamoDB with a Proxy Application Layer: While feasible, a proxy application layer adds operational
complexity and latency. Managing and scaling the proxy layer introduces extra overhead. DynamoDB is also
more expensive for large-scale storage compared to S3.

**C.** Separate S3 Buckets: Storing three copies of the data (one original, two transformed) increases storage
costs and complicates data synchronization and updates. Managing data consistency across multiple buckets
adds overhead.

**D.** Separate DynamoDB Tables: Similar to option C, this approach multiplies storage costs and management
overhead, and the cost of DynamoDB is already high. DynamoDB is best used for key-value queries and not
suited for batch processing of data.

In summary, S3 Object Lambda offers a serverless and cost-effective way to transform data on-the-fly as it is
accessed, minimizing operational overhead and ensuring that only authorized applications have access to the
complete dataset.

---

## Question 296

**Answer:** **D**

**Explanation:**

The correct answer is D, 10.0.1.0/24. Let's break down why.
The core requirement is creating a new VPC that can peer with the existing development VPC
(192.168.0.0/24). A fundamental rule for VPC peering is that the CIDR blocks of the peered VPCs cannot
overlap. Overlapping CIDR blocks would lead to routing conflicts and prevent proper communication between
the VPCs.

**Option B** (192.168.0.0/24) is immediately incorrect because it's the same CIDR block as the development VPC,
causing a direct overlap.
Options A (10.0.1.0/32) and C (192.168.1.0/32) are technically valid CIDR blocks. However, a /32 CIDR block
represents a single IP address. While a VPC can be created with a /32 CIDR, it's not practically useful,
particularly in the context of a real-world application where multiple EC2 instances and other resources need
to communicate within the VPC. A /32 block is effectively useless for hosting an application. The question asks
for the smallest CIDR block that meets the requirements. Meeting the requirements implies that the VPC is
practically usable.

**Option D** (10.0.1.0/24) provides a non-overlapping CIDR block with the development VPC (192.168.0.0/24). It
also gives a usable address space. A /24 CIDR block provides 256 addresses (251 usable, considering network
and broadcast addresses) that is a more reasonable and useful size for a VPC. It doesn't overlap with the
existing VPC's address space and offers enough IPs to host resources within the peered VPC. It is also a
private IP address block making it a valid choice.

In summary, while technically any non-overlapping CIDR would allow for peering, the /32 options are not
practical for hosting resources. **Option D** is the smallest usable and valid CIDR block that enables VPC peering
without overlapping address spaces.
Relevant documentation:
AWS VPC Peering: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
VPC CIDR Blocks: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html

---

## Question 297

**Answer:** **B**

**Explanation:**

The correct answer is B because it uses EC2 Auto Scaling with a target tracking scaling policy, a common and
efficient way to manage application scalability based on a metric like CPU utilization. Here's a breakdown:
EC2 Auto Scaling Group (ASG): An ASG automatically adjusts the number of EC2 instances in your
application based on demand. It maintains a desired capacity and can scale out (add instances) when demand
increases and scale in (remove instances) when demand decreases. This directly addresses the need for
automated scalability.
ALB Integration: Integrating the ASG with the existing Application Load Balancer (ALB) ensures that traffic is
automatically distributed to newly launched instances by the ASG and removed from terminated instances.
The ASG automatically registers and deregisters instances from the target group.
Target Tracking Scaling Policy: This policy type is ideal for maintaining a specified target value for a metric.
In this case, it uses ASGAverageCPUUtilization. The ASG automatically adjusts the number of instances to
keep the average CPU utilization of the group around 50%.
Minimum, Desired, and Maximum Instances: These parameters define the boundaries of the scaling. A
minimum of 2 ensures that the application remains available even during low traffic. A maximum of 6 limits
the costs and prevents over-provisioning. The desired capacity sets the initial number of instances.
Cost Optimization: By automatically scaling based on CPU utilization, the solution only uses the required
resources, minimizing costs when the average CPU utilization is low. When surges occur, the ASG quickly
adds instances to maintain performance, preventing performance degradation.
Let's examine why the other options are less suitable:

**A:** Using a CloudWatch alarm and Lambda function to terminate instances when CPU utilization is low is a
scale-in approach but does not handle scaling out to address surges. Furthermore, terminating instances
based on low CPU alone could lead to service disruptions if demand suddenly spikes.

**C:** Creating an ASG without a scaling policy only provides automatic instance replacement in case of failure. It
does not automatically adjust the number of instances based on CPU utilization. It only uses the number of
instances specified.

**D:** Using CloudWatch alarms to send email notifications for manual intervention is not an automated solution.
Manual intervention is time-consuming and can lead to delays in scaling, resulting in performance issues
during surges.

In summary, option B provides the most automated, cost-effective, and reliable solution for scaling the
application based on CPU utilization, ensuring it can handle surges while optimizing resource usage during
periods of low demand.

---

## Question 298

**Answer:** **C**

**Explanation:**

Here's a breakdown of why option C is the correct solution for achieving high availability in the given scenario:
The core issue is the single point of failure within a single Availability Zone (AZ). To enhance availability,
resources need to be distributed across multiple AZs. The EC2 instances must reside in multiple AZs to
continue serving requests if one AZ fails. This requires creating subnets within each desired AZ. The Auto
Scaling group should then be configured to launch instances into these different subnets, ensuring a
distribution across the AZs. This provides redundancy for the application tier.
Critically, for the database tier's availability, Multi-AZ deployment is the key. RDS Multi-AZ creates a standby
replica of the database in another AZ. In case of a failure in the primary AZ, RDS automatically fails over to the
standby replica, minimizing downtime. Simply configuring connections to each network (as in options A and B)
doesn't provide automated failover or replication. Extending a single subnet across multiple AZs (as in options
B and D) is not a standard or recommended practice; subnets are confined to a single AZ. Furthermore, the
Auto Scaling Group must be configured to launch instances into distinct subnets that exist in different
Availability Zones to ensure proper distribution and high availability.

Therefore, the complete solution involves:

1. Creating separate subnets within each AZ.

2. Configuring the Auto Scaling group to distribute EC2 instances across these AZ-specific subnets.

3. Enabling RDS Multi-AZ for automatic failover to a standby replica in another AZ.
This approach guarantees that if one AZ experiences an outage, the application can continue running from the
other AZ, with the database automatically failing over to the standby instance.
Here are some helpful links for further research:
Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html
Amazon EC2 Auto Scaling: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scalinggroups.html
Amazon VPC Subnets: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html

---

## Question 299

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, along with relevant concepts and links
for further research:
The research laboratory's requirements of sub-millisecond latencies and a minimum throughput of 6 GBps
necessitate a high-performance storage solution. Amazon FSx for Lustre, specifically with persistent SSD
storage, is designed for such workloads. Lustre is a parallel distributed file system optimized for speed and
throughput, commonly used in high-performance computing (HPC) environments. Using SSDs further
enhances the performance, delivering the required low latency.

**Option B** leverages Amazon S3 as a cost-effective and durable repository for the initial raw data. The FSx for
Lustre file system is then linked to the S3 bucket for efficient data ingestion. This import/export functionality
allows for a separation of storage tiers: S3 for cost-effective archiving and FSx for Lustre for active
processing. The EC2 instances mount the FSx for Lustre file system, enabling them to access and process the
data with the necessary performance.

**Option A** suggests using Amazon FSx for NetApp ONTAP. While ONTAP provides enterprise-grade features, it
typically doesn't match the raw performance of FSx for Lustre, especially concerning throughput-intensive
HPC workloads. Setting the tiering policy to ALL would further exacerbate the performance due to frequent
data movement between tiers.

**Option D** also uses FSx for NetApp ONTAP but sets the tiering policy to NONE. This would reduce the
likelihood of latency issues from tiering, but ONTAP still isn't optimized for the ultra-high throughput and low
latency required, making it a less ideal choice compared to Lustre.

**Option C** uses FSx for Lustre but with persistent HDD storage. HDDs cannot deliver the sub-millisecond
latencies demanded by the requirement. Though cheaper, using HDDs would be a performance bottleneck,
failing to meet the stated needs.

Therefore, the combination of S3 for storage, FSx for Lustre with persistent SSD storage for performance,
and the import/export functionality to transfer data from S3 to FSx for Lustre is the most appropriate and
cost-effective solution.
Key Concepts:

Amazon FSx for Lustre: High-performance, parallel file system designed for HPC workloads.
Amazon S3: Object storage service for scalability, data availability, security, and performance.
Persistent SSD vs. HDD: SSDs offer significantly lower latency and higher throughput compared to HDDs.
Import/Export Functionality: Data can be easily moved between S3 and FSx for Lustre.

---

## Question 300

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most cost-effective solution, along with supporting
concepts and links:
Justification for **Option C**:

**Option C** suggests migrating the application layer to Amazon EC2 Reserved Instances and the data storage
layer to Amazon Aurora Reserved Instances. This approach provides the best balance of cost efficiency and
performance for a 24/7 application with growing data storage needs.
Application Layer (EC2 Reserved Instances): The application runs constantly (24/7), making Reserved
Instances (RIs) the most cost-effective choice for the application layer. RIs offer a significant discount (up to
75%) compared to On-Demand Instances in exchange for a one- or three-year commitment. Since the
application is always running, the commitment ensures consistent usage and cost savings. Spot Instances are
unsuitable for 24/7 operations due to their potential for interruption.
Data Storage Layer (Amazon Aurora Reserved Instances): Amazon Aurora is a fully managed, MySQL- and
PostgreSQL-compatible relational database engine. Given the application's growing database storage needs,
Aurora is a suitable choice. The use of Reserved Instances for Aurora instances aligns with the constant
operation of the application and offers similar cost benefits to EC2 RIs. Aurora also provides built-in
scalability to handle the increasing data volume. RDS On-Demand Instances, while simpler, are less costeffective for long-term, continuous use than reserved instances.
Why Other Options Are Less Suitable:

**Option A** (EC2 Spot, S3): Spot Instances are unreliable for 24/7 applications due to potential interruptions.

Amazon S3 is object storage; it's not a relational database and unsuitable for storing transactional application
data.

**Option B** (EC2 Reserved, RDS On-Demand): While EC2 Reserved Instances are a good choice for the
application layer, RDS On-Demand Instances are less cost-effective for a database that needs to run
constantly compared to reserved instances.

**Option D** (EC2 On-Demand, RDS Reserved): This reverses the cost optimization. On-Demand instances are
expensive for 24/7 application runtime, while reserved instances should be applied to the application.
Key Concepts:
Amazon EC2 Instance Purchasing Options: Understanding the trade-offs between On-Demand, Reserved,
and Spot Instances is crucial for cost optimization.
Amazon Aurora: A fully managed, high-performance relational database service. It's a good choice for
applications with growing database needs.
Cost Optimization in the Cloud: Choosing the appropriate AWS services and purchasing options to minimize
expenses while meeting performance and availability requirements.
Relational vs. Object storage: Understanding when to use RDS services like Aurora for structured data rather
than object storage like S3.

---

# Quick Answer Sheet

Question 251: B
Question 252: A
Question 253: C
Question 254: B
Question 255: D
Question 256: BD
Question 257: A
Question 258: D
Question 259: A
Question 260: D
Question 261: AC
Question 262: A
Question 263: AD
Question 264: D
Question 265: C
Question 266: A
Question 267: D
Question 268: B
Question 269: C
Question 270: A
Question 271: C
Question 272: B
Question 273: B
Question 274: B
Question 275: C
Question 276: AD
Question 277: D
Question 278: BE
Question 279: A
Question 280: B
Question 281: A
Question 282: B
Question 283: D
Question 284: B
Question 285: B
Question 286: C
Question 287: B
Question 288: C
Question 289: B
Question 290: C
Question 291: AB
Question 292: AB
Question 293: D
Question 294: B
Question 295: B
Question 296: D
Question 297: B
Question 298: C
Question 299: B
Question 300: C
