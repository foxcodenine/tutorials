# AWS SAA-C03 Practice Test: Questions 601-650

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 601

A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The company wants to
migrate to Amazon Aurora PostgreSQL with minimal downtime and data loss.

Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a DB snapshot of the RDS for PostgreSQL DB instance to populate a new Aurora PostgreSQL DB
cluster.

**B.** Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora read replicate to a
new Aurora PostgreSQL DB cluster.

**C.** Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.

**D.** Use the pg_dump utility to back up the RDS for PostgreSQL database. Restore the backup to a new Aurora
PostgreSQL DB cluster.

---

## Question 602

A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon Elastic Block Store
(Amazon EBS) storage. A solutions architect must ensure that every EC2 instance can be recovered after a
disaster.
What should the solutions architect do to meet this requirement with the LEAST amount of effort?

**A.** Take a snapshot of the EBS storage that is attached to each EC2 instance. Create an AWS CloudFormation
template to launch new EC2 instances from the EBS storage.

**B.** Take a snapshot of the EBS storage that is attached to each EC2 instance. Use AWS Elastic Beanstalk to set
the environment based on the EC2 template and attach the EBS storage.

**C.** Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS Backup API or
the AWS CLI to speed up the restore process for multiple EC2 instances.

**D.** Create an AWS Lambda function to take a snapshot of the EBS storage that is attached to each EC2 instance
and copy the Amazon Machine Images (AMIs). Create another Lambda function to perform the restores with the
copied AMIs and attach the EBS storage.

---

## Question 603

A company recently migrated to the AWS Cloud. The company wants a serverless solution for large-scale parallel
on-demand processing of a semistructured dataset. The data consists of logs, media files, sales transactions, and
IoT sensor data that is stored in Amazon S3. The company wants the solution to process thousands of items in the
dataset in parallel.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Use the AWS Step Functions Map state in Inline mode to process the data in parallel.

**B.** Use the AWS Step Functions Map state in Distributed mode to process the data in parallel.

**C.** Use AWS Glue to process the data in parallel.

**D.** Use several AWS Lambda functions to process the data in parallel.

---

## Question 604

A company will migrate 10 PB of data to Amazon S3 in 6 weeks. The current data center has a 500 Mbps uplink to
the internet. Other on-premises applications share the uplink. The company can use 80% of the internet bandwidth
for this one-time migration task.
Which solution will meet these requirements?

**A.** Configure AWS DataSync to migrate the data to Amazon S3 and to automatically verify the data.

**B.** Use rsync to transfer the data directly to Amazon S3.

**C.** Use the AWS CLI and multiple copy processes to send the data directly to Amazon S3.

**D.** Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS to copy the
data to Amazon S3.

---

## Question 605

A company has several on-premises Internet Small Computer Systems Interface (ISCSI) network storage servers.
The company wants to reduce the number of these servers by moving to the AWS Cloud. A solutions architect
must provide low-latency access to frequently used data and reduce the dependency on on-premises servers with
a minimal number of infrastructure changes.
Which solution will meet these requirements?

**A.** Deploy an Amazon S3 File Gateway.

**B.** Deploy Amazon Elastic Block Store (Amazon EBS) storage with backups to Amazon S3.

**C.** Deploy an AWS Storage Gateway volume gateway that is configured with stored volumes.

**D.** Deploy an AWS Storage Gateway volume gateway that is configured with cached volumes.

---

## Question 606

A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The
solution needs to maximize object durability. Objects also must be readily available at any time and for any length
of time. Users will access objects frequently within the first 30 days after the objects are uploaded, but users are
much less likely to access objects that are older than 30 days.
Which solution meets these requirements MOST cost-effectively?

**A.** Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30
days.

**B.** Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 StandardInfrequent Access (S3 Standard-IA) after 30 days.

**C.** Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One ZoneInfrequent Access (S3 One Zone-IA) after 30 days.

**D.** Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3
Standard-Infrequent Access (S3 Standard-IA) after 30 days.

---

## Question 607

A company has migrated a two-tier application from its on-premises data center to the AWS Cloud. The data tier is
a Multi-AZ deployment of Amazon RDS for Oracle with 12 TB of General Purpose SSD Amazon Elastic Block Store
(Amazon EBS) storage. The application is designed to process and store documents in the database as binary large
objects (blobs) with an average document size of 6 MB.
The database size has grown over time, reducing the performance and increasing the cost of storage. The company
must improve the database performance and needs a solution that is highly available and resilient.
Which solution will meet these requirements MOST cost-effectively?

**A.** Reduce the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the storage type to
Magnetic.

**B.** Increase the RDS DB instance size. Increase the storage capacity to 24 TiChange the storage type to
Provisioned IOPS.

**C.** Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object
metadata in the existing database.

**D.** Create an Amazon DynamoDB table. Update the application to use DynamoDB. Use AWS Database Migration
Service (AWS DMS) to migrate data from the Oracle database to DynamoDB.

---

## Question 608

A company has an application that serves clients that are deployed in more than 20.000 retail storefront locations
around the world. The application consists of backend web services that are exposed over HTTPS on port 443. The
application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The retail locations
communicate with the web application over the public internet. The company allows each retail location to register
the IP address that the retail location has been allocated by its local ISP.
The company's security team recommends to increase the security of the application endpoint by restricting
access to only the IP addresses registered by the retail locations.
What should a solutions architect do to meet these requirements?

**A.** Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP
addresses in the rule to include the registered IP addresses.

**B.** Deploy AWS Firewall Manager to manage the ALConfigure firewall rules to restrict traffic to the ALModify
the firewall rules to include the registered IP addresses.

**C.** Store the IP addresses in an Amazon DynamoDB table. Configure an AWS Lambda authorization function on
the ALB to validate that incoming requests are from the registered IP addresses.

**D.** Configure the network ACL on the subnet that contains the public interface of the ALB. Update the ingress
rules on the network ACL with entries for each of the registered IP addresses.

---

## Question 609

A company is building a data analysis platform on AWS by using AWS Lake Formation. The platform will ingest
data from different sources such as Amazon S3 and Amazon RDS. The company needs a secure solution to prevent
access to portions of the data that contain sensitive information.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an IAM role that includes permissions to access Lake Formation tables.

**B.** Create data filters to implement row-level security and cell-level security.

**C.** Create an AWS Lambda function that removes sensitive information before Lake Formation ingests the data.

**D.** Create an AWS Lambda function that periodically queries and removes sensitive information from Lake
Formation tables.

---

## Question 610

A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source data into Amazon S3
buckets so that the data can be processed in the future. According to compliance laws, the data must not be
transmitted over the public internet. Servers in the company's on-premises data center will consume the output
from an application that runs on the EC2 instances.
Which solution will meet these requirements?

**A.** Deploy an interface VPC endpoint for Amazon EC2. Create an AWS Site-to-Site VPN connection between the
company and the VPC.

**B.** Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection between the onpremises network and the VPC.

**C.** Set up an AWS Transit Gateway connection from the VPC to the S3 buckets. Create an AWS Site-to-Site VPN
connection between the company and the VPC.

**D.** Set up proxy EC2 instances that have routes to NAT gateways. Configure the proxy EC2 instances to fetch S3
data and feed the application instances.

---

## Question 611

A company has an application with a REST-based interface that allows data to be received in near-real time from a
third-party vendor. Once received, the application processes and stores the data for further analysis. The
application is running on Amazon EC2 instances.
The third-party vendor has received many 503 Service Unavailable Errors when sending data to the application.
When the data volume spikes, the compute capacity reaches its maximum limit and the application is unable to
process all requests.
Which design should a solutions architect recommend to provide a more scalable solution?

**A.** Use Amazon Kinesis Data Streams to ingest the data. Process the data using AWS Lambda functions.

**B.** Use Amazon API Gateway on top of the existing application. Create a usage plan with a quota limit for the
third-party vendor.

**C.** Use Amazon Simple Notification Service (Amazon SNS) to ingest the data. Put the EC2 instances in an Auto
Scaling group behind an Application Load Balancer.

**D.** Repackage the application as a container. Deploy the application using Amazon Elastic Container Service
(Amazon ECS) using the EC2 launch type with an Auto Scaling group.

---

## Question 612

A company has an application that runs on Amazon EC2 instances in a private subnet. The application needs to
process sensitive information from an Amazon S3 bucket. The application must not use the internet to connect to
the S3 bucket.
Which solution will meet these requirements?

**A.** Configure an internet gateway. Update the S3 bucket policy to allow access from the internet gateway.
Update the application to use the new internet gateway.

**B.** Configure a VPN connection. Update the S3 bucket policy to allow access from the VPN connection. Update
the application to use the new VPN connection.

**C.** Configure a NAT gateway. Update the S3 bucket policy to allow access from the NAT gateway. Update the
application to use the new NAT gateway.

**D.** Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC endpoint. Update the
application to use the new VPC endpoint.

---

## Question 613

A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run a container application. The EKS cluster
stores sensitive information in the Kubernetes secrets object. The company wants to ensure that the information is
encrypted.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use the container application to encrypt the information by using AWS Key Management Service (AWS KMS).

**B.** Enable secrets encryption in the EKS cluster by using AWS Key Management Service (AWS KMS).

**C.** Implement an AWS Lambda function to encrypt the information by using AWS Key Management Service
(AWS KMS).

**D.** Use AWS Systems Manager Parameter Store to encrypt the information by using AWS Key Management
Service (AWS KMS).

---

## Question 614

A company is designing a new multi-tier web application that consists of the following components:
•Web and application servers that run on Amazon EC2 instances as part of Auto Scaling groups
•An Amazon RDS DB instance for data storage
A solutions architect needs to limit access to the application servers so that only the web servers can access them.
Which solution will meet these requirements?

**A.** Deploy AWS PrivateLink in front of the application servers. Configure the network ACL to allow only the web
servers to access the application servers.

**B.** Deploy a VPC endpoint in front of the application servers. Configure the security group to allow only the web
servers to access the application servers.

**C.** Deploy a Network Load Balancer with a target group that contains the application servers' Auto Scaling
group. Configure the network ACL to allow only the web servers to access the application servers.

**D.** Deploy an Application Load Balancer with a target group that contains the application servers' Auto Scaling
group. Configure the security group to allow only the web servers to access the application servers.

---

## Question 615

A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The
application has a microservices architecture. The company needs to implement a solution that collects,
aggregates, and summarizes metrics and logs from the application in a centralized location.
Which solution meets these requirements?

**A.** Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in the CloudWatch
console.

**B.** Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh console.

**C.** Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon OpenSearch Service.

**D.** Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in
the CloudWatch console.

---

## Question 616

A company has deployed its newest product on AWS. The product runs in an Auto Scaling group behind a Network
Load Balancer. The company stores the product’s objects in an Amazon S3 bucket.
The company recently experienced malicious attacks against its systems. The company needs a solution that
continuously monitors for malicious activity in the AWS account, workloads, and access patterns to the S3 bucket.
The solution must also report suspicious activity and display the information on a dashboard.
Which solution will meet these requirements?

**A.** Configure Amazon Macie to monitor and report findings to AWS Config.

**B.** Configure Amazon Inspector to monitor and report findings to AWS CloudTrail.

**C.** Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub.

**D.** Configure AWS Config to monitor and report findings to Amazon EventBridge.

---

## Question 617

A company wants to migrate an on-premises data center to AWS. The data center hosts a storage server that
stores data in an NFS-based file system. The storage server holds 200 GB of data. The company needs to migrate
the data without interruption to existing services. Multiple resources in AWS must be able to access the data by
using the NFS protocol.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Create an Amazon FSx for Lustre file system.

**B.** Create an Amazon Elastic File System (Amazon EFS) file system.

**C.** Create an Amazon S3 bucket to receive the data.

**D.** Manually use an operating system copy command to push the data into the AWS destination.

**E.** Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the onpremises location and AWS.

---

## Question 618

A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances that have an SMB file
share mounted as a volume in the us-east-1 Region. The company has a recovery point objective (RPO) of 5 minutes
for planned system maintenance or unplanned service disruptions. The company needs to replicate the file system
to the us-west-2 Region. The replicated data must not be deleted by any user for 5 years.
Which solution will meet these requirements?

**A.** Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use
AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2.
Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum
duration of 5 years.

**B.** Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use
AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2.
Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum
duration of 5 years.

**C.** Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use
AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2.
Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum
duration of 5 years.

**D.** Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use
AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2.
Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum
duration of 5 years.

---

## Question 619

A solutions architect is designing a security solution for a company that wants to provide developers with
individual AWS accounts through AWS Organizations, while also maintaining standard security controls. Because
the individual developers will have AWS account root user-level access to their own accounts, the solutions
architect wants to ensure that the mandatory AWS CloudTrail configuration that is applied to new developer
accounts is not modified.
Which action meets these requirements?

**A.** Create an IAM policy that prohibits changes to CloudTrail. and attach it to the root user.

**B.** Create a new trail in CloudTrail from within the developer accounts with the organization trails option
enabled.

**C.** Create a service control policy (SCP) that prohibits changes to CloudTrail, and attach it the developer
accounts.

**D.** Create a service-linked role for CloudTrail with a policy condition that allows changes only from an Amazon
Resource Name (ARN) in the management account.

---

## Question 620

A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable
storage with consistent, low-latency performance.
Which type of storage should a solutions architect recommend to meet these requirements?

**A.** Instance store volume

**B.** Amazon ElastiCache for Memcached cluster

**C.** Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume

**D.** Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume

---

## Question 621

An online photo-sharing company stores its photos in an Amazon S3 bucket that exists in the us-west-1 Region.
The company needs to store a copy of all new photos in the us-east-1 Region.
Which solution will meet this requirement with the LEAST operational effort?

**A.** Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy photos from the existing S3
bucket to the second S3 bucket.

**B.** Create a cross-origin resource sharing (CORS) configuration of the existing S3 bucket. Specify us-east-1 in
the CORS rule's AllowedOrigin element.

**C.** Create a second S3 bucket in us-east-1 across multiple Availability Zones. Create an S3 Lifecycle rule to save
photos into the second S3 bucket.

**D.** Create a second S3 bucket in us-east-1. Configure S3 event notifications on object creation and update
events to invoke an AWS Lambda function to copy photos from the existing S3 bucket to the second S3 bucket.

---

## Question 622

A company is creating a new web application for its subscribers. The application will consist of a static single page
and a persistent database layer. The application will have millions of users for 4 hours in the morning, but the
application will have only a few thousand users during the rest of the day. The company's data architects have
requested the ability to rapidly evolve their schema.
Which solutions will meet these requirements and provide the MOST scalability? (Choose two.)

**A.** Deploy Amazon DynamoDB as the database solution. Provision on-demand capacity.

**B.** Deploy Amazon Aurora as the database solution. Choose the serverless DB engine mode.

**C.** Deploy Amazon DynamoDB as the database solution. Ensure that DynamoDB auto scaling is enabled.

**D.** Deploy the static content into an Amazon S3 bucket. Provision an Amazon CloudFront distribution with the S3
bucket as the origin.

**E.** Deploy the web servers for static content across a fleet of Amazon EC2 instances in Auto Scaling groups.
Configure the instances to periodically refresh the content from an Amazon Elastic File System (Amazon EFS)
volume.

---

## Question 623

A company uses Amazon API Gateway to manage its REST APIs that third-party service providers access. The
company must protect the REST APIs from SQL injection and cross-site scripting attacks.
What is the MOST operationally efficient solution that meets these requirements?

**A.** Configure AWS Shield.

**B.** Configure AWS WAF.

**C.** Set up API Gateway with an Amazon CloudFront distribution. Configure AWS Shield in CloudFront.

**D.** Set up API Gateway with an Amazon CloudFront distribution. Configure AWS WAF in CloudFront.

