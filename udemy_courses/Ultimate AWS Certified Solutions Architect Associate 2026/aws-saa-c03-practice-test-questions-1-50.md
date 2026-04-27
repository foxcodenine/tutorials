# AWS SAA-C03 Practice Test: Questions 1-50

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 1

A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents.
The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed
Internet connection.
The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3
bucket. The solution must minimize operational complexity.
Which solution meets these requirements?

**A.** Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site
data to the destination S3 bucket.

**B.** Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to
copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.

**C.** Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the
closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.

**D.** Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an
Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the
Region that contains the destination S3 bucket. Restore the EBS volume in that Region.

---

## Question 2

A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON
format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to
perform the analysis with minimal changes to the existing architecture.

What should the solutions architect do to meet these requirements with the LEAST amount of operational
overhead?

**A.** Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.

**B.** Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch
console.

**C.** Use Amazon Athena directly with Amazon S3 to run the queries as needed.

**D.** Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL
queries as needed.

---

## Question 3

A company uses AWS Organizations to manage multiple AWS accounts for different departments. The
management account has an Amazon S3 bucket that contains project reports. The company wants to limit access

to this S3 bucket to only users of accounts within the organization in AWS Organizations.
Which solution meets these requirements with the LEAST amount of operational overhead?

**A.** Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket
policy.

**B.** Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key
to the S3 bucket policy.

**C.** Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and
RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.

**D.** Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3
bucket policy.

---

## Question 4

An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an
Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.

Which solution will provide private network connectivity to Amazon S3?

**A.** Create a gateway VPC endpoint to the S3 bucket.

**B.** Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.

**C.** Create an instance profile on Amazon EC2 to allow S3 access.

**D.** Create an Amazon API Gateway API with a private link to access the S3 endpoint.

---

## Question 5

A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded
documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the
architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind
an Application Load Balancer. After completing this change, users reported that, each time they refreshed the
website, they could see one subset of their documents or the other, but never all of the documents at the same
time.
What should a solutions architect propose to ensure users see all of their documents at once?

**A.** Copy the data so both EBS volumes contain all the documents

**B.** Configure the Application Load Balancer to direct a user to the server with the documents

**C.** Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to
Amazon EFS

**D.** Configure the Application Load Balancer to send the request to both servers. Return each document from
the correct server

---

## Question 6

A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in
size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the
video files to Amazon S3. The company must migrate the video files as soon as possible while using the least
possible network bandwidth.
Which solution will meet these requirements?

**A.** Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to
copy all files locally to the S3 bucket.

**B.** Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge
client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.

**C.** Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway.
Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3
bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.

**D.** Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File
Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3
bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer
the data from the existing NFS file share to the S3 File Gateway.

---

## Question 7

A company has an application that ingests incoming messages. Dozens of other applications and microservices
then quickly consume these messages. The number of messages varies drastically and sometimes increases
suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.
Which solution meets these requirements?

**A.** Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and
process the messages.

**B.** Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of
EC2 instances based on CPU metrics.

**C.** Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to
preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from
DynamoDB to process the messages.

**D.** Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon
Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the
messages from the queues.

---

## Question 8

A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy
platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to
modernize the application with a solution that maximizes resiliency and scalability.
How should a solutions architect design the architecture to meet these requirements?

**A.** Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement
the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2
Auto Scaling to use scheduled scaling.

**B.** Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement
the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2
Auto Scaling based on the size of the queue.

**C.** Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an
Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based
on the load on the primary server.

**D.** Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an
Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs.
Configure EC2 Auto Scaling based on the load on the compute nodes.

---

## Question 9

A company is running an SMB file server in its data center. The file server stores large files that are accessed
frequently for the first few days after the files are created. After 7 days the files are rarely accessed.
The total data size is increasing and is close to the company's total storage capacity. A solutions architect must
increase the company's available storage space without losing low-latency access to the most recently accessed
files. The solutions architect must also provide file lifecycle management to avoid future storage issues.
Which solution will meet these requirements?

**A.** Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.

**B.** Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to
transition the data to S3 Glacier Deep Archive after 7 days.

**C.** Create an Amazon FSx for Windows File Server file system to extend the company's storage space.

**D.** Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the
data to S3 Glacier Flexible Retrieval after 7 days.

---

## Question 10

A company is building an ecommerce web application on AWS. The application sends information about new
orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in
the order that they are received.
Which solution will meet these requirements?

**A.** Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon
SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform
processing.

**B.** Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO
queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda
function for processing.

**C.** Use an API Gateway authorizer to block any requests while the application processes an order.

**D.** Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS)
standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS
Lambda function for processing.

---

## Question 11

A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2
instances connect to the database by using user names and passwords that are stored locally in a file. The
company wants to minimize the operational overhead of credential management.
What should a solutions architect do to accomplish this goal?

**A.** Use AWS Secrets Manager. Turn on automatic rotation.

**B.** Use AWS Systems Manager Parameter Store. Turn on automatic rotation.

**C.** Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service
(AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.

**D.** Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the
new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application
to the new EBS volume.

---

## Question 12

A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB).
The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket.
The company wants to improve performance and reduce latency for the static data and dynamic data. The
company is using its own domain name registered with Amazon Route 53.
What should a solutions architect do to meet these requirements?

**A.** Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53
to route traffic to the CloudFront distribution.

**B.** Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator
standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the
CloudFront distribution.

**C.** Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global
Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a
custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for
the web application.

**D.** Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator
standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name
to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name
for static content. Use the domain names as endpoints for the web application.

---

## Question 13

A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the
company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the
required Regions. Configure Secrets Manager to rotate the secrets on a schedule.

**B.** Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multiRegion secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a
schedule.

**C.** Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon
EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.

**D.** Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region
customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function
to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.

---

## Question 14

A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The
instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group
scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0
database that is hosted on a large EC2 instance.
The database's performance degrades quickly as application load increases. The application handles more read
requests than write transactions. The company wants a solution that will automatically scale the database to meet
the demand of unpredictable read workloads while maintaining high availability.
Which solution will meet these requirements?

**A.** Use Amazon Redshift with a single node for leader and compute functionality.

**B.** Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different
Availability Zone.

**C.** Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.

**D.** Use Amazon ElastiCache for Memcached with EC2 Spot Instances.

---

## Question 15

A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out
of the production VPC. The company had an inspection server in its on-premises data center. The inspection server
performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the
same functionalities in the AWS Cloud.
Which solution will meet these requirements?

**A.** Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.

**B.** Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.

**C.** Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the
production VPC.

**D.** Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the
production VPC.

---

## Question 16

A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for
PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data
sources within the data lake. Only the company's management team should have full access to all the
visualizations. The rest of the company should have only limited access.
Which solution will meet these requirements?

**A.** Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish
dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.

**B.** Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish
dashboards to visualize the data. Share the dashboards with the appropriate users and groups.

**C.** Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform,
and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access
to the reports.

**D.** Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to
access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the
reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

---

## Question 17

A company is implementing a new business application. The application runs on two Amazon EC2 instances and
uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can
access the S3 bucket.
What should the solutions architect do to meet this requirement?

**A.** Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.

**B.** Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.

**C.** Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.

**D.** Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.

---

## Question 18

An application development team is designing a microservice that will convert large images to smaller,
compressed images. When a user uploads an image through the web interface, the microservice should store the
image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the

image in its compressed form in a different S3 bucket.
A solutions architect needs to design a solution that uses durable, stateless components to process the images
automatically.
Which combination of actions will meet these requirements? (Choose two.)

**A.** Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a
notification to the SQS queue when an image is uploaded to the S3 bucket.

**B.** Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the
invocation source. When the SQS message is successfully processed, delete the message in the queue.

**C.** Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is
detected, write the file name to a text file in memory and use the text file to keep track of the images that were
processed.

**D.** Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When
items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda
function.

**E.** Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an
image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the
application owner's email address for further processing.

---

## Question 19

A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public
subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC.
The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC.
The appliance is configured with an IP interface that can accept IP packets.

A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the
application before the traffic reaches the web server.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the
appliance for packet inspection.

**B.** Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the
appliance for packet inspection.

**C.** Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through
the transit gateway.

**D.** Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive
the incoming packets and forward the packets to the appliance.

---

## Question 20

A company wants to improve its ability to clone large amounts of production data into a test environment in the
same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS)
volumes. Modifications to the cloned data must not affect the production environment. The software that accesses
this data requires consistently high I/O performance.
A solutions architect needs to minimize the time that is required to clone the production data into the test
environment.
Which solution will meet these requirements?

**A.** Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes
in the test environment.

**B.** Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the
production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.

**C.** Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new
EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS
snapshots.

**D.** Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the
EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in
the test environment.

---

## Question 21

An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one
product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour
with millisecond latency during peak hours.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set
the S3 buckets as origins for the distributions. Store the order data in Amazon S3.

**B.** Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability
Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the
backend APIs. Store the data in Amazon RDS for MySQL.

**C.** Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service
(Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process
bursts in traffic. Store the data in Amazon RDS for MySQL.

**D.** Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution.
Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs.
Store the data in Amazon DynamoDB.

---

## Question 22

A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The
media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other
files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing
and retrieving the media files.
Which storage option meets these requirements?

**A.** S3 Standard

**B.** S3 Intelligent-Tiering

**C.** S3 Standard-Infrequent Access (S3 Standard-IA)

**D.** S3 One Zone-Infrequent Access (S3 One Zone-IA)

---

## Question 23

A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1
month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.
Which storage solution will meet these requirements MOST cost-effectively?

**A.** Configure S3 Intelligent-Tiering to automatically migrate objects.

**B.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after
1 month.

**C.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent
Access (S3 Standard-IA) after 1 month.

**D.** Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent
Access (S3 One Zone-IA) after 1 month.

---

## Question 24

A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted
vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph
comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the
vertical scaling.
How should the solutions architect generate the information with the LEAST operational overhead?

**A.** Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.

**B.** Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance
types.

**C.** Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance
types for the last 2 months.

**D.** Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon
QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.

---

## Question 25

A company is designing an application. The application uses an AWS Lambda function to receive information
through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.
During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the
high volumes of data that the company needs to load into the database. A solutions architect must recommend a
new design to improve scalability and minimize the configuration effort.
Which solution will meet these requirements?

**A.** Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the
database by using native Java Database Connectivity (JDBC) drivers.

**B.** Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use
the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.

**C.** Set up two Lambda functions. Configure one function to receive the information. Configure the other
function to load the information into the database. Integrate the Lambda functions by using Amazon Simple
Notification Service (Amazon SNS).

**D.** Set up two Lambda functions. Configure one function to receive the information. Configure the other
function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple
Queue Service (Amazon SQS) queue.

---

## Question 26

A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have
unauthorized configuration changes.
What should a solutions architect do to accomplish this goal?

**A.** Turn on AWS Config with the appropriate rules.

**B.** Turn on AWS Trusted Advisor with the appropriate checks.

**C.** Turn on Amazon Inspector with the appropriate assessment template.

**D.** Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).

---

## Question 27

A company is launching a new application and will display application metrics on an Amazon CloudWatch
dashboard. The company's product manager needs to access this dashboard periodically. The product manager
does not have an AWS account. A solutions architect must provide access to the product manager by following the
principle of least privilege.
Which solution will meet these requirements?

**A.** Share the dashboard from the CloudWatch console. Enter the product manager's email address, and
complete the sharing steps. Provide a shareable link for the dashboard to the product manager.

**B.** Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS
managed policy to the user. Share the new login credentials with the product manager. Share the browser URL
of the correct dashboard with the product manager.

**C.** Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the
IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to
the CloudWatch console and locate the dashboard by name in the Dashboards section.

**D.** Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard,
start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to
open the dashboard URL with cached AWS credentials that have appropriate permissions to view the
dashboard.

---

## Question 28

A company is migrating applications to AWS. The applications are deployed in different accounts. The company
manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on
(SSO) solution across all the company's accounts. The company must continue managing the users and groups in
its on-premises self-managed Microsoft Active Directory.
Which solution will meet these requirements?

**A.** Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a oneway domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using
AWS Directory Service for Microsoft Active Directory.

**B.** Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to
connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory
Service for Microsoft Active Directory.

**C.** Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft
Active Directory.

**D.** Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO
console.

---

## Question 29

A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists
of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS
Regions.
The company needs to route users to the Region with the lowest latency. The company also needs automated
failover between Regions.
Which solution will meet these requirements?

**A.** Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the
Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.

**B.** Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with
the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.

**C.** Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the
Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an
Amazon CloudFront distribution that uses the latency record as an origin.

**D.** Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with
the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB.
Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.

---

## Question 30

A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB
instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process
that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and
memory attributes of the DB instance.
Which solution meets these requirements MOST cost-effectively?

**A.** Stop the DB instance when tests are completed. Restart the DB instance when required.

**B.** Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.

**C.** Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when
required.

**D.** Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again
when required.

---

## Question 31

A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB
instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of
configuring and operating this check.
What should a solutions architect do to accomplish this?

**A.** Use AWS Config rules to define and detect resources that are not properly tagged.

**B.** Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.

**C.** Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.

**D.** Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through
Amazon CloudWatch to periodically run the code.

---

## Question 32

A development team needs to host a website that will be accessed by other teams. The website contents consist of
HTML, CSS, client-side JavaScript, and images.
Which method is the MOST cost-effective for hosting the website?

**A.** Containerize the website and host it in AWS Fargate.

**B.** Create an Amazon S3 bucket and host the website there.

**C.** Deploy a web server on an Amazon EC2 instance to host the website.

**D.** Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.

---

## Question 33

A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of
users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of
financial transactions with several other internal applications. Transactions also need to be processed to remove

sensitive data before being stored in a document database for low-latency retrieval.
What should a solutions architect recommend to meet these requirements?

**A.** Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data
from every transaction upon write. Use DynamoDB Streams to share the transactions data with other
applications.

**B.** Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and
Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other
applications can consume the data stored in Amazon S3.

**C.** Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove
sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other
applications can consume the transactions data off the Kinesis data stream.

**D.** Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and
remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in
Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.

---

## Question 34

A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the
company must track configuration changes on its AWS resources and record a history of API calls made to these
resources.
What should a solutions architect do to meet these requirements?

**A.** Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.

**B.** Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.

**C.** Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.

**D.** Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.

---

## Question 35

A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of
Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the
DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale
DDoS attacks.
Which solution meets these requirements?

**A.** Enable Amazon GuardDuty on the account.

**B.** Enable Amazon Inspector on the EC2 instances.

**C.** Enable AWS Shield and assign Amazon Route 53 to it.

**D.** Enable AWS Shield Advanced and assign the ELB to it.

---

## Question 36

A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in
two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key
to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted
with the same KMS key. The data and the key must be stored in each of the two Regions.

Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3
managed encryption keys (SSE-S3). Configure replication between the S3 buckets.

**B.** Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure
replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.

**C.** Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use
server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the
S3 buckets.

**D.** Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use
server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.

---

## Question 37

A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The
company needs to create a strategy to access and administer the instances remotely and securely. The company
needs to implement a repeatable process that works with native AWS services and follows the AWS WellArchitected Framework.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use the EC2 serial console to directly access the terminal interface of each instance for administration.

**B.** Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager
Session Manager to establish a remote SSH session.

**C.** Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a
public subnet to provide a tunnel for administration of each instance.

**D.** Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises
machines to connect directly to the instances by using SSH keys across the VPN tunnel.

---

## Question 38

A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is
experiencing increased demand from around the world. The company must decrease latency for users who access
the website.
Which solution meets these requirements MOST cost-effectively?

**A.** Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing
entries.

**B.** Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket.
Edit the Route 53 entries to point to the IP addresses of the accelerators.

**C.** Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the
CloudFront distribution.

**D.** Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.

---

## Question 39

A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for
MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD
storage. There are millions of updates against this data every day through the company's website.
The company has noticed that some insert operations are taking 10 seconds or longer. The company has
determined that the database storage performance is the problem.
Which solution addresses this performance issue?

**A.** Change the storage type to Provisioned IOPS SSD.

**B.** Change the DB instance to a memory optimized instance class.

**C.** Change the DB instance to a burstable performance instance class.

**D.** Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.

---

## Question 40

A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is
approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for
future analysis.
The company wants a highly available solution. However, the company needs to minimize costs and does not want
to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for
immediate analysis and archive any data older than 14 days.
What is the MOST operationally efficient solution that meets these requirements?

**A.** Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data
Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition
data to Amazon S3 Glacier after 14 days.

**B.** Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer
to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set
up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.

**C.** Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data
Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster.
Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots
every day and delete data from the cluster that is older than 14 days.

**D.** Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the
message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the
message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy
the message to an Amazon S3 bucket and delete the message from the SQS queue.

---

## Question 41

A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The
company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for
analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an
upload is complete. The company has noticed slow application performance and wants to improve the performance
as much as possible.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send
events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is
complete.

**B.** Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure
an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the
upload to the S3 bucket is complete.

**C.** Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data.
Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send
events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service
(Amazon SNS) topic as the second rule's target.

**D.** Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon
Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to
an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.

---

## Question 42

A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The
EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not
communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images
to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges.
What is the MOST cost-effective way for the company to avoid Regional data transfer charges?

**A.** Launch the NAT gateway in each Availability Zone.

**B.** Replace the NAT gateway with a NAT instance.

**C.** Deploy a gateway VPC endpoint for Amazon S3.

**D.** Provision an EC2 Dedicated Host to run the EC2 instances.

---

## Question 43

A company has an on-premises application that generates a large amount of time-sensitive data that is backed up
to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A
solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and
with minimal impact on internet connectivity for internal users.
Which solution meets these requirements?

**A.** Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.

**B.** Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.

**C.** Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS
each day.

**D.** Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits
from the account.

---

## Question 44

A company has an Amazon S3 bucket that contains critical data. The company must protect the data from
accidental deletion.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A.** Enable versioning on the S3 bucket.

**B.** Enable MFA Delete on the S3 bucket.

**C.** Create a bucket policy on the S3 bucket.

**D.** Enable default encryption on the S3 bucket.

**E.** Create a lifecycle policy for the objects in the S3 bucket.

---

## Question 45

A company has a data ingestion workflow that consists of the following:
• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries
• An AWS Lambda function to process the data and record metadata
The company observes that the ingestion workflow fails occasionally because of network connectivity issues.
When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company
manually reruns the job.
Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data
in the future? (Choose two.)

**A.** Deploy the Lambda function in multiple Availability Zones.

**B.** Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.

**C.** Increase the CPU and memory that are allocated to the Lambda function.

**D.** Increase provisioned throughput for the Lambda function.

**E.** Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.

---

## Question 46

A company has an application that provides marketing services to stores. The services are based on previous
purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is
processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.
Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable
information (PII) that should not have been included. The company wants administrators to be alerted if PII is
shared again. The company also wants to automate remediation.
What should a solutions architect do to meet these requirements with the LEAST development effort?

**A.** Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the
bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.

**B.** Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If
objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the
administrators to remove the objects that contain PII.

**C.** Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are
loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a
notification to the administrators to remove the objects that contain PII.

**D.** Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are
loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a
notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.

---

## Question 47

A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region
for an upcoming event that will last 1 week.
What should the company do to guarantee the EC2 capacity?

**A.** Purchase Reserved Instances that specify the Region needed.

**B.** Create an On-Demand Capacity Reservation that specifies the Region needed.

**C.** Purchase Reserved Instances that specify the Region and three Availability Zones needed.

**D.** Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.

---

## Question 48

A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure
that the catalog is highly available and that the catalog is stored in a durable location.
What should a solutions architect do to meet these requirements?

**A.** Move the catalog to Amazon ElastiCache for Redis.

**B.** Deploy a larger EC2 instance with a larger instance store.

**C.** Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.

**D.** Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.

---

## Question 49

A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call,
but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the
ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older
files is acceptable.
Which solution will meet these requirements MOST cost-effectively?

**A.** Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files
from S3 Glacier Instant Retrieval.

**B.** Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3
Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon
Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.

**C.** Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in
Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1
year. Query and retrieve the files by searching for metadata from Amazon S3.

**D.** Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3

Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS.
Retrieve the files from S3 Glacier Deep Archive.

---

## Question 50

A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by

third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as
possible to remediate a critical security vulnerability.
What should a solutions architect do to meet these requirements?

**A.** Create an AWS Lambda function to apply the patch to all EC2 instances.

**B.** Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.

**C.** Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.

**D.** Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2
instances.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 1

**Answer:** **A**

**Explanation:**

The correct answer is A because it directly addresses the requirements of speed, minimal operational
complexity, and leveraging existing high-speed internet connections. S3 Transfer Acceleration utilizes AWS's
globally distributed edge locations to optimize data transfer speeds into an S3 bucket. Multipart uploads
enhance reliability and speed, especially for large files (500 GB daily). This method avoids the complexity of
managing intermediate buckets, EC2 instances, or physical devices like Snowball Edge.

**Option B** introduces unnecessary complexity with multiple S3 buckets and cross-region replication,
increasing management overhead and costs. While replication handles data transfer, Transfer Acceleration is
designed specifically for speed optimization in direct uploads.

**Option C** is unsuitable because AWS Snowball Edge is intended for environments with limited or no internet
connectivity. Given the high-speed internet connection available at each site, Snowball Edge adds
unnecessary logistical complexity and delays.

**Option D** involves managing EC2 instances, EBS volumes, and snapshots, significantly increasing operational
overhead. Transferring EBS snapshots is also not an optimized method for data aggregation into S3 compared
to direct S3 uploads, especially regarding speed and cost. The described method is more appropriate for
disaster recovery of complete systems rather than daily data aggregation.

In summary, S3 Transfer Acceleration with multipart uploads is the most efficient and straightforward
solution for quickly aggregating data from global sites into a single S3 bucket, aligning with the requirements
for speed, minimal operational overhead, and leveraging existing high-speed internet.

---

## Question 2

**Answer:** **C**

**Explanation:**

The best solution is C. Use Amazon Athena directly with Amazon S3 to run the queries as needed.

Here's why:

1. Minimal Operational Overhead: Athena is serverless. It eliminates the need to provision or manage
infrastructure. It also allows you to query data directly in S3, which is a major advantage as the logs
are already stored there.

2. Cost-Effectiveness: Athena charges based on the amount of data scanned per query. Since the
queries are on-demand and presumably infrequent, this pay-per-query model is the most costeffective option.

3. Simplicity: Athena allows direct querying of JSON data stored in S3 using standard SQL. The log
format is already compatible.

Let's examine why the other options are less ideal:

1. **A.** Amazon Redshift: Redshift requires setting up and managing a data warehouse cluster. This
involves provisioning resources, handling scaling, and performing ETL (Extract, Transform, Load) to
move the JSON data from S3 into Redshift. This adds significant operational overhead and cost
compared to Athena.

2. **B.** Amazon CloudWatch Logs: CloudWatch Logs are best suited for real-time monitoring and
centralized logging, not for complex analytical queries. While CloudWatch Logs Insights exists, its
query language isn't SQL, and it's not designed for ad-hoc analysis of JSON files stored elsewhere
(like S3). Migrating the logs would also be required.

3. **D.** AWS Glue and Amazon EMR: This solution is an overkill. AWS Glue is for ETL and data cataloging,
and EMR is for big data processing using frameworks like Spark. While suitable for very large and
complex data analysis scenarios, it introduces unnecessary complexity and operational overhead for
the stated requirements of simple, on-demand queries. It also has high cost compared to using AWS
Athena.

Therefore, Athena aligns best with the requirement of minimal operational overhead and allows simple SQL
queries on JSON logs stored in S3, making it the superior choice.

---

## Question 3

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:

**Option A** leverages the aws:PrincipalOrgID global condition key in the S3 bucket policy. This condition key
directly references the AWS Organizations organization ID. When applied, the S3 bucket will only allow
access from AWS accounts that belong to the specified organization. This approach offers the least
operational overhead because it's a simple, direct configuration within the S3 bucket policy, automatically
encompassing all current and future accounts within the organization without requiring ongoing updates.

**Option B**, using aws:PrincipalOrgPaths, involves creating organizational units (OUs) for each department. While
it provides more granular control based on OU membership, it necessitates managing and updating the S3
bucket policy whenever OUs change or accounts are moved, increasing operational overhead. It's unnecessary
complexity for the stated requirement of granting access to all accounts within the entire organization.

**Option C**, using CloudTrail to monitor organizational changes and then updating the S3 bucket policy, is
unnecessarily complex and creates significant operational overhead. It requires implementing a custom
solution to react to CloudTrail events and programmatically modify the S3 bucket policy, which is prone to
errors and maintenance issues. It is also not a real-time mechanism; there would be a delay between the
organizational event and the policy update.

**Option D**, tagging users and using aws:PrincipalTag, is suitable for controlling access based on individual user
attributes, not organizational membership. Applying and managing tags for each user across multiple
accounts within the organization adds significant operational overhead and is not the appropriate tool for this
specific requirement. Furthermore, tagging users across multiple accounts and keeping those tags consistent
introduces administrative challenges.

Therefore, option A provides the most efficient and least complex solution for limiting S3 bucket access to
only users of accounts within the organization, by directly referencing the organization ID in the S3 bucket
policy, minimizing the manual intervention and operational overhead.

---

## Question 4

**Answer:** **A**

**Explanation:**

The correct answer is A. Create a gateway VPC endpoint to the S3 bucket.

Here's why:

1. Gateway VPC Endpoints for S3: Gateway VPC endpoints provide private connectivity between your
VPC and S3 without requiring an internet gateway, NAT device, VPN connection, or AWS Direct
Connect connection. This ensures that traffic between your EC2 instance and S3 remains within the
AWS network. https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html

2. How it works: When you create a gateway VPC endpoint for S3, a route is automatically added to
your VPC's route table. This route directs traffic destined for S3 to the endpoint instead of the
internet. The EC2 instance, using its IAM role permissions to access S3, can now reach the S3 bucket
privately.
Let's analyze the other options:

1. **B.** Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket: While
CloudWatch Logs is useful for centralized logging, exporting logs from CloudWatch Logs to S3 still
requires connectivity to S3. It doesn't inherently solve the private connectivity requirement.
Furthermore, it adds unnecessary complexity and cost.

2. **C.** Create an instance profile on Amazon EC2 to allow S3 access: An instance profile (IAM role)
grants permissions to the EC2 instance to access S3, but it doesn't establish private network
connectivity. The EC2 instance still needs a way to reach S3 over the network, and without a gateway
endpoint, it would need internet access.

3. **D.** Create an Amazon API Gateway API with a private link to access the S3 endpoint: This involves
creating an API Gateway and configuring it to use a VPC endpoint service (PrivateLink). While
PrivateLink can provide private connectivity, it is typically used for exposing services running within a
VPC to other VPCs or on-premises networks, not for a simple EC2 to S3 communication within the
same VPC. It is overkill for this scenario and adds significant complexity. Additionally, API Gateway
adds latency and cost where the simple gateway endpoint of option A suffices.

---

## Question 5

**Answer:** **C**

**Explanation:**

The correct answer is C because it addresses the core issue of data consistency across multiple instances.
The users are experiencing inconsistent document views because each EC2 instance has a separate EBS
volume, and data isn't synchronized between them.

**Option A**, copying data between EBS volumes, is a short-term fix that becomes increasingly difficult to
manage as the data grows and changes. It doesn't provide a scalable or reliable long-term solution. Consider
the overhead involved in constantly syncing large EBS volumes.

**Option B**, using the Application Load Balancer to direct users to the server containing the documents, isn't
feasible. The load balancer isn't aware of which server holds which documents. It would require complex
session management based on document ownership, which is error-prone and inefficient.

**Option D**, sending requests to both servers simultaneously, won't resolve the issue. It might even exacerbate
the problem by showing fragmented document sets more frequently. There would be significant overhead in
merging results from multiple servers and the application would need to manage this complexity.

