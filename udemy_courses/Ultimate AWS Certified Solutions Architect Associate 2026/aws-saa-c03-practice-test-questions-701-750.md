# AWS SAA-C03 Practice Test: Questions 701-750

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 701

A city has deployed a web application running on Amazon EC2 instances behind an Application Load Balancer
(ALB). The application's users have reported sporadic performance, which appears to be related to DDoS attacks
originating from random IP addresses. The city needs a solution that requires minimal configuration changes and
provides an audit trail for the DDoS sources.
Which solution meets these requirements?

**A.** Enable an AWS WAF web ACL on the ALB, and configure rules to block traffic from unknown sources.

**B.** Subscribe to Amazon Inspector. Engage the AWS DDoS Response Team (DRT) to integrate mitigating
controls into the service.

**C.** Subscribe to AWS Shield Advanced. Engage the AWS DDoS Response Team (DRT) to integrate mitigating
controls into the service.

**D.** Create an Amazon CloudFront distribution for the application, and set the ALB as the origin. Enable an AWS
WAF web ACL on the distribution, and configure rules to block traffic from unknown sources

---

## Question 702

A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized
devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and
gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and highthroughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the
devices back to AWS.
Which solution will meet these requirements?

**A.** Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file
gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances.

**B.** Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file
system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster
instances.

**C.** Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data
into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from
the HPC cluster instances.

**D.** Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system.
Access the FSx for Lustre file system from the HPC cluster instances.

---

## Question 703

A company has NFS servers in an on-premises data center that need to periodically back up small amounts of data
to Amazon S3.
Which solution meets these requirements and is MOST cost-effective?

**A.** Set up AWS Glue to copy the data from the on-premises servers to Amazon S3.

**B.** Set up an AWS DataSync agent on the on-premises servers, and sync the data to Amazon S3.

**C.** Set up an SFTP sync using AWS Transfer for SFTP to sync data from on premises to Amazon S3.

**D.** Set up an AWS Direct Connect connection between the on-premises data center and a VPC, and copy the
data to Amazon S3.

---

## Question 704

An online video game company must maintain ultra-low latency for its game servers. The game servers run on
Amazon EC2 instances. The company needs a solution that can handle millions of UDP internet traffic requests
each second.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an Application Load Balancer with the required protocol and ports for the internet traffic. Specify
the EC2 instances as the targets.

**B.** Configure a Gateway Load Balancer for the internet traffic. Specify the EC2 instances as the targets.

**C.** Configure a Network Load Balancer with the required protocol and ports for the internet traffic. Specify the
EC2 instances as the targets.

**D.** Launch an identical set of game servers on EC2 instances in separate AWS Regions. Route internet traffic to
both sets of EC2 instances.

---

## Question 705

A company runs a three-tier application in a VPC. The database tier uses an Amazon RDS for MySQL DB instance.
The company plans to migrate the RDS for MySQL DB instance to an Amazon Aurora PostgreSQL DB cluster. The
company needs a solution that replicates the data changes that happen during the migration to the new database.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Use AWS Database Migration Service (AWS DMS) Schema Conversion to transform the database objects.

**B.** Use AWS Database Migration Service (AWS DMS) Schema Conversion to create an Aurora PostgreSQL read
replica on the RDS for MySQL DB instance.

**C.** Configure an Aurora MySQL read replica for the RDS for MySQL DB instance.

**D.** Define an AWS Database Migration Service (AWS DMS) task with change data capture (CDC) to migrate the
data.

**E.** Promote the Aurora PostgreSQL read replica to a standalone Aurora PostgreSQL DB cluster when the replica
lag is zero.

---

## Question 706

A company hosts a database that runs on an Amazon RDS instance that is deployed to multiple Availability Zones.
The company periodically runs a script against the database to report new entries that are added to the database.
The script that runs against the database negatively affects the performance of a critical application. The company
needs to improve application performance with minimal costs.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Add functionality to the script to identify the instance that has the fewest active connections. Configure the
script to read from that instance to report the total new entries.

**B.** Create a read replica of the database. Configure the script to query only the read replica to report the total
new entries.

**C.** Instruct the development team to manually export the new entries for the day in the database at the end of
each day.

**D.** Use Amazon ElastiCache to cache the common queries that the script runs against the database.

---

## Question 707

A company is using an Application Load Balancer (ALB) to present its application to the internet. The company
finds abnormal traffic access patterns across the application. A solutions architect needs to improve visibility into
the infrastructure to help the company understand these abnormalities better.
What is the MOST operationally efficient solution that meets these requirements?

**A.** Create a table in Amazon Athena for AWS CloudTrail logs. Create a query for the relevant information.

**B.** Enable ALB access logging to Amazon S3. Create a table in Amazon Athena, and query the logs.

**C.** Enable ALB access logging to Amazon S3. Open each file in a text editor, and search each line for the
relevant information.

**D.** Use Amazon EMR on a dedicated Amazon EC2 instance to directly query the ALB to acquire traffic access log
information.

---

## Question 708

A company wants to use NAT gateways in its AWS environment. The company's Amazon EC2 instances in private
subnets must be able to connect to the public internet through the NAT gateways.
Which solution will meet these requirements?

**A.** Create public NAT gateways in the same private subnets as the EC2 instances.

**B.** Create private NAT gateways in the same private subnets as the EC2 instances.

**C.** Create public NAT gateways in public subnets in the same VPCs as the EC2 instances.

**D.** Create private NAT gateways in public subnets in the same VPCs as the EC2 instances.

---

## Question 709

A company has an organization in AWS Organizations. The company runs Amazon EC2 instances across four AWS
accounts in the root organizational unit (OU). There are three nonproduction accounts and one production account.
The company wants to prohibit users from launching EC2 instances of a certain size in the nonproduction accounts.
The company has created a service control policy (SCP) to deny access to launch instances that use the prohibited
types.
Which solutions to deploy the SCP will meet these requirements? (Choose two.)

**A.** Attach the SCP to the root OU for the organization.

**B.** Attach the SCP to the three nonproduction Organizations member accounts.

**C.** Attach the SCP to the Organizations management account.

**D.** Create an OU for the production account. Attach the SCP to the OU. Move the production member account
into the new OU.

**E.** Create an OU for the required accounts. Attach the SCP to the OU. Move the nonproduction member accounts
into the new OU.

---

## Question 710

A company’s website hosted on Amazon EC2 instances processes classified data stored in Amazon S3. Due to
security concerns, the company requires a private and secure connection between its EC2 resources and Amazon
S3.
Which solution meets these requirements?

**A.** Set up S3 bucket policies to allow access from a VPC endpoint.

**B.** Set up an IAM policy to grant read-write access to the S3 bucket.

**C.** Set up a NAT gateway to access resources outside the private subnet.

**D.** Set up an access key ID and a secret access key to access the S3 bucket.

---

## Question 711

An ecommerce company runs its application on AWS. The application uses an Amazon Aurora PostgreSQL cluster
in Multi-AZ mode for the underlying database. During a recent promotional campaign, the application experienced
heavy read load and write load. Users experienced timeout issues when they attempted to access the application.
A solutions architect needs to make the application architecture more scalable and highly available.
Which solution will meet these requirements with the LEAST downtime?

**A.** Create an Amazon EventBridge rule that has the Aurora cluster as a source. Create an AWS Lambda function
to log the state change events of the Aurora cluster. Add the Lambda function as a target for the EventBridge
rule. Add additional reader nodes to fail over to.

**B.** Modify the Aurora cluster and activate the zero-downtime restart (ZDR) feature. Use Database Activity
Streams on the cluster to track the cluster status.

**C.** Add additional reader instances to the Aurora cluster. Create an Amazon RDS Proxy target group for the

Aurora cluster.

**D.** Create an Amazon ElastiCache for Redis cache. Replicate data from the Aurora cluster to Redis by using AWS
Database Migration Service (AWS DMS) with a write-around approach.

---

## Question 712

A company is designing a web application on AWS. The application will use a VPN connection between the
company’s existing data centers and the company's VPCs.
The company uses Amazon Route 53 as its DNS service. The application must use private DNS records to
communicate with the on-premises services from a VPC.
Which solution will meet these requirements in the MOST secure manner?

**A.** Create a Route 53 Resolver outbound endpoint. Create a resolver rule. Associate the resolver rule with the
VPC.

**B.** Create a Route 53 Resolver inbound endpoint. Create a resolver rule. Associate the resolver rule with the
VPC.

**C.** Create a Route 53 private hosted zone. Associate the private hosted zone with the VPC.

**D.** Create a Route 53 public hosted zone. Create a record for each service to allow service communication

---

## Question 713

A company is running a photo hosting service in the us-east-1 Region. The service enables users across multiple
countries to upload and view photos. Some photos are heavily viewed for months, and others are viewed for less
than a week. The application allows uploads of up to 20 MB for each photo. The service uses the photo metadata to
determine which photos to display to each user.
Which solution provides the appropriate user access MOST cost-effectively?

**A.** Store the photos in Amazon DynamoDB. Turn on DynamoDB Accelerator (DAX) to cache frequently viewed
items.

**B.** Store the photos in the Amazon S3 Intelligent-Tiering storage class. Store the photo metadata and its S3
location in DynamoDB.

**C.** Store the photos in the Amazon S3 Standard storage class. Set up an S3 Lifecycle policy to move photos
older than 30 days to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Use the object tags
to keep track of metadata.

**D.** Store the photos in the Amazon S3 Glacier storage class. Set up an S3 Lifecycle policy to move photos older
than 30 days to the S3 Glacier Deep Archive storage class. Store the photo metadata and its S3 location in
Amazon OpenSearch Service.

---

## Question 714

A company runs a highly available web application on Amazon EC2 instances behind an Application Load Balancer.

The company uses Amazon CloudWatch metrics.
As the traffic to the web application increases, some EC2 instances become overloaded with many outstanding
requests. The CloudWatch metrics show that the number of requests processed and the time to receive the
responses from some EC2 instances are both higher compared to other EC2 instances. The company does not want
new requests to be forwarded to the EC2 instances that are already overloaded.
Which solution will meet these requirements?

**A.** Use the round robin routing algorithm based on the RequestCountPerTarget and ActiveConnectionCount
CloudWatch metrics.

**B.** Use the least outstanding requests algorithm based on the RequestCountPerTarget and
ActiveConnectionCount CloudWatch metrics.

**C.** Use the round robin routing algorithm based on the RequestCount and TargetResponseTime CloudWatch
metrics.

**D.** Use the least outstanding requests algorithm based on the RequestCount and TargetResponseTime
CloudWatch metrics.

---

## Question 715

A company uses Amazon EC2, AWS Fargate, and AWS Lambda to run multiple workloads in the company's AWS
account. The company wants to fully make use of its Compute Savings Plans. The company wants to receive
notification when coverage of the Compute Savings Plans drops.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create a daily budget for the Savings Plans by using AWS Budgets. Configure the budget with a coverage
threshold to send notifications to the appropriate email message recipients.

**B.** Create a Lambda function that runs a coverage report against the Savings Plans. Use Amazon Simple Email
Service (Amazon SES) to email the report to the appropriate email message recipients.

**C.** Create an AWS Budgets report for the Savings Plans budget. Set the frequency to daily.

**D.** Create a Savings Plans alert subscription. Enable all notification options. Enter an email address to receive
notifications.

---

## Question 716

A company runs a real-time data ingestion solution on AWS. The solution consists of the most recent version of
Amazon Managed Streaming for Apache Kafka (Amazon MSK). The solution is deployed in a VPC in private subnets
across three Availability Zones.
A solutions architect needs to redesign the data ingestion solution to be publicly available over the internet. The
data in transit must also be encrypted.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Configure public subnets in the existing VPC. Deploy an MSK cluster in the public subnets. Update the MSK
cluster security settings to enable mutual TLS authentication.

**B.** Create a new VPC that has public subnets. Deploy an MSK cluster in the public subnets. Update the MSK
cluster security settings to enable mutual TLS authentication.

**C.** Deploy an Application Load Balancer (ALB) that uses private subnets. Configure an ALB security group
inbound rule to allow inbound traffic from the VPC CIDR block for HTTPS protocol.

**D.** Deploy a Network Load Balancer (NLB) that uses private subnets. Configure an NLB listener for HTTPS
communication over the internet.

---

## Question 717

A company wants to migrate an on-premises legacy application to AWS. The application ingests customer order
files from an on-premises enterprise resource planning (ERP) system. The application then uploads the files to an
SFTP server. The application uses a scheduled job that checks for order files every hour.
The company already has an AWS account that has connectivity to the on-premises network. The new application
on AWS must support integration with the existing ERP system. The new application must be secure and resilient
and must use the SFTP protocol to process orders from the ERP system immediately.
Which solution will meet these requirements?

**A.** Create an AWS Transfer Family SFTP internet-facing server in two Availability Zones. Use Amazon S3
storage. Create an AWS Lambda function to process order files. Use S3 Event Notifications to send
s3:ObjectCreated:* events to the Lambda function.

**B.** Create an AWS Transfer Family SFTP internet-facing server in one Availability Zone. Use Amazon Elastic File
System (Amazon EFS) storage. Create an AWS Lambda function to process order files. Use a Transfer Family
managed workflow to invoke the Lambda function.

**C.** Create an AWS Transfer Family SFTP internal server in two Availability Zones. Use Amazon Elastic File
System (Amazon EFS) storage. Create an AWS Step Functions state machine to process order files. Use
Amazon EventBridge Scheduler to invoke the state machine to periodically check Amazon EFS for order files.

**D.** Create an AWS Transfer Family SFTP internal server in two Availability Zones. Use Amazon S3 storage.
Create an AWS Lambda function to process order files. Use a Transfer Family managed workflow to invoke the
Lambda function.

---

## Question 718

A company’s applications use Apache Hadoop and Apache Spark to process data on premises. The existing
infrastructure is not scalable and is complex to manage.
A solutions architect must design a scalable solution that reduces operational complexity. The solution must keep
the data processing on premises.
Which solution will meet these requirements?

**A.** Use AWS Site-to-Site VPN to access the on-premises Hadoop Distributed File System (HDFS) data and
application. Use an Amazon EMR cluster to process the data.

**B.** Use AWS DataSync to connect to the on-premises Hadoop Distributed File System (HDFS) cluster. Create an
Amazon EMR cluster to process the data.

**C.** Migrate the Apache Hadoop application and the Apache Spark application to Amazon EMR clusters on AWS
Outposts. Use the EMR clusters to process the data.

**D.** Use an AWS Snowball device to migrate the data to an Amazon S3 bucket. Create an Amazon EMR cluster to
process the data.

---

## Question 719

A company is migrating a large amount of data from on-premises storage to AWS. Windows, Mac, and Linux based
Amazon EC2 instances in the same AWS Region will access the data by using SMB and NFS storage protocols. The
company will access a portion of the data routinely. The company will access the remaining data infrequently.
The company needs to design a solution to host the data.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Amazon Elastic File System (Amazon EFS) volume that uses EFS Intelligent-Tiering. Use AWS
DataSync to migrate the data to the EFS volume.

**B.** Create an Amazon FSx for ONTAP instance. Create an FSx for ONTAP file system with a root volume that
uses the auto tiering policy. Migrate the data to the FSx for ONTAP volume.

**C.** Create an Amazon S3 bucket that uses S3 Intelligent-Tiering. Migrate the data to the S3 bucket by using an
AWS Storage Gateway Amazon S3 File Gateway.

**D.** Create an Amazon FSx for OpenZFS file system. Migrate the data to the new volume.

---

## Question 720

A manufacturing company runs its report generation application on AWS. The application generates each report in
about 20 minutes. The application is built as a monolith that runs on a single Amazon EC2 instance. The application
requires frequent updates to its tightly coupled modules. The application becomes complex to maintain as the
company adds new features.
Each time the company patches a software module, the application experiences downtime. Report generation
must restart from the beginning after any interruptions. The company wants to redesign the application so that the
application can be flexible, scalable, and gradually improved. The company wants to minimize application
downtime.
Which solution will meet these requirements?

**A.** Run the application on AWS Lambda as a single function with maximum provisioned concurrency.

**B.** Run the application on Amazon EC2 Spot Instances as microservices with a Spot Fleet default allocation
strategy.

**C.** Run the application on Amazon Elastic Container Service (Amazon ECS) as microservices with service auto
scaling.

**D.** Run the application on AWS Elastic Beanstalk as a single application environment with an all-at-once
deployment strategy.

---

## Question 721

A company wants to rearchitect a large-scale web application to a serverless microservices architecture. The
application uses Amazon EC2 instances and is written in Python.
The company selected one component of the web application to test as a microservice. The component supports
hundreds of requests each second. The company wants to create and test the microservice on an AWS solution
that supports Python. The solution must also scale automatically and require minimal infrastructure and minimal
operational support.
Which solution will meet these requirements?

**A.** Use a Spot Fleet with auto scaling of EC2 instances that run the most recent Amazon Linux operating system.

