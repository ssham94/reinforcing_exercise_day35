def longestConsecutive(list_of_strings, k):
    longest = ''
    for i in range(len(list_of_strings)):
        temp_word = ''.join(list_of_strings[i:i+k])
        if len(longest) < len(temp_word):
            longest = temp_word
    return longest


# Checking that the function is printing the correct answer
print(longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3)) #// -> 'marblesmittensbye'

print(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)) #// --> "abigailtheta"