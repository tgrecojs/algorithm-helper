/** 

To examine the validity of str substrings we use 2 counters:
  1. uniqueCounter (Integer) - the number of unique characters of arr that our current substring contains.
  2. countMap (Map/Hash Table) - the number of occurrences of each character of arr in our current substring.
*/

function getShortestUniqueSubstring(arr, str):
    headIndex = 0
    result = ""
    uniqueCounter = 0
    countMap = new Map()

    # initialize countMap
    for i from 0 to arr.length - 1:
        countMap.setValueOf(arr[i], 0)

    # scan str
    for (tailIndex from 0 to str.length - 1:
        # handle the new tail
        tailChar = str.charAt(tailIndex)

        # skip all the characters not in arr
        if (countMap.keyExists(tailChar) == false):
            continue

        tailCount = countMap.getValueOf(tailChar)
        if (tailCount == 0):
            uniqueCounter = uniqueCounter + 1

        countMap.setValueOf(tailChar, tailCount + 1)

        # push head forward
        while (uniqueCounter == arr.length):
            tempLength = tailIndex - headIndex + 1
            if (tempLength == arr.length): 
            # return a substring of str from
                # headIndex to tailIndex (inclusive)
                return str.substring(headIndex, tailIndex)

            if (result == "" OR tempLength < result.length):
                # return a substring of str from
                # headIndex to tailIndex (inclusive)
                result = str.substring(headIndex, tailIndex)

            headChar = str.charAt(headIndex)

            if (countMap.keyExists(headChar)):
                headCount = countMap.getValueOf(headChar) - 1
                if (headCount == 0):
                    uniqueCounter = uniqueCounter - 1
                countMap.setValueFor(headChar, headCount)

            headIndex = headIndex + 1

    return result
*/
