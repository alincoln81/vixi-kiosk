let currentExperience = "";

function showCapture() {
    currentExperience = "capture";
    console.log('CurrentExperience: ', currentExperience);
    hideExperienceSelectors();

    //Show Capture
    document.getElementById('captureExp').style.display = 'block';
}

function showGroov() {
    currentExperience = "groov";
    console.log('CurrentExperience: ', currentExperience);
    hideExperienceSelectors();

    //Show Groov
    document.getElementById('groovExp').style.display = 'block';
}

function hideExperienceSelectors() {
    console.log('hideExperienceSelectors called');

    //Hide app Selection
    document.getElementById('captureSelect').style.display = 'none';
    document.getElementById('groovSelect').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
}

function showProcessing() {
    //When the submit button is pressed on the submission page iframe, hide the following elements, play the processing animation (looping gif?)
    console.log('showProcessing called');
    console.log('CurrentExperience: ', currentExperience);

    //Hide Experience
    if(currentExperience === "capture") {
        document.getElementById('captureExp').style.display = 'none';
    } else if (currentExperience === "groov") {
        document.getElementById('groovExp').style.display = 'none';
    } else {
        console.log('Current Experience not set', currentExperience);
    }

    //Show Processing
    document.getElementById('processing').style.display = 'flex';
}

function showOutput() {
    //Runs When the AI process is complete 
    console.log('showOutput called');
    
    //Load in Result URL
    document.getElementById('aiResult').src = 'https://firebasestorage.googleapis.com/v0/b/vixi-capture-dev.appspot.com/o/images%2F1dd35140-7a02-4062-83d3-b195a0127033%2F810a57a9-6262-4b5e-94bf-845cf0f9e57c.jpg?alt=media&token=044a23dc-a41a-43c8-86b9-243a6566dc91';

    //Hide Processing
    document.getElementById('processing').style.display = 'none';

    //Show Results
    document.getElementById('results').style.display = 'flex';
    
    //SetTimeout (when it reaches 0 the experience will reset)
    countDown(true);
}

function resetExperience() {
    currentExperience = "";
    console.log('CurrentExperience: ', currentExperience);

    // Cancel countDown
    countDown(false);

    //Hide Output
    document.getElementById('results').style.display = 'none';

    //Show app selection
    document.getElementById('captureSelect').style.display = 'block';
    document.getElementById('groovSelect').style.display = 'block';
    document.getElementById('instructions').style.display = 'flex';
}

function countDown(bool) {
    let resetcountdown;
    if (bool) {
        resetcountdown  = setTimeout ( "resetExperience()", 3000 );
        console.log('countdown started');
    }
    else {
        clearTimeout ( resetcountdown );
        console.log('countDown stopped');
    }
}