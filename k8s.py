#!/usr/bin/python3

print("content-type: text/html")
print("Access-Control-Allow-Origin: *")
print()

import cgi
import subprocess
import os


x=cgi.FieldStorage()
cmd=x.getvalue("cmd")
cmd1=x.getvalue("cmd1")
cmd2=x.getvalue("cmd2")
cmd3=x.getvalue("cmd3")
cmd4=x.getvalue("cmd4")
cmd5=x.getvalue("cmd5")
cmd6=x.getvalue("cmd6")
cmd7=x.getvalue("cmd7")
cmd8=x.getvalue("cmd8")
cmd9=x.getvalue("cmd9")
cmd10=x.getvalue("cmd10")
cmd11=x.getvalue("cmd11")




if cmd10 is not None:
  cmd="sudo kubectl delete deployment {} --kubeconfig admin.conf".format(cmd10)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))


if cmd11 is not None:
  cmd="sudo kubectl delete all --all --kubeconfig admin.conf"
  y=subprocess.getoutput(cmd)
  print("{}".format(y))



if cmd is not None:
  cmd="sudo {} --kubeconfig admin.conf".format(cmd)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))

if cmd2 is not None and cmd1 is not None:
  cmd="sudo kubectl run  pod {} --image={} --kubeconfig admin.conf".format(cmd1,cmd2)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))


if cmd3 is not None:
  cmd="sudo kubectl delete pod {} --kubeconfig admin.conf".format(cmd3)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))


if cmd4 is not None and cmd5 is not None:
  cmd="sudo kubectl create deployment {} --image {}  --kubeconfig admin.conf".format(cmd4,cmd5)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))


if cmd6 is not None and cmd7 is not None:
  cmd="sudo kubectl scale deployment {}  --replicas {}  --kubeconfig admin.conf".format(cmd6,cmd7)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))


if cmd8 is not None and cmd9 is not None:
  cmd="sudo kubectl expose deployment {} --port={}  --type=NodePort  --kubeconfig admin.conf".format(cmd8,cmd9)
  y=subprocess.getoutput(cmd)
  print("{}".format(y))
