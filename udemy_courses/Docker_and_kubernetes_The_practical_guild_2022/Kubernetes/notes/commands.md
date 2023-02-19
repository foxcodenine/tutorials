### build the docker image:

    $ docker build -t kub-first-app .

    $ docker tag kub-first-app foxcodenine/kub-first-app

    $ docker push foxcodenine/kub-first-app

### check minikube status

    $ minikube status

### to restart minikube

    $ minikube start --driver=docker

### sending instractions to the claster

    $ kubectl help

    $ kubectl create  # (open help for create)

    $ kubectl create deployment first-app --image=foxcodenine/kub-first-app

    $ kubectl get deployments 

    $ kubectl get pods

    $ minikube dashboard

    $ kubectl delete deployments first-app

### from minikube site (https://minikube.sigs.k8s.io/docs/start/)

Interact with your cluster:

    $ kubectl get po -A

Alternatively, minikube can download the appropriate version of kubectl and you should be able to use it like this:

    $ minikube kubectl -- get po -A

You can also make your life easier by adding the following to your shell config:

    alias kubectl="minikube kubectl --"


### Exposing a Deployment with a Service

    $ kubectl expose deployment first-app --port=8080 --type=ClusterIP           # default, only reachable within the claster

    $ kubectl expose deployment first-app --port=8080 --type=NodePort            # expose the worker note - reachable from outside

    $ kubectl expose deployment first-app --port=8080 --type=LoadBalancer        # use a load balancer that expose a common ip address
    (only avalable if the infrastructure that run the cluster supports a load balancer like AWS)

    $ kubectl get services

    $ minikube service first-app

### Scaling 

    $ kubectl scale deployment/first-app --replicas=3

    $ kubectl get pods

### Updating Deployments (if source code has been changed)

    $ docker build -t foxcodenine/kub-first-app:2 .

    $ docker push foxcodenine/kub-first-app:2

    $ minikube start --driver=docker

    $ kubectl get deployment

    $ minikube dashboard
    
    $ kubectl set image deployment/first-app kub-first-app=foxcodenine/kub-first-app:2

    $ kubectl rollout status deployment/first-app


### Rollback & History

    $ kubectl set image deployment/first-app kub-first-app=foxcodenine/kub-first-app:nonexistent

    $ kubectl rollout status deployment/first-app

    $ kubectl get pods

    $ kubectl rollout undo deployment/first-app

    $ kubectl rollout status deployment/first-app

    $ kubectl rollout history deployment/first-app

    $ kubectl rollout history deployment/first-app --revision=3
    $ kubectl rollout history deployment/first-app --revision=4
    $ kubectl rollout history deployment/first-app --revision=1

    $ kubectl rollout undo deployment/first-app --to-revision=3
    $ kubectl rollout history deployment/first-app --revision=1

### Deleteing 

    $ kubectl delete service first-app
    $ kubectl delete deployment first-app

### Creating a yaml file

> https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/

> https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/deployment-v1/


    $ kubectl apply -f=deployment.yaml

    $ kubectl get deployment

    $ kubectl get pods

    $ kubectl apply -f=service.yaml

    $ kubectl get services

    $ minikube service backend

### Updating & Deleting Resources (using a yaml file) (declarative approach)

To update just change the yaml file and re-run apply
Ex  in yaml file:

    from    replicas: 1 
    to      replicas: 2
    and
    from    image: academind/kub-first-app:2
    to      image: academind/kub-first-app:3


    $ kubectl apply -f=deployment.yaml

To delete:

    $ kubectl delete deployment   (imperatively)
    or
    $ kubectl delete -f=deployment.yaml -f=service.yaml    (declarative)
    or
    $ kubectl delete -f=deployment.yaml,service.yaml       (declarative)


### Single Config File

In the master-deployment-service.yaml we have merged the service and deployment
file and seperate them with 3 dashes '---'. Note it is a good practise to do the 
service before the deployment.

    $ kubectl delete -f=deployment.yaml -f=service.yaml

    $ kubectl apply -f=master-deployment-service.yaml

    $ minikube service backend

### Delete by lable

    $ kubectl delete deployments,services -l mygroup=example

    $ kubectl get services

    $ kubectl get deployment

### Volumns (emptyDir, hostPath, CSI)

### Kinds used so far
1. Deployment
2. Service
3. PersistentVolume
4. PersistentVolumeClaim
5. ConfigMap

### Get Storage Class

    $ kubectl get sc

### Envierment Variables & ConfigMaps

    $ kubectl apply -f=environment.yaml












