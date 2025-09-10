// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// ================= WORKOUTS =================
const workouts = [
  {title:'Yoga Flow', img:'yoga.jpg', desc:'Relaxing yoga sessions for flexibility.'},
  {title:'HIIT Blast', img:'bal.jpg', desc:'High intensity interval training.'},
  {title:'Strength Training', img:'sten.jpg', desc:'Build muscle and endurance.'},
  {title:'Cardio Burn', img:'car.jpg', desc:'Burn calories fast with cardio.'},
  {title:'Pilates', img:'pil.jpg', desc:'Improve posture and core strength.'},
  {title:'CrossFit Challenge', img:'cros.jpg', desc:'Full body CrossFit routines.'},
  {title:'Meditation', img:'med.jpg', desc:'Mental relaxation and mindfulness.'},
  {title:'Dance Fitness', img:'dan.jpg', desc:'Fun cardio with dance moves.'},
  {title:'Boxing Workout', img:'box.jpg', desc:'Punch your way to fitness.'},
  {title:'TRX Suspension', img:'trx.jpg', desc:'Full body suspension training.'},
  {title:'Zumba Dance', img:'sum.jpg', desc:'Dance your way into shape.'},
  {title:'Cycling Session', img:'cyc.jpg', desc:'High energy indoor cycling workouts.'},
  {title:'Outdoor Running', img:'out.jpg', desc:'Boost stamina with running routines.'},
  {title:'Stretch Therapy', img:'sten.jpg', desc:'Deep stretches for mobility.'}
];

const workoutGrid = document.getElementById('workoutGrid');
const loadMoreBtn = document.getElementById('loadMoreWorkouts');
let workoutIndex = 0;
const workoutStep = 4;

function displayWorkouts(){
  for(let i = workoutIndex; i < workoutIndex + workoutStep && i < workouts.length; i++){
    const w = workouts[i];
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `<img src="${w.img}" alt="${w.title}"><h3>${w.title}</h3><p>${w.desc}</p>`;
    workoutGrid.appendChild(card);
  }
  workoutIndex += workoutStep;
  if(workoutIndex >= workouts.length){
    loadMoreBtn.style.display = 'none';
  }
}

displayWorkouts();
loadMoreBtn.addEventListener('click', displayWorkouts);

// ================= TRAINERS =================
const trainers = [
  {name:'John Doe', img:'tra1.jpg', desc:'Expert in HIIT and Cardio'},
  {name:'Jane Smith', img:'tra2.jpg', desc:'Yoga and Pilates Specialist'},
  {name:'Mike Johnson', img:'tra3.jpg', desc:'Strength Training Coach'},
  {name:'Emily Davis', img:'tra4.jpg', desc:'Nutrition and Fitness Expert'},
  {name:'Chris Lee', img:'tra5.jpg', desc:'Functional Training Specialist'},
  {name:'Sophia Miller', img:'tra6.jpg', desc:'CrossFit and Weightlifting Coach'},
  {name:'Daniel Brown', img:'tra7.jpg', desc:'Boxing and Martial Arts Instructor'},
  {name:'Olivia Wilson', img:'tra1.jpg', desc:'Zumba and Dance Specialist'}
];

const trainersGrid = document.getElementById('trainersGrid');
trainers.forEach(t=>{
  const card = document.createElement('div');
  card.className='card';
  card.innerHTML = `<img src="${t.img}" alt="${t.name}"><h3>${t.name}</h3><p>${t.desc}</p>`;
  trainersGrid.appendChild(card);
});

// ================= NUTRITION TIPS =================
const nutritionTips = [
  {title:'Protein Rich Diet', img:'pro.jpg', desc:'Boost muscle growth and recovery.'},
  {title:'Hydration', img:'hydr.jpg', desc:'Drink at least 2 liters of water daily.'},
  {title:'Balanced Meals', img:'bal.jpg', desc:'Include carbs, protein and veggies.'},
  {title:'Healthy Snacks', img:'sna.jpg', desc:'Opt for nuts, fruits and seeds.'},
  {title:'Smoothies', img:'smooo.jpg', desc:'Quick energy and vitamins.'},
  {title:'Meal Prep', img:'meal.jpg', desc:'Prepare meals in advance for consistency.'},
  {title:'Green Veggies', img:'green.jpg', desc:'Spinach, kale, and broccoli are key.'},
  {title:'Fruits Everyday', img:'fru.jpg', desc:'Natural source of vitamins and fiber.'},
  {title:'Omega-3 Foods', img:'omg.jpg', desc:'Include fish, walnuts, and flaxseeds.'}
];

const nutritionGrid = document.getElementById('nutritionGrid');
nutritionTips.forEach(n=>{
  const card = document.createElement('div');
  card.className='card';
  card.innerHTML = `<img src="${n.img}" alt="${n.title}"><h3>${n.title}</h3><p>${n.desc}</p>`;
  nutritionGrid.appendChild(card);
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thank you for contacting Fit Flex! We will get back to you soon.');
  contactForm.reset();
});
