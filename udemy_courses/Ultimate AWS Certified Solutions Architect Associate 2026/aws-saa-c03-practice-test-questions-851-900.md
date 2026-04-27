# AWS SAA-C03 Practice Test: Questions 851-900

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 851

A large company wants to provide its globally located developers separate, limited size, managed PostgreSQL
databases for development purposes. The databases will be low volume. The developers need the databases only
when they are actively working.
Which solution will meet these requirements MOST cost-effectively?

**A.** Give the developers the ability to launch separate Amazon Aurora instances. Set up a process to shut down
Aurora instances at the end of the workday and to start Aurora instances at the beginning of the next workday.

**B.** Develop an AWS Service Catalog product that enforces size restrictions for launching Amazon Aurora
instances. Give the developers access to launch the product when they need a development database.

**C.** Create an Amazon Aurora Serverless cluster. Develop an AWS Service Catalog product to launch databases
in the cluster with the default capacity settings. Grant the developers access to the product.

**D.** Monitor AWS Trusted Advisor checks for idle Amazon RDS databases. Create a process to terminate
identified idle RDS databases.

---

## Question 852

A company is building a web application that serves a content management system. The content management
system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an
Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and
other website assets in the content management system.
A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content
with the least possible lag time.
Which solution meets these requirements?

**A.** Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2
instance that was launched most recently. Configure the ALB to make changes to the website assets only in the
newest EC2 instance.

**B.** Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2
instance to mount the EFS file system locally. Configure the website hosting application to reference the
website assets that are stored in the EFS file system.

**C.** Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website
assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync
command once each hour to keep files up to date.

**D.** Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS
snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting
application to reference the website assets that are stored in the secondary EBS volume.

---

## Question 853

A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load
Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to
automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company
already has added AWS WAF to its architecture.
What should a solutions architect do next to protect against threats?

**A.** Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge to filter for GuardDuty
findings and to invoke an AWS Lambda function to adjust the AWS WAF rules.

**B.** Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall
Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.

**C.** Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network
ACL to limit access to the web application.

**D.** Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL
to limit access to the web application.

---

## Question 854

A company is planning to run a group of Amazon EC2 instances that connect to an Amazon Aurora database. The
company has built an AWS CloudFormation template to deploy the EC2 instances and the Aurora DB cluster. The
company wants to allow the instances to authenticate to the database in a secure way. The company does not
want to maintain static database credentials.
Which solution meets these requirements with the LEAST operational effort?

**A.** Create a database user with a user name and password. Add parameters for the database user name and
password to the CloudFormation template. Pass the parameters to the EC2 instances when the instances are
launched.

**B.** Create a database user with a user name and password. Store the user name and password in AWS Systems
Manager Parameter Store. Configure the EC2 instances to retrieve the database credentials from Parameter
Store.

**C.** Configure the DB cluster to use IAM database authentication. Create a database user to use with IAM
authentication. Associate a role with the EC2 instances to allow applications on the instances to access the
database.

**D.** Configure the DB cluster to use IAM database authentication with an IAM user. Create a database user that
has a name that matches the IAM user. Associate the IAM user with the EC2 instances to allow applications on
the instances to access the database.

---

## Question 855

A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does
not want to use the default domain name for the distribution. Instead, the company wants to use a different domain
name for the distribution.
Which solution will deploy the certificate without incurring any additional costs?

**A.** Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.

**B.** Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.

**C.** Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.

**D.** Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.

---

## Question 856

A company creates operations data and stores the data in an Amazon S3 bucket. For the company's annual audit,
an external consultant needs to access an annual report that is stored in the S3 bucket. The external consultant
needs to access the report for 7 days.
The company must implement a solution to allow the external consultant access to only the report.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the
new S3 bucket. Share the S3 website URL with the external consultant.

**B.** Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external
consultant completes the audit.

**C.** Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external
consultant. Revoke the access keys after 7 days.

**D.** Generate a presigned URL that has the required access to the location of the report on the S3 bucket. Share
the presigned URL with the external consultant.

---

## Question 857

A company plans to run a high performance computing (HPC) workload on Amazon EC2 Instances. The workload
requires low-latency network performance and high network throughput with tightly coupled node-to-node
communication.
Which solution will meet these requirements?

**A.** Configure the EC2 instances to be part of a cluster placement group.

**B.** Launch the EC2 instances with Dedicated Instance tenancy.

**C.** Launch the EC2 instances as Spot Instances.

**D.** Configure an On-Demand Capacity Reservation when the EC2 instances are launched.

---

## Question 858

A company has primary and secondary data centers that are 500 miles (804.7 km) apart and interconnected with
high-speed fiber-optic cable. The company needs a highly available and secure network connection between its
data centers and a VPC on AWS for a mission-critical workload. A solutions architect must choose a connection
solution that provides maximum resiliency.
Which solution meets these requirements?

**A.** Two AWS Direct Connect connections from the primary data center terminating at two Direct Connect
locations on two separate devices

**B.** A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at
one Direct Connect location on the same device

**C.** Two AWS Direct Connect connections from each of the primary and secondary data centers terminating at
two Direct Connect locations on two separate devices

**D.** A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at
one Direct Connect location on two separate devices

---

## Question 859

A company runs several Amazon RDS for Oracle On-Demand DB instances that have high utilization. The RDS DB
instances run in member accounts that are in an organization in AWS Organizations.
The company's finance team has access to the organization's management account and member accounts. The
finance team wants to find ways to optimize costs by using AWS Trusted Advisor.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Use the Trusted Advisor recommendations in the management account.

**B.** Use the Trusted Advisor recommendations in the member accounts where the RDS DB instances are running.

**C.** Review the Trusted Advisor checks for Amazon RDS Reserved Instance Optimization.

**D.** Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.

**E.** Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute
Optimizer.

---

## Question 860

A solutions architect is creating an application. The application will run on Amazon EC2 instances in private
subnets across multiple Availability Zones in a VPC. The EC2 instances will frequently access large files that
contain confidential information. These files are stored in Amazon S3 buckets for processing. The solutions
architect must optimize the network architecture to minimize data transfer costs.
What should the solutions architect do to meet these requirements?

**A.** Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry
for the gateway endpoint.

**B.** Create a single NAT gateway in a public subnet. In the route tables for the private subnets, add a default
route that points to the NAT gateway.

**C.** Create an AWS PrivateLink interface endpoint for Amazon S3 in the VPIn the route tables for the private
subnets, add an entry for the interface endpoint.

**D.** Create one NAT gateway for each Availability Zone in public subnets. In each of the route tables for the
private subnets, add a default route that points to the NAT gateway in the same Availability Zone.

---

## Question 861

A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports
from a client-facing application, which causes a high volume of write operations. The company is concerned that
the amount of traffic might be causing performance issues within the application.
How should a solutions architect design the architecture on AWS?

**A.** Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation
metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary.

**B.** Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon
ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.

**C.** Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance
type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.

**D.** Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode.
Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if
necessary.

---

## Question 862

A company runs an application in the AWS Cloud that generates sensitive archival data files. The company wants
to rearchitect the application's data storage. The company wants to encrypt the data files and to ensure that third
parties do not have access to the data before the data is encrypted and sent to AWS. The company has already
created an Amazon S3 bucket.
Which solution will meet these requirements?

**A.** Configure the S3 bucket to use client-side encryption with an Amazon S3 managed encryption key. Configure
the application to use the S3 bucket to store the archival files.

**B.** Configure the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Configure the
application to use the S3 bucket to store the archival files.

**C.** Configure the S3 bucket to use dual-layer server-side encryption with AWS KMS keys (SSE-KMS). Configure
the application to use the S3 bucket to store the archival files.

**D.** Configure the application to use client-side encryption with a key stored in AWS Key Management Service
(AWS KMS). Configure the application to store the archival files in the S3 bucket.

---

## Question 863

A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a
daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Write an AWS Lambda function to create an RDS snapshot every day.

**B.** Modify the RDS database to have a retention period of 30 days for automated backups.

**C.** Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.

**D.** Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.

---

## Question 864

A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage
hours when multiple users access and read the data, the monitoring system shows degradation of database
performance for the write queries. The company wants to increase the scalability of the application to meet peak
usage demands.

Which solution will meet these requirements MOST cost-effectively?

**A.** Create a second Aurora DB cluster. Configure a copy job to replicate the users’ data to the new database.
Update the application to use the second database to read the data.

**B.** Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the
application to use the DAX cluster for read-only queries. Write data directly to the Aurora DB cluster.

**C.** Create an Aurora read replica in the existing Aurora DB cluster. Update the application to use the replica
endpoint for read-only queries and to use the cluster endpoint for write queries.

**D.** Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to
connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.

---

## Question 865

A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the
data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of
incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance.
Which combination of steps should the solutions architect take? (Choose two.)

**A.** Use Amazon Kinesis Data Firehose to ingest the data.

**B.** Use AWS Lambda with AWS Step Functions to process the data.

**C.** Use AWS Database Migration Service (AWS DMS) to ingest the data.

**D.** Use Amazon EC2 instances in an Auto Scaling group to process the data.

**E.** Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data.

---

## Question 866

A company runs a web application on multiple Amazon EC2 instances in a VPC. The application needs to write
sensitive data to an Amazon S3 bucket. The data cannot be sent over the public internet.
Which solution will meet these requirements?

**A.** Create a gateway VPC endpoint for Amazon S3. Create a route in the VPC route table to the endpoint.

**B.** Create an internal Network Load Balancer that has the S3 bucket as the target.

**C.** Deploy the S3 bucket inside the VPCreate a route in the VPC route table to the bucket.

**D.** Create an AWS Direct Connect connection between the VPC and an S3 regional endpoint.

---

## Question 867

A company runs its production workload on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS)
volumes. A solutions architect needs to analyze the current EBS volume cost and to recommend optimizations. The
recommendations need to include estimated monthly saving opportunities.
Which solution will meet these requirements?

**A.** Use Amazon Inspector reporting to generate EBS volume recommendations for optimization.

**B.** Use AWS Systems Manager reporting to determine EBS volume recommendations for optimization.

**C.** Use Amazon CloudWatch metrics reporting to determine EBS volume recommendations for optimization.

**D.** Use AWS Compute Optimizer to generate EBS volume recommendations for optimization.

---

## Question 868

A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS
Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets
daily. The company wants to identify all S3 buckets that are not versioning-enabled.

Which solution will meet these requirements?

**B.** Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions.

**C.** Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.

**D.** Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across
Regions.

---

## Question 869

A company wants to enhance its ecommerce order-processing application that is deployed on AWS. The
application must process each order exactly once without affecting the customer experience during unpredictable
traffic surges.
Which solution will meet these requirements?

**A.** Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Put all the orders in the SQS queue.
Configure an AWS Lambda function as the target to process the orders.

**B.** Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Publish all the orders to the
SNS standard topic. Configure the application as a notification target.

**C.** Create a flow by using Amazon AppFlow. Send the orders to the flow. Configure an AWS Lambda function as
the target to process the orders.

**D.** Configure AWS X-Ray in the application to track the order requests. Configure the application to process the
orders by pulling the orders from Amazon CloudWatch.

---

## Question 870

A company has two AWS accounts: Production and Development. The company needs to push code changes in the
Development account to the Production account. In the alpha phase, only two senior developers on the
development team need access to the Production account. In the beta phase, more developers will need access to
perform testing.
Which solution will meet these requirements?

**A.** Create two policy documents by using the AWS Management Console in each account. Assign the policy to
developers who need access.

**B.** Create an IAM role in the Development account. Grant the IAM role access to the Production account. Allow
developers to assume the role.

**C.** Create an IAM role in the Production account. Define a trust policy that specifies the Development account.
Allow developers to assume the role.

**D.** Create an IAM group in the Production account. Add the group as a principal in a trust policy that specifies
the Production account. Add developers to the group.

---

## Question 871

A company wants to restrict access to the content of its web application. The company needs to protect the
content by using authorization techniques that are available on AWS. The company also wants to implement a
serverless architecture for authorization and authentication that has low login latency.
The solution must integrate with the web application and serve web content globally. The application currently has

a small user base, but the company expects the application's user base to increase.
Which solution will meet these requirements?

**A.** Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon
CloudFront to serve the web application globally.

**B.** Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda
for authorization. Use an Application Load Balancer to serve the web application globally.

**C.** Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3
Transfer Acceleration to serve the web application globally.

**D.** Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge
for authorization. Use AWS Elastic Beanstalk to serve the web application globally.

---

## Question 872

A development team uses multiple AWS accounts for its development, staging, and production environments.
Team members have been launching large Amazon EC2 instances that are underutilized. A solutions architect
must prevent large instances from being launched in all accounts.
How can the solutions architect meet this requirement with the LEAST operational overhead?

**A.** Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users.

**B.** Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.

**C.** Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM
group access to the role.

**D.** Create an organization in AWS Organizations in the management account with the default policy. Create a
service control policy (SCP) that denies the launch of large EC2 instances, and apply it to the AWS accounts.

---

## Question 873

A company has migrated a fleet of hundreds of on-premises virtual machines (VMs) to Amazon EC2 instances. The
instances run a diverse fleet of Windows Server versions along with several Linux distributions. The company
wants a solution that will automate inventory and updates of the operating systems. The company also needs a
summary of common vulnerabilities of each instance for regular monthly reviews.
What should a solutions architect recommend to meet these requirements?

**A.** Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Configure AWS Security Hub
to produce monthly reports.

**B.** Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Deploy Amazon Inspector,
and configure monthly reports.

**C.** Set up AWS Shield Advanced, and configure monthly reports. Deploy AWS Config to automate patch
installations on the EC2 instances.

**D.** Set up Amazon GuardDuty in the account to monitor all EC2 instances. Deploy AWS Config to automate patch
installations on the EC2 instances.

---

## Question 874

A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances in an Auto
Scaling group behind an Elastic Load Balancing (ELB) load balancer. The application connects to an Amazon
DynamoDB table.
For disaster recovery (DR) purposes, the company wants to ensure that the application is available from another
AWS Region with minimal downtime.
Which solution will meet these requirements with the LEAST downtime?

**A.** Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table.
Configure DNS failover to point to the new DR Region's ELB.

**B.** Create an AWS CloudFormation template to create EC2 instances, ELBs, and DynamoDB tables to be
launched when necessary. Configure DNS failover to point to the new DR Region's ELB.

**C.** Create an AWS CloudFormation template to create EC2 instances and an ELB to be launched when
necessary. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR
Region's ELB.

**D.** Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table.
Create an Amazon CloudWatch alarm with an evaluation period of 10 minutes to invoke an AWS Lambda
function that updates Amazon Route 53 to point to the DR Region's ELB.

---

## Question 875

A company runs an application on Amazon EC2 instances in a private subnet. The application needs to store and
retrieve data in Amazon S3 buckets. According to regulatory requirements, the data must not travel across the
public internet.
What should a solutions architect do to meet these requirements MOST cost-effectively?

**A.** Deploy a NAT gateway to access the S3 buckets.

**B.** Deploy AWS Storage Gateway to access the S3 buckets.

**C.** Deploy an S3 interface endpoint to access the S3 buckets.

**D.** Deploy an S3 gateway endpoint to access the S3 buckets.

---

## Question 876

A company hosts an application on Amazon EC2 instances that run in a single Availability Zone. The application is
accessible by using the transport layer of the Open Systems Interconnection (OSI) model. The company needs the
application architecture to have high availability.

Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all
instances.

**B.** Configure a Network Load Balancer in front of the EC2 instances.

**C.** Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load Balancer
for HTTP and HTTPS traffic to the instances.

**D.** Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple
Availability Zones. Configure the Auto Scaling group to run application health checks on the instances.

**E.** Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a
stopped state.

---

## Question 877

