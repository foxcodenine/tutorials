# AWS SAA-C03 Practice Test: Questions 301-350

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 301

A university research laboratory needs to migrate 30 TB of data from an on-premises Windows file server to
Amazon FSx for Windows File Server. The laboratory has a 1 Gbps network link that many other departments in the
university share.
The laboratory wants to implement a data migration service that will maximize the performance of the data
transfer. However, the laboratory needs to be able to control the amount of bandwidth that the service uses to
minimize the impact on other departments. The data migration must take place within the next 5 days.
Which AWS solution will meet these requirements?

**A.** AWS Snowcone

**B.** Amazon FSx File Gateway

**C.** AWS DataSync

**D.** AWS Transfer Family

---

## Question 302

A company wants to create a mobile app that allows users to stream slow-motion video clips on their mobile
devices. Currently, the app captures video clips and uploads the video clips in raw format into an Amazon S3
bucket. The app retrieves these video clips directly from the S3 bucket. However, the videos are large in their raw
format.
Users are experiencing issues with buffering and playback on mobile devices. The company wants to implement
solutions to maximize the performance and scalability of the app while minimizing operational overhead.
Which combination of solutions will meet these requirements? (Choose two.)

**A.** Deploy Amazon CloudFront for content delivery and caching.

**B.** Use AWS DataSync to replicate the video files across AW'S Regions in other S3 buckets.

**C.** Use Amazon Elastic Transcoder to convert the video files to more appropriate formats.

**D.** Deploy an Auto Sealing group of Amazon EC2 instances in Local Zones for content delivery and caching.

**E.** Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to more appropriate
formats.

---

## Question 303

A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster
and is using the Fargate launch type for ECS tasks. The company is monitoring CPU and memory usage because it
is expecting high traffic to the application upon its launch. However, the company wants to reduce costs when
utilization decreases.
What should a solutions architect recommend?

**A.** Use Amazon EC2 Auto Scaling to scale at certain periods based on previous traffic patterns.

**B.** Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger an Amazon
CloudWatch alarm.

**C.** Use Amazon EC2 Auto Scaling with simple scaling policies to scale when ECS metric breaches trigger an
Amazon CloudWatch alarm.

**D.** Use AWS Application Auto Scaling with target tracking policies to scale when ECS metric breaches trigger
an Amazon CloudWatch alarm.

---

## Question 304

A company recently created a disaster recovery site in a different AWS Region. The company needs to transfer
large amounts of data back and forth between NFS file systems in the two Regions on a periodic basis.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS DataSync.

**B.** Use AWS Snowball devices.

**C.** Set up an SFTP server on Amazon EC2.

**D.** Use AWS Database Migration Service (AWS DMS).

---

## Question 305

A company is designing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The
company needs the ability to use SMB clients to access data. The solution must be fully managed.
Which AWS solution meets these requirements?

**A.** Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the
application server.

**B.** Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance.
Connect the application server to the file share.

**C.** Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server.
Connect the application server to the file system.

**D.** Create an Amazon S3 bucket. Assign an IAM role to the application to grant access to the S3 bucket. Mount
the S3 bucket to the application server.

---

## Question 306

A company wants to run an in-memory database for a latency-sensitive application that runs on Amazon EC2
instances. The application processes more than 100,000 transactions each minute and requires high network
throughput. A solutions architect needs to provide a cost-effective network design that minimizes data transfer
charges.
Which solution meets these requirements?

**A.** Launch all EC2 instances in the same Availability Zone within the same AWS Region. Specify a placement
group with cluster strategy when launching EC2 instances.

**B.** Launch all EC2 instances in different Availability Zones within the same AWS Region. Specify a placement
group with partition strategy when launching EC2 instances.

**C.** Deploy an Auto Scaling group to launch EC2 instances in different Availability Zones based on a network
utilization target.

**D.** Deploy an Auto Scaling group with a step scaling policy to launch EC2 instances in different Availability
Zones.

---

## Question 307

A company that primarily runs its application servers on premises has decided to migrate to AWS. The company
wants to minimize its need to scale its Internet Small Computer Systems Interface (iSCSI) storage on premises.
The company wants only its recently accessed data to remain stored locally.
Which AWS solution should the company use to meet these requirements?

**A.** Amazon S3 File Gateway

**B.** AWS Storage Gateway Tape Gateway

**C.** AWS Storage Gateway Volume Gateway stored volumes

**D.** AWS Storage Gateway Volume Gateway cached volumes

---

## Question 308

A company has multiple AWS accounts that use consolidated billing. The company runs several active high
performance Amazon RDS for Oracle On-Demand DB instances for 90 days. The company’s finance team has
access to AWS Trusted Advisor in the consolidated billing account and all other AWS accounts.
The finance team needs to use the appropriate AWS account to access the Trusted Advisor check
recommendations for RDS. The finance team must review the appropriate Trusted Advisor check to reduce RDS
costs.
Which combination of steps should the finance team take to meet these requirements? (Choose two.)

**A.** Use the Trusted Advisor recommendations from the account where the RDS instances are running.

**B.** Use the Trusted Advisor recommendations from the consolidated billing account to see all RDS instance
checks at the same time.

**C.** Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization.

**D.** Review the Trusted Advisor check for Amazon RDS Idle DB Instances.

**E.** Review the Trusted Advisor check for Amazon Redshift Reserved Node Optimization.

---

## Question 309

A solutions architect needs to optimize storage costs. The solutions architect must identify any Amazon S3
buckets that are no longer being accessed or are rarely accessed.
Which solution will accomplish this goal with the LEAST operational overhead?

**A.** Analyze bucket access patterns by using the S3 Storage Lens dashboard for advanced activity metrics.

**B.** Analyze bucket access patterns by using the S3 dashboard in the AWS Management Console.

**C.** Turn on the Amazon CloudWatch BucketSizeBytes metric for buckets. Analyze bucket access patterns by
using the metrics data with Amazon Athena.

**D.** Turn on AWS CloudTrail for S3 object monitoring. Analyze bucket access patterns by using CloudTrail logs
that are integrated with Amazon CloudWatch Logs.

---

## Question 310

A company sells datasets to customers who do research in artificial intelligence and machine learning (AI/ML). The
datasets are large, formatted files that are stored in an Amazon S3 bucket in the us-east-1 Region. The company
hosts a web application that the customers use to purchase access to a given dataset. The web application is
deployed on multiple Amazon EC2 instances behind an Application Load Balancer. After a purchase is made,
customers receive an S3 signed URL that allows access to the files.
The customers are distributed across North America and Europe. The company wants to reduce the cost that is
associated with data transfers and wants to maintain or improve performance.
What should a solutions architect do to meet these requirements?

**A.** Configure S3 Transfer Acceleration on the existing S3 bucket. Direct customer requests to the S3 Transfer
Acceleration endpoint. Continue to use S3 signed URLs for access control.

**B.** Deploy an Amazon CloudFront distribution with the existing S3 bucket as the origin. Direct customer
requests to the CloudFront URL. Switch to CloudFront signed URLs for access control.

**C.** Set up a second S3 bucket in the eu-central-1 Region with S3 Cross-Region Replication between the
buckets. Direct customer requests to the closest Region. Continue to use S3 signed URLs for access control.

**D.** Modify the web application to enable streaming of the datasets to end users. Configure the web application
to read the data from the existing S3 bucket. Implement access control directly in the application.

---

## Question 311

A company is using AWS to design a web application that will process insurance quotes. Users will request quotes
from the application. Quotes must be separated by quote type, must be responded to within 24 hours, and must
not get lost. The solution must maximize operational efficiency and must minimize maintenance.
Which solution meets these requirements?

**A.** Create multiple Amazon Kinesis data streams based on the quote type. Configure the web application to send
messages to the proper data stream. Configure each backend group of application servers to use the Kinesis
Client Library (KCL) to pool messages from its own data stream.

**B.** Create an AWS Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic for each
quote type. Subscribe the Lambda function to its associated SNS topic. Configure the application to publish
requests for quotes to the appropriate SNS topic.

**C.** Create a single Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue
Service (Amazon SQS) queues to the SNS topic. Configure SNS message filtering to publish messages to the
proper SQS queue based on the quote type. Configure each backend application server to use its own SQS
queue.

**D.** Create multiple Amazon Kinesis Data Firehose delivery streams based on the quote type to deliver data
streams to an Amazon OpenSearch Service cluster. Configure the application to send messages to the proper

delivery stream. Configure each backend group of application servers to search for the messages from
OpenSearch Service and process them accordingly.

---

## Question 312

A company has an application that runs on several Amazon EC2 instances. Each EC2 instance has multiple Amazon
Elastic Block Store (Amazon EBS) data volumes attached to it. The application’s EC2 instance configuration and
data need to be backed up nightly. The application also needs to be recoverable in a different AWS Region.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Write an AWS Lambda function that schedules nightly snapshots of the application’s EBS volumes and
copies the snapshots to a different Region.

**B.** Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another
Region. Add the application’s EC2 instances as resources.

**C.** Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another
Region. Add the application’s EBS volumes as resources.

**D.** Write an AWS Lambda function that schedules nightly snapshots of the application's EBS volumes and
copies the snapshots to a different Availability Zone.

---

## Question 313

A company is building a mobile app on AWS. The company wants to expand its reach to millions of users. The
company needs to build a platform so that authorized users can watch the company’s content on their mobile
devices.
What should a solutions architect recommend to meet these requirements?

**A.** Publish content to a public Amazon S3 bucket. Use AWS Key Management Service (AWS KMS) keys to
stream content.

**B.** Set up IPsec VPN between the mobile app and the AWS environment to stream content.

**C.** Use Amazon CloudFront. Provide signed URLs to stream content.

**D.** Set up AWS Client VPN between the mobile app and the AWS environment to stream content.

---

## Question 314

A company has an on-premises MySQL database used by the global sales team with infrequent access patterns.
The sales team requires the database to have minimal downtime. A database administrator wants to migrate this
database to AWS without selecting a particular instance type in anticipation of more users in the future.
Which service should a solutions architect recommend?

**A.** Amazon Aurora MySQL

**B.** Amazon Aurora Serverless for MySQL

**C.** Amazon Redshift Spectrum

**D.** Amazon RDS for MySQL

---

## Question 315

A company experienced a breach that affected several applications in its on-premises data center. The attacker
took advantage of vulnerabilities in the custom applications that were running on the servers. The company is now
migrating its applications to run on Amazon EC2 instances. The company wants to implement a solution that
actively scans for vulnerabilities on the EC2 instances and sends a report that details the findings.
Which solution will meet these requirements?

**A.** Deploy AWS Shield to scan the EC2 instances for vulnerabilities. Create an AWS Lambda function to log any
findings to AWS CloudTrail.

**B.** Deploy Amazon Macie and AWS Lambda functions to scan the EC2 instances for vulnerabilities. Log any
findings to AWS CloudTrail.

**C.** Turn on Amazon GuardDuty. Deploy the GuardDuty agents to the EC2 instances. Configure an AWS Lambda
function to automate the generation and distribution of reports that detail the findings.

**D.** Turn on Amazon Inspector. Deploy the Amazon Inspector agent to the EC2 instances. Configure an AWS
Lambda function to automate the generation and distribution of reports that detail the findings.

---

## Question 316

A company uses an Amazon EC2 instance to run a script to poll for and process messages in an Amazon Simple
Queue Service (Amazon SQS) queue. The company wants to reduce operational costs while maintaining its ability
to process a growing number of messages that are added to the queue.
What should a solutions architect recommend to meet these requirements?

**A.** Increase the size of the EC2 instance to process messages faster.

**B.** Use Amazon EventBridge to turn off the EC2 instance when the instance is underutilized.

**C.** Migrate the script on the EC2 instance to an AWS Lambda function with the appropriate runtime.

**D.** Use AWS Systems Manager Run Command to run the script on demand.

---

## Question 317

A company uses a legacy application to produce data in CSV format. The legacy application stores the output data
in Amazon S3. The company is deploying a new commercial off-the-shelf (COTS) application that can perform
complex SQL queries to analyze data that is stored in Amazon Redshift and Amazon S3 only. However, the COTS
application cannot process the .csv files that the legacy application produces.
The company cannot update the legacy application to produce data in another format. The company needs to
implement a solution so that the COTS application can use the data that the legacy application produces.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS Glue extract, transform, and load (ETL) job that runs on a schedule. Configure the ETL job to
process the .csv files and store the processed data in Amazon Redshift.

**B.** Develop a Python script that runs on Amazon EC2 instances to convert the .csv files to .sql files. Invoke the
Python script on a cron schedule to store the output files in Amazon S3.

**C.** Create an AWS Lambda function and an Amazon DynamoDB table. Use an S3 event to invoke the Lambda
function. Configure the Lambda function to perform an extract, transform, and load (ETL) job to process the .csv
files and store the processed data in the DynamoDB table.

**D.** Use Amazon EventBridge to launch an Amazon EMR cluster on a weekly schedule. Configure the EMR cluster
to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in an
Amazon Redshift table.

---

## Question 318

A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are
provisioning oversized Amazon EC2 instances and modifying security group rules without using the appropriate
change control process. A solutions architect must devise a strategy to track and audit these inventory and
configuration changes.
Which actions should the solutions architect take to meet these requirements? (Choose two.)

**A.** Enable AWS CloudTrail and use it for auditing.

**B.** Use data lifecycle policies for the Amazon EC2 instances.

**C.** Enable AWS Trusted Advisor and reference the security dashboard.

**D.** Enable AWS Config and create rules for auditing and compliance purposes.

**E.** Restore previous resource configurations with an AWS CloudFormation template.

---

## Question 319

A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have
used shared SSH keys to manage the instances. After a recent audit, the company’s security team is mandating
the removal of all shared keys. A solutions architect must design a solution that provides secure access to the EC2
instances.
Which solution will meet this requirement with the LEAST amount of administrative overhead?

**A.** Use AWS Systems Manager Session Manager to connect to the EC2 instances.

**B.** Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand.

**C.** Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH
access from the bastion instances.

**D.** Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to
generate a temporary SSH key.

---

## Question 320

A company is using a fleet of Amazon EC2 instances to ingest data from on-premises data sources. The data is in
JSON format and ingestion rates can be as high as 1 MB/s. When an EC2 instance is rebooted, the data in-flight is
lost. The company’s data science team wants to query ingested data in near-real time.
Which solution provides near-real-time data querying that is scalable with minimal data loss?

**A.** Publish data to Amazon Kinesis Data Streams, Use Kinesis Data Analytics to query the data.

**B.** Publish data to Amazon Kinesis Data Firehose with Amazon Redshift as the destination. Use Amazon Redshift
to query the data.

**C.** Store ingested data in an EC2 instance store. Publish data to Amazon Kinesis Data Firehose with Amazon S3
as the destination. Use Amazon Athena to query the data.

**D.** Store ingested data in an Amazon Elastic Block Store (Amazon EBS) volume. Publish data to Amazon
ElastiCache for Redis. Subscribe to the Redis channel to query the data.

---

## Question 321

What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?

**A.** Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set.

**B.** Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set to private.

**C.** Update the bucket policy to deny if the PutObject does not have an aws:SecureTransport header set to true.

**D.** Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set.

---

## Question 322

A solutions architect is designing a multi-tier application for a company. The application's users upload images
from a mobile device. The application generates a thumbnail of each image and returns a message to the user to
confirm that the image was uploaded successfully.
The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to
its users to notify them that the original image was received. The solutions architect must design the application to
asynchronously dispatch requests to the different application tiers.
What should the solutions architect do to meet these requirements?

**A.** Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload
process as an event source to invoke the Lambda function.

**B.** Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the
application tiers and alert the user when thumbnail generation is complete.

**C.** Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a
message on the SQS queue for thumbnail generation. Alert the user through an application message that the
image was received.

**D.** Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one
subscription with the application to generate the thumbnail after the image upload is complete. Use a second
subscription to message the user's mobile app by way of a push notification after thumbnail generation is
complete.

---

## Question 323

A company’s facility has badge readers at every entrance throughout the building. When badges are scanned, the
readers send a message over HTTPS to indicate who attempted to access that particular entrance.
A solutions architect must design a system to process these messages from the sensors. The solution must be
highly available, and the results must be made available for the company’s security team to analyze.
Which system architecture should the solutions architect recommend?

