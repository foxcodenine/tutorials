# AWS SAA-C03 Practice Test: Questions 351-400

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 351

A company is moving its data management application to AWS. The company wants to transition to an event-driven
architecture. The architecture needs to be more distributed and to use serverless concepts while performing the
different aspects of the workflow. The company also wants to minimize operational overhead.
Which solution will meet these requirements?

**A.** Build out the workflow in AWS Glue. Use AWS Glue to invoke AWS Lambda functions to process the
workflow steps.

**B.** Build out the workflow in AWS Step Functions. Deploy the application on Amazon EC2 instances. Use Step
Functions to invoke the workflow steps on the EC2 instances.

**C.** Build out the workflow in Amazon EventBridge. Use EventBridge to invoke AWS Lambda functions on a
schedule to process the workflow steps.

**D.** Build out the workflow in AWS Step Functions. Use Step Functions to create a state machine. Use the state
machine to invoke AWS Lambda functions to process the workflow steps.

---

## Question 352

A company is designing the network for an online multi-player game. The game uses the UDP networking protocol
and will be deployed in eight AWS Regions. The network architecture needs to minimize latency and packet loss to
give end users a high-quality gaming experience.
Which solution will meet these requirements?

**A.** Setup a transit gateway in each Region. Create inter-Region peering attachments between each transit
gateway.

**B.** Set up AWS Global Accelerator with UDP listeners and endpoint groups in each Region.

**C.** Set up Amazon CloudFront with UDP turned on. Configure an origin in each Region.

**D.** Set up a VPC peering mesh between each Region. Turn on UDP for each VPC.

---

## Question 353

A company hosts a three-tier web application on Amazon EC2 instances in a single Availability Zone. The web
application uses a self-managed MySQL database that is hosted on an EC2 instance to store data in an Amazon
Elastic Block Store (Amazon EBS) volume. The MySQL database currently uses a 1 TB Provisioned IOPS SSD (io2)
EBS volume. The company expects traffic of 1,000 IOPS for both reads and writes at peak traffic.

The company wants to minimize any disruptions, stabilize performance, and reduce costs while retaining the
capacity for double the IOPS. The company wants to move the database tier to a fully managed solution that is
highly available and fault tolerant.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use a Multi-AZ deployment of an Amazon RDS for MySQL DB instance with an io2 Block Express EBS volume.

**B.** Use a Multi-AZ deployment of an Amazon RDS for MySQL DB instance with a General Purpose SSD (gp2) EBS
volume.

**C.** Use Amazon S3 Intelligent-Tiering access tiers.

**D.** Use two large EC2 instances to host the database in active-passive mode.

---

## Question 354

A company hosts a serverless application on AWS. The application uses Amazon API Gateway, AWS Lambda, and
an Amazon RDS for PostgreSQL database. The company notices an increase in application errors that result from
database connection timeouts during times of peak traffic or unpredictable traffic. The company needs a solution
that reduces the application failures with the least amount of change to the code.
What should a solutions architect do to meet these requirements?

**A.** Reduce the Lambda concurrency rate.

**B.** Enable RDS Proxy on the RDS DB instance.

**C.** Resize the RDS DB instance class to accept more connections.

**D.** Migrate the database to Amazon DynamoDB with on-demand scaling.

---

## Question 355

A company is migrating an old application to AWS. The application runs a batch job every hour and is CPU
intensive. The batch job takes 15 minutes on average with an on-premises server. The server has 64 virtual CPU
(vCPU) and 512 GiB of memory.
Which solution will run the batch job within 15 minutes with the LEAST operational overhead?

**A.** Use AWS Lambda with functional scaling.

**B.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.

**C.** Use Amazon Lightsail with AWS Auto Scaling.

**D.** Use AWS Batch on Amazon EC2.

---

## Question 356

A company stores its data objects in Amazon S3 Standard storage. A solutions architect has found that 75% of the
data is rarely accessed after 30 days. The company needs all the data to remain immediately accessible with the
same high availability and resiliency, but the company wants to minimize storage costs.
Which storage solution will meet these requirements?

**A.** Move the data objects to S3 Glacier Deep Archive after 30 days.

**B.** Move the data objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

**C.** Move the data objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.

**D.** Move the data objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately.

---

## Question 357

A gaming company is moving its public scoreboard from a data center to the AWS Cloud. The company uses
Amazon EC2 Windows Server instances behind an Application Load Balancer to host its dynamic application. The
company needs a highly available storage solution for the application. The application consists of static files and
dynamic server-side code.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Store the static files on Amazon S3. Use Amazon CloudFront to cache objects at the edge.

**B.** Store the static files on Amazon S3. Use Amazon ElastiCache to cache objects at the edge.

**C.** Store the server-side code on Amazon Elastic File System (Amazon EFS). Mount the EFS volume on each EC2
instance to share the files.

**D.** Store the server-side code on Amazon FSx for Windows File Server. Mount the FSx for Windows File Server

volume on each EC2 instance to share the files.

**E.** Store the server-side code on a General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS)
volume. Mount the EBS volume on each EC2 instance to share the files.

---

## Question 358

A social media company runs its application on Amazon EC2 instances behind an Application Load Balancer (ALB).
The ALB is the origin for an Amazon CloudFront distribution. The application has more than a billion images stored
in an Amazon S3 bucket and processes thousands of images each second. The company wants to resize the
images dynamically and serve appropriate formats to clients.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Install an external image management library on an EC2 instance. Use the image management library to
process the images.

**B.** Create a CloudFront origin request policy. Use the policy to automatically resize images and to serve the
appropriate format based on the User-Agent HTTP header in the request.

**C.** Use a [email protected] function with an external image management library. Associate the [email protected]
function with the CloudFront behaviors that serve the images.

**D.** Create a CloudFront response headers policy. Use the policy to automatically resize images and to serve the
appropriate format based on the User-Agent HTTP header in the request.

---

## Question 359

A hospital needs to store patient records in an Amazon S3 bucket. The hospital’s compliance team must ensure
that all protected health information (PHI) is encrypted in transit and at rest. The compliance team must administer
the encryption key for data at rest.
Which solution will meet these requirements?

**A.** Create a public SSL/TLS certificate in AWS Certificate Manager (ACM). Associate the certificate with
Amazon S3. Configure default encryption for each S3 bucket to use server-side encryption with AWS KMS keys
(SSE-KMS). Assign the compliance team to manage the KMS keys.

**B.** Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over
HTTPS (TLS). Configure default encryption for each S3 bucket to use server-side encryption with S3 managed
encryption keys (SSE-S3). Assign the compliance team to manage the SSE-S3 keys.

**C.** Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over
HTTPS (TLS). Configure default encryption for each S3 bucket to use server-side encryption with AWS KMS
keys (SSE-KMS). Assign the compliance team to manage the KMS keys.

**D.** Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over
HTTPS (TLS). Use Amazon Macie to protect the sensitive data that is stored in Amazon S3. Assign the
compliance team to manage Macie.

---

## Question 360

A company uses Amazon API Gateway to run a private gateway with two REST APIs in the same VPC. The
BuyStock RESTful web service calls the CheckFunds RESTful web service to ensure that enough funds are
available before a stock can be purchased. The company has noticed in the VPC flow logs that the BuyStock
RESTful web service calls the CheckFunds RESTful web service over the internet instead of through the VPC. A
solutions architect must implement a solution so that the APIs communicate through the VPC.
Which solution will meet these requirements with the FEWEST changes to the code?

**A.** Add an X-API-Key header in the HTTP header for authorization.

**B.** Use an interface endpoint.

**C.** Use a gateway endpoint.

**D.** Add an Amazon Simple Queue Service (Amazon SQS) queue between the two REST APIs.

---

## Question 361

A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with
sub-millisecond latency and run one-time queries on historical data.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to export the data to an
Amazon S3 bucket.

**B.** Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move older data to S3
Glacier Deep Archive for long-term storage. Run one-time queries on the data in Amazon S3 by using Amazon
Athena.

**C.** Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently accessed. Export the
data to an Amazon S3 bucket by using DynamoDB table export. Run one-time queries on the data in Amazon S3
by using Amazon Athena.

**D.** Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to Amazon Kinesis Data
Streams. Use Amazon Kinesis Data Firehose to read the data from Kinesis Data Streams. Store the records in an
Amazon S3 bucket.

---

## Question 362

A company uses a payment processing system that requires messages for a particular payment ID to be received
in the same order that they were sent. Otherwise, the payments might be processed incorrectly.
Which actions should a solutions architect take to meet this requirement? (Choose two.)

**A.** Write the messages to an Amazon DynamoDB table with the payment ID as the partition key.

**B.** Write the messages to an Amazon Kinesis data stream with the payment ID as the partition key.

**C.** Write the messages to an Amazon ElastiCache for Memcached cluster with the payment ID as the key.

**D.** Write the messages to an Amazon Simple Queue Service (Amazon SQS) queue. Set the message attribute to
use the payment ID.

**E.** Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the message group
to use the payment ID.

---

## Question 363

A company is building a game system that needs to send unique events to separate leaderboard, matchmaking,
and authentication services concurrently. The company needs an AWS event-driven system that guarantees the
order of the events.
Which solution will meet these requirements?

**A.** Amazon EventBridge event bus

**B.** Amazon Simple Notification Service (Amazon SNS) FIFO topics

**C.** Amazon Simple Notification Service (Amazon SNS) standard topics

**D.** Amazon Simple Queue Service (Amazon SQS) FIFO queues

---

## Question 364

A hospital is designing a new application that gathers symptoms from patients. The hospital has decided to use
Amazon Simple Queue Service (Amazon SQS) and Amazon Simple Notification Service (Amazon SNS) in the
architecture.
A solutions architect is reviewing the infrastructure design. Data must be encrypted at rest and in transit. Only
authorized personnel of the hospital should be able to access the data.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

**A.** Turn on server-side encryption on the SQS components. Update the default key policy to restrict key usage
to a set of authorized principals.

**B.** Turn on server-side encryption on the SNS components by using an AWS Key Management Service (AWS
KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals.

**C.** Turn on encryption on the SNS components. Update the default key policy to restrict key usage to a set of
authorized principals. Set a condition in the topic policy to allow only encrypted connections over TLS.

**D.** Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS
KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals. Set a
condition in the queue policy to allow only encrypted connections over TLS.

**E.** Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS
KMS) customer managed key. Apply an IAM policy to restrict key usage to a set of authorized principals. Set a
condition in the queue policy to allow only encrypted connections over TLS.

---

## Question 365

A company runs a web application that is backed by Amazon RDS. A new database administrator caused data loss
by accidentally editing information in a database table. To help recover from this type of incident, the company
wants the ability to restore the database to its state from 5 minutes before any change within the last 30 days.
Which feature should the solutions architect include in the design to meet this requirement?

**A.** Read replicas

**B.** Manual snapshots

**C.** Automated backups

**D.** Multi-AZ deployments

---

## Question 366

A company’s web application consists of an Amazon API Gateway API in front of an AWS Lambda function and an
Amazon DynamoDB database. The Lambda function handles the business logic, and the DynamoDB table hosts the
data. The application uses Amazon Cognito user pools to identify the individual users of the application. A solutions
architect needs to update the application so that only users who have a subscription can access premium content.
Which solution will meet this requirement with the LEAST operational overhead?

**A.** Enable API caching and throttling on the API Gateway API.

**B.** Set up AWS WAF on the API Gateway API. Create a rule to filter users who have a subscription.

**C.** Apply fine-grained IAM permissions to the premium content in the DynamoDB table.

**D.** Implement API usage plans and API keys to limit the access of users who do not have a subscription.

---

## Question 367

A company is using Amazon Route 53 latency-based routing to route requests to its UDP-based application for
users around the world. The application is hosted on redundant servers in the company's on-premises data centers
in the United States, Asia, and Europe. The company’s compliance requirements state that the application must be
hosted on premises. The company wants to improve the performance and availability of the application.
What should a solutions architect do to meet these requirements?

**A.** Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises
endpoints. Create an accelerator by using AWS Global Accelerator, and register the NLBs as its endpoints.
Provide access to the application by using a CNAME that points to the accelerator DNS.

**B.** Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises
endpoints. Create an accelerator by using AWS Global Accelerator, and register the ALBs as its endpoints.
Provide access to the application by using a CNAME that points to the accelerator DNS.

**C.** Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises

endpoints. In Route 53, create a latency-based record that points to the three NLBs, and use it as an origin for
an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the
CloudFront DNS.

**D.** Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises
endpoints. In Route 53, create a latency-based record that points to the three ALBs, and use it as an origin for
an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the
CloudFront DNS.

---

## Question 368

A solutions architect wants all new users to have specific complexity requirements and mandatory rotation periods
for IAM user passwords.
What should the solutions architect do to accomplish this?

**A.** Set an overall password policy for the entire AWS account.

**B.** Set a password policy for each IAM user in the AWS account.

**C.** Use third-party vendor software to set password requirements.

**D.** Attach an Amazon CloudWatch rule to the Create_newuser event to set the password with the appropriate
requirements.

---

## Question 369

A company has migrated an application to Amazon EC2 Linux instances. One of these EC2 instances runs several 1hour tasks on a schedule. These tasks were written by different teams and have no common programming
language. The company is concerned about performance and scalability while these tasks run on a single instance.
A solutions architect needs to implement a solution to resolve these concerns.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Batch to run the tasks as jobs. Schedule the jobs by using Amazon EventBridge (Amazon

CloudWatch Events).

**B.** Convert the EC2 instance to a container. Use AWS App Runner to create the container on demand to run the
tasks as jobs.

**C.** Copy the tasks into AWS Lambda functions. Schedule the Lambda functions by using Amazon EventBridge
(Amazon CloudWatch Events).

**D.** Create an Amazon Machine Image (AMI) of the EC2 instance that runs the tasks. Create an Auto Scaling
group with the AMI to run multiple copies of the instance.

---

## Question 370

A company runs a public three-tier web application in a VPC. The application runs on Amazon EC2 instances across
multiple Availability Zones. The EC2 instances that run in private subnets need to communicate with a license

server over the internet. The company needs a managed solution that minimizes operational maintenance.
Which solution meets these requirements?

**A.** Provision a NAT instance in a public subnet. Modify each private subnet's route table with a default route
that points to the NAT instance.

**B.** Provision a NAT instance in a private subnet. Modify each private subnet's route table with a default route
that points to the NAT instance.

**C.** Provision a NAT gateway in a public subnet. Modify each private subnet's route table with a default route
that points to the NAT gateway.

**D.** Provision a NAT gateway in a private subnet. Modify each private subnet's route table with a default route
that points to the NAT gateway.

---

## Question 371

A company needs to create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host a digital media
streaming application. The EKS cluster will use a managed node group that is backed by Amazon Elastic Block
Store (Amazon EBS) volumes for storage. The company must encrypt all data at rest by using a customer managed
key that is stored in AWS Key Management Service (AWS KMS).

Which combination of actions will meet this requirement with the LEAST operational overhead? (Choose two.)

**A.** Use a Kubernetes plugin that uses the customer managed key to perform data encryption.

**B.** After creation of the EKS cluster, locate the EBS volumes. Enable encryption by using the customer
managed key.

**C.** Enable EBS encryption by default in the AWS Region where the EKS cluster will be created. Select the
customer managed key as the default key.

**D.** Create the EKS cluster. Create an IAM role that has a policy that grants permission to the customer managed
key. Associate the role with the EKS cluster.

**E.** Store the customer managed key as a Kubernetes secret in the EKS cluster. Use the customer managed key
to encrypt the EBS volumes.

---

## Question 372

A company wants to migrate an Oracle database to AWS. The database consists of a single table that contains
millions of geographic information systems (GIS) images that are high resolution and are identified by a
geographic code.
When a natural disaster occurs, tens of thousands of images get updated every few minutes. Each geographic
code has a single image or row that is associated with it. The company wants a solution that is highly available and
scalable during such events.
Which solution meets these requirements MOST cost-effectively?

**A.** Store the images and geographic codes in a database table. Use Oracle running on an Amazon RDS Multi-AZ
DB instance.

**B.** Store the images in Amazon S3 buckets. Use Amazon DynamoDB with the geographic code as the key and
the image S3 URL as the value.

