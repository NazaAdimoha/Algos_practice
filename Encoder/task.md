Write a function that replaces the words in `raw` with the words in `code_words` such that the first occurrence of
each word in `raw` is assigned the first unassigned word in `code_words`.
Assume that the total number of unique elements in `raw` string is greater than the total number of unique elements in `code_words`

encoder(["a"], ["1", "2", "3", "4"]) → ["1"]
encoder(["a", "b"], ["1", "2", "3", "4"]) → ["1", "2"]
encoder(["a", "b", "a"], ["1", "2", "3", "4"]) → ["1", "2", "1"]
encoder(["a", "b", "a", "c"], ["1", "2", "3", "4"]) → ["1", "2", "1", "3"]


Thought process:
convert raw string to an array
