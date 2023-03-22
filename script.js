let states = document.getElementById('states');
states.onchange = function() {
    //Joining a string "state index:" and adding it to the index of the selected dropdown form
    console.log('states index:' + states.selectedIndex);
    //Joining a string "state index:" and adding it to the TEXT value of the selected option
    console.log('states index:' + states.options[states.selectedIndex].text);
    //Something else idk
    console.log('img/' + states.value + '@2x.jpg');
//changes images for the different states
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
    //select the innerHTML element with the ID of 'state-heading' and assign it the value of the selected State from the dropown menu
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
//changed greeting to 'Greetings from'
    document.getElementById('greeting').innerHTML = 'Greetings from:'
}
