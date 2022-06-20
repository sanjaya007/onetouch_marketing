const dataObj = {
  location: {
    data: "",
  },
  zonal: {
    data: "",
  },
  role: {
    data: "",
  },
  subrole: {
    data: "",
  },
  experience: {
    data: "",
  },
  contract: {
    data: "",
  },
  budget: {
    data: "",
  },
};

const salaryRange = {
  data: {
    role: "",
    skill: "",
  },

  frontend: {
    normal: [1500, 2000, 2500],
  },

  backend: {
    normal: [1500, 2000, 2500, 3000],
    fullstack: [2000, 2500, 3000, 3500],
  },

  mobile: {
    android: [1200, 1500, 2000, 2500],
    swift: [1800, 2000, 2500, 3000],
    native: [1500, 2000, 2500, 3000],
  },

  qa: {
    manual: [1000, 1500, 2000, 2500],
    auto: [2000, 2500, 3000, 3500],
  },

  business: {
    normal: [500, 1000, 1500],
    management: [1500, 2000, 2500, 3000],
  },
};

const dataCost = {
  staticzonal: {
    cost: "0",
  },
  zonal: {
    cost: "0",
  },
  staticskill: {
    cost: "0",
  },
  skill: {
    cost: "0",
  },
  experience: {
    cost: "0",
  },
  total: {
    cost: "0",
  },
};

// start content handling
const toggleContent = () => {
  $(".developer-container").toggleClass("hidden");
  $(".calculator-container").toggleClass("hidden");
  swiperInit();
};

$(".estimate-start-btn").click(function () {
  toggleContent();
});
$(".exit-link").click(function (e) {
  e.preventDefault();
  window.location.reload();
  toggleContent();
});

/* <Next Hanlding> */
const openNext = () => {
  let activeEl = null,
    nextEl = null,
    prevEl = null;
  $(".content-box").each((key, el) => {
    const dataPrev = $(el).attr("data-prev");
    const dataNext = $(el).attr("data-next");
    const isActive = $(el).attr("data-active") === "true" ? true : false;
    if (isActive) {
      activeEl = $(el);
      nextEl = dataNext;
      prevEl = dataPrev;
    }
  });
  if (activeEl) {
    // check if data-value chosen
    const activeElObjPropertyName = $(activeEl).attr("obj-ref");
    const chosenDataValue = dataObj[activeElObjPropertyName]
      ? dataObj[activeElObjPropertyName].data
      : "random";
    if (!chosenDataValue.length) {
      alert("Choose value");
      return;
    }

    // navigation active handling
    $(".target-link").each((k, el) => {
      if ($(el).attr("data-active") === $(nextEl).attr("obj-ref"))
        $(el).addClass("active");
      else $(el).removeClass("active");
    });

    // hide current active
    $(activeEl).removeAttr("data-active", "false");
    $(activeEl).hide();
    // show next data next element
    $(nextEl).attr("data-active", "true");
    $(nextEl).show();
  }

  if ($(nextEl).attr("id") === "zonal-content")
    $(".timeline-box").removeClass("hidden");

  if ($(nextEl).attr("id") === "budget-content")
    $(".next-button.next-content-btn").hide();

  if ($(nextEl).attr("id") === "summary-content") {
    $(".next-button.next-content-btn").hide();
    $(".timeline-box").removeClass("hidden");
  }

  updateSummary();
  swiperInit();
};
$(".next-button").click(openNext);
/* </Next Hanlding> */

/* <Previous Hanlding> */
const openPrev = () => {
  let activeEl = null,
    nextEl = null,
    prevEl = null;
  $(".content-box").each((key, el) => {
    const dataPrev = $(el).attr("data-prev");
    const dataNext = $(el).attr("data-next");
    const isActive = $(el).attr("data-active") === "true" ? true : false;
    if (isActive) {
      activeEl = $(el);
      nextEl = dataNext;
      prevEl = dataPrev;
    }
  });
  if (activeEl) {
    // navigation active handling
    $(".target-link").each((k, el) => {
      if ($(el).attr("data-active") === $(nextEl).attr("obj-ref"))
        $(el).addClass("active");
      else $(el).removeClass("active");
    });

    // navigation active handling
    $(".target-link").each((k, el) => {
      if ($(el).attr("data-active") === $(prevEl).attr("obj-ref"))
        $(el).addClass("active");
      else $(el).removeClass("active");
    });

    // hide current active
    $(activeEl).removeAttr("data-active", "false");
    $(activeEl).hide(200);
    // show next data next element
    $(prevEl).attr("data-active", "true");
    $(prevEl).show();

    if ($(prevEl).attr("id") === "contract-content")
      $(".next-button.next-content-btn").show();

    if ($(prevEl).attr("id") === "location-content") {
      $(".next-button.next-content-btn").show();
      $(".timeline-box").addClass("hidden");
    }

    if ($(activeEl).attr("obj-ref") === "location") toggleContent();
    swiperInit();
  }
};
$(".goback-link").click(function (e) {
  e.preventDefault();
  openPrev();
});
/* </Previous Hanlding> */

