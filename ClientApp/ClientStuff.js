import { map as _map  } from 'underscore';


class ClientStuff{
    constructor(){

    }
    createNode(){
        let newDiv = document.createElement('div');
        newDiv.append(document.createTextNode('I got created'));
        let appDiv =  document.querySelector("#app");
        //document.append(newDiv);
        appDiv.append(newDiv);

    }//node
    createCustomers(){
        fetch('./customers.json').then( (res) =>{
            return res.json();
    }).then(
        (myJson)=>{
            // console.log(myJson);
            // console.log("typeof::",typeof myJson);
                    let ul = document.createElement('ul');
                    _map(myJson, function (cust) {
                        console.log(cust.State);
                        let li = document.createElement('li');
    
                        li.append(cust.State);
                        ul.append(li);
                      });


                    
                    return Promise.resolve(
                        {
                            list: ul,
                            customers: myJson

                        }
                    );

        }
    ).then(
        res =>{
            _map(res.customers, function (cust) {
                console.log(cust.State);
                let li = document.createElement('li');

                li.append(cust.CompanyName);
                res.list.append(li);
              });
            app.append(res.list); 
        }
    );
    }//cust
}
export default ClientStuff;

//v=3kQqFHIgMl4