---

## Question 624

A company wants to provide users with access to AWS resources. The company has 1,500 users and manages their
access to on-premises resources through Active Directory user groups on the corporate network. However, the
company does not want users to have to maintain another identity to access the resources. A solutions architect
must manage user access to the AWS resources while preserving access to the on-premises resources.
What should the solutions architect do to meet these requirements?

**A.** Create an IAM user for each user in the company. Attach the appropriate policies to each user.

**B.** Use Amazon Cognito with an Active Directory user pool. Create roles with the appropriate policies attached.

**C.** Define cross-account roles with the appropriate policies attached. Map the roles to the Active Directory
groups.

**D.** Configure Security Assertion Markup Language (SAML) 2 0-based federation. Create roles with the
appropriate policies attached Map the roles to the Active Directory groups.

---

## Question 625

A company is hosting a website behind multiple Application Load Balancers. The company has different
distribution rights for its content around the world. A solutions architect needs to ensure that users are served the
correct content without violating distribution rights.
Which configuration should the solutions architect choose to meet these requirements?

**A.** Configure Amazon CloudFront with AWS WAF.

**B.** Configure Application Load Balancers with AWS WAF

**C.** Configure Amazon Route 53 with a geolocation policy

**D.** Configure Amazon Route 53 with a geoproximity routing policy

---

## Question 626

A company stores its data on premises. The amount of data is growing beyond the company's available capacity.
The company wants to migrate its data from the on-premises location to an Amazon S3 bucket. The company
needs a solution that will automatically validate the integrity of the data after the transfer.
Which solution will meet these requirements?

**A.** Order an AWS Snowball Edge device. Configure the Snowball Edge device to perform the online data transfer
to an S3 bucket

**B.** Deploy an AWS DataSync agent on premises. Configure the DataSync agent to perform the online data
transfer to an S3 bucket.

**C.** Create an Amazon S3 File Gateway on premises Configure the S3 File Gateway to perform the online data
transfer to an S3 bucket

**D.** Configure an accelerator in Amazon S3 Transfer Acceleration on premises. Configure the accelerator to
perform the online data transfer to an S3 bucket.

---

## Question 627

A company wants to migrate two DNS servers to AWS. The servers host a total of approximately 200 zones and
receive 1 million requests each day on average. The company wants to maximize availability while minimizing the
operational overhead that is related to the management of the two servers.
What should a solutions architect recommend to meet these requirements?

**A.** Create 200 new hosted zones in the Amazon Route 53 console Import zone files.

**B.** Launch a single large Amazon EC2 instance Import zone tiles. Configure Amazon CloudWatch alarms and
notifications to alert the company about any downtime.

**C.** Migrate the servers to AWS by using AWS Server Migration Service (AWS SMS). Configure Amazon
CloudWatch alarms and notifications to alert the company about any downtime.

**D.** Launch an Amazon EC2 instance in an Auto Scaling group across two Availability Zones. Import zone files. Set
the desired capacity to 1 and the maximum capacity to 3 for the Auto Scaling group. Configure scaling alarms
to scale based on CPU utilization.

---

## Question 628

A global company runs its applications in multiple AWS accounts in AWS Organizations. The company's
applications use multipart uploads to upload data to multiple Amazon S3 buckets across AWS Regions. The
company wants to report on incomplete multipart uploads for cost compliance purposes.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure AWS Config with a rule to report the incomplete multipart upload object count.

**B.** Create a service control policy (SCP) to report the incomplete multipart upload object count.

**C.** Configure S3 Storage Lens to report the incomplete multipart upload object count.

**D.** Create an S3 Multi-Region Access Point to report the incomplete multipart upload object count.

---

## Question 629

A company runs a production database on Amazon RDS for MySQL. The company wants to upgrade the database
version for security compliance reasons. Because the database contains critical data, the company wants a quick
solution to upgrade and test functionality without losing any data.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an RDS manual snapshot. Upgrade to the new version of Amazon RDS for MySQL.

**B.** Use native backup and restore. Restore the data to the upgraded new version of Amazon RDS for MySQL.

**C.** Use AWS Database Migration Service (AWS DMS) to replicate the data to the upgraded new version of
Amazon RDS for MySQL.

**D.** Use Amazon RDS Blue/Green Deployments to deploy and test production changes.

---

## Question 630

A solutions architect is creating a data processing job that runs once daily and can take up to 2 hours to complete.
If the job is interrupted, it has to restart from the beginning.
How should the solutions architect address this issue in the MOST cost-effective manner?

**A.** Create a script that runs locally on an Amazon EC2 Reserved Instance that is triggered by a cron job.

**B.** Create an AWS Lambda function triggered by an Amazon EventBridge scheduled event.

**C.** Use an Amazon Elastic Container Service (Amazon ECS) Fargate task triggered by an Amazon EventBridge
scheduled event.

**D.** Use an Amazon Elastic Container Service (Amazon ECS) task running on Amazon EC2 triggered by an Amazon
EventBridge scheduled event.

---

## Question 631

A social media company wants to store its database of user profiles, relationships, and interactions in the AWS
Cloud. The company needs an application to monitor any changes in the database. The application needs to
analyze the relationships between the data entities and to provide recommendations to users.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon Neptune to store the information. Use Amazon Kinesis Data Streams to process changes in the
database.

**B.** Use Amazon Neptune to store the information. Use Neptune Streams to process changes in the database.

**C.** Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use Amazon Kinesis Data
Streams to process changes in the database.

**D.** Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use Neptune Streams to
process changes in the database.

---

## Question 632

A company is creating a new application that will store a large amount of data. The data will be analyzed hourly
and will be modified by several Amazon EC2 Linux instances that are deployed across multiple Availability Zones.
The needed amount of storage space will continue to grow for the next 6 months.
Which storage solution should a solutions architect recommend to meet these requirements?

**A.** Store the data in Amazon S3 Glacier. Update the S3 Glacier vault policy to allow access to the application
instances.

**B.** Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the
application instances.

**C.** Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the file system on the
application instances.

**D.** Store the data in an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume shared between the
application instances.

---

## Question 633

A company manages an application that stores data on an Amazon RDS for PostgreSQL Multi-AZ DB instance.
Increases in traffic are causing performance problems. The company determines that database queries are the
primary reason for the slow performance.
What should a solutions architect do to improve the application's performance?

**A.** Serve read traffic from the Multi-AZ standby replica.

**B.** Configure the DB instance to use Transfer Acceleration.

**C.** Create a read replica from the source DB instance. Serve read traffic from the read replica.

**D.** Use Amazon Kinesis Data Firehose between the application and Amazon RDS to increase the concurrency of
database requests.

---

## Question 634

A company collects 10 GB of telemetry data daily from various machines. The company stores the data in an
Amazon S3 bucket in a source data account.
The company has hired several consulting agencies to use this data for analysis. Each agency needs read access to
the data for its analysts. The company must share the data from the source data account by choosing a solution
that maximizes security and operational efficiency.
Which solution will meet these requirements?

**A.** Configure S3 global tables to replicate data for each agency.

**B.** Make the S3 bucket public for a limited time. Inform only the agencies.

**C.** Configure cross-account access for the S3 bucket to the accounts that the agencies own.

**D.** Set up an IAM user for each analyst in the source data account. Grant each user access to the S3 bucket.

---

## Question 635

A company uses Amazon FSx for NetApp ONTAP in its primary AWS Region for CIFS and NFS file shares.
Applications that run on Amazon EC2 instances access the file shares. The company needs a storage disaster
recovery (DR) solution in a secondary Region. The data that is replicated in the secondary Region needs to be
accessed by using the same protocols as the primary Region.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS Lambda function to copy the data to an Amazon S3 bucket. Replicate the S3 bucket to the
secondary Region.

**B.** Create a backup of the FSx for ONTAP volumes by using AWS Backup. Copy the volumes to the secondary
Region. Create a new FSx for ONTAP instance from the backup.

**C.** Create an FSx for ONTAP instance in the secondary Region. Use NetApp SnapMirror to replicate data from
the primary Region to the secondary Region.

**D.** Create an Amazon Elastic File System (Amazon EFS) volume. Migrate the current data to the volume.
Replicate the volume to the secondary Region.

---

## Question 636

A development team is creating an event-based application that uses AWS Lambda functions. Events will be
generated when files are added to an Amazon S3 bucket. The development team currently has Amazon Simple
Notification Service (Amazon SNS) configured as the event target from Amazon S3.
What should a solutions architect do to process the events from Amazon S3 in a scalable way?

**A.** Create an SNS subscription that processes the event in Amazon Elastic Container Service (Amazon ECS)
before the event runs in Lambda.

**B.** Create an SNS subscription that processes the event in Amazon Elastic Kubernetes Service (Amazon EKS)
before the event runs in Lambda

**C.** Create an SNS subscription that sends the event to Amazon Simple Queue Service (Amazon SQS). Configure
the SOS queue to trigger a Lambda function.

**D.** Create an SNS subscription that sends the event to AWS Server Migration Service (AWS SMS). Configure the
Lambda function to poll from the SMS event.

---

## Question 637

A solutions architect is designing a new service behind Amazon API Gateway. The request patterns for the service
will be unpredictable and can change suddenly from 0 requests to over 500 per second. The total size of the data
that needs to be persisted in a backend database is currently less than 1 GB with unpredictable future growth.
Data can be queried using simple key-value requests.
Which combination ofAWS services would meet these requirements? (Choose two.)

**A.** AWS Fargate

**B.** AWS Lambda

**C.** Amazon DynamoDB

**D.** Amazon EC2 Auto Scaling

**E.** MySQL-compatible Amazon Aurora

---

## Question 638

A company collects and shares research data with the company's employees all over the world. The company
wants to collect and store the data in an Amazon S3 bucket and process the data in the AWS Cloud. The company
will share the data with the company's employees. The company needs a secure solution in the AWS Cloud that
minimizes operational overhead.
Which solution will meet these requirements?

**A.** Use an AWS Lambda function to create an S3 presigned URL. Instruct employees to use the URL.

**B.** Create an IAM user for each employee. Create an IAM policy for each employee to allow S3 access. Instruct
employees to use the AWS Management Console.

**C.** Create an S3 File Gateway. Create a share for uploading and a share for downloading. Allow employees to
mount shares on their local computers to use S3 File Gateway.

**D.** Configure AWS Transfer Family SFTP endpoints. Select the custom identity provider options. Use AWS
Secrets Manager to manage the user credentials Instruct employees to use Transfer Family.

---

## Question 639

A company is building a new furniture inventory application. The company has deployed the application on a fleet
ofAmazon EC2 instances across multiple Availability Zones. The EC2 instances run behind an Application Load
Balancer (ALB) in their VPC.
A solutions architect has observed that incoming traffic seems to favor one EC2 instance, resulting in latency for
some requests.
What should the solutions architect do to resolve this issue?

**A.** Disable session affinity (sticky sessions) on the ALB

**B.** Replace the ALB with a Network Load Balancer

**C.** Increase the number of EC2 instances in each Availability Zone

**D.** Adjust the frequency of the health checks on the ALB's target group

---

## Question 640

A company has an application workflow that uses an AWS Lambda function to download and decrypt files from
Amazon S3. These files are encrypted using AWS Key Management Service (AWS KMS) keys. A solutions architect
needs to design a solution that will ensure the required permissions are set correctly.
Which combination of actions accomplish this? (Choose two.)

**A.** Attach the kms:decrypt permission to the Lambda function’s resource policy

**B.** Grant the decrypt permission for the Lambda IAM role in the KMS key's policy

**C.** Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.

**D.** Create a new IAM policy with the kms:decrypt permission and attach the policy to the Lambda function.

**E.** Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function.

---

## Question 641

A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an
architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all
member accounts. The team must run this query once a month and provide a detailed analysis of the bill.
Which solution is the MOST scalable and cost-effective way to meet these requirements?

**A.** Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon
EMR for analysis.

**B.** Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon
Athena for analysis.

**C.** Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use Amazon
Redshift for analysis.

**D.** Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon
QuickSight tor analysis.

---

## Question 642

A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto Scaling group in
the AWS Cloud. The application will transmit data by using UDP packets. The company wants to ensure that the
application can scale out and in as traffic increases and decreases.
What should a solutions architect do to meet these requirements?

**A.** Attach a Network Load Balancer to the Auto Scaling group.

**B.** Attach an Application Load Balancer to the Auto Scaling group.

**C.** Deploy an Amazon Route 53 record set with a weighted policy to route traffic appropriately.

**D.** Deploy a NAT instance that is configured with port forwarding to the EC2 instances in the Auto Scaling group.

---

## Question 643

A company runs several websites on AWS for its different brands. Each website generates tens of gigabytes of
web traffic logs each day. A solutions architect needs to design a scalable solution to give the company's
developers the ability to analyze traffic patterns across all the company's websites. This analysis by the
developers will occur on demand once a week over the course of several months. The solution must support
queries with standard SQL.
Which solution will meet these requirements MOST cost-effectively?

**A.** Store the logs in Amazon S3. Use Amazon Athena tor analysis.

**B.** Store the logs in Amazon RDS. Use a database client for analysis.

**C.** Store the logs in Amazon OpenSearch Service. Use OpenSearch Service for analysis.

**D.** Store the logs in an Amazon EMR cluster Use a supported open-source framework for SQL-based analysis.

---

## Question 644

An international company has a subdomain for each country that the company operates in. The subdomains are
formatted as example.com, country1.example.com, and country2.example.com. The company's workloads are
behind an Application Load Balancer. The company wants to encrypt the website data that is in transit.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain
example com and a wildcard certificate for *.example.com.

**B.** Use the AWS Certificate Manager (ACM) console to request a private certificate for the apex top domain
example.com and a wildcard certificate for *.example.com.

**C.** Use the AWS Certificate Manager (ACM) console to request a public and private certificate for the apex top
domain example.com.

**D.** Validate domain ownership by email address. Switch to DNS validation by adding the required DNS records to
the DNS provider.

**E.** Validate domain ownership for the domain by adding the required DNS records to the DNS provider.

---

## Question 645

A company is required to use cryptographic keys in its on-premises key manager. The key manager is outside of
the AWS Cloud because of regulatory and compliance requirements. The company wants to manage encryption
and decryption by using cryptographic keys that are retained outside of the AWS Cloud and that support a variety
of external key managers from different vendors.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS CloudHSM key store backed by a CloudHSM cluster.

**B.** Use an AWS Key Management Service (AWS KMS) external key store backed by an external key manager.

**C.** Use the default AWS Key Management Service (AWS KMS) managed key store.

**D.** Use a custom key store backed by an AWS CloudHSM cluster.

---

## Question 646

A solutions architect needs to host a high performance computing (HPC) workload in the AWS Cloud. The workload
will run on hundreds of Amazon EC2 instances and will require parallel access to a shared file system to enable
distributed processing of large datasets. Datasets will be accessed across multiple instances simultaneously. The
workload requires access latency within 1 ms. After processing has completed, engineers will need access to the
dataset for manual postprocessing.
Which solution will meet these requirements?

**A.** Use Amazon Elastic File System (Amazon EFS) as a shared file system. Access the dataset from Amazon EFS.

**B.** Mount an Amazon S3 bucket to serve as the shared file system. Perform postprocessing directly from the S3
bucket.

**C.** Use Amazon FSx for Lustre as a shared file system. Link the file system to an Amazon S3 bucket for
postprocessing.

**D.** Configure AWS Resource Access Manager to share an Amazon S3 bucket so that it can be mounted to all
instances for processing and postprocessing.

---

## Question 647

A gaming company is building an application with Voice over IP capabilities. The application will serve traffic to
users across the world. The application needs to be highly available with an automated failover across AWS
Regions. The company wants to minimize the latency of users without relying on IP address caching on user
devices.
What should a solutions architect do to meet these requirements?

