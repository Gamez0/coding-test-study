#!/usr/bin/env python
# coding: utf-8

# In[21]:


import sys


# In[20]:


n = int(sys.stdin.readline()) # jupyter는 sys 모듈에 문제가 있다...
stack = []


# In[22]:


while n:
    command = sys.stdin.readline().strip()
    if command[:2]=="pu":
        num = int(command.split(' ')[1])
        stack.append(num)
    if command[:2]=="po":
        if len(stack)==0:
            print(-1)
        else:
            print(stack.pop())
    if command[0]=='s':
        print(len(stack))
    if command[0]=='e':
        if len(stack)==0:
            print(1)
        else:
            print(0)
    if command[0]=='t':    
        if len(stack)==0:
            print(-1)
        else:
            print(stack[-1])
    n-=1


# In[ ]:




