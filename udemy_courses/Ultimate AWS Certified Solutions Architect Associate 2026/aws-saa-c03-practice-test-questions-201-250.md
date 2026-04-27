# AWS SAA-C03 Practice Test: Questions 201-250

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 201

A company is developing a marketing communications service that targets mobile app users. The company needs
to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to
the SMS messages. The company must store the responses for a year for analysis.
What should a solutions architect do to meet these requirements?

**A.** Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the
responses.

**B.** Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data
stream for analysis and archiving.

**C.** Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to
process the responses.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data

stream to the SNS topic for analysis and archiving.

---

## Question 202

A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in
the S3 bucket. Additionally, the encryption key must be automatically rotated every year.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-

S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.

**B.** Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation.
Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the
S3 bucket.

**C.** Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default
encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate
the KMS key every year.

**D.** Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key
Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key.
Enable automatic key rotation.

---

## Question 203

The customers of a finance company request appointments with financial advisors by sending text messages. A
web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are
published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another
application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages
to the customers. After successful scheduling, this application stores the meeting information in an Amazon
DynamoDB database.
As the company expands, customers report that their meeting invitations are taking longer to arrive.
What should a solutions architect recommend to resolve this issue?

**A.** Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.

**B.** Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.

**C.** Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment
requests.

**D.** Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling
group to scale based on the depth of the SQS queue.

---

## Question 204

An online retail company has more than 50 million active customers and receives more than 25,000 orders each
day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer
data is stored in Amazon RDS.
The company wants to make all the data available to various teams so that the teams can perform analytics. The
solution must provide the ability to manage fine-grained permissions for the data and must minimize operational
overhead.
Which solution will meet these requirements?

**A.** Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.

**B.** Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an
AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.

**C.** Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS.
Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.

**D.** Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from
Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.

---

## Question 205

A company hosts a marketing website in an on-premises data center. The website consists of static documents and
runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to
upload new documents.
The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions
architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and
resilient architecture for website hosting to serve as the CloudFront origin.
Which solution will meet these requirements?

**A.** Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload
website content by using an SFTP client.

**B.** Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload
website content by using an SFTP client.

**C.** Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access
identity (OAI). Upload website content by using the AWS CLI.

**D.** Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website
hosting. Upload website content by using the SFTP client.

---

## Question 206

A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same
AWS Region where the AMIs were created. The company needs to design an application that captures AWS API
calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s
account.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API
call is detected.

**B.** Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that
occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on
CreateImage when an API call is detected.

**C.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure
the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage
API call is detected.

**D.** Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs.
Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic
when a CreateImage API call is detected.

---

## Question 207

A company owns an asynchronous API that is used to ingest user requests and, based on the request type,
dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to
deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests
before dispatching them to the processing microservices.
The company provisioned as much DynamoDB throughput as its budget allows, but the company is still
experiencing availability issues and is losing user requests.
What should a solutions architect do to address this issue without impacting existing users?

**A.** Add throttling on the API Gateway with server-side throttling limits.

**B.** Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.

**C.** Create a secondary index in DynamoDB for the table with the user requests.

**D.** Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.

---

## Question 208

A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure
that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to
upload data to the S3 bucket.
Which solution will meet these requirements?

**A.** Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a
resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

**B.** Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located.
Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the
EC2 instance’s IAM role for access.

**C.** Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s
service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3
bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

**D.** Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3
bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to

the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

---

## Question 209

A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The
application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability
Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer
(ALB) will handle the load distribution. The architecture needs to support distributed session data management.
The company is willing to make changes to code if needed.
What should the solutions architect do to ensure that the architecture supports distributed session data
management?

**A.** Use Amazon ElastiCache to manage and store session data.

**B.** Use session affinity (sticky sessions) of the ALB to manage session data.

**C.** Use Session Manager from AWS Systems Manager to manage the session.

**D.** Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.

---

## Question 210

A company offers a food delivery service that is growing rapidly. Because of the growth, the company’s order
processing system is experiencing scaling problems during peak traffic hours. The current architecture includes
the following:
• A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the
application
• Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders
The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be
lost because of a scaling event.
A solutions architect must ensure that the order collection process and the order fulfillment process can both
scale properly during peak traffic hours. The solution must optimize utilization of the company’s AWS resources.
Which solution meets these requirements?

**A.** Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure
each Auto Scaling group’s minimum capacity according to peak workload values.

**B.** Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure
a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates
additional Auto Scaling groups on demand.

**C.** Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for
order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups
based on notifications that the queues send.

**D.** Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for
order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a
backlog per instance calculation. Scale the Auto Scaling groups based on this metric.

---

## Question 211

A company hosts multiple production applications. One of the applications consists of resources from Amazon
EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue
Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of
“application” and a value that corresponds to each application. A solutions architect must provide the quickest
solution for identifying all of the tagged components.
Which solution meets these requirements?

**A.** Use AWS CloudTrail to generate a list of resources with the application tag.

**B.** Use the AWS CLI to query each service across all Regions to report the tagged components.

**C.** Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.

**D.** Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the
application tag.

---

## Question 212

A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object
size varies between 2 GB and 5 GB. The S3 access pattern for the data is variable and changes rapidly. The data
must be immediately available and must remain accessible for up to 3 months. The company needs the most costeffective solution that will not increase retrieval time.
Which S3 storage class should the company use to meet these requirements?

**A.** S3 Intelligent-Tiering

**B.** S3 Glacier Instant Retrieval

**C.** S3 Standard

**D.** S3 Standard-Infrequent Access (S3 Standard-IA)

---

## Question 213

A company is developing a new mobile app. The company must implement proper traffic filtering to protect its
Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL
injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of
the responsibility in managing, updating, and securing servers for its AWS environment.
What should a solutions architect recommend to meet these requirements?

**A.** Configure AWS WAF rules and associate them with the ALB.

**B.** Deploy the application using Amazon S3 with public hosting enabled.

**C.** Deploy AWS Shield Advanced and add the ALB as a protected resource.

**D.** Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then
passes the traffic to the current ALB.

---

## Question 214

A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company
must convert these files to Apache Parquet format and must store the files in a transformed data bucket.
Which solution will meet these requirements with the LEAST development effort?

**A.** Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data.
Use EMR File System (EMRFS) to write files to the transformed data bucket.

**B.** Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job
to transform the data. Specify the transformed data bucket in the output step.

**C.** Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the
transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.

**D.** Create an AWS Lambda function to transform the data and output the data to the transformed data bucket.
Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event
notification.

---

## Question 215

A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup
data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has
decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month.
The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer.
What should a solutions architect do to migrate and store the data at the LOWEST cost?

**A.** Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3
Glacier Deep Archive.

**B.** Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from
on premises to Amazon S3 Glacier.

**C.** Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle
policy to transition the files to Amazon S3 Glacier Deep Archive.

**D.** Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to
copy files from the on-premises NAS storage to Amazon S3 Glacier.

---

## Question 216

A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3
bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket
before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all
objects that are added to the S3 bucket in the future.
Which solution will meet these requirements with the LEAST amount of effort?

**A.** Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all
existing objects to temporary local storage. Upload the objects to the new S3 bucket.

**B.** Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file
that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt
those objects.

**C.** Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on
the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on
versioning for the S3 bucket.

**D.** Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket’s objects. Sort by the
encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to
every unencrypted object in the S3 bucket.

---

## Question 217

A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The
application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can
tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when
the primary infrastructure is healthy.
What should a solutions architect do to meet these requirements?

**A.** Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure
active-passive failover. Create an Aurora Replica in a second AWS Region.

**B.** Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to
configure active-active failover. Create an Aurora Replica in the second Region.

**C.** Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure activeactive failover. Create an Aurora database that is restored from the latest snapshot.

**D.** Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS
Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in
the second Region.

---

## Question 218

A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The
default security group is assigned to the EC2 instance. The default network ACL has been modified to block all
traffic. A solutions architect needs to make the web server accessible from everywhere on port 443.
Which combination of steps will accomplish this task? (Choose two.)

**A.** Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0.

**B.** Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.

**C.** Update the network ACL to allow TCP port 443 from source 0.0.0.0/0.

**D.** Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination
0.0.0.0/0.

**E.** Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 3276865535 to destination 0.0.0.0/0.

---

## Question 219

A company’s application is having performance issues. The application is stateful and needs to complete inmemory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and
used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting
delays when the users attempt to access the application.
Which solution will resolve these issues in the MOST operationally efficient way?

**A.** Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by
using the AWS Management Console.

**B.** Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the
desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.

**C.** Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon
CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.

**D.** Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the
Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future
capacity planning.

---

## Question 220

A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The
volume of requests is highly variable; several hours can pass without receiving a single request. The data
processing will take place asynchronously, but should be completed within a few seconds after a request is made.
Which compute service should the solutions architect have the API invoke to deliver the requirements at the
lowest cost?

**A.** An AWS Glue job

**B.** An AWS Lambda function

**C.** A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)

**D.** A containerized service hosted in Amazon ECS with Amazon EC2

---

## Question 221

A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company
must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able
to access all the files concurrently.
Which storage solution meets these requirements MOST cost-effectively?

**A.** Amazon Elastic Block Store (Amazon EBS)

**B.** Amazon Elastic File System (Amazon EFS)

**C.** Amazon EC2 instance store

**D.** Amazon S3

---

## Question 222

A company has hired an external vendor to perform work in the company’s AWS account. The vendor uses an
automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to
the company’s AWS account.
How should a solutions architect grant this access to the vendor?

**A.** Create an IAM role in the company’s account to delegate access to the vendor’s IAM role. Attach the
appropriate IAM policies to the role for the permissions that the vendor requires.

**B.** Create an IAM user in the company’s account with a password that meets the password complexity
requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.

**C.** Create an IAM group in the company’s account. Add the tool’s IAM user from the vendor account to the
group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.

**D.** Create a new identity provider by choosing “AWS account” as the provider type in the IAM console. Supply
the vendor’s AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the
permissions that the vendor requires.

---

## Question 223

A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service
(Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions
architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the
internet.
Which combination of steps should the solutions architect take to accomplish this goal? (Choose two.)

**A.** Attach an IAM role that has sufficient privileges to the EKS pod.

**B.** Attach an IAM user that has sufficient privileges to the EKS pod.

**C.** Allow outbound connectivity to the DynamoDB table through the private subnets’ network ACLs.

**D.** Create a VPC endpoint for DynamoDB.

**E.** Embed the access keys in the Java Spring Boot code.

---

## Question 224

A company recently migrated its web application to AWS by rehosting the application on Amazon EC2 instances in
a single AWS Region. The company wants to redesign its application architecture to be highly available and fault
tolerant. Traffic must reach all running EC2 instances randomly.
Which combination of steps should the company take to meet these requirements? (Choose two.)

**A.** Create an Amazon Route 53 failover routing policy.

**B.** Create an Amazon Route 53 weighted routing policy.

**C.** Create an Amazon Route 53 multivalue answer routing policy.

**D.** Launch three EC2 instances: two instances in one Availability Zone and one instance in another Availability
Zone.

**E.** Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability
Zone.

---

## Question 225

A media company collects and analyzes user activity data on premises. The company wants to migrate this
capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company
needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and
new data with SQL.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon
S3 bucket.

**B.** Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the
data to an Amazon Redshift cluster.

**C.** Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the
data as the data arrives in the S3 bucket.

**D.** Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones.
Configure the service to forward data to an Amazon RDS Multi-AZ database.

---

## Question 226

A company collects data from thousands of remote devices by using a RESTful web services application that runs
on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the
data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company
needs a highly scalable solution that minimizes operational overhead.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Use AWS Glue to process the raw data in Amazon S3.

**B.** Use Amazon Route 53 to route traffic to different EC2 instances.

**C.** Add more EC2 instances to accommodate the increasing amount of incoming data.

**D.** Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.

**E.** Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis
Data Firehose to use the data stream as a source to deliver the data to Amazon S3.

---

## Question 227

A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set
of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is
configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years.
After the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has
continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained
consistent.
Which solution will delete objects that are older than 3 years in the MOST cost-effective manner?

**A.** Configure the organization’s centralized CloudTrail trail to expire objects after 3 years.

**B.** Configure the S3 Lifecycle policy to delete previous versions as well as current versions.

**C.** Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3
years.

**D.** Configure the parent account as the owner of all objects that are delivered to the S3 bucket.

---

## Question 228

A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an
Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API
fluctuates. During periods of heavy traffic, the API often returns timeout errors.
After an inspection of the logs, the company determines that the database is not capable of processing the volume
of write traffic that comes from the API. A solutions architect must minimize the number of connections to the
database and must ensure that data is not lost during periods of heavy traffic.
Which solution will meet these requirements?

**A.** Increase the size of the DB instance to an instance type that has more available memory.

**B.** Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS DB
instances.

**C.** Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an
AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.

**D.** Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an
AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.

---

## Question 229

A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually
managing replication and scaling as demand increases or decreases. The company needs a new solution that
simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution
also must offer improved performance, scaling, and durability with minimal effort from operations.
Which solution meets these requirements?

**A.** Migrate the databases to Amazon Aurora Serverless for Aurora MySQL.

**B.** Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.

**C.** Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.

**D.** Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new
environment.

---

## Question 230

A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the
company’s application. A solutions architect wants to implement a solution that is highly available, fault tolerant,
and automatically scalable.
What should the solutions architect recommend?

**A.** Remove the two NAT instances and replace them with two NAT gateways in the same Availability Zone.

**B.** Use Auto Scaling groups with Network Load Balancers for the NAT instances in different Availability Zones.

**C.** Remove the two NAT instances and replace them with two NAT gateways in different Availability Zones.

**D.** Replace the two NAT instances with Spot Instances in different Availability Zones and deploy a Network
Load Balancer.

---

## Question 231

An application runs on an Amazon EC2 instance that has an Elastic IP address in VPC A. The application requires
access to a database in VPC B. Both VPCs are in the same AWS account.
Which solution will provide the required access MOST securely?

**A.** Create a DB instance security group that allows all traffic from the public IP address of the application
server in VPC A.

**B.** Configure a VPC peering connection between VPC A and VPC B.

**C.** Make the DB instance publicly accessible. Assign a public IP address to the DB instance.

**D.** Launch an EC2 instance with an Elastic IP address into VPC B. Proxy all requests through the new EC2
instance.

---

## Question 232

A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is
isolated in its own VPC. The company’s operations team needs to be notified when RDP or SSH access to an
environment has been established.
A.Configure Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or
SSH access is detected.
B.Configure the EC2 instances with an IAM instance profile that has an IAM role with the
AmazonSSMManagedInstanceCore policy attached.
C.Publish VPC flow logs to Amazon CloudWatch Logs. Create required metric filters. Create an Amazon
CloudWatch metric alarm with a notification action for when the alarm is in the ALARM state.
D.Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification.
Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations
team to the topic.

---

## Question 233

A solutions architect has created a new AWS account and must secure AWS account root user access.
Which combination of actions will accomplish this? (Choose two.)

**A.** Ensure the root user uses a strong password.

**B.** Enable multi-factor authentication to the root user.

**C.** Store root user access keys in an encrypted Amazon S3 bucket.

**D.** Add the root user to a group containing administrative permissions.

**E.** Apply the required permissions to the root user with an inline policy document.

---

## Question 234

A company is building a new web-based customer relationship management application. The application will use
several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an
Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the
application must be encrypted at rest and in transit.
Which solution will meet these requirements?

**A.** Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS
Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.

**B.** Use the AWS root account to log in to the AWS Management Console. Upload the company’s encryption
certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit
for the account.

**C.** Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at
rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit.

**D.** Use BitLocker to encrypt all data at rest. Import the company’s TLS certificate keys to AWS Key
Management Service (AWS KMS) Attach the KMS keys to the ALB to encrypt data in transit.

---

## Question 235

A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several
applications that write to the same tables. The applications need to be migrated one by one with a month in
between each migration. Management has expressed concerns that the database has a high number of reads and
writes. The data must be kept in sync across both databases throughout the migration.
What should a solutions architect recommend?

**A.** Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a
change data capture (CDC) replication task and a table mapping to select all tables.

**B.** Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full
load plus change data capture (CDC) replication task and a table mapping to select all tables.

**C.** Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a memory
optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table
mapping to select all tables.

**D.** Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute
optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table
mapping to select the largest tables.

---

## Question 236

A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the
front-end layer, another EC2 instance for the application layer, and a third EC2 instance for a MySQL database. A
solutions architect must design a scalable and highly available solution that requires the least amount of change
to the application.
Which solution meets these requirements?

**A.** Use Amazon S3 to host the front-end layer. Use AWS Lambda functions for the application layer. Move the
database to an Amazon DynamoDB table. Use Amazon S3 to store and serve users’ images.

**B.** Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application
layer. Move the database to an Amazon RDS DB instance with multiple read replicas to serve users’ images.

**C.** Use Amazon S3 to host the front-end layer. Use a fleet of EC2 instances in an Auto Scaling group for the
application layer. Move the database to a memory optimized instance type to store and serve users’ images.

**D.** Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application
layer. Move the database to an Amazon RDS Multi-AZ DB instance. Use Amazon S3 to store and serve users’
images.

---

## Question 237

An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPCB. Both VPCs are in separate AWS accounts. The network administrator needs to design a solution to configure
secure access to EC2 instance in VPC-B from VPC-A. The connectivity should not have a single point of failure or
bandwidth concerns.
Which solution will meet these requirements?

**A.** Set up a VPC peering connection between VPC-A and VPC-B.

**B.** Set up VPC gateway endpoints for the EC2 instance running in VPC-B.

**C.** Attach a virtual private gateway to VPC-B and set up routing from VPC-A.

**D.** Create a private virtual interface (VIF) for the EC2 instance running in VPC-B and add appropriate routes
from VPC-A.

---

## Question 238

A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be
notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each
account.
What should a solutions architect do to meet this requirement MOST cost-effectively?

**A.** Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure
Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is
exceeded.

**B.** Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances.
Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold
is exceeded.

**C.** Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2
instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon
SNS) topic to receive a notification when a threshold is exceeded.

