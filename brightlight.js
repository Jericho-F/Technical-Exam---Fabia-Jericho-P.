const inputValue = document.getElementsByClassName('post-bar')[0];
const postButton = document.getElementsByClassName('post-button')[0];

// CONDITION ON CLICKING THE POST BUTTON
// IT WILL NOT POST BLANK OUTPUT
// ALSO, IT PUSH THE DATA OR THE INPUTS TO THE NEWSFEED
// BY CALLING THE LOCALSTORAGE, THE DATA OR INPUTS THAT HAVE BEEN POSTED WILL AUTOMATICALLY SAVE TO THE LOCALSTORAGE 
postButton.addEventListener('click', () =>{
    if(inputValue.value.trim() != 0){
        let data = JSON.parse(localStorage.getItem('localItem'))

        if(data === null){
            newsFeed = []
        } else {
            newsFeed = data;
        }
    newsFeed.push(inputValue.value)
    localStorage.setItem('localItem', JSON.stringify(newsFeed))
    }
    
    showFeed()
})

// TO DISPLAY THE INPUTS
function showFeed(){

    let output = '';
    let newsFeedShow = document.querySelector('#newsfeed')
    let data = JSON.parse(localStorage.getItem('localItem'))

        if(data === null){
            newsFeed = []
        } else {
            newsFeed = data;
        }
        newsFeed.forEach((post, index) => {
            output += `
                        <div id="newsfeed">
                            <div class="news">
                                <div class="feed">
                                <input type="text" class="text" value="${post}" readonly>
                                </div>
                                <div class="actions">
                                    <button class="edit" onClick="editPost(${index})">Edit</button>
                                    <button class="delete" onClick="deletePost(${index})">Delete</button>
                                </div>
                            </div>
                        </div>`
        });

        newsFeedShow.innerHTML = output;
}

// DELETE FUNCTION
// DELETE THE OUTPUT IN THE NEWSFEED
showFeed() 
function deletePost(index){

    let data = JSON.parse(localStorage.getItem('localItem'))
    newsFeed.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(newsFeed))
    showFeed() 
}
// FUNCTION OF EDIT POST (I DID NOT FINISHED)
function editPost(index){
    let data = JSON.parse(localStorage.getItem('localItem'))

    output.innerHTML='';

}