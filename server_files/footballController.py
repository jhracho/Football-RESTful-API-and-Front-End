import cherrypy
import re, json
from football_lib import _football_API

class FootballController(object):
    def __init__(self, fDat=None):
        if fDat is None:
            self.fDat = _football_API()
        else:
            self.fDat = fDat
        self.fDat.load_data('gameData.csv')
    
    # Event handler to get data for a specific game based on the ID
    def GET_KEY(self, fid):
        output = {'result':'success'}
        fid = int(fid)

        try:
            game = self.fDat.game_toDict(fid)
            if game is not None:
                output['id']   = fid
                output['data'] = game
            else:
                output['result'] = 'error'
                output['message'] = 'game not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)

    # Event handler to get all game data
    def GET_INDEX(self):
        output = {'result':'success'}
        output['games'] = []

        try:
            for fid in range(1, self.fDat.get_games() + 1):
                output['games'].append(self.fDat.game_toDict(fid))
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)
        
        return json.dumps(output)
    
    # Event handler for deleting a particular game
    def DELETE_KEY(self, fid):
        output = {'result':'success'}
        try:
            self.fDat.delete_game(int(fid))
        except KeyError as ex:
            output['result'] = 'error'
            output['message'] = 'key not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)
            
        return json.dumps(output)
    
    # Event handler for deleting all of the data
    def DELETE_INDEX(self):
        output = {'result':'success'}
        try:
            for fid in range(1, self.fDat.get_games()+1):
                self.fDat.delete_game(fid)
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)
        
        return json.dumps(output)

    # Update the score of a game
    def PUT_KEY(self, fid):
        output = {'result':'success'}
        data = json.loads(cherrypy.request.body.read().decode('utf-8'))

        try:
            score = list()
            score.append(data['finalScore'])
            score.append(data['winnerScore'])
            score.append(data['loserScore'])
            self.fDat.change_score(int(fid), score)
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)

    def POST_INDEX(self):
        output = {'result':'success'}
        data = json.loads(cherrypy.request.body.fp.read().decode('utf-8'))

        # Sets up game data from the request body
        try:
            game = list()
            game.append(data['finalScore'])
            game.append(data['winnerScore'])
            game.append(data['loserScore'])
            game.append(data['totalScore'])
            game.append(data['pointDiff'])
            game.append(data['teams'])
            game.append(data['date'])
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        # Gets new FID of the game, then adds it
        newFID = self.fDat.get_games() + 1
        self.fDat.set_game(newFID, game)
        output['id'] = newFID

        return json.dumps(output)       
