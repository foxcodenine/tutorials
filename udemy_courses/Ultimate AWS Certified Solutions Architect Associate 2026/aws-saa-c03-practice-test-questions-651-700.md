# AWS SAA-C03 Practice Test: Questions 651-700

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 651

A company stores a large volume of image files in an Amazon S3 bucket. The images need to be readily available
for the first 180 days. The images are infrequently accessed for the next 180 days. After 360 days, the images
need to be archived but must be available instantly upon request. After 5 years, only auditors can access the
images. The auditors must be able to retrieve the images within 12 hours. The images cannot be lost during this
process.
A developer will use S3 Standard storage for the first 180 days. The developer needs to configure an S3 Lifecycle
rule.
Which solution will meet these requirements MOST cost-effectively?

**A.** Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Instant
Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

**B.** Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Flexible
Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

**C.** Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Instant
Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

**D.** Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Flexible
Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

---

## Question 652

A company has a large data workload that runs for 6 hours each day. The company cannot lose any data while the
process is running. A solutions architect is designing an Amazon EMR cluster configuration to support this critical
data workload.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure a long-running cluster that runs the primary node and core nodes on On-Demand Instances and the
task nodes on Spot Instances.

**B.** Configure a transient cluster that runs the primary node and core nodes on On-Demand Instances and the
task nodes on Spot Instances.

**C.** Configure a transient cluster that runs the primary node on an On-Demand Instance and the core nodes and
task nodes on Spot Instances.

**D.** Configure a long-running cluster that runs the primary node on an On-Demand Instance, the core nodes on
Spot Instances, and the task nodes on Spot Instances.

---

## Question 653

A company maintains an Amazon RDS database that maps users to cost centers. The company has accounts in an
organization in AWS Organizations. The company needs a solution that will tag all resources that are created in a
specific AWS account in the organization. The solution must tag each resource with the cost center ID of the user
who created the resource.
Which solution will meet these requirements?

**A.** Move the specific AWS account to a new organizational unit (OU) in Organizations from the management
account. Create a service control policy (SCP) that requires all existing resources to have the correct cost
center tag before the resources are created. Apply the SCP to the new OU.

**B.** Create an AWS Lambda function to tag the resources after the Lambda function looks up the appropriate
cost center from the RDS database. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail
events to invoke the Lambda function.

**C.** Create an AWS CloudFormation stack to deploy an AWS Lambda function. Configure the Lambda function to
look up the appropriate cost center from the RDS database and to tag resources. Create an Amazon
EventBridge scheduled rule to invoke the CloudFormation stack.

**D.** Create an AWS Lambda function to tag the resources with a default value. Configure an Amazon EventBridge
rule that reacts to AWS CloudTrail events to invoke the Lambda function when a resource is missing the cost
center tag.

---

## Question 654

A company recently migrated its web application to the AWS Cloud. The company uses an Amazon EC2 instance to
run multiple processes to host the application. The processes include an Apache web server that serves static
content. The Apache web server makes requests to a PHP application that uses a local Redis server for user
sessions.
The company wants to redesign the architecture to be highly available and to use AWS managed solutions.
Which solution will meet these requirements?

**A.** Use AWS Elastic Beanstalk to host the static content and the PHP application. Configure Elastic Beanstalk to
deploy its EC2 instance into a public subnet. Assign a public IP address.

**B.** Use AWS Lambda to host the static content and the PHP application. Use an Amazon API Gateway REST API
to proxy requests to the Lambda function. Set the API Gateway CORS configuration to respond to the domain
name. Configure Amazon ElastiCache for Redis to handle session information.

**C.** Keep the backend code on the EC2 instance. Create an Amazon ElastiCache for Redis cluster that has MultiAZ enabled. Configure the ElastiCache for Redis cluster in cluster mode. Copy the frontend resources to
Amazon S3. Configure the backend code to reference the EC2 instance.

**D.** Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3 bucket that is configured
to host the static content. Configure an Application Load Balancer that targets an Amazon Elastic Container
Service (Amazon ECS) service that runs AWS Fargate tasks for the PHP application. Configure the PHP
application to use an Amazon ElastiCache for Redis cluster that runs in multiple Availability Zones.

---

## Question 655

A company runs a web application on Amazon EC2 instances in an Auto Scaling group that has a target group. The
company designed the application to work with session affinity (sticky sessions) for a better user experience.
The application must be available publicly over the internet as an endpoint. A WAF must be applied to the endpoint
for additional security. Session affinity (sticky sessions) must be configured on the endpoint.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Create a public Network Load Balancer. Specify the application target group.

**B.** Create a Gateway Load Balancer. Specify the application target group.

**C.** Create a public Application Load Balancer. Specify the application target group.

**D.** Create a second target group. Add Elastic IP addresses to the EC2 instances.

**E.** Create a web ACL in AWS WAF. Associate the web ACL with the endpoint

---

## Question 656

A company runs a website that stores images of historical events. Website users need the ability to search and
view images based on the year that the event in the image occurred. On average, users request each image only
once or twice a year. The company wants a highly available solution to store and deliver the images to users.
Which solution will meet these requirements MOST cost-effectively?

**A.** Store images in Amazon Elastic Block Store (Amazon EBS). Use a web server that runs on Amazon EC2.

**B.** Store images in Amazon Elastic File System (Amazon EFS). Use a web server that runs on Amazon EC2.

**C.** Store images in Amazon S3 Standard. Use S3 Standard to directly deliver images by using a static website.

**D.** Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3 Standard-IA to directly
deliver images by using a static website.

---

## Question 657

A company has multiple AWS accounts in an organization in AWS Organizations that different business units use.
The company has multiple offices around the world. The company needs to update security group rules to allow
new office CIDR ranges or to remove old CIDR ranges across the organization. The company wants to centralize
the management of security group rules to minimize the administrative overhead that updating CIDR ranges
requires.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create VPC security groups in the organization's management account. Update the security groups when a
CIDR range update is necessary.

**B.** Create a VPC customer managed prefix list that contains the list of CIDRs. Use AWS Resource Access
Manager (AWS RAM) to share the prefix list across the organization. Use the prefix list in the security groups
across the organization.

**C.** Create an AWS managed prefix list. Use an AWS Security Hub policy to enforce the security group update
across the organization. Use an AWS Lambda function to update the prefix list automatically when the CIDR
ranges change.

**D.** Create security groups in a central administrative AWS account. Create an AWS Firewall Manager common
security group policy for the whole organization. Select the previously created security groups as primary
groups in the policy.

---

## Question 658

A company uses an on-premises network-attached storage (NAS) system to provide file shares to its high
performance computing (HPC) workloads. The company wants to migrate its latency-sensitive HPC workloads and
its storage to the AWS Cloud. The company must be able to provide NFS and SMB multi-protocol access from the
file system.
Which solution will meet these requirements with the LEAST latency? (Choose two.)

**A.** Deploy compute optimized EC2 instances into a cluster placement group.

**B.** Deploy compute optimized EC2 instances into a partition placement group.

**C.** Attach the EC2 instances to an Amazon FSx for Lustre file system.

**D.** Attach the EC2 instances to an Amazon FSx for OpenZFS file system.

**E.** Attach the EC2 instances to an Amazon FSx for NetApp ONTAP file system.

---

## Question 659

A company is relocating its data center and wants to securely transfer 50 TB of data to AWS within 2 weeks. The
existing data center has a Site-to-Site VPN connection to AWS that is 90% utilized.
Which AWS service should a solutions architect use to meet these requirements?

**A.** AWS DataSync with a VPC endpoint

**B.** AWS Direct Connect

**C.** AWS Snowball Edge Storage Optimized

**D.** AWS Storage Gateway

---

## Question 660

A company hosts an application on Amazon EC2 On-Demand Instances in an Auto Scaling group. Application peak
hours occur at the same time each day. Application users report slow application performance at the start of peak
hours. The application performs normally 2-3 hours after peak hours begin. The company wants to ensure that the
application works properly at the start of peak hours.
Which solution will meet these requirements?

**A.** Configure an Application Load Balancer to distribute traffic properly to the instances.

**B.** Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on memory
utilization.

**C.** Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on CPU
utilization.

**D.** Configure a scheduled scaling policy for the Auto Scaling group to launch new instances before peak hours.

---

## Question 661

A company runs applications on AWS that connect to the company's Amazon RDS database. The applications scale
on weekends and at peak times of the year. The company wants to scale the database more effectively for its
applications that connect to the database.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon DynamoDB with connection pooling with a target group configuration for the database. Change
the applications to use the DynamoDB endpoint.

**B.** Use Amazon RDS Proxy with a target group for the database. Change the applications to use the RDS Proxy
endpoint.

**C.** Use a custom proxy that runs on Amazon EC2 as an intermediary to the database. Change the applications to
use the custom proxy endpoint.

**D.** Use an AWS Lambda function to provide connection pooling with a target group configuration for the
database. Change the applications to use the Lambda function.

---

## Question 662

A company uses AWS Cost Explorer to monitor its AWS costs. The company notices that Amazon Elastic Block
Store (Amazon EBS) storage and snapshot costs increase every month. However, the company does not purchase
additional EBS storage every month. The company wants to optimize monthly costs for its current storage usage.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use logs in Amazon CloudWatch Logs to monitor the storage utilization of Amazon EBS. Use Amazon EBS
Elastic Volumes to reduce the size of the EBS volumes.

**B.** Use a custom script to monitor space usage. Use Amazon EBS Elastic Volumes to reduce the size of the EBS
volumes.

**C.** Delete all expired and unused snapshots to reduce snapshot costs.

**D.** Delete all nonessential snapshots. Use Amazon Data Lifecycle Manager to create and manage the snapshots
according to the company's snapshot policy requirements.

---

## Question 663

A company is developing a new application on AWS. The application consists of an Amazon Elastic Container
Service (Amazon ECS) cluster, an Amazon S3 bucket that contains assets for the application, and an Amazon RDS
for MySQL database that contains the dataset for the application. The dataset contains sensitive information. The
company wants to ensure that only the ECS cluster can access the data in the RDS for MySQL database and the
data in the S3 bucket.
Which solution will meet these requirements?

**A.** Create a new AWS Key Management Service (AWS KMS) customer managed key to encrypt both the S3
bucket and the RDS for MySQL database. Ensure that the KMS key policy includes encrypt and decrypt
permissions for the ECS task execution role.

**B.** Create an AWS Key Management Service (AWS KMS) AWS managed key to encrypt both the S3 bucket and
the RDS for MySQL database. Ensure that the S3 bucket policy specifies the ECS task execution role as a user.

**C.** Create an S3 bucket policy that restricts bucket access to the ECS task execution role. Create a VPC
endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow access from only the
subnets that the ECS cluster will generate tasks in.

**D.** Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow
access from only the subnets that the ECS cluster will generate tasks in. Create a VPC endpoint for Amazon S3.
Update the S3 bucket policy to allow access from only the S3 VPC endpoint.

---

## Question 664

A company has a web application that runs on premises. The application experiences latency issues during peak
hours. The latency issues occur twice each month. At the start of a latency issue, the application's CPU utilization
immediately increases to 10 times its normal amount.
The company wants to migrate the application to AWS to improve latency. The company also wants to scale the
application automatically when application demand increases. The company will use AWS Elastic Beanstalk for
application deployment.
Which solution will meet these requirements?

**A.** Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode.
Configure the environment to scale based on requests.

**B.** Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment
to scale based on requests.

**C.** Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment
to scale on a schedule.

**D.** Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode.
Configure the environment to scale on predictive metrics.

---

## Question 665

A company has customers located across the world. The company wants to use automation to secure its systems
and network infrastructure. The company's security team must be able to track and audit all incremental changes
to the infrastructure.
Which solution will meet these requirements?

**A.** Use AWS Organizations to set up the infrastructure. Use AWS Config to track changes.

**B.** Use AWS CloudFormation to set up the infrastructure. Use AWS Config to track changes.

**C.** Use AWS Organizations to set up the infrastructure. Use AWS Service Catalog to track changes.

**D.** Use AWS CloudFormation to set up the infrastructure. Use AWS Service Catalog to track changes.

---

## Question 666

A startup company is hosting a website for its customers on an Amazon EC2 instance. The website consists of a
stateless Python application and a MySQL database. The website serves only a small amount of traffic. The
company is concerned about the reliability of the instance and needs to migrate to a highly available architecture.
The company cannot modify the application code.
Which combination of actions should a solutions architect take to achieve high availability for the website?
(Choose two.)

**A.** Provision an internet gateway in each Availability Zone in use.

**B.** Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance.

**C.** Migrate the database to Amazon DynamoDB, and enable DynamoDB auto scaling.

**D.** Use AWS DataSync to synchronize the database data across multiple EC2 instances.

**E.** Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2 instances that are
distributed across two Availability Zones.

---

## Question 667

A company is moving its data and applications to AWS during a multiyear migration project. The company wants to
securely access data on Amazon S3 from the company's AWS Region and from the company's on-premises
location. The data must not traverse the internet. The company has established an AWS Direct Connect connection
between its Region and its on-premises location.
Which solution will meet these requirements?

**A.** Create gateway endpoints for Amazon S3. Use the gateway endpoints to securely access the data from the
Region and the on-premises location.

**B.** Create a gateway in AWS Transit Gateway to access Amazon S3 securely from the Region and the onpremises location.

**C.** Create interface endpoints for Amazon S3. Use the interface endpoints to securely access the data from the
Region and the on-premises location.

**D.** Use an AWS Key Management Service (AWS KMS) key to access the data securely from the Region and the
on-premises location.

---

## Question 668

A company created a new organization in AWS Organizations. The organization has multiple accounts for the
company's development teams. The development team members use AWS IAM Identity Center (AWS Single SignOn) to access the accounts. For each of the company's applications, the development teams must use a predefined
application name to tag resources that are created.
A solutions architect needs to design a solution that gives the development team the ability to create resources
only if the application name tag has an approved value.
Which solution will meet these requirements?

**A.** Create an IAM group that has a conditional Allow policy that requires the application name tag to be specified
for resources to be created.

**B.** Create a cross-account role that has a Deny policy for any resource that has the application name tag.

**C.** Create a resource group in AWS Resource Groups to validate that the tags are applied to all resources in all
accounts.

**D.** Create a tag policy in Organizations that has a list of allowed application names.

---

## Question 669

A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure solution to manage
the master user password by rotating the password every 30 days.

Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password every 30 days.

**B.** Use the modify-db-instance command in the AWS CLI to change the password.

**C.** Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password rotation.

**D.** Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to automate password
rotation.

---

## Question 670

A company performs tests on an application that uses an Amazon DynamoDB table. The tests run for 4 hours once
a week. The company knows how many read and write operations the application performs to the table each
second during the tests. The company does not currently use DynamoDB for any other use case. A solutions
architect needs to optimize the costs for the table.
Which solution will meet these requirements?

**A.** Choose on-demand mode. Update the read and write capacity units appropriately.

**B.** Choose provisioned mode. Update the read and write capacity units appropriately.

**C.** Purchase DynamoDB reserved capacity for a 1-year term.

**D.** Purchase DynamoDB reserved capacity for a 3-year term.

---

## Question 671

A company runs its applications on Amazon EC2 instances. The company performs periodic financial assessments
of its AWS costs. The company recently identified unusual spending.
The company needs a solution to prevent unusual spending. The solution must monitor costs and notify
responsible stakeholders in the event of unusual spending.
Which solution will meet these requirements?

**A.** Use an AWS Budgets template to create a zero spend budget.

**B.** Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management console.

**C.** Create AWS Pricing Calculator estimates for the current running workload pricing details.

**D.** Use Amazon CloudWatch to monitor costs and to identify unusual spending.

---

## Question 672

A marketing company receives a large amount of new clickstream data in Amazon S3 from a marketing campaign.
The company needs to analyze the clickstream data in Amazon S3 quickly. Then the company needs to determine
whether to process the data further in the data pipeline.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create external tables in a Spark catalog. Configure jobs in AWS Glue to query the data.

**B.** Configure an AWS Glue crawler to crawl the data. Configure Amazon Athena to query the data.

**C.** Create external tables in a Hive metastore. Configure Spark jobs in Amazon EMR to query the data.

**D.** Configure an AWS Glue crawler to crawl the data. Configure Amazon Kinesis Data Analytics to use SQL to
query the data.

---

## Question 673

A company runs an SMB file server in its data center. The file server stores large files that the company frequently
accesses for up to 7 days after the file creation date. After 7 days, the company needs to be able to access the
files with a maximum retrieval time of 24 hours.
Which solution will meet these requirements?

**A.** Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.

**B.** Create an Amazon S3 File Gateway to increase the company's storage space. Create an S3 Lifecycle policy to
transition the data to S3 Glacier Deep Archive after 7 days.

**C.** Create an Amazon FSx File Gateway to increase the company's storage space. Create an Amazon S3
Lifecycle policy to transition the data after 7 days.

