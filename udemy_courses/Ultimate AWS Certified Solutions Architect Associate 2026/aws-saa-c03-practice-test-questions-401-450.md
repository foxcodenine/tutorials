# AWS SAA-C03 Practice Test: Questions 401-450

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 401

A company wants to use the AWS Cloud to make an existing application highly available and resilient. The current
version of the application resides in the company's data center. The application recently experienced data loss
after a database server crashed because of an unexpected power outage.
The company needs a solution that avoids any single points of failure. The solution must give the application the
ability to scale to meet user demand.
Which solution will meet these requirements?

**A.** Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple
Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.

**B.** Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group in a single
Availability Zone. Deploy the database on an EC2 instance. Enable EC2 Auto Recovery.

**C.** Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple
Availability Zones. Use an Amazon RDS DB instance with a read replica in a single Availability Zone. Promote
the read replica to replace the primary DB instance if the primary DB instance fails.

**D.** Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple
Availability Zones. Deploy the primary and secondary database servers on EC2 instances across multiple
Availability Zones. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage
between the instances.

---

## Question 402

A company needs to ingest and handle large amounts of streaming data that its application generates. The
application runs on Amazon EC2 instances and sends data to Amazon Kinesis Data Streams, which is configured
with default settings. Every other day, the application consumes the data and writes the data to an Amazon S3
bucket for business intelligence (BI) processing. The company observes that Amazon S3 is not receiving all the
data that the application sends to Kinesis Data Streams.
What should a solutions architect do to resolve this issue?

**A.** Update the Kinesis Data Streams default settings by modifying the data retention period.

**B.** Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.

**C.** Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data
Streams.

**D.** Turn on S3 Versioning within the S3 bucket to preserve every version of every object that is ingested in the
S3 bucket.

---

## Question 403

A developer has an application that uses an AWS Lambda function to upload files to Amazon S3 and needs the
required permissions to perform the task. The developer already has an IAM user with valid IAM credentials
required for Amazon S3.
What should a solutions architect do to grant the permissions?

**A.** Add required IAM permissions in the resource policy of the Lambda function.

**B.** Create a signed request using the existing IAM credentials in the Lambda function.

**C.** Create a new IAM user and use the existing IAM credentials in the Lambda function.

**D.** Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function.

---

## Question 404

A company has deployed a serverless application that invokes an AWS Lambda function when new documents are
uploaded to an Amazon S3 bucket. The application uses the Lambda function to process the documents. After a
recent marketing campaign, the company noticed that the application did not process many of the documents.
What should a solutions architect do to improve the architecture of this application?

**A.** Set the Lambda function's runtime timeout value to 15 minutes.

**B.** Configure an S3 bucket replication policy. Stage the documents in the S3 bucket for later processing.

**C.** Deploy an additional Lambda function. Load balance the processing of the documents across the two
Lambda functions.

**D.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests to the queue. Configure
the queue as an event source for Lambda.

---

## Question 405

A solutions architect is designing the architecture for a software demonstration environment. The environment will
run on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The system will
experience significant increases in traffic during working hours but is not required to operate on weekends.
Which combination of actions should the solutions architect take to ensure that the system can scale to meet
demand? (Choose two.)

**A.** Use AWS Auto Scaling to adjust the ALB capacity based on request rate.

**B.** Use AWS Auto Scaling to scale the capacity of the VPC internet gateway.

**C.** Launch the EC2 instances in multiple AWS Regions to distribute the load across Regions.

**D.** Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization.

**E.** Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero
for weekends. Revert to the default values at the start of the week.

---

## Question 406

A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet.
The web servers in the public subnet must be open to the internet on port 443. The Amazon RDS for MySQL DB
instance in the database subnet must be accessible only to the web servers on port 3306.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

**A.** Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port 3306.

**B.** Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block on
port 3306.

**C.** Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on
port 443.

**D.** Create a security group for the DB instance. Add a rule to allow traffic from the web servers’ security group

on port 3306.

**E.** Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web servers’
security group on port 3306.

---

## Question 407

A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud.
The company needs the ability to use Lustre clients to access data. The solution must be fully managed.

Which solution meets these requirements?

**A.** Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the
application server.

**B.** Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol.
Connect the application server to the file share.

**C.** Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach
the file system to the origin server. Connect the application server to the file system.

**D.** Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the
application server to the file system.

---

## Question 408

A company runs an application that receives data from thousands of geographically dispersed remote devices that
use UDP. The application processes the data immediately and sends a message back to the device if necessary. No
data is stored.
The company needs a solution that minimizes latency for the data transmission from the devices. The solution also
must provide rapid failover to another AWS Region.
Which solution will meet these requirements?

**A.** Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the
two Regions. Configure the NLB to invoke an AWS Lambda function to process the data.

**B.** Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an
endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type.
Create an ECS service on the cluster. Set the ECS service as the target for the NLProcess the data in Amazon
ECS.

**C.** Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an
endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type.
Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon
ECS.

**D.** Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of
the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch
type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in
Amazon ECS.

---

## Question 409

A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The
application currently relies on a file share hosted in the user's on-premises network-attached storage (NAS). The
solutions architect has proposed migrating the IIS web servers to Amazon EC2 instances in multiple Availability
Zones that are connected to the storage solution, and configuring an Elastic Load Balancer attached to the
instances.
Which replacement to the on-premises file share is MOST resilient and durable?

**A.** Migrate the file share to Amazon RDS.

**B.** Migrate the file share to AWS Storage Gateway.

**C.** Migrate the file share to Amazon FSx for Windows File Server.

**D.** Migrate the file share to Amazon Elastic File System (Amazon EFS).

---

## Question 410

A company is deploying a new application on Amazon EC2 instances. The application writes data to Amazon Elastic
Block Store (Amazon EBS) volumes. The company needs to ensure that all data that is written to the EBS volumes
is encrypted at rest.
Which solution will meet this requirement?

**A.** Create an IAM role that specifies EBS encryption. Attach the role to the EC2 instances.

**B.** Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2 instances.

**C.** Create an EC2 instance tag that has a key of Encrypt and a value of True. Tag all instances that require
encryption at the EBS level.

**D.** Create an AWS Key Management Service (AWS KMS) key policy that enforces EBS encryption in the account.

Ensure that the key policy is active.

---

## Question 411

A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each
month, moderate usage at the start of each week, and unpredictable usage during the week. The application
consists of a web server and a MySQL database server running inside the data center. The company would like to
move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not
require database modifications.
Which solution will meet these requirements?

**A.** Amazon DynamoDB

**B.** Amazon RDS for MySQL

**C.** MySQL-compatible Amazon Aurora Serverless

**D.** MySQL deployed on Amazon EC2 in an Auto Scaling group

---

## Question 412

An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental
exposure of the objects in the S3 buckets to the public. All S3 objects in the entire AWS account need to remain
private.
Which solution will meet these requirements?

**A.** Use Amazon GuardDuty to monitor S3 bucket policies. Create an automatic remediation action rule that uses
an AWS Lambda function to remediate any change that makes the objects public.

**B.** Use AWS Trusted Advisor to find publicly accessible S3 buckets. Configure email notifications in Trusted
Advisor when a change is detected. Manually change the S3 bucket policy if it allows public access.

**C.** Use AWS Resource Access Manager to find publicly accessible S3 buckets. Use Amazon Simple Notification
Service (Amazon SNS) to invoke an AWS Lambda function when a change is detected. Deploy a Lambda
function that programmatically remediates the change.

**D.** Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service
control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account.

---

## Question 413

An ecommerce company is experiencing an increase in user traffic. The company’s store is deployed on Amazon
EC2 instances as a two-tier web application consisting of a web tier and a separate database tier. As traffic
increases, the company notices that the architecture is causing significant delays in sending timely marketing and
order confirmation email to users. The company wants to reduce the time it spends resolving complex email
delivery issues and minimize operational overhead.
What should a solutions architect do to meet these requirements?

**A.** Create a separate application tier using EC2 instances dedicated to email processing.

**B.** Configure the web instance to send email through Amazon Simple Email Service (Amazon SES).

**C.** Configure the web instance to send email through Amazon Simple Notification Service (Amazon SNS).

**D.** Create a separate application tier using EC2 instances dedicated to email processing. Place the instances in
an Auto Scaling group.

---

## Question 414

A company has a business system that generates hundreds of reports each day. The business system saves the
reports to a network share in CSV format. The company needs to store this data in the AWS Cloud in near-real time
for analysis.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Use AWS DataSync to transfer the files to Amazon S3. Create a scheduled task that runs at the end of each
day.

**B.** Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File
Gateway.

**C.** Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in
the automation workflow.

**D.** Deploy an AWS Transfer for SFTP endpoint. Create a script that checks for new files on the network share
and uploads the new files by using SFTP.

---

## Question 415

A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is
accessed with varying frequency. The company does not know access patterns for all the data. The company
needs to implement a solution for each S3 bucket to optimize the cost of S3 usage.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 IntelligentTiering.

**B.** Use the S3 storage class analysis tool to determine the correct tier for each object in the S3 bucket. Move
each object to the identified storage tier.

**C.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Glacier
Instant Retrieval.

**D.** Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 One ZoneInfrequent Access (S3 One Zone-IA).

---

## Question 416

A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes
static content and dynamic content. The website stores online transaction processing (OLTP) data in an Amazon
RDS database The website’s users are experiencing slow page loads.
Which combination of actions should a solutions architect take to resolve this issue? (Choose two.)

**A.** Configure an Amazon Redshift cluster.

**B.** Set up an Amazon CloudFront distribution.

**C.** Host the dynamic web content in Amazon S3.

**D.** Create a read replica for the RDS DB instance.

**E.** Configure a Multi-AZ deployment for the RDS DB instance.

---

## Question 417

A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs
with public subnets and private subnets in its AWS account. The EC2 instances run in a private subnet in one of the
VPCs. The Lambda functions need direct network access to the EC2 instances for the application to work.
The application will run for at least 1 year. The company expects the number of Lambda functions that the
application uses to increase during that time. The company wants to maximize its savings on all application
resources and to keep network latency between the services low.
Which solution will meet these requirements?

**A.** Purchase an EC2 Instance Savings Plan Optimize the Lambda functions’ duration and memory usage and the
number of invocations. Connect the Lambda functions to the private subnet that contains the EC2 instances.

**B.** Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage, the
number of invocations, and the amount of data that is transferred. Connect the Lambda functions to a public
subnet in the same VPC where the EC2 instances run.

**C.** Purchase a Compute Savings Plan. Optimize the Lambda functions’ duration and memory usage, the number
of invocations, and the amount of data that is transferred. Connect the Lambda functions to the private subnet
that contains the EC2 instances.

**D.** Purchase a Compute Savings Plan. Optimize the Lambda functions’ duration and memory usage, the number
of invocations, and the amount of data that is transferred. Keep the Lambda functions in the Lambda service
VPC.

---

## Question 418

A solutions architect needs to allow team members to access Amazon S3 buckets in two different AWS accounts:
a development account and a production account. The team currently has access to S3 buckets in the
development account by using unique IAM users that are assigned to an IAM group that has appropriate
permissions in the account.
The solutions architect has created an IAM role in the production account. The role has a policy that grants access
to an S3 bucket in the production account.
Which solution will meet these requirements while complying with the principle of least privilege?

**A.** Attach the Administrator Access policy to the development account users.

**B.** Add the development account as a principal in the trust policy of the role in the production account.

**C.** Turn off the S3 Block Public Access feature on the S3 bucket in the production account.

**D.** Create a user in the production account with unique credentials for each team member.

---

## Question 419

A company uses AWS Organizations with all features enabled and runs multiple Amazon EC2 workloads in the apsoutheast-2 Region. The company has a service control policy (SCP) that prevents any resources from being
created in any other Region. A security policy requires the company to encrypt all data at rest.
An audit discovers that employees have created Amazon Elastic Block Store (Amazon EBS) volumes for EC2
instances without encrypting the volumes. The company wants any new EC2 instances that any IAM user or root
user launches in ap-southeast-2 to use encrypted EBS volumes. The company wants a solution that will have
minimal effect on employees who create EBS volumes.
Which combination of steps will meet these requirements? (Choose two.)

**A.** In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption key.

**B.** Create an IAM permission boundary. Attach the permission boundary to the root organizational unit (OU).
Define the boundary to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.

**C.** Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the
ec2:CreateVolume action whenthe ec2:Encrypted condition equals false.

**D.** Update the IAM policies for each account to deny the ec2:CreateVolume action when the ec2:Encrypted
condition equals false.

**E.** In the Organizations management account, specify the Default EBS volume encryption setting.

---

## Question 420

A company wants to use an Amazon RDS for PostgreSQL DB cluster to simplify time-consuming database
administrative tasks for production database workloads. The company wants to ensure that its database is highly
available and will provide automatic failover support in most scenarios in less than 40 seconds. The company
wants to offload reads off of the primary instance and keep costs as low as possible.
Which solution will meet these requirements?

**A.** Use an Amazon RDS Multi-AZ DB instance deployment. Create one read replica and point the read workload
to the read replica.

**B.** Use an Amazon RDS Multi-AZ DB duster deployment Create two read replicas and point the read workload to
the read replicas.

**C.** Use an Amazon RDS Multi-AZ DB instance deployment. Point the read workload to the secondary instances in

the Multi-AZ pair.

**D.** Use an Amazon RDS Multi-AZ DB cluster deployment Point the read workload to the reader endpoint.

---

## Question 421

A company runs a highly available SFTP service. The SFTP service uses two Amazon EC2 Linux instances that run
with elastic IP addresses to accept traffic from trusted IP sources on the internet. The SFTP service is backed by
shared storage that is attached to the instances. User accounts are created and managed as Linux users in the
SFTP servers.
The company wants a serverless option that provides high IOPS performance and highly configurable security. The

company also wants to maintain control over user permissions.
Which solution will meet these requirements?

**A.** Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume. Create an AWS Transfer Family SFTP
service with a public endpoint that allows only trusted IP addresses. Attach the EBS volume to the SFTP service
endpoint. Grant users access to the SFTP service.

**B.** Create an encrypted Amazon Elastic File System (Amazon EFS) volume. Create an AWS Transfer Family SFTP
service with elastic IP addresses and a VPC endpoint that has internet-facing access. Attach a security group to
the endpoint that allows only trusted IP addresses. Attach the EFS volume to the SFTP service endpoint. Grant
users access to the SFTP service.

**C.** Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service
with a public endpoint that allows only trusted IP addresses. Attach the S3 bucket to the SFTP service
endpoint. Grant users access to the SFTP service.

**D.** Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service
with a VPC endpoint that has internal access in a private subnet. Attach a security group that allows only
trusted IP addresses. Attach the S3 bucket to the SFTP service endpoint. Grant users access to the SFTP
service.

---

## Question 422

A company is developing a new machine learning (ML) model solution on AWS. The models are developed as
independent microservices that fetch approximately 1 GB of model data from Amazon S3 at startup and load the
data into memory. Users access the models through an asynchronous API. Users can send a request or a batch of
requests and specify where the results should be sent.
The company provides models to hundreds of users. The usage patterns for the models are irregular. Some models
could be unused for days or weeks. Other models could receive batches of thousands of requests at a time.
Which design should a solutions architect recommend to meet these requirements?

**A.** Direct the requests from the API to a Network Load Balancer (NLB). Deploy the models as AWS Lambda
functions that are invoked by the NLB.

**B.** Direct the requests from the API to an Application Load Balancer (ALB). Deploy the models as Amazon Elastic
Container Service (Amazon ECS) services that read from an Amazon Simple Queue Service (Amazon SQS)
queue. Use AWS App Mesh to scale the instances of the ECS cluster based on the SQS queue size.