**C.** Store the images and geographic codes in an Amazon DynamoDB table. Configure DynamoDB Accelerator
(DAX) during times of high load.

**D.** Store the images in Amazon S3 buckets. Store geographic codes and image S3 URLs in a database table.
Use Oracle running on an Amazon RDS Multi-AZ DB instance.

---

## Question 373

A company has an application that collects data from IoT sensors on automobiles. The data is streamed and stored
in Amazon S3 through Amazon Kinesis Data Firehose. The data produces trillions of S3 objects each year. Each
morning, the company uses the data from the previous 30 days to retrain a suite of machine learning (ML) models.
Four times each year, the company uses the data from the previous 12 months to perform analysis and train other
ML models. The data must be available with minimal delay for up to 1 year. After 1 year, the data must be retained
for archival purposes.
Which storage solution meets these requirements MOST cost-effectively?

**A.** Use the S3 Intelligent-Tiering storage class. Create an S3 Lifecycle policy to transition objects to S3 Glacier
Deep Archive after 1 year.

**B.** Use the S3 Intelligent-Tiering storage class. Configure S3 Intelligent-Tiering to automatically move objects
to S3 Glacier Deep Archive after 1 year.

**C.** Use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an S3 Lifecycle policy to
transition objects to S3 Glacier Deep Archive after 1 year.

**D.** Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition objects to S3 StandardInfrequent Access (S3 Standard-IA) after 30 days, and then to S3 Glacier Deep Archive after 1 year.

---

## Question 374

A company is running several business applications in three separate VPCs within the us-east-1 Region. The
applications must be able to communicate between VPCs. The applications also must be able to consistently send
hundreds of gigabytes of data each day to a latency-sensitive application that runs in a single on-premises data
center.
A solutions architect needs to design a network connectivity solution that maximizes cost-effectiveness.
Which solution meets these requirements?

**A.** Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by
configuring one VPN connection for each VPC.

**B.** Launch a third-party virtual network appliance in each VPC. Establish an IPsec VPN tunnel between the data
center and each virtual appliance.

**C.** Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1.
Establish connectivity by configuring each VPC to use one of the Direct Connect connections.

**D.** Set up one AWS Direct Connect connection from the data center to AWS. Create a transit gateway, and
attach each VPC to the transit gateway. Establish connectivity between the Direct Connect connection and the
transit gateway.

---

## Question 375

An ecommerce company is building a distributed application that involves several serverless functions and AWS
services to complete order-processing tasks. These tasks require manual approvals as part of the workflow. A
solutions architect needs to design an architecture for the order-processing application. The solution must be able
to combine multiple AWS Lambda functions into responsive serverless applications. The solution also must
orchestrate data and services that run on Amazon EC2 instances, containers, or on-premises servers.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Step Functions to build the application.

**B.** Integrate all the application components in an AWS Glue job.

**C.** Use Amazon Simple Queue Service (Amazon SQS) to build the application.

**D.** Use AWS Lambda functions and Amazon EventBridge events to build the application.

---

## Question 376

A company has launched an Amazon RDS for MySQL DB instance. Most of the connections to the database come
from serverless applications. Application traffic to the database changes significantly at random intervals. At
times of high demand, users report that their applications experience database connection rejection errors.
Which solution will resolve this issue with the LEAST operational overhead?

**A.** Create a proxy in RDS Proxy. Configure the users’ applications to use the DB instance through RDS Proxy.

**B.** Deploy Amazon ElastiCache for Memcached between the users’ applications and the DB instance.

**C.** Migrate the DB instance to a different instance class that has higher I/O capacity. Configure the users’
applications to use the new DB instance.

**D.** Configure Multi-AZ for the DB instance. Configure the users’ applications to switch between the DB
instances.

---

## Question 377

A company recently deployed a new auditing system to centralize information about operating system versions,
patching, and installed software for Amazon EC2 instances. A solutions architect must ensure all instances
provisioned through EC2 Auto Scaling groups successfully send reports to the auditing system as soon as they are
launched and terminated.
Which solution achieves these goals MOST efficiently?

**A.** Use a scheduled AWS Lambda function and run a script remotely on all EC2 instances to send data to the
audit system.

**B.** Use EC2 Auto Scaling lifecycle hooks to run a custom script to send data to the audit system when instances
are launched and terminated.

**C.** Use an EC2 Auto Scaling launch configuration to run a custom script through user data to send data to the
audit system when instances are launched and terminated.

**D.** Run a custom script on the instance operating system to send data to the audit system. Configure the script
to be invoked by the EC2 Auto Scaling group when the instance starts and is terminated.

---

## Question 378

A company is developing a real-time multiplayer game that uses UDP for communications between the client and
servers in an Auto Scaling group. Spikes in demand are anticipated during the day, so the game server platform
must adapt accordingly. Developers want to store gamer scores and other non-relational data in a database
solution that will scale without intervention.
Which solution should a solutions architect recommend?

**A.** Use Amazon Route 53 for traffic distribution and Amazon Aurora Serverless for data storage.

**B.** Use a Network Load Balancer for traffic distribution and Amazon DynamoDB on-demand for data storage.

**C.** Use a Network Load Balancer for traffic distribution and Amazon Aurora Global Database for data storage.

**D.** Use an Application Load Balancer for traffic distribution and Amazon DynamoDB global tables for data
storage.

---

## Question 379

A company hosts a frontend application that uses an Amazon API Gateway API backend that is integrated with
AWS Lambda. When the API receives requests, the Lambda function loads many libraries. Then the Lambda
function connects to an Amazon RDS database, processes the data, and returns the data to the frontend
application. The company wants to ensure that response latency is as low as possible for all its users with the
fewest number of changes to the company's operations.
Which solution will meet these requirements?

**A.** Establish a connection between the frontend application and the database to make queries faster by
bypassing the API.

**B.** Configure provisioned concurrency for the Lambda function that handles the requests.

**C.** Cache the results of the queries in Amazon S3 for faster retrieval of similar datasets.

**D.** Increase the size of the database to increase the number of connections Lambda can establish at one time.

---

## Question 380

A company is migrating its on-premises workload to the AWS Cloud. The company already uses several Amazon
EC2 instances and Amazon RDS DB instances. The company wants a solution that automatically starts and stops
the EC2 instances and DB instances outside of business hours. The solution must minimize cost and infrastructure
maintenance.
Which solution will meet these requirements?

**A.** Scale the EC2 instances by using elastic resize. Scale the DB instances to zero outside of business hours.

**B.** Explore AWS Marketplace for partner solutions that will automatically start and stop the EC2 instances and
DB instances on a schedule.

**C.** Launch another EC2 instance. Configure a crontab schedule to run shell scripts that will start and stop the
existing EC2 instances and DB instances on a schedule.

**D.** Create an AWS Lambda function that will start and stop the EC2 instances and DB instances. Configure
Amazon EventBridge to invoke the Lambda function on a schedule.

---

## Question 381

A company hosts a three-tier web application that includes a PostgreSQL database. The database stores the
metadata from documents. The company searches the metadata for key terms to retrieve documents that the
company reviews in a report each month. The documents are stored in Amazon S3. The documents are usually
written only once, but they are updated frequently.
The reporting process takes a few hours with the use of relational queries. The reporting process must not prevent
any document modifications or the addition of new documents. A solutions architect needs to implement a solution
to speed up the reporting process.
Which solution will meet these requirements with the LEAST amount of change to the application code?

**A.** Set up a new Amazon DocumentDB (with MongoDB compatibility) cluster that includes a read replica. Scale
the read replica to generate the reports.

**B.** Set up a new Amazon Aurora PostgreSQL DB cluster that includes an Aurora Replica. Issue queries to the
Aurora Replica to generate the reports.

**C.** Set up a new Amazon RDS for PostgreSQL Multi-AZ DB instance. Configure the reporting module to query
the secondary RDS node so that the reporting module does not affect the primary node.

**D.** Set up a new Amazon DynamoDB table to store the documents. Use a fixed write capacity to support new
document entries. Automatically scale the read capacity to support the reports.

---

## Question 382

A company has a three-tier application on AWS that ingests sensor data from its users’ devices. The traffic flows
through a Network Load Balancer (NLB), then to Amazon EC2 instances for the web tier, and finally to EC2
instances for the application tier. The application tier makes calls to a database.
What should a solutions architect do to improve the security of the data in transit?

**A.** Configure a TLS listener. Deploy the server certificate on the NLB.

**B.** Configure AWS Shield Advanced. Enable AWS WAF on the NLB.

**C.** Change the load balancer to an Application Load Balancer (ALB). Enable AWS WAF on the ALB.

**D.** Encrypt the Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instances by using AWS Key
Management Service (AWS KMS).

---

## Question 383

A company is planning to migrate a commercial off-the-shelf application from its on-premises data center to AWS.
The software has a software licensing model using sockets and cores with predictable capacity and uptime
requirements. The company wants to use its existing licenses, which were purchased earlier this year.
Which Amazon EC2 pricing option is the MOST cost-effective?

**A.** Dedicated Reserved Hosts

**B.** Dedicated On-Demand Hosts

**C.** Dedicated Reserved Instances

**D.** Dedicated On-Demand Instances

---

## Question 384

A company runs an application on Amazon EC2 Linux instances across multiple Availability Zones. The application
needs a storage layer that is highly available and Portable Operating System Interface (POSIX)-compliant. The
storage layer must provide maximum data durability and must be shareable across the EC2 instances. The data in
the storage layer will be accessed frequently for the first 30 days and will be accessed infrequently after that
time.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed
data to S3 Glacier.

**B.** Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed
data to S3 Standard-Infrequent Access (S3 Standard-IA).

**C.** Use the Amazon Elastic File System (Amazon EFS) Standard storage class. Create a lifecycle management
policy to move infrequently accessed data to EFS Standard-Infrequent Access (EFS Standard-IA).

**D.** Use the Amazon Elastic File System (Amazon EFS) One Zone storage class. Create a lifecycle management
policy to move infrequently accessed data to EFS One Zone-Infrequent Access (EFS One Zone-IA).

---

## Question 385

A solutions architect is creating a new VPC design. There are two public subnets for the load balancer, two private
subnets for web servers, and two private subnets for MySQL. The web servers use only HTTPS. The solutions
architect has already created a security group for the load balancer allowing port 443 from 0.0.0.0/0. Company
policy requires that each resource has the least access required to still be able to perform its tasks.
Which additional configuration strategy should the solutions architect use to meet these requirements?

**A.** Create a security group for the web servers and allow port 443 from 0.0.0.0/0. Create a security group for
the MySQL servers and allow port 3306 from the web servers security group.

**B.** Create a network ACL for the web servers and allow port 443 from 0.0.0.0/0. Create a network ACL for the
MySQL servers and allow port 3306 from the web servers security group.

**C.** Create a security group for the web servers and allow port 443 from the load balancer. Create a security
group for the MySQL servers and allow port 3306 from the web servers security group.

**D.** Create a network ACL for the web servers and allow port 443 from the load balancer. Create a network ACL
for the MySQL servers and allow port 3306 from the web servers security group.

---

## Question 386

An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on
Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS
instance. There are frequent calls to return identical datasets from the database that are causing performance
slowdowns.
Which action should be taken to improve the performance of the backend?

**A.** Implement Amazon SNS to store the database calls.

**B.** Implement Amazon ElastiCache to cache the large datasets.

**C.** Implement an RDS for MySQL read replica to cache database calls.

**D.** Implement Amazon Kinesis Data Firehose to stream the calls to the database.

---

## Question 387

A new employee has joined a company as a deployment engineer. The deployment engineer will be using AWS
CloudFormation templates to create multiple AWS resources. A solutions architect wants the deployment
engineer to perform job activities while following the principle of least privilege.
Which combination of actions should the solutions architect take to accomplish this goal? (Choose two.)

**A.** Have the deployment engineer use AWS account root user credentials for performing AWS CloudFormation
stack operations.

**B.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has the PowerUsers
IAM policy attached.

**C.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has the
AdministratorAccess IAM policy attached.

**D.** Create a new IAM user for the deployment engineer and add the IAM user to a group that has an IAM policy
that allows AWS CloudFormation actions only.

**E.** Create an IAM role for the deployment engineer to explicitly define the permissions specific to the AWS
CloudFormation stack and launch stacks using that IAM role.

---

## Question 388

A company is deploying a two-tier web application in a VPC. The web tier is using an Amazon EC2 Auto Scaling
group with public subnets that span multiple Availability Zones. The database tier consists of an Amazon RDS for
MySQL DB instance in separate private subnets. The web tier requires access to the database to retrieve product
information.
The web application is not working as intended. The web application reports that it cannot connect to the
database. The database is confirmed to be up and running. All configurations for the network ACLs, security
groups, and route tables are still in their default states.
What should a solutions architect recommend to fix the application?

**A.** Add an explicit rule to the private subnet’s network ACL to allow traffic from the web tier’s EC2 instances.

**B.** Add a route in the VPC route table to allow traffic between the web tier’s EC2 instances and the database
tier.

**C.** Deploy the web tier's EC2 instances and the database tier’s RDS instance into two separate VPCs, and
configure VPC peering.

**D.** Add an inbound rule to the security group of the database tier’s RDS instance to allow traffic from the web
tiers security group.

---

## Question 389

A company has a large dataset for its online advertising business stored in an Amazon RDS for MySQL DB instance
in a single Availability Zone. The company wants business reporting queries to run without impacting the write
operations to the production DB instance.
Which solution meets these requirements?

**A.** Deploy RDS read replicas to process the business reporting queries.

**B.** Scale out the DB instance horizontally by placing it behind an Elastic Load Balancer.

**C.** Scale up the DB instance to a larger instance type to handle write operations and queries.

**D.** Deploy the DB instance in multiple Availability Zones to process the business reporting queries.

---

## Question 390

A company hosts a three-tier ecommerce application on a fleet of Amazon EC2 instances. The instances run in an
Auto Scaling group behind an Application Load Balancer (ALB). All ecommerce data is stored in an Amazon RDS
for MariaDB Multi-AZ DB instance.
The company wants to optimize customer session management during transactions. The application must store
session data durably.
Which solutions will meet these requirements? (Choose two.)

**A.** Turn on the sticky sessions feature (session affinity) on the ALB.

**B.** Use an Amazon DynamoDB table to store customer session information.

**C.** Deploy an Amazon Cognito user pool to manage user session information.

**D.** Deploy an Amazon ElastiCache for Redis cluster to store customer session information.

**E.** Use AWS Systems Manager Application Manager in the application to manage user session information.

---

## Question 391

A company needs a backup strategy for its three-tier stateless web application. The web application runs on
Amazon EC2 instances in an Auto Scaling group with a dynamic scaling policy that is configured to respond to
scaling events. The database tier runs on Amazon RDS for PostgreSQL. The web application does not require
temporary local storage on the EC2 instances. The company’s recovery point objective (RPO) is 2 hours.
The backup strategy must maximize scalability and optimize resource utilization for this environment.
Which solution will meet these requirements?

**A.** Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances and database
every 2 hours to meet the RPO.

**B.** Configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots. Enable
automated backups in Amazon RDS to meet the RPO.

**C.** Retain the latest Amazon Machine Images (AMIs) of the web and application tiers. Enable automated
backups in Amazon RDS and use point-in-time recovery to meet the RPO.

**D.** Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances every 2 hours.
Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.

---

## Question 392

A company wants to deploy a new public web application on AWS. The application includes a web server tier that
uses Amazon EC2 instances. The application also includes a database tier that uses an Amazon RDS for MySQL DB
instance.
The application must be secure and accessible for global customers that have dynamic IP addresses.
How should a solutions architect configure the security groups to meet these requirements?

**A.** Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0.
Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group
of the web servers.

**B.** Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses
of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from
the security group of the web servers.

**C.** Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses
of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from
the IP addresses of the customers.

**D.** Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0.
Configure the security group for the DB instance to allow inbound traffic on port 3306 from 0.0.0.0/0.

---

## Question 393

A payment processing company records all voice communication with its customers and stores the audio files in an
Amazon S3 bucket. The company needs to capture the text from the audio files. The company must remove from
the text any personally identifiable information (PII) that belongs to customers.
What should a solutions architect do to meet these requirements?

**A.** Process the audio files by using Amazon Kinesis Video Streams. Use an AWS Lambda function to scan for
known PII patterns.

