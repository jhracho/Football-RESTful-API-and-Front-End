import unittest
import requests
import json

class TestFootball(unittest.TestCase):
    SITE_URL = 'http://student04.cse.nd.edu:51087'
    print("Testing for server: " + SITE_URL)
    FOOTBALL_URL = SITE_URL + '/scores/'
    FILTER_URL = SITE_URL + '/filter/'
    RESET_URL = SITE_URL + '/reset/'

    def reset_data(self):
        m = ()
        r = requests.put(self.RESET_URL, data = json.dumps(m))

    def is_json(self, resp):
        try:
            json.loads(resp)
            return True
        except ValueError:
            return False

    def test_get_key(self):
        self.reset_data()
        fid = '15'
        r = requests.get(self.FOOTBALL_URL + fid)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))

        self.assertEqual(resp['data']['id'], fid)
        self.assertEqual(resp['data']['totalScore'], '65')
        self.assertEqual(resp['result'], 'success')

    def test_get_index(self):
        self.reset_data()
        fid = 19
        r = requests.get(self.FOOTBALL_URL)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        testgame = {}
        
        testgame['totalScore'] = resp['games'][fid]['totalScore']
        testgame['winnerScore'] = resp['games'][fid]['winnerScore']

        self.assertEqual(testgame['totalScore'], '37')
        self.assertEqual(testgame['winnerScore'], '21')

    def test_put_key_update(self):
        self.reset_data()
        fid = '20'

        m = {}
        m['finalScore'] = '20-10'
        m['winnerScore'] = '20'
        m['loserScore'] = '10'
        
        r = requests.put(self.FOOTBALL_URL + fid, data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL + fid)
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        self.assertEqual(resp['data']['finalScore'], '20-10')
        self.assertEqual(resp['data']['pointDiff'], '10')

    def test_put_key_reset(self):
        self.reset_data()
        fid = '20'

        n = {}
        m = {}
        m['finalScore'] = '20-10'
        m['winnerScore'] = '20'
        m['loserScore'] = '10'

        r = requests.put(self.FOOTBALL_URL + fid, data = json.dumps(m))
        r = requests.put(self.RESET_URL + fid, data = json.dumps(n))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        
        r = requests.get(self.FOOTBALL_URL + fid)
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['data']['finalScore'], '21-16')
        self.assertEqual(resp['data']['pointDiff'], '5')

    def test_put_index(self):
        self.reset_data()
        fid = '20'
        m = {}
        
        n = {}
        n['finalScore'] = '20-10'
        n['winnerScore'] = '20'
        n['loserScore'] = '10'
        r = requests.put(self.FOOTBALL_URL + fid, data = json.dumps(n))

        r = requests.put(self.RESET_URL, data = json.dumps(m))

        r = requests.get(self.FOOTBALL_URL)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        self.assertEqual(resp['games'][int(fid)]['finalScore'], '31-30')

    def test_delete_key(self):
        self.reset_data()
        fid = '20'

        m = {}
        r = requests.delete(self.FOOTBALL_URL + fid, data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL + fid)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'error')

    # We are catching the exception in DELETE_INDEX
    def test_delete_index(self):
        self.reset_data()

        m = ()
        r = requests.delete(self.FOOTBALL_URL, data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        scores = resp['games']
        self.assertFalse(scores)

    def test_post_index(self):
        self.reset_data()

        m = {}
        m['finalScore'] = '20-10'
        m['winnerScore'] = '20'
        m['loserScore'] = '10'
        m['totalScore'] = '30'
        m['pointDiff'] = '10'
        m['teams'] = 'Tampa Bay Buccaneers vs. Las Vegas Raiders'
        m['date'] = 'October 18 2020'
        r = requests.post(self.FOOTBALL_URL, data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL + str(resp['id']))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        self.assertEqual(resp['data']['finalScore'], m['finalScore'])

if __name__ == "__main__":
    unittest.main()

# vim: set sts=4 sw=4 ts=8 expandtab ft=python:
