This website was based on a skeleton provided by UIUC's CS498 course staff.

The directory contains a Vagrantfile which provisions a Ubuntu 16 VM using VirtualBox and installs all required dependencies.

To run local server forwarded to port 3000:
```
vagrant up
vagrant ssh
cd /vagrant_data/
grunt
```
