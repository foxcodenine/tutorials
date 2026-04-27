# AWS SAA-C03 Practice Test: Questions 551-600

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 551

A company has a financial application that produces reports. The reports average 50 KB in size and are stored in
Amazon S3. The reports are frequently accessed during the first week after production and must be stored for
several years. The reports must be retrievable within 6 hours.
Which solution meets these requirements MOST cost-effectively?

**A.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier after 7 days.

**B.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Standard-Infrequent Access (S3
Standard-IA) after 7 days.

**C.** Use S3 Intelligent-Tiering. Configure S3 Intelligent-Tiering to transition the reports to S3 StandardInfrequent Access (S3 Standard-IA) and S3 Glacier.

**D.** Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier Deep Archive after 7 days.

---

## Question 552

A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to change the type
and family of its EC2 instances every 2-3 months.
What should the company do to meet these requirements?

**A.** Purchase Partial Upfront Reserved Instances for a 3-year term.

**B.** Purchase a No Upfront Compute Savings Plan for a 1-year term.

**C.** Purchase All Upfront Reserved Instances for a 1-year term.

**D.** Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.

---

## Question 553

A solutions architect needs to review a company's Amazon S3 buckets to discover personally identifiable
information (PII). The company stores the PII data in the us-east-1 Region and us-west-2 Region.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Configure Amazon Macie in each Region. Create a job to analyze the data that is in Amazon S3.

**B.** Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data that is in Amazon
S3.

**C.** Configure Amazon Inspector to analyze the data that is in Amazon S3.

**D.** Configure Amazon GuardDuty to analyze the data that is in Amazon S3.

---

## Question 554

A company's SAP application has a backend SQL Server database in an on-premises environment. The company
wants to migrate its on-premises application and database server to AWS. The company needs an instance type
that meets the high demands of its SAP database. On-premises performance data shows that both the SAP
application and the database have high memory utilization.
Which solution will meet these requirements?

**A.** Use the compute optimized instance family for the application. Use the memory optimized instance family for
the database.

**B.** Use the storage optimized instance family for both the application and the database.

**C.** Use the memory optimized instance family for both the application and the database.

**D.** Use the high performance computing (HPC) optimized instance family for the application. Use the memory
optimized instance family for the database.

---

## Question 555

A company runs an application in a VPC with public and private subnets. The VPC extends across multiple
Availability Zones. The application runs on Amazon EC2 instances in private subnets. The application uses an
Amazon Simple Queue Service (Amazon SQS) queue.
A solutions architect needs to design a secure solution to establish a connection between the EC2 instances and
the SQS queue.
Which solution will meet these requirements?

**A.** Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the private subnets.
Add to the endpoint a security group that has an inbound access rule that allows traffic from the EC2 instances
that are in the private subnets.

**B.** Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets.
Attach to the interface endpoint a VPC endpoint policy that allows access from the EC2 instances that are in
the private subnets.

**C.** Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets.
Attach an Amazon SQS access policy to the interface VPC endpoint that allows requests from only a specified
VPC endpoint.

**D.** Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets. Attach an IAM
role to the EC2 instances that allows access to the SQS queue.

---

## Question 556

A solutions architect is using an AWS CloudFormation template to deploy a three-tier web application. The web
application consists of a web tier and an application tier that stores and retrieves user data in Amazon DynamoDB
tables. The web and application tiers are hosted on Amazon EC2 instances, and the database tier is not publicly
accessible. The application EC2 instances need to access the DynamoDB tables without exposing API credentials
in the template.
What should the solutions architect do to meet these requirements?

**A.** Create an IAM role to read the DynamoDB tables. Associate the role with the application instances by
referencing an instance profile.

**B.** Create an IAM role that has the required permissions to read and write from the DynamoDB tables. Add the
role to the EC2 instance profile, and associate the instance profile with the application instances.

**C.** Use the parameter section in the AWS CloudFormation template to have the user input access and secret
keys from an already-created IAM user that has the required permissions to read and write from the DynamoDB
tables.

**D.** Create an IAM user in the AWS CloudFormation template that has the required permissions to read and write
from the DynamoDB tables. Use the GetAtt function to retrieve the access and secret keys, and pass them to
the application instances through the user data.

---

## Question 557

A solutions architect manages an analytics application. The application stores large amounts of semistructured
data in an Amazon S3 bucket. The solutions architect wants to use parallel data processing to process the data
more quickly. The solutions architect also wants to use information that is stored in an Amazon Redshift database
to enrich the data.
Which solution will meet these requirements?

**A.** Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3
data.

**B.** Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the S3
data.

**C.** Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into
Amazon Redshift so that the data can be enriched.

**D.** Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the
S3 data.

---

## Question 558

A company has two VPCs that are located in the us-west-2 Region within the same AWS account. The company
needs to allow network traffic between these VPCs. Approximately 500 GB of data transfer will occur between the
VPCs each month.
What is the MOST cost-effective solution to connect these VPCs?

**A.** Implement AWS Transit Gateway to connect the VPCs. Update the route tables of each VPC to use the transit
gateway for inter-VPC communication.

**B.** Implement an AWS Site-to-Site VPN tunnel between the VPCs. Update the route tables of each VPC to use
the VPN tunnel for inter-VPC communication.

**C.** Set up a VPC peering connection between the VPCs. Update the route tables of each VPC to use the VPC
peering connection for inter-VPC communication.

**D.** Set up a 1 GB AWS Direct Connect connection between the VPCs. Update the route tables of each VPC to use
the Direct Connect connection for inter-VPC communication.

---

## Question 559

A company hosts multiple applications on AWS for different product lines. The applications use different compute
resources, including Amazon EC2 instances and Application Load Balancers. The applications run in different AWS
accounts under the same organization in AWS Organizations across multiple AWS Regions. Teams for each
product line have tagged each compute resource in the individual accounts.
The company wants more details about the cost for each product line from the consolidated billing feature in
Organizations.
Which combination of steps will meet these requirements? (Choose two.)

**A.** Select a specific AWS generated tag in the AWS Billing console.

**B.** Select a specific user-defined tag in the AWS Billing console.

**C.** Select a specific user-defined tag in the AWS Resource Groups console.

**D.** Activate the selected tag from each AWS account.

**E.** Activate the selected tag from the Organizations management account.

---

## Question 560

A company's solutions architect is designing an AWS multi-account solution that uses AWS Organizations. The
solutions architect has organized the company's accounts into organizational units (OUs).
The solutions architect needs a solution that will identify any changes to the OU hierarchy. The solution also needs
to notify the company's operations team of any changes.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Provision the AWS accounts by using AWS Control Tower. Use account drift notifications to identify the
changes to the OU hierarchy.

**B.** Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules to identify the
changes to the OU hierarchy.

**C.** Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail organization trail to
identify the changes to the OU hierarchy.

**D.** Use AWS CloudFormation templates to create accounts in Organizations. Use the drift detection operation on
a stack to identify the changes to the OU hierarchy.

---

## Question 561

A company's website handles millions of requests each day, and the number of requests continues to increase. A
solutions architect needs to improve the response time of the web application. The solutions architect determines
that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table.
Which solution will meet these requirements with the LEAST amount of operational overhead?

**A.** Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX.

**B.** Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read
requests through Redis.

**C.** Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all
read requests through Memcached.

**D.** Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate
Amazon ElastiCache. Route all read requests through ElastiCache.

---

## Question 562

A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2 instances in a VPC do
not travel across the internet.
Which combination of steps should the solutions architect take to meet this requirement? (Choose two.)

**A.** Create a route table entry for the endpoint.

**B.** Create a gateway endpoint for DynamoDB.

**C.** Create an interface endpoint for Amazon EC2.

**D.** Create an elastic network interface for the endpoint in each of the subnets of the VPC.

**E.** Create a security group entry in the endpoint's security group to provide access.

---

## Question 563

A company runs its applications on both Amazon Elastic Kubernetes Service (Amazon EKS) clusters and onpremises Kubernetes clusters. The company wants to view all clusters and workloads from a central location.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon CloudWatch Container Insights to collect and group the cluster information.

**B.** Use Amazon EKS Connector to register and connect all Kubernetes clusters.

**C.** Use AWS Systems Manager to collect and view the cluster information.

**D.** Use Amazon EKS Anywhere as the primary cluster to view the other clusters with native Kubernetes
commands.

---

## Question 564

A company is building an ecommerce application and needs to store sensitive customer information. The company
needs to give customers the ability to complete purchase transactions on the website. The company also needs to
ensure that sensitive customer data is protected, even from database administrators.
Which solution meets these requirements?

**A.** Store sensitive data in an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS encryption to encrypt
the data. Use an IAM instance role to restrict access.

**B.** Store sensitive data in Amazon RDS for MySQL. Use AWS Key Management Service (AWS KMS) client-side
encryption to encrypt the data.

**C.** Store sensitive data in Amazon S3. Use AWS Key Management Service (AWS KMS) server-side encryption to
encrypt the data. Use S3 bucket policies to restrict access.

**D.** Store sensitive data in Amazon FSx for Windows Server. Mount the file share on application servers. Use
Windows file permissions to restrict access.

---

## Question 565

A company has an on-premises MySQL database that handles transactional data. The company is migrating the
database to the AWS Cloud. The migrated database must maintain compatibility with the company's applications
that use the database. The migrated database also must scale automatically during periods of increased demand.
Which migration solution will meet these requirements?

**A.** Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage
scaling.

**B.** Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the
Amazon Redshift cluster.

**C.** Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora. Turn on Aurora
Auto Scaling.

**D.** Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure
an Auto Scaling policy.

---

## Question 566

A company runs multiple Amazon EC2 Linux instances in a VPC across two Availability Zones. The instances host
applications that use a hierarchical directory structure. The applications need to read and write rapidly and
concurrently to shared storage.
What should a solutions architect do to meet these requirements?

**A.** Create an Amazon S3 bucket. Allow access from all the EC2 instances in the VPC.

**B.** Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system from each EC2
instance.

**C.** Create a file system on a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume.
Attach the EBS volume to all the EC2 instances.

**D.** Create file systems on Amazon Elastic Block Store (Amazon EBS) volumes that are attached to each EC2
instance. Synchronize the EBS volumes across the different EC2 instances.

---

## Question 567

A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a
building. The sensors will feed a database through HTTP requests that will add up usage for each tenant. The
solutions architect must use managed services when possible. The workload will receive more features in the
future as the solutions architect adds independent components.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data,
and store the data in an Amazon DynamoDB table.

**B.** Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive
and process the data from the sensors. Use an Amazon S3 bucket to store the processed data.

**C.** Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data,
and store the data in a Microsoft SQL Server Express database on an Amazon EC2 instance.

**D.** Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive
and process the data from the sensors. Use an Amazon Elastic File System (Amazon EFS) shared file system to
store the processed data.

---

## Question 568

A solutions architect is designing the storage architecture for a new web application used for storing and viewing
engineering drawings. All application components will be deployed on the AWS infrastructure.
The application design must support caching to minimize the amount of time that users wait for the engineering
drawings to load. The application must be able to store petabytes of data.
Which combination of storage and caching should the solutions architect use?

**A.** Amazon S3 with Amazon CloudFront

**B.** Amazon S3 Glacier with Amazon ElastiCache

**C.** Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront

**D.** AWS Storage Gateway with Amazon ElastiCache

---

## Question 569

An Amazon EventBridge rule targets a third-party API. The third-party API has not received any incoming traffic. A
solutions architect needs to determine whether the rule conditions are being met and if the rule's target is being
invoked.
Which solution will meet these requirements?

**A.** Check for metrics in Amazon CloudWatch in the namespace for AWS/Events.

**B.** Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue.

**C.** Check for the events in Amazon CloudWatch Logs.

**D.** Check the trails in AWS CloudTrail for the EventBridge events.

---

## Question 570

A company has a large workload that runs every Friday evening. The workload runs on Amazon EC2 instances that
are in two Availability Zones in the us-east-1 Region. Normally, the company must run no more than two instances
at all times. However, the company wants to scale up to six instances each Friday to handle a regularly repeating
increased workload.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a reminder in Amazon EventBridge to scale the instances.

**B.** Create an Auto Scaling group that has a scheduled action.

**C.** Create an Auto Scaling group that uses manual scaling.

**D.** Create an Auto Scaling group that uses automatic scaling.

---

## Question 571

A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires
TLSv1.3 on the API endpoints. The company also requires a specific public third-party certificate authority (CA) to
sign the TLS certificate.
Which solution will meet these requirements?

**A.** Use a local machine to create a certificate that is signed by the third-party CImport the certificate into AWS
Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the
custom domain to use the certificate.

**B.** Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP
API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.

**C.** Use AWS Certificate Manager (ACM) to create a certificate that is signed by the third-party CA. Import the
certificate into AWS Certificate Manager (ACM). Create an AWS Lambda function with a Lambda function URL.
Configure the Lambda function URL to use the certificate.

**D.** Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an AWS
Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.

---

## Question 572

A company runs an application on AWS. The application receives inconsistent amounts of usage. The application
uses AWS Direct Connect to connect to an on-premises MySQL-compatible database. The on-premises database
consistently uses a minimum of 2 GiB of memory.
The company wants to migrate the on-premises database to a managed AWS service. The company wants to use
auto scaling capabilities to manage unexpected workload increases.
Which solution will meet these requirements with the LEAST administrative overhead?

**A.** Provision an Amazon DynamoDB database with default read and write capacity settings.

**B.** Provision an Amazon Aurora database with a minimum capacity of 1 Aurora capacity unit (ACU).

**C.** Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora capacity unit (ACU).

**D.** Provision an Amazon RDS for MySQL database with 2 GiB of memory.

---

## Question 573

A company wants to use an event-driven programming model with AWS Lambda. The company wants to reduce
startup latency for Lambda functions that run on Java 11. The company does not have strict latency requirements
for the applications. The company wants to reduce cold starts and outlier latencies when a function scales up.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure Lambda provisioned concurrency.

**B.** Increase the timeout of the Lambda functions.

**C.** Increase the memory of the Lambda functions.

**D.** Configure Lambda SnapStart.

---

## Question 574

A financial services company launched a new application that uses an Amazon RDS for MySQL database. The
company uses the application to track stock market trends. The company needs to operate the application for only
2 hours at the end of each week. The company needs to optimize the cost of running the database.
Which solution will meet these requirements MOST cost-effectively?

**A.** Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL database cluster.

**B.** Migrate the existing RDS for MySQL database to an Aurora MySQL database cluster.

**C.** Migrate the existing RDS for MySQL database to an Amazon EC2 instance that runs MySQL. Purchase an
instance reservation for the EC2 instance.

**D.** Migrate the existing RDS for MySQL database to an Amazon Elastic Container Service (Amazon ECS) cluster
that uses MySQL container images to run tasks.

---

## Question 575

A company deploys its applications on Amazon Elastic Kubernetes Service (Amazon EKS) behind an Application
Load Balancer in an AWS Region. The application needs to store data in a PostgreSQL database engine. The
company wants the data in the database to be highly available. The company also needs increased capacity for
read workloads.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Create an Amazon DynamoDB database table configured with global tables.

**B.** Create an Amazon RDS database with Multi-AZ deployments.

**C.** Create an Amazon RDS database with Multi-AZ DB cluster deployment.

**D.** Create an Amazon RDS database configured with cross-Region read replicas.

---

## Question 576

A company is building a RESTful serverless web application on AWS by using Amazon API Gateway and AWS
Lambda. The users of this web application will be geographically distributed, and the company wants to reduce the
latency of API requests to these users.
Which type of endpoint should a solutions architect use to meet these requirements?

**A.** Private endpoint

**B.** Regional endpoint

**C.** Interface VPC endpoint

**D.** Edge-optimized endpoint

---

## Question 577

A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to
ensure that clients use a TLS certificate when accessing the company's website. The company wants to automate
the creation and renewal of the TLS certificates.
Which solution will meet these requirements with the MOST operational efficiency?

**A.** Use a CloudFront security policy to create a certificate.

**B.** Use a CloudFront origin access control (OAC) to create a certificate.

**C.** Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain.

**D.** Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain.

---

## Question 578

A company deployed a serverless application that uses Amazon DynamoDB as a database layer. The application
has experienced a large increase in users. The company wants to improve database response time from
milliseconds to microseconds and to cache requests to the database.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use DynamoDB Accelerator (DAX).

**B.** Migrate the database to Amazon Redshift.

**C.** Migrate the database to Amazon RDS.

**D.** Use Amazon ElastiCache for Redis.

---

## Question 579

A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only on
weekdays during business hours. The company wants to optimize costs and reduce operational overhead based on
this usage.
Which solution will meet these requirements?

**A.** Use the Instance Scheduler on AWS to configure start and stop schedules.

**B.** Turn off automatic backups. Create weekly manual snapshots of the database.

**C.** Create a custom AWS Lambda function to start and stop the database based on minimum CPU utilization.

**D.** Purchase All Upfront reserved DB instances.

---

## Question 580

A company uses locally attached storage to run a latency-sensitive application on premises. The company is using
a lift and shift method to move the application to the AWS Cloud. The company does not want to change the
application architecture.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for Lustre file system to
run the application.

**B.** Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP2
volume to run the application.

**C.** Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for OpenZFS file system
to run the application.

**D.** Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP3
volume to run the application.

---

## Question 581

A company runs a stateful production application on Amazon EC2 instances. The application requires at least two
EC2 instances to always be running.
A solutions architect needs to design a highly available and fault-tolerant architecture for the application. The
solutions architect creates an Auto Scaling group of EC2 instances.
Which set of additional steps should the solutions architect take to meet these requirements?

**A.** Set the Auto Scaling group's minimum capacity to two. Deploy one On-Demand Instance in one Availability
Zone and one On-Demand Instance in a second Availability Zone.

**B.** Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability
Zone and two On-Demand Instances in a second Availability Zone.

**C.** Set the Auto Scaling group's minimum capacity to two. Deploy four Spot Instances in one Availability Zone.

**D.** Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability
Zone and two Spot Instances in a second Availability Zone.

---

## Question 582

An ecommerce company uses Amazon Route 53 as its DNS provider. The company hosts its website on premises
and in the AWS Cloud. The company's on-premises data center is near the us-west-1 Region. The company uses the
eu-central-1 Region to host the website. The company wants to minimize load time for the website as much as
possible.
Which solution will meet these requirements?

**A.** Set up a geolocation routing policy. Send the traffic that is near us-west-1 to the on-premises data center.
Send the traffic that is near eu-central-1 to eu-central-1.

**B.** Set up a simple routing policy that routes all traffic that is near eu-central-1 to eu-central-1 and routes all
traffic that is near the on-premises datacenter to the on-premises data center.

**C.** Set up a latency routing policy. Associate the policy with us-west-1.

**D.** Set up a weighted routing policy. Split the traffic evenly between eu-central-1 and the on-premises data
center.

---

## Question 583

A company has 5 PB of archived data on physical tapes. The company needs to preserve the data on the tapes for
another 10 years for compliance purposes. The company wants to migrate to AWS in the next 6 months. The data
center that stores the tapes has a 1 Gbps uplink internet connectivity.
Which solution will meet these requirements MOST cost-effectively?

**A.** Read the data from the tapes on premises. Stage the data in a local NFS storage. Use AWS DataSync to
migrate the data to Amazon S3 Glacier Flexible Retrieval.

**B.** Use an on-premises backup application to read the data from the tapes and to write directly to Amazon S3
Glacier Deep Archive.

**C.** Order multiple AWS Snowball devices that have Tape Gateway. Copy the physical tapes to virtual tapes in
Snowball. Ship the Snowball devices to AWS. Create a lifecycle policy to move the tapes to Amazon S3 Glacier
Deep Archive.

**D.** Configure an on-premises Tape Gateway. Create virtual tapes in the AWS Cloud. Use backup software to
copy the physical tape to the virtual tape.

---

## Question 584

A company is deploying an application that processes large quantities of data in parallel. The company plans to
use Amazon EC2 instances for the workload. The network architecture must be configurable to prevent groups of
nodes from sharing the same underlying hardware.
Which networking solution meets these requirements?

**A.** Run the EC2 instances in a spread placement group.

**B.** Group the EC2 instances in separate accounts.

**C.** Configure the EC2 instances with dedicated tenancy.

**D.** Configure the EC2 instances with shared tenancy.

---

## Question 585

A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2 capacity in a failover
AWS Region. Business requirements state that the DR strategy must meet capacity in the failover Region.
Which solution will meet these requirements?

**A.** Purchase On-Demand Instances in the failover Region.

**B.** Purchase an EC2 Savings Plan in the failover Region.

**C.** Purchase regional Reserved Instances in the failover Region.

**D.** Purchase a Capacity Reservation in the failover Region.

---

## Question 586

A company has five organizational units (OUs) as part of its organization in AWS Organizations. Each OU correlates
to the five businesses that the company owns. The company's research and development (R&D) business is

separating from the company and will need its own organization. A solutions architect creates a separate new
management account for this purpose.
What should the solutions architect do next in the new management account?

**A.** Have the R&D AWS account be part of both organizations during the transition.

**B.** Invite the R&D AWS account to be part of the new organization after the R&D AWS account has left the prior
organization.

**C.** Create a new R&D AWS account in the new organization. Migrate resources from the prior R&D AWS account
to the new R&D AWS account.

**D.** Have the R&D AWS account join the new organization. Make the new management account a member of the
prior organization.

---

## Question 587

A company is designing a solution to capture customer activity in different web applications to process analytics
and make predictions. Customer activity in the web applications is unpredictable and can increase suddenly. The
company requires a solution that integrates with other web applications. The solution must include an
authorization step for security purposes.
Which solution will meet these requirements?

**A.** Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS)
container instance that stores the information that the company receives in an Amazon Elastic File System
(Amazon EFS) file system. Authorization is resolved at the GWLB.

**B.** Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis data stream that stores the
information that the company receives in an Amazon S3 bucket. Use an AWS Lambda function to resolve
authorization.

**C.** Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the
information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to
resolve authorization.

**D.** Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS)
container instance that stores the information that the company receives on an Amazon Elastic File System
(Amazon EFS) file system. Use an AWS Lambda function to resolve authorization.

---

## Question 588

An ecommerce company wants a disaster recovery solution for its Amazon RDS DB instances that run Microsoft
SQL Server Enterprise Edition. The company's current recovery point objective (RPO) and recovery time objective
(RTO) are 24 hours.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create a cross-Region read replica and promote the read replica to the primary instance.

**B.** Use AWS Database Migration Service (AWS DMS) to create RDS cross-Region replication.

**C.** Use cross-Region replication every 24 hours to copy native backups to an Amazon S3 bucket.

**D.** Copy automatic snapshots to another Region every 24 hours.

---

## Question 589

A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load
Balancer that has sticky sessions enabled. The web server currently hosts the user session state. The company
wants to ensure high availability and avoid user session state loss in the event of a web server outage.
Which solution will meet these requirements?

**A.** Use an Amazon ElastiCache for Memcached instance to store the session data. Update the application to use
ElastiCache for Memcached to store the session state.

**B.** Use Amazon ElastiCache for Redis to store the session state. Update the application to use ElastiCache for
Redis to store the session state.

**C.** Use an AWS Storage Gateway cached volume to store session data. Update the application to use AWS
Storage Gateway cached volume to store the session state.

**D.** Use Amazon RDS to store the session state. Update the application to use Amazon RDS to store the session
state.

---

## Question 590

A company migrated a MySQL database from the company's on-premises data center to an Amazon RDS for
MySQL DB instance. The company sized the RDS DB instance to meet the company's average daily workload. Once
a month, the database performs slowly when the company runs queries for a report. The company wants to have
the ability to run reports and maintain the performance of the daily workloads.
Which solution will meet these requirements?

**A.** Create a read replica of the database. Direct the queries to the read replica.

**B.** Create a backup of the database. Restore the backup to another DB instance. Direct the queries to the new
database.

**C.** Export the data to Amazon S3. Use Amazon Athena to query the S3 bucket.

**D.** Resize the DB instance to accommodate the additional workload.

---

## Question 591

A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon EKS). The
application includes microservices that manage customers and place orders. The company needs to route
incoming requests to the appropriate microservices.
Which solution will meet this requirement MOST cost-effectively?

**A.** Use the AWS Load Balancer Controller to provision a Network Load Balancer.

**B.** Use the AWS Load Balancer Controller to provision an Application Load Balancer.

**C.** Use an AWS Lambda function to connect the requests to Amazon EKS.

**D.** Use Amazon API Gateway to connect the requests to Amazon EKS.

---

## Question 592

A company uses AWS and sells access to copyrighted images. The company’s global customer base needs to be
able to access these images quickly. The company must deny access to users from specific countries. The
company wants to minimize costs as much as possible.
Which solution will meet these requirements?

**A.** Use Amazon S3 to store the images. Turn on multi-factor authentication (MFA) and public bucket access.
Provide customers with a link to the S3 bucket.

**B.** Use Amazon S3 to store the images. Create an IAM user for each customer. Add the users to a group that has
permission to access the S3 bucket.

**C.** Use Amazon EC2 instances that are behind Application Load Balancers (ALBs) to store the images. Deploy
the instances only in the countries the company services. Provide customers with links to the ALBs for their
specific country's instances.

**D.** Use Amazon S3 to store the images. Use Amazon CloudFront to distribute the images with geographic

restrictions. Provide a signed URL for each customer to access the data in CloudFront.

---

## Question 593

A solutions architect is designing a highly available Amazon ElastiCache for Redis based solution. The solutions
architect needs to ensure that failures do not result in performance degradation or loss of data locally and within
an AWS Region. The solution needs to provide high availability at the node level and at the Region level.
Which solution will meet these requirements?

**A.** Use Multi-AZ Redis replication groups with shards that contain multiple nodes.

**B.** Use Redis shards that contain multiple nodes with Redis append only files (AOF) turned on.

**C.** Use a Multi-AZ Redis cluster with more than one read replica in the replication group.

**D.** Use Redis shards that contain multiple nodes with Auto Scaling turned on.

---

## Question 594

A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its application. During the
migration testing phase, a technical team observes that the application takes a long time to launch and load
memory to become fully productive.
Which solution will reduce the launch time of the application during the next testing phase?

**A.** Launch two or more EC2 On-Demand Instances. Turn on auto scaling features and make the EC2 On-Demand
Instances available during the next testing phase.

**B.** Launch EC2 Spot Instances to support the application and to scale the application so it is available during the

next testing phase.

**C.** Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2 Auto Scaling warm pools
during the next testing phase.

**D.** Launch EC2 On-Demand Instances with Capacity Reservations. Start additional EC2 instances during the next
testing phase.

---

## Question 595

A company's applications run on Amazon EC2 instances in Auto Scaling groups. The company notices that its
applications experience sudden traffic increases on random days of the week. The company wants to maintain
application performance during sudden traffic increases.
Which solution will meet these requirements MOST cost-effectively?

**A.** Use manual scaling to change the size of the Auto Scaling group.

**B.** Use predictive scaling to change the size of the Auto Scaling group.

**C.** Use dynamic scaling to change the size of the Auto Scaling group.

**D.** Use schedule scaling to change the size of the Auto Scaling group.

---

## Question 596

An ecommerce application uses a PostgreSQL database that runs on an Amazon EC2 instance. During a monthly
sales event, database usage increases and causes database connection issues for the application. The traffic is
unpredictable for subsequent monthly sales events, which impacts the sales forecast. The company needs to
maintain performance when there is an unpredictable increase in traffic.
Which solution resolves this issue in the MOST cost-effective way?

**A.** Migrate the PostgreSQL database to Amazon Aurora Serverless v2.

**B.** Enable auto scaling for the PostgreSQL database on the EC2 instance to accommodate increased usage.

**C.** Migrate the PostgreSQL database to Amazon RDS for PostgreSQL with a larger instance type.

**D.** Migrate the PostgreSQL database to Amazon Redshift to accommodate increased usage.

---

## Question 597

A company hosts an internal serverless application on AWS by using Amazon API Gateway and AWS Lambda. The
company’s employees report issues with high latency when they begin using the application each day. The
company wants to reduce latency.
Which solution will meet these requirements?

**A.** Increase the API Gateway throttling limit.

**B.** Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the
application each day.

**C.** Create an Amazon CloudWatch alarm to initiate a Lambda function as a target for the alarm at the beginning
of each day.

**D.** Increase the Lambda function memory.

---

## Question 598

A research company uses on-premises devices to generate data for analysis. The company wants to use the AWS
Cloud to analyze the data. The devices generate .csv files and support writing the data to an SMB file share.
Company analysts must be able to use SQL commands to query the data. The analysts will run queries periodically
throughout the day.
Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)

**A.** Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode.

**B.** Deploy an AWS Storage Gateway on premises in Amazon FSx File Gateway made.

**C.** Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3.

**D.** Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in Amazon S3.
Provide access to analysts.

**E.** Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to analysts.

**F.** Setup Amazon Athena to query the data that is in Amazon S3. Provide access to analysts.

---

## Question 599

A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances
to build and run a payment processing application. The company will run the application in its on-premises data
center for compliance purposes.
A solutions architect wants to use AWS Outposts as part of the solution. The solutions architect is working with the
company's operational team to build the application.
Which activities are the responsibility of the company's operational team? (Choose three.)

**A.** Providing resilient power and network connectivity to the Outposts racks

**B.** Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts

**C.** Physical security and access controls of the data center environment

**D.** Availability of the Outposts infrastructure including the power supplies, servers, and networking equipment
within the Outposts racks

**E.** Physical maintenance of Outposts components

**F.** Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events

---

## Question 600

A company is planning to migrate a TCP-based application into the company's VPC. The application is publicly
accessible on a nonstandard TCP port through a hardware appliance in the company's data center. This public
endpoint can process up to 3 million requests per second with low latency. The company requires the same level of
performance for the new public endpoint in AWS.
What should a solutions architect recommend to meet this requirement?

**A.** Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly accessible over the TCP port that
the application requires.

**B.** Deploy an Application Load Balancer (ALB). Configure the ALB to be publicly accessible over the TCP port
that the application requires.

**C.** Deploy an Amazon CloudFront distribution that listens on the TCP port that the application requires. Use an
Application Load Balancer as the origin.

**D.** Deploy an Amazon API Gateway API that is configured with the TCP port that the application requires.
Configure AWS Lambda functions with provisioned concurrency to process the requests.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 551

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most cost-effective solution, along with supporting
concepts and links:
The problem requires frequent access for the first week and long-term archival with a retrieval time of under
6 hours. The cost-effectiveness is paramount.

**Option A** leverages S3 Standard for the initial frequent access period. S3 Standard offers high availability,
durability, and performance suitable for frequently accessed objects. After 7 days, the lifecycle rule
automatically transitions the reports to S3 Glacier.
S3 Glacier is designed for low-cost archival storage. It's significantly cheaper than S3 Standard and S3
Standard-IA for long-term storage. The retrieval time for S3 Glacier, even Glacier Flexible Retrieval, meets
the requirement of being retrievable within 6 hours.

**Option B** is less cost-effective because S3 Standard-IA is more expensive than S3 Glacier for long-term
storage. While S3 Standard-IA provides faster retrieval than Glacier, this isn't necessary after the first week,
so the extra cost is not justified.

**Option C**, S3 Intelligent-Tiering, automatically moves data between tiers based on access patterns. However,
since the access pattern is clearly defined (frequent for 1 week, infrequent after), manually controlled
transitions using Lifecycle rules provide better cost optimization in this scenario. Intelligent Tiering also has a
monitoring cost that may be unnecessary.

**Option D**, transitioning to S3 Glacier Deep Archive after 7 days, would not be ideal since the minimum retrieval

time for Glacier Deep Archive is 12 hours, violating the 6-hour requirement. Also, for archival, it would be even
more cost-effective than Glacier, the slower retreival time is not useful.

Therefore, the best balance of cost and retrieval time is achieved by storing the data initially in S3 Standard
and then transitioning it to S3 Glacier using a lifecycle rule after one week.
Key Concepts:
S3 Storage Classes: Understanding the different S3 storage classes (Standard, Standard-IA, Glacier, Deep
Archive) and their cost/performance trade-offs is crucial.
S3 Lifecycle Rules: Lifecycle rules automate the movement of objects between storage classes or their
deletion, reducing storage costs.
Cost Optimization: Choosing the most cost-effective storage solution involves analyzing access patterns and
selecting the appropriate storage class with the desired balance of availability, durability, and retrieval time.

---

## Question 552

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer, along with supporting information:
The company's primary goals are cost optimization for EC2 instances and flexibility to change instance types
and families frequently (every 2-3 months). Let's analyze why each option is either suitable or unsuitable:

**Option A**: Purchase Partial Upfront Reserved Instances for a 3-year term. While Reserved Instances offer
discounts, a 3-year term introduces inflexibility. The company needs to change instance types frequently,
making a long-term commitment less desirable. If instance types are changed, the Reserved Instance might
not apply, wasting money.

**Option B**: Purchase a No Upfront Compute Savings Plan for a 1-year term. Compute Savings Plans provide
significant discounts compared to On-Demand pricing, similar to Reserved Instances. The key advantage is
flexibility. Compute Savings Plans apply to EC2 instances regardless of instance family, size, OS, or tenancy,
as long as compute usage stays within the committed amount. Because it is a "no upfront" option, the
company can benefit from savings while retaining the ability to change instance types as needed. A 1-year
term balances cost savings with flexibility better than a 3-year term.

**Option C**: Purchase All Upfront Reserved Instances for a 1-year term. Similar to option A, Reserved Instances

lack the flexibility the company needs. An "all upfront" payment means the company pays the full cost
upfront, which might not be ideal if resources change quickly.

**Option D**: Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term. Instance Savings Plans offer
discounts specific to instance families within a region. While providing savings, these plans are less flexible
than Compute Savings Plans because they are tied to specific instance types/families. The all upfront cost is
not desirable, and the limited scope compared to compute savings plans makes this option worse.
Why Compute Savings Plans are optimal:
Compute Savings Plans are designed for scenarios where consistent compute usage is expected, but the
specific EC2 instance configurations might change. They provide a commitment to a certain amount of
compute spending per hour across a region and are suitable for different instance types, sizes, operating
systems, and tenancies. This flexibility aligns perfectly with the company's need to change instance types
frequently.
In Summary: **Option B**, purchasing a No Upfront Compute Savings Plan for a 1-year term, provides the best
balance of cost savings and flexibility to accommodate the company's evolving EC2 instance requirements.

---

## Question 553

**Answer:** **A**

**Explanation:**

The correct answer is A because Amazon Macie is specifically designed for discovering and protecting
sensitive data like PII stored in Amazon S3. Macie automates the process of identifying PII by leveraging
machine learning and pattern matching techniques. Configuring Macie in each region (us-east-1 and us-west2) and creating a job to analyze the S3 data allows the solution architect to pinpoint the exact locations where
PII is stored. This requires minimal configuration and ongoing maintenance.

**Option B** is incorrect because AWS Security Hub, while providing a consolidated view of security alerts and
compliance status, doesn't inherently analyze the contents of S3 buckets for PII. Creating an AWS Config rule
might identify if the S3 buckets have appropriate encryption or access controls, but it won't perform content
analysis to locate PII. Security Hub primarily aggregates findings from other services.

**Option C** is wrong because Amazon Inspector is a vulnerability management service focused on assessing EC2
instances and container images for software vulnerabilities and unintended network exposure. It doesn't
directly analyze data within S3 buckets for PII.

**Option D** is incorrect because Amazon GuardDuty is a threat detection service that monitors for malicious
activity and unauthorized behavior within the AWS environment. It doesn't inspect the contents of S3 buckets
for PII. GuardDuty focuses on network traffic, API calls, and log analysis to detect threats, not data content.

Therefore, Macie provides the most efficient and specialized solution for the problem of identifying PII within
S3 buckets with the least operational overhead. It directly addresses the requirement to discover sensitive
data stored within S3.
Further research:
Amazon Macie: https://aws.amazon.com/macie/

---

## Question 554

**Answer:** **C**

**Explanation:**

The correct answer is C because the problem statement explicitly mentions high memory utilization for both
the SAP application and the SQL Server database.

**Option A** is incorrect because while the application server might benefit from compute optimization, the
database server requires memory optimization due to the stated high memory usage. Compute-optimized
instances focus on CPU performance rather than memory.

**Option B** is incorrect because storage-optimized instances are designed for applications that require high,
sequential read and write access to large datasets on local storage. This does not address the problem's core
requirement of high memory utilization for the application and database.

**Option D** is incorrect because HPC-optimized instances are tailored for computationally intensive workloads
like scientific simulations, weather modeling, and deep learning, which are not implied in this scenario of
migrating an SAP application and SQL Server database. The primary constraint here is memory, not extreme
computational power.
Memory-optimized instances are designed to deliver fast performance for workloads that process large
datasets in memory. Instance families like R5, R6i, and X2gd are excellent choices for memory-intensive
applications. The description of the scenario clearly indicates the importance of in-memory performance for
both the SAP application and the SQL Server database. Therefore, using memory-optimized instances for both
ensures that the applications can efficiently access and process data, preventing performance bottlenecks
due to memory constraints.
Further research:

AWS EC2 Instance Types: https://aws.amazon.com/ec2/instance-types/ - This page provides detailed
information about all EC2 instance types and their intended use cases.
Memory Optimized Instances: https://aws.amazon.com/ec2/instance-types/#Memory_optimized Specifically reviews the families best for in memory intensive tasks.

---

## Question 555

**Answer:** **A**

**Explanation:**

The correct solution to securely connect EC2 instances in private subnets to an SQS queue is to use an
interface VPC endpoint configured within the private subnets. Here's why:
Interface VPC Endpoints for SQS: Interface endpoints provide private connectivity to AWS services, in this
case, SQS, without exposing traffic to the public internet. This enhances security and reduces latency.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Placement in Private Subnets: Placing the interface endpoint in the private subnets ensures that EC2
instances can reach SQS privately, as the instances themselves reside within the private subnets and are not
exposed to the public internet.
Security Group Rules: Security groups act as virtual firewalls. An inbound rule on the endpoint's security
group should allow traffic from the EC2 instances' security group. This controls which instances can access
the SQS queue through the endpoint.
VPC Endpoint Policies: While VPC endpoint policies can restrict access, the primary control here is through
the security group associated with the interface endpoint, simplifying the configuration and security
management.

Why other options are incorrect:
Public subnets: Placing the endpoint in public subnets defeats the purpose of private connectivity.
Gateway Endpoints: Gateway endpoints only support S3 and DynamoDB. SQS requires an interface endpoint.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
NAT Gateway + IAM Role: While a NAT gateway enables outbound internet access from private subnets and
an IAM role grants permissions, this approach still requires traffic to traverse the public internet to reach
SQS, which is less secure. Furthermore, it's an unnecessary and costlier setup when private connectivity using
an interface endpoint is available.

SQS Access Policy: While SQS access policies are relevant, in the context of VPC endpoints the endpoint
policy and security group configurations together provide a better approach for defining access based on the
VPC endpoint itself and the security contexts of the resources making the requests.

Therefore, implementing an interface VPC endpoint in the private subnets with appropriate security group
rules provides the most secure and efficient solution.

---

## Question 556

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The core requirement is to grant EC2 instances in the application tier access to DynamoDB tables securely
without hardcoding or exposing credentials within the CloudFormation template or instance configuration.
IAM roles provide a secure way to grant permissions to AWS resources without managing long-term
credentials directly within the application or infrastructure.

**Option B** utilizes IAM roles and instance profiles, which is the recommended approach for granting
permissions to EC2 instances. An IAM role is created with the necessary permissions (read and write access)
to DynamoDB tables. This role is then associated with an EC2 instance profile. The instance profile acts as a
container for the IAM role and is automatically applied to the EC2 instances when they are launched. When
the application running on the EC2 instance makes calls to DynamoDB, the AWS SDK automatically uses the
credentials provided by the instance profile to authenticate. This eliminates the need to store or manage
access keys directly on the instance or within the CloudFormation template. This approach aligns with the
principle of least privilege, granting only the necessary permissions to the EC2 instances.

**Option A** is partially correct because it suggests using an IAM role. However, it doesn't explicitly mention
assigning write permissions to the IAM role. Therefore, it's less complete than **Option B**.

**Option C** is incorrect because it involves asking the user to manually input access and secret keys. This is bad
practice because it requires manual intervention, poses a security risk if keys are compromised, and is not a
scalable or automated solution. It goes against the principle of minimizing human intervention.

**Option D** is also incorrect and a very bad practice. Creating IAM users within the CloudFormation template and

attempting to retrieve and pass credentials via user data is insecure. Secret and access keys are long-term
credentials that should never be passed via user data because user data is easily accessible and can be
logged. Furthermore, hardcoding credentials in templates increases the risk of accidental exposure.

In summary, leveraging IAM roles and instance profiles provides a secure, automated, and auditable
mechanism for granting EC2 instances access to other AWS services like DynamoDB, fulfilling the
requirements without compromising security.
For further research:
IAM Roles for Amazon EC2: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_ec2.html
Granting Applications Running on Amazon EC2 Instances Access to AWS Resources:
https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_delegation.html
AWS CloudFormation: https://aws.amazon.com/cloudformation/

---

## Question 557

**Answer:** **A**

**Explanation:**

The correct answer is A. Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon
Redshift data to enrich the S3 data.

Here's why:
Amazon Athena for S3 data processing: Athena is a serverless, interactive query service that makes it easy
to analyze data directly in Amazon S3 using standard SQL. It's well-suited for processing large amounts of
semi-structured data stored in S3 because it doesn't require setting up or managing any infrastructure.
Athena excels at parallel data processing directly on S3 data, allowing for faster query execution.
https://aws.amazon.com/athena/
AWS Glue for data enrichment: AWS Glue is a fully managed extract, transform, and load (ETL) service that
makes it easy to prepare and load data for analytics. Glue can access data in Amazon Redshift and transform
it to enrich the data stored in S3. Glue's capabilities include data cataloging, code generation, and job
scheduling, which can be leveraged to orchestrate the data enrichment process. Glue is also capable of
performing parallel processing using Spark. https://aws.amazon.com/glue/
Now, let's analyze why the other options are less suitable:

**B.** Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the
S3 data. While EMR can process S3 data in parallel, it's generally an overkill for simple SQL queries. Athena is
more cost-effective and easier to manage for such use cases. Using EMR to enrich data from Redshift might
involve more complex setup and maintenance than using Glue, which is specifically designed for ETL tasks.

**C.** Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into
Amazon Redshift so that the data can be enriched. Kinesis Data Streams is designed for real-time data
streaming, which isn't the core requirement here. The problem describes a batch-oriented analytics
application. Moving all the S3 data into Redshift simply for enrichment is less efficient and more costly
compared to enriching it in place using Glue.

**D.** Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich
the S3 data. Glue is typically used for ETL, not for interactive querying like the solutions architect intended to
do. While Lake Formation helps manage and secure data lakes, it's not directly involved in the data
enrichment process itself. Glue performs the actual enrichment, potentially making use of Lake Formation's
governance features for data access.

---

## Question 558

**Answer:** **C**

**Explanation:**

The most cost-effective solution for connecting two VPCs within the same region and account, with a
moderate data transfer requirement (500 GB/month), is VPC peering. VPC peering allows direct networking
between VPCs using AWS's internal network backbone.

**Option A**, AWS Transit Gateway, is more suitable for connecting many VPCs (hub-and-spoke model) or
connecting to on-premises networks. While it offers more features than VPC peering, it incurs higher costs,
including hourly charges for the Transit Gateway itself and data processing charges.

**Option B**, AWS Site-to-Site VPN, introduces overhead related to IPsec encryption and decryption. It's better
suited for connecting to on-premises networks or across regions where direct peering isn't possible. VPN
tunnels also have bandwidth limitations which could impact performance for larger data transfers.

**Option D**, AWS Direct Connect, is designed for establishing a dedicated network connection between onpremises infrastructure and AWS. It's overkill for connecting VPCs within the same region and account and is
significantly more expensive due to monthly port fees and hourly charges. It's targeted towards hybrid cloud
environments where consistent and high-bandwidth connectivity is critical between the on-premises data
center and AWS.

VPC peering involves setting up a peering connection request and accepting it. Once established, route tables
in each VPC are updated to direct traffic destined for the other VPC's CIDR block through the peering
connection. The primary cost associated with VPC peering is data transfer charges between the VPCs, which
are generally lower than the costs associated with Transit Gateway, VPN, or Direct Connect for this particular
use case. Therefore, VPC peering is the simplest and most cost-effective solution for the given scenario.
Refer to these links for further information:
VPC Peering: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
AWS Transit Gateway: https://aws.amazon.com/transit-gateway/
AWS Site-to-Site VPN: https://aws.amazon.com/vpn/
AWS Direct Connect: https://aws.amazon.com/directconnect/

---

## Question 559

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's a detailed justification:
The problem requires cost allocation based on product lines using tags that are already applied to resources
across multiple AWS accounts within an Organization. AWS Organizations provides a consolidated billing
feature, which allows for aggregated cost tracking. To leverage this feature effectively with existing tags,
certain steps are essential within the AWS Billing console.

