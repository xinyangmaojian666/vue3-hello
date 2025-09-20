<template>
    <div class="gauge-container">

        <div ref="chartRef" class="chart"></div>

        <div class="inner-circle">
            <div>100000</div>
            <div>69%</div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
    chartInstance = echarts.init(chartRef.value)
    const option = {
        series: [
            {
                type: 'gauge',
                progress: {
                    show: true,
                    width: 8
                },
                axisLine: {
                    lineStyle: {
                        width: 8
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 20,
                    offsetCenter: [0, -90],
                    itemStyle: {
                        color: 'red',
                    }
                },
                detail: {
                    show: false
                },
                data: [
                    {
                        value: 50,
                    }
                ]
            }
        ]
    }
    chartInstance.setOption(option)

    let timer = setInterval(() => {
        const newValue = Math.floor(Math.random() * 100)
        chartInstance.setOption({
            series: [{
                data: [{ value: newValue }]
            }]
        })
    }, 5000)

    onBeforeUnmount(() => {
        clearInterval(timer)
    })
})

onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.dispose()
    }
})
</script>
<style scoped>
.gauge-container {
    position: relative;
    width: 200px;
    height: 200px;
    background-image: url(aaa.png);
}

.chart {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
}

.inner-circle {
    position: absolute;
    left: calc(200px / 2 - 120px / 2);
    top: calc(200px / 2 - 120px / 2);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) inset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #333;
}
</style>