# AWS SAA-C03 Practice Test: Questions 1001-1019

Use this as a closed-book practice test. Answers and explanations are intentionally omitted.

---

## Question 1001

A company operates a food delivery service. Because of recent growth, the company's order processing system is

experiencing scaling problems during peak traffic hours. The current architecture includes Amazon EC2 instances
in an Auto Scaling group that collect orders from an application. A second group of EC2 instances in an Auto
Scaling group fulfills the orders.
The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be
lost because of a scaling event.
A solutions architect must ensure that the order collection process and the order fulfillment process can both
scale adequately during peak traffic hours.
Which solution will meet these requirements?

**A.** Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups.
Configure each Auto Scaling group's minimum capacity to meet its peak workload value.

**B.** Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups.
Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic to create
additional Auto Scaling groups on demand.

**C.** Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection.
Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues.
Scale the Auto Scaling groups based on notifications that the queues send.

**D.** Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection.
Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues.
Scale the Auto Scaling groups based on the number of messages in each queue.

---

## Question 1002

An online gaming company is transitioning user data storage to Amazon DynamoDB to support the company's
growing user base. The current architecture includes DynamoDB tables that contain user profiles, achievements,
and in-game transactions.
The company needs to design a robust, continuously available, and resilient DynamoDB architecture to maintain a
seamless gaming experience for users.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create DynamoDB tables in a single AWS Region. Use on-demand capacity mode. Use global tables to
replicate data across multiple Regions.

**B.** Use DynamoDB Accelerator (DAX) to cache frequently accessed data. Deploy tables in a single AWS Region
and enable auto scaling. Configure Cross-Region Replication manually to additional Regions.

**C.** Create DynamoDB tables in multiple AWS Regions. Use on-demand capacity mode. Use DynamoDB Streams
for Cross-Region Replication between Regions.

**D.** Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple AWS Regions.
Use provisioned capacity mode. Enable auto scaling.

---

## Question 1003

A company runs its media rendering application on premises. The company wants to reduce storage costs and has
moved all data to Amazon S3. The on-premises rendering application needs low-latency access to storage.
The company needs to design a storage solution for the application. The storage solution must maintain the
desired application performance.
Which storage solution will meet these requirements in the MOST cost-effective way?

**A.** Use Mountpoint for Amazon S3 to access the data in Amazon S3 for the on-premises application.

**B.** Configure an Amazon S3 File Gateway to provide storage for the on-premises application.

**C.** Copy the data from Amazon S3 to Amazon FSx for Windows File Server. Configure an Amazon FSx File
Gateway to provide storage for the on-premises application.

**D.** Configure an on-premises file server. Use the Amazon S3 API to connect to S3 storage. Configure the
application to access the storage from the on-premises file server.

---

## Question 1004

A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The system runs on
Amazon EC2 instances. Customers use a public API that is hosted on the EC2 instances to exchange information
with the ERP system. International customers report slow API response times from their data centers.
Which solution will improve response times for the international customers MOST cost-effectively?

**A.** Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide connectivity
from each customer's data center to us-east-1. Route customer API requests by using a Direct Connect
gateway to the ERP system API.

**B.** Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized managed
cache policy to provide improved cache efficiency.

**C.** Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for
the appropriate Regions to distribute traffic. Create an endpoint in the group for the API.

**D.** Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer networks.
Route traffic to the API over the VPN connections.

---

## Question 1005

A company tracks customer satisfaction by using surveys that the company hosts on its website. The surveys
sometimes reach thousands of customers every hour. Survey results are currently sent in email messages to the
company so company employees can manually review results and assess customer sentiment.
The company wants to automate the customer survey process. Survey results must be available for the previous 12
months.
Which solution will meet these requirements in the MOST scalable way?

**A.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple
Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll the SQS queue, call Amazon
Comprehend for sentiment analysis, and save the results to an Amazon DynamoDB table. Set the TTL for all
records to 365 days in the future.

**B.** Send the survey results data to an API that is running on an Amazon EC2 instance. Configure the API to store
the survey results as a new record in an Amazon DynamoDB table, call Amazon Comprehend for sentiment
analysis, and save the results in a second DynamoDB table. Set the TTL for all records to 365 days in the future.

**C.** Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an AWS Lambda
function to read the data and call Amazon Rekognition for sentiment analysis. Store the sentiment analysis
results in a second S3 bucket. Use S3 lifecycle policies on each bucket to expire objects after 365 days.

**D.** Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple
Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an AWS Lambda function that calls
Amazon Lex for sentiment analysis and saves the results to an Amazon DynamoDB table. Set the TTL for all
records to 365 days in the future.

---

## Question 1006

A company uses AWS Systems Manager for routine management and patching of Amazon EC2 instances. The EC2
instances are in an IP address type target group behind an Application Load Balancer (ALB).
New security protocols require the company to remove EC2 instances from service during a patch. When the
company attempts to follow the security protocol during the next patch, the company receives errors during the
patching window.
Which combination of solutions will resolve the errors? (Choose two.)

**A.** Change the target type of the target group from IP address type to instance type.

**B.** Continue to use the existing Systems Manager document without changes because it is already optimized to
handle instances that are in an IP address type target group behind an ALB.

**C.** Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation document to manage
the patching process.

**D.** Use Systems Manager Maintenance Windows to automatically remove the instances from service to patch
the instances.

**E.** Configure Systems Manager State Manager to remove the instances from service and manage the patching
schedule. Use ALB health checks to re-route traffic.

---

## Question 1007

A medical company wants to perform transformations on a large amount of clinical trial data that comes from
several customers. The company must extract the data from a relational database that contains the customer data.
Then the company will transform the data by using a series of complex rules. The company will load the data to
Amazon S3 when the transformations are complete.
All data must be encrypted where it is processed before the company stores the data in Amazon S3. All data must
be encrypted by using customer-specific keys.
Which solution will meet these requirements with the LEAST amount of operational effort?

**A.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses server-side
encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.

**B.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses
client-side encryption with a custom client-side root key (CSE-Custom) to encrypt the data.

**C.** Create one AWS Glue job for each customer. Attach a security configuration to each job that uses client-side
encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data.

**D.** Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses
server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.

---

## Question 1008

A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics
application is highly resilient and is designed to run in stateless mode.
The company notices that the application is showing signs of performance degradation during busy times and is
presenting 5xx errors. The company needs to make the application scale seamlessly.
Which solution will meet these requirements MOST cost-effectively?

**A.** Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 OnDemand Instance. Use an Application Load Balancer to distribute the load across the two EC2 instances.

**B.** Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 OnDemand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.

**C.** Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon
CloudWatch alarm to invoke the Lambda function when CPU utilization is more than 75%.

**D.** Create an Amazon Machine Image (AMI) of the web application. Apply the AMI to a launch template. Create
an Auto Scaling group that includes the launch template. Configure the launch template to use a Spot Fleet.
Attach an Application Load Balancer to the Auto Scaling group.