**Option B** is correct because the company has already applied user-defined tags (specific to product lines) to
their resources. To utilize these tags for cost allocation, they must be activated in the AWS Billing console.
AWS-generated tags typically serve other purposes and don't align with the specific product line breakdown
the company requires, making option A incorrect.

**Option E** is correct because tag activation for cost allocation must occur from the AWS Organizations
management account. This centralized activation ensures that the tag is enabled across all member accounts
contributing to the consolidated bill, enabling the cost allocation to be displayed correctly in billing reports.
Activating the tags in individual accounts (option D) would not centrally manage the cost allocation across the
entire Organization. The AWS Resource Groups console (option C) is designed for managing and organizing
resources, not for activating tags for cost allocation purposes in billing.

In summary, selecting the appropriate user-defined tag in the AWS Billing console and activating it from the
Organizations management account enables the cost allocation based on product lines across all member

accounts within the AWS Organization, thus meeting the company's requirements.
Supporting Documentation:
AWS Organizations Consolidated Billing
Using Cost Allocation Tags

---

## Question 560

**Answer:** **A**

**Explanation:**

The correct answer is A: Provision the AWS accounts by using AWS Control Tower. Use account drift
notifications to identify the changes to the OU hierarchy.

Here's why:
AWS Control Tower simplifies multi-account management: AWS Control Tower provides a high-level
abstraction for managing multiple AWS accounts through AWS Organizations. It establishes guardrails and
automates account provisioning, making it easier to enforce compliance and security best practices across
your AWS environment.
Account drift detection directly addresses the requirement: The core problem is detecting changes (drift)
from the desired, governed state. Control Tower's account drift notifications are specifically designed to
detect configuration changes within provisioned accounts that deviate from the established guardrails. These
changes could indicate modifications to the OU hierarchy or other important configurations.
Notifications minimize operational overhead: Control Tower automatically sends notifications when drift is
detected. This proactive monitoring eliminates the need for manual checks or custom scripting, significantly
reducing the operational overhead for the company's operations team.
Let's examine why the other options are less suitable:

**B.** AWS Config aggregated rules: While AWS Config can monitor configurations, aggregated rules are best
suited for assessing compliance across multiple accounts based on specific configuration rules, not for
detecting structural changes in the OU hierarchy. Setting up these rules and maintaining them would require
more operational effort than Control Tower's built-in drift detection.

**C.** AWS Service Catalog and CloudTrail: AWS Service Catalog helps manage and provision services. While

CloudTrail can log API calls, including those related to OU changes, this solution requires the operations team
to sift through CloudTrail logs to identify OU changes. This manual process increases the operational burden.

**D.** CloudFormation and drift detection on stacks: CloudFormation is excellent for infrastructure as code.
However, using it to manage accounts directly in Organizations is less common than using Control Tower.
Furthermore, CloudFormation drift detection is specific to changes within a stack, not the broader OU
hierarchy. This approach would require creating stacks specifically for managing the OU structure and
monitoring drift on those stacks, increasing complexity and overhead.

In summary, AWS Control Tower's built-in account drift notifications provide the most straightforward and
efficient way to identify and notify the operations team about changes to the OU hierarchy, thereby
minimizing operational overhead.
Supporting Documentation:
AWS Control Tower: https://aws.amazon.com/controltower/
AWS Organizations: https://aws.amazon.com/organizations/
AWS Control Tower Account Factory: https://docs.aws.amazon.com/controltower/latest/userguide/accountfactory.html

---

## Question 561

**Answer:** **A**

**Explanation:**

The question focuses on reducing latency for retrieving product details from DynamoDB with minimal
operational overhead. Let's analyze why option A, using DynamoDB Accelerator (DAX), is the best choice.
DAX is purpose-built for DynamoDB: DAX is a fully managed, highly available, in-memory cache specifically
designed for DynamoDB. This tight integration eliminates the complexities of managing a general-purpose
cache like Redis or Memcached.
Lowest Operational Overhead: DAX requires minimal configuration and management. AWS handles the
underlying infrastructure, patching, and scaling. This contrasts with ElastiCache solutions, which require more
manual setup and ongoing maintenance.
Seamless Integration: DAX works directly with DynamoDB, requiring minimal application code changes. You
simply point your application to the DAX cluster.
Microsecond Latency: DAX is optimized for extremely low latency, providing single-digit millisecond
response times, often even in the microsecond range, significantly improving read performance.

No Data Consistency Concerns (for this scenario): The question focuses on product details. This suggests
relatively static data that is suitable for caching without strong consistency requirements. DAX provides
eventual consistency, which is acceptable in many read-heavy scenarios where stale data is tolerable for a
short period.

Why other options are less suitable:
ElastiCache (Redis/Memcached): While ElastiCache can be used for caching DynamoDB data, it involves
more operational overhead. You need to manage the ElastiCache cluster, handle data
serialization/deserialization, and implement the caching logic within your application. Furthermore, it doesn't
natively understand DynamoDB's data model.
DynamoDB Streams + Lambda + ElastiCache: This is a complex solution that introduces significant
operational overhead. It requires setting up DynamoDB Streams, configuring a Lambda function to process
the stream, populating ElastiCache, and managing the entire pipeline. This is overkill for simply caching read
data and increases points of failure. It also introduces latency due to the asynchronous nature of the stream
processing.

In summary, DAX provides the simplest, most efficient, and lowest-overhead solution for accelerating
DynamoDB reads by providing a managed in-memory cache specifically optimized for DynamoDB, minimizing
latency without the need for extensive configuration or application modifications.

---

## Question 562

**Answer:** **AB**

**Explanation:**

The goal is to ensure DynamoDB traffic from EC2 instances within a VPC doesn't traverse the public internet.