**Option C**, migrating to Amazon EFS, provides a centralized, shared file system accessible by both EC2
instances. EFS ensures data consistency and allows both instances to see the same set of documents. By
copying the existing data to EFS and modifying the application to use EFS for storage, all users will access
the same data, resolving the inconsistency. EFS is designed for this exact scenario - providing shared storage
for multiple compute instances.
Amazon EFS is well-suited for web applications that require persistent, shared storage. It eliminates the need
for data replication and synchronization across instances. It also offers scalability and performance to
accommodate growing data needs.

Therefore, migrating to Amazon EFS is the most effective and scalable solution for ensuring users see all their
documents simultaneously.
Further reading:

1. Amazon EFS: https://aws.amazon.com/efs/

2. Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/

---

## Question 6

**Answer:** **B**

**Explanation:**

The correct solution is B: Using AWS Snowball Edge.

Here's a detailed justification:
The key requirements are migrating 70 TB of video files to S3 quickly while minimizing network bandwidth
usage.

**Option A** (AWS CLI): Copying 70 TB over the internet using the AWS CLI would be extremely slow and
consume a significant amount of network bandwidth. This contradicts the requirements.

**Option B** (AWS Snowball Edge): AWS Snowball Edge is designed for transferring large amounts of data
offline. AWS ships a physical device (Snowball Edge) to the company. The company then copies the data onto
the device locally. Once the transfer is complete, the device is shipped back to AWS, where the data is
uploaded to S3. This avoids network bandwidth usage and enables a much faster transfer compared to online
methods for this volume of data. The 70 TB size falls within the typical Snowball Edge capacity. This aligns
perfectly with the requirements of minimizing bandwidth and ensuring a swift transfer.

**Option C** (S3 File Gateway with Public Service Endpoint): S3 File Gateway would cache the data before
uploading it to S3. While it provides an NFS interface, it still requires transferring the data over the internet,
which contradicts the requirement of minimizing network bandwidth. A public service endpoint still means
data traversing the public internet. Furthermore, introducing File Gateway for a one-time migration adds
unnecessary complexity.

**Option D** (S3 File Gateway with AWS Direct Connect): While Direct Connect provides a dedicated, faster
connection to AWS, setting it up solely for a one-time migration is an overkill and adds significant cost and
complexity. It doesn't eliminate the need to transfer 70 TB of data over a network.

Therefore, AWS Snowball Edge is the optimal solution because it directly addresses the constraints of large
data volume and limited network bandwidth. It is significantly faster than transferring over the internet and
avoids ongoing network usage.
Supporting concepts and links:
AWS Snowball Edge: AWS Snowball Edge is a data migration and edge computing device that comes in
various configurations, including Storage Optimized. It allows customers to transfer large amounts of data
into and out of AWS without relying on network connectivity.
https://aws.amazon.com/snowball/
Data Migration to AWS: AWS provides several services for data migration, each suitable for different
scenarios. Snowball Edge is typically used for large-scale migrations when network bandwidth is limited.
https://aws.amazon.com/migration/
Final Answer: The final answer is $\boxed B $

---

## Question 7

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, along with supporting concepts and links:
The scenario demands a highly scalable and decoupled message ingestion and consumption system. Let's
analyze why option D, using Amazon SNS and SQS, best fulfills these requirements.

**Option D** (SNS and SQS) utilizes the publish-subscribe pattern offered by SNS and the message queuing
capabilities of SQS. The ingestion application publishes messages to an SNS topic. Multiple SQS queues
subscribe to this topic. Each consumer application then pulls messages from its own dedicated SQS queue.
This provides excellent decoupling because the ingestion application is unaware of the consumers, and the
consumers are isolated from each other. This isolation is crucial for scalability; if one consumer fails or
becomes overloaded, it doesn't impact the others or the ingestion process. SQS provides buffering for
messages, preventing data loss during surges.
SNS is designed for high-throughput, enabling it to handle the peak load of 100,000 messages per second.
SQS, being a fully managed queuing service, automatically scales to handle the message volume. The
combination ensures messages are reliably delivered to all subscribed consumers without overwhelming
them. SQS also facilitates asynchronous processing, allowing consumers to process messages at their own
pace.
Now, let's look at why the other options are less suitable.

**Option A** (Kinesis Data Analytics) is designed for real-time data processing and analytics, not primarily for
decoupling and distribution to multiple consumers. While it can process messages, it's not as efficient for
simply fanning them out to many downstream applications.

**Option B** (EC2 Auto Scaling) addresses the scaling of the ingestion application, but not the decoupling or
scaling of the message delivery to consumers. It doesn't solve the problem of distributing messages
effectively to multiple, independent consumers.

**Option C** (Kinesis Data Streams and DynamoDB) introduces unnecessary complexity. Kinesis Data Streams
can handle high throughput, but using a single shard would create a bottleneck. DynamoDB as an
intermediary storage adds latency and complexity compared to the direct delivery from SQS. Furthermore,
polling DynamoDB would not scale nearly as efficiently as SQS queues.

In summary, option D is the most appropriate choice because it directly addresses the requirements for
decoupling, scalability, and reliable message delivery to multiple consumers using services specifically

designed for these purposes.
Supporting Links:

Amazon SNS: https://aws.amazon.com/sns/

Amazon SQS: https://aws.amazon.com/sqs/
Decoupled Architecture on AWS: https://aws.amazon.com/solutions/guidance/decoupling-applications-aws/

---

## Question 8

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:
The problem statement emphasizes resiliency, scalability, and variable workloads. **Option B** best addresses
these requirements.
Amazon SQS: Using SQS decouples the primary server (job coordinator) from the compute nodes. This
promotes resiliency. If the primary server fails, the messages in the queue persist, and processing can resume
when a new primary server is available. https://aws.amazon.com/sqs/
EC2 Auto Scaling Group: Placing the compute nodes in an Auto Scaling group provides scalability and high
availability. Auto Scaling automatically adjusts the number of EC2 instances based on demand. This ensures
that the application can handle variable workloads efficiently. https://aws.amazon.com/autoscaling/
Scaling based on Queue Size: Configuring Auto Scaling to scale based on the size of the SQS queue is
crucial. As the queue grows (more jobs are waiting), Auto Scaling will launch more EC2 instances to process
the jobs. Conversely, if the queue shrinks, Auto Scaling can terminate instances to reduce costs. This reactive,
queue-driven scaling aligns directly with the variable workload requirement.

**Option A** is incorrect because scheduled scaling doesn't react to real-time workload changes. It scales
instances at predefined times regardless of the actual queue size. While useful for predictable workload
patterns, it's less effective for variable workloads.

**Option C** is incorrect because CloudTrail is an auditing service, not a job queue. Furthermore, scaling based on
the primary server's load doesn't directly reflect the number of waiting jobs. If the primary server is
overloaded, that is a symptom of a problem, not the core driver for scaling compute nodes.

**Option D** is incorrect because EventBridge (formerly CloudWatch Events) is typically used for event-driven

architectures, not as a direct queue for jobs in this scenario. Also, scaling based on the load of the compute
nodes becomes a lagging metric. The queue length provides earlier indication that scaling is needed.
Furthermore, managing the primary server within the auto-scaling group might be more complex than
necessary and is less resilient compared to the option leveraging SQS.

---

## Question 9

**Answer:** **B**

**Explanation:**

The correct solution is B, which involves using Amazon S3 File Gateway and S3 Lifecycle policies. Here's why:
S3 File Gateway: This service provides a seamless way to extend on-premises file storage to Amazon S3
without requiring significant application changes. It presents a local file system interface to the on-premises
SMB server, which then transparently caches frequently accessed data locally while storing the full dataset
in S3. This addresses the requirement for low-latency access to recent files.
https://aws.amazon.com/storagegateway/file-gateway/
S3 Lifecycle Policies: These policies automate the process of moving less frequently accessed data to lowercost storage tiers such as S3 Glacier Deep Archive after a specified period (7 days in this case). This
addresses the requirement for file lifecycle management and helps to reduce storage costs without deleting
the data. S3 Glacier Deep Archive is suitable for long-term archival where retrieval times of several hours are
acceptable. https://aws.amazon.com/s3/storage-classes/

**Option A** is incorrect because AWS DataSync is primarily a data migration tool, not a continuous storage
extension solution. It would require ongoing manual or scripted execution to move files after 7 days, which is
less efficient than a managed solution like S3 File Gateway with lifecycle policies.

**Option C** is not ideal because Amazon FSx for Windows File Server is a fully managed Windows file server in
the cloud. While it provides scalable storage, it doesn't directly address the need to seamlessly integrate with
the existing on-premises SMB server and leverage cheaper archival storage. It would be better suited as a
complete replacement to the on-premise server.

**Option D** is incorrect because it involves manually installing a utility on each user's computer. It is complex to
manage and prone to user error. Additionally, while S3 Lifecycle policies are used, S3 Glacier Flexible
Retrieval is a more expensive storage option than Glacier Deep Archive for archival purposes. This is not an
ideal solution.

In summary, option B provides the most cost-effective and manageable solution for extending on-premises
file storage to the cloud, maintaining low-latency access to recent files, and implementing automated

lifecycle management.

---

## Question 10

**Answer:** **B**

**Explanation:**

The correct answer is B because it directly addresses the requirement of processing orders in the order they
are received. Here's why:
FIFO (First-In, First-Out) Queues: Amazon SQS FIFO queues guarantee that messages are retrieved from the
queue in the exact order they were placed. This is crucial for order processing, where the sequence of events
matters. https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFOqueues.html
API Gateway Integration: Integrating API Gateway with SQS allows you to seamlessly send order data
received through the API directly into the FIFO queue.
Lambda Function Invocation: Configuring the SQS queue to invoke a Lambda function on message arrival
ensures that each order is automatically processed as it becomes available in the queue.

**Option A** is incorrect because Amazon SNS is a publish/subscribe service, not a queuing service. It's designed
for broadcasting messages to multiple subscribers simultaneously, not for preserving the order of messages.
This makes SNS unsuitable for ordered processing.

**Option C** is incorrect because API Gateway authorizers are used for authentication and authorization, not for
controlling the processing order of requests. Blocking requests with an authorizer might prevent processing
altogether, but won't guarantee correct sequencing.

**Option D** is incorrect because Amazon SQS standard queues do not guarantee message order. While they aim
for best-effort ordering, messages can sometimes be delivered out of sequence, which violates the stated
requirement. https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standardqueues.html

In summary, using an API Gateway integrated with an SQS FIFO queue and a Lambda function ensures that
order information is captured in the correct sequence and then processed sequentially, meeting the
application's specific requirements. This approach leverages the ordered message delivery capability of FIFO
queues to maintain data integrity within the ecommerce application's workflow.

---

## Question 11

**Answer:** **A**

**Explanation:**

The best solution is to use AWS Secrets Manager with automatic rotation. Here's why:
Secrets Manager Purpose: AWS Secrets Manager is specifically designed for securely storing and managing
secrets, like database credentials. It eliminates the need to hardcode or store secrets within application code
or configuration files.
Reduced Operational Overhead: By using Secrets Manager, the company centralizes credential management,
which simplifies the process of updating, rotating, and auditing secrets. This reduces the operational burden
associated with managing credentials manually on each EC2 instance.
Automatic Rotation: Secrets Manager's automatic rotation feature automates the process of changing
credentials regularly without application downtime. This enhances security by limiting the window of
opportunity for compromised credentials to be exploited.
IAM Integration: Secrets Manager integrates with AWS Identity and Access Management (IAM) to control
access to secrets, ensuring that only authorized EC2 instances or roles can retrieve the database credentials.
Auditing and Monitoring: Secrets Manager provides auditing capabilities through AWS CloudTrail, allowing
the company to track secret access and modifications.

Why other options are less suitable:
AWS Systems Manager Parameter Store: While Parameter Store can store sensitive information, it's
primarily designed for storing configuration data and not for managing secrets with rotation capabilities.
While Parameter Store offers SecureString parameters, it lacks the robust rotation features of Secrets
Manager.
Amazon S3: Storing credentials in an S3 bucket, even if encrypted, is not the best practice for secret
management. It requires custom logic to retrieve and manage the credentials, which increases operational
overhead and doesn't provide automatic rotation.
Encrypted EBS Volume: Storing credentials on encrypted EBS volumes attached to each EC2 instance offers
some level of security, but it doesn't centralize credential management or provide automatic rotation
capabilities. It also requires managing separate volumes for each instance.

In summary, AWS Secrets Manager with automatic rotation is the most efficient and secure way to manage
database credentials for EC2 instances connecting to Aurora, minimizing operational overhead and enhancing
security posture.

---

## Question 12

**Answer:** **A**

**Explanation:**

The best solution is to use CloudFront with both the S3 bucket (for static content) and the ALB (for dynamic
content) as origins and then point Route 53 to the CloudFront distribution. This approach efficiently leverages
CloudFront's caching capabilities to reduce latency and improve performance for both types of content
globally.
Here's why other options are less optimal:

**Option B** & D: While Global Accelerator can improve performance, it primarily focuses on TCP and UDP traffic,
not HTTP/HTTPS, which are used by web applications. Also, Global Accelerator is an overkill for static content
served from S3 and adds unnecessary complexity. Global Accelerator is most useful for improving the
performance of applications with users distributed globally where network congestion or routing issues can
impact performance. Furthermore, managing separate domain names, as suggested in option D, would
complicate the web application's architecture and potentially lead to inconsistent user experience.

**Option C**: Using Global Accelerator as a front for CloudFront is not a typical use case. CloudFront is already a
global content delivery network (CDN) designed to optimize content delivery. Global Accelerator's benefits
would be redundant.

**Option A** directly addresses the requirements by:

1. Improving Performance and Reducing Latency: CloudFront caches static content from the S3
bucket at edge locations globally, bringing data closer to users and reducing latency.