---

## Question 1009

A company runs an environment where data is stored in an Amazon S3 bucket. The objects are accessed
frequently throughout the day. The company has strict da ta encryption requirements for data that is stored in the
S3 bucket. The company currently uses AWS Key Management Service (AWS KMS) for encryption.
The company wants to optimize costs associated with encrypting S3 objects without making additional calls to
AWS KMS.
Which solution will meet these requirements?

**A.** Use server-side encryption with Amazon S3 managed keys (SSE-S3).

**B.** Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new objects.

**C.** Use client-side encryption with AWS KMS customer managed keys.

**D.** Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.

---

## Question 1010

A company runs multiple workloads on virtual machines (VMs) in an on-premises data center. The company is
expanding rapidly. The on-premises data center is not able to scale fast enough to meet business needs. The
company wants to migrate the workloads to AWS.
The migration is time sensitive. The company wants to use a lift-and-shift strategy for non-critical workloads.
Which combination of steps will meet these requirements? (Choose three.)

**A.** Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs.

**B.** Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs.

**C.** Complete the initial replication of the VMs. Launch test instances to perform acceptance tests on the VMs.

**D.** Stop all operations on the VMs. Launch a cutover instance.

**E.** Use AWS App2Container (A2C) to collect data about the VMs.

**F.** Use AWS Database Migration Service (AWS DMS) to migrate the VMs.

---

## Question 1011

A company hosts an application in a private subnet. The company has already integrated the application with
Amazon Cognito. The company uses an Amazon Cognito user pool to authenticate users.
The company needs to modify the application so the application can securely store user documents in an Amazon
S3 bucket.
Which combination of steps will securely integrate Amazon S3 with the application? (Choose two.)

**A.** Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for users when they
successfully log in.

**B.** Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for users when they
successfully log in.

**C.** Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the application.

**D.** Create a NAT gateway in the VPC where the company hosts the application. Assign a policy to the S3 bucket
to deny any request that is not initiated from Amazon Cognito.

**E.** Attach a policy to the S3 bucket that allows access only from the users' IP addresses.

---

## Question 1012

A company has a three-tier web application that processes orders from customers. The web tier consists of
Amazon EC2 instances behind an Application Load Balancer. The processing tier consists of EC2 instances. The
company decoupled the web tier and processing tier by using Amazon Simple Queue Service (Amazon SQS). The
storage layer uses Amazon DynamoDB.
At peak times, some users report order processing delays and halls. The company has noticed that during these
delays, the EC2 instances are running at 100% CPU usage, and the SQS queue fills up. The peak times are variable
and unpredictable.
The company needs to improve the performance of the application.
Which solution will meet these requirements?

**A.** Use scheduled scaling for Amazon EC2 Auto Scaling to scale out the processing tier instances for the
duration of peak usage times. Use the CPU Utilization metric to determine when to scale.

**B.** Use Amazon ElastiCache for Redis in front of the DynamoDB backend tier. Use target utilization as a metric to
determine when to scale.

**C.** Add an Amazon CloudFront distribution to cache the responses for the web tier. Use HTTP latency as a metric
to determine when to scale.

**D.** Use an Amazon EC2 Auto Scaling target tracking policy to scale out the processing tier instances. Use the
ApproximateNumberOfMessages attribute to determine when to scale.

---

## Question 1013

A company's production environment consists of Amazon EC2 On-Demand Instances that run constantly between
Monday and Saturday. The instances must run for only 12 hours on Sunday and cannot tolerate interruptions. The
company wants to cost-optimize the production environment.
Which solution will meet these requirements MOST cost-effectively?

**A.** Purchase Scheduled Reserved Instances for the EC2 instances that run for only 12 hours on Sunday.
Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and
Saturday.

**B.** Purchase Convertible Reserved Instances for the EC2 instances that run for only 12 hours on Sunday.
Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and
Saturday.

**C.** Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved
Instances for the EC2 instances that run constantly between Monday and Saturday.

**D.** Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Convertible
Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.

---

## Question 1014

A digital image processing company wants to migrate its on-premises monolithic application to the AWS Cloud.
The company processes thousands of images and generates large files as part of the processing workflow.
The company needs a solution to manage the growing number of image processing jobs. The solution must also
reduce the manual tasks in the image processing workflow. The company does not want to manage the underlying
infrastructure of the solution.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 Spot Instances to process the images.
Configure Amazon Simple Queue Service (Amazon SQS) to orchestrate the workflow. Store the processed files
in Amazon Elastic File System (Amazon EFS).

**B.** Use AWS Batch jobs to process the images. Use AWS Step Functions to orchestrate the workflow. Store the
processed files in an Amazon S3 bucket.

**C.** Use AWS Lambda functions and Amazon EC2 Spot Instances to process the images. Store the processed files
in Amazon FSx.

**D.** Deploy a group of Amazon EC2 instances to process the images. Use AWS Step Functions to orchestrate the
workflow. Store the processed files in an Amazon Elastic Block Store (Amazon EBS) volume.

---

## Question 1015

A company's image-hosting website gives users around the world the ability to up load, view, and download images
from their mobile devices. The company currently hosts the static website in an Amazon S3 bucket.
Because of the website's growing popularity, the website's performance has decreased. Users have reported
latency issues when they upload and download images.
The company must improve the performance of the website.
Which solution will meet these requirements with the LEAST implementation effort?

**A.** Configure an Amazon CloudFront distribution for the S3 bucket to improve the download performance.
Enable S3 Transfer Acceleration to improve the upload performance.

**B.** Configure Amazon EC2 instances of the right sizes in multiple AWS Regions. Migrate the application to the
EC2 instances. Use an Application Load Balancer to distribute the website traffic equally among the EC2
instances. Configure AWS Global Accelerator to address global demand with low latency.

**C.** Configure an Amazon CloudFront distribution that uses the S3 bucket as an origin to improve the download
performance. Configure the application to use CloudFront to upload images to improve the upload
performance. Create S3 buckets in multiple AWS Regions. Configure replication rules for the buckets to
replicate users' data based on the users' location. Redirect downloads to the S3 bucket that is closest to each

user's location.

**D.** Configure AWS Global Accelerator for the S3 bucket to improve network performance. Create an endpoint
for the application to use Global Accelerator instead of the S3 bucket.

---

## Question 1016

A company runs an application in a private subnet behind an Application Load Balancer (ALB) in a VPC. The VPC
has a NAT gateway and an internet gateway. The application calls the Amazon S3 API to store objects.
According to the company's security policy, traffic from the application must not travel across the internet.
Which solution will meet these requirements MOST cost-effectively?

**A.** Configure an S3 interface endpoint. Create a security group that allows outbound traffic to Amazon S3.

**B.** Configure an S3 gateway endpoint. Update the VPC route table to use the endpoint.

