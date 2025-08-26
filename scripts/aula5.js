// Thresholds
import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 1,
    duration: '3s',
    thresholds:{
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 20'],
        http_req_duration: [{threshold:'p(95) < 210', abortOnFail: true}],
        checks: ['rate > 0.99']
    }
}

export default function (){
    const resp = http.get('http://test.k6.io')
    check(resp, {
        'Status code é 200': (r) => r.status === 200
    })
}