**D.** Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with
Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple
Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.

---

## Question 239

A solutions architect needs to design a new microservice for a company’s application. Clients must be able to call
an HTTPS endpoint to reach the microservice. The microservice also must use AWS Identity and Access
Management (IAM) to authenticate calls. The solutions architect will write the logic for this microservice by using a
single AWS Lambda function that is written in Go 1.x.
Which solution will deploy the function in the MOST operationally efficient way?

**A.** Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM
authentication on the API.

**B.** Create a Lambda function URL for the function. Specify AWS_IAM as the authentication type.

**C.** Create an Amazon CloudFront distribution. Deploy the function to [email protected] Integrate IAM
authentication logic into the [email protected] function.

**D.** Create an Amazon CloudFront distribution. Deploy the function to CloudFront Functions. Specify AWS_IAM
as the authentication type.

---

## Question 240

A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect
connection. Corporate office users query the data warehouse using a visualization tool. The average size of a query
returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500
KB. Result sets returned by the data warehouse are not cached.
Which solution provides the LOWEST data transfer egress cost for the company?

**A.** Host the visualization tool on premises and query the data warehouse directly over the internet.

**B.** Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet.

**C.** Host the visualization tool on premises and query the data warehouse directly over a Direct Connect
connection at a location in the same AWS Region.

**D.** Host the visualization tool in the same AWS Region as the data warehouse and access it over a Direct
Connect connection at a location in the same Region.

---

## Question 241

An online learning company is migrating to the AWS Cloud. The company maintains its student records in a
PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS
Regions at all times.
Which solution will meet these requirements with the LEAST amount of operational overhead?

**A.** Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances.

**B.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature
turned on.

**C.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in
another Region.

**D.** Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to
be copied to another Region.

---

## Question 242

A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP
addresses of all healthy EC2 instances be returned in response to DNS queries.
Which policy should be used to meet this requirement?

**A.** Simple routing policy

**B.** Latency routing policy

**C.** Multivalue routing policy

**D.** Geolocation routing policy

---

## Question 243

A medical research lab produces data that is related to a new study. The lab wants to make the data available with
minimum latency to clinics across the country for their on-premises, file-based applications. The data files are
stored in an Amazon S3 bucket that has read-only permissions for each clinic.
What should a solutions architect recommend to meet these requirements?

**A.** Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic

**B.** Migrate the files to each clinic’s on-premises applications by using AWS DataSync for processing.

**C.** Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic.

**D.** Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic’s on-premises servers.

---

## Question 244

A company is using a content management system that runs on a single Amazon EC2 instance. The EC2 instance
contains both the web server and the database software. The company must make its website platform highly
available and must enable the website to scale to meet user demand.
What should a solutions architect recommend to meet these requirements?

**A.** Move the database to Amazon RDS, and enable automatic backups. Manually launch another EC2 instance in
the same Availability Zone. Configure an Application Load Balancer in the Availability Zone, and set the two
instances as targets.

**B.** Migrate the database to an Amazon Aurora instance with a read replica in the same Availability Zone as the
existing EC2 instance. Manually launch another EC2 instance in the same Availability Zone. Configure an
Application Load Balancer, and set the two EC2 instances as targets.

**C.** Move the database to Amazon Aurora with a read replica in another Availability Zone. Create an Amazon
Machine Image (AMI) from the EC2 instance. Configure an Application Load Balancer in two Availability Zones.
Attach an Auto Scaling group that uses the AMI across two Availability Zones.

**D.** Move the database to a separate EC2 instance, and schedule backups to Amazon S3. Create an Amazon
Machine Image (AMI) from the original EC2 instance. Configure an Application Load Balancer in two Availability
Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.

---

## Question 245

A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct
traffic to at least two Amazon EC2 instances in a single target group. The instances are in an Auto Scaling group
for each environment. The company requires a development environment and a production environment. The
production environment will have periods of high traffic.
Which solution will configure the development environment MOST cost-effectively?

**A.** Reconfigure the target group in the development environment to have only one EC2 instance as a target.

**B.** Change the ALB balancing algorithm to least outstanding requests.

**C.** Reduce the size of the EC2 instances in both environments.

**D.** Reduce the maximum number of EC2 instances in the development environment’s Auto Scaling group.

---

## Question 246

A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are
in private subnets. A solutions architect implements an internet-facing Application Load Balancer (ALB) and
specifies the EC2 instances as the target group. However, the internet traffic is not reaching the EC2 instances.
How should the solutions architect reconfigure the architecture to resolve this issue?

**A.** Replace the ALB with a Network Load Balancer. Configure a NAT gateway in a public subnet to allow
internet traffic.

**B.** Move the EC2 instances to public subnets. Add a rule to the EC2 instances’ security groups to allow
outbound traffic to 0.0.0.0/0.

**C.** Update the route tables for the EC2 instances’ subnets to send 0.0.0.0/0 traffic through the internet gateway
route. Add a rule to the EC2 instances’ security groups to allow outbound traffic to 0.0.0.0/0.

**D.** Create public subnets in each Availability Zone. Associate the public subnets with the ALB. Update the route
tables for the public subnets with a route to the private subnets.

---

## Question 247

A company has deployed a database in Amazon RDS for MySQL. Due to increased transactions, the database
support team is reporting slow reads against the DB instance and recommends adding a read replica.
Which combination of actions should a solutions architect take before implementing this change? (Choose two.)

**A.** Enable binlog replication on the RDS primary node.

**B.** Choose a failover priority for the source DB instance.

**C.** Allow long-running transactions to complete on the source DB instance.

**D.** Create a global table and specify the AWS Regions where the table will be available.

**E.** Enable automatic backups on the source instance by setting the backup retention period to a value other
than 0.

---

## Question 248

A company runs analytics software on Amazon EC2 instances. The software accepts job requests from users to
process data that has been uploaded to Amazon S3. Users report that some submitted data is not being processed
Amazon CloudWatch reveals that the EC2 instances have a consistent CPU utilization at or near 100%. The
company wants to improve system performance and scale the system based on user load.
What should a solutions architect do to meet these requirements?

**A.** Create a copy of the instance. Place all instances behind an Application Load Balancer.

**B.** Create an S3 VPC endpoint for Amazon S3. Update the software to reference the endpoint.

**C.** Stop the EC2 instances. Modify the instance type to one with a more powerful CPU and more memory.
Restart the instances.

**D.** Route incoming requests to Amazon Simple Queue Service (Amazon SQS). Configure an EC2 Auto Scaling
group based on queue size. Update the software to read from the queue.

---

## Question 249

A company is implementing a shared storage solution for a media application that is hosted in the AWS Cloud. The
company needs the ability to use SMB clients to access data. The solution must be fully managed.
Which AWS solution meets these requirements?

**A.** Create an AWS Storage Gateway volume gateway. Create a file share that uses the required client protocol.
Connect the application server to the file share.

**B.** Create an AWS Storage Gateway tape gateway. Configure tapes to use Amazon S3. Connect the application
server to the tape gateway.

**C.** Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance.
Connect the application server to the file share.

**D.** Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server.
Connect the application server to the file system.

---

## Question 250

A company’s security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently
accessed for 90 days and then accessed intermittently.
What should a solutions architect do to meet these requirements when configuring the logs?

**A.** Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days

**B.** Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.

**C.** Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3
Intelligent-Tiering.

**D.** Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent
Access (S3 Standard-IA) after 90 days.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 201

**Answer:** **B**

**Explanation:**

The correct answer is B: Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an
Amazon Kinesis data stream for analysis and archiving.

Here's why:
Amazon Pinpoint: Pinpoint is specifically designed for marketing communication and user engagement,
making it the ideal choice for sending SMS confirmation messages to mobile app users. It provides features
for creating targeted campaigns and journeys.
SMS Capabilities: Pinpoint supports two-way SMS messaging, allowing users to reply to the confirmation
messages. It handles the complexities of sending and receiving SMS at scale.
Event Streaming: Pinpoint integrates with Amazon Kinesis Data Streams. This integration is crucial for
capturing and analyzing user responses to the SMS messages. The event data stream will contain information
about delivered messages, user replies, and other relevant events.
Data Analysis and Archiving: By streaming events to Kinesis Data Streams, the company can process,
analyze, and archive the data for a year as required. Kinesis Data Streams enables real-time data ingestion
and processing, allowing for timely analysis. The stream can then be connected to services like Amazon S3 for
long-term storage and archiving. Amazon Athena or Amazon Redshift can be used to query this data for
analysis.
Let's examine why other options are less suitable:
A (Amazon Connect): Amazon Connect is primarily a contact center solution for voice and chat. While it can
send SMS messages, it's not its core function and is not ideal for bulk marketing communications.
Furthermore, it is more complex to set up for the given scenario.
C (Amazon SQS): Amazon SQS is a queuing service for decoupling components. It's not designed for sending
SMS messages directly to users. While Lambda could be used to trigger SMS sends, this is not as streamlined
or feature-rich as using Pinpoint.
D (Amazon SNS): Amazon SNS is a notification service for pub/sub messaging. While SNS can send SMS, it's
primarily for one-way notifications, not for managing two-way communication and tracking responses. SNS
FIFO (First-In, First-Out) topics are useful for ordered message delivery, which is not a key requirement here.
Further, sending SMS via SNS and routing replies and data streams to SNS is not straightforward or optimal
as using Pinpoint.

---

## Question 202

**Answer:** **B**

**Explanation:**

The correct answer is B because it offers the simplest and most automated solution for encrypting data at
rest in S3 with automatic key rotation, minimizing operational overhead. Let's break down why:

**Option B** leverages AWS KMS customer managed keys with automatic key rotation. When you create a KMS
key, you can enable automatic key rotation, which automatically rotates the key every year. Setting the S3
bucket's default encryption to use this KMS key ensures that all new objects uploaded to the bucket are
automatically encrypted using the key. This eliminates the need for manual encryption or key management.

**Option A** uses SSE-S3. While SSE-S3 encrypts data, the key rotation behavior is managed by AWS and not
customizable. The exact details of their key rotation and control aren't exposed to the user, making it less
transparent and potentially not meeting a specific yearly rotation requirement.

**Option C** involves manual key rotation, which directly contradicts the requirement for "LEAST operational
overhead". Manual rotation introduces the risk of human error and requires active monitoring and intervention.

**Option D**, using customer-provided key material, adds significant complexity. It requires you to manage the
initial key material and import it into KMS. While automatic rotation is enabled, managing the initial key
material lifecycle and its secure import introduces unnecessary overhead compared to **Option B**, where KMS
generates and rotates the key automatically.

Therefore, **Option B** provides the best balance of security, automation, and minimal operational overhead. It
allows AWS KMS to handle key generation and rotation transparently while ensuring S3 data is encrypted at
rest.
Supporting Documentation:
AWS KMS Key Rotation: https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html
Protecting Data Using Server-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html

---

## Question 203

**Answer:** **D**

**Explanation:**

The correct answer is D. Add an Auto Scaling group for the application that sends meeting invitations.
Configure the Auto Scaling group to scale based on the depth of the SQS queue.

Here's why:
The problem is that meeting invitations are taking longer to arrive as the company expands. This suggests a
bottleneck in the application responsible for processing messages from the SQS queue and sending out
invitations. This application's capacity to handle the increasing workload is insufficient.

**Option D** directly addresses this bottleneck. By adding an Auto Scaling group for the application that sends
meeting invitations, the system can automatically scale the number of EC2 instances based on the depth of
the SQS queue (i.e., the number of messages waiting to be processed). When the queue depth increases (more
appointment requests), the Auto Scaling group launches more instances to process the messages
concurrently, reducing the processing time and ensuring faster delivery of meeting invitations. This aligns
with a queue-based load leveling pattern where SQS acts as a buffer and Auto Scaling adjusts the processing
capacity based on the backlog.
Here's why the other options are not the best fit:

**A.** Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database. DAX is an in-memory
cache for DynamoDB. While DAX can improve read performance for data stored in DynamoDB, the bottleneck
is in processing the messages from the queue and sending invitations, not necessarily in reading the meeting
information from DynamoDB. Therefore, DAX would not directly solve the problem of delayed invitations.

**B.** Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.
API Gateway is useful for managing and securing APIs, and could add rate limiting. But the problem is the
invitation delivery which occurs after the request is already handled by the web application. This does not
address the delay in sending invitations after appointment requests are placed in the SQS queue.

**C.** Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the
appointment requests. CloudFront is a content delivery network (CDN). It's designed to cache and deliver
static and dynamic content closer to users. It's not relevant to the problem of processing SQS messages and
sending invitations; the performance issue is in the backend processing, not in delivering the web application
itself.
In conclusion, scaling the processing capacity of the application that handles meeting invitations (option D) is
the most direct and effective solution to address the increasing delays in meeting invitation delivery as the
company expands. The SQS queue depth serves as a perfect metric to trigger scaling events, ensuring the
application can keep up with the growing demand.

---

## Question 204

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides a centralized, scalable, and secure solution for data analytics with
fine-grained access control, minimizing operational overhead using AWS Lake Formation. Here's a detailed
justification:
AWS Lake Formation for Data Lake: Lake Formation is designed for building, securing, and managing data
lakes. It centralizes data access management and simplifies the process of setting up a data lake.
https://aws.amazon.com/lake-formation/
AWS Glue for Data Catalog and ETL: AWS Glue is used to create a data catalog and extract, transform, and
load (ETL) data. In this solution, a Glue JDBC connection is used to access the data in Amazon RDS, and Glue
can catalog the data stored in S3. https://aws.amazon.com/glue/
Fine-grained Access Control: Lake Formation's primary benefit is its fine-grained access control. You can
define permissions at the table and column level, ensuring that different teams only access the data they
need. This meets the requirement of managing permissions for the data.
S3 Bucket Registration: Registering the S3 bucket in Lake Formation makes the purchase data accessible
and governed by the Lake Formation policies.
Scalability: This solution scales well for 50 million customers and 25,000 orders per day. S3 is highly scalable
for data storage, and Lake Formation manages access regardless of data size.
Minimizing Operational Overhead: Lake Formation automates many of the manual tasks associated with data
lake setup, security, and management. This reduces operational overhead compared to managing access
controls through S3 policies or RDS access controls manually.
Why other options are not ideal:

**A:** Migrating purchase data directly to RDS isn't scalable or cost-effective for analytics. RDS is designed for
transactional data and is not optimized for large-scale analytics.

**B:** Using S3 policies for access control is less granular and more complex to manage than Lake Formation,
especially for numerous teams and datasets. Furthermore, copying data from RDS periodically adds
operational overhead and introduces potential data consistency issues.

**D:** Amazon Redshift is a data warehouse, which might be suitable for complex analytics. However, periodically

copying large datasets from S3 and RDS to Redshift using Lambda incurs operational overhead, potential
data consistency issues, and more complex ETL processes. Redshift access controls also lack the finegrained control offered by Lake Formation.

---

## Question 205

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers the most cost-effective and resilient solution for hosting static
website content as a CloudFront origin. Here's a detailed justification:
Cost-Effectiveness: Amazon S3 offers a very low storage cost compared to virtual servers like Lightsail or
EC2. S3's pay-as-you-go pricing model for storage and data transfer is ideal for static content with infrequent
updates. Lightsail and EC2 incur costs even when the website isn't being heavily accessed.
Resilience: S3 provides high availability and durability due to its distributed nature across multiple
Availability Zones. This means that the website content is highly resilient to failures. EC2 instances, while they
can be made resilient with Auto Scaling, require more configuration and introduce more points of failure.
Security: Using a private S3 bucket with an Origin Access Identity (OAI) provides a secure way to restrict
direct access to the S3 bucket. CloudFront can then access the content through the OAI, while public access
is blocked. This prevents users from bypassing CloudFront and accessing the S3 bucket directly, enhancing
security and enabling control over caching.
Simplified Updates: The AWS CLI is a robust and scriptable tool for uploading content to S3. It provides a
streamlined and automated way to update the website content. Using SFTP, as suggested in other options,
increases the management overhead.

**Option A** (Lightsail): Lightsail, although simple, is not as cost-effective for static content hosting as S3. It also
involves more management of the virtual server.

**Option B** (EC2 with ALB): EC2 with an Application Load Balancer (ALB) is more complex and expensive for
serving static content. It is designed for dynamic applications and requires more configuration.

**Option D** (Public S3 with SFTP): Making the S3 bucket public would expose the website content directly,
bypassing the security benefits of CloudFront's OAI. Using AWS Transfer for SFTP is unnecessary, complex,
and not cost-effective for this scenario, and S3 website hosting feature is not recommended for production
workloads.

In summary, utilizing a private S3 bucket with an OAI for CloudFront provides a secure, resilient, cost-

effective and easier-to-manage solution for hosting static website content.

---

## Question 206

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, along with explanations of why the other
options are less suitable:
Justification for **Option C** (Amazon EventBridge rule with SNS target):
This solution offers the least operational overhead and is the most direct way to address the requirement.
Amazon EventBridge is a serverless event bus that makes it easy to connect applications with data from a
variety of sources.
Real-time Event Detection: EventBridge allows you to create rules that react to events happening in your
AWS environment in near real-time. You can define a rule that specifically triggers when the CreateImage API
call is made. This ensures immediate detection of the AMI creation.
Direct Integration with SNS: EventBridge can directly integrate with Amazon SNS (Simple Notification
Service). This eliminates the need for intermediate services or custom coding to handle the event processing
and notification. The EventBridge rule simply forwards the event data to the SNS topic.
Minimal Configuration: Setting up an EventBridge rule for the CreateImage event and configuring the SNS
target is relatively straightforward and requires minimal configuration.
Serverless Architecture: Both EventBridge and SNS are serverless services, so you don't need to manage any
underlying infrastructure, reducing operational overhead.
Scalability and Reliability: EventBridge and SNS are highly scalable and reliable AWS services, ensuring your
monitoring application can handle changes in API call volume.

Why other options are less suitable:

**Option A** (Lambda querying CloudTrail logs): While feasible, this introduces unnecessary complexity. The
Lambda function would need to poll CloudTrail logs, parse the logs, and search for CreateImage events. This is
less efficient than a push-based system like EventBridge and requires more coding and operational
maintenance. Additionally, CloudTrail logs have a delay, making the alerts potentially not as real-time.

**Option B** (CloudTrail with SNS and Athena): This option is overly complex. While CloudTrail can send
notifications on log updates to S3 and then trigger SNS, using Athena to query the logs adds significant
overhead. Athena is designed for analyzing large datasets and is not ideal for real-time event detection. The
setup and maintenance of the Athena table and queries would add unnecessary operational burden. The initial
CloudTrail SNS notification only indicates that a log file has been updated, not necessarily that a CreateImage
call has been made.

**Option D** (SQS FIFO with Lambda and SNS): This solution also introduces unnecessary complexity. While
SQS FIFO can ensure message order, it's not needed for this specific requirement. The Lambda function is still
required to poll the SQS queue and parse the CloudTrail logs for the CreateImage event. The use of SQS adds
an additional layer of infrastructure to manage and monitor, increasing operational overhead.

---

## Question 207

**Answer:** **D**

**Explanation:**

The correct answer is D. Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer
writes to DynamoDB.

Here's a detailed justification:
The problem states that the company is experiencing availability issues and losing user requests due to
DynamoDB being overwhelmed. This implies that the write throughput to DynamoDB is exceeding the
provisioned capacity, even though the company has provisioned as much as their budget allows.

**Option D** addresses this directly by introducing a queue (Amazon SQS) in between the Lambda function and

DynamoDB. When the Lambda function receives a request, instead of immediately writing to DynamoDB, it
places a message in the SQS queue. Another Lambda function (or the same one, configured differently) then
retrieves messages from the SQS queue and writes them to DynamoDB at a controlled rate.
Buffering: SQS acts as a buffer, absorbing bursts of traffic and smoothing out the write load to DynamoDB. If
DynamoDB becomes temporarily unavailable or throttles requests, the messages remain in the queue until
they can be successfully processed. This prevents the loss of user requests.
Asynchronous processing: The API can quickly return a success response after placing the message in the
queue, minimizing latency for the user. The actual DynamoDB write happens asynchronously.
Decoupling: SQS decouples the API and the DynamoDB write process. If DynamoDB is having issues, the API
can continue to accept requests without being directly affected.

**Option A** is incorrect because throttling at API Gateway only limits the number of incoming requests. It
doesn't address the underlying issue of DynamoDB being overwhelmed. While it prevents more requests from
hitting DynamoDB, it does so by rejecting user requests, which is undesirable as the problem statement
explicitly mentions avoiding impacting existing users.

**Option B** is incorrect because DAX is a read-through/write-through cache. While DAX can improve read
performance and reduce read load on DynamoDB, it doesn't inherently solve the problem of exceeding write
capacity. DAX sits in front of DynamoDB, so if the write capacity is exceeded, the bottleneck will still exist
when DAX needs to write to DynamoDB. Buffering writes is still necessary in this scenario, and DAX doesn't do
that.

**Option C** is incorrect because secondary indexes improve query performance for different access patterns.
They do not inherently solve throughput issues related to exceeding write capacity. They can even increase
the write load as indexes also need to be updated during writes.

Therefore, using SQS to buffer writes to DynamoDB is the most effective way to prevent data loss and
improve the application's availability without impacting existing users.
Here are some authoritative links for further research:
Amazon SQS: https://aws.amazon.com/sqs/
Amazon DynamoDB: https://aws.amazon.com/dynamodb/
Serverless Architectures with AWS Lambda: https://aws.amazon.com/serverless/
DynamoDB best practices: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bestpractices.html

---

## Question 208

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the correct answer, along with relevant cloud computing
concepts and supporting links:
The question emphasizes secure data transfer from an EC2 instance to S3 without using the public internet
and restricting access to only that EC2 instance. **Option A** directly addresses these requirements using
interface VPC endpoints and S3 bucket policies.
Here's why option A is correct:
Interface VPC Endpoint for S3: Interface endpoints use AWS PrivateLink to provide private connectivity to
S3. They expose S3 as a network interface within your VPC, allowing EC2 instances to access S3 without
traversing the public internet. Traffic stays within the AWS network. This fulfills the requirement to avoid
public internet routes.
AWS PrivateLink Documentation
Using S3 with VPC Endpoints
S3 Bucket Policy: The S3 bucket policy restricts access to the bucket. By allowing access only from the EC2
instance's IAM role, you prevent other resources or users from uploading data to the bucket, enforcing the
security requirement. The IAM role attached to the EC2 instance provides the necessary permissions to
upload the data via the private endpoint.
S3 Bucket Policies
Here's why the other options are incorrect:

**Option B** (Gateway VPC Endpoint): Gateway endpoints only support S3 and DynamoDB and, more
importantly, require modifications to the route tables. They don't provide as granular control as interface
endpoints and might not be suitable when needing to restrict access to a single EC2 instance based on its IAM
role via the endpoint. Gateway Endpoints operate on the principle of routing traffic destined for S3 (or
DynamoDB) through the gateway instead of the internet.
Options C and D (Using Public IP Ranges and Route Tables): These options are incorrect because they
involve mapping the EC2 instance directly to the IP addresses of the S3 service. While technically feasible,
this approach is highly discouraged for several reasons:
Reliance on Public IP Addresses: The approach relies on the public IP address of the S3 endpoint and routing
tables, which will use public internet routes, contradicting the requirement of not using the public internet.
Maintenance Overhead: IP addresses of AWS services can change, which would require constant monitoring
and updating of your routing tables.
Security Concerns: Bypassing AWS PrivateLink introduces potential security vulnerabilities.
AWS IP Address Ranges

In summary, option A provides the most secure and manageable solution by utilizing interface VPC endpoints
for private connectivity and S3 bucket policies for access control, fulfilling all the requirements outlined in
the question.

---

## Question 209

**Answer:** **A**

**Explanation:**

The correct answer is A: Use Amazon ElastiCache to manage and store session data. Here's why:
Distributed Session Management Requirement: The application scales across multiple Availability Zones.
Session data needs to be accessible regardless of which EC2 instance handles a user's request. Storing
session data locally on an EC2 instance would lead to inconsistencies and a poor user experience if a user is
routed to a different instance that doesn't have their session data.
ElastiCache as a Centralized Session Store: ElastiCache (specifically using Memcached or Redis) provides a
centralized, in-memory data store that can be accessed by all EC2 instances. This ensures session data is
consistent and available regardless of which instance handles the request. Changes to code are required to
serialize and store session data in ElastiCache and retrieve it upon subsequent requests.

Why other options are incorrect:

**B.** Session Affinity (Sticky Sessions): Sticky sessions route a user to the same EC2 instance for the duration
of their session. This violates the principle of scaling across Availability Zones effectively. If the instance the
user is stuck to fails, the session is lost. Also, it negates the benefit of load balancing, as some instances may
become overloaded if many users are "stuck" to them. While it simplifies session management initially, it
creates a single point of failure and hinders scaling.

**C.** Session Manager: Session Manager is a capability of AWS Systems Manager that allows you to manage
your EC2 instances through a browser-based interactive shell or through the AWS CLI. It is designed for
instance management, not session data management for web applications.

**D.** GetSessionToken API operation in AWS STS: STS GetSessionToken is used for creating temporary
security credentials for IAM users or roles. This is relevant to managing AWS access permissions, not for
managing web application session data.
Why ElastiCache is suitable: ElastiCache is designed for caching and session management. Redis offers
advanced features such as persistence and replication for improved reliability and availability. Memcached
offers simplicity and high performance for stateless session caching.

---

## Question 210

**Answer:** **D**

**Explanation:**

The correct answer is D because it addresses the scaling issues and resource optimization concerns
effectively.

Here's a detailed justification:
Queues for Decoupling: Using Amazon SQS queues for order collection and fulfillment decouples the two
processes. This prevents the slower fulfillment process from overwhelming the order collection process.
Decoupling allows each process to scale independently.
Reliable Message Storage: SQS guarantees that messages will be delivered, preventing data loss during
scaling events. If an instance goes down, messages remain in the queue until another instance processes
them.
Polling for Work Distribution: Configuring EC2 instances to poll their respective SQS queues allows them to
efficiently retrieve and process orders.
Backlog-Based Scaling: Creating a metric based on the "backlog per instance" is crucial for effective Auto
Scaling. This metric reflects the actual demand and helps the Auto Scaling groups to add or remove instances
only when needed, optimizing resource utilization. Scaling based on CPU utilization (as suggested in options A
and B) might not be as effective, as instances could be waiting for I/O or external dependencies.

**Option C** uses queue notifications which can trigger scaling events but the queue-based notifications are
usually not optimal to measure backlog compared to the "backlog per instance" mechanism. **Option A** does
not provide a way to scale automatically. **Option B** is suboptimal because SNS would just create additional
Auto Scaling Groups on demand, not individual instances to scale with load.

