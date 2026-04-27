# AWS SAA-C03 Practice Test: Questions 151-200

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 151

A company wants to migrate its on-premises data center to AWS. According to the company's compliance
requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to
connect VPCs to the internet.
Which solutions will meet these requirements? (Choose two.)

**A.** Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to

all AWS Regions except ap-northeast-3.

**B.** Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in
the AWS account settings.

**C.** Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet
access. Deny access to all AWS Regions except ap-northeast-3.

**D.** Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM
policy for each user to prevent the use of any AWS Region other than ap-northeast-3.

**E.** Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert
for new resources deployed outside of ap-northeast-3.

---

## Question 152

A company uses a three-tier web application to provide training to new employees. The application is accessed for
only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and
wants to minimize costs.
What should a solutions architect do to meet these requirements?

**A.** Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy.
Update the trust relationship of the role. Set up automatic start and stop for the DB instance.

**B.** Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from
the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.

**C.** Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to
the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.

**D.** Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon
CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event
targets for the rules.

---

## Question 153

A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in
Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are
infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most
accessed files readily available for its users.
Which action should the company take to meet these requirements MOST cost-effectively?

**A.** Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.

**B.** Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after
90 days.

**C.** Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard1A) after 90 days.

**D.** Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent
Access (S3 Standard-1A) after 90 days.

---

## Question 154

A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a
few scientists to add new files and must restrict all other users to read-only access. No users can have the ability
to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of
1 year after its creation date.
Which solution will meet these requirements?

**A.** Use S3 Object Lock in governance mode with a legal hold of 1 year.

**B.** Use S3 Object Lock in compliance mode with a retention period of 365 days.

**C.** Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket
policy to only allow the IAM role.

**D.** Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the
function to track the hash of the saved object so that modified objects can be marked accordingly.

---

## Question 155

A large media company hosts a web application on AWS. The company wants to start caching confidential media
files so that users around the world will have reliable access to the files. The content is stored in Amazon S3
buckets. The company must deliver the content quickly, regardless of where the requests originate
geographically.
Which solution will meet these requirements?

**A.** Use AWS DataSync to connect the S3 buckets to the web application.

**B.** Deploy AWS Global Accelerator to connect the S3 buckets to the web application.

**C.** Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.

**D.** Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.

---

## Question 156

A company produces batch data that comes from different databases. The company also produces live stream
data from network sensors and application APIs. The company needs to consolidate all the data into one place for
business analytics. The company needs to process the incoming data and then stage the data in different Amazon
S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key
performance indicators (KPIs).
Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

**A.** Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.

**B.** Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for
KPIs.

**C.** Create custom AWS Lambda functions to move the individual records from the databases to an Amazon
Redshift cluster.

**D.** Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data
into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.

**E.** Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS
Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.

---

## Question 157

A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5
years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that
are performed within the database. Currently, the company has automated backups configured for Aurora.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Take a manual snapshot of the DB cluster.

**B.** Create a lifecycle policy for the automated backups.

**C.** Configure automated backup retention for 5 years.

**D.** Configure an Amazon CloudWatch Logs export for the DB cluster.

**E.** Use AWS Backup to take the backups and to keep the backups for 5 years.

---

## Question 158

A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be
streamed in real time and then will be available on demand. The event is expected to attract a global online
audience.
Which service will improve the performance of both the real-time and on-demand streaming?

**A.** Amazon CloudFront

**B.** AWS Global Accelerator

**C.** Amazon Route 53

**D.** Amazon S3 Transfer Acceleration

---

## Question 159

A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS
Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.
Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)

**A.** Create a usage plan with an API key that is shared with genuine users only.

**B.** Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.

**C.** Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.

**D.** Convert the existing public API to a private API. Update the DNS records to redirect users to the new API
endpoint.

**E.** Create an IAM role for each user attempting to access the API. A user will assume the role when making the
API call.

---

## Question 160

An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB
of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to
back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30
days.
Which solution meets these requirements MOST cost-effectively?

**A.** Amazon OpenSearch Service (Amazon Elasticsearch Service)

**B.** Amazon S3 Glacier

**C.** Amazon S3 Standard

**D.** Amazon RDS for PostgreSQL

---

## Question 161

A company has a small Python application that processes JSON documents and outputs the results to an onpremises SQL database. The application runs thousands of times each day. The company wants to move the
application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and
minimizes operational overhead.
Which solution will meet these requirements?

**A.** Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances
to process the documents. Store the results in an Amazon Aurora DB cluster.

**B.** Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python
code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB
cluster.

**C.** Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS MultiAttach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2
instances to process the documents. Store the results on an Amazon RDS DB instance.

**D.** Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy
the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured
with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an
Amazon RDS DB instance.

---

## Question 162

A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The
company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is
short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics
and long-term future use.
The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent
storage to make data available for processing by all EC2 instances. The solution should also be a high performance
file system that is integrated with persistent storage to read and write datasets and output files.
Which combination of AWS services meets these requirements?

**A.** Amazon FSx for Lustre integrated with Amazon S3

**B.** Amazon FSx for Windows File Server integrated with Amazon S3

**C.** Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)

**D.** Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS)
General Purpose SSD (gp2) volume

---

## Question 163

A company is building a containerized application on premises and decides to move the application to AWS. The
application will have thousands of users soon after it is deployed. The company is unsure how to manage the
deployment of containers at scale. The company needs to deploy the containerized application in a highly available
architecture that minimizes operational overhead.
Which solution will meet these requirements?

**A.** Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon
Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use
target tracking to scale automatically based on demand.

**B.** Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon
Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use
target tracking to scale automatically based on demand.

**C.** Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2
instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon
CloudWatch. Launch new EC2 instances as needed.

**D.** Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2
instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to
scale out EC2 instances when the average CPU utilization threshold is breached.

---

## Question 164

A company has two applications: a sender application that sends messages with payloads to be processed and a
processing application intended to receive the messages with payloads. The company wants to implement an AWS
service to handle messages between the two applications. The sender application can send about 1,000 messages
each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be
retained so that they do not impact the processing of any remaining messages.
Which solution meets these requirements and is the MOST operationally efficient?

**A.** Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance.
Store, process, and delete the messages, respectively.

**B.** Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the
processing application with the Kinesis Client Library (KCL).

**C.** Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue.
Configure a dead-letter queue to collect the messages that failed to process.

**D.** Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to
receive notifications to process. Integrate the sender application to write to the SNS topic.

---

## Question 165

A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a
static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.
How should the solutions architect comply with these requirements?

**A.** Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN)
only.

**B.** Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from
the S3 origin.

**C.** Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only.
Associate AWS WAF to CloudFront.

**D.** Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the
S3 bucket. Enable AWS WAF on the distribution.

---

## Question 166

Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to
generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions
architect has been asked to design an efficient and effective solution.
Which action should the solutions architect take to accomplish this?

**A.** Generate presigned URLs for the files.

**B.** Use cross-Region replication to all Regions.

**C.** Use the geoproximity feature of Amazon Route 53.

**D.** Use Amazon CloudFront with the S3 bucket as its origin.

---

## Question 167

A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from
an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often
has intermittent traffic. This application should continually process messages without any downtime.
Which solution meets these requirements MOST cost-effectively?

**A.** Use Spot Instances exclusively to handle the maximum capacity required.

**B.** Use Reserved Instances exclusively to handle the maximum capacity required.

**C.** Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.

**D.** Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional
capacity.

---

## Question 168

A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All
accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a
single point where permissions can be maintained.
What should a solutions architect do to accomplish this?

**A.** Create an ACL to provide access to the services or actions.

**B.** Create a security group to allow accounts and attach it to user groups.

**C.** Create cross-account roles in each account to deny access to the services or actions.

**D.** Create a service control policy in the root organizational unit to deny access to the services or actions.

---

## Question 169

A company is concerned about the security of its public web application due to recent web attacks. The application
uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the
application.
What should the solutions architect do to meet this requirement?

**A.** Add an Amazon Inspector agent to the ALB.

**B.** Configure Amazon Macie to prevent attacks.

**C.** Enable AWS Shield Advanced to prevent attacks.

**D.** Configure Amazon GuardDuty to monitor the ALB.

---

## Question 170

A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The
company recently changed its policy, which now requires the application to be accessed from one specific country
only.
Which configuration will meet this requirement?

**A.** Configure the security group for the EC2 instances.

**B.** Configure the security group on the Application Load Balancer.

**C.** Configure AWS WAF on the Application Load Balancer in a VPC.

**D.** Configure the network ACL for the subnet that contains the EC2 instances.

---

## Question 171

A company provides an API to its users that automates inquiries for tax computations based on item prices. The
company experiences a larger number of inquiries during the holiday season only that cause slower response
times. A solutions architect needs to design a solution that is scalable and elastic.
What should the solutions architect do to accomplish this?

**A.** Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations
when the API request is made.

**B.** Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names
to AWS Lambda for tax computations.

**C.** Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will
compute the tax on the received item names.

**D.** Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance.
API Gateway accepts and passes the item names to the EC2 instance for tax computations.

---

## Question 172

A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information
submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive
information should.be protected throughout the entire application stack, and access to the information should be
restricted to certain applications.
Which action should the solutions architect take?

**A.** Configure a CloudFront signed URL.

**B.** Configure a CloudFront signed cookie.

**C.** Configure a CloudFront field-level encryption profile.

**D.** Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol

Policy.

---

## Question 173

A gaming company hosts a browser-based application on AWS. The users of the application consume a large
number of videos and images that are stored in Amazon S3. This content is the same for all users.
The application has increased in popularity, and millions of users worldwide accessing these media files. The
company wants to provide the files to the users while reducing the load on the origin.
Which solution meets these requirements MOST cost-effectively?

**A.** Deploy an AWS Global Accelerator accelerator in front of the web servers.

**B.** Deploy an Amazon CloudFront web distribution in front of the S3 bucket.

**C.** Deploy an Amazon ElastiCache for Redis instance in front of the web servers.

**D.** Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.

---

## Question 174

A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in
a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the
infrastructure to be highly available without modifying the application.
Which architecture should the solutions architect choose that provides high availability?

**A.** Create an Auto Scaling group that uses three instances across each of two Regions.

**B.** Modify the Auto Scaling group to use three instances across each of two Availability Zones.

**C.** Create an Auto Scaling template that can be used to quickly create more instances in another Region.

**D.** Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the
web tier.

---

## Question 175

An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda
function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a
sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not
process the orders of those customers.
A solutions architect determined that the CPU utilization and memory utilization were high on the database
because of a large number of open connections. The solutions architect needs to prevent the timeout errors while
making the least possible changes to the application.

Which solution will meet these requirements?

**A.** Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in
multiple AWS Regions.

**B.** Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy
endpoint instead of the database endpoint.

**C.** Create a read replica for the database in a different AWS Region. Use query string parameters in API
Gateway to route traffic to the read replica.

**D.** Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service
(AWS DMS). Modify the Lambda function to use the DynamoDB table.

---

## Question 176

An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon
DynamoDB table.
What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?

**A.** Use a VPC endpoint for DynamoDB.

**B.** Use a NAT gateway in a public subnet.

**C.** Use a NAT instance in a private subnet.

**D.** Use the internet gateway attached to the VPC.

---

## Question 177

An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive
and experiencing delays. The company does not have staff to handle additional operational overhead and needs to
improve the performance efficiency of DynamoDB without reconfiguring the application.
What should a solutions architect recommend to meet this requirement?

**A.** Use Amazon ElastiCache for Redis.

**B.** Use Amazon DynamoDB Accelerator (DAX).

**C.** Replicate data by using DynamoDB global tables.

**D.** Use Amazon ElastiCache for Memcached with Auto Discovery enabled.

---

## Question 178

A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS
Region. The company wants to back up its data in a separate Region.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.

**B.** Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate
Region.

**C.** Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a
read replica for the RDS DB instance in the separate Region.

**D.** Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate
Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region
Replication (CRR) to the separate Region.

---

## Question 179

A solutions architect needs to securely store a database user name and password that an application uses to
access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance.
The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.
What should the solutions architect do to meet this requirement?

**A.** Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS
Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the
EC2 instance.

**B.** Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an
AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to
the EC2 instance.

**C.** Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify
Amazon RDS as a principal in the trust policy.

**D.** Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager
as a principal in the trust policy.

---

## Question 180

A company is designing a cloud communications platform that is driven by APIs. The application is hosted on
Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide
external users with access to the application through APIs. The company wants to protect the platform against
web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.
Which combination of solutions provides the MOST protection? (Choose two.)

**A.** Use AWS WAF to protect the NLB.

**B.** Use AWS Shield Advanced with the NLB.

**C.** Use AWS WAF to protect Amazon API Gateway.

**D.** Use Amazon GuardDuty with AWS Shield Standard

**E.** Use AWS Shield Standard with Amazon API Gateway.

---

## Question 181

A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed
sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way
that the company can scale the application to meet increased demand is to increase the size of the instances.
The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon
Elastic Container Service (Amazon ECS).
What should a solutions architect recommend for communication between the microservices?

**A.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send
data to the queue. Add code to the data consumers to process data from the queue.

**B.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and
publish notifications to the topic. Add code to the data consumers to subscribe to the topic.

**C.** Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda
function with a data object. Add code to the data consumers to receive a data object that is passed from the
Lambda function.

**D.** Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert
data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table
entries and retrieve the data.

---

## Question 182

A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a
database outage that significantly impacted the business. To ensure this does not happen again, the company
wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two
nodes.
Which solution meets these requirements?

**A.** Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.

**B.** Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate
the data.

**C.** Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that
synchronously replicates the data.

**D.** Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to
synchronously replicate the data to an Amazon RDS MySQL DB instance.

---

## Question 183

A company is building a new dynamic ordering website. The company wants to minimize server maintenance and
patching. The website must be highly available and must scale read and write capacity as quickly as possible to
meet changes in user demand.
Which solution will meet these requirements?

**A.** Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda.
Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver
the website content.

**B.** Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda.
Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the
website content.

**C.** Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2
instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write
capacity for the database.

**D.** Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2
instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling
for the database.

---

## Question 184

A company has an AWS account used for software engineering. The AWS account has access to the company’s onpremises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual
private gateway.
A development team recently created an AWS Lambda function through the console. The development team
needs to allow the function to access a database that runs in a private subnet in the company’s data center.
Which solution will meet these requirements?

**A.** Configure the Lambda function to run in the VPC with the appropriate security group.

**B.** Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through
the VPN.

**C.** Update the route tables in the VPC to allow the Lambda function to access the on-premises data center
through Direct Connect.

**D.** Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address
without an elastic network interface.

---

## Question 185

