# AWS SAA-C03 Practice Test: Questions 751-800

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 751

A solutions architect is designing an AWS Identity and Access Management (IAM) authorization model for a
company's AWS account. The company has designated five specific employees to have full access to AWS
services and resources in the AWS account.
The solutions architect has created an IAM user for each of the five designated employees and has created an IAM
user group.
Which solution will meet these requirements?

**A.** Attach the AdministratorAccess resource-based policy to the IAM user group. Place each of the five
designated employee IAM users in the IAM user group.

**B.** Attach the SystemAdministrator identity-based policy to the IAM user group. Place each of the five
designated employee IAM users in the IAM user group.

**C.** Attach the AdministratorAccess identity-based policy to the IAM user group. Place each of the five
designated employee IAM users in the IAM user group.

**D.** Attach the SystemAdministrator resource-based policy to the IAM user group. Place each of the five
designated employee IAM users in the IAM user group.

---

## Question 752

A company has a multi-tier payment processing application that is based on virtual machines (VMs). The
communication between the tiers occurs asynchronously through a third-party middleware solution that
guarantees exactly-once delivery.
The company needs a solution that requires the least amount of infrastructure management. The solution must
guarantee exactly-once delivery for application messaging.
Which combination of actions will meet these requirements? (Choose two.)

**A.** Use AWS Lambda for the compute layers in the architecture.

**B.** Use Amazon EC2 instances for the compute layers in the architecture.

**C.** Use Amazon Simple Notification Service (Amazon SNS) as the messaging component between the compute
layers.

**D.** Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the messaging component between the
compute layers.

**E.** Use containers that are based on Amazon Elastic Kubernetes Service (Amazon EKS) for the compute layers in
the architecture.

---

## Question 753

A company has a nightly batch processing routine that analyzes report files that an on-premises file system
receives daily through SFTP. The company wants to move the solution to the AWS Cloud. The solution must be
highly available and resilient. The solution also must minimize operational effort.
Which solution meets these requirements?

**A.** Deploy AWS Transfer for SFTP and an Amazon Elastic File System (Amazon EFS) file system for storage. Use
an Amazon EC2 instance in an Auto Scaling group with a scheduled scaling policy to run the batch operation.

**B.** Deploy an Amazon EC2 instance that runs Linux and an SFTP service. Use an Amazon Elastic Block Store
(Amazon EBS) volume for storage. Use an Auto Scaling group with the minimum number of instances and
desired number of instances set to 1.

**C.** Deploy an Amazon EC2 instance that runs Linux and an SFTP service. Use an Amazon Elastic File System
(Amazon EFS) file system for storage. Use an Auto Scaling group with the minimum number of instances and
desired number of instances set to 1.

**D.** Deploy AWS Transfer for SFTP and an Amazon S3 bucket for storage. Modify the application to pull the batch
files from Amazon S3 to an Amazon EC2 instance for processing. Use an EC2 instance in an Auto Scaling group
with a scheduled scaling policy to run the batch operation.

---

## Question 754

A company has users all around the world accessing its HTTP-based application deployed on Amazon EC2
instances in multiple AWS Regions. The company wants to improve the availability and performance of the
application. The company also wants to protect the application against common web exploits that may affect
availability, compromise security, or consume excessive resources. Static IP addresses are required.
What should a solutions architect recommend to accomplish this?

**A.** Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs.
Create an accelerator using AWS Global Accelerator and register the NLBs as endpoints.

**B.** Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Deploy AWS WAF on the
ALBs. Create an accelerator using AWS Global Accelerator and register the ALBs as endpoints.

**C.** Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs.
Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to
route requests to the NLBs.

**D.** Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Create an Amazon
CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to
the ALBs. Deploy AWS WAF on the CloudFront distribution.

---

## Question 755

A company’s data platform uses an Amazon Aurora MySQL database. The database has multiple read replicas and
multiple DB instances across different Availability Zones. Users have recently reported errors from the database
that indicate that there are too many connections. The company wants to reduce the failover time by 20% when a
read replica is promoted to primary writer.
Which solution will meet this requirement?

**A.** Switch from Aurora to Amazon RDS with Multi-AZ cluster deployment.

**B.** Use Amazon RDS Proxy in front of the Aurora database.

**C.** Switch to Amazon DynamoDB with DynamoDB Accelerator (DAX) for read connections.

**D.** Switch to Amazon Redshift with relocation capability.

---

## Question 756

A company stores text files in Amazon S3. The text files include customer chat messages, date and time
information, and customer personally identifiable information (PII).
The company needs a solution to provide samples of the conversations to an external service provider for quality
control. The external service provider needs to randomly pick sample conversations up to the most recent
conversation. The company must not share the customer PII with the external service provider. The solution must
scale when the number of customer conversations increases.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Object Lambda Access Point. Create an AWS Lambda function that redacts the PII when the
function reads the file. Instruct the external service provider to access the Object Lambda Access Point.

**B.** Create a batch process on an Amazon EC2 instance that regularly reads all new files, redacts the PII from the
files, and writes the redacted files to a different S3 bucket. Instruct the external service provider to access the
bucket that does not contain the PII.

**B.** Create a web application on an Amazon EC2 instance that presents a list of the files, redacts the PII from the
files, and allows the external service provider to download new versions of the files that have the PII redacted.

**D.** Create an Amazon DynamoDB table. Create an AWS Lambda function that reads only the data in the files that
does not contain PII. Configure the Lambda function to store the non-PII data in the DynamoDB table when a
new file is written to Amazon S3. Grant the external service provider access to the DynamoDB table.

---

## Question 757

A company is running a legacy system on an Amazon EC2 instance. The application code cannot be modified, and
the system cannot run on more than one instance. A solutions architect must design a resilient solution that can
improve the recovery time for the system.
What should the solutions architect recommend to meet these requirements?

**A.** Enable termination protection for the EC2 instance.

**B.** Configure the EC2 instance for Multi-AZ deployment.

**C.** Create an Amazon CloudWatch alarm to recover the EC2 instance in case of failure.

**D.** Launch the EC2 instance with two Amazon Elastic Block Store (Amazon EBS) volumes that use RAID
configurations for storage redundancy.

---

## Question 758

A company wants to deploy its containerized application workloads to a VPC across three Availability Zones. The
company needs a solution that is highly available across Availability Zones. The solution must require minimal
changes to the application.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon Elastic Container Service (Amazon ECS). Configure Amazon ECS Service Auto Scaling to use
target tracking scaling. Set the minimum capacity to 3. Set the task placement strategy type to spread with an
Availability Zone attribute.

**B.** Use Amazon Elastic Kubernetes Service (Amazon EKS) self-managed nodes. Configure Application Auto
Scaling to use target tracking scaling. Set the minimum capacity to 3.

**C.** Use Amazon EC2 Reserved Instances. Launch three EC2 instances in a spread placement group. Configure an

Auto Scaling group to use target tracking scaling. Set the minimum capacity to 3.

**D.** Use an AWS Lambda function. Configure the Lambda function to connect to a VPC. Configure Application
Auto Scaling to use Lambda as a scalable target. Set the minimum capacity to 3.

---

## Question 759

A media company stores movies in Amazon S3. Each movie is stored in a single video file that ranges from 1 GB to
10 GB in size.
The company must be able to provide the streaming content of a movie within 5 minutes of a user purchase. There
is higher demand for movies that are less than 20 years old than for movies that are more than 20 years old. The
company wants to minimize hosting service costs based on demand.

Which solution will meet these requirements?

**A.** Store all media content in Amazon S3. Use S3 Lifecycle policies to move media data into the Infrequent
Access tier when the demand for a movie decreases.

**B.** Store newer movie video files in S3 Standard. Store older movie video files in S3 Standard-infrequent Access
(S3 Standard-IA). When a user orders an older movie, retrieve the video file by using standard retrieval.

**C.** Store newer movie video files in S3 Intelligent-Tiering. Store older movie video files in S3 Glacier Flexible
Retrieval. When a user orders an older movie, retrieve the video file by using expedited retrieval.

**D.** Store newer movie video files in S3 Standard. Store older movie video files in S3 Glacier Flexible Retrieval.
When a user orders an older movie, retrieve the video file by using bulk retrieval.

---

## Question 760

A solutions architect needs to design the architecture for an application that a vendor provides as a Docker

container image. The container needs 50 GB of storage available for temporary files. The infrastructure must be
serverless.
Which solution meets these requirements with the LEAST operational overhead?

**A.** Create an AWS Lambda function that uses the Docker container image with an Amazon S3 mounted volume
that has more than 50 GB of space.

**B.** Create an AWS Lambda function that uses the Docker container image with an Amazon Elastic Block Store
(Amazon EBS) volume that has more than 50 GB of space.

**C.** Create an Amazon Elastic Container Service (Amazon ECS) cluster that uses the AWS Fargate launch type.
Create a task definition for the container image with an Amazon Elastic File System (Amazon EFS) volume.
Create a service with that task definition.

**D.** Create an Amazon Elastic Container Service (Amazon ECS) cluster that uses the Amazon EC2 launch type
with an Amazon Elastic Block Store (Amazon EBS) volume that has more than 50 GB of space. Create a task
definition for the container image. Create a service with that task definition.

---

## Question 761

A company needs to use its on-premises LDAP directory service to authenticate its users to the AWS Management
Console. The directory service is not compatible with Security Assertion Markup Language (SAML).
Which solution meets these requirements?

**A.** Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.

**B.** Create an IAM policy that uses AWS credentials, and integrate the policy into LDAP.

**C.** Set up a process that rotates the IAM credentials whenever LDAP credentials are updated.

**D.** Develop an on-premises custom identity broker application or process that uses AWS Security Token Service
(AWS STS) to get short-lived credentials.

---

## Question 762

A company stores multiple Amazon Machine Images (AMIs) in an AWS account to launch its Amazon EC2
instances. The AMIs contain critical data and configurations that are necessary for the company’s operations. The
company wants to implement a solution that will recover accidentally deleted AMIs quickly and efficiently.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create Amazon Elastic Block Store (Amazon EBS) snapshots of the AMIs. Store the snapshots in a separate
AWS account.

**B.** Copy all AMIs to another AWS account periodically.

**C.** Create a retention rule in Recycle Bin.

**D.** Upload the AMIs to an Amazon S3 bucket that has Cross-Region Replication.

---

## Question 763

A company has 150 TB of archived image data stored on-premises that needs to be moved to the AWS Cloud within

the next month. The company’s current network connection allows up to 100 Mbps uploads for this purpose during
the night only.
What is the MOST cost-effective mechanism to move this data and meet the migration deadline?

**A.** Use AWS Snowmobile to ship the data to AWS.

**B.** Order multiple AWS Snowball devices to ship the data to AWS.

**C.** Enable Amazon S3 Transfer Acceleration and securely upload the data.

**D.** Create an Amazon S3 VPC endpoint and establish a VPN to upload the data.

---

## Question 764

A company wants to migrate its three-tier application from on premises to AWS. The web tier and the application
tier are running on third-party virtual machines (VMs). The database tier is running on MySQL.
The company needs to migrate the application by making the fewest possible changes to the architecture. The
company also needs a database solution that can restore data to a specific point in time.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Migrate the web tier and the application tier to Amazon EC2 instances in private subnets. Migrate the
database tier to Amazon RDS for MySQL in private subnets.

**B.** Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances
in private subnets. Migrate the database tier to Amazon Aurora MySQL in private subnets.

**C.** Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances
in private subnets. Migrate the database tier to Amazon RDS for MySQL in private subnets.

**D.** Migrate the web tier and the application tier to Amazon EC2 instances in public subnets. Migrate the
database tier to Amazon Aurora MySQL in public subnets.

---

## Question 765

A development team is collaborating with another company to create an integrated product. The other company
needs to access an Amazon Simple Queue Service (Amazon SQS) queue that is contained in the development
team's account. The other company wants to poll the queue without giving up its own account permissions to do
so.
How should a solutions architect provide access to the SQS queue?

**A.** Create an instance profile that provides the other company access to the SQS queue.

**B.** Create an IAM policy that provides the other company access to the SQS queue.

**C.** Create an SQS access policy that provides the other company access to the SQS queue.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) access policy that provides the other company
access to the SQS queue.

---

## Question 766

A company’s developers want a secure way to gain SSH access on the company's Amazon EC2 instances that run
the latest version of Amazon Linux. The developers work remotely and in the corporate office.
The company wants to use AWS services as a part of the solution. The EC2 instances are hosted in a VPC private
subnet and access the internet through a NAT gateway that is deployed in a public subnet.
What should a solutions architect do to meet these requirements MOST cost-effectively?

**A.** Create a bastion host in the same subnet as the EC2 instances. Grant the ec2:CreateVpnConnection IAM
permission to the developers. Install EC2 Instance Connect so that the developers can connect to the EC2
instances.

**B.** Create an AWS Site-to-Site VPN connection between the corporate network and the VPC. Instruct the
developers to use the Site-to-Site VPN connection to access the EC2 instances when the developers are on the
corporate network. Instruct the developers to set up another VPN connection for access when they work
remotely.

**C.** Create a bastion host in the public subnet of the VPConfigure the security groups and SSH keys of the
bastion host to only allow connections and SSH authentication from the developers’ corporate and remote
networks. Instruct the developers to connect through the bastion host by using SSH to reach the EC2
instances.

**D.** Attach the AmazonSSMManagedInstanceCore IAM policy to an IAM role that is associated with the EC2
instances. Instruct the developers to use AWS Systems Manager Session Manager to access the EC2 instances.

---

## Question 767

A pharmaceutical company is developing a new drug. The volume of data that the company generates has grown
exponentially over the past few months. The company's researchers regularly require a subset of the entire
dataset to be immediately available with minimal lag. However, the entire dataset does not need to be accessed on
a daily basis. All the data currently resides in on-premises storage arrays, and the company wants to reduce
ongoing capital expenses.
Which storage solution should a solutions architect recommend to meet these requirements?

**A.** Run AWS DataSync as a scheduled cron job to migrate the data to an Amazon S3 bucket on an ongoing basis.

**B.** Deploy an AWS Storage Gateway file gateway with an Amazon S3 bucket as the target storage. Migrate the
data to the Storage Gateway appliance.

**C.** Deploy an AWS Storage Gateway volume gateway with cached volumes with an Amazon S3 bucket as the
target storage. Migrate the data to the Storage Gateway appliance.

**D.** Configure an AWS Site-to-Site VPN connection from the on-premises environment to AWS. Migrate data to
an Amazon Elastic File System (Amazon EFS) file system.

---

## Question 768

A company has a business-critical application that runs on Amazon EC2 instances. The application stores data in
an Amazon DynamoDB table. The company must be able to revert the table to any point within the last 24 hours.
Which solution meets these requirements with the LEAST operational overhead?

**A.** Configure point-in-time recovery for the table.

**B.** Use AWS Backup for the table.

**C.** Use an AWS Lambda function to make an on-demand backup of the table every hour.

**D.** Turn on streams on the table to capture a log of all changes to the table in the last 24 hours. Store a copy of
the stream in an Amazon S3 bucket.

---

## Question 769

A company hosts an application used to upload files to an Amazon S3 bucket. Once uploaded, the files are
processed to extract metadata, which takes less than 5 seconds. The volume and frequency of the uploads varies
from a few files each hour to hundreds of concurrent uploads. The company has asked a solutions architect to
design a cost-effective architecture that will meet these requirements.
What should the solutions architect recommend?

**A.** Configure AWS CloudTrail trails to log S3 API calls. Use AWS AppSync to process the files.

**B.** Configure an object-created event notification within the S3 bucket to invoke an AWS Lambda function to
process the files.

**C.** Configure Amazon Kinesis Data Streams to process and send data to Amazon S3. Invoke an AWS Lambda
function to process the files.

**D.** Configure an Amazon Simple Notification Service (Amazon SNS) topic to process the files uploaded to
Amazon S3. Invoke an AWS Lambda function to process the files.

---

## Question 770

A company’s application is deployed on Amazon EC2 instances and uses AWS Lambda functions for an eventdriven architecture. The company uses nonproduction development environments in a different AWS account to
test new features before the company deploys the features to production.
The production instances show constant usage because of customers in different time zones. The company uses
nonproduction instances only during business hours on weekdays. The company does not use the nonproduction
instances on the weekends. The company wants to optimize the costs to run its application on AWS.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use On-Demand Instances for the production instances. Use Dedicated Hosts for the nonproduction
instances on weekends only.

**B.** Use Reserved Instances for the production instances and the nonproduction instances. Shut down the
nonproduction instances when not in use.

**C.** Use Compute Savings Plans for the production instances. Use On-Demand Instances for the nonproduction
instances. Shut down the nonproduction instances when not in use.

**D.** Use Dedicated Hosts for the production instances. Use EC2 Instance Savings Plans for the nonproduction
instances.

---

## Question 771

A company stores data in an on-premises Oracle relational database. The company needs to make the data
available in Amazon Aurora PostgreSQL for analysis. The company uses an AWS Site-to-Site VPN connection to
connect its on-premises network to AWS.
The company must capture the changes that occur to the source database during the migration to Aurora
PostgreSQL.
Which solution will meet these requirements?

**A.** Use the AWS Schema Conversion Tool (AWS SCT) to convert the Oracle schema to Aurora PostgreSQL
schema. Use the AWS Database Migration Service (AWS DMS) full-load migration task to migrate the data.