---

## Question 211

**Answer:** **D**

**Explanation:**

The correct answer is D because AWS Resource Groups Tag Editor is specifically designed for quickly and
centrally managing and querying tagged resources across multiple AWS services and Regions.

Here's a detailed justification:
Purpose-Built Tool: The AWS Resource Groups Tag Editor is a dedicated service for managing AWS resource
tags. Its primary function is to search for resources by tag across different services and Regions. This makes it
the most efficient tool for the described task.
Global Reach: It operates across multiple AWS Regions, allowing a single query to identify resources tagged
with "application" and their corresponding values, regardless of the Region they reside in.
Speed and Efficiency: Compared to other options, Tag Editor offers the fastest way to identify tagged
components as it is purpose-built for this type of search.
AWS CloudTrail (**Option A**): CloudTrail records API calls made to AWS services. While it logs resource
creation and modification events, it does not offer a direct or efficient way to query resources based on tags.
It's more focused on auditing and security.
AWS CLI (**Option B**): Using the AWS CLI would require writing scripts to iterate through each AWS service
and Region, querying resources and filtering by tag. This is a significantly more complex, time-consuming, and
less efficient solution than using Tag Editor.
Amazon CloudWatch Logs Insights (**Option C**): CloudWatch Logs Insights analyzes log data. Tagging
information is not typically directly available within CloudWatch logs unless specifically logged by an
application. Therefore, it is not suitable for identifying resources based on their tags.
In conclusion, AWS Resource Groups Tag Editor provides the quickest and most efficient solution for
identifying all tagged components across multiple AWS Regions, making it the ideal choice for the architect's
needs.
Supporting documentation:

AWS Resource Groups Tag Editor: https://docs.aws.amazon.com/awsconsole/latest/userguide/resourcegroups.html
Tagging AWS Resources: https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html

---

## Question 212

**Answer:** **A**

**Explanation:**

Here's a detailed justification for choosing S3 Intelligent-Tiering in this scenario:
The core requirement is cost-effectiveness without compromising immediate availability and accessibility for
up to 3 months, even with varying data access patterns.
S3 Standard: While offering immediate availability, it's generally more expensive for data that isn't frequently
accessed. Since the access patterns are variable, always storing in Standard might not be the most costeffective.
S3 Standard-IA (Infrequent Access): Cheaper storage than Standard, but has retrieval costs and is best for
data accessed less frequently. While some teams might access it less frequently, the variable and rapidly
changing access patterns make it less ideal than Intelligent-Tiering. It is optimized for data that is accessed
less frequently but requires rapid access when needed. Since access varies, you could end up paying more in
retrieval fees.
S3 Glacier Instant Retrieval: Designed for archival with millisecond retrieval times, it's cheaper than S3
Standard but more expensive for frequently accessed data than Standard-IA or Intelligent-Tiering and adds
retrieval cost.
S3 Intelligent-Tiering: This class automatically moves data between frequent, infrequent, and archive access
tiers based on usage patterns, without performance impact or operational overhead. It analyzes access
patterns and transitions objects to the most cost-effective tier automatically. Since the question states the
access pattern for the data is variable and changes rapidly, Intelligent-Tiering can dynamically move data to
cheaper tiers when it is accessed less frequently, and quickly revert to more expensive tiers when the data
access pattern changes, maximizing cost savings.

Therefore, S3 Intelligent-Tiering is the most suitable because it optimizes costs based on the unpredictable
access patterns, ensures immediate availability and accessibility, and handles the variable object sizes.

---

## Question 213

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure AWS WAF rules and associate them with the ALB.

Here's a detailed justification:
AWS WAF (Web Application Firewall) is specifically designed to protect web applications from common web
exploits and bots that can affect availability, compromise security, or consume excessive resources. It allows
you to define customizable web security rules that control which traffic to allow or block to your web
applications. By associating these rules with the ALB, you can filter malicious traffic attempting applicationlevel attacks like cross-site scripting (XSS) and SQL injection.
AWS WAF addresses the requirement of proper traffic filtering to protect against these specific attacks
mentioned in the scenario. The service is tightly integrated with the ALB, making configuration and
deployment relatively straightforward. Critically, AWS WAF is a managed service. This aligns perfectly with
the requirement to reduce the company's operational burden of managing, updating, and securing servers.
AWS handles the underlying infrastructure, patching, and scaling of WAF.

**Option B** is incorrect because Amazon S3 with public hosting is primarily for static content and doesn't
provide the necessary traffic filtering or protection against application-level attacks.

**Option C** is incorrect because AWS Shield Advanced provides DDoS protection, primarily against volumetric
attacks that target network and transport layers (Layers 3 & 4). While valuable for availability, it's not
designed for application-level (Layer 7) attack filtering like WAF. Shield Advanced is also more expensive and
likely overkill for the given requirements.

**Option D** is incorrect because creating a new ALB and EC2 instance running a third-party firewall increases
operational overhead and infrastructure management, directly contradicting the requirement to minimize this.
It also introduces unnecessary complexity. The company must then manage, patch, and scale the EC2
instance and the third-party firewall.

In summary, AWS WAF provides the necessary application-level security with minimal management overhead,
perfectly aligning with the company's requirements.

---

## Question 214

**Answer:** **B**

**Explanation:**

**Option B**, utilizing AWS Glue, is the most efficient solution because it's a fully managed ETL (Extract,
Transform, Load) service specifically designed for data transformation tasks like converting CSV files to
Parquet and moving them between S3 buckets. Glue crawlers automatically discover the schema of the CSV
files, eliminating the need for manual schema definition. The Glue ETL job simplifies the transformation
process, allowing you to write code (typically in Python or Scala) to convert the data to Parquet format and
write it to the desired S3 bucket. Glue handles the infrastructure management, scaling, and job orchestration,
minimizing operational overhead and development effort.

**Option A**, using Amazon EMR with Apache Spark, is a valid approach but involves significantly more
development and operational complexity. It requires setting up and managing an EMR cluster, writing and
deploying Spark applications, and configuring EMRFS for S3 access. While powerful, it's overkill for a simple
data transformation task.

**Option C**, employing AWS Batch with a Bash script, might work for small datasets, but it's not scalable or
efficient for handling hundreds of CSV files daily. Managing dependencies, error handling, and job
orchestration with Bash scripts becomes cumbersome quickly. Array jobs help with parallelization, but Glue
offers more sophisticated parallel processing capabilities out-of-the-box.

**Option D**, using an AWS Lambda function, is generally unsuitable for large file transformations. Lambda
functions have limitations on execution time and memory, making them impractical for processing hundreds
of CSV files daily. Lambda is better suited for smaller, event-driven tasks. Furthermore, S3 event notifications
could trigger numerous Lambda invocations, potentially leading to concurrency issues and increased costs.

Therefore, AWS Glue provides a purpose-built, managed service for data transformation, reducing
development effort and operational overhead compared to the other options, making it the best choice for this
scenario.
Supporting Documentation:
AWS Glue: https://aws.amazon.com/glue/
AWS Glue ETL Jobs: https://docs.aws.amazon.com/glue/latest/dg/etl-tutorial-etl.html
AWS Glue Crawlers: https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html

---

## Question 215

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:

**A.** Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon
S3 Glacier Deep Archive.
Data Transfer: With 700 TB of data and only 500 Mbps bandwidth, transferring data over the internet within
one month is practically impossible. Snowball Edge provides a physical way to quickly transfer large amounts
of data to AWS. Using a physical device bypasses the limitations of the network bandwidth, allowing the
company to meet the 1-month migration requirement.
Storage Cost: S3 Glacier Deep Archive is the lowest cost storage class, suitable for data that is infrequently
accessed but requires long-term retention. Since the data is for infrequent regulatory requests and needs to
be retained for 7 years, Glacier Deep Archive fits perfectly.
Lifecycle Policy: A lifecycle policy automates the transition of data from S3 Standard (or another S3 storage
class) to Glacier Deep Archive after the initial transfer, further reducing storage costs without manual
intervention.
Cost Optimization: This solution minimizes costs by using a bulk data transfer method (Snowball Edge) and
the most cost-effective storage class (Glacier Deep Archive) for the archive data.

Why other options are less suitable:

**B.** Deploy a VPN connection and AWS CLI to Amazon S3 Glacier: A VPN connection with 500 Mbps
bandwidth is insufficient for transferring 700 TB of data in one month. The cost of this operation will
dramatically rise because of the operational cost. Also, transferring directly to Glacier would be inefficient as
Glacier is designed for archival and restore operations.

**C.** Provision a 500 Mbps AWS Direct Connect to Amazon S3: While Direct Connect provides a dedicated
network connection, 500 Mbps is still too slow to transfer 700 TB in one month. Direct Connect also
introduces significant upfront costs and monthly recurring charges, making it less cost-effective for a onetime migration.

**D.** Use AWS DataSync to transfer the data to Amazon S3 Glacier: Although AWS DataSync accelerates data
transfer over the network, transferring 700 TB of data over a 500 Mbps connection in one month is not
realistic. It's not designed to transfer directly to Amazon S3 Glacier.
Supporting documentation and further reading:
AWS Snow Family: https://aws.amazon.com/snowball/

Amazon S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
Amazon S3 Lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transitiongeneral-considerations.html
AWS DataSync: https://aws.amazon.com/datasync/

---

## Question 216

**Answer:** **B**

**Explanation:**

The most efficient solution to encrypt existing and future S3 objects for a CloudFront-backed website
involves minimizing manual intervention and leveraging automated features of S3.

**Option B** is the best approach because it utilizes S3's built-in features for both ongoing and retroactive
encryption. Enabling default encryption on the S3 bucket ensures that all new objects uploaded will
automatically be encrypted with the specified encryption method (SSE-S3 or SSE-KMS), eliminating future
manual effort. S3 Inventory provides a cost-effective and scalable way to identify unencrypted objects. S3
Batch Operations allows you to perform actions on a large number of S3 objects in an automated and
auditable manner. Using a copy operation within Batch Operations allows for the re-writing and encryption of
existing objects in place without data transfer to an external location. This simplifies the process and reduces
operational overhead.

**Option A** is less efficient. Creating a new bucket involves significant data transfer and potential disruption to
the existing CloudFront distribution since the origin would have to be updated. Downloading and uploading all
objects also consumes network bandwidth and compute resources.

**Option C** is more complex than necessary. While SSE-KMS is a valid encryption method, the problem doesn't
explicitly require KMS. Also, it doesn't include a straightforward way to re-encrypt existing objects. Simply
turning on versioning won't encrypt existing objects.

**Option D** is the least efficient. Manually modifying each object through the console is impractical and errorprone for a bucket containing millions of objects. This is not a scalable solution.

Therefore, option B effectively addresses both present and future encryption requirements with the least
amount of manual labor, making use of native S3 capabilities designed for large-scale object management.

---

## Question 217

**Answer:** **A**

**Explanation:**

The best solution to meet the recovery time objective (RTO) of 30 minutes and tolerance for data loss, without
requiring full load handling during normal operations, is option A. Here's why:

**Option A** Explanation:
Deployed Infrastructure in DR Region: Having the application infrastructure (EC2 instances, ALBs) predeployed in the DR region (but not actively serving traffic) significantly reduces recovery time. Building the
infrastructure from scratch during a disaster would exceed the 30-minute RTO.
Active-Passive Failover with Route 53: Amazon Route 53's active-passive failover configuration allows
traffic to be directed to the DR region only when the primary region is unavailable. This aligns with the
requirement of not handling load when the primary is healthy.
Aurora Replica in DR Region: Creating an Aurora Replica in the DR region ensures that the data is replicated
asynchronously from the primary region. In a disaster scenario, the Aurora Replica can be promoted to a
standalone instance, minimizing data loss and recovery time. This is a critical advantage since the question
tolerates limited data loss, asynchronous replication meets that condition, and the warm standby
infrastructure is already in place.

Why other options are less suitable:

**Option B** (Active-Active): Active-active requires constantly handling load in both regions, which isn't needed
when the primary is healthy. While it can provide faster failover, the problem states that it does not need to
handle the load when the primary infrastructure is healthy.

**Option C** (Active-Active with Snapshot Restore): The infrastructure replication is useful, but using an Aurora
database restored from a snapshot will take too long to get running (much longer than 30 mins). Replicas
provide faster failover.

**Option D** (Backup and Restore): AWS Backup is a solid backup strategy, but restoring from backup to build

the infrastructure and restore the database will take considerably longer than 30 minutes, violating the RTO.
Also, you can't create a "second primary instance," you can only create an Aurora Replica.
Supporting Cloud Computing Concepts:
Disaster Recovery Strategies: **Option A** embodies a "warm standby" DR strategy, balancing cost and recovery
time.
RTO and RPO: The solution is tailored to the specific RTO (30 minutes) and acceptable data loss (RPO).
Route 53 Failover: Route 53 provides a highly available DNS service for failover.
Aurora Replication: Aurora provides built-in replication for DR and high availability.

---

## Question 218

**Answer:** **AE**

**Explanation:**

The correct answer is AE because it addresses both the security group and network ACL configurations
required for allowing inbound HTTPS traffic (port 443) to the EC2 instance from the internet.

**Option A** correctly creates a security group rule that allows inbound TCP traffic on port 443 from anywhere
(0.0.0.0/0). Security groups act as a virtual firewall for EC2 instances, controlling inbound and outbound
traffic. Allowing inbound traffic on port 443 is essential for HTTPS access. This rule permits any IP address to
connect to the EC2 instance on the specified port.

**Option E** addresses the necessary changes to the network ACL (NACL). NACLs are stateless, meaning rules
must be explicitly defined for both inbound and outbound traffic. The inbound rule allows TCP traffic on port
443 from any source (0.0.0.0/0). Crucially, it also includes an outbound rule allowing traffic on ephemeral
ports (32768-65535) to any destination (0.0.0.0/0). When a client connects to the web server on port 443, the
server's response will originate from an ephemeral port. Without the outbound rule allowing traffic from these
ports, the response will be blocked by the NACL, preventing a successful connection. The ephemeral port
range can vary, so it's crucial to allow a broad range.
Options B, C, and D are incorrect. B is incorrect because security group rules do not use destinations. C is

incorrect because it only addresses the inbound traffic in NACL, missing the outbound ephemeral port
requirement. D is also incorrect as it implies bi-directional port 443, and does not cover ephemeral port
requirements for the outbound connections.

Therefore, combining the creation of the appropriate security group rule in A with the updating of the network
ACL in E to allow both inbound 443 traffic and outbound ephemeral port traffic ensures that the web server is
accessible from anywhere on port 443.Security GroupsNetwork ACLs

---

## Question 219

**Answer:** **D**

**Explanation:**