A company runs an application using Amazon ECS. The application creates resized versions of an original image
and then makes Amazon S3 API calls to store the resized images in Amazon S3.
How can a solutions architect ensure that the application has permission to access Amazon S3?

**A.** Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the
container.

**B.** Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.

**C.** Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch
configuration used by the ECS cluster.

**D.** Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster
while logged in as this account.

---

## Question 186

A company has a Windows-based application that must be migrated to AWS. The application requires the use of a
shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across
multiple Availability Zone:
What should a solutions architect do to meet this requirement?

**A.** Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.

**B.** Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows
instance.

**C.** Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to
each Windows instance.

**D.** Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2
instance to the volume. Mount the file system within the volume to each Windows instance.

---

## Question 187

A company is developing an ecommerce application that will consist of a load-balanced front end, a containerbased application, and a relational database. A solutions architect needs to create a highly available solution that
operates with as little manual intervention as possible.
Which solutions meet these requirements? (Choose two.)

**A.** Create an Amazon RDS DB instance in Multi-AZ mode.

**B.** Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.

**C.** Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.

**D.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the
dynamic application load.

**E.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to
handle the dynamic application load.

---

## Question 188

A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data
files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational
overhead.
Which solution will meet these requirements?

**A.** Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose
the S3 data lake as the destination.

**B.** Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new
partner. Share the S3 File Gateway endpoint with the new partner.

**C.** Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2
instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.

**D.** Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of
the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner.
Run a cron job script on the EC2 instances to upload files to the S3 data lake.

---

## Question 189

A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company
must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents
at rest and rotate the encryption keys automatically every year.
Which combination of steps should a solutions architect take to meet these requirements with the LEAST
operational overhead? (Choose two.)

**A.** Store the documents in Amazon S3. Use S3 Object Lock in governance mode.

**B.** Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.

**C.** Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.

**D.** Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys.
Configure key rotation.

**E.** Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported)
keys. Configure key rotation.

---

## Question 190

A company has a web application that is based on Java and PHP. The company plans to move the application from
on premises to AWS. The company needs the ability to test new site features frequently. The company also needs
a highly available and managed solution that requires minimum operational overhead.
Which solution will meet these requirements?

**A.** Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the
S3 bucket. Use AWS Lambda to process all dynamic content.

**B.** Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between
multiple Elastic Beanstalk environments for feature testing.

**C.** Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto
Scaling groups and an Application Load Balancer to manage the website’s availability.

**D.** Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load
Balancer Controller to dynamically route traffic between containers that contain the new site features for
testing.

---

## Question 191

A company has an ordering application that stores customer information in Amazon RDS for MySQL. During
regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during
order processing because the reporting queries are taking a long time to run. The company needs to eliminate the
timeouts without preventing employees from performing queries.
What should a solutions architect do to meet these requirements?

**A.** Create a read replica. Move reporting queries to the read replica.

**B.** Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.

**C.** Migrate the ordering application to Amazon DynamoDB with on-demand capacity.

**D.** Schedule the reporting queries for non-peak hours.

---

## Question 192

A hospital wants to create digital copies for its large collection of historical written records. The hospital will
continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will
upload the documents to the AWS Cloud.
A solutions architect must implement a solution to analyze the documents, extract the medical information, and
store the documents so that an application can run SQL queries on the data. The solution must maximize
scalability and operational efficiency.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

**A.** Write the document information to an Amazon EC2 instance that runs a MySQL database.

**B.** Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.

**C.** Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the
scanned files and extracts the medical information.

**D.** Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to
convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical
information from the text.

**E.** Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to
convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical
information from the text.

---

## Question 193

A company is running a batch application on Amazon EC2 instances. The application consists of a backend with
multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions
architect must reduce the number of database reads while ensuring high availability.
What should the solutions architect do to meet this requirement?

**A.** Add Amazon RDS read replicas.

**B.** Use Amazon ElastiCache for Redis.

**C.** Use Amazon Route 53 DNS caching

**D.** Use Amazon ElastiCache for Memcached.

---

## Question 194

A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s
database. The database must be highly available and must fail over automatically if a disruptive event occurs.
Which solution will meet these requirements?

**A.** Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database
on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.

**B.** Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon
Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2
instance if a disruptive event occurs.

**C.** Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set
up database replication. Fail over the database to a second Region.

**D.** Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon
Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive
event occurs.

---

## Question 195

A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the
orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when
the system fails. The company wants a resilient solution that can process orders automatically if a system outage
occurs.
What should a solutions architect do to meet these requirements?

**A.** Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch
Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.

**B.** Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the
order system to send messages to the ALB endpoint.

**C.** Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an
Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from
the queue.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and
subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a
command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.

---

## Question 196

A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries
into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs
only data from the last 30 days. The company needs a solution that minimizes cost and development effort.
Which solution meets these requirements?

**A.** Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack
every 30 days, and delete the original stack.

**B.** Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring
application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table.
Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.

**C.** Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the
table. Configure the Lambda function to delete items in the table that are older than 30 days.

**D.** Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each
new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.

---

## Question 197

A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores
data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants
to minimize development changes while moving the application. The AWS application environment should be
highly available.
Which combination of actions should the company take to meet these requirements? (Choose two.)

**A.** Refactor the application as serverless with AWS Lambda functions running .NET Core.

**B.** Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.

**C.** Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).

**D.** Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon
DynamoDB in a Multi-AZ deployment.

**E.** Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon
RDS in a Multi-AZ deployment.

---

## Question 198

A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is
using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS,
but no code changes or deployment method changes are possible at this time. The company needs a solution that
minimizes operational overhead.
Which solution meets these requirements?

**A.** Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and
MongoDB on EC2 for data storage.

**B.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB
for data storage

**C.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and
Amazon DynamoDB for data storage.

**D.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon
DocumentDB (with MongoDB compatibility) for data storage.

---

## Question 199

A telemarketing company is designing its customer call center functionality on AWS. The company needs a
solution that provides multiple speaker recognition and generates transcript files. The company wants to query the
transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing
purposes.
Which solution will meet these requirements?

**A.** Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use
machine learning models for transcript file analysis.

**B.** Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.

**C.** Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use
SQL queries for transcript file analysis.

**D.** Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use
Amazon Textract for transcript file analysis.

---

## Question 200

A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in
to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is
hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the
REST API to reduce development efforts.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the
request.

**B.** For each user, create and assign an API key that must be sent with each request. Validate the key by using an
AWS Lambda function.

**C.** Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate
that the user with that email address has proper access.

**D.** Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each
request.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 151

**Answer:** **AC**

**Explanation:**

The correct answer is AC. Here's why:

**A.** Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access
to all AWS Regions except ap-northeast-3.
AWS Control Tower is designed to manage and govern multi-account AWS environments. One of its core
functionalities is to enforce policies and compliance across an organization. Control Tower's guardrails
provide preventative or detective controls. Data residency guardrails, specifically, can enforce that data
resides within a specified region. Guardrails can also prevent resources from being created in non-compliant
regions. Moreover, Control Tower can enforce guardrails that prevent VPCs from having direct internet
access, usually by denying the creation of Internet Gateways or NAT Gateways. This directly addresses both
the regional compliance and the no-internet-access requirements. Control Tower provides centralized
governance.

**C.** Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining
internet access. Deny access to all AWS Regions except ap-northeast-3.
AWS Organizations allows you to centrally manage and govern multiple AWS accounts. Service Control
Policies (SCPs) are a key feature of Organizations. SCPs act as permission boundaries, controlling the
maximum permissions available to accounts within an organization. You can create an SCP that explicitly
denies the creation of Internet Gateways (IGWs) and NAT Gateways, which are the primary methods for a VPC
to access the internet. You can also create an SCP that denies the creation of any resource in regions other
than ap-northeast-3. This prevents users from creating resources in unapproved regions, thereby ensuring
compliance. SCPs apply to all users and roles within the affected accounts (excluding the management
account root user) and can't be overridden by IAM policies within those accounts. This provides a strong,
centrally enforced compliance mechanism.

Why the other options are incorrect:

**B.** Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast3 in the AWS account settings. AWS WAF protects web applications, not VPC infrastructure. There's no
"deny access to all AWS Regions" setting in the account settings.

**D.** Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an
IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3. Network ACLs
are a good security layer but can be complex to manage at scale across many VPCs. IAM policies per user,
while effective, are difficult to manage compared to centralized control via SCPs, which provides centralized
governance.

**E.** Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and
alert for new resources deployed outside of ap-northeast-3. AWS Config detects and alerts on noncompliant configurations. It does not prevent the creation of resources or internet gateways, so it's detective,

not preventative. The requirement is to prevent internet access and resource creation in unapproved regions.
Supporting Links:
AWS Control Tower: https://aws.amazon.com/controltower/
AWS Organizations: https://aws.amazon.com/organizations/
Service Control Policies (SCPs):
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html

---

## Question 152

**Answer:** **D**

**Explanation:**

The most cost-effective solution for stopping and starting an RDS instance based on a schedule is using AWS
Lambda and Amazon EventBridge (formerly CloudWatch Events). Lambda allows you to execute code without
provisioning or managing servers. EventBridge triggers Lambda functions based on a defined schedule.

**Option D** provides a simple, serverless way to automate the on/off cycle of the RDS instance.

**Option A**, while mentioning IAM, focuses on using Systems Manager Session Manager, which isn't directly
related to scheduling the instance's on/off state. Systems Manager is typically used for managing EC2
instances, not directly controlling RDS start/stop functions.

**Option B** involves implementing ElastiCache. ElastiCache is for caching data to improve application
performance, not for substituting a database while it's stopped. While technically feasible to store some data
in ElastiCache, it adds unnecessary complexity and cost for the given requirement of cost optimization for an
intermittently used RDS instance. The primary data store is the RDS database itself. Switching to and
invalidating caches is more complex than simply stopping and starting the RDS instance.

**Option C** involves creating an EC2 instance and using cron jobs. While feasible, this approach requires
managing an EC2 instance, increasing operational overhead and cost compared to a serverless approach. The
EC2 instance would need to be running constantly to trigger the start/stop scripts, negating some of the cost
savings intended.
Lambda and EventBridge (**Option D**) eliminate the need to manage a dedicated server or complex caching
strategies. Lambda function execution time is charged by the millisecond, making it extremely cost-effective
for this use case. EventBridge provides a reliable and scalable scheduling mechanism. The Lambda functions
will only run when invoked by EventBridge, thus consuming very few resources overall and minimizing costs
during idle periods.

In summary, using Lambda and EventBridge provides a serverless, event-driven, and cost-optimized approach
for automatically starting and stopping an RDS instance based on a predefined schedule, directly addressing
the business requirement of minimizing costs while only needing access for 12 hours per day.
Supporting Links:
AWS Lambda: https://aws.amazon.com/lambda/
Amazon EventBridge: https://aws.amazon.com/eventbridge/
Starting and Stopping an RDS Instance:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html

---

## Question 153

**Answer:** **D**

**Explanation:**

The correct answer is D. Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3
Standard-Infrequent Access (S3 Standard-IA) after 90 days.

Here's why:
The company needs to reduce storage costs for infrequently accessed ringtones (older than 90 days) while
ensuring frequently accessed files remain readily available. S3 Lifecycle policies are designed precisely for
this purpose. They automate the movement of objects between different storage classes based on predefined
rules, like age.

**Option D** directly addresses the requirements: An S3 Lifecycle policy can be configured to transition objects
from S3 Standard (the initial storage class) to S3 Standard-IA after 90 days. This is a cost-effective way to
store infrequently accessed data while maintaining quick retrieval times when needed.
Let's analyze why the other options are less optimal:

**Option A** (S3 Standard-IA initially): While S3 Standard-IA is cheaper than S3 Standard, it incurs retrieval
costs. Initially storing all files in Standard-IA would unnecessarily add retrieval costs for files that are
frequently accessed in the first 90 days. This would be less cost-effective than using Standard initially.

**Option B** (S3 Intelligent-Tiering): S3 Intelligent-Tiering automatically moves data between tiers based on
access patterns. While it sounds suitable, it includes a monthly monitoring and automation fee per object, and
the question specifies millions of files. For objects only accessed infrequently after 90 days, this monitoring
fee can quickly surpass the cost savings of moving to infrequent access tiers, especially when a simpler
lifecycle rule is sufficient. While efficient, intelligent tiering is more costly for data that is almost guaranteed
to be accessed infrequently after a certain period.

**Option C** (S3 Inventory and manual move): S3 Inventory provides a list of objects and their metadata. While
useful for auditing, it doesn't automate the transition. The question requires automation to reduce operational
overhead. Using S3 Inventory to trigger manual moves would involve custom scripting or manual intervention,
which is less efficient and more complex than an S3 Lifecycle policy.

In summary, S3 Lifecycle policies are the most straightforward and cost-effective method for automatically
moving objects between storage classes based on their age, directly addressing the company's needs without
unnecessary complexity or additional fees.

---

## Question 154

**Answer:** **B**

**Explanation:**

The correct answer is B: Use S3 Object Lock in compliance mode with a retention period of 365 days. Here's
why:
Requirement for Immutability: The core requirement is that no user can modify or delete any files in the S3
repository. This necessitates immutability.
S3 Object Lock: S3 Object Lock is designed to prevent objects from being deleted or overwritten for a fixed
amount of time or indefinitely. This addresses the immutability requirement directly. There are two modes:
compliance and governance.
Compliance Mode: In compliance mode, even the root user cannot override the retention settings. Once a
retention period is set, it's strictly enforced. This aligns perfectly with the strict requirement that no users can
delete or modify files.
Governance Mode: Governance mode allows users with specific IAM permissions to bypass the retention
settings. This is not suitable since the problem specifies that no users should be able to bypass the retention
policy.
Retention Period of 365 Days: The requirement of keeping every file for a minimum of one year (365 days) is
satisfied by setting the retention period accordingly.

Why other options are incorrect:

**A:** S3 Object Lock in governance mode with a legal hold of 1 year. While governance mode provides a level of
immutability, authorized users can remove legal holds. This contradicts the requirement that no users can
modify or delete files.

**C:** IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy
to only allow the IAM role. IAM and bucket policies can restrict access, but they don't guarantee
immutability. A user with sufficient permissions could still modify or delete objects. This is a preventative
measure, not a guaranteed solution.

**D:** Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the
function to track the hash of the saved object so that modified objects can be marked accordingly. This
approach is complex, inefficient, and doesn't prevent modification or deletion. It only detects changes after
they occur, which violates the problem's core immutability requirement. S3 Object Lock provides a native and
much simpler solution.

In summary, S3 Object Lock in compliance mode directly enforces immutability and the specified retention
period, making it the most appropriate and efficient solution.

