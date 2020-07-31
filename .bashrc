#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias c='clear'
#PS1='[\u@\h \W]\$ '

PATH="$HOME/scripts:$PATH"
export PATH	
#alias i3cheatsheet='egrep ^bind ~/.config/i3/config | cut -d '\'' '\'' -f 2- | sed '\''s/ /\t/'\'' | column -ts $'\''\t'\'' | pr -2 -w 145 -t | less'
