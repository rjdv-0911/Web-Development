//ES5 OOP Syntax

function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//make an HTTP GET Request 
// easyHTTP.prototype.get = function (url, callback){
//     this.http.open('GET', url, true);
//     let self = this;
//     this.http.onload = function(){
//         if(self.http.status === 200){
//             callback(null, self.http.responseText);
//         } else{
//             callback('Error: ' + self.http.status);
//         }
//     }
//     this.http.send();
// }


//make an HTTP GET Request 
easyHTTP.prototype.get = function (url, callback){
    this.http.open('GET', url, true);

    this.http.onload = () => {
        if(this.http.status === 200){
            callback(null, this.http.responseText);//give you the response yu want
        } else{
            callback('Error: ' + this.http.status);
        }
    }
    this.http.send();
}

//make an HTTP POST REQUEST
easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST', url, true);//set true for it to become asynchronous
    this.http.setRequestHeader('Content-type', 'application/json');//if you're requesting something from the serve use, setRequestHeader

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText)
    }
    this.http.send(JSON.stringify(data));
}

//make an HTTP PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT',url, true);//
    this.http.setRequestHeader('Content-type','application/json')
    let self = this;
    this.http.onload= function(){
        callback(null, self.http.responseText);
    }    
    this.http.send(JSON.stringify(data));
}

//make an HTTP DELETE REQUEST
easyHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url, true);//
    let self = this;
    this.http.onload= function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted');
        } else{
            callback('Error' + self.http.status)
        }
    }    
    this.http.send();
}