**B.** Use an AWS Elastic Beanstalk web server environment that has high availability configured.

**C.** Use Amazon Elastic Kubernetes Service (Amazon EKS). Launch Auto Scaling groups of self-managed EC2
instances.

**D.** Use an AWS Lambda function that runs custom developed code.

---

## Question 722

A company has an AWS Direct Connect connection from its on-premises location to an AWS account. The AWS
account has 30 different VPCs in the same AWS Region. The VPCs use private virtual interfaces (VIFs). Each VPC
has a CIDR block that does not overlap with other networks under the company's control.
The company wants to centrally manage the networking architecture while still allowing each VPC to
communicate with all other VPCs and on-premises networks.
Which solution will meet these requirements with the LEAST amount of operational overhead?

**A.** Create a transit gateway, and associate the Direct Connect connection with a new transit VIF. Turn on the
transit gateway's route propagation feature.

**B.** Create a Direct Connect gateway. Recreate the private VIFs to use the new gateway. Associate each VPC by
creating new virtual private gateways.

**C.** Create a transit VPConnect the Direct Connect connection to the transit VPCreate a peering connection
between all other VPCs in the Region. Update the route tables.

**D.** Create AWS Site-to-Site VPN connections from on premises to each VPC. Ensure that both VPN tunnels are
UP for each connection. Turn on the route propagation feature.

---

## Question 723

A company has applications that run on Amazon EC2 instances. The EC2 instances connect to Amazon RDS
databases by using an IAM role that has associated policies. The company wants to use AWS Systems Manager to
patch the EC2 instances without disrupting the running applications.
Which solution will meet these requirements?

**A.** Create a new IAM role. Attach the AmazonSSMManagedInstanceCore policy to the new IAM role. Attach the
new IAM role to the EC2 instances and the existing IAM role.

**B.** Create an IAM user. Attach the AmazonSSMManagedInstanceCore policy to the IAM user. Configure Systems
Manager to use the IAM user to manage the EC2 instances.

**C.** Enable Default Host Configuration Management in Systems Manager to manage the EC2 instances.

**D.** Remove the existing policies from the existing IAM role. Add the AmazonSSMManagedInstanceCore policy to
the existing IAM role.

---

## Question 724

A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS) and the
Kubernetes Horizontal Pod Autoscaler. The workload is not consistent throughout the day. A solutions architect
notices that the number of nodes does not automatically scale out when the existing nodes have reached
maximum capacity in the cluster, which causes performance issues.

Which solution will resolve this issue with the LEAST administrative overhead?

**A.** Scale out the nodes by tracking the memory usage.

**B.** Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.

**C.** Use an AWS Lambda function to resize the EKS cluster automatically.

**D.** Use an Amazon EC2 Auto Scaling group to distribute the workload.

---

## Question 725

A company maintains about 300 TB in Amazon S3 Standard storage month after month. The S3 objects are each
typically around 50 GB in size and are frequently replaced with multipart uploads by their global application. The
number and size of S3 objects remain constant, but the company's S3 storage costs are increasing each month.
How should a solutions architect reduce costs in this situation?

**A.** Switch from multipart uploads to Amazon S3 Transfer Acceleration.

**B.** Enable an S3 Lifecycle policy that deletes incomplete multipart uploads.

**C.** Configure S3 inventory to prevent objects from being archived too quickly.

**D.** Configure Amazon CloudFront to reduce the number of objects stored in Amazon S3.

---

## Question 726

A company has deployed a multiplayer game for mobile devices. The game requires live location tracking of
players based on latitude and longitude. The data store for the game must support rapid updates and retrieval of
locations.
The game uses an Amazon RDS for PostgreSQL DB instance with read replicas to store the location data. During
peak usage periods, the database is unable to maintain the performance that is needed for reading and writing
updates. The game's user base is increasing rapidly.
What should a solutions architect do to improve the performance of the data tier?

**A.** Take a snapshot of the existing DB instance. Restore the snapshot with Multi-AZ enabled.

**B.** Migrate from Amazon RDS to Amazon OpenSearch Service with OpenSearch Dashboards.

**C.** Deploy Amazon DynamoDB Accelerator (DAX) in front of the existing DB instance. Modify the game to use
DAX.

**D.** Deploy an Amazon ElastiCache for Redis cluster in front of the existing DB instance. Modify the game to use
Redis.

---

## Question 727

A company stores critical data in Amazon DynamoDB tables in the company's AWS account. An IT administrator
accidentally deleted a DynamoDB table. The deletion caused a significant loss of data and disrupted the
company's operations. The company wants to prevent this type of disruption in the future.
Which solution will meet this requirement with the LEAST operational overhead?

**A.** Configure a trail in AWS CloudTrail. Create an Amazon EventBridge rule for delete actions. Create an AWS
Lambda function to automatically restore deleted DynamoDB tables.

**B.** Create a backup and restore plan for the DynamoDB tables. Recover the DynamoDB tables manually.

**C.** Configure deletion protection on the DynamoDB tables.

**D.** Enable point-in-time recovery on the DynamoDB tables.

---

## Question 728

A company has an on-premises data center that is running out of storage capacity. The company wants to migrate
its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate
retrieval of data at no additional cost.
How can these requirements be met?

**A.** Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the
workload.

**B.** Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while
retaining copies of frequently accessed data subsets locally.

**C.** Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to
asynchronously back up point-in-time snapshots of the data to Amazon S3.

**D.** Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway
to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to
Amazon S3.

---

## Question 729

A company runs a three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances
run in an Auto Scaling group for the application tier.
The company needs to make an automated scaling plan that will analyze each resource's daily and weekly
historical workload trends. The configuration must scale resources appropriately according to both the forecast
and live changes in utilization.
Which scaling strategy should a solutions architect recommend to meet these requirements?

**A.** Implement dynamic scaling with step scaling based on average CPU utilization from the EC2 instances.

**B.** Enable predictive scaling to forecast and scale. Configure dynamic scaling with target tracking

**C.** Create an automated scheduled scaling action based on the traffic patterns of the web application.

**D.** Set up a simple scaling policy. Increase the cooldown period based on the EC2 instance startup time.

---

## Question 730

A package delivery company has an application that uses Amazon EC2 instances and an Amazon Aurora MySQL
DB cluster. As the application becomes more popular, EC2 instance usage increases only slightly. DB cluster usage
increases at a much faster rate.
The company adds a read replica, which reduces the DB cluster usage for a short period of time. However, the load
continues to increase. The operations that cause the increase in DB cluster usage are all repeated read statements
that are related to delivery details. The company needs to alleviate the effect of repeated reads on the DB cluster.
Which solution will meet these requirements MOST cost-effectively?

**A.** Implement an Amazon ElastiCache for Redis cluster between the application and the DB cluster.

**B.** Add an additional read replica to the DB cluster.

**C.** Configure Aurora Auto Scaling for the Aurora read replicas.

**D.** Modify the DB cluster to have multiple writer instances.

---

## Question 731

A company has an application that uses an Amazon DynamoDB table for storage. A solutions architect discovers
that many requests to the table are not returning the latest data. The company's users have not reported any other
issues with database performance. Latency is in an acceptable range.
Which design change should the solutions architect recommend?

**A.** Add read replicas to the table.

**B.** Use a global secondary index (GSI).

**C.** Request strongly consistent reads for the table.

**D.** Request eventually consistent reads for the table.

---

## Question 732

A company has deployed its application on Amazon EC2 instances with an Amazon RDS database. The company
used the principle of least privilege to configure the database access credentials. The company's security team
wants to protect the application and the database from SQL injection and other web-based attacks.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use security groups and network ACLs to secure the database and application servers.

**B.** Use AWS WAF to protect the application. Use RDS parameter groups to configure the security settings.

**C.** Use AWS Network Firewall to protect the application and the database.

**D.** Use different database accounts in the application code for different functions. Avoid granting excessive
privileges to the database users.

---

## Question 733

An ecommerce company runs applications in AWS accounts that are part of an organization in AWS Organizations.
The applications run on Amazon Aurora PostgreSQL databases across all the accounts. The company needs to
prevent malicious activity and must identify abnormal failed and incomplete login attempts to the databases.
Which solution will meet these requirements in the MOST operationally efficient way?

**A.** Attach service control policies (SCPs) to the root of the organization to identity the failed login attempts.

**B.** Enable the Amazon RDS Protection feature in Amazon GuardDuty for the member accounts of the
organization.

**C.** Publish the Aurora general logs to a log group in Amazon CloudWatch Logs. Export the log data to a central
Amazon S3 bucket.

**D.** Publish all the Aurora PostgreSQL database events in AWS CloudTrail to a central Amazon S3 bucket.

---

## Question 734

A company has an AWS Direct Connect connection from its corporate data center to its VPC in the us-east-1
Region. The company recently acquired a corporation that has several VPCs and a Direct Connect connection
between its on-premises data center and the eu-west-2 Region. The CIDR blocks for the VPCs of the company and
the corporation do not overlap. The company requires connectivity between two Regions and the data centers. The
company needs a solution that is scalable while reducing operational overhead.
What should a solutions architect do to meet these requirements?

**A.** Set up inter-Region VPC peering between the VPC in us-east-1 and the VPCs in eu-west-2.

**B.** Create private virtual interfaces from the Direct Connect connection in us-east-1 to the VPCs in eu-west-2.

**C.** Establish VPN appliances in a fully meshed VPN network hosted by Amazon EC2. Use AWS VPN CloudHub to
send and receive data between the data centers and each VPC.

**D.** Connect the existing Direct Connect connection to a Direct Connect gateway. Route traffic from the virtual
private gateways of the VPCs in each Region to the Direct Connect gateway.

---

## Question 735

A company is developing a mobile game that streams score updates to a backend processor and then posts results
on a leaderboard. A solutions architect needs to design a solution that can handle large traffic spikes, process the
mobile game updates in order of receipt, and store the processed updates in a highly available database. The
company also wants to minimize the management overhead required to maintain the solution.
What should the solutions architect do to meet these requirements?

**A.** Push score updates to Amazon Kinesis Data Streams. Process the updates in Kinesis Data Streams with AWS
Lambda. Store the processed updates in Amazon DynamoDB.

**B.** Push score updates to Amazon Kinesis Data Streams. Process the updates with a fleet of Amazon EC2
instances set up for Auto Scaling. Store the processed updates in Amazon Redshift.

**C.** Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS
Lambda function to the SNS topic to process the updates. Store the processed updates in a SQL database
running on Amazon EC2.

**D.** Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue. Use a fleet of Amazon EC2
instances with Auto Scaling to process the updates in the SQS queue. Store the processed updates in an
Amazon RDS Multi-AZ DB instance.

---

## Question 736

A company has multiple AWS accounts with applications deployed in the us-west-2 Region. Application logs are
stored within Amazon S3 buckets in each account. The company wants to build a centralized log analysis solution
that uses a single S3 bucket. Logs must not leave us-west-2, and the company wants to incur minimal operational
overhead.
Which solution meets these requirements and is MOST cost-effective?

**A.** Create an S3 Lifecycle policy that copies the objects from one of the application S3 buckets to the
centralized S3 bucket.

**B.** Use S3 Same-Region Replication to replicate logs from the S3 buckets to another S3 bucket in us-west-2.
Use this S3 bucket for log analysis.

**C.** Write a script that uses the PutObject API operation every day to copy the entire contents of the buckets to
another S3 bucket in us-west-2. Use this S3 bucket for log analysis.

**D.** Write AWS Lambda functions in these accounts that are triggered every time logs are delivered to the S3
buckets (s3:ObjectCreated:* event). Copy the logs to another S3 bucket in us-west-2. Use this S3 bucket for log
analysis.

---

## Question 737

A company has an application that delivers on-demand training videos to students around the world. The
application also allows authorized content developers to upload videos. The data is stored in an Amazon S3 bucket
in the us-east-2 Region.
The company has created an S3 bucket in the eu-west-2 Region and an S3 bucket in the ap-southeast-1 Region.
The company wants to replicate the data to the new S3 buckets. The company needs to minimize latency for
developers who upload videos and students who stream videos near eu-west-2 and ap-southeast-1.
Which combination of steps will meet these requirements with the FEWEST changes to the application? (Choose
two.)

**A.** Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure one-way
replication from the us-east-2 S3 bucket to the ap-southeast-1 S3 bucket.

**B.** Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure one-way
replication from the eu-west-2 S3 bucket to the ap-southeast-1 S3 bucket.

**C.** Configure two-way (bidirectional) replication among the S3 buckets that are in all three Regions.

**D.** Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of
the Multi-Region Access Point for video streaming. Do not modify the application for video uploads.

**E.** Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of
the Multi-Region Access Point for video streaming and uploads.

---

## Question 738

A company has a new mobile app. Anywhere in the world, users can see local news on topics they choose. Users
also can post photos and videos from inside the app.
Users access content often in the first minutes after the content is posted. New content quickly replaces older
content, and then the older content disappears. The local nature of the news means that users consume 90% of
the content within the AWS Region where it is uploaded.
Which solution will optimize the user experience by providing the LOWEST latency for content uploads?

**A.** Upload and store content in Amazon S3. Use Amazon CloudFront for the uploads.

**B.** Upload and store content in Amazon S3. Use S3 Transfer Acceleration for the uploads.

**C.** Upload content to Amazon EC2 instances in the Region that is closest to the user. Copy the data to Amazon
S3.

**D.** Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple distributions of
Amazon CloudFront.

---

## Question 739

A company is building a new application that uses serverless architecture. The architecture will consist of an
Amazon API Gateway REST API and AWS Lambda functions to manage incoming requests.

The company wants to add a service that can send messages received from the API Gateway REST API to multiple
target Lambda functions for processing. The service must offer message filtering that gives the target Lambda
functions the ability to receive only the messages the functions need.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Send the requests from the API Gateway REST API to an Amazon Simple Notification Service (Amazon SNS)
topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure the target
Lambda functions to poll the different SQS queues.

**B.** Send the requests from the API Gateway REST API to Amazon EventBridge. Configure EventBridge to invoke
the target Lambda functions.

**C.** Send the requests from the API Gateway REST API to Amazon Managed Streaming for Apache Kafka
(Amazon MSK). Configure Amazon MSK to publish the messages to the target Lambda functions.

**D.** Send the requests from the API Gateway REST API to multiple Amazon Simple Queue Service (Amazon SQS)
queues. Configure the target Lambda functions to poll the different SQS queues.

---

## Question 740

A company migrated millions of archival files to Amazon S3. A solutions architect needs to implement a solution
that will encrypt all the archival data by using a customer-provided key. The solution must encrypt existing
unencrypted objects and future objects.
Which solution will meet these requirements?

**A.** Create a list of unencrypted objects by filtering an Amazon S3 Inventory report. Configure an S3 Batch
Operations job to encrypt the objects from the list with a server-side encryption with a customer-provided key
(SSE-C). Configure the S3 default encryption feature to use a server-side encryption with a customer-provided
key (SSE-C).

**B.** Use S3 Storage Lens metrics to identify unencrypted S3 buckets. Configure the S3 default encryption
feature to use a server-side encryption with AWS KMS keys (SSE-KMS).

**C.** Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure an AWS
Batch job to encrypt the objects from the list with a server-side encryption with AWS KMS keys (SSE-KMS).
Configure the S3 default encryption feature to use a server-side encryption with AWS KMS keys (SSE-KMS).

**D.** Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure the S3
default encryption feature to use a server-side encryption with a customer-provided key (SSE-C).

---

## Question 741

The DNS provider that hosts a company's domain name records is experiencing outages that cause service
disruption for a website running on AWS. The company needs to migrate to a more resilient managed DNS service
and wants the service to run on AWS.
What should a solutions architect do to rapidly migrate the DNS hosting service?

**A.** Create an Amazon Route 53 public hosted zone for the domain name. Import the zone file containing the
domain records hosted by the previous provider.

**B.** Create an Amazon Route 53 private hosted zone for the domain name. Import the zone file containing the
domain records hosted by the previous provider.

**C.** Create a Simple AD directory in AWS. Enable zone transfer between the DNS provider and AWS Directory
Service for Microsoft Active Directory for the domain records.

**D.** Create an Amazon Route 53 Resolver inbound endpoint in the VPC. Specify the IP addresses that the
provider's DNS will forward DNS queries to. Configure the provider's DNS to forward DNS queries for the
domain to the IP addresses that are specified in the inbound endpoint.

---

## Question 742

A company is building an application on AWS that connects to an Amazon RDS database. The company wants to
manage the application configuration and to securely store and retrieve credentials for the database and other
services.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Use AWS AppConfig to store and manage the application configuration. Use AWS Secrets Manager to store
and retrieve the credentials.

**B.** Use AWS Lambda to store and manage the application configuration. Use AWS Systems Manager Parameter
Store to store and retrieve the credentials.

**C.** Use an encrypted application configuration file. Store the file in Amazon S3 for the application configuration.
Create another S3 file to store and retrieve the credentials.

**D.** Use AWS AppConfig to store and manage the application configuration. Use Amazon RDS to store and
retrieve the credentials.

