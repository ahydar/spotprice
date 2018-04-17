
function getData(){
    axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(function(result){
        console.log(result.data.data.amount);
        return result.data.data.amount;
    });

    //setTimeout(getData,10000);
}

getData();

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets:[
            {
                data:[]
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
        },
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});

/*var myChart = new Chart(ctx, {
    type: 'bar',
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
        }]
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
});*/

function addData(){
    axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(function(result){
        console.log(result.data.data.amount);
        myChart.data.labels.push("");
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.push(result.data.data.amount);
        });
        myChart.update();
    });
   
    setTimeout(addData,15000);
}