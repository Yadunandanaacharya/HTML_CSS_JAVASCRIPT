# a=[[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
# print(a)
# print(a[3][0][2])
# #source freecodecamp.org

myglobal=10   #global
myoops=5  #global
def fun1():
	pass

def fun2():
	output=" "   #local
	if type(myglobal)!='undefined':
		output+=' myglobal:'+ str(myglobal)
	if type(myoops)!='undefined':
		output+=' output'+ str(myoops)
	return output

a=fun2()
print(a)