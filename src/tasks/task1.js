process.stdin.on(
  'data', data => console.log(
    data
      .toString()
      .split('')
      .reverse()
      .slice(1)
      .join('')
  )
);