**A.** Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the
EC2 instance to save the results to an Amazon S3 bucket.

**B.** Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS
Lambda function to process the messages and save the results to an Amazon DynamoDB table.

**C.** Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the
Lambda function to process the messages and save the results to an Amazon DynamoDB table.

**D.** Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility
network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.

---

## Question 324

A company wants to implement a disaster recovery plan for its primary on-premises file storage volume. The file
storage volume is mounted from an Internet Small Computer Systems Interface (iSCSI) device on a local storage
server. The file storage volume holds hundreds of terabytes (TB) of data.
The company wants to ensure that end users retain immediate access to all file types from the on-premises
systems without experiencing latency.
Which solution will meet these requirements with the LEAST amount of change to the company's existing
infrastructure?

**A.** Provision an Amazon S3 File Gateway as a virtual machine (VM) that is hosted on premises. Set the local
cache to 10 TB. Modify existing applications to access the files through the NFS protocol. To recover from a
disaster, provision an Amazon EC2 instance and mount the S3 bucket that contains the files.

**B.** Provision an AWS Storage Gateway tape gateway. Use a data backup solution to back up all existing data to
a virtual tape library. Configure the data backup solution to run nightly after the initial backup is complete. To
recover from a disaster, provision an Amazon EC2 instance and restore the data to an Amazon Elastic Block
Store (Amazon EBS) volume from the volumes in the virtual tape library.

**C.** Provision an AWS Storage Gateway Volume Gateway cached volume. Set the local cache to 10 TB. Mount the
Volume Gateway cached volume to the existing file server by using iSCSI, and copy all files to the storage
volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot
to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.

**D.** Provision an AWS Storage Gateway Volume Gateway stored volume with the same amount of disk space as
the existing file storage volume. Mount the Volume Gateway stored volume to the existing file server by using
iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To
recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach
the EBS volume to an Amazon EC2 instance.

---

## Question 325

A company is hosting a web application from an Amazon S3 bucket. The application uses Amazon Cognito as an
identity provider to authenticate users and return a JSON Web Token (JWT) that provides access to protected
resources that are stored in another S3 bucket.
Upon deployment of the application, users report errors and are unable to access the protected content. A
solutions architect must resolve this issue by providing proper permissions so that users can access the protected
content.
Which solution meets these requirements?

**A.** Update the Amazon Cognito identity pool to assume the proper IAM role for access to the protected content.

**B.** Update the S3 ACL to allow the application to access the protected content.

**C.** Redeploy the application to Amazon S3 to prevent eventually consistent reads in the S3 bucket from
affecting the ability of users to access the protected content.

**D.** Update the Amazon Cognito pool to use custom attribute mappings within the identity pool and grant users
the proper permissions to access the protected content.

---

## Question 326

An image hosting company uploads its large assets to Amazon S3 Standard buckets. The company uses multipart
upload in parallel by using S3 APIs and overwrites if the same object is uploaded again. For the first 30 days after
upload, the objects will be accessed frequently. The objects will be used less frequently after 30 days, but the
access patterns for each object will be inconsistent. The company must optimize its S3 storage costs while
maintaining high availability and resiliency of stored assets.

Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)

**A.** Move assets to S3 Intelligent-Tiering after 30 days.

**B.** Configure an S3 Lifecycle policy to clean up incomplete multipart uploads.

**C.** Configure an S3 Lifecycle policy to clean up expired object delete markers.

**D.** Move assets to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

**E.** Move assets to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.

---

## Question 327

A solutions architect must secure a VPC network that hosts Amazon EC2 instances. The EC2 instances contain
highly sensitive data and run in a private subnet. According to company policy, the EC2 instances that run in the
VPC can access only approved third-party software repositories on the internet for software product updates that
use the third party’s URL. Other internet traffic must be blocked.
Which solution meets these requirements?

**A.** Update the route table for the private subnet to route the outbound traffic to an AWS Network Firewall
firewall. Configure domain list rule groups.

**B.** Set up an AWS WAF web ACL. Create a custom set of rules that filter traffic requests based on source and
destination IP address range sets.

**C.** Implement strict inbound security group rules. Configure an outbound rule that allows traffic only to the
authorized software repositories on the internet by specifying the URLs.

**D.** Configure an Application Load Balancer (ALB) in front of the EC2 instances. Direct all outbound traffic to the
ALB. Use a URL-based rule listener in the ALB’s target group for outbound access to the internet.

---

## Question 328

A company is hosting a three-tier ecommerce application in the AWS Cloud. The company hosts the website on

Amazon S3 and integrates the website with an API that handles sales requests. The company hosts the API on
three Amazon EC2 instances behind an Application Load Balancer (ALB). The API consists of static and dynamic
front-end content along with backend workers that process sales requests asynchronously.
The company is expecting a significant and sudden increase in the number of sales requests during events for the
launch of new products.
What should a solutions architect recommend to ensure that all the requests are processed successfully?

**A.** Add an Amazon CloudFront distribution for the dynamic content. Increase the number of EC2 instances to
handle the increase in traffic.

**B.** Add an Amazon CloudFront distribution for the static content. Place the EC2 instances in an Auto Scaling
group to launch new instances based on network traffic.

**C.** Add an Amazon CloudFront distribution for the dynamic content. Add an Amazon ElastiCache instance in
front of the ALB to reduce traffic for the API to handle.

**D.** Add an Amazon CloudFront distribution for the static content. Add an Amazon Simple Queue Service
(Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances.

---

## Question 329

A security audit reveals that Amazon EC2 instances are not being patched regularly. A solutions architect needs to
provide a solution that will run regular security scans across a large fleet of EC2 instances. The solution should
also patch the EC2 instances on a regular schedule and provide a report of each instance’s patch status.
Which solution will meet these requirements?

**A.** Set up Amazon Macie to scan the EC2 instances for software vulnerabilities. Set up a cron job on each EC2
instance to patch the instance on a regular schedule.

**B.** Turn on Amazon GuardDuty in the account. Configure GuardDuty to scan the EC2 instances for software
vulnerabilities. Set up AWS Systems Manager Session Manager to patch the EC2 instances on a regular
schedule.

**C.** Set up Amazon Detective to scan the EC2 instances for software vulnerabilities. Set up an Amazon
EventBridge scheduled rule to patch the EC2 instances on a regular schedule.

**D.** Turn on Amazon Inspector in the account. Configure Amazon Inspector to scan the EC2 instances for
software vulnerabilities. Set up AWS Systems Manager Patch Manager to patch the EC2 instances on a regular
schedule.

---

## Question 330

A company is planning to store data on Amazon RDS DB instances. The company must encrypt the data at rest.
What should a solutions architect do to meet this requirement?

**A.** Create a key in AWS Key Management Service (AWS KMS). Enable encryption for the DB instances.

**B.** Create an encryption key. Store the key in AWS Secrets Manager. Use the key to encrypt the DB instances.

**C.** Generate a certificate in AWS Certificate Manager (ACM). Enable SSL/TLS on the DB instances by using the
certificate.

**D.** Generate a certificate in AWS Identity and Access Management (IAM). Enable SSL/TLS on the DB instances
by using the certificate.

---

## Question 331

A company must migrate 20 TB of data from a data center to the AWS Cloud within 30 days. The company’s
network bandwidth is limited to 15 Mbps and cannot exceed 70% utilization.
What should a solutions architect do to meet these requirements?

**A.** Use AWS Snowball.

**B.** Use AWS DataSync.

**C.** Use a secure VPN connection.

**D.** Use Amazon S3 Transfer Acceleration.

---

## Question 332

A company needs to provide its employees with secure access to confidential and sensitive files. The company
wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to
the employees’ devices.
The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file
server is running out of capacity.
.

Which solution will meet these requirements?

**A.** Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit
inbound traffic to the employees’ IP addresses.

**B.** Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file
system with the on-premises Active Directory. Configure AWS Client VPN.

**C.** Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.

**D.** Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM
Identity Center (AWS Single Sign-On).

---

## Question 333

A company’s application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances
run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. On the first day of every month at
midnight, the application becomes much slower when the month-end financial calculation batch runs. This causes
the CPU utilization of the EC2 instances to immediately peak to 100%, which disrupts the application.
What should a solutions architect recommend to ensure the application is able to handle the workload and avoid
downtime?

**A.** Configure an Amazon CloudFront distribution in front of the ALB.

**B.** Configure an EC2 Auto Scaling simple scaling policy based on CPU utilization.

**C.** Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule.

**D.** Configure Amazon ElastiCache to remove some of the workload from the EC2 instances.

---

## Question 334

A company wants to give a customer the ability to use on-premises Microsoft Active Directory to download files
that are stored in Amazon S3. The customer’s application uses an SFTP client to download the files.
Which solution will meet these requirements with the LEAST operational overhead and no changes to the
customer’s application?

**A.** Set up AWS Transfer Family with SFTP for Amazon S3. Configure integrated Active Directory authentication.

**B.** Set up AWS Database Migration Service (AWS DMS) to synchronize the on-premises client with Amazon S3.
Configure integrated Active Directory authentication.

**C.** Set up AWS DataSync to synchronize between the on-premises location and the S3 location by using AWS
IAM Identity Center (AWS Single Sign-On).

**D.** Set up a Windows Amazon EC2 instance with SFTP to connect the on-premises client with Amazon S3.
Integrate AWS Identity and Access Management (IAM).

---

## Question 335

A company is experiencing sudden increases in demand. The company needs to provision large Amazon EC2
instances from an Amazon Machine Image (AMI). The instances will run in an Auto Scaling group. The company
needs a solution that provides minimum initialization latency to meet the demand.
Which solution meets these requirements?

**A.** Use the aws ec2 register-image command to create an AMI from a snapshot. Use AWS Step Functions to
replace the AMI in the Auto Scaling group.

**B.** Enable Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot. Provision an AMI by
using the snapshot. Replace the AMI in the Auto Scaling group with the new AMI.

**C.** Enable AMI creation and define lifecycle rules in Amazon Data Lifecycle Manager (Amazon DLM). Create an
AWS Lambda function that modifies the AMI in the Auto Scaling group.

**D.** Use Amazon EventBridge to invoke AWS Backup lifecycle policies that provision AMIs. Configure Auto
Scaling group capacity limits as an event source in EventBridge.

---

## Question 336

A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The
application tier is hosted on Amazon EC2 instances. The company’s IT security guidelines mandate that the
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

## Question 337

A company has deployed a web application on AWS. The company hosts the backend database on Amazon RDS for
MySQL with a primary DB instance and five read replicas to support scaling needs. The read replicas must lag no
more than 1 second behind the primary DB instance. The database routinely runs scheduled stored procedures.
As traffic on the website increases, the replicas experience additional lag during periods of peak load. A solutions
architect must reduce the replication lag as much as possible. The solutions architect must minimize changes to
the application code and must minimize ongoing operational overhead.
Which solution will meet these requirements?

**A.** Migrate the database to Amazon Aurora MySQL. Replace the read replicas with Aurora Replicas, and
configure Aurora Auto Scaling. Replace the stored procedures with Aurora MySQL native functions.

**B.** Deploy an Amazon ElastiCache for Redis cluster in front of the database. Modify the application to check the
cache before the application queries the database. Replace the stored procedures with AWS Lambda functions.

**C.** Migrate the database to a MySQL database that runs on Amazon EC2 instances. Choose large, compute
optimized EC2 instances for all replica nodes. Maintain the stored procedures on the EC2 instances.

**D.** Migrate the database to Amazon DynamoDB. Provision a large number of read capacity units (RCUs) to
support the required throughput, and configure on-demand capacity scaling. Replace the stored procedures
with DynamoDB streams.

---

## Question 338

A solutions architect must create a disaster recovery (DR) plan for a high-volume software as a service (SaaS)
platform. All data for the platform is stored in an Amazon Aurora MySQL DB cluster.
The DR plan must replicate data to a secondary AWS Region.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use MySQL binary log replication to an Aurora cluster in the secondary Region. Provision one DB instance for
the Aurora cluster in the secondary Region.

**B.** Set up an Aurora global database for the DB cluster. When setup is complete, remove the DB instance from
the secondary Region.

**C.** Use AWS Database Migration Service (AWS DMS) to continuously replicate data to an Aurora cluster in the
secondary Region. Remove the DB instance from the secondary Region.

**D.** Set up an Aurora global database for the DB cluster. Specify a minimum of one DB instance in the secondary
Region.

---

## Question 339

A company has a custom application with embedded credentials that retrieves information from an Amazon RDS
MySQL DB instance. Management says the application must be made more secure with the least amount of
programming effort.
What should a solutions architect do to meet these requirements?

**A.** Use AWS Key Management Service (AWS KMS) to create keys. Configure the application to load the
database credentials from AWS KMS. Enable automatic key rotation.

**B.** Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS
Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Create an
AWS Lambda function that rotates the credentials in Secret Manager.

**C.** Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS
Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a
credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager.

**D.** Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS
Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter
Store. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using
Parameter Store.

---

## Question 340

A media company hosts its website on AWS. The website application’s architecture includes a fleet of Amazon EC2
instances behind an Application Load Balancer (ALB) and a database that is hosted on Amazon Aurora. The
company’s cybersecurity team reports that the application is vulnerable to SQL injection.
How should the company resolve this issue?

**A.** Use AWS WAF in front of the ALB. Associate the appropriate web ACLs with AWS WAF.

**B.** Create an ALB listener rule to reply to SQL injections with a fixed response.

**C.** Subscribe to AWS Shield Advanced to block all SQL injection attempts automatically.

**D.** Set up Amazon Inspector to block all SQL injection attempts automatically.

---

## Question 341

A company has an Amazon S3 data lake that is governed by AWS Lake Formation. The company wants to create a
visualization in Amazon QuickSight by joining the data in the data lake with operational data that is stored in an
Amazon Aurora MySQL database. The company wants to enforce column-level authorization so that the company’s
marketing team can access only a subset of columns in the database.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon EMR to ingest the data directly from the database to the QuickSight SPICE engine. Include only
the required columns.

**B.** Use AWS Glue Studio to ingest the data from the database to the S3 data lake. Attach an IAM policy to the
QuickSight users to enforce column-level access control. Use Amazon S3 as the data source in QuickSight.

**C.** Use AWS Glue Elastic Views to create a materialized view for the database in Amazon S3. Create an S3
bucket policy to enforce column-level access control for the QuickSight users. Use Amazon S3 as the data
source in QuickSight.

**D.** Use a Lake Formation blueprint to ingest the data from the database to the S3 data lake. Use Lake Formation
to enforce column-level access control for the QuickSight users. Use Amazon Athena as the data source in
QuickSight.

---

## Question 342

A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2
instances are in an Auto Scaling group. The number of transactions can vary, but the baseline CPU utilization that
is noted on each run is at least 60%. The company needs to provision the capacity 30 minutes before the jobs run.
Currently, engineers complete this task by manually modifying the Auto Scaling group parameters. The company
does not have the resources to analyze the required capacity trends for the Auto Scaling group counts. The
company needs an automated way to modify the Auto Scaling group’s desired capacity.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU
utilization metric. Set the target value for the metric to 60%.

**B.** Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum
capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the
batch jobs run.

**C.** Create a predictive scaling policy for the Auto Scaling group. Configure the policy to scale based on forecast.
Set the scaling metric to CPU utilization. Set the target value for the metric to 60%. In the policy, set the
instances to pre-launch 30 minutes before the jobs run.

**D.** Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric
value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling
group’s desired capacity and maximum capacity by 20%.

---

## Question 343

A solutions architect is designing a company’s disaster recovery (DR) architecture. The company has a MySQL
database that runs on an Amazon EC2 instance in a private subnet with scheduled backup. The DR design needs to
include multiple AWS Regions.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Migrate the MySQL database to multiple EC2 instances. Configure a standby EC2 instance in the DR Region.
Turn on replication.

**B.** Migrate the MySQL database to Amazon RDS. Use a Multi-AZ deployment. Turn on read replication for the
primary DB instance in the different Availability Zones.

**C.** Migrate the MySQL database to an Amazon Aurora global database. Host the primary DB cluster in the
primary Region. Host the secondary DB cluster in the DR Region.

**D.** Store the scheduled backup of the MySQL database in an Amazon S3 bucket that is configured for S3 CrossRegion Replication (CRR). Use the data backup to restore the database in the DR Region.

---

## Question 344

A company has a Java application that uses Amazon Simple Queue Service (Amazon SQS) to parse messages. The
application cannot parse messages that are larger than 256 KB in size. The company wants to implement a
solution to give the application the ability to parse messages as large as 50 MB.
Which solution will meet these requirements with the FEWEST changes to the code?

**A.** Use the Amazon SQS Extended Client Library for Java to host messages that are larger than 256 KB in
Amazon S3.

**B.** Use Amazon EventBridge to post large messages from the application instead of Amazon SQS.

**C.** Change the limit in Amazon SQS to handle messages that are larger than 256 KB.

**D.** Store messages that are larger than 256 KB in Amazon Elastic File System (Amazon EFS). Configure Amazon
SQS to reference this location in the messages.

---

## Question 345

A company wants to restrict access to the content of one of its main web applications and to protect the content
by using authorization techniques available on AWS. The company wants to implement a serverless architecture
and an authentication solution for fewer than 100 users. The solution needs to integrate with the main web
application and serve web content globally. The solution must also scale as the company's user base grows while
providing the lowest login latency possible.

Which solution will meet these requirements MOST cost-effectively?

**A.** Use Amazon Cognito for authentication. Use [email protected] for authorization. Use Amazon CloudFront to
serve the web application globally.

**B.** Use AWS Directory Service for Microsoft Active Directory for authentication. Use AWS Lambda for
authorization. Use an Application Load Balancer to serve the web application globally.

**C.** Use Amazon Cognito for authentication. Use AWS Lambda for authorization. Use Amazon S3 Transfer
Acceleration to serve the web application globally.

**D.** Use AWS Directory Service for Microsoft Active Directory for authentication. Use [email protected] for
authorization. Use AWS Elastic Beanstalk to serve the web application globally.

---

## Question 346

A company has an aging network-attached storage (NAS) array in its data center. The NAS array presents SMB
shares and NFS shares to client workstations. The company does not want to purchase a new NAS array. The
company also does not want to incur the cost of renewing the NAS array’s support contract. Some of the data is
accessed frequently, but much of the data is inactive.

A solutions architect needs to implement a solution that migrates the data to Amazon S3, uses S3 Lifecycle
policies, and maintains the same look and feel for the client workstations. The solutions architect has identified
AWS Storage Gateway as part of the solution.
Which type of storage gateway should the solutions architect provision to meet these requirements?

**A.** Volume Gateway

**B.** Tape Gateway

**C.** Amazon FSx File Gateway

**D.** Amazon S3 File Gateway

---

## Question 347

A company has an application that is running on Amazon EC2 instances. A solutions architect has standardized the
company on a particular instance family and various instance sizes based on the current needs of the company.
The company wants to maximize cost savings for the application over the next 3 years. The company needs to be
able to change the instance family and sizes in the next 6 months based on application popularity and usage.

Which solution will meet these requirements MOST cost-effectively?

**A.** Compute Savings Plan

**B.** EC2 Instance Savings Plan

**C.** Zonal Reserved Instances

**D.** Standard Reserved Instances

---

## Question 348

A company collects data from a large number of participants who use wearable devices. The company stores the
data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and
predictable. The company wants to stay at or below its forecasted budget for DynamoDB.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve
capacity for the forecasted workload.

**B.** Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs).

