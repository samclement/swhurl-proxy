# Proxy

Configuration for swhurl.com reverse proxy. Serves over http2, includes basic/auth and gzip.

Includes:

- swhurl.com
- staging.swhurl.com
- grafana.swhurl.com
- prometheus.swhurl.com
- alert.swhurl.com
- jaeger.swhurl.com
- drone.swhurl.com
- registry.swhurl.com
- id.swhurl.com

- `docker run -d --name proxy --net swhurl -p 3080:80 -p 3443:443 -v ${PWD}/Caddyfile:/etc/Caddyfile -v ${PWD}/caddy:/root/.caddy -e ADMIN_USER=<user> -e ADMIN_PASSWORD=<password> abiosoft/caddy --conf /etc/Caddyfile --log stdout`