---

## Question 743

To meet security requirements, a company needs to encrypt all of its application data in transit while
communicating with an Amazon RDS MySQL DB instance. A recent security audit revealed that encryption at rest
is enabled using AWS Key Management Service (AWS KMS), but data in transit is not enabled.
What should a solutions architect do to satisfy the security requirements?

**A.** Enable IAM database authentication on the database.

**B.** Provide self-signed certificates. Use the certificates in all connections to the RDS instance.

**C.** Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption enabled.

**D.** Download AWS-provided root certificates. Provide the certificates in all connections to the RDS instance.

---

## Question 744

A company is designing a new web service that will run on Amazon EC2 instances behind an Elastic Load Balancing
(ELB) load balancer. However, many of the web service clients can only reach IP addresses authorized on their
firewalls.
What should a solutions architect recommend to meet the clients’ needs?

**A.** A Network Load Balancer with an associated Elastic IP address.

**B.** An Application Load Balancer with an associated Elastic IP address.

**C.** An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address.

**D.** An EC2 instance with a public IP address running as a proxy in front of the load balancer.

---

## Question 745

A company has established a new AWS account. The account is newly provisioned and no changes have been
made to the default settings. The company is concerned about the security of the AWS account root user.
What should be done to secure the root user?

**A.** Create IAM users for daily administrative tasks. Disable the root user.

**B.** Create IAM users for daily administrative tasks. Enable multi-factor authentication on the root user.

**C.** Generate an access key for the root user. Use the access key for daily administration tasks instead of the
AWS Management Console.

**D.** Provide the root user credentials to the most senior solutions architect. Have the solutions architect use the
root user for daily administration tasks.

---

## Question 746

A company is deploying an application that processes streaming data in near-real time. The company plans to use
Amazon EC2 instances for the workload. The network architecture must be configurable to provide the lowest
possible latency between nodes.
Which combination of network solutions will meet these requirements? (Choose two.)

**A.** Enable and configure enhanced networking on each EC2 instance.

**B.** Group the EC2 instances in separate accounts.

**C.** Run the EC2 instances in a cluster placement group.

**D.** Attach multiple elastic network interfaces to each EC2 instance.

**E.** Use Amazon Elastic Block Store (Amazon EBS) optimized instance types.

---

## Question 747

A financial services company wants to shut down two data centers and migrate more than 100 TB of data to AWS.
The data has an intricate directory structure with millions of small files stored in deep hierarchies of subfolders.
Most of the data is unstructured, and the company’s file storage consists of SMB-based storage types from
multiple vendors. The company does not want to change its applications to access the data after migration.
What should a solutions architect do to meet these requirements with the LEAST operational overhead?

**A.** Use AWS Direct Connect to migrate the data to Amazon S3.

**B.** Use AWS DataSync to migrate the data to Amazon FSx for Lustre.

**C.** Use AWS DataSync to migrate the data to Amazon FSx for Windows File Server.

**D.** Use AWS Direct Connect to migrate the data on-premises file storage to an AWS Storage Gateway volume
gateway.

---

## Question 748

A company uses an organization in AWS Organizations to manage AWS accounts that contain applications. The
company sets up a dedicated monitoring member account in the organization. The company wants to query and
visualize observability data across the accounts by using Amazon CloudWatch.
Which solution will meet these requirements?

**A.** Enable CloudWatch cross-account observability for the monitoring account. Deploy an AWS CloudFormation
template provided by the monitoring account in each AWS account to share the data with the monitoring
account.

**B.** Set up service control policies (SCPs) to provide access to CloudWatch in the monitoring account under the
Organizations root organizational unit (OU).

**C.** Configure a new IAM user in the monitoring account. In each AWS account, configure an IAM policy to have
access to query and visualize the CloudWatch data in the account. Attach the new IAM policy to the new IAM
user.

**D.** Create a new IAM user in the monitoring account. Create cross-account IAM policies in each AWS account.
Attach the IAM policies to the new IAM user.

---

## Question 749

A company’s website is used to sell products to the public. The site runs on Amazon EC2 instances in an Auto
Scaling group behind an Application Load Balancer (ALB). There is also an Amazon CloudFront distribution, and
AWS WAF is being used to protect against SQL injection attacks. The ALB is the origin for the CloudFront
distribution. A recent review of security logs revealed an external malicious IP that needs to be blocked from
accessing the website.
What should a solutions architect do to protect the application?

**A.** Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address.

**B.** Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address.

**C.** Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP
address.

**D.** Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP
address.

---

## Question 750

A company sets up an organization in AWS Organizations that contains 10 AWS accounts. A solutions architect
must design a solution to provide access to the accounts for several thousand employees. The company has an
existing identity provider (IdP). The company wants to use the existing IdP for authentication to AWS.
Which solution will meet these requirements?

**A.** Create IAM users for the employees in the required AWS accounts. Connect IAM users to the existing IdP.
Configure federated authentication for the IAM users.

**B.** Set up AWS account root users with user email addresses and passwords that are synchronized from the
existing IdP.

**C.** Configure AWS IAM Identity Center (AWS Single Sign-On). Connect IAM Identity Center to the existing IdP.
Provision users and groups from the existing IdP.

**D.** Use AWS Resource Access Manager (AWS RAM) to share access to the AWS accounts with the users in the
existing IdP.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 701

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers a comprehensive solution to the described problem, addressing both
mitigation and reporting of DDoS attacks with minimal configuration changes.
Here's a breakdown of why:
AWS Shield Advanced: This service provides enhanced DDoS protection beyond the standard DDoS
protections included with AWS Shield Standard (which is automatically enabled for all AWS customers).
Specifically, it provides deeper inspection of traffic patterns and offers advanced detection and mitigation
techniques tailored to the specific application and attack vectors. It is designed for applications running on
services like EC2, ELB, CloudFront, Global Accelerator, and Route 53. https://aws.amazon.com/shield/
AWS DDoS Response Team (DRT): A crucial advantage of Shield Advanced is direct access to the AWS DDoS
Response Team. This team of experts can assist in understanding attack patterns and integrating custom
mitigation controls tailored to the unique characteristics of the detected DDoS attacks. This hands-on expert
support is vital for effectively responding to complex or rapidly evolving attacks.
Audit Trail and Reporting: Shield Advanced offers detailed reports and dashboards that provide visibility into
DDoS events, including the source IP addresses and attack vectors used. This is a key requirement for the city,
as they need an audit trail to understand the origins of the attacks.
Let's examine why the other options are less suitable:

**Option A** (AWS WAF on ALB): While AWS WAF can block traffic based on rules, it requires significant
configuration and maintenance to identify and block unknown sources effectively, especially with rapidly
changing IP addresses in a DDoS attack. It doesn't provide the deep inspection and automated mitigation
capabilities of Shield Advanced. Furthermore, manually creating and maintaining rules under a DDoS attack's
pressure can be cumbersome.

**Option B** (Amazon Inspector and AWS DRT): Amazon Inspector is a vulnerability management service, not a
DDoS protection service. While DRT can provide mitigation support, subscribing to Inspector is unrelated to
DDoS mitigation and won't solve the city's problem efficiently. Inspector focuses on security assessments and
vulnerability detection within EC2 instances and container images, whereas the city needs immediate
protection against external network attacks.

**Option D** (CloudFront with WAF): While using CloudFront as a CDN with WAF is a good security practice, it
doesn't offer the same level of DDoS protection as Shield Advanced, especially against sophisticated attacks.
Additionally, introducing CloudFront involves architectural changes to the application, which goes against the
requirement of minimal configuration changes. Furthermore, CloudFront primarily protects the origin (ALB in
this case) by caching content and absorbing some of the traffic, but a determined DDoS attack can still
overload the ALB.

Therefore, AWS Shield Advanced and engagement of the DRT offer the most effective solution for mitigating
DDoS attacks, providing a comprehensive audit trail, and requiring minimal architectural changes to the
existing application. This makes it the best answer.

---

## Question 702

**Answer:** **D**

**Explanation:**

The requirement is to provide the HPC cluster with sub-millisecond latency and high-throughput access to
200 TB of data after importing it from Snowball Edge devices. **Option D**, creating an Amazon FSx for Lustre
file system and directly importing the data into it, best meets these stringent requirements.
FSx for Lustre is specifically designed for high-performance workloads, including HPC. Its architecture
provides the necessary low latency and high throughput. The data is directly imported into the Lustre file
system, eliminating the need for intermediate storage or gateways, and reducing potential bottlenecks.
Options A, B, and C involve S3, which, while scalable and durable, isn't optimized for the sub-millisecond
latency demanded by the HPC cluster. AWS Storage Gateway File Gateway (option A) introduces latency.
While FSx for Lustre can be integrated with S3 (option B), directly importing the data circumvents S3
altogether, leading to lower latency and complexity. EFS (option C) is suitable for shared file storage but
typically doesn't match the performance of FSx for Lustre for demanding HPC workloads. Furthermore,
copying data from S3 to EFS adds unnecessary time and complexity. Importing directly to FSx for Lustre is
the streamlined and performant choice, making it the most suitable solution.
https://aws.amazon.com/fsx/lustre/https://aws.amazon.com/hpc/

---

## Question 703

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B (AWS DataSync) is the most cost-effective solution for backing
up small amounts of data from on-premises NFS servers to Amazon S3, along with explanations of why the
other options are less suitable:
Why AWS DataSync is the Best Choice:
AWS DataSync is specifically designed for efficient and automated data transfer between on-premises
storage and AWS services like S3. It leverages a purpose-built agent installed on-premises to handle data
transfer optimization, including compression, encryption, and incremental transfers. For small amounts of
data, the ease of setup and the efficiency of DataSync's transfer mechanisms offer a distinct cost advantage.
DataSync minimizes the amount of data transferred by only transferring changed blocks, which significantly
reduces network bandwidth usage and S3 storage costs. The agent's management of the connection helps
ensure reliable and secure data transfer without needing constant intervention. DataSync provides detailed
monitoring and reporting, giving visibility into the transfer process. The pay-as-you-go pricing model of
DataSync, which charges only for the data transferred, is ideal for periodic backups of small datasets,
avoiding the fixed costs associated with other solutions.
Why Other Options are Less Suitable:

**A.** AWS Glue: AWS Glue is a fully managed extract, transform, and load (ETL) service. While it could be used
to move data, it's fundamentally designed for data processing and transformation at scale, not simple file
replication. The overhead of setting up Glue jobs and the associated compute resources make it overkill and
more expensive for this use case. Furthermore, Glue is geared towards structured and semi-structured data,
not necessarily unstructured files on an NFS share.

**C.** AWS Transfer for SFTP: AWS Transfer for SFTP (formerly AWS SFTP) is a managed SFTP service. While it
facilitates secure file transfer, it requires setting up and managing SFTP clients and users on the on-premises
side. This adds complexity and overhead compared to DataSync's agent-based approach. Additionally,
Transfer for SFTP typically involves transferring entire files, potentially leading to higher bandwidth
consumption compared to DataSync's incremental transfer capability.

**D.** AWS Direct Connect: AWS Direct Connect establishes a dedicated network connection between the onpremises data center and AWS. While providing high bandwidth and potentially lower latency, it is
significantly more expensive than other options, especially for small data transfers. Direct Connect involves
upfront costs (port fees, router configuration) and monthly recurring charges, making it unsuitable for
infrequent backups of small datasets. This option is an overkill solution as this connection is not needed for a
small amount of data.

---

## Question 704

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C, using a Network Load Balancer (NLB), is the most costeffective solution for the online video game company's requirements:
The primary requirements are ultra-low latency and the ability to handle millions of UDP traffic requests per
second for game servers running on EC2 instances.
Network Load Balancer (NLB): NLBs are designed for high performance and low latency, operating at the
transport layer (Layer 4) of the OSI model. This makes them well-suited for UDP traffic. They can handle
millions of requests per second and are optimized for TCP, UDP, and TLS traffic. NLBs provide static IP
addresses per Availability Zone, which can be beneficial for game clients needing consistent endpoints.
Crucially, NLBs offer the lowest latency compared to other load balancer types.
Application Load Balancer (ALB): ALBs operate at the application layer (Layer 7), offering features like
content-based routing. However, these features add overhead, increasing latency compared to NLBs. While
ALBs support UDP, they are not optimized for this protocol as much as NLBs are.
Gateway Load Balancer (GWLB): GWLBs are designed for integrating third-party network virtual appliances
like firewalls and intrusion detection systems. They are not the best choice for directly load balancing game
server traffic as their main purpose lies in routing traffic through security appliances. They also introduce
more latency than NLBs.
Multi-Region Deployment: Launching identical game servers in multiple AWS Regions would increase cost
significantly due to the duplication of infrastructure, data replication costs, and the complexity of managing
deployments and data consistency across regions. While it improves availability, it is not cost-effective for the
stated requirements, especially when a load balancer can handle the traffic within a single region.
The justification emphasizes the NLB's low latency and ability to handle UDP traffic efficiently, fitting the
requirements for online games. Furthermore, compared to launching a separate set of EC2 instances in
different AWS Regions, the NLB provides a cost-effective solution for load balancing the incoming UDP
requests to the game servers. By comparison, the Gateway Load Balancer is for routing network traffic and
the Application Load Balancer operates at a higher layer, resulting in higher latency, making them less ideal
for the gaming use case.

---

## Question 705

**Answer:** **AD**

**Explanation:**

The correct answer is A and D because these choices offer the most effective approach for migrating data
from RDS for MySQL to Aurora PostgreSQL with minimal downtime and data loss.

**Option A** is correct because AWS DMS Schema Conversion is specifically designed to translate database
schemas from one engine to another. MySQL and PostgreSQL have different syntaxes and data types, so
converting the schema is a crucial first step before migrating the data. This ensures that the Aurora
PostgreSQL database is ready to receive the data in the correct format.

**Option D** is correct because AWS DMS with Change Data Capture (CDC) is the recommended way to
continuously replicate data changes from the source database to the target database. CDC captures all the
updates, inserts, and deletes happening on the RDS for MySQL database and applies them to the Aurora
PostgreSQL DB cluster. This ensures that the Aurora PostgreSQL database stays synchronized with the RDS
for MySQL database during the migration process, minimizing downtime when switching over.

**Option B** is incorrect because AWS DMS Schema Conversion doesn't create read replicas. It focuses on
schema transformation only.

**Option C** is incorrect because Aurora MySQL read replicas cannot be created for RDS for MySQL databases.
Read replicas must be of the same database engine.

**Option E** is incorrect because Aurora PostgreSQL read replicas cannot be created directly from RDS for
MySQL DB instance.

In summary, the combination of AWS DMS Schema Conversion and AWS DMS with CDC provides a robust
solution for migrating data from RDS for MySQL to Aurora PostgreSQL with minimal downtime and data loss.
DMS Schema Conversion handles the necessary schema translations, while DMS with CDC ensures
continuous data replication, keeping the target database in sync with the source database.

---

## Question 706

**Answer:** **B**

**Explanation:**

The correct answer is B: Create a read replica of the database. Configure the script to query only the read
replica to report the total new entries.
Here's why this is the best solution:
Offloading Read Workload: Read replicas are designed specifically to offload read-heavy workloads from the
primary database instance. This is exactly the problem the company is facing with its reporting script
impacting application performance.
Minimal Operational Overhead: Creating a read replica is a straightforward process in RDS. Once created, the
script can be reconfigured to point to the read replica. RDS handles replication automatically, minimizing
operational overhead. There are no extra steps needed to create this solution like in option C.
Cost-Effective: Read replicas generally have lower costs than scaling the primary instance itself or
implementing more complex solutions. This aligns with the requirement of minimizing costs.
No Application Code Changes (Mostly): The primary application should not need any modification, as it
continues to read/write to the primary instance. Only the reporting script needs to be reconfigured to target
the read replica.
Improved Application Performance: By directing the reporting script's queries to the read replica, the primary
database instance is freed from the performance impact, allowing the critical application to perform
optimally.
Replication Latency Consideration: While generally low, replication latency should be considered. Depending
on the acceptable delay for reporting data, this might influence the choice of read replica (e.g., same
Availability Zone for minimal latency).
Here's why the other options are not as suitable:

**A:** Adding connection-checking logic to the script is unnecessarily complex and doesn't fundamentally solve
the problem of the script impacting the primary database. It only attempts to mitigate the impact.

**C:** Manual exporting is a tedious and error-prone process. It does not scale well and has high operational
overhead. Also, it's not automated, contradicting the need for efficiency.

**D:** ElastiCache is suitable for caching frequently accessed data to improve read performance, but it doesn't
directly address the problem of offloading the reporting workload. Furthermore, setting up and managing
caching invalidation can introduce unnecessary complexity for this particular scenario.

---

## Question 707

**Answer:** **B**

**Explanation:**

The most operationally efficient solution to analyze abnormal traffic patterns accessing an application via an
Application Load Balancer (ALB) is to enable ALB access logging to Amazon S3 and then query the logs using
Amazon Athena. This approach combines the benefits of comprehensive logging and cost-effective,
serverless querying.