**C.** Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to
accommodate changes in the workload.

**D.** Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved
capacity.

---

## Question 349

A company stores confidential data in an Amazon Aurora PostgreSQL database in the ap-southeast-3 Region. The
database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key. The company
was recently acquired and must securely share a backup of the database with the acquiring company’s AWS
account in ap-southeast-3.
What should a solutions architect do to meet these requirements?

**A.** Create a database snapshot. Copy the snapshot to a new unencrypted snapshot. Share the new snapshot
with the acquiring company’s AWS account.

**B.** Create a database snapshot. Add the acquiring company’s AWS account to the KMS key policy. Share the
snapshot with the acquiring company’s AWS account.

**C.** Create a database snapshot that uses a different AWS managed KMS key. Add the acquiring company’s
AWS account to the KMS key alias. Share the snapshot with the acquiring company's AWS account.

**D.** Create a database snapshot. Download the database snapshot. Upload the database snapshot to an Amazon
S3 bucket. Update the S3 bucket policy to allow access from the acquiring company’s AWS account.

---

## Question 350

A company uses a 100 GB Amazon RDS for Microsoft SQL Server Single-AZ DB instance in the us-east-1 Region to
store customer transactions. The company needs high availability and automatic recovery for the DB instance.
The company must also run reports on the RDS database several times a year. The report process causes
transactions to take longer than usual to post to the customers’ accounts. The company needs a solution that will
improve the performance of the report process.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Modify the DB instance from a Single-AZ DB instance to a Multi-AZ deployment.

**B.** Take a snapshot of the current DB instance. Restore the snapshot to a new RDS deployment in another
Availability Zone.

**C.** Create a read replica of the DB instance in a different Availability Zone. Point all requests for reports to the
read replica.

**D.** Migrate the database to RDS Custom.

**E.** Use RDS Proxy to limit reporting requests to the maintenance window.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 301

**Answer:** **C**

**Explanation:**

The correct answer is C. AWS DataSync.

Here's a detailed justification:

AWS DataSync is a data transfer service specifically designed for moving large amounts of data between onpremises storage and AWS services like Amazon FSx for Windows File Server. It excels in scenarios where
you need to migrate data quickly and efficiently over a network connection. A key feature of DataSync that
makes it perfect for this scenario is its built-in bandwidth throttling capability. This allows the laboratory to
control the amount of bandwidth DataSync utilizes, minimizing the impact on other university departments
sharing the 1 Gbps network link. DataSync also optimizes data transfer using techniques such as incremental
transfers (transferring only changed data after the initial copy), in-line compression, and parallel data
streams, maximizing throughput and making the migration within the 5-day timeframe feasible, given
appropriate bandwidth settings. It also offers encryption in transit and at rest, which is relevant for sensitive
research data.
AWS Snowcone (A) is a physical device used for data transport, primarily useful when network bandwidth is
limited or unavailable. While it could theoretically transfer the data, it involves shipping the device to AWS,
which introduces delays and doesn't allow for bandwidth control. Amazon FSx File Gateway (B) is a service
that provides low-latency access to FSx file systems from on-premises applications. It's not designed for the
initial migration of large datasets. It facilitates hybrid access to files already residing in FSx. AWS Transfer
Family (D) is a suite of services for secure file transfers into and out of Amazon S3, Amazon EFS, and AWS
Storage Gateway using protocols such as SFTP, FTPS, and FTP. It doesn't directly support transferring data to
FSx for Windows File Server or offer the same level of optimization and bandwidth control as DataSync for
this specific migration use case.

In summary, AWS DataSync's optimized data transfer, bandwidth throttling, and direct integration with
Amazon FSx for Windows File Server make it the most appropriate and efficient solution for the university's
data migration requirements.

---

## Question 302

**Answer:** **AC**

**Explanation:**

The correct answer is A and C. Here's why:

**A.** Deploy Amazon CloudFront for content delivery and caching:

CloudFront is a Content Delivery Network (CDN) that caches content closer to the end users. By deploying
CloudFront in front of the S3 bucket containing the raw video files, you significantly reduce latency and
improve the streaming experience. CloudFront has edge locations distributed globally, ensuring users can
retrieve video clips from a location geographically closer to them. This minimizes buffering and playback
issues, fulfilling the requirement to maximize performance and scalability. CloudFront integrates seamlessly
with S3 and provides features like geo-restriction, custom SSL certificates, and access
logs.https://aws.amazon.com/cloudfront/

**C.** Use Amazon Elastic Transcoder to convert the video files to more appropriate formats:
The problem statement highlights that videos are in raw format, which are large and cause playback issues.
Elastic Transcoder converts video files from their raw format into more suitable formats for streaming over
the internet to mobile devices (e.g., H.264). This involves encoding the videos into smaller file sizes and
resolutions optimized for mobile viewing. It can also create adaptive bitrate streaming formats (like HLS or
DASH) to adjust the video quality based on the user's network conditions, further improving playback. This
addresses the buffering problem directly by reducing the file sizes. Elastic Transcoder is a fully managed
service, minimizing operational overhead.https://aws.amazon.com/elastictranscoder/

Why other options are incorrect:

**B.** Use AWS DataSync to replicate the video files across AWS Regions in other S3 buckets: While replication
improves availability, it doesn't directly address the issue of large video file sizes causing buffering on mobile
devices. It also increases storage costs.

**D.** Deploy an Auto Scaling group of Amazon EC2 instances in Local Zones for content delivery and caching:
This option is less efficient and more complex than using CloudFront. It requires managing EC2 instances and
caching software, significantly increasing operational overhead. CloudFront is a purpose-built CDN service
that handles caching automatically.

**E.** Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to more appropriate
formats: While using EC2 instances for transcoding is possible, it is not recommended for the same reasons
listed for option D. AWS Elastic Transcoder is a managed service that is already configured for this purpose
and scales automatically. Using EC2 for transcoding would require more resources and higher overhead.

---

## Question 303

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:

**A.** Incorrect: Amazon EC2 Auto Scaling is designed to scale EC2 instances, not ECS tasks using Fargate.

Fargate is a serverless compute engine for containers; you don't manage EC2 instances directly.

**B.** Incorrect: While a Lambda function could theoretically be used to adjust ECS task counts, it's a less
efficient and more complex solution than using Application Auto Scaling. Lambda would require custom code
for monitoring metrics and scaling actions, adding overhead and potential points of failure.

**C.** Incorrect: As with option A, Amazon EC2 Auto Scaling is not applicable to Fargate tasks. ECS tasks running
on Fargate do not directly involve EC2 instances, making EC2 Auto Scaling irrelevant.

**D.** Correct: AWS Application Auto Scaling is the preferred solution for scaling ECS tasks using the Fargate
launch type. It allows you to automatically adjust the desired count of tasks within your ECS service based on
various metrics (like CPU and memory utilization). Target tracking policies are specifically designed to
maintain a desired target value for a metric (e.g., keep CPU utilization at 70%). When CloudWatch alarms are
triggered because the metric exceeds the target, Application Auto Scaling automatically increases the
number of ECS tasks to handle the load. When utilization drops, it reduces the number of tasks, optimizing
costs.
Justification in Detail:

1. Fargate and Serverless: Fargate abstracts away the underlying EC2 infrastructure, making EC2 Auto
Scaling irrelevant. Fargate provides serverless compute for containers.

2. Application Auto Scaling for ECS: AWS Application Auto Scaling integrates directly with ECS
services and Fargate tasks. https://docs.aws.amazon.com/autoscaling/application/userguide/what-isapplication-auto-scaling.html

3. Target Tracking Policies: Target tracking policies simplify scaling by automatically adjusting the
service's desired count to maintain a target value for a specific metric, such as average CPU or
memory utilization. https://docs.aws.amazon.com/autoscaling/application/userguide/applicationauto-scaling-target-tracking.html

4. CloudWatch Alarms as Triggers: CloudWatch alarms monitor the specified metrics (CPU, memory)
and trigger the Application Auto Scaling policies when predefined thresholds are breached.

5. Cost Optimization: By scaling down task counts when utilization is low, Application Auto Scaling
ensures you only pay for the resources you need, minimizing costs.

6. Simplified Management: Application Auto Scaling eliminates the need for custom scaling logic (as
with Lambda), reducing operational overhead and complexity.

7. Responsiveness: Target tracking allows the system to quickly adapt to changes in demand,
increasing the number of ECS tasks when utilization increases and decreasing the number of tasks
when utilization decreases.

In summary, AWS Application Auto Scaling with target tracking policies offers a managed, efficient, and costeffective way to dynamically scale ECS tasks running on Fargate, directly responding to changes in
application utilization. The CloudWatch alarms serve as the trigger to initiate the scaling actions.

---

## Question 304

**Answer:** **A**

**Explanation:**

The correct answer is A. Use AWS DataSync.

Here's a detailed justification:
AWS DataSync is a purpose-built data transfer service designed for moving large amounts of data between
on-premises storage and AWS, or between AWS storage services. It simplifies, automates, and accelerates
data transfer over the network. In this scenario, where data needs to be moved between NFS file systems in
two different AWS Regions on a periodic basis, DataSync is an ideal solution because it offers significant
advantages in terms of speed, reliability, and operational overhead.
DataSync optimizes network usage through built-in acceleration techniques and parallel data transfer, which
is essential for large datasets. It also offers built-in security features like encryption and data integrity
verification. Critically, it simplifies the transfer process, automating scheduling, monitoring, and error
handling, which translates to minimal operational effort compared to other solutions.

**Option B** (AWS Snowball devices) is more suited for initial bulk data migrations, not for periodic transfers
between regions. Transporting physical devices back and forth introduces logistical complexity and is not
efficient for recurring data transfers.

**Option C** (Setting up an SFTP server on Amazon EC2) would require significant manual configuration and
management of the server, security settings, and transfer processes. This dramatically increases the
operational overhead and introduces potential vulnerabilities. It's also not optimized for high-speed data
transfer.

**Option D** (AWS Database Migration Service) is designed for migrating databases, not file systems. Therefore,
it is completely inappropriate for this use case involving NFS file systems.

Therefore, AWS DataSync provides the least operational overhead for periodic, large-scale data transfers
between NFS file systems in different AWS Regions because it is specifically designed for this purpose with
built-in automation, optimization, and security features.
Further research:
AWS DataSync: https://aws.amazon.com/datasync/

---

## Question 305

**Answer:** **C**

**Explanation:**

The correct answer is C, creating an Amazon FSx for Windows File Server file system. Here's why:
Requirement: SMB Access: The gaming application needs to be accessed via SMB (Server Message Block)
protocol. Amazon FSx for Windows File Server natively supports SMB, allowing Windows-based applications
and clients to interact seamlessly with the file system using standard Windows file sharing protocols.
Requirement: Fully Managed: The solution needs to be fully managed. FSx for Windows File Server is a fully
managed service, meaning AWS handles the underlying infrastructure, patching, backups, and maintenance.
This significantly reduces the operational overhead for the company.

Why other options are incorrect:
A (AWS DataSync): AWS DataSync is primarily used for data transfer between on-premises storage and AWS
storage services, and it does not provide a direct SMB file share endpoint. It's more suitable for migration or
backup scenarios, not for ongoing shared storage access.
B (EC2 Windows Instance): While an EC2 Windows instance can be configured as a file server, this is not a
fully managed solution. The company would be responsible for managing the OS, patching, backups, and
ensuring high availability. This introduces significant operational overhead, contradicting the requirement.
D (Amazon S3): Amazon S3 is an object storage service, not a file system. While S3 can be "mounted" using
tools, it doesn't natively support SMB. Accessing it through SMB would require additional layers of software
and complexity, and the object storage model isn't designed for the typical file system operations expected
by applications using SMB. S3 is also not designed for low-latency file access often needed by applications.

In summary, Amazon FSx for Windows File Server directly fulfills the requirements of providing a fully
managed SMB file share solution for the gaming application, aligning with the service's core functionality and
intended use case.

---

## Question 306

**Answer:** **A**

**Explanation:**

The correct answer is A because it prioritizes low latency and cost-effectiveness for a high-throughput, inmemory database within AWS. Let's break down why:
Placement Groups: Placement groups influence how EC2 instances are placed on underlying hardware. A
cluster placement group strategy aims to place instances within a single Availability Zone as closely together
as possible. This reduces latency and increases network throughput by minimizing the physical distance
between instances.
Availability Zones and Latency: Launching instances within the same Availability Zone minimizes latency
compared to spreading them across different Availability Zones. Data transfer between Availability Zones
incurs costs, which should be avoided in a cost-sensitive scenario with high data transfer requirements.
Cost-Effectiveness: Data transfer between Availability Zones is charged, whereas data transfer within an
Availability Zone is free. Keeping instances within the same Availability Zone eliminates these cross-AZ data
transfer charges.
Auto Scaling (**Option C** and D - incorrect): While Auto Scaling is beneficial for scaling resources based on
demand, it's not essential for minimizing latency within a tightly coupled, in-memory database application
where consistent, low-latency communication is paramount. Auto Scaling adds complexity without directly
addressing the latency and data transfer cost concerns in this specific scenario. Launching across multiple
AZs is not beneficial for latency or cost optimization given the constraints.
Partition Strategy (**Option B** - incorrect): Partition placement groups are suitable for distributing large
numbers of replicas across distinct racks to minimize correlated hardware failures. They are not optimized for
low-latency communication. Moreover, launching across multiple AZs will incur costs due to data transfer.

