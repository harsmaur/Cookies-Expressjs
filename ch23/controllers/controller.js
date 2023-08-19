class studentContoller{
    static setCookie = (req, res)=>{
        //setting the cookie
        res.cookie('username', 'harsmaur');
        res.cookie('cart', '5');

        //with options
        res.cookie('userID', 'harsmaur228', {maxAge: 50000});


        res.send('Cookie Set....')
    }
    static getCookie = (req, res)=>{
        //getting the cookie
        console.log(req.cookies)
        res.send('Cookie get....')
    }
    static deleteCookie = (req, res)=>{
        //clearing the cookie
        res.clearCookie('username')
        res.send('Cookie deleted....')
    }

}
export default studentContoller;