**C.** Configure an S3 bucket policy to allow traffic from the Elastic IP address that is assigned to the NAT
gateway.

**D.** Create a second NAT gateway in the same subnet where the legacy application is deployed. Update the VPC
route table to use the second NAT gateway.

---

## Question 1017

A company has an application that runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on
Amazon EC2 instances. The application has a UI that uses Amazon DynamoDB and data services that use Amazon
S3 as part of the application deployment.
The company must ensure that the EKS Pods for the UI can access only Amazon DynamoDB and that the EKS Pods
for the data services can access only Amazon S3. The company uses AWS Identity and Access Management (IAM).
Which solution meals these requirements?

**A.** Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach
both IAM policies to the EC2 instance profile. Use role-based access control (RBAC) to control access to
Amazon S3 or DynamoDB for the respective EKS Pods.

**B.** Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach the
Amazon S3 IAM policy directly to the EKS Pods for the data services and the DynamoDB policy to the EKS Pods
for the UI.

**C.** Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Attach the
AmazonS3FullAccess policy to the data services account and the AmazonDynamoDBFullAccess policy to the UI

service account.

**D.** Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Use IAM
Role for Service Accounts (IRSA) to provide access to the EKS Pods for the UI to Amazon S3 and the EKS Pods
for the data services to DynamoDB.

---

## Question 1018

A company needs to give a globally distributed development team secure access to the company's AWS resources
in a way that complies with security policies.
The company currently uses an on-premises Active Directory for internal authentication. The company uses AWS
Organizations to manage multiple AWS accounts that support multiple projects.
The company needs a solution to integrate with the existing infrastructure to provide centralized identity
management and access control.
Which solution will meet these requirements with the LEAST operational overhead?

**A.** Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS. Establish a
trust relationship with the on-premises Active Directory. Use IAM rotes that are assigned to Active Directory
groups to access AWS resources within the company's AWS accounts.

**B.** Create an IAM user for each developer. Manually manage permissions for each IAM user based on each user's
involvement with each project. Enforce multi-factor authentication (MFA) as an additional layer of security.

**C.** Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory. Integrate AD
Connector with AWS IAM Identity Center. Configure permissions sets to give each AD group access to specific
AWS accounts and resources.

**D.** Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation solution with
the on-premises Active Directory. Use Amazon Cognito to provide access tokens for developers to access AWS
accounts and resources.

---

## Question 1019

A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information
that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of
trusted IP addresses that belong to the company's internal network.
Which solution will meet these requirements?

**A.** Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.

**B.** Create a resource policy for the API that denies access to any IP address that is not specifically allowed.

**C.** Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from
specific IP addresses.

**D.** Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP
addresses.

---

# Answer Key and Explanations

Use this section after completing the practice test.

## Question 1001

**Answer:** **D**

**Explanation:**

The correct solution is D, which involves using Amazon SQS queues for both order collection and fulfillment,
and scaling Auto Scaling groups based on the number of messages in each queue.

Here's why:
Decoupling: SQS decouples the order collection process from the order fulfillment process. This means the
order collection EC2 instances can quickly add orders to the queue without waiting for fulfillment, preventing
bottlenecks during peak hours. https://aws.amazon.com/sqs/
Asynchronous Processing: SQS allows for asynchronous processing. Orders are placed in the queue and
fulfilled later by the fulfillment EC2 instances. This is crucial since order fulfillment takes longer than order
collection.
Scalability: Both Auto Scaling groups can scale independently based on the number of messages in their
respective SQS queues. If the order collection queue has a large backlog, the order collection Auto Scaling
group can scale up to handle the load. Similarly, the fulfillment Auto Scaling group can scale based on the
number of messages in the fulfillment queue. https://docs.aws.amazon.com/autoscaling/ec2/userguide/asscaling-target.html
Data Durability: SQS is a fully managed message queuing service. It provides durable storage of messages
until they are processed. This guarantees that no data is lost during scaling events.
https://aws.amazon.com/sqs/features/
Reliable Scaling Trigger: Scaling based on the number of messages in the queue is a direct indicator of
backlog and processing needs. It's a more relevant scaling trigger than CPU utilization, which might not
accurately reflect the queue's workload.

Why other options are incorrect:
A and B: Scaling based only on CPU utilization might not be effective because the order collection process is
quick and may not necessarily increase CPU load significantly, even during peak times. **Option B** suggests

creating new ASGs via SNS which is an unconventional and unnecessary approach.

**C:** Scaling based on notifications that the queues send is not standard. Auto Scaling scales most effectively
by monitoring metrics and the queue depth is a more accurate metric than general notifications.

In summary, using SQS and scaling based on queue depth ensures that the order collection and fulfillment
processes are decoupled, scalable, and data is not lost during peak hours.

---

## Question 1002

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:

1. High Availability and Resilience: DynamoDB Global Tables inherently provide high availability and
resilience by replicating data across multiple AWS Regions. This means that if one region
experiences an outage, the application can failover to another region with minimal disruption.

2. Seamless Gaming Experience: Automatic multi-Region replication ensures that user data is
synchronized across all regions, providing a consistent and seamless gaming experience regardless
of the user's location.

3. Cost-Effectiveness: While on-demand capacity mode (options A and C) might seem appealing for
unpredictable workloads, provisioned capacity mode with auto-scaling (option D) can be more costeffective in the long run if the workload has predictable patterns or if you are diligent about setting
up proper auto-scaling rules. DynamoDB auto-scaling dynamically adjusts provisioned capacity
based on actual workload, optimizing cost without sacrificing performance.

4. Global Tables Superiority: Although option B uses DAX for caching and auto scaling, and option C
attempts to replicate DynamoDB using DynamoDB Streams, these approaches require more manual
configuration and are not as robust or efficient as using DynamoDB Global Tables. DynamoDB
streams would require custom code to handle conflict resolution and data consistency, while Global
Tables are designed to handle this out-of-the-box. Manual cross-region replication is complex and
error-prone.

5. DynamoDB Global Tables Efficiency: Global tables provide very low latency access to data for a
global user base by allowing them to connect to the nearest AWS region with their replicated data.

6. Multi-Region Deployment Necessity: The prompt states that the company needs to design a robust,
continuously available, and resilient DynamoDB architecture, which inherently implies the use of
multiple regions for fault tolerance. Therefore, options that only use a single region are not suitable.

In summary, using DynamoDB Global Tables with provisioned capacity mode and auto-scaling offers the best
combination of high availability, resilience, automatic replication, and cost-effectiveness for a global online
gaming company.
Further Research:

1. Amazon DynamoDB Global Tables

2. Amazon DynamoDB Auto Scaling

3. Amazon DynamoDB pricing

---

## Question 1003

**Answer:** **B**

**Explanation:**

The optimal solution is B. Configure an Amazon S3 File Gateway to provide storage for the on-premises
application.

