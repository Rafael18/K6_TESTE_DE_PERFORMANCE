// Importar o modulo Http
import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 1,
    duration: '3s'
}

export default function (){
    const resp = http.get('http://test.k6.io')
    check(resp, {
        'Status code é 200': (r) => r.status === 200
    })
}