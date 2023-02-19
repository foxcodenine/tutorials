2002  docker build -t foxcodenine/kub-data-demo .
2003  docker push  foxcodenine/kub-data-demo 
1991  kubectl apply -f=service.yaml -f=deployment.yaml
1993  kubectl get deployment
1995  minikube service story-service
1957  docker build -t foxcodenine/kub-data-demo:1 .
1958  docker push foxcodenine/kub-data-demo:1
1959  kubectl apply -f=deployment.yaml


kubectl apply -f=host-path-persist-vol.yaml
kubectl apply -f=host-path-persistent-vol-clam.yaml  
kubectl apply -f=service.yaml 
kubectl apply -f=deployment.yaml
kubectl get pv
kubectl get pvc
kubectl get deployment

kubectl apply -f=environment.yaml



