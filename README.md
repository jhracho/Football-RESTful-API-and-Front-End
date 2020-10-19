# paradigmsFinalProject
Request Type		Request Endpoint			Request Body			Expected Response						Inner Handler Working
GET					/scores/:fid				No body					Formatted string of game w/ fid			GET_KEY: Searches the dicts for the specific fid and returns data
GET					/scores/					No body					List of every formatted game			GET_INDEX: Cycles through all dicts and gets string for each game
PUT					/scores/:fid				json formatted game		{result:success}						PUT_KEY: Updates game data from user and sends to string
DELETE				/scores/:fid				{}						{result:success}						DELETE_KEY: Calls delete_game on a specific fid
DELETE				/scores/					{}						{result:success}						DELETE_INDEX: Deletes literally everything
POST				/scores/					json formatted game		{result:success}						POST_KEY: Adds a game to the end of the dataset