---

## Question 155

**Answer:** **C**

**Explanation:**

The correct answer is C: Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.

Here's a detailed justification:
The primary requirement is to cache confidential media files stored in S3 for fast and reliable delivery to users
globally. Amazon CloudFront is a content delivery network (CDN) specifically designed for this purpose.
CloudFront caches content at edge locations distributed around the world. When a user requests a file,
CloudFront serves it from the nearest edge location, minimizing latency and improving performance. Since the
content is stored in S3, CloudFront can be configured as the front-end delivery mechanism.

**Option A**, using AWS DataSync, is incorrect because DataSync is used for transferring large amounts of data
between on-premises storage and AWS storage services. It is not designed for real-time content delivery or
caching.

**Option B**, deploying AWS Global Accelerator, is not ideal for this scenario. Global Accelerator improves the

performance of TCP and UDP traffic by routing user traffic to the optimal AWS endpoint. While it can improve
performance, it doesn't provide content caching like CloudFront. Further, CloudFront offers fine-grained
control over content caching policies and integrates directly with S3 for content delivery.

**Option D**, using Amazon SQS, is incorrect because SQS is a message queue service used for decoupling
components of distributed applications. It's not related to content delivery or caching. SQS does not cache
content or improve latency for end users downloading media files.
CloudFront offers several benefits for this use case:
Global Reach: Edge locations are strategically located worldwide for low latency delivery.
Caching: Content is cached at edge locations, reducing load on S3 and speeding up delivery.
Security: Can be integrated with AWS WAF and provides features for securing content, including signed
URLs.
Integration with S3: Seamless integration with S3 for origin storage.
Customizable caching behavior: CloudFront allows you to define how long content is cached and can
invalidate content based on your business needs.
For further reading:
Amazon CloudFront Documentation
Amazon S3 Documentation

---

## Question 156

**Answer:** **AE**

**Explanation:**

The best combination for this scenario is A and E.

Here's why:

**A.** Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.
Athena is a serverless, interactive query service that directly analyzes data in S3 using standard SQL. This
eliminates the need for managing infrastructure and simplifies one-time queries.
https://aws.amazon.com/athena/
QuickSight is a fully managed, serverless BI service that allows easy dashboard creation and KPI visualization.

It integrates seamlessly with Athena (and other AWS data sources). https://aws.amazon.com/quicksight/
Combined, these services provide a straightforward, low-overhead solution for ad-hoc analysis and KPI
reporting from the data consolidated in S3.

**E.** Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use
AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet
format.
Lake Formation simplifies the setup of a data lake, automatically discovering and cataloging data. Blueprints
help automate the creation of data lakes from common data sources. https://aws.amazon.com/lake-formation/
AWS Glue is a fully managed ETL service that automates the process of data discovery, transformation, and
loading. Its crawlers can infer schema and load the data in different formats into S3.
https://aws.amazon.com/glue/
Parquet is a columnar storage format, optimizing data retrieval for analytics and is ideal for Athena queries.
By using Lake Formation and Glue, the company minimizes operational overhead by automating the data
ingestion, transformation and cataloging processes.
Why other options are less ideal:

**B:** Kinesis Data Analytics is designed for real-time streaming data analysis. It isn't the optimal choice for onetime queries against batch data or staged data.

**C:** Creating custom Lambda functions to move individual records from databases to Redshift is complex, highoverhead, and doesn't scale well. It increases operational burden and costs.

**D:** OpenSearch Service is typically used for search and log analytics, not for general-purpose data
warehousing or BI workloads. Converting the data to JSON and loading it into OpenSearch is less efficient
than using Parquet and Athena. The need to manage multiple OpenSearch Clusters adds to overhead.

---

## Question 157

**Answer:** **DE**

**Explanation:**

The correct answer is DE. Let's break down why:

**D.** Configure an Amazon CloudWatch Logs export for the DB cluster: This is crucial for meeting the
requirement of indefinitely keeping audit logs. Aurora PostgreSQL generates audit logs, which can be
streamed to CloudWatch Logs. From there, you can retain them indefinitely, satisfying the audit log
requirement.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess. Concepts. PostgreSQL.html
and https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/postgresql_cloudwatch_logs.html

**E.** Use AWS Backup to take the backups and to keep the backups for 5 years: AWS Backup provides a

centralized service to manage and automate backups across AWS services, including Aurora. You can define
backup plans that specify the backup frequency and retention period. Setting the retention period to 5 years
ensures the data is retained as required and automatically deleted after that period.
https://aws.amazon.com/backup/
Now, let's address why the other options are incorrect:

**A.** Take a manual snapshot of the DB cluster: While you could take a manual snapshot, this doesn't automate
the 5-year retention and deletion requirement. It would require manual intervention to delete the snapshot
after 5 years. Also, it's a one-time event rather than a managed backup strategy.

**B.** Create a lifecycle policy for the automated backups: You cannot directly apply a lifecycle policy (like
those used with S3) to RDS automated backups. Automated backups are managed by RDS itself and have a
retention period configured within RDS.

**C.** Configure automated backup retention for 5 years: While this would meet the 5-year retention
requirement, Aurora managed automated backups are not designed for long-term archiving like this. Using
only automated backups would also not address indefinite audit logging. Using AWS Backup is a best practice
for long-term retention and compliance of DB clusters.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html

---

## Question 158

**Answer:** **A**

**Explanation:**

Amazon CloudFront is the optimal choice because it's a content delivery network (CDN) designed to distribute
content with low latency and high transfer speeds globally. For real-time streaming, CloudFront caches the
streaming content at edge locations closer to users, minimizing latency and buffering. This is achieved
through its extensive network of edge servers strategically located worldwide. For on-demand streaming,
CloudFront also caches video files, ensuring quick delivery to users regardless of their location.
AWS Global Accelerator primarily focuses on improving TCP and UDP performance for applications over long
distances by routing traffic through optimized AWS network paths. While it could improve network
performance, it doesn't offer the caching benefits of CloudFront.
Amazon Route 53 is a highly available and scalable DNS web service. It translates domain names into IP
addresses, but it doesn't cache content or improve content delivery performance directly. While it can be
integrated with CloudFront, it is not a solution for improving both real-time and on-demand streaming
performance.
Amazon S3 Transfer Acceleration accelerates transfers into and out of S3 buckets, but it doesn't directly
address the needs of live and on-demand streaming to a global audience in the same way a CDN like

CloudFront does. It's more suitable for accelerating data uploads to S3 rather than content delivery.

Therefore, CloudFront’s caching capabilities, global edge locations, and integration with other AWS services
make it ideal for optimizing both real-time and on-demand streaming experiences for a global audience.
Here are some authoritative links for further research:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
Amazon Route 53: https://aws.amazon.com/route53/
Amazon S3 Transfer Acceleration: https://aws.amazon.com/s3/transfer-acceleration/

---

## Question 159

**Answer:** **AC**

**Explanation:**

The correct answer is AC. Here's a detailed justification:

**A.** Create a usage plan with an API key that is shared with genuine users only.
API Keys in Amazon API Gateway can be used to control access to your API and prevent unauthorized access.
By creating a usage plan and associating an API key with it, you can distribute the key to legitimate users
only. API Gateway then verifies the API key on each request and only allows requests with valid API keys to
proceed. This approach helps block traffic from bots that do not possess the correct API key.
https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html

**C.** Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.
AWS WAF (Web Application Firewall) protects your web applications from common web exploits and bots
that could affect availability, compromise security, or consume excessive resources. WAF allows you to
create custom rules that target specific request patterns, such as those originating from known botnet IP
addresses or those that exhibit suspicious behavior. By setting up WAF rules to identify and block these
malicious requests, you can effectively filter out the fraudulent traffic hitting your API Gateway endpoint. The
actions triggered could include blocking the requests, allowing the requests after inspection, or logging the
requests for further analysis. https://aws.amazon.com/waf/

Why other options are incorrect:

**B.** Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses: While
feasible, this approach is less efficient and scalable. It adds complexity to the Lambda function, consumes
Lambda execution time checking IP addresses, and requires constant updates to the Lambda function as

botnets evolve. It's better to handle this at the API Gateway or WAF layer.

**D.** Convert the existing public API to a private API. Update the DNS records to redirect users to the new API
endpoint: Converting to a private API would indeed block public access. However, it doesn't solve the
fundamental problem of distinguishing between legitimate and fraudulent users within the now-controlled
access. It would severely affect genuine public users, which is not desirable according to the question.

**E.** Create an IAM role for each user attempting to access the API. A user will assume the role when making
the API call: Creating individual IAM roles for each user is overkill for a publicly accessible application dealing
with botnet attacks. IAM roles are better suited for internal or controlled access, not for scaling to potentially
thousands or millions of users. Furthermore, bots could still potentially assume these roles if they can gain
access to user credentials.

---

## Question 160

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C, Amazon S3 Standard, is the most cost-effective solution for
the given scenario, along with supporting concepts and authoritative links:
The problem requires a disaster recovery backup solution for 300 MB of JSON data generated monthly by an
analytics application. Key requirements are millisecond access time and a 30-day retention period. Costeffectiveness is paramount.
Amazon S3 Standard offers high durability, availability, and performance for frequently accessed data. It
provides low latency, making it suitable for the required millisecond access time. Its cost is relatively low
compared to alternatives that are designed for ultra-low latency transactional workloads. For 300MB, the
cost is negligible. https://aws.amazon.com/s3/storage-classes/
Amazon OpenSearch Service (Amazon Elasticsearch Service) is primarily used for search and analytics.
While it provides fast access, it is significantly more expensive than S3 for simply storing and retrieving
300MB of data. It also involves more operational overhead (managing clusters, scaling). It's overkill for just a
backup requirement.
Amazon S3 Glacier is designed for long-term archival storage with infrequent access. Retrieval times range
from minutes to hours, violating the millisecond access requirement. While Glacier is cheap for storage,
retrieval costs can be substantial if the data is needed frequently.
Amazon RDS for PostgreSQL is a relational database service, not suitable for storing JSON data as a simple
backup. Storing JSON in a database would introduce unnecessary complexity and cost for this backup
purpose. Additionally, managing a database for a 300MB backup is extremely inefficient.

Considering the speed requirement and the need for cost optimization, Amazon S3 Standard emerges as the
most fitting choice. It offers the necessary performance while remaining budget-friendly for a small dataset.
It aligns perfectly with the characteristics of data backup where quick retrieval capabilities are important,
making it a cost-effective solution to this disaster recovery concerns.

---

## Question 161

**Answer:** **B**

**Explanation:**

**Option B** is the most suitable solution because it leverages serverless technologies and managed services to
meet the requirements of high availability, scalability, and minimal operational overhead. Placing JSON
documents in an Amazon S3 bucket triggers an AWS Lambda function upon arrival of a new document.
Lambda functions are event-driven and automatically scale to handle incoming requests, eliminating the need
for manual server management. Lambda's pay-per-use model minimizes cost when the application is idle.
The Python code executed within the Lambda function processes the JSON documents. Storing the results in
an Amazon Aurora DB cluster offers high availability and scalability. Aurora automatically manages database
infrastructure, including replication and failover, reducing operational burden. Aurora is also compatible with
MySQL and PostgreSQL, simplifying migration from on-premises SQL databases.

**Option A** requires managing EC2 instances, including patching, scaling, and ensuring high availability, which
adds operational overhead. EBS Multi-Attach (**Option C**) has limitations on the number of instances and can
introduce complexity in managing shared storage. Amazon SQS with ECS (**Option D**) is a viable solution for
asynchronous processing, but using EC2 launch type adds operational overhead for managing the underlying
EC2 instances. Lambda is generally more cost-effective and requires less management for this use case.

In summary, **Option B** is the best choice as it combines the scalability and event-driven nature of Lambda with
the high availability and managed nature of Aurora, offering a serverless solution that minimizes operational
overhead and maximizes scalability.
References:
AWS Lambda: https://aws.amazon.com/lambda/
Amazon S3: https://aws.amazon.com/s3/

Amazon Aurora: https://aws.amazon.com/rds/aurora/

---

## Question 162

**Answer:** **A**

**Explanation:**

The best solution for the company's HPC workload requirements is A. Amazon FSx for Lustre integrated with
Amazon S3. Here's why:
High-Performance File System: FSx for Lustre is designed for high-performance computing, machine
learning, and media processing workloads. It provides a parallel distributed file system that can handle the
demands of HPC applications. https://aws.amazon.com/fsx/lustre/
Integration with S3: FSx for Lustre seamlessly integrates with Amazon S3. You can configure it to
automatically copy data from S3 buckets to the file system for processing, and then export the output files
back to S3 for long-term storage and analytics. This addresses the requirement of moving on-premises data
(via S3) and storing output. https://docs.aws.amazon.com/fsx/latest/LustreGuide/import-data-repo.html
Scalability and Spot Instances: FSx for Lustre can scale to meet the demands of hundreds of EC2 Spot
Instances, providing the necessary performance for the company's short-lived, intensive workloads.
Linux Compatibility: Lustre is a Linux-based file system, which aligns with the company's requirement of
running HPC workloads on Linux.
Persistent Storage: Amazon S3 provides highly durable and scalable object storage, ensuring long-term
persistence for the output files. https://aws.amazon.com/s3/
Why other options are not ideal:

**B.** Amazon FSx for Windows File Server: While FSx for Windows File Server is a fully managed, highly
reliable, and scalable file storage, it's optimized for Windows-based workloads, not Linux HPC workloads.

**C.** Amazon S3 Glacier integrated with Amazon EBS: S3 Glacier is designed for long-term archival storage
and is not suitable for the high-performance read/write requirements of HPC workflows. EBS is block storage
attached to an EC2 instance, not designed for shared high performance access required by multiple
instances.

**D.** Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS)
General Purpose SSD (gp2) volume: While S3 is persistent, directly using S3 and EBS would not provide the
high-performance parallel file system needed for the HPC workload. The general purpose SSD also isn't
suited for this task.

In conclusion, Amazon FSx for Lustre integrated with Amazon S3 provides the best combination of high
performance, scalability, Linux compatibility, and integration with persistent storage to meet the company's
HPC workload requirements.

---