The correct answer is D because it addresses both the performance bottleneck and operational efficiency.
The application is stateful and requires in-memory tasks, indicating memory constraints. M5 instances are
general-purpose, while R5 instances are memory-optimized, making them a more suitable choice for this
workload. Switching to R5 instances directly addresses the root cause of the performance degradation.
Furthermore, using CloudFormation for infrastructure changes is operationally efficient as it provides
infrastructure-as-code, allowing for repeatable and predictable deployments.
The addition of the CloudWatch agent to collect custom application latency metrics is crucial for future
capacity planning. Standard EC2 CloudWatch metrics do not track application-specific latency. Custom
metrics provide insights into the actual user experience and help proactively identify potential performance
issues before they impact users. Monitoring application latency allows for targeted scaling decisions based
on real user needs, further optimizing operational efficiency.

**Option A** is incorrect because T3 instances are burstable performance instances, which are not ideal for
consistent, demanding workloads. Using the AWS Management Console for manual changes lacks
infrastructure-as-code benefits. **Option B** is flawed because manual scaling is not operationally efficient and
does not dynamically respond to traffic fluctuations. While using CloudFormation is good, the scaling
approach is not. **Option C** is partially correct by addressing the instance type and using CloudWatch. However,
it uses built-in EC2 memory metrics, which are not sufficient to track custom application latency and provide
granular insights for future capacity planning. Custom metrics offer better visibility into application
performance.
Supporting Links:

Amazon EC2 Instance Types: https://aws.amazon.com/ec2/instance-types/
Amazon CloudWatch Custom Metrics:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html
AWS CloudFormation: https://aws.amazon.com/cloudformation/
Auto Scaling Groups: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html

---

## Question 220

**Answer:** **B**

**Explanation:**

The correct answer is B. An AWS Lambda function.

Here's why:
Variable Traffic & Cost Optimization: Lambda functions are designed for event-driven, serverless computing.
They automatically scale based on the number of requests, and you only pay for the compute time consumed.
Given the highly variable traffic with periods of inactivity, Lambda's pay-per-use model makes it the most
cost-effective choice. No charge occurs if the lambda is not invoked.
Asynchronous Processing: Lambda functions can be invoked asynchronously. API Gateway can trigger a
Lambda function upon receiving a request and immediately return a response to the user. The Lambda
function can then process the data in the background without blocking the user's request.
Speed: AWS Lambda processes requests very quickly which satisfies the need for a low-latency response.
Alternatives' Drawbacks:
AWS Glue Job (A): AWS Glue is designed for ETL (Extract, Transform, Load) operations on large datasets. It's
not suitable for near real-time processing of individual requests. Glue is a fully-managed extract, transform,
and load (ETL) service that makes it easy for customers to prepare and load their data for analytics.
Amazon EKS/ECS with EC2 (C/D): These options involve managing containers and underlying infrastructure
(EC2 instances). This incurs costs even when the service is idle, making them less cost-effective than Lambda
for highly variable traffic. The overhead of managing EC2 instances, container orchestration, and scaling rules
adds complexity and cost.
Serverless Paradigm: Lambda embraces the serverless paradigm, reducing operational overhead and
allowing developers to focus solely on writing code.
In summary: Lambda provides the perfect balance of cost-effectiveness, scalability, and asynchronous
processing capabilities to meet the requirements.

---

## Question 221

**Answer:** **D**

**Explanation:**

