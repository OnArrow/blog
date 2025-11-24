# a

## 二级域名部署地址和主域名不在同一个文件夹下

```
server {
    listen 80 ;
    server_name v31-admin-test.51baoy.com;
    index index.php index.html index.htm default.php default.htm default.html;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Host $server_name;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;
    access_log /www/sites/v31-admin-test.51baoy.com/log/access.log main;
    error_log /www/sites/v31-admin-test.51baoy.com/log/error.log;
    location ^~ /.well-known/acme-challenge {
        allow all;
        root /usr/share/nginx/html;
    }
    root /www/sites/v31-admin-test.51baoy.com/index;
    error_page 404 /404.html;

    location /kjcd {
      alias /www/sites/kjcd;
      try_files $uri $uri/ /kjcd/index.html;
    }

    location / {
      try_files $uri $uri/ /index.html;
    }

    location /v3 {
      try_files $uri $uri/ /v3/index.html;
    }

    location /sl {
      try_files $uri $uri/ /sl/index.html;
    }
}
```