**C.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the
models as AWS Lambda functions that are invoked by SQS events. Use AWS Auto Scaling to increase the
number of vCPUs for the Lambda functions based on the SQS queue size.

**D.** Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the
models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Enable AWS
Auto Scaling on Amazon ECS for both the cluster and copies of the service based on the queue size.

---

## Question 423

A solutions architect wants to use the following JSON text as an identity-based policy to grant specific
permissions:

Which IAM principals can the solutions architect attach this policy to? (Choose two.)

**A.** Role

**B.** Group

**C.** Organization

**D.** Amazon Elastic Container Service (Amazon ECS) resource

**E.** Amazon EC2 resource

---

## Question 424

A company is running a custom application on Amazon EC2 On-Demand Instances. The application has frontend
nodes that need to run 24 hours a day, 7 days a week and backend nodes that need to run only for a short time
based on workload. The number of backend nodes varies during the day.
The company needs to scale out and scale in more instances based on workload.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes.

**B.** Use Reserved Instances for the frontend nodes. Use Spot Instances for the backend nodes.

**C.** Use Spot Instances for the frontend nodes. Use Reserved Instances for the backend nodes.

**D.** Use Spot Instances for the frontend nodes. Use AWS Fargate for the backend nodes.

---

## Question 425

A company uses high block storage capacity to runs its workloads on premises. The company's daily peak input
and output transactions per second are not more than 15,000 IOPS. The company wants to migrate the workloads
to Amazon EC2 and to provision disk performance independent of storage capacity.
Which Amazon Elastic Block Store (Amazon EBS) volume type will meet these requirements MOST costeffectively?

**A.** GP2 volume type

**B.** io2 volume type

**C.** GP3 volume type

**D.** io1 volume type

---

## Question 426

A company needs to store data from its healthcare application. The application’s data frequently changes. A new
regulation requires audit access at all levels of the stored data.
The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A
solutions architect must securely migrate the existing data to AWS while satisfying the new regulation.
Which solution will meet these requirements?

**A.** Use AWS DataSync to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.

**B.** Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.

**C.** Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log

data events.

**D.** Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management
events.

---

## Question 427

A solutions architect is implementing a complex Java application with a MySQL database. The Java application
must be deployed on Apache Tomcat and must be highly available.
What should the solutions architect do to meet these requirements?

**A.** Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda

functions.

**B.** Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling
deployment policy.

**C.** Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from
the application.

**D.** Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on
the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group.

---

## Question 428

A serverless application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The Lambda function
needs permissions to read and write to the DynamoDB table.
Which solution will give the Lambda function access to the DynamoDB table MOST securely?

**A.** Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows
read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters as
part of the Lambda environment variables. Ensure that other AWS users do not have read and write access to
the Lambda function configuration.

**B.** Create an IAM role that includes Lambda as a trusted service. Attach a policy to the role that allows read and
write access to the DynamoDB table. Update the configuration of the Lambda function to use the new role as
the execution role.

**C.** Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows
read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters in
AWS Systems Manager Parameter Store as secure string parameters. Update the Lambda function code to
retrieve the secure string parameters before connecting to the DynamoDB table.

**D.** Create an IAM role that includes DynamoDB as a trusted service. Attach a policy to the role that allows read
and write access from the Lambda function. Update the code of the Lambda function to attach to the new role
as an execution role.

---

## Question 429

The following IAM policy is attached to an IAM group. This is the only policy applied to the group.

What are the effective IAM permissions of this policy for group members?

**A.** Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the
Allow permission are not applied.

**B.** Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in
with multi-factor authentication (MFA).

**C.** Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for all Regions
when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2
action.

**D.** Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1
Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other
Amazon EC2 action within the us-east-1 Region.

---

## Question 430

A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files
must be converted into images and must be made available as soon as possible for the automatic generation of
graphical reports.
The images become irrelevant after 1 month, but the .csv files must be kept to train machine learning (ML) models
twice a year. The ML trainings and audits are planned weeks in advance.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Launch an Amazon EC2 Spot Instance that downloads the .csv files every hour, generates the image files, and
uploads the images to the S3 bucket.

**B.** Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3
bucket. Invoke the Lambda function when a .csv file is uploaded.

**C.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3
Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.

**D.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3
Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image
files after 30 days.

**E.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3
Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image
files in Reduced Redundancy Storage (RRS).

---

## Question 431

A company has developed a new video game as a web application. The application is in a three-tier architecture in
a VPC with Amazon RDS for MySQL in the database layer. Several players will compete concurrently online. The
game’s developers want to display a top-10 scoreboard in near-real time and offer the ability to stop and restore
the game while preserving the current scores.
What should a solutions architect do to meet these requirements?

**A.** Set up an Amazon ElastiCache for Memcached cluster to cache the scores for the web application to display.

**B.** Set up an Amazon ElastiCache for Redis cluster to compute and cache the scores for the web application to
display.

**C.** Place an Amazon CloudFront distribution in front of the web application to cache the scoreboard in a section
of the application.

**D.** Create a read replica on Amazon RDS for MySQL to run queries to compute the scoreboard and serve the
read traffic to the web application.

---

## Question 432

An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company
will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team
wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data
directly in its business intelligence dashboards.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to
visualize the data.

**B.** Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.

**C.** Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use
Amazon OpenSearch Service to visualize the data.

**D.** Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to
visualize the data.

---

## Question 433

A company is running its production and nonproduction environment workloads in multiple AWS accounts. The
accounts are in an organization in AWS Organizations. The company needs to design a solution that will prevent
the modification of cost usage tags.
Which solution will meet these requirements?

**A.** Create a custom AWS Config rule to prevent tag modification except by authorized principals.

**B.** Create a custom trail in AWS CloudTrail to prevent tag modification.

**C.** Create a service control policy (SCP) to prevent tag modification except by authorized principals.

**D.** Create custom Amazon CloudWatch logs to prevent tag modification.

---

## Question 434

A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an
Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to
ensure the application can be made available in anotherAWS Region with minimal downtime.
What should a solutions architect do to meet these requirements with the LEAST amount of downtime?

**A.** Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB
table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.

**B.** Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to
be launched when needed Configure DNS failover to point to the new disaster recovery Region's load balancer.

**C.** Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when
needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster
recovery Region's load balancer.

**D.** Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB
table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates
Amazon Route 53 pointing to the disaster recovery load balancer.

---

## Question 435

A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The
database is 20 TB in size. The company wants to complete the migration with minimal downtime.
Which solution will migrate the database MOST cost-effectively?

**A.** Order an AWS Snowball Edge Storage Optimized device. Use AWS Database Migration Service (AWS DMS)
with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes.
Send the Snowball Edge device to AWS to finish the migration and continue the ongoing replication.

**B.** Order an AWS Snowmobile vehicle. Use AWS Database Migration Service (AWS DMS) with AWS Schema
Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowmobile vehicle back
to AWS to finish the migration and continue the ongoing replication.

**C.** Order an AWS Snowball Edge Compute Optimized with GPU device. Use AWS Database Migration Service
(AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes.
Send the Snowball device to AWS to finish the migration and continue the ongoing replication

**D.** Order a 1 GB dedicated AWS Direct Connect connection to establish a connection with the data center. Use
AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the
database with replication of ongoing changes.

---

## Question 436

A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The
company successfully launched a new product. The workload on the database has increased. The company wants
to accommodate the larger workload without adding infrastructure.
Which solution will meet these requirements MOST cost-effectively?

**A.** Buy reserved DB instances for the total workload. Make the Amazon RDS for PostgreSQL DB instance larger.

**B.** Make the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance.

**C.** Buy reserved DB instances for the total workload. Add another Amazon RDS for PostgreSQL DB instance.

**D.** Make the Amazon RDS for PostgreSQL DB instance an on-demand DB instance.

---

## Question 437

A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB)
in an Auto Scaling group. The site is experiencing performance issues related to a high request rate from
illegitimate external systems with changing IP addresses. The security team is worried about potential DDoS
attacks against the website. The company must block the illegitimate incoming requests in a way that has a
minimal impact on legitimate users.
What should a solutions architect recommend?

**A.** Deploy Amazon Inspector and associate it with the ALB.

**B.** Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule.

**C.** Deploy rules to the network ACLs associated with the ALB to block the incomingtraffic.

**D.** Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty.

---

## Question 438

A company wants to share accounting data with an external auditor. The data is stored in an Amazon RDS DB
instance that resides in a private subnet. The auditor has its own AWS account and requires its own copy of the
database.
What is the MOST secure way for the company to share the database with the auditor?

**A.** Create a read replica of the database. Configure IAM standard database authentication to grant the auditor
access.

**B.** Export the database contents to text files. Store the files in an Amazon S3 bucket. Create a new IAM user for
the auditor. Grant the user access to the S3 bucket.

**C.** Copy a snapshot of the database to an Amazon S3 bucket. Create an IAM user. Share the user's keys with the
auditor to grant access to the object in the S3 bucket.

**D.** Create an encrypted snapshot of the database. Share the snapshot with the auditor. Allow access to the AWS
Key Management Service (AWS KMS) encryption key.

---

## Question 439

A solutions architect configured a VPC that has a small range of IP addresses. The number of Amazon EC2
instances that are in the VPC is increasing, and there is an insufficient number of IP addresses for future
workloads.
Which solution resolves this issue with the LEAST operational overhead?

**A.** Add an additional IPv4 CIDR block to increase the number of IP addresses and create additional subnets in
the VPC. Create new resources in the new subnets by using the new CIDR.

**B.** Create a second VPC with additional subnets. Use a peering connection to connect the second VPC with the
first VPC Update the routes and create new resources in the subnets of the second VPC.

**C.** Use AWS Transit Gateway to add a transit gateway and connect a second VPC with the first VPUpdate the
routes of the transit gateway and VPCs. Create new resources in the subnets of the second VPC.

**D.** Create a second VPC. Create a Site-to-Site VPN connection between the first VPC and the second VPC by
using a VPN-hosted solution on Amazon EC2 and a virtual private gateway. Update the route between VPCs to
the traffic through the VPN. Create new resources in the subnets of the second VPC.

---

## Question 440

A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB
instance at the end of the test cycle, a solutions architect created two backups. The solutions architect created
the first backup by using the mysqldump utility to create a database dump. The solutions architect created the
second backup by enabling the final DB snapshot option on RDS termination.
The company is now planning for a new test cycle and wants to create a new DB instance from the most recent
backup. The company has chosen a MySQL-compatible edition ofAmazon Aurora to host the DB instance.
Which solutions will create the new DB instance? (Choose two.)

**A.** Import the RDS snapshot directly into Aurora.

**B.** Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.

**C.** Upload the database dump to Amazon S3. Then import the database dump into Aurora.

**D.** Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora.

**E.** Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import
the database dump into Aurora.

---

## Question 441

A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load
Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes
that the Auto Scaling group launches more On-Demand Instances when the application's end users access high
volumes of static web content. The company wants to optimize cost.
What should a solutions architect do to redesign the application MOST cost-effectively?

**A.** Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.

**B.** Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.

**C.** Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket.

**D.** Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents.

---

## Question 442

A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake
Formation to manage its data lake. The company's data science team wants to securely share selective data from
its accounts with the company's engineering team for analytical purposes.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Copy the required data to a common account. Create an IAM access role in that account. Grant access by
specifying a permission policy that includes users from the engineering team accounts as trusted entities.

**B.** Use the Lake Formation permissions Grant command in each account where the data is stored to allow the
required engineering team users to access the data.

**C.** Use AWS Data Exchange to privately publish the required data to the required engineering team accounts.

**D.** Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the
required data to the engineering team accounts.

---

## Question 443

A company wants to host a scalable web application on AWS. The application will be accessed by users from
different geographic regions of the world. Application users will be able to download and upload unique data up to
gigabytes in size. The development team wants a cost-effective solution to minimize upload and download latency
and maximize performance.
What should a solutions architect do to accomplish this?

**A.** Use Amazon S3 with Transfer Acceleration to host the application.

**B.** Use Amazon S3 with CacheControl headers to host the application.

**C.** Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application.

**D.** Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application.

---

## Question 444

A company has hired a solutions architect to design a reliable architecture for its application. The application
consists of one Amazon RDS DB instance and two manually provisioned Amazon EC2 instances that run web
servers. The EC2 instances are located in a single Availability Zone.
An employee recently deleted the DB instance, and the application was unavailable for 24 hours as a result. The
company is concerned with the overall reliability of its environment.
What should the solutions architect do to maximize reliability of the application's infrastructure?

**A.** Delete one EC2 instance and enable termination protection on the other EC2 instance. Update the DB
instance to be Multi-AZ, and enable deletion protection.

**B.** Update the DB instance to be Multi-AZ, and enable deletion protection. Place the EC2 instances behind an
Application Load Balancer, and run them in an EC2 Auto Scaling group across multiple Availability Zones.

**C.** Create an additional DB instance along with an Amazon API Gateway and an AWS Lambda function.
Configure the application to invoke the Lambda function through API Gateway. Have the Lambda function write
the data to the two DB instances.

**D.** Place the EC2 instances in an EC2 Auto Scaling group that has multiple subnets located in multiple
Availability Zones. Use Spot Instances instead of On-Demand Instances. Set up Amazon CloudWatch alarms to
monitor the health of the instances Update the DB instance to be Multi-AZ, and enable deletion protection.

---

## Question 445

A company is storing 700 terabytes of data on a large network-attached storage (NAS) system in its corporate
data center. The company has a hybrid environment with a 10 Gbps AWS Direct Connect connection.
After an audit from a regulator, the company has 90 days to move the data to the cloud. The company needs to
move the data efficiently and without disruption. The company still needs to be able to access and update the data
during the transfer window.
Which solution will meet these requirements?

**A.** Create an AWS DataSync agent in the corporate data center. Create a data transfer task Start the transfer to
an Amazon S3 bucket.

**B.** Back up the data to AWS Snowball Edge Storage Optimized devices. Ship the devices to an AWS data center.
Mount a target Amazon S3 bucket on the on-premises file system.

**C.** Use rsync to copy the data directly from local storage to a designated Amazon S3 bucket over the Direct
Connect connection.

**D.** Back up the data on tapes. Ship the tapes to an AWS data center. Mount a target Amazon S3 bucket on the
on-premises file system.

---

## Question 446

A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to
retain all new and existing data in Amazon S3 for 7 years.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Turn on the S3 Versioning feature for the S3 bucket. Configure S3 Lifecycle to delete the data after 7 years.
Configure multi-factor authentication (MFA) delete for all S3 objects.

**B.** Turn on S3 Object Lock with governance retention mode for the S3 bucket. Set the retention period to expire
after 7 years. Recopy all existing objects to bring the existing data into compliance.

**C.** Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire
after 7 years. Recopy all existing objects to bring the existing data into compliance.

**D.** Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire
after 7 years. Use S3 Batch Operations to bring the existing data into compliance.

---

## Question 447

A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API
Gateway. The company wants to deploy the application across multiple AWS Regions to provide Regional failover
capabilities.
What should a solutions architect do to route traffic to multiple Regions?

**A.** Create Amazon Route 53 health checks for each Region. Use an active-active failover configuration.

**B.** Create an Amazon CloudFront distribution with an origin for each Region. Use CloudFront health checks to
route traffic.

**C.** Create a transit gateway. Attach the transit gateway to the API Gateway endpoint in each Region. Configure
the transit gateway to route requests.

**D.** Create an Application Load Balancer in the primary Region. Set the target group to point to the API Gateway
endpoint hostnames in each Region.

