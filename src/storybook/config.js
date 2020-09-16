import {configure} from "@storybook/react";
function loadStories(){
    require('../src/stories/InpurStory');
}
configure(loadStories(),module);
