 1955  minikube status
 1956  minikube start --driver=docker
 1957  kubectl get deployments
 1959  kubectl get services
 1960  kubectl get PersistentVolume
 1961  kubectl get PersistentVolumeClaim
 1962  kubectl get ConfigMap


 kubectl delete deployments story-development
 kubectl delete services story-service
 kubectl delete PersistentVolume host-pv
 kubectl delete PersistentVolumeClaim host-pvc
 kubectl delete ConfigMap data-store-env

 2005  cd users-api/
 2006  docker build -t foxcodenine/kub-demo-users .
 2007  docker push foxcodenine/kub-demo-users

 kubectl apply -f=users-deployment.yaml
 kubectl get pods