**B.** When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start an Amazon
Textract task to analyze the call recordings.

**C.** Configure an Amazon Transcribe transcription job with PII redaction turned on. When an audio file is
uploaded to the S3 bucket, invoke an AWS Lambda function to start the transcription job. Store the output in a
separate S3 bucket.

**D.** Create an Amazon Connect contact flow that ingests the audio files with transcription turned on. Embed an
AWS Lambda function to scan for known PII patterns. Use Amazon EventBridge to start the contact flow when
an audio file is uploaded to the S3 bucket.

---

## Question 394

A company is running a multi-tier ecommerce web application in the AWS Cloud. The application runs on Amazon
EC2 instances with an Amazon RDS for MySQL Multi-AZ DB instance. Amazon RDS is configured with the latest
generation DB instance with 2,000 GB of storage in a General Purpose SSD (gp3) Amazon Elastic Block Store
(Amazon EBS) volume. The database performance affects the application during periods of high demand.
A database administrator analyzes the logs in Amazon CloudWatch Logs and discovers that the application
performance always degrades when the number of read and write IOPS is higher than 20,000.
What should a solutions architect do to improve the application performance?

**A.** Replace the volume with a magnetic volume.

**B.** Increase the number of IOPS on the gp3 volume.

**C.** Replace the volume with a Provisioned IOPS SSD (io2) volume.

**D.** Replace the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes.

---

## Question 395

An IAM user made several configuration changes to AWS resources in their company's account during a
production deployment last week. A solutions architect learned that a couple of security group rules are not
configured as desired. The solutions architect wants to confirm which IAM user was responsible for making
changes.
Which service should the solutions architect use to find the desired information?

**A.** Amazon GuardDuty

**B.** Amazon Inspector

**C.** AWS CloudTrail

**D.** AWS Config

---

## Question 396

A company has implemented a self-managed DNS service on AWS. The solution consists of the following:
• Amazon EC2 instances in different AWS Regions
• Endpoints of a standard accelerator in AWS Global Accelerator
The company wants to protect the solution against DDoS attacks.
What should a solutions architect do to meet this requirement?

**A.** Subscribe to AWS Shield Advanced. Add the accelerator as a resource to protect.

**B.** Subscribe to AWS Shield Advanced. Add the EC2 instances as resources to protect.

**C.** Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the accelerator.

**D.** Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the EC2
instances.

---

## Question 397

An ecommerce company needs to run a scheduled daily job to aggregate and filter sales records for analytics. The
company stores the sales records in an Amazon S3 bucket. Each object can be up to 10 GB in size. Based on the
number of sales events, the job can take up to an hour to complete. The CPU and memory usage of the job are
constant and are known in advance.
A solutions architect needs to minimize the amount of operational effort that is needed for the job to run.
Which solution meets these requirements?

**A.** Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the EventBridge
event to run once a day.

**B.** Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the API with the
function. Create an Amazon EventBridge scheduled event that calls the API and invokes the function.

**C.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch type. Create
an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job.

**D.** Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type and an
Auto Scaling group with at least one EC2 instance. Create an Amazon EventBridge scheduled event that
launches an ECS task on the cluster to run the job.

---

## Question 398

A company needs to transfer 600 TB of data from its on-premises network-attached storage (NAS) system to the
AWS Cloud. The data transfer must be complete within 2 weeks. The data is sensitive and must be encrypted in
transit. The company’s internet connection can support an upload speed of 100 Mbps.
Which solution meets these requirements MOST cost-effectively?

**A.** Use Amazon S3 multi-part upload functionality to transfer the files over HTTPS.

**B.** Create a VPN connection between the on-premises NAS system and the nearest AWS Region. Transfer the
data over the VPN connection.

**C.** Use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices. Use the
devices to transfer the data to Amazon S3.

**D.** Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS
Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.

---

## Question 399

A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API
endpoint to give users the ability to retrieve current stock prices. The company’s security team has noticed an
increase in the number of API requests. The security team is concerned that HTTP flood attacks might take the
application offline.
A solutions architect must design a solution to protect the application from this type of attack.
Which solution meets these requirements with the LEAST operational overhead?

**A.** Create an Amazon CloudFront distribution in front of the API Gateway Regional API endpoint with a
maximum TTL of 24 hours.

**B.** Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web ACL with the API Gateway
stage.

**C.** Use Amazon CloudWatch metrics to monitor the Count metric and alert the security team when the
predefined rate is reached.

**D.** Create an Amazon CloudFront distribution with [email protected] in front of the API Gateway Regional API
endpoint. Create an AWS Lambda function to block requests from IP addresses that exceed the predefined
rate.

---

## Question 400

A meteorological startup company has a custom web application to sell weather data to its users online. The
company uses Amazon DynamoDB to store its data and wants to build a new service that sends an alert to the
managers of four internal teams every time a new weather event is recorded. The company does not want this new
service to affect the performance of the current application.
What should a solutions architect do to meet these requirements with the LEAST amount of operational overhead?

**A.** Use DynamoDB transactions to write new event data to the table. Configure the transactions to notify
internal teams.

**B.** Have the current application publish a message to four Amazon Simple Notification Service (Amazon SNS)
topics. Have each team subscribe to one topic.

**C.** Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon Simple
Notification Service (Amazon SNS) topic to which the teams can subscribe.

**D.** Add a custom attribute to each record to flag new items. Write a cron job that scans the table every minute
for items that are new and notifies an Amazon Simple Queue Service (Amazon SQS) queue to which the teams
can subscribe.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 351

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS Step Functions and Lambda, which are key serverless
components ideal for building event-driven architectures with minimal operational overhead.

