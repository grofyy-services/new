 psql -h new.cd02yeymmv4n.us-east-2.rds.amazonaws.com -p 5432 -U postgres -d postgres





npm create vite@latest frontend -- --template react
cd frontend
npm install



----- after ec2 create -------
install docker & compose 

 ~/Downloads ---->  ssh -i cicd-demo.pem ec2-user@3.150.123.81 -- checkout to ec2 in terminal


<!-- sudo mkdir -p /opt/product-app
sudo chown -R ec2-user:ec2-user /opt/product-app   # or ubuntu:ubuntu -->

sudo yum install -y git

sudo yum -y install docker
sudo systemctl enable --now docker
docker --version

sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -fSL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \
  -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
docker compose version