**D.** Configure access to Amazon S3 for each user. Create an S3 Lifecycle policy to transition the data to S3
Glacier Flexible Retrieval after 7 days.

---

## Question 674

A company runs a web application on Amazon EC2 instances in an Auto Scaling group. The application uses a
database that runs on an Amazon RDS for PostgreSQL DB instance. The application performs slowly when traffic
increases. The database experiences a heavy read load during periods of high traffic.
Which actions should a solutions architect take to resolve these performance issues? (Choose two.)

**A.** Turn on auto scaling for the DB instance.

**B.** Create a read replica for the DB instance. Configure the application to send read traffic to the read replica.

**C.** Convert the DB instance to a Multi-AZ DB instance deployment. Configure the application to send read traffic

to the standby DB instance.

**D.** Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache
cluster.

**E.** Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in the same
Availability Zone as the DB instance.

---

## Question 675

A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to run an
application. The company creates one snapshot of each EBS volume every day to meet compliance requirements.
The company wants to implement an architecture that prevents the accidental deletion of EBS volume snapshots.
The solution must not change the administrative rights of the storage administrator user.
Which solution will meet these requirements with the LEAST administrative effort?

**A.** Create an IAM role that has permission to delete snapshots. Attach the role to a new EC2 instance. Use the
AWS CLI from the new EC2 instance to delete snapshots.

**B.** Create an IAM policy that denies snapshot deletion. Attach the policy to the storage administrator user.

**C.** Add tags to the snapshots. Create retention rules in Recycle Bin for EBS snapshots that have the tags.

**D.** Lock the EBS snapshots to prevent deletion.

---

## Question 676

A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2 instances, and
databases that are deployed in an Amazon VPC. The company wants to capture information about traffic to and
from the network interfaces in near real time in its Amazon VPC. The company wants to send the information to
Amazon OpenSearch Service for analysis.
Which solution will meet these requirements?

**A.** Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log
group. Use Amazon Kinesis Data Streams to stream the logs from the log group to OpenSearch Service.

**B.** Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log
group. Use Amazon Kinesis Data Firehose to stream the logs from the log group to OpenSearch Service.

**C.** Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon
Kinesis Data Streams to stream the logs from the trail to OpenSearch Service.

**D.** Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon
Kinesis Data Firehose to stream the logs from the trail to OpenSearch Service.

---

## Question 677

A company is developing an application that will run on a production Amazon Elastic Kubernetes Service (Amazon
EKS) cluster. The EKS cluster has managed node groups that are provisioned with On-Demand Instances.
The company needs a dedicated EKS cluster for development work. The company will use the development cluster
infrequently to test the resiliency of the application. The EKS cluster must manage all the nodes.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a managed node group that contains only Spot Instances.

**B.** Create two managed node groups. Provision one node group with On-Demand Instances. Provision the second
node group with Spot Instances.

**C.** Create an Auto Scaling group that has a launch configuration that uses Spot Instances. Configure the user
data to add the nodes to the EKS cluster.

**D.** Create a managed node group that contains only On-Demand Instances.

---

## Question 678

A company stores sensitive data in Amazon S3. A solutions architect needs to create an encryption solution. The
company needs to fully control the ability of users to create, rotate, and disable encryption keys with minimal
effort for any data that must be encrypted.
Which solution will meet these requirements?

**A.** Use default server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to store the sensitive
data.

**B.** Create a customer managed key by using AWS Key Management Service (AWS KMS). Use the new key to
encrypt the S3 objects by using server-side encryption with AWS KMS keys (SSE-KMS).

**C.** Create an AWS managed key by using AWS Key Management Service (AWS KMS). Use the new key to
encrypt the S3 objects by using server-side encryption with AWS KMS keys (SSE-KMS).

**D.** Download S3 objects to an Amazon EC2 instance. Encrypt the objects by using customer managed keys.
Upload the encrypted objects back into Amazon S3.

---

## Question 679

A company wants to back up its on-premises virtual machines (VMs) to AWS. The company's backup solution
exports on-premises backups to an Amazon S3 bucket as objects. The S3 backups must be retained for 30 days
and must be automatically deleted after 30 days.
Which combination of steps will meet these requirements? (Choose three.)

**A.** Create an S3 bucket that has S3 Object Lock enabled.

**B.** Create an S3 bucket that has object versioning enabled.

**C.** Configure a default retention period of 30 days for the objects.

**D.** Configure an S3 Lifecycle policy to protect the objects for 30 days.

**E.** Configure an S3 Lifecycle policy to expire the objects after 30 days.

**F.** Configure the backup solution to tag the objects with a 30-day retention period

---

## Question 680

A solutions architect needs to copy files from an Amazon S3 bucket to an Amazon Elastic File System (Amazon
EFS) file system and another S3 bucket. The files must be copied continuously. New files are added to the original
S3 bucket consistently. The copied files should be overwritten only if the source file changes.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an AWS DataSync location for both the destination S3 bucket and the EFS file system. Create a task
for the destination S3 bucket and the EFS file system. Set the transfer mode to transfer only data that has
changed.

**B.** Create an AWS Lambda function. Mount the file system to the function. Set up an S3 event notification to
invoke the function when files are created and changed in Amazon S3. Configure the function to copy files to
the file system and the destination S3 bucket.

**C.** Create an AWS DataSync location for both the destination S3 bucket and the EFS file system. Create a task
for the destination S3 bucket and the EFS file system. Set the transfer mode to transfer all data.

**D.** Launch an Amazon EC2 instance in the same VPC as the file system. Mount the file system. Create a script to
routinely synchronize all objects that changed in the origin S3 bucket to the destination S3 bucket and the
mounted file system.

---

## Question 681

A company uses Amazon EC2 instances and stores data on Amazon Elastic Block Store (Amazon EBS) volumes.
The company must ensure that all data is encrypted at rest by using AWS Key Management Service (AWS KMS).
The company must be able to control rotation of the encryption keys.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a customer managed key. Use the key to encrypt the EBS volumes.

**B.** Use an AWS managed key to encrypt the EBS volumes. Use the key to configure automatic key rotation.

**C.** Create an external KMS key with imported key material. Use the key to encrypt the EBS volumes.

**D.** Use an AWS owned key to encrypt the EBS volumes.

---

## Question 682

A company needs a solution to enforce data encryption at rest on Amazon EC2 instances. The solution must
automatically identify noncompliant resources and enforce compliance policies on findings.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Use an IAM policy that allows users to create only encrypted Amazon Elastic Block Store (Amazon EBS)
volumes. Use AWS Config and AWS Systems Manager to automate the detection and remediation of
unencrypted EBS volumes.

**B.** Use AWS Key Management Service (AWS KMS) to manage access to encrypted Amazon Elastic Block Store
(Amazon EBS) volumes. Use AWS Lambda and Amazon EventBridge to automate the detection and remediation
of unencrypted EBS volumes.

**C.** Use Amazon Macie to detect unencrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS
Systems Manager Automation rules to automatically encrypt existing and new EBS volumes.

**D.** Use Amazon inspector to detect unencrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS
Systems Manager Automation rules to automatically encrypt existing and new EBS volumes.

---

## Question 683

A company is migrating its multi-tier on-premises application to AWS. The application consists of a single-node
MySQL database and a multi-node web tier. The company must minimize changes to the application during the
migration. The company wants to improve application resiliency after the migration.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Migrate the web tier to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.

**B.** Migrate the database to Amazon EC2 instances in an Auto Scaling group behind a Network Load Balancer.

**C.** Migrate the database to an Amazon RDS Multi-AZ deployment.

**D.** Migrate the web tier to an AWS Lambda function.

**E.** Migrate the database to an Amazon DynamoDB table.

---

## Question 684

A company wants to migrate its web applications from on premises to AWS. The company is located close to the
eu-central-1 Region. Because of regulations, the company cannot launch some of its applications in eu-central-1.
The company wants to achieve single-digit millisecond latency.
Which solution will meet these requirements?

**A.** Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to an edge location in
Amazon CloudFront.

**B.** Deploy the applications in AWS Local Zones by extending the company's VPC from eu-central-1 to the chosen
Local Zone.

**C.** Deploy the applications in eu-central-1. Extend the company’s VPC from eu-central-1 to the regional edge
caches in Amazon CloudFront.

**D.** Deploy the applications in AWS Wavelength Zones by extending the company’s VPC from eu-central-1 to the
chosen Wavelength Zone.

---

## Question 685

A company’s ecommerce website has unpredictable traffic and uses AWS Lambda functions to directly access a
private Amazon RDS for PostgreSQL DB instance. The company wants to maintain predictable database
performance and ensure that the Lambda invocations do not overload the database with too many connections.
What should a solutions architect do to meet these requirements?

**A.** Point the client driver at an RDS custom endpoint. Deploy the Lambda functions inside a VPC.

**B.** Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions inside a VPC.

**C.** Point the client driver at an RDS custom endpoint. Deploy the Lambda functions outside a VPC.

**D.** Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions outside a VPC.

---

## Question 686

A company is creating an application. The company stores data from tests of the application in multiple onpremises locations.
The company needs to connect the on-premises locations to VPCs in an AWS Region in the AWS Cloud. The
number of accounts and VPCs will increase during the next year. The network architecture must simplify the
administration of new connections and must provide the ability to scale.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Create a peering connection between the VPCs. Create a VPN connection between the VPCs and the onpremises locations.

**B.** Launch an Amazon EC2 instance. On the instance, include VPN software that uses a VPN connection to
connect all VPCs and on-premises locations.

**C.** Create a transit gateway. Create VPC attachments for the VPC connections. Create VPN attachments for the
on-premises connections.

**D.** Create an AWS Direct Connect connection between the on-premises locations and a central VPC. Connect
the central VPC to other VPCs by using peering connections.

---

## Question 687

A company that uses AWS needs a solution to predict the resources needed for manufacturing processes each
month. The solution must use historical values that are currently stored in an Amazon S3 bucket. The company has
no machine learning (ML) experience and wants to use a managed service for the training and predictions.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Deploy an Amazon SageMaker model. Create a SageMaker endpoint for inference.

**B.** Use Amazon SageMaker to train a model by using the historical data in the S3 bucket.

**C.** Configure an AWS Lambda function with a function URL that uses Amazon SageMaker endpoints to create
predictions based on the inputs.

**D.** Configure an AWS Lambda function with a function URL that uses an Amazon Forecast predictor to create a
prediction based on the inputs.

**E.** Train an Amazon Forsecast predictor by using the historical data in the S3 bucket.

---

## Question 688

A company manages AWS accounts in AWS Organizations. AWS IAM Identity Center (AWS Single Sign-On) and
AWS Control Tower are configured for the accounts. The company wants to manage multiple user permissions
across all the accounts.
The permissions will be used by multiple IAM users and must be split between the developer and administrator
teams. Each team requires different permissions. The company wants a solution that includes new users that are
hired on both teams.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create individual users in IAM Identity Center for each account. Create separate developer and administrator
groups in IAM Identity Center. Assign the users to the appropriate groups. Create a custom IAM policy for each
group to set fine-grained permissions.

**B.** Create individual users in IAM Identity Center for each account. Create separate developer and administrator
groups in IAM Identity Center. Assign the users to the appropriate groups. Attach AWS managed IAM policies
to each user as needed for fine-grained permissions.

**C.** Create individual users in IAM Identity Center. Create new developer and administrator groups in IAM Identity
Center. Create new permission sets that include the appropriate IAM policies for each group. Assign the new
groups to the appropriate accounts. Assign the new permission sets to the new groups. When new users are
hired, add them to the appropriate group.

**D.** Create individual users in IAM Identity Center. Create new permission sets that include the appropriate IAM
policies for each user. Assign the users to the appropriate accounts. Grant additional IAM permissions to the
users from within specific accounts. When new users are hired, add them to IAM Identity Center and assign
them to the accounts.

---

## Question 689

A company wants to standardize its Amazon Elastic Block Store (Amazon EBS) volume encryption strategy. The
company also wants to minimize the cost and configuration effort required to operate the volume encryption
check.
Which solution will meet these requirements?

**A.** Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted. Use Amazon
EventBridge to schedule an AWS Lambda function to run the API calls.

**B.** Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted. Run the API calls
on an AWS Fargate task.

**C.** Create an AWS Identity and Access Management (IAM) policy that requires the use of tags on EBS volumes.
Use AWS Cost Explorer to display resources that are not properly tagged. Encrypt the untagged resources
manually.

**D.** Create an AWS Config rule for Amazon EBS to evaluate if a volume is encrypted and to flag the volume if it is
not encrypted.

---

## Question 690

A company regularly uploads GB-sized files to Amazon S3. After the company uploads the files, the company uses
a fleet of Amazon EC2 Spot Instances to transcode the file format. The company needs to scale throughput when
the company uploads data from the on-premises data center to Amazon S3 and when the company downloads
data from Amazon S3 to the EC2 instances.
Which solutions will meet these requirements? (Choose two.)

**A.** Use the S3 bucket access point instead of accessing the S3 bucket directly.

**B.** Upload the files into multiple S3 buckets.

**C.** Use S3 multipart uploads.

**D.** Fetch multiple byte-ranges of an object in parallel.

**E.** Add a random prefix to each object when uploading the files.

---

## Question 691

A solutions architect is designing a shared storage solution for a web application that is deployed across multiple
Availability Zones. The web application runs on Amazon EC2 instances that are in an Auto Scaling group. The
company plans to make frequent changes to the content. The solution must have strong consistency in returning
the new content as soon as the changes occur.
Which solutions meet these requirements? (Choose two.)

**A.** Use AWS Storage Gateway Volume Gateway Internet Small Computer Systems Interface (iSCSI) block
storage that is mounted to the individual EC2 instances.

**B.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the individual
EC2 instances.

**C.** Create a shared Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the individual
EC2 instances.

**D.** Use AWS DataSync to perform continuous synchronization of data between EC2 hosts in the Auto Scaling
group.

**E.** Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control header to nocache. Use Amazon CloudFront to deliver the content.

---

## Question 692

A company is deploying an application in three AWS Regions using an Application Load Balancer. Amazon Route
53 will be used to distribute traffic between these Regions.
Which Route 53 configuration should a solutions architect use to provide the MOST high-performing experience?

**A.** Create an A record with a latency policy.

**B.** Create an A record with a geolocation policy.

**C.** Create a CNAME record with a failover policy.

**D.** Create a CNAME record with a geoproximity policy.

---

## Question 693

A company has a web application that includes an embedded NoSQL database. The application runs on Amazon
EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group
in a single Availability Zone.
A recent increase in traffic requires the application to be highly available and for the database to be eventually
consistent.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Replace the ALB with a Network Load Balancer. Maintain the embedded NoSQL database with its replication
service on the EC2 instances.

**B.** Replace the ALB with a Network Load Balancer. Migrate the embedded NoSQL database to Amazon
DynamoDB by using AWS Database Migration Service (AWS DMS).

**C.** Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Maintain the embedded
NoSQL database with its replication service on the EC2 instances.

**D.** Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Migrate the embedded
NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).

---

## Question 694

A company is building a shopping application on AWS. The application offers a catalog that changes once each
month and needs to scale with traffic volume. The company wants the lowest possible latency from the
application. Data from each user's shopping cart needs to be highly available. User session data must be available
even if the user is disconnected and reconnects.
What should a solutions architect do to ensure that the shopping cart data is preserved at all times?

**A.** Configure an Application Load Balancer to enable the sticky sessions feature (session affinity) for access to
the catalog in Amazon Aurora.

**B.** Configure Amazon ElastiCache for Redis to cache catalog data from Amazon DynamoDB and shopping cart
data from the user's session.

**C.** Configure Amazon OpenSearch Service to cache catalog data from Amazon DynamoDB and shopping cart
data from the user's session.

**D.** Configure an Amazon EC2 instance with Amazon Elastic Block Store (Amazon EBS) storage for the catalog
and shopping cart. Configure automated snapshots.

---

## Question 695

A company is building a microservices-based application that will be deployed on Amazon Elastic Kubernetes
Service (Amazon EKS). The microservices will interact with each other. The company wants to ensure that the
application is observable to identify performance issues in the future.
Which solution will meet these requirements?

**A.** Configure the application to use Amazon ElastiCache to reduce the number of requests that are sent to the
microservices.

**B.** Configure Amazon CloudWatch Container Insights to collect metrics from the EKS clusters. Configure AWS
X-Ray to trace the requests between the microservices.

**C.** Configure AWS CloudTrail to review the API calls. Build an Amazon QuickSight dashboard to observe the
microservice interactions.

**D.** Use AWS Trusted Advisor to understand the performance of the application.

---

## Question 696

A company needs to provide customers with secure access to its data. The company processes customer data and
stores the results in an Amazon S3 bucket.
All the data is subject to strong regulations and security requirements. The data must be encrypted at rest. Each
customer must be able to access only their data from their AWS account. Company employees must not be able to
access the data.
Which solution will meet these requirements?

**A.** Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In
the private certificate policy, deny access to the certificate for all principals except an IAM role that the
customer provides.

**B.** Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data
server-side. In the S3 bucket policy, deny decryption of data for all principals except an IAM role that the
customer provides.

**C.** Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data
server-side. In each KMS key policy, deny decryption of data for all principals except an IAM role that the
customer provides.

**D.** Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In
the public certificate policy, deny access to the certificate for all principals except an IAM role that the
customer provides.

---

## Question 697

A solutions architect creates a VPC that includes two public subnets and two private subnets. A corporate security
mandate requires the solutions architect to launch all Amazon EC2 instances in a private subnet. However, when
the solutions architect launches an EC2 instance that runs a web server on ports 80 and 443 in a private subnet, no
external internet traffic can connect to the server.
What should the solutions architect do to resolve this issue?

**A.** Attach the EC2 instance to an Auto Scaling group in a private subnet. Ensure that the DNS record for the
website resolves to the Auto Scaling group identifier.

**B.** Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the EC2 instance to the
target group that is associated with the ALEnsure that the DNS record for the website resolves to the ALB.

**C.** Launch a NAT gateway in a private subnet. Update the route table for the private subnets to add a default
route to the NAT gateway. Attach a public Elastic IP address to the NAT gateway.

**D.** Ensure that the security group that is attached to the EC2 instance allows HTTP traffic on port 80 and HTTPS
traffic on port 443. Ensure that the DNS record for the website resolves to the public IP address of the EC2

instance.

---

## Question 698

A company is deploying a new application to Amazon Elastic Kubernetes Service (Amazon EKS) with an AWS
Fargate cluster. The application needs a storage solution for data persistence. The solution must be highly
available and fault tolerant. The solution also must be shared between multiple application containers.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create Amazon Elastic Block Store (Amazon EBS) volumes in the same Availability Zones where EKS worker
nodes are placed. Register the volumes in a StorageClass object on an EKS cluster. Use EBS Multi-Attach to
share the data between containers.

**B.** Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a StorageClass
object on an EKS cluster. Use the same file system for all containers.

**C.** Create an Amazon Elastic Block Store (Amazon EBS) volume. Register the volume in a StorageClass object on
an EKS cluster. Use the same volume for all containers.

**D.** Create Amazon Elastic File System (Amazon EFS) file systems in the same Availability Zones where EKS
worker nodes are placed. Register the file systems in a StorageClass object on an EKS cluster. Create an AWS
Lambda function to synchronize the data between file systems.

---

## Question 699

A company has an application that uses Docker containers in its local data center. The application runs on a
container host that stores persistent data in a volume on the host. The container instances use the stored
persistent data.
The company wants to move the application to a fully managed service because the company does not want to
manage any servers or storage infrastructure.
Which solution will meet these requirements?

**A.** Use Amazon Elastic Kubernetes Service (Amazon EKS) with self-managed nodes. Create an Amazon Elastic
Block Store (Amazon EBS) volume attached to an Amazon EC2 instance. Use the EBS volume as a persistent
volume mounted in the containers.

**B.** Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an Amazon
Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume mounted in the
containers.

**C.** Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an Amazon S3
bucket. Map the S3 bucket as a persistent storage volume mounted in the containers.

**D.** Use Amazon Elastic Container Service (Amazon ECS) with an Amazon EC2 launch type. Create an Amazon
Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume mounted in the
containers.

---

## Question 700

A gaming company wants to launch a new internet-facing application in multiple AWS Regions. The application
will use the TCP and UDP protocols for communication. The company needs to provide high availability and
minimum latency for global users.
Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

**A.** Create internal Network Load Balancers in front of the application in each Region.

**B.** Create external Application Load Balancers in front of the application in each Region.

**C.** Create an AWS Global Accelerator accelerator to route traffic to the load balancers in each Region.

**D.** Configure Amazon Route 53 to use a geolocation routing policy to distribute the traffic.

**E.** Configure Amazon CloudFront to handle the traffic and route requests to the application in each Region

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 651

**Answer:** **C**

**Explanation:**

The correct answer is C. Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after
180 days, S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.

Here's a detailed justification:
The problem states that the images need to be readily available for the first 180 days, and S3 Standard fulfills
this requirement. The subsequent stages require different access patterns and archival needs, influencing the
choice of storage classes for the S3 Lifecycle rule.
180 Days to 360 Days (Infrequent Access): S3 Standard-IA is the most cost-effective choice for data that is
accessed infrequently but requires rapid access when needed. S3 One Zone-IA has lower availability (data
loss can occur) than S3 Standard-IA because data is stored in a single availability zone. Since data cannot be
lost during the process this eliminates options A and B.
360 Days to 5 Years (Instant Retrieval): The problem explicitly states that after 360 days the images must
be "available instantly upon request." S3 Glacier Instant Retrieval delivers the lowest-cost storage for longterm data that is accessed once a quarter, with the same low latency performance as S3 Standard and S3
Standard-IA. S3 Glacier Flexible Retrieval does not meet this requirement since retrieval times can vary from
minutes to hours.
After 5 Years (Archival with 12-Hour Retrieval): S3 Glacier Deep Archive is the lowest-cost storage class
suitable for long-term archival. The 12-hour retrieval window aligns with the retrieval capabilities of S3 Glacier
Deep Archive, which has retrieval times ranging from 12 hours.

Therefore, configuring an S3 Lifecycle rule to transition objects as follows:

1. S3 Standard for the first 180 days (already configured).

2. S3 Standard-IA after 180 days.

3. S3 Glacier Instant Retrieval after 360 days.

4. S3 Glacier Deep Archive after 5 years.
This solution adheres to all requirements of the question while minimizing storage costs.
Here are some authoritative links for further research:
Amazon S3 Storage Classes
Managing your storage lifecycle

---

## Question 652

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The requirement is to run a 6-hour workload daily without data loss and in a cost-effective manner using
Amazon EMR. A transient cluster is best suited for this because it automatically provisions, executes the
workload, and terminates after completion, minimizing idle time and associated costs.

**Option B** suggests running the primary and core nodes on On-Demand Instances and the task nodes on Spot
Instances. On-Demand Instances for the primary and core nodes provide predictable availability during the 6hour workload. The primary node is critical for cluster management, and core nodes typically store data
(HDFS). Losing these nodes during processing could lead to data loss and job failure. Thus, utilizing OnDemand Instances here reduces that risk.
Task nodes perform compute tasks and do not store persistent data. Therefore, using Spot Instances for task
nodes can significantly reduce costs. If a Spot Instance is interrupted, the task will be rescheduled on another
available instance without affecting the overall data integrity as data isn't stored persistently on these nodes.
EMR is fault-tolerant and can handle task failures due to Spot Instance revocations.
Options A and D propose long-running clusters. Keeping the cluster alive even when it's not processing the
workload results in unnecessary expenses. **Option C** suggests using Spot Instances for core nodes, which
store data. Loss of core nodes leads to potential data loss, violating the critical requirement of the workload.

In summary, **Option B** provides the optimal balance between cost and reliability by leveraging On-Demand
Instances for data-critical nodes (primary, core) and Spot Instances for compute-intensive tasks (task nodes),
utilizing the benefits of transient clusters for cost optimization and ephemeral workloads.
Further Research:

Amazon EMR Instance Fleets and Instance Groups:
https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html
Amazon EMR Pricing: https://aws.amazon.com/emr/pricing/
AWS Spot Instances: https://aws.amazon.com/ec2/spot/

---

## Question 653

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:

**Option B** leverages a real-time, event-driven approach using Lambda and EventBridge, which aligns perfectly
with the requirement to tag resources immediately after creation. AWS Lambda is a serverless compute
service that allows you to run code without provisioning or managing servers, making it ideal for on-demand
tasks like tagging. Amazon EventBridge, a serverless event bus, can be configured to trigger Lambda
functions based on events, such as the creation of an AWS resource.
The solution works as follows:

1. CloudTrail Event: AWS CloudTrail logs API calls made in the AWS account. When a resource is
created, CloudTrail captures this event.

2. EventBridge Rule: An EventBridge rule is set up to listen for CloudTrail events related to resource
creation (e.g., CreateVolume, CreateInstance). When such an event occurs, the rule is triggered.

3. Lambda Function: The EventBridge rule invokes an AWS Lambda function. This function receives the
event data, which includes the user's identity (via the AWS IAM user or role that initiated the API call)
and the resource ARN (Amazon Resource Name).

4. Cost Center Lookup: The Lambda function uses the user's identity to query the RDS database
(mapping users to cost centers) to retrieve the correct cost center ID.

5. Resource Tagging: The Lambda function then uses the AWS SDK (e.g., boto3 for Python) to tag the
created resource with the CostCenter tag, setting its value to the retrieved cost center ID. The
function uses the resource ARN from the CloudTrail event data to identify the specific resource to
tag.
This approach ensures that resources are tagged immediately after creation with the appropriate cost center

ID based on the user who created them. The solution is fully automated and requires no manual intervention.

**Option A** is incorrect because Service Control Policies (SCPs) primarily enforce permission boundaries across
accounts in an organization and do not directly tag resources based on user information stored in a database.
SCPs can require tags to be present, but not dynamically set them. Furthermore, applying an SCP to an
existing resource won't retroactively add tags based on user information.

**Option C** is inefficient. Using a scheduled EventBridge rule to invoke a CloudFormation stack that then runs a
Lambda function adds unnecessary complexity. The scheduled invocation is not event-driven or real-time,
therefore it is more likely to cause delay in tagging.

**Option D** is insufficient because it relies on a default value and only attempts to tag resources that are
missing the cost center tag. This approach is reactive rather than proactive and does not guarantee that all
resources will be correctly tagged with the appropriate cost center from the beginning. It also means that a
resource will initially be created with the wrong tag, which is then corrected later.

---

## Question 654

**Answer:** **D**

**Explanation:**

Here's a breakdown of why option D is the best solution for achieving high availability and using AWS
managed services, along with justifications for excluding the other options:
Why **Option D** is Correct:

**Option D** leverages several AWS managed services to achieve high availability, scalability, and resilience.

Amazon CloudFront with Amazon S3: Serving static content from S3 behind CloudFront provides global
content delivery, caching, and reduced load on the application servers. S3 offers high availability and
durability for static assets. https://aws.amazon.com/cloudfront/
Application Load Balancer (ALB): The ALB distributes traffic across multiple ECS Fargate tasks, ensuring
high availability and enabling scaling based on demand. ALBs offer built-in health checks and automatic
failover. https://aws.amazon.com/elasticloadbalancing/application-load-balancer/
Amazon ECS with AWS Fargate: ECS Fargate allows running the PHP application in containers without
managing the underlying EC2 instances. Fargate provides automatic scaling and resource management.
https://aws.amazon.com/fargate/
Amazon ElastiCache for Redis (Multi-AZ): Using ElastiCache for Redis with Multi-AZ ensures high availability
of the session data. In case of a failure in one Availability Zone, Redis automatically fails over to another zone.
https://aws.amazon.com/elasticache/redis/
Why Other Options Are Incorrect:

**Option A** (Elastic Beanstalk): While Elastic Beanstalk can simplify deployment, using a single EC2 instance in
a public subnet with a public IP address negates high availability.

**Option B** (Lambda): Hosting static content with Lambda is not cost-effective and it's not suitable for serving
static web assets. Lambda functions are designed for stateless, event-driven computing and have execution
time limitations.

**Option C** (EC2 and S3 with ElastiCache): Keeping backend code on a single EC2 instance doesn't address the
high availability requirement for the application logic. The backend code must also be HA to benefit the most
from HA Redis.

In summary, option D is the best answer because it delivers a highly available, scalable, and managed solution
using a combination of CloudFront, S3, ALB, ECS Fargate, and ElastiCache for Redis. The other options do not
provide the same level of availability and/or utilize less suitable AWS services.

---

## Question 655

**Answer:** **CE**

**Explanation:**

Let's break down why options C and E are the correct choices to satisfy the requirements:
Why C is correct: Create a public Application Load Balancer. Specify the application target group.
An Application Load Balancer (ALB) is the appropriate choice when routing HTTP/HTTPS traffic and requiring
application-level features like session affinity (sticky sessions). ALBs operate at Layer 7 of the OSI model,

allowing them to inspect the content of the traffic and make routing decisions based on it.
ALBs can be public, meaning they have a public IP address and can accept traffic directly from the internet.
ALBs have built-in support for session affinity (sticky sessions), which ensures that a user's requests are
consistently routed to the same EC2 instance for the duration of their session.
By specifying the application's target group (which contains the EC2 instances), the ALB knows where to
forward the incoming traffic.
Reference: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
Why E is correct: Create a web ACL in AWS WAF. Associate the web ACL with the endpoint.
AWS WAF (Web Application Firewall) is a service that protects web applications from common web exploits
and bots.
A Web ACL (Access Control List) in AWS WAF defines the rules and conditions that determine how WAF
should inspect and filter incoming traffic.
Critically, AWS WAF integrates directly with Application Load Balancers. By creating a web ACL and
associating it with the ALB, you apply WAF's protection to the web application, fulfilling the security
requirement.
Reference: https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html
Why A is incorrect: Create a public Network Load Balancer. Specify the application target group.
Network Load Balancers (NLBs) operate at Layer 4 of the OSI model (TCP/UDP). They are designed for highperformance, low-latency traffic and do not have the same application-level features as ALBs, such as session
affinity. While NLBs can be public, they are not the best choice when needing sticky sessions and integrating
with WAF effectively.
Why B is incorrect: Create a Gateway Load Balancer. Specify the application target group.
Gateway Load Balancers (GWLBs) are designed to route traffic to virtual appliances, such as firewalls or
intrusion detection systems. They are not intended for directly serving web application traffic.
GWLBs are not directly associated with WAF.
GWLBs do not handle sticky sessions.
Why D is incorrect: Create a second target group. Add Elastic IP addresses to the EC2 instances.
Creating a second target group doesn't address the requirements of session affinity or WAF integration.
Target groups are merely containers for registered instances.
While adding Elastic IP addresses to EC2 instances might seem to provide fixed addresses, it is not a scalable
or recommended approach for public-facing applications. Load balancers are specifically designed to
distribute traffic across multiple instances, making Elastic IPs unnecessary and harder to manage. It also does
not provide any WAF protection.

---

## Question 656

**Answer:** **D**

**Explanation:**

The correct answer is D. Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3
Standard-IA to directly deliver images by using a static website.

Here's why:
Cost-Effectiveness: The scenario specifies that images are accessed infrequently (once or twice a year). S3
Standard-IA is designed for data that is accessed less frequently but requires rapid access when needed. It
offers lower storage costs compared to S3 Standard, making it more cost-effective for this usage pattern.
High Availability: Amazon S3, including S3 Standard-IA, provides high availability and durability, fulfilling the
company's requirement. S3 offers 99.999999999% (11 9's) of data durability because it automatically creates
and stores object copies across multiple Availability Zones.
Direct Delivery: Using S3 to directly deliver images via a static website eliminates the need for web servers
(like EC2 instances), reducing operational overhead and costs associated with server management and
maintenance. S3 can be configured to host static websites, allowing users to access images directly from the
S3 bucket.
Alternatives are Less Suitable:
A (EBS on EC2): EBS is block storage, typically used for operating systems or databases on EC2 instances.
Hosting images directly on EBS attached to an EC2 instance would be more expensive and require managing
the EC2 instance.
B (EFS on EC2): EFS is a file system suitable for shared storage. While highly available, it's more expensive
than S3 and requires managing EC2 instances to serve the images.
C (S3 Standard): S3 Standard is more expensive than S3 Standard-IA. Given the infrequent access pattern,
S3 Standard-IA is the more cost-effective choice without sacrificing availability.

Therefore, storing images in S3 Standard-IA and directly delivering them as a static website provides a costeffective, highly available, and easily manageable solution for the company's requirements.
Supporting Links:
Amazon S3 Storage Classes: https://aws.amazon.com/s3/storage-classes/
Hosting a Static Website on Amazon S3:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html

---

## Question 657

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most cost-effective solution:

**Option B** leverages AWS-managed services to centralize and streamline security group rule management
across multiple AWS accounts within an organization. The key is the customer-managed prefix list. A prefix
list is a managed collection of CIDR blocks. By creating a prefix list containing the company's office CIDR
ranges, the company can define these ranges in one central location.
AWS Resource Access Manager (RAM) facilitates sharing this prefix list across all accounts within the AWS
Organizations setup. This eliminates the need to manually create and maintain the same CIDR range
information in each account's security groups. This substantially reduces administrative overhead.
Using the shared prefix list within the security groups means that instead of specifying individual CIDR
ranges, the security group rules simply reference the prefix list. When a CIDR range needs to be updated (e.g.,
a new office opens or an old one closes), the company only needs to modify the prefix list in its central
location. The change automatically propagates to all security groups that use the prefix list across the
organization.
Cost-effectiveness stems from a few factors. Prefix lists and RAM are relatively inexpensive services. The
primary benefit is the massive reduction in administrative effort and potential for errors associated with
manually managing security group rules across multiple accounts.
Other options are less efficient. **Option A** lacks centralized management, increasing administrative burden.

