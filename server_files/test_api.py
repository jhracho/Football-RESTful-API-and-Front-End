import unittest
import requests
import json
from football_lib import _football_API

class TestAPI(unittest.TestCase):
    # Initializes local data set
    fDat = _football_API()
    fDat.load_data('gameData.csv')

    # Ensures that the data was loaded correctly
    def test_load_data(self):
        self.assertEqual(self.fDat.final_scores[1], '20-19')
        self.assertEqual(self.fDat.teams[246],'New York Giants vs. Washington Redskins')
        self.assertEqual(self.fDat.total_scores[69], '51')
        self.assertEqual(self.fDat.dates[655],'January 3 2010')

    # Ensures that games can be converted to dictionaries
    def test_game_toDict(self):
        testDict1 = self.fDat.game_toDict(300)
        testDict2 = self.fDat.game_toDict(301)
        self.assertEqual(self.fDat.final_scores[300], testDict1['finalScore'])
        self.assertEqual(self.fDat.point_diffs[301], testDict2['pointDiff'])

    # Tests the change_score() function
    def test_change_score(self):
        score = ['2-1', '2', '1']
        self.assertEqual(self.fDat.final_scores[4], '31-17')
        self.fDat.change_score(4, score)
        self.assertEqual(self.fDat.final_scores[4], '2-1')

    # Tests the get_games() function
    def test_get_games(self):
        self.assertEqual(self.fDat.get_games(), len(self.fDat.final_scores))

    # Tests the set_game() function
    def test_set_game(self):
        game = ['9-6', '9', '6', '15', '3', 'Team A vs. Team B', 'June 9 2021']
        self.assertEqual(self.fDat.final_scores[2], '26-10')
        self.fDat.set_game(2, game)
        self.assertEqual(self.fDat.final_scores[2], game[0])
        self.assertEqual(self.fDat.teams[2], game[5])
        self.assertEqual(self.fDat.dates[2], game[6])

    # Tests the delete_game() function
    def test_delete_game(self):
        self.fDat.delete_game(3)
        found = False
        if '3' in self.fDat.final_scores:
            found = True
        self.assertFalse(found)

if __name__ == '__main__':
    unittest.main()

# vim: set sts=4 sw=4 ts=8 expandtab ft=python:
