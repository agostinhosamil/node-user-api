class AuthMiddleware {
  _authenticated = (token) => {
    console.log ('Auth => ', token)

    return typeof token === typeof 'str'
  }

  base = (req, res, next) => {
    const { headers: { authorization } } =  req

    const authToken = !!authorization ? authorization.replace (/^Basic\s*/i, '') : null

    if (!this._authenticated (authToken)) {
      return res.status (401).json ({ 
        message: 'You are not allowed' 
      });
    }

    next()
  }
}

exports.auth = new AuthMiddleware ()