**Option C** relies on AWS-managed prefix list which can't be updated. **Option D** is expensive since Firewall
Manager is not cost-effective for just security group management. Therefore, option B provides the best
balance of centralized management, automation, and cost-effectiveness.

---

## Question 658

**Answer:** **AE**

**Explanation:**

The question focuses on migrating latency-sensitive HPC workloads and their storage to AWS while
maintaining NFS and SMB multi-protocol access with the least latency.

**Option A** suggests deploying compute-optimized EC2 instances into a cluster placement group. This is a good
starting point as cluster placement groups minimize latency by placing instances within the same Availability
Zone on the same high-bandwidth network. This reduces the network distance between the compute
instances, crucial for latency-sensitive applications.

**Option E** proposes attaching the EC2 instances to an Amazon FSx for NetApp ONTAP file system. FSx for
NetApp ONTAP provides high performance and supports both NFS and SMB protocols, fulfilling the multiprotocol requirement. Furthermore, it offers low-latency access to data, crucial for HPC workloads. FSx for
NetApp ONTAP also offers advanced data management features.
While **Option C** (FSx for Lustre) is known for high-performance computing, especially with large datasets and
parallel workloads, FSx for NetApp ONTAP can also be suitable for HPC needs, especially when the workload
requires multi-protocol access.

**Option D** (FSx for OpenZFS) also supports NFS and SMB, but might not always provide the lowest latency
compared to ONTAP and isn't typically the go-to choice when the focus is explicitly on minimizing latency in a
multi-protocol environment.

**Option B** (Partition placement group) is less relevant here. While it enhances fault tolerance, it doesn't
inherently minimize latency like a cluster placement group. The primary goal is to reduce latency for the
performance sensitive workload.

Therefore, combining cluster placement groups for the EC2 instances (A) with FSx for NetApp ONTAP (E)
provides the lowest latency solution that meets the multi-protocol access requirement. The placement group
minimizes latency between compute nodes, and FSx for NetApp ONTAP delivers low-latency shared storage.
Supporting links:
Amazon EC2 Placement Groups: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placementgroups.html
Amazon FSx for NetApp ONTAP: https://aws.amazon.com/fsx/netapp-ontap/

---

## Question 659

**Answer:** **C**

**Explanation:**

The correct answer is C. AWS Snowball Edge Storage Optimized. Here's a detailed justification:
The primary challenge is transferring a large amount of data (50 TB) quickly and securely to AWS within a
limited timeframe (2 weeks) while minimizing the impact on the existing, heavily utilized (90%) Site-to-Site
VPN connection.
AWS Snowball Edge Storage Optimized devices are designed for transferring large datasets to AWS when
network bandwidth is limited or cost-prohibitive. They provide a secure and ruggedized physical appliance
that can be shipped directly to the data center. This bypasses the need to transfer the data over the
congested VPN connection, addressing the core constraint. Once the data is loaded onto the Snowball Edge
device, it's shipped back to AWS, where the data is loaded into the desired AWS service (e.g., S3).
https://aws.amazon.com/snowball/
AWS DataSync with a VPC endpoint is a good option for ongoing data synchronization, but it relies on
network bandwidth. Given the existing VPN is 90% utilized, using DataSync would be slow and potentially
disrupt other services. It doesn't solve the initial large data migration problem within the timeframe.
AWS Direct Connect establishes a dedicated network connection from the data center to AWS. While ideal
for ongoing, high-bandwidth needs, it takes time to provision and implement. It would likely not be feasible
within the 2-week timeframe for the initial data transfer. Furthermore, it's overkill for a one-time migration
and more suited to a long-term hybrid cloud strategy. https://aws.amazon.com/directconnect/
AWS Storage Gateway connects on-premises applications to AWS storage. While it's useful for hybrid cloud
scenarios, it relies on the existing network connection for data transfer. Therefore, it would be constrained by
the already saturated VPN connection.

Therefore, AWS Snowball Edge is the best option because it circumvents the network limitations, offers a
secure transfer method, and is specifically designed for large data migrations in scenarios where network
bandwidth is a constraint. It allows for an offline data transfer.

---

## Question 660

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D, configuring a scheduled scaling policy, is the best solution and
why the other options are less suitable:
The core problem is predictable performance degradation during peak hours. This predictability is key. The
goal is to ensure proper application function at the start of these peak hours.

**Option A**, configuring an Application Load Balancer (ALB), helps distribute traffic evenly across instances.
However, an ALB alone won't address the underlying problem of insufficient capacity at the beginning of peak
hours. While a properly configured ALB is essential for a well-architected application, it doesn't proactively
increase resources to handle the anticipated surge in demand. It's a component of the solution, but not the
primary fix.
Options B and C, using dynamic scaling policies based on memory or CPU utilization, react after the
performance degradation has already begun. Dynamic scaling waits for the metrics to exceed a certain
threshold (high CPU/memory) before launching new instances. This inherent delay means users will still
experience slow performance at the start of peak hours while the Auto Scaling group reacts to the increased
load. While reactive scaling is valuable for unexpected surges, it doesn't solve a predictable, recurring issue.
Dynamic scaling policies are best used in conjunction with scheduled scaling, or for unexpected traffic spikes.

**Option D**, configuring a scheduled scaling policy, is the most effective solution. Because the peak hours are
predictable, a scheduled policy can be configured to proactively launch additional EC2 instances before the
peak traffic arrives. This ensures that sufficient capacity is available right from the start, eliminating the
performance degradation reported by users. The Auto Scaling group will automatically increase the desired
and minimum capacity at a specific time, adding instances before users experience problems. This proactive
approach directly addresses the stated requirement.

In summary, scheduled scaling anticipates the demand, proactively adds capacity, and prevents performance
degradation at the start of peak hours. ALBs provide traffic distribution, and dynamic scaling reacts to
unforeseen changes, but neither effectively handles a consistently predictable surge in demand as well as
scheduled scaling.

---

## Question 661

**Answer:** **B**

**Explanation:**

The correct answer is B: Use Amazon RDS Proxy with a target group for the database and change the

applications to use the RDS Proxy endpoint.
RDS Proxy is a fully managed, highly available database proxy that sits between your applications and your
RDS databases. It manages database connections efficiently, which is crucial for applications that experience
scaling issues due to increased load. By pooling and sharing database connections, RDS Proxy reduces the
overhead associated with establishing new connections each time an application needs to interact with the
database. This enhances database efficiency and lowers operational costs.
By using RDS Proxy, the company can effectively manage database connections, minimizing connection
overhead and improving overall performance during peak times. This solution requires minimal operational
overhead because RDS Proxy is a managed service, meaning AWS handles the infrastructure management
and patching. The only configuration needed is pointing applications to the RDS Proxy endpoint, making it the
least operationally intensive option.

**Option A** is incorrect because DynamoDB is a NoSQL database, and migrating applications to use DynamoDB
would require significant code changes and is not a simple scaling solution for an existing RDS database.

**Option C** requires managing and maintaining a custom proxy on EC2, which introduces significant operational
overhead. **Option D**, using a Lambda function for connection pooling, is not a recommended solution because
Lambda functions have execution time limits and are better suited for event-driven architectures, not as
continuous database connection proxies. Additionally, it adds complexity compared to a managed RDS Proxy.

In summary, RDS Proxy offers a straightforward, fully managed solution to address the company's database
scaling needs with minimal operational overhead.
https://aws.amazon.com/rds/proxy/https://docs.aws.amazon.com/rds/proxy/latest/userguide/what-is.html

---

## Question 662

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, along with supporting concepts and links:
The problem highlights escalating EBS storage and snapshot costs, despite no apparent increase in storage
purchases. This strongly indicates inefficiencies in snapshot management. The goal is to optimize costs with
minimal operational overhead.

**Option A** and B, while potentially helpful in identifying over-provisioned volumes, involve significant overhead.
Monitoring EBS volume utilization using CloudWatch logs (A) or custom scripts (B) requires configuration,
maintenance, and interpretation, and they don't directly address the root cause of increasing snapshot costs.

Elastic Volumes allow you to reduce the size of the EBS volumes but doesn't solve the issue with snapshot
costs.

**Option C** focuses on deleting expired/unused snapshots, which is a good practice, but it's a manual process.
Regularly identifying and deleting snapshots is time-consuming and prone to error. It doesn't establish an
automated, policy-driven approach. It might be useful if you don't want to implement automation.

**Option D** is the most effective and efficient approach. By deleting nonessential snapshots and implementing
Amazon Data Lifecycle Manager (DLM), the company can automate snapshot creation, retention, and deletion
based on defined policies. DLM significantly reduces operational overhead by handling the snapshot lifecycle
automatically. This ensures that snapshots are created regularly for data protection but are also purged when
they are no longer needed, preventing unnecessary cost accumulation. DLM directly addresses the snapshot
cost issue in a scalable and sustainable manner. It also addresses potential compliance requirements for data
backup and retention. Nonessential snapshots take up storage and are potentially unassociated.
Here are some authoritative links for further research:
Amazon Data Lifecycle Manager (DLM): https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshotlifecycle.html
Amazon EBS Snapshots: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html
Amazon EBS Elastic Volumes: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expandvolume.html

---

## Question 663

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides a secure and controlled access mechanism for the ECS cluster to
access both the RDS for MySQL database and the S3 bucket without exposing them to the public internet or
other unauthorized entities.
Here's a breakdown of why option D is correct:
RDS Access Control: Creating a VPC endpoint for RDS ensures that traffic to RDS remains within the AWS
network and doesn't traverse the public internet. Restricting the RDS security group to only allow traffic from

the subnets where the ECS tasks are running isolates the database access solely to the authorized ECS
cluster. This follows the principle of least privilege and prevents other resources from accessing the
database.
S3 Access Control: Creating a VPC endpoint for S3 also keeps S3 traffic within the AWS network. By
updating the S3 bucket policy to only allow access from the S3 VPC endpoint, you restrict access to the
bucket solely through the VPC and, indirectly, only from resources authorized to use that VPC endpoint (in
this case, the ECS cluster).

Why other options are incorrect:

**Option A**: While KMS can encrypt data at rest, it doesn't control network access. Even with encryption, anyone
with network access and the necessary KMS permissions could still attempt to access the data. Relying solely
on KMS for access control is insufficient. Also, encrypting using KMS only solves data at rest.

**Option B**: AWS managed keys are not customizable in terms of policies. Therefore, one cannot configure the
S3 bucket policy to specify the ECS task execution role.

**Option C**: Using only an S3 bucket policy to restrict access to the ECS task execution role is not as secure as
using a VPC endpoint. The bucket policy can be bypassed if someone gains access to the ECS task execution
role's credentials outside the controlled network environment.
Key Concepts and Links:
VPC Endpoints: VPC endpoints allow you to privately connect your VPC to supported AWS services without
requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Security Groups: Security groups act as virtual firewalls for your EC2 instances and other AWS resources,
controlling inbound and outbound traffic.
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
S3 Bucket Policies: S3 bucket policies are access control policies that you can attach to S3 buckets to grant
or deny permissions to users or other AWS accounts.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html
Principle of Least Privilege: Granting only the minimum necessary permissions to perform a task.

---

## Question 664

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most suitable solution, considering the scenario's
requirements:
The problem describes a web application experiencing significant, but infrequent, latency spikes due to CPU
utilization increasing tenfold during peak hours. The company needs to migrate the application to AWS,
improve latency, and implement automatic scaling to handle demand surges. Elastic Beanstalk is chosen as
the deployment platform.

**Option D** is the most effective because it combines burstable performance instances in unlimited mode with
scaling based on predictive metrics. Burstable performance instances (like those in the T family) are designed
for workloads with average CPU utilization interspersed with occasional bursts. Unlimited mode allows these
instances to burst beyond their baseline CPU for as long as required, at the cost of accruing CPU credits or
charges. This is ideal for handling the sudden, drastic increase in CPU utilization.
Scaling based on predictive metrics utilizes AWS's forecasting services to anticipate demand. Instead of
reacting to immediate CPU spikes (reactive scaling), predictive scaling proactively adds or removes instances
before the anticipated spike, thereby mitigating latency issues before they occur. This is crucial, as the
company knows when to expect the load.
Options A, B, and C are less effective. While using requests as a scaling trigger (**Option A** & B) is valid, it's
reactive. The application will already be experiencing latency before the scaling action takes effect. Compute
optimized instances (**Option B** & C) are designed for sustained high CPU usage, not infrequent bursts.
Scheduling scaling (**Option C**) might work, but it requires precise prediction and is less flexible than predictive
scaling if the spikes shift slightly in time. Also, if the spikes are actually unpredictable, scheduled scaling is
not a proper solution.

Therefore, using burstable performance instances in unlimited mode combined with scaling based on
predictive metrics allows the application to handle the bursty CPU demand efficiently and proactively,
minimizing latency and meeting the company's requirements.
Relevant Resources:
Amazon EC2 Instance Types: https://aws.amazon.com/ec2/instance-types/
Elastic Beanstalk Auto Scaling: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/usingfeatures.managing.as.html
Amazon EC2 CPU Credits and Baseline Utilization:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html
Predictive Scaling for EC2: https://aws.amazon.com/blogs/compute/introducing-predictive-scaling-foramazon-ec2/

---

## Question 665

**Answer:** **B**

**Explanation:**

The correct answer is B. AWS CloudFormation allows you to define and provision your infrastructure as code,
enabling automation and consistency across deployments. By defining your infrastructure in CloudFormation
templates, you can version control them, ensuring all incremental changes are tracked. This addresses the
requirement for automated infrastructure setup and tracking of modifications.
AWS Config continuously monitors and records the configuration of your AWS resources. It allows you to
track changes to resource configurations and evaluate them against desired states, providing an audit trail of
all modifications. This meets the requirement for the security team to track and audit all incremental changes
to the infrastructure.

**Option A** is incorrect because while AWS Organizations is useful for managing multiple AWS accounts, it
doesn't directly provision infrastructure or track individual configuration changes. **Option C** is incorrect
because AWS Service Catalog allows organizations to create and manage catalogs of IT services that are
approved for use, but it doesn't inherently track configuration changes like AWS Config does. **Option D** is
incorrect because, while CloudFormation is useful for defining and provisioning resources, Service Catalog
doesn't provide the detailed tracking of incremental infrastructure changes provided by AWS Config.
CloudFormation provisions the infrastructure, providing the automation component, while Config provides
continuous monitoring of changes for auditing, fulfilling both requirements. This makes option B the most
complete and correct answer.
Further Reading:
AWS CloudFormation: https://aws.amazon.com/cloudformation/
AWS Config: https://aws.amazon.com/config/

---

## Question 666

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's a detailed justification:
B - Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance: Moving the MySQL database
to Amazon RDS (Relational Database Service) and enabling Multi-AZ (Multi-Availability Zone) is crucial for
high availability. RDS Multi-AZ automatically provisions and maintains a synchronous standby replica of the

database in a different Availability Zone. If the primary database instance fails, RDS automatically fails over to
the standby instance, minimizing downtime. This eliminates the single point of failure associated with a
database running on a single EC2 instance. This ensures the database component of the website is highly
available.
E - Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2 instances that
are distributed across two Availability Zones: Creating an Application Load Balancer (ALB) and an Auto
Scaling group (ASG) for the stateless Python application ensures high availability and scalability. The ALB
distributes incoming traffic across multiple EC2 instances running the application in different Availability
Zones. This prevents a single point of failure for the web application layer. The Auto Scaling group
dynamically adjusts the number of EC2 instances based on traffic demand. If an instance fails in one
Availability Zone, Auto Scaling automatically launches a new instance in a healthy Availability Zone.

Why other options are incorrect:
A - Provision an internet gateway in each Availability Zone in use: Internet Gateways (IGWs) are regional
resources, not zonal. You only need one IGW per VPC. Availability Zones do not require individual IGWs. This
option is incorrect since Internet Gateway is used to provide internet access for VPCs and this does not
improve the high availability of the EC2 instance.
C - Migrate the database to Amazon DynamoDB, and enable DynamoDB auto scaling: While DynamoDB
offers high availability and scalability, it requires application code changes to interact with a NoSQL database.
The question explicitly states that the company cannot modify the application code, making this option
unsuitable. The application is currently using MySQL so it is not designed to connect to a NoSQL database
D - Use AWS DataSync to synchronize the database data across multiple EC2 instances: While AWS
DataSync is useful for data transfer, it is not a solution for high availability of a MySQL database. DataSync
does not provide automatic failover capabilities, which are essential for achieving high availability. RDS with
Multi-AZ handles failover automatically, ensuring minimal downtime.
Relevant AWS documentation:
Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html
Application Load Balancer:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
Auto Scaling: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html

