import bisect

def reverse(arr, start, end):
	while (start < end):
		arr[start], arr[end] = arr[end], arr[start]
		start += 1
		end -= 1
	return arr

def next_permutation(arr):
	i = len(arr) - 2
	while(i >= 0 and arr[i + 1] <= arr[i]):
		i -= 1
	
	arr = reverse(arr, i + 1, len(arr) - 1)

	permutation_exists = False

	if i >= 0:
		idx = bisect.bisect_right(arr, arr[i], lo=i + 1)
		if idx < len(arr):
			permutation_exists = True
			arr[i], arr[idx] = arr[idx], arr[i]
	
	return permutation_exists, arr
