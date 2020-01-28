
export default (dateIn) => new Intl.DateTimeFormat('en-US',
  {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format((dateIn));
