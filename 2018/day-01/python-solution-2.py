def parseInput(input_file):
    file = open(input_file, "r")
    for line in file:
        yield int(line)

def calibrate(input):
    freq = 0
    print("initial freq: {}".format(freq))
    seen_freq_twice = False
    seen_freqs = set([freq])
    while not seen_freq_twice:
        for freq_adj in parseInput(input):
            freq += freq_adj
            print("adj: {}, new freq: {}".format(freq_adj, freq))
            if freq in seen_freqs:
                seen_freq_twice = True
                break
            seen_freqs.add(freq)

    return freq

print(calibrate("input.txt"))