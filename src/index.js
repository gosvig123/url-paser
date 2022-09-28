
function URLScan(url) {
    let object = {}
    let otherurl = url.split(' ').join('')

    object.port = 80

    if (otherurl.includes('?')) {
        object.query = otherurl.split('?').slice(1,).map(c => c = '?' + c).join('').toString()
    }

    let parts
    otherurl.includes('://') ? parts = otherurl.split('://') : parts = otherurl.split('www.')



    object.scheme = parts[0]
    let rest = parts[1]
    object.path = (parts[parts.length - 1]).split('/').slice(1, 5).join('')
    object.host = rest.split('/')
    if (object.host.length > 1) { object.host = object.host[0] }
    if (object.host.includes('www')) { object.host = object.host.slice(4) }
    return object
}

console.log(URLScan('http://www.arol.dev/test123'))
export default URLScan