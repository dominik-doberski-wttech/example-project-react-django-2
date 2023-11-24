class sesja(object):
    def GetUserUsername(self, request):
        userName = request.session.get('userName', None)
        return userName

    def GetUserPassword(self, request):
        userPassword = request.session.get('userPassword', None)
        return userPassword

    def PostUsername(self, request, userName):
        request.session['userName'] = userName

    def PostUserPassword(self, request, userPassword):
        request.session['userPassword'] = userPassword