The correct answer is D. Amazon S3. Here's why:
Cost-effectiveness: S3 is significantly more cost-effective for long-term storage of log files than EBS or EFS.
S3 offers various storage classes (e.g., S3 Standard, S3 Glacier) optimized for different access patterns and
retention durations. For infrequently accessed logs, S3 Glacier provides very low storage costs.
Durability and Availability: S3 provides 99.999999999% (11 9's) durability, ensuring that log files are highly
unlikely to be lost. It's also designed for high availability, meaning the reporting tool can consistently access
the files.
Scalability: S3 scales effortlessly to store vast amounts of data. The company can store all 7 years' worth of
logs without worrying about storage limitations.
Concurrency: S3 is designed for concurrent access. The reporting tool can access multiple log files
simultaneously without performance bottlenecks.
Data Lifecycle Management: S3 Lifecycle policies automate the process of transitioning log files to lowercost storage tiers (e.g., from S3 Standard to S3 Glacier) based on their age, further optimizing costs.
Why the other options are less suitable:

**A.** Amazon Elastic Block Store (Amazon EBS): EBS volumes are block storage devices attached to EC2
instances. They are expensive for long-term storage of large volumes of log data. EBS is also tied to a specific
availability zone, complicating data access from other instances or regions.

**B.** Amazon Elastic File System (Amazon EFS): EFS provides a shared file system for EC2 instances. While
suitable for applications requiring shared file storage, EFS is more expensive than S3 for long-term archival of
log files.

**C.** Amazon EC2 instance store: Instance store provides temporary block storage directly attached to the host
EC2 instance. Data on the instance store is lost when the instance is stopped, terminated, or fails, making it
unsuitable for long-term archival. Also, it is not designed for reporting access where data must be
consistently available.
Supporting Links:
Amazon S3: https://aws.amazon.com/s3/

Amazon S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
Amazon S3 Lifecycle: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-managementoverview.html

---

## Question 222

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:
Cross-account access is best achieved using IAM roles. IAM roles allow you to delegate access to your AWS
resources to trusted entities (like the vendor's AWS account) without sharing IAM user credentials. This is a
more secure and manageable approach than creating IAM users directly in your account for external parties.

**Option A** leverages this principle through a process called "IAM role trust relationship". You create an IAM
role in your company's AWS account. This role defines the permissions the vendor needs. Crucially, you
configure a trust relationship on this role, specifying the vendor's AWS account ID as the trusted entity. This
means that principals (like IAM roles or users) within the vendor's account can assume the role in your
account, provided they have the necessary permissions to do so.
On the vendor side, their automated tool will need an IAM role (or user) that is granted permission to assume
the role you created in your account. This is accomplished by attaching an IAM policy to the vendor's role (or
user) that grants the sts:AssumeRole permission, specifying the ARN of the role in your account.
Once this is set up, the vendor's automated tool can programmatically assume the role in your account using
the AssumeRole API call. This provides the tool with temporary credentials (access key ID, secret access key,
and security token) that it can then use to make API calls against your AWS resources, subject to the
permissions defined in the role.

**Option B** is less secure. Creating an IAM user for the vendor means sharing long-term credentials (access key
ID and secret access key). Managing and rotating these credentials becomes complex, and if compromised,
they provide persistent access.

**Option C** is incorrect. IAM groups are used to manage permissions for users within the same AWS account, not
to grant cross-account access. You cannot directly add users from another account to a group in your
account.

**Option D** misinterprets the purpose of identity providers. Identity providers (IdPs) are typically used for

federating access for users managed outside of AWS, such as from an Active Directory or other SAML-based
identity provider. They are not directly used for cross-account access between AWS accounts in the manner
described in the question. Specifying the vendor's AWS account ID and user name as an identity provider is
not a supported configuration.

In summary, using IAM roles for cross-account access is the recommended and most secure approach,
avoiding the need to share long-term credentials and providing granular control over permissions.
Relevant documentation:
Granting access to your AWS account to third parties:
https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html
IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
AssumeRole API: https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html

---

## Question 223

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's why:

**A.** Attach an IAM role that has sufficient privileges to the EKS pod: This is the best practice for providing
AWS credentials to applications running on Amazon EKS. Instead of embedding credentials directly in the
code (which is a security risk), you can associate an IAM role with the pod using the IAM roles for service
accounts (IRSA) feature. This allows the application to assume the role and obtain temporary AWS credentials
to access DynamoDB. https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html

**D.** Create a VPC endpoint for DynamoDB: Creating a VPC endpoint for DynamoDB ensures that the traffic
between the EKS pod and DynamoDB remains within the AWS network, specifically within your VPC. A VPC
endpoint eliminates the need for the application to access DynamoDB over the public internet. Instead, the
traffic flows through the AWS backbone network, improving security and reducing latency. This is especially
important for applications running in private subnets where internet access is restricted.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html

Why the other options are incorrect:

**B.** Attach an IAM user that has sufficient privileges to the EKS pod: Attaching an IAM user to an EKS pod is
generally not done directly. IAM users are designed for human users or applications running outside of AWS
infrastructure. Roles are intended for services.

**C.** Allow outbound connectivity to the DynamoDB table through the private subnets’ network ACLs: While

you do need to ensure the network ACLs allow outbound traffic, this is not the primary solution for secure
access. This approach relies on your NAT gateway or internet gateway to allow the request, exposing it to the
internet. Also, NACLs are stateless, requiring both inbound and outbound rules for a connection.

**E.** Embed the access keys in the Java Spring Boot code: Embedding access keys directly in the code is a
major security vulnerability. If the code is compromised or inadvertently exposed, the access keys could be
used to compromise your AWS account. This is strongly discouraged.

---

## Question 224

**Answer:** **CE**

**Explanation:**

The requirement is to achieve high availability and fault tolerance with traffic distributed randomly across
EC2 instances in multiple Availability Zones.
Choice C (Create an Amazon Route 53 multivalue answer routing policy) is correct. Multivalue answer
routing returns multiple healthy IP addresses in response to DNS queries. When a client makes a request, it
will randomly choose one of the returned IP addresses. This achieves the desired random traffic distribution
across instances. Route 53 also performs health checks on the associated endpoints and will only return IP
addresses that are healthy, contributing to fault tolerance. If an instance fails a health check, its IP will no
longer be returned in the DNS response.
[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policymultivalue]
Choice E (Launch four EC2 instances: two instances in one Availability Zone and two instances in another
Availability Zone) is also correct. Distributing EC2 instances across multiple Availability Zones protects
against failures in a single AZ, increasing availability. Having two instances in each of two AZs ensures that if
one AZ goes down, the application can still function using the instances in the other AZ. The multivalue
answer routing will then randomly distribute traffic across these four instances. This architecture provides
both high availability and random traffic distribution.
Choice A (failover routing) is incorrect because it only directs traffic to a secondary endpoint when the
primary is unhealthy. It doesn't randomly distribute traffic. Choice B (weighted routing) allows you to specify
weights for each endpoint, and the traffic is distributed based on these weights, not randomly. Choice D (two
in one AZ, one in another) doesn't provide adequate redundancy. If the AZ with two instances fails, you lose a
significant portion of your capacity.

---

## Question 225

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a breakdown of why and why the other options are less suitable:
Why **Option B** (Kinesis Data Firehose to Redshift) is the Best:
Managed Service and Least Overhead: Kinesis Data Firehose is a fully managed service that automatically
scales to match the throughput of your data. Redshift is a fully managed data warehouse. These reduce
operational burden.
Petabyte Scale: Both Firehose and Redshift are designed to handle petabyte-scale data volumes efficiently.
Data Ingestion and Delivery: Firehose handles the complexities of data ingestion, buffering, and delivery to
Redshift. It can also transform data en route.
SQL Analytics: Redshift is a columnar data warehouse optimized for fast SQL queries, meeting the ondemand analytics requirement.
High Availability: Redshift inherently provides high availability through backups and replication. Firehose
integrates directly and automatically with Redshift.
Why Other Options Are Less Suitable:

**Option A** (Kinesis Data Stream to S3): While Kinesis Data Streams can handle high volumes of data, storing
the data in S3 alone doesn't directly provide SQL analytics. You'd need to use services like Athena or EMR to
query the data in S3, adding operational complexity. Additionally, Data Streams requires more configuration
and monitoring compared to Data Firehose.

**Option C** (S3 to Lambda): Lambda functions are suitable for smaller data transformations and event-driven
processing. Triggering a Lambda function for every data arrival in S3, especially for petabyte-scale data, can
be computationally expensive and difficult to manage. It also doesn't directly facilitate SQL analytics without
an additional service.

**Option D** (EC2 Ingestion Service to RDS): Building a custom ingestion service on EC2 instances introduces
significant operational overhead related to managing the instances, scaling, and ensuring fault tolerance.
Amazon RDS is a relational database service that may not be suitable for analyzing petabyte-scale activity
data.
Supporting Concepts and Links:
Kinesis Data Firehose: https://aws.amazon.com/kinesis/data-firehose/ - Provides a serverless way to ingest
data into data stores and analytics services.
Amazon Redshift: https://aws.amazon.com/redshift/ - A fully managed, petabyte-scale data warehouse

service in the cloud.
AWS Well-Architected Framework (Operational Excellence Pillar): Emphasizes running and monitoring
systems to deliver business value and continually improving processes and procedures. The Firehose/Redshift
solution aligns well by minimizing operational overhead.

---

## Question 226

**Answer:** **AE**

**Explanation:**

Here's a detailed justification for choosing options A and E as the correct solutions, explaining why other
options are less suitable, along with relevant AWS concepts and links:
Justification for A and E:

**Option A**: Use AWS Glue to process the raw data in Amazon S3. AWS Glue is a fully managed extract,
transform, and load (ETL) service. Storing raw data in S3 is a good first step. AWS Glue is well-suited to
processing large datasets in S3. This aligns with scalability and minimizing operational overhead. Glue offers
serverless processing capabilities, automatically scaling resources based on demand, relieving the company
from managing processing infrastructure. Glue is also cost-effective as you only pay for the compute time
used.

**Option E**: Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure
Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3. API
Gateway provides a scalable and secure front door for the RESTful web services application. It can handle a
massive increase in requests from millions of devices. Kinesis Data Streams is designed for ingesting highvelocity, real-time data streams. Using Kinesis Data Firehose automates the delivery of the data to S3. Kinesis
Data Firehose also offers capabilities to transform the data before delivering to S3, which could reduce the
need for Glue, depending on the company’s architecture preferences. This combination decouples the data
ingestion process from the processing, leading to a more resilient and scalable system.

Why other options are less suitable:

**Option B**: Use Amazon Route 53 to route traffic to different EC2 instances. While Route 53 can distribute
traffic across EC2 instances, simply adding more EC2 instances (as implied by C) doesn't address the
fundamental scaling bottlenecks of the original design. The EC2 instance is still performing both data
reception and transformation, creating a single point of contention. Further, managing a scaling group of EC2
instances introduces operational overhead that the company wishes to avoid.

**Option C**: Add more EC2 instances to accommodate the increasing amount of incoming data. Scaling EC2

instances vertically has limitations. Horizontal scaling of EC2 instances requires managing load balancing,
auto-scaling groups, and potentially database scaling, increasing operational complexity. This doesn't
minimize overhead.

**Option D**: Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process
the data. While SQS can decouple the data ingestion and processing, the EC2 instances still perform the
transformation and data storage. SQS still requires the management and scaling of EC2 instances, negating
the operational overhead reduction requirement. Using AWS Glue or Kinesis Data Firehose reduces
operational overhead more effectively because these services are serverless.
Key Concepts:
Scalability: The ability of a system to handle increasing workloads.
Operational Overhead: The effort required to manage and maintain a system.
Decoupling: Separating components of a system so that they can operate independently.
Serverless Computing: Cloud computing execution model in which the cloud provider dynamically manages
the allocation of machine resources.

---

## Question 227

**Answer:** **B**

**Explanation:**

The problem is that despite having an S3 Lifecycle policy set to delete objects after 3 years, the number of
objects in the S3 bucket is still increasing after 4 years. This indicates that the Lifecycle policy is not
effectively deleting all objects older than 3 years. Since S3 Versioning is enabled, the Lifecycle policy might
only be deleting the current versions of objects, leaving behind previous versions.

**Option A** is incorrect because CloudTrail itself does not have an inherent mechanism to directly expire objects
in the S3 bucket where logs are stored. CloudTrail delivers the logs to S3, and the expiration should be
handled by S3's lifecycle management features.

**Option B** is the most cost-effective solution. The S3 Lifecycle policy needs to be configured to also delete
previous versions of objects. S3 Versioning keeps multiple versions of an object. If a new version of an object
is created (e.g., a new CloudTrail log file with the same name), the previous version remains stored. By
modifying the Lifecycle policy to include the deletion of previous versions older than 3 years, all older
versions will be purged, solving the problem without requiring any additional infrastructure or code. This
leverages built-in S3 functionality, reducing operational overhead and cost.

**Option C** is less efficient and more costly. While a Lambda function can enumerate and delete objects, it
requires writing and maintaining code, incurs Lambda execution costs, and consumes S3 API calls, which can
become expensive at scale. It's an unnecessary complication when S3's Lifecycle policies can handle this
natively.

**Option D** is irrelevant to the problem. Configuring the parent account as the owner of all objects does not
directly address the issue of previous versions accumulating in the bucket. Object ownership affects access
control and billing, but it doesn't control object lifecycle.

Therefore, option B is the correct solution because it directly addresses the problem by configuring the S3
Lifecycle policy to manage both current and previous versions of objects, ensuring that all logs older than 3
years are deleted in a cost-effective manner.
Supporting Links:
S3 Lifecycle Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configurationconcept.html
S3 Versioning: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html

---

## Question 228

**Answer:** **C**

**Explanation:**

The correct answer is C, modifying the API to write incoming data to an Amazon SQS queue and using an AWS
Lambda function to write data from the queue to the database. Here's why:
The primary problem is the RDS DB instance's inability to handle the write volume from the API, leading to
timeout errors. This suggests the database is overwhelmed with connection requests and write operations.

**Option C** addresses this by introducing a decoupling mechanism using Amazon SQS, a fully managed

message queuing service. The API publishes messages containing the real-time data to the SQS queue. This
immediately acknowledges the API request, preventing timeout errors even during traffic spikes.
SQS acts as a buffer, holding the incoming data until the database is ready to process it. This prevents data
loss during heavy traffic periods, satisfying a key requirement.
An AWS Lambda function is then configured to be triggered by new messages in the SQS queue. Lambda
automatically scales based on the number of messages, ensuring timely processing. The Lambda function
retrieves data from the queue in batches and writes it to the RDS database. This reduces the number of
concurrent connections to the database compared to the API directly writing data, thus minimizing the load.
Lambda's ability to process messages in batches further optimizes database write operations.

**Option A**, increasing the DB instance size, might temporarily alleviate the issue, but it's a reactive approach
and doesn't address the root cause of high connection load. It also involves downtime during scaling.

**Option B**, using Multi-AZ for high availability, doesn't solve the write capacity problem. Writing to multiple
instances would actually increase the write load and potentially exacerbate the timeout errors. Also, direct
database writes from the application to multiple instances introduce complexities in data consistency and
management.

**Option D**, using Amazon SNS, is designed for fan-out scenarios where multiple subscribers need to receive the
same message. It's not suitable for buffering and reliable, ordered processing of data intended for a single
database. SNS's primary purpose is notification, not reliable message queuing for database writes. SQS
guarantees message delivery, while SNS does not. Using SNS could lead to data loss.

In summary, SQS provides the necessary buffering and decoupling to protect the database from
overwhelming write traffic, while Lambda efficiently processes the queued data, satisfying the requirements
of minimizing connections and preventing data loss.
Further Reading:
Amazon SQS: https://aws.amazon.com/sqs/
AWS Lambda: https://aws.amazon.com/lambda/

---

## Question 229

**Answer:** **A**

**Explanation:**

The most suitable solution is A, migrating the databases to Amazon Aurora Serverless for Aurora MySQL.

Here's why:

Simplified Scaling: Aurora Serverless automatically scales compute capacity based on the application's
needs. This eliminates the manual effort of adding or removing EC2 instances, directly addressing the
company's requirement for simplified capacity management.
Improved Performance and Durability: Aurora, in general, offers improved performance and durability
compared to standard MySQL due to its optimized storage engine and distributed architecture. Aurora
Serverless inherits these benefits. https://aws.amazon.com/rds/aurora/
Minimal Operational Effort: Aurora Serverless handles the underlying infrastructure management, such as
provisioning, patching, and backups, reducing the operational burden on the company.
MySQL Compatibility: Migrating to Aurora MySQL allows the company to leverage its existing MySQL
expertise and application code with minimal changes.
Let's analyze why the other options are less suitable:

**B.** Aurora Serverless for PostgreSQL: While Aurora Serverless for PostgreSQL also offers automatic scaling,
the company is currently using MySQL. Migrating to PostgreSQL would require significant application code
changes and staff retraining.

**C.** Larger MySQL Database on Larger EC2 Instances: This approach is a form of vertical scaling and does not
provide the dynamic scaling capabilities required by the company. It also does not reduce the manual effort
involved in managing the database infrastructure. It becomes a single point of failure.

**D.** EC2 Auto Scaling Group: While an EC2 Auto Scaling group automates the scaling of EC2 instances, it does
not address the underlying database replication and management complexities. The company would still need
to manually configure and manage database replication across the instances in the Auto Scaling group, and
scale them.

In summary, Aurora Serverless for Aurora MySQL offers the best combination of simplified scaling, improved
performance and durability, minimal operational effort, and compatibility with the company's existing MySQL
environment.

---

## Question 230

**Answer:** **C**

**Explanation:**

The best solution is to replace the two NAT instances with two NAT gateways in different Availability Zones.

Here's why:
NAT Gateways vs. NAT Instances: NAT Gateways are AWS-managed, offering high availability, fault

tolerance, and automatic scaling, relieving the operational burden of managing NAT instances. NAT instances
require manual configuration and maintenance.
High Availability and Fault Tolerance: Deploying NAT Gateways in different Availability Zones (AZs) ensures
that if one AZ experiences an outage, traffic can be routed through the NAT Gateway in the other AZ.
Automatic Scaling: NAT Gateways automatically scale to handle increased traffic, which addresses the
company's concern about traffic demands.
Cost Optimization: While NAT Gateways incur a per-hour charge and data processing fees, the reduced
operational overhead and improved availability often offset the cost compared to managing NAT instances,
especially when considering the potential cost of downtime.

**Option A** is incorrect because using two NAT gateways in the same AZ doesn't provide high availability. If that
AZ goes down, external connectivity is lost.

**Option B** is incorrect because, while using Auto Scaling Groups and NLBs with NAT Instances can improve
availability, it adds complexity and doesn't match the simplicity and manageability of NAT Gateways. Also, it
does not scale automatically as readily as a NAT Gateway.

**Option D** is incorrect because relying on Spot Instances for critical network infrastructure like NAT is risky.
Spot Instances can be terminated with short notice, potentially disrupting connectivity. Also, the company
required a fault-tolerant solution.

---

## Question 231

**Answer:** **B**

**Explanation:**

The most secure solution for allowing the application in VPC A to access the database in VPC B within the
same AWS account is to establish a VPC peering connection. VPC peering enables private networking
between the two VPCs, allowing resources in each VPC to communicate with each other as if they were within
the same network. This eliminates the need for traffic to traverse the public internet, thereby reducing
exposure to security risks.

**Option A**, using the public IP address in a security group rule, exposes the database to potential attacks from
sources that spoof the EC2 instance's public IP. This is inherently less secure. **Option C**, making the database
publicly accessible, is the least secure option as it exposes the database to the entire internet. Assigning a
public IP address significantly widens the attack surface and should be avoided whenever possible. **Option D**,
using an EC2 instance as a proxy, adds unnecessary complexity and introduces another potential point of
failure and vulnerability. While it does limit direct exposure, it's not as streamlined and inherently secure as
VPC peering.

VPC peering offers a direct, private, and secure connection. It allows for fine-grained control through security
groups and network ACLs to further restrict and monitor the allowed traffic. The network traffic stays within
the AWS network infrastructure, benefiting from AWS's security measures. By configuring appropriate
routing tables in both VPCs, you can ensure that traffic destined for the database instance is properly routed
through the VPC peering connection. This approach adheres to the principle of least privilege, granting only
the necessary access and minimizing the attack surface.
AWS VPC Peering Documentation

---

## Question 232

**Answer:** **C**

**Explanation:**

The correct answer is C: Publish VPC flow logs to Amazon CloudWatch Logs, create required metric filters,
and create an Amazon CloudWatch metric alarm with a notification action. Here's why:
VPC Flow Logs Capture Network Traffic: VPC Flow Logs record information about the IP traffic going to,
from, and within your VPCs. This includes source and destination IP addresses, ports, and the action taken
(ACCEPT or REJECT). This is critical for detecting RDP (port 3389) and SSH (port 22) access.
https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html
CloudWatch Logs as a Central Repository: VPC Flow Logs are published to CloudWatch Logs, providing a
centralized location for analysis and monitoring.
https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html
Metric Filters Extract Relevant Data: CloudWatch metric filters allow you to search for specific patterns
within the log data. You can create a filter that specifically looks for log entries showing successful
connections to port 22 or 3389, indicating SSH or RDP access.
https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringPolicyExamples.html
CloudWatch Alarms Trigger Notifications: Once the metric filter identifies the specific log entries, a
CloudWatch alarm can be created to trigger when the metric value (the number of SSH or RDP connections)
exceeds a defined threshold. This allows the operations team to be notified immediately.
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
Notification Action for the Operations Team: The CloudWatch alarm's notification action can be configured
to send an alert to the operations team, using SNS, for instance.

Why other options are incorrect:
A (CloudWatch Application Insights): Application Insights is better suited for monitoring the health and
performance of applications, not necessarily for security-related events like RDP/SSH access. It's not

designed for this granular level of network traffic monitoring out of the box.
B (IAM Instance Profile with AmazonSSMManagedInstanceCore): This IAM role primarily provides Systems
Manager access for instance management, not for detecting network access events. While Systems Manager
can execute commands and potentially log access attempts, it's not the most efficient or direct method for
this specific scenario.
D (EventBridge for EC2 Instance State-change Notification): While EventBridge can track instance state
changes (e.g., running, stopped), it doesn't provide information about the reason for the state change or the
network traffic associated with the instance. Detecting RDP/SSH requires examining the network activity
within the instance, not just its state. It would also require further configuration to determine if the state
change was related to RDP/SSH.

---

## Question 233

**Answer:** **AB**

**Explanation:**

The most secure approach to managing the root user involves enabling multi-factor authentication (MFA) and
ensuring a strong password.
Justification:

**A.** Ensure the root user uses a strong password: The root user possesses unrestricted access to the AWS
account. A strong, unique password is the first line of defense against unauthorized access. This password
should adhere to best practices for complexity and length.

**B.** Enable multi-factor authentication to the root user: MFA adds an extra layer of security by requiring a
second verification factor (e.g., a code from an authenticator app) in addition to the password. Even if the
password is compromised, the attacker would still need access to the second factor to gain entry.

Why other options are incorrect:

**C.** Store root user access keys in an encrypted Amazon S3 bucket: It's highly discouraged to actively use
root user access keys. Instead, use IAM roles and users. Storing root user access keys, even in an encrypted
bucket, is an unnecessary security risk. Best practice is to avoid creating these keys at all.

**D.** Add the root user to a group containing administrative permissions: The root user already has complete
administrative permissions. Adding them to a group is redundant and doesn't enhance security.

**E.** Apply the required permissions to the root user with an inline policy document: Like option D, the root
user already has full administrative access. Attaching inline policies is redundant and doesn't contribute to
securing the root account itself. The goal is to limit the usage of the root account, not to further configure its
inherent superuser privileges.
In summary: The best practice is to secure the root user with a strong password and MFA, and then minimize
its use by creating IAM users and roles for day-to-day operations.

Supporting Links:
AWS documentation on securing root user access:
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
AWS best practices for IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

---

## Question 234

**Answer:** **C**

**Explanation:**

The correct solution (C) leverages AWS's native services for encryption at rest and in transit. AWS Key
Management Service (KMS) is the recommended service for managing encryption keys and encrypting data at
rest for both EBS volumes and Aurora databases. KMS allows centralized control over encryption keys,
integrates seamlessly with other AWS services, and offers auditing capabilities. EBS volumes can be
encrypted when they are created, and Aurora supports encryption at rest using KMS keys.
For encryption in transit, AWS Certificate Manager (ACM) is the preferred method. ACM allows you to easily
provision, manage, and deploy SSL/TLS certificates for use with AWS services like Application Load
Balancers. Attaching an ACM certificate to the ALB ensures that traffic between clients and the ALB is
encrypted using HTTPS, and traffic between the ALB and the EC2 instances can also be encrypted.

**Option A** is incorrect because ACM is primarily used for managing SSL/TLS certificates for encryption in
transit, not for encrypting storage at rest. KMS is the correct service for at-rest encryption for EBS and
Aurora.

**Option B** is incorrect because it advocates using the root account, which is generally discouraged due to
security risks. Also, AWS does not have a single "turn on encryption for all data" option. Encryption needs to
be configured at the individual service level. Uploading certificates directly to the root account is also not best
practice; KMS and ACM are specifically designed for this purpose.

**Option D** is incorrect. BitLocker is a Microsoft Windows encryption feature and is not the recommended
method for encrypting EBS volumes. While you could technically use it within an EC2 instance, it is far more
complex and less integrated than using native AWS encryption. Moreover, while you can import TLS
certificates into KMS, attaching KMS keys directly to the ALB to encrypt data in transit is not the standard
approach. ACM is specifically designed for managing certificates used by ALBs. The ALB uses ACM to handle
the TLS connection.

In summary, the chosen answer utilizes the most appropriate AWS services (KMS and ACM) in their intended
ways to provide a comprehensive encryption solution for the application's data at rest and in transit, following
security best practices.
Further research:
AWS KMS: https://aws.amazon.com/kms/
AWS ACM: https://aws.amazon.com/certificate-manager/
Encrypting Amazon EBS volumes:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
Encrypting Amazon Aurora:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora. Encryption.html

---

## Question 235

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:
The scenario requires migrating an Oracle database to Aurora PostgreSQL while maintaining data
synchronization during a phased application migration. Key considerations are the high read/write workload
and the need for continuous data replication.

**Option C** is the most suitable solution because it addresses all the requirements. First, the AWS Schema
Conversion Tool (SCT) is crucial for converting the Oracle database schema to a compatible Aurora
PostgreSQL schema. This includes data types, stored procedures, and other database objects. Without
schema conversion, the migration will likely fail due to compatibility issues. AWS SCT simplifies this complex
process.
Second, AWS Database Migration Service (DMS) handles both the initial data load and ongoing data
replication (Change Data Capture - CDC). A "full load plus CDC" replication task ensures that the existing data
is migrated and that subsequent changes on the source database are replicated to the target database in near
real-time, keeping the databases synchronized throughout the application migration process. The table
mapping selection ensures all tables are included in the migration process. The phrase "memory optimized
replication instance" suggests a focus on handling high throughput, which directly addresses the 'high reads
and writes' concern. While a compute-optimized instance could also be used, a memory-optimized instance

helps avoid bottlenecks in processing the data changes during CDC, especially with a high volume of writes.

**Option A** is incorrect because it uses AWS DataSync which is useful for transferring large amounts of data
between on-premises storage and AWS services but isn't designed for continuous database replication with
schema conversion. It lacks the critical schema conversion step and the ability to efficiently manage ongoing
changes in the source database.

**Option B** is better than A because it utilizes AWS DMS with CDC, but still lacks schema conversion. DMS alone
can't automatically handle the differences in schema between Oracle and PostgreSQL. It would require
significant manual intervention and potentially custom code. DataSync is also not ideal for the initial database
migration when considering database-specific migration requirements.

**Option D** includes the SCT and DMS with CDC, making it a good option, but it specifically focuses on migrating
the "largest tables" which does not meet the requirement to migrate all data, and fails to address the 'high
reads and writes' concern as thoroughly as option C. Memory-optimized instances are generally better for
handling CDC, whereas compute-optimized instances are more appropriate for the initial full load.

In summary, option C provides the most comprehensive solution by addressing schema conversion, initial data
migration, and continuous data synchronization using a memory-optimized replication instance to handle the
database's high read/write workload.
Relevant Documentation:
AWS Schema Conversion Tool (SCT): https://aws.amazon.com/dms/schema-conversion-tool/
AWS Database Migration Service (DMS): https://aws.amazon.com/dms/

---

## Question 236

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a scalable and highly available solution with minimal changes to
the existing three-tier architecture.

Here's why:
Elastic Beanstalk for Front-End and Application Layers: Using Elastic Beanstalk handles deployment, load
balancing, and auto-scaling automatically, reducing operational overhead for the front-end and application
layers. Deploying across multiple Availability Zones (Multi-AZ) within Elastic Beanstalk ensures high

availability. This requires minimal code changes.
Amazon RDS Multi-AZ for Database: Migrating the MySQL database to Amazon RDS (Relational Database
Service) Multi-AZ offers automated failover to a standby replica in a different Availability Zone, ensuring high
availability and data durability. RDS is compatible with MySQL, minimizing code changes.
Amazon S3 for Image Storage: Using Amazon S3 for storing images leverages its scalability, durability, and
cost-effectiveness. Serving images directly from S3 reduces the load on the application layer and EC2
instances. This offloads image storage and delivery from the database and application servers.

**Option A** requires significant architectural changes, including rewriting the application layer to use Lambda
and changing the database to DynamoDB, which is not compatible with MySQL, increasing development effort
and risks.

**Option B** suggests using read replicas for serving images which is not the intended use of read replicas. The
main use is to offload read traffic from the primary database. Also, it doesn't address the scalability and
availability of the application layer as effectively as Elastic Beanstalk.

**Option C**'s suggestion to use a memory-optimized instance type for the database to store images is inefficient
and limits scalability compared to using S3 for image storage.
Supporting Concepts:
Scalability: The ability of a system to handle increasing workloads.
High Availability: The ability of a system to remain operational even if some components fail.
Load Balancing: Distributing traffic across multiple instances to improve performance and availability.
Multi-AZ Deployment: Deploying resources across multiple Availability Zones to ensure high availability.
Elastic Beanstalk: An AWS service for deploying and managing web applications and services.
Amazon RDS: A managed relational database service on AWS.
Amazon S3: A scalable object storage service on AWS.

---

## Question 237

**Answer:** **A**

**Explanation:**

The correct answer is A. Set up a VPC peering connection between VPC-A and VPC-B.

Here's a detailed justification:
VPC peering establishes a direct networking connection between two VPCs, enabling instances in each VPC
to communicate with each other as if they were within the same network. This solution directly addresses the
requirement of securely connecting EC2 instances across VPCs in different AWS accounts. VPC peering
doesn't route traffic through the public internet, providing a secure connection. Because VPC peering
establishes direct routing between VPCs, it avoids the bandwidth limitations associated with solutions
involving the public internet or single network gateways. VPC peering is designed to be highly available,
ensuring that connectivity isn't disrupted by single points of failure. You can also implement routing
configurations to ensure that traffic can flow both ways after the peering connection is active.

**Option B** is incorrect because VPC gateway endpoints are designed to provide private access to AWS services
like S3 and DynamoDB, not to EC2 instances within another VPC.

**Option C** is incorrect because attaching a virtual private gateway (VGW) to VPC-B typically works in
conjunction with a VPN connection or AWS Direct Connect. While technically possible to connect via a VGW
across accounts, it's generally more complex and doesn't directly offer the same level of simplicity and high
availability as VPC peering for this cross-account, intra-AWS connectivity. Additionally, VPN connections
using VGWs can introduce bandwidth constraints and a single point of failure.

**Option D** is incorrect because creating a private virtual interface (VIF) is relevant for AWS Direct Connect,
which provides a dedicated network connection from your on-premises environment to AWS. It doesn't
directly solve the need for VPC-to-VPC communication within the AWS cloud. Direct Connect is typically used
for hybrid cloud scenarios, not for connecting VPCs within AWS accounts.
For further research, consult the AWS documentation:
VPC Peering: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html
AWS Direct Connect: https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html
Virtual Private Gateways: https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html

---

## Question 238

**Answer:** **C**

**Explanation:**

The most cost-effective solution for notifying the company when EC2 instance usage exceeds a specific
threshold for each account is using AWS Budgets.
AWS Budgets allows you to set custom budgets to track your AWS costs and usage. You can define budgets
on a monthly basis and scope them specifically to EC2 instances, which directly addresses the requirement.
The key advantage is that Budgets support setting alert thresholds. When actual or forecasted costs exceed
the defined threshold, Budgets can trigger notifications via Amazon SNS (Simple Notification Service),
enabling immediate alerting. This eliminates the need for constant manual monitoring.

**Option A** and B, while using Cost Explorer, do not provide built-in alerting capabilities that are easily
configurable to trigger notifications when a specific threshold is exceeded. While Cost Explorer reports offer
insight, they require external mechanisms or manual review to generate alerts, which is less cost-effective
and efficient. Amazon SES would need to be manually configured, adding complexity.

**Option D**, involving AWS Cost and Usage Reports, Amazon Athena, and Amazon EventBridge, is significantly
more complex and costly. Although granular and powerful, it's overkill for a simple usage threshold alert.
Hourly granularity and Athena queries require more resources and associated costs compared to the native
capabilities of AWS Budgets.
AWS Budgets offers the optimal balance of functionality, cost-effectiveness, and ease of use for the
specified requirement. It is designed for cost tracking and alerting, making it the right tool for this purpose.
Relevant link: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managingcosts.html

---

## Question 239

**Answer:** **A**

**Explanation:**

The most operationally efficient solution is to use Amazon API Gateway with Lambda integration and IAM
authentication. Here's why:
API Gateway's Purpose: API Gateway is specifically designed to create, publish, maintain, monitor, and
secure APIs at any scale. It acts as a front door for applications to access data, logic, or functionality from
backend services like Lambda.
Lambda Integration: API Gateway natively integrates with Lambda functions. This allows direct invocation of

the Lambda function upon receiving an API request, streamlining the request-response flow.
IAM Authentication: API Gateway supports IAM authentication, allowing the microservice to leverage AWS's
robust identity and access management system. This eliminates the need to implement custom authentication
logic within the Lambda function itself, improving security and reducing code complexity.
Operational Efficiency: Using API Gateway for tasks like authentication and routing centralizes these
responsibilities, making management and maintenance more straightforward. It also provides built-in features
like caching, throttling, and monitoring that contribute to operational efficiency.
Why other options are less efficient:
Lambda Function URLs (**Option B**): While simpler to set up initially, function URLs lack the advanced features
of API Gateway, such as request transformation, caching, and comprehensive security policies. They're less
suitable for complex scenarios requiring features beyond basic invocation.
CloudFront with Lambda@Edge or CloudFront Functions (Options C and D): CloudFront is primarily a
Content Delivery Network (CDN) designed for caching and delivering static content. While it can execute
Lambda functions with Lambda@Edge or CloudFront Functions, these are typically used for edge computing
tasks like modifying HTTP headers or customizing content delivery. They are not best suited for implementing
the core logic of a microservice requiring IAM authentication. Deploying the entire microservice to CloudFront
would be an overkill.

In summary, API Gateway provides the most comprehensive and efficient solution for creating an HTTPS
endpoint for a Lambda-backed microservice that requires IAM authentication, due to its features designed for
API management and seamless integration with other AWS services.
Here are some links for more research:
Amazon API Gateway: https://aws.amazon.com/api-gateway/
AWS Lambda: https://aws.amazon.com/lambda/
IAM Authentication in API Gateway:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-iam-authorizer.html
Lambda Function URLs: https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html
Lambda@Edge: https://aws.amazon.com/lambda/edge/
CloudFront Functions: https://aws.amazon.com/cloudfront/features/cloudfront-functions/

---

## Question 240

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution for minimizing data transfer egress costs in
this scenario:
The primary goal is to reduce egress costs, which are charges incurred when data leaves an AWS Region.
Options A and B involve data traversing the internet, which incurs significant egress charges. The question
states that the company already has a Direct Connect connection. Direct Connect offers significantly reduced
data transfer costs compared to transferring data over the public internet by establishing a dedicated
network connection from on-premises to AWS.

**Option C** utilizes the Direct Connect connection for querying, which is better than using the internet. However,
the visualization tool remains on-premises. This requires the 500 KB webpages generated by the tool to be
sent back across the Direct Connect connection to the users at the corporate office, leading to unnecessary
egress charges for the visualization content.

**Option D** eliminates internet egress charges. By hosting the visualization tool within the same AWS Region as
the data warehouse, the 50 MB query results from the data warehouse and the 500 KB web pages generated
by the tool are transferred within the AWS Region. Intra-region data transfer within AWS is generally free or
significantly cheaper than egressing data outside of AWS. The users then access the visualization tool, and
the generated webpages (500 KB) are transmitted over the Direct Connect connection only. This is
significantly less egress data than transferring the 50 MB result sets across Direct Connect or the internet, as
would happen with other options. Therefore, D is the most cost-effective because it leverages Direct Connect
to minimize the egress costs.

In summary, option D minimizes egress costs by:

1. Keeping the majority of data transfer (50 MB query results) within the AWS Region.

2. Only using the Direct Connect connection to send the smaller webpage results (500 KB) from the
visualization tool to on-premises users, resulting in the lowest egress costs.

---

## Question 241

**Answer:** **C**

**Explanation:**

The correct answer is C. Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance.
Create a read replica in another Region.

Here's why:
Availability and Region Redundancy: The primary requirement is for data availability across multiple AWS
Regions at all times. **Option C** directly addresses this by using RDS cross-region read replicas. A read replica
in another region provides a near real-time copy of the data, ensuring data availability even if the primary
region experiences an outage.
Operational Overhead: RDS read replicas are managed services, which significantly reduces operational
overhead compared to self-managing a PostgreSQL cluster on EC2 (**Option A**). AWS handles the replication
and failover processes to the read replica region.
Multi-AZ vs. Multi-Region: **Option B** (Multi-AZ) provides high availability within a single region but does not
address the requirement of availability across multiple regions. A Multi-AZ deployment automatically
provisions a standby database instance in a different Availability Zone within the same region. Thus, it will not
help in case of Regional Outage.
DB Snapshots: **Option D** (DB snapshots) provides a point-in-time backup, but restoring from a snapshot in
another region involves a manual process that can lead to significant downtime. Snapshots are not suitable
for continuous availability.
RDS Read Replica: RDS read replicas can be promoted to become standalone primary DB instances if the
primary instance fails. This is a more seamless failover process than restoring from a snapshot.

In summary, using RDS with a cross-region read replica provides the best combination of multi-region data
availability and minimal operational overhead, fulfilling the company's requirements in a cost-effective and
manageable manner. Authoritative Links:
Amazon RDS Read Replicas
Working with Amazon RDS Read Replicas

---

## Question 242

**Answer:** **C**

**Explanation:**

The correct answer is Multivalue routing policy (C) because it's designed to return multiple healthy IP
addresses in response to DNS queries. This directly addresses the company's requirement to receive the IP
addresses of all healthy EC2 instances.

Here's a detailed justification:
Multivalue Answer Routing: This policy is specifically built to return multiple values (like IP addresses) for a
single DNS query. This is essential for high availability and load balancing across multiple resources.
[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policymultivalue]

Health Checks Integration: Multivalue answer routing works in conjunction with Route 53 health checks.
Route 53 monitors the health of each EC2 instance (or other endpoint). Only the IP addresses of instances that
pass the health checks are returned in the DNS response.

Why other options are incorrect:
Simple routing policy: Returns only one IP address from a set of records. While it can provide basic failover if
the first record is unavailable, it doesn't provide multiple healthy IPs.
Latency routing policy: Routes traffic based on the lowest latency between the user and the AWS region,
irrelevant to the health of all instances.
Geolocation routing policy: Routes traffic based on the geographic location of the user, also irrelevant to the
health of all instances.
Scalability and High Availability: By returning multiple healthy IP addresses, the application can distribute
traffic across available EC2 instances, improving scalability and resilience. If one instance fails, traffic is
automatically routed to the remaining healthy instances without any DNS propagation delay.
In summary: Multivalue answer routing provides the necessary functionality to return the IP addresses of all
healthy EC2 instances, aligning with the company's requirements for high availability and load distribution.
Health checks ensure only healthy instances are included in the response.

---

## Question 243

**Answer:** **A**

**Explanation:**

The correct answer is A: Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises
at each clinic. Here's why:
Low Latency and On-Premises File Access: The key requirement is minimum latency for file-based
applications on-premises. AWS Storage Gateway file gateway addresses this directly. It provides a local
cache of the data, allowing on-premises applications to access frequently used files with very low latency.
The files are still durably stored in S3, but the gateway acts as a local "front-end" for faster access.
File-Based Access: The scenario specifies that the data needs to be accessible to file-based applications. A
file gateway presents the data as a standard file share (e.g., NFS, SMB), which is compatible with these
applications.
AWS Storage Gateway Overview: AWS Storage Gateway connects an on-premises software appliance with
cloud-based storage to provide seamless and secure integration between an organization's on-premises IT
environment and the AWS storage infrastructure. https://aws.amazon.com/storagegateway/
Let's examine why the other options are less suitable:

**B.** AWS DataSync: While DataSync can move data to on-premises locations, it's more suited for initial data
migration or periodic synchronization, not for providing low-latency, continuous access to frequently changing
data. DataSync copies data, introducing delays compared to caching.

**C.** AWS Storage Gateway volume gateway: A volume gateway presents cloud-based storage volumes as
iSCSI block devices to on-premises applications. This is not suitable for file-based applications, as it requires
the applications to work with block storage instead of files.

**D.** Amazon EFS: Amazon EFS is a fully managed elastic NFS file system for use with AWS cloud services and
on-premises resources. While it offers file-based access, directly attaching it to on-premises servers requires
a VPN or Direct Connect connection to AWS. The latency over such a connection would be higher compared to
a local file gateway. Also, EFS is generally optimized for cloud workloads, not necessarily low-latency onpremise access to files stored primarily in S3.

In summary, a file gateway allows the clinics to directly access the needed files locally, thus reducing latency
to nearly zero, which is not achievable with any other of the suggested setups.

---

## Question 244

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses both high availability and scalability in a resilient and automated
manner.
Here's a breakdown of why option C is superior:
Database High Availability and Scalability: Moving the database to Amazon Aurora with a read replica in
another Availability Zone provides both high availability (in case of a failure in one AZ) and read scalability
(offloading read operations to the read replica). Aurora's multi-AZ capabilities ensure data redundancy and
failover. https://aws.amazon.com/rds/aurora/
Web Server Scalability and Availability: Creating an AMI from the EC2 instance allows for consistent
deployments of the web server application. The Application Load Balancer (ALB) distributes incoming traffic
across multiple instances in different Availability Zones, providing high availability.
https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
Automated Scaling: Attaching an Auto Scaling group to the ALB ensures that the number of EC2 instances

automatically adjusts to meet demand, scaling up during peak loads and scaling down during off-peak
periods. The Auto Scaling group utilizes the AMI to launch new instances, maintaining consistency. Spreading
instances across two Availability Zones provides resilience. https://aws.amazon.com/autoscaling/

Why other options are less suitable:

**Option A**: Manual launches of EC2 instances and configuring only in one AZ do not provide automatic scaling
or full high availability across different Availability Zones. Manually launching another EC2 instance is not a
scalable solution, and the database backup does not provide a high available configuration.

**Option B**: Using a read replica in the same Availability Zone does not protect against an AZ failure, therefore
does not achieve high availability. Manually launching EC2 instances has the same drawbacks of option A.

**Option D**: Running the database on a separate EC2 instance without using a managed database service like
RDS or Aurora lacks the built-in high availability features and easier management provided by these services.
Scheduling backups is good practice, but not sufficient for high availability.

---

## Question 245

**Answer:** **A**

**Explanation:**

The correct answer is A: "Reconfigure the target group in the development environment to have only one EC2
instance as a target."

Here's a detailed justification:
The primary goal is to minimize costs in the development environment while maintaining functionality. Having
at least two EC2 instances in the production environment's target group and Auto Scaling group is necessary
for high availability and handling production traffic spikes. However, the development environment doesn't
typically require the same level of resilience or capacity.

**Option A** directly addresses cost reduction by minimizing resource usage in the development environment. An
ALB requires at least one healthy instance in a target group to function. Reducing the number of instances
from two to one in the development environment reduces the cost related to EC2 compute resources by half,
without completely disabling the environment. Development teams can still deploy, test, and debug their
code.

**Option B**, changing the ALB balancing algorithm, doesn't directly reduce costs. Least outstanding requests
distributes load differently, but it doesn't eliminate the need for instances. It is mainly helpful in balancing the
load between the instances; it doesn't inherently reduce the number of instances required and thus doesn't
significantly reduce costs.

**Option C**, reducing the size of EC2 instances in both environments, might save costs across both
environments, but is not the most cost-effective for the development environment, as it impacts performance

on the production environment as well, which has periods of high traffic. The prompt is asking specifically for
what configuration would be most cost-effective for development, which means we want to reduce overhead
where the high availability requirements are low.

**Option D**, reducing the maximum number of EC2 instances in the development environment's Auto Scaling
group, is a good idea for cost savings. However, the question mentions the application needs at least two
instances for functionality to run. Therefore, reducing the maximum without reducing the minimum still will
require 2 instances. Therefore it is less effective compared to **Option A**. Also, ASG configuration usually
requires a minimum value as well, which further mitigates the cost savings and the benefits are only realized
during auto-scaling. Therefore, option A is the most appropriate choice. It provides a significant cost reduction
directly in the development environment without crippling its core functionality for developers.
Further reading on these AWS services can be found here:
Application Load Balancer:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
Amazon EC2: https://aws.amazon.com/ec2/
Auto Scaling: https://aws.amazon.com/autoscaling/

---

## Question 246

**Answer:** **D**

**Explanation:**

The problem is that an internet-facing Application Load Balancer (ALB) cannot directly route traffic to EC2
instances residing in private subnets. ALBs need to be placed in public subnets to receive traffic from the
internet.

**Option D** correctly addresses this by creating public subnets for the ALB. By associating the ALB with these
public subnets, the ALB can receive internet traffic. The route tables for these public subnets are then
configured to route traffic to the private subnets where the EC2 instances are located. This allows the ALB to
forward the internet traffic to the backend EC2 instances while keeping them isolated in private subnets for
security.

**Option A** is incorrect because while a Network Load Balancer (NLB) can be used, it doesn't inherently solve
the problem of the private subnets. A NAT gateway might allow outbound internet access, but doesn't
facilitate inbound traffic to the instances through the ALB.

**Option B** proposes moving the EC2 instances to public subnets, which is generally not recommended for
security reasons. Public subnets expose EC2 instances directly to the internet, increasing the attack surface.

While adding a security group rule allows outbound traffic, it doesn't address the fundamental problem of the
ALB's placement.

**Option C** suggests updating the route tables for the EC2 instances' subnets to use an internet gateway. This is
incorrect because private subnets should not have direct routes to the internet gateway. This would
effectively make the subnets public, negating the purpose of having them private in the first place.

Therefore, **Option D** is the most secure and appropriate solution. It utilizes public subnets for the ALB to
receive internet traffic and maintains the security posture of the EC2 instances by keeping them in private
subnets. The route tables ensure that the traffic is properly routed from the ALB in the public subnets to the
EC2 instances in the private subnets.
Further research:
AWS Documentation - Application Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
AWS Documentation - VPC Routing:
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html
AWS Documentation - Security Groups: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2security-groups.html

---

## Question 247

**Answer:** **CE**

**Explanation:**

The correct answer is CE. Here's a detailed justification:

**C:** Allow long-running transactions to complete on the source DB instance.
Before creating a read replica, it's crucial to ensure data consistency. Interrupting a long-running transaction
on the primary DB instance could lead to data corruption or an inconsistent state being replicated to the read
replica. Allowing the existing transactions to complete ensures a clean cut-off point for replication to begin,
guaranteeing the read replica is initialized with consistent data. Prematurely interrupting transactions would
force a rollback and introduce inconsistencies that might be difficult to resolve after the read replica has
been launched.

**E:** Enable automatic backups on the source instance by setting the backup retention period to a value other
than 0.
Enabling automatic backups is a prerequisite for creating a read replica in Amazon RDS for MySQL (and other
engines). RDS uses the binary logs generated by the backup process to replicate changes to the read replica.
If automatic backups are disabled (retention period set to 0), binary logging is also disabled, and replication

cannot occur. Therefore, configuring a backup retention period greater than zero ensures that binary logs are
available for replication.
Let's discuss why the other options are incorrect:

**A:** Enable binlog replication on the RDS primary node. Although related to replication, binlog is enabled
through enabling backups, so it is not a separate step needed as part of the checklist.

**B:** Choose a failover priority for the source DB instance. Failover priority is for Multi-AZ deployments and not
necessary when creating a read replica, which is meant for read scaling.

**D:** Create a global table and specify the AWS Regions where the table will be available. Global tables are
part of DynamoDB, not RDS MySQL. This is completely irrelevant to the task of creating a MySQL read replica.

In summary, ensuring that existing long-running transactions complete and enabling automatic backups are
vital preparatory steps when creating an RDS for MySQL read replica to guarantee data consistency and
enable the replication process.
Supporting documentation:
Creating a Read Replica - Amazon RDS
Working with MySQL and MariaDB Read Replicas

---

## Question 248

**Answer:** **D**

**Explanation:**

The correct solution is D. Here's why:
The problem describes a system where EC2 instances are CPU-bound due to high user load and data
processing demands. The goal is to improve performance and scale based on user demand. **Option D**
addresses this by introducing a queuing mechanism (Amazon SQS) and an Auto Scaling group for the EC2
instances.
Here's a breakdown:

1. Amazon SQS decouples the request handling from processing: Instead of users directly sending
requests to the EC2 instances, they send messages to an SQS queue. This prevents the EC2
instances from being overwhelmed by sudden spikes in requests. This addresses the immediate
problem of 100% CPU utilization and allows the system to handle bursts of requests.

2. EC2 Auto Scaling group dynamically scales based on queue size: The Auto Scaling group monitors
the number of messages in the SQS queue. When the queue size exceeds a certain threshold, the

Auto Scaling group automatically launches additional EC2 instances to process the backlog.
Conversely, when the queue size is low, the Auto Scaling group terminates instances to reduce costs.
This provides the necessary scaling based on user load. This dynamically adjusts resources to meet
the demand.

3. Software update to read from the queue: The analytics software is modified to consume messages
from the SQS queue instead of directly receiving requests from users. This ensures that all requests
are processed in an orderly fashion and that no requests are lost.

Why the other options are incorrect:

**A.** Creating a copy of the instance and using an Application Load Balancer: This would distribute the load
across multiple instances, but if the load is consistently high, all instances will eventually become CPU-bound.
It doesn't address the underlying issue of CPU-intensive processing and doesn't automatically scale based on
demand. It would only provide a limited and static improvement.

**B.** Creating an S3 VPC endpoint: This improves security and reduces network latency when accessing S3, but
it doesn't directly address the CPU bottleneck or the need for scaling based on user load. It improves data
transfer speeds, but it doesn't address the processing bottleneck.

**C.** Stopping and resizing the instance: This provides a temporary performance boost but doesn't scale
automatically with user load. It would resolve the immediate CPU constraint, but it's a manual and temporary
fix.

---

## Question 249

**Answer:** **D**

**Explanation:**

The requirement is a fully managed shared storage solution accessible via SMB clients for a media
application. Let's analyze each option.

**Option A** utilizes AWS Storage Gateway volume gateway. While Storage Gateway can present block storage
over iSCSI, which could be formatted with SMB, it is not a fully managed file sharing solution. The
management of the SMB server and file shares would fall on the user.

**Option B**, AWS Storage Gateway tape gateway, is designed for archival storage and is not suitable for
providing low-latency access for media applications. It primarily interacts with backup software and emulates
tape libraries.

**Option C** involves manually creating an EC2 Windows instance and configuring the SMB file share. This
approach is not fully managed. The user is responsible for patching, scaling, and managing the Windows
instance and the SMB server.

**Option D**, Amazon FSx for Windows File Server, provides a fully managed Windows file system built on
Windows Server. It natively supports the SMB protocol, which directly fulfills the requirement of SMB client
access. It handles patching, backups, and other administrative tasks, reducing operational overhead. FSx for
Windows File Server allows applications to access shared file storage over SMB, which is exactly what the
media application needs. This provides a readily available, scalable, and managed file-sharing solution.

Therefore, option D is the most suitable solution due to its fully managed nature and native SMB support.
Supporting Links:
Amazon FSx for Windows File Server: https://aws.amazon.com/fsx/windows/
AWS Storage Gateway: https://aws.amazon.com/storagegateway/

---

## Question 250

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a cost-effective and compliant solution for storing and accessing
VPC Flow Logs according to the company's requirements.
Here's a detailed breakdown:
The company needs frequent access for 90 days, followed by infrequent access. This immediately points to
tiered storage as a suitable solution. Amazon S3 offers different storage classes optimized for various access
patterns and cost considerations.

**Option A** (CloudWatch): CloudWatch Logs are primarily designed for real-time monitoring and alerting, not
long-term storage of large volumes of data like VPC Flow Logs. While you can set an expiration, frequent
access and cost efficiency for 90 days would be better served by S3.

**Option B** (Kinesis): Kinesis is designed for real-time data streaming and processing. Retaining logs in Kinesis
for 90 days would be unnecessarily expensive compared to S3, which is designed for storing large volumes of
data.

**Option C** (CloudTrail): CloudTrail logs API calls and user activity in your AWS account. It's not designed to
capture network traffic data like VPC Flow Logs. Furthermore, while CloudTrail logs can be stored in S3 with
Intelligent-Tiering, using CloudTrail solely for capturing VPC Flow Logs is not the intended purpose.
CloudTrail focuses on auditing and governance.

**Option D** (S3 with Lifecycle Policy): This option aligns perfectly with the requirements. VPC Flow Logs can be
directly stored in an S3 bucket. An S3 Lifecycle policy can then be configured to automatically transition the
logs from the more expensive, frequently accessed S3 Standard storage class to the less expensive S3
Standard-Infrequent Access (S3 Standard-IA) storage class after 90 days. S3 Standard-IA is optimized for
data that is infrequently accessed but requires rapid access when needed. This achieves cost efficiency for
data accessed after the initial 90-day period. This directly addresses the intermittent access requirement.
In conclusion, using Amazon S3 as the target with an S3 Lifecycle policy that transitions logs to S3 StandardIA after 90 days is the most cost-effective and appropriate solution for storing and accessing VPC Flow Logs
based on the stated requirements.
Here are some authoritative links for further research:
VPC Flow Logs: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html
Amazon S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
S3 Lifecycle Policies: https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configurationexamples.html

---

# Quick Answer Sheet

Question 201: B
Question 202: B
Question 203: D
Question 204: C
Question 205: C
Question 206: C
Question 207: D
Question 208: A
Question 209: A
Question 210: D
Question 211: D
Question 212: A
Question 213: A
Question 214: B
Question 215: A
Question 216: B
Question 217: A
Question 218: AE
Question 219: D
Question 220: B
Question 221: D
Question 222: A
Question 223: AD
Question 224: CE
Question 225: B
Question 226: AE
Question 227: B
Question 228: C
Question 229: A
Question 230: C
Question 231: B
Question 232: C
Question 233: AB
Question 234: C
Question 235: C
Question 236: D
Question 237: A
Question 238: C
Question 239: A
Question 240: D
Question 241: C
Question 242: C
Question 243: A
Question 244: C
Question 245: A
Question 246: D
Question 247: CE
Question 248: D
Question 249: D
Question 250: D
