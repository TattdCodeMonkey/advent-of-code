def parseInput(input_file):
    file = open(input_file, "r")
    for line in file:
        yield int(line)

def calibrate(input):
    freq = 0
    print("initial freq: {}".format(freq))
    for freq_adj in parseInput(input):
        freq += freq_adj
        print("adj: {}, new freq: {}".format(freq_adj, freq))

    return freq

print(calibrate("input.txt"))