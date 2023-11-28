const columnContent = [
  {
    question1: "I like to work on cars",
    question2: "I like to build things",
    imageSrc1: "assets/img/test/1.png",
    imageSrc2: "assets/img/test/2.png"
  },
  {
    question1: "I like to take care of animals",
    question2: "I like putting things together <br>or assembling things",
    imageSrc1: "assets/img/test/3.png",
    imageSrc2: "assets/img/test/4.png"
  },
  {
    question1: "I like to cook",
    question2: "I am a practical person",
    imageSrc1: "assets/img/test/5.png",
    imageSrc2: "assets/img/test/6.png"
  },
  {
    question1: "I like working outdoors",
    question2: "I like to do puzzles",
    imageSrc1: "assets/img/test/7.png",
    imageSrc2: "assets/img/test/8.png"
  },
  // 
  {
    question1: "I like to do experiments",
    question2: "I enjoy science",
    imageSrc1: "assets/img/test/9.png",
    imageSrc2: "assets/img/test/nx10.png"
  },
  {
    question1: "I enjoy trying to figure out how things work",
    question2: "I like to analyze things (problems/situations)",
    imageSrc1: "assets/img/test/nx11.png",
    imageSrc2: "assets/img/test/nx12.png"
  },
  {
    question1: "I like working with numbers or charts",
    question2: "I’m good at math",
    imageSrc1: "assets/img/test/nx13.png",
    imageSrc2: "assets/img/test/nx14.png"
  },
  {
    question1: "I am good at working independently",
    question2: "I like to read about art and music",
    imageSrc1: "assets/img/test/nx15.png",
    imageSrc2: "assets/img/test/nx16.png"
  },
  {
    question1: "I enjoy creative writing",
    question2: "I am a creative person",
    imageSrc1: "assets/img/test/nx17.png",
    imageSrc2: "assets/img/test/nx18.png"
  },
  {
    question1: "I like to play instruments or sing",
    question2: "I like acting in plays",
    imageSrc1: "assets/img/test/nx19.png",
    imageSrc2: "assets/img/test/nx21.png"
  },
  {
    question1: "I like to draw",
    question2: "I like to work in teams.",
    imageSrc1: "assets/img/test/nx22.png",
    imageSrc2: "assets/img/test/nx23.png"
  },
  {
    question1: "I like to teach or train people",
    question2: "I like trying to help people solve their problems",
    imageSrc1: "assets/img/test/nx24.png",
    imageSrc2: "assets/img/test/nx25.png"
  },
  {
    question1: "I am interested in healing people",
    question2: "I enjoy learning about other cultures",
    imageSrc1: "assets/img/test/nx26.png",
    imageSrc2: "assets/img/test/nx27.png"
  },
  {
    question1: "I like to get into discussions about issues",
    question2: "I liked helping people ",
    imageSrc1: "assets/img/test/nx28.png",
    imageSrc2: "assets/img/test/nx29.png"
  },
  {
    question1: "I am an ambitious person,I set goals for myself",
    question2: "I like to influence or persuade people",
    imageSrc1: "assets/img/test/nx30.png",
    imageSrc2: "assets/img/test/nx31.png"
  },
  {
    question1: "I like selling things",
    question2: "I am quick to take on new responsibilities",
    imageSrc1: "assets/img/test/nx32.png",
    imageSrc2: "assets/img/test/nx33.png"
  },
  {
    question1: "I would like yo start my own business",
    question2: "I like to lead",
    imageSrc1: "assets/img/test/nx34.png",
    imageSrc2: "assets/img/test/nx35.png"
  },
  {
    question1: "I like to give speeches",
    question2: "I like to organize things",
    imageSrc1: "assets/img/test/nx36.png",
    imageSrc2: "assets/img/test/nx37.png"
  },
  {
    question1: "I like to have clear instructions to follow",
    question2: "I wouldnt mind working 8 hours per day in an office",
    imageSrc1: "assets/img/test/nx38.png",
    imageSrc2: "assets/img/test/nx39.png"
  },
  {
    question1: "I pay attention to details",
    question2: "I like todo filing or typing",
    imageSrc1: "assets/img/test/nx40.png",
    imageSrc2: "assets/img/test/nx41.png"
  },
  {
    question1: "I am good at keeping records of my work",
    question2: "I would like to work in an office",
    imageSrc1: "assets/img/test/nx42.png",
    imageSrc2: "assets/img/test/nx43.png"
  },

];

let currentContentIndex = 0;
let progressValue = 0;
let group1Clicked = false;
let group2Clicked = false;
let userChoices = [];

const progressBar = document.querySelector('.progress-bar');

