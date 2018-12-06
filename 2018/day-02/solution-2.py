from functools import reduce
import itertools

def parseInput():
    input_filename = "input.txt"
    file = open(input_filename, "r")
    for line in file:
        yield line

def one_character_difference(s1, s2):
    differences = 0
    for c1, c2 in zip(s1, s2):
        if c1 != c2:
            differences += 1
        if differences > 1:
            return False
    
    if differences == 1:
        return True
    return False

def common_letters(id1, id2):
    result = ""
    for c1, c2 in zip(id1, id2):
        if c1 == c2:
            result += c1
    return result

def find_common_ids(input):
    for id1, id2 in itertools.combinations(input(), 2):
        one_character_different = one_character_difference(id1, id2)
        if one_character_different:
            return common_letters(id1, id2)
    
    return None

def test_find_common_ids():
    def testInput():
        yield "abcde"
        yield "fghij"
        yield "klmno"
        yield "pqrst"
        yield "fguij"
        yield "axcye"
        yield "wvxyz"

    common_letters_res = find_common_ids(testInput)
    print("result: {}".format(common_letters_res))
    assert common_letters_res == "fgij"

#test_find_common_ids()
print(find_common_ids(parseInput))