Here's why:
Step Functions: AWS Step Functions allows you to define workflows as state machines. This is crucial for
managing the data management application's workflow, breaking it down into discrete, manageable steps.
The visual workflow makes it easier to understand, monitor, and maintain the entire process.
(https://aws.amazon.com/step-functions/)
Lambda: AWS Lambda provides serverless compute capabilities. By using Lambda functions for each step in
the workflow, you eliminate the need to manage servers or containers, reducing operational overhead
significantly. Lambda functions execute only when triggered, further optimizing resource utilization and cost.
(https://aws.amazon.com/lambda/)
Event-Driven Architecture: Step Functions facilitates event-driven behavior by triggering different Lambda
functions based on the outcome of previous steps. This asynchronous execution ensures that the application
is highly responsive and scalable.
Why the other options are less suitable:
A (AWS Glue): While AWS Glue can perform ETL tasks, it's primarily designed for data integration and
preparation, not for orchestrating a general-purpose event-driven workflow. It also can have an overhead on
smaller tasks.
B (Step Functions + EC2): Deploying the application on EC2 instances introduces the operational overhead of
managing servers, which contradicts the requirement of minimizing operational overhead and adopting
serverless concepts.
C (EventBridge + Lambda on a Schedule): Amazon EventBridge is excellent for routing events between
services, but scheduling Lambda functions directly doesn't provide the sophisticated workflow orchestration
capabilities offered by Step Functions. A schedule lacks the necessary state management and error handling.

In summary, Step Functions provides the workflow orchestration, Lambda provides the serverless compute,
fulfilling the need for a distributed, serverless, and event-driven architecture with minimal operational
overhead.

---

## Question 352

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B (Set up AWS Global Accelerator with UDP listeners and
endpoint groups in each Region) is the best solution for minimizing latency and packet loss in a multi-region,
UDP-based online game, and why the other options are less suitable:
Why **Option B** is Correct: AWS Global Accelerator
AWS Global Accelerator is specifically designed to improve the availability and performance of applications
for a global user base. It leverages the AWS global network infrastructure to route traffic to the optimal
endpoint based on user location, network health, and endpoint health. It uses Anycast static IPs that serve as
a fixed entry point to applications, which minimizes DNS resolution time and offers quick failover to healthy
endpoints.
UDP Support: Global Accelerator supports UDP, which is crucial because the game uses the UDP protocol.
UDP is preferred for online gaming because it's connectionless, leading to lower latency compared to TCP.
Reduced Latency: Global Accelerator intelligently routes traffic over the AWS global network, minimizing
latency.
Improved Reliability: Global Accelerator constantly monitors the health of your application endpoints and
only directs traffic to healthy endpoints, thus reducing packet loss and creating a smoother gaming
experience. Its failover mechanism automatically reroutes traffic to the nearest available endpoint if one fails.
Regional Deployment: By setting up endpoint groups in each region, you ensure players are routed to the
nearest available server, further reducing latency and optimizing their gameplay experience.
Why Other Options are Incorrect:

**A.** Transit Gateway with Inter-Region Peering: While transit gateways simplify network management, interregion peering through transit gateways does not inherently optimize latency or packet loss for real-time
applications like online games. Transit Gateway adds an additional hop. It's also not optimized to specifically
handle UDP traffic with the low latency requirements of gaming applications.

**C.** Amazon CloudFront with UDP: CloudFront primarily focuses on caching content closer to users for
efficient content delivery. Although CloudFront supports UDP for some use cases, it's not optimized for
dynamic, bi-directional, real-time UDP traffic required in online gaming. It's better suited for video streaming
and file downloads. The core focus of CloudFront is content delivery, not low-latency communication.

**D.** VPC Peering Mesh: A full mesh of VPC peering connections between eight regions results in a complex
and difficult-to-manage network. While VPC peering establishes connectivity, it doesn't provide intelligent
routing or optimization for latency and packet loss across regions. It also requires manual management of
routing tables in each VPC. Also, UDP support on its own does not address packet loss reduction or intelligent
routing for latency.

---

## Question 353

**Answer:** **B**

**Explanation:**

The best solution is to use a Multi-AZ deployment of an Amazon RDS for MySQL DB instance with a General
Purpose SSD (gp2) EBS volume.

Here's why:
Requirement fulfillment: This solution satisfies the core requirements of high availability, fault tolerance, and
cost reduction while moving to a fully managed service.
Fully managed solution: Amazon RDS is a fully managed database service, eliminating the operational
overhead of managing the database server.
High availability and fault tolerance: A Multi-AZ deployment in RDS provides redundancy. If the primary
instance fails, RDS automatically fails over to the standby instance in another Availability Zone, minimizing
downtime.
Performance: While io2 EBS volume provides consistent performance, the requirement is for 1000 IOPS (with
a peak of 2000 IOPS). The gp2 volume often is enough for this IOPS level. Besides, a gp2 EBS volume with a
large enough size (exceeding 334GB) is capable of delivering performance beyond 1000 IOPS. Additionally,
RDS instances can also be sized up to meet additional performance requirements.
Cost optimization: gp2 volumes are generally more cost-effective than io2 volumes. This helps to reduce
costs without sacrificing performance for the specified workload.
Scalability: RDS allows easy scaling of the database instance and storage as needed.
Why other options are less ideal:

**Option A** (io2 Block Express EBS): io2 Block Express offers higher IOPS and throughput, but it's more
expensive than gp2. The company expects traffic of only 1,000 IOPS (and up to 2000 IOPS), which can be
accommodated by gp2. This would be an unnecessarily expensive option.

**Option C** (S3 Intelligent-Tiering): Amazon S3 is for object storage, not for hosting a relational database.

**Option D** (EC2 instances in active-passive mode): This would require significant manual effort for setup,
failover management, and database administration. It also involves higher costs associated with EC2 instance
management.

---

## Question 354

**Answer:** **B**

**Explanation:**

The correct answer is B. Enable RDS Proxy on the RDS DB instance.

Here's a detailed justification:
Database connection timeouts in serverless applications, like the one described, are often caused by
connection exhaustion. Lambda functions, especially during periods of high concurrency, rapidly establish
database connections. RDS instances have a limit to the number of concurrent connections they can handle.
When Lambda functions try to open new connections beyond this limit, connection timeouts occur.
RDS Proxy sits between the Lambda functions and the RDS database. It pools and shares database
connections, effectively reducing the number of direct connections made from Lambda to RDS. This is a key
aspect of solving connection exhaustion. By multiplexing connections, RDS Proxy allows more Lambda
invocations to access the database without overwhelming it.

**Option A** (Reduce the Lambda concurrency rate) would directly reduce the application's ability to serve
requests, degrading performance and user experience. It addresses the symptom but not the root cause. It is
also counter to the implied requirement of handling peak traffic.

**Option C** (Resize the RDS DB instance class) might increase the maximum number of connections the
database can handle. However, it is a costly solution that requires significant downtime and doesn't address
the fundamental problem of inefficient connection management, especially for spiky workloads. It is also not
the "least amount of change to the code" as requested in the prompt, as it requires infrastructure changes.

**Option D** (Migrate the database to Amazon DynamoDB) is a significantly larger change involving considerable
code refactoring and a completely different data model. DynamoDB is a NoSQL database and likely
incompatible with the existing application's data schema and query patterns that are tailored for a relational
database (PostgreSQL). DynamoDB also has a completely different set of considerations for cost optimisation
which will likely lead to a higher operational burden.
RDS Proxy is designed to solve the exact problem of connection exhaustion in serverless applications using
relational databases with minimal code changes. It optimizes connection management and provides
connection pooling, leading to improved application stability during peak traffic. It is the most direct and
efficient solution, requiring the least amount of code change.
Supporting links:
Using Amazon RDS Proxy with AWS Lambda: Provides a detailed explanation of using RDS Proxy with Lambda
to improve application performance.
Amazon RDS Proxy: Official documentation for RDS Proxy, including features and benefits.

Best Practices for Working with AWS Lambda Functions: Covers general best practices for using Lambda,
including database connection management.

---

## Question 355

**Answer:** **D**

**Explanation:**

The optimal solution for migrating the CPU-intensive batch job with minimal operational overhead is using
AWS Batch on Amazon EC2. Here's why:
AWS Batch is specifically designed for running batch computing workloads. It handles the complexities of
provisioning and managing compute resources, allowing the company to focus on the batch job itself. AWS
Batch automatically scales the compute resources based on the job's requirements, ensuring it can complete
within the desired 15-minute timeframe. https://aws.amazon.com/batch/
Amazon EC2 offers a wide variety of instance types that can be optimized for CPU-intensive workloads.
Selecting an instance type that meets the vCPU and memory requirements of the original server (or even
surpasses them for faster execution) ensures the batch job's performance.
Operational Overhead: AWS Batch significantly reduces operational overhead because it manages the
underlying infrastructure. The company doesn't have to manually provision, configure, or manage EC2
instances. AWS Batch takes care of scheduling jobs, launching instances, and monitoring their progress.
Comparison with other options:
AWS Lambda: While Lambda is serverless, it has limitations on execution time (currently 15 minutes
maximum), memory, and CPU resources. A 15-minute CPU-intensive job likely exceeds these limitations.
Amazon ECS with Fargate: Fargate eliminates the need to manage servers, but it's primarily designed for
containerized applications, adding complexity if the original application is not already containerized. Also,
CPU and memory options on Fargate might require extensive configuration to meet the original server's
specifications.
Amazon Lightsail with Auto Scaling: Lightsail is a simpler alternative to EC2, but it provides less flexibility
and control over instance types and scaling policies than EC2 and AWS Batch. It may not be the most efficient
way to manage a demanding batch job. Plus, the 512 GB memory requirement isn't easily achieved in Lightsail
instances.

In summary, AWS Batch on Amazon EC2 provides the right balance of performance, scalability, and reduced
operational overhead for migrating the batch job to AWS. The ability to customize EC2 instances ensures the
application has the necessary resources to complete within the specified timeframe, while AWS Batch
simplifies management.

---

## Question 356

**Answer:** **B**

**Explanation:**

The correct answer is B, moving the data objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30
days. This choice effectively balances cost optimization with the requirement for immediate data accessibility
and high availability. S3 Standard-IA is designed for data that is infrequently accessed but requires rapid
retrieval when needed. This perfectly aligns with the scenario where 75% of the data is rarely accessed after
30 days, but the company still needs it to be immediately available.

**Option A**, S3 Glacier Deep Archive, is unsuitable because it is designed for long-term archival with retrieval
times ranging from hours to days. This violates the requirement for immediate accessibility. **Option C**, S3 One
Zone-IA, offers lower costs than S3 Standard-IA but compromises data durability and availability as it stores
data in a single Availability Zone (AZ). This contradicts the requirement for high availability and resiliency.

**Option D**, moving data immediately to S3 One Zone-IA, similarly fails to meet the high availability and
resiliency requirements.
S3 Standard-IA offers the same high durability as S3 Standard (99.999999999% across multiple AZs) while
providing a lower storage cost. Although S3 Standard-IA has a retrieval fee, given that only 25% of the data is
frequently accessed, the cost savings on the 75% of infrequently accessed data will outweigh the retrieval
fees. By transitioning the data after 30 days, the company minimizes costs while adhering to the specified
accessibility and availability criteria. S3 Intelligent-Tiering could also be considered, but with a known access
pattern of 30 days, S3 Standard-IA provides a more predictable and potentially more cost-effective solution.
Further research can be found on the AWS website:
S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
S3 Standard-IA: https://aws.amazon.com/s3/storage-classes/ia/

---

## Question 357

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's a breakdown of why:

**Option A**: Store the static files on Amazon S3. Use Amazon CloudFront to cache objects at the edge.
Amazon S3 is ideal for storing static files (images, CSS, JavaScript, etc.) due to its scalability, durability, and
cost-effectiveness. (https://aws.amazon.com/s3/)
Amazon CloudFront is a Content Delivery Network (CDN) that caches these static files at edge locations
globally. This reduces latency and improves performance for users accessing the scoreboard.
(https://aws.amazon.com/cloudfront/)
CloudFront improves availability by serving content from cached locations even if the origin server is
temporarily unavailable.

**Option D**: Store the server-side code on Amazon FSx for Windows File Server. Mount the FSx for Windows
File Server volume on each EC2 instance to share the files.
Amazon FSx for Windows File Server is a fully managed Windows file server built on Windows Server.
(https://aws.amazon.com/fsx/windows/)
Since the application uses EC2 Windows Server instances, FSx for Windows File Server provides native
Windows file system compatibility and supports features like SMB protocol.
It enables sharing the dynamic server-side code among multiple EC2 instances behind the Application Load
Balancer, ensuring that all instances have access to the same codebase. This is crucial for consistent
application behavior and high availability.
FSx for Windows File Server is designed for high availability, ensuring that the application's code is always
accessible.
Let's address why the other options are less suitable:

**Option B**: Store the static files on Amazon S3. Use Amazon ElastiCache to cache objects at the edge.
While ElastiCache is a powerful caching service, it is primarily designed for caching frequently accessed data
from databases or compute-intensive operations. CloudFront is designed for caching static content.
ElastiCache doesn't provide edge locations and distribution capabilities like CloudFront.

**Option C**: Store the server-side code on Amazon Elastic File System (Amazon EFS). Mount the EFS volume
on each EC2 instance to share the files.
EFS is a good option for shared storage, but FSx for Windows File Server is a better fit in this specific scenario
since the EC2 instances are running Windows Server. EFS is designed for Linux instances.

**Option E**: Store the server-side code on a General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon
EBS) volume. Mount the EBS volume on each EC2 instance to share the files.
EBS volumes are block storage devices that are attached to a single EC2 instance. They cannot be directly
shared between multiple instances. Sharing data would require complex solutions like clustering or
replication, making this approach unsuitable for a highly available, shared codebase.

---

## Question 358

**Answer:** **C**

**Explanation:**

The correct answer is C, using a [email protected] function with an external image management library. Here's
why:

**Option C** offers the least operational overhead because it leverages the power of serverless computing
through [email protected] This allows image processing to occur dynamically and automatically at the edge,
close to the users, without managing any EC2 instances or infrastructure. The [email protected] function is
triggered by CloudFront requests. The image management library resizes images based on user requests and
serves the correct format based on the User-Agent header (for example, serving WebP to browsers that
support it).

**Option A** requires managing an EC2 instance and its associated patching, scaling, and maintenance. This adds
considerable operational overhead, making it less desirable.

**Option B** is incorrect because CloudFront origin request policies primarily manipulate requests before they
are sent to the origin (in this case, S3 or the ALB). They can modify headers and query strings, but they cannot
execute arbitrary code to perform image resizing or format conversion. They are used for controlling caching
behavior, not real-time image manipulation.

**Option D** is incorrect because CloudFront response header policies control the HTTP headers returned after
the response is received from the origin. They do not provide a mechanism for resizing images or performing
format conversion. Their main purpose is to add, modify, or remove headers.
[email protected] functions are ideal for this scenario because they allow you to intercept CloudFront
requests and responses at various points in the content delivery process, execute custom code (image
resizing using a library), and return the processed image to the user. This is the most scalable, cost-effective,
and operationally efficient solution.

---

## Question 359

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
Encryption in Transit: The requirement for encryption in transit is met by enforcing the use of HTTPS (TLS) for
all connections to the S3 bucket. This is achieved by using the aws:SecureTransport condition in the S3 bucket
policy. This policy condition checks if the request is made over HTTPS, preventing unencrypted traffic.
Encryption at Rest: The requirement for encryption at rest is met by configuring default encryption for the S3
bucket. Server-Side Encryption with KMS keys (SSE-KMS) allows using KMS to manage encryption keys. This
way, data is encrypted when stored in S3.
Key Management Control: The compliance team's requirement to administer the encryption key for data at
rest is met by using SSE-KMS and assigning the compliance team permissions to manage the KMS keys. This
allows them to control the encryption and decryption process.

Why other options are incorrect:

**A:** While using ACM for SSL/TLS certificates is valid for HTTPS, associating the certificate directly with S3
isn't how encryption in transit is enforced on the bucket level. You control it via the bucket policy.

**B:** SSE-S3 (Server-Side Encryption with S3 Managed Keys) doesn't give the compliance team control over the
keys, as AWS manages them. This violates the requirement.

**D:** While using HTTPS for encryption in transit is correct, Macie is primarily a data security and privacy service
that uses machine learning to discover, classify, and protect sensitive data in AWS. It doesn't directly handle
encryption, so the Compliance team would not manage the keys. While Macie is useful, it doesn't provide the
required key management capabilities specified.
Supporting Documentation:
Protecting Data Using Server-Side Encryption with KMS keys (SSE-KMS):
https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html
Requiring Encryption of Data in Transit: https://docs.aws.amazon.com/AmazonS3/latest/userguide/examplebucket-policies.html#example-bucket-policies-require-encryption
AWS Key Management Service (KMS): https://aws.amazon.com/kms/
Amazon Macie: https://aws.amazon.com/macie/

---

## Question 360

**Answer:** **B**

**Explanation:**

The correct answer is B. Use an interface endpoint.

Here's a detailed justification:
The problem describes a scenario where two private REST APIs within the same VPC, managed by Amazon
API Gateway, are communicating over the internet instead of staying within the VPC network. The goal is to
ensure that BuyStock communicates with CheckFunds through the VPC, minimizing code changes.
Why Interface Endpoints are Ideal: Interface endpoints, powered by AWS PrivateLink, create private network
connections between your VPC and supported AWS services without exposing traffic to the public internet. In
this case, an interface endpoint can be created for the API Gateway service within the VPC. This endpoint
provides a private IP address within the VPC that the BuyStock API can use to access the CheckFunds API via
API Gateway, ensuring all communication stays within the VPC. This approach requires minimal or no code
changes, typically only needing to update the endpoint URL.

Why other options are not optimal:

**A.** Add an X-API-Key header in the HTTP header for authorization: Adding an API key is for authorization, it
doesn't change the routing of network traffic and won't force communication through the VPC.

**C.** Use a gateway endpoint: Gateway endpoints only support Amazon S3 and DynamoDB. They can't be used
with API Gateway.

**D.** Add an Amazon Simple Queue Service (Amazon SQS) queue between the two REST APIs: This introduces
asynchronous communication via a queue. While functional, it requires significant architectural and code
changes to both APIs to publish and consume messages, violating the "fewest changes to the code"
requirement. It also changes the communication paradigm from request/response to asynchronous
messaging, which may not be desirable.
In essence, Interface endpoints are designed specifically for securely connecting to AWS services privately
from your VPC. They minimize the need for code changes and are the most direct solution to the problem.

---

## Question 361

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
Sub-millisecond latency for frequent access: DynamoDB, a NoSQL database, is designed for low-latency
access. DynamoDB Accelerator (DAX) further enhances this by providing an in-memory cache, enabling submillisecond response times for frequently accessed data. This directly addresses the application's
requirement for fast reads.(https://aws.amazon.com/dynamodb/dax/)
One-time queries on historical data: DynamoDB table export allows you to export data to S3 in a costeffective and scalable manner. Athena, a serverless query service, can then be used to run SQL queries on the
data stored in S3. This satisfies the need for ad-hoc querying of historical information without requiring
persistent infrastructure.(https://aws.amazon.com/athena/,
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBExport.html)
Least operational overhead: DynamoDB is a managed service, reducing the burden of database
administration. DAX is also managed, simplifying caching. Athena is serverless, eliminating the need to
manage servers for querying. The DynamoDB export feature is straightforward to configure and automate.
Let's analyze why the other options are less suitable:

**A:** RDS (a relational database) might not provide the same level of sub-millisecond latency as DynamoDB,
especially for large-scale gaming applications. Creating and maintaining a custom script for exporting data
adds operational overhead.

**B:** Storing all data in S3 directly would not meet the low-latency requirement for frequently accessed data.
S3 is object storage and not suitable for real-time reads needed by a gaming application. While Athena can
query S3 data, it is not ideal for accessing frequently used game data.

**D:** Kinesis Data Streams and Firehose would introduce unnecessary complexity and latency. Streaming the
entire DynamoDB data stream to S3 just for querying historical data is an overkill and more complex than
using DynamoDB export and Athena.

---

## Question 362

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's why:

**Option B**: Write the messages to an Amazon Kinesis data stream with the payment ID as the partition key.
Kinesis Data Streams inherently guarantees ordering of records within a shard. When you use the payment ID
as the partition key, all messages related to the same payment ID will be written to the same shard. This
ensures that they are processed in the order they were sent, fulfilling the requirement of sequential
processing for each payment. Kinesis is designed for real-time data streaming and processing, making it a
suitable choice for managing payment messages.
https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-data-streams.html

**Option E**: Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the
message group to use the payment ID.
Amazon SQS FIFO (First-In-First-Out) queues are specifically designed to guarantee that messages are
processed in the exact order they were sent. By setting the message group ID to the payment ID, you instruct
SQS to maintain the order of messages within that group. This ensures that all messages related to a
particular payment ID are received and processed in the correct sequence, meeting the ordering requirement.
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html

Why other options are incorrect:

**Option A**: DynamoDB does not guarantee ordering of items within a partition key. While you can retrieve all
items for a specific payment ID, the order in which they are returned is not guaranteed to be the same as the
order in which they were written.

**Option C**: ElastiCache (Memcached) is primarily used for caching and is not designed for reliable message
queuing or guaranteed ordering.

**Option D**: Standard SQS queues do not guarantee message ordering. While message attributes can be used,
they do not enforce the sequential processing needed in this scenario. Using standard queues could lead to
incorrect payment processing.

---

## Question 363

**Answer:** **B**

**Explanation:**

The correct answer is B. Amazon Simple Notification Service (Amazon SNS) FIFO topics. Here's why:
The key requirements are sending events to multiple services concurrently and guaranteeing the order of
events.
Amazon SNS FIFO Topics: SNS FIFO (First-In-First-Out) topics are specifically designed to maintain the exact
order of messages published to them. They also support message fanout to multiple subscribers
(leaderboard, matchmaking, and authentication services in this case), fulfilling the concurrency requirement.
Messages are grouped into message groups based on a message group ID, and messages within a group are
delivered in order.
Amazon EventBridge: EventBridge allows for event routing based on rules, but it primarily focuses on
decoupling event producers from consumers. While EventBridge supports ordering through event replay, it's
not designed for guaranteed ordering in concurrent fan-out scenarios like SNS FIFO topics.
Amazon SNS Standard Topics: SNS standard topics provide high throughput and best-effort ordering, but do
not guarantee the order of messages. This violates the order requirement.
Amazon SQS FIFO Queues: SQS FIFO queues guarantee message order, but they are point-to-point (one
sender to one receiver). To send the same events to three services concurrently, you would need three
separate SQS FIFO queues, one for each service. This would not meet the need for a single event triggering all
three. While you could implement a fan-out mechanism on top of SQS using Lambda or similar, this is more
complex and less efficient than using SNS FIFO topics, which handles fan-out natively with ordering.

In summary, SNS FIFO topics provide a native solution for concurrently distributing ordered events to multiple
subscribers, making it the most efficient and appropriate choice for this scenario.

---

## Question 364

**Answer:** **BD**

**Explanation:**

The question requires ensuring data in transit and at rest encryption, and restricting access to only authorized
personnel for SQS and SNS components.

**Option B** is correct because it properly utilizes AWS KMS for server-side encryption on SNS topics. Using a
customer managed key in KMS allows for granular control over the key's policy, which can be restricted to
authorized hospital personnel (principals). This ensures only authorized users and services can encrypt and
decrypt messages published to and consumed from the SNS topic.

**Option D** is correct because it employs a similar strategy for SQS queues. AWS KMS is used for server-side
encryption. Applying a custom key policy to restrict usage to specific hospital personnel controls who can
decrypt messages in the queue. Setting a condition in the queue policy to allow only encrypted connections
over TLS (Transport Layer Security) enforces encryption in transit between clients and SQS, fulfilling the
requirement for encryption during transport.

**Option A** is incorrect because while it enables server-side encryption on SQS, it relies on updating the default
key policy. AWS KMS Customer managed keys are preferable as they offer more fine-grained access
control.**Option C** is incorrect. It incorrectly states that the SNS encryption policy should be updated, rather
than using KMS. Also, setting a condition to allow only encrypted connections over TLS won't be enough, a
custom KMS key policy will still be needed to restrict access.**Option E** is incorrect because while it correctly
uses KMS for SQS encryption, it mentions updating the IAM policy to restrict key usage instead of the KMS
key policy. The KMS key policy, not an IAM policy, is what controls who can use the key for
encryption/decryption.

Therefore, options B and D are the most appropriate to meet the specified security and access control
requirements.

---

## Question 365

**Answer:** **C**

**Explanation:**

The correct answer is C. Automated backups. Here's a detailed justification:
Automated backups in Amazon RDS create point-in-time recovery (PITR) points for your database. These
backups enable you to restore your database instance to a specific point in time within the configured
retention period, which can be up to 35 days. This directly addresses the requirement to restore the database
to its state from 5 minutes before any change within the last 30 days. RDS uses the database's native backup
mechanisms, allowing for consistent backups and restores. The transaction logs are also backed up.
Read replicas (A) are used to offload read traffic from the primary database, improving performance. While
read replicas can be promoted to become a standalone database in case of a primary database failure, they
don't provide granular point-in-time recovery. The data on a read replica replicates from the primary database,
including the unintended changes made by the database administrator.
Manual snapshots (B) provide a full backup of the database at a specific point in time, but they require
manual initiation. While helpful, they do not automatically provide the 5-minute recovery granularity needed
as they require on demand intervention. To achieve this, you'd need continuous manual snapshots, which is
impractical and resource-intensive.
Multi-AZ deployments (D) provide high availability by synchronously replicating data to a standby instance in
a different Availability Zone. If the primary instance fails, the standby instance automatically takes over.
However, Multi-AZ does not prevent or recover from data corruption or accidental data changes; it simply
ensures the database remains available. The change will replicate to both AZs.

Therefore, automated backups are the only feature that enables the necessary point-in-time recovery to
meet the company's recovery objective.
For further information, refer to the AWS documentation on RDS automated backups:
Amazon RDS Backups

---

## Question 366

**Answer:** **D**

**Explanation:**

The correct answer is D. Implement API usage plans and API keys to limit the access of users who do not

have a subscription.

Here's a detailed justification:

**Option D** offers the most straightforward and efficient method to control access to premium content based on
subscription status directly within API Gateway, minimizing operational overhead. API Gateway usage plans
allow you to define quotas and throttling for API usage. API keys can be associated with these usage plans. By
associating subscribed users with a usage plan that permits access to premium content and non-subscribed
users with a plan that restricts it, you can effectively manage access. This requires the Lambda function to
determine user subscription status and assign the correct API key.
Here's why the other options are less suitable:

**A.** Enable API caching and throttling on the API Gateway API: Caching and throttling are primarily for
performance optimization and preventing abuse, not for authentication or authorization based on subscription
status. They don't inherently differentiate between subscribed and non-subscribed users.

**B.** Set up AWS WAF on the API Gateway API. Create a rule to filter users who have a subscription: AWS
WAF is designed for protecting web applications from common web exploits and bots. While it can filter
requests based on IP addresses or other request characteristics, it's not designed for handling user
authentication or subscription-based access control. Implementing subscription-based access control in WAF
would be complex and require custom rules that examine request headers or cookies, adding unnecessary
overhead.

**C.** Apply fine-grained IAM permissions to the premium content in the DynamoDB table: While fine-grained
IAM permissions are useful for controlling access to DynamoDB data, they are not the most efficient method
in this case. It would require the Lambda function to assume different IAM roles or generate temporary
security credentials based on the user's subscription status, adding complexity to the Lambda function and
requiring more complex management of IAM roles and policies. Access control logic should ideally be
handled before the database layer when possible. Furthermore, managing IAM permissions at a granular level
for each user subscription would become cumbersome as the user base scales.
Using API Gateway's built-in features for access control is more native and less operationally intensive.
Supporting Documentation:
API Gateway Usage Plans: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-apiusage-plans.html
API Gateway API Keys: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-usageplans-api-keys.html

---

## Question 367

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:
The problem requires improving performance and availability of a UDP-based application hosted on-premises
across multiple regions, while complying with hosting requirements. Route 53 latency-based routing is
already in place.

**Option A** is the most suitable solution because it leverages AWS Global Accelerator in conjunction with
Network Load Balancers (NLBs). NLBs are ideal for UDP traffic.
Here's why it works:

1. NLBs for UDP: NLBs are designed to handle UDP traffic efficiently. They can forward UDP traffic
directly to on-premises servers without modification. Application Load Balancers (ALBs), used in
options B and D, do not support UDP.

2. AWS Global Accelerator: Global Accelerator provides static IP addresses that serve as entry points
for the application. It intelligently routes traffic to the nearest healthy endpoint (the NLB) based on
network conditions and geographic proximity. This minimizes latency and improves performance.

3. Regional Redundancy: Using NLBs in multiple AWS regions (US, Asia, and Europe) provides
redundancy and increases availability. If one NLB becomes unavailable, Global Accelerator
automatically reroutes traffic to another healthy NLB.

4. On-premises Integration: The NLBs are configured to address the on-premises endpoints, fulfilling
the requirement to host the application on-premises.

5. Simplified DNS Management: Providing access via a CNAME record pointing to the Global
Accelerator DNS name simplifies DNS management and allows clients to connect to the optimal
endpoint.

**Option B** is incorrect because ALBs do not support UDP traffic.
Options C and D are incorrect because while CloudFront can improve performance for caching static content,
it is not suitable for UDP-based applications requiring real-time, bidirectional communication. Also CloudFront
is mainly used for caching web content at edge locations, not for direct routing of UDP traffic to on-premises
servers. CloudFront works best with HTTP/HTTPS. Also, CloudFront does not inherently provide the same
level of global traffic management and failover capabilities as AWS Global Accelerator for UDP workloads.

In summary, using NLBs with Global Accelerator is the most efficient and reliable solution for improving the
performance and availability of a UDP-based application hosted on-premises across multiple regions.
Supporting Documentation:
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
Network Load Balancer: https://aws.amazon.com/elasticloadbalancing/network-load-balancer/

---

## Question 368

**Answer:** **A**

**Explanation:**

The correct answer is A: Set an overall password policy for the entire AWS account. This is the most efficient
and scalable method to enforce consistent password complexity and rotation requirements across all IAM
users within an AWS account.
IAM (Identity and Access Management) provides a global password policy feature at the account level. This
allows you to define requirements like minimum password length, required character types (uppercase,
lowercase, numbers, symbols), password reuse prevention, and maximum password age (rotation period).
Once the password policy is set at the account level, all IAM users are automatically subject to those
requirements.

**Option B** is incorrect because setting password policies individually for each user is not a scalable or
maintainable approach, especially in an environment with many users. It would require significant manual
effort and could lead to inconsistencies.

**Option C** is incorrect because while third-party identity providers can be integrated with AWS, using them
solely for password policy enforcement is an overkill. AWS native IAM features handle this efficiently.
Employing a third-party vendor just for password rules would add unnecessary complexity and cost.

**Option D** is incorrect because while CloudWatch Events can monitor IAM events, it is not the intended
mechanism for setting password policies. CloudWatch Events are best suited for reacting to state changes or
triggering automated actions based on events, not for enforcing global security policies like password
complexity. Additionally, directly setting passwords for users programmatically violates the security principle
of least privilege.

Therefore, leveraging the built-in IAM password policy feature offers the most straightforward and
maintainable solution for establishing mandatory password complexity and rotation for all IAM users in the
AWS account.

Relevant
documentation:https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_password_policy.htmlhttps://aws.am

---

## Question 369

**Answer:** **A**

**Explanation:**

The correct answer is A: Use AWS Batch to run the tasks as jobs. Schedule the jobs by using Amazon
EventBridge (Amazon CloudWatch Events).

Here's why:
AWS Batch is designed for running batch computing workloads on AWS. It handles the complexities of
provisioning and managing compute resources, allowing you to focus on defining your tasks. It dynamically
provisions the optimal quantity and type of compute resources (e.g., EC2 instances) based on the resource
requirements of the jobs submitted. This dynamic scaling improves performance and scalability. The tasks,
being written in different languages, benefit from Batch's ability to execute various types of applications
without requiring code modifications.
Amazon EventBridge (formerly CloudWatch Events) provides a serverless event bus service that makes it easy
to connect applications with data from a variety of sources. EventBridge can be used to schedule tasks in
AWS Batch. This simplifies the scheduling aspect without needing to manage a separate scheduler on the
EC2 instance.

**Option B** (AWS App Runner) is less suitable. While App Runner is simple for deploying containerized web
applications and APIs, it's not optimized for batch processing or scheduled tasks. Converting to a container
adds an extra layer of complexity with limited benefit for these specific task requirements.

**Option C** (AWS Lambda) might seem plausible, but it's generally not ideal. While Lambda can handle
scheduled tasks, there's a limitation on execution time (15 minutes) and potentially memory limitations
depending on the tasks' requirements. Refactoring these tasks into Lambda functions would likely require
significant code modifications, increasing operational overhead and negating the requirement that teams do
not have a common programming language. The 1-hour task duration also makes Lambda less suitable.

**Option D** (Auto Scaling group with an AMI) introduces significant operational overhead. You'd need to manage
the AMI, configure scaling policies, and ensure the EC2 instances within the Auto Scaling group have the
necessary dependencies and configurations. This is less efficient than using AWS Batch, which abstracts
away much of the infrastructure management. The tasks would still compete for resources on the instance.

Therefore, AWS Batch with EventBridge scheduling provides the best balance of performance, scalability, and
minimal operational overhead.
Relevant Documentation:
AWS Batch: https://aws.amazon.com/batch/
Amazon EventBridge: https://aws.amazon.com/eventbridge/

---

## Question 370

**Answer:** **C**

**Explanation:**

The correct answer is C. Provision a NAT gateway in a public subnet. Modify each private subnet's route table
with a default route that points to the NAT gateway.

Here's a detailed justification:
The requirement is to allow EC2 instances in private subnets to access the internet (specifically, a license
server) in a managed and operationally efficient way. NAT (Network Address Translation) is the service that
allows instances in private subnets to connect to the internet while hiding their private IP addresses.
Options A and B involve NAT instances. While NAT instances can provide NAT functionality, they require
manual patching, scaling, and are more complex to manage. The question explicitly states the need to
minimize operational maintenance, making NAT instances a less desirable choice. NAT instances also
represent a single point of failure if not configured for high availability.
Options C and D use NAT gateways, which are managed AWS services. This addresses the "managed solution"
requirement, reducing operational overhead. NAT gateways are highly available by default and scale
automatically.
The difference between options C and D lies in where the NAT gateway is placed: a public subnet or a private
subnet. A NAT gateway must reside in a public subnet. This is because the NAT gateway needs a public IP
address to forward traffic to the internet. If a NAT gateway were in a private subnet, it would need to route
through another NAT device or an internet gateway to reach the internet, which defeats the purpose of a
managed solution.

Therefore, option C is the correct answer because it uses the managed NAT gateway service located in a
public subnet, minimizing operational maintenance and enabling internet access for instances in private
subnets via route table modifications.
Further Research:
AWS NAT Gateway: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
NAT Instances vs. NAT Gateways: https://aws.amazon.com/premiumsupport/knowledge-center/natgateway-instance-differences/

---

## Question 371

**Answer:** **CD**

**Explanation:**

The correct answer is CD. Here's a detailed justification:

**C.** Enable EBS encryption by default in the AWS Region where the EKS cluster will be created. Select the
customer managed key as the default key.
This is the most efficient method. By enabling EBS encryption by default at the AWS Region level, all new EBS
volumes created in that Region, including those automatically provisioned for the EKS managed node group,
will be encrypted using the specified customer-managed KMS key. This eliminates the need to manually
encrypt each volume individually, reducing operational overhead significantly. AWS handles the encryption
automatically during EBS volume creation. This approach ensures that encryption is applied consistently and
without manual intervention for future volumes as well.

**D.** Create the EKS cluster. Create an IAM role that has a policy that grants permission to the customer
managed key. Associate the role with the EKS cluster.
EKS cluster already has its IAM role, and this role requires KMS decrypt/encrypt permissions to use KMS keys
for encrypting resources. When EBS encryption by default is enabled, EKS cluster needs to have the ability to
use the CMK for encryption/decryption operations during volume creation and management by Kubernetes on
the worker nodes. Associating an IAM role with the EKS cluster that grants permissions to the KMS key is
essential for allowing the cluster to encrypt and decrypt EBS volumes using the customer-managed key
specified. Without these permissions, the encryption process will fail.

Why other options are incorrect:

**A.** Use a Kubernetes plugin that uses the customer managed key to perform data encryption. While
possible, using a Kubernetes plugin adds complexity and operational overhead. It involves deploying and
managing the plugin, configuring it correctly, and ensuring it integrates seamlessly with EBS volume creation.
The default encryption feature of EBS provides a simpler solution.

**B.** After creation of the EKS cluster, locate the EBS volumes. Enable encryption by using the customer
managed key. This approach requires manual intervention after the cluster is created, leading to higher
operational overhead. It also necessitates discovering the EBS volumes and applying encryption, which is
time-consuming and prone to errors. It also might not be possible to encrypt root volumes without recreating
the EC2 instances behind the worker nodes.

**E.** Store the customer managed key as a Kubernetes secret in the EKS cluster. Use the customer managed
key to encrypt the EBS volumes. This is a security risk. Storing KMS keys directly as Kubernetes secrets
exposes them and violates security best practices. KMS keys should never be stored within the cluster itself.
They should be managed and accessed through IAM roles with appropriate permissions.

Supporting documentation:
AWS KMS documentation
Amazon EBS encryption
EKS IAM role requirement

---

## Question 372

**Answer:** **D**

**Explanation:**

The correct answer is D, not B. Here's why:
Let's analyze each option based on the requirements of high availability, scalability, and cost-effectiveness
for managing GIS images identified by geographic codes, with frequent updates during natural disasters.

**Option A**: Using Oracle on RDS Multi-AZ for both image storage and geographic codes is highly inefficient and
expensive. Storing binary image data directly in a relational database is generally discouraged due to
performance overhead and storage limitations. RDS, while highly available, isn't as horizontally scalable as
other solutions for this specific use case.

**Option B**: Storing images in S3 and using DynamoDB to map geographic codes to S3 URLs is a good starting
point, leveraging the scalability and cost-effectiveness of both services. However, DynamoDB is a NoSQL
database suitable for frequent reads and writes, but may not scale in write capacity for tens of thousands of
updates every few minutes.

**Option C**: Storing both images and geographic codes in DynamoDB is not ideal for storing large binary files
like images. While DynamoDB is scalable, storing images directly in the database becomes expensive and less
performant. DAX is a good caching solution, but it won't address the fundamental issue of storing large binary
data within DynamoDB.

**Option D**: This option combines the best aspects of the other approaches. Storing images in S3 provides costeffective, scalable, and durable storage for the large image files. Storing geographic codes and
corresponding S3 URLs in Oracle on RDS Multi-AZ is also not ideal (as it can be costly), but it will allow
relational queries that DynamoDB cannot perform. For example, finding all images of a certain type, size, or
date, which may become necessary in the future.

Therefore, **Option B** is the most cost-effective and ideal solution.

---

## Question 373

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most cost-effective solution, along with supporting
concepts and links:
The core requirement is to minimize storage costs while providing timely access to data for specific periods,
followed by long-term archival. The data is actively used for 30 days, less frequently for up to a year, and then
archived.

**Option D** utilizes S3 Standard initially because the data is accessed frequently during the first 30 days for
daily model retraining. S3 Standard offers the lowest access latency, ensuring rapid data retrieval for this
critical process. After 30 days, the data is transitioned to S3 Standard-IA via an S3 Lifecycle policy. This
significantly reduces storage costs because S3 Standard-IA is designed for infrequently accessed data (but
still requires quick retrieval for the quarterly analysis). Finally, after a year, the data is moved to S3 Glacier
Deep Archive, the cheapest storage option for long-term archival. This aligns perfectly with the archival
requirement and minimizes storage costs for data that is rarely accessed.
Other options are less optimal:

**Option A**: S3 Intelligent-Tiering automatically moves data between Frequent, Infrequent, and Archive Access
tiers based on access patterns. While convenient, the transition between tiers incurs costs that can be higher
than directly transitioning to S3 Standard-IA via a lifecycle policy after a fixed period. Intelligent-Tiering also
doesn't directly transition to Glacier Deep Archive.

**Option B**: Similar to **Option A**, S3 Intelligent-Tiering doesn't directly offer the lowest-cost archival option and
can be more expensive than a lifecycle policy. It would move to Archive Access (not Glacier Deep Archive),
and there's no inherent transition to Deep Archive.

**Option C**: While S3 Standard-IA is cheaper than S3 Standard upfront, using S3 Standard for the initial 30
days is more performant for frequently accessed data, which is a primary need for daily model retraining. This
initial period of frequent access justifies the slightly higher cost of S3 Standard.

In summary, option D is the most cost-effective because it uses the appropriate storage class based on access

frequency and lifespan of the data. Lifecycle policies make the transitions automated and efficient, which
optimize both performance and cost.
Supporting Concepts:
S3 Storage Classes: Understand the cost and access characteristics of S3 Standard, S3 Standard-IA, and S3
Glacier Deep Archive.
S3 Lifecycle Policies: Learn how to automate transitions between storage classes to optimize costs.

---

## Question 374

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides the most cost-effective and scalable solution for the given
requirements. The scenario requires inter-VPC communication and high-bandwidth, low-latency connectivity
to an on-premises data center.

**Option D** leverages AWS Direct Connect for the high-bandwidth, low-latency connection between the data
center and AWS. Direct Connect is a dedicated network connection that bypasses the public internet,
resulting in more consistent network performance compared to VPN connections. A single Direct Connect
connection is more cost-effective than multiple connections, especially for large data transfers.
The Transit Gateway simplifies the network architecture by acting as a central hub. Instead of configuring
multiple peering connections between VPCs, each VPC is connected to the Transit Gateway. The Transit
Gateway then handles the routing between the VPCs and the Direct Connect connection. This simplifies
management and reduces operational overhead.
Options A and B are less optimal because Site-to-Site VPN connections over the public internet are not
designed for consistently transferring hundreds of gigabytes of data daily with low latency. VPN connections
are also less reliable and have variable performance. **Option B** adds the overhead of managing virtual network

appliances in each VPC.

**Option C** is costly, and it complicates routing. Setting up three Direct Connect connections would be
expensive, and managing three separate connections to each VPC is complex. Also, Direct Connect gateway
can be shared between the VPCs and the Direct Connect Connection, hence Direct Connect Gateway is a must
in Direct connect architecture.

In summary, option D provides the optimal balance of cost, performance, and manageability by using a single
Direct Connect connection for high-bandwidth, low-latency access and a Transit Gateway for simplified interVPC communication.
Relevant AWS documentation:
AWS Direct Connect: https://aws.amazon.com/directconnect/
AWS Transit Gateway: https://aws.amazon.com/transit-gateway/

---

## Question 375

**Answer:** **A**

**Explanation:**

The correct answer is A. Use AWS Step Functions to build the application.

Here's a detailed justification:
AWS Step Functions is a serverless orchestration service that allows you to coordinate multiple AWS services
into serverless workflows. It provides a visual console to design and manage workflows, making it easy to
combine Lambda functions and other AWS services into complex, responsive serverless applications.
Crucially, Step Functions can orchestrate not only Lambda functions but also data and services running on
EC2 instances, containers, or on-premises servers via API Gateway integrations or other appropriate services.
This aligns directly with the requirement to integrate diverse components regardless of their deployment
environment.
Step Functions offers built-in error handling, retries, and state management, reducing the operational
overhead associated with managing these aspects manually. It also supports human-in-the-loop approval
processes using activities, aligning with the manual approval requirement. It uses state machines, which
clearly define the sequence of steps and the flow of data between them, increasing clarity and
maintainability.

**Option B**, AWS Glue, is primarily an ETL (Extract, Transform, Load) service for data integration and is not
designed for orchestrating general-purpose application workflows involving Lambda functions and manual
approvals.

**Option C**, Amazon SQS, is a message queue service that enables asynchronous communication between
decoupled components. While SQS can be part of a solution, it doesn't provide orchestration capabilities like
Step Functions. Building a complex, stateful workflow with SQS alone would require significant custom
coding and management of state, increasing operational overhead.

**Option D**, AWS Lambda functions and Amazon EventBridge events, could orchestrate events, but it is not
designed to manage more complex workflows that require features like state management, built-in retries,
and human approval steps. It quickly leads to complex event chains and increased operational overhead for
tracking and error handling. It's better suited for event-driven architectures than orchestrated workflows with
specific sequencing and state.

Therefore, Step Functions provides the best combination of features for orchestrating Lambda functions,
integrating with various AWS services and on-premises resources, and supporting manual approvals with the
least operational overhead.
Supporting links:
AWS Step Functions: https://aws.amazon.com/step-functions/
Orchestrating Microservices with AWS Step Functions:
https://aws.amazon.com/blogs/compute/orchestrating-microservices-with-aws-step-functions/

---

## Question 376

**Answer:** **A**

**Explanation:**

The correct answer is A: Create a proxy in RDS Proxy. Configure the users’ applications to use the DB instance
through RDS Proxy.

Here's why:
The problem describes connection rejection errors due to high demand and unpredictable traffic patterns
from serverless applications to an RDS for MySQL database. Serverless applications, by their nature,
frequently scale up and down, leading to a burst of database connections which can overwhelm the
database's connection limits.
RDS Proxy is designed to handle exactly this scenario. It acts as a connection pooler, sitting between the
applications and the RDS instance. RDS Proxy maintains a pool of database connections and efficiently
multiplexes connections from numerous application instances, reusing existing connections as possible and
preventing the database from being overwhelmed. It can significantly reduce the overhead of establishing and
tearing down database connections, which is common with serverless functions.

**Option B**, deploying Amazon ElastiCache for Memcached, addresses caching and data retrieval performance,
not connection management. While caching can reduce database load, it doesn't directly solve the connection
limit issue.

**Option C**, migrating to a larger instance class, might increase the database's connection limit, but this is a
vertical scaling approach. It increases costs and might not fully address the rapid fluctuations in traffic. It's
also a relatively disruptive operation compared to implementing RDS Proxy. It doesn't solve the fundamental
problem of connection exhaustion caused by numerous, short-lived connections.

**Option D**, configuring Multi-AZ, provides high availability and failover capabilities, but it does not manage
database connections effectively. While Multi-AZ ensures the database remains available, it doesn't prevent
connection rejection errors when connection limits are exceeded. The applications would still be generating
numerous connection requests.
RDS Proxy provides a cost-effective and minimally disruptive solution by effectively managing and pooling
database connections, mitigating the connection rejection errors experienced by the serverless applications.
Its primary benefit is connection multiplexing, which is the ideal solution in this specific context.

---

## Question 377

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most efficient solution for ensuring EC2 instances within
Auto Scaling groups report to the auditing system upon launch and termination:

**Option B**, utilizing EC2 Auto Scaling lifecycle hooks, is the most efficient because it directly integrates with
the Auto Scaling group's lifecycle events. Lifecycle hooks allow you to pause instances during launch or
termination, enabling you to perform custom actions before the instance proceeds to the next phase. In this
case, the custom action would be running a script to send data to the auditing system. This ensures that the
reporting occurs reliably and automatically as part of the Auto Scaling process. This method provides clear
control and ensures reports are sent before the instance serves traffic (on launch) or before resources are
deallocated (on termination).

**Option A**, using a scheduled Lambda function, is less efficient. It requires the Lambda function to continuously
scan for new and terminated instances, which adds overhead and increases complexity. Remotely executing
scripts also introduces potential security concerns and operational challenges related to authentication and
authorization. It's not tightly coupled with the Auto Scaling lifecycle.

**Option C**, relying on user data within the launch configuration, is suitable for initial configuration during
launch but doesn't address the termination scenario. Furthermore, user data scripts can sometimes fail or be
delayed, making it less reliable for critical reporting. It also doesn't handle the termination process, meaning
you would need another solution for that phase of the Auto Scaling process.

**Option D** is incorrect because it places the responsibility of invoking the script on the instance operating
system and relies on the Auto Scaling group to trigger the script, this isn't a default function of Auto Scaling
groups, lifecycle hooks are needed to trigger the actions at launch and terminate.

In summary, EC2 Auto Scaling lifecycle hooks (**Option B**) provide the most direct, reliable, and efficient means
of executing a custom script for reporting to the auditing system during both instance launch and termination
events within an Auto Scaling group. It ensures integration with the autoscaling process and provides
guaranteed execution.
Supporting links:
EC2 Auto Scaling Lifecycle Hooks

---

## Question 378

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution:
The scenario requires a solution that effectively handles UDP traffic distribution to a dynamically scaling
game server fleet and a database solution suitable for non-relational data that scales automatically.
Network Load Balancer (NLB): The NLB is the optimal choice for traffic distribution. UDP is a connectionless
protocol. NLBs are designed to handle UDP traffic efficiently. Unlike Application Load Balancers (ALB), which
operate at the application layer (HTTP/HTTPS), NLBs operate at the transport layer (TCP/UDP) and can
forward UDP packets without modification. This is crucial for real-time gaming where low latency and direct
packet forwarding are paramount.
https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html
Amazon DynamoDB on-demand: DynamoDB is a NoSQL database perfectly suited for storing game scores
and other non-relational data. The on-demand capacity mode is ideal because it automatically scales capacity

based on the application's traffic patterns. This eliminates the need for manual provisioning or capacity
planning, directly addressing the requirement for a database solution that scales without intervention. It is
very cost effective for variable workloads.
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks. ReadWriteCapacityMode.html

Why other options are less suitable:

**Option A** (Route 53 and Aurora Serverless): Route 53 is primarily a DNS service and not suitable for real-time
traffic distribution in this scenario. It is great for geo-based routing but not real time load balancing. Aurora
Serverless is good for relational data, not specifically designed for non-relational requirements like the
prompt specifies.

**Option C** (NLB and Aurora Global Database): While NLB is correct for UDP traffic, Aurora Global Database is
an overkill. It’s designed for disaster recovery across regions for relational data and provides read replicas for
global low-latency reads. Overcomplicated, high cost, and relational DB makes this a poor solution.

**Option D** (ALB and DynamoDB Global Tables): ALBs are designed for HTTP/HTTPS traffic and cannot handle
UDP. While DynamoDB global tables are a viable solution for multi-region replication, the on-demand capacity
mode is more cost-effective and simpler for automatically scaling with the described workload within a single
region. ALB makes this entire solution wrong.

In summary, NLB provides the necessary low-latency, UDP-aware traffic distribution, and DynamoDB ondemand delivers the automatically scalable NoSQL database, meeting all the requirements efficiently and
cost-effectively.

---

## Question 379

**Answer:** **B**

**Explanation:**

The best solution is to configure provisioned concurrency for the Lambda function. This is because Lambda
functions, particularly those that load many libraries, suffer from "cold starts." A cold start happens when a
Lambda function is invoked for the first time or after a period of inactivity. During a cold start, the Lambda
service needs to initialize the execution environment, download the code, and initialize the dependencies,
leading to increased latency.
Provisioned concurrency alleviates this problem by pre-initializing a specified number of execution
environments for the Lambda function. These environments are kept warm and ready to serve requests
immediately, eliminating the cold start latency. This directly addresses the company's desire for low response
latency.

**Option A**, bypassing the API and connecting the frontend directly to the database, is a security risk and poor

architectural practice. It exposes the database directly and bypasses the API's security measures,
authentication, and authorization, which makes the application vulnerable to attacks. **Option C**, caching
results in S3, is beneficial if the data is largely static or frequently requested but doesn't address the cold
start issue with the Lambda function itself. Furthermore, implementing a caching strategy introduces
complexity to manage cache invalidation. **Option D**, increasing the database size, won't significantly reduce
Lambda function's latency. The database size primarily affects query performance and storage capacity.
Provisioned concurrency offers the most direct and efficient solution with minimal operational changes, as it
focuses on improving the Lambda function's performance without altering the overall application architecture
or introducing caching complexities.
For further research:
AWS Lambda Provisioned Concurrency: https://docs.aws.amazon.com/lambda/latest/dg/configurationconcurrency.html
Understanding AWS Lambda Cold Starts: https://aws.amazon.com/blogs/compute/understanding-awslambda-cold-starts/

---

## Question 380

**Answer:** **D**

**Explanation:**

The correct answer is D because it offers a cost-effective and infrastructure-minimized solution for
automatically starting and stopping EC2 instances and RDS DB instances outside of business hours. AWS
Lambda is a serverless compute service, meaning you only pay for the compute time you consume. This is
significantly cheaper than running a dedicated EC2 instance. Amazon EventBridge (formerly CloudWatch
Events) is a serverless event bus service that enables you to schedule events to trigger actions, such as
invoking a Lambda function.

**Option D** leverages these serverless services to automate the start/stop process without requiring the
company to manage any underlying infrastructure. A Lambda function can be written to execute the
necessary AWS CLI or SDK commands to start and stop both EC2 instances and RDS DB instances.
EventBridge can be configured with a cron expression to trigger the Lambda function at specified times,
thereby implementing the desired on/off schedule. This eliminates the need for manual intervention and
minimizes operational overhead.
Other options are less suitable:

**A:** Elastic resize is not a native term; most likely implying Elastic Load Balancing Auto Scaling. Auto Scaling

groups manage capacity, not start/stop functionality directly according to a precise schedule. Scaling RDS DB
instances to zero is not a standard or supported operation.

**B:** AWS Marketplace solutions might exist, but they introduce third-party dependencies and potential costs.
The requirement is to minimize cost and infrastructure maintenance. This adds complexity.

**C:** Launching another EC2 instance to run a cron schedule adds infrastructure management overhead and
cost that is not necessary since the solution can be implemented serverlessly.

Therefore, utilizing Lambda with EventBridge fulfills the requirements of cost minimization, reduced
infrastructure maintenance, and automation of instance start/stop procedures based on a defined schedule.
Supporting Links:
AWS Lambda: https://aws.amazon.com/lambda/
Amazon EventBridge: https://aws.amazon.com/eventbridge/
Stopping and Starting Your RDS Instance:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html
Stopping and Starting Your EC2 Instance:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html

---

## Question 381

**Answer:** **B**

**Explanation:**

The correct answer is B: Set up a new Amazon Aurora PostgreSQL DB cluster that includes an Aurora Replica.
Issue queries to the Aurora Replica to generate the reports.

Here's why: The key requirement is to speed up the reporting process without impacting the primary
database's performance related to document modifications and additions. The existing setup uses
PostgreSQL.

**Option B** leverages Amazon Aurora PostgreSQL, which is compatible with PostgreSQL. Aurora provides
significantly better performance than standard PostgreSQL, which directly addresses the speed requirement.
The critical aspect of this solution is the use of an Aurora Replica. Aurora Replicas are read-only endpoints
that share the same underlying storage as the primary instance. This means data is replicated asynchronously
with minimal latency, enabling near real-time reporting. The reporting process can query the Aurora Replica

without affecting the performance of the primary instance that handles document modifications and
additions. Furthermore, Aurora's architecture allows for easy scaling of read replicas to handle report
generation loads. This approach minimizes code changes since Aurora PostgreSQL is compatible with the
existing PostgreSQL database.

**Option A** is incorrect because Amazon DocumentDB is a NoSQL database compatible with MongoDB.
Migrating the data to DocumentDB would necessitate significant application code changes, which contradicts
the requirement of minimizing such changes. Additionally, while DocumentDB offers read replicas, it's an
unnecessary database technology shift when a compatible solution exists within the relational database
context.

**Option C** is incorrect because while RDS for PostgreSQL Multi-AZ provides high availability, it's not optimized
for read-heavy workloads like reporting. The secondary RDS node in a Multi-AZ setup is primarily for failover
and might not be optimized for reporting queries. Using it for reporting could still potentially impact the
performance of the primary node if there's significant load.

**Option D** is incorrect because DynamoDB is a NoSQL database, and migrating the existing PostgreSQL data
and relational queries to DynamoDB would require a complete application rewrite. This is a substantial change
that is not in line with the given requirements. While DynamoDB can scale reads, the conversion effort
outweighs the benefits compared to leveraging Aurora's PostgreSQL compatibility and Aurora Replica
functionality.
In conclusion, Aurora PostgreSQL with an Aurora Replica provides the optimal balance of minimal application
changes, improved performance, and isolation of the reporting workload from the primary database.

---

## Question 382

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure a TLS listener. Deploy the server certificate on the NLB.

Here's a detailed justification:

The primary goal is to improve the security of data in transit. TLS (Transport Layer Security) encrypts data as
it travels across the network, protecting it from eavesdropping and tampering. Configuring a TLS listener on
the NLB ensures that all traffic between the user's devices and the NLB is encrypted. Deploying the server
certificate on the NLB allows the NLB to decrypt the traffic and re-encrypt it before forwarding it to the web
tier. This establishes a secure connection from the client to the load balancer.

**Option B** is incorrect because AWS Shield Advanced primarily protects against DDoS attacks, not general
data-in-transit encryption. While AWS WAF (Web Application Firewall) helps protect against web exploits, it
doesn't address the fundamental need for encryption across the network.

**Option C** is incorrect because while an Application Load Balancer (ALB) can terminate TLS, the core
requirement is TLS termination at the entry point, which the NLB can handle just as effectively. Switching to
an ALB only to add WAF isn't the most direct solution for securing data in transit; TLS configuration on the
NLB itself directly addresses this concern. Besides, an NLB is often chosen specifically for its high throughput
and low latency, which might be critical for ingesting real-time sensor data, and switching to an ALB might
introduce performance trade-offs.

**Option D** is incorrect because encrypting the EBS volumes only protects data at rest. While data-at-rest
encryption is important, it does not address the immediate need to secure the data while it's being
transmitted between the users' devices, the NLB, the EC2 instances, and the database.

In summary, configuring a TLS listener on the NLB with a server certificate is the most direct and effective
way to secure the sensor data in transit in this three-tier architecture. It addresses the specific problem stated
in the question without introducing unnecessary complexity or altering the fundamental architecture if the
NLB is performant for the application's demands.
Here are authoritative links for further research:
AWS Load Balancing Documentation:
https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html
TLS Termination on Elastic Load Balancers:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#httpslisteners (While this link refers to ALBs, the principle of TLS termination applies to NLBs as well).
AWS Key Management Service (KMS): https://aws.amazon.com/kms/
AWS Shield: https://aws.amazon.com/shield/
AWS WAF: https://aws.amazon.com/waf/

---

## Question 383

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A, Dedicated Hosts with Reserved Instances, is the most cost-

effective solution in the scenario described:
The key requirement is utilizing existing software licenses based on sockets and cores. Dedicated Hosts
provide physical servers dedicated for your use, enabling you to bring your existing server-bound software
licenses to AWS. This avoids the need to purchase new licenses, which can be a significant cost savings when
migrating commercial off-the-shelf (COTS) applications.
On-Demand options (B and D) for Dedicated Hosts are expensive for predictable capacity and uptime. Since
the company has predictable capacity and uptime requirements, a long-term commitment will significantly
reduce costs.
Reserved Instances (C) offer a discount compared to On-Demand Instances in exchange for a one- or threeyear commitment. However, Reserved Instances do not by themselves ensure you can use your existing
licenses tied to specific hardware. Reserved Instances still run on shared tenancy hardware managed by AWS.
Dedicated Hosts with Reserved Instances (A) combine the advantages of both. You get the physical server
isolation to use your existing software licenses, and you receive a substantial cost reduction through the
reservation. Reserving a Dedicated Host provides the most significant cost savings over time when compared
to paying on-demand rates for a dedicated host.

Therefore, Dedicated Reserved Hosts offer the most cost-effective solution by letting the company leverage
existing licenses (socket/core-based) on dedicated hardware while benefiting from the cost savings of
reserved pricing. This aligns with the business requirements for predictable capacity, uptime, and license
utilization. Dedicated Hosts allow for granular control over instance placement, useful for licensing
constraints, whereas Dedicated Instances are for compliance reasons.

---

## Question 384

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses all the stated requirements most cost-effectively. The
application requires a highly available and POSIX-compliant storage layer shareable across EC2 instances.

Amazon Elastic File System (EFS) is a network file system specifically designed for use with AWS compute
services like EC2. EFS provides a POSIX-compliant file system interface, allowing applications to interact with
the storage layer as if it were a local file system. This satisfies the POSIX compliance and shareability
requirements. Using the EFS Standard storage class ensures high availability because EFS replicates data
across multiple Availability Zones.
The data access pattern also dictates the choice of storage class. Because the data is frequently accessed for
the first 30 days and infrequently after that, leveraging EFS lifecycle management is the most cost-effective
solution. EFS lifecycle management allows automatic transitioning of files from the EFS Standard storage
class to the EFS Standard-Infrequent Access (EFS Standard-IA) storage class based on a defined policy. This
reduces storage costs for infrequently accessed data without requiring any application changes.

**Option A** is incorrect because S3 is an object storage service, not a file system, and does not natively support
POSIX compliance. **Option B** is incorrect for the same reason as A, S3 isn't POSIX compliant. **Option D** is
incorrect because while EFS One Zone is a cost-effective option, it's not highly available, as it only stores data
within a single Availability Zone, violating the availability requirement. EFS One Zone is suitable for workloads
where durability is less important than cost.

Therefore, EFS Standard with lifecycle management to EFS Standard-IA is the optimal solution balancing
cost, availability, POSIX compliance, and data access patterns.

---

## Question 385

**Answer:** **C**

**Explanation:**

The correct answer is C because it adheres to the principle of least privilege using security groups, which
operate at the instance level, providing granular control.

**Option C** suggests creating a security group for the web servers that allows inbound traffic on port 443 only
from the load balancer's security group. This ensures that only the load balancer can send HTTPS traffic to
the web servers, restricting access from other sources. Subsequently, it proposes a security group for the
MySQL servers, permitting inbound traffic on port 3306 (MySQL's default port) solely from the web servers'

security group. This setup allows the web servers to communicate with the database while preventing any
other resources from directly accessing the MySQL servers.

**Option A** allows port 443 from 0.0.0.0/0 to the web servers, which violates the least privilege principle by
opening access to the entire internet. Options B and D use Network ACLs (NACLs). NACLs operate at the
subnet level and are stateless, meaning you need to configure both inbound and outbound rules, making
security group management for inter-instance communication easier to administer.

Therefore, option C is the only choice that properly leverages security groups to restrict access to the
minimum necessary, fulfilling the company's policy requirements.
AWS Security GroupsAWS Network ACLs

---

## Question 386

**Answer:** **B**

**Explanation:**

The most effective solution to improve the backend performance involves caching frequently requested,
identical datasets.

**Option B**, implementing Amazon ElastiCache, is the correct approach. ElastiCache is a fully managed, inmemory data store and caching service. By caching frequently accessed data from the RDS for MySQL
database in ElastiCache, the backend application can retrieve the data much faster than querying the
database each time. This reduces the load on the RDS instance and significantly improves the response time
for the backend. ElastiCache supports Memcached and Redis, both suitable for caching datasets. Memcached
provides a distributed memory object caching system, while Redis offers more advanced data structures and
features.

Why other options are incorrect:

**Option A** (Amazon SNS): Amazon SNS (Simple Notification Service) is a messaging service used for pub/sub
architectures. It's not designed for caching data.

**Option C** (RDS Read Replica): While read replicas can offload read traffic from the primary RDS instance,
they still query the database. This doesn't eliminate the latency associated with database queries for identical
datasets. Caching avoids database queries altogether for commonly requested information, offering better
performance gains in this specific scenario. Read replicas are more beneficial for scaling read operations
rather than caching identical data.

**Option D** (Amazon Kinesis Data Firehose): Amazon Kinesis Data Firehose is a service for streaming data to
data lakes, data stores, and analytics services. It is not suitable for caching data or improving the backend
application's read performance in the context described. Firehose is mainly used for ingestion of streaming
data for analytics and long term storage.

In conclusion, ElastiCache provides a dedicated caching layer that directly addresses the issue of
performance slowdowns caused by frequent, redundant database calls. It significantly reduces database load
and improves response times for the backend application by serving frequently accessed data directly from
memory.

---

## Question 387

**Answer:** **DE**

**Explanation:**

The principle of least privilege dictates granting only the permissions required to perform a specific task.
Options A, B, and C are incorrect because they violate this principle.

**Option A** is wrong because using the root user grants unrestricted access to all AWS services and resources,
posing a significant security risk. Root user credentials should be used extremely sparingly, only for tasks
requiring it, such as changing the account settings.

**Option B** and C are wrong because PowerUser or AdministratorAccess policies grant broad permissions that
are not necessary for CloudFormation deployments. This level of access could be misused, creating security
vulnerabilities.

**Option D**, creating an IAM user in a group with an IAM policy allowing only CloudFormation actions, aligns with
the least privilege principle. It restricts the deployment engineer to CloudFormation-specific tasks, reducing
the risk of accidental or malicious actions on other AWS resources. However, even this can be refined further.

**Option E**, creating an IAM role with specific permissions for the CloudFormation stack and launching stacks
using that role, represents an even more granular application of the least privilege principle. This approach
grants the exact permissions needed for that specific stack, limiting any potential blast radius if the
credentials are compromised. This provides better security over a blanket CloudFormation only policy as
suggested in option D.

Therefore, D and E are the most appropriate actions to follow the principle of least privilege.

---

## Question 388

**Answer:** **D**

**Explanation:**

The correct answer is D. Add an inbound rule to the security group of the database tier’s RDS instance to
allow traffic from the web tiers security group.

Here's why:
The problem is that the web tier cannot connect to the RDS database, despite the database being up and
running. The question states that network ACLs and route tables are in their default states. Default network
ACLs allow all inbound and outbound traffic. The default route table allows all traffic within the VPC. This
means the problem likely lies with the security groups, which act as virtual firewalls at the instance level.
RDS DB instances use security groups to control network access. By default, a security group denies all
inbound traffic. Therefore, the RDS instance's security group is likely blocking connections from the web tier.
To fix this, we need to add an inbound rule to the RDS instance's security group that allows traffic from the
web tier's security group. This allows instances in the web tier's security group to connect to the RDS instance
on the appropriate port (typically 3306 for MySQL). Specifying the source as the web tier's security group is
best practice, as it allows the RDS instance to only accept traffic from authorized sources within the VPC
without specifying IP addresses.

Why the other options are incorrect:

**A.** Add an explicit rule to the private subnet’s network ACL to allow traffic from the web tier’s EC2
instances: Network ACLs, by default, allow all traffic. Adding explicit rules is unnecessary in this scenario and
won't solve the issue, as the restriction is likely at the security group level.

**B.** Add a route in the VPC route table to allow traffic between the web tier’s EC2 instances and the
database tier: The default route table already allows all traffic within the VPC, so adding another route won't
change anything. The issue isn't routing; it's access control.

**C.** Deploy the web tier's EC2 instances and the database tier’s RDS instance into two separate VPCs, and
configure VPC peering: This is a complex solution that is not necessary to resolve the connection issue within
the existing VPC. It introduces more administrative overhead than simply adjusting the security group rules.
VPC peering is used to connect separate VPCs, which isn't the problem at hand.

---

## Question 389

**Answer:** **A**

**Explanation:**

The correct answer is A: Deploy RDS read replicas to process the business reporting queries. This solution
effectively isolates the business reporting workload from the production database, preventing any
performance impact on write operations.
RDS Read Replicas provide a mechanism for asynchronous replication of data from a source RDS database
instance (in this case, MySQL) to one or more read-only copies. These replicas reside in separate DB instances
and can handle read-heavy workloads without affecting the primary instance's performance. Business
reporting typically involves complex and resource-intensive queries that can consume significant database
resources. By directing these queries to the read replicas, the primary instance remains dedicated to handling
write operations and transactional workloads, ensuring optimal performance for the online advertising
business.

**Option B** is incorrect. Placing an RDS instance behind an Elastic Load Balancer does not scale the database
horizontally in the traditional sense of sharing the data. ELB primarily handles distributing connection
requests. While it could distribute read queries, it won't prevent the primary instance from being burdened by
the reporting queries. It's mostly useful for read scale when multiple instances host the same data and the
instances are identical in terms of data.

**Option C** is also incorrect. Scaling up the DB instance (vertical scaling) might improve performance
temporarily, but it doesn't isolate the reporting workload. The reporting queries will still compete for
resources with the write operations, eventually leading to performance bottlenecks as the dataset grows and
query complexity increases. Moreover, there is a limit to how much you can vertically scale.

**Option D** is also incorrect. Deploying the DB instance in multiple Availability Zones (Multi-AZ) primarily
provides high availability and failover capabilities. While it creates a standby instance, this standby is for
failover purposes and isn't designed for actively handling read queries during normal operations. Using it for
read operations is discouraged and inefficient since the primary instance is still handling both reads and
writes. In summary, RDS Read Replicas are the ideal solution for offloading read-only workloads like business
reporting from the primary RDS instance, ensuring that write performance remains unaffected and
maximizing overall database performance and availability.
Further Resources:
Amazon RDS Read Replicas
Working with MySQL Read Replicas

---

## Question 390

**Answer:** **AD**

**Explanation:**

The requirement is to optimize customer session management for an e-commerce application running on EC2
instances behind an ALB, with durable storage of session data.

**Option A**, turning on sticky sessions (session affinity) on the ALB, addresses session management directly.
Sticky sessions ensure that a user's requests are consistently routed to the same EC2 instance within the
Auto Scaling group. This is crucial for maintaining session state and avoiding data loss during transactions.
ALB sticky sessions use cookies to track which server the client should be routed to.
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html

**Option D**, deploying an Amazon ElastiCache for Redis cluster, provides durable and in-memory storage for
customer session information. Redis, being an in-memory data store, offers fast read and write operations,
significantly improving session retrieval speed. The question specified the session data must be stored
durably, and Redis can be configured with persistence to disk (RDB or AOF), ensuring that session data
survives instance failures. Redis Cluster automatically partitions your data among multiple Redis nodes. It
improves availability and performance for large datasets. https://aws.amazon.com/elasticache/redis/

**Option B** is incorrect because while DynamoDB provides durable storage, it is not the optimal choice for
session management due to higher latency compared to an in-memory solution like ElastiCache Redis,
especially for frequently accessed session data.

**Option C**, using Amazon Cognito, primarily handles authentication and authorization (identity management),
which is a different aspect of the application than session data persistence. Cognito could be used for user

authentication but doesn't satisfy the durability requirement for session data within the context of active
transactions.

**Option E**, using AWS Systems Manager Application Manager, focuses on managing application operations and
infrastructure, rather than directly handling session data. It provides centralized views of applications and
insights into their operational status. This does not address the session management or durability
requirements.

---

## Question 391

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution and why the others are less suitable:
Why **Option C** is Correct:
Stateless Web Application & AMIs: The EC2 instances are stateless, meaning they don't store persistent
data. Creating and retaining AMIs (Amazon Machine Images) captures the configuration and software setup of
the EC2 instances. When scaling events occur, the Auto Scaling group can launch new instances using the
latest AMI, ensuring consistency and rapid deployment. Since there's no application data to back up on the
instances themselves, EBS snapshots are redundant and unnecessary for the web tier.
RDS Automated Backups & Point-in-Time Recovery: Amazon RDS's automated backup feature creates
regular snapshots of the database and transaction logs. Enabling automated backups and using point-in-time
recovery (PITR) allows you to restore the database to any point in time within the backup retention period,
meeting the 2-hour RPO. PITR uses both the snapshots and transaction logs for granular recovery.
Scalability and Resource Optimization: AMIs are efficient for deploying stateless applications because they
capture the pre-configured instance state. RDS automated backups are designed for database durability
without requiring manual snapshot management. This approach minimizes manual intervention, optimizes
resource utilization, and scales effectively with the application.
Why Other Options Are Incorrect:

**Option A** & D: EBS Snapshots for Stateless Instances: Taking EBS snapshots of the EC2 instances in a
stateless web application is unnecessary. Since the instances are stateless, snapshots offer no benefit for
application data recovery. This wastes storage resources and management overhead.

**Option B**: Snapshot lifecycle for EBS & RDS Automated Backups: It is important to note that option B does
not address the EC2 instances.
Reliance on EBS snapshot for RDS: While automated backups are correct for RDS, the other options also
recommend EBS snapshots for the stateless EC2 instances, making them redundant and less optimal.

In summary, **Option C** provides the most efficient and scalable solution for backing up a stateless web
application on EC2 and a PostgreSQL database on RDS. It leverages AMIs for the stateless web tier and RDS
automated backups with PITR for the database tier, meeting the required RPO while optimizing resource
utilization.
Supporting Links:
Amazon Machine Images (AMIs): https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
Amazon RDS Automated Backups:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
Amazon RDS Point-in-Time Recovery:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html

---

## Question 392

**Answer:** **A**

**Explanation:**

The correct answer is A because it implements the principle of least privilege while ensuring global
accessibility.

Here's a detailed justification:
Web Server Security Group: The web servers need to be accessible from the internet for global customers.
Since the customers have dynamic IP addresses, specifying individual IP addresses (as suggested in options B
and C) is impractical and unmanageable. Opening port 443 (HTTPS) to 0.0.0.0/0 allows traffic from any IP
address to reach the web servers securely, enabling global access. This is acceptable because the web
servers are designed to handle public-facing traffic.
Database Security Group: Exposing the database directly to the internet (as suggested in option D) is a
significant security risk. Instead, the database should only accept connections from the web servers. This is

achieved by configuring the DB instance's security group to allow inbound traffic on port 3306 (MySQL's
default port) only from the security group of the web servers. This means only EC2 instances associated with
the web server's security group can connect to the database. This approach isolates the database and
protects it from unauthorized access from the internet.

Why other options are incorrect: **Option B** and C are incorrect because specifying individual customer IP
addresses is not feasible with dynamic IP addresses. **Option D** is wrong because it opens the database to the
entire internet, which is a major security vulnerability.

In summary, option A balances accessibility and security. It allows global customers to access the web
application while restricting database access to only the necessary components (the web servers). This
configuration follows AWS best practices for securing multi-tier applications.
Relevant AWS Documentation:
Security Groups: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
RDS Security:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview. RDSSecurityGroups.html

---

## Question 393

**Answer:** **C**

**Explanation:**

The correct answer is C because it directly addresses the requirements of transcribing audio files and
redacting PII, utilizing services specifically designed for these tasks.

**Option C** utilizes Amazon Transcribe, a service designed for speech-to-text conversion. Transcribe's built-in
PII redaction feature automatically identifies and removes sensitive information from the transcribed text,
satisfying the PII removal requirement efficiently. Configuring a Lambda function to trigger the transcription
job upon S3 upload provides an automated, event-driven workflow. Storing the output in a separate S3 bucket
ensures separation of the original audio and the processed text, further enhancing security and organization.
This approach minimizes custom code and leverages AWS managed services for core functionality, adhering
to best practices for scalability and maintainability.

**Option A** is less ideal because Kinesis Video Streams is primarily for real-time video and audio ingestion, not
for batch processing of existing audio files in S3. Scanning for PII patterns within a Lambda function would
require custom development and maintenance of PII detection logic, which is less efficient than using
Transcribe's built-in feature.

**Option B** uses Amazon Textract, which is primarily designed for extracting text from documents and images,
not audio. While Textract can process images of spectrograms generated from audio, this is an indirect and
inefficient approach compared to using a dedicated transcription service like Transcribe.

**Option D** suggests Amazon Connect, which is a contact center as a service. While Connect offers transcription
capabilities, it's typically used for real-time call center interactions. Using Connect for batch processing S3
audio files is an overkill and not its intended use case. Scanning for PII using Lambda within a contact flow is
also less efficient and scalable than utilizing Transcribe's PII redaction feature.

Therefore, option C offers the most direct, efficient, and cost-effective solution by leveraging Amazon
Transcribe's built-in PII redaction capabilities and automating the process with Lambda triggers.

---

## Question 394

**Answer:** **D**

**Explanation:**

The correct answer is B. Increase the number of IOPS on the gp3 volume.
Here's why and why the other options are incorrect:
The problem states that performance degrades when IOPS exceed 20,000. The current gp3 volume is the
bottleneck. gp3 volumes offer a baseline performance and allow you to provision additional IOPS if needed.
The root cause is that the provisioned IOPS are insufficient for the application's peak demand. Therefore,
increasing the provisioned IOPS is the most direct and efficient way to address the performance issue.

**Option A**: Replace the volume with a magnetic volume. Magnetic volumes are the lowest performance EBS
volume type. Switching to magnetic volumes would drastically decrease performance and is the opposite of
what the scenario requires.

**Option C**: Replace the volume with a Provisioned IOPS SSD (io2) volume. While io2 volumes offer higher
IOPS performance than gp3, it's not the most cost-effective initial approach. The best approach is to maximize
IOPS within the gp3 volume before upgrading the volume. In addition, the newer io2 Block Express volume is

significantly higher in performance and would cost significantly more.

**Option D**: Replace the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes. Splitting the volume doesn't
inherently increase the total IOPS available to the database. The limit for IOPS depends on the volume size (up
to 16,000 IOPS per GB). This might improve performance in some specific IO patterns, but the problem
statement clearly indicates the issue is exceeding the total IOPS limit. Also, it does not give the needed IOPS
for the EC2 instance.
Justification for increasing IOPS on the gp3 volume:

1. The problem identifies that the bottleneck is the RDS database when read/write IOPS exceed 20,000.

2. The application is already using gp3 volumes, a general-purpose SSD volume type designed to
balance price and performance.

3. gp3 volumes allow provisioning specific IOPS, meaning you can increase the IOPS as needed for a
given volume size.

4. The gp3 volume type has a maximum IOPS to size ratio. Increasing the volume size and then
increasing IOPS is a viable solution.

5. Increasing IOPS directly addresses the stated problem: the database's inability to handle high IOPS
demands.

6. It's the most cost-effective solution for the current information.

---

## Question 395

**Answer:** **C**

**Explanation:**

The correct answer is C. AWS CloudTrail.
AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of
your AWS account. CloudTrail logs API calls made to AWS services, including the identity of the caller (IAM
user, role, or AWS account), the time of the call, the source IP address, the request parameters, and the
response elements returned by the AWS service. This allows you to track changes made to your AWS
resources and identify the IAM user responsible for specific actions. In this scenario, the solutions architect
needs to identify the IAM user who modified the security group rules. CloudTrail provides the necessary audit
logs to pinpoint the user and the exact configuration changes they made.
Here's why the other options are incorrect:

**A.** Amazon GuardDuty: GuardDuty is a threat detection service that continuously monitors your AWS
accounts and workloads for malicious activity and unauthorized behavior. It doesn't provide detailed logs of
configuration changes made by IAM users.

**B.** Amazon Inspector: Inspector is a vulnerability management service that automatically assesses AWS
workloads for software vulnerabilities and unintended network exposure. It helps improve the security and
compliance of applications deployed on AWS but does not track IAM user actions.

**D.** AWS Config: Config enables you to assess, audit, and evaluate the configurations of your AWS resources.
While Config can detect that a security group rule has drifted from its desired state, it is CloudTrail that
provides the comprehensive audit trail of who made the specific change. Config works well with Cloudtrail
data to provide a detailed audit history.

In summary, CloudTrail is the ideal service for identifying the IAM user responsible for making configuration
changes to AWS resources due to its API call logging capabilities.
Further research:
AWS CloudTrail: https://aws.amazon.com/cloudtrail/

---

## Question 396

**Answer:** **A**

**Explanation:**

The correct answer is A: Subscribe to AWS Shield Advanced. Add the accelerator as a resource to protect.

Here's why:
DDoS Protection with AWS Shield: AWS Shield is a managed DDoS protection service that safeguards
applications running on AWS. It comes in two tiers: Standard and Advanced.
AWS Shield Standard: This tier provides automatic, always-on protection against common, frequently
occurring network and transport layer DDoS attacks. It's included at no extra cost for all AWS customers. It
protects your AWS resources.
AWS Shield Advanced: This tier provides enhanced DDoS protection for applications running on EC2, Elastic
Load Balancing (ELB), CloudFront, Global Accelerator, and Route 53. Key benefits include:
24/7 DDoS response team support: Access to AWS DDoS experts who can help mitigate sophisticated
attacks.
Visibility into DDoS attacks: Detailed monitoring and reporting to understand attack patterns.

Cost protection: Credits for usage spikes caused by DDoS attacks.
Global Accelerator and DDoS Protection: Global Accelerator uses a static IP address that acts as a single
point of contact for your applications, distributed across multiple AWS Regions. This makes it a prime target
for DDoS attacks, but also a strategic point to implement protection. Shield Advanced can protect Global
Accelerator endpoints.

Why other options are incorrect:

**Option B** (Protecting EC2 instances directly with Shield Advanced): While possible, it's less effective in this
scenario. The Global Accelerator provides a centralized entry point. Protecting the accelerator directly shields
the underlying EC2 instances from the initial onslaught of DDoS traffic.
Options C and D (Using AWS WAF): AWS WAF is a web application firewall that helps protect your web
applications from common web exploits. It can mitigate some DDoS attacks, especially those at the
application layer (Layer 7). However, it doesn't provide the comprehensive, network-layer protection of AWS
Shield Advanced. More specifically, AWS WAF is better suited for filtering out malicious requests based on
HTTP headers, cookies, or other application-level data and is insufficient for volumetric DDoS attacks. While
associating WAF with the accelerator might offer some defense, the best practice is to use Shield Advanced,
which integrates with WAF to provide a layered defense. Furthermore, WAF rate-based rules can help with
some types of denial of service attacks, they are not a replacement for Shield Advanced.
In Summary: Since the company wants to protect against DDoS attacks and is already using Global
Accelerator, subscribing to AWS Shield Advanced and protecting the accelerator is the most effective and
comprehensive solution. This provides network and transport layer protection while simplifying the
configuration.

---

## Question 397

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most suitable solution, along with why the other options
are less ideal:

**Option C**: Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch
type. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the
job.
Justification: This option provides the best balance of managed services, scalability, and operational
simplicity.
ECS with Fargate: Fargate is a serverless compute engine for containers. This eliminates the need to manage
underlying EC2 instances, handling patching, scaling, and maintenance for you. This significantly reduces
operational overhead. You specify the CPU and memory requirements for your container (as these are known
in advance), and Fargate provisions the resources.
Containerization: Using a container (e.g., a Docker image) allows you to package your application and its
dependencies consistently. This eliminates the "it works on my machine" problem and ensures the application
runs identically across different environments.
Amazon EventBridge: EventBridge provides a serverless event bus that allows you to schedule the job to run
daily. It can directly trigger an ECS task execution based on a defined schedule. This creates a fully
automated process.
Scalability: ECS with Fargate can easily scale based on the resource requirements of the job. You define
resource limits, and Fargate handles the scaling of underlying resources.
Suitable Duration: The job duration is up to one hour, which is generally well within the limits of ECS tasks on
Fargate.
Cost-Effective: You only pay for the resources consumed during the task execution. This can be more costeffective than having a dedicated EC2 instance running.
Operational Efficiency: No EC2 instance management, container orchestration through ECS, scheduled
executions by EventBridge all result in minimized operational effort.
Why other options are less ideal:

**Option A**: Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the
EventBridge event to run once a day.
Limitation: Lambda has a maximum execution time limit of 15 minutes. The job can take up to an hour to
complete, making Lambda unsuitable.
Memory Limitation: Lambda functions also have memory limits. While the memory usage is known, complex
aggregation and filtering of large sales records (up to 10 GB per object) might exceed these limits,
particularly if multiple objects are processed in parallel.

**Option B**: Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the
API with the function. Create an Amazon EventBridge scheduled event that calls the API and invokes the
function.
Limitation: Similar to **Option A**, Lambda's execution time limit of 15 minutes renders this solution ineffective
for a job that can take up to an hour. Adding API Gateway introduces unnecessary complexity.

**Option D**: Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch
type and an Auto Scaling group with at least one EC2 instance. Create an Amazon EventBridge scheduled
event that launches an ECS task on the cluster to run the job.
Increased Operational Overhead: This option requires managing EC2 instances. This includes patching,
scaling, and maintenance. While Auto Scaling helps, it still introduces more operational overhead compared to
Fargate.
Cost: Running EC2 instances even when the job is not executing can be less cost-effective than Fargate,

which only charges you for the resources used during the job's execution.

---

## Question 398

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most cost-effective solution, along with supporting
concepts and links:

**Option C**, utilizing AWS Snowball Edge Storage Optimized devices, is the most cost-effective because it
addresses the time constraint and security requirements without incurring excessive costs. Let's break it
down:

1. Data Volume and Time Constraint: Transferring 600 TB of data in 2 weeks (14 days) with a 100 Mbps
connection is infeasible. 100 Mbps equates to roughly 12.5 MBps. To transfer 600 TB (600,000 GB)
would take approximately (600,000 GB * 1024 MB/GB) / 12.5 MBps = 49,152,000 seconds, or about
569 days. This far exceeds the 14-day requirement.

2. Snowball Edge for Large Data Transfer: AWS Snowball Edge is designed for moving large amounts
of data into and out of AWS. It provides physical storage devices you can ship to your location, load
with data, and then ship back to AWS for upload to S3. This circumvents the limitations of the
internet connection. https://aws.amazon.com/snowball/

3. Security: Snowball Edge devices encrypt data both in transit and at rest, meeting the sensitive data
requirement. AWS provides tamper-evident packaging and secure data erasure services.

4. Cost-Effectiveness: While Snowball Edge has upfront costs, it is more cost-effective than the other
options:

**Option A** (S3 Multi-part Upload): Unrealistic due to the internet bandwidth limitation, rendering the
large upload impossible within the timeframe. It is also vulnerable to errors and disconnections over
such a long time.

**Option B** (VPN): Still limited by the 100 Mbps internet connection. While a VPN provides secure
transport, the data transfer will still be prohibitively slow.

**Option D** (Direct Connect): Direct Connect provides a dedicated network connection to AWS.
However, setting up a 10 Gbps Direct Connect connection is significantly more expensive than using
Snowball Edge, especially if the large data transfer is a one-time event. The costs involve installation
fees, monthly port fees, and data transfer charges. A VPN on top of Direct Connect, while secure,
adds further complexity and costs.

5. Cost Breakdown (Illustrative): Snowball Edge Storage Optimized pricing varies by region and
contract. It is typically charged on a per-day usage basis plus data transfer costs into S3. This would
be considerably cheaper than Direct Connect with monthly port fees and VPN setup.

In summary, AWS Snowball Edge offers the optimal balance of speed, security, and cost-effectiveness for a
one-time, large-scale data migration when limited by internet bandwidth. It bypasses the limitations of the
internet connection and securely transports the data to AWS within the required timeframe, making it the
most suitable choice.

---

## Question 399

**Answer:** **B**

**Explanation:**

The correct answer is B. Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web
ACL with the API Gateway stage.

Here's a detailed justification:
The primary goal is to protect the API Gateway application from HTTP flood attacks (DDoS) with minimal
operational overhead. AWS WAF is specifically designed for this purpose. A rate-based rule in WAF allows
you to specify the maximum number of requests allowed from a single IP address within a defined period (e.g.,
5 minutes). If an IP exceeds this threshold, WAF can block or take other defined actions (like CAPTCHA)

against the offending IP.
Associating the WAF web ACL directly with the API Gateway stage offers the most direct and efficient
protection. WAF integrates seamlessly with API Gateway and requires minimal configuration and
maintenance after the initial setup. The protection is applied at the regional level, safeguarding the
application from attacks originating from within the AWS region.

**Option A** (CloudFront with a maximum TTL) primarily addresses caching and content delivery. While it can
help reduce load on the API Gateway, it doesn't directly mitigate HTTP flood attacks. The high TTL could also
lead to stale stock prices.

**Option C** (CloudWatch metrics and alerts) only provides monitoring and notification, which doesn't
automatically prevent the attacks. Manual intervention is needed to respond to alerts, resulting in higher
operational overhead and potentially a delayed response to ongoing attacks.

**Option D** (CloudFront with [email protected] and Lambda) is more complex and introduces operational
overhead. [email protected] adds latency. While it can provide custom IP blocking, it requires managing and
maintaining a Lambda function, which is more complex than using AWS WAF's built-in rate-limiting feature.
Also, it is better to use AWS WAF's built-in rate limiting rules.

Therefore, AWS WAF provides the most effective and least operationally intensive solution for mitigating
HTTP flood attacks against an API Gateway endpoint. It automatically blocks traffic exceeding defined rates,
preventing the application from being overwhelmed.

---

## Question 400

**Answer:** **C**

**Explanation:**

**Option C** is the best solution because it leverages DynamoDB Streams, which provides a near real-time,
ordered stream of item-level modifications in a DynamoDB table. This is a managed service that minimizes

operational overhead. By enabling DynamoDB Streams and configuring a trigger (e.g., an AWS Lambda
function), the solution can asynchronously process new weather event records without impacting the
performance of the existing web application. The Lambda function can then publish to a single SNS topic,
simplifying management by having all teams subscribe to one topic, rather than multiple topics.

**Option A** is not optimal because using DynamoDB transactions might impact the performance of the current
application, especially under heavy write loads, as transactions are more resource-intensive than regular
writes. Configuring transactions to notify internal teams is also not a built-in feature, requiring significant
custom coding and management.

**Option B** isn't as efficient. Directly publishing to four SNS topics from the current application couples the
application tightly with the notification service. This increases complexity within the application and
potentially affects its performance. Managing four separate SNS topics adds unnecessary overhead.

**Option D** is the least efficient. Scanning a DynamoDB table every minute is highly inefficient and expensive,
especially as the table grows. This approach is also disruptive to DynamoDB's performance and scalability.
Using SQS is unnecessary when SNS can directly notify the teams. Moreover, managing a cron job adds
operational overhead.

Therefore, option C offers the best balance of minimal operational overhead, asynchronous processing to
avoid performance impact, and a manageable notification strategy using a single SNS topic.

---

# Quick Answer Sheet

Question 351: D
Question 352: B
Question 353: B
Question 354: B
Question 355: D
Question 356: B
Question 357: AD
Question 358: C
Question 359: C
Question 360: B
Question 361: C
Question 362: BE
Question 363: B
Question 364: BD
Question 365: C
Question 366: D
Question 367: A
Question 368: A
Question 369: A
Question 370: C
Question 371: CD
Question 372: D
Question 373: D
Question 374: D
Question 375: A
Question 376: A
Question 377: B
Question 378: B
Question 379: B
Question 380: D
Question 381: B
Question 382: A
Question 383: A
Question 384: C
Question 385: C
Question 386: B
Question 387: DE
Question 388: D
Question 389: A
Question 390: AD
Question 391: C
Question 392: A
Question 393: C
Question 394: D
Question 395: C
Question 396: A
Question 397: C
Question 398: C
Question 399: B
Question 400: C
