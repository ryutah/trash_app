apt-get update
apt-get install -y git build-essential libffi-dev libssl-dev

su -l vagrant -c'git clone https://github.com/sstephenson/rbenv.git /home/vagrant/.rbenv'
echo 'export PATH="/home/vagrant/.rbenv/bin:$PATH"' >> /etc/profile
echo 'eval "$(rbenv init -)"' >> /etc/profile
su -l vagrant -c'git clone https://github.com/sstephenson/ruby-build.git /home/vagrant/.rbenv/plugins/ruby-build'
su -l vagrant -c'source /etc/profile'
su -l vagrant -c'rbenv install 2.2.1'
su -l vagrant -c'rbenv global 2.2.1'
su -l vagrant -c'rbenv rehash'
su -l vagrant -c 'gem update --system'
su -l vagrant -c 'gem install compass --no-ri --no-rdoc'

git clone https://github.com/creationix/nvm.git /home/vagrant/.nvm && \
cd /home/vagrant/.nvm && git checkout `git describe --abbrev=0 --tags` && \
cd /home/vagrant
echo 'source /home/vagrant/.nvm/nvm.sh' >> /etc/profile
source /home/vagrant/.nvm/nvm.sh
nvm install 0.10
nvm alias default 0.10
npm install npm -g

npm install yo -g
npm install bower -g
npm install grunt-cli -g
npm install generator-angular -g

chown -c vagrant:vagrant -R /home/vagrant
