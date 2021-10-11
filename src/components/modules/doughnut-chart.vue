<script>
import { Doughnut } from 'vue-chartjs'
import 'chartjs-plugin-labels'

export default {
    extends: Doughnut,
    data() {
        return {
            chartData: {
                labels: ['Ecosystem', 'Foundation', 'Launchpad Sale', 'Team', 'Staking Rewards', 'Advisors'],
                datasets: [
                    {
                        borderWidth: 4,
                        backgroundColor: ['#0089b5', '#0095bf', '#00b1d8', '#008ab6', '#096582', '#00a6cf'],
                        data: [23.3, 22, 19, 16, 12, 4]
                    }
                ]
            },
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { padding: 30, fontSize: 14 }
                },
                plugins: {
                    labels: {
                        render: 'percentage',
                        fontColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                        fontSize: 16
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%'
                        }
                    }
                }
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
