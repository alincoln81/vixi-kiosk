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
    //[TODO] When the submit button is pressed on the submission page iframe, hide the following elements, play the processing animation (looping gif?)
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
    //[TODO] When the AI process is complete, hide the processing animation, show the output along with a restart button (autorestart after 30 seconds)
    console.log('showOutput called');
    
    //Hide Processing
    document.getElementById('processing').style.display = 'none';

    //Show Results
    document.getElementById('results').style.display = 'flex';
}

function resetExperience() {
 currentExperience = "";
 console.log('CurrentExperience: ', currentExperience);

 //Hide Output
 document.getElementById('results').style.display = 'none';

 //Show app selection
 document.getElementById('captureSelect').style.display = 'block';
 document.getElementById('groovSelect').style.display = 'block';
 document.getElementById('instructions').style.display = 'flex';
}