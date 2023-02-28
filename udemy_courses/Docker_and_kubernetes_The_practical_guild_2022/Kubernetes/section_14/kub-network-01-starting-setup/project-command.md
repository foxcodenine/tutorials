minikube status
minikube start --driver=docker
kubectl get deployments
kubectl get services
kubectl get PersistentVolume
kubectl get PersistentVolumeClaim
kubectl get ConfigMap


kubectl delete deployments story-development
kubectl delete services story-service
kubectl delete PersistentVolume host-pv
kubectl delete PersistentVolumeClaim host-pvc
kubectl delete ConfigMap data-store-env

cd users-api/
docker build -t foxcodenine/kub-demo-users .

docker push foxcodenine/kub-demo-users

kubectl apply -f=users-deployment.yaml
kubectl get pods
kubectl apply -f=users-service.yaml

minikube service users-service


docker build -t foxcodenine/kub-demo-auth .
docker push foxcodenine/kub-demo-auth


kubectl apply -f=auth-service.yaml -f=auth-deployment.yaml

kubectl get services                      (to ge the service ip address)

kubectl delete -f=users-deployment.yaml
kubectl apply  -f=users-deployment.yaml
kubectl get pods


docker build -t foxcodenine/kub-demo-tasks .;
docker push foxcodenine/kub-demo-tasks;
kubectl apply -f=tasks-service.yaml -f=tasks-deployment.yaml
kubectl get deployment
kubectl get pods

minikube service tasks-service


docker build -t foxcodenine/kub-demo-frontend .

docker run -p 81:80 --rm -d foxcodenine/kub-demo-frontend

docker push foxcodenine/kub-demo-frontend

kubectl apply -f=frontend-service.yaml;
kubectl apply -f=frontend-deployment.yaml;

minikube service frontend-service