Here's why:

1. S3 File Gateway: This service provides a local cache for frequently accessed data stored in S3. This
local cache allows the on-premises rendering application to access data with low latency, meeting
the application performance requirement. The File Gateway acts as a bridge, allowing on-premises
applications to access S3 data as if it were a local file system.

2. Cost-effectiveness: S3 File Gateway is cost-effective because it only caches frequently accessed
data locally. This minimizes the need for large, expensive local storage. The bulk of the data remains
in the cost-optimized S3 storage tier.

3. Mountpoint for Amazon S3 (**Option A**): While Mountpoint allows direct access to S3, it does not
provide local caching. This can lead to higher latency for frequently accessed data compared to S3
File Gateway. This makes it less suitable for applications requiring low latency.

4. Amazon FSx for Windows File Server (**Option C**): This solution involves copying data from S3 to FSx,
which incurs data transfer costs and increases storage costs due to FSx's higher storage prices.
Adding an FSx File Gateway adds unnecessary complexity and cost. It's a more expensive option than
S3 File Gateway for simply providing low-latency access to data stored in S3.

5. On-premises file server with S3 API (**Option D**): This approach requires managing and maintaining a
local file server, adding operational overhead. Furthermore, direct S3 API calls from the application
may not provide the low-latency access the application needs.

In summary, the S3 File Gateway provides a cost-effective balance between low-latency access for on-

premises applications and leveraging the scalability and cost-effectiveness of S3. It minimizes the need for
expensive local storage by caching frequently accessed data.

---

## Question 1004

**Answer:** **B**

**Explanation:**

The correct answer is B. Set up an Amazon CloudFront distribution in front of the API. Configure the
CachingOptimized managed cache policy to provide improved cache efficiency.

Here's why:
CloudFront's Global Reach: CloudFront is a content delivery network (CDN) with edge locations distributed
globally. By caching API responses closer to international customers, it significantly reduces latency and
improves response times. This is a core function of CDNs.
Cost-Effectiveness: CloudFront is generally more cost-effective than options like Direct Connect or Global
Accelerator for this specific use case. It leverages caching to reduce the load on the origin EC2 instances,
potentially lowering compute costs.
CachingOptimized Policy: The CachingOptimized managed cache policy is designed to improve cache
efficiency, balancing cache hit ratio and time-to-live (TTL) to optimize content delivery. This is suitable
because API responses, at least some, can often be cached.

Why other options are less suitable:

**A.** AWS Direct Connect: Direct Connect provides dedicated network connections, which are expensive and
primarily used for hybrid cloud scenarios where high bandwidth and consistent network performance are
crucial between a customer's infrastructure and AWS, not for delivering API responses to multiple customers.
Setting up Direct Connect for each customer is neither scalable nor cost-effective.

**C.** AWS Global Accelerator: Global Accelerator improves availability and performance for applications with
users worldwide by routing traffic to the optimal endpoint (Region). While it can improve performance, it
mainly optimizes TCP/UDP traffic and doesn't inherently cache content like CloudFront. It is less cost-

effective than CloudFront for this specific caching scenario, and its primary benefit lies in failover and traffic
optimization across Regions rather than caching closer to users.

**D.** AWS Site-to-Site VPN: Setting up VPN tunnels to each customer's network is complex, expensive, and
creates unnecessary overhead. VPNs are designed for secure connectivity between networks, not for
delivering API responses. It does not provide caching benefits.

In summary, CloudFront leverages caching and a global network to improve API response times for
international customers most cost-effectively.
Supporting Documentation:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
CloudFront Managed Cache Policies:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/
AWS Direct Connect: https://aws.amazon.com/directconnect/

---

## Question 1005

**Answer:** **A**

**Explanation:**

**Option A** provides the most scalable and cost-effective solution for automating the customer survey process
while meeting the given requirements.

Here's why:

1. Scalability: Amazon API Gateway and Amazon SQS are highly scalable services that can handle
thousands of requests per hour without manual intervention. API Gateway handles the initial influx of
requests, while SQS acts as a buffer, decoupling the survey submission from the processing of
results. This prevents any potential overload on the backend systems.

2. Sentiment Analysis: Amazon Comprehend is specifically designed for natural language processing

tasks, including sentiment analysis. It offers accurate and efficient analysis of the survey results.
Amazon Rekognition (option C) is for image and video analysis, and Amazon Lex (option D) is for
building conversational interfaces, neither of which are appropriate for this scenario.

3. Data Storage: Amazon DynamoDB is a NoSQL database that offers high performance and scalability.
It's well-suited for storing the survey results and sentiment analysis data. The TTL (Time To Live)
attribute in DynamoDB is an efficient and automatic way to ensure data is only stored for the required
12 months (365 days).

4. Lambda Integration: AWS Lambda allows for serverless execution of code. Using Lambda to poll the
SQS queue, process survey results, and save data to DynamoDB ensures efficient resource utilization
and automatic scaling based on demand.

5. Decoupling: Using SQS decouples the survey submission (via API Gateway) from the sentiment
analysis and data storage (performed by Lambda and DynamoDB). This makes the solution more
resilient and able to handle traffic spikes.

**Option B** is less scalable as it relies on a single EC2 instance to handle API requests, potentially creating a
bottleneck. It also introduces the overhead of managing an EC2 instance.

**Option C** uses S3 for sentiment analysis, which is incorrect. Rekognition is for image and video analysis, not
text-based sentiment analysis.

**Option D** uses Amazon Lex, which is for building conversational interfaces, not sentiment analysis of survey
data. Lex is not appropriate for analyzing text data.

---

## Question 1006

**Answer:** **CD**

**Explanation:**

Let's break down why options C and D are the correct choices, and why the others are not.
The core issue is the company needs to patch EC2 instances behind an ALB while adhering to a new security
protocol that requires instances to be removed from service during the patching process. The errors they are
experiencing likely stem from interrupting the ALB's health checks when the instance is taken offline for
patching. The ALB sees an unhealthy instance and might try to send traffic to it, or declare it out of service
prematurely if the drain process isn't handled gracefully.
Why C is correct:

1. AWSEC2-PatchLoadBalancerInstance is a pre-built AWS Systems Manager Automation document
specifically designed to handle patching EC2 instances behind an ALB. It orchestrates the process of
taking an instance out of service (by deregistering it from the target group), patching it, and then
putting it back in service (by re-registering it). This ensures minimal disruption to traffic flow.
Why D is correct:

1. Systems Manager Maintenance Windows provide a scheduled time frame for performing tasks like
patching. Crucially, you can configure tasks within a Maintenance Window to execute the AWSEC2PatchLoadBalancerInstance Automation document described above, thus automating the entire
process of removing instances, patching them, and returning them to service within a defined
timeframe. Also, Maintenance Windows allow you to configure pre- and post-tasks, so we can easily
orchestrate the deregistration and registration of our instance.
Why A is incorrect:

1. Changing the target type of the target group doesn't address the problem of patching. Whether the
target type is IP address or instance ID, the underlying issue of ALB health checks failing during
patching remains. It's more about how the patching process interacts with the load balancer.
Why B is incorrect:

1. The existing Systems Manager document isn't optimized to handle instances behind an ALB if it
doesn't include steps to deregister and reregister instances. The prompt states that the company is
experiencing errors when trying to patch based on the security protocol.
Why E is incorrect:

1. State Manager is for maintaining a desired configuration state and isn't the appropriate tool for
orchestrating patching behind an ALB. While State Manager could periodically run a patching
document, it doesn't inherently handle the graceful removal and re-addition of instances to the ALB
target group during the patching process. Furthermore, the state manager is not suited for temporary
task.

In summary, the correct solution combines the automation provided by AWSEC2-PatchLoadBalancerInstance
and the scheduling and orchestration capabilities of Maintenance Windows to ensure patching is performed
gracefully with minimal impact on application availability.

---

## Question 1007

**Answer:** **C**

**Explanation:**

The correct answer is C because it offers the least operational overhead while meeting all security and
functional requirements. Here's why:
Data Extraction and Transformation: AWS Glue is designed for ETL (Extract, Transform, Load) operations. It
provides a serverless, fully managed environment for running data transformation jobs, which perfectly aligns
with the requirement to transform clinical trial data. Amazon EMR, while capable of ETL, is more suited for big
data processing and analytics, making it more complex and operationally heavier for simple data
transformations.
Customer-Specific Encryption: The requirement of customer-specific keys necessitates the use of KMS (Key
Management Service). CSE (Client-Side Encryption) allows the company to manage the encryption process
within their environment, using KMS keys they control. This allows for granular control over encryption for
each customer. Server-Side Encryption (SSE) options, like SSE-S3, use a single key managed by AWS S3,
which is insufficient for the customer-specific encryption mandate. CSE-Custom requires managing the
encryption process completely outside AWS KMS, adding operational burden.
Encryption in Processing: CSE-KMS allows data to be encrypted before it's written to S3, ensuring encryption
throughout the processing phase. Server-side encryption only protects data at rest in S3. The question
specifically states data must be encrypted where it is processed, so options A and D are not suitable.
Least Operational Effort: Creating individual Glue jobs for each customer is operationally simpler than
managing individual EMR clusters. Glue is serverless and managed, while EMR requires cluster provisioning,
management, and scaling. Using AWS KMS also reduces the burden of managing encryption keys outside
AWS infrastructure.
Security Configuration in Glue: Glue's security configurations enable associating KMS keys to each job for
customer-specific encryption. By attaching a different security configuration (and hence KMS key) to each
Glue job, the company can ensure each customer's data is encrypted with their dedicated key.

In summary, option C using AWS Glue with client-side encryption using KMS keys provides a managed,
secure, and scalable solution to meet all the requirements with the least operational effort.
Further research:

AWS Glue: https://aws.amazon.com/glue/
AWS KMS: https://aws.amazon.com/kms/
Encryption in Amazon S3: https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html
AWS Glue Security Configurations: https://docs.aws.amazon.com/glue/latest/dg/encryption-securityconfiguration.html

---

## Question 1008

**Answer:** **D**

**Explanation:**

The correct answer is D because it provides the most cost-effective and scalable solution for the described
scenario.
Here's a breakdown:

1. Requirement of Seamless Scaling: The company needs the application to scale automatically based
on demand. Auto Scaling groups (ASGs) are designed precisely for this purpose. They automatically
launch or terminate EC2 instances based on defined metrics (like CPU utilization).

2. Cost-Effectiveness: Spot Instances offer significant cost savings compared to On-Demand
Instances. By configuring the launch template with Spot Fleet, the ASG can leverage these cheaper
instances.

3. Stateless Application: The fact that the application is stateless is crucial. This allows instances to be
launched and terminated without data loss or impact on application functionality.

4. Load Balancing: The Application Load Balancer (ALB) distributes incoming traffic evenly across the
healthy EC2 instances within the ASG, preventing any single instance from becoming a bottleneck.

5. AMIs and Launch Templates: Creating an AMI allows for consistent deployments. The launch
template defines the configuration of each instance launched by the ASG (AMI ID, instance type,
security groups, etc.).

Why other options are less suitable:

1. A & B: Manually creating a second EC2 instance and using either an ALB or Route 53 weighted
routing provides redundancy but doesn't scale automatically. It requires manual intervention to add
or remove instances as demand fluctuates, which isn't seamless.

2. C: While this option attempts to address performance by changing the instance type, it's not ideal for
several reasons. First, stopping and resizing an instance is disruptive. Second, it doesn't provide true

scaling – it only makes the existing instance larger. Third, it doesn't address the need for distributing
the load across multiple instances. The stopping of an instance is also a bad practice.
In summary: **Option D** utilizes Auto Scaling with Spot Instances and an ALB to achieve automatic scaling, cost
optimization, and load distribution, effectively addressing the company's requirements in the most costeffective manner.

---

## Question 1009

**Answer:** **B**

**Explanation:**

The company needs to encrypt data at rest in S3 using KMS, but wants to optimize costs. The core issue is
reducing the number of KMS calls since these calls incur charges.

**Option A** (SSE-S3) doesn't satisfy the requirement of using AWS KMS for encryption. While it offers serverside encryption, it uses S3-managed keys, not KMS keys. Therefore, it is not the correct solution.

**Option B** (SSE-KMS with S3 Bucket Keys) is the correct solution. S3 Bucket Keys are designed to reduce the
cost of SSE-KMS. By enabling a bucket key, S3 reduces the request traffic to AWS KMS by generating a
bucket-level key that is used to encrypt objects in the bucket. The bucket key reduces the calls to KMS to
unwrap the data encryption key, which is a costly operation. It still uses KMS for encryption, fulfilling the
encryption requirement, but optimizes cost by reducing KMS API calls.

**Option C** (Client-side encryption with KMS) moves the encryption process to the client side. While it uses KMS,
the client is responsible for encrypting the data before uploading it to S3. This does not optimize costs
because the client must still make KMS calls to encrypt the data, and might increase complexity. It also does
not leverage native S3 features for encryption at rest.

**Option D** (SSE-C with keys in KMS) is incorrect because SSE-C requires the user to provide their own
encryption keys. Although the user suggests storing it in KMS, the solution requires the user to manage the
keys. Amazon S3 does not store the encryption key you provide. Instead, Amazon S3 stores a keyed-hash
message authentication code (HMAC) of the encryption key to validate future requests. This method will not

reduce costs.

