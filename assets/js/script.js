const videoDetails = [
  {
    url: "1kIhtVLldmU",
    info: "Placed 64 Business roles in just 4 weeks",
    name: "Drew Schweppe",
    post: "COO, Searchtides",
  },
  {
    url: "O-T5f65m4Dg",
    info: "Hired 3 Developer in under 1 week",
    name: "Damiano Raveenthiran",
    post: "CEO, Startupslang",
  },
  {
    url: "zILFePy9hpo",
    info: "Sourced their first CTO in only 4 Days",
    name: "Gabriel Mattys",
    post: "CEO, GMCOLAB",
  },
];

let count = 0;

const videoInit = () => {
  $(".video-frame").attr(
    "src",
    `https://www.youtube.com/embed/${videoDetails[count].url}?controls=0`
  );
  $(".ceo-info").text(videoDetails[count].info);
  $(".ceo-name").text(videoDetails[count].name);
  $(".ceo-post").text(videoDetails[count].post);
};

$(".other-video-list").click(function () {
  const videoID = $(this).attr("data-id");
  count = videoID;
  $(".story-dot").removeClass("active");
  $(".story-dot").each(function () {
    if ($(this).attr("data-id") === count) {
      $(this).addClass("active");
    }
  });
  videoInit();
});

$(".story-dot").click(function () {
  const dotID = $(this).attr("data-id");
  $(".story-dot").removeClass("active");
  $(this).addClass("active");
  count = dotID;
  videoInit();
});

videoInit();

$(".question-text").click(function () {
  if ($(this).parent().children(".answer-text").css("display") === "block") {
    $(this).parent().children(".answer-text").slideUp(50);
    return false;
  }
  $(".answer-text").slideUp(50);
  $(this).parent().children(".answer-text").slideDown(50);
});