**Option A**, creating a route table entry for the endpoint, is essential. A route table directs network traffic within
a VPC. By adding a route that directs traffic destined for DynamoDB (identified by the endpoint's prefix list) to
the gateway endpoint, we ensure traffic stays within the VPC.

**Option B**, creating a gateway endpoint for DynamoDB, is also crucial. A gateway endpoint is a VPC resource
that enables private connections to supported AWS services (like DynamoDB) without requiring an internet
gateway, NAT device, or VPN connection. This prevents traffic from leaving the VPC. Gateway endpoints are
highly available and scaled automatically to support high traffic volumes.

**Option C**, creating an interface endpoint for Amazon EC2, is incorrect. Interface endpoints (powered by
PrivateLink) are used for connecting to AWS services or other VPC endpoints privately, but specifically for
services that are not supported by gateway endpoints. DynamoDB is supported by gateway endpoints, so
interface endpoints are not the correct choice here. Furthermore, an interface endpoint is used to connect to a
service, not to be connected from.

**Option D**, creating an elastic network interface for the endpoint in each subnet, is incorrect. This is not how
gateway endpoints work. Gateway endpoints do not require explicit ENIs. They're managed by AWS.

**Option E**, creating a security group entry in the endpoint's security group to provide access, is incorrect.
Gateway endpoints do not use security groups. Instead, access is controlled by the resource policies of the
service being accessed (DynamoDB in this case). Resource policies specify which VPCs and accounts are
allowed to access the service. While security groups still control traffic to the EC2 instance, they don't
directly control the path of traffic that traverses the gateway endpoint.

Therefore, creating a route table entry and creating a gateway endpoint for DynamoDB is the correct
approach.
Here are helpful links for more information:
VPC Endpoints: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Gateway VPC Endpoints for DynamoDB:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-access.html
Route Tables: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html

---

## Question 563

**Answer:** **B**

**Explanation:**

The question requires a solution that centralizes Kubernetes cluster and workload visibility across Amazon
EKS and on-premises environments with minimal operational overhead.

**Option B**, using Amazon EKS Connector, is the most suitable solution. EKS Connector allows you to connect
any conformant Kubernetes cluster (including on-premises) to Amazon EKS. Once connected, you can view
these clusters and their associated resources (like deployments, pods, and services) directly from the AWS
Management Console. This offers a centralized view without requiring extensive configuration or
management of monitoring agents. The integration leverages AWS IAM for authentication and authorization.

**Option A**, CloudWatch Container Insights, focuses primarily on performance monitoring and metrics
collection. While it can provide insights into cluster performance, it doesn't offer a unified console for viewing
all clusters and workloads without significant configuration and management of agents on each cluster.

**Option C**, AWS Systems Manager, is a powerful management service but primarily focuses on managing EC2

instances and on-premises servers. It can execute commands on instances within the clusters, but it doesn't
inherently provide a centralized Kubernetes-aware view of all clusters and their workloads like EKS
Connector does.

**Option D**, Amazon EKS Anywhere, creates EKS-compatible clusters on-premises. While it helps standardize
the Kubernetes experience, it doesn't directly address the requirement of viewing existing on-premises
clusters alongside EKS clusters from a central location without migrating the on-premises workloads to EKS
Anywhere. Using EKS Anywhere as a primary viewing cluster would involve significant operational overhead.

Therefore, EKS Connector offers the simplest and most direct way to meet the requirements of centralized
visibility with minimal operational overhead by connecting existing clusters to the EKS console.
Amazon EKS Connector DocumentationAmazon EKS Anywhere Documentation

---

## Question 564

**Answer:** **B**

**Explanation:**

The correct answer is B. Store sensitive data in Amazon RDS for MySQL. Use AWS Key Management
Service (AWS KMS) client-side encryption to encrypt the data.

Here's why:
Requirement: Storing sensitive customer information for an e-commerce application: RDS for MySQL is a
suitable database solution for structured data like customer information and transaction details.
Requirement: Protecting data even from database administrators: Client-side encryption using AWS KMS
ensures that the data is encrypted before it's stored in the database. This means the database administrators
(DBAs) only see encrypted data and cannot decrypt it without the proper KMS key.
Client-Side Encryption: With client-side encryption, the application handles the encryption and decryption of
the data using the KMS key. The RDS instance never has direct access to the key itself, making it impossible
for the database to reveal the plain-text data.
AWS KMS: AWS KMS is a managed service that makes it easy for you to create and control the encryption
keys used to encrypt your data. KMS provides a secure and centralized way to manage cryptographic keys.

Why other options are incorrect:

**A:** Storing sensitive data on EBS volumes with EBS encryption only protects data at rest on the volume itself.
If someone with proper IAM permissions gets access to the instance and the mounted volume, they can
access the unencrypted data if the application isn't specifically encrypting data at the application level. It
does not protect against DBAs if they have instance access to the database EC2 instance.

**C:** S3 is generally used for unstructured data (objects). While S3 server-side encryption protects data at rest,
it doesn't provide the same level of control as client-side encryption for protecting against DBAs.
Furthermore, using S3 for transactional data in an e-commerce application is not an efficient or standard
design pattern.

**D:** Amazon FSx is a file system service. While you can store data on FSx and restrict access using Windows
file permissions, this option doesn't address the requirement of protecting data from database administrators
since file storage is not designed for transactional data.

---

## Question 565

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses all the requirements outlined: compatibility, managed database
service, and auto-scaling.
Compatibility: Amazon Aurora with MySQL compatibility is designed to be a drop-in replacement for MySQL
databases. This ensures that the existing applications that rely on MySQL will function correctly with minimal
or no code changes. https://aws.amazon.com/rds/aurora/mysql-features/
Migration: AWS Database Migration Service (DMS) is specifically designed to migrate databases from onpremises environments to AWS. It supports heterogeneous database migrations, but for a MySQL-to-Aurora
migration, it's a homogeneous migration, which simplifies the process. https://aws.amazon.com/dms/
Auto-Scaling: Aurora Auto Scaling automatically adjusts the number of Aurora DB instances in an Aurora
cluster. This is vital to maintain performance during peak demand periods without manual intervention,
meeting the scalability requirement.
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora. Managing. Scaling.html

**Option A** is partially correct (RDS for MySQL allows elastic storage scaling), but it doesn't offer the superior
performance and scalability of Aurora, especially for demanding workloads. Native MySQL tools for migration
can be complex and time-consuming compared to DMS. Elastic storage scaling is not the same as scaling the
compute resources/instances, which Aurora Auto Scaling provides.

**Option B** suggests migrating to Amazon Redshift, which is a data warehouse service optimized for analytical
workloads, not transactional data. Redshift is incompatible with MySQL applications and is not suitable for a
direct database migration requiring compatibility. Furthermore, Auto Scaling in Redshift refers to scaling the
number of compute nodes, not intended for auto-scaling based on transaction load like Aurora.

**Option D** proposes migrating to Amazon DynamoDB, a NoSQL database. This option fails on the compatibility
requirement. DynamoDB uses a different data model and query language than MySQL, meaning significant
application changes would be needed, which the problem statement aims to avoid.

---

## Question 566

**Answer:** **B**

**Explanation:**

The best solution for rapidly and concurrently reading and writing to shared storage from multiple EC2 Linux
instances across Availability Zones, while maintaining a hierarchical directory structure, is to use Amazon
Elastic File System (Amazon EFS).

**Option A** is incorrect because Amazon S3 is object storage, not file storage. While S3 can store files, it lacks
the hierarchical directory structure required and isn't designed for the rapid and concurrent read/write
operations needed for applications expecting a traditional file system interface. S3 is better suited for storing
large files, backups, or static content.

**Option C** is incorrect because attaching a single EBS volume to multiple EC2 instances is not supported. EBS
volumes are block storage and are designed for single-instance attachment. Attempting to attach the same
EBS volume to multiple instances can lead to data corruption. Also, even if possible, io2 EBS would only be in
one Availability Zone, impacting availability across the two zones.

**Option D** is incorrect because synchronizing EBS volumes across multiple instances would be complex to set
up and manage, prone to errors, and would not be a native AWS solution. It would also introduce significant
latency and overhead, hindering the performance requirements. Furthermore, it wouldn't offer the same level
of availability and resilience as a managed service.
EFS, on the other hand, is a fully managed network file system specifically designed for use with AWS
compute services like EC2. It provides a simple, scalable, elastic, and highly available file system that can be

simultaneously accessed by multiple EC2 instances across multiple Availability Zones within a VPC. This
makes it ideal for shared storage scenarios requiring a traditional file system interface, such as those
described in the question. Mounting the EFS file system on each EC2 instance allows the applications to read
and write to the shared storage rapidly and concurrently, while automatically handling data replication and
availability across Availability Zones. EFS uses a hierarchical directory structure natively.
Amazon EFS Documentation

---

## Question 567

**Answer:** **A**

**Explanation:**

The correct answer is A because it offers the least operational overhead and best aligns with managed
services and future scalability requirements. Let's break down why:

**Option A** leverages fully managed services: Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. API
Gateway handles the HTTP requests from the sensors, Lambda provides serverless compute to process the
data, and DynamoDB offers a NoSQL database that's highly scalable and requires minimal administration. This
architecture is designed for event-driven processing and scales automatically with the workload. DynamoDB
is also optimized for key-value data, making it ideal for storing tenant usage data.

**Option B** involves managing EC2 instances within an Auto Scaling group and an Elastic Load Balancer (ELB).
While ELB is managed, the EC2 instances require patching, scaling, and monitoring, increasing operational
overhead. Storing processed data in S3 is a good choice for archival purposes, but not ideal for real-time
querying and updates.

**Option C** introduces a Microsoft SQL Server Express database on an EC2 instance. This requires managing the
database server, including patching, backups, and ensuring high availability. Although API Gateway and
Lambda are beneficial, the SQL Server significantly increases operational overhead compared to DynamoDB.

**Option D** involves similar operational overhead to option B because it requires managing EC2 instances. While
EFS is a managed service, its primary use case is sharing file systems, not storing structured data like tenant
consumption. Storing usage data on EFS wouldn't be the most efficient approach.

Therefore, **Option A** is the most efficient choice due to the combination of managed services, scalability, and
event-driven architecture, minimizing the administrative burden and facilitating future feature additions.
Using DynamoDB instead of a file system, relational database, or object storage is better suited for quick and

easy updates to tenant usage data based on sensor readings.
Supporting Resources:
Amazon API Gateway: https://aws.amazon.com/api-gateway/
AWS Lambda: https://aws.amazon.com/lambda/
Amazon DynamoDB: https://aws.amazon.com/dynamodb/
Amazon EC2 Auto Scaling: https://aws.amazon.com/autoscaling/

---

## Question 568

**Answer:** **A**

**Explanation:**

The correct solution is Amazon S3 with Amazon CloudFront. Here's why:
Amazon S3 is ideal for storing large amounts of unstructured data like engineering drawings. It offers
virtually unlimited storage, scalability, and high durability. S3 is designed for object storage, making it perfect
for storing individual files accessible via HTTP/HTTPS.
Amazon CloudFront, a content delivery network (CDN), integrates seamlessly with S3. It caches content (like
those engineering drawings) at edge locations globally, reducing latency for users accessing the web
application. When a user requests an engineering drawing, CloudFront first checks its cache. If the drawing is
cached, it delivers it from the nearest edge location, resulting in faster load times. If the drawing is not
cached, CloudFront retrieves it from the S3 origin and caches it for future requests.

**Option B** is incorrect because Amazon S3 Glacier is designed for archival storage of data that is infrequently
accessed, which doesn't align with the need for fast access for viewing engineering drawings. ElastiCache is
an in-memory caching service typically used for databases, not for serving large files like engineering
drawings.

**Option C** is incorrect because EBS volumes are block storage devices primarily used for persistent storage for
EC2 instances. While EBS can store data, it isn't a scalable and cost-effective solution for storing petabytes of
data compared to S3. Also, EBS isn't directly integrated with CloudFront for content caching in the same way
that S3 is.

**Option D** is incorrect because AWS Storage Gateway is a hybrid storage service that connects on-premises
software appliances to AWS cloud storage. It isn't appropriate for a fully cloud-native web application storing
petabytes of data within AWS. ElastiCache isn't a substitute for a CDN like CloudFront, which optimizes
content delivery globally.

Therefore, S3 provides the scalable storage for petabytes of drawings, and CloudFront provides caching for

low latency delivery, fulfilling the application's requirements.
Further research:
Amazon S3: https://aws.amazon.com/s3/
Amazon CloudFront: https://aws.amazon.com/cloudfront/

---

## Question 569

**Answer:** **A**

**Explanation:**

The correct answer is A. Check for metrics in Amazon CloudWatch in the namespace for AWS/Events.

Here's a detailed justification:
Amazon EventBridge emits metrics to Amazon CloudWatch under the AWS/Events namespace. These metrics
provide valuable insights into the performance and behavior of EventBridge rules. Specifically, metrics like
Invocations, FailedInvocations, TriggeredRules, and MatchedEvents can help determine if the rule conditions are
being met and if the target is being invoked.
Invocations: This metric indicates the number of times the target has been invoked by the EventBridge rule. If
the target is a third-party API, a zero value suggests that the rule hasn't invoked it yet, indicating a potential
issue with rule conditions or event matching.
FailedInvocations: This metric represents the number of times the target invocation failed. A high value
indicates a problem with the target or the EventBridge configuration.
TriggeredRules: This metric indicates how many times a rule was matched to an incoming event. This is useful
for confirming that the rule conditions are being met by incoming events.
MatchedEvents: This metric represents the number of events that matched a particular EventBridge rule.
By monitoring these metrics, a solutions architect can quickly ascertain whether the EventBridge rule is
triggering based on the defined conditions and if the target API is being successfully invoked. If the
Invocations metric remains at zero, it suggests that either the rule conditions are not being met, or the events
are not being routed correctly. If FailedInvocations is high, the API endpoint itself might have problems.

Why other options are incorrect:

**B.** Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue: A dead-letter
queue (DLQ) is used to capture events that could not be processed successfully after multiple retry attempts.
While a DLQ might contain information about failed invocations, it won't help determine if the rule is being
triggered in the first place. DLQs only get populated after a failed target invocation (after retries), not if the
rule never fired initially.

**C.** Check for the events in Amazon CloudWatch Logs: While CloudWatch Logs can capture detailed logs from

various AWS services and applications, EventBridge doesn't automatically log every event it processes or rule
it triggers to CloudWatch Logs unless explicitly configured to do so using CloudWatch Logs as a target.
Moreover, logging every event can become costly and inefficient for debugging this specific scenario.

**D.** Check the trails in AWS CloudTrail for the EventBridge events: AWS CloudTrail records API calls made to
AWS services, including EventBridge. CloudTrail can show the creation, modification, or deletion of
EventBridge rules, but it doesn't directly track the number of times a rule is triggered or the target is invoked.
CloudTrail is primarily for auditing purposes, not for real-time monitoring of rule performance.

---

## Question 570

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the best solution for scaling EC2 instances for a recurring
Friday workload with minimal operational overhead:
The core requirement is to automatically scale the EC2 instance count based on a predictable schedule (every
Friday). Auto Scaling groups are designed to automatically manage the number of EC2 instances based on
defined parameters. **Option B**, using a scheduled action within an Auto Scaling group, directly addresses this
need. A scheduled action allows you to predefine instance count adjustments (minimum, maximum, desired
capacity) that occur at specific times or recurring intervals. This eliminates manual intervention each Friday.

**Option A**, using Amazon EventBridge (formerly CloudWatch Events) to remind someone to scale the instances,
introduces manual steps. While EventBridge can trigger actions, a simple reminder still requires someone to
log in and adjust the instance count. This increases operational overhead and the risk of human error.

**Option C**, manual scaling, defeats the purpose of automation entirely. It would require someone to manually
adjust the Auto Scaling group's parameters (desired capacity) every Friday, which is exactly what the
question aims to avoid.

**Option D**, automatic scaling, is usually based on metrics like CPU utilization or network traffic. While it can
handle fluctuating workloads, it is less appropriate for predictable, time-based scaling. Automatic scaling
would react to the increased workload only after it has already started, potentially delaying the scaling and
impacting performance. Setting up and maintaining the metrics for automatic scaling adds complexity.

Therefore, a scheduled action within an Auto Scaling group provides the most streamlined and automated
approach to managing the EC2 instance count for a recurring Friday workload with minimal operational
overhead, perfectly aligning with the stated requirements.

---

## Question 571

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:
AWS Certificate Manager (ACM): ACM is the preferred service for provisioning, managing, and deploying
SSL/TLS certificates for use with AWS services. ACM simplifies the process of obtaining and renewing
certificates. https://aws.amazon.com/certificate-manager/
Importing Certificates: ACM allows you to import certificates issued by a third-party CA, which is a key
requirement in this scenario. https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html
API Gateway Custom Domains: Amazon API Gateway supports custom domain names for your APIs. To use
HTTPS with a custom domain, you need to associate a TLS certificate with it. ACM makes this integration
seamless. https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html
HTTP API and TLS Requirements: HTTP APIs in API Gateway support TLS. The question specifies TLSv1.3.
API Gateway manages TLS versions and supports configuring a secure policy.
Why **Option A** is Incorrect: **Option A** suggests creating a certificate on a local machine and then importing.
While possible, ACM's primary function is certificate management; relying on a local machine introduces
complexities and defeats the purpose of using ACM. The certificate creation and signing should be handled
by the third party CA.
Why **Option C** and D are Incorrect: Lambda function URLs don't directly offer the same level of custom
certificate management and custom domain integration as API Gateway. While you can handle TLS within the
Lambda function itself, this is less efficient and more complex than using API Gateway's built-in features. API
Gateway is specifically designed to handle API traffic, including TLS termination.

Therefore, the most efficient and manageable approach is to import the certificate issued by the third-party
CA into ACM and then associate it with a custom domain in API Gateway for your HTTP API, satisfying the
TLSv1.3 requirement.

---

## Question 572

**Answer:** **C**

**Explanation:**

The optimal solution is to provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1
Aurora capacity unit (ACU). This choice best addresses the requirements for a managed database service with
auto-scaling capabilities and minimal administrative overhead, suitable for handling inconsistent workloads
after migrating from an on-premises MySQL-compatible database.

**Option A**, using Amazon DynamoDB, is not ideal because it's a NoSQL database. While DynamoDB scales very
well, migrating a MySQL-compatible database to DynamoDB would require a significant application rewrite
and redesign, increasing complexity and administrative overhead, especially considering the existing
application's design.

**Option B**, provisioning a standard Amazon Aurora database with a minimum capacity of 1 ACU, fulfills the
requirements for a managed MySQL-compatible service and provides scalability. However, Aurora's standard
provisioned instances are not as efficient at scaling to zero when the application has near-zero or
unpredictable usage. Administratively, Aurora requires more effort to right-size compared to Serverless v2.

**Option D**, provisioning an Amazon RDS for MySQL database with 2 GiB of memory, meets the minimum
memory requirement but lacks the automatic scaling capability needed to manage unpredictable workload
increases efficiently. While RDS MySQL can be scaled, manual intervention or complex custom automation
would be required, increasing administrative burden.
Aurora Serverless v2 (**Option C**) excels because it combines compatibility with MySQL, automatic scaling, and
minimal administrative overhead. It starts with a minimum of 0.5 ACUs (effectively using about 1 GiB memory)
and automatically scales up or down based on application demand. This ensures efficient resource utilization
and cost optimization during periods of low usage, aligning perfectly with the need to manage inconsistent
workloads. Aurora Serverless v2 also manages patching and other maintenance tasks. The cost of the service
scales directly with usage, which can be more efficient than a provisioned Aurora DB if the workload is
extremely variable. It effectively handles unexpected workload increases without manual intervention.

Therefore, Aurora Serverless v2 provides the best balance between compatibility, scalability, costeffectiveness, and ease of management for this scenario.
Reference:
Amazon Aurora Serverless v2
Amazon RDS
Amazon DynamoDB

---

## Question 573

**Answer:** **D**

**Explanation:**

The correct answer is D: Configure Lambda SnapStart. Here's why:
The scenario focuses on reducing startup latency ("cold starts") for Java 11 Lambda functions without strict
latency requirements for the application as a whole. We also want to reduce outlier latencies during function
scale-up and cost-effectiveness.

**A.** Configure Lambda provisioned concurrency: Provisioned concurrency keeps Lambda functions initialized
and ready to respond, directly addressing cold starts. However, it comes at a cost: you pay for the allocated
concurrency regardless of whether it's used. While effective, it's not the most cost-effective solution when
strict latency requirements are absent, and it does not fundamentally address the underlying cold start
process.

**B.** Increase the timeout of the Lambda functions: Increasing the timeout merely allows longer execution
times but does nothing to reduce cold start latency itself. Cold starts occur before the function code begins
executing. This choice is irrelevant to the problem.

**C.** Increase the memory of the Lambda functions: While increasing memory can sometimes improve
performance by providing more resources during execution, it doesn't fundamentally address the cold start
issue. The JVM initialization and class loading, which are major contributors to cold starts, are still present. It
also directly increases costs, as you pay for the provisioned memory.

**D.** Configure Lambda SnapStart: SnapStart optimizes for Java 11 functions. It captures a snapshot of the
initialized execution environment (including the JVM) when the function is first deployed or updated. When the
function is invoked for the first time or needs to scale, Lambda resumes from the snapshot instead of starting
from scratch. This drastically reduces cold start latency, approaching near-instant startup. This makes it the
most cost-effective choice because you only pay for the actual invocation time of the function from the
resumed state. It is particularly suited when there aren't strict latency requirements.

Therefore, SnapStart is the best option as it directly tackles the cold start issue for Java 11, reduces outlier
latencies during scaling, and is more cost-effective than provisioned concurrency. It is also the most suitable
solution when strict latency requirements are not an issue.
Supporting documentation:
AWS Lambda SnapStart: https://aws.amazon.com/blogs/aws/lambda-snapstart-for-java-functions-generallyavailable-increase-startup-speed-by-up-to-10x/
Optimizing Lambda performance: https://docs.aws.amazon.com/lambda/latest/dg/optimization-tips.html

---

## Question 574

**Answer:** **B**

**Explanation:**

The optimal solution is to migrate the existing RDS for MySQL database to an Aurora MySQL database
cluster. Here's why:
Aurora MySQL is a cost-effective option for intermittent workloads:
Cost Optimization: Aurora MySQL offers cost-effective scaling, especially when the application operates for
a short duration each week. It does not have the capability to pause completely, but the cost will be low.
Performance and Scalability: Aurora offers enhanced performance and scalability compared to standard
MySQL, which is not directly related to the prompt.
Managed Service: RDS and Aurora handle patching, backups, and maintenance, reducing operational
overhead compared to managing MySQL on EC2.
Alternatives: While Aurora Serverless v2 could seem appealing because it scales to zero capacity when idle,
the prompt did not specify that the application be completely idle.

Why other options are less suitable:

**Option A** (Aurora Serverless v2 MySQL): Although Aurora Serverless v2 scales to zero when idle, it may not
be the most cost-effective option since the prompt did not specify it needs to scale to zero.

**Option C** (EC2 with MySQL): Running MySQL on EC2 requires more manual management of the database,
backups, patching, and OS, increasing operational overhead. Instance reservations don't address the
fundamental issue of wasted resources during the idle period.

**Option D** (ECS with MySQL): Deploying MySQL in containers on ECS introduces complexity and overhead for
managing containers and orchestration, without a significant cost advantage over using Aurora.
Supporting Documentation:
Amazon Aurora: https://aws.amazon.com/rds/aurora/
Amazon RDS Pricing: https://aws.amazon.com/rds/pricing/

---

## Question 575

**Answer:** **C**

**Explanation:**

The correct answer is C: Create an Amazon RDS database with Multi-AZ DB cluster deployment. Here's why:
High Availability: Multi-AZ DB cluster deployments in Amazon RDS are designed to provide high availability
for PostgreSQL database engines. They involve creating a primary DB instance along with multiple
synchronous standby DB instances in different Availability Zones within the same AWS Region. In case of a
failure of the primary instance, RDS automatically fails over to one of the standby instances, minimizing
downtime. This addresses the requirement for high availability.
Increased Read Capacity: Multi-AZ DB clusters support read workloads through reader endpoints.
Applications can direct read traffic to these reader endpoints, which distribute the load across the available
standby instances. This increases the read capacity without impacting the performance of the primary
instance handling write operations.
Operational Efficiency: Amazon RDS simplifies database management tasks like backups, patching, and
recovery. With Multi-AZ DB clusters, these tasks are handled automatically, reducing the operational
overhead for the company. This efficiency is crucial for environments where the company desires to minimize
administrative burden.

**Option A** is incorrect because DynamoDB, while highly available, is a NoSQL database and not suitable for
applications requiring a PostgreSQL database engine. **Option B** offers High Availability but it doesn't offer
direct support for scaling read workloads as efficiently as multi-az DB clusters. **Option D** provides read
replicas but requires cross-region configuration, adding complexity and increased latency. It is also more
complex than a multi-az DB cluster.

Therefore, using an Amazon RDS database with Multi-AZ DB cluster deployment provides the best balance of
high availability, increased read capacity, and operational efficiency for the company's PostgreSQL database
needs.

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts. MultiAZ.htmlhttps://aws.amazon.com/rds/featur

---

## Question 576

**Answer:** **D**

**Explanation:**

The correct answer is D. Edge-optimized endpoint.

Here's why: Edge-optimized endpoints in Amazon API Gateway are designed to minimize latency for
geographically distributed users. When a user makes a request to an edge-optimized API, the request is
routed to the nearest AWS edge location via Amazon CloudFront. CloudFront is a content delivery network
(CDN) that caches content and routes requests through its global network of edge locations, reducing the
distance the request needs to travel. This results in lower latency and faster response times for users
regardless of their location.
A regional endpoint, on the other hand, serves requests from within a specific AWS Region. While it offers low
latency for users in that region, it doesn't provide the global distribution benefits of an edge-optimized
endpoint.
A private endpoint is used to access APIs from within a VPC without exposing them to the public internet. It
doesn't directly address latency reduction for geographically distributed users.
An Interface VPC endpoint is used to connect to AWS services privately from within a VPC. It also does not
provide geographical distribution for latency reduction like an edge-optimized endpoint.

Therefore, for the requirement of reducing latency for geographically distributed users accessing a serverless
web application, the edge-optimized endpoint is the most suitable choice due to its integration with Amazon
CloudFront and global edge location network.

---

## Question 577

**Answer:** **C**

**Explanation:**

The correct answer is C: Use AWS Certificate Manager (ACM) to create a certificate and use DNS validation
for the domain. Here's why:
The requirement is to automate TLS certificate creation and renewal for a CloudFront distribution with
minimal operational overhead. AWS Certificate Manager (ACM) is specifically designed for this purpose. ACM
integrates directly with CloudFront and can automatically provision, deploy, and renew SSL/TLS certificates
without manual intervention.
DNS validation is the preferred method for ACM certificate validation because it allows automated renewals

without requiring manual email verification each time. When using DNS validation, you add a CNAME record to
your DNS configuration, which ACM periodically checks. This removes the need to respond to emails for
validation and makes the renewal process fully automated and significantly more operationally efficient.

**Option A** is incorrect because CloudFront security policies don't create certificates. They configure the
security protocols and ciphers that CloudFront uses when communicating with viewers. **Option B** is incorrect
because Origin Access Control (OAC) secures the communication between CloudFront and the origin server
(e.g., S3 bucket), not the communication between clients and CloudFront, and OAC doesn't handle certificate
creation. **Option D**, while using ACM, utilizes email validation, which requires manual intervention to validate
the certificate upon creation and renewal. This is less efficient than DNS validation, which fully automates the
process. ACM handles the entire lifecycle of the certificate automatically when paired with DNS validation.

Therefore, ACM with DNS validation offers the most automated and least operationally burdensome method
for managing TLS certificates for CloudFront.
Supporting Links:
AWS Certificate Manager (ACM): https://aws.amazon.com/certificate-manager/
ACM DNS Validation: https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html
Using SSL/TLS Certificates with CloudFront:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-cloudfront.html

---

## Question 578

**Answer:** **A**

**Explanation:**

The correct answer is A: Use DynamoDB Accelerator (DAX).

Here's why:
The requirement is to improve DynamoDB response time from milliseconds to microseconds and to cache
requests with the least operational overhead. DAX is a fully managed, highly available, in-memory cache for
DynamoDB. It's designed specifically to accelerate read performance without requiring developers to manage
cache invalidation, data population, or cluster management. This minimizes operational overhead. DAX sits
between the application and DynamoDB, caching frequently accessed data. Subsequent requests for the
same data are served directly from the DAX cache, significantly reducing latency to microseconds.

**Option B**, migrating to Amazon Redshift, is inappropriate. Redshift is a data warehousing solution optimized
for analytical queries on large datasets, not for transactional workloads requiring microsecond latency. It
would be a significant operational undertaking and would not directly address the caching requirement.

**Option C**, migrating to Amazon RDS, is also unsuitable. While RDS offers various database engines, it doesn't
inherently solve the caching problem without implementing a separate caching layer (like ElastiCache).

Migrating would involve significant operational effort and wouldn't guarantee microsecond latency for all
read operations without additional caching mechanisms. RDS primarily addresses relational database needs,
not necessarily the NoSQL caching requirements.

**Option D**, using Amazon ElastiCache for Redis, while a valid caching solution, introduces more operational
overhead compared to DAX. You would need to manage the ElastiCache cluster, configure caching strategies,
and handle cache invalidation. DAX is purpose-built for DynamoDB, simplifying these aspects and providing a
tighter integration with the database. DAX requires less configuration because it understands DynamoDB
access patterns and can handle the underlying data structures automatically.

In summary, DAX provides the simplest and most efficient solution to improve DynamoDB response time to
microseconds through caching, with minimal operational overhead due to its tight integration and fully
managed nature.
Here are some authoritative links for further research:
DynamoDB Accelerator (DAX): https://aws.amazon.com/dynamodb/dax/
DynamoDB Documentation - DAX:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html

---

## Question 579

**Answer:** **A**

**Explanation:**

The correct answer is A: Use the Instance Scheduler on AWS to configure start and stop schedules.

Here's why:
The primary requirement is cost optimization for an RDS PostgreSQL database that's only needed during
weekday business hours. The Instance Scheduler directly addresses this by automatically starting and
stopping the RDS instance based on a predefined schedule. This eliminates compute costs during off-peak
hours (nights and weekends) when the application isn't in use.

**Option B** is incorrect because turning off automatic backups creates a significant risk of data loss. Manual
snapshots, while possible, increase operational overhead and require careful management to ensure backups
are taken consistently and retained appropriately. Automatic backups are a fundamental best practice for
database management.

**Option C** is less efficient than Instance Scheduler. While a Lambda function could technically achieve the
same outcome, it requires custom coding, deployment, and maintenance. The Instance Scheduler is a prebuilt, managed service specifically designed for this purpose, reducing operational overhead and providing a
simpler configuration interface. Relying on CPU utilization as a trigger can be unreliable, as even idle
databases consume some CPU resources, potentially leading to the instance staying on longer than

necessary.

**Option D** is incorrect because All Upfront reserved DB instances are a cost optimization strategy for
databases running consistently. They don't address the requirement of turning off the database during offpeak hours, and the company would be paying for compute resources it isn't using. Reserved instances are
most effective for consistent, high-utilization workloads.

Therefore, using the Instance Scheduler offers the best balance of cost optimization and operational
simplicity, directly aligning with the company's requirement to reduce costs during off-peak hours while
minimizing management effort.
Further Research:
AWS Instance Scheduler: https://aws.amazon.com/solutions/implementations/instance-scheduler/
RDS Cost Optimization: https://aws.amazon.com/rds/pricing/

---

## Question 580

**Answer:** **D**

**Explanation:**

The best solution is to host the application on an Amazon EC2 instance and use an Amazon Elastic Block Store
(Amazon EBS) GP3 volume.

Here's why:
Lift and Shift: The company wants to move the application without significant architectural changes. This
implies a direct migration of the existing application stack to AWS.
Latency-Sensitive Application: The application requires low latency storage. EBS is designed for block
storage and provides low latency access.
Cost-Effectiveness: GP3 volumes offer a balance of performance and cost, making them generally more
cost-effective than other EBS volume types for many workloads.
Let's eliminate the other options:

**Option A** (FSx for Lustre): FSx for Lustre is a high-performance file system optimized for compute-intensive
workloads. While it offers low latency, it's more complex to set up and generally more expensive than EBS,
making it less cost-effective for a simple lift and shift.

**Option B** (EBS GP2): GP2 volumes are older generation EBS volumes. GP3 volumes offer better performance
and pricing in many cases.

**Option C** (FSx for OpenZFS): FSx for OpenZFS is a fully managed file system service built on ZFS. While it
provides features like data compression and snapshots, it adds complexity and can be more expensive than
using EBS directly. It isn't the most cost-effective for a simple lift and shift of an application using locally
attached storage.
In essence, using EBS directly attached to EC2 instance mirrors the on-premises setup of an application
running with locally attached storage. Using the newer generation EBS volumes can provide cost and
performance advantages. Here are some resources that could be helpful.
Amazon EBS Volume Types
Amazon FSx

---

## Question 581

**Answer:** **B**

**Explanation:**

The correct answer is B because it ensures high availability and fault tolerance for the application. Here's why:
Minimum Capacity of Two: The requirement is that at least two EC2 instances must always be running.
Setting the minimum capacity of the Auto Scaling group to two guarantees that the group will always attempt
to maintain at least this number of instances.
High Availability Through Multiple Availability Zones: Distributing instances across multiple Availability
Zones (AZs) is a core principle of high availability in AWS. If one AZ experiences an outage, the instances in
the other AZ remain operational, ensuring the application continues to function. Deploying instances into two
AZs meets this requirement. The question does not require spot instances.

Therefore, deploying two On-Demand Instances in one Availability Zone and two On-Demand Instances in a
second Availability Zone ensures that the application is both fault-tolerant (can withstand the failure of an
instance) and highly available (can withstand the failure of an Availability Zone). Setting the minimum capacity
to four allows the Auto Scaling Group to function if an instance in either AZ fails.

**Option A** is incorrect because while it satisfies the minimum capacity requirement of two instances, it doesn't
provide enough redundancy within each Availability Zone. A single instance failure in an AZ could impact
performance or availability.

**Option C** and D use spot instances. Spot instances are cheaper than on-demand but come with a risk of
interruption that doesn't align with the "always be running" condition of the application.

Further research:https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scalinggroups.htmlhttps://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/bestpractices/rel12017_design_for_high_availability.en.html

---

## Question 582

**Answer:** **A**

**Explanation:**

The correct answer is A. Set up a geolocation routing policy. Send the traffic that is near us-west-1 to the
on-premises data center. Send the traffic that is near eu-central-1 to eu-central-1.

Here's why:
The primary goal is to minimize website load time for users globally. Geolocation routing in Route 53 allows
directing users to specific resources based on their geographic location. By directing users geographically
close to the on-premises data center (near us-west-1) to that data center and users geographically close to
the eu-central-1 region to the AWS eu-central-1 Region, the solution reduces latency, and thus speeds up load
times, for the majority of users. This approach minimizes the distance data travels, leading to faster response
times.
Let's analyze why the other options are not optimal:

**B.** Simple routing policy: Simple routing policies provide no intelligent distribution based on location or
latency, making it less effective for minimizing load times across different geographic areas. It will not
effectively distribute traffic based on user location proximity.

**C.** Latency routing policy: While latency routing aims to minimize latency, it only considers the latency
between the user's DNS resolver and the AWS regions. It doesn't take into account the on-premises data
center's location.

**D.** Weighted routing policy: Weighted routing balances traffic across multiple resources but doesn't consider
the user's location. It may not efficiently minimize latency for users in specific regions.

Therefore, geolocation routing provides the best approach to serve users from the geographically closest
location, resulting in the lowest latency and best user experience.
For further research, consider these resources:
AWS Route 53 Routing Policies: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routingpolicy.html

Geolocation Routing: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html

---

## Question 583

**Answer:** **C**

**Explanation:**

The most cost-effective solution for migrating 5 PB of tape-archived data to AWS for a 10-year compliance
retention period, given a limited 1 Gbps internet uplink, is option C, leveraging AWS Snowball Edge with Tape
Gateway.

Here's a detailed justification:

1. High Data Volume & Low Bandwidth: Migrating 5 PB over a 1 Gbps link would take an impractically
long time (potentially years). Network-based transfer solutions (options A & B) become highly
inefficient due to the sheer data volume and bandwidth limitations.

2. AWS Snowball Edge (Data Transfer Device): Snowball Edge devices provide a secure, physically
transportable way to move massive amounts of data to AWS, bypassing the bandwidth constraints of
the internet connection. https://aws.amazon.com/snowball/

3. Tape Gateway Integration: Snowball Edge can be configured with Tape Gateway, allowing the
company to treat the Snowball device as a virtual tape library on-premises. This enables direct
copying of data from physical tapes to virtual tapes stored on the Snowball.
https://aws.amazon.com/storagegateway/tape-gateway/

4. S3 Glacier Deep Archive (Cost-Effective Archival): Amazon S3 Glacier Deep Archive is the lowestcost storage class, ideal for long-term data archiving with infrequent access requirements.
https://aws.amazon.com/glacier/pricing/

5. Lifecycle Policy Automation: A lifecycle policy in S3 can automatically transition the virtual tapes
uploaded from Snowball to S3 Glacier Deep Archive after a specified period. This ensures the data is
stored in the most cost-effective storage tier for long-term retention.

6. Cost Efficiency Comparison: While option B might seem appealing in its simplicity, the prolonged
transfer time over the limited internet connection would incur significant operational costs (network
usage, staff time). **Option A** involves staging data in NFS storage, adding an unnecessary
intermediate step and infrastructure cost. **Option C** minimizes infrastructure and network costs by
using a physical appliance and leveraging the lowest-cost archive tier.

7. Compliance Considerations: S3 Glacier Deep Archive offers features like data encryption and
versioning, which support compliance requirements for long-term data retention and integrity.
Snowball transfer are also secured by KMS encryption.

Therefore, ordering multiple Snowball devices equipped with Tape Gateway, copying tapes to Snowball,
shipping them to AWS, and utilizing a lifecycle policy to archive to Glacier Deep Archive provides the most
cost-effective and practical solution for the company's needs, circumventing the bandwidth limitation and
meeting the 10-year compliance requirement at minimal cost.

---

## Question 584

**Answer:** **A**

**Explanation:**

The correct answer is A: Run the EC2 instances in a spread placement group. Here's why:
The requirement is to prevent groups of nodes (EC2 instances) from sharing the same underlying hardware for
an application processing large quantities of data in parallel. This isolates instances, minimizing the impact of
failures or performance issues on one host affecting others.
Spread placement groups are designed to meet precisely this requirement. They ensure that each instance
within the group runs on distinct underlying hardware. This provides high availability and minimizes correlated
failures. AWS guarantees that a small number of instances within a spread placement group won't share the
same physical hardware.

**Option B** (Separate accounts) technically isolates instances at a management level, but it doesn't guarantee
hardware separation without additional configurations and can significantly increase management overhead.
It is not primarily a network configuration choice.

**Option C** (Dedicated tenancy) ensures EC2 instances run on hardware dedicated solely to the account,
avoiding sharing with other AWS customers. While this provides isolation, it is more costly and doesn't
necessarily prevent instances within the account from potentially sharing hardware unless combined with
placement groups.

**Option D** (Shared tenancy) is the default tenancy and allows EC2 instances to share hardware with other
AWS customers, which is the opposite of what's required.

Therefore, spread placement groups are the most appropriate solution because they focus on distributing
instances across distinct hardware while staying within a single AWS account for simplified management and
network configuration. The other options either don't directly address the hardware isolation requirement
(separate accounts) or contradict it (shared tenancy) or are more expensive for the same result (dedicated
tenancy, without necessarily the needed spread).

---

## Question 585

**Answer:** **D**

**Explanation:**

The correct answer is D. Purchase a Capacity Reservation in the failover Region.
Justification:
The primary requirement is to meet capacity in the failover region during a disaster recovery event. Capacity
Reservations guarantee that EC2 capacity will be available in a specific Availability Zone when you need it.
This directly addresses the requirement of ensuring capacity for EC2 instances in the failover region.

**Option A** (On-Demand Instances): While On-Demand Instances are readily available, they do not guarantee
capacity. During a disaster, demand for resources in the failover Region may surge, potentially leading to
insufficient capacity to launch all required instances.

**Option B** (EC2 Savings Plan): Savings Plans offer cost savings based on committed usage. However, Savings
Plans do not guarantee capacity. They simply offer discounted pricing for EC2 usage. The instances still
compete for available capacity.

**Option C** (Regional Reserved Instances): Regional Reserved Instances provide a discount on EC2 usage and
provide a capacity reservation at a regional level. Although these instances provide increased availability of
capacity, they do not guarantee the availability of resources during a widespread disaster.
By using Capacity Reservations, the organization can ensure that the necessary EC2 resources are always
available, even during a DR event where demand for resources spikes. This proactively addresses the capacity
constraint and ensures the DR strategy can successfully meet the business requirements.

---

## Question 586

**Answer:** **B**

**Explanation:**

The correct answer is B: Invite the R&D AWS account to be part of the new organization after the R&D AWS
account has left the prior organization.

Here's why:
The goal is to move the R&D business's AWS account from the existing AWS Organization to a completely
separate one. AWS Organizations does not allow an account to be part of two organizations simultaneously.

Therefore, the R&D account must first leave the original organization before it can join the new one.

**Option A** is incorrect because an AWS account cannot be a member of two AWS Organizations at the same
time. This violates the fundamental structure and control mechanisms of AWS Organizations.

**Option C** is not the most efficient approach. Creating a new account and migrating resources would involve
significant time, effort, and potential disruption. Direct account transfer, after detachment, is a more
streamlined method.

**Option D** is incorrect because the new management account (which represents the new R&D organization)
should not be a member of the prior organization. The R&D business is meant to be entirely independent.
Making the new management account a member of the prior organization would defeat the purpose of the
separation and create a dependency.
The correct procedure involves first removing the R&D account from the initial organization. After this
detachment, the new organization's management account can send an invitation to the detached R&D
account. Once accepted, the R&D account becomes a member of the new organization. This ensures a clean
separation and transfer of the AWS account to its new, independent organizational structure.

https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.htmlhttps://docs.aws.am

---

## Question 587

**Answer:** **C**

**Explanation:**

The correct answer is C. Here's a detailed justification:
The problem requires a solution for capturing unpredictable customer activity from web applications,
integrating with existing apps, and implementing authorization.

**Option C** leverages Amazon API Gateway, which is designed to handle API requests from various sources,
including web applications. This satisfies the integration requirement. API Gateway can scale automatically to
handle unpredictable surges in traffic, meeting the scalability requirement.
Kinesis Data Firehose is a suitable choice for ingesting high volumes of streaming data directly into
destinations like Amazon S3. Storing the data in S3 allows for cost-effective storage and future analysis
using services like Athena or Redshift. This fulfills the data capture and storage requirements.
Crucially, **Option C** uses an API Gateway Lambda authorizer. Lambda authorizers (formerly known as custom
authorizers) are powerful tools that allow you to implement custom authorization logic for your API Gateway
endpoints. This directly addresses the authorization requirement, providing fine-grained control over who can
access your API and the data it processes. The Lambda function can verify identity, check permissions, and
return an IAM policy that determines what resources the caller is authorized to access.
Options A and D use Gateway Load Balancers (GWLBs) and ECS containers. While GWLB handles network
traffic, it's not the primary service for API management and authorization in the context of web applications.
ECS containers storing data on EFS are also not the most efficient or scalable solution for handling streaming
data from web applications. The authorization methods in A and D are also less integrated than the API
Gateway Lambda Authorizer in C.

**Option B** uses Kinesis Data Streams. While Streams can handle high-velocity data, Data Firehose is a more
suitable choice when you need to reliably load data into data lakes or data warehouses like S3, especially with
a large volume of web application event activity. Furthermore, the Lambda function used for authorization in
option B is outside of the AWS API Gateway and might be more difficult to maintain for complex API
authorizations.

In summary, option C best meets all the requirements by providing a scalable API endpoint with authorization
and efficient data ingestion and storage, making it the optimal solution.
Supporting links:
Amazon API Gateway: https://aws.amazon.com/api-gateway/
Amazon Kinesis Data Firehose: https://aws.amazon.com/kinesis/data-firehose/
Amazon S3: https://aws.amazon.com/s3/
API Gateway Lambda Authorizers:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

---

## Question 588

**Answer:** **D**

**Explanation:**

The question asks for the most cost-effective disaster recovery solution for RDS SQL Server with a 24-hour
RPO/RTO. Let's analyze the options:

**A.** Create a cross-Region read replica and promote the read replica to the primary instance: Read replicas
provide faster failover times compared to snapshots, potentially meeting a shorter RTO. However, for a 24hour RTO, this option is generally more expensive because read replicas continuously replicate data, incurring
higher operational costs. For this 24-hour RTO, using Snapshots is enough.

**B.** Use AWS Database Migration Service (AWS DMS) to create RDS cross-Region replication: AWS DMS is
more suitable for heterogeneous database migrations and ongoing replication. For disaster recovery with a
24-hour RPO/RTO for RDS SQL Server, it adds complexity and cost compared to native snapshot replication.

**C.** Use cross-Region replication every 24 hours to copy native backups to an Amazon S3 bucket: Although a
valid option, this manual copy approach may be less efficient than using automated snapshot copy feature
offered by AWS. The snapshot copy automates the process of moving backups across regions.

**D.** Copy automatic snapshots to another Region every 24 hours: RDS SQL Server has a native feature to
automate snapshot creation and cross-Region copy. Configuring automatic snapshots with a cross-Region
copy every 24 hours meets the RPO/RTO of 24 hours. This approach is cost-effective because you only pay for
storage and the occasional snapshot copy operation.

Therefore, copying automated snapshots cross-Region is the most cost-effective approach for a 24-hour
RPO/RTO, utilizing the native capabilities of AWS RDS.
Refer to
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
and https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer. Procedural. Importing.html for
details on RDS SQL Server backups and disaster recovery. Also read more about RTO/RPO best practices
https://aws.amazon.com/blogs/storage/backup-and-restore-strategies-for-amazon-elastic-file-systemamazon-efs/

---

## Question 589

**Answer:** **B**

**Explanation:**

The requirement is to ensure high availability and prevent session state loss when EC2 instances running a
web application in an Auto Scaling group behind an ALB fail. Since the current setup stores the user session
state on the web server itself, a server outage leads to session loss.

**Option B**, using Amazon ElastiCache for Redis, is the best solution because it provides a highly available and
persistent store for user session data. Redis is an in-memory data structure store that can be configured for
persistence, which prevents data loss in case of failure. By updating the application to use ElastiCache for
Redis, the session state is stored externally to the EC2 instances. Therefore, even if an instance fails, the
session data is preserved in the Redis cluster.

**Option A**, using ElastiCache for Memcached, is less ideal. While Memcached offers fast caching, it is primarily
designed for caching data that can be easily recreated and doesn't natively support persistence. This means
in case of a Memcached instance failure, the session data is lost.

**Option C**, utilizing AWS Storage Gateway cached volume, is not suitable for storing session state. Storage
Gateway primarily focuses on bridging on-premises storage with AWS cloud storage. It introduces significant
latency compared to an in-memory cache, negatively impacting application performance. Session data needs
to be rapidly accessible.

**Option D**, using Amazon RDS, while a persistent storage option, is generally not optimized for the speed and
access patterns required for session management. Relational databases like RDS introduce overhead that
significantly impacts performance compared to in-memory caching solutions like Redis or Memcached. RDS is
much slower at retrieving user session data. Redis offers better performance.

Therefore, ElastiCache for Redis addresses the high availability and session state persistence requirement in
the most effective manner.
Amazon ElastiCache for RedisSession Management with ElastiCache

---

## Question 590

**Answer:** **A**

**Explanation:**

**Option A**, creating a read replica and directing report queries to it, is the most suitable solution because it
directly addresses the problem of performance degradation during report generation without impacting the
primary database's daily workload. Read replicas in Amazon RDS provide a near real-time, read-only copy of
the primary database. By offloading the resource-intensive report queries to the read replica, the primary
database remains available and performs optimally for regular transactions and operations. This avoids
performance bottlenecks for daily users while still allowing for reporting functionality. It's also a costeffective approach, as the read replica can be sized appropriately for the reporting workload, and the data
replication is managed by RDS. **Option B**, while isolating the reporting workload, introduces complexity with
creating and restoring backups, which can be time-consuming. Furthermore, restoring a backup to a new DB
instance could potentially lead to data staleness, as it represents a point-in-time snapshot of the data, and not
the current database state. **Option C**, while potentially scalable, involves exporting data to S3 and using
Athena, which is suited for analyzing large datasets. This approach is overkill for a simple reporting
requirement, adds complexity and potential latency. **Option D**, resizing the DB instance, addresses the
symptom but not the root cause. It is cost-inefficient because the larger instance would be underutilized most
of the time. Using a read replica provides a more targeted and cost-effective scaling strategy only during
report generation periods.

---

## Question 591

**Answer:** **D**

**Explanation:**

The most cost-effective solution for routing incoming requests to microservices within an Amazon EKS cluster
for the given scenario is D. Use Amazon API Gateway to connect the requests to Amazon EKS.

Here's a detailed justification:
API Gateway's Role: Amazon API Gateway is designed to handle API requests at scale. It acts as a single
entry point for all incoming requests to your application. It can route these requests to different backend
services based on the request's path, headers, or other attributes.

Cost-Effectiveness:
Pay-as-you-go Pricing: API Gateway operates on a pay-as-you-go model, charging only for the API calls you
receive and the data transferred. This is often more cost-effective than running a dedicated load balancer
constantly, especially for applications with variable traffic.
Reduced Infrastructure Overhead: By offloading API management tasks to API Gateway, you reduce the
operational burden on your EKS cluster and simplify your infrastructure.
Functionality:
Request Routing: API Gateway offers sophisticated request routing capabilities based on URL paths, HTTP
headers, query parameters, and more. This allows precise control over how requests are directed to your
microservices.
Security: API Gateway provides security features such as authentication, authorization, and request validation
to protect your application.
Traffic Management: API Gateway can manage traffic by throttling requests to prevent overload on the EKS
cluster.
Integration with EKS: API Gateway can integrate with EKS through the use of Ingress Controller and Service
Discovery.
Why other options are less cost-effective or less suitable:
A & B (Load Balancers): While AWS Load Balancer Controller can provision Application Load Balancer (ALB)
or Network Load Balancer (NLB), they are typically more expensive than API Gateway for scenarios where you
require complex routing and API management features. Load balancers also require continuous operation,
leading to higher costs even when the application is not heavily used. Furthermore, using an NLB would
require you to manage TLS termination and additional complexity that ALB and API Gateway can offload.
C (Lambda Function): Using Lambda functions as a gateway to EKS is typically not recommended. Lambda
has execution time limits and might not be cost-effective for handling high-volume, long-running requests. It
also adds complexity to the application architecture.
In conclusion, Amazon API Gateway provides the most cost-effective and feature-rich solution for routing
requests to microservices within an Amazon EKS cluster by offering fine-grained control over request routing,
security, and traffic management, while adhering to a pay-as-you-go pricing model.

---

## Question 592

**Answer:** **D**

**Explanation:**

The correct answer is D because it leverages both S3 and CloudFront to meet the requirements of fast global
access, geographic restrictions, and cost optimization.

Here's a detailed justification:
S3 for Storage: Amazon S3 provides highly durable, scalable, and cost-effective storage for the images.
Storing the images in S3 as the origin simplifies the overall architecture and management overhead.
CloudFront for Distribution: CloudFront is a Content Delivery Network (CDN) that caches content at edge
locations worldwide. This ensures low latency and fast access to the images for global customers, fulfilling
the first requirement.
Geographic Restrictions: CloudFront allows you to configure geographic restrictions, also known as geofiltering or geo-blocking, to deny access to content based on the viewer's country. This directly addresses the
requirement to deny access to users from specific countries.
(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html)
Signed URLs: Signed URLs provide controlled access to the images. They allow you to grant temporary
access to specific images to authorized users without exposing the underlying S3 bucket directly. This
enhances security and control. This approach ensures that users can access the images only when they have a
valid, signed URL.
Cost Optimization: Using CloudFront helps optimize costs by caching content closer to users, reducing the
load on the S3 bucket and potentially lowering S3 data transfer costs. CloudFront's pay-as-you-go pricing
model also aligns with the company's cost minimization goal.

Why other options are not optimal:

**A:** MFA and public bucket access are contradictory to each other. MFA is to secure bucket while Public
Bucket exposes the bucket and is insecure.

**B:** Creating IAM users for each customer is not scalable and can be difficult to manage as the customer base
grows. It also doesn't directly address the geographic restriction requirement.

**C:** Deploying EC2 instances in specific countries could be complex to manage, and it's not an optimal method
to restrict customer access globally. It also might not provide the best performance for users outside those
specific countries and cost inefficient compared to CloudFront.
In conclusion, option D is the most suitable solution because it efficiently combines S3 for storage,
CloudFront for global content delivery and geo-restrictions, and signed URLs for controlled access, while
aligning with the company's cost optimization goals.

---

## Question 593

**Answer:** **A**

**Explanation:**

The correct answer is A. Use Multi-AZ Redis replication groups with shards that contain multiple nodes.

Here's a detailed justification:
High Availability at the Node Level (within a shard): Redis replication groups with multiple nodes in each
shard provide node-level high availability. A primary node handles writes, and one or more read replicas
asynchronously replicate the data. If the primary node fails, one of the read replicas is automatically
promoted to primary, minimizing downtime.
Multi-AZ for Regional High Availability: Deploying the Redis replication group across multiple Availability
Zones (Multi-AZ) provides resilience against AZ-level failures. If an entire AZ goes down, the automatic
failover mechanism will promote a replica in a different AZ to become the new primary. This ensures that the
application continues to function without significant interruption.
Data Durability: Redis replication ensures that data is not lost in case of a node failure within a shard. The
asynchronous replication mechanism keeps replicas updated with the changes made to the primary. Even
though asynchronous replication may lead to slight data loss in extreme scenarios, it offers the best balance
between performance and data safety.

Why other options are incorrect:

**B.** Use Redis shards that contain multiple nodes with Redis append only files (AOF) turned on: AOF provides
data durability in case of server restarts and is not a solution for node-level high availability or region-level
high availability. AOF stores every write operation in a log. If a node crashes and is restarted, Redis can
reconstruct the dataset by replaying the AOF log. However, it does not automatically failover to another node
in case of a primary failure.

**C.** Use a Multi-AZ Redis cluster with more than one read replica in the replication group: This option is
partially correct in its usage of Multi-AZ and read replicas, but the term "cluster" isn't appropriate here.
ElastiCache for Redis uses replication groups (for non-cluster mode) or clusters (for cluster mode). Also, the
replication group consists of one primary and multiple replicas.

**D.** Use Redis shards that contain multiple nodes with Auto Scaling turned on: Auto Scaling will not provide
high availability since the process of scaling up the number of shards will take time to complete and there
would still be data loss in case of node failure. It helps manage the capacity of your ElastiCache cluster based
on demand but does not offer an immediate failover mechanism for high availability. Auto Scaling is more
suitable for addressing scalability concerns rather than immediate failure recovery.

---

## Question 594

**Answer:** **C**

**Explanation:**

The correct answer is C: Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2
Auto Scaling warm pools during the next testing phase. This approach effectively reduces application launch
time.

Here's why:
Hibernation: Hibernation saves the in-memory state of an EC2 instance to the EBS root volume when the
instance is stopped. Upon restart, the instance resumes from this saved state, drastically reducing the time it
takes to load the application and its data back into memory.
(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html)
Warm Pools: EC2 Auto Scaling warm pools allow you to pre-initialize a group of EC2 instances before they are
needed. These instances are already launched and configured, waiting in a "ready" state. This eliminates the
delay of launching and configuring instances when demand increases.
(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html)
By combining hibernation and warm pools, instances can be pre-launched, pre-configured, and their state
saved. When needed, instances resume quickly from their hibernated state within the warm pool, significantly
decreasing the time it takes for the application to become fully productive during the next testing phase.

**Option A** is less effective because simply launching more instances and using auto-scaling doesn't address
the underlying issue of slow application loading. Auto-scaling helps with scaling in response to demand but
doesn't inherently speed up individual instance launch and initialization.

**Option B**, using Spot Instances, introduces the risk of instance interruption if Spot prices rise above the bid
price, which is unsuitable for predictable testing. Furthermore, it doesn't solve the problem of the initial slow
loading time.

**Option D**, Capacity Reservations, guarantees EC2 capacity but doesn't inherently reduce application launch
time. It ensures resources are available, but the application will still take the same time to load into memory
on newly launched instances. The addition of extra instances during the testing phase will have no benefit.

---

## Question 595

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Use dynamic scaling to change the size of the Auto Scaling group.

Here's why:
Dynamic Scaling (also known as Target Tracking or Step Scaling): This approach automatically adjusts the
number of EC2 instances in response to real-time changes in demand, based on pre-defined metrics like CPU
utilization or network traffic. Because the traffic increases are sudden and on random days, a dynamic scaling
policy allows the Auto Scaling group to react immediately, maintaining performance.
Why other options are not as suitable:
Manual Scaling: Requires human intervention to adjust the Auto Scaling group, which is not ideal for sudden
traffic increases. This approach is time-consuming and may result in performance degradation during the
scaling process.
Predictive Scaling: Analyzes historical traffic patterns to anticipate future demand and proactively adjust the
Auto Scaling group. While effective for predictable patterns, it is less suitable for random traffic spikes as it
relies on predictable patterns.
Scheduled Scaling: Scales the Auto Scaling group based on a pre-defined schedule. Since the traffic
increases occur on random days, scheduled scaling is not a viable option.
Dynamic scaling is the optimal choice as it provides real-time responsiveness to fluctuating workloads without
manual intervention or reliance on historical data, ensuring application performance is maintained during
unexpected traffic increases in a cost-effective manner.
Here are authoritative links for further research:
AWS Auto Scaling Documentation: https://docs.aws.amazon.com/autoscaling/ec2/userguide/
Scaling Your Application on AWS: https://aws.amazon.com/blogs/architecture/scaling-your-application-onaws/
AWS Well-Architected Framework: https://wa.aws.amazon.com/ (Focus on the Performance Efficiency pillar
for scaling strategies).

