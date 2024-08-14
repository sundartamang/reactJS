Purpose: useMemo is a React Hook that allows you to optimize your components by memoizing expensive function calls. This means the function will only recompute the value if the dependencies change.

Usage: It takes two arguments: a function to compute a value and a dependency array. If any value in the dependency array changes, the function is re-executed; otherwise, it returns the cached result from the previous execution.