A company uses Amazon S3 to host its static website. The company wants to add a contact form to the webpage.
The contact form will have dynamic server-side components for users to input their name, email address, phone
number, and user message.
The company expects fewer than 100 site visits each month. The contact form must notify the company by email
when a customer fills out the form.
Which solution will meet these requirements MOST cost-effectively?

**A.** Host the dynamic contact form in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple
Email Service (Amazon SES) to connect to a third-party email provider.

**B.** Create an Amazon API Gateway endpoint that returns the contact form from an AWS Lambda function.
Configure another Lambda function on the API Gateway to publish a message to an Amazon Simple Notification
Service (Amazon SNS) topic.

**C.** Host the website by using AWS Amplify Hosting for static content and dynamic content. Use server-side
scripting to build the contact form. Configure Amazon Simple Queue Service (Amazon SQS) to deliver the
message to the company.

**D.** Migrate the website from Amazon S3 to Amazon EC2 instances that run Windows Server. Use Internet
Information Services (IIS) for Windows Server to host the webpage. Use client-side scripting to build the
contact form. Integrate the form with Amazon WorkMail.

---

## Question 878

A company creates dedicated AWS accounts in AWS Organizations for its business units. Recently, an important
notification was sent to the root user email address of a business unit account instead of the assigned account
owner. The company wants to ensure that all future notifications can be sent to different employees based on the
notification categories of billing, operations, or security.
Which solution will meet these requirements MOST securely?

**A.** Configure each AWS account to use a single email address that the company manages. Ensure that all
account owners can access the email account to receive notifications. Configure alternate contacts for each
AWS account with corresponding distribution lists for the billing team, the security team, and the operations
team for each business unit.

**B.** Configure each AWS account to use a different email distribution list for each business unit that the company
manages. Configure each distribution list with administrator email addresses that can respond to alerts.
Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team,
the security team, and the operations team for each business unit.

**C.** Configure each AWS account root user email address to be the individual company managed email address of
one person from each business unit. Configure alternate contacts for each AWS account with corresponding
distribution lists for the billing team, the security team, and the operations team for each business unit.

**D.** Configure each AWS account root user to use email aliases that go to a centralized mailbox. Configure
alternate contacts for each account by using a single business managed email distribution list each for the
billing team, the security team, and the operations team.

---

## Question 879

A company runs an ecommerce application on AWS. Amazon EC2 instances process purchases and store the
purchase details in an Amazon Aurora PostgreSQL DB cluster.
Customers are experiencing application timeouts during times of peak usage. A solutions architect needs to
rearchitect the application so that the application can scale to meet peak usage demands.
Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)

**A.** Configure an Auto Scaling group of new EC2 instances to retry the purchases until the processing is
complete. Update the applications to connect to the DB cluster by using Amazon RDS Proxy.

**B.** Configure the application to use an Amazon ElastiCache cluster in front of the Aurora PostgreSQL DB cluster.

**C.** Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon SQS)
queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue.

**D.** Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.

**E.** Configure an Amazon AP! Gateway REST API with a usage plan.

---

## Question 880

A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company
used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an
Amazon S3 bucket that is replicated to a bucket in the data collection account.
The company’s senior leadership wants to view a custom dashboard that provides NAT gateway costs each day
starting at the beginning of the current month.
Which solution will meet these requirements?

**A.** Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to
use AWS DataSync to query the new report.

**B.** Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to
use Amazon Athena to query the new report.

**C.** Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to
use AWS DataSync to query the new report.

**D.** Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to
use Amazon Athena to query the new report.

---

## Question 881

A company is hosting a high-traffic static website on Amazon S3 with an Amazon CloudFront distribution that has
a default TTL of 0 seconds. The company wants to implement caching to improve performance for the website.
However, the company also wants to ensure that stale content is not served for more than a few minutes after a
deployment.
Which combination of caching methods should a solutions architect implement to meet these requirements?
(Choose two.)

**A.** Set the CloudFront default TTL to 2 minutes.

**B.** Set a default TTL of 2 minutes on the S3 bucket.

**C.** Add a Cache-Control private directive to the objects in Amazon S3.

**D.** Create an AWS Lambda@Edge function to add an Expires header to HTTP responses. Configure the function
to run on viewer response.

**E.** Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment, create a
CloudFront invalidation to clear any changed files from edge caches.

---

## Question 882

A company runs its application by using Amazon EC2 instances and AWS Lambda functions. The EC2 instances run
in private subnets of a VPC. The Lambda functions need direct network access to the EC2 instances for the
application to work.
The application will run for 1 year. The number of Lambda functions that the application uses will increase during
the 1-year period. The company must minimize costs on all application resources.
Which solution will meet these requirements?

**A.** Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to the private subnets that contain
the EC2 instances.

**B.** Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to new public subnets in the same
VPC where the EC2 instances run.

**C.** Purchase a Compute Savings Plan. Connect the Lambda functions to the private subnets that contain the EC2
instances.

**D.** Purchase a Compute Savings Plan. Keep the Lambda functions in the Lambda service VPC.

---

## Question 883

A company has deployed a multi-account strategy on AWS by using AWS Control Tower. The company has
provided individual AWS accounts to each of its developers. The company wants to implement controls to limit
AWS resource costs that the developers incur.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Instruct each developer to tag all their resources with a tag that has a key of CostCenter and a value of the
developer's name. Use the required-tags AWS Config managed rule to check for the tag. Create an AWS
Lambda function to terminate resources that do not have the tag. Configure AWS Cost Explorer to send a daily
report to each developer to monitor their spending.

**B.** Use AWS Budgets to establish budgets for each developer account. Set up budget alerts for actual and
forecast values to notify developers when they exceed or expect to exceed their assigned budget. Use AWS
Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from
being launched when the assigned budget is reached.

**C.** Use AWS Cost Explorer to monitor and report on costs for each developer account. Configure Cost Explorer
to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect
anomalous spending and provide alerts.

**D.** Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS
Lambda functions in each AWS account to stop running resources at the end of each work day. Configure the
Lambda functions to resume the resources at the start of each work day.

---

## Question 884

A solutions architect is designing a three-tier web application. The architecture consists of an internet-facing
Application Load Balancer (ALB) and a web tier that is hosted on Amazon EC2 instances in private subnets. The
application tier with the business logic runs on EC2 instances in private subnets. The database tier consists of
Microsoft SQL Server that runs on EC2 instances in private subnets. Security is a high priority for the company.
Which combination of security group configurations should the solutions architect use? (Choose three.)

**A.** Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for the
ALB.

**B.** Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0.

**C.** Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the
security group for the application tier.

**D.** Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL Server
traffic to the security group for the web tier.

**E.** Configure the security group for the application tier to allow inbound HTTPS traffic from the security group
for the web tier.

**F.** Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL
Server traffic to the security group for the web tier.

---

## Question 885

A company has released a new version of its production application. The company's workload uses Amazon EC2,
AWS Lambda, AWS Fargate, and Amazon SageMaker.
The company wants to cost optimize the workload now that usage is at a steady state. The company wants to cover
the most services with the fewest savings plans.
Which combination of savings plans will meet these requirements? (Choose two.)

**A.** Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker.

**B.** Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker.

**C.** Purchase a SageMaker Savings Plan.

**D.** Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2.

**E.** Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate.

---

## Question 886

A company uses a Microsoft SQL Server database. The company's applications are connected to the database. The
company wants to migrate to an Amazon Aurora PostgreSQL database with minimal changes to the application
code.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications.

**B.** Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications.

**C.** Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS
Database Migration Service (AWS DMS).

**D.** Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL.

**E.** Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications.

---

## Question 887

A company plans to rehost an application to Amazon EC2 instances that use Amazon Elastic Block Store (Amazon
EBS) as the attached storage.
A solutions architect must design a solution to ensure that all newly created Amazon EBS volumes are encrypted
by default. The solution must also prevent the creation of unencrypted EBS volumes.
Which solution will meet these requirements?

**A.** Configure the EC2 account attributes to always encrypt new EBS volumes.

**B.** Use AWS Config. Configure the encrypted-volumes identifier. Apply the default AWS Key Management
Service (AWS KMS) key.

**C.** Configure AWS Systems Manager to create encrypted copies of the EBS volumes. Reconfigure the EC2
instances to use the encrypted volumes.

**D.** Create a customer managed key in AWS Key Management Service (AWS KMS). Configure AWS Migration
Hub to use the key when the company migrates workloads.

---

## Question 888

An ecommerce company wants to collect user clickstream data from the company's website for real-time analysis.
The website experiences fluctuating traffic patterns throughout the day. The company needs a scalable solution
that can adapt to varying levels of traffic.
Which solution will meet these requirements?

**A.** Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the clickstream data. Use
AWS Lambda to process the data in real time.

**B.** Use Amazon Kinesis Data Firehose to capture the clickstream data. Use AWS Glue to process the data in real
time.

**C.** Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to process the data in real
time.

**D.** Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to
capture the clickstream data. Use AWS Lambda to process the data in real time.

---

## Question 889

A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS
Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets
daily. The company wants to identify all S3 buckets that are not versioning-enabled.
Which solution will meet these requirements?

**A.** Set up an AWS CloudTrail event that has a rule to identify all S3 buckets that are not versioning-enabled
across Regions.

**B.** Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions.

**C.** Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.

**D.** Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across
Regions.

---

## Question 890

A company needs to optimize its Amazon S3 storage costs for an application that generates many files that cannot
be recreated. Each file is approximately 5 MB and is stored in Amazon S3 Standard storage.
The company must store the files for 4 years before the files can be deleted. The files must be immediately
accessible. The files are frequently accessed in the first 30 days of object creation, but they are rarely accessed
after the first 30 days.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an S3 Lifecycle policy to move the files to S3 Glacier Instant Retrieval 30 days after object creation.
Delete the files 4 years after object creation.

**B.** Create an S3 Lifecycle policy to move the files to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days
after object creation. Delete the files 4 years after object creation.

**C.** Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days

after object creation. Delete the files 4 years after object creation.

**D.** Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days
after object creation. Move the files to S3 Glacier Flexible Retrieval 4 years after object creation.

---

## Question 891

A company runs its critical storage application in the AWS Cloud. The application uses Amazon S3 in two AWS
Regions. The company wants the application to send remote user data to the nearest S3 bucket with no public
network congestion. The company also wants the application to fail over with the least amount of management of
Amazon S3.
Which solution will meet these requirements?

**A.** Implement an active-active design between the two Regions. Configure the application to use the regional S3
endpoints closest to the user.

**B.** Use an active-passive configuration with S3 Multi-Region Access Points. Create a global endpoint for each of
the Regions.

**C.** Send user data to the regional S3 endpoints closest to the user. Configure an S3 cross-account replication
rule to keep the S3 buckets synchronized.

**D.** Set up Amazon S3 to use Multi-Region Access Points in an active-active configuration with a single global
endpoint. Configure S3 Cross-Region Replication.

---

## Question 892

A company is migrating a data center from its on-premises location to AWS. The company has several legacy
applications that are hosted on individual virtual servers. Changes to the application designs cannot be made.
Each individual virtual server currently runs as its own EC2 instance. A solutions architect needs to ensure that the
applications are reliable and fault tolerant after migration to AWS. The applications will run on Amazon EC2
instances.
Which solution will meet these requirements?

**A.** Create an Auto Scaling group that has a minimum of one and a maximum of one. Create an Amazon Machine
Image (AMI) of each application instance. Use the AMI to create EC2 instances in the Auto Scaling group
Configure an Application Load Balancer in front of the Auto Scaling group.

**B.** Use AWS Backup to create an hourly backup of the EC2 instance that hosts each application. Store the
backup in Amazon S3 in a separate Availability Zone. Configure a disaster recovery process to restore the EC2
instance for each application from its most recent backup.

**C.** Create an Amazon Machine Image (AMI) of each application instance. Launch two new EC2 instances from
the AMI. Place each EC2 instance in a separate Availability Zone. Configure a Network Load Balancer that has
the EC2 instances as targets.

**D.** Use AWS Mitigation Hub Refactor Spaces to migrate each application off the EC2 instance. Break down
functionality from each application into individual components. Host each application on Amazon Elastic
Container Service (Amazon ECS) with an AWS Fargate launch type.

---

## Question 893

A company wants to isolate its workloads by creating an AWS account for each workload. The company needs a
solution that centrally manages networking components for the workloads. The solution also must create accounts
with automatic security controls (guardrails).
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use AWS Control Tower to deploy accounts. Create a networking account that has a VPC with private
subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the
workload accounts.

**B.** Use AWS Organizations to deploy accounts. Create a networking account that has a VPC with private subnets
and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload
accounts.

**C.** Use AWS Control Tower to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to
route through an inspection VPC by using a transit gateway attachment.

**D.** Use AWS Organizations to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to
route through an inspection VPC by using a transit gateway attachment.

---

## Question 894

A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website
serves static content. Website traffic is increasing. The company wants to minimize the website hosting costs.
Which solution will meet these requirements?

**A.** Move the website to an Amazon S3 bucket. Configure an Amazon CloudFront distribution for the S3 bucket.

**B.** Move the website to an Amazon S3 bucket. Configure an Amazon ElastiCache cluster for the S3 bucket.

**C.** Move the website to AWS Amplify. Configure an ALB to resolve to the Amplify website.

**D.** Move the website to AWS Amplify. Configure EC2 instances to cache the website.

---

## Question 895

A company is implementing a shared storage solution for a media application that the company hosts on AWS. The
company needs the ability to use SMB clients to access stored data.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Create an AWS Storage Gateway Volume Gateway. Create a file share that uses the required client protocol.
Connect the application server to the file share.

**B.** Create an AWS Storage Gateway Tape Gateway. Configure tapes to use Amazon S3. Connect the application
server to the Tape Gateway.

**C.** Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance.
Connect the application server to the file share.

**D.** Create an Amazon FSx for Windows File Server file system. Connect the application server to the file system.

---

## Question 896

A company is designing its production application's disaster recovery (DR) strategy. The application is backed by a
MySQL database on an Amazon Aurora cluster in the us-east-1 Region. The company has chosen the us-west-1
Region as its DR Region.
The company's target recovery point objective (RPO) is 5 minutes and the target recovery time objective (RTO) is
20 minutes. The company wants to minimize configuration changes.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create an Aurora read replica in us-west-1 similar in size to the production application's Aurora MySQL
cluster writer instance.

**B.** Convert the Aurora cluster to an Aurora global database. Configure managed failover.

**C.** Create a new Aurora cluster in us-west-1 that has Cross-Region Replication.

**D.** Create a new Aurora cluster in us-west-1. Use AWS Database Migration Service (AWS DMS) to sync both
clusters.

---

## Question 897

A company runs a critical data analysis job each week before the first day of the work week. The job requires at
least 1 hour to complete the analysis. The job is stateful and cannot tolerate interruptions. The company needs a
solution to run the job on AWS.
Which solution will meet these requirements?

**A.** Create a container for the job. Schedule the job to run as an AWS Fargate task on an Amazon Elastic
Container Service (Amazon ECS) cluster by using Amazon EventBridge Scheduler.

**B.** Configure the job to run in an AWS Lambda function. Create a scheduled rule in Amazon EventBridge to
invoke the Lambda function.

**C.** Configure an Auto Scaling group of Amazon EC2 Spot Instances that run Amazon Linux. Configure a crontab
entry on the instances to run the analysis.

**D.** Configure an AWS DataSync task to run the job. Configure a cron expression to run the task on a schedule.

---

## Question 898

A company runs workloads in the AWS Cloud. The company wants to centrally collect security data to assess
security across the entire company and to improve workload protection.
Which solution will meet these requirements with the LEAST development effort?

