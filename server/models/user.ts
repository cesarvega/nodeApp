export class User{

    user: any;   

    setUserSchema(){
        
        this.user = {
            firstName: String,    
            lastName: String,
            email: String,
            userName: {
                type: String,
                
            },  
            password: {
                type: String, select: false
            },
            create: {
                type: Date                
            } 
        }

    }

    public getUserSchema(){
        return this.user
    }
  }