**B.** Use AWS DataSync to migrate the data to an Amazon S3 bucket. Import the S3 data to Aurora PostgreSQL
by using the Aurora PostgreSQL aws_s3 extension.

**C.** Use the AWS Schema Conversion Tool (AWS SCT) to convert the Oracle schema to Aurora PostgreSQL
schema. Use AWS Database Migration Service (AWS DMS) to migrate the existing data and replicate the
ongoing changes.

**D.** Use an AWS Snowball device to migrate the data to an Amazon S3 bucket. Import the S3 data to Aurora
PostgreSQL by using the Aurora PostgreSQL aws_s3 extension.

---

## Question 772

A company built an application with Docker containers and needs to run the application in the AWS Cloud. The
company wants to use a managed service to host the application.
The solution must scale in and out appropriately according to demand on the individual container services. The
solution also must not result in additional operational overhead or infrastructure to manage.
Which solutions will meet these requirements? (Choose two.)

**A.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.

**B.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate.

**C.** Provision an Amazon API Gateway API. Connect the API to AWS Lambda to run the containers.

**D.** Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes.

**E.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes.

---

## Question 773

An ecommerce company is running a seasonal online sale. The company hosts its website on Amazon EC2
instances spanning multiple Availability Zones. The company wants its website to manage sudden traffic increases
during the sale.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an Auto Scaling group that is large enough to handle peak traffic load. Stop half of the Amazon EC2
instances. Configure the Auto Scaling group to use the stopped instances to scale out when traffic increases.

**B.** Create an Auto Scaling group for the website. Set the minimum size of the Auto Scaling group so that it can
handle high traffic volumes without the need to scale out.

**C.** Use Amazon CloudFront and Amazon ElastiCache to cache dynamic content with an Auto Scaling group set
as the origin. Configure the Auto Scaling group with the instances necessary to populate CloudFront and
ElastiCache. Scale in after the cache is fully populated.

**D.** Configure an Auto Scaling group to scale out as traffic increases. Create a launch template to start new
instances from a preconfigured Amazon Machine Image (AMI).

---

## Question 774

A solutions architect must provide an automated solution for a company's compliance policy that states security
groups cannot include a rule that allows SSH from 0.0.0.0/0. The company needs to be notified if there is any
breach in the policy. A solution is needed as soon as possible.
What should the solutions architect do to meet these requirements with the LEAST operational overhead?

**A.** Write an AWS Lambda script that monitors security groups for SSH being open to 0.0.0.0/0 addresses and
creates a notification every time it finds one.

**B.** Enable the restricted-ssh AWS Config managed rule and generate an Amazon Simple Notification Service
(Amazon SNS) notification when a noncompliant rule is created.

**C.** Create an IAM role with permissions to globally open security groups and network ACLs. Create an Amazon
Simple Notification Service (Amazon SNS) topic to generate a notification every time the role is assumed by a
user.

**D.** Configure a service control policy (SCP) that prevents non-administrative users from creating or editing
security groups. Create a notification in the ticketing system when a user requests a rule that needs
administrator permissions.

---

## Question 775

Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes.
A company has deployed an application in an AWS account. The application consists of microservices that run on
AWS Lambda and Amazon Elastic Kubernetes Service (Amazon EKS). A separate team supports each microservice.
The company has multiple AWS accounts and wants to give each team its own account for its microservices.
A solutions architect needs to design a solution that will provide service-to-service communication over HTTPS
(port 443). The solution also must provide a service registry for service discovery.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Create an inspection VPC. Deploy an AWS Network Firewall firewall to the inspection VPC. Attach the
inspection VPC to a new transit gateway. Route VPC-to-VPC traffic to the inspection VPC. Apply firewall rules
to allow only HTTPS communication.

**B.** Create a VPC Lattice service network. Associate the microservices with the service network. Define HTTPS
listeners for each service. Register microservice compute resources as targets. Identify VPCs that need to
communicate with the services. Associate those VPCs with the service network.

**C.** Create a Network Load Balancer (NLB) with an HTTPS listener and target groups for each microservice.
Create an AWS PrivateLink endpoint service for each microservice. Create an interface VPC endpoint in each
VPC that needs to consume that microservice.

**D.** Create peering connections between VPCs that contain microservices. Create a prefix list for each service
that requires a connection to a client. Create route tables to route traffic to the appropriate VPC. Create
security groups to allow only HTTPS communication.

---

## Question 776

A company has a mobile game that reads most of its metadata from an Amazon RDS DB instance. As the game
increased in popularity, developers noticed slowdowns related to the game's metadata load times. Performance
metrics indicate that simply scaling the database will not help. A solutions architect must explore all options that
include capabilities for snapshots, replication, and sub-millisecond response times.
What should the solutions architect recommend to solve these issues?

**A.** Migrate the database to Amazon Aurora with Aurora Replicas.

**B.** Migrate the database to Amazon DynamoDB with global tables.

**C.** Add an Amazon ElastiCache for Redis layer in front of the database.

**D.** Add an Amazon ElastiCache for Memcached layer in front of the database.

---

## Question 777

A company uses AWS Organizations for its multi-account AWS setup. The security organizational unit (OU) of the
company needs to share approved Amazon Machine Images (AMIs) with the development OU. The AMIs are
created by using AWS Key Management Service (AWS KMS) encrypted snapshots.
Which solution will meet these requirements? (Choose two.)

**A.** Add the development team's OU Amazon Resource Name (ARN) to the launch permission list for the AMIs.

**B.** Add the Organizations root Amazon Resource Name (ARN) to the launch permission list for the AMIs.

**C.** Update the key policy to allow the development team's OU to use the AWS KMS keys that are used to
decrypt the snapshots.

**D.** Add the development team’s account Amazon Resource Name (ARN) to the launch permission list for the
AMIs.

**E.** Recreate the AWS KMS key. Add a key policy to allow the Organizations root Amazon Resource Name (ARN)
to use the AWS KMS key.

---

## Question 778

A data analytics company has 80 offices that are distributed globally. Each office hosts 1 PB of data and has
between 1 and 2 Gbps of internet bandwidth.
The company needs to perform a one-time migration of a large amount of data from its offices to Amazon S3. The
company must complete the migration within 4 weeks.
Which solution will meet these requirements MOST cost-effectively?

**A.** Establish a new 10 Gbps AWS Direct Connect connection to each office. Transfer the data to Amazon S3.

**B.** Use multiple AWS Snowball Edge storage-optimized devices to store and transfer the data to Amazon S3.

**C.** Use an AWS Snowmobile to store and transfer the data to Amazon S3.

**D.** Set up an AWS Storage Gateway Volume Gateway to transfer the data to Amazon S3.

---

## Question 779

A company has an Amazon Elastic File System (Amazon EFS) file system that contains a reference dataset. The
company has applications on Amazon EC2 instances that need to read the dataset. However, the applications must
not be able to change the dataset. The company wants to use IAM access control to prevent the applications from

being able to modify or delete the dataset.
Which solution will meet these requirements?

**A.** Mount the EFS file system in read-only mode from within the EC2 instances.

**B.** Create a resource policy for the EFS file system that denies the elasticfilesystem:ClientWrite action to the
IAM roles that are attached to the EC2 instances.

**C.** Create an identity policy for the EFS file system that denies the elasticfilesystem:ClientWrite action on the
EFS file system.

**D.** Create an EFS access point for each application. Use Portable Operating System Interface (POSIX) file
permissions to allow read-only access to files in the root directory.

---

## Question 780

A company has hired an external vendor to perform work in the company’s AWS account. The vendor uses an
automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to
the company’s AWS account. The company needs to grant the vendor access to the company’s AWS account.
Which solution will meet these requirements MOST securely?

**A.** Create an IAM role in the company’s account to delegate access to the vendor’s IAM role. Attach the
appropriate IAM policies to the role for the permissions that the vendor requires.

**B.** Create an IAM user in the company’s account with a password that meets the password complexity
requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.

**C.** Create an IAM group in the company’s account. Add the automated tool’s IAM user from the vendor account
to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.

**D.** Create an IAM user in the company’s account that has a permission boundary that allows the vendor’s
account. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.

---

## Question 781

A company wants to run its experimental workloads in the AWS Cloud. The company has a budget for cloud
spending. The company's CFO is concerned about cloud spending accountability for each department. The CFO
wants to receive notification when the spending threshold reaches 60% of the budget.
Which solution will meet these requirements?

**A.** Use cost allocation tags on AWS resources to label owners. Create usage budgets in AWS Budgets. Add an
alert threshold to receive notification when spending exceeds 60% of the budget.

**B.** Use AWS Cost Explorer forecasts to determine resource owners. Use AWS Cost Anomaly Detection to create
alert threshold notifications when spending exceeds 60% of the budget.

**C.** Use cost allocation tags on AWS resources to label owners. Use AWS Support API on AWS Trusted Advisor to
create alert threshold notifications when spending exceeds 60% of the budget.

**D.** Use AWS Cost Explorer forecasts to determine resource owners. Create usage budgets in AWS Budgets. Add
an alert threshold to receive notification when spending exceeds 60% of the budget.

---

## Question 782

A company wants to deploy an internal web application on AWS. The web application must be accessible only from

the company's office. The company needs to download security patches for the web application from the internet.
The company has created a VPC and has configured an AWS Site-to-Site VPN connection to the company's office.
A solutions architect must design a secure architecture for the web application.
Which solution will meet these requirements?

**A.** Deploy the web application on Amazon EC2 instances in public subnets behind a public Application Load
Balancer (ALB). Attach an internet gateway to the VPC. Set the inbound source of the ALB's security group to
0.0.0.0/0.

**B.** Deploy the web application on Amazon EC2 instances in private subnets behind an internal Application Load
Balancer (ALB). Deploy NAT gateways in public subnets. Attach an internet gateway to the VPC. Set the
inbound source of the ALB's security group to the company's office network CIDR block.

**C.** Deploy the web application on Amazon EC2 instances in public subnets behind an internal Application Load
Balancer (ALB). Deploy NAT gateways in private subnets. Attach an internet gateway to the VPSet the
outbound destination of the ALB’s security group to the company's office network CIDR block.

**D.** Deploy the web application on Amazon EC2 instances in private subnets behind a public Application Load
Balancer (ALB). Attach an internet gateway to the VPC. Set the outbound destination of the ALB’s security
group to 0.0.0.0/0.

---

## Question 783

A company maintains its accounting records in a custom application that runs on Amazon EC2 instances. The
company needs to migrate the data to an AWS managed service for development and maintenance of the
application data. The solution must require minimal operational support and provide immutable, cryptographically
verifiable logs of data changes.
Which solution will meet these requirements MOST cost-effectively?

**A.** Copy the records from the application into an Amazon Redshift cluster.

**B.** Copy the records from the application into an Amazon Neptune cluster.

**C.** Copy the records from the application into an Amazon Timestream database.

**D.** Copy the records from the application into an Amazon Quantum Ledger Database (Amazon QLDB) ledger.

---

## Question 784

A company's marketing data is uploaded from multiple sources to an Amazon S3 bucket. A series of data

preparation jobs aggregate the data for reporting. The data preparation jobs need to run at regular intervals in
parallel. A few jobs need to run in a specific order later.
The company wants to remove the operational overhead of job error handling, retry logic, and state management.
Which solution will meet these requirements?

**A.** Use an AWS Lambda function to process the data as soon as the data is uploaded to the S3 bucket. Invoke
other Lambda functions at regularly scheduled intervals.

**B.** Use Amazon Athena to process the data. Use Amazon EventBridge Scheduler to invoke Athena on a regular
internal.

**C.** Use AWS Glue DataBrew to process the data. Use an AWS Step Functions state machine to run the DataBrew
data preparation jobs.

**D.** Use AWS Data Pipeline to process the data. Schedule Data Pipeline to process the data once at midnight.

---

## Question 785

A solutions architect is designing a payment processing application that runs on AWS Lambda in private subnets
across multiple Availability Zones. The application uses multiple Lambda functions and processes millions of
transactions each day.
The architecture must ensure that the application does not process duplicate payments.
Which solution will meet these requirements?

**A.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon S3 bucket. Configure the
S3 bucket with an event notification to invoke another Lambda function to process the due payments.

**B.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service
(Amazon SQS) queue. Configure another Lambda function to poll the SQS queue and to process the due
payments.

**C.** Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service
(Amazon SQS) FIFO queue. Configure another Lambda function to poll the FIFO queue and to process the due
payments.

**D.** Use Lambda to retrieve all due payments. Store the due payments in an Amazon DynamoDB table. Configure
streams on the DynamoDB table to invoke another Lambda function to process the due payments.

---

## Question 786

A company runs multiple workloads in its on-premises data center. The company's data center cannot scale fast
enough to meet the company's expanding business needs. The company wants to collect usage and configuration
data about the on-premises servers and workloads to plan a migration to AWS.
Which solution will meet these requirements?

**A.** Set the home AWS Region in AWS Migration Hub. Use AWS Systems Manager to collect data about the onpremises servers.

**B.** Set the home AWS Region in AWS Migration Hub. Use AWS Application Discovery Service to collect data
about the on-premises servers.

**C.** Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Trusted Advisor
to collect data about the on-premises servers.

**D.** Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Database
Migration Service (AWS DMS) to collect data about the on-premises servers.

---

## Question 787

A company has an organization in AWS Organizations that has all features enabled. The company requires that all
API calls and logins in any existing or new AWS account must be audited. The company needs a managed solution
to prevent additional work and to minimize costs. The company also needs to know when any AWS account is not
compliant with the AWS Foundational Security Best Practices (FSBP) standard.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Deploy an AWS Control Tower environment in the Organizations management account. Enable AWS Security
Hub and AWS Control Tower Account Factory in the environment.

**B.** Deploy an AWS Control Tower environment in a dedicated Organizations member account. Enable AWS
Security Hub and AWS Control Tower Account Factory in the environment.

**C.** Use AWS Managed Services (AMS) Accelerate to build a multi-account landing zone (MALZ). Submit an RFC
to self-service provision Amazon GuardDuty in the MALZ.

**D.** Use AWS Managed Services (AMS) Accelerate to build a multi-account landing zone (MALZ). Submit an RFC
to self-service provision AWS Security Hub in the MALZ.

---

## Question 788

A company has stored 10 TB of log files in Apache Parquet format in an Amazon S3 bucket. The company
occasionally needs to use SQL to analyze the log files.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an Amazon Aurora MySQL database. Migrate the data from the S3 bucket into Aurora by using AWS
Database Migration Service (AWS DMS). Issue SQL statements to the Aurora database.

**B.** Create an Amazon Redshift cluster. Use Redshift Spectrum to run SQL statements directly on the data in the
S3 bucket.

**C.** Create an AWS Glue crawler to store and retrieve table metadata from the S3 bucket. Use Amazon Athena to
run SQL statements directly on the data in the S3 bucket.

**D.** Create an Amazon EMR cluster. Use Apache Spark SQL to run SQL statements directly on the data in the S3
bucket.

---

## Question 789

A company needs a solution to prevent AWS CloudFormation stacks from deploying AWS Identity and Access
Management (IAM) resources that include an inline policy or “*” in the statement. The solution must also prohibit
deployment of Amazon EC2 instances with public IP addresses. The company has AWS Control Tower enabled in
its organization in AWS Organizations.
Which solution will meet these requirements?

**A.** Use AWS Control Tower proactive controls to block deployment of EC2 instances with public IP addresses
and inline policies with elevated access or “*”.

**B.** Use AWS Control Tower detective controls to block deployment of EC2 instances with public IP addresses
and inline policies with elevated access or “*”.

**C.** Use AWS Config to create rules for EC2 and IAM compliance. Configure the rules to run an AWS Systems
Manager Session Manager automation to delete a resource when it is not compliant.

**D.** Use a service control policy (SCP) to block actions for the EC2 instances and IAM resources if the actions lead
to noncompliance.

---

## Question 790

A company's web application that is hosted in the AWS Cloud recently increased in popularity. The web application
currently exists on a single Amazon EC2 instance in a single public subnet. The web application has not been able
to meet the demand of the increased web traffic.
The company needs a solution that will provide high availability and scalability to meet the increased user demand
without rewriting the web application.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Replace the EC2 instance with a larger compute optimized instance.

**B.** Configure Amazon EC2 Auto Scaling with multiple Availability Zones in private subnets.

**C.** Configure a NAT gateway in a public subnet to handle web requests.

**D.** Replace the EC2 instance with a larger memory optimized instance.

**E.** Configure an Application Load Balancer in a public subnet to distribute web traffic.

---

## Question 791

A company has AWS Lambda functions that use environment variables. The company does not want its developers
to see environment variables in plaintext.
Which solution will meet these requirements?

**A.** Deploy code to Amazon EC2 instances instead of using Lambda functions.

**B.** Configure SSL encryption on the Lambda functions to use AWS CloudHSM to store and encrypt the
environment variables.

**C.** Create a certificate in AWS Certificate Manager (ACM). Configure the Lambda functions to use the certificate
to encrypt the environment variables.

**D.** Create an AWS Key Management Service (AWS KMS) key. Enable encryption helpers on the Lambda
functions to use the KMS key to store and encrypt the environment variables.

---

## Question 792

An analytics company uses Amazon VPC to run its multi-tier services. The company wants to use RESTful APIs to
offer a web analytics service to millions of users. Users must be verified by using an authentication service to
access the APIs.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Configure an Amazon Cognito user pool for user authentication. Implement Amazon API Gateway REST APIs
with a Cognito authorizer.

