import streamlit as st
import numpy as np
import time
import pandas as pd
from next_permutation import next_permutation

st.title("next_permutation")

# generating the elements
num_elements = st.sidebar.slider("Number of elements", 1, 10, 10)
arr = np.random.randint(1, 10, num_elements)
info = ", ".join([str(val) for val in arr])
st.sidebar.info(info)

generate = st.sidebar.checkbox("Generate")

# plotting the elements
chart = st.line_chart(arr)

if generate:
	exists, arr = next_permutation(arr)
	for i in range(0, 1000):
		chart.empty()
		chart = st.line_chart(arr)
		# st.write(arr)
		exists, arr = next_permutation(arr)
		time.sleep(0.1)
		if not exists:
			break
	