# Reverse proxy for swhurl.com

This uses [Redbird](https://github.com/OptimalBits/redbird) as a reverse proxy with automatic SSL provisioning from LetsEncrypt.

This package can run natively on the host or inside a container.

### Host

- Can use localhost for target hosts
- Need to manage port contention, i.e. target hosts must use unique ports  

#### Usage

- Create a `rules.json` file ([example](example-rules.json))
- `npm i`
- `npm start`

### Container

- Target hosts can use any port (since isolated by container networking)
- Need all containers, including proxy container, to be on the same container network for hostname reolution (i.e. container names)  

#### Usage

- Create a `rules.json` file ([example](example-rules.json))
- Build image (optional): `docker build -t <my_image_name>` 
- Start container: `docker run -d -p 3080:3080 -p 3443:3443 -v ${PWD}/rules.json:/www/rules.json -v ${PWD}/certs:/www/certs --restart always --name proxy --net <my_net> swhurl/proxy`