---

## Question 596

**Answer:** **A**

**Explanation:**

The best solution is to migrate the PostgreSQL database to Amazon Aurora Serverless v2. Here's why:

Aurora Serverless v2 Cost Efficiency: Aurora Serverless v2 automatically scales database capacity based on
application needs. This is ideal for unpredictable traffic patterns like the monthly sales event. You only pay for
the capacity you consume, making it highly cost-effective compared to constantly running a larger,
potentially underutilized, instance.
RDS for PostgreSQL Scaling Limitations: While RDS for PostgreSQL with a larger instance type (**Option C**)
can handle increased load, it involves vertical scaling (changing the instance size). This requires downtime and
can be more expensive than Aurora Serverless v2 if the increased capacity is only needed intermittently.
EC2 Auto Scaling Complexities: Enabling auto-scaling for PostgreSQL on an EC2 instance (**Option B**) is more
complex and requires significant configuration for replication, failover, and data consistency. It involves
creating and managing multiple EC2 instances, which adds operational overhead and can be less costeffective than Aurora Serverless v2, especially given the unpredictable workload.
Redshift is Inappropriate: Amazon Redshift (**Option D**) is a data warehouse service designed for analytical
workloads (OLAP), not transactional workloads (OLTP) like an ecommerce application's database. Migrating to
Redshift would require significant application changes and is not suitable for resolving database connection
issues during sales events.
Minimal Downtime Migration: Aurora offers migration tools and strategies that can minimize downtime
during the migration from PostgreSQL on EC2.
Simplified Management: Aurora Serverless v2 simplifies database management, reducing operational
overhead compared to managing a PostgreSQL database on EC2 or using EC2 auto scaling. It takes care of
patching, backups, and other maintenance tasks.