**B.** Configure an Amazon Cognito identity pool for user authentication. Implement Amazon API Gateway HTTP
APIs with a Cognito authorizer.

**C.** Configure an AWS Lambda function to handle user authentication. Implement Amazon API Gateway REST
APIs with a Lambda authorizer.

**D.** Configure an IAM user to handle user authentication. Implement Amazon API Gateway HTTP APIs with an IAM
authorizer.

---

## Question 793

A company has a mobile app for customers. The app’s data is sensitive and must be encrypted at rest. The
company uses AWS Key Management Service (AWS KMS).
The company needs a solution that prevents the accidental deletion of KMS keys. The solution must use Amazon
Simple Notification Service (Amazon SNS) to send an email notification to administrators when a user attempts to
delete a KMS key.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Amazon EventBridge rule that reacts when a user tries to delete a KMS key. Configure an AWS
Config rule that cancels any deletion of a KMS key. Add the AWS Config rule as a target of the EventBridge
rule. Create an SNS topic that notifies the administrators.

**B.** Create an AWS Lambda function that has custom logic to prevent KMS key deletion. Create an Amazon
CloudWatch alarm that is activated when a user tries to delete a KMS key. Create an Amazon EventBridge rule
that invokes the Lambda function when the DeleteKey operation is performed. Create an SNS topic. Configure
the EventBridge rule to publish an SNS message that notifies the administrators.

**C.** Create an Amazon EventBridge rule that reacts when the KMS DeleteKey operation is performed. Configure
the rule to initiate an AWS Systems Manager Automation runbook. Configure the runbook to cancel the
deletion of the KMS key. Create an SNS topic. Configure the EventBridge rule to publish an SNS message that
notifies the administrators.

**D.** Create an AWS CloudTrail trail. Configure the trail to deliver logs to a new Amazon CloudWatch log group.
Create a CloudWatch alarm based on the metric filter for the CloudWatch log group. Configure the alarm to use
Amazon SNS to notify the administrators when the KMS DeleteKey operation is performed.

---

## Question 794

A company wants to analyze and generate reports to track the usage of its mobile app. The app is popular and has
a global user base. The company uses a custom report building program to analyze application usage.
The program generates multiple reports during the last week of each month. The program takes less than 10
minutes to produce each report. The company rarely uses the program to generate reports outside of the last
week of each month The company wants to generate reports in the least amount of time when the reports are
requested.
Which solution will meet these requirements MOST cost-effectively?

**A.** Run the program by using Amazon EC2 On-Demand Instances. Create an Amazon EventBridge rule to start
the EC2 instances when reports are requested. Run the EC2 instances continuously during the last week of
each month.

**B.** Run the program in AWS Lambda. Create an Amazon EventBridge rule to run a Lambda function when reports
are requested.

**C.** Run the program in Amazon Elastic Container Service (Amazon ECS). Schedule Amazon ECS to run the
program when reports are requested.

**D.** Run the program by using Amazon EC2 Spot Instances. Create an Amazon EventBndge rule to start the EC2
instances when reports are requested. Run the EC2 instances continuously during the last week of each month.

---

## Question 795

A company is designing a tightly coupled high performance computing (HPC) environment in the AWS Cloud. The
company needs to include features that will optimize the HPC environment for networking and storage.
Which combination of solutions will meet these requirements? (Choose two.)

**A.** Create an accelerator in AWS Global Accelerator. Configure custom routing for the accelerator.

**B.** Create an Amazon FSx for Lustre file system. Configure the file system with scratch storage.

**C.** Create an Amazon CloudFront distribution. Configure the viewer protocol policy to be HTTP and HTTPS.

**D.** Launch Amazon EC2 instances. Attach an Elastic Fabric Adapter (EFA) to the instances.

**E.** Create an AWS Elastic Beanstalk deployment to manage the environment.

---

## Question 796

A company needs a solution to prevent photos with unwanted content from being uploaded to the company's web
application. The solution must not involve training a machine learning (ML) model.
Which solution will meet these requirements?

**A.** Create and deploy a model by using Amazon SageMaker Autopilot. Create a real-time endpoint that the web
application invokes when new photos are uploaded.

**B.** Create an AWS Lambda function that uses Amazon Rekognition to detect unwanted content. Create a
Lambda function URL that the web application invokes when new photos are uploaded.

**C.** Create an Amazon CloudFront function that uses Amazon Comprehend to detect unwanted content.
Associate the function with the web application.

**D.** Create an AWS Lambda function that uses Amazon Rekognition Video to detect unwanted content. Create a
Lambda function URL that the web application invokes when new photos are uploaded.

---

## Question 797

A company uses AWS to run its ecommerce platform. The platform is critical to the company's operations and has
a high volume of traffic and transactions. The company configures a multi-factor authentication (MFA) device to
secure its AWS account root user credentials. The company wants to ensure that it will not lose access to the root
user account if the MFA device is lost.
Which solution will meet these requirements?

**A.** Set up a backup administrator account that the company can use to log in if the company loses the MFA
device.

**B.** Add multiple MFA devices for the root user account to handle the disaster scenario.

**C.** Create a new administrator account when the company cannot access the root account.

**D.** Attach the administrator policy to another IAM user when the company cannot access the root account.

---

## Question 798

A social media company is creating a rewards program website for its users. The company gives users points when
users create and upload videos to the website. Users redeem their points for gifts or discounts from the company's
affiliated partners. A unique ID identifies users. The partners refer to this ID to verify user eligibility for rewards.
The partners want to receive notification of user IDs through an HTTP endpoint when the company gives users
points. Hundreds of vendors are interested in becoming affiliated partners every day. The company wants to
design an architecture that gives the website the ability to add partners rapidly in a scalable way.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Create an Amazon Timestream database to keep a list of affiliated partners. Implement an AWS Lambda
function to read the list. Configure the Lambda function to send user IDs to each partner when the company
gives users points.

**B.** Create an Amazon Simple Notification Service (Amazon SNS) topic. Choose an endpoint protocol. Subscribe
the partners to the topic. Publish user IDs to the topic when the company gives users points.

**C.** Create an AWS Step Functions state machine. Create a task for every affiliated partner. Invoke the state
machine with user IDs as input when the company gives users points.

**D.** Create a data stream in Amazon Kinesis Data Streams. Implement producer and consumer applications. Store
a list of affiliated partners in the data stream. Send user IDs when the company gives users points.

---

## Question 799

A company needs to extract the names of ingredients from recipe records that are stored as text files in an
Amazon S3 bucket. A web application will use the ingredient names to query an Amazon DynamoDB table and
determine a nutrition score.
The application can handle non-food records and errors. The company does not have any employees who have
machine learning knowledge to develop this solution.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use S3 Event Notifications to invoke an AWS Lambda function when PutObject requests occur. Program the
Lambda function to analyze the object and extract the ingredient names by using Amazon Comprehend. Store
the Amazon Comprehend output in the DynamoDB table.

**B.** Use an Amazon EventBridge rule to invoke an AWS Lambda function when PutObject requests occur.
Program the Lambda function to analyze the object by using Amazon Forecast to extract the ingredient names.
Store the Forecast output in the DynamoDB table.

**C.** Use S3 Event Notifications to invoke an AWS Lambda function when PutObject requests occur. Use Amazon
Polly to create audio recordings of the recipe records. Save the audio files in the S3 bucket. Use Amazon
Simple Notification Service (Amazon SNS) to send a URL as a message to employees. Instruct the employees to
listen to the audio files and calculate the nutrition score. Store the ingredient names in the DynamoDB table.

**D.** Use an Amazon EventBridge rule to invoke an AWS Lambda function when a PutObject request occurs.
Program the Lambda function to analyze the object and extract the ingredient names by using Amazon
SageMaker. Store the inference output from the SageMaker endpoint in the DynamoDB table.

---

## Question 800

A company needs to create an AWS Lambda function that will run in a VPC in the company's primary AWS account.
The Lambda function needs to access files that the company stores in an Amazon Elastic File System (Amazon
EFS) file system. The EFS file system is located in a secondary AWS account. As the company adds files to the file
system, the solution must scale to meet the demand.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a new EFS file system in the primary account. Use AWS DataSync to copy the contents of the original
EFS file system to the new EFS file system.

**B.** Create a VPC peering connection between the VPCs that are in the primary account and the secondary
account.

**C.** Create a second Lambda function in the secondary account that has a mount that is configured for the file
system. Use the primary account's Lambda function to invoke the secondary account's Lambda function.

**D.** Move the contents of the file system to a Lambda layer. Configure the Lambda layer's permissions to allow
the company's secondary account to use the Lambda layer.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 751

**Answer:** **C**

**Explanation:**

The correct answer is C, attaching the AdministratorAccess identity-based policy to the IAM user group and
placing the five employee IAM users in the group. Here's why:
IAM Policies: IAM policies define permissions that determine what actions an identity (user, group, or role) can
perform on AWS resources.
Identity-Based Policies: These policies are attached directly to IAM users, groups, or roles. They grant
permissions to the identity to perform actions on resources. This is the standard and recommended way to
grant permissions to users.
Resource-Based Policies: These policies are attached to AWS resources (e.g., S3 buckets, KMS keys). They
define who can access the resource and what actions they can perform. Resource-based policies are typically
used to grant permissions to other AWS accounts or services to access the resource. Applying a resourcebased policy to a user group wouldn't achieve the goal of giving the users themselves admin access across
the account.

AdministratorAccess Policy: This is a pre-defined AWS managed policy that grants full access to all AWS
services and resources within an account.
SystemAdministrator Policy: There is no AWS managed policy named "SystemAdministrator". This is likely a
custom policy, but it is not a standard AWS policy.

Therefore, to provide five employees with full administrative access, attaching the AdministratorAccess
identity-based policy to an IAM user group and adding those five users to that group is the correct approach.
This grants the group (and thus its members) the necessary permissions efficiently. Using a user group also
simplifies permission management as future admin users can simply be added to the group.

Why other options are incorrect:
A & D: Resource-based policies are not applicable here. They control access to a resource, not permissions of
a user or group.

**B:** The policy SystemAdministrator is not a standard AWS managed policy, which could grant insufficient or
incorrect permissions.

---

## Question 752

**Answer:** **AD**

**Explanation:**

The correct answer is AD. Here's a detailed justification:

**A.** Use AWS Lambda for the compute layers in the architecture: AWS Lambda is a serverless compute
service. This aligns with the requirement of minimizing infrastructure management because Lambda abstracts
away the need to provision and manage servers. The company can focus solely on writing the code for the
payment processing tiers. This reduces operational overhead.

**D.** Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the messaging component between

the compute layers: SQS FIFO (First-In, First-Out) queues provide exactly-once processing and preserve the
order of messages. The application requirement mandates exactly-once delivery, which SQS FIFO directly
addresses. Standard SQS queues offer at-least-once delivery, which could result in duplicate processing, so
using FIFO is crucial.
Let's examine why the other options are not ideal:

**B.** Use Amazon EC2 instances for the compute layers in the architecture: While EC2 provides flexibility, it
contradicts the requirement of minimizing infrastructure management. EC2 instances require patching,
scaling, and other management tasks, adding operational complexity.

**C.** Use Amazon Simple Notification Service (Amazon SNS) as the messaging component between the
compute layers: SNS is a publish-subscribe service, not a queue. It doesn't guarantee exactly-once delivery
or message ordering. SNS typically provides at-least-once delivery. Therefore, it doesn't satisfy the
application's requirements.

**E.** Use containers that are based on Amazon Elastic Kubernetes Service (Amazon EKS) for the compute
layers in the architecture: EKS offers container orchestration, which can be beneficial for managing complex
applications. However, it requires significant infrastructure management related to the Kubernetes control
plane, worker nodes, and associated networking and security configurations. This contradicts the "least
amount of infrastructure management" requirement. Serverless compute is more appropriate here.

In summary, Lambda eliminates server management for compute, and SQS FIFO queues guarantee exactlyonce delivery for messaging, making them the most suitable combination to fulfill the specified requirements.

---

## Question 753

**Answer:** **D**

**Explanation:**

The best solution is D because it leverages fully managed services like AWS Transfer for SFTP and Amazon
S3, minimizing operational overhead. AWS Transfer for SFTP handles the secure file transfer aspects,

removing the need to manage SFTP servers on EC2 instances as suggested in B and C. Amazon S3 offers
excellent durability, scalability, and availability for storing the report files. Instead of relying on EFS as the
primary storage, S3 presents a better choice due to its cost-effectiveness, stronger data protection, and
simpler management compared to EFS in this scenario.
The EC2 instance in an Auto Scaling group with a scheduled scaling policy provides the compute power to run
the batch operation. Scheduling ensures the EC2 instance is only running when needed, which optimizes
costs. This approach also improves resilience because Auto Scaling can replace unhealthy instances
automatically. Modifying the application to pull files from S3 gives it the flexibility to adapt to the cloud
environment, aligning with best practices for decoupling application components. Options A, B, and C require
managing infrastructure elements like file systems or SFTP servers on EC2, increasing operational burden.
The direct S3 integration in option D simplifies the overall architecture and minimizes manual intervention.
Further Reading:
AWS Transfer Family: https://aws.amazon.com/aws-transfer-family/
Amazon S3: https://aws.amazon.com/s3/
Amazon EC2 Auto Scaling: https://aws.amazon.com/autoscaling/

---

## Question 754

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a comprehensive solution addressing the requirements for global
availability, performance, security, and static IP addresses.
Here's a breakdown of why option D is superior:
Global Availability and Performance: Amazon CloudFront, a content delivery network (CDN), caches content
at edge locations worldwide, reducing latency for users accessing the application from different geographical
locations. Route 53 latency-based routing directs users to the Application Load Balancer (ALB) in the region
with the lowest network latency, ensuring optimal performance. This also contributes to high availability as
traffic is automatically routed away from unhealthy regions.
Security: AWS WAF, deployed on the CloudFront distribution, protects the application against common web
exploits like SQL injection and cross-site scripting (XSS). Placing WAF at the edge (CloudFront) provides
protection closest to the source of malicious traffic.

Static IP Addresses: CloudFront provides static IP addresses. This fulfils the given requirement in the
question.
Let's examine why the other options are less suitable:

**Option A** & B: AWS Global Accelerator provides static IP addresses and improves performance, but it does not
inherently provide protection against web exploits. Using it without WAF leaves the application vulnerable.
Also, Global Accelerator is suited more to TCP or UDP traffic and isn't as efficient at caching content as
CloudFront.

**Option C**: While this option uses NLBs, WAF at the NLB level is not ideal. WAF is better suited at the CDN level
(CloudFront) for protection against web exploits. Additionally, NLBs are designed for high-performance, lowlatency traffic and don't offer the content caching benefits of CloudFront.

In summary, deploying ALBs behind CloudFront with WAF ensures optimal performance through caching and
latency-based routing, provides static IP addresses, and protects the application against web exploits at the
edge, fulfilling all requirements in the most efficient and secure manner.
Here are some helpful links for further research:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
AWS WAF: https://aws.amazon.com/waf/
Amazon Route 53: https://aws.amazon.com/route53/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/

---

## Question 755

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, along with supporting concepts and
resources:
The problem presents a scenario with an Aurora MySQL database experiencing "too many connections" errors
and a need to reduce failover time when a read replica becomes the primary writer. The goal is to address the
connection management issue while also improving failover performance.

**Option B**, using Amazon RDS Proxy in front of the Aurora database, is the most appropriate solution for
several key reasons:

1. Connection Pooling and Multiplexing: RDS Proxy sits between your application and the database. It
pools database connections and reuses them efficiently. Instead of each application connection
holding a direct database connection open, RDS Proxy manages a smaller pool of connections to the

Aurora database. When an application needs to execute a query, RDS Proxy checks out a connection
from the pool, executes the query, and then returns the connection to the pool. This reduces the
number of active connections to the database and alleviates the "too many connections" errors.

2. Connection Management During Failover: During a failover, RDS Proxy automatically reconnects to
the new primary instance. It maintains application connections without interruption, minimizing
downtime. It accomplishes this by detecting the failover event and rerouting traffic to the new
primary. It can reduce the failover time because the application does not need to establish new
connections from scratch. This is how the 20% failover reduction is achieved.

3. Improved Application Performance: By reducing connection overhead, RDS Proxy can also improve
application performance, especially for applications that make frequent short-lived connections to
the database.

**Option A** (Switching to Amazon RDS with Multi-AZ) addresses high availability but does not inherently solve
the "too many connections" issue. Multi-AZ provides failover capabilities, but it doesn't manage connection
pooling. It's a foundational HA strategy but not the specific fix required here.

**Option C** (Switching to DynamoDB with DAX) represents a significant architectural change. DynamoDB is a
NoSQL database, and Aurora MySQL is relational. A complete migration would be required, and it would not
be suitable unless the application is significantly refactored. While DAX caches DynamoDB reads, it addresses
latency but isn't related to reducing failover time of a Relational Database, nor is it related to connection
management in relational databases.

**Option D** (Switching to Amazon Redshift) is designed for data warehousing and analytics, not transactional
workloads like the one described in the problem. Relocation capability does not address the connection
management issues nor improve the read replica promotion speed significantly enough to meet the 20%
reduction requirement. The switch would also imply significant application rewriting.

In summary, RDS Proxy directly addresses the connection management bottleneck, reducing the number of
connections to the database and providing connection persistence during failover. This directly leads to a
faster failover time because the application connections are maintained automatically.