2. Serving Dynamic Content: CloudFront can also be configured to forward requests for dynamic
content to the ALB. This allows CloudFront to cache the responses when possible, further improving
performance.

3. Using Existing Domain Name: Route 53 is configured to route traffic to the CloudFront distribution,
which means you can continue using your existing domain name.

---

## Question 13

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the best solution for rotating RDS for MySQL database
credentials across multiple AWS Regions with the least operational overhead:

**Option A** leverages AWS Secrets Manager's built-in capabilities for secret management and rotation across
Regions. Secrets Manager is designed specifically for storing and managing secrets like database
credentials. Its multi-Region secret replication feature automatically replicates secrets to specified Regions,
ensuring consistency. The automatic rotation feature allows you to define a rotation schedule, where Secrets
Manager handles the process of generating new credentials and updating them in the database, significantly
reducing manual intervention and operational overhead.

**Option B** is incorrect because AWS Systems Manager Parameter Store, while capable of storing secrets,
doesn't natively support multi-Region secret replication or automated rotation in the same streamlined
manner as Secrets Manager. Implementing similar functionality with Parameter Store would require custom
scripting and automation, increasing operational complexity.

**Option C**, using S3 and Lambda, involves more manual setup and management. While S3 can store encrypted
data, it doesn't inherently offer secret rotation capabilities. The Lambda function would need to be customcoded to generate new credentials, update the database, and update the secret in S3, adding to operational
overhead and potential error points.

**Option D**, using DynamoDB and Lambda with KMS encryption, is the most complex. DynamoDB global tables
provide replication, but managing the encryption with KMS and implementing secret rotation logic within
Lambda, including calling the RDS API, adds significant overhead. KMS is mainly for encryption key
management, not secret rotation.

Therefore, option A provides the most straightforward and automated solution for rotating RDS database
credentials across multiple Regions due to Secrets Manager's features like built-in rotation and multi-region

replication, minimizing operational overhead.

---

## Question 14

**Answer:** **C**

**Explanation:**

The correct solution is to use Amazon Aurora with a Multi-AZ deployment and configure Aurora Auto Scaling
with Aurora Replicas. Here's why:
Scalability: Aurora Auto Scaling automatically adds or removes Aurora Replicas in response to changes in
application load. This addresses the need to scale the database to meet unpredictable read workloads.
Read-Heavy Workloads: Aurora Replicas are designed for read operations. By directing read traffic to these
replicas, the primary database instance is relieved, improving overall performance.
High Availability: A Multi-AZ deployment ensures that the database remains available even if there is an
infrastructure failure in one Availability Zone. Aurora automatically fails over to a replica in another
Availability Zone.
Aurora's Compatibility: Aurora is compatible with MySQL and PostgreSQL, allowing for easier migration from
the existing MySQL database.
Other options are suboptimal because:

**A.** Amazon Redshift is a data warehouse service optimized for analytical workloads, not transactional
workloads.

**B.** Amazon RDS with a Single-AZ deployment does not guarantee high availability. Although reader instances
can be added, a single-AZ configuration for the primary instance presents a single point of failure.

**D.** Amazon ElastiCache for Memcached is an in-memory caching service, not a database. It is not suitable for
storing transactional data.
Supporting Links:

Amazon Aurora: https://aws.amazon.com/rds/aurora/
Aurora Auto Scaling:
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html
Aurora Replicas:
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.ReadReplicas.html

Amazon RDS Multi-AZ: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html

---

## Question 15

**Answer:** **C**

**Explanation:**

The correct answer is C, using AWS Network Firewall. Here's a detailed justification:
The requirement is to replicate on-premises traffic inspection and filtering functionalities within AWS for a
production VPC. Amazon GuardDuty (A) is a threat detection service that monitors for malicious activity and
unauthorized behavior but doesn't provide inline traffic inspection and filtering based on custom rules. Traffic
Mirroring (B) duplicates network traffic for analysis, but it doesn't provide filtering capabilities itself. You
would need a separate inspection appliance to receive and process the mirrored traffic, adding complexity
and cost. AWS Firewall Manager (D) centrally manages firewall rules across multiple accounts and VPCs; it
doesn't inspect traffic directly or provide inspection capabilities. It works with AWS WAF, AWS Shield
Advanced, and AWS Network Firewall.
AWS Network Firewall (C), on the other hand, is a managed network firewall service that provides essential
protection for your VPCs. It allows you to define rules for inspecting and filtering network traffic based on
criteria such as source and destination IP addresses, ports, and protocols. This precisely aligns with the
company's need to implement traffic flow inspection and filtering, mimicking the capabilities of their onpremises inspection server. Network Firewall operates at the network layer (Layer 3 and Layer 4) and
application layer (Layer 7), allowing for deep packet inspection (DPI) and fine-grained control. It also scales
automatically to meet fluctuating traffic demands without requiring manual intervention.

Therefore, AWS Network Firewall is the best fit for the company's requirements because it provides a fully
managed, scalable, and customizable solution for traffic inspection and filtering within the production VPC.

---

## Question 16

**Answer:** **B**

**Explanation:**

The correct answer is B. Let's break down why:
Requirement 1: Data Visualization and Data Lake Integration: The company needs a data visualization tool
that can ingest data from both S3 (data lake) and RDS for PostgreSQL. Amazon QuickSight excels at this. It
can directly connect to both S3 (using manifests or direct paths) and RDS databases. Options C and D
primarily focus on AWS Glue and Athena, which are more suited for data processing and querying, not direct
visualization.
Requirement 2: Different Access Levels (Management vs. Rest of Company): QuickSight has a robust
sharing mechanism. Dashboards can be shared with individual users or groups (created within QuickSight
itself), allowing for granular control over who sees what. IAM roles (option A) are primarily used for controlling
access to AWS resources, not for fine-grained access to dashboards within QuickSight. S3 bucket policies
(options C and D) would only control access to the underlying report files, not the dynamic visualizations.
QuickSight Analysis, Datasets, and Dashboards: QuickSight works by creating an analysis from one or more
datasets. The datasets are based on the connected data sources. The analysis is then used to build one or
more dashboards. Publishing the dashboards makes them available to others.
Direct Connection to Data Sources: QuickSight's ability to directly connect to the data sources (S3 and RDS)
eliminates the need for complex ETL processes just for reporting (which would be implied by option C). While
ETL might be part of the broader data lake architecture, it's not the primary function for a reporting solution.
Athena Federated Query is overkill: Athena Federated Query (option D) allows querying across different data
sources. Although possible, using QuickSight's direct connectors is a simpler and more suitable approach for
this scenario.

In summary, option B is the most straightforward solution, using QuickSight's built-in capabilities to connect
to data sources, create visualizations, and share dashboards with user-level and group-level access control.

---

## Question 17

**Answer:** **A**

**Explanation:**

The correct answer is A: Create an IAM role that grants access to the S3 bucket and attach the role to the EC2
instances. Here's why:
IAM Roles are the recommended approach for granting permissions to AWS services like EC2 to access other
AWS resources such as S3. A role provides temporary security credentials to the EC2 instances, eliminating
the need to store long-term credentials directly on the instances. This enhances security because the
credentials are automatically rotated and managed by AWS.
IAM Policies define the permissions granted. While policies are fundamental, they are attached to IAM
entities. Attaching an IAM policy directly to an EC2 instance is not a standard practice. Instead, the policy is
attached to an IAM role, which is then associated with the EC2 instance. The instance assumes the role,
gaining the permissions defined in the policy.
IAM Groups are collections of IAM users. While groups simplify permission management for users, they are
not designed to be associated with EC2 instances for granting access to resources. Groups are a user-centric
concept and not appropriate for service-to-service access control.
IAM Users represent individuals or applications that interact with AWS. Creating an IAM user and embedding
its credentials on an EC2 instance is a security risk. These credentials would be long-term and static, making
them vulnerable if the instance is compromised. Hardcoding or storing credentials on an EC2 instance is a bad
practice. IAM Roles provide a more secure and manageable solution.

Therefore, the most secure and best practice approach is to create an IAM role with the necessary S3 access
permissions and then attach that role to the EC2 instances. This allows the EC2 instances to assume the role
and obtain temporary credentials to access the S3 bucket.
Further Reading:
IAM Roles for Amazon EC2
IAM Policies
Security best practices in IAM

---

## Question 18

**Answer:** **AB**

**Explanation:**

The chosen solution, using SQS and Lambda triggered by SQS, effectively addresses the requirements for
durable, stateless image processing.

**Option A** is correct because SQS provides a durable queuing mechanism. When an image is uploaded to S3, a
notification is sent to the SQS queue. This ensures that even if the Lambda function is temporarily unavailable,
the image processing request will persist in the queue until it can be processed. SQS decouples the S3 upload
event from the Lambda function invocation, enabling asynchronous processing. This aligns with the need for a
stateless and reliable processing pipeline. https://aws.amazon.com/sqs/

**Option B** is correct because configuring the Lambda function to consume messages from the SQS queue
directly addresses the need for automated processing. Lambda's SQS trigger automatically polls the queue
and invokes the function when a message arrives. This eliminates the need for custom polling logic. By
deleting the message upon successful processing, the queue is kept clean and ensures that each image is
processed only once. https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

**Option C** is incorrect because storing filenames in a text file in memory within the Lambda function introduces
statefulness. Lambda functions should be stateless, and relying on in-memory storage for tracking processed
images is unreliable, especially with concurrent invocations.

**Option D** is incorrect because launching an EC2 instance to monitor SQS adds unnecessary complexity and
cost. Lambda functions can directly integrate with SQS without requiring an intermediary EC2 instance.
**Option E** is incorrect because using SNS for further processing is vague and doesn't directly address the
requirement of automated image processing. SNS is a notification service, not an event-driven compute
service. The application owner would need to manually trigger the image processing, defeating the
automation requirement.

---

## Question 19

**Answer:** **D**

**Explanation:**

The correct answer is D: Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load
Balancer endpoint to receive the incoming packets and forward the packets to the appliance.

Here's a detailed justification:
Gateway Load Balancer (GWLB): A GWLB is specifically designed for inline inspection of network traffic. It
provides a single entry point for traffic, scales automatically, and distributes traffic to virtual appliances like
firewalls. This is exactly what the scenario requires: inspecting traffic before it reaches the web servers.
GWLB Endpoint: A GWLB endpoint allows you to seamlessly integrate the GWLB (in the inspection VPC) with
the web application's VPC. Traffic destined for the web application's public subnet is redirected to the GWLB
endpoint.
Traffic Flow: Incoming traffic from the internet flows to the GWLB endpoint in the application's VPC. The
endpoint forwards the traffic to the GWLB in the inspection VPC. The GWLB distributes the traffic to the
firewall appliance for inspection. After inspection, the appliance sends the traffic back through the GWLB,
back through the endpoint, and finally to the web servers.
Least Operational Overhead: Compared to other options, the GWLB solution offers the least operational
overhead. It's a managed service, meaning AWS handles scaling, availability, and patching. You don't have to
manage routing tables as extensively as with Transit Gateway.
Here's why the other options are less suitable:

**A.** Network Load Balancer (NLB): NLBs are designed for load balancing TCP, UDP, and TLS traffic to backend
targets. They are not suitable for inspecting packets at the application layer, or generally for integration with
virtual firewalls. NLBs do not have native features to forward traffic for inspection and then back to the
original destination.

**B.** Application Load Balancer (ALB): ALBs operate at the application layer (HTTP/HTTPS) and are primarily
used for load balancing web traffic based on content. They are not intended for routing packets to virtual
appliances for general-purpose packet inspection.

**C.** Transit Gateway (TGW): TGW is a network transit hub that connects VPCs and on-premises networks.
While you could use TGW to route traffic through an inspection VPC, it involves more complex route table
configurations and management. It's overkill and adds unnecessary operational complexity compared to the
GWLB, which is designed specifically for this purpose.

---

## Question 20

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the correct answer, and why other options are incorrect:
Why **Option D** is Correct: "Take EBS snapshots of the production EBS volumes. Turn on the EBS fast
snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the
new EBS volumes to EC2 instances in the test environment."
This solution directly addresses the requirement of minimizing the cloning time while maintaining data
isolation.

1. EBS Snapshots for Data Duplication: EBS snapshots are the standard and efficient way to create
point-in-time copies of EBS volumes. This ensures a consistent and reliable clone of the production
data. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html

2. Fast Snapshot Restore (FSR) for Speed: FSR significantly reduces the time required to restore EBS
volumes from snapshots. Normally, restoring from a snapshot involves lazily loading the data blocks
as they are accessed. FSR pre-initializes the volume in the background, so it's immediately ready for
high I/O performance upon attachment. This satisfies the "minimize the time that is required to clone"
requirement. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshotrestore.html

3. New EBS Volumes for Isolation: By restoring the snapshots into new EBS volumes, the test
environment operates on independent copies of the data. Modifications in the test environment will
not affect the production data, meeting the "Modifications to the cloned data must not affect the
production environment" requirement.

4. Attaching to EC2 Instances: Finally, attaching the new EBS volumes to EC2 instances in the test
environment makes the cloned data accessible to the applications.
Why Other Options Are Incorrect:

**Option A**: Restore to EC2 Instance Store: EC2 instance store volumes are ephemeral, meaning the data is lost
when the instance is stopped or terminated. This makes them unsuitable for a persistent test environment
where data needs to be retained. Further, instance store volumes aren't suitable for large datasets and
generally have poorer durability.

**Option B**: EBS Multi-Attach and Attaching Production Volumes: EBS Multi-Attach allows you to attach a
single EBS volume to multiple EC2 instances within the same Availability Zone. However, directly attaching
production volumes to test instances creates a significant risk of data corruption in the production
environment if the test environment makes unintended modifications. This also requires coordinating access
and locking which is far from ideal. More over, the question states that modifications to cloned data should
NOT affect production environment. This choice violates it.

