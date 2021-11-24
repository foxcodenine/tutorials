#!/bin/bash
  

homedir=$(echo $HOME)
suffix=$(date +%m%d)
username=$(whoami)

#---------------------------------------------------------------------------------------


if [ ! -d $homedir ]

then
        echo "Current user's home directory does not exist. There is nothing to backup"
        exit 0
fi


#---------------------------------------------------------------------------------------


if [ -e "/tmp/$username.$suffix" ]
then
        read -p 'backup already exist, overwrite current backup? yes/no >>> ' res
else
        res='yes'
fi

#---------------------------------------------------------------------------------------

if [ $res = 'yes' ]
then
        tar  --exclude=$homedir/.ssh -czf "/tmp/$username.$suffix"  $homedir 2> /dev/null
        echo "Home directory backed up at /tmp/$username.$suffix"
fi


#---------------------------------------------------------------------------------------