## Question 163

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides a fully managed, highly scalable, and highly available solution
with minimal operational overhead. Here's a breakdown:
Amazon ECR (Elastic Container Registry): Storing container images in ECR provides a secure, scalable, and
reliable registry for storing and managing your Docker container images. It eliminates the need to manage
your own container registry on EC2, reducing operational overhead. https://aws.amazon.com/ecr/
Amazon ECS (Elastic Container Service) with Fargate Launch Type: ECS is a fully managed container
orchestration service. Using the Fargate launch type abstracts away the underlying EC2 infrastructure
management. Fargate manages the scaling, patching, and security of the underlying compute resources,
significantly reducing operational overhead. https://aws.amazon.com/ecs/fargate/
Target Tracking Scaling: ECS allows you to automatically scale your services based on metrics like CPU
utilization or request count. Target tracking automatically adjusts the number of tasks to maintain a specified
target value for a chosen metric. This simplifies scaling and ensures optimal resource utilization.
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html

**Option B** is incorrect because using the EC2 launch type requires you to manage the underlying EC2
instances, which introduces significant operational overhead, contradicting the problem's requirements.
Options C and D are even less suitable. They require manual management of EC2 instances for container
deployment and scaling, negating the requirement to minimize operational overhead. They also lack the
inherent scalability and availability of managed container orchestration services like ECS with Fargate.
Building container images into AMIs is not a best practice for container deployments; it's better to build
images separately and deploy them via container orchestration. Also, **Option C** suggests a container image
repository on an EC2 instance which could become a single point of failure.

---

## Question 164

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, and why the other options are less suitable:
Why **Option C** (Amazon SQS with Dead-Letter Queue) is the best:
Amazon Simple Queue Service (SQS) is a fully managed message queuing service. Its core purpose is
decoupling applications and enabling asynchronous communication. This directly addresses the company's
requirement to handle messages between the sender and processing applications. SQS is highly scalable,
reliable, and requires minimal operational overhead.
Asynchronous Communication: SQS allows the sender application to send messages without waiting for the
processing application to be immediately available. This decoupling improves application resilience.
Message Retention: SQS retains messages until they are successfully processed and deleted, guaranteeing
message delivery. The 2-day processing requirement falls well within SQS's configurable message retention
period.
Fault Tolerance: The crucial aspect of a dead-letter queue (DLQ) makes this solution stand out. When a
message fails to process after a specified number of retries, SQS moves it to the DLQ. This ensures that failed
messages don't block the processing of other messages, and allows for later analysis and reprocessing of the
failed messages. This aligns perfectly with the requirement to retain failed messages without impacting the
rest.
Operational Efficiency: SQS is a fully managed service, removing the need for the company to manage
servers, scaling, or patching.
Cost-Effective: SQS pricing is based on usage, making it a cost-effective solution for handling 1,000
messages per hour.
Why **Option A** (Amazon EC2 with Redis) is less suitable:
While Redis is a fast in-memory data store, using it as a message queue hosted on an EC2 instance introduces
significant operational overhead.
Management Overhead: The company needs to manage the EC2 instance, including OS patching, scaling, and
ensuring high availability for Redis.
Complexity: Implementing message queuing functionality in Redis requires custom code and logic, adding

complexity.
Scalability Concerns: Scaling Redis effectively requires expertise and may involve sharding or clustering.
No Built-in DLQ: Redis does not have a built-in DLQ mechanism, requiring custom implementation to handle
failed messages.
Why **Option B** (Amazon Kinesis Data Streams) is less suitable:
Kinesis Data Streams is designed for real-time streaming data, like logs or sensor data, and isn't optimal for
asynchronous message processing with specific ordering requirements or individual message handling in this
scenario.
Complexity: Kinesis Client Library (KCL) adds complexity to the processing application.
Ordering focus: Kinesis shines at ordering large volumes of data within shards but the question specifies low
throughput (1000 messages/hour).
No native DLQ: Implementing DLQ functionality with Kinesis requires custom logic and extra storage.
Why **Option D** (Amazon SNS) is less suitable:
Amazon SNS is primarily a publish/subscribe service for notifications, not a message queue.
Push-Based: SNS pushes messages to subscribers, which is less reliable than SQS's pull-based model for
guaranteed delivery.
Message Loss: If a subscriber is unavailable, the message may be lost. SNS is not ideal for applications that
require guaranteed message delivery.
No DLQ: SNS does not have a built-in DLQ.

---

## Question 165

**Answer:** **D**

**Explanation:**

The correct answer is D because it addresses both security requirements: restricting S3 access and
inspecting traffic with AWS WAF.
Restricting S3 Access: Using an Origin Access Identity (OAI) with CloudFront is the recommended way to
prevent users from directly accessing the S3 bucket hosting the static website. The OAI is a special
CloudFront user that you grant permission to read objects in your S3 bucket. This ensures that all requests for
your content must go through CloudFront.
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-accessto-s3.html
Inspecting Traffic with AWS WAF: AWS WAF is integrated with CloudFront, meaning you can associate a
WAF web ACL with your CloudFront distribution. This allows AWS WAF to inspect incoming HTTP(S) requests
to your website before they reach CloudFront, filtering out malicious traffic and protecting your application.
https://docs.aws.amazon.com/waf/latest/developerguide/cloudfront-integration.html

Why other options are incorrect:

**A:** S3 bucket policies can restrict access based on various criteria, including source IP, but AWS WAF doesn't
have a fixed ARN that you can reliably use in an S3 bucket policy. Moreover, this approach doesn't actually
inspect the traffic, it just tries to allow requests originating from where WAF is sitting. The problem WAF
solves is understanding the content of the traffic, not just its origin.

**B:** CloudFront does not "forward" requests to WAF. WAF inspects requests made to the CloudFront endpoint
and acts (allow/block) accordingly. There isn't a mechanism in CloudFront to forward traffic to WAF before
retrieving the content.

**C:** Security Groups are instance-level firewalls, not appropriate for S3 bucket access control or CloudFront
traffic filtering. While you can control access from EC2 instances to S3 buckets with security groups,
CloudFront is a CDN, and its edge locations' IP addresses are not static or manageable through a security
group in this manner. Plus, Security groups do not provide HTTP inspection capabilities like AWS WAF.

Therefore, answer D directly addresses both the security and access control requirements most effectively
and aligns with AWS best practices for securing static websites hosted on S3 behind CloudFront.

---

## Question 166

**Answer:** **D**

**Explanation:**

The correct answer is D. Use Amazon CloudFront with the S3 bucket as its origin.

Here's why:
The scenario describes a global event generating millions of views of static HTML pages stored in S3. The
primary concerns are performance, scalability, and cost-effectiveness in serving this content globally.
Amazon CloudFront is a Content Delivery Network (CDN) service offered by AWS. It excels at distributing
static content to users around the world with low latency and high transfer speeds. CloudFront caches the
content in edge locations closer to users, reducing the distance data needs to travel, resulting in faster load
times and a better user experience. By using the S3 bucket as the origin for CloudFront, the static HTML files
are efficiently served to users worldwide. CloudFront also handles request routing, scaling, and security.
Let's examine why the other options are less suitable:

**A.** Generate presigned URLs for the files: Presigned URLs grant temporary access to objects in S3. While
they are useful for controlling access, they don't inherently improve performance or scalability for globally
accessed static content. They also introduce overhead in generating and managing these URLs.

**B.** Use cross-Region replication to all Regions: Cross-Region Replication (CRR) is beneficial for disaster
recovery or data sovereignty, not primarily for improving content delivery performance for globally distributed
users. It replicates data between S3 buckets in different regions. While it could technically reduce latency for
some users by having copies closer to them, it's much less efficient and more expensive than using a CDN like
CloudFront. You'd need a complex routing mechanism to direct users to the nearest replicated bucket, which
CloudFront handles automatically.

**C.** Use the geoproximity feature of Amazon Route 53: Route 53's geoproximity routing directs users to
resources based on their geographic location. This works well for dynamic content or applications running in
different regions. However, for static content already stored in S3, it is not enough by itself to optimize
distribution. You would still need a way to efficiently serve the content from those locations, which is precisely
what CloudFront does by caching content at its edge locations. Routing to a single S3 bucket closer to the
user wouldn't provide the same level of performance as a globally distributed CDN.

In summary, CloudFront is the ideal solution because it is specifically designed for efficient and scalable
global content delivery. It offers superior performance, scalability, and cost-effectiveness compared to the
other options.
Supporting Documentation:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Amazon S3: https://aws.amazon.com/s3/
Amazon Route 53: https://aws.amazon.com/route53/

---

## Question 167

**Answer:** **D**

**Explanation:**

The correct answer is D: Use Reserved Instances for the baseline capacity and use On-Demand Instances to
handle additional capacity.