---

## Question 448

A company has two VPCs named Management and Production. The Management VPC uses VPNs through a
customer gateway to connect to a single device in the data center. The Production VPC uses a virtual private
gateway with two attached AWS Direct Connect connections. The Management and Production VPCs both use a
single VPC peering connection to allow communication between the applications.
What should a solutions architect do to mitigate any single point of failure in this architecture?

**A.** Add a set of VPNs between the Management and Production VPCs.

**B.** Add a second virtual private gateway and attach it to the Management VPC.

**C.** Add a second set of VPNs to the Management VPC from a second customer gateway device.

**D.** Add a second VPC peering connection between the Management VPC and the Production VPC.

---

## Question 449

A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of
limited resources for the database, backup administration, and data center maintenance. The application uses
third-party database features that require privileged access.
Which solution will help the company migrate the database to AWS MOST cost-effectively?

**A.** Migrate the database to Amazon RDS for Oracle. Replace third-party features with cloud services.

**B.** Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support thirdparty features.

**C.** Migrate the database to an Amazon EC2 Amazon Machine Image (AMI) for Oracle. Customize the database
settings to support third-party features.

**D.** Migrate the database to Amazon RDS for PostgreSQL by rewriting the application code to remove
dependency on Oracle APEX.

---

## Question 450

A company has a three-tier web application that is in a single server. The company wants to migrate the application
to the AWS Cloud. The company also wants the application to align with the AWS Well-Architected Framework
and to be consistent with AWS recommended best practices for security, scalability, and resiliency.
Which combination of solutions will meet these requirements? (Choose three.)

**A.** Create a VPC across two Availability Zones with the application's existing architecture. Host the application
with existing architecture on an Amazon EC2 instance in a private subnet in each Availability Zone with EC2
Auto Scaling groups. Secure the EC2 instance with security groups and network access control lists (network
ACLs).

**B.** Set up security groups and network access control lists (network ACLs) to control access to the database
layer. Set up a single Amazon RDS database in a private subnet.

**C.** Create a VPC across two Availability Zones. Refactor the application to host the web tier, application tier, and
database tier. Host each tier on its own private subnet with Auto Scaling groups for the web tier and application
tier.

**D.** Use a single Amazon RDS database. Allow database access only from the application tier security group.

**E.** Use Elastic Load Balancers in front of the web tier. Control access by using security groups containing
references to each layer's security groups.

**F.** Use an Amazon RDS database Multi-AZ cluster deployment in private subnets. Allow database access only
from application tier security groups.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 401

**Answer:** **A**

**Explanation:**

The correct answer is A because it directly addresses the requirements for high availability, resilience, and
scalability while avoiding single points of failure and preventing data loss.

Here's why:
Application Servers in Auto Scaling Group across multiple AZs: Deploying application servers across
multiple Availability Zones (AZs) ensures that if one AZ fails, the application remains available in other AZs.
An Auto Scaling group dynamically adjusts the number of EC2 instances based on demand, ensuring
scalability and resilience. https://aws.amazon.com/autoscaling/
Amazon RDS DB Instance in Multi-AZ configuration: Using Amazon RDS with a Multi-AZ configuration
replicates the database to a standby instance in a different AZ. In case of a failure of the primary database
instance, RDS automatically fails over to the standby, minimizing downtime and preventing data loss. This
addresses the company's concern regarding database server crashes and data loss due to power outages.
https://aws.amazon.com/rds/features/multi-az/
Let's analyze why the other options are not optimal:

**B:** Using a single AZ creates a single point of failure. EC2 Auto Recovery only restarts an instance on different
hardware within the same AZ; it doesn't provide cross-AZ redundancy. Deploying the database on an EC2
instance without proper replication management is also a risk.

**C:** While using Auto Scaling across multiple AZs is good, relying on manually promoting a read replica to
replace the primary database instance introduces manual intervention and longer recovery times, which are
not ideal for high availability and resilience. The read replica being in a single AZ also presents a single point
of failure for the replicated database.

**D:** Using EBS Multi-Attach is not recommended for most relational database workloads as it can lead to data
corruption if not managed very carefully. Setting up database replication on EC2 instances manually can be
complex and error-prone compared to using RDS Multi-AZ, which provides managed failover and replication.

In summary, option A provides a fully managed, highly available, and scalable solution using AWS services
designed for these purposes, meeting all the stated requirements.

---

## Question 402

**Answer:** **A**

**Explanation:**

The problem indicates that data is being lost between Kinesis Data Streams and S3. With default settings,
Kinesis Data Streams retains data for 24 hours. Since the data is only consumed and written to S3 every other
day, it's highly probable that the data older than 24 hours is being discarded by Kinesis before it can be
processed and stored in S3. Increasing the retention period allows Kinesis Data Streams to store the data for
a longer duration, ensuring that the BI process can access and write it to S3 even when run every other day.

**Option A** directly addresses this data retention issue by modifying the Kinesis Data Streams default settings.
Increasing the retention period to at least 48 hours would ensure that the data is available when the
application consumes and writes it to S3.

**Option B**, using KPL, optimizes data ingestion into Kinesis Data Streams by aggregating records and
improving throughput, but it doesn't directly solve the data loss problem caused by insufficient retention.

**Option C**, increasing the number of shards, addresses throughput and scaling issues in Kinesis Data Streams
but won't prevent data loss if the data retention period is too short. Shards influence the parallelism of the
data stream processing, but do not impact data retention.

**Option D**, enabling S3 Versioning, helps maintain a history of objects in S3 and prevent accidental data loss
within S3, but does not retrieve data already lost between Kinesis Data Streams and S3. It is useful after data
has been ingested and to recover from overwrite or deletion.

Therefore, modifying the data retention period in Kinesis Data Streams is the most direct and effective
solution to prevent data loss in this scenario.
Relevant Link:
Amazon Kinesis Data Streams Data Retention

---

## Question 403

**Answer:** **D**

**Explanation:**

The correct approach to granting a Lambda function the necessary permissions to interact with other AWS
services, like S3, is to use an IAM execution role. Here's why:
IAM execution roles provide a secure and best-practice method for granting permissions to AWS resources
like Lambda functions. An IAM role is an IAM entity that defines a set of permissions for making AWS service
requests. Attaching an IAM role to the Lambda function gives the function temporary credentials to assume
the role and perform actions permitted by the role's policies. This is superior to using hardcoded IAM
credentials for several reasons.

**Option A**, adding permissions to the Lambda function's resource policy, is typically used for granting
permissions to other AWS accounts or services to invoke the Lambda function itself, not for the Lambda
function to access other services.

**Option B**, creating a signed request using existing IAM credentials within the Lambda function, is strongly
discouraged due to security risks. Embedding IAM credentials directly in code exposes them, potentially
leading to unauthorized access if the code is compromised. Managing credential rotation also becomes
difficult and cumbersome. Hardcoding AWS credentials in an application is considered a severe security

vulnerability.

**Option C**, creating a new IAM user and using its credentials in the Lambda function, suffers from the same
security issues as option B. It's poor practice to embed IAM user credentials directly in Lambda code.

**Option D**, creating an IAM execution role and attaching it to the Lambda function, is the recommended
approach because it provides a secure, manageable, and best-practice method for granting the Lambda
function the necessary permissions. AWS manages the temporary credentials associated with the role,
automatically rotating them and removing the need for manual credential management in the code. This
aligns with the principle of least privilege and promotes secure application design. The role-based approach is
far more secure and easier to manage. The function assumes the role dynamically when it is executed.
Here are some relevant resources for more information:
IAM Roles for AWS Lambda: https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-executionrole.html
Security best practices in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
AWS IAM documentation: https://docs.aws.amazon.com/IAM/index.html

---

## Question 404

**Answer:** **D**

**Explanation:**

The correct answer is D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests
to the queue. Configure the queue as an event source for Lambda.

Here's a detailed justification:
The issue described indicates an event-driven architecture struggling to handle a surge in document uploads
to S3, overwhelming the Lambda function. Direct invocation of Lambda by S3 events is susceptible to event
loss and throttling, especially during peak loads.

**Option D** introduces Amazon SQS as an intermediary buffer, effectively decoupling the S3 events from the
Lambda function invocations. When an S3 object is created, instead of directly invoking the Lambda function,
a message is sent to the SQS queue. The Lambda function is then triggered by the SQS queue. This approach
offers several benefits:

1. Buffering and Scalability: SQS acts as a buffer, absorbing the surge in requests. SQS is designed to
handle high volumes of messages reliably. It scales automatically, preventing event loss during peak
loads.

2. Reliability: SQS ensures guaranteed message delivery at least once. If the Lambda function fails to

process a message, it remains in the queue and can be retried. This prevents data loss and ensures all
documents are eventually processed.

3. Asynchronous Processing: Decoupling through SQS allows the S3 bucket to continue accepting
uploads without waiting for the Lambda function to process each one immediately. This improves the
application's responsiveness.

4. Error Handling: If the Lambda function consistently fails to process a specific document, SQS can be
configured with a dead-letter queue (DLQ) to store the problematic messages for later investigation
and resolution.

**Option A** (increasing Lambda timeout) might help for individual documents taking longer to process, but it
doesn't address the fundamental issue of potential event loss or the overwhelming of Lambda during a surge.

**Option B** (S3 replication) doesn't address the processing issue at all. Replication is for data redundancy and
disaster recovery, not for handling event processing loads.

**Option C** (adding another Lambda function with load balancing) is a valid approach for scaling Lambda, but
directly load balancing from S3 events is complex. SQS offers a more robust and manageable way to achieve
horizontal scaling and resilience. SQS's built-in mechanisms for retry and DLQ make it a better solution in this
scenario. While increased concurrency in Lambda can help (via Reserved Concurrency or Provisioned
Concurrency), SQS as the intermediary provides the crucial buffer for bursts of S3 events.

In summary, using SQS provides a reliable and scalable solution for processing S3 events by buffering
requests, ensuring delivery, and enabling asynchronous processing, which are critical for handling surges in
document uploads and preventing event loss.

---

## Question 405

**Answer:** **DE**

**Explanation:**

Here's a detailed justification for why options D and E are the correct choices, and why the others are not:

**D.** Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization.
Justification: Target tracking scaling policies automatically adjust the number of EC2 instances in the Auto

Scaling group to maintain a specified target value for a chosen metric, such as CPU utilization. During working
hours when traffic increases, CPU utilization on the existing instances will rise. The scaling policy responds by
launching more instances to keep the CPU utilization near the target value, thereby ensuring application
performance remains consistent despite increasing load. This dynamic scaling is essential for meeting
fluctuating demand within working hours.
Why it works: This approach provides a reactive, automated scaling mechanism. It eliminates the need for
manual intervention or constant monitoring. If the instances' CPU utilization increases due to higher request
loads, the auto-scaling group launches new instances to distribute that load and reduce the CPU per instance,
keeping the performance level consistent.
Relevant Concept: Auto Scaling Groups, Target Tracking Scaling.
Authoritative Link: https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-targettracking.html

**E.** Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to
zero for weekends. Revert to the default values at the start of the week.
Justification: Since the system is not required to operate on weekends, scheduled scaling is a perfect fit. By
setting the minimum, maximum, and desired capacity to zero for weekends, all instances will be terminated,
eliminating unnecessary costs. At the start of the week, the scheduled scaling will revert the capacity
settings to the appropriate values, ensuring the system is ready to handle the weekday traffic. This allows for
efficient cost management by only running resources when needed.
Why it works: Scheduled scaling allows you to proactively manage the capacity of your Auto Scaling group
based on predictable patterns like workdays versus weekends. This ensures that you don't pay for compute
capacity when it's not needed.
Relevant Concept: Auto Scaling Groups, Scheduled Scaling.
Authoritative Link: https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html

Why the other options are incorrect:

**A.** Use AWS Auto Scaling to adjust the ALB capacity based on request rate. The ALB automatically scales to
handle varying request rates. Auto Scaling is used for the EC2 instances behind the ALB, not the ALB itself.

**B.** Use AWS Auto Scaling to scale the capacity of the VPC internet gateway. Internet Gateways are
horizontally scaled and redundant, so they don't need to be scaled using Auto Scaling.

**C.** Launch the EC2 instances in multiple AWS Regions to distribute the load across Regions. While this is
useful for high availability and disaster recovery, it's overkill for a demonstration environment that only needs
to be shut down on weekends. Moreover, it is not cost-effective. Distributing across regions increases the
complexity and cost significantly more than simply stopping instances when they are not needed. The
problem statement focuses on scaling to meet demand within working hours and avoiding costs on weekends,
making a multi-region deployment unnecessary for the given constraints.

---

## Question 406

**Answer:** **CD**

**Explanation:**

The correct answer is CD. Here's why:

**C:** Create a security group for the web servers in the public subnet. Add a rule to allow traffic from
0.0.0.0/0 on port 443.
This step is crucial for allowing internet traffic to reach the web servers on port 443 (HTTPS). Security groups
act as virtual firewalls at the instance level. Allowing 0.0.0.0/0 (all IP addresses) on port 443 enables external
users to connect to the web servers via HTTPS. Without this rule, users wouldn't be able to access the web
application.