// location card answer selection
$(".location-card").each(function () {
  $(this).click(function () {
    $(".location-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    dataObj.location.data = $(this).attr("data-value");
    cardData = $(this).attr("data-check");
    if (cardData === "local") {
      $("#location-content").attr("data-next", "#summary-content");
      $("#summary-content").attr("data-prev", "#location-content");
      $("#summary-heading").hide();
      $("#estimation-result").hide();
      $("#percent-salary").show();
    } else {
      $("#location-content").attr("data-next", "#zonal-content");
      $("#summary-content").attr("data-prev", "#budget-content");
      $("#summary-heading").show();
      $("#estimation-result").show();
      $("#percent-salary").hide();
    }
  });
});

// zonal card answer selection
$(".zonal-card").each(function () {
  $(this).click(function () {
    $(".zonal-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    dataObj.zonal.data = $(this).attr("data-value");
    $("#budget-heading").removeClass("hidden");
    dataCost.zonal.cost = $(this).attr("data-cost");
    dataCost.staticzonal.cost = $(this).attr("data-cost");
    calculateTotalEstimatedBudget();
  });
});

// role card answer selection
$(".role-card").each(function () {
  $(this).click(function () {
    $(".role-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    const chosenRoleDataValue = $(this).attr("data-value");
    dataObj.role.data = chosenRoleDataValue;
    $(".skill-box").each((key, el) => {
      if ($(el).attr("id") === chosenRoleDataValue) $(el).show();
      else $(el).hide();
    });
  });
});

// sub role skill card answer selection
$(".skill-card").each(function () {
  $(this).click(function () {
    $(".skill-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    dataObj.subrole.data = $(this).attr("data-value");
    salaryRange.data.role = $(this).attr("data-role");
    salaryRange.data.skill = $(this).attr("skilltype");
    dataCost.skill.cost = $(this).attr("data-cost");
    dataCost.staticskill.cost = $(this).attr("data-cost");
    dataCost.zonalCost = dataCost.staticzonal.cost;
    $(".contract-card").each(function () {
      dataObj.contract.data = "";
      $(this).removeClass("active");
    });
    calculateTotalEstimatedBudget();
  });
});

// experience card answer selection
$(".experience-card").each(function () {
  $(this).click(function () {
    $(".experience-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    dataObj.experience.data = $(this).attr("data-value");
    dataCost.experience.cost = $(this).attr("data-cost");
    calculateTotalEstimatedBudget();
  });
});

// contract card answer selection
$(".contract-card").each(function () {
  $(this).click(function () {
    $(".contract-card").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    dataObj.contract.data = $(this).attr("data-value");

    createRangeSlider(salaryRange.data.role, salaryRange.data.skill);

    if (dataObj.contract.data === "Contract") {
      dataCost.zonal.cost = "0";
      calculateTotalEstimatedBudget();
    } else {
      dataCost.skill.cost = dataCost.staticskill.cost;
      dataCost.zonal.cost = dataCost.staticzonal.cost;
      calculateTotalEstimatedBudget();
    }
  });
});

const createRangeSlider = (role, skill) => {
  dataObj.budget.data = salaryRange[role][skill][1].toString();

  if (dataObj.contract.data === "Contract")
    dataCost.skill.cost = dataObj.budget.data;

  $(".budget-result").text("$ " + dataObj.budget.data);

  $("#range-numbers").html("");
  $.each(salaryRange[role][skill], function (index, val) {
    $("#range-numbers").html($("#range-numbers").html() + `<p> ${val} </p>`);
  });
  $("#range-slider").attr("max", salaryRange[role][skill].length);
};

// range handling
const handleRange = (value) => {
  const rangeElement = $("#range-numbers").children()[value - 1];
  dataObj.budget.data = $.trim($(rangeElement).text());
  $(".budget-result").text("$ " + dataObj.budget.data);

  if (dataObj.contract.data === "Contract")
    dataCost.skill.cost = dataObj.budget.data;

  calculateTotalEstimatedBudget();
};

$("#range-slider").change(function () {
  handleRange($(this).val());
});

// summary details
const updateSummary = () => {
  $("#zonal-summary").text(dataObj.zonal.data);
  $("#experience-summary").text(dataObj.experience.data);
  $("#role-summary").text(
    dataObj.role.data.replace("-", " ").replace("role", "developer")
  );
  $("#subrole-summary").text(dataObj.subrole.data);
  $("#contract-summary").text(dataObj.contract.data);
  $("#contract-salary").text("$ " + dataObj.budget.data);
};

//total estimated budget
const calculateTotalEstimatedBudget = () => {
  const zonalCost = parseInt(dataCost.zonal.cost);
  const skillCost = parseInt(dataCost.skill.cost);
  const experienceCost = parseInt(dataCost.experience.cost);

  const totalCost = zonalCost + skillCost + experienceCost;

  $("#estimated-cost").text("$ " + totalCost);
  $("#estimated-summary-cost").text("$ " + totalCost);
};

// book a call
$(".book-a-call-btn").click(function (e) {
  e.preventDefault();
  window.location.href = "https://onetouchrecruit.com/schedule.html";
});

// timeline slider
$(".slider-icon").click(function () {
  if ($(this).attr("id") === "right") {
    $(".timeline-list").animate({ scrollLeft: "+=150" }, 100);
  }
  if ($(this).attr("id") === "left") {
    $(".timeline-list").animate({ scrollLeft: "-=150" }, 100);
  }
});