Therefore, choosing a cluster placement group within a single Availability Zone provides the best solution for
minimizing latency, maximizing network throughput, and reducing data transfer costs for the given
application requirements.
Further Research:
AWS Placement Groups: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html
AWS Data Transfer Costs: https://aws.amazon.com/ec2/pricing/on-demand/
AWS Availability Zones: https://aws.amazon.com/about-aws/global-infrastructure/regions_availability-zones/

---

## Question 307

**Answer:** **D**

**Explanation:**

The company needs a solution that minimizes on-premises iSCSI storage while keeping recently accessed
data local. AWS Storage Gateway offers different modes, and understanding these is crucial.

**Option A**, Amazon S3 File Gateway, stores data as objects directly in S3. While it reduces on-premises
storage, it doesn't cache frequently accessed data locally for low latency access.

**Option B**, AWS Storage Gateway Tape Gateway, is designed for virtual tape storage and is not relevant for
general application server data requiring low latency.

**Option C**, AWS Storage Gateway Volume Gateway (stored volumes), stores the entire dataset on-premises
and asynchronously backs it up to AWS. This contradicts the requirement to minimize on-premises storage
and keep only recently accessed data locally.

**Option D**, AWS Storage Gateway Volume Gateway (cached volumes), addresses the requirements directly.
Cached volumes store the entire dataset in S3 and cache only the frequently accessed data on-premises. This
reduces the on-premises storage footprint, keeps recently accessed data local for fast access, and provides
durable backup in S3. The "minimize its need to scale its iSCSI storage on premises" and "only its recently
accessed data to remain stored locally" requirements are perfectly met by this configuration. It strikes a
balance between on-premises performance and cloud storage scalability and cost-effectiveness. Therefore,
option D is the most suitable.
Further reading:
AWS Storage Gateway Documentation
Understanding Volume Gateway Types

---

## Question 308

**Answer:** **BD**

**Explanation:**

Here's a detailed justification for why options B and D are the correct choices, and why the others are
incorrect:

**Option B**: Use the Trusted Advisor recommendations from the consolidated billing account to see all RDS
instance checks at the same time.
Explanation: With consolidated billing, the payer (consolidated billing account) has visibility into the usage

and cost optimization recommendations for all linked accounts. AWS Trusted Advisor, when accessed from
the payer account, provides a single pane of glass to view the recommendations across the entire AWS
organization. This allows the finance team to efficiently identify potential cost savings opportunities across all
accounts without logging into each one individually. This centralized view is a key benefit of consolidated
billing.
Relevance: This directly addresses the requirement to have a comprehensive view for cost reduction across
multiple accounts.
Supporting concept: Consolidated Billing within AWS Organizations.
Authoritative link: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html

**Option D**: Review the Trusted Advisor check for Amazon RDS Idle DB Instances.
Explanation: Since the company is looking to reduce RDS costs, identifying and addressing idle DB instances
is a crucial step. The "Amazon RDS Idle DB Instances" Trusted Advisor check specifically flags instances that
have low CPU utilization and no connection activity over a period, indicating they are potentially underutilized
and can be stopped or resized to save costs.
Relevance: Addresses the need to reduce RDS costs by targeting instances that are consuming resources
without significant activity.
Supporting concept: Cost optimization through resource utilization analysis.
Authoritative link: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html (Look for RDS
checks within the Trusted Advisor documentation)

Why the other options are incorrect:

**Option A**: Use the Trusted Advisor recommendations from the account where the RDS instances are
running. While this would provide recommendations specific to that account, it wouldn't give the finance team
a comprehensive view across all accounts as easily as option B. It would require logging into multiple
accounts.

**Option C**: Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization. While
Reserved Instances are important for cost optimization, the instances were On-Demand for 90 days.

Therefore, Reserved Instance Optimization wouldn't directly address the cost reduction for existing usage of
On-Demand instances. It's a future optimization strategy rather than a solution for current On-Demand usage.

**Option E**: Review the Trusted Advisor check for Amazon Redshift Reserved Node Optimization. This is
irrelevant because the question specifies Amazon RDS for Oracle instances, not Amazon Redshift. This check
applies to a different AWS service.

---

## Question 309

**Answer:** **A**

**Explanation:**

The correct answer is A because S3 Storage Lens is specifically designed to provide organization-wide
visibility into object storage, trends, and generate actionable recommendations to optimize costs and apply
data protection best practices. S3 Storage Lens does this with advanced metrics, trends, and visualizations. It
provides a central dashboard to analyze data usage and activity trends across your entire S3 estate,
identifying buckets that are infrequently accessed or potentially abandoned. This approach requires minimal
operational overhead as it is a managed service with built-in capabilities for analyzing access patterns.

**Option B** is incorrect because the S3 dashboard in the AWS Management Console provides basic storage
usage metrics, but it lacks the advanced activity metrics and trend analysis capabilities of S3 Storage Lens. It
does not offer the same level of detailed insights into access patterns required for identifying rarely accessed
buckets effectively.

**Option C** is less efficient. While CloudWatch can track bucket size, analyzing access patterns using only
bucket size and Athena requires more manual configuration and analysis. It would not directly reveal access
frequency like S3 Storage Lens. This involves writing complex queries in Athena to correlate bucket size
changes with other potential access logs, resulting in more operational overhead.

**Option D** involves high operational overhead. While CloudTrail captures API activity, enabling it for S3 object
monitoring generates a large volume of logs. Integrating these logs with CloudWatch Logs and then analyzing
them to determine access patterns is a complex and resource-intensive task, making it a less efficient
solution for cost optimization.

Therefore, S3 Storage Lens directly addresses the requirement with the least operational overhead by
providing comprehensive analysis of S3 usage and activity, making it easy to identify infrequently accessed
buckets.
Relevant Link:
Analyzing storage usage with S3 Storage Lens

---

## Question 310

**Answer:** **B**

**Explanation:**

The optimal solution to reduce data transfer costs and improve performance for customers across North

America and Europe accessing datasets in an S3 bucket is to use Amazon CloudFront.

**Option B**, deploying CloudFront with the existing S3 bucket as the origin and using CloudFront signed URLs
for access control, addresses both the cost and performance concerns. CloudFront is a content delivery
network (CDN) that caches data at edge locations closer to the users. This reduces latency and improves
download speeds, thus enhancing performance for customers in both North America and Europe.
Furthermore, CloudFront data transfer costs are generally lower than direct S3 data transfer costs, especially
for geographically dispersed users. By caching the datasets closer to users, CloudFront significantly reduces
the amount of data transferred directly from the S3 bucket, which in turn lowers costs.
Switching to CloudFront signed URLs is crucial for maintaining security. These URLs control access to the
content served through CloudFront, ensuring that only authorized users (those who have purchased access)
can download the datasets. CloudFront signed URLs are also a more secure option in this scenario, allowing
for features like key rotation and fine-grained access control based on date, time or IP address.

**Option A**, using S3 Transfer Acceleration, focuses primarily on accelerating uploads to S3, which is not the
primary concern here. The key focus is on optimizing downloads for the customers.

**Option C**, using S3 Cross-Region Replication, would incur higher storage costs due to the duplicated data.
While it improves latency for European users, it's a less efficient and more expensive solution compared to
CloudFront. Also, managing separate buckets and ensuring data consistency can be more complex.

**Option D**, streaming from the web application, would add significant overhead to the application instances. It
requires more complex application logic and processing, and will likely not be as efficient as using a CDN to
distribute the data. Also, implementing access control in the application itself would make it complex and may
not be highly scalable.

Therefore, CloudFront with signed URLs offers the best balance of cost reduction, performance improvement,
and security for the company's dataset distribution needs.
Supporting links:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
CloudFront Signed URLs: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/privatecontent-signed-urls.html

---

## Question 311

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:

**Option C** leverages the strengths of Amazon SNS and SQS to build a reliable and scalable message queuing
system that effectively addresses the requirements. The application publishes quote requests to a single SNS
topic. SNS then fans out the messages to multiple SQS queues based on message filtering. Each SQS queue
is associated with a specific quote type, and the backend application servers consume messages only from
their corresponding queue. This ensures that quotes are separated by type and processed by the appropriate
servers. SQS offers message durability and guarantees that messages will not be
lost.https://aws.amazon.com/sns/https://aws.amazon.com/sqs/
The 24-hour processing requirement can be met using SQS's message visibility timeout and dead-letter
queues. If a message is not processed within the timeout, it returns to the queue, and after a configured
number of retries, it can be sent to a dead-letter queue for further investigation, ensuring no quotes are lost.
This combination maximizes operational efficiency because SNS/SQS are fully managed services, minimizing
maintenance overhead. The filtering mechanism within SNS directs traffic efficiently.

**Option A**, using Kinesis Data Streams, is more suitable for real-time streaming analytics rather than
asynchronous task processing like insurance quote generation. It also requires more configuration and
management via the KCL. **Option B**, using separate SNS topics and Lambda functions for each quote type,
creates a large number of resources and adds complexity. Managing many Lambda functions can be
operationally inefficient. **Option D**, using Kinesis Data Firehose and OpenSearch Service, is better suited for
log analytics or large-scale data warehousing. Searching OpenSearch service continuously and processing
messages isn't the best use case compared to SQS queues and is overkill for processing messages that need
to be processed in near-real-time.

---

## Question 312

**Answer:** **B**

**Explanation:**

The most operationally efficient solution is B. Create a backup plan by using AWS Backup to perform nightly
backups. Copy the backups to another Region. Add the application’s EC2 instances as resources.

Here's why:
AWS Backup's Orchestration: AWS Backup is designed to centralize and automate backup and restore tasks
across AWS services, including EC2 and EBS. It provides a managed service for creating backup plans,
schedules, and retention policies, simplifying the backup process.
EC2-Level Backup: By adding the EC2 instances as resources to the backup plan, AWS Backup will
automatically discover and back up all attached EBS volumes as part of the instance backup. This ensures
consistency and simplifies management compared to managing EBS volume snapshots individually.
Cross-Region Copying: AWS Backup natively supports copying backups to another AWS Region as part of
the backup plan. This addresses the disaster recovery requirement.
Operational Efficiency: Using AWS Backup significantly reduces the operational overhead compared to
writing and maintaining a custom Lambda function. AWS Backup handles scheduling, orchestration, and
compliance aspects, allowing administrators to focus on other tasks.
Recovery Simplicity: Backing up the entire EC2 instance simplifies recovery. The instance can be restored in
another region including the instance configuration and the data on the associated EBS volumes.
Automated Discovery: AWS Backup automates the discovery of EBS volumes attached to the EC2 instances,
removing the need to manually manage EBS volume identifiers within a Lambda function.
Why other options are less optimal:
A & D: Using Lambda functions for snapshot management is more complex and requires more operational
overhead to maintain and troubleshoot. While feasible, it lacks the built-in orchestration and centralized
management benefits of AWS Backup. D is incorrect because copying to a different Availability Zone doesn't
fulfill the cross-region recovery requirement.

**C:** While C uses AWS Backup, adding only the EBS volumes as resources will only backup the data and would
not include the important instance configuration.
Supporting Links:
AWS Backup: https://aws.amazon.com/backup/
AWS Backup Documentation: https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html

---

## Question 313

**Answer:** **C**

**Explanation:**

The correct answer is C: Use Amazon CloudFront. Provide signed URLs to stream content.

Here's a detailed justification:
To deliver content to millions of users securely and efficiently, a Content Delivery Network (CDN) is essential.

Amazon CloudFront is AWS's CDN service, designed to distribute content globally with low latency and high
transfer speeds. **Option C** leverages CloudFront's capabilities to cache content at edge locations closer to
users, significantly improving the viewing experience by reducing latency. Signed URLs provide a secure
mechanism for authorizing access to content. They grant time-limited access to specific resources for
authorized users. This approach allows the company to control who can view the content and for how long,
preventing unauthorized access. The company controls distribution through the signing process, ensuring
only authorized users can watch the mobile app content.

**Option A** is incorrect because storing content in a public S3 bucket without a CDN does not address
scalability or performance for millions of users. Also, KMS keys are for encrypting data at rest, not for
streaming authorization.

**Option B** and D are incorrect because setting up VPNs (IPsec or Client VPN) for millions of mobile users is not
a scalable or practical solution. VPNs are designed for secure network connections between defined points,
not for content delivery to a vast user base. They will also cause performance issues because you're
essentially routing all traffic from the mobile app to the AWS environment through the VPN, creating a
bottleneck. Therefore, using CloudFront with signed URLs offers the best balance of scalability, performance,
and security for streaming content to millions of users.

---

## Question 314

**Answer:** **B**

**Explanation:**

The recommended service is Amazon Aurora Serverless for MySQL because it directly addresses the
scenario's key requirements: minimal downtime, infrequent access patterns, and avoidance of pre-defined
instance types due to uncertain future capacity needs.
Amazon Aurora Serverless provides automatic scaling, starting, and stopping of the database cluster based
on application needs. This eliminates the need for manual capacity provisioning or selection of a specific
instance type upfront. Its "pay-per-use" model aligns perfectly with the infrequent access patterns,
optimizing costs when the database is not actively in use. Aurora Serverless automatically starts up when a
connection is requested and scales compute and memory capacity to handle the workload.
Aurora MySQL (**Option A**) would require selecting a specific instance type, which contradicts the requirement
to avoid doing so in anticipation of future needs. While RDS for MySQL (**Option D**) offers a managed MySQL
service, it also requires specifying an instance type and doesn't provide the automatic scaling and cost

optimization benefits of Aurora Serverless for infrequent workloads. Amazon Redshift Spectrum (**Option C**) is
a data warehousing solution optimized for analytics, not a direct replacement for a transactional MySQL
database.
Aurora Serverless provides high availability by storing data across multiple Availability Zones. Downtime is
minimized during scaling operations, ensuring uninterrupted service to the global sales team. The automatic
scaling capabilities ensure the database can easily handle more users in the future without manual
intervention or the need for instance type upgrades. This meets the requirement of supporting potential
growth and preventing operational overhead.

In summary, Aurora Serverless offers the ideal balance of minimal downtime, automatic scaling, cost
optimization for infrequent access, and avoidance of pre-defined instance types, making it the best solution
for this migration scenario.

---

## Question 315

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages Amazon Inspector, a service specifically designed for
vulnerability management in AWS environments. Amazon Inspector automatically assesses EC2 instances for
security vulnerabilities and deviations from security best practices. Deploying the Inspector agent on the EC2
instances allows it to scan the operating system and applications for known vulnerabilities. The service then
generates findings that detail the discovered issues.

**Option D** also includes an AWS Lambda function to automate report generation and distribution. This
addresses the requirement to send a report detailing the findings.
Let's examine why the other options are incorrect:

**A:** AWS Shield is a DDoS protection service and does not scan EC2 instances for vulnerabilities in the way that
Inspector does. While CloudTrail logs API calls, it does not directly handle vulnerability scanning results from
Shield.

**B:** Amazon Macie is designed to discover and protect sensitive data in Amazon S3 buckets. It is not the

appropriate service for scanning EC2 instances for vulnerabilities.

**C:** Amazon GuardDuty is a threat detection service that analyzes logs and network activity for malicious or
unauthorized behavior. While GuardDuty provides valuable security insights, it's not specifically designed for
active vulnerability scanning of EC2 instances at the OS and application level. Deploying agents for
GuardDuty onto EC2 instances is not standard practice.

Therefore, Amazon Inspector provides the most comprehensive solution for active vulnerability scanning of
EC2 instances and reporting the findings, making option D the best choice.

---

## Question 316

**Answer:** **C**

**Explanation:**

