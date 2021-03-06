const serverList = [
  '193.104.68.45:27020', 
  '193.192.58.216:27043', 
  '176.57.128.40:27023', 
  '176.57.188.33:27015', 
  '193.104.68.38:27023', 
  '176.57.142.179:27035', 
  '193.192.59.222:27023',
  '87.98.241.203:27123',
  '193.104.68.79:27016',
  '87.98.241.203:27055',
  '193.104.68.7:27018',
  '193.104.68.34:27081'
].map(el => 'http://api.gametracker.rs/demo/json/server_info/' + el)

const recvData = serverList.map(el => {
  return new Promise((resolve) => {
    fetch(el)
    .then(response => resolve(response.json()))
  })
})    

Promise.all(recvData)
.then(data => {
  console.log(data)
  data.sort((a, b) => a.rank - b.rank)
  document.querySelector('.cs-table').innerHTML += `${data.map(el => 
  `<tr>
    <td>${el.name}</td>
    <td>${el.ownerusername}</td>
    <td>${el.rank}</td>
    <td>${el.modname}</td>
    <td>${el.players}</td>
    <td>${el.map}</td>
    <td>${el.countryname}</td>
  </tr>`).join('')}`
})
.catch(err => console.log(err))    

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});