function updateContent(index) {
  // Modified the updateContent function to display all questions
  const questionElement1 = document.getElementById('questions1');
  const questionElement2 = document.getElementById('questions2');
  const imageElement1 = document.getElementById('testimages1');
  const imageElement2 = document.getElementById('testimages2');

  // Use the index to get the corresponding question set
  const currentQuestionSet = columnContent[index];

  questionElement1.innerHTML = currentQuestionSet.question1;
  questionElement2.innerHTML = currentQuestionSet.question2;
  imageElement1.src = currentQuestionSet.imageSrc1;
  imageElement2.src = currentQuestionSet.imageSrc2;

  userChoices = [];
}

function updateRadioButtons(index) {
const radioGroup1 = document.getElementById('group1');
const radioGroup2 = document.getElementById('group2');

// Hide all radio button groups by default
radioGroup1.style.display = 'none';
radioGroup2.style.display = 'none';

// Show radio button groups based on the current question index
if (index < columnContent.length) {
  if (index % 2 === 0) {
    radioGroup1.style.display = 'flex';
  } else {
    radioGroup2.style.display = 'flex';
  }
}
}

function updateProgressBar() {
  progressBar.style.width = `${progressValue}%`;
  progressBar.textContent = `${progressValue}%`;
  progressBar.setAttribute('aria-valuenow', progressValue);
}

function resetButtonColors() {
  group1Clicked = false;
  group2Clicked = false;
  document.getElementById('group1').classList.remove('btn-primary');
  document.getElementById('group1').classList.add('btn-secondary');
  document.getElementById('group2').classList.remove('btn-primary');
  document.getElementById('group2').classList.add('btn-secondary');
}

function updateButtonColors() {
  const group1Clicked = userChoicesPerQuestion[currentContentIndex]?.group1 !== undefined;
  const group2Clicked = userChoicesPerQuestion[currentContentIndex]?.group2 !== undefined;

  if (group1Clicked) {
    document.getElementById('group1').classList.remove('btn-secondary');
    document.getElementById('group1').classList.add('btn-primary');
  } else {
    document.getElementById('group1').classList.remove('btn-primary');
    document.getElementById('group1').classList.add('btn-secondary');
  }

  if (group2Clicked) {
    document.getElementById('group2').classList.remove('btn-secondary');
    document.getElementById('group2').classList.add('btn-primary');
  } else {
    document.getElementById('group2').classList.remove('btn-primary');
    document.getElementById('group2').classList.add('btn-secondary');
  }
}


document.getElementById('group1').addEventListener('click', function() {
  if (!group1Clicked && progressValue < 100) {
    progressValue += 2;
    if (progressValue > 100) {
      progressValue = 100;
    }
    updateProgressBar();

    group1Clicked = true;
    userChoices.push('like');

    localStorage.setItem('progress', progressValue);
  }
});

document.getElementById('group2').addEventListener('click', function() {
  if (!group2Clicked && progressValue < 100) {
    progressValue += 2;
    if (progressValue > 100) {
      progressValue = 100;
    }
    updateProgressBar();

    group2Clicked = true;
    userChoices.push('love');

    localStorage.setItem('progress', progressValue);
  }
});

document.getElementById('nextButton').addEventListener('click', function() {

  if (userChoices.length === 2) {
    if (currentContentIndex < columnContent.length - 1) {
      currentContentIndex++;
      updateContent(currentContentIndex);
      resetButtonColors();
      updateButtonColors();
    } else {
      // Display a message or perform an action when all questions are answered
      alert('You have completed all questions!');
      // You might want to perform some action here when all questions are answered
    }
  } else {
    // Display a message to the user to select an option before proceeding
    alert('Please select an option for both questions before proceeding.');
  }
});

function resetUserChoices() {
  userChoices = [];
}

document.getElementById('prevButton').addEventListener('click', function() {
  if (currentContentIndex > 0) {
    currentContentIndex--;
    updateContent(currentContentIndex);
    resetButtonColors();
    updateButtonColors();
  }
});

window.onload = () => {
  // Clear previously stored progress value
  localStorage.removeItem('progress');

  progressValue = 0;
  localStorage.setItem('progress', progressValue);

  // Initialize buttons and their functionalities
  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  // Retrieve stored progress data on page load
  const storedProgress = parseInt(localStorage.getItem('progress'));

  // Check if the stored progress is valid (between 0 and 100)
  if (!isNaN(storedProgress) && storedProgress >= 0 && storedProgress <= 100) {
    progressValue = storedProgress;
  } else {
    progressValue = 0; // Set progress to 0 if no valid progress is stored
    localStorage.setItem('progress', 0); // Update localStorage with 0% progress
  }

  // Update the progress bar to reflect the current progress
  updateProgressBar();

  resetButtonColors();
  updateButtonColors();
  updateContent(currentContentIndex);
};