The correct answer is C, migrating the script to an AWS Lambda function. Here's why:
The primary goal is to reduce operational costs while handling a potentially growing number of messages in
the SQS queue. The existing EC2 instance is continuously running and polling the queue, incurring costs even
when there are no messages to process. This is inefficient.
Lambda functions are serverless compute services that execute code only when triggered. By triggering the
Lambda function based on new messages arriving in the SQS queue, you eliminate the need for a constantly
running EC2 instance. This significantly reduces costs because you only pay for the compute time used when
processing messages.
Specifically, you can configure the Lambda function to be triggered by SQS using SQS as an event source.
When messages are available, Lambda automatically scales to handle the workload. This makes the solution
cost-effective and inherently scalable to accommodate the growing number of messages.

**Option A**, increasing the EC2 instance size, would increase costs without necessarily solving the underlying
inefficiency of continuous operation. **Option B**, using EventBridge to turn off the EC2 instance, is complex to
implement reliably and might still lead to delays in processing messages. **Option D**, using Systems Manager
Run Command, doesn't automatically scale the processing based on the number of messages, so there is no
guarantee that on-demand instances can handle the workload quickly without a pre-warmed pool of
instances, which also increases cost and is against the need for minimizing it. The best approach is to leverage
the serverless and event-driven architecture that Lambda provides for optimal cost and scalability.
Further research:

AWS Lambda: https://aws.amazon.com/lambda/
Amazon SQS as a Lambda Event Source: https://docs.aws.amazon.com/lambda/latest/dg/services-sqs.html
Serverless Architectures: https://aws.amazon.com/serverless/

---

## Question 317

**Answer:** **A**

**Explanation:**

The best solution is A. Create an AWS Glue extract, transform, and load (ETL) job that runs on a schedule.
Configure the ETL job to process the .csv files and store the processed data in Amazon Redshift.

Here's why:
AWS Glue is a fully managed ETL service. This significantly reduces operational overhead compared to
managing EC2 instances, EMR clusters, or Lambda functions for complex data transformations.
Direct Integration with Amazon Redshift: Glue is designed to work seamlessly with Redshift. It can efficiently
load and transform data directly into Redshift tables, making it readily accessible for the COTS application's
SQL queries.
Automatic Schema Discovery (Crawler): Glue can automatically infer the schema of the CSV files stored in
S3, simplifying the ETL process.
Scalability and Reliability: Glue provides scalable and reliable ETL processing with minimal operational
effort. The scheduled ETL job will handle the CSV files as they are produced.

Why other options are less suitable:

**B.** Python script on EC2: This requires managing EC2 instances, writing and maintaining Python code, and
handling potential scaling issues. Converting CSV to SQL and storing as .sql files is not an efficient approach
for data analysis in Redshift.

**C.** Lambda and DynamoDB: DynamoDB is a NoSQL database and not suitable for complex SQL queries. While
Lambda is serverless, it's less ideal for large-scale data transformation tasks compared to Glue, and
DynamoDB isn't the target data store for the COTS application's SQL queries.

**D.** EMR: EMR is powerful for big data processing, but using it for simple CSV conversion is overkill. It has
higher operational overhead and cost compared to Glue for this specific use case. Also, a weekly schedule

might not be sufficient if data needs to be available more frequently.

In summary, AWS Glue provides the most straightforward, cost-effective, and operationally efficient solution
for transforming the CSV data and loading it into Amazon Redshift for use by the COTS application.

---

## Question 318

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's why:

**A.** Enable AWS CloudTrail and use it for auditing: CloudTrail is an AWS service that enables governance,
compliance, operational auditing, and risk auditing of your AWS account. By enabling CloudTrail, you record
API calls made within your AWS environment. This includes actions like launching EC2 instances, modifying
security group rules, and other configuration changes. You can then analyze the CloudTrail logs to track who
made the changes, when they were made, and from where. This addresses the need to track and audit
configuration changes. https://aws.amazon.com/cloudtrail/

**D.** Enable AWS Config and create rules for auditing and compliance purposes: AWS Config continuously
monitors and records the configuration of your AWS resources. It allows you to create rules that
automatically check whether resources comply with desired configurations. For instance, you can create a
Config rule to check if EC2 instances meet certain size criteria or if security groups have overly permissive
rules. Config can also trigger remediation actions when resources are non-compliant. This satisfies the
requirement to track inventory and configuration changes and ensure compliance with company policies.
https://aws.amazon.com/config/
Now, let's consider why the other options are incorrect:

**B.** Use data lifecycle policies for the Amazon EC2 instances: Data lifecycle policies are primarily used for
managing the lifecycle of data stored in services like Amazon S3 or EBS volumes. They are not directly
relevant to tracking and auditing configuration changes or enforcing instance sizing and security group
policies.

**C.** Enable AWS Trusted Advisor and reference the security dashboard: Trusted Advisor provides
recommendations on security, cost optimization, performance, and fault tolerance based on best practices.
While it offers general security advice, it does not provide detailed, auditable logs of specific configuration

changes made by users. It is more of a reactive advisory service than a continuous auditing and compliance
tool.

**E.** Restore previous resource configurations with an AWS CloudFormation template: While CloudFormation
can be used for infrastructure as code and versioning of configurations, using it solely for restoring previous
configurations is not a proactive solution for tracking and auditing changes as they happen. It's more of a
disaster recovery approach than a continuous monitoring and auditing system. CloudTrail and Config are
much more suitable for those purposes.

---

## Question 319

**Answer:** **A**

**Explanation:**

The correct answer is A: Use AWS Systems Manager Session Manager to connect to the EC2 instances.

Here's a detailed justification:
The security team requires the removal of shared SSH keys due to security risks. Session Manager addresses
this by eliminating the need for SSH keys altogether. Session Manager uses the AWS Systems Manager
Agent (SSM Agent) on the EC2 instance to establish a secure connection to the EC2 instance through the
AWS cloud, removing the need for open inbound SSH ports (port 22) and managed SSH keys.

**Option B**, using AWS STS to generate one-time SSH keys, would be a more complex solution that still involves
managing SSH keys, albeit temporary ones. This adds administrative overhead compared to Session
Manager's keyless approach. Moreover, integrating STS for temporary SSH key generation would necessitate
custom scripting and key management, significantly increasing complexity.

**Option C**, bastion hosts, introduces a single point of failure and requires configuring security groups to allow
SSH access from the bastion hosts, adding to the administrative overhead. While it restricts access compared
to shared keys across all servers, it doesn't eliminate the need for SSH keys entirely and presents a
maintenance burden.

**Option D**, using Cognito with a custom authorizer and Lambda for SSH keys, is far more complex and requires
significant development and operational overhead to maintain and manage. It's an overkill for the stated
requirement.
Session Manager offers the least administrative overhead because it leverages the existing SSM Agent
(which is often already installed for patching and other management tasks), provides a secure and auditable
connection, and eliminates the complexities associated with managing SSH keys. It centralizes access
management through IAM roles, providing granular control over who can access which instances.

Therefore, Session Manager presents the most straightforward and secure solution, adhering to security
requirements while minimizing administrative overhead.

---

## Question 320

**Answer:** **A**

**Explanation:**

The best solution is A: Publish data to Amazon Kinesis Data Streams, Use Kinesis Data Analytics to query
the data.

Here's why:
Near Real-Time Querying: Kinesis Data Streams is designed for real-time data streaming and processing.
Kinesis Data Analytics enables you to query the streamed data with SQL in near real-time. This directly
addresses the requirement for near-real-time querying.
Scalability: Kinesis Data Streams is highly scalable, capable of handling high ingestion rates like 1 MB/s by
adjusting the number of shards. This ensures the solution can scale as data volume increases.
Minimal Data Loss: Kinesis Data Streams provides data durability and fault tolerance. Even if an EC2 instance
reboots, the data in the stream is not lost (within the configured retention period). This minimizes data loss
during instance restarts.
Alternative A weaknesses:
Kinesis Data Firehose is a loading service, not a querying service. While it can load data into data stores, it
doesn't allow for interactive, near-real-time queries.
Amazon Redshift is a data warehouse designed for analytical workloads. It's not optimized for near-real-time
querying of streaming data.
EC2 instance store are ephemeral. Data is lost when instance stops or terminates.

Amazon S3 is an object store. Querying this type of storage for near-real-time querying could potentially add
latency.
Amazon Athena can query the data. But it will be on a more ad hoc basis.
Amazon Elastic Block Store are durable but storing data on EBS and using ElastiCache is not a good
architectural fit.

Therefore, Kinesis Data Streams and Kinesis Data Analytics together provide a scalable, near-real-time
querying solution with minimal data loss, making option A the most suitable.
Amazon Kinesis Data Streams:https://aws.amazon.com/kinesis/data-streams/
Amazon Kinesis Data Analytics:https://aws.amazon.com/kinesis/data-analytics/

---

## Question 321

**Answer:** **D**

**Explanation:**

The correct answer is D because it directly enforces server-side encryption for all objects uploaded to the S3
bucket. The x-amz-server-side-encryption header, when present in a PutObject request, instructs S3 to encrypt
the object using server-side encryption (SSE). A bucket policy configured to deny uploads lacking this header
effectively mandates that all new objects are encrypted upon storage.

**Option A** and B focus on Access Control Lists (ACLs), not encryption. While ACLs control access permissions,
they do not provide data encryption. **Option A** is incorrect because requiring any ACL doesn't guarantee
encryption. **Option B** restricting to "private" ACL also controls access and not encryption.

**Option C**, referencing aws:SecureTransport, is related to requiring HTTPS for data transmission. While using
HTTPS secures data in transit, it doesn't guarantee that the data is encrypted at rest in S3 storage. Therefore,
it does not fulfill the requirement of ensuring that all objects uploaded to an Amazon S3 bucket are
encrypted.
By denying any PutObject request that does not include the x-amz-server-side-encryption header, the policy
enforces that all objects are encrypted at rest using server-side encryption, such as SSE-S3, SSE-KMS, or
SSE-C. The server-side encryption applied depends on the particular encryption key specified. This header is
the mechanism S3 provides for enforcing server-side encryption through bucket policies.
For more information on S3 bucket policies and server-side encryption, refer to the following AWS
documentation:
Using server-side encryption with bucket policies:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policy-using-sse.html
Protecting data using server-side encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html
Specifying Encryption in a Request: https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html

---

## Question 322

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides the most efficient and decoupled method for asynchronous
processing of image uploads and thumbnail generation, enabling a faster response time for the user.

Here's why:
Decoupling with SQS: Amazon SQS (Simple Queue Service) decouples the image upload process from the
thumbnail generation process. The application places a message containing information about the uploaded
image onto the SQS queue. This allows the image upload process to complete quickly and immediately
acknowledge the user. The user receives confirmation of receipt without waiting for the resource-intensive
thumbnail generation. https://aws.amazon.com/sqs/
Asynchronous Processing: The thumbnail generation process, triggered by messages in the SQS queue, can
then proceed asynchronously. A separate worker (e.g., an EC2 instance, Lambda function, or ECS task) can
consume messages from the queue and generate the thumbnail at its own pace. This addresses the
requirement to handle potentially time-consuming thumbnail generation without impacting the user's
perceived performance.
Scalability and Reliability: SQS is a highly scalable and reliable messaging service. It can handle a large
volume of messages, ensuring that no image upload requests are lost. The queue also provides buffering
capabilities, allowing the thumbnail generation process to keep up with varying workloads.
Alternative A's drawbacks: While Lambda can generate thumbnails, using the image upload as a direct event
source tightly couples the upload process with the thumbnail generation. This defeats the purpose of
providing a fast response to the user. Lambda invocations have time limits, which may be exceeded by long
thumbnail generations.
Alternative B's drawbacks: Step Functions are more suited for complex workflows with multiple steps and
decision points. For a simple scenario like this, SQS offers a more lightweight and efficient solution. Step

functions would introduce unnecessary complexity and overhead.
Alternative D's drawbacks: SNS is primarily designed for fan-out notifications to multiple subscribers. While
it could be used for this scenario, it's less suitable than SQS for asynchronous task processing, especially
when message reliability and guaranteed delivery are important. SNS delivers messages to all subscribers
immediately, which doesn't create a queue for later processing.

In summary, SQS enables decoupling, asynchronous processing, scalability, and reliability, providing the best
solution for achieving the desired faster response time for users while managing potentially lengthy
thumbnail generation processes.

---

## Question 323

**Answer:** **B**

**Explanation:**

The correct answer is B, which leverages API Gateway and Lambda for message processing and DynamoDB
for data storage. Here's why:
High Availability: API Gateway is a fully managed service that automatically scales and provides high
availability. Similarly, Lambda functions are automatically scaled by AWS based on demand, ensuring the
system can handle a large volume of messages from the badge readers without manual intervention.
DynamoDB is also a fully managed, highly available NoSQL database.
HTTPS Endpoint: API Gateway allows you to easily create secure HTTPS endpoints for receiving data from
the badge readers. This is a crucial requirement as the problem statement specified HTTPS communication
from the sensors.
Serverless Architecture: Lambda allows the solution to be serverless. You don't need to provision or manage
servers, reducing operational overhead and cost. The Lambda function contains the code to process the
messages from the badge readers.
Data Persistence: DynamoDB is a NoSQL database that is well-suited for storing structured or semistructured data from the badge readers. It offers fast read and write speeds and the flexibility to handle
varying data structures.
Scalability: API Gateway, Lambda, and DynamoDB are all designed for scalability. As the number of badge
readers or the frequency of scans increases, the system can automatically scale to handle the increased load.

Security: API Gateway offers features like authentication and authorization to protect the endpoint from
unauthorized access. Lambda can use IAM roles to access DynamoDB securely.

Why other options are less suitable:
A (EC2 instance): EC2 instances require manual management (patching, scaling) which is not ideal for high
availability and creates operational overhead. Also, EC2 is more expensive to run continuously compared to
serverless options.
C (Route 53 and Lambda): Route 53 is primarily for DNS routing, not for directly receiving and processing
HTTPS requests. It doesn't act as an HTTPS endpoint.
D (S3 and VPN): While S3 is good for storage, the sensor data likely needs processing before storage. Also,
writing data directly to S3 without any processing in between introduces security concerns (data validation,
etc.). It also requires a VPN which adds complexity. This method is only suitable if the sensor data can be
directly and securely persisted without modification.

---

## Question 324

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
Requirement: The company needs a disaster recovery plan for a large (hundreds of TB) on-premises file
storage volume with immediate access and minimal latency. They want to minimize changes to their existing

infrastructure.
Why D is the best choice (Volume Gateway - Stored Volume):
Stored Volume Configuration: A Stored Volume Gateway stores all data locally on-premises first. This is
crucial for maintaining immediate access and low latency, as the data is directly available on-site. The initial
synchronization moves all the existing hundreds of TB of data to AWS Storage Gateway.
iSCSI Integration: It utilizes iSCSI, the same protocol the company is already using, minimizing infrastructure
changes. The gateway integrates with the existing iSCSI device, providing seamless compatibility.
Snapshots for DR: Scheduled snapshots capture point-in-time copies of the data and store them in AWS. This
provides a reliable mechanism for recovery.
DR Recovery: In a disaster, the snapshots can be restored to an Amazon EBS volume and attached to an EC2
instance, enabling a functional file server in AWS. This ensures business continuity.

Why other options are incorrect:
A (S3 File Gateway): File Gateway uses S3 as the primary storage, which introduces latency to access the
data. Furthermore, it requires modifying existing applications to use the NFS protocol, adding complexity.
B (Tape Gateway): Tape Gateway is for archival purposes, not for immediate access disaster recovery.
Restoring from tapes is a slow process and wouldn't meet the "immediate access" requirement.
C (Volume Gateway - Cached Volume): While it uses iSCSI, a cached volume only stores the frequently
accessed data locally. With hundreds of TB, a 10 TB cache would mean that most data would reside in AWS,
leading to high latency for access.
In conclusion, the Stored Volume Gateway configuration maintains local data access for low latency,
integrates seamlessly with existing iSCSI infrastructure, and leverages AWS snapshots for reliable disaster
recovery.
AWS Storage Gateway Documentation:
https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html
Volume Gateway - Stored Volume details:
https://docs.aws.amazon.com/storagegateway/latest/userguide/stored-volumes.html

---

## Question 325

**Answer:** **A**

**Explanation:**

The correct answer is A: Update the Amazon Cognito identity pool to assume the proper IAM role for access
to the protected content.

