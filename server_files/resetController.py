import cherrypy
import re, json
from football_lib import _football_API

class ResetController(object):
	def __init__(self, fDat=None):
		if fDat is None:
			self.fDat = _football_API()
		else:
			self.fDat = fDat

def PUT_INDEX(self):
	output = {'result':'success'}
	data = json.loads(cherrypy.request.body.read().decode())
	self.fDat.__init__()
	self.fDat.load_data('gameData.csv')
	return json.dumps(output)

def PUT_KEY(self, fid):
	output = {'result':'success'}
	
	try:
		fDatTmp = _football_API()
		fDatTmp.load_movies('gameData.csv')
		fDat.final_scores[fid] = fDatTmp.final_scores[fid]
		fDat.winning_scores[fid] = fDatTmp.winning_scores[fid]
		fDat.losing_scores[fid] = fDatTmp.losing_scores[fid]
		fDat.point_diffs[fid] = fDatTmp.point_diffs[fid]
		fDat.teams[fid] = fDatTmp.teams[fid]
		fDat.dates[fid] = fDatTmp.dates[fid]
		
	except Exception as ex:
		output['result'] = 'error'
		output['message'] = str(ex)
	
	return json.dumps(output)
