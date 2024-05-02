/* eslint-env jquery */
// Custom

/**
 Customizations required for Micromasters
 */
$(document).ready(function () {
  //Hide Contact Us element on new request page
  if (location.pathname.indexOf("/requests/new") > -1) {
    $("#contact-us-element").hide();
  }

  //Set social media sharing links
  const description =
    "MicroMasters is a " +
    "new digital credential for online learners. The MicroMasters " +
    "credential will be granted to learners who complete an " +
    "integrated set of graduate-level online courses. With the MicroMasters " +
    "credentials, learners can apply for an accelerated master's degree " +
    "program on campus, at MIT or other top universities.";
  const twitterDescription =
    "MITx MicroMasters Programs: a new academic credential " +
    "and a new path to a master’s degree from MIT. Learn more ";
  const HOME_URL = "https://micromasters.mit.edu/";

  $(".rrssb-buttons").rrssb({
    // required:
    title: "MITx MicroMasters",
    url: HOME_URL,

    // optional:
    description: description,
    emailBody: description + HOME_URL,
  });
  const tweetUrl = `https://twitter.com/intent/tweet?text=${twitterDescription}%20${HOME_URL}`;
  document.querySelector(".rrssb-buttons .rrssb-twitter a").href = tweetUrl;
});