---

## Question 756

**Answer:** **A**

**Explanation:**

**Option A**, using S3 Object Lambda, is the most efficient and scalable solution for redacting PII from S3
objects on-the-fly for an external service provider with minimal operational overhead. Object Lambda lets you
add custom code to S3 to process data as it's being retrieved, transforming the content before returning it to
the requesting application. This eliminates the need for separate data processing pipelines or copies of the
data.
Here's why **Option A** is superior to the other options:
Least Operational Overhead: Object Lambda automates the redaction process upon data access. No need to
manage EC2 instances, batch jobs, or DynamoDB.
Scalability: Object Lambda scales automatically with S3 requests, handling increases in data volume and
access frequency seamlessly.
Real-time Redaction: PII is redacted at the time of retrieval, ensuring the external service provider never sees
the raw, unredacted data.
Security: Redaction logic is contained within a Lambda function, minimizing the risk of accidental PII
exposure. Access is controlled via the Object Lambda Access Point.
Cost-Effectiveness: Pay only for the Lambda execution time and the data processed by S3. Eliminates costs
associated with maintaining infrastructure.
In contrast, **Option B** involves a batch process on EC2, which requires infrastructure management, scheduling,
and can introduce latency between data arrival and redaction. It also requires duplicate storage. **Option C**
requires you to maintain a custom web application, involving significant operational complexity. **Option D**,
which stores data into DynamoDB, is also an inferior choice, because it duplicates data into a DynamoDB
database unnecessarily, adding complexity and cost. S3 Object Lambda is the leanest, most scalable, most
cost effective, and most secure solution.

---

## Question 757

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an Amazon CloudWatch alarm to recover the EC2 instance in case of failure.
Here's why this is the best solution and why the other options are not suitable:
Why C is correct: The goal is to improve recovery time for a single, non-modifiable legacy system running on
EC2. A CloudWatch alarm with a "Recover" action provides an automated mechanism to reboot the EC2
instance if it becomes impaired due to underlying hardware issues. This is faster than manual intervention and
requires no application changes, aligning with the requirements. The "Recover" action is designed for
scenarios where the instance itself is unhealthy, rather than an issue with the application running on it.
CloudWatch continuously monitors the instance's health and triggers the recovery action based on predefined thresholds (e.g., system status checks failing). This automated recovery minimizes downtime,
improving resilience without application modification.
Why A is incorrect: Enabling termination protection prevents accidental termination of the EC2 instance, but
it doesn't help in recovering from underlying hardware or system issues that cause the instance to become
impaired. Termination protection ensures the instance isn't deleted, but doesn't ensure its availability.
Why B is incorrect: Multi-AZ deployment is typically used for applications that can be scaled across multiple
instances. The requirement states the application cannot run on more than one instance, making Multi-AZ
deployment unsuitable. Multi-AZ relies on application-level clustering and data replication, which are not
possible with the specified constraints.
Why D is incorrect: RAID configurations on EBS volumes primarily provide data redundancy within the EC2
instance. While data loss is mitigated, RAID does not automatically recover the instance if it becomes
impaired. The EC2 instance would still need to be replaced or restarted, and RAID is not a substitute for
instance-level recovery. Moreover, RAID configurations can add complexity and might not be suitable for the
legacy application without thorough testing. The focus should be on recovering the instance, not just the data.

---

## Question 758

**Answer:** **A**

**Explanation:**

The best solution for deploying containerized applications across three Availability Zones with high
availability and minimal operational overhead is using Amazon ECS with Service Auto Scaling.

**Option A** is correct because ECS inherently simplifies container management and orchestration. Service Auto
Scaling with target tracking scaling automatically adjusts the number of ECS tasks (containers) based on a
metric like CPU utilization or memory consumption. Setting the minimum capacity to 3 ensures that at least
one task runs in each of the three AZs, providing high availability. The 'spread' task placement strategy with
an Availability Zone attribute ensures ECS distributes tasks evenly across AZs. This approach requires
minimal application changes, as the application remains containerized and is deployed via ECS's standard
mechanisms.

**Option B**, using EKS with self-managed nodes, introduces significantly higher operational overhead. Managing
the Kubernetes cluster and nodes (EC2 instances) requires substantial effort, including patching, scaling, and
security configurations. While EKS provides container orchestration, self-managing nodes undermines the
goal of minimal operational overhead.

**Option C**, utilizing EC2 Reserved Instances, lacks the built-in container orchestration capabilities that are
crucial for managing containerized applications effectively. Configuring an Auto Scaling group to manage
EC2 instances only addresses the scaling of VMs and does not inherently handle container deployment,
health checks, or networking as effectively as container orchestration platforms. This approach requires
manual configuration of container deployment and management within the EC2 instances, which is more
complex. A spread placement group offers distribution across AZs, but it doesn't offer the container focus
desired.

**Option D**, using AWS Lambda, is unsuitable for running typical containerized application workloads. Lambda
functions are designed for event-driven, short-lived computations. While Lambda can be configured within a
VPC, it's not meant to handle persistent, complex container applications. Additionally, the container
limitations of Lambda make it unrealistic for this scenario.

Therefore, ECS with Service Auto Scaling and spread placement strategy delivers the desired high availability
across AZs with the least operational burden and requires minimal modifications to the containerized
application.
Supporting Links:
Amazon ECS: https://aws.amazon.com/ecs/
Amazon ECS Service Auto Scaling:
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html
Amazon EKS: https://aws.amazon.com/eks/

---

## Question 759

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most suitable solution, along with supporting concepts
and links:
The primary requirements are fast content delivery (within 5 minutes) after purchase and cost minimization
based on demand, considering varying demand for newer vs. older movies.

**Option C**, storing newer movies in S3 Intelligent-Tiering and older movies in S3 Glacier Flexible Retrieval,
balances performance and cost effectively.
S3 Intelligent-Tiering automatically moves data between frequent, infrequent, and archive access tiers based
on changing access patterns. This is ideal for newer movies with potentially fluctuating demand, ensuring low
latency while optimizing storage costs. https://aws.amazon.com/s3/storage-classes/intelligent-tiering/
S3 Glacier Flexible Retrieval (formerly Glacier) is designed for archiving data that is infrequently accessed.
The key is using "expedited retrieval" which guarantees access within 1-5 minutes. This meets the 5-minute
requirement even for older, rarely accessed movies. Although expedited retrieval has a higher cost, it's
acceptable because these are infrequent requests. https://aws.amazon.com/s3/storage-classes/glacier/

**Option A** is less efficient because S3 Lifecycle policies react more slowly than Intelligent-Tiering to shifting
access patterns. Using only S3 Lifecycle policies may also require custom scripting to manage tiers, adding
complexity. Moreover, S3 Infrequent Access (S3 IA) doesn’t necessarily deliver within the guaranteed 5
minutes.

**Option B**, storing older movies in S3 Standard-IA, is also suboptimal. S3 Standard-IA provides a lower storage
cost than S3 Standard but is still more expensive than Glacier Flexible Retrieval. It doesn't optimize cost as
effectively as Glacier Flexible Retrieval for infrequently accessed data while lacking a guaranteed retrieval
time.

**Option D** uses S3 Glacier Flexible Retrieval, but suggests "bulk retrieval." Bulk retrieval can take 5-12 hours,
violating the 5-minute requirement. Therefore, despite the lower cost, it is inappropriate for time-sensitive
post-purchase streaming.

Therefore, the combination of S3 Intelligent-Tiering for recent movies (automatically handling variable access
patterns with low latency) and S3 Glacier Flexible Retrieval with expedited retrieval for older movies (meeting
the retrieval time requirement at a reasonable price for infrequent access) makes option C the best solution. It
is a robust and cost-effective solution that addresses both performance and cost optimization needs.

---

## Question 760

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best answer, along with supporting information:
The question prioritizes a serverless architecture with minimal operational overhead for a Docker container
requiring 50 GB of temporary storage.

**Option C** (Amazon ECS with Fargate and EFS): This solution leverages the strengths of both Amazon ECS
with Fargate and Amazon EFS. Fargate provides a serverless compute environment, eliminating the need to
manage EC2 instances, thus reducing operational overhead. Amazon EFS offers a fully managed, scalable,
and elastic file system. It integrates seamlessly with ECS and can provide the necessary 50 GB of storage for
temporary files. Mounting an EFS volume to an ECS task using Fargate is straightforward and requires
minimal configuration.

**Option A** (Lambda with S3 mounted volume): While Lambda functions can run Docker images, Lambda does
not support directly mounting S3 buckets as volumes within the container. S3 is object storage and not
designed to be used as a file system for temporary file operations, violating the original requirement. This
option also involves significant complexity in managing data transfer between Lambda and S3 for temporary
file usage.

**Option B** (Lambda with EBS volume): Lambda functions do not support direct attachment of EBS volumes.
EBS volumes are designed to be attached to EC2 instances and cannot be used with the serverless Lambda
environment. Thus it violates the "serverless" and "LEAST operational overhead" requirements.

**Option D** (ECS with EC2 and EBS): While this option provides the required storage, it does not meet the
requirement for a serverless architecture. Using EC2 instances introduces significant operational overhead,
including patching, scaling, and monitoring the EC2 instances themselves. This directly contradicts the
principle of minimizing operational effort.

Therefore, option C is the best choice as it combines serverless compute with managed file storage,
minimizing operational overhead while fulfilling the storage requirements of the Docker container.
Supporting Documentation:
Amazon ECS with Fargate: https://aws.amazon.com/fargate/
Amazon EFS: https://aws.amazon.com/efs/
Using Amazon EFS with Amazon ECS: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efsvolumes.html
Lambda Storage Options: https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html

---

## Question 761

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution for authenticating users from an onpremises LDAP directory to the AWS Management Console when SAML isn't an option:
The core challenge is to bridge the on-premises LDAP directory (incompatible with SAML) with AWS
authentication. Options A, B, and C have significant drawbacks:

**Option A** (IAM Identity Center): AWS IAM Identity Center primarily relies on SAML for federation. Since the
LDAP is not SAML compatible, this option is not viable.

**Option B** (IAM Policy Integration): Directly embedding AWS credentials into LDAP or linking IAM policies to
LDAP authentication is a major security risk. AWS credentials should never be stored or managed outside of
AWS Identity and Access Management (IAM) to prevent credential leakage and unauthorized access.

**Option C** (Rotating IAM Credentials): Rotating IAM credentials based on LDAP updates is complex, errorprone, and still requires storing AWS credentials somewhere outside of AWS, which is a security vulnerability.

**Option D** (Custom Identity Broker): A custom identity broker is the most suitable approach for LDAP
integration when SAML is unavailable.
Here's why it works:

1. Authentication Proxy: The custom application acts as an intermediary between the LDAP directory
and AWS. Users authenticate with their existing LDAP credentials.

2. STS Integration: After successful LDAP authentication, the broker application uses the AWS
Security Token Service (STS) to request temporary, short-lived AWS credentials. The custom
application will assume an IAM role configured with permissions to use STS.

3. Secure Credential Management: The application securely communicates with AWS STS using an
AWS IAM user with only permissions to access the STS service, retrieves the temporary credentials.

4. Console Access: These temporary credentials allow the user to access the AWS Management
Console or AWS resources based on the permissions defined in the IAM role that the broker assumes.

5. Security Best Practices: This approach keeps AWS credentials secure within AWS and avoids
exposing them to the on-premises environment. The temporary credentials expire automatically,
further limiting the potential impact of any compromise.

6. Flexibility: Provides fine-grained control over access based on the user's LDAP group memberships.

In summary, the identity broker model using STS provides a secure and manageable solution for integrating

non-SAML LDAP directories with AWS, addressing the company's authentication needs without compromising
security.

---

## Question 762

**Answer:** **C**

**Explanation:**

The optimal solution is to utilize Recycle Bin for AMI retention. Here's why:

**Option C**, using Recycle Bin, offers the lowest operational overhead because it directly addresses accidental
deletion with a built-in AWS feature. Recycle Bin allows you to create retention rules that specify a period
during which deleted AMIs (and other resources) are retained before permanent deletion. This provides a
buffer for recovery without requiring manual intervention or scripting.

**Option A**, EBS snapshots, while useful for backup, adds complexity. Managing snapshots across accounts
requires cross-account IAM roles and potentially scripts for automating the snapshot creation and replication.
Snapshots alone don't inherently prevent deletion; they just provide a point-in-time copy.

**Option B**, copying AMIs, creates operational overhead in terms of management, storage costs, and transfer
bandwidth. Periodic copying requires automation scripts and introduces complexity in synchronization and
version control.

**Option D**, uploading AMIs to S3, is not the standard way to back up AMIs. AMI backup methods usually utilize
snapshots or cross-account AMI copy, which are designed specifically for the purpose. Additionally, restoring
AMIs from S3 wouldn't be as direct or manageable as the original AMIs.
Recycle Bin is designed specifically to prevent accidental deletion and enable easy recovery within a defined
retention period, making it the most efficient solution.
For more information on Recycle Bin, refer to the AWS documentation:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html

---

## Question 763

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B, "Order multiple AWS Snowball devices to ship the data to
AWS," is the most cost-effective solution for migrating 150 TB of data within a month, given a limited 100
Mbps upload speed available only at night:
Let's analyze the limitations first. A 100 Mbps connection, even if fully utilized, is extremely slow for
transferring 150 TB. To calculate the transfer time:
150 TB = 150 1024 1024 1024 8 bits = 1,288,490,188,800 bits
Upload speed = 100 Mbps = 100,000,000 bits per second
Total time = 1,288,490,188,800 bits / 100,000,000 bits/second = 12,884,901.888 seconds
Total time = 12,884,901.888 seconds / (60 60 24) days = 148.8 days
Since the data can only be transferred at night, the actual transfer time will be substantially longer than 148.8
days, making it infeasible within the one-month deadline.
Now, let's evaluate the options:

**A.** AWS Snowmobile: Snowmobile is for exabyte-scale data transfer. It is overkill and significantly more
expensive than Snowball for 150 TB.

**B.** AWS Snowball: Snowball is specifically designed for transferring large amounts of data in and out of AWS
when network bandwidth is limited. Ordering multiple Snowball devices allows for parallel data transfer,
significantly reducing the overall migration time. The cost of Snowball is based on the device usage and the
job performed, and is typically far more cost-effective than upgrading network infrastructure or dealing with
prolonged transfer times.

**C.** Amazon S3 Transfer Acceleration: Transfer Acceleration utilizes CloudFront edge locations to improve
transfer speeds to S3. However, the improvement is highly dependent on the distance between the client and
the S3 bucket, and the network conditions. Given the already slow 100 Mbps connection, Transfer
Acceleration is unlikely to provide a sufficient speed increase to meet the deadline and comes with additional
costs. Furthermore, the bottleneck is the on-premises network speed, which Transfer Acceleration cannot
overcome.

**D.** Amazon S3 VPC endpoint and VPN: Creating an S3 VPC endpoint provides secure access to S3 from within
a VPC. Establishing a VPN connection provides a secure tunnel between the on-premises network and the
VPC. However, this solution still relies on the limited 100 Mbps network connection, making it infeasible for
transferring 150 TB within the one-month deadline. This setup also adds complexity and cost without
addressing the core problem: slow network speed.
Snowball offers the most practical combination of speed and cost-effectiveness. By using multiple devices
concurrently, the company can significantly accelerate the data transfer without incurring the higher costs
associated with Snowmobile or the limitations of the existing network connection.

Therefore, the answer is B.

---

## Question 764

**Answer:** **A**

**Explanation:**

The best solution is A because it minimizes changes and operational overhead while fulfilling all requirements.
Minimizing Changes: Migrating the web and application tiers to EC2 instances is a straightforward "lift and
shift" approach, requiring minimal code modification. Keeping both tiers in private subnets enhances security.
Similarly, migrating the MySQL database to Amazon RDS for MySQL requires minimal changes compared to
other database options.
Database Point-in-Time Recovery: Both Amazon RDS for MySQL and Amazon Aurora MySQL offer point-intime recovery.
Least Operational Overhead: Amazon RDS manages database administration tasks like patching, backups,
and recovery, significantly reducing operational overhead compared to managing a MySQL instance on EC2.
Using the same MySQL engine reduces the risk of compatibility issues during the database migration.
Choosing RDS over Aurora also minimizes changes to database configuration.
Security: Placing the web and application tiers, as well as the database, in private subnets adds a layer of
security, preventing direct internet access. This is essential for protecting the application and data.
Let's analyze why the other options are less suitable:

**Option B** & D: Migrating to Aurora MySQL introduces a change in the database engine, potentially requiring
code modifications and increased testing, thus more changes and overhead. **Option D** is also insecure by
placing the database in a public subnet.

**Option C**: Migrating to RDS for MySQL is a good move. However, the answer states the web-tier needs to be in
a public subnet which might not be needed if the application is using a load balancer.

Therefore, option A provides the most efficient and secure migration path with the least operational overhead
and minimal changes to the existing architecture.

Supporting Links:
Amazon EC2: https://aws.amazon.com/ec2/
Amazon RDS: https://aws.amazon.com/rds/
Amazon Aurora: https://aws.amazon.com/rds/aurora/
AWS VPC: https://aws.amazon.com/vpc/

---

## Question 765

**Answer:** **C**

**Explanation:**

The correct answer is C. Create an SQS access policy that provides the other company access to the SQS
queue.