Here's a detailed justification:
The core problem is users, authenticated through Cognito, are failing to access protected S3 content. Cognito
Identity Pools are designed precisely to grant temporary AWS credentials to users, allowing them to access
AWS resources. The crucial step is ensuring that the Cognito Identity Pool is configured with an IAM role that
has the necessary permissions to read (or otherwise access) the protected S3 bucket.
Cognito provides two types of identities: authenticated and unauthenticated. Regardless of identity type,
Cognito assumes an IAM role on behalf of the user. This IAM role dictates what AWS resources the user can
access. If the IAM role assigned to the Cognito Identity Pool lacks S3 read permissions for the protected
bucket, users will be denied access, hence the errors.
Updating the Identity Pool to assume an IAM role with the required s3:GetObject (and potentially other actions
like s3:ListBucket if listing the contents of the bucket is needed) permission on the protected S3 bucket
resolves the issue. This approach adheres to the principle of least privilege: the user only gets the permissions
needed to access the protected resources, and the permissions are temporary, granted by AWS STS (Security
Token Service) behind the scenes.

**Option B** is incorrect because S3 ACLs are a legacy access control mechanism and are generally not
recommended for granting access to users authenticated via Cognito. IAM roles and policies offer much finergrained control and better integration with identity providers.

**Option C** is unrelated to the authentication and authorization problem. S3's eventual consistency is a factor to
consider when designing applications, but it's not the root cause here. The problem is that the authenticated
users lack the permissions to read the data in the first place.

**Option D** is less efficient and potentially less secure than using IAM roles directly. While custom attribute
mappings within Cognito can pass user attributes to IAM policies, it's generally simpler and more
maintainable to assign users to Cognito Identity Pools that assume predefined IAM roles. Moreover, simply
mapping attributes doesn't automatically grant permissions; the policies still need to be defined and
associated with the role. Directly updating the IAM role associated with the Identity Pool is the most direct
and appropriate solution.

In summary, Cognito Identity Pools linked to appropriate IAM roles provide a robust and secure mechanism for
granting authenticated users access to protected AWS resources.
Supporting links:
AWS Cognito Identity Pools: https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
S3 Permissions Overview: https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-iam.html

---

## Question 326

**Answer:** **AB**

**Explanation:**

Here's a detailed justification for why options A and B are the correct choices, and why the others are not:

**A.** Move assets to S3 Intelligent-Tiering after 30 days:
S3 Intelligent-Tiering is designed for data with unknown or changing access patterns. It automatically moves
data between frequent, infrequent, and archive access tiers based on actual access patterns, optimizing costs
without performance impact.
The question states that access patterns for each object are inconsistent after 30 days. Intelligent-Tiering is
ideal for this scenario, as it automatically adapts to these changing patterns.
Standard-IA is suitable for data accessed less frequently, but requires you to know when you need to change
tier. Intelligent-Tiering automates this decision.

**B.** Configure an S3 Lifecycle policy to clean up incomplete multipart uploads:
The company uses multipart upload and overwrites objects. Incomplete multipart uploads (if a part fails to
upload or the upload is aborted) consume storage space unnecessarily, increasing costs.
An S3 Lifecycle policy can automatically clean up these incomplete uploads after a specified period.
Multipart uploads are used for large objects and are prone to issues, making this a crucial optimization.

Why the other options are incorrect:

**C.** Configure an S3 Lifecycle policy to clean up expired object delete markers: Object delete markers are
small and their cost is insignificant. It is not an area that needs optimisation.

**D.** Move assets to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days: This is less optimal than
Intelligent-Tiering because it requires you to know the access pattern.

**E.** Move assets to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days: While One Zone-IA is
cheaper, it compromises data availability and resiliency by storing data in a single availability zone. The
question specifies a need for "high availability and resiliency," making this option unsuitable.
Supporting Links:
S3 Intelligent-Tiering: https://aws.amazon.com/s3/storage-classes/intelligent-tiering/
S3 Lifecycle Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configurationexamples.html
Multipart Upload: https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html

---

## Question 327

**Answer:** **A**

**Explanation:**

The correct answer is A: Update the route table for the private subnet to route the outbound traffic to an AWS
Network Firewall firewall. Configure domain list rule groups.

Here's why:
Requirement for granular control: The scenario necessitates restricting outbound traffic to specific,
approved third-party software repositories identified by their URLs. Security groups and NACLs, while useful
for basic traffic filtering, don't offer URL-based filtering. AWS WAF is designed for protecting web
applications from common exploits and doesn't typically handle generic outbound traffic filtering from EC2
instances. An ALB is primarily designed for handling inbound application traffic and is not suited for routing
and filtering general outbound internet traffic from EC2 instances.
AWS Network Firewall: AWS Network Firewall provides centralized network protection for VPCs. It allows
defining fine-grained rules based on domain names, URLs, and other criteria, making it ideal for meeting the
requirement of allowing access only to specific software repositories.
Domain list rule groups: Network Firewall utilizes domain list rule groups, which enable specifying a list of
allowed or denied domain names. This aligns directly with the requirement of permitting access only to the
URLs of the approved software repositories.
Private Subnet & Route Table: The EC2 instances reside in a private subnet, meaning they don't have direct
access to the internet. Configuring the route table to route outbound traffic to the Network Firewall ensures
that all traffic from these instances is inspected and filtered according to the defined rules.
Security Best Practices: Using a centralized firewall solution like Network Firewall promotes consistent
security policies across the entire VPC, adhering to security best practices for network segmentation and
traffic inspection.

Why other options are incorrect:
B (AWS WAF): AWS WAF is designed for web application protection and primarily deals with HTTP/HTTPS
traffic targeting web servers. It's not suitable for filtering all outbound traffic from EC2 instances.
C (Security Groups): Security groups operate at the instance level and are stateful firewalls that allow or
deny traffic based on IP addresses and ports. They lack the ability to filter traffic based on URLs.
D (ALB): Application Load Balancers are for distributing incoming application traffic. They are not designed
for routing and filtering general outbound traffic from EC2 instances in a private subnet.

---

## Question 328

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
The problem describes a scenario where a company anticipates a surge in sales requests during product
launches, potentially overwhelming their API hosted on EC2 instances. The goal is to ensure all requests are
processed successfully despite the load spike.

**Option D** addresses this problem effectively by:

1. Caching static content using Amazon CloudFront: Serving static content (like images, CSS,
JavaScript) from CloudFront reduces the load on the EC2 instances, freeing them up to handle
dynamic API requests. CloudFront distributes the content globally, improving website performance
for users worldwide. https://aws.amazon.com/cloudfront/

2. Using Amazon SQS to decouple the web application from the API: Introducing an SQS queue
between the website and the API creates a buffer. The website can quickly submit sales requests to
the SQS queue without waiting for the API to process them immediately. This prevents the website
from being overwhelmed and ensures requests are not lost. https://aws.amazon.com/sqs/

3. EC2 instances process messages from the SQS queue asynchronously: The EC2 instances, acting
as workers, pull requests from the SQS queue at their own pace. Even during peak loads, the queue
stores requests until the instances can process them, preventing request loss. This asynchronous
processing ensures that all requests are eventually handled. This pattern implements a form of
message queuing, promoting system resilience and scalability.

Why other options are less suitable:

**A:** Caching dynamic content isn't typically beneficial as it changes frequently. Increasing the number of EC2
instances alone might not be enough to handle the sudden surge and doesn't guarantee requests won't be
dropped.

**B:** While caching static content with CloudFront is good, simply using an Auto Scaling group might not
prevent the EC2 instances from being overwhelmed if the traffic spike is too sudden and large. Auto Scaling
takes time to provision new instances.

**C:** Caching dynamic content with CloudFront is not suitable. ElastiCache can help with database caching but
doesn't directly address the problem of front-end request overload. It won't stop the EC2 instances from
being overwhelmed by the initial surge of requests.

In summary, **Option D** combines caching static content with asynchronous processing via SQS to effectively
handle the expected traffic spikes and ensure all sales requests are successfully processed. The use of SQS
offers resilience and scalability, which are crucial for handling unpredictable workloads.

---

## Question 329

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS services specifically designed for vulnerability scanning
and patch management.
Amazon Inspector is a vulnerability management service that automatically assesses EC2 instances for
vulnerabilities and deviations from best practices. It provides detailed findings with severity levels and
remediation recommendations. https://aws.amazon.com/inspector/
AWS Systems Manager Patch Manager automates the process of patching managed instances, including EC2
instances, with security-related updates. It allows for scheduled patching, compliance scanning, and
reporting on patch status. Patch Manager directly addresses the need for regular patching and reporting on
patch status. https://aws.amazon.com/systems-manager/features/patch-manager/

**Option A** is incorrect because Amazon Macie focuses on discovering and protecting sensitive data stored in
Amazon S3. It doesn't scan EC2 instances for general software vulnerabilities. Cron jobs on individual
instances are less manageable and scalable compared to Systems Manager Patch Manager for a large fleet.

**Option B** is incorrect because Amazon GuardDuty is a threat detection service that monitors for malicious
activity and unauthorized behavior. While it identifies threats, it does not provide vulnerability scanning or
patch management capabilities. Session Manager facilitates secure instance access but doesn't handle the
patching process itself.

**Option C** is incorrect because Amazon Detective analyzes log data to investigate security incidents. It doesn't
scan for vulnerabilities or manage patching. While EventBridge can trigger actions on a schedule, it lacks the
integrated patch management capabilities of Systems Manager Patch Manager, such as dependency
resolution, reboot management, and reporting.

---

## Question 330

**Answer:** **A**

**Explanation:**

The correct answer is A because it leverages AWS KMS, the recommended and secure way to encrypt data at
rest in RDS. AWS KMS allows you to create and manage encryption keys centrally and securely. Enabling
encryption for an RDS DB instance using a KMS key means the data is encrypted at rest using industrystandard encryption algorithms. RDS integrates seamlessly with KMS, handling the encryption and decryption
operations transparently.

**Option B** is incorrect. While AWS Secrets Manager is used for storing secrets like database credentials, it's
not the ideal tool for managing encryption keys for RDS data at rest. KMS is specifically designed for key
management and offers features like key rotation and auditing, which are critical for security and compliance.
Options C and D are incorrect because ACM and IAM certificates are used for encrypting data in transit using
SSL/TLS, not for encrypting data at rest. SSL/TLS secures the connection between the client and the
database server, preventing eavesdropping, but it doesn't protect the data stored on the disk. Encryption at
rest protects data if the underlying storage is compromised.

Therefore, leveraging KMS for RDS encryption addresses the security requirement of encrypting data at rest
in a secure, manageable, and compliant manner. This is best practice and directly aligned with AWS's
recommended architecture.

https://docs.aws.amazon.com/kms/latest/developerguide/overview.htmlhttps://docs.aws.amazon.com/AmazonRDS/late
at-rest-encryption.html

---

## Question 331

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why the correct answer is A (Use AWS Snowball) and why the other options
are less suitable, considering the constraints of the scenario:
Why AWS Snowball is the Best Choice:
The primary bottleneck is the limited network bandwidth (15 Mbps with a 70% utilization cap) and the large
data volume (20 TB) within a strict timeframe (30 days). Calculating the transfer time using the available
bandwidth is crucial:
Usable bandwidth: 15 Mbps * 70% = 10.5 Mbps
Data volume: 20 TB = 20 1024 GB = 20480 GB = 20480 8 bits = 163840 Gb
Estimated transfer time: 163840 Gb / 10.5 Mbps = ~15603 seconds/Gb = 15603 * (1/3600) hours/Gb = ~4.33
hours/Gb
Total time: 4.33 hours/Gb * 20480 Gb = ~88700 hours = ~3696 days
This calculation clearly shows that transferring 20 TB of data over a 10.5 Mbps connection would take far
longer than the allowed 30 days. AWS Snowball (now part of AWS Snow Family) offers a physical appliance
to securely transfer large amounts of data into and out of AWS. You ship the appliance, load it with your data
in your data center, and then ship it back to AWS, where the data is uploaded to S3. This bypasses the
network constraint. Snowball offers significant advantages in cost and time when dealing with substantial
data volumes and limited bandwidth, fitting the scenario perfectly. The data is also encrypted in transit and at
rest for security.
Why Other Options are Less Suitable:

**B.** Use AWS DataSync: DataSync is a good choice for ongoing replication of data, especially when there's a
reasonable network connection. However, with only 10.5 Mbps available and 20 TB to transfer initially, it's
simply too slow to meet the 30-day deadline, as demonstrated by the calculations above. DataSync utilizes
the network, so it is constrained by the bandwidth limitation.

**C.** Use a secure VPN connection: A VPN secures the data transfer between the on-premises data center and
AWS. However, it doesn't address the fundamental problem of limited bandwidth. Using a VPN on top of an
already constrained 15 Mbps connection only adds overhead (reducing the effective bandwidth further),
making the transfer even slower.

**D.** Use Amazon S3 Transfer Acceleration: S3 Transfer Acceleration uses Amazon CloudFront's globally
distributed edge locations to accelerate uploads to S3. While it can improve transfer speeds, it still relies on
the internet connection. With a very constrained bandwidth (10.5 Mbps), S3 Transfer Acceleration won't
provide nearly enough acceleration to transfer 20 TB within 30 days. The initial bandwidth limitations still
apply.

---

## Question 332

**Answer:** **B**

**Explanation:**

The correct answer is B. Migrate the files to an Amazon FSx for Windows File Server file system. Integrate
the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN.

Here's a detailed justification:

1. Security Requirement: The company needs secure access to confidential files, limiting access to
authorized users only. Answer B addresses this by integrating Amazon FSx for Windows File Server
with the on-premises Active Directory. Active Directory is a directory service that allows central
management of users and security policies.

2. Authorization: By integrating FSx with Active Directory, existing user accounts and permissions
defined in the on-premises environment are extended to the cloud file system. Only authorized users
will have access based on their defined roles.

3. Secure Download: Using AWS Client VPN ensures that all data transferred between the employee's
device and AWS is encrypted over a secure VPN tunnel. This satisfies the requirement of secure
downloads to employees' devices.

4. Scalability: Amazon FSx for Windows File Server is a fully managed Windows file server in the cloud.
Migrating the files to FSx solves the capacity issue of the on-premises server, as FSx can scale to
meet the company's growing storage needs.

5. Public vs. Private Subnets (**Option A**): **Option A** suggests migrating to an EC2 instance in a public
subnet. Public subnets expose resources to the internet, creating security risks. Limiting inbound
traffic by IP address is not a scalable or secure solution, especially with remote employees who have
dynamic IP addresses.

6. S3 with Signed URLs/Public VPC Endpoint (Options C & D): Options C and D suggest storing files in
Amazon S3. While S3 is excellent for object storage, it requires additional configuration to mimic the
behavior of a file server, such as shared access and file locking. Signed URLs can be complex to
manage at scale and are typically used for temporary access. Public VPC endpoints are generally
discouraged for sensitive data.

7. AWS IAM Identity Center (**Option D**): While using AWS IAM Identity Center (formerly AWS Single
Sign-On) can provide centralized authentication, it doesn't inherently guarantee secure file
downloads or integrate seamlessly with existing on-premises Active Directory permissions for file
access control without significant additional configuration.

8. FSx for Windows File Server as a File Server: FSx for Windows File Server offers features such as
SMB protocol support, Active Directory integration, and NTFS permissions that makes it appropriate
for organizations looking to move existing Windows file server workloads to AWS, without requiring
significant changes to application code.

In summary, **Option B** is the only solution that meets all the requirements, offering secure access via VPN,

integration with existing Active Directory for authorization, and scalability through Amazon FSx for Windows
File Server.
Supporting Links:
Amazon FSx for Windows File Server: https://aws.amazon.com/fsx/windows/
AWS Client VPN: https://aws.amazon.com/vpn/client-vpn/

---

## Question 333

**Answer:** **C**

**Explanation:**

The correct answer is C. Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly
schedule.

Here's why:
The problem is a predictable, recurring spike in CPU utilization due to a month-end financial calculation that
happens on a fixed schedule. An Auto Scaling scheduled scaling policy directly addresses this predictable
workload. It allows you to proactively increase the number of EC2 instances before the workload hits,
ensuring enough capacity to handle the increased demand and prevent the CPU from maxing out. By scaling
up in anticipation, the application remains responsive and avoids downtime. Scheduled scaling is ideal for
workloads that have consistent and repeating patterns.