**A.** Use AWS Global Accelerator with health checks.

**B.** Use Amazon Route 53 with a geolocation routing policy.

**C.** Create an Amazon CloudFront distribution that includes multiple origins.

**D.** Create an Application Load Balancer that uses path-based routing.

---

## Question 648

A weather forecasting company needs to process hundreds of gigabytes of data with sub-millisecond latency. The
company has a high performance computing (HPC) environment in its data center and wants to expand its
forecasting capabilities.
A solutions architect must identify a highly available cloud storage solution that can handle large amounts of
sustained throughput. Files that are stored in the solution should be accessible to thousands of compute instances
that will simultaneously access and process the entire dataset.
What should the solutions architect do to meet these requirements?

**A.** Use Amazon FSx for Lustre scratch file systems.

**B.** Use Amazon FSx for Lustre persistent file systems.

**C.** Use Amazon Elastic File System (Amazon EFS) with Bursting Throughput mode.

**D.** Use Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode.

---

## Question 649

An ecommerce company runs a PostgreSQL database on premises. The database stores data by using high IOPS
Amazon Elastic Block Store (Amazon EBS) block storage. The daily peak I/O transactions per second do not exceed
15,000 IOPS. The company wants to migrate the database to Amazon RDS for PostgreSQL and provision disk IOPS
performance independent of disk storage capacity.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure the General Purpose SSD (gp2) EBS volume storage type and provision 15,000 IOPS.

**B.** Configure the Provisioned IOPS SSD (io1) EBS volume storage type and provision 15,000 IOPS.

**C.** Configure the General Purpose SSD (gp3) EBS volume storage type and provision 15,000 IOPS.

**D.** Configure the EBS magnetic volume type to achieve maximum IOPS.

---

## Question 650

A company wants to migrate its on-premises Microsoft SQL Server Enterprise edition database to AWS. The
company's online application uses the database to process transactions. The data analysis team uses the same
production database to run reports for analytical processing. The company wants to reduce operational overhead
by moving to managed services wherever possible.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Migrate to Amazon RDS for Microsoft SOL Server. Use read replicas for reporting purposes

**B.** Migrate to Microsoft SQL Server on Amazon EC2. Use Always On read replicas for reporting purposes

**C.** Migrate to Amazon DynamoDB. Use DynamoDB on-demand replicas for reporting purposes

**D.** Migrate to Amazon Aurora MySQL. Use Aurora read replicas for reporting purposes

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 601

**Answer:** **B**

**Explanation:**

The best solution to migrate an RDS for PostgreSQL database to Aurora PostgreSQL with minimal downtime
and data loss, and with the least operational overhead, is B. Create an Aurora read replica of the RDS for
PostgreSQL DB instance. Promote the Aurora read replica to a new Aurora PostgreSQL DB cluster.

Here's why:
Minimal Downtime: Creating an Aurora read replica allows continuous replication from the source RDS
database. This means that changes are constantly applied to the Aurora replica. Promoting the replica to be
the primary instance involves a cutover, which results in much less downtime compared to other migration
strategies.
Minimal Data Loss: Because of the continuous replication, data loss is minimized to the replication lag during
the final cutover.
Least Operational Overhead: Aurora read replicas provide a straightforward and automated method for
migrating data. It avoids the complexities of managing manual backups, restores, or data import/export
processes.
Data import from S3 (**Option C**) and pg_dump (**Option D**): require more operational overhead compared to
Aurora read replica. They also might involve a longer downtime window for backing up, transferring, and
restoring data.
DB snapshot (**Option A**): A DB snapshot is a point-in-time copy of the data, and will not capture any
transactions happening on the RDS database after the snapshot is taken.
Aurora Read Replicas are specifically designed to enable migrations with minimal downtime and data loss.
Promoting the read replica avoids manual data transfer, reducing the risk of human error and data
inconsistencies.
Supporting Links:
Amazon Aurora Migration: https://aws.amazon.com/rds/aurora/migration/
Creating an Amazon Aurora Read Replica:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora. CreateReplica.html

---

## Question 602

**Answer:** **C**

**Explanation:**

The correct answer is C, using AWS Backup. Here's why:
AWS Backup is a fully managed backup service designed to centralize and automate the backup of data
across AWS services, including EC2 instances and their associated EBS volumes. This means less manual
effort compared to managing snapshots individually. AWS Backup enables you to create backup plans that
define backup frequency, retention policies, and target backup vaults. You can easily assign these plans to
groups of EC2 instances. This solution inherently simplifies the process of ensuring every EC2 instance can be
recovered.

**Option A**, taking individual snapshots and using CloudFormation, requires you to manually manage snapshots
for hundreds of instances and create/maintain complex CloudFormation templates. This increases complexity
and management overhead. Moreover, CloudFormation focuses on infrastructure as code, not specifically
backup and restore.

**Option B**, using Elastic Beanstalk, is primarily for deploying and managing web applications, not for backing
up and restoring EC2 instances. Attaching EBS storage through Beanstalk can be complex and isn't a native
backup solution.

**Option D**, using Lambda to manage snapshots and AMIs, necessitates custom code and adds operational
burden. You would need to write, test, and maintain the Lambda functions, increasing complexity compared to
using a managed service like AWS Backup. Additionally, AMIs are instance-specific and don't inherently
include the data from EBS volumes, thus not guaranteeing data recovery.
AWS Backup, on the other hand, provides a centralized dashboard for monitoring backup jobs and simplifying
the restore process. The AWS Backup API or CLI can then be used to further expedite the restoration of
multiple instances, thereby minimizing the time required to recover from a disaster, hence fulfilling the "least
amount of effort" criterion.

Therefore, AWS Backup provides the most straightforward, scalable, and manageable solution for backing up
hundreds of EC2 instances and ensuring their recoverability.
Supporting links:
AWS Backup: https://aws.amazon.com/backup/
AWS Backup Documentation: https://docs.aws.amazon.com/awsbackup/latest/devguide/whatisawsbackup.html

---

## Question 603

**Answer:** **B**

**Explanation:**

The company requires a serverless, operationally efficient solution for large-scale parallel processing of
semistructured data in S3. The ideal solution should handle thousands of items in parallel.

**Option A**, using Step Functions Map state in Inline mode, is unsuitable for large-scale parallelism. Inline mode
has limitations on the number of iterations and payload sizes, making it less efficient for processing
thousands of items.

**Option B**, using Step Functions Map state in Distributed mode, is the most appropriate choice. Distributed
mode is specifically designed for high-throughput parallel processing of large datasets. It can handle
thousands or even millions of parallel executions, making it suitable for the company's requirements. This
mode leverages AWS resources efficiently, providing operational simplicity and scalability.

**Option C**, using AWS Glue, while capable of processing data in parallel, is primarily designed for ETL (Extract,
Transform, Load) operations. It may be overkill for simple processing tasks, and the operational overhead
could be higher compared to Step Functions Distributed Map. Glue is a powerful service, but its ETL focus
makes it less suitable for the described scenario.

**Option D**, using multiple Lambda functions directly, requires manual management of parallelism and scaling.
This approach would be operationally complex and less efficient compared to using Step Functions Map state
in Distributed mode, which automatically manages the parallel execution and resource allocation.

In summary, Step Functions Distributed Map provides the best balance between serverless architecture,
operational efficiency, scalability, and the ability to process thousands of items in parallel. It is specifically
tailored for this type of high-throughput data processing.

Therefore, option B is the correct answer.
Supporting Links:
AWS Step Functions Map State: https://docs.aws.amazon.com/step-functions/latest/dg/amazon-stateslanguage-map-state.html
Step Functions Distributed Map vs. Inline Map: https://aws.amazon.com/blogs/compute/introducingdistributed-map-in-aws-step-functions/

---

## Question 604

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D, using AWS Snowball devices, is the most suitable solution for
migrating 10 PB of data to Amazon S3 within 6 weeks, given the limited network bandwidth:

**Option D** (AWS Snowball) is the best approach because it bypasses the internet bottleneck. With only a 500
Mbps uplink, and only 80% usable, the effective bandwidth is 400 Mbps (50 MBps). Transferring 10 PB (10,000
TB) of data over this connection in 6 weeks is highly impractical. 10,000 TB 1024 GB/TB 1024 MB/GB =
10,485,760,000 MB. To transfer this data in 6 weeks (6 weeks 7 days/week 24 hours/day * 3600 seconds/hour
= 3,628,800 seconds), you would need a throughput of 10,485,760,000 MB / 3,628,800 seconds = ~2890
MBps. This vastly exceeds the available 50 MBps.
AWS Snowball allows for offline data transfer. The data is copied to the Snowball devices on-premises,
shipped to AWS, and then uploaded to S3. This eliminates dependence on the internet bandwidth, reducing
transfer time.
Options A, B, and C rely on the limited internet connection. While AWS DataSync (A) could be used, it's
constrained by the 400 Mbps. Rsync (B) and the AWS CLI (C) are also limited by the available bandwidth.
Calculating the total transfer time using the internet connection would significantly exceed the 6-week
deadline, making these options infeasible. These methods are more suitable for smaller data volumes or when
a high-bandwidth connection is available. Snowball provides a faster solution that is unaffected by the uplink
limitations. Using Snowball devices allows for parallel transfer which improves the time taken to migrate the
data.https://aws.amazon.com/snowball/

---

## Question 605

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution:
The core requirements are low-latency access to frequently used data, reduced dependency on on-premises
servers, and minimal infrastructure changes during migration.

**Option D**, deploying an AWS Storage Gateway volume gateway configured with cached volumes, directly
addresses these requirements. A cached volume gateway stores the entire dataset in Amazon S3, while
frequently accessed data is cached locally on the on-premises servers. This provides low-latency access to
frequently used data, as it's readily available locally. The bulk of the data resides in S3, fulfilling the
requirement of reducing dependency on on-premises servers and decreasing the needed storage on the local

ISCSI infrastructure.

**Option A**, deploying an Amazon S3 File Gateway, is less suitable because it's primarily designed for file-based
access, not block-level access required by ISCSI. Converting ISCSI volumes to files and then using S3 File
Gateway would involve significant infrastructure changes.

**Option B**, deploying Amazon EBS storage with backups to Amazon S3, requires migrating data entirely to
AWS. This is a significant infrastructure change and doesn't provide low-latency access to on-premises users
without completely migrating the applications.

**Option C**, deploying an AWS Storage Gateway volume gateway configured with stored volumes, stores the
entire dataset locally on the on-premises servers. While this reduces dependency on the original servers, it
does not provide low-latency local access to the application server because it would need to access the
storage via Storage Gateway.

Therefore, the cached volumes configuration with AWS Storage Gateway strikes the best balance between
low latency, reduced on-premises dependency, and minimal infrastructure changes by leveraging the onpremises servers to cache frequently accessed data.
For further research, you can refer to these authoritative links:
AWS Storage Gateway Documentation: https://aws.amazon.com/storagegateway/
Cached Volumes: https://docs.aws.amazon.com/storagegateway/latest/userguide/cached-volumes.html

---

## Question 606

**Answer:** **B**

**Explanation:**

The correct answer is B. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the
objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