Here's why:
Reserved Instances (RIs): Reserved Instances provide significant cost savings (up to 75%) compared to OnDemand Instances, but require a commitment to a specific instance type and region for a term of one or three
years. They are ideal for consistent, predictable workloads. In this scenario, the "baseline capacity" represents
the minimum EC2 resources always needed to process the SQS queue messages, making RIs a cost-effective
choice for this portion of the workload. (https://aws.amazon.com/ec2/pricing/reserved-instances/)
On-Demand Instances: On-Demand Instances allow you to pay for compute capacity by the hour or second
(depending on the instance type and operating system) with no long-term commitments. They are well-suited
for unpredictable workloads, spikes in traffic, or applications that need to scale quickly. The problem
description states "unpredictable and often has intermittent traffic," implying the need for scalability to
handle these message volume variations. Using On-Demand instances for additional capacity during peak
times addresses this without requiring a long-term commitment. (https://aws.amazon.com/ec2/pricing/ondemand/)
Why not Spot Instances exclusively (A)? Spot Instances offer substantial cost savings (up to 90% compared
to On-Demand), but they can be interrupted with little notice if the Spot price exceeds your bid. The problem
states the need for "continually process messages without any downtime," which contradicts the potential for
interruption with Spot Instances if used exclusively.
Why not Reserved Instances exclusively (B)? While RIs guarantee capacity and save money for the baseline
workload, they might lead to over-provisioning if used exclusively to handle the maximum capacity required
because the application only occasionally hits this maximum. This would result in unnecessary costs during
periods of low traffic.
Why not Reserved Instances for baseline and Spot for additional capacity (C)? While potentially cheaper
than pure On-Demand, using Spot Instances for handling unpredictable and intermittent traffic introduces the
risk of interruptions. If the Spot price spikes and the instances are terminated, the application could
experience downtime, violating the requirement to "continually process messages without any downtime."
The small cost saving doesn't outweigh the risk to availabilty for a production workload that requires
continuous message processing.

Therefore, combining RIs for the steady-state baseline workload with On-Demand Instances for scaling during
peaks provides the most cost-effective solution that also ensures continuous processing and avoids
downtime.

---

## Question 168

**Answer:** **D**

**Explanation:**

The correct answer is D: Create a service control policy (SCP) in the root organizational unit (OU) to deny
access to the services or actions. Here's why:
SCPs are the cornerstone of centralized permission management within AWS Organizations. They allow you to
define guardrails that govern the maximum permissions available to accounts within an OU. By attaching an
SCP to the root OU, the policy applies to all accounts in the organization, ensuring consistent access
restrictions across all AWS accounts. This centralized approach fulfills the requirement of a single point of
permission maintenance, promoting scalability and reducing administrative overhead.
Specifically, in this scenario, the security team wants to limit access. SCPs are ideal for denying permissions,
effectively creating a boundary of permissible actions within the organization. This contrasts with Identity and
Access Management (IAM) policies, which grant permissions. SCPs don't grant permissions; they restrict
them.
Options A, B, and C are not suitable solutions. Access Control Lists (ACLs) are used to control network traffic,
not IAM permissions. Security groups are also network-level controls and are not relevant to this scenario of
limiting access to specific AWS services or actions. Creating cross-account roles in each account to deny
access would be cumbersome, error-prone, and wouldn't scale effectively. It would also negate the single
point of maintenance requirement.

Therefore, SCPs deployed at the root OU provide the most scalable and maintainable solution for
implementing consistent access restrictions across an AWS Organization. This approach leverages the power
of AWS Organizations to enforce organizational-wide governance.
For further research, consult the AWS documentation on SCPs:
AWS Organizations and service control policies (SCPs)
Service control policies (SCPs)

---

## Question 169

**Answer:** **C**

**Explanation:**

The correct answer is C: Enable AWS Shield Advanced to prevent attacks. Here's why:
The primary goal is to mitigate DDoS attacks against a public web application fronted by an Application Load
Balancer (ALB). AWS Shield is a managed DDoS protection service that safeguards applications running on

AWS.
AWS Shield Advanced provides enhanced DDoS protection capabilities beyond AWS Shield Standard, which
is automatically enabled for all AWS customers. Shield Advanced offers more sophisticated detection and
mitigation techniques tailored to the specific application's traffic patterns and infrastructure. It provides 24x7
access to the AWS Shield Response Team (SRT) who can assist during a DDoS event. Crucially, it offers cost
protection against usage spikes during DDoS attacks.
Amazon Inspector (**Option A**) is a vulnerability management service that automates security assessments and
identifies software vulnerabilities and unintended network exposure in EC2 instances and container images. It
doesn't directly prevent or mitigate DDoS attacks against an ALB.
Amazon Macie (**Option B**) is a data security and data privacy service that uses machine learning and pattern
matching to discover and protect sensitive data. It focuses on identifying and securing sensitive information,
not preventing DDoS attacks.
Amazon GuardDuty (**Option D**) is a threat detection service that monitors your AWS accounts and workloads
for malicious activity and unauthorized behavior. While GuardDuty can detect suspicious activity that might
indicate a DDoS attack, it doesn't actively prevent or mitigate it. It's a detective control, not a preventative
one.
Shield Advanced integrates seamlessly with ALBs and provides Layer 7 protection, which is critical for
mitigating application-layer DDoS attacks that target specific URLs or API endpoints. Therefore, AWS Shield
Advanced is the most appropriate solution to proactively reduce the risk of DDoS attacks against the
company's web application.
Further Reading:
AWS Shield: https://aws.amazon.com/shield/
AWS Shield Advanced: https://aws.amazon.com/shield/advanced/

---

## Question 170

**Answer:** **C**

**Explanation:**

The correct answer is C: Configure AWS WAF on the Application Load Balancer in a VPC.

Here's a detailed justification:
AWS WAF (Web Application Firewall) allows you to control access to your web applications based on
specified rules. One of its key features is geographic filtering, enabling you to allow or block traffic
originating from specific countries. By configuring AWS WAF on the Application Load Balancer (ALB), you can
create a rule that permits traffic only from the required country. WAF operates at the application layer (Layer

7), providing granular control over HTTP/HTTPS requests.

**Option A**, configuring the security group for the EC2 instances, is less effective. While security groups provide
basic ingress/egress filtering, they primarily operate on IP addresses and ports. Geolocation is not inherently
supported within security groups. You would need a mechanism to constantly update the security group with
IP address ranges for the desired country, which is a complex and unreliable approach due to the constantly
changing IP address space.

**Option B**, configuring the security group on the ALB, suffers from the same limitations as **Option A**. Security
groups cannot perform native geolocation filtering.

**Option D**, configuring the network ACL (NACL) for the subnet, is also insufficient. NACLs operate at the
subnet level (Layer 3 and 4) and filter traffic based on IP addresses and ports. While it is possible to configure
NACLs based on IP ranges, maintaining a current list of all IP ranges for a specific country would be
challenging, complex, and not highly reliable, similar to the security group limitation. Also, NACLs don't have
the application-layer inspection capabilities of WAF.
AWS WAF's Country-based rules offer a much simpler and more effective solution for geo-filtering. WAF
integrates directly with the ALB and can readily identify the country of origin for incoming requests, allowing
you to enforce the specified policy requirement. WAF rules also have the advantage of being easily updated
and managed through the AWS Management Console or AWS CLI/SDK. Running the ALB in a VPC ensures a
secure and isolated networking environment.
Further resources:
AWS WAF: https://aws.amazon.com/waf/
AWS WAF documentation: https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
Network ACLs: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html

---

## Question 171

**Answer:** **B**

**Explanation:**

The most appropriate solution is B. Design a REST API using Amazon API Gateway that accepts the item
names. API Gateway passes item names to AWS Lambda for tax computations.

Here's why:

Scalability and Elasticity: API Gateway and Lambda are inherently designed for scalability and elasticity. API
Gateway can handle a large number of concurrent requests and automatically scales to meet demand without
any manual intervention. Lambda functions automatically scale by running copies of your function in parallel
to handle each incoming request. During the holiday season, when the number of inquiries surges, these
services can effortlessly handle the increased load.
Cost-Effectiveness: Lambda functions are priced based on the actual compute time consumed. This pay-peruse model is ideal for workloads with intermittent spikes in demand, such as during holiday seasons. You only
pay for the compute time used to process the API requests, making it more cost-effective compared to
running EC2 instances continuously.
Reduced Operational Overhead: Lambda eliminates the need to manage servers, apply patches, or perform
capacity planning. API Gateway simplifies API management tasks such as authentication, authorization, rate
limiting, and monitoring. This reduces the operational overhead associated with managing the API.
Better Performance: AWS Lambda runs your code in response to events and automatically manages the
underlying compute resources for you, ensuring optimal performance.
Let's examine why the other options are less suitable:

**A.** Provide an API hosted on an Amazon EC2 instance: EC2 instances require manual scaling, which might not
be fast enough to accommodate sudden spikes in demand. Also, even when idle, EC2 instances incur costs.
EC2 instances do not provide the level of inherent scalability and elasticity that API Gateway and Lambda
offer.

**C.** Create an Application Load Balancer that has two Amazon EC2 instances behind it: Similar to option A,
EC2 instances behind an ALB require more management and cost more, especially during low demand
periods. Load Balancing is a great step, but doesn't scale to zero.

**D.** Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2
instance: This option introduces API Gateway but then still relies on an EC2 instance for computation. While
API Gateway can handle the incoming traffic, the EC2 instance will become a bottleneck and require manual
scaling. The benefits of API Gateway (e.g., security, rate limiting) are present, but the fundamental scalability
issue remains.

In summary, API Gateway and Lambda provide the best combination of scalability, elasticity, costeffectiveness, and reduced operational overhead, making option B the most suitable solution.

---

## Question 172

**Answer:** **C**

**Explanation:**

The correct answer is C: Configure a CloudFront field-level encryption profile.

Here's a detailed justification:
The scenario requires protecting sensitive user data throughout the application stack and restricting access
to it for specific applications. Field-level encryption (FLE) within CloudFront addresses this directly. FLE
allows encrypting specific data fields at the edge (CloudFront) so that only the applications with the
corresponding decryption key can decrypt and access the data. This ensures that even if the data is
intercepted en route, it remains unreadable without the key.

**Option A** (CloudFront signed URLs) and **Option B** (CloudFront signed cookies) primarily control access to
content, not the encryption of specific data fields within the content. Signed URLs/cookies are used for
authentication and authorization, allowing only authenticated users access to the resources. They don't
encrypt the data itself. While they enhance security by controlling who can access the application, they don't
provide data-level encryption.

**Option D** (Origin Protocol Policy to HTTPS Only) ensures that the communication between CloudFront and the
origin server is encrypted, which is a good security practice, but it doesn't encrypt the specific sensitive fields
submitted by the users. It ensures data in transit between CloudFront and the origin is secure but doesn't
restrict access to the data once it reaches the origin, nor does it prevent access to the data by all applications
on the origin.
Field-level encryption is precisely designed to encrypt specific sensitive data at the edge before it even
reaches the origin, offering end-to-end protection and restricting access to only the intended applications
that possess the decryption key. It addresses the core requirements of the question regarding protecting
sensitive user data and restricting application access.
For further research, consult these AWS resources:
AWS CloudFront Field-Level Encryption:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
Using Signed URLs: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/privatecontent-signed-urls.html
Using Signed Cookies: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/privatecontent-signed-cookies.html

---

## Question 173

**Answer:** **B**

**Explanation:**

The correct answer is B. Deploy an Amazon CloudFront web distribution in front of the S3 bucket.

Here's a detailed justification:
The scenario describes a situation where static content (videos and images) from an S3 bucket is being
heavily accessed globally, leading to potential load issues on the origin (S3). The primary goal is to reduce the
load on S3 and provide low-latency access to users worldwide, while optimizing for cost.
CloudFront is a Content Delivery Network (CDN) service. A CDN caches content at edge locations distributed
globally, which allows users to retrieve content from a server that's geographically closer to them. This
significantly reduces latency and improves the user experience. By placing CloudFront in front of the S3
bucket, the most frequently accessed videos and images will be cached at CloudFront edge locations. When a
user requests content, CloudFront will first check its cache. If the content is available (a "cache hit"),
CloudFront will serve the content directly from the edge location, without hitting the S3 bucket. This
drastically reduces the load on S3 and lowers data transfer costs because data is served from the closest
location.

**Option A** (AWS Global Accelerator) is not the best choice for this scenario. While Global Accelerator also
improves performance by routing user traffic to optimal endpoints, its primary focus is on accelerating
dynamic content and improving the reliability of applications. It doesn't cache content like CloudFront,
therefore won't reduce the load on S3 for static assets.
Options C (ElastiCache for Redis) and D (ElastiCache for Memcached) are in-memory data caching services.
They are typically used to cache database query results or frequently accessed data within the application
layer, not to serve static content directly from S3. They are more suited for improving the performance of the
application logic rather than reducing the load on static content delivery from an object store like S3.
Deploying them in front of web servers would cache data generated by the servers, not the S3 content.

Therefore, CloudFront is the most cost-effective solution because it directly addresses the issue of high
traffic to S3 for static content, reduces latency through edge caching, and minimizes S3 data transfer costs.
Further research:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
Amazon ElastiCache: https://aws.amazon.com/elasticache/

---

## Question 174

**Answer:** **B**

**Explanation:**

The correct answer is B. Modify the Auto Scaling group to use three instances across each of two
Availability Zones.
High availability fundamentally means ensuring your application remains accessible even if a component fails.
In the given scenario, the application currently resides within a single Availability Zone (AZ). If that AZ
experiences an outage, the entire application becomes unavailable. To mitigate this risk, it's crucial to
distribute the application across multiple AZs within the same AWS Region.

**Option B** achieves this by modifying the Auto Scaling group to span two AZs. This ensures that if one AZ fails,
the remaining instances in the other AZ can continue to serve traffic, thus maintaining application availability.
The Application Load Balancer (ALB) is inherently designed to distribute traffic across multiple targets (EC2
instances) registered with it, even if those targets are in different AZs within the same Region.
Let's examine why the other options are less suitable:

**A.** Create an Auto Scaling group that uses three instances across each of two Regions: This introduces
complexity and potentially higher latency due to cross-region communication. While it offers disaster
recovery capabilities, it's overkill for the high availability requirement stated in the question, which typically
focuses on single-region resilience. Implementing cross-region Auto Scaling also requires mechanisms for
data replication and traffic management across regions, adding to the complexity.

**C.** Create an Auto Scaling template that can be used to quickly create more instances in another Region:
This only provides a mechanism for recovery after a failure. It doesn't inherently provide high availability
because the application will still be unavailable until the new instances are provisioned in the other region.
High availability implies continuous operation with minimal downtime.

**D.** Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to
the web tier: The ALB already balances traffic. Round-robin is a balancing algorithm that ALB supports, but
changing the balancing configuration doesn't address the fundamental issue of single-AZ dependency. The
ALB can't route traffic to instances that don't exist or are unavailable within another AZ. Furthermore, ALB
configuration is not the focus of the question; the question asks about high availability achieved through
instance distribution.

Therefore, the best approach is to modify the existing Auto Scaling group to distribute instances across
multiple AZs, leveraging the ALB's built-in capabilities to distribute traffic among them. This provides the
required high availability with the least amount of modification to the existing infrastructure.
Supporting Links:
AWS Auto Scaling: https://aws.amazon.com/autoscaling/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
AWS Regions and Availability Zones: https://aws.amazon.com/about-aws/global-infrastructure/

---

## Question 175

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda
function to use the RDS Proxy endpoint instead of the database endpoint.

Here's a detailed justification:
The problem is high CPU and memory utilization on the Aurora PostgreSQL database due to a large number of
open connections from the Lambda function during peak load. This leads to timeouts for customers because
the database cannot handle the connection surge.
Why RDS Proxy is the best solution:
Connection Pooling: RDS Proxy sits between the Lambda function and the database, effectively pooling
database connections. Instead of the Lambda function directly opening and closing connections to the
database for each invocation, it requests a connection from the RDS Proxy. The RDS Proxy maintains a pool of
connections to the database and reuses them efficiently. This dramatically reduces the overhead on the
database, freeing up CPU and memory resources.
Connection Multiplexing: RDS Proxy can multiplex connections from the Lambda function to the database,
allowing a smaller number of database connections to serve a larger number of Lambda function invocations.
This is particularly important in serverless architectures like Lambda, where frequent invocations can
overwhelm the database with connection requests.
Reduced Database Load: By reducing the number of open connections, RDS Proxy alleviates the CPU and
memory pressure on the database, preventing timeouts and improving overall application performance.
Minimal Code Changes: Using RDS Proxy requires minimal changes to the application. Only the database
endpoint in the Lambda function needs to be updated to point to the RDS Proxy endpoint.
Least Disruptive: The RDS Proxy approach is the least disruptive to the existing architecture. It avoids major
changes like migrating databases or introducing complex routing logic.

Why other options are less suitable:

**A.** Configure provisioned concurrency for the Lambda function. Modify the database to be a global
database in multiple AWS Regions. Provisioned concurrency for Lambda addresses cold starts and helps
with consistent performance, but it doesn't directly solve the database connection overload issue. A global
database provides disaster recovery and low latency access to geographically distributed users, but it doesn't
address the connection management problem. It also introduces more complexity and cost.

**C.** Create a read replica for the database in a different AWS Region. Use query string parameters in API
Gateway to route traffic to the read replica. This solution involves using query string parameters to direct
traffic to a read replica. While read replicas can offload read traffic, the described problem involves
transactional order processing which requires write operations, which must still be routed to the primary
database. Also, complex routing in API Gateway can increase latency and complexity.

**D.** Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration
Service (AWS DMS). Modify the Lambda function to use the DynamoDB table. Migrating to DynamoDB is a
significant architectural change. DynamoDB is suitable for different use cases. An RDBMS like Aurora
Postgres is better for transactional workloads, and it introduces complexity and cost. DynamoDB is not
suitable for this workload, and this option is a disproportionately complex solution.
Supporting Links:
Amazon RDS Proxy: https://aws.amazon.com/rds/proxy/
Using Amazon RDS Proxy with AWS Lambda: https://aws.amazon.com/blogs/database/using-amazon-rdsproxy-with-aws-lambda/

---

## Question 176

**Answer:** **A**

**Explanation:**

The most secure way for EC2 instances in private subnets to access a DynamoDB table without the traffic
leaving the AWS network is to use a VPC endpoint for DynamoDB (**Option A**).

Here's why:
VPC Endpoints: VPC endpoints enable private connectivity to supported AWS services, including DynamoDB,
from within your VPC without requiring an internet gateway, NAT device, VPN connection, or AWS Direct
Connect connection. They keep all traffic within the AWS network, enhancing security.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Security: VPC endpoints eliminate the need to route traffic through the public internet, mitigating exposure
to potential threats and vulnerabilities. They also support VPC endpoint policies, enabling granular control
over which DynamoDB resources can be accessed by which principals.
Cost: While there's a cost associated with VPC endpoints (per Availability Zone), it is generally more costeffective than using NAT gateways for high-volume traffic, especially when considering data transfer costs to
and from NAT gateways.
NAT Gateway (**Option B**): A NAT gateway allows instances in a private subnet to connect to the internet or
other AWS services, but it requires routing traffic through a public subnet. This approach is less secure than a
VPC endpoint because it involves internet connectivity.
NAT Instance (**Option C**): A NAT instance serves a similar purpose to a NAT gateway but requires manual
management and configuration, making it less reliable and more complex. It also introduces a single point of
failure and can become a performance bottleneck. Furthermore, it requires traffic to traverse to the public
internet.
Internet Gateway (**Option D**): An internet gateway allows instances in the VPC to access the internet.

However, it exposes the instances to the public internet, making it the least secure option.

Therefore, utilizing a VPC endpoint for DynamoDB is the preferred and most secure method because it
maintains network traffic within the AWS infrastructure, reduces the attack surface, and offers granular
access control.
Here is a breakdown of why other options aren't secure:
B, C, D Routing traffic through the public internet, which violates the requirement of keeping traffic within
AWS.

---

## Question 177

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Amazon DynamoDB Accelerator (DAX).
DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB. It's
specifically designed to improve read performance for read-heavy workloads, which directly addresses the
problem described. DAX integrates seamlessly with existing DynamoDB applications without requiring code
changes, fulfilling the requirement to avoid application reconfiguration. It significantly reduces read latency
(often from milliseconds to microseconds) by caching frequently accessed data, which will alleviate the
observed delays. Importantly, DAX offloads read traffic from the DynamoDB tables, improving overall
performance and reducing pressure on the DynamoDB infrastructure, and because it's a managed service, it
minimizes operational overhead.

**Option A**, ElastiCache for Redis, while a powerful caching solution, requires application-level modifications to
integrate with DynamoDB. This violates the requirement to avoid reconfiguring the application. Similarly,
option D, ElastiCache for Memcached, also necessitates application changes and might require autodiscovery configuration, adding operational complexity.

**Option C**, DynamoDB global tables, provides multi-region replication for availability and disaster recovery, not
primarily for improving read performance within a single region. While replication could indirectly improve
read performance in certain multi-region scenarios, it introduces significantly more operational overhead and
complexity compared to DAX, and does not directly address the read latency issues in the single region the
company uses. Global tables also don't solve the latency issue within a specific region and primarily focus on
data redundancy and availability across geographically dispersed locations.

Therefore, DAX is the most suitable solution because it's a managed, in-memory cache specifically designed
for DynamoDB that enhances read performance without application changes or increased operational burden.
Further research:

Amazon DynamoDB Accelerator (DAX): https://aws.amazon.com/dynamodb/dax/
DAX Use Cases: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html

---

## Question 178

**Answer:** **A**

**Explanation:**

The correct answer is A: Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.

Here's why:
AWS Backup offers a centralized and automated way to manage backups across multiple AWS services,
including EC2 and RDS, simplifying backup management and reducing operational overhead. It allows you to
define backup policies and schedules centrally, and then apply them to your resources. A key feature is its
ability to copy backups across regions, satisfying the requirement of backing up data in a separate region.
This eliminates the need for service-specific backup solutions and scripting.

**Option B**, using Amazon Data Lifecycle Manager (Amazon DLM), primarily manages the lifecycle of EBS
snapshots. While DLM can create EBS snapshots, it doesn't directly handle RDS backups or cross-region
backup copying. Thus, this approach requires additional configuration and scripting for the RDS component,
increasing operational overhead.

**Option C**, creating AMIs and RDS read replicas, meets the DR requirements, but it isn't a backup solution.
AMIs primarily capture the state of EC2 instances for disaster recovery or instance replication, and read
replicas are for read scaling and disaster recovery. This doesn't provide point-in-time backup capabilities for
both services and involves more operational overhead to maintain the replicas and keep them in sync.

**Option D**, creating EBS and RDS snapshots and using S3 CRR, is more complex and time-consuming than
using AWS Backup. It requires configuring snapshot schedules for EC2 using EBS snapshots, RDS snapshots,
exporting RDS snapshots to S3, and then setting up S3 Cross-Region Replication. Also managing snapshots,
configuring CRR, and ensuring consistent backups are all operational overheads to avoid.
AWS Backup is the most streamlined solution because it's designed for this specific purpose: centralized
backup management across different AWS services, including cross-region copying.
Supporting Links:
AWS Backup: https://aws.amazon.com/backup/
Amazon RDS Backups:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html

Amazon EC2 Backups: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html

---

## Question 179

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
The scenario requires securely storing database credentials within Systems Manager Parameter Store and
allowing an EC2 instance to access them. IAM roles are the preferred method for granting permissions to EC2
instances, as they provide temporary credentials and are more secure than using long-term access keys.

**Option A** correctly leverages this. It creates an IAM role (not just a policy) that grants ssm:GetParameter (read
access) permission to the specific parameter within Parameter Store. Crucially, it also allows kms:Decrypt
permission to the KMS key used to encrypt the secure string parameter. Since the parameter is stored as a
secure string (encrypted), the EC2 instance needs permission to decrypt it. Assigning this IAM role to the EC2
instance allows the EC2 instance's applications to retrieve and decrypt the database credentials.

**Option B** is incorrect because while policies are essential, they must be attached to roles for EC2 instances.
Attaching a policy directly is not the proper way to grant permissions to EC2 instances, as roles provide the
necessary temporary credentials.
Options C and D are incorrect because IAM trust relationships are used to allow entities in one AWS account
to assume roles in another account or for services to assume roles. They are not directly used for granting
access to Parameter Store or RDS instances from an EC2 instance within the same account. Specifying
Amazon RDS or Systems Manager as principals in a trust policy related to an EC2 instance is conceptually
flawed in this context. The communication is EC2 -> SSM Parameter Store, not EC2 being "trusted" by SSM or
RDS.

Therefore, option A provides the most secure and correct way to grant the necessary permissions to the EC2
instance to access the encrypted credentials stored in Parameter Store.
Supporting links:
IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
Systems Manager Parameter Store: https://docs.aws.amazon.com/systemsmanager/latest/userguide/systems-manager-parameter-store.html

KMS Encryption: https://docs.aws.amazon.com/kms/latest/developerguide/overview.html
Granting Applications Access to Secrets: https://aws.amazon.com/blogs/security/how-to-manage-secretsfor-amazon-ec2-using-aws-systems-manager-parameter-store/

---

## Question 180

**Answer:** **BC**

**Explanation:**

Here's a detailed justification for why options B and C (AWS Shield Advanced with the NLB and AWS WAF to
protect Amazon API Gateway) provide the most protection in this scenario:
Understanding the Threats: The question highlights two primary threats: web exploits (like SQL injection) and
DDoS attacks. Web exploits target the application layer (Layer 7), attempting to manipulate the application
logic or data. DDoS attacks aim to overwhelm the infrastructure, making the application unavailable.
AWS WAF for Application Layer Protection (API Gateway): AWS WAF (Web Application Firewall) is
specifically designed to protect web applications from common web exploits by inspecting HTTP traffic.
Placing WAF in front of Amazon API Gateway (option C) allows it to inspect incoming requests for malicious
patterns (e.g., SQL injection attempts, cross-site scripting). API Gateway acts as the entry point to the
application APIs, making it a prime target for such attacks. https://aws.amazon.com/waf/
AWS Shield Advanced for DDoS Mitigation (NLB): AWS Shield provides DDoS protection. Standard Shield is
automatically enabled and free, but offers basic protection. Shield Advanced (option B) provides more
sophisticated detection and mitigation capabilities, including 24/7 access to the AWS DDoS Response Team
(DRT) during attacks. Protecting the Network Load Balancer (NLB) with Shield Advanced is crucial because
the NLB distributes incoming traffic to the EC2 instances hosting the application. By protecting the NLB, you
protect the entire infrastructure from being overwhelmed by DDoS attacks. Shield Advanced is designed to
protect resources like NLBs, Elastic Load Balancers (ELB), and CloudFront distributions.
https://aws.amazon.com/shield/
Why other options are less ideal:

**A:** Using AWS WAF with the NLB offers some protection but less strategically since the API Gateway sits in
front of it. The API Gateway is where the actual API requests are handled and exposed, making it the prime
target.

**D:** GuardDuty is a threat detection service that monitors your AWS environment for malicious activity. It's
helpful for security monitoring and alerting, but it doesn't directly mitigate DDoS attacks or prevent web
exploits like WAF and Shield Advanced do. Shield Standard provides basic DDoS protection but not as
granular or tailored as Shield Advanced.

**E:** Shield Standard is a base service, while API Gateway is a prime location for using WAF.

Comprehensive Protection: By combining WAF at the API Gateway level with Shield Advanced protecting the
NLB, the company achieves a layered security approach. WAF handles application-layer attacks, while Shield
Advanced handles network-layer DDoS attacks. This combination offers the most robust protection for the
cloud communications platform.

---

## Question 181

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best choice, and why the other options are less suitable
for inter-microservice communication in this scenario:
Justification for **Option A** (Amazon SQS):
Amazon Simple Queue Service (SQS) is a fully managed message queuing service that allows you to decouple
and scale microservices, distributed systems, and serverless applications. In this scenario, SQS provides
asynchronous communication between the microservices performing the data processing. Producers
(microservices generating data) can send data to the queue without needing to know who the consumers are.
Consumers (microservices processing data) can independently pull messages from the queue and process
them at their own pace. This decoupling allows the system to handle varying loads efficiently. Since the order
of the results doesn't matter, SQS Standard Queues are a suitable choice. If the application required strictly
first-in, first-out processing, SQS FIFO Queues could be considered. SQS inherently provides message
buffering, which is crucial in handling situations where producers generate data faster than consumers can
process it. The queue acts as a buffer, preventing data loss and allowing the system to gracefully handle
spikes in demand. The "at-least-once" delivery guarantee of SQS ensures that each message is processed.
Why other options are not ideal:

**Option B** (Amazon SNS): Amazon Simple Notification Service (SNS) is primarily designed for push-based
notifications to multiple subscribers. While it can be used for microservice communication, it's better suited
for fan-out scenarios where one producer needs to notify many consumers. In this case, the data processing is
sequential (producer generates, consumer processes), so a queue-based approach (SQS) is more appropriate.
SNS would also require each consumer to subscribe to the topic and would add unnecessary complexity if the
intention is solely to process data. It's designed for notifications, not general purpose asynchronous

processing of data.

**Option C** (AWS Lambda): Using Lambda to directly pass messages would create synchronous dependencies
between the microservices and limit scalability. Lambda functions have execution time limits and might not be
suitable for handling potentially large or long-running data processing tasks. This approach would also
introduce unnecessary overhead and complexity compared to a simple queue. Furthermore, the service
making the request would need to wait for Lambda to execute and pass on the response, defeating the
purpose of asynchronous processing and decoupling.

**Option D** (Amazon DynamoDB Streams): DynamoDB Streams are primarily designed for triggering actions
based on data changes in a DynamoDB table. While it can be used for inter-microservice communication, it's
not its core purpose. It would introduce unnecessary complexity and overhead, as you'd have to treat the
DynamoDB table as a message queue. It tightly couples the microservices to DynamoDB. DynamoDB Streams
are better suited for things like auditing changes in a database, or triggering related actions based on specific
data modifications. This approach is generally avoided unless you need to persist the data to a database and
trigger some kind of action.
In conclusion: SQS provides a simple, scalable, and cost-effective solution for asynchronous communication
between microservices in a data processing application, aligning perfectly with the company's goal of
decoupling its legacy monolithic application and leveraging a microservices architecture.

---

## Question 182

**Answer:** **B**

**Explanation:**

The correct answer is B. Let's break down why:
The core requirements are high reliability, minimal data loss, and synchronous data replication on at least two
nodes within AWS.

**Option A** (RDS with synchronous replication to three nodes in three AZs): While seemingly good, standard
RDS doesn't natively offer synchronous replication to three nodes across three AZs. Multi-AZ provides

synchronous replication between two nodes. While MySQL can be configured to replicate to multiple read
replicas synchronously, doing so requires significant configuration beyond just creating an RDS instance, and
isn't typically the best approach for basic high availability within a single region.

**Option B** (RDS MySQL with Multi-AZ): This precisely addresses the requirements. RDS Multi-AZ provides a
synchronous, automated failover mechanism. Data is synchronously replicated between the primary instance
and a standby instance in a different Availability Zone. In case of failure, the standby instance automatically
takes over with minimal data loss. This configuration stores every transaction on at least two nodes.

**Option C** (RDS MySQL with a cross-Region read replica): Cross-region read replicas are asynchronous. While
they improve disaster recovery capabilities, they do not provide the required synchronous data replication.

Therefore, this option does not meet the criteria of minimizing data loss due to its asynchronous nature. CrossRegion replication has latency which goes against the need to minimize data loss.

**Option D** (EC2-based MySQL with Lambda-triggered replication to RDS): This solution is overly complex and
introduces significant overhead. Manually managing replication using Lambda functions is not an efficient or
reliable solution compared to RDS's built-in Multi-AZ feature. It also has the burden of needing to manage the
EC2 instance, OS patching, etc. Synchronous replication implemented in this manner also isn't guaranteed
without significant custom coding and testing, and would be prone to errors. This introduces a very high level
of complexity.

In summary, RDS Multi-AZ provides a managed, reliable, and synchronous replication solution, fulfilling the
company's requirements for high availability and minimal data loss. It is also the simplest and most costeffective option.
Supporting Links:
Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. ReadReplicas.html

---

## Question 183

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:

**Option A** offers a serverless architecture which directly addresses the requirement to minimize server
maintenance and patching. Amazon S3 is used for static content hosting, eliminating the need to manage
servers for these assets. Amazon API Gateway and AWS Lambda handle dynamic content, abstracting away
the underlying infrastructure management. DynamoDB with on-demand capacity is a key component,
providing automatic scaling for read and write operations without the need for manual capacity planning,
fulfilling the rapid scaling requirement. CloudFront ensures global content delivery with low latency and high
availability.

**Option B** uses Amazon Aurora with Auto Scaling. While Aurora Auto Scaling is good, it involves managing
relational databases, which incurs operational overhead and database maintenance. This contradicts the
requirement to minimize server maintenance. Additionally, DynamoDB offers faster, more predictable scaling
than Aurora for dynamic workloads.
Options C and D rely on EC2 instances for hosting content. This introduces significant server management
overhead for patching, scaling, and maintenance. Using EC2 Auto Scaling helps, but it does not eliminate the
underlying server management burden, directly contradicting the prompt.

Therefore, **Option A** offers the most serverless, scalable, and maintainable architecture aligning with the
requirements. DynamoDB with on-demand capacity is optimal for unpredictable workloads needing immediate
scaling.
Key Concepts:
Serverless Computing: API Gateway, Lambda, and DynamoDB abstract away server management.
Scalability: DynamoDB on-demand capacity scales automatically.
High Availability: S3, CloudFront, API Gateway, Lambda and DynamoDB inherently support high availability.
Supporting Links:
Amazon S3
Amazon API Gateway
AWS Lambda
Amazon DynamoDB
Amazon CloudFront

---

## Question 184

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:
The core requirement is to allow a Lambda function to access a database located in a private subnet within
the company's on-premises data center, which is connected to AWS via Direct Connect. Lambda functions, by
default, run in a secure, isolated environment outside your VPC. To access resources within a VPC or
connected on-premises networks, the Lambda function must be configured to run within the VPC.

**Option A** directly addresses this. Configuring the Lambda function to run within the VPC allows it to leverage
the existing Direct Connect connection to reach the on-premises database. By associating the Lambda
function with a security group that permits outbound traffic to the database's port and IP address range, and
ensuring the VPC's route tables direct traffic destined for the on-premises network to the virtual private
gateway (VGW) associated with the Direct Connect connection, the Lambda function can successfully
communicate with the database.

**Option B** is incorrect because establishing a VPN connection in addition to the existing Direct Connect adds
unnecessary complexity and cost. Direct Connect already provides a dedicated, private network connection.

**Option C**, while seemingly relevant, misses a crucial step. Simply updating route tables isn't sufficient. The
Lambda function must be running within the VPC to utilize those route tables. Lambda functions executing
outside a VPC cannot be governed by VPC route tables.

**Option D** is incorrect because Lambda functions do not directly use Elastic IP addresses (EIPs). EIPs are static
IPv4 addresses designed for instances and network interfaces to maintain a consistent public IP. Lambda
functions run within the AWS managed infrastructure and do not have dedicated EIPs assigned to them.
Configuring the Lambda function to use an EIP without an ENI is not possible or how Lambda utilizes IP
addressing.

In summary, running the Lambda function within the VPC (**Option A**) is the most direct, cost-effective, and
secure solution. It leverages the existing Direct Connect connection and allows the function to access onpremises resources by associating it with the appropriate VPC, subnet, and security group, while ensuring
proper routing.
Further research:
AWS Lambda VPC Networking: https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html
AWS Direct Connect: https://aws.amazon.com/directconnect/
AWS Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html

---

## Question 185

**Answer:** **B**

**Explanation:**

The correct answer is B. Create an IAM role with S3 permissions, and then specify that role as the
taskRoleArn in the task definition.
This is the most secure and recommended method for granting ECS tasks access to AWS services like S3.
IAM roles provide temporary security credentials to applications running on AWS, eliminating the need to
embed or manage long-term credentials within the application or containers.
Here's why the other options are incorrect:

**A.** Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the
container: S3 buckets don't have IAM roles. IAM roles are assigned to entities (like ECS tasks or EC2
instances) that need to access S3. While bucket policies control who can access the bucket itself, they don't
grant permissions to specific tasks.