**Option C**: Creating Volumes and Restoring Without FSR: While this solution does provide data isolation by
creating new EBS volumes, it does not address the requirement of minimizing the cloning time. Without FSR,
restoring large EBS volumes from snapshots can take a significant amount of time, especially when high I/O
performance is immediately required.

In summary, option D provides the best balance of data isolation, cloning speed, and performance for the test
environment, leveraging EBS snapshots and FSR for efficient and safe data duplication.

---

## Question 21

**Answer:** **D**

**Explanation:**

**Option D** is the most suitable solution because it leverages serverless technologies and static content hosting
for optimal scalability, performance, and minimal operational overhead. Hosting the static website content
(HTML, CSS, JavaScript, images) on Amazon S3 and distributing it via Amazon CloudFront provides global
content delivery with low latency and high availability. CloudFront's caching capabilities further reduce load
on the origin S3 bucket.
Using Amazon API Gateway and AWS Lambda for backend APIs enables on-demand execution of code
without managing servers. API Gateway handles request routing, authorization, and throttling, while Lambda
functions execute the business logic. This serverless approach scales automatically with traffic, ensuring
millisecond latency during peak hours.
Storing order data in Amazon DynamoDB is ideal because DynamoDB is a fully managed NoSQL database
service that provides consistent, single-digit millisecond latency at any scale. DynamoDB's serverless nature
eliminates the need for database administration tasks.
Options A, B, and C involve managing infrastructure (EC2 instances, containers, databases), which increases
operational overhead. **Option A**'s approach of storing order data directly in S3 isn't suitable for transactional
data. **Option B** utilizes ALBs and RDS for MySQL, requiring instance management and database

administration. **Option C** introduces the complexity of container orchestration with EKS. Therefore, **Option D**
presents the least operational overhead while meeting the performance requirements.
Here are some authoritative links for further research:

Amazon S3: https://aws.amazon.com/s3/

Amazon CloudFront: https://aws.amazon.com/cloudfront/

Amazon API Gateway: https://aws.amazon.com/api-gateway/

AWS Lambda: https://aws.amazon.com/lambda/

Amazon DynamoDB: https://aws.amazon.com/dynamodb/

---

## Question 22

**Answer:** **B**

**Explanation:**

The correct answer is B. S3 Intelligent-Tiering.

Here's why:
Resilience to Availability Zone Loss: The application requires resilience to the loss of an Availability Zone.
This immediately rules out S3 One Zone-IA (**Option D**) because it stores data in a single Availability Zone. S3
Standard, S3 Intelligent-Tiering, and S3 Standard-IA all replicate data across multiple Availability Zones,
providing the necessary resilience.
Frequently and Infrequently Accessed Files: The application has both frequently and infrequently accessed
files with an unpredictable access pattern. S3 Standard-IA (**Option C**) is suitable for data accessed less
frequently, but using it for frequently accessed data would be unnecessarily expensive. S3 Standard (Option
A) would be suitable for all objects but is the most expensive option for objects that are infrequent to access.
Cost Minimization: S3 Intelligent-Tiering automatically moves data between frequent and infrequent access
tiers based on access patterns, without any operational overhead or retrieval fees. It delivers automatic cost
savings when access patterns change. It monitors access patterns and moves objects that have not been
accessed for 30 consecutive days to the infrequent access tier and then after another 60 days of inactivity to
the archive access tier. This ensures the optimal storage cost for both frequently and infrequently accessed
files.
Benefits of Intelligent-Tiering: S3 Intelligent-Tiering optimizes storage costs by automatically moving data to
the most cost-effective access tier without performance impact or operational overhead. This approach is
ideal when access patterns are unpredictable or change over time.

In summary, S3 Intelligent-Tiering balances the requirements of Availability Zone resilience, handling both
frequently and infrequently accessed files, and minimizing storage costs, making it the most suitable storage
option.

---

## Question 23

**Answer:** **B**

**Explanation:**

The question requires the most cost-effective storage solution for backup files frequently accessed for one
month and then indefinitely archived with infrequent access.

**Option B**, creating an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep
Archive after 1 month, is the most cost-effective solution. S3 Glacier Deep Archive offers the lowest storage
cost among all S3 storage classes, making it ideal for long-term archival. The lifecycle policy automates the
transition, eliminating manual intervention. S3 Standard is used for the first month of frequent access. This
approach balances initial accessibility with long-term cost optimization for rarely accessed data.

**Option A** is less suitable. S3 Intelligent-Tiering automatically moves data between frequent, infrequent, and
archive access tiers based on usage patterns. While convenient, the cost of monitoring and frequent tier
transitions might exceed the cost-effectiveness of directly moving to Glacier Deep Archive after the initial
active period. The assumption is that the files are never accessed after the initial month, making IntelligentTiering an unnecessary expense.

**Option C** involves transitioning to S3 Standard-IA, which is designed for data accessed less frequently but
still requires rapid retrieval. Given that the backup files will likely not be accessed after the first month, using
Standard-IA is more expensive than Glacier Deep Archive because Standard-IA has higher storage costs.

**Option D** uses S3 One Zone-IA, which is even less suitable than Standard-IA, although cheaper than StandardIA. It stores data in a single Availability Zone, making it cheaper, but it's inherently less durable than
Standard-IA, Standard or Glacier. Because these are backup files the durability provided by the storage is of
utmost importance, and a loss of data due to a single availability zone failure is unacceptable. Moreover, it's
more expensive than Glacier Deep Archive.

Therefore, transitioning to Glacier Deep Archive through a Lifecycle policy offers the best combination of
cost-effectiveness and long-term archival needs when data will not be accessed for the foreseeable future
after the first month.
Relevant documentation:
S3 Glacier Deep Archive: Describes the features and cost benefits of S3 Glacier Deep Archive.
S3 Lifecycle Management: Explains how to automate transitions between storage classes.

---

## Question 24

**Answer:** **B**

**Explanation:**

The correct answer is B. Use Cost Explorer's granular filtering feature to perform an in-depth analysis of
EC2 costs based on instance types.

Here's why:
Cost Explorer is designed specifically for cost analysis and provides a user-friendly interface for exploring
AWS costs. It allows for granular filtering by service (EC2), usage type (instance type), and time range,
enabling the solutions architect to easily compare EC2 costs for the last two months and identify the
instances that have experienced unwanted vertical scaling. Cost Explorer's built-in charting capabilities make
it straightforward to visualize these cost trends without requiring additional tools or setup. The "group by"
feature within Cost Explorer lets users easily aggregate costs by instance type. This allows for direct
identification of cost increases associated with specific instance types, streamlining the analysis. The goal is
to analyze past costs, and Cost Explorer is built to efficiently do just that.

**Option A**, AWS Budgets, is primarily for setting cost thresholds and receiving alerts when those thresholds
are exceeded. While it can provide cost information, it's not designed for in-depth historical analysis and
doesn't offer the granular filtering capabilities needed to pinpoint specific instance type cost increases as
readily as Cost Explorer.

**Option C**, the AWS Billing and Cost Management dashboard, provides a high-level overview of costs but lacks
the granular filtering and analysis features available in Cost Explorer. It would require more manual effort to
isolate and analyze the cost increase associated with specific EC2 instance types.

**Option D**, AWS Cost and Usage Reports (CUR) with Amazon QuickSight, is powerful but involves significantly
more operational overhead. It requires configuring and delivering the CUR to an S3 bucket, then setting up
QuickSight with S3 as a data source, and finally creating the interactive graph. This process is much more
complex and time-consuming compared to using Cost Explorer's built-in features. While CUR provides
comprehensive data, for a focused analysis as described in the question, Cost Explorer is far more efficient.

Therefore, Cost Explorer provides the least operational overhead and is the most efficient way to achieve the
required in-depth analysis of EC2 costs based on instance types.
Here's an authoritative link for further research:
AWS Cost Explorer

---

## Question 25

**Answer:** **D**

**Explanation:**

The best solution to improve scalability and minimize configuration effort when dealing with high volumes of
data between a Lambda function receiving data and an Aurora PostgreSQL database is to use an Amazon SQS
queue to decouple the two functions.

Here's why:
Decoupling with SQS: SQS acts as a buffer between the data receiving Lambda function and the database
loading Lambda function. The first Lambda function places messages containing the information into the SQS
queue. The second Lambda function retrieves messages from the queue and loads the data into Aurora. This
decoupling allows each function to scale independently based on its specific needs.
Scalability: SQS provides virtually unlimited scalability. It can handle large volumes of messages, allowing
the system to absorb bursts of data without overwhelming the database. The database loading Lambda
function can then process the messages at a rate the database can handle, preventing overload.
Minimized Configuration Effort: SQS is a managed service, which reduces the operational burden. Setting up
the queue and integrating it with the Lambda functions requires minimal configuration.
Resilience: SQS provides message durability. If the database loading Lambda function fails, the messages
remain in the queue until they are successfully processed, ensuring data is not lost. This contrasts with SNS,
which is better suited for fan-out scenarios and doesn't guarantee message delivery if no subscribers are
available.

Why other options are less suitable:

**A:** Refactoring to EC2 and Tomcat increases operational complexity. EC2 requires managing servers,
including patching, scaling, and ensuring high availability. This defeats the goal of minimizing configuration
effort.

**B:** Changing to DynamoDB with DAX is a significant architectural change and involves substantial code
modification. DAX is for DynamoDB, not Aurora PostgreSQL.

**C:** Using SNS doesn't provide the queuing and buffering capabilities of SQS. If the database loading Lambda
function is unavailable, messages sent via SNS might be lost, potentially impacting data consistency. SNS is
not suitable for reliable, asynchronous processing.

In summary, using SQS for decoupling provides the best combination of scalability, minimized configuration,
and reliability for this use case.
Relevant Documentation:

Amazon SQS: https://aws.amazon.com/sqs/

AWS Lambda: https://aws.amazon.com/lambda/

Amazon Aurora: https://aws.amazon.com/rds/aurora/

---

## Question 26

**Answer:** **A**

**Explanation:**

The correct answer is A, turning on AWS Config with the appropriate rules. Here's why:
AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS
resources. It continuously monitors and records your AWS resource configurations, allowing you to automate
the evaluation of recorded configurations against desired configurations. In this scenario, the goal is to ensure
S3 bucket configurations remain authorized, which directly aligns with Config's capabilities. You can define
AWS Config rules that specify the desired state of your S3 buckets (e.g., encryption enabled, public access
blocked). If a bucket drifts from this desired state, Config will flag it as non-compliant. This makes it perfect
for detecting unauthorized configuration changes.

**Option B**, AWS Trusted Advisor, primarily provides recommendations on cost optimization, performance,
security, fault tolerance, and service limits. While it offers security checks, it is more high-level and may not
provide the detailed configuration change detection needed for S3 buckets specifically.

**Option C**, Amazon Inspector, focuses on security vulnerabilities and deviations from security best practices
within your EC2 instances and container images. It's not designed to monitor and audit configuration changes
to S3 buckets.

**Option D**, turning on Amazon S3 server access logging and configuring Amazon EventBridge (CloudWatch
Events), would provide logs of who accessed the bucket. EventBridge could trigger alerts on specific events.
However, it requires significant custom parsing and rule building to determine if the configuration of the
bucket itself has changed (e.g., a change to bucket policy or encryption). This is a much more complex and
less direct method than using AWS Config. Config provides managed rules specifically designed for
configuration compliance.

In summary, AWS Config is the most suitable service because it's designed to continuously monitor and
evaluate the configurations of AWS resources, allowing you to proactively identify and remediate
unauthorized configuration changes in S3 buckets.

---

## Question 27

**Answer:** **A**

**Explanation:**

The best solution is A because it leverages CloudWatch's built-in dashboard sharing feature, providing the
most direct and least privileged access for the product manager without requiring an AWS account.
CloudWatch's sharing feature allows you to create a shareable link to the dashboard that can be accessed
without AWS credentials. This satisfies the requirement of allowing the product manager to view the
dashboard.

**Option B** is less ideal. While it technically grants the product manager access, creating an IAM user solely for
dashboard viewing is an over-provisioning of access. It also necessitates managing another AWS user and
distributing credentials, increasing administrative overhead and security risks. The product manager would
gain access to the entire AWS console with read-only access to CloudWatch, exceeding the least privilege
principle.

**Option C** is also unsuitable. The ViewOnlyAccess AWS managed policy is overly broad and doesn't specifically
target CloudWatch. Sharing credentials among employees introduces significant security risks and hinders
accountability. Sharing an IAM user's credentials violates AWS best practices and security guidelines.

**Option D** is the least efficient and most complex option. Deploying a bastion server just to view a CloudWatch
dashboard is excessive and unnecessary. It involves managing infrastructure, configuring security groups, and
sharing RDP credentials, adding significant operational overhead. It's also not the least privileged approach.

Therefore, option A directly addresses the requirement by using CloudWatch's built-in feature, adhering to
the principle of least privilege, and minimizing operational overhead.
Relevant Documentation:
Sharing CloudWatch dashboards

---

## Question 28

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's a detailed justification:
The requirement is to integrate an existing on-premises Microsoft Active Directory (AD) with AWS SSO to
provide centralized single sign-on across multiple AWS accounts managed by AWS Organizations. To achieve
this while maintaining user and group management within the on-premises AD, a trust relationship must be
established between the on-premises AD and AWS.
AWS SSO doesn't directly integrate with self-managed AD. Instead, AWS Directory Service for Microsoft
Active Directory (AWS Managed Microsoft AD) acts as an intermediary. AWS Managed Microsoft AD is a fully
managed service allowing you to run actual Active Directory in AWS. To link your on-premises AD, you need to
establish a trust relationship.
A two-way forest trust is the appropriate type of trust when you need users in both the on-premises AD forest
and the AWS Managed Microsoft AD forest to authenticate to resources in the other forest. In this scenario,
on-premises users need to access AWS resources, and potentially, AWS-based users (if you later create
them) might need to access on-premises resources. Therefore, a two-way trust ensures seamless
authentication in both directions. AWS SSO leverages this trust relationship via AWS Managed Microsoft AD
to authenticate users from the on-premises AD. The AWS SSO console is used to enable and configure SSO
across the AWS Organization.