---

## Question 667

**Answer:** **C**

**Explanation:**

The correct answer is C. Create interface endpoints for Amazon S3. Use the interface endpoints to securely
access the data from the Region and the on-premises location.

Here's a detailed justification:
Requirement Analysis: The core requirements are secure access to S3 from both an AWS Region and onpremises, and data must not traverse the internet, leveraging the existing AWS Direct Connect.
Interface Endpoints and Private Connectivity: Interface endpoints, powered by AWS PrivateLink, enable
private connectivity to AWS services like S3 without exposing traffic to the public internet. They create a
network interface within your VPC that acts as an entry point to S3. Traffic between your VPC (and connected
on-premises location via Direct Connect) and S3 remains within the AWS network.
Direct Connect Integration: The AWS Direct Connect connection provides a private, dedicated network
connection between the on-premises environment and the AWS Region. By using interface endpoints, the onpremises location can access S3 through Direct Connect, maintaining the required security and avoiding the
internet.
Why not Gateway Endpoints (**Option A**)? Gateway endpoints are designed specifically for S3 and DynamoDB,
but they only support access from within the same AWS Region's VPC. They do not provide access from onpremises locations via Direct Connect.
Why not Transit Gateway (**Option B**)? While Transit Gateway facilitates connectivity between multiple VPCs
and on-premises, it doesn't directly provide a secure, private path to S3 that avoids the internet. You would
still need a mechanism like interface endpoints for the actual S3 access. The transit gateway itself isn't
directly involved in the secure S3 access.
Why not AWS KMS (**Option D**)? AWS KMS is used for encrypting data at rest and in transit. While encryption
is essential for data security, it doesn't address the requirement of avoiding the internet for data access. KMS
keys protect the data itself but do not change the network path.
In summary: Interface endpoints offer the only solution that satisfies both the security requirement (no
internet access) and the connectivity requirement (access from both the AWS Region and on-premises via
Direct Connect).

---

## Question 668

**Answer:** **D**

**Explanation:**

The correct answer is D: Create a tag policy in Organizations that has a list of allowed application names.

Here's why:
AWS Organizations provides centralized governance and management of multiple AWS accounts. Tag
policies, a feature within Organizations, allow administrators to enforce tagging standards across all accounts
within an organization or specific organizational units (OUs). By creating a tag policy with a list of allowed
application names, you directly address the requirement of ensuring that resources are only created with
approved application name tag values.
When a tag policy is in effect, AWS will deny the creation of a resource if it lacks the required tag or if the
tag's value doesn't match an approved value defined in the policy. This preventative approach is crucial for
maintaining consistent tagging, simplifying resource management, and ensuring compliance. The tag policy
applies to all accounts governed by the organization, guaranteeing that the development teams adhere to the
defined standards regardless of the account they're working in.

**Option A** is incorrect because while IAM policies can enforce tagging requirements, applying this directly
through IAM groups is less scalable and harder to centrally manage across multiple accounts in an AWS
Organization. Each account would need similar, yet possibly diverging, IAM policies. Organizations' tag
policies provide a centralized point of control.

**Option B** is incorrect because a cross-account role with a Deny policy wouldn't prevent the resource creation
initially. It would primarily act after resource creation which isn't ideal. It would also require complex
implementation across accounts and not be easily managed.

**Option C** is incorrect because AWS Resource Groups helps in organizing and managing resources based on
tags, but it doesn't prevent the creation of resources without the correct tags. Resource Groups are reactive;
they identify issues after resource creation, whereas the requirement calls for a proactive solution to prevent
non-compliant resource creation.

In summary, tag policies in AWS Organizations are the most suitable solution because they provide a
centralized, proactive, and scalable way to enforce mandatory tags with predefined allowed values across
multiple accounts, meeting the company's requirements.
Supporting documentation:
AWS Organizations Tag Policies:
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html
Tagging Best Practices: https://aws.amazon.com/blogs/aws/aws-tagging-strategies/

---

## Question 669

**Answer:** **C**

**Explanation:**

The correct answer is C: Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate
password rotation. Here's why:
AWS Secrets Manager is specifically designed for securely storing and managing secrets like database
credentials, API keys, and other sensitive information. Its built-in rotation feature allows automatic password
rotation for RDS databases, including PostgreSQL, with minimal operational overhead. Secrets Manager
handles the entire rotation process: it creates a new password, validates it, updates the database, and then
stores the new secret.

**Option A** is less desirable because it requires developing and maintaining a custom Lambda function and
EventBridge rule. This adds operational overhead for development, testing, and maintenance. While possible,
it's more complex than using a dedicated secrets management service.

**Option B**, using the AWS CLI modify-db-instance command, only allows manual password changes. It does not
automate the rotation process, requiring manual intervention every 30 days, which defeats the purpose of
automation and increases operational overhead.

**Option D**, using AWS Systems Manager Parameter Store, while capable of storing secrets, is primarily
designed for storing configuration data. It lacks the built-in rotation features of Secrets Manager, requiring
custom code or scripting for rotation, which again increases operational overhead. Secrets Manager provides
a purpose-built solution for secrets management including rotation, auditing and access control. Parameter
Store is more appropriate for storing non-sensitive configuration data.

Therefore, integrating AWS Secrets Manager provides the most secure and least operationally intensive
solution for automating RDS PostgreSQL password rotation.
References:
AWS Secrets Manager: https://aws.amazon.com/secrets-manager/
Rotating Amazon RDS, Amazon Redshift, and Amazon DocumentDB secrets automatically with AWS Secrets
Manager: https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html

---

## Question 670

**Answer:** **B**

**Explanation:**

The correct answer is B: Choose provisioned mode. Update the read and write capacity units appropriately.

Here's why:
The scenario describes predictable, recurring usage patterns. The company knows the read/write operations
per second during the 4-hour weekly tests. This predictability is the key indicator that provisioned capacity is
a better fit than on-demand.
Provisioned Capacity: Allows you to specify the read and write capacity units (RCUs and WCUs) required for
your application. You pay for the capacity you provision. This is cost-effective when your workload is
predictable. Since the company knows its read and write needs during the tests, they can accurately provision
capacity, avoiding the higher per-request cost of on-demand.
On-Demand Capacity: Charges based on actual read and write requests, without the need to pre-provision
capacity. It's suitable for unpredictable workloads. While convenient, it's generally more expensive for
consistent workloads.
Reserved Capacity: Offers discounts for committing to provisioned capacity for 1 or 3 years. While attractive
for cost savings, it's only beneficial if the capacity utilization is consistently high. Given that the DynamoDB
table is only used for 4 hours a week, reserved capacity would likely lead to significant underutilization of the
reserved capacity, making it less cost-effective.
Answer A is incorrect because even though you can "update the read and write capacity units appropriately",
on-demand capacity is not the ideal option for a predictable workload that occurs every week. Provisioned
mode is better.
Answers C and D are incorrect because reserved capacity is beneficial when the capacity utilization is high,
and the DynamoDB table is only used for a short amount of time each week. The reserved capacity would be
underutilized.
By choosing provisioned mode and setting the RCUs and WCUs based on the known requirements during the
4-hour test, the company can optimize costs by avoiding the on-demand per-request pricing and the
underutilization that would occur when purchasing DynamoDB reserved capacity.
Relevant Documentation:
DynamoDB On-Demand vs. Provisioned Capacity: Costs & Use Cases | Chaos Genius
Choosing Between Provisioned and On-Demand Capacity in AWS DynamoDB - Scalegrid

---

## Question 671

**Answer:** **B**

**Explanation:**

The correct answer is B. Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost
Management console.

Here's why: AWS Cost Anomaly Detection is specifically designed to identify unusual spending patterns in
your AWS costs. It uses machine learning algorithms to learn your typical cost behavior and automatically
detects anomalies. When an anomaly is detected, it sends notifications to designated stakeholders, enabling
prompt action to investigate and mitigate unexpected costs. This directly addresses the requirement of
monitoring costs and notifying stakeholders of unusual spending.

**Option A**, using an AWS Budgets template to create a zero spend budget, while useful for setting hard limits,
is not designed for detecting unusual spending. A zero spend budget would simply prevent any spending,
which is not the desired outcome (the company wants to monitor and be notified of unusual spending).
[https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html]

