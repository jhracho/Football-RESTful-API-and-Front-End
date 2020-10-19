import unittest
import requests
import json

class TestFootball(unittest.TestCase):
    SITE_URL = 'http://student05.cse.nd.edu:51087'
    print("Testing for server: " + SITE_URL)
    FOOTBALL_URL = SITE_URL + '/scores/'
    FILTER_URL = SITE_URL + '/filter/'
    RESET_URL = SITE_URL + '/reset/'

    def reset_data(self):
        m = ()
        r = requests.post(self.RESET_URL, data = json.dumps(m))

    def is_json(self, resp):
        try:
            json.loads(resp)
            return True
        except ValueError:
            return False

    def test_get_key(self):
        self.reset_data()
        fid = 20
        r = requests.get(self.FOOTBALL_URL + str(fid))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        self.assertEqual(resp['id'], fid)
        self.assertEqual(resp['data']['totalScore'], '37')

    def test_get_index(self):
        self.reset_data()
        r = requests.get(self.FOOTBALL_URL)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))

        testgame = {}
        for game in resp:
            if game['id'] == 20:
                testgame = game

        self.assertEqual(testgame['data']['totalScore'], '37')
        self.assertEqual(testgame['data']['winnerScore'], '21')

    def test_put_key(self):
        self.reset_data()
        fid = 20

        r = requests.get(self.FOOTBALL_URL + str(fid))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))

        m = {}
        m['finalScore'] = '20-10'
        m['winnerScore'] = '20'
        m['loserScore'] = '10'
        
        r = requests.put(self.FOOTBALL_URL + str(fid), data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL + str(fid))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

    def test_put_index(self):
        self.reset_data()
        fid = 20
        m = {}
        
        n = {}
        n['finalScore'] = '20-10'
        n['winnerScore'] = '20'
        n['loserScore'] = '10'
        r = requests.put(self.FOOTBALL_URL + '21', data = json.dumps(n))

        r = requests.put(self.RESET_URL, data = json.dumps(m))

        r = requests.get(self.FOOTBALL_URL)
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')
        self.assertEqual(resp['data']['finalScore'], '31-30')

    def test_delete_key(self):
        self.reset_data()
        fid = 20

        m = {}
        r = requests.delete(self.FOOTBALL_URL + str(fid), data = json.dumps(m))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'success')

        r = requests.get(self.FOOTBALL_URL + str(fid))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['result'], 'error')

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
        scores = resp['data']
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
