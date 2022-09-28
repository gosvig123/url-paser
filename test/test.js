import assert from "assert";

import URLScan from "../src/index.js";

describe('', () => {
    it('Should contain a valid scheme', function () {
        const result = URLScan('http://www.arol.dev/')
        assert.equal(result.scheme, 'http',)
    })

    it('should get the host', function () {
        const result = URLScan('http://www.arol.dev/')
        assert.equal(result.host, 'arol.dev')
    })

    it('port should default to 80 if none is provided', function () {
        const result = URLScan('http://www.arol.dev/')
        assert.equal(result.port, 80)
    })

    it('should parse the query parameters', function () {
        const result = URLScan('http://www.arol.dev/?utm_source=instagram')
        assert.equal(result.query, '?utm_source=instagram')

    })

    it('should parse the path', function () {
        const result = URLScan('https://www.arol.dev/tuition')
        assert.equal(result.path, 'tuition')

    })

    it('should remove spaces', function () {
        const result = URLScan('http://www. arol.dev/')
        assert.equal(result.host, 'arol.dev')
    })
})