**C.** Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch
configuration used by the ECS cluster: Security groups control network traffic, not IAM permissions. S3
access is controlled by IAM policies, not network rules. Security groups are important for allowing your ECS
tasks to communicate with other resources (like databases), but they are not relevant for S3 API
authorization.

**D.** Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS
cluster while logged in as this account: Using an IAM user for this purpose introduces the risk of hardcoding
credentials within your EC2 instances, which is a security anti-pattern. Furthermore, "logging in" as an IAM
user on the EC2 instance doesn't automatically grant your ECS tasks those permissions.
The taskRoleArn parameter in the ECS task definition specifies the IAM role that ECS will use to provide
credentials to the containers running within that task. When the application makes an S3 API call, the AWS
SDK automatically retrieves temporary credentials from the IAM role associated with the task. These
credentials are then used to authenticate and authorize the request to S3, ensuring that only authorized
applications can access S3 resources. The Task Role offers better security because the ECS agent manages
the retrieval and rotation of temporary credentials, so you don't have to manage credentials yourself. This
practice adheres to the principle of least privilege, ensuring that only the required permissions are granted to
the application for accessing specific resources.
AWS Documentation - IAM Roles for TasksAWS Security Best Practices

---

## Question 186

**Answer:** **B**

**Explanation:**

The correct answer is B. Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system
to each Windows instance.

