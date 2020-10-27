# The Server :)

import cherrypy
from footballController import FootballController
from resetController import ResetController
from football_lib import _football_API

def start_service():
    # Initialization
    dispatcher = cherrypy.dispatch.RoutesDispatcher()
    fDat = _football_API()

    # Establish Controllers
    footballController = FootballController(fDat=fDat)
    resetController    = ResetController(fDat=fDat)

    # Dispatcher Connections
    dispatcher.connect('score_get', '/scores/:fid', controller=footballController, action='GET_KEY', conditions=dict(method=['GET']))
    dispatcher.connect('data_get', '/scores/', controller=footballController, action='GET_INDEX', conditions=dict(method=['GET']))
    dispatcher.connect('delete_game', '/scores/:fid', controller=footballController, action='DELETE_KEY', conditions=dict(method=['DELETE']))
    dispatcher.connect('delete_data', '/scores/', controller=footballController, action='DELETE_INDEX', conditions=dict(method=['DELETE']))
    dispatcher.connect('reset_game', '/reset/:fid', controller=resetController, action='PUT_KEY', conditions=dict(method=['PUT']))
    dispatcher.connect('reset_data', '/reset/', controller=resetController, action='PUT_INDEX', conditions=dict(method=['PUT']))
    dispatcher.connect('put_game', '/scores/:fid', controller=footballController, action='PUT_KEY', conditions=dict(method=['PUT']))
    dispatcher.connect('post_index', '/scores/', controller=footballController, action='POST_INDEX', conditions=dict(method=['POST']))

    # Server Configuration
    conf = {
        'global' : {
            'server.thread_pool' : 5,
            'server.socket_host' : 'student04.cse.nd.edu',
            'server.socket_port' : 51087
        },
        '/' : {
            'request.dispatch' : dispatcher,
        }
    }

    # Launch Server
    cherrypy.config.update(conf)
    app = cherrypy.tree.mount(None, config=conf)
    cherrypy.quickstart(app)

if __name__ == '__main__':
    start_service()
