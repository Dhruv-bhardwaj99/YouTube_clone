async function searchVideo(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        let info = {snippet, id:{videoId}}
        return info;
    }
    catch(e){
        console.log('e:', e);
    }
}

function appendVideo(data, location){
    data.forEach((element) => {
        console.log(element);
        let div = document.createElement("div");
        let title = document.createElement("h3")
    });
}