Here's why:
Resource-Based Policies: SQS queues support resource-based policies (also known as access policies).
These policies directly attach to the SQS queue itself and specify who (which AWS accounts or IAM users)
can access the queue and what actions they can perform.
Cross-Account Access: SQS access policies enable cross-account access. This means you can grant
permissions to principals (users, roles, or accounts) in another AWS account to access your SQS queue. The
other company retains control of its own account and identities.
Granular Permissions: SQS access policies allow you to specify precisely which SQS actions the other
company can perform on the queue (e.g., sqs:ReceiveMessage, sqs:SendMessage, sqs:DeleteMessage).
Let's examine why the other options are incorrect:

**A.** Create an instance profile that provides the other company access to the SQS queue. Instance profiles
are used to grant permissions to EC2 instances. The other company does not need an EC2 instance in the dev
team account.

**B.** Create an IAM policy that provides the other company access to the SQS queue. While you could create
an IAM policy, the other company would still need to assume a role in the development team's account,
negating their request to not use their account.

**D.** Create an Amazon Simple Notification Service (Amazon SNS) access policy that provides the other
company access to the SQS queue. SNS is a different service for pub/sub messaging. An SNS policy would
not grant access to an SQS queue.
By using an SQS access policy, the development team maintains ownership and control of the SQS queue, and
the other company can access it using its own AWS account credentials and identities, without needing to
share or assume roles within the development team's account.

For more information, refer to these AWS documentation links:
Amazon SQS Access Control:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-securityoverview.html
Granting Cross-Account Permissions:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-grant-crossaccount-permissions-to-role.html

---

## Question 766

**Answer:** **D**

**Explanation:**

The most cost-effective and secure solution is to use AWS Systems Manager (SSM) Session Manager. Here's
why:
Security: Session Manager provides secure and auditable instance management without needing to open
inbound SSH ports or manage SSH keys, reducing the attack surface. It uses IAM policies to control access to
instances, ensuring proper authorization.
Cost-Effectiveness: Session Manager is included in the AWS Free Tier and has minimal costs beyond that,
primarily related to CloudTrail logging (if enabled), making it more cost-effective than setting up and
maintaining VPN connections or bastion hosts.
Ease of Use: Developers can connect to EC2 instances directly from the AWS Management Console, AWS CLI,
or AWS SDKs, without needing to manage SSH keys or configure SSH clients.
Auditing: Session Manager integrates with CloudTrail to log session activity for auditing and compliance
purposes.
No Public IPs: Since the EC2 instances are in a private subnet and can access the internet through a NAT
Gateway, Session Manager can function effectively, as the instances need outbound access to SSM
endpoints, not inbound access.
IAM Role: Attaching the AmazonSSMManagedInstanceCore IAM policy to the EC2 instances' IAM role grants
SSM the necessary permissions to manage the instances.

Why other options are less suitable:

**A:** Bastion Host in Private Subnet: Placing a bastion host in the same private subnet defeats the purpose of a
bastion host, as it should be in a public subnet. Additionally, granting ec2:CreateVpnConnection permission is
unnecessary and overly permissive.

**B:** Site-to-Site VPN: Setting up a Site-to-Site VPN for access from the corporate network is a viable option
but less cost-effective than SSM, especially if the company only needs SSH access. Furthermore, requiring
developers to set up another VPN for remote access adds complexity.

**C:** Bastion Host in Public Subnet: While a valid approach, maintaining a bastion host involves operational
overhead (patching, scaling, monitoring) and costs associated with the instance and its network traffic. SSM
offers a managed and more cost-effective alternative.
Supporting Links:
AWS Systems Manager Session Manager: https://docs.aws.amazon.com/systemsmanager/latest/userguide/session-manager.html
AmazonSSMManagedInstanceCore IAM Policy: https://docs.aws.amazon.com/systemsmanager/latest/userguide/security-iam-id-based-policy-examples.html

---

## Question 767

**Answer:** **C**

**Explanation:**

The best storage solution is option C, deploying an AWS Storage Gateway volume gateway with cached
volumes backed by Amazon S3. Here's why:
Reduced Capital Expenses: Migrating data to S3 significantly reduces the need for expensive on-premises
storage arrays.
Immediate Availability of Subset: The cached volumes feature ensures that frequently accessed subsets of
data are stored locally on the Storage Gateway appliance. This provides low-latency access for the
researchers.
Infrequent Access of Full Dataset: The entire dataset resides in S3, providing cost-effective storage for data
that is not accessed daily.
Volume Gateway and Cached Volumes: Volume Gateway provides block-based access, which can be more
suitable for certain types of data or applications. The cached volumes mode keeps frequently accessed data
on-premises, while storing the full dataset in S3. This balances cost and performance.

Why other options are less ideal:

**Option A** (AWS DataSync to S3): While DataSync migrates data to S3, it doesn't address the immediate
availability requirement. Researchers would still have to download data from S3, which introduces lag.

**Option B** (Storage Gateway file gateway): File Gateway stores the entire dataset in S3 and caches recently
used files locally. It might not be optimized for block-level access if the researchers are working with
applications requiring it.

**Option D** (Site-to-Site VPN and EFS): EFS is suitable for shared file storage but generally more expensive
than S3 for large, infrequently accessed datasets. Maintaining a VPN connection and transferring large
amounts of data over the VPN may also be less performant and more complex.
AWS Storage Gateway allows you to seamlessly integrate on-premises application environments with AWS
cloud storage. The Cached Volumes mode is ideal for organizations that want to reduce on-premises storage
footprint while maintaining performance for frequently accessed data.

---

## Question 768

**Answer:** **A**

**Explanation:**

The correct answer is A: Configure point-in-time recovery (PITR) for the table. Here's why:

**Option A** directly addresses the requirement of reverting the DynamoDB table to any point within the last 24
hours with minimal operational overhead. DynamoDB PITR provides automated, continuous backups that allow
you to restore your table to any point in time during the specified recovery window. This is the simplest and
most efficient way to meet the requirement. You enable it once, and it handles the rest.

**Option B**, using AWS Backup, is a viable solution but has a slightly higher operational overhead than PITR.
While AWS Backup simplifies managing backups across multiple AWS services, it typically involves
configuring backup plans with specific schedules. Although effective, this requires more initial configuration
compared to simply enabling PITR on the table. While AWS Backup is excellent for long-term retention, the
requirement specifically asks for restoration within 24 hours.

**Option C**, creating hourly backups with a Lambda function, is not recommended due to its significant
operational overhead and potential for inconsistencies. Developing, deploying, and maintaining a Lambda
function to perform backups introduces complexity. Furthermore, relying on a Lambda function for regular

backups can be less reliable than DynamoDB's built-in PITR feature, as the Lambda function could fail,
leading to missed backups.

**Option D**, using DynamoDB Streams and storing them in S3, is not designed for full table restoration and
would be complex to implement. Streams capture individual changes to the table, not the entire table state.
Reconstructing the table from the stream data would be computationally expensive and time-consuming,
potentially leading to inconsistencies and significantly more operational effort. Also, the question is to revert
the table within the last 24 hours, meaning the stream would have to be processed every time a restore is
needed, which could be problematic.

Therefore, enabling point-in-time recovery (PITR) for the DynamoDB table is the best solution as it offers a
managed, automated, and efficient way to restore the table to any point within the last 24 hours with the least
operational overhead.
Here are links for more research:
DynamoDB Point-in-Time Recovery:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html
AWS Backup: https://aws.amazon.com/backup/
DynamoDB Streams: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html

---

## Question 769

**Answer:** **B**

**Explanation:**

The correct solution is B: "Configure an object-created event notification within the S3 bucket to invoke an
AWS Lambda function to process the files." This approach directly addresses the requirement of processing
files after they are uploaded to S3 in a cost-effective manner.
Here's why this solution is optimal:
Event-driven architecture: S3 event notifications allow for real-time responses to object creation, ensuring
immediate processing.
Lambda for processing: AWS Lambda is a serverless compute service, ideal for short-duration, eventtriggered tasks. The metadata extraction process, taking less than 5 seconds, perfectly fits Lambda's use
case. Lambda's pricing model (pay-per-execution) ensures cost-effectiveness, especially with variable upload
frequency.
Scalability: Both S3 event notifications and Lambda scale automatically to handle varying upload volumes,
from a few files per hour to hundreds of concurrent uploads.

Why other options are less suitable:

**A:** CloudTrail and AppSync: CloudTrail is for auditing API calls, not for triggering file processing. AWS
AppSync is for building GraphQL APIs, which is unnecessary overhead for simple metadata extraction.

**C:** Kinesis Data Streams and Lambda: Kinesis Data Streams are designed for real-time streaming data, not
for processing individual files uploaded to S3. Using Kinesis would be an overkill, add unnecessary
complexity, and increase costs.

**D:** SNS and Lambda: While SNS can be used to trigger Lambda functions, it adds an unnecessary
intermediary. S3 can directly trigger Lambda functions through event notifications, simplifying the
architecture.

In summary, S3 event notifications coupled with AWS Lambda offer a direct, cost-effective, and scalable
solution for processing files uploaded to S3. This combination leverages the strengths of each service to meet
the given requirements efficiently.

---

## Question 770

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:
Production Instances: Production instances require consistent uptime due to global users across time zones.
Compute Savings Plans offer significant cost savings for consistent, long-term EC2 usage compared to OnDemand, Reserved Instances, or Dedicated Hosts. They provide discounts on EC2 usage regardless of
instance type, size, or operating system within a region.
Reference: https://aws.amazon.com/savingsplans/compute-savings-plans/
Non-Production Instances: Non-production instances are only needed during business hours on weekdays,
and not on weekends. Therefore, shutting them down when not in use is crucial for cost optimization. Using

On-Demand Instances for non-production ensures you only pay for the compute time actually consumed.
Reference: https://aws.amazon.com/ec2/pricing/on-demand/
Why other options are less optimal:

**A:** Dedicated Hosts are expensive and only provide cost benefits with specific licensing constraints which
aren't stated in the prompt. They do not provide cost benefits for instances that are only needed for limited
timeframes. Using On-Demand for production does not allow you to take advantage of discounts offered by
sustained usage.

**B:** Reserved Instances require commitment for a specific instance type and region, and while they save
money, they are less flexible than Savings Plans. Also, RI for non-production instances is still less costeffective if they are not being used for large periods of time. Shutting them down reduces the cost even more
when used with On-Demand instances.

**D:** Dedicated Hosts are expensive as mentioned before. While EC2 Instance Savings Plans are cost-effective,
shutting down the non-production instances when unused provides more savings for a variable workload that
only operates during business hours.

---

## Question 771

**Answer:** **C**

**Explanation:**

The correct answer is C because it provides a comprehensive solution for migrating an on-premises Oracle
database to Aurora PostgreSQL while capturing ongoing changes during the migration.
Here's a breakdown of the justification:
AWS Schema Conversion Tool (AWS SCT): SCT is specifically designed to convert database schemas from
one database engine to another. In this case, it efficiently converts the Oracle schema to an Aurora
PostgreSQL-compatible schema, addressing the initial schema incompatibility.
https://aws.amazon.com/dms/schema-conversion-tool/
AWS Database Migration Service (AWS DMS): DMS is a managed service that facilitates database
migrations. It supports both one-time full-load migrations and continuous data replication. DMS can handle
the initial data load and, critically, capture ongoing changes (change data capture or CDC) from the Oracle

database and apply them to the Aurora PostgreSQL database in near real-time. This ensures minimal
downtime and data loss during the migration. The Site-to-Site VPN provides the necessary connectivity for
DMS to access the on-premises Oracle database.
https://aws.amazon.com/dms/

**Option A** is incomplete because it only addresses the initial data load and misses the crucial requirement of
capturing ongoing changes during the migration.
Options B and D involve using S3 as an intermediary. While S3 is a good storage option, it doesn't directly
address the schema conversion or the need to capture real-time changes. Using S3 for the initial data load is
less efficient than DMS. The aws_s3 extension can import data from S3 but doesn't handle the initial schema
conversion or CDC. Also, using Snowball (option D) for initial data transfer is only relevant if network
bandwidth is severely limited, which is not stated in the problem; the company has a Site-to-Site VPN.

---

## Question 772

**Answer:** **AB**

**Explanation:**

The question asks for container orchestration solutions on AWS that scale automatically and minimize
operational overhead.

**A.** Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate. ECS is a managed container
orchestration service. Fargate is a serverless compute engine for ECS that allows you to run containers
without managing EC2 instances. This combination directly addresses the requirements by automatically
scaling containers based on demand and eliminating the need to manage underlying infrastructure.
https://aws.amazon.com/ecs/fargate/

**B.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate. EKS is a managed Kubernetes
service, and Kubernetes is a powerful container orchestration platform. Using EKS with Fargate provides
similar benefits to ECS with Fargate: automatic scaling and reduced operational overhead, as Fargate
manages the underlying compute resources. EKS offers greater flexibility and richer features for complex
container deployments compared to ECS, which might be relevant depending on the application's complexity,
though ECS will still generally be a better solution. https://aws.amazon.com/eks/fargate/

**C.** Provision an Amazon API Gateway API. Connect the API to AWS Lambda to run the containers. API
Gateway and Lambda are not directly designed for running persistent containerized applications at scale.
While you could conceivably run containers inside Lambda (though this is not their intended use, and would
involve a lot of orchestration code and limitations like cold starts), it is an inefficient and unnecessarily

complex approach compared to ECS or EKS. Lambda is intended for event-driven, short-lived functions.

**D.** Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes. While ECS itself is
a managed service, using EC2 worker nodes negates the requirement of minimizing operational overhead. You
are then responsible for provisioning, managing, patching, and scaling the EC2 instances hosting the
containers.

**E.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes. Similar to option
D, using EC2 worker nodes with EKS introduces significant operational overhead that the question aims to
avoid. You have to manage the EC2 instances backing the Kubernetes cluster.

---

## Question 773

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most cost-effective solution for handling sudden traffic
increases during a seasonal sale for an e-commerce website hosted on EC2 instances across multiple
Availability Zones, along with why the other options are less ideal:
Justification for **Option D**:

**Option D**, configuring an Auto Scaling group (ASG) to scale out as traffic increases and using a launch
template with a preconfigured Amazon Machine Image (AMI), is the most cost-effective approach because it
adheres to the principle of elasticity inherent in cloud computing. An ASG dynamically adjusts the number of
EC2 instances based on real-time demand.

1. Cost Optimization: You only pay for the EC2 instances you're actively using to serve traffic. When
traffic is low, the ASG scales in, reducing costs. This aligns with the principle of paying for what you
use.

2. Scalability: An ASG can rapidly provision new instances to meet sudden spikes in demand. The
launch template simplifies and speeds up the instance provisioning process because the AMI already
contains the application code and configurations.

3. High Availability: By spanning multiple Availability Zones (AZs), the ASG ensures that the application
remains available even if one AZ experiences an outage.

4. Automated Response: The ASG automatically detects and replaces unhealthy instances, further

enhancing the application's reliability.

Why other options are less suitable:

**Option A**: Stopping instances and then starting them to scale is much slower than launching new instances
from an AMI. Additionally, keeping half of the instances stopped still incurs costs for the storage associated
with the stopped instances. It doesn't fully leverage the "pay-as-you-go" model as efficiently as dynamically
scaling.

**Option B**: Setting a fixed, high minimum size for the ASG wastes resources during periods of low traffic.
You're essentially paying for unused capacity. This is not cost-effective.

**Option C**: While using CloudFront and ElastiCache is good practice for improving performance and reducing
load on the origin (EC2 instances), it doesn't eliminate the need for scaling. Also, scaling in the ASG after
populating the cache might be premature; the cache hit ratio will determine the actual load on the origin.
Furthermore, treating CloudFront and ElastiCache as the sole scalability solution without properly configured
origin scaling leaves the website vulnerable to overload if the cache is insufficient.

In summary, option D provides the best balance between cost efficiency, scalability, and high availability by
dynamically adjusting EC2 instance capacity based on actual demand using Auto Scaling and preconfigured
AMIs.

---

## Question 774

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages AWS Config, a fully managed service designed for configuration
management and compliance. AWS Config's restricted-ssh managed rule directly addresses the requirement
of monitoring security groups for SSH access from 0.0.0.0/0. This managed rule automates the detection of
policy violations, minimizing operational overhead compared to a custom Lambda function.

**Option A**, writing a custom Lambda function, requires development, deployment, and ongoing maintenance,

which increases operational overhead. Although effective, it's not the least overhead option due to the manual
effort involved.

**Option C** introduces an unnecessary and risky security practice. Creating an IAM role that globally opens
security groups and network ACLs elevates privilege escalation and potential misuse. Monitoring role
assumption doesn't directly address the specific security group rule violation, and the operational overhead of
managing and monitoring this role is high.

**Option D**, using SCPs, prevents non-administrative users from creating or editing security groups but doesn't
detect existing violations or notify when non-compliant rules are already in place. This approach requires
administrators to manually review and remediate existing security groups, increasing operational overhead.
SCPs also don't directly integrate with notification mechanisms.

Therefore, using the AWS Config restricted-ssh managed rule and its built-in integration with Amazon SNS
offers the fastest and least operationally intensive solution. AWS Config handles the continuous monitoring,
evaluation, and notification of compliance status automatically, fulfilling the company's requirements with
minimal effort.

---

## Question 775

**Answer:** **B**

**Explanation:**

The correct solution is B. Create a VPC Lattice service network. Associate the microservices with the

