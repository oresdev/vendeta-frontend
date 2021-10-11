<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data() {
        return {
            chartData: {
                labels: ['', '', ''],
                datasets: [
                    {
                        backgroundColor: 'hsla(195, 87%, 27%, 0.315)',
                        data: [0, 0.55, 0.55],
                        label: 'Next Price: US$',
                        borderColor: '#ffffff'
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