In summary, Aurora Serverless v2 provides the most cost-effective and scalable solution for handling
unpredictable traffic spikes in a PostgreSQL database used by an ecommerce application. It eliminates the
need for over-provisioning resources, simplifies management, and minimizes downtime during migration.
Here are some authoritative links for further research:
Amazon Aurora Serverless v2: https://aws.amazon.com/rds/aurora/serverless/
Amazon RDS: https://aws.amazon.com/rds/
Amazon Redshift: https://aws.amazon.com/redshift/

---

## Question 597

**Answer:** **B**

**Explanation:**

The correct answer is B: Set up a scheduled scaling to increase Lambda provisioned concurrency before

employees begin to use the application each day. Here's a detailed justification:
The problem describes high latency at the beginning of each day when employees start using the serverless
application. This suggests a cold start issue with the Lambda functions. Lambda functions operate on a payper-use model, meaning AWS only provisions resources when the function is invoked. When a function hasn't
been used for a while, it enters a "cold state," and the first invocation triggers a cold start. A cold start
involves provisioning the execution environment, loading the code, and initializing the function, which adds
significant latency.
Provisioned Concurrency (PC) addresses this cold start issue by pre-initializing a specified number of Lambda
function execution environments. These environments are ready to respond to requests immediately,
eliminating the cold start latency. By scheduling an increase in provisioned concurrency before employees
begin their workday, the necessary execution environments are already warm and waiting, significantly
reducing latency for the initial requests.