**A.** Configure a data lake in AWS Lake Formation. Use AWS Glue crawlers to ingest the security data into the
data lake.

**B.** Configure an AWS Lambda function to collect the security data in .csv format. Upload the data to an Amazon
S3 bucket.

**C.** Configure a data lake in Amazon Security Lake to collect the security data. Upload the data to an Amazon S3
bucket.

**D.** Configure an AWS Database Migration Service (AWS DMS) replication instance to load the security data into
an Amazon RDS cluster.

---

## Question 899

A company is migrating five on-premises applications to VPCs in the AWS Cloud. Each application is currently
deployed in isolated virtual networks on premises and should be deployed similarly in the AWS Cloud. The
applications need to reach a shared services VPC. All the applications must be able to communicate with each
other.
If the migration is successful, the company will repeat the migration process for more than 100 applications.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Deploy software VPN tunnels between the application VPCs and the shared services VPC. Add routes
between the application VPCs in their subnets to the shared services VPC.

**B.** Deploy VPC peering connections between the application VPCs and the shared services VPC. Add routes
between the application VPCs in their subnets to the shared services VPC through the peering connection.

**C.** Deploy an AWS Direct Connect connection between the application VPCs and the shared services VPAdd
routes from the application VPCs in their subnets to the shared services VPC and the applications VPCs. Add
routes from the shared services VPC subnets to the applications VPCs.

**D.** Deploy a transit gateway with associations between the transit gateway and the application VPCs and the
shared services VPC. Add routes between the application VPCs in their subnets and the application VPCs to the
shared services VPC through the transit gateway.

---

## Question 900

A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its on-premises application in a
hybrid environment. The application currently runs on containers on premises.
The company needs a single container solution that can scale in an on-premises, hybrid, or cloud environment. The
company must run new application containers in the AWS Cloud and must use a load balancer for HTTP traffic.
Which combination of actions will meet these requirements? (Choose two.)

**A.** Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application containers. Use an
Amazon ECS Anywhere external launch type for the on-premises application containers.

**B.** Set up an Application Load Balancer for cloud ECS services.

**C.** Set up a Network Load Balancer for cloud ECS services.

**D.** Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud application
containers and the on-premises application containers.

**E.** Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application containers. Use
Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises application containers.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 851

**Answer:** **B**

**Explanation:**

The most cost-effective solution is B. Let's break down why:
Aurora Serverless v1 is the most cost-effective option for intermittent, low-volume workloads. It
automatically scales capacity based on application demand and shuts down completely when not in use,
eliminating charges during idle periods. https://aws.amazon.com/rds/aurora/serverless/
AWS Service Catalog allows administrators to create and manage catalogs of IT services that are approved
for use on AWS. This ensures developers only launch pre-approved, correctly sized databases.
https://aws.amazon.com/servicecatalog/

**Option A** is not ideal because standard Aurora instances are not designed for frequent start/stop cycles.
This can be time-consuming and potentially impact availability. The costs associated with manual start/stop
procedures may also exceed the advantages of Aurora Serverless v1.

**Option C** uses a single Aurora Serverless cluster, but it doesn't adequately address the requirement for
separate databases for each developer. Sharing a cluster could lead to contention and data security
concerns. Creating databases within a single serverless cluster also doesn't enforce size limitations.

**Option D** focuses on monitoring and terminating idle RDS databases, but it lacks the proactive enforcement
of size restrictions. Also, this is a reactive approach.
Combining Aurora Serverless with AWS Service Catalog provides a robust solution: Service Catalog enables
the provisioning of Aurora Serverless databases with size restrictions, while Aurora Serverless ensures cost
optimization by scaling and pausing based on usage patterns.

---

## Question 852

**Answer:** **B**

**Explanation:**

The correct answer is B: Copying the website assets to Amazon EFS and mounting it on each EC2 instance
provides a shared, consistently updated, and low-latency file system accessible to all instances. This
approach directly addresses the requirement for all EC2 instances to share up-to-date website content with
minimal lag.

Here's why:
Shared File System: Amazon EFS provides a shared file system that can be simultaneously mounted by
multiple EC2 instances. This eliminates the need to copy or synchronize data between instances.
Consistency: EFS offers strong consistency, ensuring that all instances see the latest changes to the website
assets.
Low Latency: EFS is designed for low-latency access, making it suitable for serving website content. Changes
are immediately available to all instances.
Scalability: EFS automatically scales its storage capacity to accommodate growing website assets.
Integration: EFS integrates seamlessly with EC2 and Auto Scaling groups.
Let's examine why the other options are less suitable:

**A:** Relying on copying assets from the newest EC2 instance is complex and error-prone. It introduces
inconsistency during updates and requires intricate configuration changes. ALBs do not make changes to
website assets.

**C:** Using Amazon S3 for website assets requires regular synchronization to EBS volumes. Hourly

synchronization introduces significant lag, which conflicts with the requirement for minimal lag time and is not
efficient. S3 is generally best for static object storage and delivery, not a constantly changing file system.

**D:** EBS snapshots are point-in-time copies, and restoring them as secondary volumes would not provide a
mechanism for real-time updates. The instances would have a stale version of the website assets.

In summary, Amazon EFS provides the most effective, scalable, and consistent solution for sharing website
assets across multiple EC2 instances with minimal latency.
Supporting Links:
Amazon EFS Documentation
Amazon EC2 Documentation

---

## Question 853

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides a comprehensive threat detection and response mechanism
tailored to the scenario. Here's a detailed justification:
Amazon GuardDuty is a threat detection service that continuously monitors your AWS accounts and
workloads for malicious activity and unauthorized behavior. It uses machine learning, anomaly detection, and
integrated threat intelligence to identify threats. https://aws.amazon.com/guardduty/
Amazon EventBridge (formerly CloudWatch Events) allows you to build event-driven applications at scale. It
can filter events from various AWS services, including GuardDuty, and trigger actions based on these events.
https://aws.amazon.com/eventbridge/
AWS Lambda lets you run code without provisioning or managing servers. In this solution, a Lambda function
is used to dynamically adjust AWS WAF rules based on GuardDuty findings, providing automated remediation.
https://aws.amazon.com/lambda/
AWS WAF (Web Application Firewall) protects web applications from common web exploits and bots. By
dynamically adjusting WAF rules based on GuardDuty findings, the application can mitigate emerging threats.
https://aws.amazon.com/waf/
This combination provides a closed-loop threat detection and response system. GuardDuty detects threats,
EventBridge triggers a Lambda function based on specific GuardDuty findings, and Lambda updates WAF
rules to block the identified malicious activity.

**Option B** is incorrect because AWS Firewall Manager primarily manages WAF rules and other security policies
across multiple accounts and applications. While it provides centralized management, it doesn't inherently
perform threat detection in the same way as GuardDuty.

**Option C** is incorrect because Amazon Inspector primarily assesses EC2 instances and container images for
vulnerabilities. While valuable, it doesn't focus on runtime threat detection like GuardDuty. Updating WAF
rules based on Inspector findings would be less effective than reacting to actual malicious activity detected
by GuardDuty. Adding a VPC Network ACL is a good security practice, but it won't dynamically adapt to new
threats based on monitoring, thus is secondary to continuous threat detection.

**Option D** is incorrect because Amazon Macie discovers and protects sensitive data stored in Amazon S3. While
important for data security, it's not designed for threat detection in the same way as GuardDuty. Adding a VPC
Network ACL is a good security practice, but it won't dynamically adapt to new threats based on monitoring,
thus is secondary to continuous threat detection.
The most effective approach is to use GuardDuty for continuous threat detection and automate the response
by adjusting WAF rules based on its findings using EventBridge and Lambda. This offers a dynamic and
automated security posture against suspicious activities.

---

## Question 854

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the correct answer, along with supporting information:
The problem requires a secure and operationally efficient method for EC2 instances to authenticate to an
Aurora database without using static credentials. The key is to avoid managing and rotating database
usernames and passwords within the EC2 instances or storing them in Parameter Store.

**Option C**, utilizing IAM database authentication for Aurora, provides the most secure and streamlined
approach. IAM database authentication enables authentication using IAM roles and policies instead of
database usernames and passwords. This aligns with the principle of least privilege and reduces the risk of
credential compromise.

Here's why option C is superior to the others:

**Option A** (Static Credentials in CloudFormation): Embedding credentials directly in the CloudFormation
template or passing them as parameters is a security risk. These credentials could be exposed if the template
is compromised or if instance metadata is accessed improperly. It also creates an ongoing maintenance
burden.

**Option B** (Static Credentials in Parameter Store): While better than **Option A**, storing static credentials in
Parameter Store still requires managing and rotating those credentials. If these credentials are ever
compromised, you would need to manually rotate them, which could disrupt your application. It doesn't
completely eliminate the risk or the operational overhead.

**Option D** (IAM Authentication with IAM User): While using IAM is correct, associating an IAM user directly
with the EC2 instance is less flexible and scalable than using an IAM role. Roles are designed for EC2
instances and other AWS services, as they can be assumed dynamically. IAM users are usually associated
with human identities.

**Option C** directly addresses the problem by:

1. Enabling IAM database authentication on the Aurora DB cluster, avoiding traditional database
credentials.

2. Creating a database user authorized for IAM authentication.

3. Associating an IAM role with the EC2 instances. This role grants the necessary permissions to access
the database. The application running on the EC2 instances can then assume this role and
authenticate to the database using temporary AWS credentials obtained through the instance
metadata service.

4. This approach eliminates the need to manage and rotate database credentials. Permissions are
centrally managed through IAM policies, simplifying security management and reducing the attack
surface. The short-lived, automatically rotated AWS credentials are far more secure.
In short, IAM database authentication provides a seamless, secure, and scalable solution for authenticating
EC2 instances to Aurora DB clusters without the burden of managing static database credentials, making it
the best fit for the problem's requirements and operational efficiency.
Supporting documentation:
IAM Database Authentication for MySQL and PostgreSQL:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html
IAM Roles for Amazon EC2: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazonec2.html

---

## Question 855

**Answer:** **C**

**Explanation:**

The correct answer is C, requesting an Amazon-issued public certificate from AWS Certificate Manager (ACM)
in the us-east-1 Region. Here's why:
Custom Domain Names and SSL/TLS: To use a custom domain name (e.g., www.example.com) with a
CloudFront distribution, you need an SSL/TLS certificate that validates your ownership of that domain.
CloudFront uses this certificate to encrypt communication between users and CloudFront edge locations.
AWS Certificate Manager (ACM): ACM is the preferred way to provision, manage, and deploy SSL/TLS
certificates for use with AWS services. ACM handles the complexities of obtaining and renewing certificates.
ACM Pricing: ACM provides free public SSL/TLS certificates for use with AWS services like CloudFront,
Elastic Load Balancing, and API Gateway. This fulfills the requirement of avoiding additional costs. Private
ACM certificates do incur costs.
ACM Region for CloudFront: Crucially, ACM certificates used with CloudFront must be requested or imported
into the us-east-1 (N. Virginia) Region, regardless of where your other AWS resources are located. CloudFront
is a global service, and its certificate management is centralized in this region. The certificate is then
distributed globally to CloudFront edge locations.
Public vs. Private Certificates: For public-facing websites and applications using CloudFront, you need a
public certificate trusted by major browsers and operating systems. These are the certificates ACM issues for
free. Private certificates, while they provide encryption, are typically used for internal communication within
an organization and would not be trusted by external clients without additional configuration.

Therefore, only requesting a public certificate from ACM in the us-east-1 region provides both SSL/TLS
support for your custom domain in CloudFront and avoids any additional costs.
Relevant Documentation:
Using SSL/TLS Certificates with CloudFront:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront.html
AWS Certificate Manager Pricing: https://aws.amazon.com/certificate-manager/pricing/
Requesting a Public Certificate: https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-requestpublic.html

---

## Question 856

**Answer:** **D**

**Explanation:**

The correct answer is D: Generate a presigned URL that has the required access to the location of the report
on the S3 bucket. Share the presigned URL with the external consultant.

Here's why: Presigned URLs offer the most operationally efficient and secure method for granting temporary,
restricted access to specific S3 objects. A presigned URL is a URL generated by someone with valid AWS
credentials that grants access to a specific S3 object for a limited time. The URL includes embedded
credentials, so the user doesn't need their own AWS account to access the object.

**Option A** is incorrect because creating a public static website and moving the data there exposes all
operations data publicly, which violates the requirement for limited access to only the annual report. It also
involves unnecessary data migration.

**Option B** is incorrect because enabling public access to the entire S3 bucket for 7 days is a significant
security risk. It exposes all data in the bucket, not just the report, and contradicts the principle of least
privilege.

**Option C** is incorrect because creating a new IAM user and sharing access keys introduces the overhead of
managing IAM users and rotating credentials. It's also less secure, as the consultant could potentially use the
credentials for longer than the intended 7 days or access other resources.
Presigned URLs are operationally efficient because they don't require the management of IAM users or
bucket policies. They are also secure because they provide temporary, object-level access. After the specified
expiry time, the URL becomes invalid, preventing further access. This aligns precisely with the requirement of
providing access only to the report for 7 days, making option D the most suitable choice.
Relevant Documentation:
AWS S3 Presigned URLs:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html

---

## Question 857

**Answer:** **A**

**Explanation:**

The correct answer is A. Configure the EC2 instances to be part of a cluster placement group.

Here's a detailed justification:
Cluster placement groups are specifically designed for applications that require low-latency, high-throughput
network performance, and tight node-to-node communication, as is typical for HPC workloads. When EC2

instances are launched within a cluster placement group, they are placed in close proximity to each other
within a single Availability Zone. This proximity minimizes network latency between the instances.
Placement groups, and especially cluster placement groups, leverage specialized networking infrastructure
within AWS that minimizes latency and maximizes bandwidth between instances. This is crucial for tightly
coupled HPC applications where communication overhead can significantly impact overall performance. By
grouping the instances, AWS can provide network performance superior to what would be possible if the
instances were scattered across different racks or Availability Zones.

**Option B**, Dedicated Instance tenancy, provides dedicated hardware for your instances, but it doesn't
guarantee low-latency network communication. While it might offer performance benefits in terms of
resource isolation, it doesn't directly address the node-to-node communication requirements of HPC
workloads.

**Option C**, Spot Instances, are cost-effective but can be interrupted with little notice. This unpredictability
makes them unsuitable for HPC workloads that require continuous operation to maintain performance.
Interruptions can disrupt ongoing calculations and negatively impact the overall time to completion.

**Option D**, On-Demand Capacity Reservation, guarantees that capacity will be available for your instances
when you need them. However, it doesn't directly influence network latency or throughput. While important
for ensuring resources are available, it doesn't solve the critical network performance issues of HPC
applications.

In summary, cluster placement groups are the most appropriate solution because they directly address the
need for low-latency, high-throughput network performance required for tightly coupled node-to-node
communication in HPC workloads.
Further Reading:
AWS Documentation on Placement Groups
AWS HPC Documentation

---

## Question 858

**Answer:** **C**

**Explanation:**

The correct answer is C. Two AWS Direct Connect connections from each of the primary and secondary data
centers terminating at two Direct Connect locations on two separate devices.

Here's a detailed justification:
The requirement is for a highly available and secure network connection between the on-premises data
centers (primary and secondary) and an AWS VPC for a mission-critical workload. Resiliency is the key
concern. AWS Direct Connect provides a dedicated network connection from on-premises to AWS, bypassing
the public internet for enhanced security and consistent performance.

