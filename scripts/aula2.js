// Importar o modulo Http
import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '3s'
}

export default function (){
    const resp = http.get('http://test.k6.io')

}