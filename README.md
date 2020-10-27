# paradigmsFinalProject
Students: Jake Hracho and Stuart Hayden

## Overview
The webservice can be used to make GET, PUT, DELETE, and POST requests. Users can access the data, delete data, edit data, and add new data entries.\
Port Number: 51087

## OO API
The API is used to manage the database of football scores.\
Test API script - test_api.py\
Test Web Server script - test_ws.py

## Testing
run server.py in one terminal on student04
```bash
python3 server.py
```
run test_api.py or test_ws.py in another terminal
```bash
python3 test_api.py
python3 test_ws.py
```

## JSON Specification
| Request Type | Request Endpoint |     Request Body    |         Expected Response         |                           Inner Handling                           |
| ------------ | ---------------- | ------------        | --------------------------------- | ------------------------------------------------------------------ |
|     GET	   |   /scores/:fid   |       No body	    |	Formatted string of game w/ fid	|  GET_KEY: Searches the dicts for the specific fid and returns data |
|     GET	   |     /scores/	  |	      No body	    |	  List of every formatted game	|  GET_INDEX: Cycles through all dicts and gets string for each game |
|     PUT	   |   /scores/:fid	  |	json formatted game |		   {result:success}			|  	   PUT_KEY: Updates game data from user and sends to string      |
|    DELETE	   |   /scores/:fid	  |	    	{}			|		   {result:success}			|			 DELETE_KEY: Calls delete_game on a specific fid         |
|    DELETE    |	 /scores/	  |			{}			|		   {result:success}			|			    DELETE_INDEX: Deletes literally everything           |
|     POST	   |	 /scores/	  |	json formatted game |		   {result:success}			|			  POST_KEY: Adds a game to the end of the dataset        |