Therefore, SSE-KMS with S3 Bucket Keys is the best solution because it offers the required encryption with
KMS and optimizes costs by reducing KMS calls.
Relevant documentation:
Using server-side encryption with AWS KMS keys (SSE-KMS)
Reducing the cost of SSE-KMS with S3 Bucket Keys

---

## Question 1010

**Answer:** **BCD**

**Explanation:**

The chosen solution (BCD) effectively outlines a lift-and-shift migration strategy using AWS Application
Migration Service (MGN) to meet the company's needs.

Here's why:

**B.** Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs. AWS MGN is
specifically designed for lift-and-shift migrations, and it replicates on-premises servers to AWS. Installing the
agent on the VMs is the first step to initiating replication. https://aws.amazon.com/application-migrationservice/

**C.** Complete the initial replication of the VMs. Launch test instances to perform acceptance tests on the
VMs. After initial replication, it's crucial to test the migrated instances in AWS to ensure they function as
expected. This verifies the migration process and allows for adjustments before the final cutover.

**D.** Stop all operations on the VMs. Launch a cutover instance. This step signifies the final migration stage. By
stopping operations on the original VMs, the company minimizes data loss and ensures consistency when
launching the cutover instances in AWS. This minimizes downtime.
Here's why the other options are incorrect:

**A.** Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs. AWS SCT is designed
for database migrations, not VM migrations. Since the scenario describes a lift-and-shift of workloads on VMs,
SCT is not applicable here.

**E.** Use AWS App2Container (A2C) to collect data about the VMs. AWS App2Container is suitable for

modernizing applications by containerizing them. The company wants a lift-and-shift strategy, not
containerization.

**F.** Use AWS Database Migration Service (AWS DMS) to migrate the VMs. AWS DMS is for database
migration. The scenario involves the migration of whole VMs, rendering DMS an unsuitable tool for this
purpose.
The chosen combination leverages the purpose-built AWS MGN service for efficient and rapid VM migration,
aligned with a lift-and-shift approach. Testing and a controlled cutover ensures a smooth transition.

---

## Question 1011

**Answer:** **AC**

**Explanation:**

Here's a detailed justification for why options A and C are the correct choices, and why the others are
incorrect:
Why A is correct: Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for
users when they successfully log in.
Amazon Cognito identity pools (now part of Cognito Federated Identities) are specifically designed to grant
temporary AWS credentials to users, including those authenticated through Cognito user pools or other
identity providers. When a user successfully authenticates, the application can use the Cognito identity pool
to obtain temporary credentials with specific permissions defined in IAM roles. These credentials can then be
used to access the S3 bucket securely. This approach avoids embedding long-term credentials in the
application or directly using the user pool for S3 access, which is a security best practice.
Reference: https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
Why C is correct: Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the
application.
Since the application is in a private subnet with no direct internet access, it needs a way to communicate with
S3 without traversing the public internet. An S3 VPC endpoint provides a private connection between the VPC
and S3. Traffic to S3 from within the VPC will then travel over the AWS network and remain within the AWS
infrastructure, enhancing security and reducing latency. Using a VPC endpoint ensures that the application
can access S3 even without a NAT gateway or internet gateway.

Reference: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html
Why B is incorrect: Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for
users when they successfully log in.
Cognito user pools are primarily for authentication and user management. While user pools can be integrated
with identity pools to provide credentials for AWS resources, user pools themselves do not directly generate
S3 access tokens. Identity pools are the AWS service component designed to fulfill this role.
Why D is incorrect: Create a NAT gateway in the VPC where the company hosts the application. Assign a
policy to the S3 bucket to deny any request that is not initiated from Amazon Cognito.
While a NAT gateway allows instances in a private subnet to initiate outbound traffic to the internet (and
therefore S3), it doesn't inherently provide a secure, role-based access control mechanism to S3 based on
Cognito user identity. **Option A**, using an identity pool, is the correct way to leverage Cognito for generating
secure S3 access credentials. The second part of option D (deny any request that is not initiated from Cognito)
is impractical. S3 bucket policies cannot directly filter based on the originator of a request being "Amazon
Cognito" itself. They grant or deny permissions based on the temporary credentials provided via the IAM roles
associated with the Cognito identity pool.
Why E is incorrect: Attach a policy to the S3 bucket that allows access only from the users' IP addresses.
This approach is highly impractical and insecure for several reasons. User IP addresses can change
frequently, making the policy difficult to maintain. More importantly, it's not reliable because the application
is in a private subnet, so the source IP of the request seen by S3 would be the NAT gateway's public IP (if a
NAT gateway were used) or the VPC endpoint's IP address. Finally, tying S3 access directly to user IP
addresses doesn't provide a granular, role-based access control solution, which is what Cognito identity pools
offer.

---

## Question 1012

**Answer:** **D**

**Explanation:**

Here's a detailed justification for why option D is the best solution, along with supporting concepts and links:
The problem indicates the processing tier EC2 instances are overloaded during peak times, causing order
processing delays and queue buildup in SQS. The key is to automatically scale the processing tier based on
the workload queued in SQS.

**Option D** suggests using an EC2 Auto Scaling target tracking policy driven by the
ApproximateNumberOfMessages attribute of the SQS queue. This is the most effective solution because it
directly addresses the bottleneck. The ApproximateNumberOfMessages attribute reflects the number of
messages waiting to be processed in the SQS queue. By configuring Auto Scaling to scale out the processing
tier when this number exceeds a target value, the system proactively adds more processing capacity to
handle the backlog. This ensures timely processing of orders and prevents the queue from filling up
excessively. Target tracking policies automatically adjust the number of instances to maintain the desired
metric value, simplifying scaling management.

**Option A** suggests scheduled scaling based on CPU utilization. While CPU utilization is a good indicator of
load, scheduled scaling is reactive and relies on predictable patterns, which the problem states are
unpredictable. Also scaling based on CPU after utilization reaches 100% will cause delay.

**Option B** introduces ElastiCache for Redis in front of DynamoDB. While caching can improve performance for
read-heavy workloads, the bottleneck is in the processing tier, not the data retrieval from DynamoDB. Caching
won't solve the CPU overload issue.

**Option C** adds CloudFront to the web tier. CloudFront is a Content Delivery Network (CDN) that caches static
content closer to users. Since the problem describes order processing delays, caching static web assets won't
address the root cause of the problem.

In summary, option D provides the most direct and adaptive solution by scaling the processing tier based on
the actual workload pending in the SQS queue, mitigating the processing delays and preventing excessive
queue buildup. It dynamically adjusts capacity to meet fluctuating demand. Supporting Links:
Amazon EC2 Auto Scaling Target Tracking Scaling Policies:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html
Amazon SQS ApproximateNumberOfMessages Metric:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-availablecloudwatch-metrics.html

---

## Question 1013

**Answer:** **A**

**Explanation:**