Here's a detailed justification:
Durability: S3 Standard provides 99.999999999% (11 9's) of data durability because it stores data
redundantly across multiple devices in multiple Availability Zones (AZs). S3 Standard-IA also offers this high
level of durability as it is designed for infrequently accessed data but still needs the same resilience as S3
Standard. This meets the requirement for maximizing object durability.
Availability: S3 Standard offers high availability (99.99%). S3 Standard-IA also offers high availability
(99.9%) suitable for data that needs to be accessed when needed, though with a slightly lower availability

guarantee than standard.
Accessibility: Both S3 Standard and S3 Standard-IA provide immediate accessibility. This is important
because the objects must be "readily available at any time."
Cost-Effectiveness: Because most accesses occur within the first 30 days, storing the data initially in S3
Standard makes sense because it is optimized for frequent access. After 30 days, transitioning to S3
Standard-IA reduces storage costs for the less frequently accessed data.
Lifecycle Policies: S3 Lifecycle policies allow you to automatically transition objects between storage classes
based on predefined rules. This automation simplifies storage management and reduces costs.
Why the other options are less suitable:
A (S3 Glacier): S3 Glacier is designed for long-term archival, not for data that needs to be readily available.
Retrievals from Glacier can take several hours, which violates the "readily available at any time" requirement.
C (S3 One Zone-IA): S3 One Zone-IA stores data in only one Availability Zone. While cost-effective, it
compromises durability. If the AZ is destroyed, data could be lost. This violates the requirement to maximize
object durability.
D (S3 Intelligent-Tiering transitioning to S3 Standard-IA): While S3 Intelligent-Tiering automatically moves
data between frequent and infrequent access tiers based on usage patterns, using a lifecycle rule to
transition to S3 Standard-IA after 30 days provides a more predictable cost optimization for the specific
access pattern described (frequent access for 30 days, then infrequent access). Intelligent-Tiering is more
beneficial when access patterns are unknown or vary significantly. Using both Intelligent Tiering with a
lifecycle rule transitioning to Standard-IA might introduce unnecessary complexity and potentially higher
costs if the 30-day access pattern holds true.

Therefore, storing the objects in S3 Standard initially and then transitioning to S3 Standard-IA after 30 days
using a lifecycle rule strikes the best balance between durability, availability, accessibility, and costeffectiveness for the given requirements.

---

## Question 607

**Answer:** **C**

**Explanation:**

The most cost-effective and performant solution is to offload the BLOB storage to Amazon S3 (**Option C**).

Here's why:
Cost: EBS storage, especially large volumes and Provisioned IOPS, is significantly more expensive than S3. S3
offers cost-effective object storage, optimized for storing large binary files like documents.
Performance: Storing BLOBs directly in the database bloats its size, impacting query performance and overall
database responsiveness. Moving BLOBs to S3 reduces database size and improves performance by allowing
it to focus on structured data.
Scalability and Durability: S3 provides virtually unlimited storage and high durability (11 9's), ensuring data
availability and resilience.
Database Optimization: The database can then focus on storing metadata (e.g., document name, S3 object
key) for each document, which is much smaller and faster to query.
Other Options' Drawbacks:
Options A and B suggest increasing EBS storage, which is counterproductive given the cost and performance
issues associated with storing BLOBs in the database. Magnetic storage (**Option A**) is also unsuitable for
performance-sensitive applications. DynamoDB (**Option D**) is a NoSQL database, which would require a
significant application rewrite and data migration effort, adding complexity and cost, and is likely not
necessary for storing document data, whose metadata can easily be held within the relational RDS DB.

In summary, moving the BLOBs to S3 frees up valuable database resources, lowers storage costs, improves
application performance, and leverages S3's scalability and durability features, while storing metadata within
the existing database maintains the integrity and structure of the data.

---

## Question 608

**Answer:** **A**

**Explanation:**

The correct answer is A because it leverages AWS WAF, a service specifically designed for protecting web
applications from common web exploits. AWS WAF allows you to create rules, called web access control lists
(web ACLs), to control which traffic is allowed or blocked based on criteria like IP addresses, HTTP headers,
HTTP body, URI strings, SQL injection, and cross-site scripting. Associating a web ACL with the ALB enables
filtering traffic based on registered IP addresses. Implementing IP rule sets within AWS WAF is a direct and
scalable method to allow only traffic originating from the registered retail location IP addresses.

**Option B** is incorrect because AWS Firewall Manager is designed to centrally manage firewall rules across
multiple AWS accounts and resources, not to enforce IP address restrictions at the application level. While
Firewall Manager can leverage WAF, the core functionality needed here is within WAF itself.

**Option C** is less optimal. While Lambda authorization can achieve the desired outcome, it introduces
unnecessary complexity and potential latency. Every request would trigger a Lambda function invocation,
which can impact application performance and increase operational overhead. WAF offers a more efficient
and purpose-built solution for IP address filtering.

**Option D** is not recommended. Network ACLs operate at the subnet level and are stateless, meaning ingress
and egress rules must be configured separately. Managing 20,000+ IP addresses in network ACL rules is
cumbersome, error-prone, and can impact network performance due to the sheer number of rules.
Furthermore, network ACLs have a limited number of rules per list, making this option infeasible. WAF
provides a much more manageable and scalable solution for filtering traffic at the application layer.

Therefore, using AWS WAF with IP rule sets offers the most efficient, scalable, and secure method to restrict
access to the application endpoint based on the registered IP addresses of the retail locations.

---

## Question 609

**Answer:** **B**

**Explanation:**

The correct answer is B: Create data filters to implement row-level security and cell-level security.

Here's why: AWS Lake Formation allows you to define fine-grained access control policies directly on your
data lake. Data filters provide a mechanism to implement row-level and cell-level security without requiring
custom code or complex infrastructure.

**Option B** leverages Lake Formation's built-in capabilities for security. Row-level security limits access to
specific rows based on defined criteria (e.g., only allowing certain users to see records for their region). Celllevel security restricts access to specific columns or attributes, masking sensitive data elements within a row.
Both are natively supported through Lake Formation's data filter feature. This means you don't have to build
and maintain additional ETL pipelines or custom access control mechanisms.

**Option A**, creating an IAM role with permissions to access Lake Formation tables, provides a basic level of
access control but doesn't offer the granularity needed to prevent access to specific rows or cells containing
sensitive information. It's a necessary component for Lake Formation overall, but insufficient for the specific
security requirements of the question.

**Option C** and D involve creating AWS Lambda functions to remove or modify sensitive data. These options
introduce significant operational overhead. **Option C** modifies the data before it's even stored, potentially
impacting downstream analysis. **Option D** requires periodic processing and introduces complexity in managing
and scheduling these Lambda functions. They also require the creation and maintenance of custom code,
increasing the possibility of errors and vulnerabilities. These options add unnecessary complexity because
Lake Formation provides a native solution.

Therefore, using Lake Formation's data filters for row-level and cell-level security is the most efficient and
secure method for restricting access to sensitive data within the data lake, minimizing operational overhead.
For further research, refer to the AWS documentation on Lake Formation data filtering:
AWS Lake Formation Data Filtering: https://docs.aws.amazon.com/lake-formation/latest/dg/datafiltering.html
Lake Formation Fine-Grained Access Control: https://aws.amazon.com/blogs/big-data/fine-grained-accesscontrol-using-aws-lake-formation/

---

## Question 610

**Answer:** **B**

**Explanation:**

The correct answer is B because it provides a solution that ensures data transfer between EC2 instances and
S3 buckets, and between the VPC and the on-premises network, without traversing the public internet.

A gateway VPC endpoint for S3 creates a direct, private connection to S3 from within the VPC. It avoids the
need to route traffic through the internet gateway, NAT gateway, or VPC peering connections to access S3.
This directly addresses the compliance requirement of avoiding public internet transmission for S3 data
access. Gateway endpoints are designed specifically for S3 and DynamoDB.
An AWS Direct Connect connection establishes a private network connection between the company's onpremises data center and the VPC. This allows the servers in the on-premises data center to securely
consume the output from the EC2 instances without sending data over the internet. Direct Connect offers
consistent, low-latency connectivity compared to internet-based connections.

**Option A** is incorrect because interface VPC endpoints are used to privately connect to AWS services other
than S3 and DynamoDB. EC2 itself doesn't require a VPC endpoint for its normal functioning within a VPC. An
AWS Site-to-Site VPN connection addresses the on-premises connectivity but not the S3 traffic routing
requirements.

**Option C** is incorrect because Transit Gateway is used to connect multiple VPCs and on-premises networks,
but does not provide a private connection to S3. While a VPN addresses on-premises connectivity, it doesn't
isolate S3 traffic from the internet.

**Option D** is overly complex and inefficient. Using proxy EC2 instances with NAT gateways still involves traffic
potentially traversing public internet infrastructure at some point. It also adds unnecessary overhead and cost
to the architecture. Using gateway VPC endpoints is the recommended, more performant and cost-effective
approach for private S3 access.

---

## Question 611

**Answer:** **A**

**Explanation:**

The recommended solution is A: Use Amazon Kinesis Data Streams to ingest the data. Process the data
using AWS Lambda functions.

Here's why:

Scalability and Decoupling: Kinesis Data Streams provides a highly scalable and durable data ingestion
service. It can handle large volumes of data in real-time and decouples the data source (third-party vendor)
from the processing application. This decoupling is crucial because it allows the application to process data at
its own pace, preventing overload. https://aws.amazon.com/kinesis/data-streams/
Elastic Processing: AWS Lambda functions offer a serverless compute environment that can automatically
scale in response to the incoming data stream from Kinesis. Each Lambda function can process individual
records from the stream, enabling parallel processing and efficient utilization of resources. This eliminates
the bottleneck caused by the EC2 instances reaching their maximum capacity.
https://aws.amazon.com/lambda/
Real-time Processing: Kinesis Data Streams and Lambda enable near-real-time processing of data, meeting
the application's requirements.
Cost-Effectiveness: Lambda's pay-per-execution model can be more cost-effective than running EC2
instances continuously, especially during periods of low data volume.
Here's why the other options are less suitable:

**B:** Amazon API Gateway with usage plans: While API Gateway can provide rate limiting, it doesn't address the
underlying issue of limited compute capacity on the EC2 instances. It might reduce the frequency of 503
errors but won't enable the application to handle high data volumes.

**C:** Amazon SNS and Auto Scaling group behind an Application Load Balancer: SNS is a publish/subscribe
messaging service and not ideal for ingesting a continuous data stream. While Auto Scaling would help with
horizontal scaling of EC2 instances, it doesn't offer the same level of scalability and elasticity as Kinesis and
Lambda. Additionally, managing the Auto Scaling group adds operational overhead. SNS has a maximum
message size limitation as well, which makes it less suitable for large data payloads.
https://docs.aws.amazon.com/sns/latest/dg/sns-limits.html

**D:** Amazon ECS with Auto Scaling: ECS provides container orchestration, which can improve resource
utilization and deployment. However, it still relies on underlying compute resources (EC2 instances), and the
scaling may not be as responsive or cost-effective as Lambda for handling unpredictable data spikes. It
requires more operational overhead for maintaining the ECS cluster.

In summary, Kinesis Data Streams and Lambda provide a scalable, cost-effective, and near-real-time solution
for ingesting and processing data from the third-party vendor, addressing the issue of 503 errors and
compute capacity limitations.

---

## Question 612

**Answer:** **D**

**Explanation:**

The correct answer is D: Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC
endpoint. Update the application to use the new VPC endpoint.

Here's why:
VPC endpoints provide private connectivity between your VPC and supported AWS services, including S3,
without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. This
means traffic between your EC2 instances in the private subnet and the S3 bucket stays within the AWS
network, enhancing security and reducing latency.

**Option A** is incorrect because an internet gateway provides access to the internet, which violates the
requirement of not using the internet to connect to S3.

**Option B** is incorrect because while a VPN connection does provide a secure connection, it is primarily used to
connect your on-premises network to your VPC. It's an unnecessary complexity for internal VPC
communication.

**Option C** is incorrect because a NAT gateway allows instances in a private subnet to connect to the internet
(e.g., for software updates), but it doesn't provide private connectivity to S3. It also utilizes the internet, which
again goes against the problem's requirements.

**Option D**, by using a VPC endpoint, specifically a Gateway Endpoint for S3, provides a secure, private
connection between the EC2 instances in the private subnet and the S3 bucket. The S3 bucket policy can be
updated to only allow access from that specific VPC endpoint, further enhancing security by restricting
access to only the EC2 instances. The application is configured to use the VPC endpoint, ensuring traffic flows
privately within AWS.
Gateway endpoints are a cost-effective solution when compared to VPNs and do not introduce extra hops like
NAT gateways. They are specifically designed for this kind of direct S3 access.
For further reading:
AWS VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway VPC Endpoints for S3: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html

---

## Question 613

**Answer:** **B**

**Explanation:**

The best solution is B. Enable secrets encryption in the EKS cluster by using AWS Key Management Service
(AWS KMS).

Here's why:
Native Integration: EKS natively supports secrets encryption at rest using KMS. This is the most
straightforward and least operationally heavy approach because it leverages built-in functionality. No custom
code or external services are required.
Centralized Key Management: KMS provides a centralized and secure way to manage the encryption keys.
AWS handles the key lifecycle, rotation, and access control.
Ease of Implementation: Enabling secrets encryption in EKS involves configuring the control plane to use a
KMS key. Once enabled, all newly created or updated secrets are automatically encrypted.
Reduced Development Effort: **Option A** requires the container application to handle encryption, increasing
the complexity of the application code and potentially exposing the key within the application. **Option C**
introduces a Lambda function which creates an additional component to manage and monitor.
Secrets Management: While Systems Manager Parameter Store (**Option D**) can store sensitive information,
it's not designed to replace Kubernetes secrets for application deployment within an EKS cluster. Using
Parameter Store would require additional logic within the application to fetch and manage the secrets.

Therefore, enabling secrets encryption in EKS using KMS directly addresses the requirement with the least
operational overhead by utilizing native functionality and centralized key management.

---

## Question 614

**Answer:** **D**

**Explanation:**

The correct solution is D: Deploy an Application Load Balancer (ALB) with a target group containing the
application servers' Auto Scaling group, and configure the security group to allow only the web servers to
access the application servers. Here's why:
ALB for Application Tier Traffic: ALBs are designed for HTTP/HTTPS traffic, typical for communication
between web servers and application servers in a multi-tier architecture. They provide advanced routing
capabilities based on content, hostnames, or other request attributes. This makes them suitable for directing
traffic from the web tier to the application tier.

Target Group for Dynamic Scaling: Using a target group linked to the application servers' Auto Scaling group
allows the ALB to automatically adapt as the number of application servers scales up or down. The ALB
dynamically registers and deregisters instances as they are launched or terminated by Auto Scaling, ensuring
high availability and scalability.
Security Group for Fine-Grained Access Control: Security groups act as virtual firewalls at the instance level.
By configuring the security group of the application servers to allow traffic only from the web servers'
security group, we can effectively limit access to the application tier. This ensures that only authorized web
servers can communicate with the application servers, enhancing security and preventing unauthorized
access.
Why not A: AWS PrivateLink is used to privately connect your VPC to supported AWS services, services
hosted by other AWS accounts (called endpoint services), and supported AWS Marketplace partner services.
It's overkill for internal communication between tiers within the same VPC. Using network ACLs for this level
of granularity can become complex and harder to manage than security groups.
Why not B: VPC endpoints are used to connect to AWS services privately without traversing the public
internet. Similar to PrivateLink, it's designed for external AWS service communication, not internal tier
communication. Security groups are again, more effective for instance-level access control in this scenario.
Why not C: While Network Load Balancers (NLBs) provide high throughput and low latency, they operate at
the transport layer (TCP/UDP). They lack the application-level awareness of ALBs and are less suited for
HTTP/HTTPS traffic routing based on request content. Also, security groups are easier to manage for this
level of security than network ACLs.

In summary, using an ALB for the application tier along with a well-defined security group rule achieves the
goal of restricting access to the application servers specifically to the web servers in a scalable and
manageable way.

---

## Question 615

**Answer:** **D**

**Explanation:**

The correct answer is D because it directly addresses the need for centralized metrics and log aggregation
from an EKS cluster running a microservices application. Amazon CloudWatch Container Insights is

specifically designed for monitoring containerized applications, including those running on EKS. It
automatically discovers container environments and collects performance data such as CPU, memory,
network, and disk utilization, as well as application logs. These metrics and logs are then readily available in
the CloudWatch console, providing a single pane of glass for monitoring the entire application.

**Option A** is partially correct, as the CloudWatch agent can collect logs and some metrics. However, it requires
more manual configuration and doesn't offer the same level of pre-built insights and dashboards tailored for
container environments as Container Insights.

**Option B**, AWS App Mesh, is a service mesh that focuses on managing and securing communication between
microservices. While App Mesh provides metrics related to service-to-service communication (e.g., latency,
request rates, error rates), it doesn't directly address the broader requirement of collecting all metrics and
logs from the entire application across the EKS cluster. Additionally, viewing logs and metrics primarily
focuses on inter-service communication, not the entire cluster.

**Option C**, using AWS CloudTrail, is designed for auditing API calls made to AWS services. While CloudTrail
captures data events, it doesn't collect the granular application metrics and logs needed for performance
monitoring within a Kubernetes cluster. Also, querying CloudTrail logs in OpenSearch is not a suitable
replacement for metrics dashboards.

Therefore, CloudWatch Container Insights provides the most comprehensive and efficient solution for
collecting, aggregating, and summarizing metrics and logs from an EKS application in a centralized location. It
is designed to automatically discover and monitor containerized environments.
References:
Amazon CloudWatch Container Insights
Monitoring Amazon EKS with CloudWatch Container Insights

---

## Question 616

**Answer:** **C**

**Explanation:**

The correct solution is C: Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub.

Here's why:
Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and
unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3. It analyzes
VPC Flow Logs, CloudTrail logs, and DNS logs to identify threats. This addresses the requirement of

continuously monitoring for malicious activity within the AWS account, workloads, and S3 bucket access
patterns.
AWS Security Hub is a security service that provides a comprehensive view of your security state in AWS. It
collects security findings from various AWS security services like GuardDuty, Inspector, and Macie, as well as
from integrated third-party partner products. It then correlates and prioritizes these findings to help you
identify the most important security issues. Security Hub provides a central dashboard to view and manage
these findings. This satisfies the need to report suspicious activity and display it on a dashboard.

**Option A** is incorrect because while Amazon Macie can identify sensitive data stored in S3, it doesn't provide
comprehensive threat detection across the entire AWS environment like GuardDuty. Also, AWS Config is
primarily a configuration management service and doesn't provide threat detection capabilities.

**Option B** is incorrect because Amazon Inspector focuses on identifying software vulnerabilities and
unintended network exposure within EC2 instances and container images. While valuable, it doesn't monitor
access patterns to S3 buckets or provide a central dashboard. CloudTrail logs API calls, but is not designed to
automatically generate security findings or provide a dashboard like Security Hub.

**Option D** is incorrect because AWS Config monitors the configuration of your AWS resources, and Amazon
EventBridge is an event bus service. While Config can detect configuration changes that might indicate a
security issue, it doesn't have built-in threat detection capabilities. EventBridge can trigger actions based on
events, but it doesn't provide the threat intelligence needed for identifying malicious activity.

In summary, GuardDuty provides the threat detection and monitoring capabilities, and Security Hub provides
the central dashboard for reporting and managing security findings, making option C the best solution.
Relevant Documentation:
Amazon GuardDuty: https://aws.amazon.com/guardduty/
AWS Security Hub: https://aws.amazon.com/security-hub/

---

## Question 617

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's why:

**B.** Create an Amazon Elastic File System (Amazon EFS) file system: Amazon EFS is a fully managed,
scalable, elastic, and NFS file system. It's designed for use with AWS Cloud services and on-premises
resources. Given the requirement that multiple AWS resources need to access the data via the NFS protocol,

EFS is a natural fit. It supports concurrent access from multiple EC2 instances, containers, and serverless
functions.

**E.** Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the onpremises location and AWS: AWS DataSync is a data transfer service that simplifies, automates, and
accelerates moving data between on-premises storage and AWS storage services. It's designed to handle
active datasets and provides features such as incremental transfers and encryption. Deploying a DataSync
agent on-premises allows for efficient and secure data transfer from the existing NFS server to the EFS file
system in AWS, without interrupting existing services because DataSync handles the data movement in the
background.
Here's why the other options are not the best choice:

**A.** Create an Amazon FSx for Lustre file system: While FSx for Lustre is a high-performance file system, it's
typically used for compute-intensive workloads such as machine learning, high-performance computing
(HPC), and video processing. It's not the most cost-effective option for general-purpose file storage and
sharing via NFS.

**C.** Create an Amazon S3 bucket to receive the data: S3 is object storage, not a file system. While data could
technically be moved to S3, it wouldn't natively support the NFS protocol requirement. Directly copying the
data into S3 would mean a change in accessing protocol to S3 API calls, which is not in line with original
requirement.

**D.** Manually use an operating system copy command to push the data into the AWS destination: This is not
practical or efficient for a 200GB dataset, especially with the requirement for zero downtime. It lacks built-in
features for data integrity, error handling, and automated synchronization.

---

## Question 618

**Answer:** **C**

**Explanation:**

The correct solution is option C because it addresses the RPO, cross-region replication, and data retention
requirements. Here's a breakdown:

1. Multi-AZ Deployment: A Multi-AZ deployment type is essential for meeting the 5-minute RPO
requirement. Multi-AZ provides high availability, automatically failing over to a standby file server in
case of a failure in the primary Availability Zone. Single-AZ deployments do not offer this level of
fault tolerance. https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html

2. AWS Backup for Cross-Region Replication: AWS Backup is used to create a daily backup of the file
system in us-east-1 and copy it to us-west-2. This meets the requirement of replicating the file
system to another region for disaster recovery purposes. AWS Backup enables scheduled backups
and retention policies, vital for data protection and compliance. https://aws.amazon.com/backup/

3. AWS Backup Vault Lock in Compliance Mode: To ensure the replicated data cannot be deleted by
any user for 5 years, AWS Backup Vault Lock in compliance mode is used. Compliance mode prevents
any modifications to the retention policy once it's configured, ensuring immutability. Governance
mode allows some modifications under specific conditions, which doesn't meet the strict requirement
of no deletion. https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html

4. Retention Period: Configuring a minimum duration of 5 years in the Vault Lock ensures that the
backups cannot be deleted before the specified period, satisfying the data retention policy.
Options A and D are incorrect because they use Single-AZ deployment, which doesn't meet the high
availability requirements for the given RPO. **Option B** uses governance mode for Vault Lock, which doesn't
guarantee the data will not be deleted. Therefore, option C is the only option that meets all requirements.

---

## Question 619

**Answer:** **C**

**Explanation:**

The correct answer is C because it utilizes Service Control Policies (SCPs) to centrally enforce mandatory
configurations across AWS Organizations accounts, addressing the specific requirement of preventing
modifications to the CloudTrail configuration in developer accounts.

Here's a breakdown of the justification:
Service Control Policies (SCPs): SCPs are a feature of AWS Organizations that allow administrators to define
guardrails and controls over the AWS services and actions that users can perform within member accounts (in
this case, the developer accounts). These policies are applied at the organizational unit (OU) or account level,
effectively setting boundaries for permitted actions.
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html
Preventing CloudTrail Modification: By creating an SCP that explicitly denies actions related to modifying or
deleting CloudTrail configurations (e.g., cloudtrail:UpdateTrail, cloudtrail:DeleteTrail), the solutions architect can
ensure that even with root user access in the developer accounts, developers cannot alter the mandatory
CloudTrail setup defined at the organization level.
Centralized Enforcement: SCPs are managed from the AWS Organizations management account, providing a
single point of control for enforcing security policies across all member accounts. This ensures consistency
and simplifies governance.
Root User Limitation: While developers have root user access in their individual accounts, SCPs override
these permissions. The SCP acts as a "guardrail," preventing actions regardless of the user's IAM permissions
within the account. This addresses the core requirement of securing the CloudTrail configuration despite the
developers having root user privileges.

Why other options are incorrect:

**A:** Applying an IAM policy to the root user within each developer account is not scalable and would require
manual configuration in each account. Furthermore, if a developer with root user access compromises the
account, they could potentially modify or delete the policy itself.

**B:** Creating a new trail from the developer account does not meet the request. If the initial CloudTrail is
changed and the only record is the additional trail, this becomes a misconfiguration.

**D:** Service-linked roles are used for services to access other services and do not restrict permissions for users
within the developer accounts. It will also not prevent developers from modifying or deleting CloudTrail
configurations.

In summary, using SCPs is the most effective and scalable way to enforce mandatory CloudTrail
configurations across multiple AWS accounts in an organization, ensuring that developers cannot bypass
centrally defined security controls even with root user access to their individual accounts.

---

## Question 620

**Answer:** **C**

**Explanation:**

The correct answer is C, Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume. Here's why:

The application requires durable storage, consistent, and low-latency performance. Let's evaluate each
option:

**A.** Instance store volume: Instance store provides very high performance but is ephemeral. Data is lost if the
instance fails or is stopped. This violates the durability requirement.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html

**B.** Amazon ElastiCache for Memcached cluster: ElastiCache is a caching service. While it offers low latency,
it is primarily for caching frequently accessed data and is not designed for durable storage. The data within
Memcached instances is not persistent across failures. It's not suitable as the primary storage for a businesscritical application. https://aws.amazon.com/elasticache/

**C.** Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume: Provisioned IOPS (io1 and io2)
EBS volumes are designed for I/O-intensive workloads and offer consistent, low-latency performance by
allowing you to specify the number of IOPS (Input/Output Operations Per Second) that the volume can
support. EBS provides durable, block-level storage that is independent of the EC2 instance lifecycle. This
ensures data persistence and meets the requirements. The io2 Block Express volumes provide the highest
performance. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html

**D.** Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume: Throughput Optimized
HDD (st1) volumes are designed for frequently accessed, throughput-intensive workloads, such as big data,
data warehouses, and log processing. While they are cost-effective, they don't offer the consistent, lowlatency performance required for a business-critical application. HDD drives have slower seek times
compared to SSDs.

Therefore, only Provisioned IOPS SSD EBS volumes provide the necessary durability, consistency, and low
latency for the application.

---

## Question 621

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy
photos from the existing S3 bucket to the second S3 bucket.

Here's why:
S3 Cross-Region Replication (CRR) is specifically designed to automatically and asynchronously replicate
objects between S3 buckets in different AWS Regions. It's the most straightforward and efficient way to

achieve the stated requirement of storing copies of new photos in a different Region with minimal operational
overhead. CRR handles the replication process seamlessly, ensuring data consistency and minimizing manual
intervention.

**Option B** is incorrect because CORS (Cross-Origin Resource Sharing) is a browser security mechanism that
allows web pages from one domain to access resources from a different domain. It doesn't facilitate S3 object
replication across regions.

**Option C** is incorrect because S3 Lifecycle rules are primarily for managing object storage lifecycle, such as
transitioning objects to different storage classes (e.g., Standard to Glacier) or deleting them after a certain
period. While lifecycle rules can move data within a region, they are not the primary method for replicating
data between regions.

**Option D** is incorrect because while Lambda could be used to copy the objects, it involves significantly more
operational effort than CRR. It requires writing, deploying, and maintaining Lambda function code, configuring
S3 event notifications, and managing potential scaling and error handling issues. This approach introduces
unnecessary complexity compared to the built-in functionality of CRR. CRR handles the replication in a
managed way. In terms of 'least operational effort', CRR requires the least hands-on management because the
replication is automatically managed by AWS once configured.
For further research, refer to the AWS documentation on S3 Cross-Region Replication:
Amazon S3 Cross-Region Replication

---

## Question 622

**Answer:** **CD**

**Explanation:**

The correct answer is CD. Here's why:

**Option C**: Deploy Amazon DynamoDB as the database solution. Ensure that DynamoDB auto scaling is
enabled.
DynamoDB is a fully managed NoSQL database service. Its key advantage in this scenario is its ability to scale
automatically based on demand. Given the huge spike in users during the morning hours and a significant
drop-off for the rest of the day, DynamoDB auto-scaling is crucial for handling the fluctuating workload
efficiently and cost-effectively. DynamoDB's NoSQL nature aligns with the architects' need to rapidly evolve
the schema as it provides more flexibility than a relational database.https://aws.amazon.com/dynamodb/

**Option D**: Deploy the static content into an Amazon S3 bucket. Provision an Amazon CloudFront
distribution with the S3 bucket as the origin.
S3 is highly scalable and provides a durable storage for static content. By pairing it with CloudFront, a content
delivery network (CDN), the application can effectively serve millions of users globally. CloudFront caches
content at edge locations, reducing latency and offloading the traffic from S3. Since the application will
consist of a static single page, serving it directly from S3 through CloudFront is the most cost-effective and
scalable solution.https://aws.amazon.com/s3/https://aws.amazon.com/cloudfront/

Why other options are not optimal:

**A:** Deploy Amazon DynamoDB as the database solution. Provision on-demand capacity. While DynamoDB is
a good choice, provisioning on-demand capacity requires estimating the peak load and pre-allocating
resources. This approach is less flexible and can be more expensive than auto-scaling, especially with the
drastically changing user load. It doesn't adapt dynamically to usage changes as well as autoscaling.

**B:** Deploy Amazon Aurora as the database solution. Choose the serverless DB engine mode. Aurora
Serverless could be a good choice, but it may not be the best option if rapid schema evolution is required.
Relational databases generally involve more rigid schemas and schema migrations than NoSQL databases
like DynamoDB.

**E:** Deploy the web servers for static content across a fleet of Amazon EC2 instances in Auto Scaling groups.
Configure the instances to periodically refresh the content from an Amazon Elastic File System (Amazon
EFS) volume. Deploying a fleet of EC2 instances to serve static content is overkill and more complex. Using
S3 and CloudFront is much simpler, more scalable, and cheaper for this purpose. EFS is designed for shared
file storage, not for serving static web content to a large number of users. EC2 is best suited for computeintensive tasks or running dynamic applications, not for directly serving static content.

---

## Question 623

**Answer:** **B**

**Explanation:**

The most operationally efficient solution to protect REST APIs managed by Amazon API Gateway from SQL
injection and cross-site scripting (XSS) attacks is to configure AWS WAF (Web Application Firewall).

Here's why:
AWS WAF's Core Functionality: AWS WAF is specifically designed to protect web applications from common
web exploits like SQL injection and XSS. It allows you to define customizable rules to filter malicious traffic
based on patterns in HTTP requests.
Direct Integration with API Gateway: AWS WAF can be directly associated with API Gateway, providing a
seamless and efficient way to protect APIs. This direct integration minimizes operational overhead.
Pre-configured Rules: AWS WAF offers pre-configured rule sets (managed rules) specifically designed to

mitigate common web vulnerabilities, including those associated with SQL injection and XSS. Using managed
rules simplifies deployment and maintenance.
Operational Efficiency: Using AWS WAF directly on API Gateway avoids the added complexity and
operational overhead of implementing a CDN like CloudFront solely for WAF integration. The other solutions
are not as operationally efficient.
AWS Shield's Limitations: AWS Shield primarily protects against DDoS attacks, not SQL injection or XSS.
While Shield is valuable for availability, it doesn't address the stated security requirements.
CloudFront and WAF Combination (Suboptimal): While combining CloudFront with AWS WAF is a valid
approach for protecting web applications, it's less operationally efficient for API Gateway protection
compared to directly associating WAF with API Gateway. The CloudFront layer introduces additional
complexity, and it's not strictly necessary when the primary goal is to protect the API layer.

Therefore, AWS WAF provides the most operationally efficient solution, by allowing you to define rules or
leverage managed rules to filter traffic and protect against SQL injection and XSS attacks directly at the API
Gateway level.
Supporting Links:
AWS WAF: https://aws.amazon.com/waf/
AWS WAF and API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigatewaycontrol-access-aws-waf.html
AWS Shield: https://aws.amazon.com/shield/

---

## Question 624

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution:
The scenario describes a common use case: integrating on-premises Active Directory (AD) with AWS for
seamless user authentication and authorization. The core requirement is to allow existing users to access
AWS resources without creating separate AWS identities, leveraging their existing AD credentials.

**Option D**, using SAML 2.0-based federation, directly addresses this need. SAML (Security Assertion Markup
Language) is an open standard for exchanging authentication and authorization data between security
domains, namely an Identity Provider (IdP) and a Service Provider (SP). In this case, Active Directory acts as
the IdP, and AWS acts as the SP.

Here's how it works:

1. A user attempts to access an AWS resource.

2. AWS redirects the user to the AD Federation Services (ADFS) server, which acts as the SAML IdP.

3. The user authenticates with their existing AD credentials.

4. ADFS creates a SAML assertion containing information about the user's identity and group
memberships.

5. ADFS sends the SAML assertion to AWS.

6. AWS uses the information in the SAML assertion to determine which IAM role the user should
assume. You configure this mapping in IAM.

7. AWS grants the user temporary credentials based on the permissions defined in the assumed role.

8. The user can now access the AWS resource with the permissions granted by the role.
By mapping AD groups to IAM roles, you can control access to AWS resources based on the user's existing
group memberships in Active Directory. This approach avoids creating and managing individual IAM users for
each of the 1,500 users, simplifying administration and maintaining consistency with on-premises access
controls. SAML federation provides a single sign-on (SSO) experience, enhancing user convenience.
The other options are less suitable:

**Option A**, creating individual IAM users, is unmanageable for a large number of users (1,500) and defeats the
purpose of leveraging the existing Active Directory.

**Option B**, using Amazon Cognito with an Active Directory user pool, is primarily designed for authenticating
application users and doesn't directly integrate with IAM roles for resource access in the same way SAML
does. Cognito does not directly map AD groups to IAM roles. While cognito can authenticate against AD, it is
not the most straightforward solution to the described problem.

**Option C**, defining cross-account roles, is mainly used for granting access to resources in other AWS
accounts, not for federating with an external identity provider like Active Directory. This option also doesn't
solve the problem of linking AD identities to AWS access.

---

## Question 625

**Answer:** **C**

**Explanation:**

The correct answer is C: Configure Amazon Route 53 with a geolocation policy.
Geolocation routing in Amazon Route 53 allows you to route traffic to different resources based on the

geographic location of your users. This is perfectly suited for scenarios where content distribution rights vary
by region. By configuring Route 53 to direct users from specific countries or regions to the appropriate
Application Load Balancer and origin server holding the content licensed for that area, the company can
ensure compliance with distribution rights. Each record in Route 53 would specify a geographic location (e.g.,
a country) and the corresponding Application Load Balancer endpoint.

**Option A**, using CloudFront with AWS WAF, primarily addresses security concerns and content caching for
performance improvements but doesn't directly facilitate geographic content distribution. While CloudFront
supports geo-restriction, it mainly blocks access rather than routing to different content origins based on
location.

**Option B**, using Application Load Balancers with AWS WAF, focuses on securing the web application layer and
doesn't inherently offer geolocation-based routing capabilities. While WAF can identify the origin of a request
through IP addresses, it cannot dynamically route traffic to different servers based on that information.

**Option D**, using Route 53 with geoproximity routing, is designed to route traffic based on the physical
proximity of users to your resources. While it uses geographical information, it's primarily for optimizing
latency and not for complying with content distribution rights as precisely as geolocation routing.
Geoproximity considers distances between resources and users, making it less suitable when adherence to
defined regional boundaries for legal reasons is paramount. Geolocation offers precise control over regionbased content delivery.
For further research, refer to the following resources:
Amazon Route 53 Geolocation Routing:
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo
AWS WAF: https://aws.amazon.com/waf/
Amazon CloudFront Geo Restriction:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html
Amazon Route 53 Geoproximity Routing:
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policygeoproximity

---

## Question 626

**Answer:** **B**

**Explanation:**

The correct answer is B: Deploy an AWS DataSync agent on premises. Configure the DataSync agent to

perform the online data transfer to an S3 bucket.

Here's why: AWS DataSync is specifically designed for efficiently and securely transferring large amounts of
data between on-premises storage and AWS services like S3. A key feature of DataSync is its built-in data
integrity validation. During the transfer process, DataSync performs checksum calculations on both the
source and destination data. These checksums are compared to ensure that the data transferred is identical
to the original data, thus automatically validating integrity. DataSync also offers features like encryption
during transit and at rest, compression, and automatic retries for failed transfers. This ensures reliable and
secure data migration.

**Option A** (AWS Snowball Edge) is suitable for large datasets when network bandwidth is limited or unreliable.
While Snowball Edge validates data during import to AWS, it doesn't automatically validate the integrity
during an online transfer from on-premises, as the question requires. It's primarily an offline data transfer
solution.

**Option C** (Amazon S3 File Gateway) provides a way to access S3 objects as files on premises, effectively
creating a hybrid storage solution. While it can transfer data, its primary purpose isn't bulk data migration with
automatic integrity validation like DataSync. It's more focused on providing local file system access to S3.

**Option D** (Amazon S3 Transfer Acceleration) leverages AWS's globally distributed edge locations to
accelerate uploads to S3. While it can improve transfer speeds, it doesn't provide the automatic data integrity
validation feature that DataSync offers. It focuses solely on optimizing transfer speeds.

In summary, DataSync's core functionalities are efficient data transfer and automatic data integrity validation,
precisely meeting the requirements of the question.
Further Reading:
AWS DataSync: https://aws.amazon.com/datasync/
AWS Snowball Edge: https://aws.amazon.com/snowball/
Amazon S3 File Gateway: https://aws.amazon.com/storagegateway/file/
Amazon S3 Transfer Acceleration: https://aws.amazon.com/s3/transfer-acceleration/

---

## Question 627

**Answer:** **A**

**Explanation:**

The best solution to migrate the DNS servers to AWS, maximizing availability and minimizing operational
overhead, is option A: creating 200 new hosted zones in Amazon Route 53 and importing zone files.

Here's why:
Managed Service: Route 53 is a highly available and scalable managed DNS service. This means AWS
handles the underlying infrastructure, patching, scaling, and maintenance, greatly reducing operational
overhead for the company compared to managing EC2 instances. https://aws.amazon.com/route53/
High Availability: Route 53 is designed for high availability, automatically distributing DNS records across
multiple authoritative DNS servers. The company benefits from this inherent redundancy without having to
configure and manage it themselves.
Scalability: Route 53 can easily handle the 1 million requests per day. Its architecture scales to handle large
query volumes without manual intervention.
Simple Migration: Importing zone files is a straightforward process, making the migration relatively simple
and less prone to errors. It maintains the existing DNS configurations.
Cost-Effective: While Route 53 has associated costs for queries, these are likely to be lower than the costs
and operational overhead associated with running EC2 instances, especially considering the HA requirements.
No Server Management: Unlike options B, C, and D, **Option A** avoids the need to manage servers, apply
patches, and deal with operating system level issues. The managed service model abstracts these operational
burdens away.
Auto Scaling is Unnecessary: The auto scaling features in **Option D** are not pertinent as Route 53 is a highly
available service.
Options B, C, and D involve managing EC2 instances, which increases operational overhead. Launching an
Amazon EC2 instance and running the DNS server on EC2 will require ongoing server maintenance, security
patching, and scaling efforts. While options C and D try to automate the deployment of servers, they introduce
added layers of complexity to manage.

Therefore, using Route 53 (**Option A**) is the most efficient and cost-effective solution for migrating DNS
servers to AWS, maximizing availability, and minimizing operational overhead.

---

## Question 628

**Answer:** **C**

**Explanation:**

The correct answer is C: Configure S3 Storage Lens to report the incomplete multipart upload object count.

Here's a detailed justification:
S3 Storage Lens provides organization-wide visibility into object storage usage, activity trends, and makes
actionable recommendations to optimize costs and apply data protection best practices. It aggregates data
across all S3 buckets within an AWS organization (or a single account), including metrics related to
incomplete multipart uploads. It offers pre-built dashboards that are accessible through the S3 console,
making setup and reporting straightforward.

**Option A** (AWS Config) is not ideal because while Config can track configuration changes to S3 buckets, it
doesn't directly report on metrics like incomplete multipart uploads in a cost-effective and aggregated
manner across multiple accounts and Regions. Implementing a custom Config rule for this purpose would
involve significant operational overhead and custom logic.

**Option B** (SCP) is inappropriate. SCPs control what IAM principals (users and roles) within the organization can
do. They are not designed to collect or report on S3 metrics. SCPs prevent actions; they don't provide visibility
or reporting capabilities for storage-related costs.

**Option D** (S3 Multi-Region Access Point) is irrelevant to the problem. Multi-Region Access Points provide a
single global endpoint for S3 data stored in multiple Regions, improving application availability. They do not
address the requirement of reporting on incomplete multipart uploads.
S3 Storage Lens directly addresses the reporting requirement with the least operational overhead because
it's designed to provide this type of aggregated storage metrics across accounts and Regions in AWS
Organizations. It offers a dedicated dashboard to analyze and report incomplete multipart uploads for cost
optimization.
Here are some authoritative links for further research:
AWS S3 Storage Lens: https://aws.amazon.com/s3/storage-lens/
Using S3 Storage Lens: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html
Understanding S3 Storage Lens Metrics: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storagelens-metrics-values.html

---

## Question 629

**Answer:** **D**

**Explanation:**

The correct answer is D: Use Amazon RDS Blue/Green Deployments to deploy and test production changes.

Here's a detailed justification:
Amazon RDS Blue/Green Deployments offer the simplest and fastest method for database engine upgrades
while minimizing downtime and data loss risk. They allow creating a fully functional, isolated staging
environment (the "green" environment) that mirrors the production environment ("blue"). This makes it
possible to test the upgraded MySQL version without affecting the production database.
Using Blue/Green Deployments, the company can create a green environment with the upgraded MySQL
version. RDS handles the data replication from the blue to the green environment. The company can then
perform thorough testing in the green environment, ensuring all applications function correctly with the new
version. If testing is successful, a simple switchover promotes the green environment to production, making it

the new blue environment. This process involves a brief outage, considerably less than other migration
methods. Crucially, the entire process is managed by RDS, reducing manual intervention and operational
overhead. If issues arise, the switchover can be reversed, falling back to the original blue environment.

**Option A** is not ideal because taking a manual snapshot and restoring it to a new, upgraded instance involves
manual steps and potential downtime for the restore process. **Option B**, using native backup and restore, also
increases operational overhead. **Option C**, AWS DMS, is more suited for migrating between different database
engines or moving databases to AWS and typically incurs more overhead than a simple version upgrade within
RDS. Blue/Green deployments are specifically designed for these types of upgrade scenarios within RDS.

Therefore, Amazon RDS Blue/Green Deployments is the most efficient approach for upgrading the MySQL
database version with minimal downtime, reduced operational overhead, and a safe testing environment.
Refer to the AWS documentation for more information:
Amazon RDS Blue/Green Deployments: https://aws.amazon.com/rds/blue-green-deployments/
Performing blue/green deployments for Amazon RDS for MySQL:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments. MySQL.html

---

## Question 630

**Answer:** **C**

**Explanation:**

The most cost-effective solution is to use an Amazon ECS Fargate task triggered by an Amazon EventBridge
scheduled event (**Option C**). Here's why:
Fargate's "Pay-as-you-go" Model: Fargate allows you to run containers without managing servers. You pay
only for the compute resources your container uses while it's running, making it efficient for sporadic
workloads.
EventBridge Scheduling: EventBridge can reliably trigger the ECS task at the scheduled time (once daily).
No Idle EC2 Costs: Options A and D involve running EC2 instances, which incur costs even when idle. Since
the job only runs for up to 2 hours daily, maintaining a dedicated EC2 instance is wasteful. Reserved Instances
(**Option A**) could potentially reduce EC2 costs, but require long-term commitment and might not be the most
cost-effective if utilization is low.
Lambda Time Constraints: AWS Lambda (**Option B**) has execution time limits (currently 15 minutes). Since the
data processing job can take up to 2 hours, Lambda is not a suitable option.
Fault Tolerance: ECS Fargate automatically handles underlying infrastructure and availability. It restarts the
container if it fails during execution.

Simplified Management: Fargate abstracts away the complexities of EC2 instance management, making the
solution simpler to deploy and maintain.

In summary, ECS Fargate combined with EventBridge provides a serverless, scalable, and cost-optimized
solution for the scheduled data processing job that can handle interruptions by restarting the task, all while
adhering to the budget-conscious constraint.
Supporting Links:
Amazon ECS Fargate: https://aws.amazon.com/fargate/
Amazon EventBridge: https://aws.amazon.com/eventbridge/
AWS Lambda Limits: https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html

---

## Question 631

**Answer:** **B**

**Explanation:**

The optimal solution leverages Amazon Neptune and Neptune Streams.
Amazon Neptune: Neptune is a purpose-built graph database ideal for storing and querying data with
complex relationships, such as social media user profiles, connections, and interactions. This directly
addresses the company's need to represent relationships between data entities.
(https://aws.amazon.com/neptune/)
Neptune Streams: Neptune Streams provide a managed mechanism for capturing changes (insertions,
updates, deletions) happening within the Neptune graph database. This allows the company to monitor
database changes for analysis and recommendations. This is a feature tightly integrated with Neptune,
minimizing operational overhead compared to external streaming solutions.
(https://docs.aws.amazon.com/neptune/latest/userguide/streams.html)

**Option A** is less optimal because Kinesis Data Streams, while a robust streaming service, requires additional
configuration and integration to extract change data from Neptune, increasing operational overhead
compared to the native Neptune Streams feature.
Options C and D use Amazon QLDB, which is a ledger database designed for maintaining a verifiable and
immutable history of data changes. While QLDB ensures data integrity, it is not optimized for analyzing
complex relationships or providing recommendations based on graph patterns. It excels at auditing, not the
relationship analysis required in the scenario. Further, Neptune Streams can not be used with QLDB, as it is a
Neptune specific service. Thus, QLDB is not suitable for the requirement, and the combination of QLDB and
Kinesis Data Streams introduces unnecessary complexity compared to Neptune and Neptune Streams.

---

## Question 632

**Answer:** **C**

**Explanation:**

The correct answer is C. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount
the file system on the application instances.

Here's why:
Shared Access: The scenario specifies that multiple EC2 instances in different Availability Zones need to
modify the data concurrently. Amazon EFS is designed for shared file storage, allowing multiple instances to
access the same data simultaneously. EBS, in contrast, can only be attached to a single instance at a time
(unless using EBS multi-attach, but this is a more complex solution for few instances).
Scalability: The requirement states that the storage space will grow significantly in the next 6 months. EFS is
designed to scale automatically as data is added, without the need for manual intervention or preprovisioning. This makes it suitable for dynamic storage needs.
Availability Zones: EFS is a regional service, meaning it replicates data across multiple Availability Zones.
This provides high availability and durability, ensuring that the data is accessible even if one Availability Zone
experiences an outage.
Performance: EFS offers different performance modes and throughput options, including Bursting
Throughput and Provisioned Throughput, allowing the company to choose the performance level that best
meets its analysis requirements.

Why the other options are incorrect:

**A.** Amazon S3 Glacier: Glacier is designed for long-term archival storage where infrequent access is
expected. Hourly analysis and modification would make Glacier unsuitable due to its retrieval times and cost
structure.
B & D. Amazon EBS: EBS is a block storage service that is directly attached to a single EC2 instance (with
limited multi-attach use cases). While EBS can be used, sharing a standard or Provisioned IOPS EBS volume
among multiple instances is not natively supported (without complex solutions). EBS is also limited to a single
AZ per Volume, and while snapshots can be replicated across AZs, that is not a solution for a shared
filesystem. Additionally, EBS requires manual resizing to increase the storage capacity.

Therefore, using Amazon EFS offers the most efficient and scalable solution for storing and sharing data
among multiple EC2 instances in different Availability Zones, aligning perfectly with the specified
requirements.

---

## Question 633

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the correct answer:
The problem clearly states that increasing traffic is causing performance problems specifically related to
database queries. The RDS PostgreSQL instance is a Multi-AZ deployment, which is primarily for high
availability and disaster recovery, not for scaling read operations. The standby replica in a Multi-AZ
configuration is not directly accessible for serving read traffic in a standard configuration; it's only activated
in case of a failover. Therefore, option A is incorrect.

**Option B**, configuring the DB instance to use Transfer Acceleration, is irrelevant. Transfer Acceleration is an
Amazon S3 feature for accelerating data transfers into and out of S3 buckets. It doesn't apply to RDS
database performance or query optimization.

**Option D**, using Amazon Kinesis Data Firehose between the application and RDS, is also incorrect. Kinesis Data
Firehose is designed for streaming data into data lakes, data stores, and analytics services. It's not intended
as a solution for optimizing database query performance or increasing concurrency of database requests in a
transactional database.

**Option C**, creating a read replica from the source DB instance and serving read traffic from the read replica, is
the correct solution. Read replicas are designed specifically to offload read traffic from the primary database
instance. By directing read queries to the read replica, the primary instance is freed up to handle write
operations and other critical tasks, significantly improving overall application performance and reducing the
load on the primary database. This approach leverages the concept of read scaling, a common pattern for
improving the performance of read-heavy applications.
Here are some authoritative links for further research:
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview. ReadReplicas.html
Amazon RDS Multi-AZ Deployments:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html
Scaling with RDS: https://aws.amazon.com/rds/scaling/

---

## Question 634

**Answer:** **C**

**Explanation:**

The best solution is C. Configure cross-account access for the S3 bucket to the accounts that the agencies
own.

Here's why:
Security: Cross-account access using IAM roles is the most secure approach. It avoids sharing credentials or
making the bucket public. The agencies' analysts access the data through their own AWS accounts, ensuring
that the company retains control over its data while granting specific permissions. This aligns with the
principle of least privilege.
Operational Efficiency: Managing access via cross-account roles is operationally efficient. The company
doesn't need to manage individual IAM users for each analyst within their account. Changes to analyst access
are handled within the agency's AWS account.
Avoids data duplication: Cross-account access avoids replicating the data as S3 global tables would. This
saves on storage costs and reduces operational overhead.
Limited access duration and Public access are not secure Making the bucket public even for a limited time
(option B) introduces significant security risks. It's vulnerable to unauthorized access and potential data
breaches.
IAM for individual analyst management is complex and not efficient: Creating IAM users for each analyst in
the company's account (option D) is not scalable or efficient, creating complexity and operational overhead.
S3 Global tables (replication) is not required: Replicating 10GB of data daily to separate buckets for each
agency (option A) introduces significant storage and data transfer costs and delays. S3 global tables is meant
for low-latency access across regions, not a distribution mechanism for data analysis.
Cross-account access: grants specific and auditable permissions, while using the agencies' existing
accounts, avoiding unnecessary IAM user management.
Supporting Documentation:
AWS Documentation on Cross-Account Access:
https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html
AWS Documentation on S3 Bucket Permissions:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-iam.html

---

## Question 635

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an FSx for ONTAP instance in the secondary Region. Use NetApp
SnapMirror to replicate data from the primary Region to the secondary Region.

Here's why:
Meeting Requirements: The primary requirement is a DR solution for FSx for ONTAP with the least
operational overhead, accessible via the same CIFS/NFS protocols in the DR region.
SnapMirror's Efficiency: NetApp SnapMirror is a native feature of FSx for ONTAP specifically designed for
block-level, incremental replication between ONTAP systems. This makes it very efficient in replicating only
the changes, thus minimizing bandwidth usage and replication time. It directly addresses the need for DR
across regions.
Protocol Consistency: SnapMirror replicates the data while preserving the underlying file system structure
and protocol support (CIFS/NFS). The DR FSx for ONTAP instance will natively serve the replicated data using
the same protocols as the primary.
Least Operational Overhead: SnapMirror setup is relatively straightforward within the AWS console/API,
requiring configuration of source and destination file systems. Once configured, replication can be automated
with minimal ongoing manual intervention.
Let's analyze why the other options are less suitable:
A (Lambda and S3): This introduces unnecessary complexity and overhead. Data would need to be extracted
from FSx for ONTAP, converted to an object format suitable for S3, and then re-hydrated into a file system
format in the DR region. This process is slow, complex, and doesn't natively support CIFS/NFS directly from
S3.
B (AWS Backup): AWS Backup can be used to create backups of FSx for ONTAP volumes and copy them
across regions. While this provides a point-in-time recovery option, it's not the most efficient DR solution,
especially for minimizing recovery time objective (RTO). Restoring from backup in DR would be slower than
failing over to a replica maintained by SnapMirror. Also, it would require periodic backup schedules which
adds to operational overhead compared to SnapMirror.
D (Amazon EFS): Migrating from FSx for ONTAP to EFS is a significant undertaking that introduces
complexity and potential compatibility issues. Moreover, it's not a direct replacement for the FSx for ONTAP
environment. EFS supports NFS, but not CIFS directly, which means the applications accessing the CIFS
shares will require modification. This also fails to meet the core requirements and dramatically increases the

operational overhead.

---

## Question 636

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an SNS subscription that sends the event to Amazon Simple Queue Service
(Amazon SQS). Configure the SQS queue to trigger a Lambda function.

Here's why:
Scalability and Decoupling: Directly invoking Lambda from S3 via SNS can become problematic at scale. If
S3 generates a high volume of events, SNS might overwhelm Lambda, leading to throttling and potential
event loss. Using SQS as an intermediary decouples S3 event generation from Lambda processing. SQS acts
as a buffer, holding events until Lambda can process them.
Reliability: SQS provides guaranteed delivery of messages. Even if Lambda fails to process an event, the
message remains in the queue and can be retried, enhancing the application's reliability. This is crucial for
event-driven architectures where data loss is unacceptable.
Asynchronous Processing: SQS allows Lambda to process events asynchronously. Lambda doesn't have to
wait for S3 to acknowledge receipt, improving the overall performance of the application.
Fanout Pattern: SNS itself can be used to fan out events to multiple SQS queues, if needed, for different
processing requirements. However, for a single Lambda function as the processor, a single SQS queue
provides sufficient buffering and scalability.
Alternatives are less suitable:
A & B (ECS/EKS): Introducing container orchestration like ECS or EKS adds unnecessary complexity for this
scenario. Lambda is designed for event-driven, serverless execution, making it a more suitable choice.
Moreover, adding a processing layer before Lambda is counterintuitive to the problem's intent. The goal is to
make Lambda event processing scalable.

D (AWS SMS): AWS SMS is for migrating on-premises servers to AWS, completely unrelated to event
processing from S3.

In summary, using SNS to deliver S3 events to an SQS queue and then triggering a Lambda function from the
queue creates a scalable, reliable, and decoupled event processing architecture.
Supporting Links:
AWS SQS: https://aws.amazon.com/sqs/
AWS Lambda: https://aws.amazon.com/lambda/
Amazon SNS: https://aws.amazon.com/sns/
Using AWS Lambda with Amazon SQS: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

---

## Question 637

**Answer:** **BC**

**Explanation:**

Here's a detailed justification for why AWS Lambda and Amazon DynamoDB are the best choices for the
described scenario:
AWS Lambda: Lambda excels at handling unpredictable and sudden spikes in traffic. It's a serverless
compute service, meaning it automatically scales in response to incoming requests without requiring manual
intervention or capacity provisioning. This aligns perfectly with the requirement for handling request patterns
that can change drastically. Lambda functions are triggered by API Gateway, processing requests as they
arrive and scaling up or down as needed. Fargate, while also scalable, requires containerization and more
operational overhead. EC2 Auto Scaling requires provisioning and managing virtual machines, adding
unnecessary complexity for this use case.
Supporting Concept: Serverless computing and event-driven architecture.
Authoritative Link: https://aws.amazon.com/lambda/
Amazon DynamoDB: DynamoDB is a NoSQL database service designed for key-value and document data
models. It's highly scalable and can handle unpredictable growth in data size. DynamoDB scales horizontally
and automatically, without requiring manual intervention. Its ability to handle simple key-value queries
efficiently matches the data access pattern described. The current data size of less than 1 GB is easily
accommodated, and its ability to scale allows it to handle unpredictable future growth. MySQL-compatible
Aurora, while a good relational database option, introduces more overhead than needed for simple key-value
queries. Additionally, the auto-scaling capabilities of DynamoDB are better suited for unpredictable growth
compared to Aurora's scaling mechanisms in this simplified case.

Supporting Concept: NoSQL database, horizontal scaling, key-value data model.
Authoritative Link: https://aws.amazon.com/dynamodb/

Therefore, the combination of AWS Lambda for processing unpredictable request volumes from API Gateway
and Amazon DynamoDB for storing and querying data using a simple key-value approach provides the most
efficient and scalable solution.

---

## Question 638

**Answer:** **A**

**Explanation:**

The most suitable solution is A: Use an AWS Lambda function to create an S3 presigned URL. Instruct
employees to use the URL.

Here's why:
Security: Presigned URLs provide time-limited, temporary access to specific S3 objects. This is much more
secure than long-term credentials. Each URL grants access only for a specific object and a defined duration,
reducing the risk of unauthorized access if the URL is compromised.
Minimal Operational Overhead: A Lambda function can be triggered to generate these URLs on demand. This
automated process reduces the administrative burden of managing individual IAM users and policies. It avoids
the complexity of managing infrastructure.
Scalability: Lambda functions scale automatically based on demand, making the solution suitable for a
fluctuating number of employees and data access requests.
Data Sharing: Presigned URLs allow the company to share data with employees without granting them
permanent access to the S3 bucket.
IAM User Management Avoidance: **Option B**, creating IAM users for each employee, is cumbersome and
introduces significant operational overhead for user management, policy updates, and credential rotation.
S3 File Gateway Limitation: **Option C**, S3 File Gateway, is designed to integrate on-premises applications
with S3 storage. While it provides file-based access, it is more complex to set up and maintain for simple data
sharing with employees compared to presigned URLs. File Gateway requires additional infrastructure on the
on-premise side to mount the drives.
AWS Transfer Family SFTP Overhead: **Option D**, Transfer Family, is best suited for secure file transfers, often
for business-to-business scenarios. Implementing a custom identity provider with Secrets Manager adds
complexity that is unnecessary for this simple internal data sharing use case. Transfer Family also incurs
more operational overhead in managing users and SFTP endpoints.

In summary, using Lambda with S3 presigned URLs offers a balanced solution that prioritizes security,

minimizes operational overhead, and efficiently enables data sharing with the company's employees.
Supporting Links:
S3 Presigned URLs: https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-urls.html
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 639

**Answer:** **A**

**Explanation:**

The issue is that traffic favors one EC2 instance, leading to latency. This suggests an uneven distribution of
requests across the available instances.

**Option A**, disabling session affinity (sticky sessions) on the ALB, is the best solution. Session affinity, when
enabled, directs all requests from a specific user session to the same EC2 instance. This can cause
imbalances if some users are more active than others, leading to overloaded instances while others remain
underutilized. Disabling sticky sessions ensures that the ALB distributes traffic more evenly across all
registered instances based on its configured load-balancing algorithm (e.g., round robin). This promotes
better resource utilization and reduces latency.

**Option B**, replacing the ALB with a Network Load Balancer (NLB), is not appropriate. NLBs are designed for
high-performance, low-latency traffic such as TCP, UDP, and TLS. They do not provide the application-level
features of ALBs, such as content-based routing or host-based routing, and would not directly address the
session affinity issue.

**Option C**, increasing the number of EC2 instances, might alleviate the problem somewhat by increasing the
overall capacity. However, it does not address the root cause of uneven distribution due to sticky sessions and
could be a less cost-effective solution than simply disabling sticky sessions.

**Option D**, adjusting health check frequency, is irrelevant to the observed traffic imbalance. Health checks
determine the availability of instances, but they do not control how traffic is distributed among healthy
instances.

Therefore, disabling sticky sessions (**Option A**) is the most direct and efficient way to address the load
imbalance observed on the EC2 instances behind the ALB, ensuring a more even distribution of traffic and
reduced latency.
Further Reading:
Application Load Balancer Concepts:

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
ALB Target Group Attributes (Sticky Sessions):
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-attributes.html

---

## Question 640

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's a detailed justification:
The Lambda function needs permission to decrypt the files encrypted with KMS. This involves configuring
appropriate IAM policies and KMS key policies. Two actions are crucial:

**B.** Grant the decrypt permission for the Lambda IAM role in the KMS key's policy: The KMS key policy
controls who can use the key. The Lambda function needs the kms:Decrypt permission to decrypt the S3 files.
This permission is granted by modifying the KMS key's policy to explicitly allow the Lambda function's IAM
role to perform the kms:Decrypt action. This grants the Lambda function access to use the KMS key for
decryption.
AWS KMS Key Policies

**E.** Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda
function: The Lambda function executes with an IAM role. To ensure the Lambda function has the necessary
permissions to perform actions on AWS services, like KMS, you create an IAM role that grants these
permissions. In this case, a new IAM role with the kms:Decrypt permission would be created. The kms:decrypt
permission is granted to the IAM role in an IAM policy. Then, attach this execution role to the Lambda function.
IAM Roles for Lambda
Let's examine why other options are incorrect:

**A.** Attach the kms:decrypt permission to the Lambda function’s resource policy: Lambda resource policies
are primarily used to grant other AWS services permission to invoke the Lambda function. They are not the
primary mechanism for granting the Lambda function itself permissions to access other services like KMS.
The Lambda function needs an IAM role, not just a resource policy, to execute with permissions.

**C.** Grant the decrypt permission for the Lambda resource policy in the KMS key's policy: As in A, the
Lambda resource policy focuses on invocation by other services, not the Lambda function's permissions to
access other AWS services. Adding the Lambda resource policy to the KMS key policy won't give the function
the ability to use KMS to decrypt.

**D.** Create a new IAM policy with the kms:decrypt permission and attach the policy to the Lambda function:
While creating an IAM policy with kms:decrypt is correct, attaching the policy to the Lambda function is less
common and often confusing. It's best practice to attach the IAM policy to an IAM role, then assign the role to
the Lambda function. Lambda functions are typically associated with IAM roles as their execution context
rather than attaching policies directly. **Option E** correctly captures this.

In summary, granting the Lambda function's IAM role the kms:Decrypt permission in both the IAM policy and
the KMS key policy ensures that the function is authorized to decrypt the files using the KMS key. This is the
standard method for granting permissions between services in AWS, adhering to the principle of least
privilege.

---

## Question 641

**Answer:** **B**

**Explanation:**

The most scalable and cost-effective solution is to use Cost and Usage Reports (CUR) with S3 and Athena.

Here's why:
Cost and Usage Reports (CUR): CUR provides detailed information about AWS costs and usage. Enabling it in
the management account consolidates data from all member accounts in AWS Organizations, fulfilling the
requirement to analyze costs across the organization.
https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html
Amazon S3: Storing the CUR in S3 offers a highly scalable and cost-effective storage solution. S3 provides
durable and readily available storage for the monthly reports. https://aws.amazon.com/s3/
Amazon Athena: Athena is a serverless query service that enables analyzing data directly in S3 using
standard SQL. It is ideal for ad-hoc querying and monthly analysis of the CUR data without the need to
manage any infrastructure. Athena is pay-per-query, making it cost-effective for a monthly analysis.
https://aws.amazon.com/athena/
Let's analyze the other options:

**Option A** (Kinesis and EMR): Kinesis is designed for real-time data streaming, which isn't necessary for a
monthly cost analysis. EMR (Elastic MapReduce) is suitable for large-scale data processing, but it is an
overkill for monthly CUR analysis and more costly than Athena for this specific use case.

**Option C** (Redshift): Redshift is a data warehouse service, which is ideal for complex data warehousing
scenarios. Using Redshift would be much more costly and complex than required for the monthly analysis of
CUR.

**Option D** (Kinesis and QuickSight): As with option A, Kinesis is not necessary here. QuickSight is a BI tool
suitable for visualizing data, but the raw CUR needs to be queried and prepared for analysis first, which
Athena efficiently handles. QuickSight can complement Athena, but it does not replace Athena's role in
efficiently querying the raw CUR data stored in S3.

Therefore, **Option B** delivers the best balance of scalability, cost-effectiveness, and simplicity for monthly
cost analysis within an AWS Organizations environment. It allows the cloud operations team to easily analyze
the CUR data and generate detailed billing analyses.

---

## Question 642

**Answer:** **A**

**Explanation:**

The correct answer is A. Attach a Network Load Balancer to the Auto Scaling group.

Here's a detailed justification:
UDP Protocol Support: Network Load Balancers (NLBs) are designed to handle UDP traffic efficiently.
Application Load Balancers (ALBs), on the other hand, primarily work with HTTP/HTTPS (Layer 7) protocols
and do not support UDP. Since the gaming application uses UDP packets, an NLB is the appropriate choice.
Auto Scaling Integration: NLBs seamlessly integrate with Auto Scaling groups. As the Auto Scaling group
scales instances in or out, the NLB automatically updates its target group to include the new instances and
remove the terminated ones, ensuring traffic is always routed to healthy instances. This is essential for the
application to scale effectively based on traffic demand.
High Performance and Low Latency: NLBs offer high throughput and low latency, making them well-suited
for performance-sensitive applications like online gaming where responsiveness is critical. They operate at
Layer 4 (Transport Layer), forwarding traffic based on IP addresses and ports.
Route 53 Weighted Policy Inadequacy: While Route 53 can distribute traffic across multiple endpoints, it
operates at the DNS level. It doesn't provide health checks at the instance level or automatically adjust
routing based on the dynamic scaling of instances within an Auto Scaling group. This option does not fulfill
the automatic scaling requirement efficiently. It's also not UDP specific and doesn't replace a load balancer
for instance health management.
NAT Instance Inefficiency: Using a NAT instance for port forwarding is a complex, single point of failure, and
scaling bottleneck. NAT instances are typically used for enabling private instances to access the internet, not
for load balancing or traffic distribution in a highly available manner. Also, manually configuring port
forwarding on a NAT instance is not a scalable solution and would require continuous adjustments as the Auto
Scaling group changes.

In summary, attaching a Network Load Balancer to the Auto Scaling group provides the necessary UDP
support, seamless integration with Auto Scaling, high performance, and automatic target registration, making
it the most appropriate solution for the gaming application's requirements.
Supporting Documentation:
AWS Network Load Balancer
Auto Scaling Groups

---

## Question 643

**Answer:** **A**

**Explanation:**

The most cost-effective solution is to use Amazon S3 and Amazon Athena (**Option A**) for this scenario because
it directly addresses the requirements of scalable storage, on-demand SQL analysis, and cost optimization.

Here's why:
Amazon S3 for Scalable Storage: S3 provides virtually unlimited storage at a low cost. It's designed for
storing large amounts of data like web traffic logs. S3's durability and scalability make it ideal for this
purpose. https://aws.amazon.com/s3/
Amazon Athena for SQL Analysis: Athena is a serverless query service that allows you to analyze data in S3
using standard SQL. You only pay for the queries you run, which is perfect for infrequent, on-demand analysis.
It avoids the costs of maintaining a dedicated database or cluster. https://aws.amazon.com/athena/
Cost-Effectiveness: Since the analysis occurs only once a week for a few months, Athena's pay-per-query
model is significantly cheaper than running a persistent database or cluster. S3's storage costs are also very
low.

Why other options are less suitable:
Amazon RDS (**Option B**): RDS is a managed relational database service. Storing tens of gigabytes of logs daily
in a database and then using a database client would be far more expensive than using S3 for storage. The
RDS instance would need to be sized appropriately to handle the volume of data and SQL queries. This is also
less scalable for handling rapidly growing amounts of logs. The cost of keeping the RDS instance active even
when not in use would not be cost-effective.
Amazon OpenSearch Service (**Option C**): OpenSearch is suitable for log analytics, especially when real-time
or near-real-time insights are needed. However, for infrequent analysis, the ongoing costs of running an
OpenSearch cluster would be higher than using Athena, since you are billed continuously for OpenSearch

even when it's not performing queries.
Amazon EMR (**Option D**): EMR is suitable for large-scale data processing and analytics using frameworks like
Hadoop and Spark. While EMR can support SQL-based analysis, the cost of running an EMR cluster, even ondemand, is generally higher than using Athena for this specific infrequent analysis scenario. The overhead of
starting up and managing an EMR cluster also contributes to higher operational complexity.

---

## Question 644

**Answer:** **AE**

**Explanation:**

The correct answer is AE. Here's a detailed justification:
*A: Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain
example.com and a wildcard certificate for .example.com.
This step is essential because the company wants to encrypt website data in transit, requiring SSL/TLS
certificates. A public certificate issued by ACM is needed for the Application Load Balancer (ALB) to establish
secure HTTPS connections with clients. The apex domain example.com needs a separate certificate because
the wildcard certificate (.example.com) only covers subdomains directly beneath example.com. The wildcard
certificate .example.com will cover country1.example.com, country2.example.com, etc. A private certificate is
not appropriate in this case because external clients need to trust the certificate authority, and private
certificates are not inherently trusted by public browsers.

**E:** Validate domain ownership for the domain by adding the required DNS records to the DNS provider.
ACM requires validation of domain ownership before issuing a certificate. This proves that the requester has
control over the domain they're requesting a certificate for. DNS validation is the recommended method. It
involves adding a CNAME record provided by ACM to the DNS configuration of the domain. This is a more
reliable and automated method than email validation, especially when dealing with wildcard certificates and
multiple subdomains. With email validation, each subdomain will need to be validated separately. DNS
validation only needs to be done once.

Why other options are incorrect:

**B:** Using a private certificate is incorrect because public clients (browsers) won't trust it. Private certificates
are suitable for internal services where you control the client environment.

**C:** Requesting both public and private certificates for the apex domain is unnecessary and doesn't address the
need for a wildcard certificate to cover all subdomains.

**D:** While validating domain ownership is necessary, switching from email validation to DNS validation is not
strictly required. DNS validation is simply the recommended approach due to its automation and reliability.
Email validation is also an acceptable alternative (though less preferred).
Supporting concepts and links:
SSL/TLS Certificates: Required for encrypting data in transit over
HTTPS.https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html
AWS Certificate Manager (ACM): AWS service for provisioning, managing, and deploying SSL/TLS
certificates.https://aws.amazon.com/certificate-manager/
Wildcard Certificates: Cover multiple subdomains with a single
certificate.https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html
DNS Validation: Preferred method for validating domain ownership with
ACM.https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
Application Load Balancer (ALB): Load balancer that supports HTTPS listeners and uses ACM certificates for
SSL/TLS termination.https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancerlisteners.html

---

## Question 645

**Answer:** **B**

**Explanation:**

The correct answer is B: Use an AWS Key Management Service (AWS KMS) external key store backed by an
external key manager.

Here's why:
The core requirement is to use an on-premises key manager (outside AWS) due to regulatory compliance,
while minimizing operational overhead. AWS KMS external key store (XKS) is specifically designed for this
scenario. It allows you to use KMS to encrypt and decrypt data, but the actual cryptographic operations are
performed by your own external key management infrastructure, which satisfies the compliance needs. KMS
only holds metadata about the keys.

**Option B** achieves the required control and compliance with the least amount of custom development and
management effort. It's a native integration provided by AWS KMS. You don't need to build and maintain
custom software to interface with your on-premises key manager.

**Option A** (AWS CloudHSM key store) doesn't address the specific requirement of using an existing onpremises key manager. CloudHSM creates HSMs within AWS, not outside of it. While CloudHSM offers high

security, it necessitates managing HSMs within AWS, adding operational overhead.

**Option C** (default KMS managed key store) is incorrect because the keys are entirely managed by AWS KMS,
which contradicts the requirement to retain keys outside of AWS.

**Option D** (custom key store backed by CloudHSM) requires significantly more configuration and operational
overhead. Building a custom key store involves developing the integration between KMS and CloudHSM, and
subsequently managing the underlying HSMs, which contradicts the goal of minimizing operational overhead.
Furthermore, it does not address the need to use an existing on-premise key manager.

In summary, XKS is the AWS-provided solution that directly addresses the stated requirement of managing
keys outside the AWS cloud while leveraging the KMS service, thereby minimizing operational overhead
compared to managing CloudHSM or developing custom solutions.
Further Reading:
AWS KMS external key store: https://docs.aws.amazon.com/kms/latest/developerguide/keystoreexternal.html

---

## Question 646

**Answer:** **C**

**Explanation:**

The correct answer is C. Use Amazon FSx for Lustre as a shared file system. Link the file system to an
Amazon S3 bucket for postprocessing.

Here's why:
High-Performance Computing (HPC) needs: HPC workloads, involving hundreds of EC2 instances and
parallel processing of large datasets, demand a high-performance, low-latency shared file system.
Amazon FSx for Lustre: This service is specifically designed for HPC and machine learning workloads. It
provides sub-millisecond latency, which meets the 1 ms requirement, and delivers high throughput for parallel
data access. https://aws.amazon.com/fsx/lustre/
Amazon S3 integration: FSx for Lustre can be linked to an S3 bucket. This enables the HPC workload to
efficiently process data stored in S3 and provides a seamless way for engineers to access the processed
dataset in S3 for postprocessing. Data can be exported easily and efficiently to S3 after the HPC job
concludes.
Why not Amazon EFS (A): Amazon EFS provides a scalable, elastic file system, but it is not optimized for the

very low latency requirements (under 1 ms) that are typical of HPC workloads. While EFS is excellent for
general-purpose file sharing, it doesn't offer the performance needed here.
Why not Amazon S3 as a file system (B & D): S3 is an object storage service, not a file system. Mounting S3
directly to EC2 instances via S3 fuse will introduce high latency and poor performance for parallel file system
access. S3 is great for storage but does not provide the required parallel access speed for HPC workloads.
AWS Resource Access Manager (RAM) allows sharing AWS resources, but it doesn't change the fundamental
characteristics of S3, which is still not suitable for this purpose.

In summary, FSx for Lustre provides the necessary low latency and high throughput for the HPC workload,
while the S3 integration facilitates efficient data access and postprocessing.

---

## Question 647

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an Amazon CloudFront distribution that includes multiple origins.

Here's a detailed justification:
CloudFront is a content delivery network (CDN) that excels at minimizing latency for users across the globe.
By setting up multiple origins (representing application endpoints in different AWS Regions) behind a
CloudFront distribution, the company can leverage CloudFront's global network of edge locations. CloudFront
automatically routes user requests to the nearest available origin (the one with the lowest latency), thereby
improving the user experience. This is crucial for VoIP applications where latency is very sensitive.
CloudFront can be configured to use origin failover. In this approach, CloudFront monitors the health of your
origins. If the primary origin becomes unhealthy, CloudFront automatically switches traffic to a secondary
origin located in a different region. This achieves the high availability and automated failover requirements.

**Option A** is incorrect because AWS Global Accelerator is a great option for directing traffic at the regional
level. It minimizes latency by routing user traffic to the optimal AWS endpoint, but requires you to configure
failover within the regional endpoint (e.g. through Elastic Load Balancing). For simple application servers, this
approach is not as well suited to the needs of this application.

**Option B** is incorrect because while Route 53 with geolocation routing can direct users to specific Regions, it
relies on DNS caching at the user's resolver. This caching can lead to users being directed to a failed region if
their DNS record has not expired yet (DNS TTL). Since VoIP apps are sensitive to failures, you cannot rely on
DNS caching.

**Option D** is incorrect because Application Load Balancers (ALBs) are regional resources. Although ALBs
support routing based on path, host headers etc, they do not natively provide global distribution or automated

cross-region failover in the same way as CloudFront or Global Accelerator. They also won't route traffic to
different origins based on latency considerations. You can have multiple ALBs routing to different regions and
create a regional fallback with Lambda, but this does not eliminate the need for a global CDN like CloudFront.

In summary, CloudFront with multiple origins and origin failover directly addresses all the requirements (low
latency, high availability, automated failover, and global distribution).

---

## Question 648

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Amazon FSx for Lustre persistent file systems.

Here's why:
High Throughput and Low Latency: The core requirement is to handle "large amounts of sustained
throughput" with "sub-millisecond latency." FSx for Lustre, particularly its persistent file systems, is designed
for high-performance workloads. It excels in providing the necessary throughput and low latency.
Parallel Access: The problem states that "thousands of compute instances" need to "simultaneously access
and process the entire dataset." FSx for Lustre is a parallel file system, meaning it's built to handle concurrent
access from numerous compute instances without significant performance degradation.
HPC Compatibility: The company already uses an HPC environment. FSx for Lustre is a natural extension of
that, as it's commonly used for HPC workloads like weather forecasting, genomic research, and financial
modeling. Its architecture and optimizations align with the needs of these kinds of environments.
Persistent vs. Scratch: While FSx for Lustre offers both scratch and persistent file systems, persistent is
better for this scenario. Scratch file systems are optimized for short-term storage and rapid creation/deletion,
while persistent file systems provide durable storage and are suitable for workloads requiring long-term data
access and availability. The problem doesn't mention data being short-lived, rather it emphasizes accessibility.
Persistent FSx for Lustre instances can be deployed across multiple availability zones for fault tolerance and
recovery.
EFS Limitations: Amazon EFS, even with provisioned throughput, is generally not designed to handle the

same extreme levels of sustained throughput and low latency as FSx for Lustre. While EFS is a good choice
for many file-sharing workloads, it's not the best option when sub-millisecond latency and extremely high
throughput are critical. It offers lower peak and sustained performance compared to FSx for Lustre. EFS
Bursting throughput is also unideal because it would likely require significant capacity and bursts to handle
"hundreds of gigabytes of data", and doesn't explicitly support the high performance required in the question.

---

## Question 649

**Answer:** **C**

**Explanation:**

The company needs a cost-effective solution for migrating their PostgreSQL database to Amazon RDS for
PostgreSQL while ensuring they can handle up to 15,000 IOPS independently of storage capacity. Let's
analyze why option C is the most appropriate:

**Option A**: gp2: gp2 volume performance is tied to its size. Reaching 15,000 IOPS with gp2 would require
provisioning a large volume, potentially leading to unnecessary storage costs since the requirement is to
optimize IOPS performance independent of storage capacity.

**Option B**: io1: While io1 allows you to provision IOPS independently of storage, it is generally more expensive
per IOPS than gp3, especially for moderate IOPS requirements.

**Option C**: gp3: gp3 volumes provide a baseline performance level (3,000 IOPS) and allow you to provision
additional IOPS separately from storage capacity. This means the company can provision the necessary IOPS
without having to over-provision storage, resulting in cost savings. In many AWS Regions gp3 supports
provisioned IOPS beyond its baseline without increasing the provisioned storage capacity. Also, gp3 provides
higher performance than gp2 for a similar price.

**Option D**: EBS Magnetic: Magnetic volumes offer the lowest cost but have significantly lower IOPS
performance capabilities. They would be completely unsuitable for the stated performance requirement of
15,000 IOPS. Magnetic volumes are unsuitable for databases due to their poor and inconsistent performance.

Therefore, gp3 offers the best balance of cost and performance for the requirement. gp3 enables independent
provisioning of IOPS and storage and has a lower cost compared to io1.
Supporting Documentation:

Amazon EBS Volume Types: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumetypes.html
General Purpose SSD (gp3) volumes https://aws.amazon.com/ebs/general-purpose/

---

## Question 650

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution, along with supporting explanations and
links:
The key requirements are migrating an on-premises Microsoft SQL Server Enterprise edition database to AWS
with minimal operational overhead, supporting both transactional processing for an online application and
analytical reporting, and leveraging managed services where feasible.

**Option A**, migrating to Amazon RDS for Microsoft SQL Server and using read replicas for reporting, is the
optimal choice because RDS is a managed service. This significantly reduces operational overhead as AWS
handles patching, backups, and database management tasks. Using read replicas offloads analytical
reporting from the primary database, preventing performance impact on the online application's transactional
workload. RDS for SQL Server allows you to continue to use familiar SQL Server functionality.

**Option B**, using SQL Server on EC2, increases operational overhead because you are responsible for managing
the operating system, SQL Server installation, patching, and backups. While Always On Availability Groups
provide read replicas, the operational burden is significantly higher compared to using RDS.

**Option C**, migrating to Amazon DynamoDB, would require a significant application rewrite since DynamoDB is
a NoSQL database, which is not compatible with the existing SQL Server database schema and SQL queries.
DynamoDB on-demand backups are not the intended replica function for reporting. This leads to a much
greater effort required to convert the application.

**Option D**, migrating to Amazon Aurora MySQL, also necessitates a database migration and application rewrite.
While Aurora offers high performance and read replicas, the migration process is a substantial undertaking,
which contrasts with the need to minimize overhead and maintain the business functionality.

Therefore, RDS provides the least operational overhead by being a managed service. It allows the company to
continue to use MS SQL Server, which avoids a costly and complex migration. The use of read replicas
maintains application performance.
Supporting Links:
Amazon RDS: https://aws.amazon.com/rds/
Amazon RDS for SQL Server: https://aws.amazon.com/rds/sqlserver/

RDS Read Replicas: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html

---

# Quick Answer Sheet

Question 601: B
Question 602: C
Question 603: B
Question 604: D
Question 605: D
Question 606: B
Question 607: C
Question 608: A
Question 609: B
Question 610: B
Question 611: A
Question 612: D
Question 613: B
Question 614: D
Question 615: D
Question 616: C
Question 617: BE
Question 618: C
Question 619: C
Question 620: C
Question 621: A
Question 622: CD
Question 623: B
Question 624: D
Question 625: C
Question 626: B
Question 627: A
Question 628: C
Question 629: D
Question 630: C
Question 631: B
Question 632: C
Question 633: C
Question 634: C
Question 635: C
Question 636: C
Question 637: BC
Question 638: A
Question 639: A
Question 640: BE
Question 641: B
Question 642: A
Question 643: A
Question 644: AE
Question 645: B
Question 646: C
Question 647: C
Question 648: B
Question 649: C
Question 650: A
