#!/usr/bin/python3

def multiply_list_map(my_list=[], number=0):
    '''
    returns a list with all the values multiplied
    by a number without using any loops
    '''
    mul_val = (list(map((lambda i: i * number), my_list)))
    return mul_val