**Option B** is the best because ALB access logs provide detailed information about requests received by the
ALB, including the source IP address, request path, latency, and response codes. Storing these logs in
Amazon S3 provides a durable and scalable storage solution. Amazon Athena allows you to analyze the S3based log data using standard SQL queries without the need for infrastructure management. This combination
enables efficient analysis of traffic patterns and identification of anomalies.

**Option A** is less ideal because AWS CloudTrail logs are primarily for auditing API calls made to AWS services,
not for capturing detailed request-level data for the application itself. While CloudTrail provides valuable
insights, it does not provide the granularity needed to analyze abnormal traffic patterns.

**Option C** is inefficient because manually opening and searching through individual log files in a text editor is
time-consuming, error-prone, and not scalable for large volumes of log data. This method doesn't leverage the
advantages of automated analysis.

**Option D** is unnecessarily complex and expensive. Amazon EMR is designed for large-scale data processing
and analysis, but using it on a dedicated EC2 instance solely to query the ALB directly is overkill for this use
case. The overhead of managing and configuring EMR is significant compared to the simplicity of Athena.
Additionally, querying the ALB directly is not a standard practice for retrieving access logs.
In conclusion, **Option B** offers a balance of comprehensive logging, scalable storage, and cost-effective
analysis. This allows for better visibility into the infrastructure, thus empowering the company to efficiently
understand traffic abnormalities.

---

## Question 708

**Answer:** **C**

**Explanation:**

The correct solution is to create public NAT gateways in public subnets within the same VPC as the EC2
instances residing in private subnets. NAT gateways enable instances in private subnets to initiate outbound
connections to the internet without allowing inbound connections from the internet.

**Option C** is correct because public NAT gateways require placement in public subnets. These subnets have a
route to an internet gateway, allowing the NAT gateway to communicate with the internet. EC2 instances in
private subnets then route their internet-bound traffic to the NAT gateway, which performs network address
translation, replacing the private IP address of the instance with its own public IP address. The internet sees
the traffic originating from the NAT gateway's public IP. The NAT gateway remembers the source and
destination and forwards return traffic to the appropriate EC2 instance.

**Option A** is incorrect because NAT gateways should not be created in the same private subnets as the EC2
instances. While this technically could work in a custom setup, it does not utilize the intended functionality of
a NAT gateway and introduces complexities. More importantly, NAT Gateways in private subnets are not
designed to directly facilitate internet access.

**Option B** is incorrect because "private NAT gateways" are not a recognized AWS service or feature. NAT
gateways are designed for outbound internet access, a function that inherently requires a route to the
internet.

**Option D** is incorrect. While placing something within a public subnet is the first step, creating a "private NAT
gateway" implies that it is internal to the VPC only. A NAT Gateway must be "public" to give instances a route
to the internet.

In summary, creating a public NAT gateway in a public subnet provides a secure and managed way for
instances in private subnets to connect to the internet.
Relevant resources:
AWS NAT Gateway Documentation: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html

---

## Question 709

**Answer:** **BE**

**Explanation:**

The correct answer is B and E. Let's break down why:
Why B is correct: Attaching the SCP directly to the three non-production member accounts is a
straightforward way to achieve the requirement. It directly targets the accounts where you want to restrict
EC2 instance types. SCPs, when applied to an account, limit what identities (users, roles) within that account
can do. This is a precise application of the policy, ensuring that only the desired non-production accounts are
affected.
Why E is correct: Creating a dedicated OU for the non-production accounts and then attaching the SCP to
that OU provides a more organized and scalable solution, especially if the number of non-production accounts
is expected to grow. When an SCP is attached to an OU, it applies to all accounts contained within that OU.
This approach simplifies management because you only need to maintain the policy at the OU level, rather
than individually on each account.
Why A is incorrect: Attaching the SCP to the root OU would restrict instance types in all accounts within the
organization, including the production account, which violates the requirement. SCPs applied at the root level
act as the outermost limit.
Why C is incorrect: Attaching the SCP to the Organizations management account has no effect on the
member accounts' permissions. The management account manages the organization but doesn't inherently
restrict activities within its member accounts through SCPs.
Why D is incorrect: Creating an OU for the production account and attaching the SCP to that OU would
essentially have no effect as the policy limits instance types, and it's being applied only to the production
account which they want to exclude from the restriction.

Therefore, options B and E directly address the stated requirements by applying the restriction to the specific
non-production environments, either individually or as a grouped OU.
Here are some authoritative links for further research:
AWS Organizations documentation on Service Control Policies (SCPs)
AWS Organizations concepts

---

## Question 710

**Answer:** **A**

**Explanation:**

The correct solution is to set up S3 bucket policies to allow access from a VPC endpoint. Here's why:
The core requirement is a private and secure connection between EC2 instances and S3, without traversing
the public internet. VPC endpoints for S3 address this directly by creating a secure, private connection within
the AWS network.

**Option A** leverages VPC endpoints, specifically Gateway Endpoints for S3. These endpoints allow EC2
instances in a VPC to access S3 without requiring internet access or NAT gateways. Traffic destined for S3
from the EC2 instances remains within the AWS network, enhancing security and reducing data transfer
costs. The S3 bucket policy is then configured to only allow access from the specified VPC endpoint, further
restricting access and enforcing the private connection requirement. This creates a secure channel, as traffic
never leaves the AWS network and is isolated from external access.

**Option B**, setting up an IAM policy, while necessary for granting permissions, does not guarantee a private
connection. IAM policies control what actions an EC2 instance can perform on S3, but the traffic might still
traverse the internet if there isn't a mechanism to keep it within AWS.

**Option C**, setting up a NAT gateway, is the opposite of what is required. A NAT gateway allows instances in a
private subnet to initiate outbound traffic to the internet, which violates the security requirement of a private
connection to S3. It is used when the connection is internet-based.

**Option D**, setting up an access key ID and a secret access key, also doesn't address the private connection
requirement. These keys are used for authentication, but the traffic to S3 can still go over the internet.
Moreover, hardcoding access keys in EC2 instances is a security risk. Using IAM roles is a best practice.

In summary, VPC endpoints in conjunction with restrictive S3 bucket policies provide the private and secure
connection required, fulfilling the security concerns outlined in the problem. The traffic from EC2 to S3 will
not go through the internet, and the bucket policy will restrict access to the specific VPC endpoint.
For further research, refer to these AWS documentation links:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
S3 Bucket Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html

---

## Question 711

**Answer:** **C**

**Explanation:**