**Option A** is incorrect because a one-way trust is insufficient. A one-way trust only allows authentication in one
direction, failing to meet the requirement where AWS SSO needs to authenticate users against the onpremises AD.

**Option C** is incorrect because while creating a two-way trust relationship using AWS Directory Service is
necessary, it doesn't by itself enable SSO. AWS SSO is the service required to centralize and manage single
sign-on to multiple AWS accounts.

**Option D** is incorrect because deploying an on-premises IdP adds unnecessary complexity. AWS SSO is
designed to integrate with existing identity providers, especially Microsoft Active Directory through AWS
Directory Service. Using a third-party IdP on-premises duplicates functionality that AWS SSO already
provides and increases the management overhead. Moreover, AWS SSO has direct integration capabilities
with AWS Managed Microsoft AD, and no further IdP on-premises is needed.

In summary, creating a two-way forest trust between the on-premises Active Directory and AWS Directory
Service for Microsoft Active Directory, then enabling and configuring AWS SSO, allows the organization to
centralize SSO while maintaining user management in the on-premises environment.

---

## Question 29

**Answer:** **A**

**Explanation:**

The correct answer is A. Here's why:
UDP Requirement: The VoIP service relies on UDP connections. Application Load Balancers (ALB) only
support HTTP and HTTPS protocols (TCP). Network Load Balancers (NLB) are designed to handle TCP, UDP,
and TLS traffic. Therefore, NLB is the appropriate choice for this scenario.
Lowest Latency Routing and Automated Failover: AWS Global Accelerator leverages the AWS global
network to route traffic to the optimal endpoint (closest Region) based on user location and network
conditions, minimizing latency. It also provides automatic failover; if a Region becomes unavailable, Global
Accelerator will automatically redirect traffic to a healthy Region.
Integration with Auto Scaling Groups: Both NLB and ALB can be integrated with Auto Scaling groups. By
associating the target group with the Auto Scaling group, the load balancer automatically registers and
deregisters instances as they are launched or terminated by the Auto Scaling group.
Route 53 Alternatives: While Route 53 latency-based routing can provide similar functionality, Global
Accelerator offers performance advantages due to its use of the AWS global network and intelligent traffic
routing. CloudFront is typically used for caching static content, not for routing UDP-based traffic based on
latency.
Why other options are incorrect:

**Option B**: ALB is unsuitable because it does not support UDP.

**Option C**: Route 53 latency records do not provide the same level of optimized routing as Global Accelerator.

Using CloudFront as a distribution for this purpose is unnecessary and not the best practice.

**Option D**: ALB is unsuitable because it does not support UDP. Route 53 weighted records are used to
distribute traffic based on predefined weights, not real-time latency measurements.
Supporting Links:

AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
Network Load Balancer: https://aws.amazon.com/elasticloadbalancing/network-load-balancer/
Application Load Balancer: https://aws.amazon.com/elasticloadbalancing/application-load-balancer/

Amazon Route 53: https://aws.amazon.com/route53/

---

## Question 30

**Answer:** **C**

**Explanation:**

The most cost-effective solution is C. Create a snapshot when tests are completed. Terminate the DB
instance and restore the snapshot when required.

Here's why:
Cost Optimization: The primary goal is cost reduction. Terminating the DB instance when it's not needed
completely eliminates the compute costs associated with running the instance. AWS charges for RDS
instances per hour/day they are running.
Preserving Data: Snapshots preserve the database state at the end of the tests. This ensures no data loss,
and the team can easily restore the database to its previous state.
Compute & Memory Retention: Restoring from a snapshot creates a new DB instance with the same
specifications (compute, memory) as the original. This preserves the performance characteristics required
during the test.
Alternative A (Stop/Start): Stopping the instance saves on compute costs, but you still incur costs for
storage (database volume) which won't be as significant as the cost of a running instance, but there is a cost.
Stopping and starting instances can take a significant amount of time as well.
Alternative B (Auto Scaling): Auto Scaling doesn't apply to RDS instance types. Auto Scaling is for
automatically scaling the number of EC2 instances in your application, not for vertically scaling an RDS
instance.
Alternative D (Modify Instance): Modifying the instance size involves downtime and does not completely
eliminate costs. While it reduces costs, it doesn't achieve the same level of savings as terminating the
instance.
Performance Insights: Performance Insights data is associated with the DB instance. Terminating and
recreating the instance will lead to losing data that the testing team may want to review later on. The team
can export the insights before terminating the instance.

Restore Time: While restoring from a snapshot does take time, it's a reasonable trade-off for significant cost
savings, given the monthly testing frequency.

Therefore, creating a snapshot, terminating the instance, and restoring when needed provides the optimal
balance between cost savings, data preservation, and performance retention.
Supporting Links:

Amazon RDS Pricing: https://aws.amazon.com/rds/pricing/
Creating a DB Snapshot:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html
Restoring from a DB Snapshot:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html

---

## Question 31

**Answer:** **A**

**Explanation:**

The correct answer is A because AWS Config provides a managed service to assess, audit, and evaluate the
configurations of your AWS resources. With AWS Config, you can define rules that check if your resources are
compliant with desired configurations, including the presence of specific tags. When a resource is found to be
non-compliant (missing tags in this case), AWS Config can flag it, allowing for easy identification and
remediation. This minimizes the operational burden since AWS Config continuously monitors resource
configurations without requiring custom code or manual checks.

**Option B** is incorrect because Cost Explorer is primarily used for cost management and visualization and does
not provide a built-in mechanism for identifying resources without proper tags. While Cost Explorer can utilize
tags for cost allocation, it won't proactively alert you to missing tags or enforce their existence. Tagging
resources manually is a tedious and error-prone approach for an environment where continuous monitoring is
required.
Options C and D involve writing custom API calls and managing infrastructure to execute them, either on an
EC2 instance or through Lambda. While technically feasible, these approaches introduce operational
overhead associated with code development, deployment, maintenance, and scaling. AWS Config offers a
managed and declarative way to achieve the same goal, thus reducing complexity and operational effort.
Lambda adds unnecessary complexity for this task as AWS Config Rules can be executed and maintained
without code.

In summary, AWS Config's pre-built rules, continuous monitoring capabilities, and managed service nature
make it the optimal solution for ensuring resources are properly tagged while minimizing effort and
operational overhead.

Refer to the following AWS documentation for further understanding:

AWS Config: https://aws.amazon.com/config/

AWS Config Rules: https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html

---

## Question 32

**Answer:** **B**

**Explanation:**

The most cost-effective solution for hosting a static website composed of HTML, CSS, JavaScript, and images
is to use Amazon S3. S3 offers low storage costs and efficient content delivery through its integration with
Amazon CloudFront.

**Option A**, containerizing the website and hosting it on AWS Fargate, involves running a container
orchestration service, which is overkill for static content. Fargate is designed for applications that require
compute resources, introducing unnecessary complexity and cost.

**Option C**, deploying a web server on an Amazon EC2 instance, incurs costs for the EC2 instance itself,
including compute, storage, and potentially bandwidth. Maintaining and managing the EC2 instance also adds
operational overhead. While EC2 provides flexibility, it's less cost-effective than S3 for static content.

**Option D**, configuring an Application Load Balancer with an AWS Lambda target using Express.js, is
unnecessarily complex and expensive. This setup is suitable for dynamic content generation and serverless
applications. Using Lambda for serving static files is inefficient and introduces additional latency. An
Application Load Balancer is not necessary for static content delivery.
S3's static website hosting feature allows you to serve the files directly from an S3 bucket, eliminating the
need for a web server. Furthermore, you can leverage CloudFront to cache the website content globally,
reducing latency and further decreasing costs. S3 buckets also provide scalability and high availability by
default. S3's pay-as-you-go pricing model makes it a very cost-effective option for this use case.

Therefore, the low cost, inherent scalability, and ease of use of Amazon S3 make it the most cost-effective
solution for hosting a simple static website.

---

## Question 33

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the best solution and why the others are less suitable:

**Option C**: Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to
remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB.
Other applications can consume the transactions data off the Kinesis data stream.
This is the optimal choice because it leverages a combination of AWS services that are specifically designed
for real-time data processing, transformation, and sharing.

1. Real-time Ingestion: Amazon Kinesis Data Streams is designed for ingesting and processing highvolume, real-time data streams. It is perfectly suited for capturing millions of financial transactions.

2. Data Transformation: The Lambda function provides a serverless and scalable way to remove
sensitive data from each transaction as it flows through the Kinesis stream. This ensures compliance
and data security before storage and sharing.

3. Low-Latency Storage: DynamoDB is a NoSQL database known for its low-latency read and write
capabilities, making it ideal for storing the processed transactions and enabling fast retrieval.

4. Data Sharing: Other applications can subscribe to the Kinesis Data Stream and receive the
transformed transactions data in near real-time. This provides a decoupled and scalable mechanism
for sharing data with other internal applications.
Why other options are less optimal:

**Option A**: DynamoDB Streams are primarily intended for auditing or replicating data changes within
DynamoDB itself, and not optimized for sharing data with a multitude of other applications in near real-time.
Removing sensitive data using DynamoDB rules would happen after the transaction is already stored, possibly
violating compliance requirements.

**Option B**: Kinesis Data Firehose is designed for loading data into data lakes or analytics services, and doesn't
readily support direct consumption of data by other real-time applications. Using S3 as a central point can
create latency.

**Option D**: Batching and storing in S3, processing with Lambda, and then storing in DynamoDB introduces
significant latency. This approach isn't near real-time. Lambda processing S3 objects is more suited for larger
files and infrequent updates, unlike this requirement.
In Conclusion: **Option C** provides a scalable, near-real-time, secure, and decoupled solution for processing
financial transactions and sharing them with other applications, aligning perfectly with the requirements.

---

## Question 34

**Answer:** **B**

**Explanation:**

The correct answer is B: Use AWS Config to track configuration changes and AWS CloudTrail to record API
calls. This is because AWS Config and AWS CloudTrail are designed for specific and distinct purposes related
to compliance, governance, security, and auditing in the AWS cloud.
AWS Config continuously monitors and records AWS resource configurations, enabling you to automate the
evaluation of recorded configurations against desired configurations. It provides a detailed view of the
configuration of AWS resources, allowing you to assess, audit, and evaluate the configurations of your
resources. AWS Config Rules can automatically check whether resources comply with defined standards. This
is essential for tracking configuration changes. You can explore more about AWS Config at
https://aws.amazon.com/config/.
AWS CloudTrail, on the other hand, tracks API calls made to AWS resources. It logs account activity, including
actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS
services. CloudTrail provides an event history of your AWS account activity, including who took what action,
the resources that were acted upon, and when the event occurred. This is crucial for security analysis,
resource change tracking, and compliance auditing. Comprehensive information about AWS CloudTrail can be
found at https://aws.amazon.com/cloudtrail/.

**Option A** is incorrect because it reverses the roles of CloudTrail and Config. CloudTrail is not designed to track
configuration changes directly, and Config is not designed to record API calls. Options C and D are incorrect
as Amazon CloudWatch is primarily a monitoring service for metrics and logs, rather than a configuration
tracking or API call recording service. While CloudWatch can be used to monitor logs generated by CloudTrail,
it isn't a substitute for CloudTrail itself for API call logging. Therefore, AWS Config for configuration changes
and AWS CloudTrail for API calls provides a robust solution for compliance, governance, auditing, and
security as required by the company.

---

## Question 35

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the correct answer:
The problem requires protection against large-scale DDoS attacks for a public-facing web application. Let's
analyze each option:

**A.** Enable Amazon GuardDuty on the account: GuardDuty is a threat detection service that monitors for
malicious activity and unauthorized behavior. While it's good for security, it's not specifically designed for
DDoS protection. It primarily detects threats after they've potentially impacted the application. It won't
automatically mitigate large-scale DDoS attacks in real-time.

**B.** Enable Amazon Inspector on the EC2 instances: Inspector is a vulnerability assessment service that
analyzes the security posture of EC2 instances. It identifies software vulnerabilities and unintended network
configurations. While it's useful for general security, it doesn't directly address large-scale DDoS attacks at
the network layer.

**C.** Enable AWS Shield and assign Amazon Route 53 to it: AWS Shield Standard is automatically enabled for
all AWS customers and provides basic DDoS protection against common, frequently occurring network and
transport layer DDoS attacks. While it's a good starting point, it doesn't offer the customized protection and
advanced mitigation techniques required for large-scale, sophisticated DDoS attacks. Assigning Route 53
would protect the DNS layer, but the question focuses on the web application behind the ELB.

**D.** Enable AWS Shield Advanced and assign the ELB to it: AWS Shield Advanced provides enhanced DDoS
protection tailored to your specific application. By assigning the ELB to Shield Advanced, you get 24/7 access
to the AWS DDoS Response Team (DRT), customized protection rules, and cost protection during DDoS
events. Shield Advanced can detect and automatically mitigate sophisticated DDoS attacks, ensuring the
availability of your web application. Since the application is behind an ELB, protecting the ELB directly
protects the underlying EC2 instances. This is the only option that provides comprehensive DDoS protection
for the described architecture.

In summary, AWS Shield Advanced, specifically protecting the ELB, provides the best solution to detect and
mitigate large-scale DDoS attacks targeted at the public-facing web application.

---

## Question 36

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:

**B.** Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure
replication between the S3 buckets. Configure the application to use the KMS key with client-side
encryption.
This solution meets all the requirements with the least operational overhead:

1. Customer Managed Key: It utilizes a customer managed key, fulfilling the requirement to use a KMS
key that the company controls. Critically, it uses a multi-Region KMS key.