Here's a detailed justification:
The requirement is to provide a shared Windows file system across multiple EC2 Windows instances in
multiple Availability Zones. This implies the need for a network file system accessible by all instances
simultaneously.
Amazon FSx for Windows File Server is a fully managed Windows file system built on Windows Server. It
supports the SMB protocol natively, which is the standard file-sharing protocol for Windows environments.
This makes it easy to integrate with existing Windows applications. Moreover, it's designed for multi-AZ
deployments, ensuring high availability and durability, which perfectly aligns with the requirement of
instances residing across multiple Availability Zones.
AWS Storage Gateway (volume gateway mode) primarily provides block storage volumes and is not designed
for native file sharing across multiple instances simultaneously like a network file system. It presents iSCSI
targets to EC2 instances.
Amazon EFS (Elastic File System) is a fully managed NFS (Network File System) designed for Linux-based
workloads. While it offers shared storage, it is not optimized or native to the Windows environment and does
not natively support SMB, which is critical for Windows-based applications. While technically possible to
make it work with workarounds, it's far from ideal.
Amazon EBS (Elastic Block Store) volumes are block storage devices attached to a single EC2 instance. EBS
volumes cannot be simultaneously attached to multiple EC2 instances, making this option unsuitable for
shared file system needs across multiple instances. While EBS Multi-Attach exists, it's mainly intended for
clustered applications with specific write coordination.

Therefore, Amazon FSx for Windows File Server is the most appropriate service because it directly addresses
the need for a shared, highly available, and fully managed Windows file system, fitting seamlessly into a
Windows-based environment deployed across multiple Availability Zones.
Supporting documentation:
Amazon FSx for Windows File Server
Compare AWS Storage Options

---

## Question 187

**Answer:** **AD**

**Explanation:**

The question focuses on creating a highly available, low-maintenance e-commerce application spanning load
balancing, containers, and a relational database. The optimal solutions prioritize automated failover and
simplified management.

**Option A** is correct because running Amazon RDS in Multi-AZ mode provides automatic failover to a standby
instance in another Availability Zone in case of a primary instance failure. This minimizes manual intervention
and ensures high availability for the database layer, directly addressing the prompt's requirements.
[https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html]

**Option D** is also correct because Amazon ECS with the Fargate launch type abstracts away the underlying
infrastructure management. Fargate handles scaling, patching, and provisioning the compute resources for
the containers, significantly reducing operational overhead and manual intervention. It also promotes high
availability by distributing containers across multiple Availability Zones.
[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html]

**Option B** is incorrect because while read replicas can improve performance, they do not provide automatic
failover for the primary database instance. Manual intervention would be needed to promote a read replica to
the primary instance in case of failure.

**Option C** is incorrect because managing an EC2-based Docker cluster requires significant manual effort for
tasks such as instance management, scaling, patching, and orchestration. This contradicts the requirement
for minimal manual intervention.

**Option E** is incorrect for similar reasons to **Option C**. While ECS simplifies container orchestration compared to
a raw Docker cluster, using the EC2 launch type still requires managing the underlying EC2 instances,
including scaling, patching, and maintenance. This adds operational overhead and manual intervention.

---

## Question 188

**Answer:** **A**

**Explanation:**

The correct answer is A, utilizing AWS Transfer Family for a secure and scalable SFTP solution directly
integrated with S3.

Here's why:
AWS Transfer Family is specifically designed for secure file transfers into and out of AWS storage services
like S3. It natively supports SFTP, FTP, and FTPS protocols.
Minimizes Operational Overhead: Transfer Family is a fully managed service. This means AWS handles the
underlying infrastructure, patching, scaling, and high availability. This drastically reduces the operational
burden on the company compared to managing EC2 instances.
High Availability: Transfer Family provides built-in high availability. You don't need to configure and maintain
load balancers or redundant EC2 instances.
Direct S3 Integration: Transfer Family can directly integrate with the S3 data lake. Files uploaded via SFTP
are automatically stored in the designated S3 bucket.
Security: Transfer Family supports various authentication methods and encryption to ensure secure data
transfers. The publicly accessible endpoint allows partners to connect easily, while security is maintained
through authentication and authorization policies.

**Option B** (S3 File Gateway): S3 File Gateway is intended for on-premises applications to access S3, not
typically for external partners using SFTP. It also involves more local infrastructure management.
Options C and D (EC2 Instances): Using EC2 instances, even with VPNs and Network Load Balancers (NLB),
requires significant manual configuration, patching, scaling, and monitoring. This defeats the requirement of
minimizing operational overhead. These options are complex and less secure without proper hardening. They
also necessitate managing cron jobs and custom scripts for data transfer, adding to operational burden. They
do not offer inherent high availability without additional configuration.

In summary, AWS Transfer Family offers the most straightforward, highly available, secure, and operationally
efficient solution for providing SFTP access to an S3 data lake for external partners.

---

## Question 189

**Answer:** **BD**

**Explanation:**

The best solution combines data immutability with managed encryption and automatic key rotation for
minimal operational overhead.

**B.** Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.
S3 Object Lock in compliance mode is crucial. Compliance mode provides the highest level of data
immutability. Once an object is locked in compliance mode, it cannot be deleted or overwritten, even by the
root user, until the retention period expires. This satisfies the requirement that documents cannot be
overwritten or deleted during the 5-year contract period. Governance mode, on the other hand, allows certain
privileged users to bypass the lock, which doesn't meet the stringent requirement of complete immutability.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html

**D.** Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys.
Configure key rotation.
Using KMS customer managed keys allows for automatic key rotation every year as required. This automated
process reduces operational overhead and aligns with security best practices. While SSE-S3 (option C)
handles encryption, it provides less control over key management than KMS. **Option E**, using customerprovided keys, adds significant operational overhead because the company is responsible for generating,
storing, and securely delivering the keys to AWS. KMS simplifies key management. Using KMS with CMKs
allows you to enable automatic key rotation and maintain audit trails related to encryption key usage. SSE-S3
also provides key rotation, but KMS offers better key management overall.
https://docs.aws.amazon.com/kms/latest/developerguide/rotatekeys.htmlhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html

Therefore, storing the documents in S3 with Object Lock in compliance mode ensures immutability, while
using KMS with customer-managed keys provides automated encryption and key rotation, minimizing
operational overhead and meeting all requirements.

---

## Question 190

**Answer:** **B**

**Explanation:**

The correct answer is B: Deploy the web application to an AWS Elastic Beanstalk environment. Use URL
swapping to switch between multiple Elastic Beanstalk environments for feature testing.

Here's a detailed justification:
Elastic Beanstalk is a Platform-as-a-Service (PaaS) that simplifies deploying and managing web applications

in AWS. It supports various programming languages, including Java and PHP, meeting the application's
requirements. It provides a managed environment, reducing operational overhead, which aligns with the
company's need for a solution with minimal operational overhead.
The key advantage of Elastic Beanstalk in this scenario is its support for easy deployment of multiple
environments and URL swapping. This feature is crucial for frequent testing of new site features. URL
swapping allows you to quickly direct traffic to a different environment hosting the new features, enabling
quick A/B testing or staging deployments without modifying DNS records. This minimizes downtime and
facilitates continuous integration and continuous delivery (CI/CD) practices.

**Option A** is incorrect because Amazon S3 is designed for static content hosting. While Lambda can handle
dynamic content, this solution would require significant architectural changes and more operational overhead
to manage the dynamic aspects of the entire application.

**Option C** involves deploying the application to Amazon EC2 instances managed by Auto Scaling groups and an
Application Load Balancer (ALB). This is a viable solution but requires more manual configuration and
management compared to Elastic Beanstalk. Setting up a robust testing environment and implementing
feature toggles or blue/green deployments on EC2 would increase operational overhead.

**Option D** suggests containerizing the application and deploying it to EC2 instances. While containerization
offers benefits like portability, it also introduces additional complexity in managing the container
orchestration. The AWS Load Balancer Controller is designed for Kubernetes, which is not explicitly stated as
being used by the company. Therefore, setting up this infrastructure with dynamic routing would involve more
effort compared to the Elastic Beanstalk approach.

In summary, Elastic Beanstalk offers the best balance between simplicity, managed services, and support for
feature testing via URL swapping, making it the most appropriate solution for this scenario.
Relevant AWS documentation:
AWS Elastic Beanstalk: https://aws.amazon.com/elasticbeanstalk/
Elastic Beanstalk URL Swapping: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/usingfeatures. CNAMESwap.html

---

## Question 191

**Answer:** **A**

**Explanation:**

The best solution to eliminate timeouts caused by reporting queries on an Amazon RDS for MySQL database
without restricting employee access is to create a read replica and move the reporting queries to it.

**Option A**, creating a read replica, directly addresses the problem by offloading read-intensive reporting

queries from the primary RDS instance. Read replicas allow you to scale beyond the capacity constraints of a
single database instance for read-heavy database workloads. The primary RDS instance will then be
dedicated to order processing, eliminating timeouts.

**Option B**, distributing the application across the primary and read replica is incorrect. The ordering application
needs consistent writes, which must occur on the primary instance to maintain data integrity. Splitting writes
across the primary and read replica is not possible due to the read-only nature of the replica and would
introduce data inconsistency issues.

**Option C**, migrating to DynamoDB, might be a viable long-term solution, but it's a complex undertaking
involving a complete application rewrite and data migration. Also, DynamoDB is a NoSQL database and might
not suit the relational nature of the customer information or the reporting requirements. The cost and effort
involved far outweigh the benefits for this immediate problem.

**Option D**, scheduling the reporting queries for non-peak hours, is a temporary workaround, not a permanent
solution. During those non-peak hours, timeouts might still occur if the queries remain resource-intensive.
Also, it imposes limitations on the employees' ability to perform queries on demand.

Therefore, **Option A** provides the most effective and least disruptive solution. It allows continued reporting
with minimal latency and doesn't interrupt order processing during business hours.
Amazon RDS Read ReplicasScaling with Amazon RDS Read Replicas

---

## Question 192

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's why:

**B.** Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data. This
option offers a highly scalable and cost-effective solution for storing and querying the document information.
Amazon S3 provides virtually unlimited storage capacity and high durability, suitable for storing the large
collection of historical records. Amazon Athena, a serverless query service, allows running SQL queries

directly on data stored in S3, eliminating the need to manage a database server. This approach maximizes
operational efficiency because no database maintenance is needed. Athena's pay-per-query pricing model
optimizes cost based on actual usage.

**E.** Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to
convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant
medical information from the text. This option provides a scalable and efficient way to analyze the
documents and extract the medical information. AWS Lambda allows running code without provisioning or
managing servers, ensuring scalability and operational efficiency. Amazon Textract is specifically designed
for extracting text and data from scanned documents. Amazon Comprehend Medical can then efficiently
process this raw text to identify and extract relevant medical information, such as diagnoses, medications,
and procedures. This is a serverless and automated approach for data extraction and analysis, ideal for
processing hundreds of new documents daily.

Why other options are incorrect:

**A:** Using an EC2 instance with MySQL for this volume and growth is not scalable or operationally efficient.
Managing a database server requires ongoing maintenance and scaling efforts.

**C:** Creating an Auto Scaling group of EC2 instances to run a custom application for processing the scanned
files adds complexity and operational overhead. It requires developing, deploying, and managing the custom
application, which deviates from maximizing operational efficiency.

**D:** Amazon Rekognition is designed for image and video analysis, not OCR from documents. Amazon
Transcribe Medical is for audio transcription and extraction, not for processing text from scanned documents.
Textract and Comprehend Medical are tools specifically tailored for document processing needs.
Supporting Documentation:
Amazon S3: https://aws.amazon.com/s3/
Amazon Athena: https://aws.amazon.com/athena/
AWS Lambda: https://aws.amazon.com/lambda/
Amazon Textract: https://aws.amazon.com/textract/
Amazon Comprehend Medical: https://aws.amazon.com/comprehend/medical/

