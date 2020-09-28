const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.user(
        proxy("",{
            target:"http://localhost:8000",
            secure:false,
            changeOrigin: true
        })
    )
}