2. Same Key in Both Regions: A multi-Region key ensures that the same logical key is available in both
Regions for encryption and decryption. This is crucial for seamless data access regardless of which
Region the data resides in.

3. Data and Key Stored in Each Region: Multi-Region keys guarantee the key material exists within
both specified Regions, addressing the regional storage requirement.

4. Encryption with KMS Key: The solution specifies client-side encryption. This means the application
encrypts the data before sending it to S3 using the multi-Region KMS key. This ensures encryption at
rest using the KMS key, as the data is already encrypted when stored in S3.

5. Least Operational Overhead: This approach involves a relatively straightforward setup. The
application manages encryption/decryption, which might add some development complexity initially,
but it simplifies key management significantly compared to server-side encryption and key
replication.
Let's examine why the other options are less suitable:
A & C: These options utilize SSE-S3. SSE-S3 uses encryption keys managed by AWS, failing the requirement
to use a customer managed KMS key.

**D:** This solution proposes SSE-KMS with a KMS key. While it uses a customer managed key, it does not use a
multi-Region key. Without a multi-Region key, replicating data between Regions encrypted with KMS
becomes complex. You'd have to either:
Change the key used during replication, which adds significant operational overhead.
Re-encrypt the data after replication, again adding complexity.Furthermore, even if the same key was
manually replicated to two different regions, the key ID would be different, and it would be treated as two
distinct keys.

In summary, option B provides the most efficient and manageable way to meet all the requirements. It

leverages the benefits of a multi-Region KMS key for seamless data encryption and decryption across both
AWS Regions with minimal operational burden.
Supporting Documentation:

AWS KMS Multi-Region Keys: https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keysoverview.html

Amazon S3 Encryption: https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html

---

## Question 37

**Answer:** **B**

**Explanation:**

The correct answer is B. Here's why:

**B.** Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager
Session Manager to establish a remote SSH session.
This solution is the most aligned with the prompt's requirements of security, repeatability, native AWS
services, and minimal operational overhead. AWS Systems Manager (SSM) Session Manager allows you to
securely manage EC2 instances without needing to open inbound ports (like SSH 22) or manage SSH keys. By
using IAM roles, you can precisely define the permissions granted to SSM, ensuring only authorized users and
instances can initiate sessions. This approach minimizes the attack surface and reduces the risk of
unauthorized access. SSM Session Manager also integrates with AWS CloudTrail for auditing purposes,
providing a clear record of all session activities. Furthermore, it leverages the AWS global infrastructure and
eliminates the need to manage bastion hosts or VPNs, thus minimizing operational overhead. The "repeatable
process" is achieved by consistently applying the same IAM roles across all instances.
Here's a breakdown of why the other options are less ideal:

**A.** Use the EC2 serial console to directly access the terminal interface of each instance for administration.
While useful for troubleshooting boot issues, the serial console isn't intended for routine administration. It
lacks the auditability and security features of SSM Session Manager and requires direct AWS Management
Console access. It also does not scale well for a large number of instances.

**C.** Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host
in a public subnet to provide a tunnel for administration of each instance. This solution introduces significant
operational overhead. It requires managing SSH keys, securing the bastion host, and configuring routing
rules. Maintaining the security and availability of a bastion host adds complexity and ongoing management.
SSH keys also present a security risk if compromised.

**D.** Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises
machines to connect directly to the instances by using SSH keys across the VPN tunnel. This introduces
reliance on on-premises infrastructure and the VPN connection. It increases complexity, maintenance
overhead, and network latency. Additionally, managing SSH keys and distributing them securely to
administrators becomes an operational burden and security risk.

In summary, **Option B** leverages native AWS services (IAM and SSM) to provide secure, auditable, and
centrally managed access to EC2 instances with minimal operational burden, which is a best practice
according to the AWS Well-Architected Framework.
Supporting Links:

AWS Systems Manager Session Manager: https://docs.aws.amazon.com/systemsmanager/latest/userguide/session-manager.html

AWS IAM Roles: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html

AWS Well-Architected Framework: https://aws.amazon.com/architecture/well-architected/

---

## Question 38

**Answer:** **C**

**Explanation:**

Here's a detailed justification for why option C is the most cost-effective solution for reducing latency for a
static website hosted on S3 using Route 53, while dealing with increased global demand:

**Option C**, adding an Amazon CloudFront distribution in front of the S3 bucket and updating Route 53 records,
leverages the power of Content Delivery Networks (CDNs). CloudFront caches the static website content at
edge locations around the world. When a user requests content, CloudFront serves it from the nearest edge
location, significantly reducing latency compared to fetching it from the origin S3 bucket, which might be
geographically distant. This caching mechanism distributes the load and minimizes the impact of increased
global demand on the origin server. CloudFront’s pay-as-you-go pricing model makes it cost-effective as you
only pay for the data transferred and requests served.

**Option A** is less cost-effective. Replicating the S3 bucket to all AWS Regions is an overkill for a static website.
Moreover, managing replication across all regions and configuring Route 53 geolocation routing can be
complex and expensive without a significant value add. While geolocation routing would direct users to the
closest replica, the replication costs would likely be excessive.

**Option B**, using AWS Global Accelerator, is more appropriate for dynamic content or applications that require
TCP or UDP connections. While it could improve performance, it's designed for accelerating dynamic content
and is generally more expensive than CloudFront for static content. Global Accelerator also introduces

complexity in terms of provisioning and managing accelerators.

**Option D**, enabling S3 Transfer Acceleration, improves the speed of uploads and downloads to S3 using
optimized network paths. While beneficial for data transfer to S3, it does not directly address the need to
reduce latency for users accessing the static website content. It speeds up transfers to S3, but users still
retrieve data directly from the bucket unless a CDN is used. Therefore, it is not suitable.

In summary, CloudFront offers the most efficient and cost-effective solution for caching static content and
delivering it to users with low latency globally, perfectly aligning with the requirements of the question.

---

## Question 39

**Answer:** **A**

**Explanation:**

The question highlights slow insert operations in an Amazon RDS for MySQL database due to database
storage performance limitations. General Purpose SSD (gp2/gp3) storage, while suitable for many workloads,
might not be sufficient for high-write workloads with millions of daily updates and large tables. **Option A**,
changing the storage type to Provisioned IOPS SSD (io1/io2), directly addresses the performance bottleneck.
Provisioned IOPS SSD allows you to specify a consistent IOPS (Input/Output Operations Per Second) rate,
guaranteeing a predictable performance level. This is crucial for applications requiring low latency and high
throughput, especially those experiencing latency due to storage I/O.

**Option B**, changing the DB instance to a memory-optimized instance class, primarily addresses CPU and
memory limitations, not storage performance. While more memory can improve caching, it doesn't solve
underlying storage bottlenecks. **Option C**, changing to a burstable performance instance class, is unsuitable
because burstable instances rely on credit accumulation and can experience performance degradation when
credits are exhausted under sustained high workloads like millions of daily updates. **Option D**, enabling MultiAZ RDS read replicas, improves read scalability and high availability but doesn't address the write
performance issues on the primary database instance causing the slow insert operations. Replication adds
overhead to the primary instance.

Therefore, switching to Provisioned IOPS SSD is the optimal solution as it provides consistent and guaranteed
I/O performance, mitigating the latency issues related to storage operations. For further reading:

Amazon RDS Storage Types:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html
Provisioned IOPS SSD (io1/io2): https://aws.amazon.com/rds/pricing/ (Refer to the storage section)

---

## Question 40

**Answer:** **A**

**Explanation:**

The most operationally efficient solution is A because it leverages fully managed services that require
minimal infrastructure management and are cost-effective.
Why A is the best solution:
Kinesis Data Firehose: It is a fully managed service designed for streaming data ingestion into destinations
like S3. It handles scaling, buffering, and data transformation (if needed) automatically, removing the
operational overhead of managing servers or clusters.
Amazon S3: It provides highly durable and scalable storage. The pay-as-you-go model and low cost makes it
cost-effective.
S3 Lifecycle Management: This feature automates the process of transitioning data between different
storage tiers. Configuring a lifecycle policy to move data to Glacier after 14 days automatically handles
archiving, reducing storage costs for older data without manual intervention.

Why other options are less suitable:

**B:** Involves manually managing EC2 instances and load balancers, which increases operational overhead.
Scripting the data storage process also requires manual configuration and maintenance.

**C:** Amazon OpenSearch Service (successor to Elasticsearch Service) is not the best choice for long-term
archival storage, as it is more suited for search and analysis of recent data. OpenSearch Service can be
expensive.

**D:** SQS is not designed for storing large amounts of data long-term. Consumers would need to actively
process the data as it arrives and manage the archival process. This approach introduces complexity and
potential points of failure and it does not allow the full 1TB of daily alerts to be retained in SQS due to the

limits of its data retention policies. Also, SQS's limit message size of 256KB makes it unsuitable for 2KB
status alerts if thousands of edge devices are sending them.
Supporting Concepts:
Serverless Computing: Kinesis Data Firehose and S3 are serverless services, which minimize the operational
burden.
Data Lifecycle Management: S3 Lifecycle Policies are designed to automate data tiering based on age or
other criteria, optimizing costs and storage management.
Cost Optimization: By using S3 Glacier for long-term archival, the solution minimizes storage costs.

---

## Question 41

**Answer:** **B**

**Explanation:**

The most efficient solution to improve application performance with minimal operational overhead is to use
Amazon AppFlow for data transfer and S3 event notifications with SNS.

**Option B** is the best because:
AppFlow for Data Transfer: AppFlow directly transfers data from SaaS applications to S3 without the need
for EC2 instances. This eliminates the EC2 instance bottleneck and reduces the operational burden of
managing those instances. AppFlow is specifically designed for SaaS data integration and automates much of
the process. https://aws.amazon.com/appflow/
S3 Event Notifications & SNS: S3 event notifications trigger an SNS topic when an upload completes. This is
a serverless and highly scalable approach to notify users without burdening the data transfer process. SNS
provides a simple and reliable way to publish messages to subscribers. https://aws.amazon.com/sns/

Why other options are not optimal:

**Option A** (Auto Scaling): Scaling EC2 instances might improve throughput, but it doesn't address the
fundamental inefficiency of using EC2 for simple data transfer from SaaS sources. It also increases
operational complexity.

**Option C** (EventBridge): EventBridge can handle events, but using it directly for SaaS data integration isn't its
primary purpose. It's better suited for routing events within AWS services, not directly interfacing with
external SaaS applications. AppFlow is purpose-built for SaaS integrations. Furthermore, using EventBridge
as a target to directly write into S3 is not a best practice.

**Option D** (Docker/ECS): Containerizing the application doesn't fundamentally change the data transfer
bottleneck. EC2 (or ECS) is still involved in receiving and uploading data. Also, CloudWatch Container Insights
is for monitoring container performance, not for triggering notifications based on S3 uploads.
In conclusion, the solution involving AppFlow and S3 event notifications/SNS offers the most direct and
efficient way to address the slow application performance while minimizing operational overhead. This aligns
with the principle of using managed services to reduce manual intervention and improve scalability.

---

## Question 42

**Answer:** **C**

**Explanation:**

The question is focused on minimizing Regional data transfer costs for EC2 instances downloading from and
uploading to S3 through a NAT gateway.

**Option C**: Deploy a gateway VPC endpoint for Amazon S3 is the most cost-effective solution. Gateway
endpoints provide connectivity to S3 without using the internet gateway or NAT gateway. This avoids data
transfer charges associated with routing traffic through the NAT gateway. Data transferred between EC2
instances in the VPC and S3 via the gateway endpoint stays within the AWS network, eliminating Regional
data transfer charges.

**Option A**: Launch the NAT gateway in each Availability Zone does not avoid Regional data transfer charges,
although it improves availability. Data still traverses the NAT gateway, and the associated costs remain. It
primarily prevents a single NAT gateway failure from impacting all AZs.

**Option B**: Replace the NAT gateway with a NAT instance offers no cost benefit and introduces operational
overhead. NAT instances are not managed by AWS and require manual configuration, patching, and scaling.
Moreover, data transfer charges still apply.

**Option D**: Provision an EC2 Dedicated Host to run the EC2 instances is irrelevant to the problem. Dedicated
Hosts provide hardware-level isolation but do not affect data transfer charges associated with S3 access.

Therefore, leveraging a gateway VPC endpoint is the most efficient way to eliminate Regional data transfer

charges for S3 access from EC2 instances within a VPC.
Supporting resources:
VPC Endpoints
NAT Gateways
Understanding AWS Data Transfer Costs

---

## Question 43

**Answer:** **B**

**Explanation:**

The best solution is B. Establish a new AWS Direct Connect connection and direct backup traffic through
this new connection.

Here's why:
Bandwidth Bottleneck: The core issue is limited internet bandwidth affecting users due to large data backups
to S3.
AWS Direct Connect: Direct Connect establishes a dedicated, private network connection between your onpremises infrastructure and AWS. This bypasses the public internet, providing consistent and often higher
bandwidth, lower latency, and more predictable network performance.
Minimal Impact on Internet: By routing the backup traffic through Direct Connect, it won't compete for
bandwidth with other internet-bound traffic, alleviating the strain on internal users' connectivity.
Timely Backups: The dedicated connection ensures backups can complete efficiently and on time, as it's not
subject to internet congestion.
Long-term Solution: Direct Connect is a durable infrastructure solution, ideal for continuous data transfer
needs.
Why other options are less ideal:

**A.** AWS VPN and VPC Gateway Endpoint: While VPN provides secure connectivity, it still relies on the
existing internet bandwidth. VPC gateway endpoints allow access to S3 from within a VPC without using
public IPs, but the data still travels over the internet to the on-premises network. It does not solve the
bandwidth issue.

**C.** AWS Snowball: Snowball is useful for initial large-scale data migrations. Using it daily for backups is
impractical, expensive, and introduces significant delays in data availability.