**Option C** offers the highest level of redundancy and resilience. Having two Direct Connect connections from
each data center ensures that if one connection fails, the other will maintain connectivity. Terminating these
connections at two separate Direct Connect locations on separate devices further mitigates the risk of a
single point of failure. For instance, a failure at one Direct Connect location (e.g., power outage, hardware
issue) will not completely disrupt connectivity, as the other location will still be operational. Using multiple
Direct Connect locations makes it resilient to AWS infrastructure maintenance or regional events. This
approach is ideal for mission-critical workloads.

**Option A** only connects from the primary data center, leaving the secondary data center unconnected,
thereby missing redundancy from the secondary site.

**Option B** has single points of failure. A single device at the Direct Connect location could fail, resulting in
complete disconnection.

**Option D** has a single point of failure at each data center (single Direct Connect connection). A single location
could fail, resulting in complete disconnection.

Therefore, option C offers the maximum resiliency and high availability required by the scenario.
Reference:
AWS Direct Connect Resiliency Recommendations: https://aws.amazon.com/blogs/networking-and-contentdelivery/aws-direct-connect-resiliency-recommendations/
AWS Direct Connect FAQs: https://aws.amazon.com/directconnect/faqs/

---

## Question 859

**Answer:** **AC**

**Explanation:**

Here's a detailed justification for the correct answer, along with supporting concepts and links:
The goal is to optimize costs for highly utilized RDS for Oracle instances. AWS Trusted Advisor provides
recommendations for cost optimization.

A is correct: Using Trusted Advisor in the management account provides an aggregated view of all member
accounts within the AWS Organization. This centralizes cost optimization recommendations and allows the
finance team to have a comprehensive overview of potential savings across all RDS instances.
C is correct: The "Amazon RDS Reserved Instance Optimization" Trusted Advisor check specifically focuses
on identifying opportunities to save money by purchasing Reserved Instances (RIs) for RDS. Since the RDS
instances have high utilization, they are good candidates for Reserved Instances, which offer significant cost
savings compared to On-Demand pricing for consistent, predictable workloads. This directly addresses the
company's objective of cost optimization. The Trusted Advisor RI optimization check analyzes your RDS usage
patterns and suggests potential RI purchases.

Why other options are incorrect:

**B:** While checking Trusted Advisor in member accounts is helpful, it doesn't provide the consolidated view the
finance team in the management account likely requires for overall cost management.

**D:** "Amazon RDS Idle DB Instances" checks are relevant for cost optimization but target instances that aren't
being used. The problem states the instances are highly utilized, making this check less relevant in this
scenario.

**E:** Compute optimization is more relevant to EC2 instances. While related, directly addressing RDS Reserved
Instance optimization is more focused on the specifics of the question. AWS Compute Optimizer is a separate
service for analyzing and recommending optimal AWS compute resources. It does not directly address RDS RI
purchasing recommendations.
Key Concepts:
AWS Organizations: Enables centralized management and governance across multiple AWS accounts.
AWS Trusted Advisor: Provides recommendations to optimize AWS infrastructure for cost, security,
performance, reliability, and service limits.
Amazon RDS Reserved Instances (RIs): Offer significant cost savings compared to On-Demand pricing in
exchange for a commitment to use the DB instance for a specific period.
Supporting Links:
AWS Organizations: https://aws.amazon.com/organizations/
AWS Trusted Advisor: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/
Amazon RDS Reserved Instances: https://aws.amazon.com/rds/reserved-instances/
AWS Compute Optimizer: https://aws.amazon.com/compute-optimizer/

---

## Question 860

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the
private subnets, add an entry for the gateway endpoint.

Here's a detailed justification:
The requirement is to minimize data transfer costs when EC2 instances in private subnets frequently access
S3 buckets containing confidential information. A gateway endpoint for S3 is the most cost-effective and
secure solution for this scenario.
Gateway Endpoints for S3: Gateway endpoints provide connectivity to S3 without requiring traffic to traverse
the internet. This is crucial because data transfer within an AWS Region using gateway endpoints is free. This
drastically reduces data transfer costs compared to using NAT gateways or internet gateways, which incur
data transfer charges. Additionally, gateway endpoints operate at the VPC route table level, directing traffic
destined for S3 to the endpoint directly.

Why other options are less suitable:

**B.** NAT Gateway: While a NAT gateway allows instances in private subnets to access the internet (and
potentially S3 if configured), all traffic traverses the NAT gateway, incurring data transfer charges for all data
moved between EC2 and S3. Also, using NAT gateways increases latency.

**C.** AWS PrivateLink Interface Endpoint: While PrivateLink is a secure and private way to connect to S3 (or
other AWS services), it primarily benefits third-party services or connecting between VPCs. For resources
within the same VPC, a gateway endpoint for S3 offers the same level of security at no additional cost. Also,
PrivateLink Interface Endpoints, while offering enhanced security, are more expensive compared to Gateway
Endpoints.

**D.** NAT Gateway per AZ: This approach attempts to improve availability by using a NAT gateway in each
Availability Zone. However, it doesn't address the core issue of minimizing data transfer costs, as the NAT
gateways still incur charges for data transferred to S3. It is also costly.
Security: A gateway endpoint allows you to control access to S3 buckets using VPC endpoint policies,
ensuring only authorized instances can access specific S3 resources. Because all traffic is contained within
the AWS network, security is enhanced compared to routing traffic via the public internet. In summary, a
gateway endpoint for S3 optimizes network architecture by providing free, secure, and direct connectivity
between EC2 instances in private subnets and S3 buckets, thereby minimizing data transfer costs while
maintaining a high level of security.

---

## Question 861

**Answer:** **A**

**Explanation:**

The correct answer is A: Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage.
Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary.

Here's why:
RDS for MySQL suitability: The company is using MySQL on-premises and wants to migrate it to AWS. RDS
for MySQL provides a managed MySQL database service, simplifying administration tasks like backups,
patching, and scaling. This makes it a suitable option for a lift-and-shift migration.
Provisioned IOPS for write-heavy workloads: The database experiences high write operations due to regular
imports. Provisioned IOPS (PIOPS) SSD storage is designed for I/O-intensive workloads. By provisioning a
specific number of IOPS, the company can guarantee a consistent level of performance for write operations.
General Purpose SSD (gp2/gp3) storage, while cost-effective, might not provide the required consistent
performance for heavy write loads.
Monitoring with CloudWatch: Amazon CloudWatch provides metrics for monitoring the database's
performance, including write operations. By monitoring these metrics, the company can identify any
performance bottlenecks related to I/O and adjust the provisioned IOPS accordingly. This proactive approach
ensures optimal performance and prevents the application from experiencing issues.

Why other options are less suitable:

**B:** ElastiCache is generally used for caching read operations to reduce load on the database. In this scenario,
the concern is high write operations, so ElastiCache is not directly helpful.

**C:** Amazon DocumentDB is a NoSQL database compatible with MongoDB. Migrating a MySQL database to
DocumentDB would require significant application changes and might not be feasible or desirable if the
company wants to maintain its existing relational data model and SQL-based queries.

**D:** Amazon EFS is a network file system and is not suitable for hosting a relational database like MySQL. EFS
is designed for shared file storage across multiple EC2 instances, not for database storage.

In summary, using RDS for MySQL with Provisioned IOPS and actively monitoring performance metrics using
CloudWatch is the most appropriate way to design the architecture on AWS to address the company's
concerns about high write operations.

---

## Question 862

**Answer:** **D**

**Explanation:**

The requirement states that the company wants to ensure third parties cannot access the data before it is
encrypted and sent to AWS. This necessitates client-side encryption. Server-side encryption, regardless of
the method (SSE-S3, SSE-KMS, or SSE-C), encrypts the data after it has been received by AWS. Therefore,
options A, B, and C are incorrect because they all use server-side encryption.

**Option D**, client-side encryption with a key stored in AWS KMS, addresses the core requirement. With clientside encryption, the application encrypts the data before sending it to S3. Storing the encryption key in AWS
KMS provides secure key management, enabling the application to retrieve and use the key for encryption
operations. This ensures that the data is protected even during transit to S3. Furthermore, because the
encryption happens before the data reaches AWS, third parties cannot intercept and read the data. Using
KMS ensures proper key rotation and access control.
Client-side encryption allows the company to maintain full control over the encryption process. The
application handles encryption using the AWS SDK and the encryption key retrieved from KMS. After
encrypting the data locally, the application then uploads the encrypted file to S3. Because the data is already
encrypted, unauthorized access during transit or at rest on S3 is prevented.

Therefore, the correct solution is to configure the application to use client-side encryption with a key stored in
AWS KMS and then store the encrypted archival files in the S3 bucket.
Relevant Documentation:
AWS KMS: https://aws.amazon.com/kms/
Protecting Data Using Server-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html
Protecting Data Using Client-Side Encryption:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html

---

## Question 863

**Answer:** **B**

**Explanation:**

The correct answer is B. Modify the RDS database to have a retention period of 30 days for automated
backups.

Here's why:
Automated Backups are the Simplest: RDS automated backups are designed for exactly this purpose creating and retaining backups for a specified duration. The default settings might not meet the 30-day
retention requirement, so adjusting this setting is the most straightforward approach.
Reduced Operational Overhead: Modifying the backup retention period through the RDS console or AWS CLI
is a one-time configuration change. This drastically reduces the operational overhead compared to solutions
involving custom scripting or manual snapshots.
Compliance with Requirements: This solution directly addresses the company's need for daily backups
retained for 30 days to meet regulatory requirements.
A is Incorrect: While a Lambda function could create snapshots, it adds significant operational overhead for
development, deployment, monitoring, and maintenance. It's also unnecessary given the built-in RDS
automated backup functionality.
C is Incorrect: Systems Manager Maintenance Windows are primarily for scheduling maintenance tasks like
patching, not for managing RDS backup retention. While you could theoretically use it to initiate a backup
retention change, it's overkill and less direct than simply configuring the retention period within RDS itself.
D is Incorrect: Manual snapshots are not automated. They require intervention every day, which introduces
significant operational overhead. Also, manually managing retention policies for these snapshots would add
more complexity.

In summary, utilizing RDS's built-in automated backup feature and adjusting the retention period to 30 days
is the simplest, most efficient, and least operationally intensive way to meet the company's requirements for
daily backups with a 30-day retention policy. This aligns with cloud best practices of leveraging managed
services and minimizing custom code.

---

## Question 864

**Answer:** **C**

**Explanation:**

The optimal and most cost-effective solution is to create an Aurora read replica. Read replicas provide
increased read capacity by offloading read workloads from the primary Aurora instance. This directly
addresses the performance degradation issue experienced during peak read-heavy periods. Aurora read
replicas share the same underlying storage as the primary instance, leading to minimal latency and data
consistency. The application can be updated to direct read queries to the read replica's endpoint, leaving the
primary instance to handle write operations without being burdened by read traffic. This separation of read
and write operations allows the primary instance to efficiently manage write queries and maintain database
performance. Options A and D are less cost-effective, as they involve maintaining an entirely separate
database or data warehouse. **Option B**, using DAX, is more suitable for DynamoDB and not as efficient and
cost-effective for Aurora as leveraging Aurora's native read replica functionality. Using Aurora's read replica
offers the advantage of seamless integration within the Aurora ecosystem.
Reference:
Amazon Aurora Read Replicas

---

## Question 865

**Answer:** **AE**

**Explanation:**

The combination of using Amazon Kinesis Data Firehose for ingestion and AWS Fargate with Amazon ECS for
processing is the most suitable serverless and scalable solution for this near-real-time streaming application.

**A.** Use Amazon Kinesis Data Firehose to ingest the data: Kinesis Data Firehose is designed for real-time data
streaming into data lakes, data stores, and analytics services. It automatically scales to match the throughput
of incoming data, handling large volumes with ease. This eliminates the need to manage the underlying

infrastructure for ingestion, making it a serverless choice. https://aws.amazon.com/kinesis/data-firehose/

**E.** Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data: AWS
Fargate provides serverless compute for containers. Instead of managing EC2 instances, Fargate handles the
underlying infrastructure. ECS provides the container orchestration layer, enabling you to deploy, manage,
and scale containerized applications. Using Fargate with ECS allows the processing job to scale dynamically
based on the incoming data volume from Kinesis Data Firehose. Containerization helps ensure consistent
execution of the 30-minute processing job. https://aws.amazon.com/fargate/, https://aws.amazon.com/ecs/

Why other options are less suitable:

**B.** Use AWS Lambda with AWS Step Functions to process the data: While Lambda is serverless, its execution
time is limited (currently up to 15 minutes). The 30-minute processing time exceeds this limit, making Lambda
unsuitable.

**C.** Use AWS Database Migration Service (AWS DMS) to ingest the data: AWS DMS is designed for database
migrations, not real-time data streaming ingestion. It's not appropriate for this use case.

**D.** Use Amazon EC2 instances in an Auto Scaling group to process the data: While EC2 Auto Scaling
provides scalability, it introduces infrastructure management overhead. The requirement is for a serverless
solution; thus Fargate is preferred.

---

## Question 866

**Answer:** **A**

**Explanation:**

The correct solution is A: Create a gateway VPC endpoint for Amazon S3 and a route in the VPC route table to
the endpoint. This is because gateway VPC endpoints for S3 provide a direct, private connection to S3 within
the AWS network, bypassing the public internet. EC2 instances within the VPC can then access S3 without
requiring public IP addresses or traversing the internet. The route table entry directs traffic destined for S3 to
the gateway endpoint. This approach ensures that sensitive data transfer remains secure and compliant with
the requirement of not being sent over the public internet.

**Option B** is incorrect because an internal Network Load Balancer cannot target an S3 bucket directly. Load
balancers distribute traffic to instances, IP addresses, or Lambda functions, but S3 is object storage and not a
service that can be directly targeted by an NLB.

**Option C** is incorrect because S3 buckets cannot be deployed inside a VPC. S3 is a regional service managed
by AWS and exists outside the VPC.

**Option D** is incorrect because AWS Direct Connect is used to establish a private connection between an onpremises environment and AWS. While it provides a private connection, it is more complex and costly than
using a gateway VPC endpoint for the purpose of privately accessing S3 from within a VPC. A gateway
endpoint is specifically designed for this scenario and is the simpler, more cost-effective solution.

For further reading, refer to the AWS documentation on VPC endpoints:
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html and gateway endpoints specifically:
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html.

---

## Question 867

**Answer:** **D**

**Explanation:**

The correct answer is D: Use AWS Compute Optimizer to generate EBS volume recommendations for
optimization.
AWS Compute Optimizer directly addresses the requirements of analyzing EBS volume costs and providing
optimization recommendations with estimated savings. Compute Optimizer analyzes the configuration and
utilization metrics of your EC2 instances and EBS volumes. It uses machine learning to identify under-utilized
or over-provisioned EBS volumes and suggests right-sizing options. These suggestions often involve
migrating to different EBS volume types or reducing the size of existing volumes. Crucially, Compute
Optimizer estimates the potential cost savings associated with each recommendation, fulfilling the need for
quantifiable monthly savings estimates.

**Option A** is incorrect because Amazon Inspector focuses on security vulnerabilities within your infrastructure,
not performance optimization or cost analysis of EBS volumes. **Option B**, AWS Systems Manager, is a
management service that helps automate operational tasks across your AWS resources but doesn't provide
EBS volume optimization recommendations or cost savings estimates. **Option C**, Amazon CloudWatch,
provides monitoring and observability data, but it does not directly offer recommendations for EBS volume
optimization or calculate associated cost savings. While you can derive insights from CloudWatch metrics, it
requires manual analysis and doesn't provide the automated analysis and recommendations offered by
Compute Optimizer.

Therefore, AWS Compute Optimizer is the most suitable tool for identifying EBS volume optimization
opportunities and estimating monthly savings, aligning directly with the problem statement's requirements.
Relevant Link:
AWS Compute Optimizer: https://aws.amazon.com/compute-optimizer/

