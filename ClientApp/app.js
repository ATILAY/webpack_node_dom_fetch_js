import ClientStuff from './ClientStuff';

document.addEventListener("DOMContentLoaded",
    function(){
        let clientStuff  = new ClientStuff;
        clientStuff.createNode();
        clientStuff.createCustomers();
    }
);