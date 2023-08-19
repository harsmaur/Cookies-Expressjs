class studentContoller{
    static getSessionInfo = (req, res)=>{
        //methods of session
        console.log(req.session)
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        
        res.send('Session info')
    }


    //deleting the session
    static deleteSession = (req, res)=>{
        req.session.destroy(()=>{
            console.log('Sssion deleted')
        })
        res.send('Session Deleted')
    }

    //regenrating the session 
    static regenrateSession = (req, res)=>{
        req.session.regenerate(()=>{
            console.log('Session restored')
        })
        res.send('Session restored')
    }

    static session_example = (req, res)=>{
        req.session.device = 'Mobile';
        if(req.session.count){
            req.session.count++;
        }
        else{
            req.session.count = 1;
        }
        res.send(`Count: ${req.session.count}`)
    }

    static get_session_data = (req, res)=>{
        if(req.session.device){
            res.send(`Device: ${req.session.device} Count: ${req.session.count}`)
        }
    }

}
export default studentContoller;