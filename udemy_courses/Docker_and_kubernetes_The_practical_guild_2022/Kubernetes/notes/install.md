### Install kubectl

https://kubernetes.io/docs/tasks/tools/

for linux: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/ 

Install using on Debian/Ubuntu (check site, installation might be updated):

1). Update the apt package index and install packages needed to use the Kubernetes apt repository:

    $ sudo apt-get update
    $ sudo apt-get install -y ca-certificates curl

2). If you use Debian 9 (stretch) or earlier you would also need to install apt-transport-https:

    $ sudo apt-get install -y apt-transport-https

3). Download the Google Cloud public signing key:

    $ sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg

4). Add the Kubernetes apt repository:

    $ echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

5). Update apt package index with the new repository and install kubectl:

    $ sudo apt-get update
    $ sudo apt-get install -y kubectl

6). Check

    $ kubectl version --client 
    # or
    $ kubectl version --client --output=yaml 

------------------------------------------------------------------------

### minikube

1). Installation

    $ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    $ sudo install minikube-linux-amd64 /usr/local/bin/minikube

2). Start your cluster

    $ minikube start
    # or
    $ minikube start --driver=docker

3). status, dashboard and delete

    $ minikube status

    $ minikube dashboard

    $ minikube delete

------------------------------------------------------------------------
    