**D.** Support Ticket for S3 Limits: S3 service limits are designed for the overall health and availability of the
service, not for solving bandwidth problems. Requesting their removal is unlikely to be successful and isn't a
proper architectural solution.

---

## Question 44

**Answer:** **AB**

**Explanation:**

The correct answer is AB.
Justification:
The primary requirement is to protect the data from accidental deletion. Two features in S3 directly address
this: Versioning and MFA Delete.

**A.** Enable versioning on the S3 bucket: S3 Versioning ensures that every version of an object is preserved,
even if it's deleted or overwritten. When an object is deleted, it doesn't truly disappear; instead, a delete
marker is created. The previous version remains accessible, allowing for easy recovery from accidental
deletions. This is crucial for data protection.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html

**B.** Enable MFA Delete on the S3 bucket: MFA Delete adds an extra layer of security to prevent accidental or
malicious deletions. When MFA Delete is enabled, deleting a versioned object or permanently deleting the S3
bucket itself requires multi-factor authentication. This significantly reduces the risk of unauthorized or
unintentional data loss. It enforces the principle of "something you know" (password) and "something you
have" (MFA device), strengthening the deletion process.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html#MultiFactorAuthenticationDelete
Let's examine why the other options are incorrect:

**C.** Create a bucket policy on the S3 bucket: While bucket policies control access to the bucket, they don't
prevent accidental deletions. You can restrict who can delete objects, but if someone with the delete
permission makes a mistake, the policy won't prevent it.

**D.** Enable default encryption on the S3 bucket: Default encryption protects data at rest, addressing security
and compliance concerns related to data confidentiality. However, encryption does not prevent accidental
deletion.

**E.** Create a lifecycle policy for the objects in the S3 bucket: Lifecycle policies manage the object lifecycle,
automatically transitioning them to cheaper storage classes or deleting them after a specified period. If
misconfigured, a lifecycle policy could actually cause accidental deletions. It's for automating data

archival/deletion based on pre-defined rules, not for general protection against accidental deletion.

---

## Question 45

**Answer:** **BE**

**Explanation:**

The correct answer is BE. Here's why:

**B.** Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.
This is a crucial step for building a reliable and resilient data ingestion pipeline. When an SNS topic is
connected to an SQS queue via subscription, messages published to the SNS topic are automatically queued
in the SQS queue. SQS provides a mechanism to buffer the messages, ensuring that they are not lost even if
the Lambda function is temporarily unavailable due to network issues or other transient failures. This
buffering helps decoupling the data producers (SNS) from the data consumers (Lambda).

**E.** Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.
By having the Lambda function consume messages from the SQS queue, the function becomes more faulttolerant. If a processing failure occurs during the initial Lambda execution (due to network issue), the
message remains in the SQS queue. SQS can be configured to automatically retry the message delivery to the
Lambda function after a visibility timeout. This ensures that the Lambda function eventually processes all
messages, providing at-least-once delivery semantics. The queue acts as a buffer and retry mechanism,
guaranteeing data ingestion despite intermittent
failures.https://docs.aws.amazon.com/lambda/latest/dg/services-sqs.html
Why other options are not suitable:

**A.** Deploy the Lambda function in multiple Availability Zones. While deploying Lambda in multiple AZs
improves availability, it doesn't address message loss caused by transient network issues during the initial
invocation. Lambda inherently runs in multiple AZs managed by AWS.

**C.** Increase the CPU and memory that are allocated to the Lambda function. Increasing CPU and memory
might help with performance if the Lambda function is resource-constrained, but it won't prevent message
loss due to network issues.

**D.** Increase provisioned throughput for the Lambda function. Lambda does not use provisioned throughput,
and this action is not applicable. Also, it does not prevent message loss due to network issues.

---

## Question 46

**Answer:** **B**

**Explanation:**

The correct answer is B because it leverages purpose-built AWS services for data security and PII detection
with minimal development effort. Here's a detailed justification:
S3 as a Secure Transfer Point: Using S3 provides a scalable and secure storage location for the uploaded
files, replacing the potentially less secure SFTP method. S3 integrates well with other AWS services,
simplifying the overall workflow.
Amazon Macie for PII Detection: Amazon Macie is a fully managed data security and data privacy service that
uses machine learning and pattern matching to discover sensitive data, including PII. Macie is designed
specifically for this purpose and eliminates the need to develop custom scanning algorithms, adhering to the
principle of "least development effort". It can automatically detect a wide range of PII types.
SNS for Notifications: Amazon SNS is a simple and cost-effective way to send notifications to administrators
when PII is detected. This allows for immediate action and investigation.

Why other options are less suitable:

**Option A** suggests using Amazon Inspector, which primarily focuses on identifying security vulnerabilities and
deviations from security best practices within EC2 instances and container images, and doesn't specialize in
PII detection within S3 objects like Macie. Also S3 Lifecycle policy removing without investigation is not ideal.
Options C and D propose implementing custom scanning algorithms in Lambda. Developing and maintaining
custom scanning algorithms would require significant development effort and expertise in PII identification,
which contradicts the "least development effort" requirement. **Option D** uses SES which is similar to SNS,
however, SES requires more configuration and isn't as straightforward for simple notification use cases.

**Option D** also suggests removing "meats" which is not an option from the question.

In summary, option B provides a pre-built and managed solution for PII detection and notification, ensuring
minimal development effort and a robust security posture.
Supporting Links:

Amazon Macie: https://aws.amazon.com/macie/

Amazon S3: https://aws.amazon.com/s3/

Amazon SNS: https://aws.amazon.com/sns/

---

## Question 47

**Answer:** **D**

**Explanation:**

The correct answer is D: Create an On-Demand Capacity Reservation that specifies the Region and three
Availability Zones needed.

Here's why:
On-Demand Capacity Reservations (ODCR): ODCRs provide a way to reserve EC2 instance capacity in a
specific Availability Zone for a specified duration. This guarantees that the required EC2 capacity will be
available when needed. Crucially, they allow you to target specific Availability Zones.
AWS Documentation on Capacity Reservations
Reserved Instances (RI): While RIs offer a billing discount in exchange for a term commitment, they do not
guarantee capacity. They provide discounted pricing for instances used but do not explicitly reserve
resources in specific Availability Zones. RIs help lower costs, they do not fulfill the requirement for
guaranteed capacity. Regional RIs apply to any AZ in the region.
AWS Documentation on Reserved Instances
Why other options are incorrect:
A & C: Purchasing Reserved Instances: As stated above, RIs do not guarantee EC2 capacity. Purchasing RIs
only reduces the cost of running instances; it doesn't reserve physical resources.

**B:** Create an On-Demand Capacity Reservation that specifies the Region needed: This is not precise enough.
The company requires capacity reservations in three specific Availability Zones. Specifying only the region
would not guarantee the resources would be in the desired AZs.
Given the short duration (1 week) and the need for a guarantee the On-Demand Capacity Reservation is a
perfect match.

---

## Question 48

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
The question highlights two key requirements: high availability and durable storage for the website's catalog.
Instance store volumes are ephemeral, meaning data is lost when the instance stops, terminates, or fails. This
makes them unsuitable for durable storage.

**Option A**, moving to ElastiCache for Redis, isn't ideal for durable storage of a full catalog. Redis is an inmemory data store, primarily used for caching to improve performance, not long-term storage. While data
persistence can be configured, it's not the primary use case and introduces complexity compared to other
options.

**Option B**, deploying a larger EC2 instance with a larger instance store, doesn't address the fundamental
problem of data loss upon instance failure. It merely provides more ephemeral storage, failing to meet the
durability requirement.

**Option C**, moving to S3 Glacier Deep Archive, provides durable storage but is designed for infrequent access,
like archiving. It's unsuitable for a website catalog that requires frequent reads and writes. Retrieval times are
measured in hours, making it impractical for serving web content.

**Option D**, moving to Amazon EFS, is the best solution. EFS provides a scalable, highly available, and durable
file system that can be mounted by multiple EC2 instances simultaneously. This allows the catalog to be
stored persistently and accessed by the web servers, ensuring high availability and durability. EFS replicates
data across multiple Availability Zones, providing resilience against failures.

In summary, EFS addresses both requirements: high availability through shared access and data replication,
and durability through persistent storage. It's designed for file-based storage that can be easily accessed by
applications, making it a good fit for a website catalog.
Further Reading:

Amazon EFS: https://aws.amazon.com/efs/
Instance Store Volumes: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html

---

## Question 49

**Answer:** **B**

**Explanation:**

**Option B** is the most cost-effective solution because it leverages S3 Intelligent-Tiering to automatically
optimize storage costs based on access patterns, while also utilizing S3 Glacier for long-term archival.
Here's a breakdown:
S3 Intelligent-Tiering: This storage class automatically moves data between frequent, infrequent, and
archive access tiers based on changing access patterns. This means frequently accessed files (within the first
year) reside in the more expensive but faster access tiers, ensuring quick retrieval. Infrequently accessed files
are moved to cheaper tiers automatically.
S3 Lifecycle Policies: These policies automate the transition of objects between storage classes. By moving
files older than 1 year to S3 Glacier Flexible Retrieval (formerly S3 Glacier), the company benefits from
significantly lower storage costs for infrequently accessed data.
Amazon Athena and S3 Glacier Select: Athena enables querying data directly in S3 using standard SQL,
while S3 Glacier Select allows querying data stored in S3 Glacier without needing to restore the entire object.
This allows the company to query and retrieve data irrespective of its storage class (S3 Intelligent-Tiering or
S3 Glacier).

The other options are less ideal:

**Option A**: S3 Glacier Instant Retrieval is the most expensive S3 Glacier tier. Using it for frequently accessed
files in the first year defeats the purpose of cost optimization. Also, querying based on object tags isn't as
efficient as using Athena for structured querying.

**Option C**: Storing all files in S3 Standard for the first year is more expensive than using S3 Intelligent-Tiering,
which dynamically adjusts storage costs. Storing search metadata in S3 Standard storage alongside the data
is also redundant, as Athena can be used for that purpose.

**Option D**: Storing search metadata in Amazon RDS is more complex and expensive than using Athena for
querying data in S3. S3 Glacier Deep Archive offers the lowest storage cost but has the highest retrieval
times, which might be acceptable for older data but is not necessary when Glacier Flexible Retrieval meets
the requirement.

In summary, **Option B** provides the best balance of performance and cost-effectiveness by using S3
Intelligent-Tiering for frequent access, S3 Lifecycle policies for automated archival, and Athena for querying
data across different storage classes.

---

## Question 50

**Answer:** **D**

**Explanation:**

The correct answer is D. Use AWS Systems Manager Run Command to run a custom command that applies
the patch to all EC2 instances.

Here's a detailed justification:
The primary requirement is to apply a third-party software patch to 1,000 EC2 instances as quickly as possible
to remediate a critical security vulnerability. Speed and wide distribution are key.
Why Run Command is Best: AWS Systems Manager (SSM) Run Command allows you to remotely and
securely manage the configuration of your managed instances. It lets you execute shell scripts or commands
on a large number of EC2 instances simultaneously. For rapidly deploying a patch to a known vulnerability,
Run Command offers the most immediate and direct route. You create a shell script (or similar) containing the
patching logic and then use Run Command to execute it on all instances. The entire operation can be
executed within minutes.

Why other options are less suitable:

**A.** Create an AWS Lambda function: While Lambda is useful for event-driven tasks, it is less suited for
directly patching 1,000 EC2 instances. Lambda functions have execution time limits (up to 15 minutes), making
it challenging to complete patching on a large number of instances reliably. Moreover, you'd still need to
manage the EC2 instance interaction, adding unnecessary complexity. The lambda function itself will need to
call SSM to run commands on the instances.

**B.** Configure AWS Systems Manager Patch Manager: Patch Manager is designed for automated OS-level
patching based on patch baselines. It's not ideal for deploying third-party software patches quickly, especially
in an emergency situation. Setting up and configuring patch baselines and ensuring they are applied to 1000
machines will take longer than using Run Command directly.

**C.** Schedule an AWS Systems Manager maintenance window: Maintenance Windows are valuable for
scheduled tasks, but not for immediate, emergency patching. They introduce a delay before the patch can be
applied. The requirement emphasizes quickly as possible, which Maintenance Windows don't fulfill.

In summary, Run Command is designed for ad-hoc operations and rapid execution of commands across fleets
of instances, making it the optimal solution for patching a critical vulnerability as quickly as possible. It
provides direct control and immediate deployment capabilities, crucial for addressing security concerns
promptly.
Here are authoritative links for further research:

AWS Systems Manager Run Command: https://docs.aws.amazon.com/systemsmanager/latest/userguide/execute-remote-commands.html

AWS Systems Manager Patch Manager: https://docs.aws.amazon.com/systemsmanager/latest/userguide/patch-manager.html

AWS Systems Manager Maintenance Windows: https://docs.aws.amazon.com/systemsmanager/latest/userguide/maintenance-windows.html

---

# Quick Answer Sheet

Question 1: A
Question 2: C
Question 3: A
Question 4: A
Question 5: C
Question 6: B
Question 7: D
Question 8: B
Question 9: B
Question 10: B
Question 11: A
Question 12: A
Question 13: A
Question 14: C
Question 15: C
Question 16: B
Question 17: A
Question 18: AB
Question 19: D
Question 20: D
Question 21: D
Question 22: B
Question 23: B
Question 24: B
Question 25: D
Question 26: A
Question 27: A
Question 28: B
Question 29: A
Question 30: C
Question 31: A
Question 32: B
Question 33: C
Question 34: B
Question 35: D
Question 36: B
Question 37: B
Question 38: C
Question 39: A
Question 40: A
Question 41: B
Question 42: C
Question 43: B
Question 44: AB
Question 45: BE
Question 46: B
Question 47: D
Question 48: D
Question 49: B
Question 50: D
