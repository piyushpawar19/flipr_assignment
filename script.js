
function confirmDelete() {
    return confirm('Are you sure you want to delete this item?');
  }
  

  function fetchData() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Process the fetched data
        console.log(data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }
  

  function submitForm() {
    const formData = new FormData(document.getElementById('myForm'));
    fetch('/api/submit', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
      })
      .catch(error => {
        // Handle error
        console.error('Error submitting form:', error);
      });
  }
  
  
  document.getElementById('myButton').addEventListener('click', () => {
    // Handle button click
    console.log('Button clicked!');
  });
  