**Option C**, creating AWS Pricing Calculator estimates, is helpful for initial cost planning, but it's a static
calculation. It doesn't continuously monitor actual spending or detect anomalies based on historical cost
patterns. It only provides a point-in-time estimate. [https://calculator.aws/]

**Option D**, using Amazon CloudWatch to monitor costs, is not a dedicated cost monitoring tool. While
CloudWatch can monitor various AWS metrics, including billing metrics, it requires manual configuration of
alarms and thresholds based on cost data. It doesn't automatically learn cost patterns or detect anomalies
like Cost Anomaly Detection does. Manually setting thresholds is more cumbersome and less effective at
identifying unexpected increases in cost patterns compared to Cost Anomaly Detection.
[https://aws.amazon.com/cloudwatch/]
Cost Anomaly Detection provides an automated and proactive approach to identify and address unusual
spending, aligning perfectly with the company's requirements. [https://aws.amazon.com/aws-costmanagement/aws-cost-anomaly-detection/] It also provides customization for anomaly detection and
notification preferences.

---

## Question 672

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The scenario requires quickly analyzing clickstream data in S3 with minimal operational overhead to
determine if further processing is needed. **Option B**, utilizing AWS Glue and Amazon Athena, offers the most
efficient and cost-effective approach. AWS Glue crawler automatically infers the schema from the data
stored in S3, catalogs the data, and creates metadata tables in the AWS Glue Data Catalog. This eliminates
the need for manual schema definition or table creation, reducing operational overhead. Athena can then
directly query the data in S3 using SQL.

**Option A**, using a Spark catalog, is less optimal. While AWS Glue can be used with Spark, configuring Spark
jobs specifically for this quick analysis introduces more complexity. Setting up and managing Spark jobs
involves higher operational overhead than using Athena.

**Option C**, using a Hive metastore with Amazon EMR, is an even heavier approach. EMR clusters require
provisioning and management, adding significant operational complexity and cost compared to the serverless
Athena. It also requires maintaining and managing the Hive metastore.

**Option D**, using AWS Glue crawler and Kinesis Data Analytics, is not the right choice because Kinesis Data
Analytics is typically used for real-time stream processing. While it supports querying data, it's designed for
continuous data streams, not for analyzing a static data set residing in S3. Also, using SQL in Kinesis Data
Analytics is more complex and doesn't fit the use case of quickly analyzing data in S3.
Athena is serverless, meaning there are no servers to manage, scale, or provision. You only pay for the queries
you run. Coupled with Glue's automatic schema discovery, this provides the lowest operational overhead for
quickly querying the clickstream data to determine whether further processing is necessary.

Therefore, AWS Glue Crawler + Amazon Athena strikes the best balance of speed, minimal management, and
cost-effectiveness for quickly analyzing S3 data and determining whether it warrants further data pipeline
processing.

---

## Question 673

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the most suitable solution, along with supporting concepts

and links:
The primary requirement is to provide fast access to files for 7 days and then transition them to a slower,
cheaper storage tier with a retrieval time of less than 24 hours. Let's analyze the options:

**Option A**: Using AWS DataSync alone doesn't address the need for immediate access for the first 7 days.
DataSync primarily focuses on data transfer, not tiered storage with lifecycle management.

**Option B**: This option effectively addresses both requirements. Amazon S3 File Gateway allows on-premises
applications (like the SMB server) to seamlessly store and access data in Amazon S3. It acts as a local cache
for frequently accessed files, providing low-latency access. Critically, the S3 Lifecycle policy can
automatically transition older data (older than 7 days) to S3 Glacier Deep Archive. Glacier Deep Archive offers
the lowest storage cost and meets the requirement of retrieval within 24 hours.

**Option C**: While Amazon FSx File Gateway could provide file system access in AWS, it is not designed to
extend on-premise storage capacity in the way S3 File Gateway does. Additionally, an S3 Lifecycle policy is
not directly compatible with FSx. It manages objects in S3 buckets.

**Option D**: Requiring each user to access S3 directly bypasses the existing SMB server infrastructure,
introducing complexity and potential permission management issues. While the lifecycle policy to Glacier
Flexible Retrieval is valid, it doesn't address the fast access requirement for the first 7 days.

Therefore, S3 File Gateway coupled with a Lifecycle policy to Glacier Deep Archive offers the most integrated
and cost-effective solution for this scenario. It extends the SMB server's storage, provides fast local access
for recent files, and transitions older files to a cheaper archive tier while meeting the retrieval time
requirement.
Key Concepts:
Amazon S3 File Gateway: Provides a local cache for frequently accessed files, enabling low-latency access
from on-premises applications.
Amazon S3 Lifecycle policies: Automate the transition of objects between different storage classes (e.g., S3
Standard, S3 Glacier Deep Archive) based on defined rules.
S3 Glacier Deep Archive: Offers the lowest cost storage for long-term archiving with infrequent access.
Storage Tiering: Moving data to different storage classes based on access frequency and cost
considerations.

---

## Question 674

**Answer:** **BD**

**Explanation:**

Here's a detailed justification for the answer BD:
The problem describes a web application experiencing performance issues due to a heavy read load on an
RDS for PostgreSQL database during periods of high traffic. The core issue is database read contention,
which is slowing down the application.

**B.** Create a read replica for the DB instance. Configure the application to send read traffic to the read
replica. This is a direct and effective solution. Read replicas are designed to offload read traffic from the
primary database instance. By directing read queries to the read replica, the primary instance is freed up to
handle write operations and other critical tasks. This significantly reduces the load on the primary database,
improving overall application performance. RDS makes it easy to create and manage read replicas.

**D.** Create an Amazon ElastiCache cluster. Configure the application to cache query results in the
ElastiCache cluster. Implementing a caching layer using Amazon ElastiCache addresses the read load
problem in a different but complementary way. By caching frequently accessed data or query results, the
application can retrieve information directly from the cache instead of querying the database every time. This
reduces the number of read requests hitting the database, further alleviating the load and improving response
times. ElastiCache offers managed in-memory caching services, allowing for fast data retrieval and efficient
scaling.

Why other options are incorrect:

**A.** Turn on auto scaling for the DB instance. While RDS does support autoscaling for storage, it does not
autoscaling for compute resources directly like EC2 instances. This will not address the read load problem.
Also, autoscaling would not work when traffic decreases as quickly as it goes up.

**C.** Convert the DB instance to a Multi-AZ DB instance deployment. Configure the application to send read
traffic to the standby DB instance. Multi-AZ is primarily for high availability and disaster recovery, not read
scaling. The standby instance in a Multi-AZ deployment is not intended for serving read traffic. It's a passive
replica that becomes active only in case of a failure of the primary instance. Directly using the standby
instance for reads is not supported and can lead to data inconsistency or other issues.

**E.** Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in the same
Availability Zone as the DB instance. This is a best practice for reducing latency and network costs, it does
nothing to reduce load on the database instance.
Supporting Links:
Amazon RDS Read Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html
Amazon ElastiCache: https://aws.amazon.com/elasticache/
Amazon RDS Multi-AZ Deployments:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.html

---

## Question 675

**Answer:** **D**

**Explanation:**

The correct answer is D: Lock the EBS snapshots to prevent deletion.

Here's why:
Recycle Bin (**Option C**) provides a temporary buffer against accidental deletion, allowing recovery within a
configured retention period. However, it doesn't prevent deletion, which is a critical requirement for the
company. An administrator could still permanently delete a snapshot from the Recycle Bin.
IAM Policy (**Option B**) while effective at preventing a specific user (the storage administrator) from deleting
snapshots, it directly modifies their administrative rights, which violates the requirement that these rights
should not change. This approach also doesn't protect against deletion from other users or services with
sufficient permissions.
Using an EC2 instance with a restricted IAM role to delete snapshots (**Option A**) complicates the process
and adds unnecessary overhead. It doesn't prevent accidental deletion by the storage administrator; it simply
delegates the deletion task to another entity.
EBS snapshot locking directly addresses the requirement of preventing accidental deletion without
altering the storage administrator's fundamental rights. Snapshot locking provides a write-once-readmany (WORM) capability, meaning that once a snapshot is locked, it cannot be deleted until the lock
expires, regardless of user permissions. This fulfills the compliance requirement and ensures data retention
without modifying the existing administrative structure.
Snapshot locking is the least administrative effort option because it's a built-in feature designed specifically
for this purpose. The storage administrator maintains their existing rights, but the snapshots are protected by
the lock.
Further research on EBS snapshot locking can be found in the official AWS documentation:
Amazon EBS Snapshots - Preventing Accidental Deletion with Snapshot Locks

---

## Question 676

**Answer:** **B**

**Explanation:**

The requirement is to capture and analyze VPC traffic information in near real-time using Amazon
OpenSearch Service.

**Option B** is the correct solution because it utilizes VPC Flow Logs to capture the network traffic data, sends it
to CloudWatch Logs, and then uses Kinesis Data Firehose to stream the logs to OpenSearch Service. VPC
Flow Logs directly capture IP traffic information at the network interface level within the VPC. CloudWatch
Logs acts as a central repository for these logs. Kinesis Data Firehose is specifically designed to reliably
stream data to destinations like Amazon OpenSearch Service.

**Option A** is incorrect because while it uses CloudWatch Logs and VPC Flow Logs correctly, Kinesis Data
Streams is more suitable for custom processing of data in transit and isn't the most efficient way to deliver
directly to OpenSearch in this scenario. Firehose has direct integration and built-in buffering for OpenSearch
Service.
Options C and D are incorrect because CloudTrail is used to log API calls made to AWS services, not network
traffic. VPC Flow Logs capture the network traffic directly. Therefore, sending data to CloudTrail and then
streaming from there is not suitable for network traffic analysis.

In summary, the combination of VPC Flow Logs, CloudWatch Logs, and Kinesis Data Firehose provides the
most efficient and appropriate solution for capturing, storing, and analyzing VPC network traffic data in near
real-time with Amazon OpenSearch Service.
Supporting Documentation:
VPC Flow Logs: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html
Amazon Kinesis Data Firehose: https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html
Amazon OpenSearch Service: https://aws.amazon.com/opensearch-service/

---

## Question 677

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a managed node group that contains only Spot Instances.

Here's why:
Cost-Effectiveness: The primary requirement is cost-effectiveness for an infrequently used development
cluster. Spot Instances offer significant discounts (up to 90%) compared to On-Demand Instances because
you bid on unused EC2 capacity. Since the development cluster will be used sporadically for resiliency
testing, interruptions from Spot Instance revocations are acceptable, making them the most economical
choice.
Managed Node Group Convenience: Using a managed node group simplifies node management. EKS
automatically handles provisioning, updating, and scaling the nodes within the group, reducing operational
overhead compared to self-managed nodes (which Auto Scaling groups would entail).
Meeting Requirements: A managed node group with Spot Instances fulfills the requirement of a dedicated
EKS cluster managed entirely by EKS itself. The infrequent usage aligns perfectly with the nature of Spot
Instances, as interruptions are tolerable in a development/testing environment.
Why other options are not ideal:

**B:** Provisioning both On-Demand and Spot Instances increases complexity and cost. On-Demand Instances are
not needed for infrequent development use.

**C:** Using an Auto Scaling group with a launch configuration and user data requires more manual configuration
and management, which is contrary to the simplicity offered by managed node groups. Also, it moves away
from managed nodes by EKS.

**D:** On-Demand Instances are too expensive for infrequent development use.

---

## Question 678

**Answer:** **B**

**Explanation:**

The correct answer is B because it allows the company to fully control the encryption keys. The question
explicitly states the need for the company to "fully control the ability of users to create, rotate, and disable
encryption keys."
Let's analyze why the other options are incorrect:

**A.** Use default server-side encryption with Amazon S3 managed encryption keys (SSE-S3): SSE-S3
encrypts data at rest using keys managed by AWS. While easy to implement, the customer has no control over
key rotation or disabling. AWS manages the keys entirely, failing to meet the requirement of full control.

**C.** Create an AWS managed key by using AWS Key Management Service (AWS KMS): This is incorrect.
While KMS keys are used, "AWS managed keys" (formerly known as "AWS managed CMKs") in KMS are not
fully controlled by the customer. Although you can choose to use these keys for SSE-KMS encryption in S3,
the customer has very limited control over key rotation policies. The customer cannot disable or delete these
keys.

**D.** Download S3 objects to an Amazon EC2 instance. Encrypt the objects by using customer managed keys:
This solution is inefficient, complex, and introduces unnecessary overhead. It involves transferring data out of
S3, performing encryption on an EC2 instance, and then re-uploading the encrypted data. This approach
creates a management burden and doesn't leverage the built-in encryption capabilities of S3. Moreover, this
method adds complexity and is not suitable for the requirement of minimal effort.
Why **Option B** is the Best Choice:

**Option B**, using a customer managed key in AWS KMS for SSE-KMS, provides the best balance of security,
control, and ease of use:
Customer Control: The company creates and manages the KMS key, granting them complete control over the
key's lifecycle, including creation, rotation, enabling, disabling, and deletion. This perfectly aligns with the
stated requirement.
Security: AWS KMS provides a secure and compliant environment for managing cryptographic keys.
Integration with S3: SSE-KMS is a native feature of S3, simplifying encryption and decryption processes.
Minimal Effort: Using SSE-KMS with a customer managed key involves configuring the S3 bucket to use the
key, which is relatively straightforward.

In summary, customer managed keys in AWS KMS, used with SSE-KMS, are designed to give customers
complete control over their encryption keys while leveraging the security and scalability of AWS.

---

## Question 679

**Answer:** **ACE**

**Explanation:**

Here's a detailed justification for why options A, C, and E are the correct choices for the scenario, along with
supporting concepts and links:
The requirement is to back up on-premises VMs to S3, retain the backups for 30 days, and automatically
delete them after 30 days.

**A.** Create an S3 bucket that has S3 Object Lock enabled: S3 Object Lock is crucial to ensure that the
backups are protected from accidental or malicious deletion during the retention period. Once a backup is
written to S3 with Object Lock enabled, it cannot be deleted until the retention period expires. This is an
important protection mechanism for backups.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html

**C.** Configure a default retention period of 30 days for the objects: This ensures that all objects placed in the
S3 bucket are subject to the retention policy enforced by Object Lock. The objects cannot be deleted or
overwritten until the 30-day period has elapsed, fulfilling the 30-day retention requirement. A retention
period protects data integrity.

**E.** Configure an S3 Lifecycle policy to expire the objects after 30 days: While Object Lock protects the
objects during the 30-day retention period, it doesn't automatically delete them after the retention period. A
lifecycle policy configured to expire (delete) the objects after 30 days ensures automatic cleanup. If a
retention period of 30 days is enabled using Object Lock, the expiration action of the Lifecycle rule cannot be
for a period less than the retention period. This ensures that the backups are automatically purged once they
are no longer needed, optimizing storage costs.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html

Why the other options are incorrect:

**B.** Create an S3 bucket that has object versioning enabled: While object versioning is a good practice for
data protection in general (allowing you to recover previous versions of objects), it doesn't automatically
delete objects. Versioning alone doesn't satisfy the requirement of automatic deletion after 30 days. It only
keeps all versions of the object, which will increase storage costs without addressing the retention and
automatic deletion requirement.

**D.** Configure an S3 Lifecycle policy to protect the objects for 30 days: While the intention might be correct,
the phrase "protect the objects" is vague in the context of S3 Lifecycle policies. Lifecycle policies primarily
manage object transitions (e.g., moving to cheaper storage classes) or expirations (deletions). Protection from
deletion is achieved via Object Lock, not standard Lifecycle actions.

**F.** Configure the backup solution to tag the objects with a 30-day retention period: Tagging objects is useful
for metadata and categorization, but S3 by itself does not automatically enforce retention based on tags.
While the backup solution could be programmed to delete based on these tags, it introduces unnecessary
complexity and reliance on the backup solution's custom logic. S3's built-in Object Lock and Lifecycle policies
are more reliable and scalable for this purpose.

In summary, the combination of S3 Object Lock (A), a default retention period (C), and a Lifecycle policy for
expiration (E) provides a robust and automated solution for backing up on-premises VMs to S3 with the

specified retention and deletion requirements.

---

## Question 680

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's a detailed justification:

**A.** AWS DataSync with Change Detection (Best Solution)
DataSync Efficiency: AWS DataSync is purpose-built for efficient data transfer between on-premises
storage, S3, and EFS. It handles data transfer, synchronization, and metadata management automatically.
Change Detection: DataSync's "transfer only data that has changed" setting avoids unnecessary transfers
and reduces operational overhead. It detects changes based on file modification times and sizes. This ensures
only new or updated files are copied, satisfying the requirement of overwriting only changed files.
Continuous Operation: DataSync can be scheduled to run periodically or triggered by events, enabling
continuous file synchronization.
Least Operational Overhead: DataSync is a managed service, meaning AWS handles the underlying
infrastructure, scaling, and maintenance. This significantly reduces the operational burden compared to
solutions involving EC2 instances or Lambda functions.
Authoritative Link: https://aws.amazon.com/datasync/

Why other options are less suitable:

**B.** Lambda Function: While feasible, Lambda requires custom code to handle file copying and change
detection. Managing the function, handling potential errors, and ensuring scalability adds operational
overhead. Mounting EFS to Lambda functions introduces complexity and can be less performant than a
dedicated service like DataSync.

**C.** DataSync with Full Transfer: Transferring all data on each run is inefficient and costly, especially as the
data volume grows. It violates the requirement to overwrite only changed files.

**D.** EC2 Instance: This approach requires managing an EC2 instance, configuring synchronization scripts

(potentially using rsync or similar tools), and handling scaling and fault tolerance. This is significantly more
complex and has more operational overhead than a managed service like DataSync.

---

## Question 681

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the most control over key rotation while minimizing operational
overhead. The requirement is to encrypt EBS volumes at rest using KMS, with the ability to control key
rotation.

**Option A**, using a customer-managed key (CMK), directly addresses this requirement. CMKs allow for full
control over the key lifecycle, including defining rotation policies. AWS KMS automatically rotates CMKs
created within KMS every year, unless you opt-out. This meets the need for key rotation without any manual
intervention.

**Option B**, using an AWS-managed key, also provides encryption at rest. However, AWS-managed keys do not
allow the user to control key rotation, which is a critical requirement. Although AWS will automatically rotate
these keys, you cannot manage the rotation schedule or bring your own rotation schedule.

**Option C**, importing key material into KMS, introduces significant operational overhead. While it technically
fulfills the requirement of using KMS and encryption, the management of external keys, including their
availability and security, becomes the company's responsibility. This adds unnecessary complexity compared
to using CMKs.

**Option D**, using AWS-owned keys, is not suitable because these keys are managed entirely by AWS and are
not accessible or controllable by the user. You have no control over encryption or rotation, and are also not
suitable for regulatory compliance in several cases. AWS owned keys are used by default when you encrypt
EBS volumes.

Therefore, creating a customer-managed key is the most efficient and controllable solution for encrypting
EBS volumes at rest with KMS and managing key rotation policies. It balances security requirements with
operational efficiency.
Supporting Links:
AWS KMS Key Types: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html
Encrypting EBS Volumes: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
Rotating Customer Managed Keys: https://docs.aws.amazon.com/kms/latest/developerguide/rotatekeys.html

---

## Question 682

**Answer:** **A**

**Explanation:**

The best solution is A because it combines preventative and reactive measures with minimal administrative
overhead.
First, using an IAM policy to restrict users to creating only encrypted EBS volumes enforces encryption at the
point of creation, preventing unencrypted volumes from being provisioned in the first place. This is a proactive
approach.
Second, AWS Config continuously monitors your AWS resource configurations. It can be configured to
evaluate whether EBS volumes are encrypted, identifying non-compliant resources. This provides continuous
auditing and drift detection.
Third, integrating AWS Config with AWS Systems Manager (SSM) Automation allows for automated
remediation. When AWS Config identifies a non-compliant (unencrypted) EBS volume, it can trigger an SSM
Automation runbook to encrypt the volume. This automates the remediation process, minimizing manual
intervention.

**Option B** is less efficient because it requires the creation and maintenance of Lambda functions and
EventBridge rules, adding administrative overhead. While possible, it's more complex than using AWS Config
and SSM Automation.

**Option C**, while Amazon Macie is designed for data security and data privacy service and can be used to
discover sensitive data stored in Amazon S3, relational databases, and data warehouses, including personally
identifiable information (PII), it is primarily designed for detecting and reporting on data breaches. It doesn't
directly automate remediation actions on EBS volumes in the same straightforward way as AWS Config.

**Option D**: Amazon Inspector is designed for vulnerability assessments and security hardening. While it might
be able to identify some security issues related to unencrypted volumes, its primary focus isn't on enforcing
encryption policies.

Therefore, the combination of preventative IAM policies and automated detection and remediation through
AWS Config and SSM Automation in option A provides the least administrative overhead and directly
addresses the requirement of enforcing data encryption at rest.

---

## Question 683

**Answer:** **AC**

**Explanation:**

The correct answer is A. Migrate the web tier to Amazon EC2 instances in an Auto Scaling group behind an
Application Load Balancer and C. Migrate the database to an Amazon RDS Multi-AZ deployment.

Here's a detailed justification:

**Option A**: Migrating the web tier to EC2 instances in an Auto Scaling group behind an Application Load
Balancer (ALB) provides high availability and scalability for the web tier. The Auto Scaling group ensures that
the desired number of EC2 instances is maintained, even if some instances fail. The ALB distributes incoming
traffic across the healthy EC2 instances, further enhancing availability and resilience. This addresses the
requirement to improve application resiliency after migration while minimizing changes to the application
logic itself. https://aws.amazon.com/elasticloadbalancing/application-load-balancer/ and
https://aws.amazon.com/autoscaling/

**Option C**: Migrating the MySQL database to an Amazon RDS Multi-AZ deployment significantly improves
database availability and durability. RDS Multi-AZ creates a synchronous, replicated standby instance in a
different Availability Zone. In the event of a failure of the primary instance, RDS automatically fails over to the
standby instance, minimizing downtime and improving resiliency. This meets the company's objective of
enhancing application resiliency post-migration with minimal application changes as RDS largely handles the
failover process. https://aws.amazon.com/rds/features/multi-az/

Why other options are incorrect:

**Option B**: Migrating the database to EC2 instances in an Auto Scaling group behind a Network Load Balancer
(NLB) is not the best approach for a MySQL database. While Auto Scaling can help manage EC2 instance
failures, setting up and managing database replication and failover on EC2 instances would be more complex
than using RDS Multi-AZ, requiring more changes to the application and database setup. Also, NLB is
designed for TCP traffic, not necessarily application layer awareness.

**Option D**: Migrating the web tier to an AWS Lambda function might require significant refactoring of the web
tier code, as Lambda functions are typically used for event-driven, stateless workloads. This contradicts the
requirement to minimize changes to the application during the migration.

**Option E**: Migrating the database to an Amazon DynamoDB table would necessitate substantial changes to
the application's data access layer because MySQL and DynamoDB are fundamentally different database

types (relational vs. NoSQL). This approach would violate the requirement of minimizing application changes.

---

## Question 684

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, along with why the other options are less
suitable, supported by relevant AWS concepts:
The key requirements are: (1) migration to AWS, (2) compliance preventing some apps in eu-central-1, (3)
single-digit millisecond latency, and (4) the company's proximity to eu-central-1.

**Option B**, deploying applications in AWS Local Zones by extending the VPC from eu-central-1, directly
addresses these requirements. AWS Local Zones are designed to place compute, storage, database, and
other select AWS services closer to large population, industry, and IT centers. This proximity is crucial for
achieving the single-digit millisecond latency target. Because the company cannot use eu-central-1 for all
applications, a local zone geographically separate allows for compliance without the need for global
infrastructure deployment. Extending the VPC allows for private, low-latency connectivity between resources
in the eu-central-1 region and the Local Zone.

**Option A** is incorrect because CloudFront Edge Locations are for caching content closer to users, not for
running applications that require low latency access to the primary region. Extending a VPC to a CloudFront
edge location is not possible. CloudFront does not run compute resources.

**Option C** is incorrect for the same reason as **Option A**. Regional Edge Caches are still part of the content
delivery network (CDN) infrastructure and do not provide the compute resources needed to run the
applications. They are for caching content. Extending a VPC into an edge location is incorrect and not
possible.

**Option D** is incorrect because AWS Wavelength Zones are designed for ultra-low latency applications at the
edge of the 5G network, which is more pertinent to mobile and IoT scenarios, and typically necessitates
integrating with specific telecommunications providers. The scenario doesn't mention 5G or mobile
considerations. Furthermore, the question indicates some applications cannot be run within eu-central-1, not
all. Local Zones provide a more generalized compute environment near the region.

Therefore, Local Zones are the most appropriate solution for fulfilling all the requirements of the scenario.

---

## Question 685

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct solution, along with supporting concepts and
links:
The core problem is managing unpredictable traffic from Lambda functions directly accessing an RDS
database, potentially causing connection exhaustion and impacting database performance. The key to solving
this is to decouple the Lambda functions from directly managing database connections.
Why option B is correct: Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions
inside a VPC.
RDS Proxy: RDS Proxy acts as a fully managed database proxy service. It sits between your application
(Lambda functions) and your database (RDS for PostgreSQL). It pools and shares database connections,
reducing the overhead of establishing new connections for each Lambda invocation. This is crucial for
handling unpredictable traffic spikes from Lambda, preventing the database from being overloaded. It also
automatically manages connection reuse, allowing Lambda to scale efficiently.
Deploying Lambda inside a VPC: This is necessary for Lambda functions to access private resources like an
RDS database within your AWS environment. When Lambda functions reside inside a VPC, they can leverage
security groups and network ACLs to establish secure, private connections to the RDS instance. If the
database is only accessible within the VPC (which is a common security practice), the Lambda functions must
also be within the VPC to reach it.

Why other options are incorrect:
Options A & C (RDS Custom Endpoint): RDS Custom endpoints are used for managing database instances
with customizations and advanced configurations. These are not appropriate for managing the connection
management issues associated with high concurrency from Lambda. Custom endpoints won't solve the
database connection overload problem.

**Option D** (Deploy Lambda functions outside a VPC): If the RDS instance resides within a VPC (which is
generally recommended for security), Lambda functions outside the VPC will not be able to access the
database unless configured with public accessibility, which introduces security vulnerabilities. This is
generally discouraged. Also, using an RDS proxy outside the VPC would require the database to be publicly
accessible, which is a bad security practice.

In Summary: RDS Proxy handles connection management, preventing database overload, and deploying
Lambda inside the VPC ensures secure, private access to the database. The combination addresses both
requirements effectively.

---

## Question 686

**Answer:** **C**

**Explanation:**

The correct answer is C: Create a transit gateway. Create VPC attachments for the VPC connections. Create
VPN attachments for the on-premises connections. This solution offers the least administrative overhead and
greatest scalability for connecting multiple VPCs and on-premises locations.

Here's why:
Transit Gateway Simplifies Network Management: AWS Transit Gateway acts as a central hub, simplifying
the routing between multiple VPCs and on-premises networks. Instead of managing numerous point-to-point
connections (like VPC peering), you manage connections to the Transit Gateway.
Scalability: As the number of VPCs and on-premises locations grows, the Transit Gateway scales easily. You
simply create new attachments without having to reconfigure existing connections. This eliminates the
complexity of managing a mesh network created by VPC peering or VPN connections.
Centralized Routing Policies: Transit Gateway provides a central place to manage routing policies. You can
control the traffic flow between different VPCs and on-premises locations using route tables associated with
the Transit Gateway.
VPN Attachments: It supports VPN attachments for on-premises connections, integrating seamlessly with
existing VPN infrastructure.

Let's analyze why the other options are not optimal:

**A:** VPC Peering and VPNs: This solution is not scalable and involves high administrative overhead. VPC
peering is a one-to-one connection, meaning you'd need numerous peering connections as your VPCs
increase. Managing all these connections becomes complex and time-consuming.

**B:** EC2 VPN Instance: While it's a potential solution, it introduces a single point of failure. The EC2 instance
becomes a bottleneck. It also requires more hands-on management for patching, scaling, and high availability,
adding to the administrative overhead.

**D:** Direct Connect and VPC Peering: Direct Connect provides a dedicated network connection from onpremises to AWS, but using a central VPC and peering to others becomes complex as the number of VPCs
grows. Similar to option A, it results in a mesh network of peering connections, which is difficult to manage.
Direct Connect is also more expensive and is more suitable for continuous large data transfers. For this
scenario where a company will increase the number of accounts and VPCs during the next year, transit
gateway will provide a scalable solution.

In summary, Transit Gateway centralizes network management, offers scalability, and integrates well with
both VPCs and VPN connections, making it the most suitable solution for the company's needs.
Supporting Documentation:
AWS Transit Gateway: https://aws.amazon.com/transit-gateway/
AWS VPN Connections: https://aws.amazon.com/vpn/
AWS Direct Connect: https://aws.amazon.com/directconnect/

---

## Question 687

**Answer:** **BD**

**Explanation:**

The correct answer is BD because it leverages the most suitable managed service for time-series forecasting
when the company lacks ML expertise. Here's a detailed breakdown:

**B.** Use Amazon SageMaker to train a model by using the historical data in the S3 bucket. SageMaker offers
managed model training capabilities. It allows users to bring their data stored in S3 and select a suitable
algorithm or even implement their own. SageMaker handles the infrastructure provisioning, scaling, and
optimization for training the model. This is a valid step to create a prediction model using the historical data.

**D.** Configure an AWS Lambda function with a function URL that uses an Amazon Forecast predictor to
create a prediction based on the inputs. Amazon Forecast is a managed service specifically designed for

time-series forecasting. Once the model is trained in Forecast, you can trigger it using a Lambda function.
Function URLs offer a simple way to invoke your Lambda functions over HTTP(S), meaning you can easily
integrate Forecast predictions into your applications.

Why other options are incorrect:

**A.** Deploy an Amazon SageMaker model. Create a SageMaker endpoint for inference. While SageMaker is a
valuable tool, this option skips the crucial training stage, which the scenario requires. Deploying a model
before training is not possible or makes sense.

**C.** Configure an AWS Lambda function with a function URL that uses Amazon SageMaker endpoints to
create predictions based on the inputs. This option is viable, but it should follow training the model first. In
addition, using Amazon Forecast, which the scenario is looking for, would be a much simpler and fully
managed approach.

**E.** Train an Amazon Forecast predictor by using the historical data in the S3 bucket. While this option is valid
as the data is used for training a model, it is paired with choice A which isn't valid.
Amazon Forecast is the superior choice compared to SageMaker in this particular scenario because the
company explicitly states that it has no ML experience and wants to use a managed service. Forecast
abstracts away the complexities of choosing algorithms, feature engineering, and model tuning, allowing the
company to focus on their manufacturing predictions.
Supporting Links:
Amazon SageMaker: https://aws.amazon.com/sagemaker/
Amazon Forecast: https://aws.amazon.com/forecast/
AWS Lambda Function URLs: https://aws.amazon.com/blogs/compute/introducing-aws-lambda-functionurls-built-in-https-endpoints-for-single-function-microservices/

---

## Question 688

**Answer:** **C**

**Explanation:**

The correct answer is C because it leverages AWS IAM Identity Center's permission sets for centralized
permission management, minimizing operational overhead. Here's a detailed justification:
Centralized Management with IAM Identity Center: AWS IAM Identity Center (successor to AWS Single
Sign-On) is designed for managing user access across multiple AWS accounts within an AWS Organization.
This centralizes identity and access management, reducing the complexity of managing individual IAM users
in each account.
Permission Sets for Role-Based Access: Permission sets define a collection of IAM policies that grant
specific permissions. By creating developer and administrator permission sets, the company can define
granular permissions for each role.
Group-Based Assignment: Assigning permission sets to IAM Identity Center groups (developer and
administrator) simplifies user management. When a new user joins a team, they are added to the appropriate
group, and they automatically inherit the corresponding permissions. This approach avoids managing
permissions on a per-user basis.
IAM Policies within Permission Sets: Permission sets contain IAM policies, which are JSON documents that
define permissions. This enables administrators to define precise access controls for each team.
Least Operational Overhead: This solution offers the least operational overhead because new users are
added to the appropriate group, rather than creating new policies/users for each account individually. This
method significantly reduces the manual work required to manage permissions, especially as the number of
users and accounts grows.
AWS Control Tower Integration: The question mentions AWS Control Tower, which works well with IAM
Identity Center to enforce governance and compliance across AWS accounts. Control Tower helps establish
guardrails and policies, while IAM Identity Center manages user access.
Incorrect Alternatives:
A & B: Creating individual users in IAM Identity Center for each account is not scalable or optimal, as it would
create an admin overhead, and defeat the goal of a single managed solution.

**D:** Assigning different permissions to different accounts for the same user is a high-overhead solution and a
cumbersome method.
Alternatives B and D are not optimal because they do not correctly apply IAM policies to the appropriate
groups.
Supporting Documentation:
AWS IAM Identity Center (successor to AWS Single Sign-On) Documentation
AWS Control Tower Documentation
IAM Policies

---

## Question 689

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages AWS Config, a service specifically designed for evaluating the
configuration of AWS resources. AWS Config rules can automatically check whether EBS volumes are
encrypted and flag those that are not, ensuring continuous compliance with the desired encryption strategy.
This automated approach minimizes both configuration effort and ongoing operational costs. **Option A** and B
involve custom scripting and scheduling (Lambda/Fargate), which introduce unnecessary complexity and
management overhead compared to using AWS Config's built-in capabilities. While these options are
technically feasible, they don't represent the most cost-effective and streamlined solution. **Option C**, relying
on IAM policies and tagging, only prevents unencrypted volumes from being created if the policies are
correctly configured. It also relies on Cost Explorer which is not designed to alert on configuration
compliance. It doesn't automatically detect or flag existing unencrypted volumes, nor does it provide
continuous monitoring of encryption status. Thus, AWS Config provides the most suitable solution for
standardizing and enforcing EBS volume encryption with minimal operational overhead.
Supporting documentation:
AWS Config: https://aws.amazon.com/config/
AWS Config managed rules for EBS encryption:
https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html

---

## Question 690

**Answer:** **CD**

**Explanation:**

The question focuses on improving the throughput of data uploads from on-premises to S3 and downloads
from S3 to EC2 instances for large files, especially considering EC2 Spot Instances and transcoding needs.

**Option C**, using S3 multipart uploads, directly addresses the need for increased throughput when uploading
large files to S3. Multipart upload allows you to upload a single object as a set of parts. Each part can be
uploaded independently and in parallel, improving upload speed and resilience to network interruptions.
[https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html]

**Option D**, fetching multiple byte-ranges of an object in parallel, improves the download throughput from S3 to
the EC2 instances. By requesting different byte ranges concurrently, the EC2 instances can assemble the

complete file much faster than downloading it sequentially. This is particularly beneficial given the
transcoding workload on the EC2 Spot Instances.
[https://docs.aws.amazon.com/AmazonS3/latest/userguide/range-get-http.html]

**Option A**, using S3 bucket access points, primarily controls access and permissions, not throughput. While
access points can simplify management, they don't inherently boost upload or download speeds.

**Option B**, uploading files into multiple S3 buckets, might offer some partitioning benefits, but doesn't directly
address the individual large file's upload/download speed like multipart upload and byte-range fetching.

**Option E**, adding a random prefix to each object, is primarily used to avoid hot partitions or uneven distribution
of keys within S3. This helps improve performance and scalability at the S3 level, especially with a high
volume of uploads, but it's not the primary solution for optimizing the throughput of individual file transfers. It
mainly helps prevent throttling at the partition level within S3.

Therefore, options C and D directly enhance the throughput of large file uploads to S3 and downloads to EC2,
meeting the company's requirements. Multipart upload accelerates uploads, and parallel byte-range fetching
accelerates downloads.

---

## Question 691

**Answer:** **BE**

**Explanation:**

The requirement for strong consistency in returning new content immediately after changes rules out
eventually consistent solutions like Amazon S3.

**B.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the
individual EC2 instances. This is a suitable option because Amazon EFS provides a shared file system that
can be mounted concurrently by multiple EC2 instances across different Availability Zones. EFS offers strong
consistency for file system metadata operations (like renaming files) and close-to-open consistency for data
reads and writes. This ensures that once a write operation completes, subsequent reads from any EC2
instance will reflect the new content, fulfilling the strong consistency requirement.
https://aws.amazon.com/efs/

**E.** Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control header to
no-cache. Use Amazon CloudFront to deliver the content. While S3 is great for storage, it's only eventually

consistent. However, using CloudFront with Cache-Control: no-cache helps mitigate this. Cache-Control: nocache instructs CloudFront to always validate with the origin (S3) before serving content. This effectively
forces CloudFront to retrieve the latest version from S3 frequently, thus satisfying the requirement for
returning the new content as soon as the changes occur. Despite the presence of a cache, using no-cache
transforms it into a validation proxy rather than a classic cache where stale content could be served. This
ensures that updates are swiftly reflected to users.
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html
Why other options are not suitable:

**A.** Use AWS Storage Gateway Volume Gateway Internet Small Computer Systems Interface (iSCSI) block
storage that is mounted to the individual EC2 instances. Volume Gateway doesn't inherently provide shared
access between multiple EC2 instances across different Availability Zones in a way that guarantees
consistency for rapidly changing web content without complex application-level coordination and
management.

**C.** Create a shared Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the
individual EC2 instances. EBS volumes cannot be simultaneously attached to multiple EC2 instances except
in certain limited scenarios with specific Nitro-based instances and clustered applications. This option is
therefore fundamentally unsuitable for a web application deployed across multiple Availability Zones and
relying on Auto Scaling.

**D.** Use AWS DataSync to perform continuous synchronization of data between EC2 hosts in the Auto
Scaling group. While DataSync excels at data transfer, it does not provide the strong consistency needed.
DataSync performs asynchronous transfers, meaning changes will not be immediately reflected across all
instances. The application would experience inconsistencies during the synchronization window. Furthermore,
using DataSync between multiple EC2 instances in an Auto Scaling group is an anti-pattern and extremely
complex to manage reliably.

---

## Question 692

**Answer:** **B**

**Explanation:**

The correct answer is B: Create an A record with a geolocation policy.

Here's why:
Geolocation Routing: Geolocation routing in Route 53 directs traffic based on the geographic location of the
user making the request. This means users are sent to the AWS Region that is geographically closest to them.
This minimizes latency, providing a faster and more responsive experience for the user. This directly
addresses the "MOST high-performing experience" requirement.
Latency Routing (**Option A**): While latency routing also aims to minimize latency, it relies on measuring the
latency from Route 53's DNS servers to the application endpoints. This measurement might not perfectly

reflect the actual latency experienced by end users, especially users far from the DNS servers. Geolocation is
more accurate.
CNAME Records (Options C & D): CNAME records map a domain name to another domain name, not directly
to IP addresses. Using CNAME records would add an extra DNS lookup, which could increase latency. A
records map a domain name directly to an IP address.
Failover Policy (**Option C**): A failover policy is primarily used for high availability and disaster recovery, not for
optimizing performance based on location. It directs traffic to a secondary region only when the primary
region is unavailable.
Geoproximity Routing (**Option D**): Geoproximity routing routes traffic based on geographic proximity with the
option of biasing traffic to specific locations. While useful, it's more complex to configure and may not provide
as consistent a performance improvement as simple geolocation-based routing when the goal is merely to
direct users to the nearest region. It also typically requires Route 53 Traffic Flow which adds extra cost.

In summary, geolocation routing provides the most direct and effective way to minimize latency and improve
performance for users across multiple AWS Regions, aligning perfectly with the prompt's requirement for the
"MOST high-performing experience." It maps user location to the closest AWS region, unlike latency routing
that depends on less precise measurements, and avoids the additional DNS lookup associated with CNAME
records.
Supporting Documentation:
Route 53 Geolocation Routing: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routingpolicy.html#routing-policy-geo
Route 53 Routing Policies: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html

---

## Question 693

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the most appropriate solution:
The core requirements are high availability and eventual consistency for the application and its database, all
while minimizing operational overhead. The existing architecture has several limitations: running in a single
Availability Zone makes it vulnerable to AZ failures, and relying on an embedded NoSQL database within EC2

instances complicates replication and scaling, increasing operational burden.

**Option D** addresses these issues directly. Spanning the EC2 Auto Scaling group across three Availability
Zones (AZs) inherently improves high availability. If one AZ experiences an outage, the application continues
to run in the remaining AZs. [https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scalingavailability-zones.html]
Migrating the embedded NoSQL database to Amazon DynamoDB fulfills the high availability and eventual
consistency requirements while significantly reducing operational overhead. DynamoDB is a fully managed
NoSQL database service that automatically handles replication, scaling, and patching. This eliminates the
need for manual database administration, patching, and scaling efforts. DynamoDB also offers built-in
features for high availability and eventual consistency, aligning perfectly with the requirements.
[https://aws.amazon.com/dynamodb/] AWS DMS can efficiently handle the database migration.

**Option A** is incorrect because Network Load Balancers do not offer significant advantages over Application
Load Balancers in this specific scenario for web applications and do not address the database's availability or
scalability issues. It maintains the complexities of managing an embedded NoSQL database.

**Option B** suffers from the same database management issue as **Option A**, while also utilizing Network Load
Balancers which aren't optimal for this specific web application. It solves the DB portion but not the AZ part.

**Option C** addresses the Availability Zone issue, but keeps the complexity of managing the embedded NoSQL
database. This significantly increases the operational overhead. Maintaining replication within the EC2
instances requires manual configuration, monitoring, and troubleshooting. Therefore, only **Option D** addresses
both the availability of the application (through multi-AZ deployment) and the availability and manageability
of the database (through DynamoDB), while minimizing operational overhead through a fully managed
database service.

---

## Question 694

**Answer:** **B**

**Explanation:**

The correct solution leverages Amazon ElastiCache for Redis to ensure highly available shopping cart data
preservation. Here's why:

**Option A** is incorrect because sticky sessions provided by an Application Load Balancer only ensure that a
user's requests are routed to the same backend server. While it can improve performance by keeping session
data in memory on that server, it doesn't guarantee data persistence if that server fails. Session affinity is not

a reliable method for highly available data storage.

**Option C** is incorrect because while OpenSearch Service is suitable for searching and analyzing large volumes
of data, it's not the optimal choice for caching frequently accessed data like shopping carts. OpenSearch is
not designed for low-latency, key-value retrieval in the same way that a caching service like Redis is.
Additionally, using OpenSearch for session state management is not a standard practice.

**Option D** is not ideal as EC2 instances with EBS volumes lack the high availability and scalability required for
shopping cart data. Relying on a single EC2 instance creates a single point of failure. Automated snapshots
are a good backup strategy, but they don't provide real-time data availability during instance failures.
Recovery from snapshots also involves downtime.

**Option B** utilizes Amazon ElastiCache for Redis, a highly available, in-memory data store, is ideal for caching
shopping cart data and user session data. Redis offers very low latency read and write operations, satisfying
the requirement for low latency. Crucially, ElastiCache provides managed Redis clusters with automatic
failover, ensuring high availability. If a Redis node fails, ElastiCache automatically promotes a replica to the
primary role, minimizing downtime. By caching catalog data from DynamoDB in ElastiCache, the solution also
improves the performance of catalog access. Furthermore, Redis's persistence options (RDB snapshots and
AOF) can provide durability for the shopping cart data, although, for shopping carts, eventual consistency can
usually be tolerated in the event of a loss in the cache.
Relevant documentation:
Amazon ElastiCache for Redis: https://aws.amazon.com/elasticache/redis/
Redis Data Persistence: https://redis.io/docs/management/persistence/
Application Load Balancer sticky sessions:
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html

---

## Question 695

**Answer:** **B**

**Explanation:**

**Option B** is the correct solution because it directly addresses the observability requirements for a
microservices application deployed on Amazon EKS.
Amazon CloudWatch Container Insights: This service is specifically designed to collect, aggregate, and
summarize container logs and metrics from containerized applications and microservices. It provides insights
into the performance of EKS clusters, including CPU utilization, memory usage, network traffic, and disk I/O at
the cluster, node, pod, and container levels. This detailed visibility is crucial for identifying performance
bottlenecks within the EKS environment.

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights.html
AWS X-Ray: X-Ray is a distributed tracing system that helps developers analyze and debug production,
distributed applications, such as those built using a microservices architecture. It tracks requests as they
travel through the different microservices, providing a trace map that shows the latency and dependencies
between services. This allows developers to pinpoint which microservice is causing performance issues or
errors. https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html
Together, CloudWatch Container Insights and X-Ray offer a comprehensive observability solution. Container
Insights monitors the performance of the EKS infrastructure, while X-Ray traces requests across
microservices, enabling the company to identify and resolve performance issues in their microservices-based
application.
Let's examine why the other options are incorrect:

**Option A**: ElastiCache is a caching service that can improve application performance by reducing database
load, but it does not provide observability into the microservices themselves. Caching can be part of an overall
solution, but doesn't fulfill the observability requirement.

**Option C**: CloudTrail tracks API calls made to AWS services. While useful for auditing and security, it doesn't
provide insight into the performance or interactions of the microservices themselves. QuickSight can visualize
data, but it relies on data sources; CloudTrail isn't the right source for application performance.

**Option D**: Trusted Advisor provides recommendations on cost optimization, security, fault tolerance, and
performance, but it doesn't offer detailed observability data into the internal workings of the microservices
application. It's a high-level check, not a monitoring tool.

---

## Question 696

**Answer:** **C**

**Explanation:**

The correct solution is C, which involves using separate AWS KMS keys for each customer and controlling
access through KMS key policies. Let's break down why:

Data Encryption at Rest: The requirement of data encryption at rest is crucial. Both client-side and serverside encryption address this, but server-side encryption is generally preferred for S3 as it simplifies key
management on the client side. AWS KMS (Key Management Service) is the go-to service for managing
encryption keys within AWS.
Customer-Specific Keys: Having a dedicated KMS key per customer ensures strong isolation. If one key is
compromised (theoretically), it only affects data encrypted with that specific key, limiting the blast radius.
This approach aligns well with strong regulatory and security requirements.
Access Control: Each customer should only be able to access their data. This requires fine-grained access
control at the key level. This is precisely what KMS key policies are for.
Key Policy vs. Bucket Policy: S3 bucket policies can control access to objects within the bucket, but they
cannot control access to the KMS key itself. To prevent unauthorized decryption of the data, you need to
control who can use the KMS key to decrypt the data. Key policies are specifically designed to manage the
use of the KMS key itself, including controlling who can encrypt or decrypt data with it.
Denying Access to Company Employees: The key policies can explicitly deny decryption permissions to
company employees. This is a critical aspect of the solution to meet the requirement that company employees
must not be able to access customer data.
Using IAM Roles: The solution mentions using IAM roles that the customers provide. Customers can create an
IAM role within their AWS account and grant it permission to decrypt the data using the appropriate KMS key
in the company's account. This allows for secure cross-account access.

Why other options are incorrect:
Options A and D (Using ACM Certificates): AWS Certificate Manager (ACM) is used for managing SSL/TLS
certificates for securing network traffic (HTTPS). It's not designed for encrypting data at rest. ACM
certificates are for encryption in transit, not at rest. Although you could technically perform client-side
encryption using the certificate, it's not the intended use case, and KMS is a more appropriate solution.
Additionally, ACM policies don't offer the same level of granular control over decryption as KMS key policies.

**Option B** (Using S3 Bucket Policy): While S3 bucket policies are important for overall bucket access control,
they can't directly control access to the KMS key used for server-side encryption. The bucket policy can
define who can access the encrypted objects, but the KMS key policy determines who can decrypt those
objects.

---

## Question 697

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, and why the other options are incorrect:
Justification for **Option B** (Correct)

**Option B**, provisioning an internet-facing Application Load Balancer (ALB) in a public subnet, and associating
the EC2 instance in the private subnet as a target, is the standard and recommended approach for exposing
web applications securely and scalably in AWS.

1. Public Subnet ALB: An ALB placed in a public subnet is reachable from the internet. It receives
incoming HTTP/HTTPS requests on ports 80 and 443.

2. Private Subnet EC2: The EC2 instance running the web server resides securely in a private subnet,
shielded from direct internet access. This aligns with the security mandate.

3. ALB Target Group: The EC2 instance is registered as a target within a target group associated with
the ALB. The ALB forwards requests to the EC2 instance in the private subnet.

4. DNS Resolution: The DNS record for the website resolves to the ALB's DNS name. Therefore, all
internet traffic directed to the website first goes to the ALB.

5. Security Benefits: This architecture provides enhanced security by hiding the EC2 instance behind
the ALB. The ALB can handle SSL/TLS termination, protect against common web exploits (e.g., using
AWS WAF), and provide health checks.

6. Scalability and Availability: ALBs are highly scalable and can distribute traffic across multiple EC2
instances in the private subnet, improving application availability and performance. The ALB can
automatically scale resources based on traffic demand.

Why other options are incorrect:

**Option A**: While Auto Scaling helps with scaling and availability, it doesn't inherently solve the issue of
exposing the web server to the internet from a private subnet. DNS resolution to an Auto Scaling group
identifier is not standard practice and doesn't provide direct internet access to the instances.

**Option C**: NAT Gateways allow instances in a private subnet to initiate outbound traffic to the internet (e.g., to
download updates or access external services). However, they do not allow unsolicited inbound traffic from
the internet to reach the instances. A NAT Gateway is for outbound communication only.

**Option D**: Even if the security group allows inbound HTTP/HTTPS traffic, the EC2 instance is in a private
subnet. Private subnets by definition do not have direct internet connectivity. A DNS record pointing to the
EC2 instance's public IP address (if it had one, which it ideally shouldn't in this scenario) would not work
because the instance is not directly accessible from the internet.

---

## Question 698

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer and why the other options are not
suitable, focusing on minimizing operational overhead, high availability, fault tolerance, and shared access
within an EKS cluster using Fargate.

**Option B** (Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a
StorageClass object on an EKS cluster. Use the same file system for all containers.) is the best solution
because it directly addresses the requirements with the least operational overhead. Amazon EFS is a fully
managed, scalable, and highly available network file system ideal for sharing data between multiple
containers in an EKS cluster. Registering the EFS file system with a StorageClass object simplifies
provisioning and dynamic mounting of the file system to pods within the EKS cluster. Since EFS is a managed
service, AWS handles the underlying infrastructure, including backups, replication, and scaling, minimizing
operational tasks for the company. EFS is inherently designed for shared access, high availability across
multiple Availability Zones, and durability. This eliminates the need for manual configuration of replication or
synchronization mechanisms. Fargate doesn't manage underlying EC2 instances; therefore, storage solutions
need to be network-based for them to attach.

**Option A** (Create Amazon Elastic Block Store (Amazon EBS) volumes in the same Availability Zones where
EKS worker nodes are placed. Register the volumes in a StorageClass object on an EKS cluster. Use EBS
Multi-Attach to share the data between containers.) is incorrect. While EBS Multi-Attach allows a single EBS
volume to be attached to multiple instances, its application with Fargate presents challenges. Fargate
manages the underlying compute infrastructure abstractly, making AZ placement of EBS volumes based on
Fargate nodes less predictable and manageable. Also, EBS Multi-Attach is more complex to set up than EFS
and might not perfectly align with the shared filesystem needs of multiple containers. The availability zones
of the Fargate compute cannot be chosen.

**Option C** (Create an Amazon Elastic Block Store (Amazon EBS) volume. Register the volume in a StorageClass
object on an EKS cluster. Use the same volume for all containers.) is incorrect. EBS volumes are block storage
and are not inherently designed for shared access between multiple instances or containers concurrently.
Attempting to share a single EBS volume directly among multiple containers typically leads to data corruption
and is not a recommended practice without advanced clustering or locking mechanisms, which increases
operational complexity. Moreover, EBS volumes are zonal resources, so they would require additional steps
for high availability and fault tolerance. Fargate compute nodes live independently across different
Availability Zones, making this solution prone to errors due to zonal affinity.

**Option D** (Create Amazon Elastic File System (Amazon EFS) file systems in the same Availability Zones where
EKS worker nodes are placed. Register the file systems in a StorageClass object on an EKS cluster. Create an
AWS Lambda function to synchronize the data between file systems.) is incorrect because it introduces
unnecessary complexity. Creating multiple EFS file systems and synchronizing data between them using a
Lambda function adds significant operational overhead. The Lambda function requires maintenance,
monitoring, and configuration, increasing the management burden. A single EFS file system is already highly
available and durable, making data synchronization redundant and less efficient. Fargate doesn't grant you
control over underlying Availability Zone placements of compute nodes; therefore, choosing Availability
Zones for different EFS instances is problematic.

In summary, EFS provides a native, highly available, and shared filesystem solution that tightly integrates with
EKS and Fargate, requiring minimal configuration and management. It aligns perfectly with the requirement
for data persistence and shared access with the least operational overhead.

---

## Question 699

**Answer:** **B**

**Explanation:**

Here's a breakdown of why option B is the correct solution and why the others are not:
The requirement specifies a fully managed service where the company doesn't want to manage servers or
storage infrastructure. This immediately points us toward using a serverless container orchestration solution
with a fully managed storage service.

**Option B**: Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an
Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume
mounted in the containers.

Amazon ECS with Fargate: Fargate is a serverless compute engine for ECS that eliminates the need to
manage EC2 instances. It's a fully managed solution.
Amazon EFS: EFS is a fully managed, scalable, elastic network file system. It can be mounted across multiple
EC2 instances and, importantly, with Fargate tasks, providing persistent storage accessible to the containers
without requiring server or storage management. This addresses the need for persistent data storage.
Mounting EFS Volume: The containers can be configured to mount the EFS volume, allowing them to read
and write persistent data.

Why the other options are incorrect:

**Option A**: Amazon EKS with self-managed nodes and EBS: EKS can be used for container orchestration, but
self-managed nodes involve managing EC2 instances. EBS is also tied to a specific EC2 instance, making it
less suitable for shared, persistent storage in a dynamic container environment. This violates the "fully
managed" requirement because you must maintain the underlying EC2 instances.

**Option C**: Amazon ECS with Fargate and S3: While Fargate is suitable, S3 is not designed as a file system for
direct mounting into containers and accessing files like a typical file system. S3 is object storage, and you'd
need additional layers or custom code to treat it as a persistent volume in this scenario. This adds
unnecessary complexity and potentially impacts application performance compared to EFS. S3 is also
optimized for storing large amounts of data that is typically not frequently modified within a running
application.

**Option D**: Amazon ECS with EC2 launch type and EFS: The EC2 launch type requires you to manage the EC2
instances, directly contradicting the requirement for a fully managed service.

In summary, the correct answer provides a completely serverless and fully managed approach to container
orchestration and persistent storage, meeting all the stated requirements.
Supporting Links:
AWS Fargate: https://aws.amazon.com/fargate/
Amazon EFS: https://aws.amazon.com/efs/
ECS Storage Configuration: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-storageconfiguration.html

---

## Question 700

**Answer:** **AC**

**Explanation:**

Here's a breakdown of why options A and C are correct and why the others are not:

**A.** Create internal Network Load Balancers in front of the application in each Region. This is a good starting
point. Network Load Balancers (NLBs) are designed for handling TCP and UDP traffic efficiently and at high

scale. Because the question states the application is internet-facing, it may be confusing to suggest internal
NLBs. However, the NLBs are a necessary component of the overall solution because they manage traffic
distribution within each region. They distribute traffic across multiple instances of the application for high
availability within that region.

**C.** Create an AWS Global Accelerator accelerator to route traffic to the load balancers in each Region. AWS
Global Accelerator is designed to improve the availability and performance of applications for global users. It
uses the AWS global network to route user traffic to the optimal endpoint based on geographic location,
network health, and application health. Using Global Accelerator in front of the NLBs in each region ensures
users are directed to the closest and healthiest endpoint, reducing latency and improving the overall user
experience. Global Accelerator works with both TCP and UDP.
Let's analyze why the other options are incorrect:

**B.** Create external Application Load Balancers in front of the application in each Region. Application Load
Balancers (ALBs) primarily handle HTTP/HTTPS traffic. While ALBs could handle some of the traffic if the
gaming application also has a web-based component, they do not support UDP, which is a key requirement.

Therefore, ALBs alone are insufficient.

**D.** Configure Amazon Route 53 to use a geolocation routing policy to distribute the traffic. While Route 53's
geolocation routing is useful for directing traffic based on user location, it relies on DNS resolution. This
makes it slower to react to changes in network conditions or application health than AWS Global Accelerator.
It doesn't offer the same performance advantages. Route 53 also involves client-side DNS caching, which can
delay failover.

**E.** Configure Amazon CloudFront to handle the traffic and route requests to the application in each Region.
Amazon CloudFront is a content delivery network (CDN) optimized for caching and delivering static and
dynamic content. While CloudFront can accelerate web applications, it is not primarily designed for handling
real-time, low-latency TCP and UDP traffic like a gaming application. While CloudFront can now support UDP
through WebSockets, it doesn't provide the global routing and optimization benefits that Global Accelerator
offers. Using CloudFront also might not fit with the architectural design of this application as other aspects of
this question point towards Global Accelerator.

In summary, the combination of internal NLBs for regional high availability and AWS Global Accelerator for
global routing and low latency is the best solution.
Relevant Documentation:
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
Network Load Balancer: https://aws.amazon.com/elasticloadbalancing/network-load-balancer/
Amazon Route 53: https://aws.amazon.com/route53/
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/

---

# Quick Answer Sheet

Question 651: C
Question 652: B
Question 653: B
Question 654: D
Question 655: CE
Question 656: D
Question 657: B
Question 658: AE
Question 659: C
Question 660: D
Question 661: B
Question 662: D
Question 663: D
Question 664: D
Question 665: B
Question 666: BE
Question 667: C
Question 668: D
Question 669: C
Question 670: B
Question 671: B
Question 672: B
Question 673: B
Question 674: BD
Question 675: D
Question 676: B
Question 677: A
Question 678: B
Question 679: ACE
Question 680: A
Question 681: A
Question 682: A
Question 683: AC
Question 684: B
Question 685: B
Question 686: C
Question 687: BD
Question 688: C
Question 689: D
Question 690: CD
Question 691: BE
Question 692: B
Question 693: D
Question 694: B
Question 695: B
Question 696: C
Question 697: B
Question 698: B
Question 699: B
Question 700: AC