**Option A**, increasing the API Gateway throttling limit, addresses a different problem. Throttling limits are in
place to prevent API Gateway from being overwhelmed with requests. High latency caused by throttling
would manifest as errors and request rejections, not simply slow response times.

**Option C**, creating a CloudWatch alarm to initiate a Lambda function, is an overly complex solution. It
essentially triggers a "dummy" function to try to keep the function warm. While it might help slightly, it's less
effective and more resource-intensive than provisioned concurrency. PC is specifically designed to manage
cold starts and handle predictable traffic patterns.

**Option D**, increasing Lambda function memory, can reduce latency in some cases by providing more resources
for code execution. However, it doesn't directly address the cold start problem. While increased memory
might slightly improve the performance of subsequent invocations, it won't eliminate the initial cold start
penalty.

Therefore, provisioned concurrency offers the most direct and efficient solution to mitigate the latency
caused by Lambda cold starts at the beginning of each day. Scheduled scaling automates this process,
ensuring consistent performance during peak usage.
Supporting documentation:
AWS Lambda Provisioned Concurrency: https://docs.aws.amazon.com/lambda/latest/dg/configurationconcurrency.html
Improving Lambda Cold Start Time: https://aws.amazon.com/blogs/compute/operating-lambdaperformance-optimization-part-1/

---

## Question 598

**Answer:** **ACF**

**Explanation:**

The correct answer is ACF. Here's a detailed justification:

**A.** Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode: AWS Storage Gateway
simplifies connecting on-premises environments to AWS storage. The S3 File Gateway mode allows the
research company's on-premises devices that write .csv files to SMB file shares to seamlessly write data
directly to an S3 bucket. This avoids complex data transfer mechanisms and facilitates data ingestion into
AWS for analysis. https://aws.amazon.com/storagegateway/file-gateway/

**C.** Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3: AWS Glue is a fully
managed ETL (extract, transform, and load) service. Its crawler feature can automatically discover the
schema of the .csv files in the S3 bucket and create a corresponding table in the AWS Glue Data Catalog. This
metadata catalog is essential for querying the data using SQL. https://aws.amazon.com/glue/

**F.** Set up Amazon Athena to query the data that is in Amazon S3. Provide access to analysts: Amazon
Athena is a serverless query service that allows analysts to use standard SQL to analyze data directly in S3.
Athena uses the AWS Glue Data Catalog to understand the structure of the data. By pointing Athena to the
table created by Glue, the analysts can directly query the .csv files without needing to set up or manage any
infrastructure. It's also cost-effective since you pay only for the queries you run.
https://aws.amazon.com/athena/
Why other options are not ideal or less cost-effective:

**B.** Deploy an AWS Storage Gateway on premises in Amazon FSx File Gateway mode: While FSx File
Gateway allows on-premises access to Amazon FSx file systems, it's typically used when you need a fullymanaged, highly performant file system in the cloud for workloads like video editing or large-scale
simulations. For simple .csv files, directly using S3 is more cost-effective.

**D.** Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in Amazon S3.
Provide access to analysts: While EMR can query data in S3, setting up a full EMR cluster is overkill for
simply running SQL queries on .csv files. EMR is best suited for complex data processing tasks that require
distributed computing, such as data transformation, machine learning, or running Spark jobs.

**E.** Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to analysts:
Redshift is a data warehouse designed for complex analytical workloads. While Redshift Spectrum can query
S3 data, loading the .csv data into Redshift is less cost-effective than using Athena for periodic queries.
Redshift requires a persistent cluster, resulting in higher costs compared to Athena's pay-per-query model.

---

## Question 599

**Answer:** **ACE**

**Explanation:**

The correct answer is ACE. Here's why:

**A.** Providing resilient power and network connectivity to the Outposts racks: AWS Outposts extends AWS
infrastructure and services to on-premises environments. The customer is responsible for providing the
physical environment including power, cooling, and network connectivity. AWS manages the services once
they are deployed on Outposts. This is a shared responsibility model. (https://aws.amazon.com/outposts/)

**C.** Physical security and access controls of the data center environment: Since the Outposts racks are
located within the company's data center, the company retains responsibility for the physical security of that
environment. This includes access controls, surveillance, and other security measures. AWS is responsible for
the security of the Outposts hardware itself.

**E.** Physical maintenance of Outposts components: While AWS owns and manages the hardware components
within the Outposts racks, the physical maintenance to be performed on-site (under AWS guidance and
support) is the responsibility of the customer. AWS handles complex repairs and replacements, but the
operational team will generally handle the regular physical maintenance.
Here's why the other options are incorrect:

**B.** Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts:
AWS manages the virtualization hypervisor and AWS services running on the Outposts. This aligns with AWS's
managed service model.

**D.** Availability of the Outposts infrastructure including the power supplies, servers, and networking
equipment within the Outposts racks: While the customer provides the environment, AWS is responsible for
the availability of the Outposts infrastructure itself (power supplies, servers, networking hardware). This is
part of the AWS service level agreement.

**F.** Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events:
Scaling the Amazon ECS clusters is primarily an application-level activity to maintain application availability,
and AWS is not responsible for managing application scaling. The operational team is responsible for setting
up Auto Scaling policies for the ECS clusters to ensure capacity during failures, or for scaling the ECS
infrastructure.

---

## Question 600

**Answer:** **A**

**Explanation:**

The correct answer is A. Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly
accessible over the TCP port that the application requires.

Here's why:
The primary requirement is to replicate the existing on-premises application's performance in AWS,
specifically handling 3 million requests per second with low latency over a non-standard TCP port. NLBs are
designed for high-performance, low-latency traffic routing at the transport layer (Layer 4), making them ideal
for TCP-based applications. NLBs can handle millions of requests per second while maintaining low latency,
aligning perfectly with the stated performance requirement. They also support listening on non-standard
ports.

**Option B**, using an Application Load Balancer (ALB), is not suitable. ALBs operate at the application layer
(Layer 7) and are designed for HTTP/HTTPS traffic. While ALBs can handle a significant load, they are not
optimized for the raw throughput and low latency needed for a TCP-based application that requires 3 million
requests per second. They are more suited for routing based on content, headers, or hostnames.

**Option C**, using Amazon CloudFront with an ALB, is also inappropriate. CloudFront is a Content Delivery
Network (CDN) primarily for caching static and dynamic content closer to users to improve latency for web
content. It adds unnecessary complexity and potential latency for a TCP-based application that requires
direct, low-latency connections. CloudFront is best suited for content distribution, not as a direct replacement
for a load balancer handling TCP traffic volume.

**Option D**, using Amazon API Gateway with Lambda functions, is unsuitable due to scalability and latency
concerns. API Gateway introduces overhead and might not handle 3 million requests per second with the
required low latency, especially when integrated with Lambda functions. Lambda functions, even with
provisioned concurrency, might not be able to scale rapidly enough and maintain the needed throughput for
this volume of requests. API Gateway is also generally optimized for HTTP APIs, not raw TCP connections.

In summary, the NLB provides the necessary performance, protocol support (TCP), and port flexibility to meet
the application's requirements in AWS.

---

# Quick Answer Sheet

Question 551: A
Question 552: B
Question 553: A
Question 554: C
Question 555: A
Question 556: B
Question 557: A
Question 558: C
Question 559: BE
Question 560: A
Question 561: A
Question 562: AB
Question 563: B
Question 564: B
Question 565: C
Question 566: B
Question 567: A
Question 568: A
Question 569: A
Question 570: B
Question 571: B
Question 572: C
Question 573: D
Question 574: B
Question 575: C
Question 576: D
Question 577: C
Question 578: A
Question 579: A
Question 580: D
Question 581: B
Question 582: A
Question 583: C
Question 584: A
Question 585: D
Question 586: B
Question 587: C
Question 588: D
Question 589: B
Question 590: A
Question 591: D
Question 592: D
Question 593: A
Question 594: C
Question 595: C
Question 596: A
Question 597: B
Question 598: ACF
Question 599: ACE
Question 600: A
