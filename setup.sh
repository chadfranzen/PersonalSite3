#!/bin/bash

sudo apt-get update
sudo apt-get -y install make build-essential bison openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libxml2-dev autoconf libc6-dev ncurses-dev automake libtool git
if [[ -d ~/.rbenv ]]; then
  echo "rbenv already installed - pull latest updates:"
  git -C ~/.rbenv pull
else
  # Check out rbenv into ~/.rbenv
  git clone https://github.com/rbenv/rbenv.git ~/.rbenv
  chown -R vagrant ~/.rbenv
fi

# Add ~/.rbenv/bin to $PATH, enable shims and autocompletion
read -d '' String <<"EOF"
# rbenv
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
EOF

grep -q rbenv ~/.bashrc; if [[ "$?" = "0" ]]; then
  echo "rbenv already enabled in ~/.bashrc"
else
  # Save to ~/.bashrc
  echo -e "\n${String}" >> ~/.bashrc
fi

echo "$PATH" | grep -q "/.rbenv/bin:"; if [[ "$?" = "0" ]]; then
  echo "rbenv already enabled in current shell"
  RBENV_ENABLED=yes
else
  RBENV_ENABLED=no
  # Enable rbenv for current shell
  export PATH="~/.rbenv/bin:$PATH"
  eval "$(rbenv init -)"
fi;
if [[ -d ~/.rbenv/plugins/ruby-build ]]; then
  echo "ruby-build already installed - pull latest updates:"
  git -C ~/.rbenv/plugins/ruby-build pull
else
  # Install ruby-build as an rbenv plugin, adds `rbenv install` command
  git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
fi

# Install ruby-build dependencies
# try to install libgdbm5 (may not work on all systems, eg Raspbery Pi)
sudo apt-get install -y libgdbm5
# if that fails, install libgdbm3
if [[ $? != 0 ]]; then sudo apt-get install -y libgdbm3; fi

# Install Ruby ($VER), don't generate RDoc to save lots of time
# Set Ruby $VER as the global default
export VER=2.7.2
export CONFIGURE_OPTS="--disable-install-doc --enable-shared"
rbenv install $VER --verbose
rbenv global $VER

# Don't install docs for gems (saves lots of time)
if [[ -e ~/.gemrc ]]; then
  grep -q "gem: --no-document" ~/.gemrc; if [[ "$?" != "0" ]]; then
    # ~/.gemrc exists, but doesn't contain this line:
    echo "gem: --no-document" >> ~/.gemrc
  fi
else
  # ~/.gemrc doesn't exist:
  echo "gem: --no-document" > ~/.gemrc
fi
gem install compass


mkdir ~/.nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
cd /vagrant_data/
npm install
npm install -g bower
npm install -g grunt

read -d '' String <<"EOF"
export NVM_DIR="~/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF
grep -q nvm ~/.bashrc; if [[ "$?" = "0" ]]; then
  echo "nvm already enabled in ~/.bashrc"
else
  # Save to ~/.bashrc
  echo -e "\n${String}" >> ~/.bashrc
fi
