'''
print("Hello World");

edibele = ['yam', 'fruits', 'kernel', 'nuts', 'seeds',];
print(edibele[3]);


x = 5
y = 10
print(x + y);


height = float(input("height of the rectangle: "));
width = float(input("width of the rectangle: "));
area = height * width;
print(f"The area of the rectangle is {area}");
'''


#!/usr/bin/python3
'''A module for working with Pascal's triangle.
'''

def pascal_triangle(n):
    '''Creates a list of lists of integers representing
    the Pascal's triangle of a given integer.
    '''
    triangle = []
    if type(n) is not int or n <= 0:
        return triangle
    for i in range(n):
        line = []
        for j in range(i + 1):
            if j == 0 or j == i:
                line.append(1)
            elif i > 0 and j > 0:
                line.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
        triangle.append(line)
    return triangle