The best solution to improve scalability and availability of the Aurora PostgreSQL cluster with the least
downtime is option C: adding read replicas and implementing RDS Proxy.
Adding Aurora read replicas (reader instances) allows offloading read traffic from the primary Aurora
instance. This immediately alleviates the read load on the primary, improving application performance and
reducing timeouts. Aurora automatically replicates data to these read replicas, ensuring data consistency.
[https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora. ReadReplicas.html]
RDS Proxy acts as a connection pooler in front of the database. By pooling database connections, it reduces
the overhead of establishing new connections for each request. This improves application response times and
protects the database from being overwhelmed by a large number of concurrent connections, especially
during peak periods. It enhances availability by allowing the application to continue operating even if the
primary database instance experiences temporary issues. [https://aws.amazon.com/rds/proxy/]

**Option A** is incorrect because EventBridge and Lambda are not directly involved in scaling or improving the
availability of the database itself. They are used for monitoring cluster state changes, not for addressing
performance issues. Adding read nodes to fail over to does not solve the load issue as read queries still go to
the primary node.

**Option B** is incorrect because Zero-Downtime Restart (ZDR) primarily addresses planned maintenance events
and does not help with scaling for heavy read/write loads. Database Activity Streams is for auditing purposes,
not performance optimization.

**Option D** involves setting up ElastiCache with DMS. This requires significant time to set up and synchronize
data. Implementing a write-around cache can also introduce complexities with data consistency and is
generally more suitable for scenarios with very high read-to-write ratios. It's also more complex and involves
more downtime compared to simply adding read replicas. It would be better if the company had the cache
implemented and tested before the promotional campaign. Therefore, this option takes time and has a
downtime risk.

---

## Question 712

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a Route 53 Resolver outbound endpoint. Create a resolver rule. Associate
the resolver rule with the VPC.

Here's a detailed justification:
The scenario requires resolving private DNS records of on-premises services from within an AWS VPC. This
means that DNS queries originating from the VPC need to be forwarded to the on-premises DNS servers for
resolution.
Route 53 Resolver Outbound Endpoint: An outbound endpoint allows DNS queries from the VPC to be
forwarded to on-premises DNS servers. This is essential for resolving private DNS records hosted onpremises. It acts as a forwarder.
Resolver Rule: A resolver rule specifies the conditions under which DNS queries should be forwarded to the
on-premises DNS servers via the outbound endpoint. For instance, a rule can specify that any query for a
domain like "internal.example.com" should be forwarded to the on-premises DNS servers' IP addresses.
Associating the Rule with the VPC: This ensures that the resolver rule applies to all DNS queries originating
from the specified VPC.
This approach is the most secure because it allows fine-grained control over which DNS queries are
forwarded to the on-premises environment. You only forward queries that match your specific internal
domain, minimizing the exposure of your VPC's DNS traffic.

**Option B** is incorrect because an inbound endpoint is used to resolve DNS records hosted in Route 53 from onpremises networks.

**Option C** is incorrect because a private hosted zone is used to host private DNS records within AWS, not for
resolving on-premises records from AWS. While useful for internal AWS services, it does not facilitate
communication with on-premises resources in this scenario.

**Option D** is incorrect because a public hosted zone is for publically accessible DNS records and is not
applicable for resolving private on-premises records.
Supporting Links:
AWS Documentation on Route 53 Resolver:
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html
AWS Documentation on Resolver Endpoints:
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-endpoints.html
AWS Knowledge Center: How do I configure Route 53 to resolve domain names in my private network from
my Amazon VPC?: https://aws.amazon.com/premiumsupport/knowledge-center/route-53-resolve-privatedomains/

---

## Question 713

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most cost-effective solution for the described photo
hosting service:
The core requirement is cost-effective storage and retrieval of photos with varying access patterns. **Option B**
proposes storing photos in Amazon S3 Intelligent-Tiering. This is ideal because Intelligent-Tiering
automatically moves data between frequent and infrequent access tiers based on usage patterns, optimizing
cost without operational overhead. Heavily viewed photos remain in the more expensive, readily accessible
tier, while rarely viewed photos are automatically moved to a cheaper tier. This automated tiering directly
addresses the variable access pattern described in the question.
Furthermore, storing photo metadata and S3 location in DynamoDB is a sound strategy. DynamoDB provides
fast, low-latency access to this metadata, which is essential for determining which photos to display to users.
Unlike storing the entire photo in DynamoDB (option A), this approach avoids the high cost and performance
limitations of storing large binary objects in a NoSQL database.

**Option A** is inefficient because storing photos directly in DynamoDB is generally not recommended due to the
cost associated with storing large binary objects in DynamoDB. DAX can help with caching but doesn't
address the fundamental inefficiency.

**Option C** is less optimal because it manually transitions photos to S3 Standard-IA after a fixed period (30
days). This might not be the most cost-effective strategy as it doesn't react dynamically to actual access
patterns. Some photos viewed heavily for longer than 30 days will be prematurely moved to S3 Standard-IA,
incurring retrieval costs if still accessed. Object tags are also less efficient than a dedicated database like
DynamoDB for complex querying and filtering of metadata.

**Option D** utilizes Amazon S3 Glacier, which is primarily for archiving data that is infrequently accessed.
Retrieval from Glacier is slow and costly, making it unsuitable for a photo hosting service where users need
relatively quick access to photos, even if they aren't accessed frequently. OpenSearch Service is overkill for
simply storing metadata and object locations and adds unnecessary complexity and cost.

In summary, using S3 Intelligent-Tiering for the photos and DynamoDB for the metadata offers the best
balance of cost-effectiveness, performance, and manageability for the given scenario.
Supporting Links:
Amazon S3 Intelligent-Tiering: https://aws.amazon.com/s3/storage-classes/intelligent-tiering/
Amazon DynamoDB: https://aws.amazon.com/dynamodb/
S3 Lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-managementoverview.html

---

## Question 714

**Answer:** **B**

**Explanation:**

The problem describes a scenario where some EC2 instances behind an Application Load Balancer (ALB) are
overloaded, leading to higher processing times and request counts. The goal is to prevent new requests from
being routed to these overloaded instances. The correct solution utilizes the "least outstanding requests"
algorithm, which is not natively supported by ALB. However, the best option is B. Use the least outstanding
requests algorithm based on the RequestCountPerTarget and ActiveConnectionCount CloudWatch
metrics.

Here's why:
Understanding the Need: Overloaded instances have a higher number of requests in flight. The ALB should
ideally route new requests to instances that are less burdened, improving overall application performance and
response times.
Least Outstanding Requests: The core principle is to direct traffic to instances with fewer pending requests.
While the ALB doesn't directly offer a "least outstanding requests" routing algorithm, these values can be
calculated for a custom solution.
RequestCountPerTarget and ActiveConnectionCount Metrics: These metrics provide insights into the
current load on each instance:
RequestCountPerTarget: Represents the number of requests that were sent to each target.
ActiveConnectionCount: Represents the number of established connections from clients to the target.

Why other options are incorrect:
Round Robin: Round robin distributes requests evenly across all instances, regardless of their current load.
This is unsuitable for handling overloaded instances because it will continue to send requests to them,
exacerbating the problem.
TargetResponseTime: The TargetResponseTime metric is primarily focused on measuring the time it takes for
the ALB to receive a response from the target. While helpful for monitoring, it's not directly used by the ALB
for its native routing algorithms. It can be used for creating custom algorithms.
Implementation with CloudWatch metrics: You cannot directly configure ALB to use a least outstanding
request algorithm based on CloudWatch metrics. The described solution would necessitate implementing a
custom solution which leverages CloudWatch metrics to monitor instances and dynamically modify the target
group weights associated with your instances. AWS services like Lambda could automate this.

---

## Question 715

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution, focusing on operational efficiency and
AWS best practices:

**Option A** leverages AWS Budgets' built-in capabilities for monitoring Savings Plans coverage. AWS Budgets
allows defining a budget for Savings Plans and setting coverage thresholds. When the actual coverage falls
below the defined threshold, AWS Budgets automatically sends notifications to specified email addresses.
This approach provides a proactive and automated way to track coverage without requiring custom coding or
infrastructure management. The daily budget frequency ensures timely alerts, allowing the company to
address any coverage drops quickly.

**Option B** involves creating a Lambda function and using Amazon SES, requiring custom code development,
deployment, and maintenance. While it provides flexibility, it increases operational overhead compared to
using the readily available AWS Budgets feature.

**Option C** creates a budget report but lacks the critical component of notification. A report alone won't actively
alert the company when coverage drops below the desired level, necessitating manual monitoring.

**Option D**, while seemingly simple, oversimplifies the requirement. Savings Plans alert subscriptions are often
geared towards payment failures or other account-related issues, not specifically coverage thresholds
against your compute usage. While it might provide some alerts, it won't directly and efficiently address the
specific need to monitor coverage percentage against their actual EC2, Fargate, and Lambda spend. This is
the primary goal outlined in the prompt.

Therefore, option A offers the most operationally efficient solution by utilizing AWS Budgets' integrated

capabilities for Savings Plans monitoring and automated notifications, eliminating the need for custom code
or manual intervention.
Here are some authoritative links for further research:
AWS Budgets: https://aws.amazon.com/aws-cost-management/aws-budgets/
Creating a Savings Plans Coverage Budget: https://docs.aws.amazon.com/costmanagement/latest/userguide/sp-coverage.html
Compute Savings Plans: https://aws.amazon.com/savingsplans/compute-savings-plans/

---

## Question 716

**Answer:** **A**

**Explanation:**

The most operationally efficient solution for making an Amazon MSK cluster publicly available over the
internet with encryption is option A: configure public subnets in the existing VPC, deploy an MSK cluster in
those subnets, and enable mutual TLS authentication.

Here's why:
Operational Efficiency: Reusing the existing VPC avoids the complexity of creating and managing a new VPC.
Creating new infrastructure introduces operational overhead. Using the existing VPC leverages existing
security groups and network configurations.
Public Subnets: Deploying the MSK cluster in public subnets allows the instances to have public IP addresses
(or be associated with a NAT Gateway for outbound access), making them reachable from the internet.
Mutual TLS Authentication: Mutual TLS (mTLS) provides robust encryption and authentication. It ensures
that both the client and the server (MSK cluster) authenticate each other before establishing a connection.
This provides a secure, encrypted channel for data ingestion.
Why the other options are less optimal:

**Option B** (New VPC): Creating a new VPC adds unnecessary complexity. It requires configuring new
networking (subnets, route tables, security groups) and potentially peering it with the existing VPC if
communication between internal and external applications is needed.

**Option C** (ALB): An ALB is designed for HTTP/HTTPS traffic and operates at Layer 7 of the OSI model. MSK
uses a binary protocol, making ALB unsuitable.

**Option D** (NLB): While an NLB can handle TCP traffic, it doesn't provide the application-level security and
mutual authentication that mTLS does. NLBs operate at Layer 4 and do not offer the same deep inspection or
security features as mTLS. NLB HTTPS listeners do not operate in the same manner as with standard web
applications.

Therefore, placing the MSK cluster in public subnets within the existing VPC and enabling mTLS offers the
best balance of security, functionality, and operational simplicity.

---

## Question 717

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's a detailed justification:
Requirement for SFTP: The application must use the SFTP protocol for processing orders. AWS Transfer
Family directly addresses this requirement by providing managed SFTP servers.
Internal Access: The application integrates with an on-premises ERP system through existing network
connectivity to AWS. Therefore, the SFTP server should be internal, not internet-facing, to maintain security
and utilize existing private network connections.
Resilience: Deploying the SFTP server in two Availability Zones (AZs) enhances resilience by ensuring that
the application remains available even if one AZ experiences an outage.
Storage: Amazon S3 is a suitable storage option for order files due to its scalability, durability, and costeffectiveness.

Immediate Processing: Using AWS Transfer Family managed workflows allows for immediate processing of
uploaded files. When a file is uploaded to the S3 bucket via SFTP, the Transfer Family workflow can
automatically trigger a Lambda function.
Lambda Function: The Lambda function processes the order files. Because it's triggered by the Transfer
Family workflow after each upload, the processing happens immediately, meeting the "process orders from
the ERP system immediately" requirement.
EFS vs. S3: While Amazon EFS could be used for storage, S3 is generally preferred for file storage due to its
cost-effectiveness, scalability, and integration with serverless architectures. EFS is more suitable for
applications requiring shared file system access across multiple EC2 instances. Also, Transfer Family
workflows are natively integrated with S3.
EventBridge Scheduler vs. Transfer Family Workflows: Using EventBridge Scheduler to periodically check
EFS for order files would introduce latency and miss the requirement of immediate processing. Transfer
Family workflows directly integrate with the file transfer process.
Step Functions: Step Functions manage complex workflows. While it could be used in conjunction with
Lambda, it isn't necessary for this scenario, which is a simple file processing trigger.

---

## Question 718

**Answer:** **C**

**Explanation:**

The correct answer is C because it directly addresses the requirements of scalability, reduced operational
complexity, and on-premises data processing. AWS Outposts brings AWS services, including Amazon EMR,
directly to the on-premises environment. By running Amazon EMR on AWS Outposts, the company can
leverage the scalability and managed services of EMR for their Hadoop and Spark workloads without
migrating the data off-premises. This fulfills the requirement of keeping data processing on premises while

simplifying management and improving scalability.

**Option A** is incorrect because it involves using AWS Site-to-Site VPN and Amazon EMR in the AWS cloud. This
requires moving the data across the VPN, which doesn't satisfy the on-premises processing requirement.

**Option B** is also incorrect because it involves moving data to the AWS cloud using AWS DataSync and
processing it there with Amazon EMR, which again violates the requirement of keeping data processing on
premises.

**Option D** is incorrect because it involves moving the data to Amazon S3 in the AWS cloud using AWS
Snowball, and then processing the data there, violating the on-premises processing requirement. Snowball is
for data migration to the cloud, not for on-premises processing.

In summary, only option C maintains data processing on-premises using Amazon EMR on AWS Outposts,
directly addressing the stated requirements of scalability, reduced operational complexity, and data
residency. AWS Outposts: https://aws.amazon.com/outposts/Amazon EMR: https://aws.amazon.com/emr/

---

## Question 719

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an Amazon S3 bucket that uses S3 Intelligent-Tiering. Migrate the data to
the S3 bucket by using an AWS Storage Gateway Amazon S3 File Gateway.

Here's a detailed justification:
The scenario requires a solution to host a large amount of data accessible via SMB and NFS protocols, with
both frequently and infrequently accessed portions, and aims for minimal operational overhead.

**Option C** provides the most efficient and cost-effective solution. S3 Intelligent-Tiering automatically moves
data between frequent and infrequent access tiers based on access patterns, optimizing costs without
manual intervention. AWS Storage Gateway's File Gateway presents the S3 bucket as a network file share
accessible via SMB and NFS, fulfilling the protocol requirements. This eliminates the need for managing file
systems directly, greatly reducing operational overhead.
Options A and B, involving Amazon EFS and Amazon FSx for ONTAP, respectively, require managing file
systems and involve more administrative effort compared to S3. While EFS Intelligent-Tiering offers cost
optimization, EFS doesn't natively support SMB. FSx for ONTAP, while supporting both protocols, is more

complex and expensive than S3 for this specific use case.

**Option D**, utilizing Amazon FSx for OpenZFS, is suitable for high-performance file systems. It doesn't have
built-in intelligent tiering, leading to less cost optimization for infrequently accessed data and might have a
higher operational burden than the S3 solution.
S3's scalability and durability are well-suited for storing large datasets. Using Storage Gateway's File
Gateway simplifies the integration with existing Windows, Mac, and Linux environments, providing a seamless
user experience without requiring significant application changes. By utilizing S3 Intelligent-Tiering, the
solution minimizes storage costs by automatically transitioning data to the most cost-effective tier based on
access patterns, without any operational overhead. Therefore, option C strikes the best balance between
functionality, cost, and ease of management.
Supporting links:
Amazon S3 Intelligent-Tiering: https://aws.amazon.com/s3/storage-classes/intelligent-tiering/
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
AWS Storage Gateway File Gateway: https://aws.amazon.com/storagegateway/file-gateway/

---

## Question 720

**Answer:** **C**

**Explanation:**

The best solution for the manufacturing company is to run the application on Amazon Elastic Container
Service (Amazon ECS) as microservices with service auto scaling. This approach addresses the issues of
monolithic architecture, frequent updates causing downtime, and the need for scalability and flexibility.

Here's why:
Microservices Architecture: Breaking down the monolithic application into smaller, independent
microservices allows for independent deployment and scaling of individual components. This means updates
to one microservice don't require redeploying the entire application, reducing downtime and complexity.
Amazon ECS: ECS is a fully managed container orchestration service. It allows you to run, scale, and manage
containerized applications, simplifying deployment and management of microservices.
Service Auto Scaling: ECS service auto scaling automatically adjusts the number of running tasks

(containers) based on demand. This ensures the application can handle peak loads efficiently and costeffectively, providing scalability.
Flexibility and Gradual Improvement: Microservices enable the company to introduce new features and
improvements incrementally without disrupting the entire application. Each microservice can be updated and
deployed independently.
Minimized Downtime: ECS facilitates rolling deployments, where new versions of microservices are deployed
gradually while old versions remain active. This significantly reduces or eliminates downtime during updates.
Resilience: In case a container fails, ECS can automatically restart it or launch a new one, enhancing the
application's resilience and availability.
Options A, B, and D are less suitable:
A (Lambda as a single function): While Lambda provides scalability, running the entire monolithic application
as a single Lambda function is not recommended. Lambda functions have execution time limits and are better
suited for smaller, event-driven tasks.
B (EC2 Spot Instances): Using Spot Instances can be cost-effective, but relying solely on them for a critical
application can lead to unpredictable interruptions if Spot Instances are reclaimed. Although Spot Fleets
allow you to specify fallback on-demand instances, this choice still isn't as robust or scalable as ECS for the
scenario described. Furthermore, running the application as microservices on Spot Instances without a
container orchestrator introduces additional complexity in managing deployments, scaling, and service
discovery.
D (Elastic Beanstalk with all-at-once deployment): Elastic Beanstalk provides a platform for deploying and
managing web applications, but an all-at-once deployment strategy causes significant downtime. The all-atonce deployment strategy isn't appropriate for minimizing downtime. Furthermore, deploying a monolith into
Beanstalk does not resolve the complexity of deployments, scaling, and service discovery.

---

## Question 721

**Answer:** **C**

**Explanation:**

The incorrect answer is D. Use an AWS Lambda function that runs custom developed code.

Here's why the correct answer is a better choice and why option D is not:
The primary reason option D (AWS Lambda) is unsuitable is the statement that the component supports
"hundreds of requests each second." While Lambda can handle concurrent invocations, managing the scaling
and dependencies for a component processing hundreds of requests per second can quickly become complex
and lead to cold start issues or function timeouts if not appropriately provisioned and optimized. Lambda is
best suited for event-driven, short-lived, and more granular microservices. The sheer volume of requests
makes orchestrating multiple Lambda functions and managing their state challenging.
Now, let's address why the other options are not suitable and expand on why Amazon Elastic Kubernetes
Service (Amazon EKS) with Auto Scaling is a good option:

**A.** Spot Fleet with Auto Scaling: Although Spot Fleets offer cost savings, they are not ideal for a highly
available production environment due to the possibility of instances being terminated with short notice.
Managing the disruption caused by Spot instance terminations would add operational overhead and
complexity, conflicting with the requirement for minimal operational support.

**B.** AWS Elastic Beanstalk: While Elastic Beanstalk simplifies deployment and management, it's still
managing instances. Transitioning to microservices generally involves containerization. Although Beanstalk
supports Docker, it does not provide the native orchestration capabilities of Kubernetes.

**C.** Amazon Elastic Kubernetes Service (Amazon EKS): EKS offers a managed Kubernetes service, allowing
the company to deploy their microservice as a containerized application. Kubernetes excels at managing
containerized workloads, providing automatic scaling, self-healing, and simplified deployment and
management. Auto Scaling groups for the underlying EC2 worker nodes further ensure the cluster can handle
the required load. With Python support available through containers, this approach meets all the
requirements.
In Summary:
EKS with Auto Scaling provides the best solution for managing a high-volume microservice written in Python.
It offers automated scaling, minimal operational support through a managed Kubernetes service, and a
flexible containerized environment suitable for microservices. The high volume of requests is more naturally
handled by container orchestration than individual Lambda functions.
Supporting Links:
Amazon EKS: https://aws.amazon.com/eks/
Kubernetes Auto Scaling: https://kubernetes.io/docs/tasks/configure-pod-container/horizontal-podautoscale/
AWS Lambda Limitations: https://docs.aws.amazon.com/lambda/latest/dg/limits.html

---

## Question 722

**Answer:** **A**

**Explanation:**

The correct answer is A because it leverages AWS Transit Gateway, the recommended solution for
interconnecting multiple VPCs and on-premises networks with minimal operational overhead. Transit Gateway
acts as a central hub, simplifying the routing configuration between numerous VPCs and Direct Connect.
Here's a breakdown:

**Option A**: Transit Gateway: Creates a transit gateway and associates the Direct Connect connection using a
new transit VIF. Enables route propagation, automatically learning and distributing routes between connected
VPCs and the Direct Connect connection. This eliminates the need for manual route table updates,
significantly reducing operational burden. Transit Gateway's route propagation simplifies routing
management by dynamically adjusting routes as networks change. https://aws.amazon.com/transit-gateway/

**Option B**: Direct Connect Gateway: Direct Connect Gateway provides global access for resources connected
through Direct Connect. However, integrating it with numerous VPCs still requires managing separate virtual
private gateways (VGWs) for each VPC, adding complexity compared to Transit Gateway. This option requires
recreating existing VIFs, increasing disruption and effort.

**Option C**: Transit VPC and Peering: Transit VPCs, while a viable older solution, are more complex to manage
at scale than Transit Gateways, especially with 30 VPCs. Peering all VPCs together creates a full mesh
network, leading to complex route table management and scaling issues. The number of peering connections
grows quadratically with the number of VPCs, becoming unwieldy and difficult to manage. This approach
doesn't effectively address the need for centralized management and low operational overhead.
https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/transit-vpc.html

**Option D**: Site-to-Site VPN: Creating VPN connections to each VPC is highly inefficient and costly.
Maintaining 30 VPN connections would introduce significant operational overhead, including managing
individual VPN configurations, certificates, and monitoring. VPN connections don't provide the centralized
management and efficient routing capabilities of Transit Gateway.

In summary, Transit Gateway offers the most streamlined and scalable solution for connecting multiple VPCs
and on-premises networks via Direct Connect, minimizing operational overhead through centralized routing
and automatic route propagation.

---

## Question 723

**Answer:** **A**

**Explanation:**

The correct answer is A: Create a new IAM role. Attach the AmazonSSMManagedInstanceCore policy to the
new IAM role. Attach the new IAM role to the EC2 instances and the existing IAM role.

Here's a detailed justification:
The requirement is to use AWS Systems Manager to patch EC2 instances without disrupting the running
applications. The applications are already using an IAM role with specific policies to access RDS. If we modify
this existing role, it could potentially interrupt the application's ability to access RDS.

**Option A** addresses this perfectly by creating a separate IAM role specifically for Systems Manager. The
AmazonSSMManagedInstanceCore policy grants Systems Manager the necessary permissions to manage the
EC2 instance (e.g., install updates, run commands). By attaching both the existing application IAM role and the
new Systems Manager IAM role to the EC2 instances, we ensure that:

1. The applications retain their original permissions for RDS access, preventing disruption.

2. Systems Manager gains the necessary permissions to patch the instances.

**Option B** is incorrect because IAM users are not directly associated with EC2 instances for granting
permissions to the instance itself. IAM users are used for programmatic access (e.g., via the CLI or SDK), not
for granting instances permissions to access AWS resources. Systems Manager needs instance-level
permissions.

**Option C**, enabling Default Host Configuration Management in Systems Manager, doesn't address the IAM
permissions needed by Systems Manager to manage the instances. While it simplifies initial configuration in
some cases, it doesn't automatically grant the necessary permissions. Systems Manager still needs an IAM
role on the instance to act on it.

**Option D** is problematic because removing existing policies from the original IAM role will definitely disrupt
the running applications' access to RDS. The current IAM role provides the applications with the necessary
permissions to access the database. Modifying it directly is explicitly against the requirement to avoid
disruption.

Therefore, **Option A** is the only solution that provides the necessary permissions for Systems Manager without
interfering with the existing application functionality. It follows the principle of least privilege by granting
Systems Manager only the permissions it needs and avoids modifying a role that is already in use by a critical
application.
Here are some authoritative links for further research:
IAM Roles for Amazon EC2: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-roleec2.html
AmazonSSMManagedInstanceCore Policy: https://docs.aws.amazon.com/systemsmanager/latest/userguide/security-iam-awsmanpol.html
AWS Systems Manager Patch Manager: https://docs.aws.amazon.com/systemsmanager/latest/userguide/patch-manager.html

---

## Question 724

**Answer:** **B**

**Explanation:**

The correct answer is B. Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the
cluster.
The problem describes a scenario where the Kubernetes Horizontal Pod Autoscaler (HPA) is successfully
scaling the pods within the cluster, but the underlying compute capacity (the nodes themselves) is not scaling
to accommodate the increased pod count, leading to performance bottlenecks. This indicates a need for
cluster-level autoscaling, not just pod-level autoscaling.
The Kubernetes Cluster Autoscaler is specifically designed to automatically adjust the size of the Kubernetes
cluster by adding or removing nodes based on resource demands. It monitors the Kubernetes scheduler for
pending pods that cannot be scheduled due to insufficient resources. When it finds such pods, it triggers the
underlying infrastructure (in this case, the EC2 Auto Scaling group behind the EKS cluster) to add more
nodes. Conversely, if nodes are underutilized, the Cluster Autoscaler can remove nodes.

**Option A** is incorrect because scaling nodes based on memory usage alone might not be the most effective
strategy. CPU utilization and pod scheduling constraints are equally important factors. The Cluster Autoscaler
considers all these factors.

**Option C**, using a Lambda function, would require custom logic to monitor the cluster state, make scaling
decisions, and interact with the EC2 Auto Scaling group. This introduces significant administrative overhead
and complexity compared to using the purpose-built Cluster Autoscaler.

**Option D**, using an EC2 Auto Scaling group to distribute the workload, doesn't directly address the
Kubernetes cluster's scaling needs. While an Auto Scaling group is essential for the underlying infrastructure,
it needs to be integrated with Kubernetes awareness to function correctly in this scenario. The Cluster
Autoscaler utilizes an EC2 Auto Scaling group but provides the necessary Kubernetes integration.
The Cluster Autoscaler provides a native, integrated, and automated solution for scaling the EKS cluster,
minimizing administrative overhead and ensuring that the cluster capacity matches the application's resource
requirements. It's the simplest and most efficient way to address the described problem.
Supporting documentation:
Kubernetes Cluster Autoscaler: https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler
AWS EKS Cluster Autoscaler: https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html

---

## Question 725

**Answer:** **B**

**Explanation:**

The correct answer is B. Enable an S3 Lifecycle policy that deletes incomplete multipart uploads.

Here's why:
The problem statement indicates the company's S3 storage costs are increasing despite the number and size
of objects remaining relatively constant. This suggests a buildup of something that's not meant to be there
and is consuming storage space. Multipart uploads are a prime suspect.
Multipart uploads are used to upload large objects to S3 in parts. If an upload is interrupted or fails before all
parts are committed, these incomplete parts remain in S3 storage, consuming space and incurring costs.
Since the company frequently uses multipart uploads, especially for large 50GB objects, the likelihood of
incomplete uploads is relatively high. Over time, these fragments accumulate, leading to increased storage
costs.
An S3 Lifecycle policy can be configured to automatically delete incomplete multipart uploads after a
specified number of days. This action reclaims storage space occupied by the orphaned parts and reduces
overall storage costs. It addresses the root cause of the increasing costs by cleaning up unfinished processes.
Let's analyze the other options:

**A.** Switch from multipart uploads to Amazon S3 Transfer Acceleration: S3 Transfer Acceleration optimizes
data transfer speeds over long distances using Amazon's globally distributed edge locations. This improves
upload performance but doesn't directly address the issue of increasing storage costs due to incomplete
uploads. While Transfer Acceleration can be beneficial, it won't fix the underlying storage waste problem.

**C.** Configure S3 inventory to prevent objects from being archived too quickly: S3 Inventory provides a listing
of your objects and their metadata. While useful for auditing and reporting, it doesn't prevent incomplete
multipart uploads or address the cost issue directly. Furthermore, the scenario states they use S3 Standard
which isn't an archive storage class.

**D.** Configure Amazon CloudFront to reduce the number of objects stored in Amazon S3: CloudFront is a
content delivery network (CDN) that caches content at edge locations to improve content delivery
performance. CloudFront caches objects, so this would reduce the number of requests to S3, not the objects
stored in S3. It might indirectly reduce egress costs but doesn't address the primary problem of increasing
storage costs. Objects remain in S3.

Therefore, configuring an S3 Lifecycle policy to delete incomplete multipart uploads is the most effective
solution to reduce the company's increasing S3 storage costs in this scenario.
Further Research:
Amazon S3 Lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configurationexamples.html
Multipart Upload Overview: https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html
S3 Transfer Acceleration: https://docs.aws.amazon.com/AmazonS3/latest/userguide/transferacceleration.html

---

## Question 726

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, along with why the other options are less
suitable:
Why **Option D** (Amazon ElastiCache for Redis) is the Best Choice:

**Option D**, deploying an Amazon ElastiCache for Redis cluster in front of the RDS instance and modifying the
game to utilize Redis, addresses the core performance issues effectively. The question highlights rapid
updates and retrieval of location data as crucial requirements. Redis is an in-memory data store, known for its
extremely low latency and high throughput, which is perfect for caching frequently accessed data. By placing
Redis in front of the RDS PostgreSQL database, the game application can read and write location data to
Redis first. Most read requests can then be served directly from the Redis cache, drastically reducing the load
on the RDS instance and improving read performance. Furthermore, Redis's fast write capabilities allow for
quick updates to the location data, and these updates can be asynchronously persisted to the RDS instance in
the background, further offloading the database. This caching strategy is especially useful given the readheavy nature of location tracking in a multiplayer game. ElastiCache simplifies the management and scaling
of the Redis cluster. Redis is well-suited for geospatial data as well.
Why the other options are less suitable:

**Option A** (Multi-AZ for RDS): Enabling Multi-AZ on the RDS instance primarily provides high availability and
fault tolerance, not a significant performance boost for read and write operations. While Multi-AZ can help
with failover, it doesn't address the issue of database overload during peak usage.

**Option B** (Amazon OpenSearch Service): While OpenSearch is suitable for search and analytics, it's not the
ideal solution for the described use case. OpenSearch is designed for indexing and searching large volumes of
data, but it's not optimized for the rapid, low-latency updates required for real-time location tracking. It's also
more complex to set up and maintain than Redis in this scenario.

**Option C** (DynamoDB Accelerator (DAX)): DAX is a caching service specifically designed for Amazon
DynamoDB. Since the application currently uses RDS PostgreSQL, DAX is not applicable. Moreover, migrating
to DynamoDB would necessitate major application code changes which makes this approach less efficient.

---

## Question 727

**Answer:** **C**

**Explanation:**

The correct answer is C. Configure deletion protection on the DynamoDB tables. This option directly
addresses the problem of accidental table deletion with the least operational overhead.

Here's why:
Deletion protection is a feature specifically designed to prevent accidental deletion of DynamoDB tables.
Once enabled, a table cannot be deleted without first disabling the protection. This introduces a necessary
step that mitigates unintended deletions.
Operational Overhead: This solution requires only enabling a setting on each DynamoDB table. This minimal
configuration translates to the least amount of operational overhead compared to the other options.
Let's analyze why the other options are less suitable:

**A.** CloudTrail, EventBridge, and Lambda: While this approach allows for automated restoration, it's far more
complex. It requires configuring multiple services, writing code, and testing the automated restoration
process. The operational overhead is significant. Furthermore, restoration isn't prevention; the table is still
momentarily deleted, and the recovery process might have its own issues.

**B.** Backup and Restore Plan: While creating backups is a good practice for disaster recovery, it doesn't
prevent accidental deletion. Restoring from a backup is a manual process that takes time and introduces
potential data loss (data written after the backup). This option addresses data recovery, not prevention.

**D.** Point-in-Time Recovery (PITR): PITR allows you to restore a table to any point in time within the past 35
days. While useful for recovering from data corruption or unintended updates, it doesn't prevent deletion. Like
backups, it addresses data recovery, not prevention. The table is still deleted initially, which causes downtime
until the point-in-time recovery completes. Also, enabling PITR introduces some cost overhead.

In summary, deletion protection is the most straightforward, least operationally intensive, and most effective
way to prevent accidental DynamoDB table deletions. It's a preventative measure, unlike the other options
that focus on recovery after the event has already occurred. Here are some authoritative links for further
research:
DynamoDB Deletion Protection:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAXDeletionProtection.html

DynamoDB Point-in-Time Recovery:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html

---

## Question 728

**Answer:** **C**

**Explanation:**

The correct solution is C. Deploy AWS Storage Gateway using stored volumes to store data locally. Use
Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.

Here's a detailed justification:
The primary goal is to migrate on-premises storage to AWS while minimizing bandwidth costs and ensuring
immediate data retrieval at no extra cost. AWS Storage Gateway helps bridge the gap between on-premises
environments and AWS storage services. Different Storage Gateway types offer varying strategies for data
management.
Stored Volumes: In this configuration, the entire dataset is stored locally on the on-premises storage
appliance. Storage Gateway then asynchronously backs up point-in-time snapshots of this local data to
Amazon S3. This directly addresses the requirements:
Immediate Retrieval: Since the complete dataset is stored locally, data retrieval is fast and doesn't incur
bandwidth costs associated with pulling data from AWS every time.
Minimized Bandwidth Costs: Only snapshots are transferred to S3, reducing the overall bandwidth usage
compared to constantly synchronizing the entire dataset.
Data Migration: Provides a path for migrating data by storing it in the cloud while retaining a local copy.
Let's analyze why the other options are less suitable:

**A.** Amazon S3 Glacier Vault and expedited retrieval: S3 Glacier is designed for long-term archiving and
infrequent access. Expedited retrievals come at a cost, which violates the "no additional cost" requirement for
immediate retrievals. Also, Glacier is not a storage gateway.

**B.** AWS Storage Gateway using cached volumes: Cached volumes store frequently accessed data locally and
store the entire dataset in S3. While this reduces latency for frequently accessed data, it still requires
transferring the entire dataset to S3 initially, increasing bandwidth costs. Furthermore, infrequently accessed
data still requires retrieval from S3.

**D.** AWS Direct Connect and Storage Gateway with stored volumes: While AWS Direct Connect provides a
dedicated network connection between the on-premises environment and AWS, it is primarily focused on the

network link. It reduces bandwidth costs compared to internet transit, but still represents a cost. The Storage
Gateway part is the same as option C, but the Direct Connect component adds unnecessary complexity and
cost without directly addressing the core requirement of immediate retrieval at no additional cost. **Option C**
already provides the method of data backup through snapshots. Direct Connect is only needed when there is a
higher bandwidth needed for the backup and the network connection is critical.

In summary, Stored Volumes provide the optimal balance between local accessibility, reduced bandwidth
consumption, and gradual migration to the cloud. Authoritative Links:
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
Understanding Storage Gateway Volume Types:
https://docs.aws.amazon.com/storagegateway/latest/userguide/HowStorageGatewayWorks.html

---

## Question 729

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best choice, addressing the requirements of analyzing
historical workload trends, forecasting, and reacting to live utilization changes:

**Option B**, "Enable predictive scaling to forecast and scale. Configure dynamic scaling with target tracking," is
the most comprehensive solution for the stated problem. It leverages the strengths of both predictive and
dynamic scaling approaches.
Predictive scaling uses machine learning to analyze historical workload patterns (both daily and weekly
trends, as required) and forecasts future demand. This proactive approach allows the system to pre-emptively
scale resources before the actual increase in traffic occurs. This is superior to purely reactive approaches as it
avoids potential performance bottlenecks during the initial surge.
Dynamic scaling with target tracking provides real-time responsiveness. It continuously monitors a chosen
metric (like CPU utilization or request latency) and adjusts resources to maintain that metric at a defined
target. This complements predictive scaling by handling unexpected traffic spikes or deviations from the
forecast that predictive scaling might miss. This allows the system to adapt to live changes in utilization.
The combination ensures the application is scaled both proactively based on trends and reactively based on
current demand.

**Option A** (step scaling based on CPU utilization) only addresses dynamic scaling, not historical trend analysis
or predictive scaling. It’s reactive and doesn't prepare for anticipated load increases.

**Option C** (scheduled scaling) might work for predictable traffic patterns, but it doesn't adapt to live changes
or leverage historical trend analysis effectively. It's also less flexible than a predictive and dynamic scaling
combination. It would require manual updating of the schedule.

**Option D** (simple scaling with cooldown) is a basic scaling strategy, not suitable for complex workloads. It
lacks trend analysis, forecasting, and the precision of target tracking. Cooldown periods are intended to
prevent excessive scaling actions, but don't help with the underlying problem of matching resources to
demand.

Therefore, option B, combining predictive scaling with dynamic target tracking, provides the best solution to
meet the requirements of historical analysis, forecasting, and real-time responsiveness in the three-tier web
application.

---

## Question 730

**Answer:** **A**

**Explanation:**

The best solution for alleviating the effect of repeated read operations on the Aurora MySQL DB cluster costeffectively is to implement an Amazon ElastiCache for Redis cluster between the application and the DB
cluster.

Here's why:
The problem focuses on repeated read operations causing a bottleneck in the DB cluster. While read replicas
offload some read traffic, the load continues to grow. Adding more read replicas (option B) might offer
temporary relief but doesn't address the underlying issue of repeatedly fetching the same data. Aurora Auto
Scaling (option C) scales read replicas, but if the root cause is repetitive queries, it will just scale more servers
performing the same inefficient operation, incurring higher costs. **Option D**, multiple writer instances, is not
applicable for read scaling and is used for handling write-heavy workloads and is not related to the scenario.
ElastiCache for Redis acts as an in-memory data store (cache) situated between the application and the

database. This caching mechanism stores frequently accessed delivery details. When the application requests
this data, ElastiCache retrieves it from memory, drastically reducing the load on the DB cluster. Redis's inmemory nature makes it significantly faster than accessing the database directly for read operations.
Because it avoids querying the DB cluster for repetitive data, it's the most cost-effective solution. It avoids
scaling the DB cluster while directly addressing the performance bottleneck.
Here are some resources for further research:
Amazon ElastiCache: https://aws.amazon.com/elasticache/
Caching Strategies: https://aws.amazon.com/caching/
Aurora Read Replicas: https://aws.amazon.com/rds/aurora/features/

---

## Question 731

**Answer:** **C**

**Explanation:**

The problem indicates that the application is retrieving stale data from DynamoDB, even though overall
latency is acceptable. This points directly to the read consistency level being used. DynamoDB offers both
eventually consistent reads and strongly consistent reads.

**Option A**, adding read replicas, doesn't apply to DynamoDB's internal architecture. DynamoDB automatically
replicates data across multiple Availability Zones for high availability and durability; users do not manually
create read replicas.

**Option B**, using a Global Secondary Index (GSI), improves query performance based on different attributes but
does not directly address data consistency issues. While a GSI could improve query speed, it wouldn't
guarantee the latest data is returned unless it uses strongly consistent reads.

**Option D**, requesting eventually consistent reads, is actually the default behavior in DynamoDB and explains
why the application isn't getting the latest data. Eventually consistent reads provide the best read
performance (lowest latency) because they may read from any replica, but the trade-off is a small delay
before the latest updates become visible across all replicas. This is what is causing the stale data issue.

**Option C**, requesting strongly consistent reads, will directly solve the problem. Strongly consistent reads
guarantee that the read operation will return the most up-to-date version of an item, reflecting all previous
write operations that completed successfully. While strongly consistent reads may have slightly higher
latency than eventually consistent reads, it's crucial in this scenario where data accuracy is paramount. The
question states that latency is within an acceptable range, so the slightly higher latency associated with
strongly consistent reads is permissible in the context of solving the consistency problem. Therefore,
requesting strongly consistent reads is the most appropriate design change.
Here are links for further research:

DynamoDB Read Consistency:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks. ReadConsistency.html
DynamoDB Global Secondary Indexes:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html

---

## Question 732

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution for protecting an application and RDS
database from SQL injection and web-based attacks with the least operational overhead, adhering to the
principle of least privilege:
The problem requires mitigating SQL injection and web-based attacks with minimal operational effort,
leveraging the principle of least privilege. AWS WAF (Web Application Firewall) directly addresses this
requirement by inspecting HTTP(S) traffic and blocking malicious requests before they reach the application.
It offers pre-configured rules for common web exploits, including SQL injection, cross-site scripting (XSS),
and others, reducing the need for custom security rules and maintenance.
Using RDS parameter groups to configure security settings helps in hardening the database. Although
parameter groups primarily manage database configurations, they can indirectly contribute to security. For
example, you can use parameter groups to enforce stricter password policies or disable certain features that
might be susceptible to vulnerabilities.

**Option A** (Security Groups and Network ACLs) focuses on network-level security, controlling traffic based on
IP addresses and ports. While crucial, they don't provide deep inspection of application layer traffic necessary
to prevent SQL injection and other web-based attacks. They are more concerned with allowing or denying
connections, not analyzing the content within those connections.

**Option C** (AWS Network Firewall) is a powerful network security service, but it is generally more complex and
operationally heavy than AWS WAF for protecting web applications. While it offers broader protection at the
network layer, its configuration and maintenance would be higher than that of WAF, adding unnecessary
complexity.

**Option D** (Different database accounts with limited privileges) aligns with the principle of least privilege.
However, by itself, this doesn't protect against SQL injection; it only limits the damage if an attack succeeds.
It also requires more careful management of database credentials within the application code. While a good
practice, it doesn't replace the need for web application firewall protection.

Therefore, using AWS WAF to filter malicious requests and employing RDS parameter groups to indirectly
enhance database security is the most effective and operationally efficient solution. It provides specific

protection against web-based attacks while keeping the operational overhead manageable, and complements
the least privilege principle. WAF's managed rulesets and easy deployment make it ideal for addressing the
core security concerns with minimal manual intervention.
Supporting links:
AWS WAF: https://aws.amazon.com/waf/
Amazon RDS Parameter Groups:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html

---

## Question 733

**Answer:** **B**

**Explanation:**

The best approach to detect abnormal database login attempts across an AWS Organization involves
leveraging specialized security services designed for threat detection. **Option B**, enabling Amazon RDS
Protection in Amazon GuardDuty for member accounts, directly addresses this requirement efficiently.
GuardDuty RDS Protection monitors Aurora PostgreSQL logs and activity to identify suspicious behavior
related to login attempts, password failures, and potential brute-force attacks. This solution is operationally
efficient because GuardDuty is a managed threat detection service that automates log analysis, threat
intelligence correlation, and anomaly detection, removing the need to manually parse logs. GuardDuty
automatically integrates with AWS Organizations and can be enabled centrally, applying to all member
accounts. This reduces administrative overhead compared to setting up and maintaining custom logging
solutions.

**Option A**, using SCPs, can restrict actions but isn't designed to analyze and identify failed login attempts.

**Option C**, which involves publishing logs to CloudWatch and exporting them to S3, requires a custom analysis
pipeline to detect anomalies, adding significant operational complexity. **Option D**, publishing database events
to CloudTrail, while helpful for auditing API calls, doesn't directly monitor database login activity.

GuardDuty's RDS Protection offers a purpose-built, managed service that provides pre-built detectors for
common database security threats and integrates seamlessly with AWS Organizations, providing the most
operationally efficient
solution.https://aws.amazon.com/guardduty/features/https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_rds

---

## Question 734

**Answer:** **D**

**Explanation:**

The best solution is D. Connect the existing Direct Connect connection to a Direct Connect gateway. Route
traffic from the virtual private gateways of the VPCs in each Region to the Direct Connect gateway.

Here's why:
Scalability and Reduced Overhead: Direct Connect Gateway (DXGW) is designed for connecting multiple
VPCs across different AWS Regions. It simplifies the management of multiple connections and routing
configurations, reducing operational overhead as the company's AWS footprint grows.
Centralized Management: DXGW acts as a central point for routing traffic between on-premises networks
(via Direct Connect) and multiple VPCs across different Regions.
No Overlapping CIDR Blocks: Since the CIDR blocks of the VPCs don't overlap, DXGW can seamlessly route
traffic between them without any address translation issues.
Inter-Region Connectivity: DXGW supports inter-Region connectivity, fulfilling the requirement to connect
VPCs in us-east-1 and eu-west-2.
Direct Connect Utilization: This solution leverages the existing Direct Connect connections, ensuring costeffectiveness and minimizing the need for new infrastructure.
Alternatives Considered & Why They Are Less Suitable:
A (Inter-Region VPC Peering): While possible, VPC peering is point-to-point. Connecting multiple VPCs across
Regions requires establishing and managing numerous peering connections, leading to increased complexity
and administrative burden. It doesn't scale well.
B (Direct Connect Private VIFs to Each VPC): This is not recommended because creating multiple private VIFs
from one Direct Connect connection to VPCs in different Regions is complex and less efficient than using
DXGW. Also, some organizations may have Direct Connect port limits.
C (VPN Appliances in EC2 with AWS VPN CloudHub): VPN appliances in EC2 incur higher operational
overhead compared to DXGW. Managing VPN appliances, routing, and security can become complex, and the
performance may be less reliable than using a Direct Connect Gateway. Also, it doesn't fully utilize the
existing Direct Connect connections. EC2 based VPNs will also be significantly more costly at high
throughputs.

In summary, Direct Connect Gateway provides a scalable, manageable, and cost-effective solution for
connecting multiple VPCs across different AWS Regions using existing Direct Connect connections, fulfilling
all the company's requirements.

---

## Question 735

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most suitable solution, along with supporting cloud
computing concepts and links for further research:

**Option A** leverages several AWS services optimized for high-throughput data streaming, processing, and
storage, aligning perfectly with the problem's requirements. Amazon Kinesis Data Streams is designed for
real-time streaming of large volumes of data, making it ideal for handling score updates from the mobile
game. Crucially, Kinesis Data Streams guarantees data ordering within each shard, fulfilling the requirement
to process updates in the order they are received. AWS Lambda provides a serverless compute environment,
minimizing management overhead, as it automatically scales in response to the volume of updates from
Kinesis. Lambda's function will consume the Kinesis stream and process the updates. Finally, Amazon
DynamoDB is a highly available and scalable NoSQL database, well-suited for storing the processed score
updates. Its managed nature further reduces management overhead. DynamoDB also offers fast read and
write performance.

Why other options are less suitable:

**Option B**: While Kinesis Data Streams is appropriate, using EC2 instances with Auto Scaling for processing
introduces more management overhead compared to the serverless Lambda option. Also, Amazon Redshift is
designed for analytical workloads and isn't the best choice for transactional storage of individual score
updates.

**Option C**: Amazon SNS is designed for publish/subscribe messaging and doesn't guarantee message
ordering. The mobile game needs to receive updates in order. Storing the processed updates in a SQL
database running on EC2 increases management overhead and doesn't offer the same scalability as
DynamoDB.

**Option D**: Amazon SQS provides a message queueing service, which isn't designed for preserving the order of

message within queue ( unless configured using FIFO). It's ideal for decoupling components but might not be
the best choice when order is important. Also, using EC2 instances with Auto Scaling for processing is good,
but adds overhead. Although Amazon RDS Multi-AZ DB instance offers high availability, managing the
database and EC2 instances leads to increased management overhead compared to serverless alternatives.
In summary: **Option A** provides the best balance of scalability, managed services, guaranteed data ordering,
and minimal management overhead, making it the optimal solution for handling the mobile game's score
updates.

---

## Question 736

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most suitable solution:

**Option B**, using S3 Same-Region Replication (SRR), is the most cost-effective and operationally efficient
solution for centralizing logs from multiple AWS accounts into a single S3 bucket within the us-west-2 region.
S3 SRR automatically and asynchronously replicates objects between S3 buckets in the same AWS Region.
This aligns perfectly with the requirement of keeping the logs within us-west-2.
The main advantage of SRR is its ease of configuration and management. Once enabled between source and
destination buckets, the replication process is fully managed by AWS S3, requiring minimal operational
overhead. There's no need to write custom scripts or functions. This simplifies the log centralization process
significantly.

**Option A**, using an S3 Lifecycle policy for copying, is less suitable because Lifecycle policies are primarily
designed for object transition to cheaper storage classes (like Glacier) or deletion, not general cross-bucket

copying for analysis. While it could be configured, SRR is the more direct and intended mechanism for
replication.

**Option C**, using a script with PutObject API calls, is the least efficient. It involves significant operational
overhead in developing, deploying, and maintaining the script. Additionally, manually copying data is prone to
errors and can lead to data inconsistencies if not implemented correctly. It also lacks the real-time aspect
that is usually expected with log centralization.

**Option D**, employing Lambda functions triggered by s3:ObjectCreated:* events, is a viable option but more
complex and costly than SRR. While it offers near real-time log transfer, it introduces the overhead of
managing Lambda functions, including code development, deployment, monitoring, and potential scaling
issues, along with associated Lambda execution costs. The cost of invoking Lambda per log write is likely to
outweigh the S3 replication costs.
Compared to the other options, SRR leverages a built-in S3 feature designed specifically for data replication,
reducing operational complexity and potential for errors. It's cost-effective due to its managed nature, and
avoids the overhead associated with custom scripting or Lambda function management. This makes it the
most suitable approach for the company's centralized log analysis needs.
For further research, consult these AWS documentation pages:
S3 Same-Region Replication (SRR):
https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html
S3 Lifecycle Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecyclemanagement.html

---

## Question 737

**Answer:** **CE**

**Explanation:**

Here's a detailed justification for the answer choices C and E, and why the other options are incorrect:
Why C and E are correct:

**E:** Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name
(ARN) of the Multi-Region Access Point for video streaming and uploads. This is a core element of the
solution because S3 Multi-Region Access Points (MRAP) are designed to simplify accessing data stored
across multiple S3 buckets in different AWS Regions. By using a MRAP, the application interacts with a single
endpoint (the ARN), and S3 intelligently routes requests to the appropriate bucket based on proximity,
availability, and configured routing policies. This minimizes latency for both uploads and downloads because
users are directed to the nearest S3 bucket. Modifying the application to use the MRAP ARN for both
streaming and uploading is crucial for ensuring all requests benefit from the multi-region setup.
S3 Multi-Region Access Points documentation

**C:** Configure two-way (bidirectional) replication among the S3 buckets that are in all three Regions.
Bidirectional replication is essential when content developers are uploading videos not just to us-east-2, but
also to eu-west-2 and ap-southeast-1, or if there are developers in all these regions who upload content.
Replicating data bi-directionally between all three regions ensures that any changes made in one region are
automatically propagated to the other two regions. This keeps the data consistent and up-to-date across all
locations, which is vital for content delivery and user experience. If uploads only occurred in the us-east-2
bucket, then bi-directional replication would not be required and would not be cost effective.
S3 Replication documentation

Why other options are incorrect:

**A:** Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure oneway replication from the us-east-2 S3 bucket to the ap-southeast-1 S3 bucket. This option addresses the
replication requirement but doesn't minimize latency for developers uploading videos in the eu-west-2 and apsoutheast-1 regions. They would still be uploading to the us-east-2 bucket, which defeats the purpose of
minimizing latency.

**B:** Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure oneway replication from the eu-west-2 S3 bucket to the ap-southeast-1 S3 bucket. Similar to option A, this
setup doesn't address the latency issue for developers uploading videos in the ap-southeast-1 region. Uploads
will be required from eu-west-2 to ap-southeast-1, which will not improve latency for uploads coming from the
ap-southeast-1 region.

**D:** Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name
(ARN) of the Multi-Region Access Point for video streaming. Do not modify the application for video
uploads. While using a Multi-Region Access Point for streaming is a good step to minimize latency for
students, this option doesn't address the latency issue for developers uploading videos. They would still be
uploading to the original us-east-2 bucket, negating the benefits of multi-region access.

In summary, the combination of creating a Multi-Region Access Point and configuring bidirectional replication
ensures both low-latency video delivery for students and low-latency video uploads for content developers,
regardless of their location.

---

## Question 738

**Answer:** **B**

**Explanation:**

The optimal solution for minimizing content upload latency for a globally distributed mobile app with
geographically localized content consumption is B. Upload and store content in Amazon S3. Use S3 Transfer
Acceleration for the uploads.

Here's why:
S3 as the core storage: Amazon S3 provides highly durable, scalable, and available storage for the media
assets (photos and videos). It's a natural fit for this use case because the content is largely consumed soon
after upload, fitting the object storage paradigm well.
S3 Transfer Acceleration: This feature leverages the globally distributed AWS edge locations (same network
used by CloudFront) to accelerate uploads to S3. When a user uploads content, it's routed to the closest edge
location. Then, data is transferred to the destination S3 bucket over an optimized network path, potentially
reducing latency. The edge location handles the TCP handshake and optimizes the transfer protocol.
Let's analyze why other options are not ideal:

**A.** Upload and store content in Amazon S3. Use Amazon CloudFront for the uploads. While CloudFront
excels at content delivery, it primarily caches content that is already stored in an origin (like S3). CloudFront
can accept uploads, but this functionality (using CloudFront for PUT requests) is generally less optimized for
upload performance than S3 Transfer Acceleration, especially considering the use case involves a large
volume of uploads. The primary function of CloudFront is CDN, and it is optimal for content distribution rather
than ingestion.

**C.** Upload content to Amazon EC2 instances in the Region that is closest to the user. Copy the data to
Amazon S3. Introducing EC2 instances adds unnecessary complexity and operational overhead. You'd need to
manage these instances, ensure their availability, and handle scaling. The transfer from EC2 to S3 would still
incur latency. Moreover, the data transfer out costs from EC2 could be higher.

**D.** Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple
distributions of Amazon CloudFront. This would be a valid solution for content delivery but does not directly
address the upload latency concern. You'd still need a fast mechanism to get the content into S3. The
complexity of managing multiple distributions is also unnecessary for simply improving upload speeds. It
doesn't help to resolve the initial upload latency to S3.

In summary, S3 Transfer Acceleration is specifically designed to speed up uploads to S3, making it the best
option for this scenario where low latency uploads are crucial for user experience.

---

## Question 739

**Answer:** **A**

**Explanation:**

The best solution is A. Send the requests from the API Gateway REST API to an Amazon Simple Notification
Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS
topic. Configure the target Lambda functions to poll the different SQS queues. This approach provides
message filtering and fan-out capability with the least operational overhead.

Here's why:
SNS for Fan-out: Amazon SNS excels at distributing messages to multiple subscribers. It natively supports a
publish-subscribe (pub/sub) pattern, which is perfect for sending the same message to multiple Lambda
functions.
SQS for Decoupling and Reliability: By placing SQS queues between SNS and Lambda functions, you
decouple the services. This adds resilience, allowing Lambda functions to process messages even if they are
temporarily unavailable or experiencing errors. SQS also provides buffering, preventing message loss during
traffic spikes.
SQS Filtering through SNS Message Filtering: SQS queues can subscribe to the SNS topic with filter
policies. These policies allow each queue (and thus the corresponding Lambda function) to receive only
messages with specific attributes. This satisfies the requirement for message filtering.
Reduced Operational Overhead: This solution minimizes the amount of custom code and infrastructure
management. SNS and SQS are managed services, meaning AWS handles the underlying infrastructure,
scaling, and maintenance.
Alternatives Considered:
B (EventBridge): While EventBridge can invoke Lambda functions, it is generally better suited for event-driven
architectures that integrate various AWS services. Using it solely for API Gateway to Lambda fan-out adds
unnecessary complexity compared to SNS+SQS.
C (Amazon MSK): MSK is designed for high-throughput, real-time streaming data, which is overkill for this use
case. Managing an MSK cluster requires significantly more operational effort than SNS and SQS. It is also not
directly integrated with API Gateway for message pushing.
D (Multiple SQS Queues): Sending the request directly from API Gateway to multiple SQS queues would
require the API Gateway configuration to know about each target Lambda function. This creates tight
coupling and doesn't support filtering without custom code within API Gateway to evaluate the messages and
direct them to the appropriate queues. This approach violates the "least operational overhead" requirement.

In summary, SNS with SQS offers a cost-effective, scalable, and easily manageable solution for distributing
messages to multiple Lambda functions with filtering capabilities, making it the best choice for this serverless
architecture.
Relevant Documentation:
Amazon SNS: https://aws.amazon.com/sns/
Amazon SQS: https://aws.amazon.com/sqs/
SNS Message Filtering: https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html
API Gateway Lambda Integration: https://docs.aws.amazon.com/apigateway/latest/developerguide/serviceslambda-integrations.html

---

## Question 740

**Answer:** **A**

**Explanation:**

The correct answer is A because it directly addresses both requirements: encrypting existing unencrypted
objects and ensuring future objects are encrypted with SSE-C.
Encrypting existing objects: S3 Inventory is the efficient way to identify unencrypted objects within an S3
bucket. Filtering the Inventory report provides a list of unencrypted objects. S3 Batch Operations is then used
to process this list and encrypt each object using SSE-C, ensuring the archival data is encrypted with the
customer-provided key.
Encrypting future objects: Configuring the S3 default encryption feature to use SSE-C guarantees that all
new objects uploaded to the bucket will be automatically encrypted with the customer-provided key. This
ensures all future archival data is encrypted as required.
Other options are incorrect because:

**B:** S3 Storage Lens is focused on bucket-level metrics and doesn't identify individual unencrypted objects.
SSE-KMS is not SSE-C as required.

**C:** The AWS usage report is not designed to list unencrypted objects and AWS Batch can't be directly used to
encrypt S3 objects. SSE-KMS is not SSE-C as required.

**D:** The AWS usage report is not designed to list unencrypted objects. Setting the S3 default encryption
handles future objects but doesn't encrypt existing ones.

---

## Question 741

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the correct answer:
The primary goal is to migrate a publicly accessible website's DNS hosting to a more resilient AWS service,
specifically in response to current outages. Amazon Route 53 is AWS's highly available and scalable DNS
service. To host a public website's DNS records, a public hosted zone in Route 53 is required. This is because
the public hosted zone contains records that are accessible to the internet, allowing users to resolve the
website's domain name to the correct IP address.
The fastest way to migrate the existing DNS configuration is to import the zone file from the previous
provider. A zone file is a standard text file that contains all the DNS records (e.g., A, CNAME, MX) for a domain.
Route 53 provides a mechanism to import zone files, significantly reducing the manual effort required to
recreate the records. This ensures minimal disruption during the migration.

**Option B** is incorrect because a private hosted zone is used for internal DNS resolution within a VPC, not for
public websites. Public users won't be able to resolve the website's domain through a private hosted zone.

**Option C** is incorrect. Simple AD is used to create a directory service integrated with AWS. While it can be
used for DNS, it is more complicated than Route 53 for public DNS migration. Also, the question is more about
rapidly migrating a DNS service, not setting up an entirely new directory service solution. While AWS
Directory Service for Microsoft Active Directory can handle DNS forwarding, it is an overkill to use it to simply
migrate to a more resilient DNS service.

**Option D** is incorrect because Route 53 Resolver inbound endpoints are used for hybrid cloud scenarios
where you want to forward DNS queries from your on-premises network to AWS. This is the reverse of what's

needed – the question is about moving to AWS for DNS hosting. Route 53 resolver can handle the DNS
queries if they are hosted there; the scenario is to use a third party and forward those queries to
AWS.Therefore, creating a public hosted zone and importing the existing records is the most efficient and
appropriate solution for rapidly migrating a public website's DNS hosting to AWS.
Here are authoritative links for further research:
Amazon Route 53: https://aws.amazon.com/route53/
Working with Public Hosted Zones: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hostedzones-working-with.html
Importing a Zone File: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-zonefile.html

---

## Question 742

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the most suitable and streamlined approach for managing
application configurations and securely handling credentials with minimal administrative burden.
AWS AppConfig is specifically designed for managing application configurations. It allows you to create,
manage, and deploy application configuration updates in a controlled and validated manner. AppConfig
integrates with other AWS services, enabling you to validate configuration data before deploying it to your
applications, thereby reducing the risk of configuration errors and application downtime. It offers features like
validation schemas, controlled rollouts, and rollback capabilities. https://aws.amazon.com/appconfig/
AWS Secrets Manager is the AWS service dedicated to securely storing and retrieving sensitive information
like database credentials, API keys, and other secrets. It enables you to rotate, manage, and retrieve secrets
throughout their lifecycle. Secrets Manager also offers automatic rotation of database credentials, enhancing
security without requiring manual intervention. https://aws.amazon.com/secrets-manager/

**Option B** is less suitable. While AWS Systems Manager Parameter Store can store credentials, it's primarily
intended for configuration data and operational parameters rather than sensitive secrets. Lambda functions
are not designed to manage application configuration.

**Option C** is not recommended due to security vulnerabilities. Storing credentials in an encrypted file within S3
introduces risks of unauthorized access if the file is compromised, or the encryption key is leaked. This
method requires manual management and rotation of encryption keys and credentials.

**Option D** is incorrect because using Amazon RDS to store application configuration is not its intended
purpose, and it complicates the database schema and overall architecture. Furthermore, it does not provide
the same level of features and benefits that AppConfig provides for managing configuration changes. RDS is
designed for storing structured data within a relational database, not for storing configurations or secrets.
Using RDS to store secrets exposes security vulnerabilities.

Therefore, the combination of AWS AppConfig for configuration management and AWS Secrets Manager for
secure credential storage offers the most secure, scalable, and manageable solution with the least
administrative overhead.

---

## Question 743

**Answer:** **D**

**Explanation:**

The correct solution is to download AWS-provided root certificates and use them in all connections to the RDS
instance because it enables SSL/TLS encryption for data in transit, securing communication between the
application and the RDS MySQL database.

**Option A**, enabling IAM database authentication, primarily manages authentication and authorization, not
encryption of data in transit. While it enhances security by controlling access, it doesn't address the
requirement of encrypting data while it's being transferred.

**Option B**, providing self-signed certificates, is not a best practice in production environments due to security
concerns. Self-signed certificates are not trusted by default and can lead to man-in-the-middle attacks. Using
AWS-provided certificates ensures trust and validity.

**Option C**, taking a snapshot and restoring it to a new instance with encryption enabled, addresses encryption
at rest, which is already configured. The security audit revealed that data in transit encryption is the missing
piece, so this option doesn't solve the core issue.
By using AWS-provided root certificates, the application can establish an SSL/TLS connection with the RDS
instance. SSL/TLS encrypts the data stream between the application and the database, ensuring that
sensitive information is protected during transmission. These certificates are pre-trusted and automatically
updated by AWS, simplifying management and improving security posture. This approach directly fulfills the
security requirement of encrypting all application data in transit while communicating with the RDS MySQL
DB instance.
Reference:
Using SSL/TLS to encrypt a connection to a DB instance

---

## Question 744

**Answer:** **C**

**Explanation:**

The correct answer is C. An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address.

Here's why:
The primary requirement is that clients, with firewall restrictions allowing only specific IP addresses, need to
access the web service. Using Elastic IPs directly tied to the load balancer (options A and B) is generally
problematic and doesn't align with best practices. Elastic Load Balancers (both Application and Network Load
Balancers) are dynamic. While you can technically associate Elastic IPs with Network Load Balancers, it's
generally discouraged because the whole point of a load balancer is to distribute traffic across multiple
instances which may change, and fixing a static IP to it defeats this purpose and can introduce availability
risks. Application Load Balancers cannot directly associate with Elastic IPs. This makes options A and B
technically impractical, and certainly not the best solution.

**Option D**, using a proxy EC2 instance with a public IP, is also suboptimal. It introduces a single point of failure
and adds unnecessary operational overhead for managing the proxy server. It also complicates the
architecture when a load balancer is already in place.

**Option C** provides a cleaner and more scalable solution. By creating an A record in Route 53 that resolves to
an Elastic IP address, clients can use the IP address in their firewall rules. Here's how it works:

1. Elastic IP Address: You create and associate an Elastic IP address. This IP address remains constant
and can be moved between resources (although not while it's assigned to the load balancer as we will
resolve it to the load balancer's DNS name).

2. Route 53 A Record: In Route 53, you create an A record for a domain name (e.g., api.example.com)
and point it to the Elastic IP address. Important: Instead of directly assigning the Elastic IP to the
ELB, the DNS record initially points to the Elastic IP, and the Elastic IP is configured to point to the
ELB's DNS name (CNAME) internally within Route 53 or via a custom resource. This means that even
if the underlying EC2 instances behind the ELB change (due to scaling or failures), the clients'
firewalls remain unaffected because they only allow traffic to the static Elastic IP. However, we never
expose the ELB's IP addresses directly to the internet. This is a critical difference.
This approach offers several advantages:
Static IP for Clients: Clients can use the Elastic IP address in their firewall rules, ensuring connectivity.
Dynamic Backend: The load balancer can still dynamically distribute traffic across multiple EC2 instances.
The Elastic IP acts as a consistent entry point, while the load balancer handles the backend infrastructure
changes.
Scalability and High Availability: The load balancer provides scalability and high availability for the web
service.

Managed DNS: Route 53 is a highly available and scalable DNS service.
Cost-Effective: Compared to managing a proxy server, using Route 53 is generally more cost-effective.

In summary, using an A record in Route 53 pointing to an Elastic IP address provides a stable and
manageable entry point for clients with firewall restrictions while leveraging the benefits of a load
balancer for scalability and high availability.

---

## Question 745

**Answer:** **B**

**Explanation:**

The correct answer is B: Create IAM users for daily administrative tasks. Enable multi-factor authentication on
the root user. Here's why:
The AWS account root user has unrestricted access to all AWS resources in the account. It should only be
used for initial setup tasks or when root access is explicitly required, such as changing account settings. Daily
administrative tasks should never be performed with the root user due to the high risk of accidental or
malicious misuse. **Option A** suggests disabling the root user, which is not recommended. The root user needs
to be available for essential account management activities like changing the AWS support plan or closing the
account.
Creating IAM users (option B) follows the principle of least privilege. IAM users can be granted specific
permissions needed for their roles, limiting the potential impact of a security breach or accidental
misconfiguration. This greatly reduces the attack surface.
Furthermore, enabling multi-factor authentication (MFA) on the root user account adds a crucial layer of
security. Even if the root user's password is compromised, an attacker would still need the MFA device to gain
access. MFA makes it significantly harder to compromise the root user.

**Option C** suggests generating an access key for the root user. This is a dangerous practice. Access keys
should be used carefully, and not for day-to-day use. Using an access key on the root account creates a
significant security risk. If the key is compromised, the entire account is compromised. IAM users should
always be utilized with appropriate policies attached.

**Option D** is fundamentally incorrect. Giving the root user credentials to a single individual for daily tasks
completely defeats the purpose of least privilege and shared responsibility. It centralizes a critical security
risk and violates best practices.

In summary, using IAM users for daily tasks with MFA on the root account is the most secure approach. It
protects the root account, promotes least privilege, and is a fundamental security practice in AWS. Disabling
the root account is discouraged because it's needed for specific administrative tasks. Giving the root user key
or credentials for daily tasks makes the account vulnerable.

---

## Question 746

**Answer:** **AC**

**Explanation:**

The optimal solution for minimizing latency between EC2 instances processing streaming data in near realtime necessitates reducing network hops and maximizing network throughput.

**Option A**, enabling and configuring enhanced networking, is crucial. Enhanced networking utilizes Single Root
I/O Virtualization (SR-IOV) to provide high performance networking capabilities on supported EC2 instance
types. This bypasses the virtual switch layer, enabling lower latency, lower jitter, and higher packets per
second (PPS) performance. By leveraging SR-IOV, data transmission between instances benefits from a more
direct path, minimizing delays. [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhancednetworking.html]

**Option C**, running the EC2 instances in a cluster placement group, is also vital. A cluster placement group
places instances within a single Availability Zone, grouping them as close as possible to each other. This
proximity reduces network latency because traffic doesn't have to traverse across different zones, thereby
providing high network throughput. This minimizes the physical distance and network hops, crucial for lowlatency communication. [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html]

**Option B** is incorrect as separating instances into different accounts introduces greater network overhead and
likely increases latency due to cross-account communication complexities. **Option D**, attaching multiple ENIs,
doesn't inherently lower latency; it primarily increases network bandwidth and provides redundancy, and the
increased complexity can sometimes introduce latency. **Option E**, using EBS-optimized instance types,
optimizes the throughput between the EC2 instance and EBS volumes, impacting storage I/O performance,
not network latency between instances. Therefore, only A and C directly address the low latency requirement.

---

## Question 747

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, considering the requirements of a financial
services company migrating a large amount of unstructured data with complex directory structure from SMBbased file storage to AWS, while minimizing operational overhead and application changes:

**Option C**, using AWS DataSync to migrate the data to Amazon FSx for Windows File Server, is the most
suitable choice for several key reasons. The company's reliance on SMB-based storage types points towards
Windows-centric applications and workflows. Amazon FSx for Windows File Server provides a fully managed,
native Windows file system compatible with the SMB protocol. This compatibility allows the company to
migrate its data without needing to refactor existing applications, as they can continue to access files using
the same SMB paths. AWS DataSync is designed to efficiently move large datasets between on-premises
storage and AWS storage services. It optimizes data transfer using features like parallel data streams, intransit encryption, and automatic handling of file metadata. This helps to accelerate the migration process
and ensures data integrity.

**Option A**, using AWS Direct Connect to migrate data to Amazon S3, requires application changes. S3 is an
object storage service, which doesn't directly support the hierarchical file system structure that the company
currently utilizes. Adapting applications to use the S3 API would involve significant development effort and
operational overhead.

**Option B**, using AWS DataSync to migrate the data to Amazon FSx for Lustre, isn't the best fit because FSx
for Lustre is optimized for high-performance computing and doesn't offer native SMB protocol support. While
it could handle large datasets, it would likely require application changes to interact with Lustre's parallel file
system.

**Option D**, using AWS Direct Connect to migrate the on-premises file storage to an AWS Storage Gateway
volume gateway, introduces operational overhead related to managing the Storage Gateway appliance or VM
and the underlying storage it fronts. Furthermore, it doesn't inherently solve the application compatibility
issue as it mostly provides block-level storage.

In summary, option C provides the best balance between ease of migration (DataSync), application
compatibility (FSx for Windows File Server's SMB support), and minimizing operational overhead through a
fully managed AWS service. FSx for Windows File Server addresses the key requirements of maintaining the
existing file structure and application compatibility.

---

## Question 748

**Answer:** **A**

**Explanation:**

The correct answer is A because it leverages the built-in, purpose-built features of CloudWatch cross-account
observability, designed specifically for centralizing monitoring data across multiple AWS accounts within an
organization.

Here's a detailed justification:

1. CloudWatch Cross-Account Observability: AWS provides a feature called "CloudWatch crossaccount observability" that allows you to monitor and troubleshoot applications across multiple AWS
accounts from a central monitoring account. This feature eliminates the need to manually configure
complex IAM roles and policies in each account.
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-CrossAccount.html

2. Monitoring Account as Central Hub: The question explicitly states the desire for a dedicated
monitoring member account. CloudWatch cross-account observability is designed with this use case
in mind, allowing you to designate one account as the monitoring hub.

3. Simplified Data Sharing: To share data with the monitoring account, a CloudFormation template
provided by the monitoring account needs to be deployed in each source account. This template sets
up the necessary permissions and configurations for securely transmitting observability data to the
central monitoring account. This automation is essential for managing many accounts within an
organization.

4. Avoiding Complex IAM Management: **Option C** and D suggest creating IAM users and cross-account

roles/policies manually. This approach becomes increasingly complex and difficult to manage as the
number of accounts grows, contradicting the need for a scalable solution in a multi-account AWS
Organizations setup. **Option A** simplifies this by using pre-built CloudFormation templates.

5. SCPs Are Not Intended for Data Access: Service Control Policies (SCPs), as suggested in option B,
are primarily used to set guardrails and enforce policies at the organization level. While SCPs can
restrict actions, they are not designed for granting granular access to CloudWatch data within the
monitoring account. They operate at a higher level of abstraction, controlling which services and
actions are allowed, rather than facilitating data sharing.
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html

6. Scalability and Manageability: CloudWatch cross-account observability provides a scalable and
manageable solution for monitoring across multiple accounts. By utilizing CloudFormation templates,
the deployment and configuration process can be automated and easily replicated across all
accounts in the organization.
In conclusion, option A provides the most efficient and scalable solution for querying and visualizing
observability data across multiple AWS accounts by using Amazon CloudWatch, aligned with the design
principles of AWS Organizations and the intended use of CloudWatch cross-account observability. The other
options involve more manual configuration and less efficient use of AWS features.

---

## Question 749

**Answer:** **B**

**Explanation:**

The correct answer is B. Modify the configuration of AWS WAF to add an IP match condition to block the
malicious IP address. Here's a detailed justification:
AWS WAF (Web Application Firewall) is specifically designed to protect web applications from common web
exploits and bots. It operates at Layer 7 of the OSI model, allowing it to inspect HTTP/HTTPS traffic and apply
rules based on various criteria, including IP addresses.
Since the requirement is to block a specific malicious IP address, WAF provides the most suitable and direct
method. An IP match condition within WAF can be configured to block requests originating from that IP
address. This rule will be evaluated for every incoming request, preventing the malicious IP from reaching the
ALB and the EC2 instances. WAF is integrated directly with CloudFront, and protects CloudFront traffic.

**Option A** is incorrect because Network ACLs (NACLs) operate at Layer 3 and 4 of the OSI model and are

primarily designed for controlling network traffic at the subnet level. While NACLs can block IP addresses,
using them at the CloudFront distribution would be less efficient than using WAF, because WAF integrates
directly with CloudFront.

**Option C** is not optimal because modifying the NACL for the EC2 instances would require the traffic to
traverse CloudFront, the ALB, and then be blocked by the NACL. This approach wastes resources and does
not prevent the malicious traffic from reaching the ALB. This is also less efficient than blocking traffic at the
WAF level before it reaches those resources.

**Option D** is not the ideal approach, as security groups are instance-level firewalls that primarily control traffic
based on source and destination IP addresses, ports, and protocols. Modifying the security group would
require the malicious traffic to traverse CloudFront and the ALB. Again, this is also less efficient than blocking
traffic at the WAF level before it reaches those resources.
Here are some authoritative links for further research:
AWS WAF: https://aws.amazon.com/waf/
AWS WAF IP Address Condition: https://docs.aws.amazon.com/waf/latest/developerguide/waf-ipcondition.html
AWS Network ACLs: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html
AWS Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
Amazon CloudFront: https://aws.amazon.com/cloudfront/

---

## Question 750

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages AWS IAM Identity Center (successor to AWS Single Sign-On),
which is specifically designed for centralized management of access to multiple AWS accounts using an
existing identity provider (IdP). IAM Identity Center directly integrates with popular IdPs like Okta, Azure AD,
and Ping Identity, enabling users to authenticate using their existing credentials. After successful
authentication with the IdP, IAM Identity Center provides users with temporary AWS credentials, allowing
them to access the AWS accounts and resources assigned to them based on predefined permissions.

**Option A** is incorrect because creating individual IAM users in each of the 10 AWS accounts for thousands of
employees would be incredibly cumbersome and difficult to manage. While IAM federation is possible, it
doesn't provide the centralized management and single sign-on capabilities needed for this scenario.
Manually synchronizing thousands of users across multiple accounts is also prone to errors.

**Option B** is incorrect and a highly discouraged practice. AWS account root users should never be used for
everyday access. Sharing root user credentials or synchronizing them with an IdP is a significant security risk,
as the root user has unrestricted access to the entire AWS account.

**Option D** is incorrect because AWS Resource Access Manager (RAM) is designed for sharing AWS resources
(like VPCs, subnets, and transit gateways) between AWS accounts, not for managing user access across
multiple accounts. RAM doesn't handle authentication or integration with external identity providers. It only
allows you to grant resource-level permissions to accounts.

Therefore, using IAM Identity Center to connect to the existing IdP is the most efficient, secure, and scalable
solution for managing access to multiple AWS accounts for a large number of employees using their existing
credentials. It simplifies user management, improves security, and provides a better user experience.
Supporting links:
AWS IAM Identity Center (successor to AWS Single Sign-On)
AWS Organizations
Identity Providers and Federation

---

# Quick Answer Sheet

Question 701: C
Question 702: D
Question 703: B
Question 704: C
Question 705: AD
Question 706: B
Question 707: B
Question 708: C
Question 709: BE
Question 710: A
Question 711: C
Question 712: A
Question 713: B
Question 714: B
Question 715: A
Question 716: A
Question 717: D
Question 718: C
Question 719: C
Question 720: C
Question 721: C
Question 722: A
Question 723: A
Question 724: B
Question 725: B
Question 726: D
Question 727: C
Question 728: C
Question 729: B
Question 730: A
Question 731: C
Question 732: B
Question 733: B
Question 734: D
Question 735: A
Question 736: B
Question 737: CE
Question 738: B
Question 739: A
Question 740: A
Question 741: A
Question 742: A
Question 743: D
Question 744: C
Question 745: B
Question 746: AC
Question 747: C
Question 748: A
Question 749: B
Question 750: C
