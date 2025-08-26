// Metricas no K6
import http from 'k6/http'
import { Counter, Gauge, Rate, Trend } from 'k6/metrics'

export const options = {
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('quantidade_de_chamadas')
const myGauge = new Gauge('Tempo_bloqueado')
const myRate = Rate('Taxa_req_200')
const myTrend = new Trend('Taxa_de_espera')

export default function (){
    const req = http.get('http://test.k6.io')
    // Taxa
    chamadas.add(1)

    // medidor
    myGauge.add(req.timings.blocked)

    // Taxa
    myRate.add(req.status === 200)

    // Tendência
    myTrend.add(req.timings.waiting)
}