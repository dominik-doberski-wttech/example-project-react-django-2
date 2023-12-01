class sesja(object):
    def GetUsername(self, request):
        userName = request.session.get('username', None)
        return userName

    def GetPassword(self, request):
        password = request.session.get('password', None)
        return password

    def GetUserId(self, request):
        userID = request.session.get('userID', None)

    def PostUsername(self, request, username):
        request.session['username'] = username

    def PostPassword(self, request, password):
        request.session['password'] = password
    
    def PostUserID(self, request, userID):
        request.session['userID'] = userID