---

## Question 193

**Answer:** **A**

**Explanation:**

The most suitable solution is A. Add Amazon RDS read replicas.

Here's why:
The core problem is high read load on the RDS databases. Read replicas are specifically designed to alleviate

read load from the primary RDS database. They provide read-only copies of the data, allowing read queries to
be directed to the replicas instead of the primary database. This reduces the load on the primary database,
improving its performance and availability. Because the question mentions a need for HA, using Read Replicas
fulfills that need also because they act as standby copies of the data if the primary were to fail.

**Option B**, using ElastiCache for Redis, is a valid caching solution, but it requires application modifications to
implement caching logic. While it could reduce database reads, it's a more complex solution and may not be
the best first step without further details on the application.

**Option C**, using Route 53 DNS caching, is not relevant to the problem. DNS caching improves the resolution
speed of domain names, but it doesn't address the database read load.

**Option D**, using ElastiCache for Memcached, is similar to Redis; it's a viable caching solution but requires
application changes. Memcached is usually best for caching simple objects that you need with very low
latency (usually smaller than Redis use cases).

Therefore, adding RDS read replicas is the simplest and most direct solution to reduce database read load
while also enhancing availability, without necessitating significant code changes. Read Replicas also
automatically handle data replication from the source so they’re easy to manage and can readily be scaled for
higher performance.
Further reading:
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. ReadReplicas.html
Amazon ElastiCache: https://aws.amazon.com/elasticache/

---

## Question 194

**Answer:** **A**

**Explanation:**

The most suitable solution for ensuring high availability and automatic failover of a database running on
Amazon EC2 instances is option A. Here's why:

**Option A** proposes launching two EC2 instances in separate Availability Zones (AZs) within the same AWS
Region. This leverages the principle of redundancy, a cornerstone of high availability architectures.
Availability Zones are physically isolated locations within an AWS Region, designed to be isolated from
failures in other AZs. Installing the database on both instances and configuring them as a cluster enables

active-passive or active-active replication. Replication ensures data is synchronized between the instances, so
if one instance fails, the other can immediately take over.
Clustering software, like Pacemaker or Windows Server Failover Clustering, along with database-specific
replication tools, orchestrates the failover process. When the primary instance fails, the cluster automatically
promotes the secondary instance to become the new primary, minimizing downtime and ensuring continuous
application availability.

**Option B** is less ideal because relying solely on AMIs and CloudFormation for recovery introduces significant
downtime. Restoring from an AMI and reprovisioning a new instance are time-consuming processes, not
suitable for applications requiring automatic failover.

**Option C** suggests using different AWS Regions. While cross-region failover provides disaster recovery
capabilities, it typically involves higher latency and complexity compared to multi-AZ setups. Failover across
Regions often isn't automatic and may require manual intervention or more sophisticated configuration,
making it less suitable for achieving automatic failover as required in the scenario.

**Option D** utilizes EC2 automatic recovery. While helpful for some instance-level failures, automatic recovery
only restarts the instance on a new underlying hardware within the same AZ. It does not protect against AZwide events or data loss and it does not guarantee minimal downtime. It's beneficial but not a comprehensive
HA solution on its own.

In summary, **Option A** delivers the best balance of high availability, automatic failover, and reasonable
complexity by leveraging redundancy within a Region using multiple AZs and database replication.

---

## Question 195

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution, along with supporting concepts and

resources:

**Option C** offers the most resilient and decoupled architecture for processing orders in the face of system
outages. It leverages Amazon SQS to create a buffer between the order system and the EC2 instances,
achieving asynchronous processing. When an order comes in, instead of directly calling an EC2 instance, the
order system places a message describing the order into the SQS queue. This action decouples the order
initiation from the processing itself.
The EC2 instances, which are now part of an Auto Scaling group, are configured to consume messages from
the SQS queue. The Auto Scaling group ensures that even if some EC2 instances fail, others will be launched
automatically to maintain the processing capacity. Because the order requests are persisted in the SQS
queue, even if all EC2 instances are temporarily down, no orders are lost. When the EC2 instances come back
online, they start consuming messages from the queue and processing the orders.
This approach directly addresses the requirement of automatically processing orders during system outages.
SQS guarantees at-least-once delivery, ensuring that each order is processed. The Auto Scaling group
provides high availability and fault tolerance for the processing instances. The decoupling between the order
system and the processing layer is crucial for resilience.

**Option A** is not ideal because EventBridge is typically used for event-driven architectures, not for reliable
message queuing for order processing. ECS might be an unnecessary complication. **Option B** only adds an
ALB for distribution but does not resolve the problem of orders lost during outages. While the ALB improves
availability, it does not buffer requests like SQS does. **Option D** is less suitable because SNS is primarily for
notifications, not guaranteed message delivery. Using Run Command to trigger processing on EC2 instances
introduces unnecessary complexity and management overhead. SQS is designed explicitly for reliable
message queuing, which perfectly aligns with the problem statement's requirements.

In summary, option C leverages the strengths of SQS and Auto Scaling to create a robust and fault-tolerant
order processing system, ensuring that orders are not lost and are automatically processed even during
system outages.
Supporting Links:
Amazon SQS: https://aws.amazon.com/sqs/
Amazon EC2 Auto Scaling: https://aws.amazon.com/autoscaling/

---

## Question 196

**Answer:** **D**

**Explanation:**

The most cost-effective and easiest-to-implement solution is option D, leveraging DynamoDB's Time To Live
(TTL) feature. TTL allows you to specify an attribute that determines when an item will be automatically
deleted from the table.
Here's why option D is superior to the other options:
Cost Efficiency: TTL incurs no additional charges beyond the standard DynamoDB costs. **Option B** involves a
monitoring application on an EC2 instance, incurring EC2 costs, while option C involves Lambda invocations,
incurring Lambda costs. **Option A** requires repeated full stack deployments which is extremely costly and
time-consuming.
Development Effort: Implementing TTL is straightforward. You simply add an attribute to your items
containing the expiration timestamp (current timestamp + 30 days) and configure DynamoDB to recognize this
attribute as the TTL attribute. The DynamoDB system automatically handles the deletion process.
Implementing options B and C requires developing and maintaining custom logic for monitoring, deletion, and
potentially conflict resolution. **Option A** requires creating a whole stack.
Automation: TTL is a fully automated process. Once configured, DynamoDB continuously monitors the TTL
attribute and removes expired items. Options B and C require scheduled scripts or Lambda functions,
introducing complexities with scheduling, error handling, and ensuring data consistency.
Scalability and Reliability: DynamoDB's TTL is a built-in feature, designed to scale with your table size.
Options B and C are limited by the scalability and reliability of the EC2 instance or Lambda function,
respectively.
Minimizes Impact on Application: Extending the application to add the TTL attribute is a minimal change with
little to no operational overhead. Options B and C might introduce latency or contention if the monitoring or
deletion processes interfere with application operations.
TTL efficiently handles data retention policies. DynamoDB handles cleanup in the background, minimizing
operational overhead and complexity. This aligns with cloud computing principles of automation, cost
optimization, and simplicity.
Further research on DynamoDB TTL can be found at:
DynamoDB TTL

---

## Question 197

**Answer:** **BE**

**Explanation:**

The requirement is to migrate a .NET application with minimal code changes to a highly available AWS
environment while retaining the Oracle database.

**Option B**, rehosting the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment,
directly addresses the minimal changes requirement. Elastic Beanstalk simplifies deployment and
management of web applications. By selecting the .NET platform and deploying it in a Multi-AZ environment,
the application gains high availability through automatic instance replacement in case of failure across
different Availability Zones. This 'lift and shift' approach requires very little to no code changes to the .NET
application itself.

**Option E**, using AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle
on Amazon RDS in a Multi-AZ deployment, fulfills the database persistence requirement with minimal
disruption. DMS allows migration of databases with minimal downtime. Migrating to Oracle RDS maintains
compatibility with the existing application architecture. Deploying Oracle on RDS in a Multi-AZ configuration
provides high availability for the database.

**Option A** is incorrect because refactoring to serverless Lambda functions requires significant code changes to
the application, violating the requirement for minimal development changes.

**Option C** is incorrect because replatforming to EC2 with Amazon Linux requires changes to the .NET
application to be compatible with Linux. It also does not offer any managed service to make deployment and
management easier, and it increases the overhead of managing the underlying OS.

**Option D** is incorrect because migrating to DynamoDB would require significant changes to the application's
data access layer to work with a NoSQL database, which is not acceptable since the requirement is to
minimize code changes. DynamoDB is not compatible with the existing application code.

Therefore, the correct answer is BE.

---

## Question 198

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, aligning with the given requirements and
constraints:
The core requirement is migrating the application to AWS with minimal code and deployment method changes
while minimizing operational overhead. The application uses a containerized setup on Kubernetes and
MongoDB for data storage.

**Option D**, using Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and
Amazon DocumentDB (with MongoDB compatibility) for data storage, is the ideal choice. EKS allows the
company to continue using Kubernetes without significant modifications to their existing deployment process,
fulfilling the "no deployment method changes" constraint. Fargate provides serverless compute, eliminating
the need to manage EC2 instances, thus reducing operational overhead significantly. This aligns with the
"minimizing operational overhead" requirement.
Critically, Amazon DocumentDB offers MongoDB compatibility. This is crucial because the prompt explicitly
states that "no code changes" are possible. Switching to DynamoDB (as suggested in options B and C) would
require significant code changes to interact with the new database API. DocumentDB's MongoDB
compatibility allows the application to interact with the database without altering the existing codebase.

**Option A** (ECS with EC2 and MongoDB on EC2) fails to minimize operational overhead. Managing EC2
instances for both compute and the database adds significant administrative burden compared to Fargate and
DocumentDB. **Option B** fails due to the required code changes for DynamoDB integration. **Option C** also fails
due to the need for code changes for DynamoDB.

In summary, EKS + Fargate provides Kubernetes compatibility and serverless compute, and DocumentDB
offers MongoDB compatibility and managed service characteristics, perfectly addressing all constraints and
requirements.
Supporting links:
Amazon EKS: https://aws.amazon.com/eks/
AWS Fargate: https://aws.amazon.com/fargate/
Amazon DocumentDB: https://aws.amazon.com/documentdb/

---

## Question 199

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages the appropriate AWS services for the specific requirements

outlined. Amazon Transcribe is specifically designed for converting speech to text, including capabilities for
multiple speaker recognition (speaker diarization). This directly addresses the need for transcribing call
center conversations with speaker identification.
Amazon Athena is a serverless, interactive query service that makes it easy to analyze data directly in Amazon
S3 using standard SQL. This satisfies the requirement for querying transcript files to analyze business
patterns.
Storing the transcript files in Amazon S3 (as implied in the problem description in conjunction with Athena)
ensures cost-effective and durable storage for the required 7-year retention period. S3's storage classes can
be configured to optimize cost based on access frequency.

**Option A** is incorrect because while Rekognition can analyze images and videos, it's not primarily designed for
real-time speech transcription and speaker diarization in the same way as Transcribe. While machine learning
models could be used for analysis, Athena provides a simpler, more readily available solution for querying the
data.

**Option C** is incorrect because Amazon Translate is used for language translation, not speech-to-text
transcription. Amazon Redshift is a data warehouse designed for large-scale data analytics, but using it solely
for querying relatively small transcript files is an overkill and less cost-effective than Athena.

**Option D** is incorrect because, similar to option A, Amazon Rekognition is primarily designed for image and
video analysis. Amazon Textract is used for extracting text and data from scanned documents and PDFs, not
for analyzing speech transcripts.

In summary, Amazon Transcribe efficiently handles the audio transcription and speaker recognition, while
Amazon Athena provides a direct and cost-effective way to query the resulting transcript files stored in
Amazon S3. This approach aligns perfectly with the prompt's need for transcription, analysis, and long-term
storage.

---

## Question 200

**Answer:** **D**

**Explanation:**

The correct answer is D: Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon
Cognito to validate each request. Here's why:
The problem requires an AWS-managed solution to control API access using Cognito for user management
with minimal operational overhead.

**Option D** directly leverages the integration between Cognito and API Gateway. Cognito User Pool Authorizers
within API Gateway allow API Gateway to directly validate the identity token (JWT) provided by Cognito upon
successful user authentication. This eliminates the need for custom code (like Lambda functions) for token
validation, significantly reducing development and operational overhead. API Gateway handles the token
verification process based on the configured User Pool.

**Option A**, using a Lambda function as an authorizer, introduces unnecessary complexity. While it works, it
requires writing, deploying, and maintaining the Lambda function. This adds operational overhead that the
problem statement seeks to avoid. It also involves potential latency from invoking the Lambda function.

**Option B**, using API Keys per user and a Lambda validator, introduces both operational overhead and security
concerns. Managing API keys for each user becomes complex, and the need to validate the key with a Lambda
function increases latency and operational burden. API keys are generally for API product access control
rather than individual user authorization.

**Option C**, sending the email address and validating with a Lambda function, is the least secure and most
inefficient solution. Relying on the email address in a header is easily spoofed. Also, querying a Lambda
function for each API call increases latency and creates an unnecessary dependency. This also likely requires
fetching user data from DynamoDB within the lambda, adding further overhead.
Cognito User Pool Authorizers offer seamless integration, scalability, and security, making them the ideal
choice for managed user-based API authorization when using Cognito for identity management. This approach
keeps the solution within the AWS-managed ecosystem, minimizing custom code and operational tasks.
Further Research:
API Gateway Authorizers: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-uselambda-authorizer.html
Cognito User Pools: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identitypools.html
API Gateway Cognito Authorizer:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html

---

# Quick Answer Sheet

Question 151: AC
Question 152: D
Question 153: D
Question 154: B
Question 155: C
Question 156: AE
Question 157: DE
Question 158: A
Question 159: AC
Question 160: C
Question 161: B
Question 162: A
Question 163: A
Question 164: C
Question 165: D
Question 166: D
Question 167: D
Question 168: D
Question 169: C
Question 170: C
Question 171: B
Question 172: C
Question 173: B
Question 174: B
Question 175: B
Question 176: A
Question 177: B
Question 178: A
Question 179: A
Question 180: BC
Question 181: A
Question 182: B
Question 183: A
Question 184: A
Question 185: B
Question 186: B
Question 187: AD
Question 188: A
Question 189: BD
Question 190: B
Question 191: A
Question 192: BE
Question 193: A
Question 194: A
Question 195: C
Question 196: D
Question 197: BE
Question 198: D
Question 199: B
Question 200: D