---

## Question 868

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioningenabled across Regions.

Here's why:
Amazon S3 Storage Lens is a cloud storage analytics feature that provides organization-wide visibility into
object storage usage and activity. It offers a single view across all your buckets to identify trends and outliers,
flag data protection gaps, and optimize storage costs. A core capability is its ability to identify buckets that do
not have versioning enabled, directly addressing the company's requirement to identify all S3 buckets across
multiple AWS Regions that lack versioning. The dashboards and metrics provided by S3 Storage Lens are
designed for this type of analysis, providing a comprehensive view that can scale to millions of objects and
multiple regions. https://aws.amazon.com/s3/storage-lens/

**Option C** is incorrect because IAM Access Analyzer for S3 is primarily focused on identifying buckets with
access configurations that might expose data unintentionally to external entities. While it deals with bucket
security, it doesn't directly report on versioning status. Its focus is on external access, not internal
configuration settings like versioning. https://aws.amazon.com/iam/features/access-analyzer/

**Option D** is incorrect because an S3 Multi-Region Access Point is designed to provide a single endpoint for
accessing data stored in multiple S3 buckets across different AWS Regions. Its primary function is to simplify
access and improve performance in multi-region deployments, not to analyze bucket configurations such as
versioning status. It doesn't inherently provide information on which buckets have versioning enabled.
https://aws.amazon.com/s3/features/multi-region-access-points/

---

## Question 869

**Answer:** **A**

**Explanation:**

The requirement is to process e-commerce orders exactly once, even during traffic surges, without affecting
the customer experience. **Option A**, using Amazon SQS FIFO queues and a Lambda function, is the best
solution for this scenario.

Here's why:
Exactly-Once Processing: SQS FIFO (First-In, First-Out) queues are designed to guarantee that messages are
processed exactly once, in the order they are sent, eliminating duplicates and ensuring consistent order
processing. This is crucial for e-commerce where duplicate order processing can lead to customer
dissatisfaction and financial losses.
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html
Handling Traffic Surges: SQS is a fully managed queue service that automatically scales to handle
unpredictable traffic surges. It decouples the order placement process from the actual order processing,
ensuring that the application remains responsive to customers even during peak loads.
Asynchronous Processing: Using SQS allows for asynchronous order processing. The customer doesn't have
to wait for the order to be fully processed before receiving confirmation. This improves the customer
experience by providing immediate feedback and freeing up resources on the application servers.
Lambda Integration: AWS Lambda functions can be directly triggered by SQS messages. This allows for
serverless and event-driven order processing. When a new order is placed in the queue, Lambda automatically
invokes the processing function. Lambda also scales automatically and integrates seamlessly with SQS.
https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
The other options are less suitable:

**Option B** (SNS): SNS standard topics do not guarantee message ordering or exactly-once delivery. They are
designed for high-throughput, but at the expense of potential message duplication and out-of-order delivery.

**Option C** (AppFlow): AppFlow is a data integration service designed for transferring data between AWS
services and SaaS applications. It's not the right tool for real-time order processing with exactly-once
guarantees.

**Option D** (X-Ray and CloudWatch): X-Ray is a tracing service for debugging distributed applications.
CloudWatch is a monitoring service. Neither provides the queueing and processing capabilities required for
reliable order processing.

---

## Question 870

**Answer:** **D**

**Explanation:**

The proposed solution (D) suggests creating an IAM group in the Production account, adding it as a principal
in a trust policy that specifies the Production account, and then adding developers to the group. This is
incorrect because the goal is to allow developers from the Development account to access resources in the
Production account, not developers already in the Production account to access Production account
resources. A trust policy would normally specify the Development account as the trusted entity to allow
cross-account access.
The correct approach leverages IAM roles for cross-account access (**Option C**). Here's a detailed explanation:

1. IAM Role in Production Account: Create an IAM role within the Production account. This role will
define the permissions developers will have when accessing Production resources. The role's policy
document specifies what actions the role can perform on which resources.

2. Trust Policy: Crucially, the role's trust policy dictates who is allowed to assume this role. The trust
policy should specify the Development account's account ID as a trusted principal. This means only
entities (users or roles) from the Development account can assume this Production role. This is how
cross-account access is established.

3. Developer Access: In the Development account, grant the necessary developers (initially the two
senior developers, and later more developers during the beta phase) permission to assume the IAM
role in the Production account. This can be done by attaching an IAM policy to their individual IAM
users or to an IAM group they belong to in the Development account. This policy will use the
sts:AssumeRole action, specifying the ARN (Amazon Resource Name) of the Production account role.
This setup ensures that:
Least Privilege: Developers in the Development account only gain access to the Production account
resources explicitly permitted by the Production account's role.
Auditing: All actions taken in the Production account by developers are auditable under the assumed role,
linking their actions back to the Development account users who assumed the role.
Scalability: As more developers require access during the beta phase, you can simply add them to the
Development account's IAM group with the sts:AssumeRole permission, avoiding the need to modify the
Production account's role configuration frequently.
Centralized Control: The Production account maintains control over who can access its resources via the trust
policy and the permissions attached to the role.

**Option A** is not scalable or centrally managed. **Option B** has the role in the wrong account. Developers need to
assume a role in the Production account to access production resources.

---

## Question 871

**Answer:** **A**

**Explanation:**

The correct answer is A because it provides a serverless, scalable, and globally distributed solution for
authentication and authorization with low latency.
Let's break down why the other options are less suitable:

**Option B**: AWS Directory Service for Microsoft Active Directory is primarily designed for enterprises already
using Active Directory and wanting to extend it to AWS. It's not ideal for a new, cloud-native application, and
it's certainly not a serverless authentication solution. Moreover, Lambda alone might struggle to provide the
low-latency global authorization needed without a globally distributed caching mechanism. An ALB does not
serve web content directly; it requires underlying instances.

**Option C**: While Amazon Cognito provides authentication and Lambda can handle authorization, S3 Transfer
Acceleration only accelerates uploads to S3, not content delivery. It doesn't address the requirement of
serving web content globally. The web application needs more than just faster uploads.

**Option D**: AWS Directory Service has the same problem as in **Option B**. While Lambda@Edge provides global
authorization capabilities, Elastic Beanstalk, while useful for deployment, adds operational overhead and
doesn't inherently provide the global content delivery capabilities that CloudFront does. It also doesn't
directly support serving web content globally without additional configurations for CDN.

**Option A** leverages the following key AWS services:
Amazon Cognito: Provides secure and scalable authentication. It handles user sign-up, sign-in, and access
control for web and mobile applications. Cognito is serverless and can scale to millions of users.
https://aws.amazon.com/cognito/
Lambda@Edge: Allows you to run Lambda functions at CloudFront edge locations. This enables low-latency
authorization checks as requests are routed to the nearest edge location. It is a serverless compute service.
https://aws.amazon.com/lambda/edge/
Amazon CloudFront: A content delivery network (CDN) that distributes web content globally, improving
performance and reducing latency for users worldwide. It integrates seamlessly with Lambda@Edge for edgebased authorization. https://aws.amazon.com/cloudfront/
By combining these services, option A delivers a serverless, highly scalable, and globally distributed
authorization solution with low latency, perfectly addressing the problem statement's requirements.
Lambda@Edge allows for custom authorization logic to be executed close to the user, decreasing latency.
CloudFront enables global content delivery, ensuring a good user experience irrespective of user location.
Cognito is the standard AWS service for user authentication.

---

## Question 872

**Answer:** **D**

**Explanation:**

The correct answer is D: Create an organization in AWS Organizations in the management account with the
default policy. Create a service control policy (SCP) that denies the launch of large EC2 instances, and
apply it to the AWS accounts.

Here's a detailed justification:
AWS Organizations and SCPs for Centralized Control: AWS Organizations allows you to centrally manage
and govern multiple AWS accounts. Service Control Policies (SCPs) are a powerful feature within
Organizations that enable you to define guardrails and restrictions on the AWS services and actions that users
and roles can perform within member accounts.
Least Operational Overhead: SCPs offer the least operational overhead because they are centrally managed
from the Organizations management account. You define the policy once and apply it to multiple accounts,
eliminating the need to configure individual IAM policies in each account. This significantly reduces
administrative effort and ensures consistent enforcement across the environment.
Preventing Large Instance Launches: The SCP can be written to explicitly deny the ec2:RunInstances action
when the instance type specified in the request matches a large instance size (e.g., m5.2xlarge, c5.4xlarge).
This effectively prevents developers from launching such instances in any account where the SCP is in effect.
IAM Policies vs. SCPs: While IAM policies (option A) can also be used to restrict instance launches, they
would need to be updated and applied to every user and account, resulting in significant administrative
overhead. IAM roles (option C) also require per-account configuration.
Resource Access Manager (RAM) Inapplicability: AWS Resource Access Manager (RAM) is used for sharing
AWS resources between accounts, not for restricting actions within accounts. **Option B** is therefore not a
suitable solution for this problem.
Centralized Enforcement and Auditability: SCPs provide centralized enforcement, ensuring that the
restrictions are always in place, even if users attempt to bypass them. They also improve auditability, allowing
administrators to easily track which policies are applied to which accounts.

Therefore, using AWS Organizations and SCPs to deny the launch of large EC2 instances is the most efficient
and scalable solution that meets the requirement with the least operational overhead.

---

## Question 873

**Answer:** **B**

**Explanation:**

**Option B** is the most appropriate solution to automate inventory, updates, and vulnerability assessments for
the company's EC2 instances. AWS Systems Manager Patch Manager effectively addresses the need for
operating system inventory and automated patching on both Windows and Linux instances. Patch Manager
centralizes the management of patching across the diverse fleet, ensuring consistent and up-to-date systems.
Amazon Inspector complements Patch Manager by providing vulnerability assessments. Inspector
automatically assesses EC2 instances for software vulnerabilities and unintended network exposure. By
configuring monthly reports in Inspector, the company gains a summary of common vulnerabilities of each
instance, fulfilling the requirement for regular monthly reviews.

**Option A** is incorrect because AWS Security Hub primarily focuses on security posture management by
aggregating findings from other AWS security services like Inspector and GuardDuty. While Security Hub
provides a consolidated view of security alerts, it doesn't directly perform vulnerability scanning and
assessment at the instance level like Inspector does.**Option C** is incorrect because AWS Shield Advanced
protects against DDoS attacks and doesn't manage EC2 instance patching or vulnerability assessments. AWS
Config focuses on configuration management and compliance and can't automate patching.**Option D** is
incorrect because Amazon GuardDuty provides threat detection by analyzing logs and network activity and
doesn't automate patching or vulnerability assessments. AWS Config focuses on configuration management
and compliance and can't automate patching.

Therefore, the combination of Systems Manager Patch Manager for patching and Amazon Inspector for
vulnerability assessment, coupled with monthly reporting, comprehensively addresses the company's
requirements.

---

## Question 874

**Answer:** **C**

**Explanation:**

The goal is to achieve minimal downtime DR for an application using EC2, ELB, and DynamoDB. **Option C**
offers the best approach by pre-configuring most resources and leveraging DynamoDB's global table feature.
Here's why C is superior:

1. DynamoDB Global Tables: DynamoDB global tables provide near real-time replication of data across
AWS Regions. This ensures that the DR Region has the latest data, minimizing data loss during a
failover. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.html

2. CloudFormation Template: Using a CloudFormation template allows you to define your EC2 and ELB
infrastructure as code. When a DR event occurs, you can quickly launch the stack in the DR Region.
This automates the deployment process and reduces the time needed to bring the application back
online.

3. DNS Failover: Configuring DNS failover (using services like Amazon Route 53) allows you to redirect
traffic from the primary Region to the DR Region in the event of a failure. This is crucial for ensuring
that users can still access the application, albeit from the DR Region.
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html
Why other options are less ideal:

**Option A**: While it creates Auto Scaling group and ELB beforehand, without a CloudFormation template, the
configuration might be inconsistent and difficult to manage.

**Option B**: Similar to **Option A**, lacks the pre-configured infrastructure management benefit of Auto Scaling.

**Option D**: Using CloudWatch alarms and Lambda for Route 53 updates adds complexity and potential latency
to the failover process. Direct DNS failover is faster and simpler. Furthermore, a 10-minute evaluation period is
too long for achieving minimal downtime.

In summary, option C minimizes downtime by replicating data in near real-time with DynamoDB global tables
and utilizing infrastructure as code (CloudFormation) to rapidly deploy the application in the DR region and
employing DNS failover to seamlessly switch traffic to the DR Region.

---

## Question 875

**Answer:** **D**

**Explanation:**

The correct answer is D. Deploy an S3 gateway endpoint to access the S3 buckets.

Here's a detailed justification:
The primary requirement is that data transfers between the EC2 instances and S3 buckets must not traverse
the public internet while also aiming for a cost-effective solution.
Gateway Endpoints: Gateway endpoints are designed specifically for accessing S3 and DynamoDB from
within a VPC without using public IPs or NAT gateways. They operate at Layer 3 (Network Layer) and are
highly cost-effective because there are no data processing or hourly charges associated with their use. Traffic
to S3 via a gateway endpoint remains within the AWS network.
Interface Endpoints: Interface endpoints use AWS PrivateLink, which provides private connectivity to AWS
services using private IP addresses within your VPC. While they also avoid public internet traffic, they incur
hourly charges and data processing charges, making them less cost-effective than gateway endpoints for S3
access when only S3 is involved. Interface endpoints operate at Layer 4 (Transport Layer).
NAT Gateway: A NAT gateway allows instances in a private subnet to connect to the internet or other AWS
services. However, traffic routed through a NAT gateway traverses the public internet to reach S3. This
violates the stated requirement of keeping data off the public internet.
AWS Storage Gateway: AWS Storage Gateway is used to integrate on-premises environments with AWS
storage services. It is not the correct solution for EC2 instances already running within AWS that need private
access to S3. It also is more complex and costly than the endpoint solutions.

Therefore, deploying an S3 gateway endpoint is the most cost-effective way to meet the requirement of
accessing S3 from a private subnet without traversing the public internet. Gateway endpoints are free of
usage charges beyond the standard S3 storage and data transfer costs, and they are designed specifically for
S3 and DynamoDB access. It leverages the AWS backbone and is the most direct way for the given scenario.
Further Research:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
Interface Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-interface.html

---

## Question 876

**Answer:** **BD**

**Explanation:**

Here's a breakdown of why options B and D are the most cost-effective solutions for achieving high
availability for the described application:

**B.** Configure a Network Load Balancer in front of the EC2 instances.
High Availability: A Network Load Balancer (NLB) is designed for handling TCP traffic at high throughput and
low latency. Critically, NLBs operate at layer 4 of the OSI model (transport layer), aligning with the
application's described usage. They automatically distribute incoming traffic across multiple healthy EC2
instances.
Availability Zone Awareness: NLBs can distribute traffic across multiple Availability Zones within a region.
This means that if one Availability Zone experiences an outage, the NLB can automatically route traffic to
instances in other healthy Availability Zones, ensuring continuous application availability.
Health Checks: NLBs continuously monitor the health of registered EC2 instances. If an instance fails a health
check, the NLB stops sending traffic to that instance, preventing users from experiencing disruptions.
Cost-Effectiveness: NLBs are highly scalable and cost-efficient. You pay for what you use, based on the
number of connections and the amount of data processed. NLBs are generally more cost-effective than
solutions that require complex custom configurations or larger infrastructure footprints.