Here's a detailed justification for why option A is the most cost-effective solution:
The core goal is to minimize costs while ensuring the production environment runs as required. The instances
have two distinct usage patterns: consistent operation Monday through Saturday, and limited operation on
Sunday.
For the Monday-Saturday usage, Standard Reserved Instances offer the best cost savings. They provide a
significant discount compared to On-Demand pricing in exchange for a one- or three-year commitment.
Because the workload runs constantly during these days, committing to Reserved Instances is beneficial.
For the 12-hour Sunday usage, Scheduled Reserved Instances are the most appropriate. These instances
allow you to reserve capacity on a recurring schedule, perfectly matching the need for specific time windows
each week. They guarantee capacity availability and come with a discount compared to On-Demand, but
without requiring you to pay for the instance for the entire day.
Options C and D are less desirable because Spot Instances are prone to interruption. The question explicitly
states that instances cannot tolerate interruptions. Therefore, relying on Spot Instances would violate a key
requirement of the problem. While Spot Instances are generally the cheapest option for compute, the
potential for interruption makes them unsuitable for this use case.

**Option B** is less ideal because Convertible Reserved Instances, while offering flexibility to change instance
types and families, are more expensive than Standard Reserved Instances. For workloads with predictable
resource requirements, as is the case for Monday-Saturday, the additional flexibility of Convertible Reserved
Instances is unnecessary and introduces extra cost.

In summary, **Option A** strikes the best balance between cost optimization and reliability by using the most
cost-effective reserved instance type for each distinct usage pattern. Scheduled Reserved Instances are used
where availability is needed for only a defined time window and Standard Reserved Instances are used where
there is continuous usage.
Here are some helpful links for further research:
Reserved Instances: https://aws.amazon.com/ec2/pricing/reserved-instances/
Scheduled Instances: https://aws.amazon.com/ec2/purchasing-options/scheduled-instances/
Spot Instances: https://aws.amazon.com/ec2/spot/

---

## Question 1014

**Answer:** **B**

**Explanation:**