service network. Define HTTPS listeners for each service. Register microservice compute resources as
targets. Identify VPCs that need to communicate with the services. Associate those VPCs with the service
network.

Here's a detailed justification:
VPC Lattice is designed specifically for service-to-service communication in a multi-account and multi-VPC
environment, making it the most suitable and least administratively overhead solution. It provides service
discovery, traffic management (including HTTPS routing), and security policies at the application layer (Layer
7). By associating the Lambda functions and EKS-based microservices with the VPC Lattice service network,
you create a unified platform for inter-service communication. Defining HTTPS listeners for each service
ensures all communication is encrypted and occurs over port 443. Registering the microservices (Lambda and
EKS) as targets enables VPC Lattice to route traffic to the appropriate endpoints. Associating VPCs that need
communication with the lattice provides connectivity without complex routing or peering configurations.
Options A, C, and D have significant drawbacks in terms of administrative complexity and suitability for the
given requirements. **Option A** involves creating and managing a central inspection VPC with Network Firewall,
which is more suited for network-level security rather than application-level routing and service discovery. It
does not directly address the service registry requirement. **Option C**, using NLBs and PrivateLink, is a valid
solution for service exposure, but it requires managing individual NLBs for each service and configuring
PrivateLink endpoints in multiple VPCs, leading to higher administrative overhead than VPC Lattice.
Furthermore, PrivateLink doesn't inherently provide service discovery capabilities. **Option D**, VPC peering,
prefix lists, route tables, and security groups is the most complex and least scalable solution, as it requires
managing a large number of peering connections and security rules across multiple accounts and VPCs,
leading to significant administrative overhead and potential security risks. VPC peering does not provide builtin service discovery, which is a critical requirement.

Therefore, VPC Lattice provides the most streamlined and efficient solution for service-to-service
communication with service discovery, HTTPS support, and minimal administrative overhead in a multiaccount AWS environment.

---

## Question 776

**Answer:** **C**

**Explanation:**

The optimal solution is adding an Amazon ElastiCache for Redis layer in front of the database.

Here's why: The problem highlights read performance bottlenecks when retrieving metadata from RDS.
Scaling the database doesn't solve this, implying the issue is high read load rather than database capacity.
The requirements are snapshots, replication, and sub-millisecond response times. ElastiCache for Redis
excels at caching frequently accessed data, reducing the load on the RDS database. This significantly speeds
up metadata retrieval, providing sub-millisecond response times.
Redis supports snapshotting (RDB) for point-in-time recovery and replication (master-slave or cluster mode)
for high availability and read scaling. Aurora Replicas (**Option A**) are beneficial but primarily improve read
scalability within the database layer, not providing the ultra-fast caching ElastiCache offers. DynamoDB
(**Option B**) with global tables is a NoSQL solution. Migrating the entire RDS database to DynamoDB for
metadata, while viable, would be a significant architectural change with associated complexities and may not
fully leverage the relational nature of the metadata. ElastiCache for Memcached (**Option D**) is also a caching
solution, but it does not offer native snapshotting. Redis is therefore the most suitable choice considering all
the requirements (snapshots, replication, and sub-millisecond response times). Adding a cache layer
(ElastiCache) is a common and efficient strategy for handling read-heavy workloads.

---

## Question 777

**Answer:** **AC**

**Explanation:**

Here's a breakdown of why options A and C are the correct choices for sharing KMS-encrypted AMI snapshots
across OUs in AWS Organizations:

**Option A**: Add the development team's OU Amazon Resource Name (ARN) to the launch permission list for
the AMIs. This allows members within the Development OU to launch instances using those specific AMIs.
AMIs have launch permissions which control who can use them to create instances. By adding the
Development OU ARN, you're granting launch access to anyone in that OU without needing to individually
manage permissions for each account within. This is a key aspect of leveraging AWS Organizations for
centralized management.

**Option C**: Update the key policy to allow the development team's OU to use the AWS KMS keys that are

used to decrypt the snapshots. Since the AMI's snapshots are KMS-encrypted, the Development OU needs
permissions to use those keys. KMS key policies control who can use a KMS key. Without the necessary KMS
permissions, the Development OU won't be able to decrypt the snapshots and, consequently, won't be able to
launch instances from the AMIs. Adding the Development OU ARN to the KMS key policy grants the OU the
ability to decrypt the snapshots.

Why the other options are incorrect:

**Option B**: Add the Organizations root Amazon Resource Name (ARN) to the launch permission list for the
AMIs. While this would technically work, it grants access to every account within the entire AWS
Organizations hierarchy, which is a violation of the principle of least privilege. It's overly broad and not secure.

**Option D**: Add the development team’s account Amazon Resource Name (ARN) to the launch permission list
for the AMIs. This is not scalable. OUs can contain multiple accounts. Adding individual account ARNs means
you need to update the AMI permissions every time an account is added/removed from the Development OU,
increasing administrative overhead.

**Option E**: Recreate the AWS KMS key. Add a key policy to allow the Organizations root Amazon Resource
Name (ARN) to use the AWS KMS key. This is unnecessary and disruptive. Recreating a KMS key requires reencrypting all data protected by the original key. Also, like **Option B**, using the Organizations root ARN grants
excessively broad access to the KMS key.
Supporting Concepts:
AWS Organizations: Enables you to centrally manage and govern multiple AWS accounts.
https://aws.amazon.com/organizations/
Amazon Machine Images (AMIs): Provide the information required to launch an instance, which is a virtual
server in the cloud. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
AWS Key Management Service (AWS KMS): Enables you to create and manage cryptographic keys and
control their use across a wide range of AWS services. https://aws.amazon.com/kms/
KMS Key Policies: Control who can use a KMS key and the actions they can perform.
https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
Principle of Least Privilege: Granting only the minimum necessary permissions to perform a task.
By combining launch permissions on the AMI itself (**Option A**) with KMS key access permissions (**Option C**), the
Development OU can launch instances from the secure, KMS-encrypted AMIs while adhering to the security
principle of least privilege.

---

## Question 778

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most cost-effective solution for migrating the data to
Amazon S3 within the given constraints:
Data Volume: The company has a substantial amount of data to migrate (80 offices * 1 PB/office = 80 PB). This
volume necessitates a solution designed for large-scale data transfers.
Time Constraint: The 4-week deadline is a critical factor. The chosen method must be able to move a
significant amount of data within this timeframe.
Bandwidth Limitation: While each office has 1-2 Gbps internet, it's still a limiting factor for transferring 1PB
per office over the internet within the 4-week deadline. Relying solely on the internet may be too slow.
Cost-Effectiveness: This is the primary concern. Solutions like AWS Direct Connect involve significant
upfront and recurring costs. Storage Gateway relies on existing internet bandwidth and incurs data transfer
charges. AWS Snowmobile, designed for exabyte-scale migrations, may be overkill (and more expensive) for
80 PB.
Snowball Edge Storage Optimized: Snowball Edge Storage Optimized devices are specifically designed for
large-scale data transfers where network bandwidth is limited. They offer substantial storage capacity
(around 80 TB per device, but can vary based on the AWS region), allowing for physical data shipping to AWS.
Estimating number of devices: With 80PB, and approximately 80TB (0.08PB) per device, you'd need around
1000 Snowball Edge devices.
Snowball Edge devices support local processing, but for this use case the value is in the transfer.
Parallel Transfers: Multiple devices can operate in parallel, speeding up the overall migration process.
AWS handles the security and integrity of the data during transport.

Why other options are less suitable:
Direct Connect: While providing dedicated bandwidth, establishing Direct Connect at 80 global offices would
be prohibitively expensive and time-consuming. It would be more beneficial for ongoing operations.
Snowmobile: Intended for exabyte scale migrations, meaning Snowmobile has a higher cost, and it's likely an
overkill for 80 PB of data.
Storage Gateway: Suitable for hybrid cloud scenarios and continuous data replication, not ideal for a onetime, large-scale migration when bandwidth is constrained. The transfer would take very long over a 1-2 Gbps
link.
Conclusion: AWS Snowball Edge offers the best balance of speed, cost-effectiveness, and suitability for the
network constraints. It avoids the high costs of Direct Connect and the potential overkill of Snowmobile, while
overcoming the bandwidth limitations hindering Storage Gateway.

---

## Question 779

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct solution for providing read-only access to an
Amazon EFS file system for EC2 instances, while preventing modifications or deletion via IAM access control:
The core requirement is to ensure that EC2 instances can read the EFS dataset but cannot modify it. This
necessitates a mechanism to restrict write access at the EFS level. IAM policies offer granular control over
access to AWS resources. Specifically, resource-based policies attach directly to the EFS file system and
define permissions for who can access the resource and what actions they can perform.

**Option B** leverages a resource policy attached to the EFS file system. By explicitly denying the
elasticfilesystem:ClientWrite action (which encompasses all actions that would modify the data) to the IAM roles
associated with the EC2 instances, the company effectively prevents those instances from writing to or
deleting anything on the EFS volume. This directly addresses the security requirement of ensuring that the
dataset remains unchanged.
Here's why the other options are less suitable:

**A.** Mount the EFS file system in read-only mode from within the EC2 instances: This is insufficient because
mounting in read-only mode on the client (EC2 instance) side doesn't prevent a malicious actor who has
gained access to the EC2 instance with the correct permissions from remounting it with write access or
modifying the mount configuration. This approach relies on the EC2 instance configuration which could be
changed. IAM policies provide centralized, authoritative enforcement, making it more secure.

**C.** Create an identity policy for the EFS file system that denies the elasticfilesystem:ClientWrite action on
the EFS file system: While technically possible, identity policies are attached to IAM roles or users, not
directly to the EFS resource. This means you would have to apply this policy to every IAM entity that should
not have write access. It's much easier and less error-prone to control access from the EFS resource itself
using resource-based policies. Resource based policies give you a centralized location to manage these
controls.

**D.** Create an EFS access point for each application. Use Portable Operating System Interface (POSIX) file
permissions to allow read-only access to files in the root directory: EFS access points primarily focus on
controlling the user identity and file system path for access. While POSIX permissions can restrict access to
specific files and directories within the EFS file system, they don't fundamentally prevent an authorized user
(authorized via IAM) from modifying the permissions themselves or other files in the file system. This adds
complexity without a direct security benefit in this scenario. Access points are better suited for situations
where you need different applications to access the same data under different user contexts or paths. They
don't replace the need for IAM-based authorization. Access points on their own do not prevent against
authorized users from modifying or deleting objects in the FS.

In summary, option B directly implements the desired access control by denying write access to the EC2
instances via the resource policy attached to the EFS. This method enforces centralized, declarative access

control, which is more robust and maintainable.

---

## Question 780

**Answer:** **A**

**Explanation:**

The most secure solution is to use IAM roles for cross-account access. **Option A** proposes creating an IAM role
in the company's AWS account that the vendor's IAM role can assume. This is the best approach because it
avoids sharing long-term credentials like passwords or access keys.
IAM roles enable you to delegate access to users or services that don't normally have access to your AWS
resources. In this case, the vendor's tool, authenticated by its own IAM role in the vendor's account, assumes
the role in the company's account. This temporary access is governed by the policies attached to the assumed
role.

**Option B** is insecure because creating an IAM user with a password shares long-term credentials, violating
security best practices. **Option C** is also insecure because adding the vendor's IAM user directly to a group
requires managing individual user permissions in the company's account. **Option D**'s permission boundary
approach is also suboptimal as it involves creating an IAM user and managing permissions using a boundary
when role assumption is the intended workflow.
Cross-account IAM roles using the principle of least privilege are the gold standard for this scenario. The
policies attached to the company's role precisely define what the vendor's tool can do. By using a trust policy
on the role, you specify which AWS accounts (in this case, the vendor’s) are allowed to assume it. This ensures
that only authorized accounts and users can access
resources.https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-withroles.htmlhttps://aws.amazon.com/blogs/security/how-to-delegate-access-across-aws-accounts-using-iamroles/

---

## Question 781

**Answer:** **A**

**Explanation:**

**Option A** is the correct solution because it leverages AWS Budgets, which is specifically designed for setting
spending thresholds and receiving alerts when those thresholds are approached or exceeded.

Here's why:

1. Cost Allocation Tags: Cost allocation tags (See
https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) enable you to
categorize and track your AWS resource costs. By tagging resources with department-specific tags,
you can attribute spending to the correct department, which addresses the CFO's concern for
accountability.