**D.** Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple
Availability Zones. Configure the Auto Scaling group to run application health checks on the instances.
High Availability: Auto Scaling groups (ASGs) allow you to maintain a desired number of EC2 instances
automatically. By configuring the ASG to span multiple Availability Zones, you ensure that if one AZ fails,
instances in other AZs can continue to serve traffic.
Automatic Recovery: ASGs can automatically replace unhealthy instances. When an EC2 instance fails a
health check, the ASG terminates the unhealthy instance and launches a new instance to maintain the desired
capacity. This self-healing capability enhances application availability.
Health Checks: ASGs integrate with Elastic Load Balancing (ELB) health checks. This allows the ASG to
monitor the health of instances based on the application's responsiveness.
Cost-Effectiveness: ASGs enable you to scale your infrastructure up or down based on demand. This helps
you optimize your costs by only paying for the resources you need. Also, the automated nature of ASGs
reduces the need for manual intervention, which can save time and resources.
Why other options are less optimal:

**A.** Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all
instances. While this improves availability, Route 53 alone lacks the dynamic health-checking capabilities of
NLB or ASG health checks. It's slower to react to instance failures and less efficient in distributing load.

**C.** Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load
Balancer for HTTP and HTTPS traffic to the instances. This is unnecessarily complex and expensive if the

application primarily uses TCP, as stated. An ALB is designed for HTTP/HTTPS traffic, and using both would
introduce extra overhead.

**E.** Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a
stopped state. Restarting instances is not an effective high-availability strategy because it can cause
downtime. This approach does not prevent disruptions as well as an NLB with an ASG.

---

## Question 877

**Answer:** **B**

**Explanation:**

The most cost-effective solution for a low-traffic contact form on an S3-hosted website is option B. Here's
why:
Scalability and Cost: Lambda and API Gateway offer a serverless architecture. You only pay for the actual
invocations, making it incredibly cheap for under 100 monthly visits. ECS (A) would involve running containers
constantly, incurring higher costs even when idle. EC2 (D) involves substantial fixed costs for the instance.
Amplify Hosting (C) can be suitable, but the chosen components make it less economical compared to a fully
serverless approach.
Dynamic Content Handling: API Gateway and Lambda easily handle dynamic content. The Lambda function
can generate and serve the initial contact form. The other Lambda function is triggered by the API Gateway
upon form submission.
Email Notification: SNS provides a straightforward way to send email notifications. When the contact form is
submitted, the Lambda function publishes a message to the SNS topic, which in turn triggers an email to the
company. SES is needed to send the mail using AWS.
Simplicity: API Gateway, Lambda, and SNS are straightforward services to configure and integrate. SQS (C) is

not directly used to send mails, and it is less appropriate for notification of the contact forms.

**Option D** is highly inefficient and costly. Migrating to EC2 for a simple contact form overcomplicates the
setup, resulting in higher maintenance overhead and costs. Client-side scripting might work for basic form
validation, but it can't handle server-side logic or send emails directly. **Option A**, while functional, introduces
more complexity than needed and may incur higher costs due to ECS cluster maintenance. **Option C** is
reasonable, but SQS is not specifically suited to send email notifications.

---

## Question 878

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most secure and appropriate solution, along with
supporting concepts and links:

**Option A** is the most secure because it utilizes alternate contacts and a centrally managed email strategy. By
configuring each AWS account to use a single, company-managed email address (that authorized personnel
can access) for the root user, the company retains greater control and auditing capabilities. This avoids tying
critical notifications to individual employee email addresses which can pose a security risk if an employee
leaves the organization. Furthermore, configuring alternate contacts with distribution lists for billing, security,
and operations teams ensures that the right stakeholders receive the right notifications without granting
unnecessary root user access. This approach follows the principle of least privilege.

**Option B** is less secure. Distributing root user email to distribution lists raises security concerns. It increases
the attack surface because more individuals potentially have access to highly sensitive information and
actions associated with the root user.

**Option C** is less secure. While using individual company-managed emails seems better, it still ties root user
access to specific individuals. If that person leaves, there's a risk the email isn't properly transitioned. Also,
relying on individuals rather than distribution lists for functional roles (billing, security) is operationally brittle.

**Option D** is less secure. Using aliases and centralized mailboxes for root user emails can be acceptable, but it
needs careful management. The primary issue here is it only creates ONE distribution list for each category
(billing, security, operations) across all accounts. This isn't ideal; each AWS account should ideally have its
own specific distribution lists for alternate contacts, improving isolation and reducing the risk of crossaccount information leakage.

In summary, **Option A** provides the best balance of security, operational efficiency, and adherence to the
principle of least privilege by centralizing root user access management and leveraging alternate contacts
with dedicated distribution lists.

---

## Question 879

**Answer:** **BC**

**Explanation:**

The best combination of actions to address the timeouts and scale the ecommerce application costeffectively is B and C.

**B.** Configure the application to use an Amazon ElastiCache cluster in front of the Aurora PostgreSQL DB
cluster:
ElastiCache acts as an in-memory cache, storing frequently accessed data. This significantly reduces the load
on the Aurora PostgreSQL database by serving read requests from the cache instead of the database. This
directly addresses the performance bottlenecks caused by heavy read operations during peak usage. Using
ElastiCache improves response times and reduces database load, enabling the application to handle more
concurrent requests. This also avoids costly resizing of database instance to address peak read
demands.https://aws.amazon.com/elasticache/

**C.** Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon
SQS) queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue:
Introducing an SQS queue decouples the purchase request processing from the immediate user interaction.
When a customer initiates a purchase, the request is placed in the SQS queue. An Auto Scaling group of EC2
instances then retrieves these requests from the queue and processes them asynchronously. This ensures
that the application remains responsive to user requests, even during peak loads. The Auto Scaling group
automatically scales up or down based on the queue depth, providing elasticity and cost optimization. By
offloading processing to a queue, the application can handle a much higher volume of requests without
experiencing timeouts. This distributed queueing is a classic pattern for handling spiky
workloads.https://aws.amazon.com/sqs/
Why other options are not as suitable:

**A:** While RDS Proxy can help manage database connections, simply retrying purchases on the same
overloaded EC2 instances will likely perpetuate the problem and not effectively address the fundamental
scaling bottleneck.

**D:** Lambda functions have execution time limits and might not be suitable for long-running purchase
processing tasks. Furthermore, retrying long running tasks from Lambda may lead to throttling issues.

**E:** API Gateway usage plans primarily manage API request rates and quotas. While useful for controlling
access, they do not directly address the underlying scaling issues related to database load or processing
capacity.

Therefore, using ElastiCache for caching and SQS with Auto Scaling for asynchronous processing is the most
cost-effective and efficient approach to scaling the ecommerce application to handle peak usage demands.

---

## Question 880

**Answer:** **B**

**Explanation:**

The requirement is to create a custom dashboard showing daily NAT gateway costs from the beginning of the
month, sourced from the AWS Cost and Usage Report (CUR) across 30 AWS accounts managed by AWS
Organizations. QuickSight and Athena are the appropriate services to achieve this goal.

**Option B** suggests using QuickSight for dashboarding and Athena to query the CUR data. QuickSight is a

business intelligence service that allows you to create interactive dashboards and visualizations. Athena is a
serverless query service that allows you to analyze data stored in Amazon S3 using standard SQL. The CUR is
delivered to an S3 bucket, making it easily accessible to Athena. Athena can then query the CUR data to
extract the daily NAT gateway costs. Finally, QuickSight can connect to Athena to visualize the data in a
custom dashboard.

**Option A** suggests using QuickSight for dashboarding and AWS DataSync to query the CUR report. While
DataSync efficiently moves large amounts of data between on-premises storage and AWS, it does not provide
a mechanism for querying and analyzing the report data directly. DataSync is primarily used for data
migration and replication, not SQL-based querying. This approach wouldn't readily allow for extraction of the
specific daily NAT Gateway costs.

**Option C** suggests using CloudWatch for dashboarding and AWS DataSync to query the CUR report.
CloudWatch is primarily a monitoring service for AWS resources and applications. It is suitable for visualizing
metrics, logs, and events, but not for querying complex structured data like the CUR. Like option A, DataSync
is not designed for querying the CUR report.

**Option D** suggests using CloudWatch for dashboarding and Athena to query the CUR report. While Athena can
query the CUR data, CloudWatch is not the best tool for creating interactive dashboards. It's mainly intended
for monitoring operational metrics, logs, and events. QuickSight is purpose-built for data visualization and
creating custom dashboards.

Therefore, using QuickSight for the dashboard and Athena for querying the CUR data is the most suitable and
cost-effective solution. Athena offers the flexibility to query and filter the CUR data according to the
specified requirements (daily NAT gateway costs from the beginning of the month), and QuickSight enables
visualizing that data in a customized dashboard.

---

## Question 881

**Answer:** **AC**

**Explanation:**

Let's break down why options A and C are the best choices for implementing caching in this scenario while
minimizing stale content.

**Option A**: Set the CloudFront default TTL to 2 minutes.
Setting a default TTL (Time To Live) on the CloudFront distribution is a fundamental step for enabling caching.
TTL dictates how long CloudFront edge locations will store a copy of the content before checking back with
the origin (S3 in this case) for a fresh version. A TTL of 2 minutes directly addresses the requirement to avoid
serving stale content for more than a few minutes. With a 0-second TTL, CloudFront currently fetches every
request from S3, negating the benefits of a CDN. A short TTL allows for more frequent updates while still
reducing the load on S3 and improving latency for users.

**Option C**: Add a Cache-Control private directive to the objects in Amazon S3.
The Cache-Control: private directive is crucial because it specifies that the content should only be cached by
the browser (viewer) making the request and not by intermediate caches such as proxies or, importantly,
CloudFront. However, in this case the object is stored in S3, so this option will not achieve the goal of caching
the object on the CloudFront side. A Cache-Control: public on the S3 object, along with a CloudFront TTL,
allows CloudFront to cache the object. But this setup is not enough to fulfill the requirements of the use case,
it needs the option A to be enabled. So option C is not suitable to be implemented and it is not part of the right
answer.
The correct answer is AE.

**Option A**: Set the CloudFront default TTL to 2 minutes.
Setting a default TTL on the CloudFront distribution is fundamental for enabling caching. TTL dictates how
long CloudFront edge locations will store content before checking back with the origin (S3) for a fresh
version. A TTL of 2 minutes directly addresses the requirement to avoid serving stale content for more than a
few minutes. A zero-second TTL causes CloudFront to fetch every request from S3, negating CDN benefits.

**Option E**: Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment,
create a CloudFront invalidation to clear any changed files from edge caches.
Adding Cache-Control: max-age=86400 (24 hours) to S3 objects instructs CloudFront to cache the objects for
up to 24 hours. This maximizes caching effectiveness and reduces S3 origin requests. The key here is the
subsequent CloudFront invalidation. After a deployment with content changes, an invalidation tells
CloudFront to remove existing cached versions of specific files. This forces CloudFront to fetch the latest
versions from S3, ensuring users always receive the most up-to-date content. This avoids the problem of the
potentially stale objects.
Let's examine why the other options are incorrect:

**Option B**: Setting a default TTL on the S3 bucket itself is not applicable. S3 buckets don't have TTL settings in
the way that CloudFront distributions do. S3 focuses on storage and object management, not content delivery
and caching.

**Option D**: While Lambda@Edge can be used for adding or modifying headers, it's unnecessary and adds
complexity to this scenario. Setting the Cache-Control header directly on the S3 objects is a simpler and more
efficient approach.

---

## Question 882

**Answer:** **C**

**Explanation:**

The correct answer is C: Purchase a Compute Savings Plan. Connect the Lambda functions to the private
subnets that contain the EC2 instances.
Here's a breakdown of why this is the most cost-effective and functional solution:
Lambda and VPC Access: Lambda functions, by default, don't have access to resources inside a VPC. To grant
this access, you need to connect them to the VPC's subnets. The question explicitly states that the Lambda
functions require direct network access to the EC2 instances. Therefore, the Lambda function must be inside
of the VPC.
Private Subnets: Since the EC2 instances reside in private subnets, connecting the Lambda functions to those
same private subnets allows them to communicate directly with the EC2 instances without exposing them to
the public internet. **Option B**'s proposal of using public subnets introduces unnecessary security risks and is
not aligned with best practices when EC2 instances are designed to be private.
Savings Plans (Compute vs. EC2 Instance): Savings Plans offer discounted pricing in exchange for a
commitment to a consistent amount of compute usage over a one- or three-year term. There are two types
relevant here: Compute Savings Plans and EC2 Instance Savings Plans. A Compute Savings Plan is a better
option than an EC2 Instance Savings Plan in this situation. This is because a Compute Savings Plan gives you
flexibility across EC2, AWS Lambda, and AWS Fargate. Since the question stated that the application will use
both EC2 instances and Lambda functions (and that the number of Lambda functions will increase), a
Compute Savings Plan better addresses the overall compute needs.
Cost Optimization: A Compute Savings Plan provides cost savings on both the EC2 instances and Lambda
functions. This is essential to meet the "minimize costs" requirement. Since both EC2 and Lambda resources
are in the compute footprint, a Compute Savings Plan is preferred over an EC2 Instance Savings Plan.
Lambda in Lambda Service VPC (**Option D**): The solution specifies that the Lambda functions need direct
network access to the EC2 instances. Lambda functions kept in the Lambda service VPC do not have direct
network access to a customer's VPC. The solution would therefore fail to fulfill a critical requirement.

In summary, connecting the Lambda functions to the existing private subnets and purchasing a Compute

Savings Plan provides the required connectivity and cost-effectiveness across both EC2 and Lambda, making
option C the best solution.
Supporting Documentation:
AWS Lambda VPC Networking: https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html
AWS Savings Plans: https://aws.amazon.com/savingsplans/
Choosing the right Savings Plan: https://aws.amazon.com/savingsplans/faq/

---

## Question 883

**Answer:** **B**

**Explanation:**