The correct answer is B because it offers the least operational overhead and best aligns with the described
requirements. Here's why:
AWS Batch eliminates the need to manage underlying compute infrastructure for image processing. Batch
automatically provisions and scales compute resources based on job requirements. This is crucial as the
company doesn't want to manage infrastructure. (https://aws.amazon.com/batch/)
AWS Step Functions provides a serverless orchestration service to manage the complex image processing
workflow. Step Functions allows for defining workflows as state machines, simplifying coordination and
monitoring of image processing steps without manual intervention. Step Functions supports error handling
and retries. (https://aws.amazon.com/step-functions/)
Amazon S3 offers scalable, durable, and cost-effective object storage for storing the processed files. S3 is
well-suited for large files generated by image processing. It eliminates the need for managing file servers or
complex file systems. (https://aws.amazon.com/s3/)

**Option A** is less suitable because managing ECS clusters, even with Spot Instances, still incurs operational
overhead related to container management and instance configuration. SQS provides messaging, but Step
Functions provides orchestration capabilities specifically designed for defining and managing complex
workflows. EFS, while a shared filesystem, isn't as cost-effective or scalable for storing a large number of
files as S3.

**Option C** is less suitable because while Lambda is serverless, it may have limitations in terms of execution
time and memory for large image processing tasks. It mentions EC2 Spot Instances together with Lambda
functions which does not make sense. FSx introduces complexities in managing file systems.

**Option D** is least suitable because it requires managing EC2 instances, which contradicts the requirement of
minimizing operational overhead. EBS is attached to a single EC2 instance so it is not ideal for storing a very
large number of images.

---

## Question 1015

**Answer:** **A**

**Explanation:**

**Option A** is the most efficient solution because it leverages existing AWS services optimized for content
delivery and transfer acceleration with minimal configuration. Amazon CloudFront is a content delivery
network (CDN) that caches static content like images in edge locations worldwide, significantly reducing
latency for downloads. S3 Transfer Acceleration utilizes optimized network paths and the AWS backbone
network to accelerate uploads to S3 buckets, improving performance for users regardless of their location.

**Option B** is overly complex and requires significant infrastructure management. Migrating the static website
to EC2 instances and load balancing it across multiple regions involves setting up and maintaining servers,
configuring application deployment, and managing networking, which adds operational overhead. AWS Global
Accelerator, while beneficial, is an overkill for a simple static website hosted in S3.

**Option C** introduces unnecessary complexity and cost. Creating S3 buckets in multiple regions and
configuring replication rules adds administrative overhead and cost. The manual redirection of downloads to
the closest S3 bucket is complex to implement and maintain. CloudFront already provides global content
delivery and caching automatically.

**Option D**'s configuration is not the intended use case for AWS Global Accelerator. Global Accelerator is
designed for dynamic applications, like gaming applications or streaming media, that need high availability
and consistent performance. S3 Transfer Acceleration addresses the upload performance improvement
needed more effectively.

Therefore, **Option A** provides the best balance of performance improvement, ease of implementation, and
cost-effectiveness by using existing AWS services specialized for content delivery and transfer acceleration.
Relevant Documentation:
Amazon CloudFront: https://aws.amazon.com/cloudfront/
Amazon S3 Transfer Acceleration: https://aws.amazon.com/s3/transfer-acceleration/
AWS Global Accelerator: https://aws.amazon.com/global-accelerator/

---

## Question 1016

**Answer:** **B**

**Explanation:**

The most cost-effective solution to ensure traffic from the application to Amazon S3 doesn't traverse the
internet while adhering to the security policy is option B: configuring an S3 gateway endpoint and updating
the VPC route table.

Here's why:

1. Gateway Endpoints: S3 gateway endpoints are designed to provide private connectivity to S3 within
your VPC. They are free to use and do not require an internet gateway, NAT device, or VPN
connection to access S3. This aligns directly with the requirement of not traversing the internet.

2. Cost-Effectiveness: Gateway endpoints do not incur data processing or hourly charges, making them
the most cost-effective option for private S3 access. This is because the data transfer within the
AWS network is already paid for and gateway endpoints are free of charge.

3. Route Table Integration: Gateway endpoints work by adding a route to your VPC route table. This
route directs traffic destined for S3 to the gateway endpoint, ensuring traffic stays within the AWS
network.

4. Other Options:

5. **Option A** (Interface Endpoint): While interface endpoints also provide private connectivity, they use
AWS PrivateLink and incur hourly and data processing charges, making them less cost-effective than
gateway endpoints for S3.

6. **Option C** (Bucket Policy with NAT Gateway IP): This approach involves allowing traffic from the NAT
gateway's Elastic IP to the S3 bucket. While it avoids internet traversal, it's less secure and
manageable. If the NAT gateway is replaced, the IP changes, potentially disrupting access. Also,
bucket policies can become complex to manage at scale.

7. **Option D** (Second NAT Gateway): Creating a second NAT gateway increases costs and doesn't
address the core requirement of keeping S3 traffic within the AWS network. It's primarily for
redundancy, not for private S3 access.

In summary, using an S3 gateway endpoint offers the optimal balance of security, cost-effectiveness, and
ease of management for accessing S3 privately from within a VPC.

---

## Question 1017

**Answer:** **D**

**Explanation:**

The correct answer is D. Here's why:
The requirement is to provide fine-grained access control for EKS pods to AWS services (DynamoDB and S3).
Pods running the UI should only access DynamoDB, and pods running data services should only access S3.
This necessitates a mechanism that allows granting IAM permissions to pods specifically, not just the
underlying EC2 instances.

**Option A** is incorrect because attaching IAM policies to the EC2 instance profile grants access to all pods
running on that instance. RBAC is for Kubernetes API access, not AWS resource access. Therefore, RBAC
can't be used to restrict a pod's access to DynamoDB or S3 at the IAM level.

**Option B** is incorrect because it is not possible to attach IAM policies directly to Kubernetes pods. IAM policies
are associated with IAM roles, which are assumed by entities like EC2 instances or, crucially, Kubernetes
service accounts.

**Option C** is incorrect because it attaches AmazonS3FullAccess and AmazonDynamoDBFullAccess to the service
accounts directly. However, the key problem is that it attempts to grant S3 access to the UI service account
and DynamoDB access to the data services account, the opposite of what's needed. More importantly, without
IRSA, the service accounts will not have the necessary permissions to assume an IAM role, hence access
won't be effective.

**Option D**, using IAM Roles for Service Accounts (IRSA), is the correct approach. IRSA allows you to associate
IAM roles with Kubernetes service accounts. You create separate service accounts for the UI and data
services pods. Each service account is then configured to assume a specific IAM role. The IAM role for the UI
service account has a policy allowing access only to DynamoDB. The IAM role for the data services service
account has a policy allowing access only to S3. When the pods are launched and associated with their
respective service accounts, they automatically inherit the permissions defined in the associated IAM roles.
Here's a breakdown of the IRSA process:

1. Create IAM roles: Two roles are created, one for UI pods (DynamoDB access) and one for data
services pods (S3 access). Each role includes a trust policy that allows the Kubernetes service
account to assume the role.

2. Create Kubernetes service accounts: Two service accounts are created, one for UI pods and one for
data services pods.

3. Associate IAM roles with service accounts: The service accounts are annotated to specify which IAM
role they can assume. This annotation securely links the Kubernetes service account to the AWS IAM
role.

4. Deploy pods: The UI pods are configured to use the UI service account, and the data services pods
are configured to use the data services service account.
This setup ensures that the UI pods can only access DynamoDB and the data services pods can only access
S3, fulfilling the company's requirements.
References:

1. IAM roles for service accounts - Amazon EKS

2. Use IAM roles for service accounts

---

## Question 1018

**Answer:** **C**

**Explanation:**

The best solution is C, using AD Connector with IAM Identity Center (successor to AWS SSO). Here's why:

1. Centralized Identity Management: AD Connector allows you to leverage your existing on-premises
Active Directory as the identity provider, achieving centralized identity management without
migrating your directory to AWS.

2. Integration with AWS Accounts: IAM Identity Center simplifies managing access across multiple
AWS accounts within your organization. This aligns with the company's use of AWS Organizations.

3. Permissions Sets: IAM Identity Center allows you to define permission sets, which are collections of
IAM policies, and assign them to AD groups. This provides granular access control to AWS resources
based on group membership in Active Directory.

4. Least Operational Overhead: Compared to alternatives, this solution minimizes the need to create
and manage individual IAM users. It leverages existing AD groups, significantly reducing the
operational burden. Creating a managed AD (option A) involves a significant operational overhead for
managing and maintaining an entire directory service. IAM users (option B) are impractical for a large,
dynamic team requiring frequent permission updates, increasing overhead. Cognito (option D)
introduces complexity with identity federation and access token management, adding overhead.

5. Security Compliance: AD Connector uses secure tunnels to connect to your on-premises Active
Directory, while IAM Identity Center uses secure protocols for authentication and authorization. This
helps meet security policies.

Therefore, AD Connector with IAM Identity Center streamlines authentication and authorization, centrally
manages access across AWS accounts, minimizes operational overhead, and complies with security policies.
Here are some links for further research:

1. AWS IAM Identity Center

2. AWS Directory Service

3. AD Connector

---

## Question 1019

**Answer:** **B**

**Explanation:**

Here's a detailed justification for why option B is the correct answer and why the others are not, along with
supporting concepts and links:
Justification for **Option B** (Create a resource policy for the API that denies access to any IP address that is
not specifically allowed):
API Gateway resource policies are specifically designed to control access to your APIs based on various
factors, including source IP addresses. This approach provides fine-grained control at the API level, making it
ideal for restricting access to a defined set of trusted IP addresses. By creating a resource policy that
explicitly denies access to all IP addresses except those on the allowed list, you create a robust security
measure directly tied to the API itself. This mechanism works independently of your VPC configuration or
network ACLs. This means even if your VPC configuration is somehow misconfigured, the API Gateway policy
will still enforce the IP-based restriction.

Why other options are incorrect:

1. **A.** Set up an API Gateway private integration to restrict access to a predefined set of IP addresses:
Private integrations primarily focus on routing requests within your VPC. While you can control
access within your VPC, it doesn't directly address restricting public internet access based on source
IP addresses. A private integration routes requests to a VPC endpoint, but the endpoint itself needs
further restrictions to ensure that only the trusted IP addresses can access the API Gateway, and
that's done through other mechanisms, making this option less direct than option B.

2. **C.** Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the
traffic from specific IP addresses: API Gateway is a managed service that doesn't directly "deploy"
into a private subnet in the way that an EC2 instance would. Even if it did, network ACLs (NACLs)
offer basic stateless traffic filtering at the subnet level. While NACLs can filter based on IP address,
they are not as granular or easily manageable as API Gateway resource policies for controlling API
access. Furthermore, deploying API in a private subnet alone doesn't inherently restrict access from
the internet. You would require additional networking configuration (like NAT Gateway, VPC
Endpoints) to make it work, increasing complexity.

3. **D.** Modify the security group that is attached to API Gateway to allow inbound traffic from only the
trusted IP addresses: API Gateway doesn't have a security group that you directly modify. API
Gateway is a fully managed service, and its underlying infrastructure is managed by AWS. You don't

have direct access to its security groups.

---

# Quick Answer Sheet

Question 1001: D
Question 1002: D
Question 1003: B
Question 1004: B
Question 1005: A
Question 1006: CD
Question 1007: C
Question 1008: D
Question 1009: B
Question 1010: BCD
Question 1011: AC
Question 1012: D
Question 1013: A
Question 1014: B
Question 1015: A
Question 1016: B
Question 1017: D
Question 1018: C
Question 1019: B
