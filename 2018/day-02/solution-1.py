from functools import reduce

def parseInput():
    input_filename = "input.txt"
    file = open(input_filename, "r")
    for line in file:
        yield line

def countLetters(value):
    result = {}
    for letter in value:
        if letter in result:
            result[letter] += 1
        else:
            result[letter] = 1
    return result

def idReducer(res, val):    
    twoLetter = False
    threeLetters = False
    for _,v in countLetters(val).items():
        if v == 2:
            twoLetter = True
        if v == 3:    
            threeLetters = True
    if twoLetter:
        res['2'] += 1
    if threeLetters:    
        res['3'] += 1
    return res

def checksum(input):
    result = reduce(idReducer, input(), {'2': 0, '3': 0})    
    return result['2'] * result['3']

def test_checksum():
    def testInput():
        yield "abcdef"
        yield "bababc"
        yield "abbcde"
        yield "abcccd"
        yield "aabcdd"
        yield "abcdee"
        yield "ababab"

    checkSumResult = checksum(testInput)
    print("checksum result: {}".format(checkSumResult))
    assert checkSumResult == 12

#test_checksum()
print(checksum(parseInput))