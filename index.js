Chart.register(ChartDataLabels);

// Função para desenhar o texto no centro do gráfico
function drawCenterText(chart, text) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    ctx.restore();
    const fontSize = (height / 6).toFixed(2); // Ajusta o tamanho da fonte conforme a altura do gráfico
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black'; // Cor do texto no centro

    // Calcula a posição do texto para centralizá-lo
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    // Desenha o texto no centro do gráfico
    ctx.fillText(text, textX, textY);
    ctx.save();
}

const graficoDesempenho = document.getElementById('grafico-desempenho').getContext('2d');
const chartDesempenho = new Chart(graficoDesempenho, {
    type: 'line',
    data: {
        labels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        datasets: [{
            label: 'Vendas',
            data: [100, 150, 200, 180, 250, 150, 400],
            borderColor: 'red',
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: false // Desativa os rótulos dos dados (remove os números)
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); 

// Gráfico de aumento de vendas 1
const graficoAumento1 = document.getElementById('grafico-aumento-1').getContext('2d');
const chartAumento1 = new Chart(graficoAumento1, {
    type: 'doughnut',
    data: {
        labels: ['Aumento', 'Outros'],
        datasets: [{
            data: [50, 50],
            backgroundColor: ['red', '#ddd'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                display: false // Oculta todos os datalabels
            }
        },
        cutout: '70%', // Ajusta a largura da parte branca interna
        layout: {
            padding: 0
        }
    },
    plugins: [{
        id: 'textCenter1',
        beforeDraw: (chart) => {
            drawCenterText(chart, '50%'); // Chama a função para desenhar '50%' no centro
        }
    }]
});

// Gráfico de aumento de vendas 2
const graficoAumento2 = document.getElementById('grafico-aumento-2').getContext('2d');
const chartAumento2 = new Chart(graficoAumento2, {
    type: 'doughnut',
    data: {
        labels: ['Aumento', 'Outros'],
        datasets: [{
            data: [96, 4],
            backgroundColor: ['red', '#ddd'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                display: false // Oculta todos os datalabels
            }
        },
        cutout: '70%', // Ajusta a largura da parte branca interna
        layout: {
            padding: 0
        }
    },
    plugins: [{
        id: 'textCenter2',
        beforeDraw: (chart) => {
            drawCenterText(chart, '96%'); // Chama a função para desenhar '96%' no centro
                }
             }]
         });