**Option A** (CloudFront) isn't suitable because CloudFront is a content delivery network (CDN). It helps
distribute static content and doesn't address the underlying processing bottleneck on the EC2 instances
performing the financial calculations. The issue isn't about content delivery speed but about compute
capacity.

**Option B** (Simple scaling policy) isn't optimal. A simple scaling policy reacts after CPU utilization hits a
threshold. In this case, by the time the Auto Scaling group responds to the high CPU, the application has
already become slow or unresponsive, as the CPU has already peaked. While reactive scaling is useful,
proactive scaling through scheduled actions is better for predictable spikes.

**Option D** (ElastiCache) might help if the financial calculations involve frequent reads of the same data, which
isn't specified. However, it doesn't address the core problem of needing more compute power to process the
financial calculations themselves. Furthermore, implementing ElastiCache could involve significant
application code changes, making it a more complex solution than scheduled scaling. Even if caching
improves some aspects, the underlying computational demand still exists and needs to be managed with
capacity. Scheduled scaling handles the capacity increase preemptively, directly addressing the workload
spike.

In summary, scheduled scaling is the most efficient and targeted solution because it precisely addresses the
predictable workload and avoids the reactive nature of other Auto Scaling policies.

---

## Question 334

**Answer:** **A**

**Explanation:**

The correct answer is A because it directly addresses the requirements with the least operational overhead
and no changes to the customer's application. AWS Transfer Family with SFTP for Amazon S3 natively
supports SFTP protocol to access S3 buckets. It also provides built-in integration with Microsoft Active
Directory for authentication. This integration allows users to use their existing Active Directory credentials to
authenticate and access the S3 bucket via SFTP. It avoids the need for custom authentication mechanisms or
application changes.

**Option B** is incorrect because AWS DMS is for database migrations and does not support SFTP or file transfer
scenarios. It is unsuitable for synchronizing files between an on-premises client and S3.

**Option C** is incorrect because AWS DataSync is used to synchronize data between on-premises storage and
AWS storage services. While it can sync with S3, it does not directly support SFTP. Also, configuring AWS
IAM Identity Center (formerly AWS SSO) would require changes to the client application and is not designed
for native SFTP authentication against Active Directory.

**Option D** is incorrect because setting up an EC2 instance involves more operational overhead than using AWS
Transfer Family. It would require managing the EC2 instance, installing and configuring an SFTP server, and
handling authentication against Active Directory manually using more complex configurations compared to
AWS Transfer Family's built-in Active Directory integration. Also, this option requires more management and
potentially higher costs than using the fully managed AWS Transfer Family service.
In conclusion, AWS Transfer Family provides a managed service that integrates directly with Active Directory
and S3 via SFTP, fulfilling all requirements with minimal configuration and operational overhead.
Here are some authoritative links for further research:

AWS Transfer Family: https://aws.amazon.com/transfer/
Using Active Directory authentication with AWS Transfer Family:
https://docs.aws.amazon.com/transfer/latest/userguide/active-directory.html

---

## Question 335

**Answer:** **B**

**Explanation:**

The question targets minimizing EC2 instance initialization latency during demand spikes when using Auto
Scaling. This is primarily achieved by reducing the time it takes to create instances from the AMI.

**Option B**, enabling Amazon EBS fast snapshot restore (FSR) and using a snapshot to provision the AMI,
directly addresses the latency requirement. EBS fast snapshot restore significantly reduces the time to
provision volumes from a snapshot. When you create an AMI from a snapshot with FSR enabled, subsequent
EC2 instances launched using that AMI will have volumes that are quickly provisioned, minimizing initialization
latency. By replacing the AMI in the Auto Scaling group with the new AMI based on FSR, new instances
launched by Auto Scaling will benefit from the rapid EBS volume provisioning.

**Option A** involves registering an AMI from a snapshot. While this creates an AMI, it doesn't inherently address
the EBS volume provisioning time. Creating an AMI from a snapshot is a standard practice, but it does not
directly minimize instance initialization latency when using EBS backed AMI. Step Functions will not reduce
the launch time, it will only orchestrate a deployment.

**Option C** introduces Amazon Data Lifecycle Manager (DLM) and Lambda. While DLM can automate AMI
creation, it doesn't inherently minimize the EBS volume provisioning time. The use of Lambda to modify the
Auto Scaling group's AMI might work, but it would not solve the fundamental problem of reducing the latency
with the launch of each instance.

**Option D** employs EventBridge and AWS Backup. While AWS Backup can be used to create EBS snapshots,
it's not directly geared towards accelerating instance launch times. The use of EventBridge here doesn't
contribute to a faster EC2 initialization.

Therefore, the optimal solution is to enable EBS fast snapshot restore and provision an AMI from the restored
snapshot to minimize EBS volume creation latency during instance launch within the Auto Scaling group.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshotrestore.htmlhttps://aws.amazon.com/ebs/features/fast-snapshot-restore/

---

## Question 336

**Answer:** **A**

**Explanation:**

The best solution is A because it leverages AWS Secrets Manager, which is specifically designed for
managing, rotating, and retrieving database credentials securely. Using Secrets Manager minimizes
operational overhead by automating the rotation process. Creating a new KMS key ensures encryption at rest
for the stored credentials. Configuring a custom rotation period of 14 days aligns with the company's security
requirements. The application can then retrieve the credentials from Secrets Manager.

**Option B**, using Systems Manager Parameter Store, is less suitable because while it can store credentials
securely, automated rotation is not its primary feature. It would require a custom Lambda function to handle
the rotation logic, increasing operational effort. Also, implementing rotation logic in Lambda is not as secure
and straightforward as leveraging the built-in features of Secrets Manager.
Options C and D, involving storing credentials in EFS or S3 and using a Lambda function for rotation, are
considerably more complex and introduce more operational overhead. They require managing file system
permissions, handling file uploads/downloads, and synchronizing credential updates across instances.
Furthermore, keeping credentials in files on EC2 instances or even in encrypted S3 buckets exposes them to
potential breaches if not handled properly. Secrets Manager encapsulates these concerns effectively.
Secrets Manager handles the complexities of secure credential storage, encryption using KMS, and
automated rotation, making it the least operational effort solution.
Here are some authoritative links for further research:
AWS Secrets Manager: https://aws.amazon.com/secrets-manager/
AWS Key Management Service (KMS): https://aws.amazon.com/kms/
Amazon Aurora Security:
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora. Security.html

---

## Question 337

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution, along with supporting concepts and

---

## Question 338

**Answer:** **D**

**Explanation:**

The most cost-effective disaster recovery (DR) solution for an Aurora MySQL SaaS platform requiring
replication to a secondary region is using Aurora Global Database with a minimum of one DB instance in the
secondary region. Here's why:
Aurora Global Database: This feature is specifically designed for DR and global read performance. It provides
low latency replication across AWS Regions using dedicated infrastructure.
https://aws.amazon.com/rds/aurora/global-database/
Automatic Failover: In case of a primary Region failure, Aurora Global Database enables a fast, managed
failover to the secondary Region, minimizing downtime.
Cost Efficiency: While you're paying for storage and compute in the secondary region, having one DB instance
ensures availability while keeping costs down compared to running a fully scaled-out cluster that's idle. This
allows the DR site to be readily available without incurring the full cost of an actively used environment.
Other options compared:
MySQL Binary Log Replication (**Option A**): Requires more manual configuration and management than Aurora
Global Database. Setting up and maintaining replication, handling failover, and ensuring data consistency are
more complex and prone to errors, increasing operational overhead.
AWS DMS (**Option C**): While DMS can replicate data, it introduces more overhead than Aurora Global
Database, as it's a separate service. It also may not be the most performant option for a high-volume SaaS
platform. Additionally, removing the DB instance entirely negates the DR benefit.
Removing DB Instance in Secondary Region (**Option B** and C): A DR strategy requires at least one instance in
the secondary region to provide a failover target. Removing all instances eliminates the immediate failover
capability, defeating the purpose of the DR plan.

Therefore, Aurora Global Database with at least one DB instance in the secondary Region strikes the best
balance between cost, performance, and ease of management for a robust DR solution.

---

## Question 339

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides a secure and efficient solution for managing database credentials
with minimal code changes. Here's a detailed justification:
Secrets Manager for credential storage: AWS Secrets Manager is designed specifically for managing
sensitive information like database credentials. It offers secure storage and retrieval, making it ideal for this
scenario. Storing credentials directly in the application code is a significant security risk.
Reduced programming effort: The solution leverages Secrets Manager's built-in rotation capabilities,
minimizing the need for custom code. Options A and B require more custom code to manage the credential
rotation process.
RDS integration: Secrets Manager has built-in integration for rotating credentials directly on RDS, simplifying
the overall solution.
Automated rotation: The key aspect here is the automated credential rotation. This is crucial for security. By
regularly changing the database credentials, the risk of compromised credentials being used maliciously is
substantially reduced. Secrets Manager offers this capability, making it a suitable choice.
Parameter Store vs. Secrets Manager: While Systems Manager Parameter Store can store secrets, Secrets
Manager is preferred for database credentials due to its built-in rotation features and finer-grained access
control specifically designed for sensitive information. Parameter Store is best used to store configuration
data that is not sensitive.
KMS considerations: While KMS can encrypt the secrets, it doesn't manage the rotation of those secrets
within RDS, requiring much more coding effort. The application would need to retrieve the encrypted secret,
decrypt it using KMS, and then update the RDS database with the new credentials. Secrets Manager
simplifies this process.

In summary, option C provides a balance between security and ease of implementation by utilizing Secrets
Manager's secure storage and automated rotation capabilities, minimizing the need for custom code and
meeting the requirement of "least amount of programming effort."
Supporting Links:

AWS Secrets Manager: https://aws.amazon.com/secrets-manager/
Rotate AWS Secrets Manager secrets:
https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html
AWS Systems Manager Parameter Store: https://docs.aws.amazon.com/systemsmanager/latest/userguide/systems-manager-parameter-store.html

---

## Question 340

**Answer:** **A**

**Explanation:**

The correct answer is A: Use AWS WAF in front of the ALB. Associate the appropriate web ACLs with AWS
WAF.

Here's a detailed justification:
SQL injection is a code injection technique used to attack data-driven applications, in which malicious SQL
statements are inserted into an entry field for execution. This allows attackers to potentially bypass security
measures and gain unauthorized access to the database.
AWS WAF (Web Application Firewall) is a web application firewall that helps protect web applications from
common web exploits and bots that may affect availability, compromise security, or consume excessive
resources. It allows you to control access to your content by defining customizable web security rules. These
rules can filter out malicious traffic patterns, including those commonly associated with SQL injection
attacks.

**Option A** effectively leverages AWS WAF. By placing AWS WAF in front of the Application Load Balancer
(ALB), all incoming traffic is inspected against the defined web ACLs (Access Control Lists). These web ACLs
contain rules designed to identify and block SQL injection attempts. WAF can inspect HTTP headers, request
body, and URI strings for malicious SQL code. By blocking these requests before they reach the application,
WAF prevents the SQL injection vulnerability from being exploited.

**Option B**, creating an ALB listener rule to reply with a fixed response, is not a suitable solution. While it might
prevent immediate execution of the SQL injection, it doesn't address the underlying vulnerability and could
lead to application malfunction and denial of service. It's a reactive measure, not a preventative one. It also
provides limited protection against evolving attack vectors.

**Option C**, subscribing to AWS Shield Advanced, mainly protects against DDoS attacks, not specific
application-level vulnerabilities like SQL injection. While Shield Advanced offers visibility and mitigation
assistance, it's not a direct solution to the SQL injection problem.

**Option D**, using Amazon Inspector, is a vulnerability management service that automatically assesses
applications for security vulnerabilities or deviations from best practices. While Inspector can identify the
presence of the SQL injection vulnerability, it does not automatically block the attacks in real-time. Inspector

would generate findings but wouldn't prevent the attacks. You'd still need a mechanism to block the attacks
based on Inspector's findings.

Therefore, the most appropriate and effective solution is to use AWS WAF with appropriate web ACLs, as this
provides real-time protection against SQL injection attacks by inspecting and filtering malicious traffic before
it reaches the application.

---

## Question 341

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages Lake Formation's built-in capabilities for data governance and
access control, minimizing operational overhead.

Here's a detailed justification:
Requirement: Join data from S3 data lake and Aurora MySQL for visualization in QuickSight with column-level
authorization for the marketing team.
Why D is the best solution:
Lake Formation Blueprint for Ingestion: Lake Formation blueprints automate the process of ingesting data
from various sources, including relational databases like Aurora MySQL, into the S3 data lake. This simplifies
the data loading process compared to manual ETL jobs using EMR or Glue Studio. ^1^
Lake Formation for Column-Level Access Control: Lake Formation allows you to define fine-grained access
controls, including column-level permissions. This enables the marketing team to access only the columns
they need in both the data lake and the ingested Aurora data. ^2^
Athena as the Data Source: Athena integrates seamlessly with Lake Formation, enabling it to enforce the
defined access controls. When users query the data through Athena, Lake Formation automatically filters the
data based on their permissions. Athena is a serverless query service that provides a straightforward way to
analyze data in S3. ^3^

Why other options are less optimal:
A (EMR to QuickSight SPICE): This approach bypasses the data lake and Lake Formation. It's less scalable,
and governance is managed within the SPICE dataset, increasing operational overhead. Additionally, SPICE
has limitations in terms of data volume and complexity compared to querying directly from the data lake via
Athena.
B (Glue Studio to S3, IAM Policies): While Glue Studio can ingest data, using IAM policies for column-level
access control is complex and error-prone. It becomes difficult to manage permissions across different users
and data sources, especially at scale. This approach also misses the advantage of using Lake Formation's
central governance.
C (Glue Elastic Views, S3 Bucket Policy): Glue Elastic Views are generally for real-time data propagation,
which isn't the primary requirement here. Using S3 bucket policies for column-level access control is not
possible, as bucket policies only control access at the object level, not within the object. This approach also
doesn't leverage the governance benefits of Lake Formation.

In summary, leveraging Lake Formation's built-in capabilities for data ingestion, governance, and access
control provides the most efficient and scalable solution for this scenario.

---

## Question 342

**Answer:** **C**

**Explanation:**

The correct answer is C: Create a predictive scaling policy for the Auto Scaling group. Configure the policy
to scale based on forecast. Set the scaling metric to CPU utilization. Set the target value for the metric to
60%. In the policy, set the instances to pre-launch 30 minutes before the jobs run.

Here's a detailed justification:
The core requirement is to automatically adjust the Auto Scaling group's desired capacity 30 minutes before
the batch jobs start, based on anticipated load. Given that the company lacks the resources for detailed
capacity trend analysis, predictive scaling offers the most suitable and automated solution.

Predictive Scaling: Amazon EC2 Auto Scaling's predictive scaling analyzes historical CPU utilization trends
(which are consistently above 60%). It forecasts future capacity needs and proactively adjusts the Auto
Scaling group. This addresses the need for capacity 30 minutes ahead of time, as specified in the problem. By
using forecast data, the solution automatically determines the desired capacity without manual calculations.
This approach reduces operational overhead.
CPU Utilization Metric: The problem states that the baseline CPU utilization during the batch jobs is at least
60%. Predictive scaling can leverage CPU utilization as a metric to learn and forecast the required capacity.
Pre-launch Instances: The ability to pre-launch instances 30 minutes before the jobs run is a crucial feature
of the predictive scaling policy that directly addresses the requirement.
Let's analyze why the other options are less ideal:
A (Dynamic Scaling): Dynamic scaling responds to current CPU utilization. While it can maintain a target CPU
of 60%, it won't provision capacity before the load increases. This introduces a delay, which is not acceptable
as the jobs require the capacity before they start.
B (Scheduled Scaling): Scheduled scaling relies on fixed schedules. While you can set a weekly schedule to
increase capacity 30 minutes before the jobs run, it doesn't account for variations in transaction volume. It
requires a good understanding of the required capacity, and therefore would require manual intervention and
trend analysis, which the company wishes to avoid. Furthermore, the problem states they do not have
resources for capacity analysis.
D (EventBridge & Lambda): Using EventBridge and Lambda introduces unnecessary complexity. It would
require setting up complex rules based on real-time CPU utilization metrics, and then programming Lambda
to adjust the Auto Scaling group. This increases operational overhead compared to the built-in predictive
scaling functionality. It suffers from the same delay issue as **Option A** - it reacts to the 60% threshold being
crossed rather than proactively scaling.