**D:** Create a security group for the DB instance. Add a rule to allow traffic from the web servers’ security
group on port 3306.
This step ensures that only the web servers can access the database on port 3306 (MySQL's default port). By
referencing the web servers' security group as the source in the DB instance's security group rule, you're
specifically granting access only to instances associated with that security group. This is a more secure
approach than using CIDR blocks, as it automatically adjusts if the web server's IP address changes due to
scaling or instance replacement. This principle of least privilege restricts access and hardens security.

Why other options are incorrect:

**A:** Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port
3306. Network ACLs operate at the subnet level and are stateless. While you could theoretically use them,
security groups provide a more granular and easier-to-manage solution for this scenario. Denying outbound
traffic from the public subnet is not the solution. The database traffic flows from the public subnet (web
servers) to the database subnet (RDS instance). Blocking outbound traffic from the public subnet wouldn't
prevent the access. Security Groups should be configured on the DB instance.

**B:** Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block
on port 3306. While this allows communication, it's less secure than referencing the web servers' security
group. If the web server's IP changes, the security group rule based on CIDR would need manual updating. The
security group referencing provides a dynamic association between the web servers and the DB instance.

**E:** Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web
servers’ security group on port 3306. While the intended outcome is correct (restrict access), security group
rules operate as "allow" rules. There are no explicit "deny" rules in security groups (except the implicit deny
for everything not explicitly allowed).

---

## Question 407

**Answer:** **D**

**Explanation:**

The correct answer is D because Amazon FSx for Lustre provides a fully managed, high-performance file
system optimized for compute-intensive workloads, including gaming applications. This service inherently
supports Lustre clients, fulfilling the requirement to access data using them.

**Option A** is incorrect because AWS DataSync is primarily a data transfer service, not a file system. It doesn't
provide a mountable file system directly.

**Option B** is incorrect because AWS Storage Gateway file gateway translates between cloud storage (like S3)
and on-premises file protocols like NFS or SMB. It does not natively support the Lustre protocol.

**Option C** is incorrect because Amazon EFS is a fully managed NFS file system suitable for a wide range of
workloads, but it does not support the Lustre protocol.

Therefore, only Amazon FSx for Lustre meets the requirements of a fully managed solution with native Lustre
client support, making it the most suitable choice for the gaming application's shared storage needs. FSx for
Lustre's architecture is specifically designed for high-performance computing and can deliver the low latency
and high throughput required by demanding gaming applications.
References:
Amazon FSx for Lustre: https://aws.amazon.com/fsx/lustre/
AWS DataSync: https://aws.amazon.com/datasync/
AWS Storage Gateway: https://aws.amazon.com/storagegateway/
Amazon EFS: https://aws.amazon.com/efs/

---

## Question 408

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages AWS Global Accelerator for low latency and failover, and
Network Load Balancers (NLBs) for UDP traffic.

Here's a detailed justification:
Low Latency with AWS Global Accelerator: AWS Global Accelerator uses the AWS global network to direct
traffic to the optimal endpoint based on location, network conditions, and health. This significantly reduces
latency for geographically dispersed devices, as traffic is routed through the nearest AWS edge location,
improving the UDP data transmission speed. https://aws.amazon.com/global-accelerator/
UDP Support with Network Load Balancer (NLB): NLBs are designed to handle UDP traffic, which is crucial
for the application's data reception. Application Load Balancers (ALBs) only support HTTP/HTTPS and cannot
handle UDP. https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html
Rapid Failover: Global Accelerator provides rapid failover capabilities. If one AWS Region becomes
unavailable, Global Accelerator automatically redirects traffic to the healthy NLB in the other Region,
ensuring business continuity.
ECS with Fargate for Processing: ECS with Fargate provides a scalable and managed container orchestration
service where the data processing logic can be hosted. This allows the application to process the incoming
data immediately, as required.
Eliminating other options reasoning:
A & D: Route 53 failover, although capable of failover, relies on DNS propagation, which is slower than the
near-instantaneous failover of Global Accelerator. Furthermore, option D uses ALB, which cannot handle UDP
traffic.

**C:** **Option C** uses ALB, which cannot handle UDP traffic and therefore is not the optimal choice.

---

## Question 409

**Answer:** **C**

**Explanation:**

The most resilient and durable replacement for the on-premises file share in this scenario is Amazon FSx for
Windows File Server (**Option C**).

Here's why:
Windows Compatibility: The application is a Windows IIS web application that currently relies on a file share.
FSx for Windows File Server provides native support for the SMB protocol and NTFS file system, ensuring
seamless compatibility without requiring application code changes. This compatibility minimizes migration
effort and potential issues.
Integration with EC2 and Active Directory: FSx for Windows File Server seamlessly integrates with EC2
instances and existing Active Directory environments. This simplifies user authentication and authorization,
access control, and overall management.
High Availability and Durability: FSx for Windows File Server offers multi-AZ deployment options, providing
high availability and data redundancy across multiple Availability Zones. This helps ensure the application
remains available even in the event of an AZ failure. It uses Windows Server failover clustering for high
availability.
Scalability and Performance: FSx for Windows File Server offers scalable storage capacity and performance
options, allowing the application to handle increasing workloads without performance bottlenecks. It's
designed to support enterprise-grade workloads.
RDS (**Option A**): Amazon RDS is a relational database service and is not designed to serve as a generalpurpose file share. Migrating a file share to a database would be highly complex and inefficient.
AWS Storage Gateway (**Option B**): Storage Gateway connects on-premises applications to cloud storage.
While it can provide access to AWS storage, it still requires an on-premises component, negating the goal of
migrating the file share to AWS. It introduces added latency and management overhead.
Amazon EFS (**Option D**): Amazon EFS is a network file system designed primarily for Linux-based
applications. While it can be used with Windows EC2 instances, it requires additional configuration and
doesn't natively support the SMB protocol or Active Directory integration as seamlessly as FSx for Windows
File Server.

In summary, FSx for Windows File Server is the best option because it offers native Windows compatibility,
high availability, durability, scalability, and seamless integration with EC2 and Active Directory, making it the
most suitable replacement for the on-premises file share.

---

## Question 410

**Answer:** **B**

**Explanation:**

The correct answer is B. Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2
instances.
Here's why this is the optimal solution and why the other options are incorrect:
Why **Option B** is Correct: EBS encryption is configured at the volume level. When you create an EBS volume
and specify encryption, all data at rest on the volume, all data moving between the EC2 instance and the
volume, and all snapshots created from the volume are encrypted. This fulfills the requirement of encrypting
all data written to EBS volumes at rest.
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
Why **Option A** is Incorrect: IAM roles are used to grant permissions to EC2 instances to access other AWS
services. While you can control access to KMS keys used for EBS encryption via IAM, simply attaching an IAM
role that "specifies EBS encryption" doesn't inherently encrypt existing or newly created EBS volumes. IAM
controls who can use encryption, not if encryption is enforced by default on EBS volumes.
Why **Option C** is Incorrect: EC2 instance tags are metadata applied to EC2 instances for organization and
automation. They do not enforce EBS encryption. Tags are used for cost allocation, automation scripts, etc.,
but they don't have a direct impact on encryption settings for associated resources.
Why **Option D** is Incorrect: While an AWS KMS key policy can enforce encryption, it must be paired with EBS
volume creation that uses the KMS key. This is only effective when creating new EBS volumes with the
enforcement key; existing unencrypted EBS volumes would remain unencrypted. It also wouldn't ensure that
newly created EBS volumes are always encrypted by default, unless coupled with other mechanisms. Option
B provides direct encryption at the volume creation step.

Therefore, creating encrypted EBS volumes directly at the time of their creation is the most straightforward
and reliable method to ensure all data written to those volumes is encrypted at rest, satisfying the company's
requirement. It ensures every created EBS volume is encrypted, by default, during the volume creation
process.

---

## Question 411

**Answer:** **C**

**Explanation:**

The correct answer is C, MySQL-compatible Amazon Aurora Serverless. Here's a detailed justification:
Aurora Serverless v2 is ideal for applications with sporadic and unpredictable workloads. It automatically
scales the database capacity up or down based on the application's needs, eliminating the need to provision
and manage database servers. This on-demand scaling aligns perfectly with the company's heavy monthly
usage, moderate weekly usage, and unpredictable usage during the week. It provides cost optimization by
only charging for the compute and storage resources consumed.
Amazon RDS for MySQL (option B) would require the company to provision a specific instance size, which
might lead to over-provisioning during periods of low usage, resulting in unnecessary costs. While RDS can
scale, it doesn't automatically scale to zero like Serverless does during periods of inactivity.
Amazon DynamoDB (option A) is a NoSQL database and would require significant application modifications to
be compatible, which contradicts the requirement of not needing database modifications. DynamoDB's data
model and query language are fundamentally different from MySQL.
MySQL deployed on Amazon EC2 in an Auto Scaling group (option D) would involve significantly more
operational overhead for managing the database, including patching, backups, and scaling, compared to
Aurora Serverless. Also, while Auto Scaling addresses the compute scaling for the web tier, it doesn't
inherently solve the database scaling problem. It requires more configurations and scripts for the database
layer.
Aurora Serverless’s MySQL compatibility allows for a smooth migration without any code changes. Also,
Aurora offers improved performance and availability over standard MySQL.

In summary, Aurora Serverless v2 offers the best combination of cost-effectiveness, automatic scaling,
minimal management overhead, and MySQL compatibility, making it the most suitable choice for the given
scenario.

---

## Question 412

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a comprehensive and proactive approach to preventing accidental
public exposure of S3 objects at the account level, with a mechanism to ensure the configuration isn't altered.

Here's a detailed justification:
S3 Block Public Access (BPA) at the Account Level: S3 BPA is designed specifically to prevent public access
to S3 buckets and objects. Applying it at the account level ensures that all new and existing buckets within
the account adhere to the block public access settings. This is the primary preventative measure. It blocks
public access through bucket policies, ACLs, or both.
AWS Organizations and Service Control Policies (SCPs): AWS Organizations enables you to centrally
manage multiple AWS accounts. SCPs are policies that you can attach to the root, organizational units (OUs),
or individual accounts within your organization. By creating an SCP that prevents IAM users from disabling the
S3 BPA setting, you establish a guardrail. This ensures that even IAM users with otherwise sufficient
permissions cannot inadvertently (or maliciously) bypass the account-level security measure. This ensures
compliance across all accounts managed within the AWS Organizations.

Why other options are less suitable:

**Option A** (GuardDuty): GuardDuty is a threat detection service. While it can identify publicly accessible
buckets, it's a reactive measure. The objects might be publicly accessible for a period before GuardDuty
detects it.

**Option B** (Trusted Advisor): Similar to GuardDuty, Trusted Advisor is more of an advisory tool. It provides
recommendations but doesn't actively prevent public access. It also requires manual intervention, increasing
the risk of delayed remediation.

**Option C** (Resource Access Manager and SNS): AWS RAM shares AWS resources with other AWS accounts
or within your organization. It's not directly related to preventing public access to S3 buckets. While SNS
could trigger a Lambda function, this setup is more complex and less effective than directly using S3 BPA and
SCPs.

In summary, option D provides a robust, proactive, and centrally managed solution that directly addresses the
problem of accidental public exposure of S3 objects across an entire AWS account. It employs both
preventive controls (S3 BPA) and enforcement mechanisms (SCPs) to ensure consistent security.

---

## Question 413

**Answer:** **B**

**Explanation:**

The correct answer is B. Configure the web instance to send email through Amazon Simple Email Service
(Amazon SES).

Here's a detailed justification:
The primary problem is the delay in sending emails (marketing and order confirmations) due to increasing
traffic impacting the web application performance. **Option B** proposes using Amazon SES, which is a fully
managed email sending service. This offloads the email sending responsibility from the web application
servers. By using SES, the web application can quickly hand off email requests to AWS without blocking
threads or consuming resources needed to serve web traffic. This reduces the application's workload and
improves responsiveness. SES is designed for high deliverability and scalability, minimizing the operational
overhead of managing email infrastructure, including dealing with bounce handling, spam filtering, and
reputation management.

**Option A** and D involve creating a separate EC2-based application tier for email processing. While it might
seem like a solution, this introduces operational complexity and overhead, including managing and scaling
these instances. It also doesn't address the underlying email delivery issues that a managed service like SES
is designed to handle. It adds more servers to manage instead of removing workload from current servers.

**Option C** suggests using Amazon SNS. While SNS is a messaging service, it is not designed for sending
transactional emails like order confirmations or marketing emails. SNS is primarily used for push notifications,
application-to-application (A2A) and application-to-person (A2P) messaging. Using SNS for this purpose
would be an inappropriate and inefficient approach.

Therefore, using Amazon SES is the most efficient and scalable solution for handling email sending, reducing
operational overhead, and improving the overall performance of the e-commerce application. It aligns
perfectly with the company's requirements.

---

## Question 414

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution, along with supporting explanations and
links:
The core requirement is near-real-time data storage in S3 with minimal administrative overhead. **Option B**,
leveraging Amazon S3 File Gateway, achieves this most effectively. S3 File Gateway provides a local cache
for frequently accessed data, ensuring fast access for the business system. It integrates seamlessly with the
existing network share setup, minimizing disruption. The business system only needs to be reconfigured to
write to the new S3 File Gateway network share, a straightforward change.
The gateway automatically and securely transfers data to S3, eliminating the need for complex scripting or
scheduling. Data is transferred asynchronously, minimizing impact on the business system's performance. The
automatic transfer mechanism reduces administrative overhead, as the file transfer process is handled by the
gateway. This solution avoids building custom data transfer pipelines or managing periodic data transfer jobs,
thereby streamlining the entire process.

**Option A** requires scheduling tasks with AWS DataSync which increases the complexity and overhead. While
DataSync is a good option for migrating large amounts of data, in this case we need to consider a continuous
data transfer with near-real time constraints. It is not optimal to schedule the task to only run at the end of
each day.

**Option C** also involves DataSync but introduces the added complexity of managing an application interacting
with the DataSync API, further increasing administrative burden. This approach demands more development
and maintenance effort.

**Option D**, using AWS Transfer for SFTP, requires managing an SFTP server and writing a script to monitor the
network share, increasing complexity and overhead. SFTP is primarily intended for secure file transfer by
humans, not automated system processes. This is not suitable for an automated system that generates
hundreds of reports daily.

Therefore, S3 File Gateway directly addresses the problem by integrating with the existing network share,
providing automatic, near-real-time data transfer to S3 with minimal administrative effort.
Supporting Links:
Amazon S3 File Gateway: https://aws.amazon.com/storagegateway/file/
AWS DataSync: https://aws.amazon.com/datasync/
AWS Transfer Family: https://aws.amazon.com/aws-transfer-family/

---

## Question 415

**Answer:** **A**

**Explanation:**

The best solution is A. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3
bucket to S3 Intelligent-Tiering. Here's why:
S3 Intelligent-Tiering: This storage class is designed to automatically optimize storage costs by moving data
between frequent, infrequent, and archive access tiers based on changing access patterns. It incurs a small
monthly monitoring and automation fee per object, but it eliminates the operational overhead of manually
identifying and moving data.
Unknown Access Patterns: The problem explicitly states the company doesn't know the access patterns for
all data. Intelligent-Tiering excels in this scenario because it automatically adapts to unknown and changing
access patterns, optimizing costs without requiring manual analysis.
Operational Efficiency: S3 Lifecycle configurations automate the process of transitioning objects between
storage classes. Using Intelligent-Tiering with a Lifecycle configuration provides the most hands-off and
automated approach, minimizing operational burden.
S3 Storage Class Analysis (**Option B**): While useful, this requires manual analysis and subsequent action to
move objects. This is less operationally efficient than Intelligent-Tiering, which is designed to automate this
process. Moreover, the analysis is a one-time snapshot and wouldn't adapt to changing access patterns over
time without repeated manual analysis.
S3 Glacier Instant Retrieval (**Option C**): Glacier is designed for archival data with infrequent access. It's not
the most suitable choice when access frequency is unknown, as frequent retrieval incurs higher costs.
S3 One Zone-Infrequent Access (S3 One Zone-IA) (**Option D**): While cost-effective for infrequent access, it's
not ideal when access patterns are unknown. Intelligent-Tiering can also move data to infrequent access tiers,
and offers the flexibility to return data to frequent access if needed, which One Zone-IA does not.
Furthermore, One Zone-IA has lower availability than Intelligent-Tiering.
In essence, Intelligent-Tiering is the most efficient and appropriate choice because it automates cost
optimization based on access patterns without requiring upfront knowledge of those
patterns.https://aws.amazon.com/s3/storage-classes/intelligenttiering/https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html

---

## Question 416

**Answer:** **BD**

**Explanation:**

The best combination of actions to resolve slow page loads for the ecommerce web application is to use
Amazon CloudFront and create a read replica for the RDS DB instance.

**B.** Set up an Amazon CloudFront distribution: CloudFront is a content delivery network (CDN) service that
caches static content (images, CSS, JavaScript, etc.) closer to users globally. By caching content at edge
locations, CloudFront reduces latency and improves page load times. This is especially beneficial for a global
ecommerce company with users distributed worldwide. (https://aws.amazon.com/cloudfront/)

**D.** Create a read replica for the RDS DB instance: Creating a read replica allows read-only traffic to be
offloaded from the primary RDS database. This reduces the load on the primary database, allowing it to focus
on write operations (transactions). The web application can be configured to read data from the read replica,
improving response times for data-intensive read operations and contributing to faster page loads. OLTP
databases benefit from read replicas as read queries often overwhelm the primary DB instance.
(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)

**Option A** (Amazon Redshift) is not the best choice because Redshift is designed for data warehousing and
analytics, not for serving real-time OLTP data for a web application. **Option C** (Host the dynamic web content
in Amazon S3) is incorrect because S3 is designed for static content. Dynamic content needs a compute
environment to execute. **Option E** (Configure a Multi-AZ deployment for the RDS DB instance) improves the
availability and durability of the database, but it doesn't directly address the performance issue of slow page
loads. Multi-AZ is for failover, not performance scaling.

---

## Question 417

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's why:
The requirements include cost optimization, low latency, application running for at least 1 year with increasing
Lambda function count, and direct network access from Lambda to EC2 in a private subnet.
Savings Plan Selection: Compute Savings Plans offer flexibility by applying discounts across EC2, Lambda,
and Fargate, unlike EC2 Instance Savings Plans which only apply to EC2. Given the anticipated growth in
Lambda usage, a Compute Savings Plan ensures optimal savings across all compute resources.
https://aws.amazon.com/savingsplans/

Lambda Optimization: Optimizing Lambda functions' duration, memory, invocations, and data transfer directly
impacts cost. Reducing execution time and memory allocation minimizes resource consumption, and
optimizing data transfer reduces network charges.
VPC Connection: Connecting Lambda functions to the private subnet provides direct, low-latency network
access to the EC2 instances without traversing the public internet. It also ensures secure communication
within the VPC. Placing Lambda in a public subnet (option B) is less secure and not necessary given the option
for private subnet connectivity. Keeping Lambda in the Lambda service VPC (option D) would require more
complex networking (like VPC peering or PrivateLink) to reach the EC2 instances, increasing latency and cost.
https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html

Therefore, **Option C** provides the most comprehensive solution for cost savings, low latency, scalability, and
secure network access between Lambda functions and EC2 instances within the private subnet.

---

## Question 418

**Answer:** **B**

**Explanation:**

The correct answer is B. Add the development account as a principal in the trust policy of the role in the
production account.

Here's a detailed justification:
The scenario requires granting users in the development account access to S3 resources in the production
account while adhering to the principle of least privilege. This means giving only the necessary permissions
and avoiding overly broad access.

**Option A**, attaching the AdministratorAccess policy to the development account users, violates the principle of
least privilege. It grants excessive permissions to the development account users, far beyond what's needed
to access the specific S3 bucket in the production account. This opens up security risks.

**Option B** is the correct solution because it utilizes IAM roles for cross-account access, a secure and
recommended practice. The IAM role is created in the production account and has a policy defining what
actions (e.g., s3:GetObject, s3:PutObject) are allowed on the S3 bucket. Crucially, the role's trust policy is
modified to allow the development account to assume the role. This is done by specifying the development
account's AWS account ID as a principal in the trust policy.
Users in the development account can then assume this role, temporarily gaining the permissions associated
with it in the production account. To assume the role, the IAM users in the development account need explicit

permissions to do so (using sts:AssumeRole in their IAM policy). This approach is secure and follows least
privilege, as users only gain production access when they explicitly assume the role, and the role itself only
grants specific S3 access.

**Option C**, turning off S3 Block Public Access, is incorrect and dangerous. It makes the S3 bucket publicly
accessible, which is a severe security risk and has nothing to do with granting cross-account access to
specific users.

**Option D**, creating a user in the production account for each team member, creates unnecessary
administrative overhead and doesn't scale well. Managing separate user credentials for each team member in
multiple accounts is complex and prone to errors. Also, it doesn't leverage the benefits of IAM roles for
temporary access.

In summary, using IAM roles with a trust policy that specifies the development account as a principal allows
authorized users in the development account to assume the role and access the S3 bucket in the production
account in a controlled and secure manner, adhering to the principle of least privilege.
Further reading:
AWS IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
IAM Roles for Cross-Account Access: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_crossaccount-with-roles.html
STS AssumeRole: https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html

---

## Question 419

**Answer:** **CE**

**Explanation:**

The correct answer is CE. Here's a detailed justification:

**C:** Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the
ec2:CreateVolume action when the ec2:Encrypted condition equals false.
This is the most effective way to enforce encryption at the organizational level using AWS Organizations.
SCPs act as guardrails, limiting the actions that can be performed by accounts within an OU. By creating an

SCP that denies the ec2:CreateVolume action when the ec2:Encrypted condition is false, you ensure that no
unencrypted EBS volumes can be created within the scope of the OU (in this case, the entire organization
because it is attached to the root OU). This enforces the security policy for all new EBS volumes created.

**E:** In the Organizations management account, specify the Default EBS volume encryption setting.
Specifying default EBS encryption at the organizational level simplifies encryption configuration. If an IAM
user/role launches an EC2 instance and doesn't explicitly specify EBS encryption, then the "Default EBS
volume encryption" setting takes precedence. This minimizes the impact on users since they can skip
explicitly specifying encryption during volume creation, yet the organization remains compliant with the
policy. This setting also applies to root users. This adds a layer of encryption regardless of what is done in the
EC2 console.

Why the other options are incorrect:

**A:** In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption
key. While you can set a default encryption key in the EC2 console, this only applies at the account level, not
the organizational level. Also, this is just a default configuration, and does not enforce that EBS volumes must
be encrypted, which the question requires.

**B:** Create an IAM permission boundary. Attach the permission boundary to the root organizational unit (OU).
Define the boundary to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.
IAM permission boundaries set the maximum permissions that an IAM principal can have. They do not deny
explicit actions like SCPs do. They also aren't attached to OUs.

**D:** Update the IAM policies for each account to deny the ec2:CreateVolume action when the ec2:Encrypted
condition equals false. Updating IAM policies across multiple accounts is complex, time-consuming, and
error-prone. It's much less manageable than using SCPs at the organizational level. It is also not as effective
as using the default volume encryption.
Supporting Documentation:
Service Control Policies (SCPs):
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html
Default EBS Encryption by Default:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
IAM Permission Boundaries:
https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html
In conclusion, using an SCP and default volume encryption ensures that all newly created EBS volumes are
encrypted without placing a significant burden on employees, satisfying the requirements stated in the
question.

---

## Question 420

**Answer:** **D**

**Explanation:**

The correct answer is D: Use an Amazon RDS Multi-AZ DB cluster deployment. Point the read workload to
the reader endpoint.

Here's a detailed justification:
High Availability and Fast Failover: Multi-AZ DB clusters in RDS provide significantly faster failover times
compared to Multi-AZ DB instances. While both offer high availability, clusters are designed to meet the 40second failover requirement, while Multi-AZ instances are not explicitly guaranteed to that level of speed.
Multi-AZ DB instances failover to a standby in same availability zone for better availability.
Read Scaling: RDS clusters, specifically Aurora clusters but also RDS for PostgreSQL clusters in this context,
have a reader endpoint. This endpoint automatically distributes read traffic across multiple read replicas
within the cluster. This offloads read workload from the primary instance as requested by the customer. MultiAZ DB instances do not have reader endpoints and is not best practice to direct read queries to the standby
instance.
Cost Optimization: Using the reader endpoint to direct read traffic eliminates the need to manually manage
connections to individual read replicas. This simplifies architecture and reduces the operational overhead
associated with managing multiple read replicas. Moreover, using the cluster's reader endpoint effectively
balances the load across available read replicas, optimizing resource utilization and cost.
Multi-AZ DB Instance limitations: Options A and C suggest using Multi-AZ DB instances. While they provide
high availability through a standby instance, they don't inherently provide read scalability or fast failover
guarantees like a cluster. The standby in a Multi-AZ instance is not intended for direct read traffic.
Two Read Replicas: **Option B** suggests two read replicas. While it enhances read capacity, it is not the most
cost efficient option. The prompt does not require read replicas and is not needed to meet high availability or
failover requirements.
Reader Endpoint vs. Instance Endpoint: The reader endpoint is the key feature of a DB cluster that directly
addresses the requirement to offload reads and automatically balance the load. Options that do not utilize a
reader endpoint fail to address the question.

In summary, an RDS Multi-AZ DB cluster with a reader endpoint delivers the required high availability with
fast failover, offloads reads efficiently, and simplifies management, making it the optimal solution.
Supporting Documentation:
Amazon RDS High Availability: Overview of HA capabilities for RDS.
Working with Amazon RDS Read Replicas: Information on using read replicas to offload read traffic.
Amazon RDS for PostgreSQL: General information about RDS for PostgreSQL.

---

## Question 421

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most appropriate solution, along with explanations of
why the other options are less suitable:
Why **Option B** is Correct:

**Option B** leverages AWS Transfer Family with Amazon EFS to meet the stated requirements. AWS Transfer
Family is the AWS service designed to provide serverless, secure, and scalable file transfer capabilities. Using
EFS satisfies the need for high IOPS performance shared storage. Specifically:
Amazon EFS: Provides shared storage with high IOPS. EFS is a scalable, fully managed, NFS file system that
can be shared between multiple EC2 instances or accessed by AWS Transfer Family. This addresses the
company's need for high IOPS and shared storage.
AWS Transfer Family SFTP Service: Offers a serverless SFTP solution, fulfilling the company's desire to
move away from managing EC2 instances.
Elastic IP Addresses & VPC Endpoint with Internet Facing Access: Using an internet-facing VPC endpoint
enables the SFTP service to be accessed from trusted IP addresses over the internet, as the company
currently does with their EC2 instances. The elastic IP addresses are applied at the endpoint level, allowing
for predictable addressing for the trusted sources to connect.
Security Group: Attaching a security group to the endpoint that allows traffic only from trusted IP addresses
provides granular security control, mirroring the current security setup with the EC2 instances.
User Access Control: AWS Transfer Family allows for integration with identity providers to manage user
authentication and permissions. This ensures that the company retains control over user permissions.
Why Other Options are Incorrect:

**Option A** (EBS): EBS volumes are block storage, not designed for direct sharing between services like AWS
Transfer Family. It is usually attached to compute instances. EBS is not a suitable storage option for this
service as it cannot be directly attached as a file system for AWS Transfer Family. Additionally, attaching an
EBS volume directly to the SFTP endpoint is not a supported configuration.

**Option C** and D (S3 with Public/Private Endpoint): While S3 can be used with AWS Transfer Family, it doesn't
inherently provide the high IOPS performance that EFS does. Transferring data to/from S3 through SFTP can
lead to higher costs and increased latency due to limitations in the underlying SFTP protocol. While the
requirement can technically be met with Amazon S3, Amazon EFS aligns more directly with the high IOPS
requirement described in the prompt. Additionally, if choosing S3, a private endpoint (**Option D**) is better for

security, but **Option B** provides a more balanced solution.

---

## Question 422

**Answer:** **D**

**Explanation:**

**Option D** provides the most scalable and cost-effective solution for the given requirements, especially
considering the irregular usage patterns and the need to load 1 GB of data into memory.

Here's why:
Asynchronous Processing with SQS: Using Amazon SQS decouples the API from the model processing. This
allows the API to quickly accept requests and queue them for processing, preventing the API from being
overwhelmed by sudden spikes in traffic. https://aws.amazon.com/sqs/
Containerization with ECS: Deploying the models as Amazon ECS services allows for efficient resource
utilization and scalability. Containers provide a consistent environment for the models to run, regardless of
the underlying infrastructure. https://aws.amazon.com/ecs/
Auto Scaling based on Queue Size: Auto Scaling ECS based on the SQS queue size ensures that the number
of model instances scales up or down dynamically based on the incoming request volume. This optimizes
costs by only using the necessary resources. When the queue is empty (models unused), ECS can scale down
close to zero (depending on chosen configuration).
Efficient Memory Management: While the models need to load 1 GB of data, ECS allows you to specify the
necessary memory and CPU resources for each container. This is crucial for efficiently handling large model
data sets.

Why other options are less suitable:

**Option A** (Lambda invoked by NLB): Lambda functions have execution time limits and memory constraints.
While Lambda can be a good fit for some ML workloads, loading 1 GB of model data into memory at each
invocation would likely exceed Lambda's limitations and lead to timeouts and poor performance. Also, cold
starts could introduce latency and Lambda might not be as cost efficient for long lived processes.

**Option B** (ECS with App Mesh): App Mesh is a service mesh that provides fine-grained control over traffic
routing and observability. While useful for complex microservice architectures, it adds unnecessary
complexity and cost for this use case.

**Option C** (Lambda invoked by SQS with Auto Scaling): While Lambda can be invoked by SQS, increasing
vCPUs for Lambda functions is not a supported feature. Lambda functions have fixed vCPU allocation based
on the memory configured. Additionally, the memory limitations of Lambda would still be a concern with the
large model size.

---

## Question 423

**Answer:** **AB**

**Explanation:**

identity-based policy used for role and group

---

## Question 424

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Reserved Instances for the frontend nodes. Use Spot Instances for the
backend nodes.

Here's a detailed justification:
The problem states that the frontend nodes must run 24/7. Reserved Instances (RIs) are the most costeffective option for consistently running EC2 instances over a long period (1 or 3 years). By purchasing RIs for
the frontend nodes, the company can significantly reduce the hourly cost compared to On-Demand Instances.
RIs offer a substantial discount in exchange for a commitment to a specific instance type and region.
The backend nodes only need to run based on workload and the number of instances varies. Spot Instances
offer EC2 capacity at significantly reduced prices (up to 90% off On-Demand prices). Spot Instances are ideal
for fault-tolerant, stateless workloads that can be interrupted. Since the backend nodes scale based on
workload and the number of backend nodes varies during the day, Spot Instances will automatically fit into
the cost-effectiveness requirement.

**Option A** is incorrect because AWS Fargate is a serverless compute engine for containers. While Fargate can
be suitable for certain backend workloads, it's generally more expensive than EC2 Spot Instances for tasks
that can tolerate interruptions. The question emphasizes cost-effectiveness and implies the application is
already designed to run on EC2. Fargate is a better choice when the application is containerized.

**Option C** is incorrect because Spot Instances are unsuitable for the frontend nodes that must run 24/7. Spot
Instances can be terminated if the Spot price exceeds your bid or if capacity becomes unavailable. The
frontend requires constant uptime.

**Option D** is incorrect for the same reasons as options A and C. It uses Spot Instances for the front-end nodes,
which need constant uptime. It also suggests Fargate for the backend nodes, which is not the most costeffective solution compared to Spot Instances for this specific EC2 scaling scenario.

Therefore, using Reserved Instances for the always-on frontend and Spot Instances for the flexible, scalable
backend provides the most cost-effective solution.

---

## Question 425

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why the correct answer is C (GP3 volume type):
The key requirements are high block storage capacity, a maximum of 15,000 IOPS, and the need for
performance independent of storage capacity, all while being cost-effective. Let's analyze each option:
GP2: GP2 (General Purpose SSD) volumes offer a balance of price and performance. However, GP2's IOPS
performance is tied to the volume size. To achieve 15,000 IOPS with GP2, you would need to provision a very
large volume, which would be more expensive than the other options and is not ideal when performance needs
to be provisioned independent of capacity. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsvolume-types.html
io1/io2: io1 and io2 (Provisioned IOPS SSD) volumes are designed for high-performance, I/O intensive
workloads. They allow you to specify the exact IOPS you need. While io1/io2 could meet the performance
requirement, they are typically more expensive than GP3, especially for a relatively low IOPS requirement like
15,000. These are optimal when you need very high, guaranteed IOPS.
GP3: GP3 (General Purpose SSD) volumes offer a balance between cost and performance. Crucially, GP3
allows you to provision IOPS and throughput independent of storage capacity. GP3 volumes provide a
baseline performance and allow users to provision additional IOPS and throughput as needed, up to a certain
limit. For 15,000 IOPS, GP3 is a cost-effective option that avoids over-provisioning storage just to meet IOPS
requirements. GP3 also gives you flexibility on throughput. https://aws.amazon.com/blogs/aws/new-amazonebs-gp3-volume-provides-up-to-20-lower-cost-and-higher-performance/

Therefore, GP3 is the most cost-effective solution for a company needing high block storage capacity and
15,000 IOPS, while also demanding performance independent of capacity. It provides a better priceperformance ratio compared to io1/io2 for this IOPS range and avoids the capacity-tied limitations of GP2.

---

## Question 426

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides a mechanism for both data migration and audit logging of data
access events, fulfilling all the requirements.

Here's a detailed justification:
The company needs to migrate data to AWS, ensure data is securely stored, and enable audit access. Amazon
S3 serves as the central storage location because it's a scalable, durable, and secure object storage service
suitable for healthcare application data.
AWS DataSync efficiently and securely transfers large datasets from on-premises storage to Amazon S3,
handling data transfer and encryption during transit, making it ideal for migrating the existing data.
The new regulation requires audit access at all levels of stored data. AWS CloudTrail logs API calls made to
AWS services, providing a detailed audit trail of who accessed what data and when. By configuring CloudTrail
to log data events for the S3 bucket where the healthcare application data is stored, the company gains
comprehensive visibility into all data access activities. Data events specifically track object-level operations
such as GET, PUT, DELETE, and HEAD, providing the necessary level of audit access.

**Option B** is incorrect because AWS Snowcone is primarily used for data collection, processing, and migration
in edge locations or environments where network connectivity is limited, which is not the primary concern in
this scenario, where the existing data is hosted on an on-premises infrastructure. Further, logging
management events will not satisfy the detailed audit requirement for data access at all levels.

**Option C** is incorrect because Amazon S3 Transfer Acceleration only speeds up transfers to S3 via the public
internet. While it improves transfer speed, it doesn't address the core requirement of audit logging. Similar to

**Option B**, logging data events is what is needed, not just accelerating the transfer.

**Option D** is incorrect. AWS Storage Gateway connects on-premises software appliances to cloud-based
storage, it is primarily designed to create seamless hybrid storage solutions rather than a one-time migration
of the existing data. More importantly, auditing management events is insufficient for the required data
access audit trail. The focus on data events is critical to meeting the audit requirements.

In summary, using AWS DataSync for migration and AWS CloudTrail configured for data events on the S3
bucket addresses both the data migration and detailed data access auditing requirements effectively.

---

## Question 427

**Answer:** **B**

**Explanation:**

The correct answer is B: Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced
environment and a rolling deployment policy.

Here's a detailed justification:
Elastic Beanstalk is a PaaS (Platform as a Service) that simplifies the deployment and management of web
applications and services. It handles the underlying infrastructure, allowing the architect to focus on the
application code. It inherently supports Java applications with Tomcat, making it a suitable choice for
deploying the application.
To meet the high availability requirement, Elastic Beanstalk provides the capability to create a load-balanced
environment. This automatically distributes traffic across multiple EC2 instances running the application,
ensuring that if one instance fails, others can handle the load. The load balancer (usually an Application Load
Balancer or Classic Load Balancer) monitors the health of the instances and routes traffic accordingly.
A rolling deployment policy minimizes downtime during application updates. Instead of taking down all
instances at once, a rolling deployment updates the instances in batches, ensuring that some instances are
always available to serve traffic. This reduces the impact of deployments on users and increases overall
availability. Rolling deployments with health checks are crucial for maintaining service availability during
updates.

**Option A** is incorrect because Lambda is better suited for event-driven, serverless applications, not for
complex, long-running Java applications like this one running on Tomcat. Furthermore, while API Gateway can
expose Lambda functions, it doesn't directly address the need for a Tomcat environment.

**Option C** is incorrect because ElastiCache is a caching service, not a replacement for a MySQL database.
Migrating the database to ElastiCache would fundamentally change the application's architecture and likely
break its functionality as ElastiCache does not offer the relational features needed.

**Option D** is incorrect because manually managing EC2 instances, AMIs, and Auto Scaling groups adds
considerable operational overhead. While it can achieve the desired result, Elastic Beanstalk provides a higher
level of abstraction and automation, simplifying the process and reducing management complexity. Manually
managing AMIs and scaling policies is less efficient than using Elastic Beanstalk's managed environment. This
approach increases operational overhead.

Therefore, Elastic Beanstalk with a load-balanced environment and a rolling deployment policy is the most
efficient and straightforward way to deploy the Java application on Tomcat while meeting the high availability
requirements.
Supporting links:
AWS Elastic Beanstalk: https://aws.amazon.com/elasticbeanstalk/
Elastic Beanstalk Rolling Deployments: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/usingfeatures.rolling-updates.html

---

## Question 428

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages IAM roles, the recommended and most secure way to grant
permissions to AWS services. IAM roles avoid the need to store and manage long-term credentials (like
access keys) within the Lambda function or its environment, mitigating the risk of credential exposure.

**Option B** creates an IAM role, which is an identity that Lambda can assume. This role explicitly trusts Lambda
(as specified in the trust policy of the role) to use it. The role is then granted permissions to read and write to
DynamoDB via an attached policy. Finally, the Lambda function is configured to use this role as its execution
role. This means when Lambda executes the function, it automatically assumes the permissions defined in the
role's policy. This process is seamless and requires no manual credential management.

**Option A** is less secure because it involves creating an IAM user and storing its access keys in the Lambda
environment variables. This is a poor practice as it increases the risk of credential compromise. If the
environment variables are exposed (e.g., through a configuration leak), attackers can use the credentials to
access DynamoDB.

**Option C**, while using Systems Manager Parameter Store to store the access keys, still relies on managing
long-term credentials. Although storing secrets in Parameter Store is better than storing them directly in the
environment variables, the need to manage and retrieve these credentials introduces complexity and
potential security risks.

**Option D** is incorrect because IAM roles are used to grant permissions to services (like Lambda) to access
other AWS resources, not the other way around. DynamoDB wouldn't assume a role to allow Lambda to
access it. Lambda assumes the role to access DynamoDB.

Therefore, using an IAM role specifically designed for the Lambda function, as outlined in option B, aligns with
AWS security best practices by adhering to the principle of least privilege and eliminating the need to
manage long-term credentials directly.
Supporting documentation:
IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
Lambda Execution Role: https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html

Security best practices in IAM: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

---

## Question 429

**Answer:** **D**

**Explanation:**

Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1
Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other
Amazon EC2 action within the us-east-1 Region.

---

## Question 430

**Answer:** **BC**

**Explanation:**

The question requires converting .csv files uploaded to S3 into images for rapid report generation, maintaining
the .csv files for ML training, and managing storage costs. The selected solution, BC, addresses these
requirements effectively.

**B.** Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3
bucket. Invoke the Lambda function when a .csv file is uploaded. This is the most efficient way to
immediately convert the .csv files into images. Using S3 event notifications and a Lambda function, the
conversion happens automatically upon upload. Lambda is cost-effective for event-driven tasks as you only
pay for the compute time used during the conversion. An EC2 instance (option A) would be constantly running,
incurring costs even when idle, making Lambda more economical for this task. This ensures the images are
available for report generation as quickly as possible.

**C.** Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3
Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days. This part handles
the lifecycle management of both the .csv and image files to optimize storage costs. Since the images are
only needed for a month, expiring them after 30 days prevents unnecessary storage charges. Transitioning
the .csv files to S3 Glacier reduces the storage costs for the .csv files, as they are only used twice a year. S3
Glacier is a low-cost storage option suitable for infrequently accessed data. S3 Standard-IA (option E) would
be more expensive than Glacier for data accessed only twice a year. S3 One Zone-IA (option D) loses data if
the availability zone is destroyed, violating best practices. Storing images in RRS (option E) is deprecated and

not recommended.

Therefore, Lambda is the ideal service for immediate file conversion and S3 lifecycle policies efficiently
manage storage costs, fulfilling both speed and cost-effectiveness requirements.

---

## Question 431

**Answer:** **B**

**Explanation:**

The correct answer is B. Set up an Amazon ElastiCache for Redis cluster to compute and cache the scores
for the web application to display.

Here's a detailed justification:
The requirements include near-real-time scoreboard updates and the ability to save/restore game state
including scores. Redis is an in-memory data store that excels in these scenarios due to its speed and
versatile data structures.

1. Near Real-Time Updates: Redis provides extremely low latency read and write operations, crucial for
displaying scores in near real-time. Unlike disk-based databases (like RDS MySQL), in-memory
operations are significantly faster.

2. Score Computation and Storage: Redis offers sorted sets, a data structure perfectly suited for
maintaining a ranked leaderboard. The score for each player can be added or updated, and Redis
automatically maintains the order. Retrieving the top 10 scores is an efficient operation.

3. Save/Restore Game State: Redis supports persistence. Data can be periodically saved to disk (RDB
snapshots) or logged to an append-only file (AOF), enabling the restoration of the entire dataset
(including scores) in case of failure or for the stop/restore feature.

4. ElastiCache for Redis: AWS ElastiCache simplifies the management of a Redis cluster, handling
tasks like scaling, patching, and monitoring. It provides a managed service, reducing the operational
overhead for the game developers.

Why other options are not ideal:

**A.** Amazon ElastiCache for Memcached: While Memcached is also an in-memory cache, it primarily focuses
on simple key-value caching and does not offer the sorted set data structure or built-in persistence
capabilities required for the scoreboard and game state preservation.

**C.** Amazon CloudFront: CloudFront is a CDN (Content Delivery Network) that caches static content at edge
locations. While it's useful for caching static parts of the web application, it is not suitable for caching
dynamically changing data like the scoreboard, as CloudFront cache invalidation may not be quick enough for
near-real-time updates. Furthermore, it cannot handle the score computation or game state persistence.

**D.** Amazon RDS for MySQL Read Replica: While a read replica offloads read traffic from the primary
database, it is still a disk-based database. Computing the scoreboard on the read replica and serving read
traffic would introduce latency and not meet the near-real-time requirement. Also, reading top scores from a
relational database is much slower than using a Redis sorted set. Moreover, a read replica doesn't offer the inmemory performance or data structures optimized for real-time ranking and quick restore.

---

## Question 432

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages managed AWS services specifically designed for machine
learning and business intelligence, minimizing operational overhead.

Here's a detailed justification:
Amazon SageMaker: SageMaker is a fully managed machine learning service that provides a comprehensive
environment for building, training, and deploying ML models. It eliminates the need for managing underlying
infrastructure, handling dependencies, and configuring training clusters. This significantly reduces
operational overhead compared to options A and C.
Amazon QuickSight: QuickSight is a serverless business intelligence service that allows you to easily create
and share interactive dashboards and reports. Its direct integration with AWS data sources, including

SageMaker-generated data, simplifies the process of visualizing and analyzing ML-augmented data. Unlike
OpenSearch Service (in options A and C), QuickSight is designed specifically for business intelligence and
reporting, offering features like calculated fields and interactive visualizations, reducing the need for custom
coding and configurations. QuickSight also scales automatically, minimizing operational overhead.

**Option A** is less suitable because AWS Glue ML Transforms are primarily for data cleaning and
transformation, not comprehensive model building and training. While OpenSearch Service can visualize data,
it's primarily a search and analytics engine and requires more configuration and management for BI use cases
compared to QuickSight.

**Option C** requires managing a custom AMI, which increases operational overhead related to security patching,
software updates, and compatibility issues. Furthermore, using OpenSearch Service for visualization, as
mentioned before, is not as optimized as using QuickSight.

**Option D** is incorrect because QuickSight's calculated fields are limited in their machine learning capabilities.
They cannot be used to build and train complex ML models as required by the problem statement.

In summary, **Option B** using SageMaker for ML model development and QuickSight for visualization provides a
fully managed, integrated, and scalable solution with the least operational overhead for the given
requirements.
Supporting Links:
Amazon SageMaker: https://aws.amazon.com/sagemaker/
Amazon QuickSight: https://aws.amazon.com/quicksight/
AWS Glue: https://aws.amazon.com/glue/
Amazon OpenSearch Service: https://aws.amazon.com/opensearch-service/

---

## Question 433

**Answer:** **C**

**Explanation:**

The correct answer is C: Create a service control policy (SCP) to prevent tag modification except by
authorized principals. Here's a detailed justification:
SCPs are a powerful feature of AWS Organizations that allow you to centrally control permissions for all
accounts within your organization. They act as guardrails, setting the maximum permissions available to
member accounts. Critically, SCPs affect all IAM users and roles within the affected accounts, even the root
user. This centralized enforcement is precisely what's needed to prevent unauthorized tag modification across
multiple accounts.

**Option C**'s "except by authorized principals" is also key. SCPs can include conditions to allow specific IAM
roles or users to bypass the restriction. This enables authorized users (like those in the Cost Management

team) to modify tags as needed for legitimate purposes, while still preventing accidental or malicious
modification by others. This conditional control makes SCPs ideal for this scenario.

**Option A** (AWS Config rule) can detect non-compliant tag modifications after they happen, but it can't prevent
them directly. Config is for auditing, not enforcement. **Option B** (CloudTrail) also logs activity, so it's valuable
for auditing but not prevention. **Option D** (CloudWatch logs) similarly focuses on monitoring and alerting
based on logs; it doesn't inherently block actions. Only SCPs offer the preventive control necessary.

In summary, SCPs provide a centralized and enforceable mechanism to restrict actions (like tag modification)
across multiple AWS accounts within an organization, while allowing exceptions for authorized users. This
makes it the best choice for the specified requirements.
Further reading:
AWS Organizations documentation:
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html
Service control policies (SCPs):
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html

---

## Question 434

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides the most streamlined approach to minimizing downtime during a
failover to a disaster recovery region.
Here's a breakdown of why:
Auto Scaling Group and Load Balancer in DR Region: Creating these resources before a disaster event allows
for a faster switchover. The EC2 instances are ready (or can be pre-warmed).
DynamoDB Global Table: DynamoDB global tables provide automatic, multi-region, multi-active replication.
This ensures that the data is available in the disaster recovery region and that data consistency is maintained.
This removes the need to handle data replication manually, which can be time-consuming and error-prone.
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.html
DNS Failover: Using Route 53 DNS failover allows for quick redirection of traffic to the disaster recovery
region by simply changing the DNS record when needed. This is a standard and efficient method for handling
regional failures. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html

Why other options are less ideal:

**Option B**: Creating resources using CloudFormation only when needed introduces delay. This is not an ideal
solution for minimizing downtime, as the application is unavailable while the resources are provisioned.
Furthermore, it does not consider the need to have the database layer pre-synced.

**Option C**: This option is missing the Auto Scaling Group. If EC2 instances are not created using ASG, it might
be difficult to scale them up, especially during/after a DR event.

**Option D**: This option is overly complicated. It uses CloudWatch alarm and Lambda function for Route 53 DNS,
which adds unnecessary complexity and increases the potential for failure. Route 53 supports native failover
mechanisms and is the best choice.
In conclusion, option A provides the best combination of pre-provisioned resources, data replication via
DynamoDB global tables, and efficient failover using Route 53 to minimize downtime during a regional
disaster.

---

## Question 435

**Answer:** **A**

**Explanation:**

The most cost-effective solution for migrating a 20 TB MySQL database to AWS within 2 weeks with minimal
downtime is option A, using AWS Snowball Edge Storage Optimized and AWS DMS with AWS SCT.

Here's why:
Data Size and Time Constraint: Migrating 20 TB over the internet, even with a dedicated 1 GB AWS Direct
Connect connection (**Option D**), is likely to take longer than 2 weeks and cause more significant downtime.
AWS Snowball Edge devices are designed for large-scale data transfers when network bandwidth is a
constraint. https://aws.amazon.com/snowball/
Cost-Effectiveness: AWS Snowball Edge Storage Optimized devices are more cost-effective for this amount
of data compared to AWS Snowmobile (**Option B**). AWS Snowmobile is intended for exabyte-scale data
transfers.
Minimal Downtime via Replication: AWS Database Migration Service (DMS) allows for continuous replication
of changes to the database during the migration process. The AWS Schema Conversion Tool (SCT) helps
convert the source database schema to the target AWS database (if needed) reducing manual intervention
and potential errors. This keeps downtime minimal. https://aws.amazon.com/dms/

https://aws.amazon.com/sct/
Compute Optimized Snowball: AWS Snowball Edge Compute Optimized (**Option C**) is not needed since the
primary requirement is data transfer and not intensive computation at the edge. Storage Optimized is
sufficient and more cost-effective.
Process: The process involves using DMS/SCT to set up the initial database schema and begin replicating
data to the Snowball Edge while it's on-premises. Once the initial data is transferred to the Snowball, it's
shipped to AWS. After AWS receives the Snowball and uploads the data to AWS, the continuous replication
via DMS ensures that only the changes that occurred during shipping need to be applied to the target
database, minimizing the final cutover downtime.
Direct Connect Limitations: Though Direct Connect provides dedicated network connectivity, transferring 20
TB of data within two weeks while maintaining minimal downtime can still be challenging and potentially
costly due to bandwidth usage charges.

---

## Question 436

**Answer:** **A**

**Explanation:**

The question asks for the most cost-effective solution to handle an increased database workload in Amazon
RDS for PostgreSQL without adding infrastructure. **Option A**, buying reserved DB instances for the total
workload and making the RDS instance larger, is the most cost-effective.

Here's why:
Reserved Instances (RIs): RIs offer significant cost savings (up to 75%) compared to on-demand instances for
predictable workloads. Buying RIs for the expected total workload guarantees these savings.
Vertical Scaling (Increasing Instance Size): RDS allows you to scale vertically (increase the instance size) to
provide more CPU, memory, and storage. This addresses the increased workload without requiring code
changes or creating new databases. It leverages existing infrastructure.
Cost-Effectiveness: While RIs require upfront commitment, the substantial discount on the hourly rate over
the long term makes them far cheaper than continuously running larger on-demand instances.
Alternative B (Multi-AZ): Multi-AZ provides high availability and failover, which is important, but does not
directly address the performance scaling issue required by increased workload. It's mainly for disaster
recovery, not performance scaling. While Multi-AZ provides a standby replica, it is typically for failover and
not for read-heavy operations.
Alternative C (Adding another RDS Instance): This implies creating a read replica (or some other form of
sharding/database partitioning), which adds infrastructure and complexity. While read replicas can help with
read scaling, they are not necessary if increasing instance size is sufficient and not the most cost effective.
The question says 'without adding infrastructure'.
Alternative D (On-Demand): Using on-demand instances is the most expensive option for a continuous
workload. It offers no cost savings compared to RIs and is generally used for unpredictable or short-term
workloads.

Therefore, purchasing Reserved Instances to cover the projected increased workload, coupled with scaling
the existing RDS instance, offers the most cost-effective path to accommodating the larger load without the
complexity of new infrastructure or the higher expense of on-demand resources.
Here are authoritative links for further research:
Amazon RDS Pricing: https://aws.amazon.com/rds/pricing/
Amazon RDS Reserved Instances: https://aws.amazon.com/rds/reserved-instances/
Scaling Amazon RDS Instances:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ScalingUp.html

---

## Question 437

**Answer:** **B**

**Explanation:**

The correct answer is B. Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule.

Here's a detailed justification:
The scenario requires blocking illegitimate requests targeting an ecommerce website, mitigating potential
DDoS attacks, and minimizing impact on legitimate users. AWS WAF (Web Application Firewall) is specifically
designed to protect web applications from common web exploits and bots that could affect availability,
compromise security, or consume excessive resources.
AWS WAF's Rate-Based Rules: WAF allows you to define rules based on the rate of requests coming from a
specific IP address. By configuring a rate-limiting rule, you can automatically block or count requests
exceeding a defined threshold within a specified time period. This directly addresses the problem of high
request rates from illegitimate systems with changing IP addresses. Legitimate users are less likely to trigger
these rate limits.
Association with ALB: AWS WAF can be directly associated with an Application Load Balancer (ALB), making
it an ideal solution for filtering traffic before it reaches the EC2 instances. This integration provides a point of
control at the application layer (Layer 7).
Minimal Impact on Legitimate Users: WAF's rate-based rules and other filtering mechanisms are designed to
minimize the impact on legitimate users. Instead of a blanket block, only requests exceeding the defined rate
are blocked. You can also configure WAF rules to challenge suspicious requests (e.g., with CAPTCHA) instead
of outright blocking them.
Let's examine why the other options are less suitable:

**A.** Deploy Amazon Inspector and associate it with the ALB. Amazon Inspector is a vulnerability management
service that primarily focuses on identifying security vulnerabilities within your EC2 instances and network
configurations. It is not designed to block incoming traffic based on request rates.

**C.** Deploy rules to the network ACLs associated with the ALB to block the incoming traffic. Network ACLs
operate at the subnet level and are primarily used for network-level filtering (Layer 3 and 4). While they can
block traffic based on IP addresses, they are not suitable for dynamic rate limiting or complex web application
filtering like AWS WAF. Updating ACLs requires more operational overhead and can be difficult when IP
addresses are changing rapidly.

**D.** Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty. Amazon
GuardDuty is a threat detection service that analyzes AWS CloudTrail, VPC Flow Logs, and DNS logs to
identify malicious activity. While GuardDuty can detect potential DDoS attacks, it does not provide the direct
traffic filtering and rate-limiting capabilities required to mitigate the issue in real-time. It mainly sends alerts
to the security team.

Therefore, AWS WAF with rate-limiting rules is the most effective solution for blocking illegitimate incoming
requests from changing IP addresses while minimizing the impact on legitimate users, addressing the
requirement to protect the ecommerce website from potential DDoS attacks.

---

## Question 438

**Answer:** **D**

**Explanation:**

The most secure way to share the database with the external auditor is to create an encrypted snapshot and
share it with the auditor's AWS account along with access to the KMS key. This approach ensures data
confidentiality and integrity while minimizing the attack surface.

**Option D** is superior because it avoids exposing a live, replicated database instance directly to the auditor's
account (as in **Option A**). Sharing a live replica introduces potential security vulnerabilities and risks
unauthorized access or modifications. Encrypting the snapshot at rest ensures that the data remains

protected even if the snapshot itself is compromised. Sharing the snapshot rather than the live data allows
the auditor to work on a point-in-time copy, without impacting the company's production database. Sharing a
snapshot is better than exporting to text files (as in B) which can be cumbersome, difficult to manage, and
increase the risk of exposure. Additionally, storing in an S3 bucket and granting bucket access to the auditor
is more complex and presents additional risk when compared to sharing a snapshot. Sharing the snapshot is
preferred over sharing user keys (as in C) which is insecure.
Sharing an encrypted snapshot through AWS provides proper access controls and accountability, while
sharing user keys is considered a security anti-pattern. It also allows for proper key rotation policies and
auditing of key usage. By leveraging KMS, the company maintains control over the encryption key and can
revoke access at any time. The auditor, in their own AWS account, can then restore the snapshot into a new
database instance in their own environment, isolated from the company's infrastructure.
For further information, you can refer to the following AWS documentation:
Sharing AWS KMS keys: https://docs.aws.amazon.com/kms/latest/developerguide/share-keys.html
Sharing snapshots: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-share-snapshot.html

---

## Question 439

**Answer:** **A**

**Explanation:**

The correct answer is A: Add an additional IPv4 CIDR block to the existing VPC. This offers the least
operational overhead because it directly addresses the IP address exhaustion issue within the existing
infrastructure without requiring the creation and management of new VPCs or complex networking
configurations.

Here's a detailed justification:
IP Address Exhaustion: The core problem is the lack of available IP addresses within the current VPC's CIDR
block.
Direct Solution: Adding an IPv4 CIDR block expands the address space of the existing VPC, providing more IP
addresses for EC2 instances. This avoids the need to create new network infrastructure.
Subnet Creation: Additional subnets can be created using the new CIDR block, allowing for logical grouping
and organization of resources.
Operational Overhead: **Option A** involves modifying the existing VPC rather than creating entirely new ones,
minimizing the complexity of routing configurations, security groups, and network ACLs. It also keeps all
resources within a single VPC, simplifying management and monitoring.

Peering, Transit Gateway, and VPNs: Options B, C, and D all involve creating additional VPCs and connecting
them using peering connections, Transit Gateway, or Site-to-Site VPN. These are valid solutions for network
connectivity and scalability but introduce significant operational overhead compared to simply expanding the
existing VPC's address space. They require managing inter-VPC routing, security considerations, and
potential bandwidth limitations.
Least Effort: Adding a CIDR block is the most straightforward way to increase the number of IP addresses in
an existing VPC, requiring minimal configuration changes.

In summary, adding an additional IPv4 CIDR block to the existing VPC addresses the IP address exhaustion
issue directly with the least amount of configuration and management overhead compared to creating and
connecting multiple VPCs.
For further research, refer to the AWS documentation on VPCs:
Your VPC and subnets
Associate additional IPv4 CIDR blocks with your VPC

---

## Question 440

**Answer:** **AC**

**Explanation:**

The correct solutions for creating a new MySQL-compatible Amazon Aurora DB instance from the backups
are A and C.

**Option A**: Import the RDS snapshot directly into Aurora. RDS snapshots are the native backup mechanism
provided by AWS for RDS databases. Aurora is designed to be compatible with RDS snapshots of MySQL and
PostgreSQL engines. Therefore, you can directly restore an RDS snapshot of a MySQL instance into an Aurora
MySQL instance using the AWS Management Console, AWS CLI, or SDKs. This is the most straightforward
and efficient method if you have a readily available RDS
snapshot.https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Managing.html

**Option C**: Upload the database dump to Amazon S3. Then import the database dump into Aurora. The
mysqldump utility creates a logical backup of your database. This backup can be imported into a new database
instance. The mysqldump file needs to be uploaded to Amazon S3 for Aurora to access it. Aurora can then
import the data from S3. This method provides flexibility, especially if you need to perform some data
transformations before importing into

Aurora.https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Migrating. ExtMySQL.html

Why the other options are incorrect:

**B:** Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora. While you can
export RDS snapshots to S3, this process is more complex and primarily used for cross-account or crossregion migrations. You can directly restore from an RDS snapshot without uploading to S3 first.

**D:** Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora. While DMS is
useful for heterogeneous database migrations or for migrating with minimal downtime, it is not needed to
import RDS snapshots of MySQL into Aurora. Native restoration from snapshot is simpler and faster.

**E:** Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to
import the database dump into Aurora. DMS is not needed for restoring mysqldump files to Aurora. Aurora
has built-in functionality to restore from mysqldump files located in S3. DMS would add unnecessary
complexity and cost.

---

## Question 441

**Answer:** **C**

**Explanation:**

The most cost-effective solution is to use Amazon CloudFront to serve static web content from an Amazon S3
bucket (**Option C**). Here's why:
Cost Optimization: The question specifically highlights the need for cost optimization. Serving static content
directly from EC2 instances behind an Application Load Balancer is expensive due to the compute resources
consumed and the associated networking costs. CloudFront and S3 are designed for efficient and costeffective static content delivery.
CloudFront Caching: CloudFront is a Content Delivery Network (CDN) that caches content at edge locations
globally. This means that when a user requests static content, CloudFront can often serve it from a nearby
edge location, reducing latency and offloading traffic from the EC2 instances. This reduces the need for the
Auto Scaling group to scale up when static content is frequently accessed.
S3 Cost Efficiency: Amazon S3 is a highly scalable and cost-effective object storage service. Storing static
content in S3 is significantly cheaper than storing it on EC2 instance storage.
Reduced EC2 Load: By offloading static content delivery to CloudFront and S3, the EC2 instances behind the
Application Load Balancer only need to handle dynamic content and application logic. This reduces the overall
load on the EC2 instances and allows the Auto Scaling group to scale based on the actual application
workload, rather than static content requests.
Alternatives Considered:

**Option A** (Reserved Instances): While Reserved Instances can offer cost savings compared to On-Demand
Instances, they don't address the underlying problem of using compute instances to serve static content. It is
still less efficient than using a CDN.

**Option B** (Spot Instances): Spot Instances can be cheaper than On-Demand Instances, but they are subject to
interruption. Serving essential web content from Spot Instances can lead to application instability if the Spot
Instances are terminated, moreover it does not address the inefficiency of serving static content from EC2
instances.

**Option D** (Lambda and API Gateway): Using Lambda and API Gateway for static content delivery is not
generally recommended. While it's possible, it's more complex and potentially more expensive than using
CloudFront and S3. Lambda is better suited for dynamic content and serverless functions, and API Gateway
adds unnecessary overhead for simply serving static files.

Therefore, offloading the static contents to S3 and distributing it through CloudFront offers optimal cost
savings, enhanced performance, and simplified architecture compared to the other options.

---

## Question 442

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a centralized and scalable approach to cross-account data
sharing with minimal operational overhead using Lake Formation. Lake Formation's tag-based access control
allows you to categorize data based on tags and then grant permissions based on these tags. This simplifies
management, especially when dealing with petabytes of data across multiple accounts. By tagging the
specific data needed by the engineering team and granting the engineering team's accounts cross-account
permissions based on these tags, you achieve selective data sharing without needing to copy or move data.

**Option A**, copying data to a common account, introduces data duplication, increased storage costs, and the
need for a separate access management system. Managing data synchronization and ensuring data
consistency become added burdens.

**Option B**, granting permissions directly to individual users, is not scalable and creates a management
nightmare as the engineering team grows or data access requirements change. Modifying permissions for
each user across multiple accounts is operationally expensive.

**Option C**, using AWS Data Exchange, is more suitable for sharing data with external parties. It incurs higher

costs than native Lake Formation features and is not optimized for internal data sharing within an
organization. The overhead associated with data exchange, even privately, is significantly greater.
Tag-based access control allows you to centrally define who has access to what data based on the applied
tags. This significantly reduces the overhead associated with managing permissions for individual users or
roles across multiple accounts. Because Lake Formation manages the underlying access controls, the
operation is optimized for the AWS environment.
For further research, refer to the AWS documentation on Lake Formation's tag-based access control:
https://docs.aws.amazon.com/lake-formation/latest/dg/tag-based-access-control.html and cross-account
access: https://docs.aws.amazon.com/lake-formation/latest/dg/cross-account-permissions.html.

---

## Question 443

**Answer:** **A**

**Explanation:**

The correct answer is A. Use Amazon S3 with Transfer Acceleration to host the application.

Here's why:
S3 for Object Storage: Amazon S3 (Simple Storage Service) is designed for scalable, durable, and costeffective object storage. It's ideal for storing and serving large files like those being uploaded and
downloaded by the application's users. https://aws.amazon.com/s3/
Transfer Acceleration for Speed: S3 Transfer Acceleration leverages the globally distributed AWS edge
locations (same infrastructure as CloudFront) to accelerate data transfers to and from S3. When a user
uploads or downloads data, the connection is routed to the nearest edge location, which then uses optimized
network paths to transfer the data to or from the S3 bucket. This significantly reduces latency for users in
different geographic regions. https://aws.amazon.com/s3/transfer-acceleration/
Cost-Effectiveness: While Transfer Acceleration incurs some additional cost, it is generally a cost-effective
way to improve transfer speeds, especially for geographically dispersed users and large files. The increased
performance can outweigh the added expense.
Let's analyze why the other options are less suitable:

**B.** Use Amazon S3 with CacheControl headers to host the application. While CacheControl headers are
useful for controlling how browsers and CDNs cache content, they don't inherently accelerate uploads. They
primarily optimize download speeds for content that's already stored in S3 and cached.

**C.** Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application. EC2 with Auto

Scaling would be suitable for the application's compute layer (e.g., web servers, application servers).
CloudFront would be excellent for caching and distributing static content, but it doesn't directly accelerate
uploads. Also, using EC2 to store multi-gigabyte user data is not the most cost-effective approach. S3 is
better suited for large object storage.

**D.** Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application. ElastiCache is an inmemory data caching service. It is great for accelerating reads of frequently accessed data, but it doesn't
help with large file uploads or the global distribution of content in the way that Transfer Acceleration does.
Like option C, using EC2 as the primary storage for multi-gigabyte user data is not ideal.

---

## Question 444

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution to maximize reliability:
The Problem: The original architecture has several single points of failure: a single RDS instance and EC2
instances within a single Availability Zone. A manual deletion of the RDS instance caused a significant outage,
highlighting the need for redundancy and automated recovery mechanisms.
Why **Option B** is the Best Solution:
Multi-AZ RDS: Upgrading the RDS instance to Multi-AZ creates a synchronous standby replica in a different
Availability Zone. If the primary instance fails, the service automatically fails over to the standby, minimizing
downtime. https://aws.amazon.com/rds/features/multi-az/
Deletion Protection: Enabling deletion protection on the RDS instance prevents accidental deletion,
addressing the root cause of the initial outage.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.Overview.html
Application Load Balancer (ALB): An ALB distributes incoming traffic across multiple EC2 instances,
improving availability and scalability. It also performs health checks and automatically routes traffic away
from unhealthy instances. https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
EC2 Auto Scaling Group (ASG) across multiple AZs: Placing the EC2 instances in an ASG spanning multiple
Availability Zones ensures that if one AZ experiences an outage, the application remains available in other
AZs. The ASG automatically replaces unhealthy instances, maintaining the desired capacity.

https://aws.amazon.com/autoscaling/
Why Other Options are Less Suitable:

**Option A**: Deleting one EC2 instance reduces capacity and does not address Availability Zone failures.
Termination protection only protects a single instance from termination, and while multi-AZ RDS helps, this
option doesn't scale or balance load.

**Option C**: Introducing API Gateway and Lambda adds complexity and potential points of failure without
necessarily improving the core reliability of the web server tier. Writing to two DB instances manually through
Lambda can introduce data consistency issues and is not a standard high-availability configuration for RDS.

**Option D**: While using an ASG across multiple AZs and multi-AZ RDS are good ideas, using Spot Instances can
lead to interruptions if the Spot price increases, potentially reducing reliability. Also, while CloudWatch
alarms are helpful for monitoring, they don't automatically provide fault tolerance like a Multi-AZ setup and
an ALB. CloudWatch alarms would only notify about a problem after it already occurred.

In summary, option B provides a comprehensive approach to maximize the application's reliability by
addressing both data and compute layer redundancy, automating recovery, and preventing accidental data
loss, making it the optimal solution.

---

## Question 445

**Answer:** **A**

**Explanation:**

The most suitable solution is A: Using AWS DataSync to transfer the data to Amazon S3. Here's why:
Efficient Transfer: AWS DataSync is specifically designed for online data transfer between on-premises
storage and AWS services. It uses a purpose-built protocol and parallel data streams to accelerate the
transfer process, maximizing the 10 Gbps Direct Connect link.
No Disruption: DataSync supports incremental transfers. Only the changed data is copied after the initial
transfer, minimizing the impact on ongoing operations and allowing continuous access and updates during the
90-day window.
Large Dataset Handling: DataSync is designed to handle large datasets, making it a good fit for 700 TB.
S3 Integration: The data can be directly transferred into an Amazon S3 bucket, making it readily available for
cloud-based applications and analysis.

Let's examine why other options are less suitable:
B (Snowball Edge): While Snowball Edge is useful for transferring large datasets, it involves physical
shipping, which is not the most efficient approach given the Direct Connect link and the 90-day deadline. More
importantly, **Option B** includes mounting the S3 bucket on-premises, which is not how S3 works; it's not a
mountable filesystem.
C (rsync): rsync can transfer data, but it lacks the advanced features of DataSync, like built-in data
verification, encryption, bandwidth management, and optimized transfer protocols. It would likely be slower
and require more manual configuration.
D (Tapes): Transferring data via tapes is an outdated approach. It is extremely slow and impractical
considering the availability of a 10 Gbps Direct Connect link.

Therefore, DataSync provides the optimal balance of speed, efficiency, and minimal disruption for transferring
the 700 TB dataset within the given timeframe.
Supporting Documentation:
AWS DataSync: https://aws.amazon.com/datasync/

---

## Question 446

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution for meeting the company's data retention
requirement with the least operational overhead:
The core requirement is to retain all data (new and existing) in Amazon S3 for 7 years while adhering to legal
mandates. This necessitates immutability, preventing accidental or intentional deletion or modification during
the retention period.
S3 Object Lock: This is the ideal feature for implementing immutability. It prevents objects from being
deleted or overwritten for a specified retention period or until a specific date.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html
Compliance Retention Mode: This mode offers the strongest protection, as it prevents even users with
administrative privileges from deleting or shortening the retention period. Governance mode allows privileged
users to modify the retention settings, which could violate the legal requirement.
7-Year Retention Period: Setting the retention period to 7 years aligns directly with the legal retention
requirement.

Addressing Existing Data: Since the retention requirement applies to both new and existing data, all objects
in the S3 bucket must be protected by Object Lock. Simply enabling Object Lock won't retroactively protect
existing objects.
S3 Batch Operations: This feature provides a highly efficient way to apply Object Lock configurations to the
existing data in the S3 bucket. Instead of manually recopying objects (as in options B and C), S3 Batch
Operations automates the process, minimizing operational overhead. S3 Batch Operations allows you to
perform large-scale actions on S3 objects. https://docs.aws.amazon.com/AmazonS3/latest/userguide/batchops-intro.html
Let's examine why the other options are less suitable:

**Option A**: S3 Versioning is useful for recovering from accidental deletions or overwrites, but it does not
prevent deletion if proper permissions are present. Configuring MFA Delete adds an extra layer of security,
but an authorized user with MFA can still delete objects. S3 Lifecycle policies would eventually delete all data
after 7 years, but it doesn't guarantee immutability during those 7 years. Thus, **Option A** fails the immutability
requirement.
Options B and C: While they correctly use S3 Object Lock and the 7-year retention period, they suggest
recopying all existing objects to bring them into compliance. This is a manual and operationally expensive
approach compared to using S3 Batch Operations. Furthermore, using governance mode (**Option B**) does not
fully protect from deletion if a privileged user decides to override the settings.

---

## Question 447

**Answer:** **B**

**Explanation:**

The correct answer is B. Create an Amazon CloudFront distribution with an origin for each Region. Use
CloudFront health checks to route traffic.

Here's why:
Regional Failover Requirement: The prompt emphasizes deploying across multiple AWS Regions for Regional
failover. This means that if one Region experiences an outage, traffic should automatically be routed to a
healthy Region.
CloudFront for Global Content Delivery and Routing: Amazon CloudFront is a content delivery network (CDN)
that caches content closer to users. Crucially, it also offers origin failover capabilities based on health checks.
Origin Groups and Health Checks: By creating a CloudFront distribution with an origin group consisting of the

API Gateway endpoints in each Region, you can leverage CloudFront's health checks. If CloudFront detects
that an origin (a specific Region's API Gateway) is unhealthy, it automatically routes traffic to a healthy origin
in another Region. This provides seamless failover.
Stateless Application Compatibility: The web application is stateless, which means requests can be served
from any Region without causing data consistency issues. This perfectly aligns with CloudFront's ability to
route requests to different origins based on health.

Why other options are incorrect:
A (Route 53 active-active): While Route 53 can do active-active failover, it's primarily DNS-based. The failure
detection and switchover are slower than CloudFront. Also, it would introduce complexity in managing DNS
records and may not be as effective for API-driven failover.
C (Transit Gateway): Transit Gateway is for connecting VPCs and on-premises networks. It's overkill for
routing traffic to API Gateway endpoints for regional failover. It also doesn't offer the built-in health check
and failover capabilities suitable for this scenario.
D (Application Load Balancer): An ALB is regional. While you can create an ALB, the single ALB wouldn't
provide multi-region failover. ALB's are designed to distribute traffic within the same region, not across
multiple regions. The "target group" should be in one region.

In summary, CloudFront provides the most efficient and reliable solution by natively supporting origin failover
with health checks, aligning perfectly with the need for Regional failover and the stateless nature of the web
application.

---

## Question 448

**Answer:** **C**

**Explanation:**

The most critical single point of failure in the described architecture lies in the Management VPC's
connectivity to the data center via a single VPN connection and customer gateway. If this single VPN or
gateway fails, the Management VPC loses its connection to the data center, impacting critical functions
potentially dependent on the data center resources.

**Option C**, adding a second set of VPNs to the Management VPC from a second customer gateway device,
addresses this single point of failure directly. By establishing a redundant VPN connection through a separate
customer gateway, the solution ensures that if one VPN or customer gateway fails, the other will maintain

connectivity, preventing disruption to the Management VPC's operations. This establishes redundancy and
high availability for the data center connection.

**Option A** doesn't address the single point of failure in the Management VPC's data center connection. It only
adds connectivity between the Management and Production VPCs, not to the data center.

**Option B** is incorrect. A second virtual private gateway attached to the Management VPC doesn't solve the
single point of failure, as both gateways would still rely on the single VPN and customer gateway device for
data center connectivity.

**Option D**, adding a second VPC peering connection, only increases the bandwidth and resilience of
communication between the two VPCs but does not address the vulnerability of the single VPN connection
from the Management VPC to the data center. VPC peering is irrelevant to the data center connectivity
problem.

In summary, option C provides the necessary redundancy at the customer gateway level, mitigating the risk of
losing connectivity between the Management VPC and the on-premises data center. This aligns with best
practices for high availability in hybrid cloud environments.
Further reading on VPN gateway redundancy and high availability can be found in the AWS documentation:
AWS VPN Connections
AWS Site-to-Site VPN

---

## Question 449

**Answer:** **B**

**Explanation:**

The most cost-effective solution for migrating the Oracle database to AWS while maintaining third-party
database feature support and addressing resource constraints is Amazon RDS Custom for Oracle.

Here's a detailed justification:
RDS Custom for Oracle: This service offers managed database infrastructure similar to standard RDS, but
with the added capability to customize the underlying operating system and database settings. This is critical
for supporting third-party database features requiring privileged access that are not available in standard
RDS. https://aws.amazon.com/rds/custom/
Cost-Effectiveness: RDS Custom provides a balance between managed services and control. Migrating to
RDS Custom avoids the overhead of fully self-managing an Oracle database on EC2, reducing administrative
burden and operational costs associated with patching, backups, and infrastructure management.

Privileged Access: The key requirement is that the third-party features require privileged access, which is not
available in the normal RDS. RDS Custom provides OS and DB access.

**Option A** (RDS for Oracle): Standard RDS for Oracle does not allow privileged access or customization
needed for third-party features, thus not meeting the requirements. It would require the third-party
applications to be re-written.

**Option C** (EC2 AMI for Oracle): While offering full control, running Oracle on EC2 necessitates significant
administrative overhead for database management, patching, backups, and scaling. This contradicts the need
for reduced administrative burden and might not be the most cost-effective approach, considering the other
managed service offerings.

**Option D** (RDS for PostgreSQL): Rewriting the application code to remove Oracle APEX dependency would be
a time-consuming and costly undertaking and is not the question is asking. Migration should be done quickly.

Therefore, migrating to Amazon RDS Custom for Oracle is the most cost-effective solution that maintains
third-party database feature support while benefiting from managed database services, addressing the
company's limited resources.

---

## Question 450

**Answer:** **CEF**

**Explanation:**

Here's a detailed justification for why options C, E, and F are the most suitable for migrating the three-tier
web application to AWS, aligning with the Well-Architected Framework, and ensuring security, scalability, and
resiliency:

**E.** Use Elastic Load Balancers in front of the web tier. Control access by using security groups containing
references to each layer's security groups.
ELBs are essential for distributing incoming traffic across multiple EC2 instances in the web tier, providing
high availability and fault tolerance. This directly addresses scalability and resilience.

Security groups at the web tier should only allow traffic from the ELB, and the ELB acts as the single point of
entry, minimizing the attack surface.
Security group references enable a layered security approach, controlling traffic flow between tiers and
enhancing security posture.
Authoritative link: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

**F.** Use an Amazon RDS database Multi-AZ cluster deployment in private subnets. Allow database access
only from application tier security groups.
Multi-AZ RDS deployment ensures high availability and failover capabilities for the database tier. If the
primary database instance fails, RDS automatically fails over to a standby instance in another Availability
Zone.
Placing the database in private subnets restricts direct internet access and protects sensitive data.
Security group rules should be configured so that only EC2 instances in the application tier can access the
database. This minimizes potential access points and mitigates risks.
Authoritative link: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

**C.** Create a VPC across two Availability Zones. Refactor the application to host the web tier, application
tier, and database tier. Host each tier on its own private subnet with Auto Scaling groups for the web tier
and application tier.
A VPC across two Availability Zones provides infrastructure isolation and fault tolerance. If one Availability
Zone experiences an issue, the application can continue running in the other.
Refactoring the application into three tiers promotes modularity and easier management. Each tier can be
scaled and secured independently.
Hosting each tier in its own private subnet improves security by isolating each tier from direct internet access.
The web tier typically resides in a public subnet for internet-facing access.
Auto Scaling groups enable automatic scaling of the web and application tiers based on demand, ensuring
application performance and resilience.
Authoritative link: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Introduction.html

Why the other options are incorrect:

**A:** While creating a VPC and using Auto Scaling is helpful, maintaining the existing monolithic architecture on
EC2 doesn't provide the full benefits of the cloud in terms of scalability and modularity. It doesn't fully
leverage AWS best practices.

**B:** Setting up security groups and using a single RDS instance is a basic improvement, but it doesn't address
high availability and fault tolerance for the database tier, which is a critical aspect of the Well-Architected
Framework.

---

# Quick Answer Sheet

Question 401: A
Question 402: A
Question 403: D
Question 404: D
Question 405: DE
Question 406: CD
Question 407: D
Question 408: B
Question 409: C
Question 410: B
Question 411: C
Question 412: D
Question 413: B
Question 414: B
Question 415: A
Question 416: BD
Question 417: C
Question 418: B
Question 419: CE
Question 420: D
Question 421: B
Question 422: D
Question 423: AB
Question 424: B
Question 425: C
Question 426: A
Question 427: B
Question 428: B
Question 429: D
Question 430: BC
Question 431: B
Question 432: B
Question 433: C
Question 434: A
Question 435: A
Question 436: A
Question 437: B
Question 438: D
Question 439: A
Question 440: AC
Question 441: C
Question 442: D
Question 443: A
Question 444: B
Question 445: A
Question 446: D
Question 447: B
Question 448: C
Question 449: B
Question 450: CEF
