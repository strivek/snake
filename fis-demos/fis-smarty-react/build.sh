#!/bin/bash

MOD_NAME="selectGroup"
TAR="$MOD_NAME.tar.gz"
STATIC_TAR="static-$MOD_NAME.tar.gz"

# add path
export PATH=/home/fis/npm/bin:$PATH
#show fis-plus version
fis3 --version --no-color

#通过fis-plus release 命令进行模块编译 同时需开启-u 独立缓存编译方式，产出到同目录下output中
fisp release -prod -d output
#进入output目录
cd output
#删除产出的test目录
rm -rf test
#删除产出的server-conf目录
rm -rf server-conf
#template目录不需要修正
#common模块以外没有plugin目录

# 打包静态文件
cd static
tar zcf $STATIC_TAR ./*
mv $STATIC_TAR ../../ 

cd ..
#修正static目录
mkdir webroot
mv static webroot/static

#修正config目录
mkdir -p data/smarty
mv config data/smarty/config

#将output目录进行打包
tar zcf $TAR ./*
mv $TAR ../

cd ..
rm -rf output

mkdir output

mv $TAR output/
mv $STATIC_TAR output/

echo "build end"