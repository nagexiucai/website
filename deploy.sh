#!/usr/bin/env sh

rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

yum install -y php55w-fpm php55w-opcache php55w-mysql php55w-common mariadb-server nginx git
mkdir /var/lib/php/session
chmod 777 /var/lib/php/session
groupadd www
adduser www -g www
git clone https://github.com/nagexiucai/website.git /home/www
chown www:www /home/www -R
# 工程目录下所有文件夹755
cp -f /home/www/website/my.cnf /etc
cp -f /home/www/website/server.cnf /etc/my.cnf.d
cp -f /home/www/website/php.ini /etc
cp -f /home/www/website/www.conf /etc/php-fpm.d
cp -f /home/www/website/nginx.conf /etc/nginx
systemctl enable mariadb
systemctl enable php-fpm
systemctl enable nginx
systemctl start mariadb
systemctl start php-fpm
systemctl start nginx
read -t 30  -p "设置数据库ROOT账户密码：" PASSWORD
mysqladmin -u root password $PASSWORD
# mysql -u root -p
# <== $PASSWORD
# use mysql;
# update user set host='%' where user='root';
# flush privileges;
# exit;
systemctl restart mariadb
echo "请自行添加到website的DNS！"
echo "切记数据库ROOT账户密码！"
echo "Good Job:)"