The most effective and least operationally intensive solution to control AWS resource costs for developers in
a multi-account AWS Control Tower environment is to use AWS Budgets. Here's why:
AWS Budgets: This service is designed specifically for cost management. You can create budgets at the
account level, perfectly aligning with individual developer accounts. (https://aws.amazon.com/aws-costmanagement/aws-budgets/)
Budget Alerts: AWS Budgets allow setting alerts based on actual and forecasted costs. Developers receive
timely notifications when they are approaching or exceeding their allocated budget, promoting cost
awareness.
Budget Actions: AWS Budgets Actions offer automated responses to budget breaches. Applying a DenyAll
policy to a developer's IAM role upon exceeding the budget prevents further resource provisioning,
effectively capping costs.
Least Operational Overhead: AWS Budgets integrates seamlessly with AWS accounts and IAM.
Configuration requires minimal custom coding or infrastructure, resulting in lower operational overhead
compared to other options.
Let's analyze why the other options are less ideal:

**Option A** (Tagging and Lambda): While tagging is a good practice for cost allocation, relying on developers to
consistently tag resources and using Lambda to enforce it is prone to errors and requires ongoing

maintenance. required-tags checks compliance but doesn't actively limit costs.

**Option C** (Cost Explorer and Anomaly Detection): Cost Explorer and Anomaly Detection are valuable for
monitoring but don't prevent developers from exceeding budgets. They provide reactive alerts, not proactive
cost control.

**Option D** (Service Catalog and Lambda): Service Catalog can limit resource types, but controlling costs
within that limit is challenging. Using Lambda to start/stop resources introduces complexity and might disrupt
development workflows. It also limits developer flexibility.

In summary, AWS Budgets, with its alerting and action capabilities, offers the most direct and automated way
to limit AWS resource costs for developers while minimizing operational burden in an AWS Control Tower
multi-account setup.

---

## Question 884

**Answer:** **ACE**

**Explanation:**

Let's break down why options A, C, and E are the correct security group configurations for this three-tier
architecture, focusing on the principle of least privilege and defense in depth.

**A:** Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for
the ALB. This is essential because the ALB acts as the entry point for all external HTTPS requests. By
allowing inbound traffic only from the ALB's security group, you restrict access to the web tier to only
legitimate requests routed through the load balancer, preventing direct access from the internet. This
adheres to the principle of least privilege.

**C:** Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the
security group for the application tier. The application tier needs to communicate with the database tier to
read and write data. Restricting inbound SQL Server (typically port 1433) traffic only from the application
tier's security group is crucial. This prevents unauthorized access to the database from any other source,
which is a fundamental security best practice.

**E:** Configure the security group for the application tier to allow inbound HTTPS traffic from the security
group for the web tier. The application tier processes the business logic based on requests it receives from
the web tier. Allowing inbound HTTPS (or, ideally, internal HTTP on port 80 if using TLS termination at the

web tier) traffic only from the web tier's security group ensures that only the web tier can initiate requests to
the application tier.
Now, let's discuss why the other options are incorrect:

**B:** Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0. Allowing
unrestricted outbound traffic (0.0.0.0/0) from the web tier is a security risk. While outbound internet access
may be necessary for some operations (e.g., updates, logging), it should be limited to specific, known
destinations and protocols. In many setups, the EC2 instance in the private subnet can leverage a NAT
gateway in the public subnet. If the instance only has to connect to AWS services, VPC endpoints are a more
secure and preferred solution.

**D:** Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL
Server traffic to the security group for the web tier. The database tier should not be initiating connections
back to the web tier. The communication flow is typically from the web tier to the application tier to the
database tier. Allowing the database tier to initiate connections to other tiers is a security violation.

**F:** Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL
Server traffic to the security group for the web tier. Similar to option D, the application tier needs to
communicate only with the database tier, not the web tier. The standard pattern has the web tier fronting the
application tier.

In summary, the correct security group configuration focuses on restricting traffic based on the principle of
least privilege, allowing only necessary communication between tiers and blocking all other access.
Further Reading:
AWS Security Groups
Network Access Control Lists (NACLs)
AWS Security Best Practices

---

## Question 885

**Answer:** **CD**

**Explanation:**

Here's a breakdown of why the correct answer is C and D, and why the other options are less suitable:
Why C (Purchase a SageMaker Savings Plan) is correct: SageMaker Savings Plans are specifically designed
to cover the costs associated with using Amazon SageMaker. Since the company's workload includes
SageMaker, purchasing this savings plan directly addresses a key service contributing to their overall

expenses. This is the most direct and cost-effective way to optimize SageMaker costs.
Why D (Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2) is correct: Compute
Savings Plans offer flexibility and apply to EC2, Lambda, and Fargate usage. This single savings plan covers a
substantial portion of the company's workload (Lambda, Fargate, and EC2), providing significant cost
optimization across these services with a single commitment. Compute Savings Plan provides the flexibility to
change instance types, operating systems, tenancies, and AWS Regions while still benefiting from the savings
plan price.
Why A (Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker) is incorrect: EC2 Instance
Savings Plans are designed for EC2 instance usage within a specific instance family and AWS Region. While it
covers EC2, it does not apply to SageMaker directly.
Why B (Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker) is incorrect: While
Compute Savings Plans do apply to EC2 and Lambda, they do not cover SageMaker costs directly. Using a
SageMaker Savings Plan to cost optimize SageMaker will be more effective.
Why E (Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate) is incorrect: EC2 Instance
Savings Plans are specific to EC2 instance families within a region and cannot be directly used for Fargate.
Fargate is covered by compute Savings Plans.
By selecting a SageMaker Savings Plan (C) and a Compute Savings Plan (D), the company efficiently covers
all their core services (EC2, Lambda, Fargate, and SageMaker) with minimal complexity, achieving cost
optimization across their entire workload.
Here are authoritative links for further research:
AWS Savings Plans: https://aws.amazon.com/savingsplans/
SageMaker Savings Plans: https://aws.amazon.com/sagemaker/pricing/
EC2 Instance Savings Plans: https://aws.amazon.com/savingsplans/compute-savings-plans/
Compute Savings Plans: https://aws.amazon.com/savingsplans/compute-savings-plans/

---

## Question 886

**Answer:** **BC**

**Explanation:**

The correct answer is BC. Here's why:

**B.** Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications.
Babelfish for Aurora PostgreSQL is specifically designed to allow Aurora PostgreSQL to understand and

process SQL Server Transact-SQL (T-SQL) commands directly. This drastically minimizes the need for
application code changes during migration from Microsoft SQL Server. By enabling Babelfish, the applications
can continue to send T-SQL queries, and Babelfish translates them into a format Aurora PostgreSQL can
understand, thus fulfilling the requirement of minimal application changes. This approach avoids rewriting
queries in the application code, making it the quickest method to get compatible behavior.
https://aws.amazon.com/rds/aurora/babelfish/

**C.** Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS
Database Migration Service (AWS DMS).
AWS SCT helps convert the database schema from Microsoft SQL Server to Aurora PostgreSQL. It identifies
potential compatibility issues and provides recommendations for resolving them. AWS DMS then migrates the
actual data from the source SQL Server database to the Aurora PostgreSQL database. This is the standard
approach for migrating database schemas and data to AWS, especially when dealing with different database
engines. It ensures that the schema is properly converted and the data is transferred accurately and
efficiently.
https://aws.amazon.com/dms/https://aws.amazon.com/sct/

Why other options are incorrect:

**A.** Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications: AWS
SCT primarily focuses on schema conversion and reporting, not directly rewriting application queries. While
SCT can provide guidance for adapting queries, automating this in application code is beyond its main
function and would involve significant manual effort, conflicting with the "minimal changes" requirement.

**D.** Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL: RDS Proxy is used for
managing database connections and improving application scalability, resilience, and security. It does not
handle query translation or schema conversion, so it wouldn't address the core requirement of application
compatibility with Aurora PostgreSQL.

**E.** Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications: AWS
DMS is designed for data migration, not for rewriting SQL queries in the application layer. Its primary function
is to replicate data changes between database systems.

---

## Question 887

**Answer:** **B**

**Explanation:**

The correct answer is B: Use AWS Config. Configure the encrypted-volumes identifier. Apply the default
AWS Key Management Service (AWS KMS) key.

Here's why:
AWS Config allows you to assess, audit, and evaluate the configurations of your AWS resources. By using
AWS Config, you can create rules that check whether your EBS volumes are encrypted. The encrypted-volumes
managed rule specifically checks for EBS volume encryption. You can configure this rule to automatically
remediate non-compliant resources, specifically unencrypted EBS volumes. By applying a default AWS KMS
key to this rule, any newly created EBS volumes that are not explicitly encrypted using a KMS key during
creation will be automatically encrypted using the specified key.

**Option A** (Configure the EC2 account attributes) while useful for default encryption, does not inherently
prevent the creation of unencrypted volumes. Users could still explicitly disable encryption during volume
creation. AWS Config provides the crucial enforcement aspect.

**Option C** (AWS Systems Manager) involves creating copies of EBS volumes. This is unnecessary overhead and
doesn't directly prevent unencrypted volumes from being created initially. It's a reactive, rather than
proactive, approach.

**Option D** (AWS Migration Hub) is primarily for tracking application migrations and does not directly control
EBS volume encryption policies. It's not relevant to the problem of enforcing encryption on newly created EBS
volumes.

Therefore, AWS Config with the encrypted-volumes rule and a default KMS key is the most suitable solution to
ensure default encryption and prevent unencrypted volume creation. It proactively enforces the required
configuration.
Relevant Documentation:
AWS Config managed rules for EBS: https://docs.aws.amazon.com/config/latest/developerguide/encryptedvolumes.html
AWS Config overview: https://aws.amazon.com/config/

---

## Question 888

**Answer:** **A**

**Explanation:**

The correct answer is A: "Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture
the clickstream data. Use AWS Lambda to process the data in real time."

Here's a detailed justification:
The scenario requires capturing and processing clickstream data in real-time with fluctuating traffic. Amazon
Kinesis Data Streams is designed for high-throughput, real-time data streaming. On-demand mode within
Kinesis Data Streams provides a scalable and cost-effective solution for varying traffic patterns. With ondemand capacity mode, Kinesis Data Streams automatically scales in response to your application's
throughput. This eliminates the need for capacity planning and manual scaling.
AWS Lambda, being a serverless compute service, can process data in real-time, triggered by events from
Kinesis Data Streams. Lambda functions scale automatically with the incoming traffic, ensuring that data is
processed efficiently even during peak periods. This combination offers a fully managed, scalable, and costeffective solution for real-time clickstream analysis.

**Option B** is incorrect because Amazon Kinesis Data Firehose is best suited for loading data into data lakes or
data warehouses like Amazon S3, Amazon Redshift, or Splunk. While it handles scaling well, it's optimized for
batching and delivering data rather than real-time, per-record processing. AWS Glue is an ETL service, ideal
for data transformation and cataloging, but it's not directly integrated for real-time processing in the same
way as Lambda with Kinesis Data Streams.

**Option C** is incorrect because Amazon Kinesis Video Streams is designed for streaming video and audio data,
not general clickstream data. Although it can handle real-time data, it is not the appropriate tool for handling
clickstream events. Using AWS Glue in combination is also unsuitable for real-time processing needs.

**Option D** is incorrect because Amazon Managed Service for Apache Flink (formerly Amazon Kinesis Data
Analytics) is used for processing and analyzing streaming data using SQL or Java/Scala code. While it is
capable of real-time processing, it introduces more complexity than necessary for simply transforming and
forwarding clickstream data. It might be an over-engineered solution if basic transformations are sufficient.
Kinesis Data Analytics captures data, and that is not what it primarily does.

Therefore, the combination of Kinesis Data Streams (on-demand) for scalable data ingestion and AWS
Lambda for real-time processing best addresses the scenario's requirements.

---

## Question 889

**Answer:** **B**

**Explanation:**

The correct answer is B: Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioningenabled across Regions.

Here's why:
Amazon S3 Storage Lens is designed to provide organization-wide visibility into object storage, identify cost
optimization opportunities, and apply data protection best practices. A key feature of S3 Storage Lens is its
ability to aggregate metrics across multiple accounts and regions. It provides a central dashboard to view S3
storage usage, activity trends, and identify anomalies. Among the many metrics it tracks, S3 Storage Lens
provides the capability to report on buckets that do not have versioning enabled. This makes it the ideal tool
for the company's requirement to identify such buckets across all regions.

**Option A** is incorrect because AWS CloudTrail primarily captures API calls made to AWS services. While
CloudTrail can record calls related to S3 versioning, it doesn't natively provide a consolidated view of all S3
buckets and their versioning status across regions. It would require significant post-processing and analysis
of CloudTrail logs to achieve the desired outcome, making it inefficient.

**Option C** is incorrect because IAM Access Analyzer for S3 focuses on identifying buckets with access control
list (ACL) settings that allow public access. It's designed to help you discover unintentionally shared buckets
and resources. While Access Analyzer provides insights into access permissions, it doesn't directly assess or
report on the versioning status of S3 buckets.

**Option D** is incorrect because S3 Multi-Region Access Points are used to simplify access to data stored in S3
buckets across multiple AWS regions. They provide a single endpoint for applications to access data,
regardless of the region where the data is stored. They do not have the built-in functionality to assess or
report on the versioning status of S3 buckets.

In summary, S3 Storage Lens is specifically built to provide the required visibility and reporting functionality
for the company's use case, making it the most suitable solution.
Reference links:
Amazon S3 Storage Lens
AWS CloudTrail
IAM Access Analyzer for S3
Amazon S3 Multi-Region Access Points

---

## Question 890

**Answer:** **A**

**Explanation:**

The question asks for the most cost-effective solution for storing infrequently accessed files in S3 while
ensuring immediate accessibility and long-term retention.

**Option A** proposes using S3 Glacier Instant Retrieval after 30 days. This class is designed for infrequently
accessed data that requires immediate retrieval, making it suitable given the requirement for immediate
accessibility. The files are deleted after 4 years, fulfilling the retention requirement.

**Option B** suggests S3 One Zone-IA. While cheaper than S3 Standard, it only stores data in a single availability
zone, posing a risk if that zone becomes unavailable. The question states the data cannot be recreated,
therefore availability must be prioritised, making this a risky option.

**Option C** recommends S3 Standard-IA. This is cheaper than S3 Standard but more expensive than Glacier
Instant Retrieval for infrequently accessed data requiring immediate access.

**Option D** suggests using S3 Standard-IA for a portion of the time and then moving to S3 Glacier Flexible
Retrieval (formerly Glacier) after 4 years. Glacier Flexible Retrieval is unsuitable as the files will need to be
deleted, not accessed.
Considering the infrequent access, requirement for immediate retrieval, and long-term retention, S3 Glacier
Instant Retrieval provides the best balance of cost and accessibility. Using S3 Glacier Instant Retrieval will
reduce storage costs compared to S3 Standard-IA or S3 Standard whilst retaining immediate accessibility.

Therefore, option A is the most cost-effective and appropriate choice.
Further research can be done here:https://aws.amazon.com/s3/storageclasses/https://aws.amazon.com/glacier/

---

## Question 891

**Answer:** **D**

**Explanation:**

The correct solution is D: "Set up Amazon S3 to use Multi-Region Access Points in an active-active
configuration with a single global endpoint. Configure S3 Cross-Region Replication." This solution directly
addresses all the requirements of the question.

Here's a detailed justification:

1. Nearest S3 Bucket Selection and Reduced Network Congestion: S3 Multi-Region Access Points
(MRAP) provide a single global endpoint that intelligently routes requests to the geographically
closest S3 bucket within the MRAP configuration. This ensures user data is sent to the nearest
bucket, minimizing latency and avoiding public network congestion.
https://aws.amazon.com/s3/features/multi-region-access-points/

2. Active-Active Configuration: Setting up MRAP in an active-active configuration allows both S3
buckets in different regions to handle requests simultaneously. This maximizes availability and
performance by distributing the load across multiple regions. **Option D** specifies an active-active
configuration, fulfilling this requirement.

3. Failover with Minimal Management: S3 MRAP handles failover automatically. If one region becomes
unavailable, MRAP automatically routes requests to the healthy region. This minimizes the need for
manual intervention during failover events, reducing operational overhead.

4. Data Synchronization: S3 Cross-Region Replication (CRR) keeps the S3 buckets in different regions
synchronized. This ensures data consistency in the event of a failover, guaranteeing that the
application can continue operating without data loss.

5. Single Global Endpoint: MRAP provides a single global endpoint for accessing data across all
configured regions. This simplifies the application's configuration and eliminates the need to manage
multiple regional endpoints.**Option A** is incorrect as simply configuring the application to use regional
S3 endpoints doesn't handle failover. **Option B** employs active-passive, which doesn't take advantage
of distributing user load over the regions. **Option C** would require more operational management to
maintain consistent data.

---

## Question 892

**Answer:** **C**

**Explanation:**

The correct solution is C, which creates an AMI of each application instance and launches two new EC2
instances from the AMI in separate Availability Zones, fronted by a Network Load Balancer (NLB). This
approach addresses the requirements of reliability and fault tolerance without requiring application design
changes.

**Option C** achieves fault tolerance by distributing the application instances across multiple Availability Zones.
If one Availability Zone experiences an outage, the other instance will continue to serve traffic. The NLB
ensures that traffic is routed only to healthy instances. AMIs ensure a consistent and reproducible instance
configuration for easy deployment. The NLB is suitable because it can handle TCP traffic and maintains
source IP addresses, critical for some legacy applications.

**Option A** is not ideal because an Auto Scaling group with a minimum and maximum of one instance does not
provide fault tolerance. While it can recreate the instance if it fails, there will still be downtime during the
recovery. Furthermore, an Application Load Balancer (ALB) might not be suitable for all legacy applications,
as ALBs work best with HTTP/HTTPS traffic.

**Option B** relies on backups, which introduce recovery time objective (RTO) and recovery point objective (RPO)
issues. Restoring from backup is not a seamless failover. The backup process does not provide immediate
fault tolerance.

**Option D** involves refactoring applications for containerization. The question specifically states that
application design changes cannot be made, so this is invalid. While using ECS and Fargate offers benefits, it's
outside the constraint of no application code changes.

In summary, **Option C** provides the best balance of fault tolerance, minimal changes (only infrastructure), and
utilizes standard AWS services.

---

## Question 893

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:
Rationale:
The question focuses on centralizing network management and automating security guardrails while
minimizing operational overhead for isolating workloads across AWS accounts.
AWS Organizations: AWS Organizations is designed for centralized management of multiple AWS accounts.
It allows you to create and manage accounts programmatically and apply policies across them.
https://aws.amazon.com/organizations/
Networking Account: Creating a dedicated networking account centralizes network resources like VPCs,
subnets, route tables, and other network services.
AWS Resource Access Manager (RAM): AWS RAM enables you to share AWS resources, such as subnets,
with other accounts within your AWS organization. This avoids replicating network infrastructure in each
workload account, reducing operational overhead. https://aws.amazon.com/ram/

**Option B** leverages these AWS services effectively: AWS Organizations for account creation and centralized
control, a dedicated networking account for network resource management, and AWS RAM for sharing these
network resources with workload accounts. It's a less operationally intensive approach compared to deploying
VPCs in each workload account as this centralizes the effort.

Why other options are less suitable:

**Option A** (AWS Control Tower + AWS RAM): While Control Tower excels at setting up and governing multiaccount environments with pre-defined guardrails, using it solely with RAM for subnet sharing doesn't fully
exploit its capabilities. Control Tower often comes with more opinionated and prescriptive network
configurations.
Options C and D (Transit Gateway): Deploying a VPC in each workload account and routing traffic through a
transit gateway introduces unnecessary complexity and operational overhead. Managing individual VPCs,
route tables, and transit gateway attachments for each workload account becomes cumbersome. Although
Transit Gateway supports central inspection, it necessitates more configuration per account.

---

## Question 894

**Answer:** **A**

**Explanation:**

The best solution for minimizing website hosting costs for static content served from EC2 instances behind an
ALB, given increasing traffic, is to move the website to Amazon S3 and configure an Amazon CloudFront
distribution.

Here's why:
Amazon S3 for Static Content: S3 is a cost-effective, highly scalable, and durable object storage service
ideal for storing static website content like HTML, CSS, JavaScript, images, and videos. S3's pay-as-you-go
pricing model makes it much more affordable than running EC2 instances for static content delivery.
Amazon CloudFront for Content Delivery: CloudFront is a content delivery network (CDN) that caches
website content at edge locations globally. By caching content closer to users, CloudFront reduces latency,
improves website performance, and, most importantly, significantly offloads traffic from the origin (in this
case, S3).
Cost Optimization: Offloading static content to S3 and serving it through CloudFront dramatically reduces
the load on EC2 instances, potentially allowing you to downsize or even eliminate some instances, leading to
significant cost savings. You avoid paying for EC2 compute time, bandwidth, and storage for serving static
assets. CloudFront also provides features like compression and caching configuration to further optimize
delivery and reduce data transfer costs.
Scalability and Reliability: S3 and CloudFront are designed for high scalability and availability. They
automatically scale to handle traffic spikes without requiring manual intervention.
Let's look at why the other options are not ideal:

**Option B**: Amazon ElastiCache with S3: ElastiCache is an in-memory caching service, but it's designed for
dynamic content or frequently accessed data that benefits from low-latency access. It is not typically used in
conjunction with S3 for serving static content as the primary purpose. CloudFront already provides caching
capabilities suited for that purpose. ElastiCache also incurs its own costs.

**Option C**: AWS Amplify with ALB: AWS Amplify is a good choice for deploying and hosting full-stack web
applications, including static content, but introducing an ALB in front of it is unnecessary and adds complexity
and cost. Amplify itself is a hosting platform and can serve the content directly without an ALB.

**Option D**: AWS Amplify with EC2 Instances: This option defeats the purpose of moving away from EC2
instances to minimize costs. EC2 instances still handle the caching, incurring the same cost concerns. AWS
Amplify is a hosting platform and does not need to configure EC2 instances.

---

## Question 895

**Answer:** **D**

**Explanation:**

The correct answer is D. Create an Amazon FSx for Windows File Server file system. Connect the
application server to the file system.

Here's a detailed justification:
Amazon FSx for Windows File Server is a fully managed Windows file system built on Windows Server. It
provides native Windows file system capabilities and features like SMB (Server Message Block) protocol
support. This directly addresses the requirement of using SMB clients to access stored data. Furthermore,
being a fully managed service, FSx for Windows File Server offloads administrative overhead related to
hardware provisioning, patching, backups, and other maintenance tasks.

**Option A**, using AWS Storage Gateway Volume Gateway, requires managing volumes on-premises or in EC2,
adding complexity to the solution. While it can present storage to applications via iSCSI, it doesn't inherently
fulfill the SMB requirement without additional configuration.

**Option B**, using AWS Storage Gateway Tape Gateway, is designed for archival purposes and not suitable for
active media application storage as it deals with virtual tapes.

**Option C**, creating an EC2 Windows instance and configuring a file share, involves significant administrative
overhead for managing the EC2 instance, operating system, file server role, backups, and security. This
contradicts the requirement of minimizing administrative overhead.

Therefore, Amazon FSx for Windows File Server offers the least administrative overhead because it is a fully
managed, purpose-built service for Windows file shares that natively supports SMB, simplifying deployment
and ongoing management for the media application's shared storage needs.

---

## Question 896

**Answer:** **B**

**Explanation:**

The correct answer is B. Convert the Aurora cluster to an Aurora global database. Configure managed
failover.
Here's why this solution is the most operationally efficient and meets the RPO/RTO requirements:

Aurora Global Database is specifically designed for disaster recovery scenarios with low RPO and RTO across
different AWS Regions. It uses storage-based replication to replicate data with minimal lag, typically under a
second, which easily satisfies the 5-minute RPO. This is accomplished by replicating data at the storage layer
using dedicated infrastructure.
The managed failover feature of Aurora Global Database automates the failover process in case of a disaster.
This reduces the recovery time significantly, aligning with the 20-minute RTO goal. It handles promoting a
read replica to a writer instance in the DR region.

**Option A**, creating an Aurora read replica, is a viable DR strategy. However, it involves manual intervention for
failover, which increases the RTO. It will also likely take some time to promote the read replica to a writer
instance.

**Option C**, using Cross-Region Replication, requires creating a new Aurora cluster, which might involve more
configuration and setup than simply converting to Aurora Global Database. Also, this is deprecated by
Amazon. The preferred mechanism for DR is Aurora Global Database.

**Option D**, using AWS DMS, introduces complexity and potential latency, making it less suitable for the
stringent RPO of 5 minutes. DMS is designed more for database migrations or scenarios where schema
transformation is required, not for continuous, low-latency replication for DR. Also DMS does not handle the
failover, the user is responsible for it.

Therefore, Aurora Global Database with managed failover provides the most operationally efficient,
automated, and optimized solution for meeting the RPO/RTO requirements in a DR scenario. It minimizes
configuration changes because it leverages the existing Aurora cluster with just the upgrade to global
database, and it handles the complex failover process automatically.
Supporting Documentation:
Aurora Global Database: https://aws.amazon.com/rds/aurora/features/global-database/
Achieving Fast Failover with Amazon Aurora Global Database:
https://aws.amazon.com/blogs/database/achieving-fast-failover-with-amazon-aurora-global-database/

---

## Question 897

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
Requirement of at least 1-hour execution time: Lambda (**Option B**) has a maximum execution time limit of 15

minutes. This makes it unsuitable for a job that requires at least an
hour.https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html
Stateful and Interruptions Intolerant: The job's stateful nature and intolerance to interruptions require a
stable and persistent environment during execution.
Fargate and ECS: **Option A**, using Fargate and ECS, provides a suitable environment. Fargate allows you to
run containers without managing the underlying EC2 instances, simplifying operations. ECS manages the
container orchestration.
EventBridge Scheduler: EventBridge Scheduler enables precise scheduling, ensuring the job runs weekly
before the first day of the work week. This is more robust than relying on crontab (**Option C**) on EC2 instances,
which can be susceptible to time drift or instance issues.https://aws.amazon.com/eventbridge/scheduler/
Spot Instances: **Option C** uses Spot Instances, which are cost-effective but can be interrupted if the Spot
price exceeds your bid. This violates the "interruptions intolerant" requirement. Also, relying on crontab isn't
ideal for managed scheduling.
DataSync: **Option D**, DataSync, is designed for data transfer and synchronization, not for general-purpose
data analysis jobs. It doesn't provide a compute environment to execute the analysis
logic.https://aws.amazon.com/datasync/
Containerization: Containerizing the job (**Option A**) makes it portable and reproducible, ensuring consistent
execution across environments. ECS and Fargate are designed for running containerized applications.

In summary, ECS with Fargate gives a stable environment, and EventBridge Scheduler offers reliable
scheduled execution to comply with the requirements that the job is stateful and cannot tolerate
interruptions. Lambda cannot run for an hour. Spot Instances might be interrupted. DataSync serves a
different purpose.

---

## Question 898

**Answer:** **C**

**Explanation:**

The correct answer is C, configuring a data lake in Amazon Security Lake to collect the security data and
uploading it to an Amazon S3 bucket. Here's why:
Amazon Security Lake is specifically designed to aggregate, transform, and manage security data from
various AWS services and third-party sources into a centralized data lake. This minimizes development effort
because the service is built for this exact purpose. It automatically collects security-relevant logs and events,

normalizes them into the Open Cybersecurity Schema Framework (OCSF) format, and stores them in a data
lake you own.

**Option A**, using AWS Lake Formation and Glue, would require significant configuration and development
effort to define crawlers, schemas, and data transformation logic to ingest and normalize diverse security
data sources. While Lake Formation provides governance, Security Lake provides out-of-the-box security data
ingestion and normalization.

**Option B**, a Lambda function collecting CSV data and uploading to S3, lacks the built-in capabilities for largescale data management, normalization (into OCSF), and centralized security data analysis. It would require
substantial coding and maintenance.

**Option D**, using AWS DMS to load data into an RDS cluster, is not suited for collecting and analyzing the
diverse, semi-structured security data from various AWS sources. RDS is designed for structured relational
data, not the varied log and event data. Moreover, DMS primarily focuses on database migrations, not security
data aggregation.
Security Lake addresses the prompt's requirement for central collection and assessment of security data with
minimal development effort by providing a purpose-built service that automates the collection, normalization,
and storage processes. The OCSF format ensures interoperability and standardized analysis across different
security tools. Uploading to S3, configured as the data lake, is the standard method of inputting the data to
Security Lake.
References:
Amazon Security Lake
Open Cybersecurity Schema Framework (OCSF)

---

## Question 899

**Answer:** **D**

**Explanation:**

The best solution for connecting multiple VPCs with minimal administrative overhead, especially when
considering future scalability for over 100 applications, is deploying an AWS Transit Gateway.

**Option D** is the most efficient because a Transit Gateway acts as a central hub, simplifying network
management. Each application VPC and the shared services VPC connect to the Transit Gateway. Routes
within each VPC subnet point to the Transit Gateway. The Transit Gateway then handles routing traffic
between the connected VPCs based on route tables associated with each VPC attachment.

**Option A** is less scalable as it involves manually configuring and maintaining multiple VPN tunnels. VPNs add
complexity and can become a management burden.

**Option B**, VPC peering, has a limit on the number of peerings a VPC can have and can quickly become
unmanageable with a large number of VPCs. It also requires establishing a peering connection between every
pair of VPCs that need to communicate, which is O(n^2) complexity. Additionally, overlapping CIDR blocks are
not supported with VPC peering, which could become a constraint.

**Option C**, Direct Connect, is meant for creating a dedicated network connection from on-premises to AWS and
is not relevant for connecting VPCs within AWS. It is also far more expensive and complex than a softwaredefined networking solution like Transit Gateway.
Transit Gateway's centralized routing policy and simplified management make it ideal for this scenario. As the
company migrates more applications, new VPCs can simply be attached to the Transit Gateway, and routes
can be updated centrally.
For further research, refer to the AWS documentation on Transit Gateway: https://aws.amazon.com/transitgateway/ and https://docs.aws.amazon.com/transit-gateway/latest/tgw/what-is-transit-gateway.html

---

## Question 900

**Answer:** **AB**

**Explanation:**

The correct answer is A and B. Here's why:

**A.** Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application containers. Use
an Amazon ECS Anywhere external launch type for the on-premises application containers.
AWS Fargate for Cloud Containers: Fargate is a serverless compute engine for containers, ideal for running
ECS tasks without managing the underlying EC2 instances. This aligns perfectly with the requirement to run
new application containers in the AWS Cloud in a managed and scalable fashion. It simplifies operational
overhead.

ECS Anywhere for On-premises Containers: ECS Anywhere allows you to register your on-premises servers
or virtual machines as external instances within your ECS cluster. This fulfills the requirement to run the
existing on-premises application containers within a hybrid environment.

**B.** Set up an Application Load Balancer for cloud ECS services.
ALB for HTTP Traffic: The problem specifically mentions the need for a load balancer for HTTP traffic.
Application Load Balancers (ALBs) are specifically designed for HTTP and HTTPS traffic. They provide
advanced routing capabilities based on the content of the request. This is necessary for the company to
manage and distribute HTTP traffic to the containers running on ECS in the cloud.

Why other options are incorrect:

**C.** Set up a Network Load Balancer for cloud ECS services: NLBs are suited for TCP, UDP, and TLS traffic and
not for HTTP-aware routing.

**D.** Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud application
containers and the on-premises application containers: Fargate cannot be used directly for on-premises
containers without ECS Anywhere's external instance capability.

**E.** Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application containers. Use
Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises application containers: While
EC2 launch type for cloud is a valid alternative, it does not represent the best option for the problem
statement that prefers easier managed scalability of cloud. And AWS Fargate launch type with ECS
Anywhere is incorrect. ECS Anywhere uses external instances, not Fargate.
Supporting Links:
AWS Fargate: https://aws.amazon.com/fargate/
Amazon ECS Anywhere: https://aws.amazon.com/ecs/anywhere/
Application Load Balancer (ALB): https://aws.amazon.com/elasticloadbalancing/application-load-balancer/

---

# Quick Answer Sheet

Question 851: B
Question 852: B
Question 853: A
Question 854: C
Question 855: C
Question 856: D
Question 857: A
Question 858: C
Question 859: AC
Question 860: A
Question 861: A
Question 862: D
Question 863: B
Question 864: C
Question 865: AE
Question 866: A
Question 867: D
Question 868: B
Question 869: A
Question 870: D
Question 871: A
Question 872: D
Question 873: B
Question 874: C
Question 875: D
Question 876: BD
Question 877: B
Question 878: A
Question 879: BC
Question 880: B
Question 881: AC
Question 882: C
Question 883: B
Question 884: ACE
Question 885: CD
Question 886: BC
Question 887: B
Question 888: A
Question 889: B
Question 890: A
Question 891: D
Question 892: C
Question 893: B
Question 894: A
Question 895: D
Question 896: B
Question 897: A
Question 898: C
Question 899: D
Question 900: AB