---

## Question 343

**Answer:** **C**

**Explanation:**

The correct answer is C. Migrating the MySQL database to Amazon Aurora Global Database offers the lowest
operational overhead while meeting the disaster recovery requirements of multi-Region support and minimal
management. Aurora Global Database is designed for DR scenarios, providing fast recovery with minimal data
loss.

Here's why:
Aurora Global Database: This feature allows you to replicate your Aurora MySQL database to multiple AWS
Regions. The primary region handles writes, and the secondary region(s) are read-only replicas with low
latency replication. In the event of a primary region failure, a secondary region can be promoted to become
the new primary, minimizing downtime and data loss. https://aws.amazon.com/rds/aurora/features/globaldatabase/
Multi-Region DR with minimal overhead: Aurora Global Database automates much of the replication and
failover process, significantly reducing the operational burden compared to manual replication setups.
Here's why the other options are less suitable:

**Option A** (EC2 replication): Setting up MySQL replication on EC2 instances requires manual configuration,
monitoring, and maintenance of replication. Failover requires significant manual intervention, increasing
operational overhead. This method also doesn't offer as robust DR capabilities as Aurora Global Database.

**Option B** (RDS Multi-AZ with read replicas): RDS Multi-AZ provides high availability within a single region.
While read replicas can exist in different Availability Zones, they aren't designed for cross-region DR with
automated failover. Manual intervention is required for DR failover, and RPO/RTO are higher than with Aurora
Global Database. https://aws.amazon.com/rds/mysql/features/

**Option D** (S3 CRR): While S3 Cross-Region Replication can replicate backups to another region, restoring
from backups is a slow and manual process. This significantly increases the Recovery Time Objective (RTO)
and Recovery Point Objective (RPO) compared to Aurora Global Database, which is designed for rapid failover.
Restoring from backups also involves additional steps like provisioning a new EC2 instance, installing MySQL,
and restoring the backup, adding to the operational overhead. https://aws.amazon.com/s3/features/

In summary, Aurora Global Database provides the most efficient and automated solution for multi-region DR
for a MySQL database, aligning with the requirement of "least operational overhead."

---

## Question 344

**Answer:** **A**

**Explanation:**

The correct answer is A: "Use the Amazon SQS Extended Client Library for Java to host messages that are
larger than 256 KB in Amazon S3."

Here's why:
Problem Statement: The application's limitation is parsing SQS messages larger than 256KB. The goal is to
handle up to 50MB with minimal code changes.
Why **Option A** is Best: The Amazon SQS Extended Client Library for Java is designed specifically for handling
large messages exceeding the SQS size limit. It stores the large message payload in Amazon S3 and stores a
reference to the S3 object in the SQS message. This approach allows SQS to act as a pointer to the actual
message content. Because the library handles the complexity of interacting with S3, the code changes
required in the application will be minimal.
Why Other Options Are Not Optimal:
B (Amazon EventBridge): While EventBridge is useful, it's designed for event-driven architectures.
Substituting SQS with EventBridge would necessitate a significant rewrite of the existing application,
deviating from the "fewest changes" requirement. Furthermore, EventBridge has a smaller message size limit
than SQS with the Extended Client Library.
C (Changing SQS Limit): SQS has a hard limit of 256KB for message size. You cannot simply change this limit.
D (Amazon EFS): Storing large messages in EFS and referencing them from SQS would require significant
custom coding for managing files in EFS, handling file paths in SQS messages, ensuring proper access control
and data consistency, and managing cleanup of old files. This is more complex and less efficient than the
provided Extended Client Library, and EFS isn't the appropriate service for message storage as it adds
unnecessary complexity.
Key Concepts:
Amazon SQS Size Limit: SQS has a message size limit of 256KB.
Amazon SQS Extended Client Library: A pre-built solution to extend SQS's functionality to support larger
messages by using Amazon S3 as storage.
Loose Coupling: The solution maintains loose coupling between the message queue (SQS) and the actual
message content (stored in S3).

---

## Question 345

**Answer:** **A**

**Explanation:**

The best solution is A because it utilizes cost-effective and scalable AWS services suitable for a small user
base and global content delivery. Amazon Cognito is a managed service specifically designed for user
authentication, providing features like user registration, sign-in, and access control, and it's a cost-effective
option for fewer than 100 users. [email protected], a serverless authorization service that seamlessly
integrates with Cognito, allows fine-grained access control to web application resources. CloudFront, a global
content delivery network (CDN), is ideal for distributing web content with low latency worldwide.

**Option B** is less optimal due to the cost associated with AWS Directory Service for Microsoft Active Directory,
which is more suitable for larger organizations with existing Active Directory infrastructure. Furthermore,
using Lambda for authorization adds unnecessary complexity compared to the purpose-built [email
protected]. An Application Load Balancer is generally used for distributing traffic across multiple instances,
which is not necessary when serving static content globally through CloudFront.

**Option C** is less efficient because Amazon S3 Transfer Acceleration is for accelerating uploads to S3, not for
serving web content globally with low latency, which is CloudFront's primary function.

**Option D** combines the costly AWS Directory Service with Elastic Beanstalk, which is a platform-as-a-service
(PaaS) that manages the underlying infrastructure. Elastic Beanstalk introduces complexities that are
unnecessary for a serverless architecture focused on serving static web content globally. [email protected] is
effective for authorization, but the underlying authentication and delivery are less optimal.

Therefore, Cognito provides the most cost-effective authentication, [email protected] provides scalable and
serverless authorization, and CloudFront offers global content delivery with low latency, making option A the
best choice.
Supporting Links:
Amazon Cognito: https://aws.amazon.com/cognito/
[email protected]: [https://aws.amazon.com/blogs/security/[email protected]-fine-grained-authorizationservice-serverless-applications/](https://aws.amazon.com/blogs/security/[email protected]-fine-grainedauthorization-service-serverless-applications/)
Amazon CloudFront: https://aws.amazon.com/cloudfront/

---

## Question 346

**Answer:** **D**

**Explanation:**

The correct answer is D. Amazon S3 File Gateway.

Here's a detailed justification:
The primary requirements are to migrate data to Amazon S3 while maintaining the same look and feel
(SMB/NFS shares) for client workstations and implementing S3 Lifecycle policies for tiered storage. The key
here is preserving the file share access method.
Amazon S3 File Gateway allows on-premises applications to access data in Amazon S3 through standard file
protocols like NFS and SMB. This fulfills the requirement of maintaining the same look and feel for the client
workstations because they continue to interact with file shares. It effectively presents S3 as a network file
share. Moreover, data written to the File Gateway is stored as objects in S3, which allows leveraging S3
Lifecycle policies for managing data tiers (frequently accessed vs. inactive data).
Volume Gateway presents block-based storage to on-premises applications, which isn't suitable for directly
replacing a file-based NAS. It replicates on-premises block storage volumes to AWS, but it does not provide
file share access (SMB/NFS).
Tape Gateway is designed for backing up data to virtual tapes stored in AWS, primarily for archival purposes,
not for active file storage and access. It does not expose fileshares to workstations.
Amazon FSx File Gateway is used for accessing fully managed file systems in AWS, like Amazon FSx for
Windows File Server or Amazon FSx for Lustre, and doesn't directly help in migrating and exposing existing
NAS data in S3 through SMB/NFS shares.

Therefore, Amazon S3 File Gateway is the best solution because it allows the company to migrate their file
data to S3, preserve existing SMB/NFS access, and manage storage costs with S3 Lifecycle policies.

---

## Question 347

**Answer:** **A**

**Explanation:**

The correct answer is A, Compute Savings Plan. Here's why:
Compute Savings Plans offer the most flexibility and cost savings for this scenario because they
automatically apply to EC2 instance usage regardless of instance family, size, operating system, or tenancy
within a specified compute amount per hour. This is crucial because the company anticipates changing
instance families and sizes within the next 6 months due to application popularity. EC2 Instance Savings
Plans, while providing savings on specific instance families within a region, lack the needed flexibility. They
are tied to a particular instance family and size, making them unsuitable if those parameters need to change.
Reserved Instances (RIs), both Zonal and Standard, offer significant cost savings compared to On-Demand
Instances. However, Standard RIs are less flexible in terms of AZ placement compared to Zonal RIs. While RIs
offer savings, they require committing to a specific instance type and availability zone, which contradicts the
requirement of changing instance families. Further, modifying RIs after purchase can be complex and may
incur additional costs. Compute Savings Plans provide more cost optimization in the long run when instance
types are subject to change.
Since the company anticipates changes, Compute Savings Plans offer the best balance between cost savings
and flexibility. This allows them to optimize costs over the 3-year term while adapting to evolving application
needs without incurring penalties or wasted investments.
Further reading:
AWS Savings Plans: https://aws.amazon.com/savingsplans/
AWS Reserved Instances: https://aws.amazon.com/ec2/pricing/reserved-instances/

---

## Question 348

**Answer:** **B**

**Explanation:**

The correct answer is B: Use provisioned mode. Specify the read capacity units (RCUs) and write capacity
units (WCUs).

Here's why:
The key requirements are cost-effectiveness and a predictable workload. Provisioned mode is ideal for
predictable workloads because you can specify the read and write capacity units (RCUs and WCUs) needed to
handle the anticipated traffic. This allows you to closely control and optimize costs.

**Option A** is incorrect because DynamoDB Standard-IA is optimized for infrequently accessed data, which is
not specified in the use case. Standard-IA storage is more expensive for frequently accessed data, and the
problem states that the data is being analyzed. While reserving capacity within provisioned mode is good,
suggesting Standard-IA storage when there's no indication of infrequent access makes this a less ideal
choice.

**Option C** is incorrect. On-demand mode is best suited for unpredictable workloads with varying traffic
patterns. While it eliminates the need to manage capacity, it is generally more expensive than provisioned
mode for predictable workloads because you pay for each read and write request. Setting RCUs and WCUs in
on-demand mode contradicts the very nature of on-demand capacity.

**Option D** is incorrect because you cannot "specify" RCUs and WCUs along with "reserved capacity" in ondemand mode. On-demand mode automatically scales capacity, and you don't have control over setting
specific RCUs/WCUs in that mode. Furthermore, suggesting reserved capacity in on-demand mode mixes
provisioned and on-demand concepts, which is not directly supported. On-demand pricing covers the scaling.

Therefore, provisioned mode with specified RCUs and WCUs allows the company to precisely allocate the
resources needed for the constant and predictable data workload, ensuring the most cost-effective solution
that stays within the forecasted budget. Here are some authoritative links for further research:
DynamoDB Pricing: https://aws.amazon.com/dynamodb/pricing/ - Review the pricing models for provisioned
and on-demand capacity to understand cost implications.
Choosing Between On-Demand and Provisioned Capacity:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks. ReadWriteCapacityMode.html
- AWS documentation outlining the differences and use cases for each capacity mode.
DynamoDB Standard and Standard-IA: https://aws.amazon.com/dynamodb/pricing/storage/ - Detailed
explanation of DynamoDB storage types and their appropriate use cases.

---

## Question 349

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The core requirement is to securely share an encrypted Aurora PostgreSQL database backup (snapshot)
across AWS accounts while maintaining encryption using KMS. **Option B** directly addresses this.

1. Creating a Database Snapshot: The first step is to create a snapshot of the Aurora PostgreSQL
database. This is the standard method for backing up an Aurora database.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html

2. Adding the Acquiring Company's AWS Account to the KMS Key Policy: The database is encrypted
with a KMS customer-managed key (CMK). To allow the acquiring company to restore and use the
snapshot, their AWS account needs permission to use the CMK. This is accomplished by adding the
acquiring company's AWS account ID as a principal to the CMK's key policy. This grants the acquiring
company's account the necessary permissions (e.g., kms:Decrypt, kms:GenerateDataKey) to decrypt
the snapshot and perform restore operations.
https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html

3. Sharing the Snapshot: Once the acquiring company's account has the necessary KMS permissions,
the snapshot can be shared with their AWS account. The receiving account can then create a new
Aurora cluster from the shared snapshot.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html

Why other options are incorrect:

**A:** Creating an unencrypted snapshot defeats the purpose of securely sharing the data. The requirement
specifies securely sharing the data, implying encryption should be maintained.

**C:** Using an AWS-managed KMS key would be simpler initially, but it wouldn't satisfy the requirement of using
the existing customer-managed key, and you will need to give permissions to use the key anyway. Key aliases
do not control permissions; key policies do.

**D:** Downloading and uploading the snapshot via S3 exposes the database backup to potential security risks if
the S3 bucket is misconfigured. The process would also be more complex and time-consuming compared to
sharing the snapshot directly. While S3 can be secure, this method introduces unnecessary complexity and a
larger attack surface compared to the direct snapshot sharing method with KMS key policy modification.
Furthermore, you still need KMS access in the new account to re-encrypt if not already done so.

---

## Question 350

**Answer:** **AC**

**Explanation:**

Let's analyze why options A and C are the correct choices for achieving high availability, automatic recovery,
and improved reporting performance for the company's Amazon RDS for Microsoft SQL Server database.

**A.** Modify the DB instance from a Single-AZ DB instance to a Multi-AZ deployment. This addresses the high
availability and automatic recovery requirements. A Multi-AZ deployment automatically provisions a standby
replica of the database in a different Availability Zone. In case of an infrastructure failure in the primary AZ,
RDS automatically fails over to the standby replica, minimizing downtime and ensuring continuous operation.
Single-AZ instances do not offer automatic failover, while Multi-AZ does. This configuration ensures the
database remains accessible even during planned maintenance or unexpected outages.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

**C.** Create a read replica of the DB instance in a different Availability Zone. Point all requests for reports to
the read replica. This addresses the reporting performance issue without impacting the performance of the
primary database handling customer transactions. Read replicas allow you to offload read-only workloads,
such as report generation, to a separate database instance. By directing the report process to the read
replica, the primary database remains dedicated to transaction processing, preventing performance
degradation. This separation of concerns significantly improves the overall performance of both transaction
posting and report generation. Read replicas can be in a different AZ than the primary.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. ReadReplicas.html
Let's examine why the other options are not ideal:

**B.** Take a snapshot of the current DB instance. Restore the snapshot to a new RDS deployment in another
Availability Zone. While this creates a copy of the database, it's a one-time operation and doesn't provide
continuous, near real-time data for reporting. It doesn't address the high availability requirement for the
primary database. The restored instance would be stale and out of sync.

**D.** Migrate the database to RDS Custom. RDS Custom provides more control over the operating system and
database environment, but it also increases operational overhead and complexity. It is unnecessary for the
stated requirements of high availability, automatic recovery, and improved reporting performance, adding
unneeded management overhead.

**E.** Use RDS Proxy to limit reporting requests to the maintenance window. RDS Proxy primarily manages
database connections and improves application scalability. While it can help with managing connection
resources, it doesn't directly address the performance impact of report generation on the primary database or
the need for high availability. It would delay reporting, not improve its performance.

---

# Quick Answer Sheet

Question 301: C
Question 302: AC
Question 303: D
Question 304: A
Question 305: C
Question 306: A
Question 307: D
Question 308: BD
Question 309: A
Question 310: B
Question 311: C
Question 312: B
Question 313: C
Question 314: B
Question 315: D
Question 316: C
Question 317: A
Question 318: AD
Question 319: A
Question 320: A
Question 321: D
Question 322: C
Question 323: B
Question 324: D
Question 325: A
Question 326: AB
Question 327: A
Question 328: D
Question 329: D
Question 330: A
Question 331: A
Question 332: B
Question 333: C
Question 334: A
Question 335: B
Question 336: A
Question 337: A
Question 338: D
Question 339: C
Question 340: A
Question 341: D
Question 342: C
Question 343: C
Question 344: A
Question 345: A
Question 346: D
Question 347: A
Question 348: B
Question 349: B
Question 350: AC