2. AWS Budgets: AWS Budgets (See https://aws.amazon.com/aws/tools/aws-budgets/) allows you to
set custom budgets and track your AWS usage and costs against those budgets. You can define
budget periods (e.g., monthly, quarterly) and set thresholds for alerts.

3. Alert Thresholds: The key requirement is to receive a notification when spending reaches 60% of the
budget. AWS Budgets lets you define custom alert thresholds (e.g., 60%, 80%, 100%) and configure
email notifications when these thresholds are breached. This directly satisfies the CFO's notification
requirement.

Why the other options are incorrect:

**Option B**: While AWS Cost Explorer forecasts can help with anticipating future costs, it does not
automatically assign resource ownership. AWS Cost Anomaly Detection is designed to identify unusual
spending patterns, but is less effective than the straight forward AWS budget approach for simple budget
monitoring.

**Option C**: While cost allocation tags are useful, using the AWS Support API on AWS Trusted Advisor for
budget alerting is not the intended function of these services. AWS Trusted Advisor mainly focuses on best
practices, cost optimization, security, and performance, not detailed budget threshold notifications.

**Option D**: Similar to option B, AWS Cost Explorer forecasts cannot determine resource owners, and using it to
set alert thresholds is not it's intended function, use AWS Budgets instead.

---

## Question 782

**Answer:** **B**

**Explanation:**

The correct solution is B because it aligns with the requirement of internal accessibility and outbound internet
access for patching.

Here's why:
Private Subnets for Security: Placing the EC2 instances hosting the web application in private subnets
isolates them from direct internet exposure, fulfilling the requirement that the application be accessible only
from the company's office. https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
Internal ALB for Load Balancing: An internal Application Load Balancer (ALB) ensures traffic is distributed
efficiently across the EC2 instances within the private subnets. It is accessible only within the VPC.
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
NAT Gateway for Outbound Internet Access: NAT gateways in public subnets allow the EC2 instances in the
private subnets to initiate outbound connections to the internet (for downloading security patches) without
exposing them to inbound traffic from the internet. https://docs.aws.amazon.com/vpc/latest/userguide/vpcnat-gateway.html
Internet Gateway for NAT Gateway: The internet gateway is necessary for the NAT gateway to function. The
NAT gateway resides in the public subnet and uses the internet gateway to access the internet.
Security Group Inbound Rule: Restricting the ALB's security group inbound traffic to the company's office
network CIDR block, via the Site-to-Site VPN connection, ensures only authorized traffic from the company's
network can access the web application. Security groups act as virtual firewalls, controlling traffic at the
instance level. https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html

**Option A** is incorrect because deploying instances in public subnets and setting the ALB's inbound source to
0.0.0.0/0 makes the application accessible to the entire internet, violating the security requirement.

**Option C** is wrong because the placement of NAT gateways and the intended direction of outbound security
group rules are incorrect. NAT Gateways need to reside in public subnets to forward requests to the internet,
and security group rules filter inbound traffic, not outbound traffic.

**Option D** is incorrect because it uses a public ALB with EC2 instances in private subnets. While the EC2
instances are secured, the ALB would be exposed to the public internet, contrary to the requirement.
Furthermore, outbound destination rules are uncommon in security groups.

---

## Question 783

**Answer:** **D**

**Explanation:**

The most cost-effective solution for migrating accounting records to an AWS managed service that requires
minimal operational support and provides immutable, cryptographically verifiable logs is Amazon Quantum
Ledger Database (QLDB).

Here's why:
Immutability and Cryptographic Verification: QLDB is designed specifically for systems of record that
require a high degree of trust and transparency. It provides an immutable transaction log that is
cryptographically verifiable. Each transaction is chained together using a cryptographic hash, ensuring that
any tampering is detectable. https://aws.amazon.com/qldb/
Minimal Operational Support: As a fully managed database, QLDB handles patching, backups, and other
operational tasks, reducing the operational burden on the company.
Cost-Effectiveness: For accounting records, QLDB offers a pay-per-use pricing model based on storage, I/O,
and journal storage, which can be more cost-effective than other options for this specific use case.
Now let's analyze why the other options are less suitable:
Amazon Redshift: While Redshift is a powerful data warehouse, it's not designed for maintaining immutable
ledgers or providing cryptographic verification of data changes. It's more suitable for analytical workloads,
which is not the primary need here. Also, managing a Redshift cluster requires more operational overhead
than QLDB.
Amazon Neptune: Neptune is a graph database service and is designed for storing and querying relationships
between data. It does not inherently provide immutability or cryptographic verification of changes, nor is it the
best choice for structured accounting data.
Amazon Timestream: Timestream is a time-series database service optimized for storing and querying timeseries data. While it can store data over time, it does not provide the immutability and cryptographic
verification features required for accounting records that are natively present in QLDB.
In conclusion, QLDB is the best option because it inherently provides the required immutability, cryptographic
verification, and minimal operational overhead at a potentially lower cost for this particular use case.

---

## Question 784

**Answer:** **C**

**Explanation:**

The correct answer is C: Use AWS Glue DataBrew to process the data. Use an AWS Step Functions state
machine to run the DataBrew data preparation jobs.

Here's why:
AWS Glue DataBrew excels at data preparation tasks like cleaning, normalizing, and enriching data without
requiring you to write code. It provides a visual interface for data transformation. This aligns with the
requirement of aggregating data for reporting.
AWS Step Functions is a serverless orchestration service that lets you define workflows (state machines) to
coordinate multiple AWS services. It addresses the needs for running data preparation jobs at regular
intervals, in parallel where needed, and in a specific order later. The visual workflow simplifies orchestration,
error handling, retry logic, and state management.
Step Functions' built-in error handling and retry logic significantly reduce the operational overhead by
automating these critical aspects.
Step Functions can orchestrate DataBrew jobs, ensuring they run in the specified order with the needed
parallel executions at the desired intervals.
Let's examine why the other options are less suitable:

**A.** AWS Lambda: While Lambda can process data upon S3 upload, managing complex dependencies,
parallelism, and a series of jobs in a specific order becomes unwieldy. Regularly scheduled intervals with
other Lambda invocations would require custom scheduling and intricate error handling, which increases
operational overhead. Lambda has execution time limits that might hinder lengthy data preparation jobs.

**B.** Amazon Athena: Athena is a query service to analyze data in S3, not a data preparation tool. It focuses on
querying and analysis after the data is prepared. While EventBridge Scheduler can schedule Athena queries,
Athena itself doesn't handle data preparation tasks or orchestration of multiple jobs.

**D.** AWS Data Pipeline: Data Pipeline is an older service, largely superseded by more modern alternatives like
Glue and Step Functions. While it can schedule and orchestrate data processing tasks, it's more complex to
manage, less flexible than Step Functions, and requires more manual configuration for error handling and
state management. Choosing a legacy service when better options exist is not ideal.

Therefore, the combination of AWS Glue DataBrew for data preparation and AWS Step Functions for
orchestration delivers the best solution by simplifying the data preparation process and reducing operational
overhead through serverless orchestration, built-in error handling, and retry logic.
Supporting Documentation:
AWS Glue DataBrew: https://aws.amazon.com/glue/databrew/

AWS Step Functions: https://aws.amazon.com/step-functions/

---

## Question 785

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution for ensuring no duplicate payment
processing in the described architecture, along with supporting information:
The primary requirement is to prevent duplicate payment processing. In a distributed system like this,
transient errors or retries can inadvertently cause the same payment to be processed multiple times. The key
to solving this problem is to enforce ordered processing and deduplication.

**Option C** utilizes Amazon SQS FIFO (First-In, First-Out) queues. FIFO queues guarantee that messages are
processed in the exact order they are sent and provide exactly-once processing semantics when combined
with deduplication. This is crucial for payment processing, where the order of transactions may be significant,
and preventing duplicates is paramount. The first Lambda function retrieves payments and publishes them to
the FIFO queue. The second Lambda function polls the queue and processes the payments in the order they
were received. The FIFO queue's built-in deduplication feature prevents duplicate messages from being
processed, even if they are sent multiple times.

**Option A** is incorrect because using Amazon S3 for queuing introduces complexities and doesn't guarantee
order or prevent duplicate processing without significant custom coding. S3 event notifications are not
designed for reliable message queuing.

**Option B** is incorrect because standard SQS queues do not guarantee message order or prevent duplicates.
While you could implement deduplication in the second Lambda function, the FIFO queue approach in Option
C is a cleaner, more reliable, and AWS-managed solution for preventing duplicates.

**Option D** is incorrect because while DynamoDB streams can provide near real-time data propagation, they do
not inherently guarantee ordered delivery or deduplication. It also introduces an additional dependency on
DynamoDB, which isn't necessary given the capabilities of SQS FIFO queues. Implementing deduplication with
DynamoDB streams would require complex logic and potentially introduce latency. The scaling
characteristics of SQS are also better suited for a high-volume, asynchronous payment processing system.

In summary, using an Amazon SQS FIFO queue with a Lambda function consumer provides a robust and

scalable solution for ordered, exactly-once processing, which directly addresses the requirement of
preventing duplicate payment processing in a multi-AZ, Lambda-based payment application. The other
options lack the built-in capabilities for ensuring both message order and deduplication.
Supporting Documentation:
Amazon SQS FIFO Queues:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html
Lambda Best Practices: https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html

---

## Question 786

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, and why the other options are incorrect:
The core requirement is to collect usage and configuration data from on-premises servers to facilitate
migration planning. This necessitates a discovery and assessment process.

**Option B**: Setting the home AWS Region in AWS Migration Hub and utilizing AWS Application Discovery
Service (ADS) accurately addresses this need. Migration Hub acts as a central location to track migrations
and ADS is specifically designed to gather information about on-premises servers, including their
configuration, utilization, and dependencies. https://aws.amazon.com/application-discovery/ and
https://aws.amazon.com/migration-hub/
ADS provides a comprehensive view of the on-premises environment by discovering servers, their operating
systems, applications, and network dependencies. This data helps organizations plan the migration by
identifying compatible AWS services and estimating the required resources. Setting the home AWS Region
within Migration Hub allows for centralized tracking of migration progress.

**Option A**: While AWS Systems Manager can collect data from servers, it typically requires the Systems
Manager agent to be installed on the servers. This might present challenges in an on-premises environment
where automated agent deployment and management could be difficult. Furthermore, Systems Manager is
not primarily designed for in-depth migration discovery and assessment. While useful for managed
instances, its strength isn't the initial discovery of servers in an unknown environment.

**Option C** & D: AWS Schema Conversion Tool (SCT) and AWS Database Migration Service (DMS) are focused
on database migrations, not general server discovery and assessment. SCT helps convert database schemas
between different database engines. DMS is used to migrate databases. Trusted Advisor provides cost

optimization, security, fault tolerance, and performance recommendations for already running AWS
resources, not for on-premises environments during a migration assessment phase.
https://aws.amazon.com/dms/ and https://aws.amazon.com/schema-conversion-tool/ and
https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

In summary, ADS provides the required discovery capabilities for understanding the on-premises environment
prior to migration, and Migration Hub helps organize and track the overall migration process. Therefore,
option B is the most appropriate solution for the scenario.

---

## Question 787

**Answer:** **A**

**Explanation:**

The best solution is to deploy AWS Control Tower in the organization's management account and enable AWS
Security Hub and Account Factory. Control Tower simplifies multi-account management within AWS
Organizations by automating the setup of a well-architected, secure, and compliant landing zone. Deploying in
the management account leverages Control Tower's organizational-wide governance capabilities.
Enabling AWS Security Hub provides a centralized view of security alerts and compliance status across all
AWS accounts in the organization. It automatically assesses resource configurations against security
standards like the AWS Foundational Security Best Practices (FSBP) and generates findings. Security Hub
also aggregates findings from other AWS security services like GuardDuty and Inspector.
AWS Control Tower Account Factory automates the provisioning of new accounts pre-configured with
baseline security and compliance settings. This ensures that all new accounts adhere to the organization's
security policies from the start. By enabling Security Hub at the organization level, all API calls and logins are
automatically audited, and compliance with FSBP is continuously monitored, minimizing operational overhead.

**Option B** is incorrect because deploying Control Tower in a member account limits its scope and requires
additional configuration to extend governance across the entire organization. Options C and D using AWS
Managed Services (AMS) Accelerate involve more complexity and operational overhead compared to Control
Tower. AMS requires submitting RFCs for provisioning services and involves a more hands-on approach,
making it less managed than Control Tower for the stated requirements. Furthermore, focusing solely on
GuardDuty (option C) doesn't address the FSBP compliance requirement directly as Security Hub does.
Here are some authoritative links for further research:

AWS Control Tower: https://aws.amazon.com/controltower/
AWS Security Hub: https://aws.amazon.com/security-hub/
AWS Organizations: https://aws.amazon.com/organizations/
AWS Foundational Security Best Practices (FSBP):
https://docs.aws.amazon.com/securityhub/latest/userguide/fsbp-standards-cis.html

---

## Question 788

**Answer:** **C**

**Explanation:**

The most cost-effective solution for analyzing Parquet-formatted log files in S3 with occasional SQL queries
is using AWS Glue and Amazon Athena.
Explanation:
Cost Considerations: Athena and Glue follow a pay-per-query model. This is significantly more cost-effective
for infrequent analysis compared to running and maintaining a persistent cluster like Redshift or EMR. Aurora
would incur costs for storage, compute, and data migration, making it less suitable for occasional queries
against log files.
Functionality: Athena directly queries data in S3 using standard SQL. It requires metadata about the data's
structure. AWS Glue crawler automatically discovers the schema of the Parquet files and creates a metadata
catalog that Athena can use.
Alternatives Breakdown:
Aurora MySQL with DMS: Overkill and expensive. Requires database management, data loading, and ongoing
Aurora costs, even when not actively querying.
Redshift Spectrum: While Redshift Spectrum allows querying S3 data, Redshift itself is a data warehouse
designed for more intensive analytical workloads and would be more expensive for occasional use.
EMR with Spark SQL: EMR involves spinning up and managing a cluster, which is not cost-effective for
infrequent queries. It also adds operational overhead. Spark SQL is suitable for more complex data processing
and transformations. Athena offers a simpler SQL interface directly on S3.
Workflow:

1. AWS Glue Crawler: Configured to crawl the S3 bucket containing the Parquet log files.

2. AWS Glue Data Catalog: The crawler creates a table definition in the AWS Glue Data Catalog,
defining the schema of the Parquet data.

3. Amazon Athena: Users can then use the Athena console or API to run SQL queries against the table

defined in the Glue Data Catalog. Athena uses the table metadata to understand the structure of the
Parquet data in S3 and execute the queries.

---

## Question 789

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the correct answer, along with explanations of why the other
options are incorrect, and supporting documentation:
The requirement is to prevent the deployment of specific non-compliant resources within an AWS
Organization governed by AWS Control Tower. The solution needs to block the deployment of EC2 instances
with public IPs and IAM resources with overly permissive inline policies.

**Option D**: Use a service control policy (SCP) to block actions for the EC2 instances and IAM resources if the
actions lead to noncompliance. This is the most suitable solution. SCPs are designed for preventative
governance within AWS Organizations. They allow you to define guardrails at the organizational unit (OU) or
account level, preventing actions that violate the policy. In this scenario, an SCP can be written to deny the
creation of EC2 instances with public IP addresses and deny the creation of IAM roles or users that include
inline policies containing "*". SCPs evaluate before the request is made, preventing the action from ever
occurring. This fulfills the requirement of preventing the deployment of these resources.

**Option A**: Use AWS Control Tower proactive controls to block deployment of EC2 instances with public IP
addresses and inline policies with elevated access or “*”. While AWS Control Tower proactively guides
resource provisioning, it primarily relies on enforcing guardrails using SCPs and AWS Config rules behind the
scenes. Proactive controls, particularly with AWS Control Tower, often initiate guardrails based on best
practices to prevent deployment of non-compliant resources. Although, these controls also end up being an
SCP under the hood, so the answer to this question is D because it is the actual service being utilized.

**Option B**: Use AWS Control Tower detective controls to block deployment of EC2 instances with public IP
addresses and inline policies with elevated access or “*”. Detective controls, like AWS Config rules, identify
and report non-compliant resources after they have been deployed. They do not prevent the initial

deployment. The requirement is to prevent deployment, so this option fails. Detective controls provide
auditing and reporting, not preventative measures.

**Option C**: Use AWS Config to create rules for EC2 and IAM compliance. Configure the rules to run an AWS
Systems Manager Session Manager automation to delete a resource when it is not compliant. AWS Config
detects non-compliant resources. While you can use remediation actions (like a Systems Manager automation
to delete a resource), this reacts to the deployment after it happens. The requirement is to prevent
deployment in the first place. This option does not provide a preventative solution, and attempting to
automatically delete newly created non-compliant resources can lead to operational complexities and
potential data loss.
In summary: SCPs are the only option that provides the preventative control required to block the deployment
of non-compliant EC2 instances and IAM resources. AWS Config provides detective controls. AWS Control
Tower simplifies the management of governance at the OU level but typically relies on underlying services
such as SCPs and Config.

---

## Question 790

**Answer:** **BE**

**Explanation:**

The correct answer is B. Configure Amazon EC2 Auto Scaling with multiple Availability Zones in private
subnets and E. Configure an Application Load Balancer in a public subnet to distribute web traffic.
Justification:
The problem requires a solution that provides high availability and scalability without rewriting the web
application. Let's analyze why each option is or isn't suitable:

**A.** Replace the EC2 instance with a larger compute optimized instance: While this may provide some
temporary relief, it doesn't address high availability (single point of failure) or automatic scalability as demand
fluctuates. It's a vertical scaling approach, which has limitations.

**B.** Configure Amazon EC2 Auto Scaling with multiple Availability Zones in private subnets: This is a crucial
component of the solution. Auto Scaling groups automatically launch and terminate EC2 instances based on
demand, ensuring scalability. Deploying instances across multiple Availability Zones (AZs) provides high
availability; if one AZ fails, the application continues to run in others. Placing the instances in private subnets
is important for security, shielding them from direct internet access.

**C.** Configure a NAT gateway in a public subnet to handle web requests: A NAT Gateway is used to allow
instances in private subnets to connect to the internet, but not to handle incoming web traffic. This option is
related to outbound connectivity, not the inbound traffic the application needs to handle.

**D.** Replace the EC2 instance with a larger memory optimized instance: Similar to option A, this is vertical
scaling, which doesn't provide high availability or dynamic scalability. It might not even be the correct
optimization if the application is CPU-bound rather than memory-bound.

**E.** Configure an Application Load Balancer in a public subnet to distribute web traffic: This is the second
crucial component. An Application Load Balancer (ALB) distributes incoming web traffic across multiple EC2
instances within the Auto Scaling group. It provides a single point of entry for users and intelligently routes
requests to healthy instances. Placing the ALB in a public subnet makes it accessible to internet users. The
ALB will be able to reach the private instances through the VPC network.

Therefore, the combination of Auto Scaling (B) and an Application Load Balancer (E) delivers the required high
availability and scalability to meet increased user demand without rewriting the application. The ALB
distributes traffic, while Auto Scaling ensures enough instances are running across multiple Availability
Zones.

---

## Question 791

**Answer:** **D**

**Explanation:**

The correct answer is D. Create an AWS Key Management Service (AWS KMS) key. Enable encryption
helpers on the Lambda functions to use the KMS key to store and encrypt the environment variables.

Here's why:
The core requirement is to protect Lambda environment variables from being seen in plaintext by developers.
AWS KMS provides a managed service for creating and controlling the encryption keys used to encrypt data.

By using a KMS key, the environment variables can be encrypted at rest, ensuring that developers only see
the encrypted values, not the actual secrets.
AWS Lambda integrates with AWS KMS to natively support encryption of environment variables. Lambda
provides "encryption helpers," which are libraries or utilities that simplify the process of encrypting and
decrypting environment variables using KMS. This allows you to encrypt sensitive information before storing it
as environment variables. The Lambda function can then decrypt the variables at runtime.

**Option A** is incorrect because deploying to EC2 instances doesn't solve the problem of securing environment
variables. You'd still need a mechanism to protect the secrets stored on the EC2 instances. It also moves away
from serverless, which may be an undesired architectural change.

**Option B** is incorrect because configuring SSL encryption on the Lambda functions relates to securing
communication to the function, not encrypting the environment variables themselves. While CloudHSM could
store keys, integrating it directly for encrypting environment variables within Lambda isn't the standard or
most efficient approach compared to KMS. CloudHSM is more geared towards applications requiring FIPS
140-2 Level 3 compliance and dedicated hardware security modules.

**Option C** is incorrect because ACM certificates are primarily used for securing network traffic (TLS/SSL). They
are not designed for encrypting data at rest, such as environment variables. ACM manages SSL/TLS
certificates, not general-purpose encryption keys.
Using KMS offers several advantages:
Centralized key management: KMS simplifies the management and rotation of encryption keys.
Access control: KMS allows fine-grained control over who can use the key, ensuring only authorized users
and services can access the encrypted environment variables.
Auditing: KMS provides audit trails of key usage, allowing you to track who accessed the encrypted
environment variables.
Integration with Lambda: Direct integration and readily available encryption helpers streamline the
implementation.
Here are some relevant links for further research:
AWS Lambda Environment Variables: https://docs.aws.amazon.com/lambda/latest/dg/configurationenvvars.html
AWS KMS: https://aws.amazon.com/kms/
Encrypting Lambda Environment Variables: https://aws.amazon.com/blogs/security/encrypting-aws-lambdaenvironment-variables-using-aws-kms/

---

## Question 792

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the most operationally efficient solution for user authentication and
API access.

Here's a detailed justification:
Amazon Cognito User Pools: Cognito User Pools are designed specifically for managing user directories and
handling authentication. They provide a managed and scalable solution for user registration, login, and
password management. They handle the complexities of user management, including security best practices,
reducing operational overhead.
https://aws.amazon.com/cognito/user-pools/
Amazon API Gateway REST APIs: REST APIs offer more features and flexibility, suitable for complex API
requirements, including request validation, transformation, and caching, if required for the analytics service.
Although HTTP APIs are cheaper and have lower latency, REST APIs provide more control for future
extensions and complex data processing.
Cognito Authorizer: API Gateway seamlessly integrates with Cognito User Pools via Cognito authorizers. This
allows API Gateway to validate the JSON Web Tokens (JWTs) issued by Cognito upon successful user
authentication. This removes the need for custom authentication logic within your backend services,
simplifying the architecture.
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html
Why other options are less efficient:

**B:** While HTTP APIs are cost-effective, Cognito Identity Pools are used to grant users access to AWS
resources directly (like S3) and are not the primary mechanism for API authentication like User Pools.

**C:** Using a Lambda function for authentication requires managing custom authentication logic, which is less
efficient than leveraging Cognito. This adds operational burden regarding security and maintenance.

**D:** IAM users should not be used directly for end-user authentication. It's difficult to manage and scale IAM
users for millions of users, and exposes AWS account keys.

Therefore, using Amazon Cognito User Pools for authentication and integrating with API Gateway REST APIs
through a Cognito authorizer is the most operationally efficient and secure solution for offering a web
analytics service to millions of users. It leverages managed services to handle user authentication, offloading
this responsibility from the backend and reducing operational overhead.

---

## Question 793

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution for preventing accidental KMS key deletion
with the least operational overhead, incorporating relevant cloud computing concepts and links to AWS
documentation:

**Option C** leverages the power of EventBridge to detect the DeleteKey operation. When EventBridge identifies
this event, it triggers an AWS Systems Manager Automation runbook. This runbook is designed to
immediately cancel the KMS key deletion process, acting as a preventative measure. Concurrently,
EventBridge publishes a message to an SNS topic, which then notifies administrators via email about the
attempted deletion. This provides immediate awareness and allows for further investigation if needed.
The reason this is the preferred solution lies in its minimal operational burden. EventBridge simplifies eventdriven architectures, allowing for streamlined event detection and routing. AWS Systems Manager
Automation offers pre-built runbooks or the ability to create custom ones, enabling quick implementation of
automated responses like stopping a deletion. The SNS integration provides a simple, scalable, and costeffective way to deliver notifications.

**Option A**, while similar, utilizes AWS Config. Config's primary role is for compliance and auditing, providing a
historical view of resource configurations. While Config can enforce rules, its strength isn't immediate realtime action. It's better suited for detecting configuration drift after it occurs. Trying to use Config to cancel a
deletion is less straightforward and potentially less responsive than a System Manager Automation runbook
directly triggered by EventBridge.

**Option B** introduces a Lambda function and a CloudWatch alarm. While effective, this approach adds
complexity. You would need to write, deploy, and maintain the custom Lambda function, increasing
operational overhead. The CloudWatch alarm also creates an additional dependency, as the Lambda would
need to be triggered by the Alarm to prevent the KMS deletion

**Option D** uses CloudTrail logs and CloudWatch alarms. CloudTrail captures API activity, so this setup relies on
detecting the DeleteKey operation after it has been logged. This means there's a delay between the attempted
deletion and the notification, and the solution doesn't actively prevent the deletion from occurring. This makes
it less effective than option C, which prevents the deletion directly.

In summary, **Option C** offers a robust and streamlined solution that effectively prevents KMS key deletion
with minimal operational overhead by using EventBridge to trigger an AWS Systems Manager Automation
runbook that cancels the deletion process and delivers immediate notifications via SNS. The focus on
prevention rather than simple detection is the key differentiator.

---

## Question 794

**Answer:** **B**

**Explanation:**

The correct answer is B, running the program in AWS Lambda and triggering it with an Amazon EventBridge
rule. Here's why:
Cost-Effectiveness: Lambda functions are cost-effective for infrequent and short-running tasks. You only pay
for the compute time consumed when the Lambda function is executing. Since the report generation program
runs mostly during the last week of the month and each report takes less than 10 minutes to produce,
Lambda's pay-per-use model aligns perfectly with the usage pattern, minimizing costs.
Event-Driven Architecture: EventBridge is ideal for creating event-driven architectures. Using an EventBridge
rule to trigger the Lambda function ensures that the report generation process is initiated only when a report
is requested, eliminating the need for continuous resource provisioning and reducing costs.
Scalability and Management: Lambda automatically scales to handle concurrent requests. AWS takes care
of the underlying infrastructure management, allowing the company to focus on the report generation logic
rather than server maintenance.
EC2 On-Demand (A): While On-Demand EC2 instances provide predictable performance, running them
continuously for a week each month would incur significant costs, even if the program is not actively
generating reports.
ECS (C): ECS offers more control over the underlying infrastructure, but it also involves more operational
overhead. It might be suitable for more complex or long-running tasks, which is not needed in the use-case.
EC2 Spot Instances (D): Spot instances offer cost savings, but they are subject to interruption if the spot
price exceeds the bid price. Running the instances continuously during the last week of the month is also
inefficient.
In contrast, Lambda provides a serverless, cost-optimized, and scalable solution for this specific report
generation use case. It offers the lowest total cost of ownership (TCO) due to its pay-per-use model, minimal
operational overhead, and seamless integration with EventBridge for event-driven execution.
Supporting Links:

AWS Lambda: https://aws.amazon.com/lambda/
Amazon EventBridge: https://aws.amazon.com/eventbridge/
AWS Pricing: https://aws.amazon.com/pricing/

---

## Question 795

**Answer:** **BD**

**Explanation:**

Here's a detailed justification for why options B and D are the correct solutions for optimizing a tightly
coupled HPC environment on AWS for networking and storage:

**Option B**: Create an Amazon FSx for Lustre file system. Configure the file system with scratch storage.
Amazon FSx for Lustre is specifically designed for high-performance workloads like HPC. Lustre is a parallel
distributed file system that provides sub-millisecond latencies and high throughput, essential for HPC
applications that require rapid access to large datasets. Configuring it with scratch storage is appropriate
because HPC environments often generate large amounts of temporary data during computations. Scratch
storage on FSx for Lustre is ideal for this type of transient data, offering performance without the cost of
long-term storage.

**Option D**: Launch Amazon EC2 instances. Attach an Elastic Fabric Adapter (EFA) to the instances. Elastic
Fabric Adapter (EFA) is a network interface designed to accelerate HPC and machine learning applications. It
enables EC2 instances to achieve lower latency and higher throughput network communication, which is
critical for tightly coupled HPC workloads. EFA utilizes a custom transport protocol that bypasses the
operating system kernel to directly communicate with other EFAs, significantly reducing latency and
improving scalability for inter-node communication. EFA supports Scalable Reliable Datagram (SRD) protocol
to improve performance of inter-instance communication.
Now, let's address why the other options are incorrect:

**Option A**: Create an accelerator in AWS Global Accelerator. Configure custom routing for the accelerator.
AWS Global Accelerator is designed to improve the performance of applications for a global user base by
routing traffic to the optimal endpoint. While it improves latency and availability, it doesn't directly address
the specific networking requirements within a tightly coupled HPC cluster itself, which needs low-latency
communication between compute nodes.

**Option C**: Create an Amazon CloudFront distribution. Configure the viewer protocol policy to be HTTP and
HTTPS. Amazon CloudFront is a content delivery network (CDN) service. It is used for caching and distributing
content to users worldwide. While it's valuable for making data available to users after HPC processing, it
doesn't contribute to the performance of the HPC computations themselves.

**Option E**: Create an AWS Elastic Beanstalk deployment to manage the environment. AWS Elastic Beanstalk
is a platform-as-a-service (PaaS) designed for deploying and managing web applications. While it simplifies

deployment, it doesn't offer specific networking or storage optimizations tailored for HPC environments. It is
not designed to handle the specific needs of tightly coupled applications or data-intensive HPC workloads.

---

## Question 796

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages Amazon Rekognition, a pre-trained AWS service, for image
analysis without requiring custom ML model training. This aligns directly with the requirement of avoiding ML
model training. Here's a detailed breakdown:

**Option B** proposes an AWS Lambda function that uses Amazon Rekognition to detect unwanted content in
uploaded photos. Rekognition offers pre-built models for tasks like object and scene detection, facial
analysis, and content moderation. The Lambda function acts as an intermediary, receiving the image, sending
it to Rekognition for analysis, and then acting upon the results (e.g., rejecting the upload if unwanted content
is detected). Creating a Lambda function URL enables a simple and direct way for the web application to
invoke the function whenever a new photo is uploaded. This architecture promotes a serverless and eventdriven design.

**Option A** is incorrect because Amazon SageMaker Autopilot specifically automates the process of building,
training, and deploying machine learning models. This directly contradicts the requirement to avoid training an
ML model. While SageMaker is a powerful ML tool, it's not suitable when pre-trained services can suffice.

**Option C** is incorrect because Amazon Comprehend is a natural language processing (NLP) service used for
analyzing text, not images. It can't detect unwanted content in photos. CloudFront functions are used for
lightweight processing of HTTP requests at the edge, such as modifying headers or redirecting requests.

**Option D** is incorrect because Amazon Rekognition Video is designed for analyzing video streams, not
individual images. While it could technically process a single-frame video, it's overkill and more expensive
than using Rekognition for image analysis.

In summary, option B is the most efficient and cost-effective solution because it uses a pre-trained AWS

service (Rekognition) to fulfill the requirement of preventing unwanted content in uploaded photos without
requiring any ML model training. It is also a more efficient implementation utilizing a Lambda function URL
that the web application can easily invoke, ensuring real-time analysis and filtering of images.
Further Reading:
Amazon Rekognition: https://aws.amazon.com/rekognition/
AWS Lambda: https://aws.amazon.com/lambda/
Lambda Function URLs: https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html

---

## Question 797

**Answer:** **B**

**Explanation:**

The correct answer is B. Adding multiple MFA devices for the root user account provides redundancy and
ensures continued access even if one MFA device is lost or unavailable. Here's why:
The AWS root user has complete, unrestricted access to all AWS resources and services in an account.
Securing it with MFA is a best practice. However, losing the MFA device presents a significant risk of being
locked out of the entire AWS account.

**Option B** directly addresses this risk by implementing a contingency plan. By configuring multiple MFA
devices (such as a hardware token and a virtual MFA app on a different phone), the company creates a backup
access method. If the primary MFA device is lost, the company can still authenticate using the secondary
device, maintaining uninterrupted access to the root user account and all its privileges. This provides
resilience against the failure or loss of a single MFA device.

**Option A**, while seemingly a good idea, doesn't completely address the root user problem. While a backup
administrator account could be useful, losing access to the root account is still a critical vulnerability. You
wouldn't be able to perform all root-level tasks. Options C and D are both reactive and inadequate. Creating a
new administrator account (C) or attaching admin policies to another user (D) after losing access to the root
account is not a valid solution because you would need the existing root user to perform these actions. They
also involve a period of downtime, which is unacceptable for a critical ecommerce platform.
By using multiple MFA devices, the company adheres to security best practices while ensuring business
continuity. This proactive approach avoids a single point of failure for root user access.
Supporting Links:
AWS Documentation on Multi-Factor Authentication (MFA):
AWS Security Best Practices - IAM: Specifically, review the sections about securing the root user.

---

## Question 798

**Answer:** **B**

**Explanation:**

The best solution to meet the requirements of rapid partner onboarding, scalability, and minimal
implementation effort is B. Create an Amazon Simple Notification Service (Amazon SNS) topic. Choose an
endpoint protocol. Subscribe the partners to the topic. Publish user IDs to the topic when the company
gives users points.

Here's why:
Scalability and Ease of Onboarding: Amazon SNS is designed for high-throughput, scalable message
delivery. New partners can simply subscribe to the topic without requiring code changes on the company's
side. This makes onboarding hundreds of vendors daily manageable.
Loose Coupling: SNS facilitates loose coupling between the rewards website and the partners. The website
simply publishes user IDs to the SNS topic, and SNS handles the delivery to subscribed partners. This
decoupling simplifies maintenance and allows partners to consume notifications independently.
Endpoint Flexibility: SNS supports various endpoint protocols (HTTP, HTTPS, email, SMS, AWS Lambda,
SQS) which provides partners with flexibility in how they receive notifications. The company does not have to
implement individual mechanisms for each partner's preferred method.
Minimal Implementation Effort: Setting up an SNS topic and publishing messages to it requires minimal
code. The company simply needs to integrate the SNS API into their rewards system. The partners handle
their subscription and consumption logic.
Alternatives are Less Efficient:
A (Timestream and Lambda): This approach requires the company to maintain a list of partners and iterate
through it for each user ID, which adds complexity and overhead. Lambda has invocation limits and scaling
concerns if the list of partners becomes very large.
C (Step Functions): Step Functions are designed for orchestrating complex workflows. Sending notifications
to partners does not require a complex workflow. Implementing a task for each partner is not efficient and
adds unnecessary complexity.
D (Kinesis Data Streams): Kinesis Data Streams is designed for real-time data processing and analytics, not
for notification delivery. It requires implementing producer and consumer applications, adding significant

complexity.

---

## Question 799

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:

**Option A**: This solution leverages Amazon S3 Event Notifications, AWS Lambda, and Amazon Comprehend. S3
Event Notifications trigger the Lambda function whenever a new recipe file is uploaded (PutObject). The
Lambda function then uses Amazon Comprehend, a natural language processing (NLP) service, to extract the
ingredient names from the text file. Amazon Comprehend is designed for text analysis, including entity
recognition, which makes it suitable for identifying ingredients. The extracted ingredient names are then
stored in the DynamoDB table. This approach minimizes manual effort, cost-effectively automates the
process, and requires no machine learning expertise from the company.

Why other options are incorrect:

**Option B** (Amazon Forecast): Amazon Forecast is for time-series forecasting, not text analysis or ingredient
extraction. It is completely unsuitable for the task and would incur unnecessary costs.

**Option C** (Amazon Polly, Amazon SNS, Manual Calculation): This solution involves converting text to speech
using Amazon Polly, notifying employees via Amazon SNS, and manually calculating the nutrition score. This
is labor-intensive, error-prone, and expensive due to the high human involvement. It completely defeats the
purpose of automation.

**Option D** (Amazon SageMaker): Amazon SageMaker is a powerful machine learning platform, but using it for
a simple ingredient extraction task is overkill. It requires machine learning expertise to train and deploy a

model, which the company lacks. Furthermore, it would be significantly more expensive than using Amazon
Comprehend.
Cost-Effectiveness and Automation:

**Option A** provides a balance between automation and cost. Amazon Comprehend offers pay-as-you-go
pricing, only charging for the amount of text processed. Lambda is also cost-effective, as it only charges for
the compute time used when the function is executed. This makes the solution scalable and cost-efficient for
processing varying numbers of recipe records. EventBridge introduces overhead, for no increase in solution
accuracy.
Relevant Cloud Computing Concepts:
Event-driven architecture: S3 Event Notifications trigger the Lambda function, enabling an event-driven
architecture where services react to changes in the S3 bucket.
Serverless computing: Lambda allows the company to run code without provisioning or managing servers.
Managed services: Amazon Comprehend and DynamoDB are managed services, meaning AWS handles the
underlying infrastructure and maintenance, reducing the operational overhead for the company.
Natural Language Processing (NLP): Amazon Comprehend provides NLP capabilities to extract meaning from
text, which is crucial for identifying ingredients.

---

## Question 800

**Answer:** **B**

**Explanation:**

The correct answer is B. Create a VPC peering connection between the VPCs that are in the primary account
and the secondary account.

Here's why:

Cost-Effectiveness: VPC peering is generally a cost-effective solution for connecting VPCs in different AWS
accounts. It avoids data transfer charges that might be incurred with other methods (like copying data to a
new EFS).
Direct Network Connectivity: VPC peering establishes a direct network connection between the two VPCs,
enabling the Lambda function in the primary account to access the EFS file system in the secondary account
as if they were in the same network.
Scalability: EFS is designed to scale automatically to meet demand. Connecting via VPC peering allows the
Lambda function to leverage the scalability of the existing EFS file system.
Security: VPC peering allows you to control the traffic flow between the two VPCs using security group rules
and network ACLs.
Why other options are not the most cost-effective or efficient:

**A.** Creating a new EFS file system and using AWS DataSync: This involves significant data transfer costs and
ongoing synchronization overhead, making it less cost-effective. It also duplicates the data, increasing
storage costs.

**C.** Creating a second Lambda function in the secondary account: This adds complexity to the architecture
and introduces latency due to inter-function calls. It is not the most straightforward or efficient solution for
accessing the file system.

**D.** Moving the contents of the file system to a Lambda layer: Lambda layers have size limitations. An entire
file system is likely to exceed this limit. Furthermore, layers are read-only, preventing the Lambda function
from modifying the files.
Supporting Documentation:
VPC Peering: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
EFS: https://aws.amazon.com/efs/
Lambda VPC: https://docs.aws.amazon.com/lambda/latest/dg/services-vpc.html

---

# Quick Answer Sheet

Question 751: C
Question 752: AD
Question 753: D
Question 754: D
Question 755: B
Question 756: A
Question 757: C
Question 758: A
Question 759: C
Question 760: C
Question 761: D
Question 762: C
Question 763: B
Question 764: A
Question 765: C
Question 766: D
Question 767: C
Question 768: A
Question 769: B
Question 770: C
Question 771: C
Question 772: AB
Question 773: D
Question 774: B
Question 775: B
Question 776: C
Question 777: AC
Question 778: B
Question 779: B
Question 780: A
Question 781: A
Question 782: B
Question 783: D
Question 784: C
Question 785: C
Question 786: B
Question 787: A
Question 788: C
Question 789: D
Question 790: BE
Question 791: D
Question 792: A
Question 793: C
Question 794: B
Question 795: BD
Question 796: B
Question 797: B
Question 798: B
Question 799: A
Question 800: B
