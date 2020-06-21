#!/bin/sh

cd ~
rm -rf .node/
wget https://nodejs.org/dist/v14.4.0/node-v14.4.0-linux-x64.tar.xz
tar -xf node-v14.4.0-linux-x64.tar.xz
rm node-v14.4.0-linux-x64.tar.xz
mv node-v14.4.0-linux-x64 .node
cd .node/
echo "export NODE_HOME=`pwd`" >> ~/.bashrc
export NODE_HOME=`pwd`
echo "alias node='$NODE_HOME/bin/node'" >> ~/.bashrc
echo "alias npm='$NODE_HOME/bin/npm'" >> ~/.bashrc
